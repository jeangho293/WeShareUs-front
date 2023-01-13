import { httpClient } from '../libs/http-client';
import { queryClient, queryKeyMap } from '../libs/react-query';

export type Todo = {
  id: string;
  publishedDate: string;
  todoItems: { content: string; done: boolean }[];
};

export const todoRepository = {
  async retrieve({ publishedDate }: { publishedDate: string }) {
    return httpClient.get<Todo>(`/todos?publishedDate=${publishedDate}`);
  },

  async updateDone({ todo }: { todo: Todo }) {
    return httpClient.patch(`/todos`, todo).then(() => {
      queryClient.refetchQueries(['todo', todo.publishedDate]);
    });
  },
};

queryKeyMap.set(todoRepository.retrieve, ['todo']);
queryKeyMap.set(todoRepository.updateDone, ['todo']);
