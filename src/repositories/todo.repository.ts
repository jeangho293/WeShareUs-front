import { httpClient } from '../libs/http-client';
import { queryClient, queryKeyMap } from '../libs/react-query';
import { PublishedDate } from '../type';

export type TodoItem = { content: string; done: boolean };
export type Todo = {
  id: string;
  publishedDate: string;
  todoItems: TodoItem[];
};

export const todoRepository = {
  async retrieve({ publishedDate }: { publishedDate: string }) {
    return httpClient.get<Todo>(`/todos?publishedDate=${publishedDate}`);
  },

  async updateDone({
    id,
    publishedDate,
    todoItems,
  }: {
    id: string;
    publishedDate: PublishedDate;
    todoItems: TodoItem[];
  }) {
    return httpClient
      .patch(`/todos/${id}`, { publishedDate, todoItems })
      .then(() => {
        queryClient.refetchQueries(['todo', id]);
      });
  },
};

queryKeyMap.set(todoRepository.retrieve, ['todo']);
queryKeyMap.set(todoRepository.updateDone, ['todo']);
