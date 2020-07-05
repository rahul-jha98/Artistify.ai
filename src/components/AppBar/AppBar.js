import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar, IconButton, Toolbar, Tooltip,
  Dialog, Typography, Slide
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

import LogoText from './logotext.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    verticalAlign: 'bottom'
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <img src={LogoText} height='38px' alt='logo with text' className={classes.title} />
          </div>

          <Tooltip title="Github Repo Link">
            <IconButton
              aria-label="github repo"
              aria-controls="menu-appbar"
              color="inherit">
              <a href="https://github.com/rahul-jha98/Artistify.ai" rel="noopener noreferrer" target='_blank' style={{ color: 'inherit', textDecoration: 'none', height: 24 }}>
                <GitHubIcon />
              </a>
            </IconButton>
          </Tooltip>

          <Tooltip title="About">
            <IconButton
              aria-label="about"
              aria-controls="menu-appbar"
              color="inherit"
              onClick={handleClickOpen}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Toolbar>
          <Typography variant="h5" style={{ textAlign: 'center' }} className={classes.title}>
            <b>About Artistify.ai</b>
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <div className='container'>
          <Typography variant='h5'>
            How is this sorcery happening?
            </Typography>
          <Typography style={{ fontSize: '1rem' }} gutterBottom color='textSecondary'>
            Neural Style Transfer is an algorithm that aims at recreating the given content image drawn in the style of another image known
            as the style image. Now, with a photograph as content and a painting as style image we can see some wonderful art being generated.
              <br />
            <br />
              Yet, the original implementation of Neural Style Transfer was slow taking many iterations over the image which took anywhere around
              a few minutes to hours. But recently algorithms have been proposed to make this process much faster. We have reached a level where we
              can apply it in real time between any two images. This arbitrary style transfer algorithm is what is running in the browser to make
              the magic happens.
            </Typography>
          <br />
          <br />
          <Typography variant='h5'>
            What's going on inside the model?
            </Typography>
          <Typography style={{ fontSize: '1rem' }} gutterBottom color='textSecondary'>
            The complete model is divided in two parts : Style Extractor and Transformer Model.
              <br />
            <b>The Style Extractor</b> is responsible for extracting the style representation from the given image. Passing the content and style images
              through this gives us their respective style feature representation. Then their weighted average is taken to incorporate varying degree of stylization
              strength in the model.
              <br />
            <b>The Transformer</b> is responsible for generating the target image for a given style features. It is trained to generate images that
              have similar content structure as content image but since it uses the syle image features when the model creates the image it is forced
              to use the style features giving us the styled image as the output.
              <br />
              I have tried creating a basic implementation of arbitrary style transfer using AdaIN in a jupyter-notebook for understanding. It gives a rough idea
              of the working so that you can get a clear idea.
              <Typography style={{ fontSize: '1rem' }} gutterBottom color='primary'>
              <a href="https://github.com/rahul-jha98/StyleTransfer_using_AdaIN" rel="noopener noreferrer" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>The repo can be found here.</a>
            </Typography>
          </Typography>
          <br />
          <br />
          <Typography variant='h5'>
            Is my data safe?
            </Typography>
          <Typography style={{ fontSize: '1rem' }} gutterBottom color='textSecondary'>
            If you have used the application you might have noticed the slight lag in UI when
            the actual stylization is going on. Well, it happens because the whole model is running
            right in your browser using your CPU for the task. Thus there is no need to send any image
            to any server for processing and hence your data never leaves your system.
            </Typography>
          <br />
          <br />
          <Typography variant='h5'>
            What is the difference between lite and normal mode?
            </Typography>
          <Typography style={{ fontSize: '1rem' }} gutterBottom color='textSecondary'>
            While lite mode requires download of model of size around 10MB, normal mode downloads a model of size 45 MB.
              The <b>normal mode</b> uses the original implementation from paper i.e. Inception-v3 model for style extraction and plain
              convolution layers based transformer model. The <b>lite mode</b> on the other hand uses the light weight
              MobileNet-v2 for extracting styles and depthwise separable convolution layer for the transformer network.
            </Typography>

        </div>
      </Dialog>
    </div>
  );
}