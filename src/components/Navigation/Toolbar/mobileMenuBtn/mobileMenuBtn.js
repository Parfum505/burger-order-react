import React from "react";
import classes from "./mobileMenuBtn.css";

const MobileMenuBtn = (props) => (
    <div className={classes.MobileMenuBtn} onClick={props.clicked}>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </div>
);

export default MobileMenuBtn;