import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Popover from '@material-ui/core/Popover';

import Slider from '../CustomSlider/CustomSlider';
import allLinks from './wikiartLinks';

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

class StyleImageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'seaport',
            imageSrc: "./style/seaport.jpg",
            imgHeight: 250,
            menulist: [
                { value: 'upload', name: "Upload a picture" },
                { value: 'random', name: 'Random image from wikiart.org' },
                { value: 'comic', name: "Comic" },
                { value: 'clouds', name: 'Clouds' },
                { value: 'lion', name: "Colorful Lion" },
                { value: 'towers', name: 'Towers' },
                { value: 'sketch', name: 'Sketch' },
                { value: 'udnie', name: 'Udnie' },
                { value: 'seaport', name: 'Seaport' },
            ],
            anchorEl: null
        }
        this.uploadRef = React.createRef();
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
        console.log(choice);
        if (choice === 'random') {
            const index = Math.floor(Math.random() * allLinks.length);
            console.log(allLinks[index]);
            this.setState({ image: 'random', imageSrc: allLinks[index] })
            return;
        } else if (choice === 'upload') {
            this.uploadRef.current.click();
            return;
        }
        this.setState({ image: choice, imageSrc: "./style/" + choice + ".jpg" });
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
                <input ref={this.uploadRef} type="file" id="file" onChange={this.onFileChange} style={{ display: "none" }} accept="image/x-png,image/jpeg,.png, jpg, jpeg" />
                <img crossorigin="anonymous" ref={this.props.refObject} className="center" src={this.state.imageSrc} height={this.state.imgHeight} alt="style_img" />
                <br />
                <div className={classes.formControl} style={{ marginBottom: '.1rem', display: 'inline-block', verticalAlign: 'middle' }}>
                    <Typography style={{ display: 'inline-block', marginRight: '6px' }}>
                        Style Image size
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
                        disableRestoreFocus
                    >
                        <Typography style={{ maxWidth: 200, textAlign: 'center' }}>
                            Changing the size of style image affects the texture seen by the network thus changing the pattern used in generated image.
                            </Typography>
                    </Popover>
                </div>



                <Slider
                    className={classes.formControl}
                    sliderChangeHandler={this.onSliderValueChange}
                    value={this.state.imgHeight}
                    min={100}
                    max={400}
                    step={1}
                    disabled={this.props.isDisabled} />
                <FormControl variant="outlined" className={classes.formControl} disabled={this.props.isDisabled}>
                    <InputLabel id="content-label" color="secondary">Style Image</InputLabel>
                    <Select
                        labelId="content-label"
                        id="content-select"
                        value={this.state.image}
                        onClick={this.handleMenu}
                        color="secondary"
                        label="Style Image">
                        {this.state.menulist.map(option => (<MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>))}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default withStyles(useStyles)(StyleImageSelector);