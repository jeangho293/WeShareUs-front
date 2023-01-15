import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';

function ProgressBar(props: { value: { total: number; doneCount: number } }) {
  // 1. destructure props
  const { value } = props;

  // 2. lib hooks
  // 3. state hooks
  const [progress, setProgress] = useState(
    Math.floor((value.doneCount / value.total) * 100),
  );

  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  useEffect(() => {
    setProgress(Math.floor((value.doneCount / value.total) * 100));
  }, [value]);

  // 8. handlers
  return (
    <LinearProgress
      color="secondary"
      variant="determinate"
      value={progress}
      sx={{ height: 10, borderRadius: 5 }}
    />
  );
}

export { ProgressBar };
