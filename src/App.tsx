import { AppRouter } from './routes';
import { ReactQueryClient, ReactQueryClientProvider } from './libs/react-query';
import { Navigation } from './components';
import { theme, ThemeProvider } from './libs/theme';

const client = new ReactQueryClient();

function App() {
  return (
    <ReactQueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <AppRouter />
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
}

export default App;
