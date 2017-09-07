import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InsertHtml from '../insert-html/InsertHtml';
import parseDate from '../../services/date';
import { getShotById } from '../../services/shots';
import closeButton from '../../assets/images/close.svg';
import styles from './styles.scss';

class ShotDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shot: null,
    };
  }

  componentWillMount() {
    getShotById(this.props.match.params.id).then(resp => this.setState({ shot: resp.data }));
  }

  render() {
    const { shot } = this.state;

    if (shot) {
      return (
        <div className={styles.container}>
          <div className={styles.main}>
            <img src={shot.user.avatar_url} alt="User avatar" />
            <div className={styles.header}>
              <h2>{shot.title}</h2>
              <h3>By <a href={shot.user.html_url}>
                {shot.user.name}</a> on {parseDate(shot.created_at)}
              </h3>
            </div>
            <Link to={'/'}>
              <figure className={styles.close}>
                <img src={closeButton} alt="Close button" />
              </figure>
            </Link>
          </div>
          <div className={styles.content}>
            <img src={shot.images.normal} alt="Shot" />
            <div className={styles.description}>
              <InsertHtml text={shot.description} />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

ShotDetails.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ShotDetails;
