import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  renderRightNavItems = (isAuthenticated) => {
    if (isAuthenticated) {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <Logout />
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <RegisterModal />
          </NavItem>
          <NavItem>
            <LoginModal />
          </NavItem>
        </Nav>
      );
    }
  };

  renderNavItems = (isAuthenticated, user) => {
    if (!isAuthenticated) {
      return <Fragment>{this.renderRightNavItems(isAuthenticated)}</Fragment>;
    } else if (isAuthenticated && user.role === 'Instructor') {
      return (
        <Fragment>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/lessons">
                My Lessons
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/unit">
                My Unit
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/lessons/browse">
                Browse
              </NavLink>
            </NavItem>
          </Nav>
          {this.renderRightNavItems(isAuthenticated)}
        </Fragment>
      );
    } else if (isAuthenticated && user.role === 'Admin') {
      return (
        <Fragment>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/admin/lessons">
                Lessons
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/admin/instructors">
                Instructors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/admin/units">
                Units
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/admin/smes">
                SMEs
              </NavLink>
            </NavItem>
          </Nav>
          {this.renderRightNavItems(isAuthenticated)}
        </Fragment>
      );
    } else if (isAuthenticated && user.role === 'SME') {
      return <Fragment>{this.renderRightNavItems(isAuthenticated)}</Fragment>;
    }
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <Navbar
          color="dark"
          dark
          expand="sm"
          fixed={isAuthenticated ? '' : 'top'}
        >
          <Container>
            <NavbarBrand href="/">Lesson Plan Generator</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {this.renderNavItems(isAuthenticated, user)}
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
