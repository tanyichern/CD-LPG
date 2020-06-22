import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Container, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import history from '../../history';

import { fetchUnits, clearUnits } from '../../actions/unitActions';
import AdminUnitCreateModal from './AdminUnitCreateModal';
import AdminUnitDeleteModal from './AdminUnitDeleteModal';
import AdminUnitEditModal from './AdminUnitEditModal';

export class AdminUnitList extends Component {
  static propTypes = {
    fetchUnits: PropTypes.func.isRequired,
    clearUnits: PropTypes.func.isRequired,
    units: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.fetchUnits();
  }

  componentWillUnmount() {
    this.props.clearUnits();
  }

  onClick = (dbname) => {
    history.push(`/admin/units/${dbname}`);
  };

  renderTable = () => {
    return _.sortBy(this.props.units, (unit) => unit.name.toLowerCase()).map(
      (unit, index) => {
        return (
          <tr
            key={unit.name}
            style={{ cursor: 'pointer' }}
            onClick={() => this.onClick(unit.dbname)}
          >
            <th scope="row">{index + 1}</th>
            <td>{unit.name}</td>
            <td onClick={(e) => e.stopPropagation()}>
              <AdminUnitDeleteModal name={unit.name} />
              <AdminUnitEditModal name={unit.name} />
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
              <th>Unit</th>
              <th width="8%"></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </Table>
        <AdminUnitCreateModal />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    units: Object.values(state.units),
  };
};

export default connect(mapStateToProps, { fetchUnits, clearUnits })(
  AdminUnitList
);
