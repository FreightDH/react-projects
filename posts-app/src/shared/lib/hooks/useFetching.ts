import { useState } from 'react';

const useFetching = (requestCallback: (...args: number[]) => void) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (...args: number[]) => {
    try {
      setLoading(true);
      await requestCallback(...args);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        throw new Error(error.message);
      } else {
        setError('Fetching error!');
        throw new Error('Fetching error!');
      }
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, isLoading, error] as [(...args: number[]) => Promise<void>, boolean, string];
};

export default useFetching;
