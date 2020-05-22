import * as actionTypes from "../actions/actionTypes";

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
    case actionTypes.SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.ingredients,
        error: false,
      };
    }
    case actionTypes.FETCH_INGREDIENTS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
