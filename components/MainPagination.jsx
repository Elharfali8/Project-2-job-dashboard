'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '@/features/job/jobSlice';

export function MainPagination() {
  const { currentPage, itemsPerPage, jobs, search } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  // Calculate total pages
  const filteredJobs = jobs.filter((job) =>
    job.position.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // Change page handler
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      dispatch(changePage(page));
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
