import React from "react";
import classes from "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);
export default NavItems;
