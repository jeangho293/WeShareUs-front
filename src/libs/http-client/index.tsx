import axios from 'axios';

export const httpClient = (() => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return {
    async get<T>(url: string, params?: any) {
      const response = await instance.get<T>(url, { params });
      // @ts-expect-error
      return response?.data?.data as T;
    },

    async post<T>(url: string, data: any) {
      const response = await instance.post<T>(url, data);
      // @ts-expect-error
      return response?.data?.data as T;
    },
  };
})();
