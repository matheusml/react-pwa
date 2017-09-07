import axios from 'axios';

import ACCESS_TOKEN from '../config/dribbleAccessToken';

export default function getShots(page, perPage) {
  return axios.get('https://api.dribbble.com/v1/shots', {
    params: {
      access_token: ACCESS_TOKEN,
      page,
      per_page: perPage,
    },
  });
}

export function getShotById(id) {
  return axios.get(`https://api.dribbble.com/v1/shots/${id}`, {
    params: {
      access_token: ACCESS_TOKEN,
    },
  });
}
