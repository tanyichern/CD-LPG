import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUnit } from '../../actions/unitActions';

import InputText from '../forms/InputText';
import ModalForm from '../forms/ModalForm';

class AdminUnitCreateModal extends Component {
  state = {
    name: '',
  };

  static propTypes = {
    createUnit: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name } = this.state;

    const unit = {
      name,
    };

    // attempt to create unit
    this.props.createUnit(unit);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetState = () => {
    this.setState({ name: '' });
  };

  renderTrigger = () => {
    return (
      <Button
        color="primary"
        className="float-right"
        style={{ marginTop: '1rem' }}
      >
        Create
      </Button>
    );
  };

  renderFields = () => {
    return (
      <Fragment>
        <InputText field="name" text="Name" onChange={this.onChange} />
      </Fragment>
    );
  };

  render() {
    return (
      <ModalForm
        renderTrigger={this.renderTrigger}
        modalTitle="Create new unit"
        renderFields={this.renderFields}
        primaryAction="Submit"
        secondaryAction="Cancel"
        handleSubmit={this.onSubmit}
        resetState={this.resetState}
        clientValid={true}
      />
    );
  }
}

export default connect(null, { createUnit })(AdminUnitCreateModal);
