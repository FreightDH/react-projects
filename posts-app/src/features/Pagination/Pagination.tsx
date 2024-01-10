import { CSSProperties, FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { getArrayFromRange, getSearchPath, getTotalPages, useParamsObject } from '../../shared';
import cl from './Pagination.module.scss';

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  style?: CSSProperties;
}

const LEFT_ARROW = 'LEFT';
const RIGHT_ARROW = 'RIGHT';

const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  style,
}) => {
  const searchQueries = useParamsObject();

  const getPageNumbers = (totalPages: number, currentPage: number, pageNeighbours: number) => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalButtons = totalNumbers + 2;

    if (totalPages > totalButtons) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = getArrayFromRange(startPage, endPage);

      const hasLeftHidden = startPage > 2;
      const hasRightHidden = totalPages - endPage > 1;
      const hiddenTotal = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftHidden && !hasRightHidden: {
          const extraPages = getArrayFromRange(startPage - hiddenTotal, startPage - 1);
          pages = [LEFT_ARROW, ...extraPages, ...pages];
          break;
        }

        case !hasLeftHidden && hasRightHidden: {
          const extraPages = getArrayFromRange(endPage + 1, endPage + hiddenTotal);
          pages = [...pages, ...extraPages, RIGHT_ARROW];
          break;
        }

        case hasLeftHidden && hasRightHidden:
        default: {
          pages = [LEFT_ARROW, ...pages, RIGHT_ARROW];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return getArrayFromRange(1, totalPages);
  };

  const totalPages = getTotalPages(totalItems, itemsPerPage);
  const pageNumbers = getPageNumbers(totalPages, currentPage, 2);

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const toPage = (event: MouseEvent<HTMLElement>) => {
    const { textContent } = event.target as HTMLElement;
    setCurrentPage(+textContent!);
  };

  return (
    <ul className={cl.pagination} style={style}>
      {pageNumbers.map((number) => {
        switch (true) {
          case number === LEFT_ARROW: {
            searchQueries['page'] = `${currentPage - 1}`;
            const path = getSearchPath(searchQueries);

            return (
              <li key={number} className={cl.pagination__item}>
                <Link to={`?${path}`} onClick={prevPage}>
                  &laquo;
                </Link>
              </li>
            );
          }

          case number === RIGHT_ARROW: {
            searchQueries['page'] = `${currentPage + 1}`;
            const path = getSearchPath(searchQueries);

            return (
              <li key={number} className={cl.pagination__item}>
                <Link to={`?${path}`} onClick={nextPage}>
                  &raquo;
                </Link>
              </li>
            );
          }

          default: {
            searchQueries['page'] = `${number}`;
            const path = getSearchPath(searchQueries);

            return (
              <li
                key={number}
                className={`${cl.pagination__item} ${currentPage === +number ? cl.active : ''}`}
              >
                <Link to={`?${path}`} onClick={toPage}>
                  {number}
                </Link>
              </li>
            );
          }
        }
      })}
    </ul>
  );
};

export default Pagination;
