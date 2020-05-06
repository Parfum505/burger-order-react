import React, {Component} from "react";
import classes from "./ContactInfo.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactInfo extends Component{
    state = {
        name: '',
        email: '',
        address: {
            city: '',
            street: '',
            zipCode: '',
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
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
                this.setState({ loading: false});
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }
    render() {
        let form = (
            <form action="">
                <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
                <input className={classes.Input} type="text" name="city" placeholder="Your city"/>
                <input className={classes.Input} type="text" name="zipCode" placeholder="Your zip code"/>
                <input className={classes.Input} type="text" name="street" placeholder="Your street/app"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactInfo}>
                <h4>Enter your Contact Info</h4>
                {form}
            </div>
        );
    }
}
export default ContactInfo;