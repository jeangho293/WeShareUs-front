import {
  Box,
  Checkbox,
  List,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { useQuery } from '../../libs/react-query';
import { today } from '../../libs/dayjs';
import { todoRepository } from '../../repositories/todo.repository';

function TodoList() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  const { data } = useQuery([''], todoRepository.list, {
    variables: { publishedDate: today() },
  });
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Box>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          fda
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          fda
        </ListItemButton>
      </List>
    </Box>
  );
}

export { TodoList };
