import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};
export const purchaseBurgerError = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_ERROR,
    error: error,
  };
};
export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};
export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerError(error));
      });
  };
};
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};
export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};
export const fetchOrdersError = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_ERROR,
    error: error,
  };
};
export const fetchOrders = (token) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axios
      .get("/orders.json?auth=" + token)
      .then((res) => {
        const fetchedOrders = [];
        for (const [id, value] of Object.entries(res.data)) {
          fetchedOrders.push({ ...value, id: id });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((error) => {
        dispatch(fetchOrdersError(error));
      });
  };
};
export const deleteOrderError = (error) => {
  return {
    type: actionTypes.DELETE_ORDER_ERROR,
    error: error,
  };
};
export const deleteOrder = (id) => {
  return {
    type: actionTypes.DELETE_ORDER,
    orderId: id,
  };
};
export const fetchDeleteOrder = (id, token) => {
  return (dispatch) => {
    axios
      .delete("/orders/" + id + ".json?auth=" + token)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          dispatch(deleteOrder(id));
        }
      })
      .catch((error) => {
        dispatch(deleteOrderError(error));
      });
  };
};
