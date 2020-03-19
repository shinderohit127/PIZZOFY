import React from 'react';
import Pizza from '../../Pizza/Pizza';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1 style={{color:"#6d3909"}}>We hope it tastes well!</h1>
            <div style={{width:'100%', margin: 'auto'}}>
                <Pizza ingredients={props.ingredients}/>
            </div>
            <Button btnType="Success"
            clicked={props.checkoutContinued}>Continue</Button>
            <Button btnType="Danger"
            clicked={props.checkoutCancelled}>Cancel</Button>
        </div>
    );
}

export default checkoutSummary;