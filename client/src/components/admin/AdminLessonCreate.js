import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AdminLessonCreateForm from './AdminLessonCreateForm';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';
import { RETURN_SUCCESS } from '../../actions/types';
import history from '../../history';

export class AdminLessonCreate extends Component {
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === RETURN_SUCCESS) {
        this.props.clearErrors();
        history.push('/admin/lessons');
      }
    }
  }

  render() {
    return (
      <Container>
        <h3>Create new template lesson</h3>
        <hr />
        <AdminLessonCreateForm />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { clearErrors })(AdminLessonCreate);
