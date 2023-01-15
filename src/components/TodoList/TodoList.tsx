import { Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Todo, todoRepository } from '../../repositories/todo.repository';
import { CheckBox } from '../CheckBox';
import { useMutation } from '../../libs/react-query';
import { ProgressBar } from '../ProgressBar';

function TodoList(props: { todo: Todo }) {
  // 1. destructure props
  const { todo } = props;

  // 2. lib hooks
  const { enqueueSnackbar } = useSnackbar();

  // 3. state hooks
  const [content, setContent] = useState('');
  const [doneCount, setDoneCount] = useState(
    todo.todoItems.filter((todoItem) => todoItem.done).length,
  );

  // 4. query hooks
  const [updateTodo] = useMutation(todoRepository.updateDone, {
    onCompleted: () =>
      enqueueSnackbar('수정되었습니다', { variant: 'success' }),
    onError: () => enqueueSnackbar('실패했습니다.', { variant: 'error' }),
  });

  // 5. form hooks
  const { control, getValues, setValue, handleSubmit } = useForm({
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
  // useEffect(() => {}, [todoItems]);
  // 8. handlers
  const handleUpdate = () => {
    handleSubmit(async ({ id, todoItems, publishedDate }) => {
      await updateTodo({
        variables: { todo: { id, todoItems, publishedDate } },
      });
    })();
  };

  return (
    <List>
      <ListItem sx={{ margin: '16px auto', width: '80%' }}>
        <TextField
          value={content}
          fullWidth
          placeholder="새로운 할일을 추가하세요."
          onChange={(e) => {
            setContent(e.target.value);
          }}
          error={!content}
        />
        <IconButton
          onClick={() => {
            if (content) {
              append({ content, done: false });
              setContent('');
              handleUpdate();
            }
          }}
          sx={{ marginLeft: '16px' }}
        >
          <AddBoxIcon sx={{ color: '#8bc34a', borderRadius: '50%' }} />
        </IconButton>
      </ListItem>
      <Divider sx={{ padding: '0 16px' }}>
        <Chip label={`오늘의 할일 (${todoItems.length})`} />
      </Divider>
      <Stack sx={{ width: '100px', margin: '12px auto 0' }}>
        <ProgressBar value={{ total: todoItems.length, doneCount }} />
      </Stack>
      {todoItems.map((todoItem, index) => {
        return (
          <ListItem
            key={todoItem.id}
            sx={{
              backgroundColor: '#ede7f6',
              transition: 'all 0.5s',
              padding: '0 12px 0 0',
              margin: '16px auto',
              width: '80%',
              borderRadius: '16px',
              '&:hover': { transform: 'scale(1.1)', boxShadow: 1 },
            }}
          >
            <Stack direction="row" sx={{ width: '100%', alignItems: 'center' }}>
              <CheckBox
                checked={todoItem.done}
                onChange={(state) => {
                  setValue(`todoItems.${index}.done`, state);
                  if (state) {
                    setDoneCount(doneCount + 1);
                  } else {
                    setDoneCount(doneCount - 1);
                  }
                }}
              />

              <Controller
                control={control}
                name={`todoItems.${index}.done`}
                render={({ field }) => {
                  return (
                    <Typography
                      sx={
                        field.value
                          ? {
                              textDecorationLine: 'line-through',
                              color: 'grey',
                            }
                          : {}
                      }
                    >
                      {getValues(`todoItems.${index}.content`)}
                    </Typography>
                  );
                }}
              />
            </Stack>
            <IconButton
              onClick={() => {
                remove(index);
                handleUpdate();
              }}
              sx={{ color: 'red' }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export { TodoList };
