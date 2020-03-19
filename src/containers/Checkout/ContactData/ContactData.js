import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        number:'',
        address: {
            area: '',
            bldgNo: '',
            zipCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Rohit',
                address: {
                    bldgNo: '65',
                    zipCode: '400089',
                    area: 'tilak nagar'
                },
                email: 'shinderohit127@gmail.com'
            },
            paymentMethod: 'CoD'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading: false});
        });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" placeholder="Your name" name="name"/>
                <input className={classes.Input}  type="string" placeholder="Your email" name="email"/>
                <input className={classes.Input}  type="string" placeholder="Your Contact number" name="Contact Number"/>
                <input className={classes.Input}  type="string" placeholder="Your postal code" name="Zip code"/>
                <Button btnType="Success" clicked={this.orderHandler}>Place Your Order!</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact details:</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;