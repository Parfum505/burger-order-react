import React, { Component } from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxil from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    let modalClasses = [classes.Modal];
    if (this.props.show) {
      modalClasses.push(classes.Active);
    }
    if (this.props.addedClasses) {
      for (let addClass of this.props.addedClasses) {
        modalClasses.push(classes[addClass]);
      }
    }

    return (
      <Auxil>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={modalClasses.join(" ")}>{this.props.children}</div>
      </Auxil>
    );
  }
}
Modal.propTypes = {
  addedClasses: PropTypes.array,
  show: PropTypes.any,
  modalClosed: PropTypes.func,
  children: PropTypes.any,
};
export default Modal;
