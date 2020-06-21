import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import history from '../history';
import store from '../store';

import AppNavbar from './AppNavbar';
import Background from './Background';
import Landing from './Landing';
import About from './About';
import AuthInfo from './AuthInfo';

import LessonLanding from './lessons/LessonLanding';
import LessonBrowse from './lessons/LessonBrowse';
import LessonShow from './lessons/LessonShow';
import LessonEditA from './lessons/LessonEditA';
import LessonEditB from './lessons/LessonEditB';
import LessonEditC from './lessons/LessonEditC';

import WingShow from './wings/WingShow';

import SmeLanding from './smes/SmeLanding';
import SmeShow from './smes/SmeShow';

import AdminLanding from './admin/AdminLanding';
import AdminLessonList from './admin/AdminLessonList';
import AdminLessonCreate from './admin/AdminLessonCreate';
import AdminLessonEdit from './admin/AdminLessonEdit';
import AdminLessonShow from './admin/AdminLessonShow';
import AdminInstructorList from './admin/AdminInstructorList';
import AdminWingList from './admin/AdminWingList';
import AdminSmeList from './admin/AdminSmeList';

import PrivateRoute from './PrivateRoute';

import { loadUser } from '../actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="">
        <Router history={history}>
          <div>
            <AppNavbar />
            <AuthInfo />
            <Background />
            <Container>
              <Switch>
                <Route path="/" exact component={Landing} />
                <PrivateRoute path="/about" exact component={About} />
                <PrivateRoute
                  path="/lessons"
                  exact
                  roles={['Instructor']}
                  component={LessonLanding}
                />
                <PrivateRoute
                  path="/lessons/browse"
                  exact
                  roles={['Instructor']}
                  component={LessonBrowse}
                />
                <PrivateRoute
                  path="/lessons/:id"
                  exact
                  roles={['Instructor']}
                  component={LessonShow}
                />
                <PrivateRoute
                  path="/lessons/:id/edit/parta"
                  exact
                  roles={['Instructor']}
                  component={LessonEditA}
                />
                <PrivateRoute
                  path="/lessons/:id/edit/partb"
                  exact
                  roles={['Instructor']}
                  component={LessonEditB}
                />
                <PrivateRoute
                  path="/lessons/:id/edit/partc"
                  exact
                  roles={['Instructor']}
                  component={LessonEditC}
                />
                <PrivateRoute
                  path="/wing"
                  exact
                  roles={['Instructor']}
                  component={WingShow}
                />
                <PrivateRoute
                  path="/smes"
                  exact
                  roles={['SME']}
                  component={SmeLanding}
                />
                <PrivateRoute
                  path="/smes/requests/:id"
                  exact
                  roles={['SME']}
                  component={SmeShow}
                />
                <PrivateRoute
                  path="/admin"
                  exact
                  roles={['Admin']}
                  component={AdminLanding}
                />
                <PrivateRoute
                  path="/admin/lessons"
                  exact
                  roles={['Admin']}
                  component={AdminLessonList}
                />
                <PrivateRoute
                  path="/admin/lessons/new"
                  exact
                  roles={['Admin']}
                  component={AdminLessonCreate}
                />
                <PrivateRoute
                  path="/admin/lessons/edit/:id"
                  exact
                  roles={['Admin']}
                  component={AdminLessonEdit}
                />
                <PrivateRoute
                  path="/admin/lessons/:id"
                  exact
                  roles={['Admin']}
                  component={AdminLessonShow}
                />
                <PrivateRoute
                  path="/admin/instructors"
                  exact
                  roles={['Admin']}
                  component={AdminInstructorList}
                />
                <PrivateRoute
                  path="/admin/wings"
                  exact
                  roles={['Admin']}
                  component={AdminWingList}
                />
                <PrivateRoute
                  path="/admin/smes"
                  exact
                  roles={['Admin']}
                  component={AdminSmeList}
                />
                <Redirect from="*" to="/" />
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
