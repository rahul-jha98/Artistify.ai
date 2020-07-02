import * as tf from '@tensorflow/tfjs';
tf.ENV.set('WEBGL_PACK', false);  // This needs to be done otherwise things run very slow v1.0.4

class StyleTransferModel {
    constructor(path_style_network, path_transformer_network) {
        this.path_style_network = path_style_network;
        this.path_transformer_network = path_transformer_network;
        Promise.all([
            this.loadModelFromPath(path_style_network),
            this.loadModelFromPath(path_transformer_network)
        ]).then(([styleNet, transformerNet]) => {
            this.styleNetwork = styleNet;
            this.transformerNetwork = transformerNet;
            console.log("Everything went fine");
        }).catch(err => {
            console.log("Something went wrong");
            console.log(err);
        })
    }


    async loadModelFromPath(path_to_model) {
        return await tf.loadGraphModel(path_to_model);
    }

    setValueAccessors(contentRef, styleRef, outputRef, progressFunction) {
        this.contentRef = contentRef;
        this.styleRef = styleRef;
        this.outputRef = outputRef;
        this.updateProgressStepTo= progressFunction;
    }

    getSyledImage(onImageGenerated) {
        this.runModel(onImageGenerated);
        // setTimeout(() => {
        //     this.updateProgressStepTo(1);
        //     setTimeout(() => {
        //         this.updateProgressStepTo(2);
        //         setTimeout(() => {
        //             onImageGenerated(this.contentRef.current.src);
        //         }, 1000);
        //     }, 500);
        // }, 500);
    }

    async runModel(onImageGenerated) {
        await tf.nextFrame();
        let features = await tf.tidy(() => {
            return this.styleNetwork.predict(
                tf.browser.fromPixels(this.styleRef.current).toFloat().div(tf.scalar(255)).expandDims());
        });

        await tf.nextFrame();
        await tf.nextFrame();
        const stylizedImage = await tf.tidy(() => {
            return this.transformerNetwork.predict(
                [tf.browser.fromPixels(this.contentRef.current).toFloat().div(tf.scalar(255)).expandDims(), 
                features]).squeeze();
          })
        await tf.nextFrame();
        onImageGenerated(this.contentRef.current.src);  
        await tf.browser.toPixels(stylizedImage, this.outputRef.current);
        features.dispose();  // Might wanna keep this around
        stylizedImage.dispose();
    }
}

export default StyleTransferModel;