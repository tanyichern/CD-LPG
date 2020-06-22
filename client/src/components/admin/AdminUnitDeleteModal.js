import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteUnit } from '../../actions/unitActions';

import InputText from '../forms/InputText';
import ModalForm from '../forms/ModalForm';
import { FiTrash2 } from 'react-icons/fi';

class AdminUnitDeleteModal extends Component {
  state = {
    inputname: '',
  };

  static propTypes = {
    unitname: PropTypes.string.isRequired,
    deleteUnit: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    if (this.state.inputname === this.props.unitname) {
      return true;
    } else {
      return false;
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { inputname } = this.state;
    const dbname = inputname.split(' ').join('').toLowerCase();

    // attempt to delete unit
    this.props.deleteUnit(dbname);
  };

  resetState = () => {
    this.setState({ inputname: '' });
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
          Please type <b>{this.props.unitname}</b> to confirm
        </p>
        <InputText field="inputname" text="" onChange={this.onChange} />
      </Fragment>
    );
  };

  render() {
    return (
      <ModalForm
        renderTrigger={this.renderTrigger}
        modalTitle="Delete unit"
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

export default connect(null, { deleteUnit })(AdminUnitDeleteModal);
