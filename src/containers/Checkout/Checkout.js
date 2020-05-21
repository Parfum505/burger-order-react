import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactInfo from "./ContactInfo/ContactInfo";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Checkout extends Component {
  state = {
    activeContactInfo: false,
  };

  checkoutCancelHandler = () => {
    this.setState({ activeContactInfo: false });
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.setState({ activeContactInfo: true });
    this.props.history.replace("/checkout/contact-info");
  };

  render() {
    return (
      <>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
          totalPrice={this.props.totalPrice}
          activeContactInfo={this.state.activeContactInfo}
        />
        <Route
          path={this.props.match.path + "/contact-info"}
          component={ContactInfo}
        />
      </>
    );
  }
}
Checkout.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
  totalPrice: PropTypes.number.isRequired,
  ingredients: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};
export default connect(mapStateToProps)(Checkout);
