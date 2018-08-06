import { api } from '../../services/api';

export const loginUser = (username, password, email) =>
  api.post('/users/session', { username, password, email });
export const registerUser = (username, password, email) =>
  api.post('/users', { username, password, email });
export const checkUserSession = (userId, token) =>
  api.get(`/users/${userId}/session`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
