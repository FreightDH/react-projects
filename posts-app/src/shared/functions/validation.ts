export const isEmpty = (str: string) => {
  if (str.trim() !== '') return true;
  return 'Invalid input!';
};
