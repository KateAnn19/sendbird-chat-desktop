import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://d9754242.ngrok.io',
  headers: {
    'content-type': 'application/json',
  },
});
