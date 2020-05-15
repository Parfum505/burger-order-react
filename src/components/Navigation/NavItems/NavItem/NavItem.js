import React from "react";
import classes from "./NavItem.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = (props) => (
  <li className={classes.NavItem}>
    <Link to={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </Link>
  </li>
);

NavItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.any,
};

export default NavItem;
