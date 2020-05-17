import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxil from "../Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class WithError extends Component {
    state = {
      error: null,
    };

    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (request) => {
          this.setState({ error: null });
          return request;
        },
        (error) => {
          this.setState({ error: error });
        }
      );
      this.respInterceptor = axios.interceptors.response.use(
        (resp) => {
          this.setState({ error: null });
          return resp;
        },
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.respInterceptor);
    }

    modalClose = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Auxil>
          <Modal show={this.state.error} modalClosed={this.modalClose}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxil>
      );
    }
  };
};

export default withErrorHandler;
