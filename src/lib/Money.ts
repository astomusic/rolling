export const numberToMoney = (num: number, isDecimal: boolean = true) => {
  if (num === 0) {
    return isDecimal ? '0.00' : '0';
  }
  const numberString = num.toString().padStart(3, '0');
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  const length = numberString.length;
  const decimal = numberString.slice(length - 2, length);
  const integer = numberString.slice(0, length - 2);
  const result = integer.replace(regexp, ',');

  return isDecimal ? result + '.' + decimal : result;
};
