import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {AppBar, IconButton, Toolbar, Tooltip} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';

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



export default (props) => {  
    const classes = useStyles();  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.title}>
                <img src={LogoText} height='38px' alt='logo with text' className={classes.title}/>
            </div>

            <Tooltip title="Github Repo Link">
                <IconButton
                aria-label="github repo"
                aria-controls="menu-appbar"
                color="inherit">
                    <a href="https://github.com/rahul-jha98/Artistify.ai" style={{color: 'inherit', textDecoration:'none', height: 24}}>
                        <GitHubIcon />
                    </a>
                </IconButton>           
            </Tooltip>

            <Tooltip title="About">
                <IconButton
                aria-label="about"
                aria-controls="menu-appbar"
                color="inherit">
                    <InfoIcon />    
                </IconButton>   
            </Tooltip> 
          </Toolbar>
        </AppBar>
      </div>
    );
  }