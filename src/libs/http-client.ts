import axios, { AxiosRequestConfig } from 'axios';

export const httpClient = (() => {
  const instance = axios.create({
    baseURL: 'http://localhost:4000',
  });

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
