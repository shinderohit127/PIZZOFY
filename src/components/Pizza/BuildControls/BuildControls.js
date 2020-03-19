import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Veggies', type: 'aveggies' },
    { label: 'Chilly Sauce', type: 'chillysauce' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'bmeat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p style={{color: "#6d3909"}}><strong>Current Price: Rs. {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;