import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";
import PropTypes from "prop-types";

const Burger = ({ ingredients }) => {
  let addedIngredient = Object.keys(ingredients)
    .map((ingKey) => {
      return [...Array(ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, item) => {
      return arr.concat(item);
    }, []);
  if (!addedIngredient.length) {
    addedIngredient = <p>Please add some ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {addedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};
export default Burger;
