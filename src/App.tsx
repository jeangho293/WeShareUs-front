import { AppRouter } from './routes';
import { theme, ThemeProvider } from './libs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
