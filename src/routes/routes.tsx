import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hi</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
