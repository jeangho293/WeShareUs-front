import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
        disableElevation: true,
        disableRipple: true,
      },
    },
  },
});

export { theme, ThemeProvider };
