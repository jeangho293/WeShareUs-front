import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../screens';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
