import { Checkbox as MuiCheckBox } from '@mui/material';
import { useState } from 'react';

function CheckBox(props: {
  checked: boolean;
  onChange: (state: boolean) => void;
}) {
  // 1. destructure props
  const { checked, onChange } = props;

  // 2. lib hooks
  // 3. state hooks
  const [done, setDone] = useState(checked);

  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <MuiCheckBox
      checked={done}
      onChange={(event) => {
        setDone(event.target.checked);
        onChange(event.target.checked);
      }}
    />
  );
}

export { CheckBox };
