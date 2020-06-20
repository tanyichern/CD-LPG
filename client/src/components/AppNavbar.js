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
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
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

  renderNavItems = (isAuthenticated) => {
    if (isAuthenticated) {
      return (
        <Fragment>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/lessons/browse">
                Browse
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/lessons">
                My Lessons
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/wing">
                My Wing
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SMEs
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/smes">
                  Landing
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/admin">
                  Landing
                </DropdownItem>
                <DropdownItem tag={Link} to="/admin/lessons">
                  Lessons
                </DropdownItem>
                <DropdownItem tag={Link} to="/admin/instructors">
                  Instructors
                </DropdownItem>
                <DropdownItem tag={Link} to="/admin/wings">
                  Wings
                </DropdownItem>
                <DropdownItem tag={Link} to="/admin/smes">
                  SMEs
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
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
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <RegisterModal />
            </NavItem>
            <NavItem>
              <LoginModal />
            </NavItem>
          </Nav>
        </Fragment>
      );
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Navbar
          color="dark"
          dark
          expand="sm"
          className={isAuthenticated ? 'mb-5' : ''}
          fixed={isAuthenticated ? '' : 'top'}
        >
          <Container>
            <NavbarBrand href="/">Lesson Plan Generator</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {this.renderNavItems(isAuthenticated)}
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
