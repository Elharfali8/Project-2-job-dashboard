'use client'

import ChartsContainer from '@/components/ChartsContainer'
import StatsContainer from '@/components/StatsContainer'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const { isLoading, jobs } = useSelector((store) => store.job)
    
    const jobsPending = jobs?.filter((i) => i.status === 'pending').length || 0;
    const jobsInterview = jobs?.filter((i) => i.status === 'interview').length || 0;
    const jobsDeclined = jobs?.filter((i) => i.status === 'declined').length || 0;

  return (
      <div>
          <StatsContainer
              jobsPending={jobsPending}
              jobsInterview={jobsInterview}
              jobsDeclined={jobsDeclined}
          />
          <div className='bg-muted rounded-lg p-2 shadow-lg mt-6 lg:mt-8'>
            <ChartsContainer jobs={jobs} />
          </div>
    </div>
  )
}

export default page