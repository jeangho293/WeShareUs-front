import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { TextField } from '@mui/material';
import type { PublishedDate } from '../../type';
import { dateToPublishedDate } from '../../libs/dayjs';

function CalendarDatePicker(props: {
  publishedDate: string;
  onChange: (publishedDate: PublishedDate) => void;
  width?: string;
}) {
  // 1. destructure props
  const { publishedDate, onChange, width } = props;

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
          if (newDate) {
            setDate(newDate);
            onChange(dateToPublishedDate(newDate));
          }
        }}
        value={date}
        renderInput={(params) => <TextField {...params} sx={{ width }} />}
        inputFormat="YYYY-MM-DD"
      />
    </LocalizationProvider>
  );
}

export { CalendarDatePicker };
