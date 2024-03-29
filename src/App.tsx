import { SnackbarProvider } from 'notistack';
import { AppRouter } from './routes';
import { queryClient, ReactQueryClientProvider } from './libs/react-query';
import { Navigation } from './components';
import { theme, ThemeProvider } from './libs/theme';

function App() {
  return (
    <ReactQueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          autoHideDuration={2000}
          maxSnack={1}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Navigation />
          <AppRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
}

export default App;
