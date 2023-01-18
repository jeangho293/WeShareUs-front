import { Box } from '@mui/material';
import { TodoListSection } from '../../components';

function TodoScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Box
      sx={{
        borderRadius: '12px',
        boxShadow: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <TodoListSection />
    </Box>
  );
}

export { TodoScreen };
