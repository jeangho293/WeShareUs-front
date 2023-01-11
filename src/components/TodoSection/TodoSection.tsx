import { Box, Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from '../../libs/react-query';
import { todoRepository } from '../../repositories/todo.repository';
import { today } from '../../libs/dayjs';
import { TodoList } from '../TodoList';
import { CalendarDatePicker } from '../CalendarDatePicker';
import type { PublishedDate } from '../../type';

function TodoSection() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  const [publishedDate, setPublishedDate] = useState<PublishedDate>(today());

  // 4. query hooks
  const { data: todos, isLoading: isLoadingTodos } = useQuery(
    ['todo'],
    todoRepository.list,
    {
      variables: { publishedDate },
    },
  );

  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <div>
      <CalendarDatePicker
        publishedDate={publishedDate}
        onChange={setPublishedDate}
      />
      <Box boxShadow={3} sx={{ borderRadius: '16px' }}>
        <Typography variant="h4" textAlign="center" sx={{ padding: '16px 0' }}>
          TODO LIST
        </Typography>
        {!isLoadingTodos && <TodoList todos={todos || []} />}
      </Box>
    </div>
  );
}

export { TodoSection };
