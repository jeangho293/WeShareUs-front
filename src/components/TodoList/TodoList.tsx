import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import { useMutation } from '../../libs/react-query';
import { CheckBox } from '../CheckBox';
import { Todo, todoRepository } from '../../repositories/todo.repository';
import { today } from '../../libs/dayjs';

function TodoList(props: { todos: Todo[] }) {
  // 1. destructure props
  const { todos } = props;

  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  const [updateTodo, { loading: isUpdateTodoLoading }] = useMutation(
    ['todo'],
    todoRepository.updateDone,
    {
      onCompleted: () => {
        console.log('success');
      },
    },
  );

  // 5. form hooks
  const {
    formState: { isDirty, isSubmitting },
    control,
    setValue,
    handleSubmit,
  } = useForm({
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
        disabled={isUpdateTodoLoading || isSubmitting}
        onClick={handleSubmit(async ({ todos }) => {
          await updateTodo({ variables: { todos, publishedDate: today() } });
        })}
      >
        업데이트
      </Button>
    </List>
  );
}

export { TodoList };
