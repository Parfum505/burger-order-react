import React from "react";
import classes from "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import PropTypes from "prop-types";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <MobileMenuBtn clicked={props.openMenu} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavItems />
    </nav>
  </header>
);
Toolbar.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default React.memo(Toolbar);
