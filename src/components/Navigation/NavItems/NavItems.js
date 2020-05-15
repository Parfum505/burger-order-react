import React from "react";
import classes from "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const NavItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/checkout">Checkout</NavItem>
  </ul>
);
export default NavItems;