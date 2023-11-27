import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCurrentPage = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(+searchParams.get('page')! || 1);
  }, [searchParams]);

  return [currentPage, setCurrentPage] as [number, (value: number) => void];
};

export default useCurrentPage;
