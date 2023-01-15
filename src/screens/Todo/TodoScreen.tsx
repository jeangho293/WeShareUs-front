import { useState } from 'react';
import { Box, Typography, CircularProgress, Stack } from '@mui/material';
import {
  CalendarDatePicker,
  TodoList,
  TodoListSection,
} from '../../components';
import { useQuery } from '../../libs/react-query';
import { today } from '../../libs/dayjs';
import { todoRepository } from '../../repositories/todo.repository';

function TodoScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks

  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Box sx={{ borderRadius: '12px', boxShadow: 3 }}>
      <TodoListSection />
    </Box>
  );
}

export { TodoScreen };
