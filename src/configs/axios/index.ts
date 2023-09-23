import axios from 'axios';
// Common
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

const API = axios.create({
  baseURL: process.env.VUE_APP_API,
});

export { API };
