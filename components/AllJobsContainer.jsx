import React from 'react'
import Job from './Job'

const AllJobsContainer = ({jobs}) => {

  return (
      <div className='grid lg:grid-cols-2 gap-6 mt-4 lg:mt-8 w-full'>
          {jobs?.map((item) => {
              return <Job key={item.id} {...item} />
          })}
    </div>
  )
}

export default AllJobsContainer