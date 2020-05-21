import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import Auxil from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import PropTypes from "prop-types";

class BurgerBuilder extends Component {
  state = {
    buying: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://burger-order-react.firebaseio.com/ingredients.json")
    //   .then((resp) => {
    //     this.setState({ ingredients: resp.data });
    //   })
    //   .catch(() => this.setState({ error: true }));
  }

  buyCancelHandler = () => {
    this.setState({ buying: false });
  };
  buyContinueHandler = () => {
    this.props.history.push("/checkout");
  };
  buyHandler = () => {
    this.setState({ buying: true });
  };
  updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce(
      (total, curr) => total + curr,
      0
    );
    return sum > 0;
  };

  render() {
    const errorStyle = { textAlign: "center", marginTop: 90, color: "red" };
    let addClasses = [],
      orderSummary = null;
    let burger = this.state.error ? (
      <p style={errorStyle}>Ingredients can&apos;t be loaded.</p>
    ) : (
      <Spinner />
    );
    if (this.props.ingredients) {
      burger = (
        <Auxil>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngredients={this.props.addIngredientHandler}
            removeIngredients={this.props.removeIngredientHandler}
            ingredients={this.props.ingredients}
            totalPrice={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            buy={this.buyHandler}
          />
        </Auxil>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          buyCancel={this.buyCancelHandler}
          buyContinue={this.buyContinueHandler}
          totalPrice={this.props.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      addClasses.push("Loading");
    }
    return (
      <Auxil>
        <Modal
          addedClasses={addClasses}
          show={this.state.buying}
          modalClosed={this.buyCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxil>
    );
  }
}
BurgerBuilder.propTypes = {
  history: PropTypes.any,
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientHandler: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    removeIngredientHandler: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
