import axios from 'axios';
import { store } from '~/store';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

export const publicApi = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

export const adminApi = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

adminApi.interceptors.request.use(
  async config => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${
      store.getState().admin.data.token
    }`;
    return config;
  },
  async error => {
    Promise.reject(error);
  }
);

function getToken() {
  const token = store.getState().user.data.token;
  return token;
}

api.interceptors.request.use(
  async config => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  async error => {
    Promise.reject(error);
  }
);

export default api;
