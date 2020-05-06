import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css"
import Auxil from "../../../hoc/Auxiliary";

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <p><strong>Total price: {(props.totalPrice).toFixed(2)}&nbsp;$</strong></p>
            <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
}
export default CheckoutSummary;