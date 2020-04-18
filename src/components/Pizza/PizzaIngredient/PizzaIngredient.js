import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './PizzaIngredient.css';

class PizzaIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'crust' ):
                ingredient = <div className={classes.Crust}></div>;
                break;
            case ( 'meat' ):
                ingredient = (
                    <div className={classes.Meat}>
                        <div className={classes.MeatInner1}></div>
                        <div className={classes.MeatInner2}></div>
                        <div className={classes.MeatInner3}></div>
                        <div className={classes.MeatInner4}></div>
                    </div>
                );
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ( 'chillysauce' ):
                ingredient = <div className={classes.ChillySauce}></div>;
                break;
            case ( 'veggies' ):
                ingredient = (
                    <div className={classes.Veggies}>
                        <div className={classes.VeggiesInner1}></div>
                        <div className={classes.VeggiesInner2}></div>
                        <div className={classes.VeggiesInner3}></div>
                        <div className={classes.VeggiesInner4}></div>
                    </div>
                );
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredient;