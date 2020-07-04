import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <React.Fragment>
          <Link to='/lite' replace>Lite Mode</Link>
          <Link to='/pro' replace>Pro Mode</Link>
        </React.Fragment>
    )
}