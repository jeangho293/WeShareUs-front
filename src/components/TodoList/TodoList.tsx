import { Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Todo, todoRepository } from '../../repositories/todo.repository';
import { CheckBox } from '../CheckBox';
import { useMutation } from '../../libs/react-query';
import { ProgressBar } from '../ProgressBar';
import type { PublishedDate } from '../../type';
import { today } from '../../libs/dayjs';

const TodoListItem = styled(ListItem)({
  backgroundColor: '#ede7f6',
  transition: 'all 0.5s',
  padding: 0,
  margin: '16px auto',
  width: '80%',
  borderRadius: '16px',
  '&:hover': { transform: 'scale(1.1)', boxShadow: 1 },
});

function TodoList(props: { todo: Todo; publishedDate: PublishedDate }) {
  // 1. destructure props
  const { todo, publishedDate } = props;

  // 2. lib hooks
  // 3. state hooks
  const [content, setContent] = useState('');
  const [doneCount, setDoneCount] = useState(
    todo.todoItems.filter((todoItem) => todoItem.done).length,
  );
  const [isExpired] = useState(publishedDate < today());

  // 4. query hooks
  const [updateTodo] = useMutation(todoRepository.updateDone);

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
    remove,
    append,
  } = useFieldArray({
    control,
    name: 'todoItems',
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  const handleUpdate = () => {
    handleSubmit(async ({ id, todoItems, publishedDate }) => {
      await updateTodo({
        variables: { id, todoItems, publishedDate },
      });
    })();
  };
  const handleAppend = (props: { content: string; done: boolean }) => {
    append(props);
    setContent('');
    handleUpdate();
  };

  return (
    <List sx={{ width: '100%' }}>
      {todoItems.length > 0 && (
        <Stack sx={{ width: '100px', margin: '0 auto' }}>
          <ProgressBar value={{ total: todoItems.length, doneCount }} />
        </Stack>
      )}

      {todoItems.map((todoItem, index) => {
        return (
          <TodoListItem key={todoItem.id}>
            <Stack direction="row" sx={{ width: '100%', alignItems: 'center' }}>
              <CheckBox
                disabled={isExpired}
                checked={todoItem.done}
                onChange={(state) => {
                  setValue(`todoItems.${index}.done`, state);
                  if (state) {
                    setDoneCount(doneCount + 1);
                  } else {
                    setDoneCount(doneCount - 1);
                  }
                  handleUpdate();
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
            {!isExpired && (
              <IconButton
                onClick={() => {
                  remove(index);
                  handleUpdate();
                }}
                sx={{ color: 'red', marginRight: '12px' }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </TodoListItem>
        );
      })}
      {publishedDate >= today() && (
        <TodoListItem>
          <TextField
            value={content}
            fullWidth
            placeholder="새로운 항목을 추가해주세요."
            onKeyDown={(event) => {
              // NOTE: onKeyDown은 enter입력시 함수가 2번 실행되는데 이걸 막기위한 코드
              if (event.nativeEvent.isComposing) {
                return;
              }
              if (event.key === 'Enter' && content) {
                handleAppend({ content, done: false });
              }
            }}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{ paddingLeft: '12px' }}
          />
          <Button
            onClick={() => {
              if (content) {
                handleAppend({ content, done: false });
              }
            }}
            sx={{
              marginLeft: '16px',
              borderRadius: '0 16px 16px 0',
              backgroundColor: '#e1bee7',
              color: 'black',
              '&:hover': { backgroundColor: '#ce93d8' },
            }}
          >
            Add
          </Button>
        </TodoListItem>
      )}
    </List>
  );
}

export { TodoList };
