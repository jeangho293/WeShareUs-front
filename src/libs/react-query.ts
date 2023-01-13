import {
  useQuery as ReactQuery,
  QueryClient as ReactQueryClient,
  QueryClientProvider as ReactQueryClientProvider,
  useMutation as ReactQueryMutation,
} from 'react-query';

const queryClient = new ReactQueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const queryKeyMap = new Map();

const useQuery = <T extends Record<string, any>, R>(
  queryFn: (...args: T[]) => Promise<R>,
  options?: {
    variables?: T;
  },
) => {
  const { isLoading: loading, ...result } = ReactQuery(
    [...queryKeyMap.get(queryFn), ...Object.values(options?.variables ?? {})],
    () => (options?.variables ? queryFn(options?.variables) : queryFn()),
    {
      // NOTE: 우선 useQuery에 대해서 캐싱을 하지는 않겠다.
      cacheTime: 0,
    },
  );

  return { ...result, loading };
};

const useMutation = <T, R>(
  MutationFn: (args: T) => Promise<R>,
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
  >(({ variables }) => MutationFn(variables), {
    onSuccess: () => {
      if (queryKeyMap.get(MutationFn)) {
        queryClient.refetchQueries(queryKeyMap.get(MutationFn), {
          exact: false,
        });
      }
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

export {
  useQuery,
  useMutation,
  queryClient,
  ReactQueryClientProvider,
  queryKeyMap,
};
