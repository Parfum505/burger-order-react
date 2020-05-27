import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Auxil from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import PropTypes from "prop-types";
import * as actions from "../../store/actions/index";
import {countIngredients} from "../../store/utility";

const BurgerBuilder = (props) => {
  const [buying, setBuying] = useState(false);

  useEffect(() => {
    props.initIngredientsHandler();
  }, []);

  const buyCancelHandler = () => {
    setBuying(false);
  };
  const buyContinueHandler = () => {
    props.onInitPurchase();
    props.history.push("/checkout");
  };
  const buyHandler = () => {
    if (props.isAuth) {
      setBuying(true);
    } else {
      if (countIngredients(props.ingredients) > 0) {
        props.setRiderectPath("/checkout");
      }
      props.history.push("/authorisation");
    }
  };
  const updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce(
      (total, curr) => total + curr,
      0
    );
    return sum > 0;
  };

  const errorStyle = {
    textAlign: "center",
    marginTop: 90,
    color: "red",
    fontWeight: "bold",
  };
  let addClasses = [],
    orderSummary = null;
  let burger = props.error ? (
    <p style={errorStyle}>Ingredients can&apos;t be loaded.</p>
  ) : (
    <Spinner />
  );
  if (props.ingredients) {
    burger = (
      <Auxil>
        <Burger ingredients={props.ingredients} />
        <BuildControls
          addIngredients={props.addIngredientHandler}
          removeIngredients={props.removeIngredientHandler}
          ingredients={props.ingredients}
          totalPrice={props.totalPrice}
          purchasable={updatePurchaseState(props.ingredients)}
          buy={buyHandler}
          isAuth={props.isAuth}
        />
      </Auxil>
    );
    orderSummary = (
      <OrderSummary
        ingredients={props.ingredients}
        buyCancel={buyCancelHandler}
        buyContinue={buyContinueHandler}
        totalPrice={props.totalPrice}
      />
    );
  }

  return (
    <Auxil>
      <Modal
        addedClasses={addClasses}
        show={buying}
        modalClosed={buyCancelHandler}
      >
        {orderSummary}
      </Modal>
      {burger}
    </Auxil>
  );
};
BurgerBuilder.propTypes = {
  history: PropTypes.any,
  ingredients: PropTypes.object,
  totalPrice: PropTypes.number.isRequired,
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  initIngredientsHandler: PropTypes.func.isRequired,
  onInitPurchase: PropTypes.func.isRequired,
  setRiderectPath: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientHandler: (ingName) => dispatch(actions.addIngredient(ingName)),
    removeIngredientHandler: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    initIngredientsHandler: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    setRiderectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
