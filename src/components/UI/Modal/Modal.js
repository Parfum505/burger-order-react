import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxil from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";

const Modal = (props) => {
  let modalClasses = [classes.Modal];
  if (props.show) {
    modalClasses.push(classes.Active);
  }
  if (props.addedClasses) {
    for (let addClass of props.addedClasses) {
      modalClasses.push(classes[addClass]);
    }
  }

  return (
    <Auxil>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={modalClasses.join(" ")}>{props.children}</div>
    </Auxil>
  );
};
Modal.propTypes = {
  addedClasses: PropTypes.array,
  show: PropTypes.any,
  modalClosed: PropTypes.func,
  children: PropTypes.any,
};
export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
