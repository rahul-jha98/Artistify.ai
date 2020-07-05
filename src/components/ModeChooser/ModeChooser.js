import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Logo from './Logo.png';
import './ModeChooser.css';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '16px 0px',
        minHeight: '50vh',
        height: '100%',
        justifyContent: 'middle'
    },
    paper: {
        padding: theme.spacing(1),
        borderRadius: 10

    },
    button: {
        margin: '20px 0'
    }
}));

export default (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className='grid'>
                <div className='title'>
                    <img className='logoimg' src={Logo} alt='logo' />
                </div>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Link to='/lite' style={{ textDecoration: 'none' }}>
                                <Card raised elvation={6} className={classes.paper}>
                                    <Typography variant='h5' gutterBottom>
                                        Lite Mode
                                </Typography>
                                    <Typography variant='body1' color='textSecondary'>
                                        <ul style={{ listStyle: 'none' }}>
                                            <li>Use lightweight model (downlaod size 10MB)</li>
                                            <li>Slightly less detailed output compared to pro mode</li>
                                            <li>Faster output generation time</li>
                                            <li>Much less intensive compute heavy</li>
                                        </ul>
                                    </Typography>
                                    <Button className={classes.button} variant="outlined" color="primary">
                                        Go To Lite Mode
                                </Button>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to='/pro' style={{ textDecoration: 'none' }}>
                                <Card raised elvation={6} className={classes.paper}>
                                    <Typography variant='h5' gutterBottom>
                                        Pro Mode
                                </Typography>
                                    <Typography variant='body1' color='textSecondary'>
                                        <ul style={{ listStyle: 'none' }}>
                                            <li>Use superior model (download size 40MB)</li>
                                            <li>Much more refined output for given style image</li>
                                            <li>Slower output generation</li>
                                            <li>Quite intensive task for CPU</li>
                                        </ul>
                                    </Typography>
                                    <Button className={classes.button} variant="outlined" color="primary">
                                        Go To Pro Mode
                                </Button>
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}