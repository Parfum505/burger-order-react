import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxil from "../Auxiliary";
import useHttpErrorHandler from "../../hooks/httpErrorHandler";

const withErrorHandler = (WrappedComponent, axios) => {
  return function newErrorHandler(props) {
    const [error, clearError] = useHttpErrorHandler(axios);
    return (
      <Auxil>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxil>
    );
  };
};

export default withErrorHandler;
