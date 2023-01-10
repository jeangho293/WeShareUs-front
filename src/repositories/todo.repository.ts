import { httpClient } from '../libs/http-client';

export type Todo = {
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

  async updateDone({
    todos,
    publishedDate,
  }: {
    todos: Todo[];
    publishedDate: string;
  }) {
    return httpClient.patch(`/todos?publishedDate=${publishedDate}`, todos);
  },
};
