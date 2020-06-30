import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

import history from '../../history';

import { fetchLessons, clearLessons } from '../../actions/lessonActions';

export class AdminLessonParentList extends Component {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    fetchLessons: PropTypes.func.isRequired,
    clearLessons: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchLessons();
  }

  componentWillUnmount() {
    this.props.clearLessons();
  }

  onClick = (id) => {
    if (this.props.onClickLink) {
      history.push(`${this.props.onClickLink}/${id}`);
    }
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
          {this.props.showOwner ? (
            <Fragment>
              <td>{lesson.owner.rank}</td>
              <td>{lesson.owner.name}</td>
              <td>{lesson.owner.unit}</td>
            </Fragment>
          ) : null}
          <td onClick={(e) => e.stopPropagation()}>
            {this.props.renderAdd(lesson)}
            {this.props.renderDelete(lesson)}
            {this.props.renderEdit(lesson, history)}
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
              {this.props.showOwner ? (
                <Fragment>
                  <th>Owner Rank</th>
                  <th>Owner Name</th>
                  <th>Owner Unit</th>
                </Fragment>
              ) : null}
              <th width="8%"></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </Table>
        {this.props.renderCreate()}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lessons: _.map(Object.values(state.lessons), (lesson) => {
      if (lesson.generation === 'parent') return lesson;
    }),
  };
};

export default connect(mapStateToProps, { fetchLessons, clearLessons })(
  AdminLessonParentList
);
