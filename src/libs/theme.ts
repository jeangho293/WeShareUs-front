import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: { padding: '4px 8px' },
      },
    },
  },
});

export { theme, ThemeProvider };
