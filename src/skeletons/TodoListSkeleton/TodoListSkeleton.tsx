import { Skeleton, Stack, Typography } from '@mui/material';

function TodoListSkeleton() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <div>
      <Stack sx={{ width: '100px', margin: '8px auto 0' }}>
        <Typography variant="caption">
          <Skeleton animation="wave" sx={{ borderRadius: '20px' }} />
        </Typography>
      </Stack>
      <Stack sx={{ width: '80%', margin: '0 auto' }}>
        <Typography variant="h3">
          <Skeleton animation="wave" sx={{ borderRadius: '20px' }} />
        </Typography>
        <Typography variant="h3">
          <Skeleton animation="wave" sx={{ borderRadius: '20px' }} />
        </Typography>
      </Stack>
    </div>
  );
}

export { TodoListSkeleton };
