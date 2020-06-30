import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

import history from '../../history';

import { fetchLessons, clearLessons } from '../../actions/lessonActions';

export class LessonList extends Component {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    fetchLessons: PropTypes.func.isRequired,
    clearLessons: PropTypes.func.isRequired,
    selector: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchLessons();
  }

  componentWillUnmount() {
    this.props.clearLessons();
  }

  onClick = (id) => {
    history.push(`/lessons/${id}`);
  };

  renderTable = () => {
    return _.sortBy(
      _.compact(this.props.lessons),
      (lesson) => lesson.conduct
    ).map((lesson, index) => {
      return (
        <tr
          key={lesson._id}
          style={{ cursor: 'pointer' }}
          onClick={() => this.onClick(lesson._id)}
        >
          <th scope="row">{index + 1}</th>
          <td>{lesson.conduct}</td>
          <td>{lesson.trainingType}</td>
          <td>{lesson.meta.conductingOfficer}</td>
          <td>{lesson.meta.course}</td>
          <td>{lesson.owner.unit}</td>
          <td onClick={(e) => e.stopPropagation()}>
            {this.props.renderDelete(lesson)}
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <Table responsive>
          <thead>
            <tr>
              <th width="4%">#</th>
              <th>Conduct</th>
              <th>Training Type</th>
              <th>Conducting Officer</th>
              <th>Course</th>
              <th>Wing</th>
              <th width="8%"></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    lessons: _.map(Object.values(state.lessons), (lesson) => {
      if (state.auth.user && ownProps.selector(lesson, state.auth.user)) {
        return lesson;
      } else {
        return;
      }
    }),
  };
};

export default connect(mapStateToProps, { fetchLessons, clearLessons })(
  LessonList
);
