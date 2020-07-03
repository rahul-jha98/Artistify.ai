import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";


import AppBar from '../AppBar/AppBar';
import StyleTranferApp from '../StyleTransferApp';
import Footer from '../Footer/Footer';

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#0091ea',
      },
    },
  });

export default (props) => {  
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline/>
                <AppBar />
                <div className='content-area'>
                    <StyleTranferApp styleNetPath='./models/lite/style/model.json' transferNetPath='./models/lite/transformer/model.json'/>
                    <Footer />
                </div>
            </React.Fragment>
        </ThemeProvider>        
    )
}