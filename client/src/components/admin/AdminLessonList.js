import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Container } from 'reactstrap';
import classnames from 'classnames';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FiEdit } from 'react-icons/fi';

import AdminLessonParentList from './AdminLessonParentList';
import AdminLessonChildList from './AdminLessonChildList';
import AdminLessonDeleteModal from './AdminLessonDeleteModal';

export class AdminLessonList extends Component {
  state = {
    activeTab: 'parentLessons',
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  renderChildDelete = (lesson) => {
    return <AdminLessonDeleteModal conduct={lesson.conduct} id={lesson._id} />;
  };

  renderParentCreate = () => {
    return (
      <Button
        color="primary"
        className="float-right"
        style={{ marginTop: '1rem' }}
        tag={Link}
        to="/admin/lessons/new"
      >
        Create
      </Button>
    );
  };

  renderParentEdit = (lesson, history) => {
    return (
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
    );
  };

  renderParentDelete = (lesson) => {
    return <AdminLessonDeleteModal conduct={lesson.conduct} id={lesson._id} />;
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
            <AdminLessonParentList
              renderAdd={(lesson) => {}}
              renderEdit={this.renderParentEdit}
              renderDelete={this.renderParentDelete}
              renderCreate={this.renderParentCreate}
              showOwner={true}
              onClickLink="/admin/lessons"
            />
          </TabPane>
          <TabPane tabId="childLessons">
            <AdminLessonChildList renderDelete={this.renderChildDelete} />
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default AdminLessonList;
