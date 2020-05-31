import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Authorisation.css";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import PropTypes from "prop-types";
import {
  countIngredients,
  updateObject,
  checkValidation,
} from "../../store/utility";

const Authorisation = (props) => {
  const initControls = {
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
  };
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSingUp, setIsSingUp] = useState(false);
  const [controls, setControls] = useState(initControls);

  useEffect(() => {
    if (countIngredients(props.ingredients) === 0) {
      props.setRiderectPath("/");
    }
  }, []);

  const inputChangedHandler = (event, elementId) => {
    const updatedFormElement = updateObject(controls[elementId], {
      value: event.target.value,
      touched: true,
      validation: updateObject(controls[elementId].validation, {
        valid: checkValidation(
          event.target.value,
          controls[elementId].validation
        ),
      }),
    });
    const updatedForm = updateObject(controls, {
      [elementId]: updatedFormElement,
    });
    let formIsValid = true;
    for (const elementId in updatedForm) {
      if (updatedForm[elementId].validation) {
        formIsValid = updatedForm[elementId].validation.valid && formIsValid;
      }
    }
    setFormIsValid(formIsValid);
    setControls(updatedForm);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(controls.email.value, controls.password.value, isSingUp);
  };
  const switchModeHandler = (event) => {
    event.preventDefault();
    setIsSingUp(!isSingUp);
  };
  const formElementsArray = Object.entries(controls);
  let form = (
    <form action="" onSubmit={submitHandler}>
      <Button btnType="SuccessBlue" clicked={switchModeHandler}>
        {isSingUp ? (
          <div>
            <span className={classes.Dissabled}>SING&nbsp;IN</span>
            &nbsp;/&nbsp;SING&nbsp;UP
          </div>
        ) : (
          <div>
            SING&nbsp;IN&nbsp;/&nbsp;
            <span className={classes.Dissabled}>SING&nbsp;UP</span>
          </div>
        )}
      </Button>
      {formElementsArray.map((element) => (
        <Input
          key={element[0]}
          elementType={element[1].elementType}
          elementConfig={element[1].elementConfig}
          value={element[1].value}
          changed={(event) => inputChangedHandler(event, element[0])}
          invalid={!element[1].validation.valid}
          touched={element[1].touched}
        />
      ))}
      <Button btnType="Success" disabled={!formIsValid}>
        SUBMIT
      </Button>
    </form>
  );
  if (props.loading) {
    form = <Spinner />;
  }
  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      <p className={classes.ErrorMessage}>
        {props.error.message.split("_").join(" ")}
      </p>
    );
  }
  let authRedirect = null;
  if (props.isAuth) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }
  return (
    <div className={classes.Authorisation}>
      {authRedirect}
      {form}
      {errorMessage}
    </div>
  );
};

Authorisation.propTypes = {
  onAuth: PropTypes.func.isRequired,
  setRiderectPath: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  error: PropTypes.object,
  authRedirectPath: PropTypes.string.isRequired,
  ingredients: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    ingredients: state.burgerBuilder.ingredients,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, passw, isSingUp) =>
      dispatch(actions.authorisation(email, passw, isSingUp)),
    setRiderectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authorisation);
