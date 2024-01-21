import React from "react";
import '../../App.css'
import classes from '../preNavBanner/PreNavBanner.module.css'


export const PreNavBanner = () => {
    return (
        <div className={classes.PreNavBanner}>
            <div className={classes.clear}></div>
            <div className={classes.text}><p>FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.</p></div>
            <div className={classes.currencySupport}>
            <ul>
                <li> <a href="currency" className={classes.currency}>USD</a></li>
                <li><a href="support" className={support}>Support</a></li>
            </ul>
            </div>
        </div>
    );
}