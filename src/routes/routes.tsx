import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { AdminTodoScreen, LoginScreen, TodoScreen } from '../screens';
import { TODO_BASE_URL, ADMIN_TODO, ADMIN_LOGIN } from './const';

function PrivateRouteOutlet() {
  const auth = window.localStorage.getItem('token');
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ADMIN_LOGIN} element={<LoginScreen />} />
        <Route path={TODO_BASE_URL} element={<TodoScreen />} />
        <Route element={<PrivateRouteOutlet />}>
          <Route path={ADMIN_TODO} element={<AdminTodoScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
