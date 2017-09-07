import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InsertHtml from '../insert-html/InsertHtml';
import styles from './styles.scss';

const ShotDescription = ({ id, showDescription, description, title }) => {
  if (showDescription) {
    return (
      <Link to={`/shots/${id}`}>
        <div className={styles.container}>
          <h4>{title}</h4>
          <div className={styles.description}>
            <InsertHtml maxLength={150} text={description} />
          </div>
        </div>
      </Link>
    );
  }
  return null;
};

ShotDescription.defaultProps = {
  description: '',
};

ShotDescription.propTypes = {
  id: PropTypes.number.isRequired,
  showDescription: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ShotDescription;
