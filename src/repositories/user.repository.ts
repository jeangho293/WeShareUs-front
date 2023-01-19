import { httpClient } from '../libs/http-client';

const userRepository = {
  async login({ account, password }: { account: string; password: string }) {
    return httpClient.post<{ token: string; account: string }>('/users/login', {
      account,
      password,
    });
  },
};

export { userRepository };
