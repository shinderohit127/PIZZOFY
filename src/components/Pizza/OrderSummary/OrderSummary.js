import React, { Component } from 'react';

import Hcomp from '../../../hoc/Hcomp';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    UNSAFE_componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Hcomp>
                <h3>Your Order</h3>
                <p>A delicious pizza with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: Rs. {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Hcomp>
        );
    }
}

export default OrderSummary;