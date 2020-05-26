import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Authorisation.css";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import PropTypes from "prop-types";

class Authorisation extends Component {
  state = {
    controls: {
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
      password: {
        elementType: "input",
        elementConfig: {
          name: "password",
          type: "password",
          placeholder: "Your password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          valid: false,
        },
        touched: false,
      },
    },
    formIsValid: false,
    isSingUp: true,
  };
  checkValidation(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (event, elementId) => {
    const updatedForm = { ...this.state.controls };
    const updatedFormElement = { ...updatedForm[elementId] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updatedFormElement.validation.valid = this.checkValidation(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedForm[elementId] = updatedFormElement;
    let formIsValid = true;
    for (const elementId in updatedForm) {
      if (updatedForm[elementId].validation) {
        formIsValid = updatedForm[elementId].validation.valid && formIsValid;
      }
    }
    this.setState({ controls: updatedForm, formIsValid: formIsValid });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSingUp
    );
  };
  switchModeHandler = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return { isSingUp: !prevState.isSingUp };
    });
  };
  render() {
    const formElementsArray = Object.entries(this.state.controls);
    let form = (
      <form action="" onSubmit={this.submitHandler}>
        <Button btnType="SuccessBlue" clicked={this.switchModeHandler}>
          {this.state.isSingUp ? (
            <div>
              SINGUP&nbsp;/&nbsp;
              <span className={classes.Dissabled}>SINGIN</span>
            </div>
          ) : (
            <div>
              <span className={classes.Dissabled}>SINGUP</span>
              &nbsp;/&nbsp;SINGIN
            </div>
          )}
        </Button>
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
          SUBMIT
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p className={classes.ErrorMessage}>
          {this.props.error.message.split("_").join(" ")}
        </p>
      );
    }
    return (
      <div className={classes.Authorisation}>
        {form}
        {errorMessage}
      </div>
    );
  }
}

Authorisation.propTypes = {
  onAuth: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, passw, isSingUp) =>
      dispatch(actions.authorisation(email, passw, isSingUp)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authorisation);
