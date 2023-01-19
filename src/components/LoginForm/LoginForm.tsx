import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '../../libs/react-query';
import { userRepository } from '../../repositories/user.repository';

const loginSchema = yup
  .object({
    account: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function LoginForm() {
  // 1. destructure props
  // 2. lib hooks
  const navigation = useNavigate();

  // 3. state hooks
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 4. query hooks
  const [userLogin] = useMutation(userRepository.login, {
    // TODO: 에러 핸들링 타입 수정해야한다.
    onError: (err: any) => {
      setErrorMessage(err);
    },
  });

  // 5. form hooks
  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      account: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        borderRadius: '12px',
        boxShadow: 3,
        padding: ' 24px',
      }}
    >
      <Stack sx={{ width: '80%', margin: '0 auto' }}>
        <Stack
          direction="row"
          spacing="8px"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
          }}
        >
          <AccountCircle />
          <TextField
            {...register('account')}
            placeholder="Account"
            error={!!errors.account}
            sx={{ width: '80%' }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing="8px"
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <VpnKeyIcon />
          <TextField
            {...register('password')}
            type={isShowPassword ? 'text' : 'password'}
            placeholder="Password"
            error={!!errors.password || !!errorMessage}
            sx={{ width: '80%' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    sx={{ color: 'black' }}
                  >
                    {isShowPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        {errorMessage && (
          <FormHelperText sx={{ paddingLeft: '54px', color: 'red' }}>
            {errorMessage}
          </FormHelperText>
        )}
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '24px',
          }}
        >
          <Button
            disabled={!isValid}
            sx={{ width: '25%' }}
            onClick={handleSubmit(async ({ account, password }) => {
              setErrorMessage('');
              const { token, account: userAccount } = await userLogin({
                variables: { account, password },
              });
              localStorage.setItem('token', token);
              localStorage.setItem('account', userAccount);
              navigation('/');
            })}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export { LoginForm };
