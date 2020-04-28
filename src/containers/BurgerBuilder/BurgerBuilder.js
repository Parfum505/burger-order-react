import React, {Component} from "react";
import Auxil from "./../../hoc/Auxiliary";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = Math.round((this.state.totalPrice + INGREDIENT_PRICES[type]) * 100) / 100;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
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
        const newPrice = Math.round((this.state.totalPrice - INGREDIENT_PRICES[type]) * 100) / 100;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxil>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredients={this.addIngredientHandler}
                               removeIngredients={this.removeIngredientHandler}
                               disabled={disabledInfo}
                />
            </Auxil>
        );
    }
}

export default BurgerBuilder;