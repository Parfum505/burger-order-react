import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxil from "../Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return function newErrorHandler(props) {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use(
      (request) => {
        setError(null);
        return request;
      },
      (err) => {
        setError(err);
      }
    );
    const respInterceptor = axios.interceptors.response.use(
      (resp) => {
        setError(null);
        return resp;
      },
      (err) => {
        setError(err);
      }
    );
    useEffect(() => {
      return function cleanup() {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(respInterceptor);
      };
    }, [reqInterceptor, respInterceptor]);

    const modalClose = () => {
      setError(null);
    };

    return (
      <Auxil>
        <Modal show={error} modalClosed={modalClose}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxil>
    );
  };
};

export default withErrorHandler;
