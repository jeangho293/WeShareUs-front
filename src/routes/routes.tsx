import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ADMIN_LOGIN_PATH, ADMIN_POST_PATH } from './paths';
import { AdminLoginScreen } from '../screens';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ADMIN_LOGIN_PATH} element={<AdminLoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
