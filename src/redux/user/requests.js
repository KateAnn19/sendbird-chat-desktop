import { api } from '../../services/api';


export const loginUser = () => api.post('/users/login', {
  username: 'tim',
  password: '123456'
});
