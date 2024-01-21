import React from "react";
import './Header.module.css';
import '../../App.scss';
import searchBar from '../../images/Search.svg'
import inLiner from '../../images/Line 21.svg'
import bagIcon from '../../images/Vector.svg'
import logo from '../../images/Logo.svg'

export const Header = ()  => {
    return(
    <div className={classes.header}>
        <div className={classes.logo}><img src={logo} alt="Logo-picture" /></div>
        <div className={className.navigation}>
            <ul className={classes.navigation__list}>
                <li className={classes.navigation__item}> <a href="/" className="navigation__link">Home</a></li>
                <li className={classes.navigation__item}><a href="/products" className="navigation__link">Products</a></li>
                <li className={classes.navigation__item}><a href="/aboutUs" className="navigation__link">About us</a></li>
                <li className={classes.navigation__item}><a href="/contactUs" className="navigation__link">Contact</a></li></ul>
        </div>
        <div className={classes.searchBar}>
                <div className={classes.searchBar}>
                    <input type="text" placeholder="Search"/>
                    <img src={searchBar} alt="Search-Icon" />
                </div>
                <div><img src={inLiner} alt="inLiner" /></div>
                <div className={classes.cart}>
                    <img src={bagIcon} alt="cart" />
                    <span className={classes.itemCount}>{itemCount}</span>    
                </div>
        </div>
    </div>

    )
}