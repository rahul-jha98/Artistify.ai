import React from 'react';

import AppBar from '../AppBar/AppBar';
import StyleTranferApp from '../StyleTransferApp';
import Footer from '../Footer/Footer';

export default (props) => {  
    return (
        <React.Fragment>
            <AppBar />
            <div className='content-area'>
                <StyleTranferApp/>
                <Footer />
            </div>
        </React.Fragment>
        
    )
}