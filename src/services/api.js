import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dogbreed-api.q9.com.br/',
});

api.interceptors.request.use(async config => {
  try {
    return config;
  } catch (err) {
    // return false;
  }
});

export default api;
