import React from "react";
import classes from "./Modal.css"
import Backdrop from "../Backdrop/Backdrop";
import Auxil from "../../../hoc/Auxiliary";

const Modal = (props) => {
    const active = props.show ? classes.Active : '';
    return (
        <Auxil>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={`${classes.Modal} ${active}`}>{props.children}</div>
        </Auxil>
    );
};

export default Modal;