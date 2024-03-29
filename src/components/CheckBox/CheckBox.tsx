import { Checkbox as MuiCheckBox, CheckboxProps } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useState } from 'react';

function CheckBox(
  props: {
    onChange: (state: boolean) => void;
  } & Omit<CheckboxProps, 'onChange'>,
) {
  // 1. destructure props
  const { checked, disabled, onChange } = props;

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
      disabled={disabled}
      checked={done}
      onChange={(event) => {
        setDone(event.target.checked);
        onChange(event.target.checked);
      }}
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<RadioButtonCheckedIcon sx={{ fill: '#7c4dff' }} />}
    />
  );
}

export { CheckBox };
