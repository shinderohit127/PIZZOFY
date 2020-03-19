import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Hcomp from '../Hcomp';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        errorConfirmedhandler = () => {
            this.setState({error: null});
        }
        UNSAFE_componentWillMount() {
            this.reqInterceptor = axios.interceptors.response.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmout() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        render() {
            return (
                <Hcomp>
                    <Modal show={this.state.error}
                    modalClosed={this.errorConfirmedhandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Hcomp>
            );
        }
    }
}

export default withErrorHandler;