import { isEmpty } from './utils';

export const leapyear = year => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

export const getMonthDays = (year, month) => {
  const days = {
    1: 31,
    2: leapyear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return days[month];
};

// string = dd/mm/yyyy
export const isDateValid = string => {
  try {
    if (isEmpty(string) || string.length !== 10) {
      return false;
    }
    const [d, m, y] = string.split('/');
    if (m < 1 || m > 12) return false;
    if (y.length !== 4) return false;
    if (d > getMonthDays(+y, +m)) return false;
    return true;
  } catch (error) {
    return false;
  }
};

// dd/mm/yyyy to yyyy-mm-dd
export const changeDateBrToIntl = string => {
  const [d, m, y] = string.split('/');
  return `${y}-${m}-${d}`;
};

// yyyy-mm-dd to dd/mm/yyyy
export const changeDateIntlToBr = string => {
  const [y, m, d] = string.split('T')[0].split('-');
  return `${d}/${m}/${y}`;
};
