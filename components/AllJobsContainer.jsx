import React from 'react';
import Job from './Job';
import { useSelector } from 'react-redux';

const AllJobsContainer = () => {
  const { jobs, search, currentPage, itemsPerPage } = useSelector((store) => store.job);

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter((job) =>
    job.position.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination details
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-4 lg:mt-8 w-full">
      {paginatedJobs.length > 0 ? (
        paginatedJobs.map((job) => <Job key={job.id} {...job} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default AllJobsContainer;
