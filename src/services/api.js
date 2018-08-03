import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://288fc776.ngrok.io',
  headers: {
    'content-type': 'application/json'
  }
});
