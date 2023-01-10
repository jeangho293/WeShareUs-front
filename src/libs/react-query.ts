import {
  useQuery as ReactQuery,
  QueryClient as ReactQueryClient,
  QueryClientProvider as ReactQueryClientProvider,
  useMutation as ReactQueryMutation,
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

const useMutation = <T, R>(
  queryKey: string[],
  queryFn: (args: T) => Promise<R>,
  options?: {
    onCompleted?: () => void;
    onError?: (error: Error) => void;
  },
): readonly [
  (options: {
    variables: T;
    onCompleted?: (data: R) => void;
    onError?: (error: Error) => void;
  }) => Promise<R>,
  { loading: boolean },
] => {
  const { isLoading: loading, mutateAsync } = ReactQueryMutation<
    R,
    Error,
    { variables: T }
  >(queryKey, ({ variables }) => queryFn(variables), {
    onSuccess: () => {
      options?.onCompleted?.();
    },
    onError: options?.onError,
  });

  return [
    (options: {
      variables: T;
      onCompleted?: (data: R) => void;
      onError?: (error: Error) => void;
    }) => {
      return mutateAsync({
        variables: options.variables,
      });
    },
    {
      loading,
    },
  ];
};

export { useQuery, useMutation, ReactQueryClient, ReactQueryClientProvider };
