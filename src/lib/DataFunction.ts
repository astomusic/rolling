export const isEmptyValueObject = (data: object): boolean => {
  if (data === undefined || data === null) {
    return true;
  }

  for (const key in data) {
    if (!!data[key]) {
      return false;
    }
  }

  return true;
};

export const isEmptyNumber = (data: number): boolean => {
  if (data === undefined || data === null) {
    return true;
  }
  return false;
};
