import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={classes.InputElement} value={props.value}>
          {props.elementConfig.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.displayVal}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor="">
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.any,
};
export default Input;