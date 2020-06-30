import React, { Component } from 'react';
import { Container } from 'reactstrap';

import LessonList from '../lessons/LessonList';

export class UnitShow extends Component {
  selectByUnit = (lesson, user) => {
    return lesson.owner.unit === user.unit;
  };

  render() {
    return (
      <Container>
        <LessonList
          renderDelete={(lesson) => {}}
          selector={this.selectByUnit}
        />
      </Container>
    );
  }
}

export default UnitShow;
