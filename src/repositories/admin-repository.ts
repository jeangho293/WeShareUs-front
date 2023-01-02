import { httpClient } from '../libs';

const adminRepository = {
  async login({ aud, password }: { aud: string; password: string }) {
    return httpClient.post<{ token: string; role: string }>('/admin/login', {
      aud,
      password,
    });
  },
};

export { adminRepository };
