import React from 'react';
import pizzaLogo from '../../assets/images/pizzalogo.png';
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]});
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span style={{textTransform: 'capitalize', display: 'inline-block', margin:'0 10px', padding: '5px', border: '1px solid #ccc', borderRadius: '10px'}}>{ig.name} ({ig.amount})</span>;
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>INR {Number.parseFloat(props.price).toFixed(2)} </strong></p>
            <div className={classes.Logo1}>
                <img src={pizzaLogo} alt="PIZZOFY!"></img>
            </div>
            <div className={classes.Logo2}>
                <img src={pizzaLogo} alt="PIZZOFY!"></img>
            </div>
            <div className={classes.Logo3}>
                <img src={pizzaLogo} alt="PIZZOFY!"></img>
            </div>
        </div>
    );
}

export default order;