import React from "react";
import classes from "./Modal.css"

const modal = (props) => {
    const active = props.show ? classes.Active : '';
    return (
        <div className={`${classes.Modal} ${active}`}>{props.children}</div>
    );
};

export default modal;