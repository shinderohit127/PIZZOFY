import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Hcomp from '../../../hoc/Hcomp';
import Button from '../../UI/Button/Button';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Hcomp>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Button className={classes.Empty} btnType="Close" clicked={props.closed}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </Button>
                <div className={classes.Logo1}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Hcomp>
    );
};

export default sideDrawer;