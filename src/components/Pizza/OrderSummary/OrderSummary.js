import React, { Component } from 'react';

import Hcomp from '../../../hoc/Hcomp';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
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
                <p style={{fontSize:"xx-large"}}>A delicious pizza with the following ingredients:</p>
                <ul style={{fontSize:"xx-large"}}>
                    {ingredientSummary}
                </ul>
                <p style={{fontSize:"xx-large"}}><strong>Total Price: Rs. {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Hcomp>
        );
    }
}

export default OrderSummary;

// import React, { Component } from 'react';

// import Hcomp from '../../../hoc/Hcomp';
// import Button from '../../UI/Button/Button';

// class OrderSummary extends Component {
//     render () {
//         const ingredientSummary = Object.keys( this.props.ingredients )
//             .map( igKey => {
//                 return (
//                     <li key={igKey}>
//                         <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
//                     </li> );
//             } );

//         return (
//             <Hcomp>
//                 <h3>Your Order!</h3>
//                 <p style={{fontSize:"xx-large"}}>A delicious pizza with the following ingredients:</p>
//                 <ul style={{fontSize:"xx-large"}}>
//                     {ingredientSummary}
//                 </ul>
//                 <p style={{fontSize:"xx-large"}}><strong style={{fontSize:"x-large"}}>Total Price: Rs. {this.props.price.toFixed( 2 )}</strong></p>
//                 <p>Continue to Checkout?</p>
//                 <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
//                 <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
//             </Hcomp>
//         );
//     }
// }

// export default OrderSummary;