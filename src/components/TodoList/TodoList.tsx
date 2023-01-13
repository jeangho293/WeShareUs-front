import { Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Todo, todoRepository } from '../../repositories/todo.repository';
import { CheckBox } from '../CheckBox';
import { useMutation } from '../../libs/react-query';

function TodoList(props: { todo: Todo }) {
  // 1. destructure props
  const { todo } = props;

  // 2. lib hooks
  const { enqueueSnackbar } = useSnackbar();

  // 3. state hooks
  const [content, setContent] = useState('');

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
        <ListItem>
          <TextField
            value={content}
            placeholder="새로운 할일을 추가하세요."
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <IconButton
            onClick={() => {
              append({ content, done: false });
              setContent('');
              console.log(content);
            }}
          >
            <AddIcon sx={{ backgroundColor: 'green', borderRadius: '50%' }} />
          </IconButton>
        </ListItem>
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
      </Stack>
    </>
  );
}

export { TodoList };
