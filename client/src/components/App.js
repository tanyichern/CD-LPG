import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import AppNavbar from './AppNavbar';
import Landing from './Landing';
import About from './About';

import LessonLanding from './lessons/LessonLanding';
import LessonBrowse from './lessons/LessonBrowse';
import LessonShow from './lessons/LessonShow';
import LessonEditA from './lessons/LessonEditA';
import LessonEditB from './lessons/LessonEditB';
import LessonEditC from './lessons/LessonEditC';

import WingShow from './wings/WingShow';

import InstructorShow from './instructors/InstructorShow';

import SmeLanding from './smes/SmeLanding';
import SmeShow from './smes/SmeShow';

import AdminLanding from './admin/AdminLanding';
import AdminLessons from './admin/AdminLessons';
import AdminWings from './admin/AdminWings';
import AdminSmes from './admin/AdminSmes';

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div className="">
        <Router history={history}>
          <div>
            <AppNavbar />
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/about" exact component={About} />
              <Route path="/lessons" exact component={LessonLanding} />
              <Route path="/lessons/browse" exact component={LessonBrowse} />
              <Route path="/lessons/:id" exact component={LessonShow} />
              <Route
                path="/lessons/:id/edit/parta"
                exact
                component={LessonEditA}
              />
              <Route
                path="/lessons/:id/edit/partb"
                exact
                component={LessonEditB}
              />
              <Route
                path="/lessons/:id/edit/partc"
                exact
                component={LessonEditC}
              />
              <Route path="/wings/:name" exact component={WingShow} />
              <Route
                path="/instructors/:name"
                exact
                component={InstructorShow}
              />
              <Route path="/smes" exact component={SmeLanding} />
              <Route path="/smes/:name" exact component={SmeShow} />
              <Route path="/admin" exact component={AdminLanding} />
              <Route path="/admin/lessons" exact component={AdminLessons} />
              <Route path="/admin/wings" exact component={AdminWings} />
              <Route path="/admin/smes" exact component={AdminSmes} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
