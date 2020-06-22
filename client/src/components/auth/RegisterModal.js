import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import InputText from '../forms/InputText';
import InputEmail from '../forms/InputEmail';
import InputPassword from '../forms/InputPassword';
import InputUnit from '../forms/InputUnit';
import InputRole from '../forms/InputRole';
import ModalFormTemplate from '../forms/ModalFormTemplate';

class RegisterModal extends Component {
  state = {
    modal: false,
    rank: '',
    name: '',
    email: '',
    password: '',
    unit: '',
    role: '',
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // if authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { rank, name, email, password, unit, role } = this.state;

    // create user object
    const newUser = {
      rank,
      name,
      email,
      password,
      unit,
      role,
    };

    // attempt to register
    this.props.register(newUser);
  };

  renderFields = () => {
    return (
      <Fragment>
        <InputText field="rank" text="Rank" onChange={this.onChange} />
        <InputText field="name" text="Name" onChange={this.onChange} />
        <InputEmail onChange={this.onChange} />
        <InputPassword onChange={this.onChange} />
        <InputUnit onChange={this.onChange} />
        <InputRole onChange={this.onChange} />
      </Fragment>
    );
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Register
        </NavLink>
        <ModalFormTemplate
          modal={this.state.modal}
          toggle={this.toggle}
          msg={this.state.msg}
          onSubmit={this.onSubmit}
          title="Register"
          primaryAction="Register"
          secondaryAction="Cancel"
          renderFields={this.renderFields}
          clientValid={true}
        ></ModalFormTemplate>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
