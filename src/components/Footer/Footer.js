import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './Footer.css';

import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.type === 'dark' ? '#424242' : '#eeeeee',
        padding: '32px 8px'
    }
}));
export default (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='container'>
                <Typography color='textSecondary'>
                    Made with <FavoriteIcon fontSize='small' style={{ color: '#b71c1c', marginBottom: '-3px' }} /> by <b>Rahul Jha</b>
                </Typography>

                <a href="https://github.com/rahul-jha98" rel="noopener noreferrer" target='_blank' style={{ textDecoration: 'none' }}>
                    <GitHubIcon className='fa' color='action' fontSize='small' />
                </a>
                <a href="https://www.linkedin.com/in/rahul-jha-84a204178/" rel="noopener noreferrer" target='_blank' style={{ textDecoration: 'none' }}>
                    <LinkedInIcon className='fa' color='action' fontSize='small' />
                </a>

                {/* <TwitterIcon className='fa' fontSize='small'/> */}
            </div>
        </div>
    )
}