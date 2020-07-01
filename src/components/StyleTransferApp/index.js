import React from 'react';

import ContentImageSelector from './ImageSelector/ContentImageSelector';
import StyleImageSelector from './ImageSelector/StyleImageSelector';
import './StyleTransfer.css';

export default (props) => {
    return (
        <div className='container'>
            <div className='inputs'>
                <ContentImageSelector />
                <StyleImageSelector />
            </div>
        </div>
        
    )
}