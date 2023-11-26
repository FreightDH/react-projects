const isEmpty = (str: string) => {
  if (str.trim() !== '') return true;
  return 'Invalid input!';
};

const getArrayFromRange = (from: number, to: number, step: number = 1): string[] => {
  const result = [];

  for (let i = from; i <= to; i += step) {
    result.push(i.toString());
  }

  return result;
};

const getSearchPath = (searchQueries: Record<string, string | null>) => {
  const path = [];

  for (const key in searchQueries) {
    path.push(`${key}=${searchQueries[key]}`);
  }

  return path.join('&');
};

const getTotalPages = (totalItems: number, itemsPerPage: number) => {
  return Math.ceil(totalItems / itemsPerPage);
};

export { isEmpty, getArrayFromRange, getTotalPages, getSearchPath };
