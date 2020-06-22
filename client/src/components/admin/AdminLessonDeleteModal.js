import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLesson } from '../../actions/lessonActions';

import InputText from '../forms/InputText';
import ModalForm from '../forms/ModalForm';
import { FiTrash2 } from 'react-icons/fi';

class AdminUnitDeleteModal extends Component {
  state = {
    inputconduct: '',
  };

  static propTypes = {
    conduct: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteLesson: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    if (this.state.inputconduct === this.props.conduct) {
      return true;
    } else {
      return false;
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { id } = this.props;

    // attempt to delete unit
    this.props.deleteLesson(id);
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
          Please type <b>{this.props.conduct}</b> to confirm
        </p>
        <InputText field="inputconduct" text="" onChange={this.onChange} />
      </Fragment>
    );
  };

  render() {
    return (
      <ModalForm
        renderTrigger={this.renderTrigger}
        modalTitle="Delete lesson"
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

export default connect(null, { deleteLesson })(AdminUnitDeleteModal);
