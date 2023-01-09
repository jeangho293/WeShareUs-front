import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';

function TodoListItem(props: { children: ReactNode }) {
  // 1. destructure props
  const { children } = props;

  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
}

export { TodoListItem };
