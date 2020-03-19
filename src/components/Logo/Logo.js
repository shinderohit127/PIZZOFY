import React from 'react';

import pizzaLogo from '../../assets/images/pizzalogo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={pizzaLogo} alt="PIZZOFY!" />
    </div>
);

export default logo;