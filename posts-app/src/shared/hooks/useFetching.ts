import { useState } from 'react';

const useFetching = (requestCallback: (...args: number[]) => void) => {
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (...args: number[]) => {
    try {
      setLoading(true);
      await requestCallback(...args);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
      else throw new Error('Fetching error!');
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, isLoading] as [(...args: number[]) => Promise<void>, boolean];
};

export default useFetching;
