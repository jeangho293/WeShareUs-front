import { SnackbarProvider } from 'notistack';
import { Paper } from '@mui/material';
import { AppRouter } from './routes';
import { queryClient, ReactQueryClientProvider } from './libs/react-query';
import { Layout, Navigation } from './components';
import { theme, ThemeProvider } from './libs/theme';
import NightSky from './assets/night-sky.jpg';

function App() {
  return (
    <ReactQueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundImage: `url(${NightSky})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <SnackbarProvider
            autoHideDuration={2000}
            maxSnack={1}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Navigation />
            <Layout>
              <AppRouter />
            </Layout>
          </SnackbarProvider>
        </Paper>
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
}

export default App;
