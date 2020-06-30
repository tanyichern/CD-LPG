import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors } from '../../actions/errorActions';
import history from '../../history';

import ModalFormTemplate from './ModalFormTemplate';
import { RETURN_FAIL, RETURN_SUCCESS } from '../../actions/types';

class ModalForm extends Component {
  state = {
    modal: false,
    msg: null,
  };

  static propTypes = {
    renderTrigger: PropTypes.func.isRequired,
    modalTitle: PropTypes.string.isRequired,
    renderFields: PropTypes.func.isRequired,
    primaryAction: PropTypes.string.isRequired,
    secondaryAction: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    clientValid: PropTypes.bool,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // server side validation
      if (error.id === RETURN_FAIL) {
        this.setState({ msg: error.msg.msg });
      } else if (error.id === RETURN_SUCCESS) {
        this.setState({ msg: null });
        this.close();
      } else {
        this.setState({ msg: null });
      }
    }
  }

  close = () => {
    this.props.clearErrors();
    this.setState({
      modal: false,
    });
    this.props.resetState();
    if (this.props.pushHistoryOnClose) {
      history.push(this.props.pushHistoryOnClose);
    }
  };

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const trigger = this.props.renderTrigger();

    return (
      <Fragment>
        {React.cloneElement(trigger, { onClick: this.toggle })}
        <ModalFormTemplate
          modal={this.state.modal}
          toggle={this.toggle}
          msg={this.state.msg}
          onSubmit={this.props.handleSubmit}
          title={this.props.modalTitle}
          primaryAction={this.props.primaryAction}
          secondaryAction={this.props.secondaryAction}
          renderFields={this.props.renderFields}
          disabled={!this.props.clientValid}
        ></ModalFormTemplate>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { clearErrors })(ModalForm);
