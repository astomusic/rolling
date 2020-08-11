import monthNames from './constants/monthName';

const SEC_BY_MS = 1000;
const MIN_BY_SEC = 60;
const HOUR_BY_MIN = 60;
const DAY_BY_HOUR = 24;
const MONTH_BY_DAY = 30;

export const getDateTimeGap = (publishDate: Date) => {
  if (!publishDate) {
    return '-';
  }

  const targetDate = new Date(publishDate);
  const now = Date.now();

  const gap = Math.floor((now - targetDate.getTime()) / SEC_BY_MS);

  if (gap < MIN_BY_SEC) {
    return 'Just Now';
  }

  if (gap < MIN_BY_SEC * HOUR_BY_MIN) {
    return `${Math.floor(gap / MIN_BY_SEC)} min ago`;
  }

  if (gap < MIN_BY_SEC * HOUR_BY_MIN * DAY_BY_HOUR) {
    return `${Math.floor(gap / (MIN_BY_SEC * HOUR_BY_MIN))} hour ago`;
  }

  if (gap < MIN_BY_SEC * HOUR_BY_MIN * DAY_BY_HOUR * MONTH_BY_DAY) {
    return `${Math.floor(gap / (MIN_BY_SEC * HOUR_BY_MIN * DAY_BY_HOUR))} days ago`;
  }

  const day = targetDate.getDate();
  const month = monthNames[targetDate.getMonth()];
  const year = targetDate.getFullYear();
  return `${month} ${day}, ${year}`;
};
