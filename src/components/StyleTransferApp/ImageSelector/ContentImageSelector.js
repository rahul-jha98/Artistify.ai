import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Popover from '@material-ui/core/Popover';

import Slider from '../CustomSlider/CustomSlider';

const useStyles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
        maxWidth: 600,
        textAlign: 'left'
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(2),
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

class ContentImageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'stata',
            imageSrc: "./content/stata.jpg",
            imgHeight: 250,
            menulist: [
                { value: 'webcam', name: "Take a picture" },
                { value: 'upload', name: "Upload a picture" },
                { value: 'brad_pitt', name: "Brad Pitt" },
                { value: 'museum', name: "Museum" },
                { value: 'chicago', name: 'Chicago' },
                { value: 'golden_gate', name: 'Golden Gate' },
                { value: 'stata', name: 'Stata' },
                { value: 'woman', name: "Woman" },
                { value: 'statue_of_liberty', name: 'Statue of Liberty' },
            ],
            anchorEl: null,
            modalOpen: false
        }
        this.uploadRef = React.createRef();
        this.cameraRef = React.createRef();
        this.canvasRef = React.createRef();
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    }

    componentWillUnmount = () => {
        this.onModalCanceled();
    }

    onFileChange = (evt) => {
        const file = evt.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            console.log(e.target.result);
            console.log(file);
            this.setState({ imageSrc: e.target.result, image: 'upload' });
        }
        fileReader.readAsDataURL(file);
    }
    handleMenu = (event) => {
        let choice = event.target.value;
        if (choice === undefined) {
            return;
        } else if (choice === 0) {
            choice = this.state.image;
        }
        if (choice === 'webcam') {
            this.setState({ modalOpen: true });
            navigator.getUserMedia(
                {
                    video: true
                },
                (stream) => {
                    this.cameraFeed = stream;
                    this.cameraRef.current.srcObject = stream;
                    this.cameraRef.current.play();
                },
                (err) => {
                    console.error(err);
                }
            );
            return;
        } else if (choice === 'upload') {
            this.uploadRef.current.click();
            return;
        }
        this.setState({ image: choice, imageSrc: "./content/" + choice + ".jpg" });
    }


    onModalCanceled = () => {
        if (!this.cameraFeed) {
            this.setState({ modalOpen: false });
            return;
        }
        this.cameraFeed.getTracks()[0].stop();
        this.setState({ modalOpen: false });
    }

    onCameraCaptureClicked = () => {
        if (!this.cameraFeed) {
            this.setState({ modalOpen: false });
            return;
        }
        const canvasContext = this.canvasRef.current.getContext('2d');
        this.canvasRef.current.width = this.cameraRef.current.width;
        this.canvasRef.current.height = this.cameraRef.current.height;
        canvasContext.drawImage(this.cameraRef.current, 0, 0,
            this.canvasRef.current.width, this.canvasRef.current.height);
        const imageDataURL = this.canvasRef.current.toDataURL('image/jpg');
        this.cameraFeed.getTracks()[0].stop();
        this.setState({ modalOpen: false, imageSrc: imageDataURL, image: 'webcam' });
    }
    onSliderValueChange = (event, newValue) => {
        this.setState({ imgHeight: newValue });
    }

    handlePopoverOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const { classes } = this.props;


        return (
            <div className='selector-container'>
                <canvas style={{ display: 'none' }} ref={this.canvasRef} />
                <input ref={this.uploadRef} type="file" id="file" onChange={this.onFileChange} style={{ display: "none" }} accept="image/x-png,image/jpeg,.png, jpg, jpeg" />
                <img ref={this.props.refObject} className="center" src={this.state.imageSrc} height={this.state.imgHeight} alt="content_img" />
                <br />
                <div className={classes.formControl} style={{ marginBottom: '.1rem', display: 'inline-block', verticalAlign: 'middle' }}>
                    <Typography style={{ display: 'inline-block', marginRight: '6px' }}>
                        Content Image size
                    </Typography>
                    <HelpOutlineOutlinedIcon
                        fontSize='small' color='action'
                        style={{ marginBottom: -4 }}
                        aria-owns={this.state.anchorEl ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={this.handlePopoverOpen}
                        onMouseLeave={this.handlePopoverClose} />

                    <Popover
                        id="mouse-over-popover"
                        className={classes.popover}
                        classes={{
                            paper: classes.paper,
                        }}
                        open={this.state.anchorEl}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        onClose={this.state.handlePopoverClose}
                        disableRestoreFocus>
                        <Typography style={{ maxWidth: 200, textAlign: 'center' }}>A large content image leads to a more detailed output at the cost of increased processing time.</Typography>
                    </Popover>
                </div>



                <Slider
                    className={classes.formControl}
                    sliderChangeHandler={this.onSliderValueChange}
                    value={this.state.imgHeight}
                    min={250}
                    max={400}
                    step={1}
                    disabled={this.props.isDisabled} />
                <FormControl variant="outlined" className={classes.formControl} disabled={this.props.isDisabled}>
                    <InputLabel id="content-label" color='secondary'>Content Image</InputLabel>
                    <Select
                        labelId="content-label"
                        id="content-select"
                        value={this.state.image}
                        onChange={this.handleMenu}
                        label="Content Image"
                        color="secondary">
                        {this.state.menulist.map(option => (<MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>))}
                    </Select>
                </FormControl>

                <Dialog
                    open={this.state.modalOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.onModalCanceled}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">
                    <DialogTitle id="alert-dialog-slide-title">Take a picture</DialogTitle>
                    <DialogContent>
                        <video ref={this.cameraRef} width="500" height="400"></video>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.onModalCanceled} color="secondary">
                            Cancel
                    </Button>
                        <Button onClick={this.onCameraCaptureClicked} color="secondary" variant="contained">
                            Capture
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(useStyles)(ContentImageSelector);