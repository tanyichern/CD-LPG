import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { fetchUnits, clearUnits } from '../../actions/unitActions';
import { REGISTER_FAIL } from '../../actions/types';

import InputText from '../forms/InputText';
import InputEmail from '../forms/InputEmail';
import InputPassword from '../forms/InputPassword';
import InputDropdown from '../forms/InputDropdown';
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
    fetchUnits: PropTypes.func.isRequired,
    clearUnits: PropTypes.func.isRequired,
    units: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.fetchUnits();
  }

  componentWillUnmount() {
    this.props.clearUnits();
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === REGISTER_FAIL) {
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
        <InputDropdown
          field="unit"
          text="Unit"
          onChange={this.onChange}
          dropdown={this.props.units}
        />
        <InputDropdown
          field="role"
          text="Role"
          onChange={this.onChange}
          dropdown={this.props.roles}
        />
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
  units: _.map(Object.values(state.units), (unit) => {
    return _.pick(unit, ['name'])['name'];
  }),
  roles: ['Instructor', 'SME', 'Admin'],
});

export default connect(mapStateToProps, {
  fetchUnits,
  clearUnits,
  register,
  clearErrors,
})(RegisterModal);
