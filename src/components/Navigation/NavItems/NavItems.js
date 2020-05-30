import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./NavItems.css";
import NavItem from "./NavItem/NavItem";
import LoginIcon from "../../../assets/images/login.svg";
import LogoutIcon from "../../../assets/images/logout.svg";

export const NavItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    {props.isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
    {props.isAuth ? (
      <NavItem link="/logout">
        <img className={classes.LoginIcon} src={LogoutIcon} alt="icon" />
      </NavItem>
    ) : (
      <NavItem link="/authorisation">
        <img className={classes.LoginIcon} src={LoginIcon} alt="icon" />
      </NavItem>
    )}
  </ul>
);
NavItems.propTypes = {
  isAuth: PropTypes.any,
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.userId !== null,
  };
};
export default connect(mapStateToProps)(NavItems);
