import React from "react";
import classes from "./Order.css";
import PropTypes from "prop-types";

const Order = (props) => (
  <div className={classes.Order}>
    <p>
      Ingredients:{" "}
      {Object.entries(props.order.ingredients).map((ingredient, i) => (
        <span
          key={i}
          style={{
            textTransform: "capitalize",
            display: "inline-block",
            margin: "0 8px",
            border: "1px solid #ccc",
            padding: "5px",
          }}
        >{`${ingredient[0]} (${ingredient[1]})`}</span>
      ))}
    </p>
    <p>
      Price: <strong>{props.order.price.toFixed(2)}&nbsp;$</strong>
    </p>
  </div>
);
Order.propTypes = {
  order: PropTypes.object.isRequired,
};
export default Order;
