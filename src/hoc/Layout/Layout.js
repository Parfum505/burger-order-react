import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Auxil from "../Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";
import PropTypes from "prop-types";

class Layout extends Component {
  state = {
    showMobileMenu: false,
  };
  componentDidMount() {
    this.props.onTryAutoSingIn();
  }
  closeMobileMenuHandler = () => {
    this.setState({ showMobileMenu: false });
  };
  openMobileMenuHandler = () => {
    this.setState({ showMobileMenu: true });
  };
  render() {
    return (
      <Auxil>
        <Toolbar openMenu={this.openMobileMenuHandler} />
        <SideMenu
          show={this.state.showMobileMenu}
          closeMenu={this.closeMobileMenuHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxil>
    );
  }
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
