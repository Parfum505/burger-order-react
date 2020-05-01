import React, {Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxil from "../Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            axios.interceptors.response.use(resp => resp, error => {
                this.setState({error: error});
            });
        }
        modalClose = () => {
            this.setState({error: null});
        }
        render() {
            return (
                <Auxil>
                    <Modal show={this.state.error}
                           modalClosed={this.modalClose}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxil>
            );
        }
    }
};

export default withErrorHandler;
