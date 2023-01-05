import { AppRouter } from './routes';
import { ReactQueryClient, ReactQueryClientProvider } from './libs/react-query';

const client = new ReactQueryClient();

function App() {
  return (
    <ReactQueryClientProvider client={client}>
      <AppRouter />
    </ReactQueryClientProvider>
  );
}

export default App;
