import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./Order.css";
import PropTypes from "prop-types";
import Button from "../UI/Button/Button";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

const Order = (props) => {
  const [disableBtn, setDisableBtn] = useState(false);
  const onClicked = () => {
    setDisableBtn(true);
    props.onFetchDeleteOrders(props.id);
  };
  return (
    <div className={classes.Order}>
      <div>
        Ingredients:{" "}
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
    </div>
  );
};
Order.propTypes = {
  order: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onFetchDeleteOrders: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDeleteOrders: (id) => dispatch(actions.fetchDeleteOrder(id)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withErrorHandler(Order, axios));
