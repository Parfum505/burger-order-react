import React, {Component} from "react";
import classes from "./Modal.css"
import Backdrop from "../Backdrop/Backdrop";
import Auxil from "../../../hoc/Auxiliary";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    render() {
        const modalClasses = this.props.show ? `${classes.Modal} ${classes.Active}` : `${classes.Modal}`;

        return (
            <Auxil>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={modalClasses}>{this.props.children}</div>
            </Auxil>
        );
    }
}

export default Modal;