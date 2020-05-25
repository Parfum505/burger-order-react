import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4.0,
  error: false,
};
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  meat: 1.3,
  cheese: 0.4,
};

const addIngredient = (state, action) => {
  const newPrice =
    (state.totalPrice + INGREDIENT_PRICES[action.ingredientName]).toFixed(2) *
    1;
  const updIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updIngredients = updateObject(state.ingredients, updIngredient);
  const updState = { ingredients: updIngredients, totalPrice: newPrice };
  return updateObject(state, updState);
};
const removeIngredient = (state, action) => {
  let updatedCount = state.ingredients[action.ingredientName] - 1;
  updatedCount = updatedCount < 0 ? 0 : updatedCount;
  const newPrice =
    updatedCount > 0
      ? (
          state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        ).toFixed(2) * 1
      : state.totalPrice;
  const updIngredient = {
    [action.ingredientName]: updatedCount,
  };
  const updIngredients = updateObject(state.ingredients, updIngredient);
  const updState = { ingredients: updIngredients, totalPrice: newPrice };
  return updateObject(state, updState);
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      return addIngredient(state, action);
    }
    case actionTypes.REMOVE_INGREDIENT: {
      return removeIngredient(state, action);
    }
    case actionTypes.SET_INGREDIENTS: {
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: 4.0,
        error: false,
      });
    }
    case actionTypes.FETCH_INGREDIENTS_ERROR: {
      return updateObject(state, {
        error: true,
      });
    }
    default:
      return state;
  }
};

export default reducer;
