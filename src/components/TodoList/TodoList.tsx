import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import { CheckBox } from '../CheckBox';
import { Todo, todoRepository } from '../../repositories/todo.repository';
import { today } from '../../libs/dayjs';

function TodoList(props: { todos: Todo[] }) {
  // 1. destructure props
  const { todos } = props;

  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  const { control, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      todos,
    },
  });
  const { fields: todoItems } = useFieldArray({
    control,
    name: 'todos',
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <List>
      {todoItems.map((item, index) => {
        return (
          <ListItem key={item.id}>
            <ListItemIcon>
              <CheckBox
                checked={item.done}
                onChange={(state) => {
                  setValue(`todos.${index}.done`, state);
                }}
              />
            </ListItemIcon>
            <ListItemText>{item.item}</ListItemText>
          </ListItem>
        );
      })}
      <Button
        onClick={handleSubmit(async ({ todos }) => {
          await todoRepository.updateDone({ todos, publishedDate: today() });
        })}
      >
        업데이트
      </Button>
    </List>
  );
}

export { TodoList };
