import React from 'react'
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/users/', // Replace with your Django backend URL
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  // Set the JWT token in the request headers
  export const setAuthToken = (token) => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  };
  
export default api;
