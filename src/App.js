import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Authorisation from "./containers/Authorisation/Authorisation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Logout from "./containers/Authorisation/Logout/Logout";

function App(props) {
  let routs = (
    <Switch>
      <Route path="/authorisation" component={Authorisation} />
      <Route path="/" component={BurgerBuilder} />
    </Switch>
  );
  if (props.isAuth) {
    routs = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/authorisation" component={Authorisation} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    );
  }
  return (
    <BrowserRouter basename="/burger-order-react">
      <Layout>{routs}</Layout>
    </BrowserRouter>
  );
}
App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(App);
