import { useEffect, useState } from 'react';
import { PostService, getTotalPages, useFetching } from '..';

const usePagination = (
  currentPage: number,
  itemsPerPage: number
): [Post[] | null, number, boolean] => {
  const [data, setData] = useState<Post[] | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchData, isLoading] = useFetching(async (currentPage: number, itemsPerPage: number) => {
    const res = await PostService.getAll(currentPage, itemsPerPage);
    const totalItems = res.headers['x-total-count'];
    setData(res.data);
    setTotalPages(getTotalPages(totalItems, itemsPerPage));
  });

  useEffect(() => {
    fetchData(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return [data, totalPages, isLoading];
};

export default usePagination;
