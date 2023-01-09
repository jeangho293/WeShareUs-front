import { AppRouter } from './routes';
import { ReactQueryClient, ReactQueryClientProvider } from './libs/react-query';
import { Layout, Navigation } from './components';
import { theme, ThemeProvider } from './libs/theme';

const client = new ReactQueryClient();

function App() {
  return (
    <ReactQueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Layout>
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
}

export default App;
