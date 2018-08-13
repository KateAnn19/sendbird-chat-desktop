import { api } from '../../services/api';

export const searchUser = (query = '') => api.get(`/users?search=${query}`);
