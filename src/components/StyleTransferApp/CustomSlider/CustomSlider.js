import React from 'react';

import { withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const CustomSlider = withStyles((theme) => ({
    root: {
      height: 6,
      color: theme.palette.primary.light
    },
    thumb: {
      height: 18,
      width: 18,
      marginTop: -6,
      marginLeft: -9,
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      color: '#cfd8dc',
      height: 6,
      borderRadius: 4,
    },
    rail: {
      color: '#cfd8dc',
      height: 6,
      borderRadius: 4,
    },
  }))(Slider);

export default (props) => {
    return (
        <CustomSlider 
            onChange={props.sliderChangeHandler} 
            {...props}/>
    )
}