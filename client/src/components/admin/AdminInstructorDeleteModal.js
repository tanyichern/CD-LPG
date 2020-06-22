import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteUser } from '../../actions/userActions';

import InputText from '../forms/InputText';
import ModalForm from '../forms/ModalForm';
import { FiTrash2 } from 'react-icons/fi';

class AdminInstructorDeleteModal extends Component {
  state = {
    inputemail: '',
  };

  static propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    if (this.state.inputemail === this.props.email) {
      return true;
    } else {
      return false;
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { role, username } = this.props;

    // attempt to delete user
    this.props.deleteUser(role, username);
  };

  resetState = () => {
    this.setState({ inputemail: '' });
  };

  renderTrigger = () => {
    return (
      <FiTrash2
        className="float-right"
        size="1.25em"
        style={{ marginTop: '0.25rem', cursor: 'pointer' }}
      ></FiTrash2>
    );
  };

  renderFields = () => {
    return (
      <Fragment>
        <p>
          Please type <b>{this.props.email}</b> to confirm
        </p>
        <InputText field="inputemail" text="" onChange={this.onChange} />
      </Fragment>
    );
  };

  render() {
    return (
      <ModalForm
        renderTrigger={this.renderTrigger}
        modalTitle="Delete user"
        renderFields={this.renderFields}
        clientValid={this.validate()}
        primaryAction="Submit"
        secondaryAction="Cancel"
        handleSubmit={this.onSubmit}
        resetState={this.resetState}
      />
    );
  }
}

export default connect(null, { deleteUser })(AdminInstructorDeleteModal);
