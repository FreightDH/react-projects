import { useEffect, useState } from 'react';
import { PostService, useFetching } from '..';

const usePagination = (currentPage: number, itemsPerPage: number) => {
  const [data, setData] = useState<Post[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const [fetchData, isLoading] = useFetching(async (currentPage: number, itemsPerPage: number) => {
    const res = await PostService.getAll(currentPage, itemsPerPage);
    setData(res.data);
    setTotalItems(res.headers['x-total-count']);
  });

  useEffect(() => {
    fetchData(currentPage, itemsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, itemsPerPage]);

  return [data, totalItems, isLoading] as [Post[], number, boolean];
};

export default usePagination;
