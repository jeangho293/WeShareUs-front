import { TextField, Stack, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup.object({
  aud: yup.string().required(),
  password: yup.string().required(),
});

function AdminLoginForm() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  const {
    formState: { isDirty, isSubmitting, isValid },
    register,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      aud: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Stack>
      <TextField {...register('aud')} label="id" />
      <TextField {...register('password')} label="password" />
      <Button
        onClick={handleSubmit(({ aud, password }) => {
          console.log(aud, password);
        })}
      >
        submit
      </Button>
    </Stack>
  );
}

export { AdminLoginForm };
