import { httpClient } from '../libs/http-client';

export const todoRepository = {
  async list({ publishedDate }: { publishedDate: string }) {
    return httpClient.get(`/todos?publishedDate=${publishedDate}`);
  },
};
