import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import classes from "./Orders.css";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import PropTypes from "prop-types";
import Spinner from "../../components/UI/Spinner/Spinner";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

const Orders = (props) => {
  useEffect(() => {
    props.onFetchOrders(props.token, props.userId);
  }, []);

  let orders = null;
  if (props.loading) {
    orders = <Spinner />;
  }
  if (props.orders) {
    orders = props.orders.length ? (
      <TransitionGroup component="ul" className={classes.List}>
        {props.orders.map((order) => (
          <CSSTransition key={order.id} classNames="fade" timeout={300}>
            <Order order={order} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    ) : (
      <p>You don&apos;t have any orders yet.</p>
    );
  }
  return <div className={classes.Orders}>{orders}</div>;
};
Orders.propTypes = {
  onFetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.array,
  loading: PropTypes.bool,
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
