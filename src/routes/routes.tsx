import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminLoginScreen } from '../screens';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
