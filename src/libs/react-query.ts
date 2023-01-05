import {
  useQuery as ReactQuery,
  QueryClient as ReactQueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query';

const useQuery = <T extends Record<string, any>, R>(
  queryKey: string[],
  queryFn: (...args: T[]) => Promise<R>,
  options?: {
    variables?: T;
  },
) => {
  return ReactQuery(queryKey, () =>
    options?.variables ? queryFn(options?.variables) : queryFn(),
  );
};

export { useQuery, ReactQueryClient, ReactQueryClientProvider };
