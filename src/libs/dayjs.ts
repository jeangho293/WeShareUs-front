import dayJs from 'dayjs';

export function today() {
  return dayJs().format('YYYY-MM-DD');
}
