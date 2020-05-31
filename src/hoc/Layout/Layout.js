import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Auxil from "../Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";
import PropTypes from "prop-types";

const Layout = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    props.onTryAutoSingIn();
  }, []);

  const closeMobileMenuHandler = () => {
    setShowMobileMenu(false);
  };
  const openMobileMenuHandler = () => {
    setShowMobileMenu(true);
  };

    return (
      <Auxil>
        <Toolbar openMenu={openMobileMenuHandler} />
        <SideMenu
          show={showMobileMenu}
          closeMenu={closeMobileMenuHandler}
        />
        <main className={classes.Content}>{props.children}</main>
      </Auxil>
    );
}
Layout.propTypes = {
  children: PropTypes.any,
  onTryAutoSingIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSingIn: () => dispatch(actions.authCheckState()),
  };
};
export default connect(null, mapDispatchToProps)(Layout);
