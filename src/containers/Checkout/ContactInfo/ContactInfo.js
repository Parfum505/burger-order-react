import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./ContactInfo.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../../components/UI/Spinner/Spinner";
import PropTypes from "prop-types";
import Input from "../../../components/UI/Input/Input";
import * as action from "../../../store/actions/index";
import { updateObject, checkValidation } from "../../../store/utility";

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
        validation: {
          required: true,
          minLength: 2,
          valid: false,
        },
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          name: "street",
          type: "text",
          placeholder: "Your street/app",
        },
        value: "",
        validation: {
          required: true,
          valid: false,
        },
        touched: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          name: "zipCode",
          type: "text",
          placeholder: "Your zip code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true,
          valid: false,
        },
        touched: false,
      },
      city: {
        elementType: "input",
        elementConfig: {
          name: "city",
          type: "text",
          placeholder: "Your city",
        },
        value: "",
        validation: {
          required: true,
          valid: false,
        },
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          name: "email",
          type: "email",
          placeholder: "Your email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
          valid: false,
        },
        touched: false,
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
        validation: {
          valid: true,
        },
      },
    },
    formIsValid: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      userId: this.props.userId,
      orderData: formData,
    };
    this.props.onOrderBurger(order, this.props.token);
  };
  inputChangedHandler = (event, elementId) => {
    const updatedFormElement = updateObject(this.state.orderForm[elementId], {
      value: event.target.value,
      touched: true,
      validation: updateObject(this.state.orderForm[elementId].validation, {
        valid: checkValidation(
          event.target.value,
          this.state.orderForm[elementId].validation
        ),
      }),
    });
    const updatedForm = updateObject(this.state.orderForm, {
      [elementId]: updatedFormElement,
    });
    let formIsValid = true;
    for (const elementId in updatedForm) {
      if (updatedForm[elementId].validation) {
        formIsValid = updatedForm[elementId].validation.valid && formIsValid;
      }
    }
    this.setState({ orderForm: updatedForm, formIsValid: formIsValid });
  };
  render() {
    const formElementsArray = Object.entries(this.state.orderForm);
    let form = (
      <form action="" onSubmit={this.orderHandler}>
        {formElementsArray.map((element) => (
          <Input
            key={element[0]}
            elementType={element[1].elementType}
            elementConfig={element[1].elementConfig}
            value={element[1].value}
            changed={(event) => this.inputChangedHandler(event, element[0])}
            invalid={!element[1].validation.valid}
            touched={element[1].touched}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
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
  onOrderBurger: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.any,
  userId: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (order, token) =>
      dispatch(action.purchaseBurger(order, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactInfo, axios));
