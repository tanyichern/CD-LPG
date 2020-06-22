import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

import { FiEdit } from 'react-icons/fi';

import history from '../../history';

import AdminLessonDeleteModal from './AdminLessonDeleteModal';

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
    history.push(`/admin/lessons/${id}`);
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
          <td>{lesson.owner.rank}</td>
          <td>{lesson.owner.name}</td>
          <td>{lesson.owner.unit}</td>
          <td onClick={(e) => e.stopPropagation()}>
            <AdminLessonDeleteModal conduct={lesson.conduct} id={lesson._id} />
            <FiEdit
              className="float-right"
              size="1.25em"
              style={{
                marginTop: '0.25rem',
                marginRight: '0.5rem',
                cursor: 'pointer',
              }}
              tag={Link}
              to={`/admin/lessons/edit/${lesson._id}`}
              onClick={() => history.push(`/admin/lessons/edit/${lesson._id}`)}
            ></FiEdit>
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
              <th>Owner Rank</th>
              <th>Owner Name</th>
              <th>Owner Unit</th>
              <th width="8%"></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </Table>
        <Button
          color="primary"
          className="float-right"
          style={{ marginTop: '1rem' }}
          tag={Link}
          to="/admin/lessons/new"
        >
          Create
        </Button>
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
