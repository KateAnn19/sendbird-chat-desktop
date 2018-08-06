import { api } from '../../services/api';

export const loginUser = (username, password, email) =>
  api.post('/users/session', { username, password, email });
export const registerUser = (username, password, email) =>
  api.post('/users', { username, password, email });
export const checkUserSession = (sbUserId, token) =>
  api.get(`/users/${sbUserId}/session`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
