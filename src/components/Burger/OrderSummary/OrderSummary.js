import React from "react";
import Auxil from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
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
            <p>Continue to Checkout?</p>
        </Auxil>
    );
};

export default orderSummary;