import {
  Button,
  ButtonProps,
  Link,
  LinkProps,
  Stack,
  styled,
} from '@mui/material';

const MenuButton = styled((props: ButtonProps & LinkProps) => {
  return (
    <Button component={Link} href={props.href} {...props}>
      {props.children}
    </Button>
  );
})({
  color: 'red',
  backgroundColor: '#202124',
  '&:hover': { backgroundColor: 'transparent' },
});

function NavigationMenu() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Stack direction="row" spacing="24px">
      <MenuButton href="/posts" sx={{ marginLeft: '12px' }}>
        POST
      </MenuButton>
      <MenuButton href="/todos">TODO</MenuButton>
    </Stack>
  );
}

export { NavigationMenu };
