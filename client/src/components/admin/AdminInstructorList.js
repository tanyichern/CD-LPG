import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Container, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import history from '../../history';

import AdminInstructorDeleteModal from './AdminInstructorDeleteModal';

import { fetchUsers, clearUsers } from '../../actions/userActions';

export class AdminInstructorList extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.fetchUsers('Instructor');
  }

  componentWillUnmount() {
    this.props.clearUsers();
  }

  onClick = (username) => {
    history.push(`/admin/instructors/${username}`);
  };

  renderTable = () => {
    return _.sortBy(_.compact(this.props.users), (user) =>
      user.name.toLowerCase()
    ).map((user, index) => {
      return (
        <tr
          key={user.email}
          style={{ cursor: 'pointer' }}
          onClick={() => this.onClick(user.username)}
        >
          <th scope="row">{index + 1}</th>
          <td>{user.rank}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.unit}</td>
          <td>{user.role}</td>
          <td onClick={(e) => e.stopPropagation()}>
            <AdminInstructorDeleteModal
              username={user.username}
              email={user.email}
              role={user.role}
            />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th width="4%">#</th>
              <th>Rank</th>
              <th>Name</th>
              <th>Email</th>
              <th>Unit</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: _.map(Object.values(state.users), (user) => {
      if (user.role === 'Instructor') return user;
    }),
  };
};

export default connect(mapStateToProps, { fetchUsers, clearUsers })(
  AdminInstructorList
);
