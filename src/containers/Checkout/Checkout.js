import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
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
    let summary = <Redirect to="/" />;
    if (this.props.ingredients) {
      const purchaseRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <>
          {purchaseRedirect}
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
    return summary;
  }
}
Checkout.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
  totalPrice: PropTypes.number,
  ingredients: PropTypes.object,
  onInitPurchase: PropTypes.func,
  purchased: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
