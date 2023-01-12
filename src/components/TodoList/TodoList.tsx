import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation } from '../../libs/react-query';
import { CheckBox } from '../CheckBox';
import { Todo, todoRepository } from '../../repositories/todo.repository';

function TodoList(props: { todo: Todo }) {
  // 1. destructure props
  const { todo } = props;

  // 2. lib hooks
  const { enqueueSnackbar } = useSnackbar();

  // 3. state hooks
  // 4. query hooks
  const [updateTodo, { loading: isUpdateTodoLoading }] = useMutation(
    todoRepository.updateDone,
    {
      onCompleted: () => enqueueSnackbar('updated.', { variant: 'success' }),
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
      todo,
    },
  });
  const { fields: todoItems, remove } = useFieldArray({
    control,
    name: 'todo.todoItems',
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
                    setValue(`todo.todoItems.${index}.done`, state);
                  }}
                />
                <ListItemText>
                  <Controller
                    control={control}
                    name={`todo.todoItems.${index}.done`}
                    render={({ field }) => {
                      return (
                        <TextField
                          sx={{ width: '80%' }}
                          disabled={field.value}
                          defaultValue={item.content}
                          {...register(`todo.todoItems.${index}.content`)}
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
        onClick={handleSubmit(async ({ todo }) => {
          await updateTodo({ variables: { todo } });
        })}
      >
        업데이트
      </Button>
    </>
  );
}

export { TodoList };
