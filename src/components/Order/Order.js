import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./Order.css";
import PropTypes from "prop-types";
import Button from "../UI/Button/Button";
import * as actions from "../../store/actions/index";
import styled from "styled-components";

const StyledOrder = styled.li`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.fade-exit-active {
    opacity: 0;
    transform: translateX(1000px);
  }
`;

const Order = (props) => {
  const [disableBtn, setDisableBtn] = useState(false);
  const onClicked = () => {
    setDisableBtn(true);
    props.onFetchDeleteOrders(props.order.id, props.token);
  };
  return (
    <StyledOrder className={classes.Order} key={props.order.id}>
      <div>
        Ingredients:&nbsp;
        {Object.entries(props.order.ingredients).map((ingredient, i) => (
          <div
            className={classes.Ingredient}
            key={i}
          >{`${ingredient[0]} (${ingredient[1]})`}</div>
        ))}
      </div>
      <p>
        <span>
          Price: <strong>{props.order.price.toFixed(2)}&nbsp;$</strong>
        </span>
        <Button btnType="Danger" clicked={onClicked} disabled={disableBtn}>
          Delete
        </Button>
      </p>
    </StyledOrder>
  );
};
Order.propTypes = {
  order: PropTypes.object.isRequired,
  onFetchDeleteOrders: PropTypes.func.isRequired,
  token: PropTypes.any,
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDeleteOrders: (id,token) => dispatch(actions.fetchDeleteOrder(id,token)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
