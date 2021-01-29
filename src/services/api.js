import axios from 'axios';

const api = axios.create({
  baseURL: 'https://comunicabackdev.herokuapp.com',
});

export default api;
