import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://527536a3.ngrok.io',
  headers: {
    'content-type': 'application/json'
  }
});
