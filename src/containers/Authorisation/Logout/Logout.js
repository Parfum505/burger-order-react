import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../../store/actions";

const Logout = (props) => {
  useEffect(() => {
    props.logoutHandler();
  }, []);
  return <Redirect to="/" />;
};
Logout.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutHandler: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
