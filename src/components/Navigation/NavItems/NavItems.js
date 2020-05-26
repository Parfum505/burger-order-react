import React from "react";
import classes from "./NavItems.css";
import NavItem from "./NavItem/NavItem";
import LoginIcon from "../../../assets/images/login.svg";

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
    <NavItem link="/authorisation">
      <img className={classes.LoginIcon} src={LoginIcon} alt="icon" />
    </NavItem>
  </ul>
);
export default NavItems;
