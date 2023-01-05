import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoScreen } from '../screens';
import { TODO_BASE_URL } from './const';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={TODO_BASE_URL} element={<TodoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
