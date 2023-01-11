import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
} from '@mui/material';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
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
    formState: { isSubmitting },
    control,
    setValue,
    handleSubmit,
    register,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      todos,
    },
  });
  const { fields: todoItems, remove } = useFieldArray({
    control,
    name: 'todos',
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <>
      <List>
        {todoItems.map((item, index) => {
          return (
            <div key={item.id}>
              <ListItem>
                <CheckBox
                  checked={item.done}
                  onChange={(state) => {
                    setValue(`todos.${index}.done`, state);
                  }}
                />
                <ListItemText>
                  <Controller
                    control={control}
                    name={`todos.${index}.done`}
                    render={({ field }) => {
                      return (
                        <TextField
                          sx={{ width: '80%' }}
                          disabled={field.value}
                          defaultValue={item.item}
                          {...register(`todos.${index}.item`)}
                        />
                      );
                    }}
                  />
                </ListItemText>
                <IconButton onClick={() => remove(index)}>
                  <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
      <Button
        disabled={isUpdateTodoLoading || isSubmitting}
        sx={{ margin: '12px 24px' }}
        onClick={handleSubmit(async ({ todos }) => {
          console.log(todos);
          await updateTodo({ variables: { todos, publishedDate: today() } });
        })}
      >
        업데이트
      </Button>
    </>
  );
}

export { TodoList };
