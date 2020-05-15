import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactInfo from "./ContactInfo/ContactInfo";
import PropTypes from "prop-types";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 0,
    activeContactInfo: false,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    if (query) {
      const totalPrice = query.get("price");
      query.delete("price");
      const ingredients = {};
      for (const [key, val] of query.entries()) {
        ingredients[key] = +val;
      }
      this.setState({ ingredients: ingredients, totalPrice: +totalPrice });
    }
  }

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
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
          totalPrice={this.state.totalPrice}
          activeContactInfo={this.state.activeContactInfo}
        />
        <Route
          path={this.props.match.path + "/contact-info"}
          render={(props) => (
            <ContactInfo
              totalPrice={this.state.totalPrice}
              ingredients={this.state.ingredients}
              {...props}
            />
          )}
        />
      </>
    );
  }
}
Checkout.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
  location: PropTypes.any,
};
export default Checkout;
