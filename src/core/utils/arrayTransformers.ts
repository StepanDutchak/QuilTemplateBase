export const getLastNonEmptyStringIndex = (arr: string[]): number => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '') {
      return i;
    }
  }
  return -1;
};
