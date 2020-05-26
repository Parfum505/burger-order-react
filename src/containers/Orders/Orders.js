import React, { Component } from "react";
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

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }
  render() {
    let orders = null;
    if (this.props.loading) {
      orders = <Spinner />;
    }
    if (this.props.orders) {
      orders = this.props.orders.length ? (
        <TransitionGroup component="ul" className={classes.List}>
          {this.props.orders.map((order) => (
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
  }
}
Orders.propTypes = {
  onFetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.array,
  loading: PropTypes.bool,
  token: PropTypes.any,
};
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
