import { useState } from 'react';
import { Chip, Divider, Stack, Typography } from '@mui/material';
import { useQuery } from '../../libs/react-query';
import { todoRepository } from '../../repositories/todo.repository';
import { today } from '../../libs/dayjs';
import { CalendarDatePicker } from '../CalendarDatePicker';
import { TodoList } from '../TodoList';
import { TodoListSkeleton } from '../../skeletons';

function TodoListSection() {
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
    <>
      <Stack
        spacing="16px"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="h3" sx={{ marginTop: '24px' }}>
          TODO LIST
        </Typography>
        <CalendarDatePicker
          publishedDate={publishedDate}
          onChange={(state) => {
            setPublishedDate(state);
          }}
        />
        <Divider sx={{ width: '90%' }}>
          <Chip label={`오늘의 할일 (${todo?.todoItems?.length || 0})`} />
        </Divider>
      </Stack>
      {isValid ? <TodoList todo={todo} /> : <TodoListSkeleton />}
    </>
  );
}

export { TodoListSection };
