import React, {Component} from "react";
import Auxil from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5 ,
    bacon: 0.7 ,
    meat: 1.3 ,
    cheese: 0.4
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.00,
        purchasable: false,
        buying: false
    }

    buyCancelHandler = () => {
        this.setState({buying: false});
    }
    buyContinueHandler = () => {
        alert('Continue');
    }
    buyHandler = () => {
        this.setState({buying: true});
    }
    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients)
                    .reduce((total, curr) => total + curr, 0);
        this.setState({purchasable: sum > 0})
    }
    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = (this.state.totalPrice + INGREDIENT_PRICES[type]).toFixed(2);
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        if (updatedCount < 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = (this.state.totalPrice - INGREDIENT_PRICES[type]).toFixed(2);
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        return (
            <Auxil>
                <Modal show={this.state.buying} modalClosed={this.buyCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  buyCancel={this.buyCancelHandler}
                                  buyContinue={this.buyContinueHandler}
                                  totalPrice={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredients={this.addIngredientHandler}
                               removeIngredients={this.removeIngredientHandler}
                               ingredients={this.state.ingredients}
                               totalPrice={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               buy={this.buyHandler} />
            </Auxil>
        );
    }
}

export default BurgerBuilder;