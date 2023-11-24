import { useState } from 'react';

const useFetching = (requestCallback: () => void) => {
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      await requestCallback();
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
      else throw new Error('Fetching error!');
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, isLoading] as [() => Promise<void>, boolean];
};

export default useFetching;
