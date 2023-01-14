import { useState } from 'react';
import { Box, Typography, CircularProgress, Stack } from '@mui/material';
import { CalendarDatePicker, TodoList } from '../../components';
import { useQuery } from '../../libs/react-query';
import { today } from '../../libs/dayjs';
import { todoRepository } from '../../repositories/todo.repository';

function TodoScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  const [publishedDate, setPublishedDate] = useState(today());

  // 4. query hooks
  const { data: todo, loading: isTodoLoading } = useQuery(
    todoRepository.retrieve,
    {
      variables: { publishedDate },
    },
  );

  // 5. form hooks
  // 6. calculate values
  const isValid = todo && !isTodoLoading;

  // 7. effect hooks
  // 8. handlers
  return (
    <Box sx={{ borderRadius: '12px', boxShadow: 3 }}>
      <Stack
        spacing="16px"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="h4">TODO LIST</Typography>
        <CalendarDatePicker
          publishedDate={publishedDate}
          onChange={setPublishedDate}
          width="25%"
        />
        {!isValid && (
          <div>
            <CircularProgress color="primary" />
          </div>
        )}
      </Stack>
      {todo && <TodoList todo={todo} />}
    </Box>
  );
}

export { TodoScreen };
