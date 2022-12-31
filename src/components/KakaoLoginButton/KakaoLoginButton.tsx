import { Button, Stack, Typography } from '@mui/material';
import kakaoIcon from '../../assets/kakaoLogo.svg';

const { REACT_APP_KAKAO_REST_API_KEY, REACT_APP_KAKAO_REDIRECT_URI } =
  process.env;

function KakaoLoginButton() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Stack>
      <Button
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}`}
        sx={{
          width: '320px',
          backgroundColor: '#ffe500',
          '&:hover': { backgroundColor: '#ffe500' },
        }}
      >
        <Stack direction="row" spacing="8px">
          <img src={`${kakaoIcon}`} />
          <Typography variant="body1" color="black">
            카카오계정으로 로그인
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
}
export { KakaoLoginButton };
