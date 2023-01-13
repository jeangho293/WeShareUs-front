import dayJs from 'dayjs';

export function today() {
  return dayJs().format('YYYY-MM-DD');
}

export function dateToPublishedDate(date: string) {
  return dayJs(date).format('YYYY-MM-DD');
}
