import { Stack } from '@mui/material';
import { ReactNode } from 'react';

function Layout(props: { children: ReactNode; maxWidth?: string }) {
  // 1. destructure props
  const { children, maxWidth = '50%' } = props;

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
        maxWidth,
        margin: '0 auto',
        borderRadius: '12px',
        padding: '128px 0',
      }}
    >
      {children}
    </Stack>
  );
}

export { Layout };
