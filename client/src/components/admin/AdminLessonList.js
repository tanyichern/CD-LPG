import React, { Component } from 'react';
import _ from 'lodash';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Container, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import history from '../../history';

import AdminLessonDeleteModal from './AdminLessonDeleteModal';

import { fetchLessons, clearLessons } from '../../actions/lessonActions';

export class AdminLessonList extends Component {
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
    return _.sortBy(this.props.lessons, (lesson) => lesson.conduct).map(
      (lesson, index) => {
        return (
          <tr
            key={lesson._id}
            style={{ cursor: 'pointer' }}
            onClick={() => this.onClick(lesson._id)}
          >
            <th scope="row">{index + 1}</th>
            <td>{lesson.conduct}</td>
            <td>{lesson.trainingType}</td>
            <td onClick={(e) => e.stopPropagation()}>
              <AdminLessonDeleteModal
                conduct={lesson.conduct}
                id={lesson._id}
              />
            </td>
          </tr>
        );
      }
    );
  };

  render() {
    return (
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th width="4%">#</th>
              <th>Conduct</th>
              <th>Training Type</th>
              <th width="8%"></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </Table>
        <Button
          color="primary"
          className="float-right"
          style={{ marginTop: '1rem' }}
        >
          Create
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lessons: Object.values(state.lessons),
  };
};

export default connect(mapStateToProps, { fetchLessons, clearLessons })(
  AdminLessonList
);
