import React from "react";
import Auxil from "../../../hoc/Auxiliary";
import Button from "../../../components/UI/Button/Button";

const OrderSummary = (props) => {
    const ingredientsSummary = Object.entries(props.ingredients)
        .map((item, i) => {
            return (
                <li key={i}>
                    <span style={{textTransform: 'capitalize'}}>{item[0]}</span>:&nbsp;{item[1]}
                </li>
            );
        });

    return (
        <Auxil>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p><strong>Total price: {(props.totalPrice).toFixed(2)}&nbsp;$</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.buyCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.buyContinue}>CONTINUE</Button>
        </Auxil>
    );
};

export default OrderSummary;