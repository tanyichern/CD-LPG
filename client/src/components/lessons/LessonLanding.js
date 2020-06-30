import React, { Component } from 'react';
import { Container } from 'reactstrap';

import LessonDeleteModal from './LessonDeleteModal';

import LessonList from './LessonList';

export class LessonLanding extends Component {
  renderDelete = (lesson) => {
    return <LessonDeleteModal conduct={lesson.conduct} id={lesson._id} />;
  };

  selectById = (lesson, user) => {
    return lesson.owner._id === user._id;
  };

  render() {
    return (
      <Container>
        <LessonList
          renderDelete={this.renderDelete}
          selector={this.selectById}
        />
      </Container>
    );
  }
}

export default LessonLanding;
