import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Popover from '@material-ui/core/Popover';

import ContentImageSelector from './ImageSelector/ContentImageSelector';
import StyleImageSelector from './ImageSelector/StyleImageSelector';
import Slider from './CustomSlider/CustomSlider';
import './StyleTransfer.css';

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

class StyleTransferApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            strength: 100,
            anchorEl: null
        }
    }

    onSliderValueChange = (event, newValue) => {
        this.setState({strength: newValue});
    }

    handlePopoverOpen = (event) => {
        this.setState({anchorEl: event.currentTarget});
    }

    handlePopoverClose = () => {
        this.setState({anchorEl: null});
    }

    onBeginStylization = () => {
        this.setState({isDisabled: true});
    }

    render() {
        const {classes} = this.props;

        return (
            <div className='container'>
                <div className='inputs'>
                    <ContentImageSelector isDisabled={this.state.isDisabled}/>
                    <StyleImageSelector isDisabled={this.state.isDisabled}/>
                </div>
                <br/>
                <div className='outputs'>
                    <div className={classes.formControl} style={{ marginBottom: '.1rem', display: 'inline-block', verticalAlign: 'middle'}}>
                        <Typography style={{display:'inline-block', marginRight:'6px'}}>
                            Stylization Strength
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
                                <Typography style={{maxWidth: 200, textAlign: 'center'}}>
                                    Stylization strength is the degree of stylization that is applied. Going left inclines the output closer to the content image while going right deviates it more towards the style image.
                                </Typography>
                            </Popover>
                    </div>
                    <br/>
                    <Slider 
                        className={classes.formControl} 
                        sliderChangeHandler={this.onSliderValueChange}
                        value={this.state.strength}
                        min={0}
                        max={100}
                        step={1}
                        disabled = {this.state.isDisabled}/>
                    <br/>
                    <Button className={classes.formControl}  
                        variant="contained" 
                        size="large" 
                        color="secondary"
                        onClick={this.onBeginStylization}
                        disabled={this.state.isDisabled}>
                        Begin Stylization
                    </Button>
                </div>
            </div>
            
        )
    }
}

export default withStyles(useStyles)(StyleTransferApp);