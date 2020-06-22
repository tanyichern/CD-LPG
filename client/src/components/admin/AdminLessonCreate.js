import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AdminLessonCreateForm from './AdminLessonCreateForm';

export class AdminLessonCreate extends Component {
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

export default AdminLessonCreate;
