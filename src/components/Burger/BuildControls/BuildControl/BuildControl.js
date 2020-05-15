import React from "react";
import classes from "./BuildControl.css";
import PropTypes from "prop-types";

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}
                onClick={props.remove}
                disabled={props.disabled}>Less</button>
        <button className={classes.More}
                onClick={props.add}>More</button>
    </div>
);
BuildControl.propTypes = {
    label: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    add: PropTypes.func.isRequired,
  };
export default BuildControl;