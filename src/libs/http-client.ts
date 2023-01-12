import axios, { AxiosRequestConfig } from 'axios';
import { today } from './dayjs';

export const httpClient = (() => {
  const instance = axios.create({
    baseURL: 'http://localhost:4000',
  });

  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const {
        response: { data },
        config,
      } = err;

      if (data !== 'No todo') {
        return Promise.reject(err);
      }
      await instance.post('/todos', { publishedDate: today() });
      return instance(config);
    },
  );

  return {
    async get<T>(url: string, config?: AxiosRequestConfig) {
      const response = await instance.get(url, config);
      return response.data.data as T;
    },

    async patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
      const response = await instance.patch(url, data, config);
      return response.data.data as T;
    },
  };
})();
