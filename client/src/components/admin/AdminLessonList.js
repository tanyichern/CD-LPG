import React, { Component } from 'react';
import _ from 'lodash';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Container } from 'reactstrap';
import classnames from 'classnames';

import AdminLessonParentList from './AdminLessonParentList';
import AdminLessonChildList from './AdminLessonChildList';

export class AdminLessonList extends Component {
  state = {
    activeTab: 'parentLessons',
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Container>
        <Nav tabs>
          <NavItem style={{ cursor: 'pointer' }}>
            <NavLink
              className={classnames({ active: activeTab === 'parentLessons' })}
              onClick={() => {
                this.toggle('parentLessons');
              }}
            >
              Template Lessons
            </NavLink>
          </NavItem>
          <NavItem style={{ cursor: 'pointer' }}>
            <NavLink
              className={classnames({ active: activeTab === 'childLessons' })}
              onClick={() => {
                this.toggle('childLessons');
              }}
            >
              Instructor Lessons
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="parentLessons">
            <AdminLessonParentList />
          </TabPane>
          <TabPane tabId="childLessons">
            <AdminLessonChildList />
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default AdminLessonList;
