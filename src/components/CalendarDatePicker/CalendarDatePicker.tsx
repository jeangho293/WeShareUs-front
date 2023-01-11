import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { TextField } from '@mui/material';
import type { PublishedDate } from '../../type';

function CalendarDatePicker(props: {
  publishedDate: string;
  onChange: (publishedDate: PublishedDate) => void;
}) {
  // 1. destructure props
  const { publishedDate, onChange } = props;

  // 2. lib hooks
  // 3. state hooks
  const [date, setDate] = useState<PublishedDate | null>(publishedDate);

  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={(newDate) => {
          setDate(newDate);
        }}
        value={date}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="YYYY-MM-DD"
      />
    </LocalizationProvider>
  );
}

export { CalendarDatePicker };
