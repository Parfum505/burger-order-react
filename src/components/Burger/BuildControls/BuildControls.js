import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from "prop-types";

const BuildControls = (props) => {
  const controls = Object.keys(props.ingredients).map((ingr) => {
    return {
      label: ingr.charAt(0).toUpperCase() + ingr.slice(1),
      type: ingr,
    };
  });
  return (
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
        {props.isAuth ? "ORDER NOW" : "SING IN TO ORDER"}
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  totalPrice: PropTypes.number,
  addIngredients: PropTypes.func.isRequired,
  removeIngredients: PropTypes.func.isRequired,
  buy: PropTypes.func.isRequired,
  purchasable: PropTypes.bool,
  isAuth: PropTypes.bool.isRequired,
  ingredients: PropTypes.object,
};
export default BuildControls;
