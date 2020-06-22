import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { fetchUnits } from '../../actions/unitActions';
import AdminUnitCreateModal from './AdminUnitCreateModal';
import AdminUnitDeleteModal from './AdminUnitDeleteModal';
import AdminUnitEditModal from './AdminUnitEditModal';

export class AdminUnitList extends Component {
  static propTypes = {
    fetchUnits: PropTypes.func.isRequired,
    units: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchUnits();
  }

  renderList = () => {
    console.log(this.props.units);
    return _.sortBy(this.props.units, (unit) => unit.name.toLowerCase()).map(
      (unit) => {
        return (
          <ListGroupItem key={unit.name}>
            <div>
              {unit.name}
              <AdminUnitDeleteModal unitname={unit.name} />
              <AdminUnitEditModal unitname={unit.name} />
            </div>
          </ListGroupItem>
        );
      }
    );
  };

  render() {
    return (
      <Container>
        <ListGroup flush>{this.renderList()}</ListGroup>
        <AdminUnitCreateModal />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    units: Object.values(state.units),
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchUnits })(AdminUnitList);
