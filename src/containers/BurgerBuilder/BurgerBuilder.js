import React, {Component} from "react";
import Auxil from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

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
        buying: false,
        loading: false
    }

    buyCancelHandler = () => {
        this.setState({buying: false});
    }
    buyContinueHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Pavel',
                address: {
                    street: '5th Avenue ap.3',
                    zipCode: '123-454',
                    city: 'Krakow'
                },
                email: 'myemail@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({ loading: false, buying: false });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false, buying: false });
            });
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
        const newPrice = (this.state.totalPrice + INGREDIENT_PRICES[type]).toFixed(2) * 1;
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
        const newPrice = (this.state.totalPrice - INGREDIENT_PRICES[type]).toFixed(2) * 1;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        let addClasses = [];
        if (this.state.buying) {
            addClasses.push('Active');
        }

        let orderSummary = <OrderSummary ingredients={this.state.ingredients}
                                         buyCancel={this.buyCancelHandler}
                                         buyContinue={this.buyContinueHandler}
                                         totalPrice={this.state.totalPrice}/>;
        if(this.state.loading) {
            orderSummary = <Spinner />;
            addClasses.push('Loading');
        }
        return (
            <Auxil>
                <Modal addedClasses={addClasses}
                       show={this.state.buying}
                       modalClosed={this.buyCancelHandler}>
                    {orderSummary}
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