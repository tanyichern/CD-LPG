import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import LessonList from '../lessons/LessonList';
import InstructorList from '../instructors/InstructorList';

export class UnitShow extends Component {
  selectByUnit = (lesson, user) => {
    return lesson.owner.unit === user.unit;
  };

  render() {
    return (
      <Container>
        <h5>Instructors</h5>
        <InstructorList />
        <hr />
        <h5>Lessons</h5>
        <LessonList
          renderDelete={(lesson) => {}}
          selector={this.selectByUnit}
        />
      </Container>
    );
  }
}

export default UnitShow;
