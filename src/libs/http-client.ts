import axios, { AxiosRequestConfig } from 'axios';

const isDev = process.env.NODE_ENV !== 'production';
export const httpClient = (() => {
  const instance = axios.create({
    baseURL: isDev ? 'http://localhost:4000' : process.env.REACT_APP_HOST_NAME,
  });

  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const {
        response: { data },
        config,
      } = err;

      if (data.errorMessage !== 'No todo') {
        return Promise.reject(data.errorMessage);
      }
      await instance.post(config.url);
      return instance(config);
    },
  );

  return {
    async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
      const response = await instance.post(url, data, config);
      return response.data.data as T;
    },

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
