import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import PropTypes from 'prop-types';

export class AuthInfo extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  renderAuthInfo = (auth) => {
    if (auth.user) {
      const { rank, name, unit, role } = auth.user;
      return (
        <Fragment>
          {`Signed in as ${rank} ${name}`}
          <br />
          {`(${role}, ${unit})`}
        </Fragment>
      );
    } else {
      return '';
    }
  };

  render() {
    return (
      <Container>
        <div className="mb-2">{this.renderAuthInfo(this.props.auth)}</div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AuthInfo);
