import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AdminLessonEditForm from './AdminLessonEditForm';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';
import { RETURN_SUCCESS } from '../../actions/types';
import history from '../../history';

export class AdminLessonEdit extends Component {
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
        <h3>Edit an existing lesson</h3>
        <hr />
        <AdminLessonEditForm id={this.props.match.params.id} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { clearErrors })(AdminLessonEdit);
