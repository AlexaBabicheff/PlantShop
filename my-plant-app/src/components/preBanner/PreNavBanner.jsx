import React from "react";
import '../../App.scss';
import classes from './PreNavBanner.module.css';


export const PreNavBanner = () => {
    return (
        <div className={classes.preNavBanner}>
            <div className={classes.clear}></div>
            <div className={classes.text}><p>FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.</p></div>
            <div className={classes.currencySupport}>
            <ul>
                <li> <a href="currency" className={classes.currency}>USD</a></li>
                <li><a href="support" className={classes.support}>Support</a></li>
            </ul>
            </div>
        </div>
    );
}