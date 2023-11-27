import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCurrentPage = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    if (!page) return 1;
    return +page;
  });

  return [currentPage, setCurrentPage] as [number, (value: number) => void];
};

export default useCurrentPage;
