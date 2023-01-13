import { Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import { Todo, todoRepository } from '../../repositories/todo.repository';
import { CheckBox } from '../CheckBox';
import { useMutation } from '../../libs/react-query';

function TodoList(props: { todo: Todo }) {
  // 1. destructure props
  const { todo } = props;

  // 2. lib hooks
  const { enqueueSnackbar } = useSnackbar();

  // 3. state hooks
  // 4. query hooks
  const [updateTodo] = useMutation(todoRepository.updateDone, {
    onCompleted: () =>
      enqueueSnackbar('수정되었습니다', { variant: 'success' }),
    onError: () => enqueueSnackbar('실패했습니다.', { variant: 'error' }),
  });

  // 5. form hooks
  const { control, getValues, setValue, register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: todo.id,
      publishedDate: todo.publishedDate,
      todoItems: todo.todoItems,
    },
  });
  const {
    fields: todoItems,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'todoItems',
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <>
      <List>
        {todoItems.map((todoItem, index) => {
          return (
            <ListItem key={todoItem.id}>
              <CheckBox
                checked={todoItem.done}
                onChange={(state) => {
                  setValue(`todoItems.${index}.done`, state);
                }}
              />
              <Controller
                control={control}
                name={`todoItems.${index}.done`}
                render={({ field }) => {
                  return (
                    <div style={{ width: '85%' }}>
                      {field.value ? (
                        <Typography>
                          {getValues(`todoItems.${index}.content`)}
                        </Typography>
                      ) : (
                        <TextField
                          defaultValue={todoItem.content}
                          disabled={field.value}
                          fullWidth
                          {...register(`todoItems.${index}.content`)}
                        />
                      )}
                      {/* <TextField */}
                      {/*  defaultValue={todoItem.content} */}
                      {/*  disabled={field.value} */}
                      {/*  sx={{ width: '85%' }} */}
                      {/*  {...register(`todoItems.${index}.content`)} */}
                      {/* /> */}
                    </div>
                  );
                }}
              />
              <IconButton onClick={() => remove(index)} sx={{ color: 'red' }}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Stack
        spacing="16px"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Button
          onClick={handleSubmit(async ({ id, publishedDate, todoItems }) => {
            await updateTodo({
              variables: { todo: { id, publishedDate, todoItems } },
            });
          })}
        >
          수정하기
        </Button>
        <Button onClick={() => append({ content: '', done: false })}>
          추가하기
        </Button>
      </Stack>
    </>
  );
}

export { TodoList };
