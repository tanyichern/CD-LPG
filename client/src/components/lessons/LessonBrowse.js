import React, { Component } from 'react';

import AdminLessonParentList from '../admin/AdminLessonParentList';
import LessonBrowseAddModal from './LessonBrowseAddModal';

export class LessonBrowse extends Component {
  renderParentAdd = (lesson) => {
    return <LessonBrowseAddModal conduct={lesson.conduct} id={lesson._id} />;
  };

  render() {
    return (
      <div>
        <AdminLessonParentList
          renderAdd={this.renderParentAdd}
          renderEdit={(lesson, history) => {}}
          renderDelete={(lesson) => {}}
          renderCreate={() => {}}
          showOwner={false}
          onClickLink="/lessons"
        />
      </div>
    );
  }
}

export default LessonBrowse;
