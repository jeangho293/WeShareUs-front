import { Box, List, Divider } from '@mui/material';
import { useQuery } from '../../libs/react-query';
import { today } from '../../libs/dayjs';
import { todoRepository } from '../../repositories/todo.repository';
import { TodoListItem } from '../TodoListItem';

function TodoList() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  const { data: todos } = useQuery([''], todoRepository.list, {
    variables: { publishedDate: today() },
  });

  // 5. form hooks
  // 6. calculate values
  const todoItems = todos || [];

  // 7. effect hooks
  // 8. handlers
  return (
    <Box boxShadow={3} sx={{ borderRadius: '0px 0px 16px 16px' }}>
      <List>
        {todoItems.map((todoItem, index) => {
          return (
            <>
              <TodoListItem key={todoItem.id}>{todoItem.item}</TodoListItem>
              {index !== todoItems.length - 1 && <Divider />}
            </>
          );
        })}
      </List>
    </Box>
  );
}

export { TodoList };