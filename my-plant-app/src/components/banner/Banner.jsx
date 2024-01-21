import React from "react";
import './Banner.module.css';
import '../../App.scss';



export const Banner = ()  => {
    return(
    <div className={classes.banner}>
        <div className={classes.left}></div>
        <div className={className.center}>
                <h1>Plants are our Passion</h1>
                <p>Even if you don’t have a green thumb, you can still have a green home.</p>
                <button>GET PLANTING</button>
        </div>
        <div className={classes.right}></div>
    </div>

    )
}