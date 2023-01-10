import { Box } from '@mui/material';
import { useQuery } from '../../libs/react-query';
import { todoRepository } from '../../repositories/todo.repository';
import { today } from '../../libs/dayjs';
import { TodoList } from '../TodoList';

function TodoSection() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  const { data: todos, isLoading: isLoadingTodos } = useQuery(
    ['todo'],
    todoRepository.list,
    {
      variables: { publishedDate: today() },
    },
  );

  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Box boxShadow={3} sx={{ borderRadius: '16px' }}>
      {!isLoadingTodos && <TodoList todos={todos || []} />}
    </Box>
  );
}

export { TodoSection };
