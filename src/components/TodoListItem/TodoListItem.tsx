import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import { Todo } from '../../repositories/todo.repository';

function TodoListItem(props: { todo: Todo }) {
  // 1. destructure props
  const { todo } = props;

  // 2. lib hooks
  // 3. state hooks
  const [checked, setChecked] = useState(todo.done);

  // 4. query hooks
  // 5. form hooks
  const { setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: todo.id,
      item: todo.item,
      order: todo.order,
      done: todo.done,
    },
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setValue('done', event.target.checked);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox checked={checked} onChange={handleChange} />
      </ListItemIcon>
      <ListItemText>{todo.item}</ListItemText>
    </ListItem>
  );
}

export { TodoListItem };
