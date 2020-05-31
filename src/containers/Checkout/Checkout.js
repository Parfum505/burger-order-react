import React, { useState } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactInfo from "./ContactInfo/ContactInfo";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Checkout = (props) => {
  const [activeContactInfo, setActiveContactInfo] = useState(false);

  const checkoutCancelHandler = () => {
    setActiveContactInfo(false);
    props.history.goBack();
  };
  const checkoutContinueHandler = () => {
    setActiveContactInfo(true);
    props.history.replace("/checkout/contact-info");
  };

  let summary = <Redirect to="/" />;
  if (props.ingredients) {
    const purchaseRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <>
        {purchaseRedirect}
        <CheckoutSummary
          ingredients={props.ingredients}
          checkoutCancel={checkoutCancelHandler}
          checkoutContinue={checkoutContinueHandler}
          totalPrice={props.totalPrice}
          activeContactInfo={activeContactInfo}
        />
        <Route
          path={props.match.path + "/contact-info"}
          component={ContactInfo}
        />
      </>
    );
  }
  return summary;
};
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
