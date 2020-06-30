import React from 'react';

import ContentImageSelector from './ContentImageSelector/ContentImageSelector';

import './StyleTransfer.css';

export default (props) => {
    return (
        <div className='container'>
            <div className='inputs'>
                <ContentImageSelector />
                <ContentImageSelector />
            </div>
        </div>
        
    )
}