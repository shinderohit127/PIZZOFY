import React from 'react';

import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <PizzaIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p style={{fontSize:"xx-large", color: "#966909"}}>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Pizza}>
            <div className={classes.Empty}></div>
            {transformedIngredients}
            <PizzaIngredient type="crust" />
        </div>
    );
};

export default pizza;