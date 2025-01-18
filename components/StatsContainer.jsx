import React from 'react'

const StatsContainer = ({ jobsPending, jobsInterview, jobsDeclined }) => {
    
  return (
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='rounded-lg text-xl lg:text-2xl font-semibold tracking-wide bg-muted p-4' >
              <span className='mr-2'>
                  Pending Jobs : 
              </span>
              <span className='text-primary'>{jobsPending}</span>
          </div>
          <div className='rounded text-xl lg:text-2xl font-semibold tracking-wide bg-muted p-4' >
              <span className='mr-2'>
                  Interview Jobs : 
              </span>
              <span className='text-primary'>{jobsInterview}</span>
          </div>
          <div className='rounded text-xl lg:text-2xl font-semibold tracking-wide bg-muted p-4' >
              <span className='mr-2'>
                  Declined Jobs : 
              </span>
              <span className='text-primary'>{jobsDeclined}</span>
          </div>
    </div>
  )
}

export default StatsContainer