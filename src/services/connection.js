import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP || 'http://localhost:4000/',
});

export default api;