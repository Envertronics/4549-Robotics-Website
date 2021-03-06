import React from 'react';
import Home from './pages/home';
import A from './pages/teamA';
import B from './pages/teamB';
import C from './pages/teamC';
import D from './pages/teamD';
import E from './pages/teamE';
import F from './pages/teamF';
import Vex from './pages/vex';
import Page404 from './components/404';
import './Fonts/fonts.css';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

function App() {
  return (

      <Router>
        <div id="App">
          <CSSTransitionGroup
            transitionName="fadeIn"
            transitionAppear={true}
            transitionAppearTimeout={1000}
          >
            <Switch>
              <Route path={["/", "/home",]} exact component={Home}></Route>
              <Route path="/teams/4549A" component={A}></Route>
              <Route path="/teams/4549B" component={B}></Route>
              <Route path="/teams/4549C" component={C}></Route>
              <Route path="/teams/4549D" component={D}></Route>
              <Route path="/teams/4549E" component={E}></Route>
              <Route path="/teams/4549F" component={F}></Route>
              <Route path="/vex" component={Vex}></Route>
              <Route component={Page404}></Route>
            </Switch>
          </CSSTransitionGroup>
        </div>
      </Router>

  );
}

export default App;
