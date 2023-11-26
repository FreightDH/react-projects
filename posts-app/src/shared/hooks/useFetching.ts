import { useState } from 'react';

const useFetching = (requestCallback: (currentPage: number, itemsPerPage: number) => void) => {
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (currentPage: number, itemsPerPage: number) => {
    try {
      setLoading(true);
      await requestCallback(currentPage, itemsPerPage);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
      else throw new Error('Fetching error!');
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, isLoading] as [(currentPage: number, itemsPerPage: number) => Promise<void>, boolean];
};

export default useFetching;
