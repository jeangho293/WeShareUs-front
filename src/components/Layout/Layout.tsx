import { Stack } from '@mui/material';
import { ReactNode } from 'react';

function Layout(props: { children: ReactNode }) {
  // 1. destructure props
  const { children } = props;

  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Stack
      sx={{
        maxWidth: '50%',
        margin: '128px auto',
        borderRadius: '12px',
        backgroundColor: '#fff',
      }}
    >
      {children}
    </Stack>
  );
}

export { Layout };
