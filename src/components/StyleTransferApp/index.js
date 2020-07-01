import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import Popover from '@material-ui/core/Popover';
import Skeleton from '@material-ui/lab/Skeleton';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import ContentImageSelector from './ImageSelector/ContentImageSelector';
import StyleImageSelector from './ImageSelector/StyleImageSelector';
import Slider from './CustomSlider/CustomSlider';
import './StyleTransfer.css';

const useStyles = (theme) => ({
    formControl: {
      margin: theme.spacing(1),
      marginLeft: 0,
      marginRight: 0,
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
            strength: 1,
            anchorEl: null,
            contentSrc: null,
            height: 300,
            loading: -1,
            stepper: -1
        }
        this.contentRef = React.createRef();
        this.childRef = React.createRef();
        this.bottomRef = React.createRef();
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
        this.resetOutputAnimation();
    }

    resetOutputAnimation = () => {
        this.setState({
            contentSrc: null,
            loading: 0, 
            stepper: 0,
            height: this.contentRef.current.height, 
            width: this.contentRef.current.width
        });
        console.log(this.bottomRef);
        
        setTimeout(() => {
            this.bottomRef.current.scrollIntoView({ behavior: "smooth" });
            this.setState({stepper: 1});
            setTimeout(() => {
                this.setState({stepper: 2});
                setTimeout(() => {
                    this.setState({
                        stepper: -1,
                        contentSrc: this.contentRef.current.src,
                        loading: 1,
                        isDisabled: false
                    })
                }, 500);
            }, 500);
        }, 500);
    }

    render() {
        const {classes} = this.props;
        const steps = [
            'Generating Representation',
            'Styling Images',
            'Styling Images'
        ]
        return (
            <div className='container'>
                <div className='inputs'>
                    <ContentImageSelector isDisabled={this.state.isDisabled} refObject={this.contentRef}/>
                    <StyleImageSelector isDisabled={this.state.isDisabled}/>
                </div>
                <br/>
                <div className='outputs'>
                    <div className='selector-container'>
                        <div className={classes.formControl} style={{ marginBottom: '.1rem', display: 'inline-block', verticalAlign: 'middle'}}>
                            <Typography style={{display:'inline-block', marginRight:'6px', marginLeft: 5}}>
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
                    
                            <br/>
                            <Slider 
                                className={classes.formControl} 
                                sliderChangeHandler={this.onSliderValueChange}
                                value={this.state.strength}
                                min={0}
                                max={1}
                                step={.01}
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
                            <br/>
                            {this.state.loading !== -1 ?
                                this.state.loading !== 0 ?
                                <img className="center margin gutter" src={this.state.contentSrc} height={this.state.height} alt="content_img"/>  :
                                <Skeleton className="center margin" variant='rect' width={this.state.width} height={this.state.height}/>
                                : null }
                            {this.state.stepper !==-1 ? 
                                <Stepper ref={this.bottomRef} activeStep={this.state.stepper} alternativeLabel>
                                    {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                    ))}
                                </Stepper> : null}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default withStyles(useStyles)(StyleTransferApp);