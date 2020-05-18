import React, { Component } from "react";
import classes from "./ContactInfo.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import PropTypes from "prop-types";
import Input from "../../../components/UI/Input/Input";

class ContactInfo extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          name: "name",
          type: "text",
          placeholder: "Your name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          name: "street",
          type: "text",
          placeholder: "Your street/app",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          name: "zipCode",
          type: "text",
          placeholder: "Your zip code",
        },
        value: "",
      },
      city: {
        elementType: "input",
        elementConfig: {
          name: "city",
          type: "text",
          placeholder: "Your city",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          name: "email",
          type: "email",
          placeholder: "Your email",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayVal: "Fastest" },
            { value: "cheapest", displayVal: "Cheapest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
    };
    axios
      .post("/orders.json", order)
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  render() {
    const formElementsArray = Object.entries(this.state.orderForm);
    let form = (
      <form action="">
        {formElementsArray.map((element) => (
          <Input
            key={element[0]}
            elementType={element[1].elementType}
            elementConfig={element[1].elementConfig}
            value={element[1].value}
          />
        ))}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
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
ContactInfo.propTypes = {
  ingredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number,
  history: PropTypes.any,
};
export default ContactInfo;
