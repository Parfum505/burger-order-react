import React from "react";
import classes from "./Backdrop.css";

const Backdrop = (props) => {
    let addedClasses = [classes.Backdrop];
    if (props.addClass) {
        for (let newClass of props.addClass) {
            addedClasses.push(classes[props.addClass]);
        }
    }
    return (
        props.show ? <div className={addedClasses.join(" ")} onClick={props.clicked}></div> : null
    );
}


export default Backdrop;