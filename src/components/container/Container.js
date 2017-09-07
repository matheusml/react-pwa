import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/dribble-logo.png';
import styles from './styles.scss';

const Container = ({ children }) => (
  <header className={styles.header}>
    <Link to="/"><img src={logo} alt="Logo" /></Link>
  </header>
);

export default Container;
