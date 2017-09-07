import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Container from '../components/container/Container';
import Shots from '../components/shots/Shots';
import ShotDetails from '../components/shot-details/ShotDetails';

import styles from './styles.scss';
import './styles.css';

const App = () => (
  <Router>
    <div>
      <Container />
      <div className={styles.container}>
        <Switch>
          <Route exact component={Shots} path="/" />
          <Route exact component={ShotDetails} path="/shots/:id" />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;
