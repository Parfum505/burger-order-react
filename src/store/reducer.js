import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4.0,
};
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  meat: 1.3,
  cheese: 0.4,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      const newPrice =
        (state.totalPrice + INGREDIENT_PRICES[action.ingredientName]).toFixed(
          2
        ) * 1;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: newPrice,
      };
    }
    case actionTypes.REMOVE_INGREDIENT: {
      let updatedCount = state.ingredients[action.ingredientName] - 1;
      updatedCount = updatedCount < 0 ? 0 : updatedCount;
      const newPrice =
        updatedCount > 0
          ? (
              state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            ).toFixed(2) * 1
          : state.totalPrice;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: updatedCount,
        },
        totalPrice: newPrice,
      };
    }
    default:
      return state;
  }
};

export default reducer;
