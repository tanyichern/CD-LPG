import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editUnit } from '../../actions/unitActions';

import InputText from '../forms/InputText';
import ModalForm from '../forms/ModalForm';
import { FiEdit } from 'react-icons/fi';

class AdminUnitEditModal extends Component {
  state = {
    inputname: '',
  };

  static propTypes = {
    unitname: PropTypes.string.isRequired,
    editUnit: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { inputname } = this.state;
    const dbname = this.props.unitname.split(' ').join('').toLowerCase();

    const newUnit = {
      name: inputname,
      dbname: inputname.split(' ').join('').toLowerCase(),
    };

    // attempt to delete unit
    this.props.editUnit(dbname, newUnit);
  };

  resetState = () => {
    this.setState({ inputname: '' });
  };

  renderTrigger = () => {
    return (
      <FiEdit
        className="float-right"
        size="1.25em"
        style={{
          marginTop: '0.25rem',
          marginRight: '0.5rem',
          cursor: 'pointer',
        }}
      ></FiEdit>
    );
  };

  renderFields = () => {
    return (
      <Fragment>
        <p>
          Please enter a new name for <b>{this.props.unitname}</b>
        </p>
        <InputText field="inputname" text="" onChange={this.onChange} />
      </Fragment>
    );
  };

  render() {
    return (
      <ModalForm
        renderTrigger={this.renderTrigger}
        modalTitle="Edit unit"
        renderFields={this.renderFields}
        primaryAction="Submit"
        clientValid={true}
        secondaryAction="Cancel"
        handleSubmit={this.onSubmit}
        resetState={this.resetState}
      />
    );
  }
}

export default connect(null, { editUnit })(AdminUnitEditModal);
