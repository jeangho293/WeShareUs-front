import { httpClient } from '../libs/http-client';

type Todo = {
  id: string;
  item: string;
  order: number;
  done: boolean;
  publishedDate: string;
};

export const todoRepository = {
  async list({ publishedDate }: { publishedDate: string }) {
    return httpClient.get<Todo[]>(`/todos?publishedDate=${publishedDate}`);
  },
};
