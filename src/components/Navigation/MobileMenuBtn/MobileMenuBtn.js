import React from "react";
import classes from "./MobileMenuBtn.css";
import PropTypes from "prop-types";

const MobileMenuBtn = (props) => (
  <div className={classes.MobileMenuBtn} onClick={props.clicked}>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
  </div>
);

MobileMenuBtn.propTypes = {
  clicked: PropTypes.func.isRequired,
};
export default MobileMenuBtn;
