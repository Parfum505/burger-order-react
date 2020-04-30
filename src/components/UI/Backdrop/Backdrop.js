import React from "react";
import classes from "./Backdrop.css";
import PropTypes from "prop-types";

const Backdrop = (props) => {
    let addedClasses = [classes.Backdrop];
    if (props.addClass) {
        for (let newClass of props.addClass) {
            addedClasses.push(classes[newClass]);
        }
    }
    return (
        props.show ? <div className={addedClasses.join(" ")} onClick={props.clicked}></div> : null
    );
};
Backdrop.propTypes = {
    addClass: PropTypes.array
};


export default Backdrop;