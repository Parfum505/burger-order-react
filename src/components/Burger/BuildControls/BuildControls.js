import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from "prop-types";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];
const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current price: <strong>{props.totalPrice.toFixed(2)}</strong>&nbsp;$
    </p>
    {controls.map((item) => (
      <BuildControl
        key={`ctrl-${item.label}`}
        label={item.label}
        add={() => props.addIngredients(item.type)}
        remove={() => props.removeIngredients(item.type)}
        disabled={props.ingredients[item.type] <= 0}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.buy}
    >
      ORDER NOW
    </button>
  </div>
);

BuildControls.propTypes = {
  totalPrice: PropTypes.number,
  addIngredients: PropTypes.func.isRequired,
  removeIngredients: PropTypes.func.isRequired,
  buy: PropTypes.func.isRequired,
  purchasable: PropTypes.bool,
  ingredients: PropTypes.object,
};
export default BuildControls;
