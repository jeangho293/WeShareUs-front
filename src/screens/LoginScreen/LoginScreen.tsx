import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, LoginForm } from '../../components';

function LoginScreen() {
  // 1. destructure props
  // 2. lib hooks
  const navigation = useNavigate();

  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigation('/');
    }
  }, []);

  // 8. handlers

  return (
    <Layout maxWidth="480px">
      <LoginForm />
    </Layout>
  );
}

export { LoginScreen };
