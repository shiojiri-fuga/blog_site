// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const csrftoken = getCookie('csrftoken');

// client.defaults.headers.common['X-CSRFToken'] = csrftoken;

export function createUser(values) {
  return client.post('/api/auth/users/', values);
}

export function login(email, password) {
  return client.post('/api/login', { email, password });
}

export function refreshToken(refresh) {
  return client.post('/api/auth/token/refresh/', { refresh });
}

export function verifyToken(token) {
  return client.post('/api/auth/token/verify/', { token });
}



function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
