import { api } from '../../services/api';


export const loginUser = (username, password, email) => api.post('/users/session', { username, password, email });
export const createUser = (username, password, email) => api.post('/users', { username, password, email });
