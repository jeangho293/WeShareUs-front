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
        maxWidth: '60%',
        margin: '0 auto',
        padding: '16px 24px',
      }}
    >
      {children}
    </Stack>
  );
}

export { Layout };
