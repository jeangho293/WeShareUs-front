import { Paper } from '@mui/material';
import { ReactNode } from 'react';
import NightSky from '../../assets/night-sky.jpg';

function PublicLayout(props: { children: ReactNode }) {
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
    <Paper
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${NightSky})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </Paper>
  );
}

export { PublicLayout };
