import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import PropTypes from "prop-types";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    return (
      <div style={{ margin: "auto" }}>
        {this.props.loading ? (
          <Spinner />
        ) : this.props.orders && this.props.orders.length ? (
          this.props.orders.map((order) => (
            <Order key={order.id} order={order} />
          ))
        ) : null}
      </div>
    );
  }
}
Orders.propTypes = {
  onFetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.array,
  loading: PropTypes.bool,
};
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
