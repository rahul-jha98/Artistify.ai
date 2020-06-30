import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Slider from '../CustomSlider/CustomSlider';

const useStyles = (theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: 600
    }
  });

class ContentImageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            imgHeight: 250
        }
    }

    handleMenu = (event) => {
        this.setState({image: event.target.value});
    }

    onSliderValueChange = (event, newValue) => {
        this.setState({imgHeight: newValue});
    }

    render() {
        const {classes} = this.props;

        return (
            <div className='selector-container'>
                <img className="center" src="https://reiinakano.com/arbitrary-image-stylization-tfjs/images/stata.jpg" height={this.state.imgHeight} alt="content_img"/>
                <br/>
                <Slider 
                    className={classes.formControl} 
                    sliderChangeHandler={this.onSliderValueChange}
                    min={250}
                    max={400}
                    step={1}/>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="content-label">Content Image</InputLabel>
                    <Select
                        labelId="content-label"
                        id="content-select"
                        value={this.state.image}
                        onChange={this.handleMenu}
                        label="Content Image">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default withStyles(useStyles)(ContentImageSelector);