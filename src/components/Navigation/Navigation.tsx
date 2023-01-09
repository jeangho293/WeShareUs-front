import { AppBar, Toolbar, Typography, Link, Divider } from '@mui/material';
import { NavigationMenu } from './NavigationMenu';

function Navigation() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <AppBar
      sx={{ backgroundColor: '#202124', padding: '0 16px' }}
      position="static"
    >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          We Share Us
        </Typography>
        <Divider
          orientation="vertical"
          sx={{ borderColor: '#FFF', margin: '12px' }}
          flexItem
        />
        <NavigationMenu />
      </Toolbar>
    </AppBar>
  );
}

export { Navigation };
