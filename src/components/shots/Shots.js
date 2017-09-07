/* eslint-disable no-undef */
import React, { Component } from 'react';

import Shot from '../shot/Shot';
import getShots from '../../services/shots';

const PAGE = 1;
const PER_PAGE = 16;

class Shots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: [],
      page: PAGE,
      perPage: PER_PAGE,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    getShots(this.state.page, this.state.perPage)
      .then(resp => this.setState({ shots: resp.data }));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.setState({ page: this.state.page + 1 }, () => {
        getShots(this.state.page, this.state.perPage)
          .then(resp => this.setState({ shots: this.state.shots.concat(resp.data) }));
      });
    }
  }

  render() {
    return (
      <div>
        { this.state.shots.map(shot =>
          <Shot
            key={shot.id}
            id={shot.id}
            image={shot.images.teaser}
            date={shot.created_at}
            title={shot.title}
            description={shot.description}
            viewsCount={shot.views_count}
            likesCount={shot.likes_count}
          />)
        }
      </div>
    );
  }
}

export default Shots;
