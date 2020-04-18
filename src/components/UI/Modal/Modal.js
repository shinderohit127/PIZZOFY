import React, { Component } from 'react';
import pizzaLogo from '../../../assets/images/pizzalogo.png';
import classes from './Modal.css';
import Hcomp from '../../../hoc/Hcomp';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Hcomp>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                        <div className={classes.Logo1}>
                            <img src={pizzaLogo} alt="logo"></img>
                        </div>
                        <div className={classes.Logo2}>
                            <img src={pizzaLogo} alt="logo"></img>
                        </div>
                        <div className={classes.Logo3}>
                            <img src={pizzaLogo} alt="logo"></img>
                        </div>
                    {this.props.children}
                </div>
            </Hcomp>
        )
    }
}

export default Modal;