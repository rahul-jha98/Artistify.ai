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

class ContentImageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'stata',
            imageSrc: "./content/stata.jpg",
            imgHeight: 250,
            menulist: [
                {value: 'webcam', name: "Take a picture"},
                {value: 'upload', name: "Upload a picture"},
                {value: 'chicago', name: 'Chicago'},
                {value: 'diana', name: 'Diana'},
                {value: 'golden_gate', name: 'Golden Gate'},
                {value: 'stata', name: 'Stata'},
                {value: 'statue_of_liberty', name: 'Statue of Liberty'},
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
            this.setState({imageSrc: e.target.result, image: 'upload'});
        }
        fileReader.readAsDataURL(file);
    }
    handleMenu = (event) => {
        if (event.target.value === 'webcam') {
            return;
        } else if (event.target.value === 'upload') {
            this.uploadRef.current.click();
            return;
        } 
        this.setState({image: event.target.value, imageSrc: "./content/" + event.target.value + ".jpg"});
    }

    onSliderValueChange = (event, newValue) => {
        this.setState({imgHeight: newValue});
    }

    handlePopoverOpen = (event) => {
        this.setState({anchorEl: event.currentTarget});
    }

    handlePopoverClose = () => {
        this.setState({anchorEl: null});
    }

    // setImage(element, selectedValue) {
    //     if (selectedValue === 'file') {
    //       console.log('file selected');
    //       this.fileSelect.onchange = (evt) => {
    //         const f = evt.target.files[0];
    //         const fileReader = new FileReader();
    //         fileReader.onload = ((e) => {
    //           element.src = e.target.result;
    //         });
    //         fileReader.readAsDataURL(f);
    //         this.fileSelect.value = '';
    //       }
    //       this.fileSelect.click();
    //     } else if (selectedValue === 'pic') {
    //       this.openModal(element);
    //     } else if (selectedValue === 'random') {
    //       const randomNumber = Math.floor(Math.random()*links.length);
    //       element.src = links[randomNumber];
    //     } else {
    //       element.src = 'images/' + selectedValue + '.jpg';
    //     }
    //   }

    render() {
        const {classes} = this.props;
        

        return (
            <div className='selector-container'>
                <input ref={this.uploadRef} type="file" id="file" onChange={this.onFileChange} style={{display: "none"}} accept="image/x-png,image/jpeg"/>
                <img ref={this.props.refObject} className="center" src={this.state.imageSrc} height={this.state.imgHeight} alt="content_img"/>
                <br/>
                <div className={classes.formControl} style={{ marginBottom: '.1rem', display: 'inline-block', verticalAlign: 'middle'}}>
                    <Typography style={{display:'inline-block', marginRight:'6px'}}>
                        Content Image size
                    </Typography>
                    <HelpOutlineOutlinedIcon  
                        fontSize='small' color='action' 
                        style={{marginBottom:-4}}
                        aria-owns={this.state.anchorEl ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={this.handlePopoverOpen}
                        onMouseLeave={this.handlePopoverClose}/>

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
                            <Typography style={{maxWidth: 200, textAlign: 'center'}}>A large content image leads to a more detailed output at the cost of increased processing time.</Typography>
                        </Popover>
                </div>
                
      
                
                <Slider 
                    className={classes.formControl} 
                    sliderChangeHandler={this.onSliderValueChange}
                    value={this.state.imgHeight}
                    min={250}
                    max={400}
                    step={1}
                    disabled={this.props.isDisabled}/>
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
            </div>
        )
    }
}

export default withStyles(useStyles)(ContentImageSelector);