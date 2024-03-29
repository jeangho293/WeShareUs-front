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
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: '24px',
          height: '24px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderWidth: '2px',
          '&::before': {
            borderWidth: '2px',
            borderTop: 'thin solid rgba(255, 255, 255)',
          },
          '&::after': {
            borderWidth: '2px',
            borderTop: 'thin solid rgba(255, 255, 255)',
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export { theme, ThemeProvider };
