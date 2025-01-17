'use client'

import AllJobsContainer from '@/components/AllJobsContainer'
import FilterContainer from '@/components/FilterContainer'
import { useSelector } from 'react-redux'

const page = () => {
    const {isLoading, jobs} = useSelector((store) => store.job)

  return (
      <>
          <FilterContainer />
          <AllJobsContainer jobs={jobs} />
    </>
  )
}

export default page