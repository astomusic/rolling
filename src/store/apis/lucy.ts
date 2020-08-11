import axios from 'axios';

export const getUsers = () => {
  return axios.get('/api/users').then((response) => response.data);
};

export const getUser = (id: string) => {
  return axios.get(`/api/users/${id}`).then((response) => response.data);
};

export const addUser = (params) => {
  return axios.post('/api/users', params).then((response) => response.data);
};

export const loginOperators = (params) => {
  return axios.post('/api/operators/login', params).then((response) => response.data);
};

export const getApps = () => {
  return axios.get('/api/apps').then((response) => response.data);
};
