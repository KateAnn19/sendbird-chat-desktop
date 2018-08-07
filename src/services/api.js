import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.88.45:8000',
  headers: {
    'content-type': 'application/json',
  },
});
