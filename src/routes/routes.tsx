import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TODO_BASE_URL } from './const';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={TODO_BASE_URL} element={<div>hi</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
