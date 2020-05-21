import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";
import PropTypes from "prop-types";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <p>
        <strong>Total price: {props.totalPrice.toFixed(2)}&nbsp;$</strong>
      </p>
      <Button btnType="Danger" clicked={props.checkoutCancel}>
        CANCEL
      </Button>
      {props.activeContactInfo ? null : (
        <Button btnType="Success" clicked={props.checkoutContinue}>
          CONTINUE
        </Button>
      )}
    </div>
  );
};

CheckoutSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number,
  checkoutCancel: PropTypes.func.isRequired,
  checkoutContinue: PropTypes.func.isRequired,
  activeContactInfo: PropTypes.bool,
};

export default CheckoutSummary;
