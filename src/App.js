import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MDBContainer } from 'mdbreact';

import './App.css';

import Header from './components/Header/Header';
import LandingContent from './components/Landing/LandingContent';
import AstronautsContainer from './components/astronauts/AstronautsContainer';
import AstronautDetails from './components/astronauts/AstronautDetails';

import AgencyContainer from './components/agency/AgencyContainer';
import AgencyDetails from './components/agency/AgencyDetails';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='app__content'>
          <MDBContainer>
            <Switch>
              <Route exact path='/astronauts'>
                <AstronautsContainer />
              </Route>
              <Route exact path='/astronaut/:id'>
                <AstronautDetails />
              </Route>
              <Route exact path='/agencies'>
                <AgencyContainer />
              </Route>
              <Route exact path='/agency/:id'>
                <AgencyDetails />
              </Route>
              <Route exact path='/'>
                <LandingContent />
              </Route>
            </Switch>
          </MDBContainer>
        </div>
      </Router>
    </div>
  );
}

export default App;
