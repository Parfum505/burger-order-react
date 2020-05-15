import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (const [id, value] of Object.entries(res.data)) {
          fetchedOrders.push({ ...value, id: id });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.length
          ? this.state.orders.map((order) => (
              <Order key={order.id} order={order} />
            ))
          : null}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
