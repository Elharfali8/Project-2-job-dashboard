import React from 'react'
import Job from './Job'

const AllJobsContainer = ({jobs}) => {

  return (
      <div className='grid lg:grid-cols-2 gap-6 mt-4 lg:mt-8 w-full'>
          {jobs?.length > 0 ? (
          jobs.map((job) => (
            <Job key={job.id} {...job} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
    </div>
  )
}

export default AllJobsContainer