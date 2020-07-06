import * as tf from '@tensorflow/tfjs';
tf.ENV.set('WEBGL_PACK', false); 

class StyleTransferModel {
    constructor(path_style_network, path_transformer_network) {
        this.path_style_network = path_style_network;
        this.path_transformer_network = path_transformer_network;
    }

    donwloadModel(onDownloadSuccessful, onDownloadFailed) {
        Promise.all([
            this.loadModelFromPath(this.path_style_network),
            this.loadModelFromPath(this.path_transformer_network)
        ]).then(([styleNet, transformerNet]) => {
            this.styleNetwork = styleNet;
            this.transformerNetwork = transformerNet;
            onDownloadSuccessful();
        }).catch(err => {
            onDownloadFailed();
        })
    }

    async loadModelFromPath(path_to_model) {
        return await tf.loadGraphModel(path_to_model);
    }

    setValueAccessors(contentRef, styleRef, outputRef) {
        this.contentRef = contentRef;
        this.styleRef = styleRef;
        this.outputRef = outputRef;
    }

    async generateStyledImage(style_ratio, onImageGenerated, onError) {
        await tf.nextFrame();
        await tf.nextFrame();
        await tf.nextFrame();
        try {
            let features = await tf.tidy(() => {
                return this.styleNetwork.predict(
                    tf.browser.fromPixels(this.styleRef.current).toFloat().div(tf.scalar(255)).expandDims());
            });

            if (style_ratio !== 1.0) {
                const content_features = await tf.tidy(() => {
                    return this.styleNetwork.predict(tf.browser.fromPixels(this.contentRef.current).toFloat().div(tf.scalar(255)).expandDims());
                });
                const style_features = features;

                features = await tf.tidy(() => {
                    const styleFeaturesScaled = style_features.mul(tf.scalar(style_ratio));
                    const contentFeaturesScaled = content_features.mul(tf.scalar(1.0 - style_ratio));
                    return styleFeaturesScaled.addStrict(contentFeaturesScaled);
                });

                content_features.dispose();
                style_features.dispose();
            }

            const stylizedImage = await tf.tidy(() => {
                return this.transformerNetwork.predict(
                    [tf.browser.fromPixels(this.contentRef.current).toFloat().div(tf.scalar(255)).expandDims(),
                        features]).squeeze();
            })
            await tf.nextFrame();
            onImageGenerated(this.contentRef.current.src);
            await tf.browser.toPixels(stylizedImage, this.outputRef.current);
            features.dispose(); 
            stylizedImage.dispose();
        } catch (err) {
            console.log(err);
            onError();
        }

    }
}

export default StyleTransferModel;