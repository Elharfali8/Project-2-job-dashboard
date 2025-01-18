'use client'

import AllJobsContainer from '@/components/AllJobsContainer'
import FilterContainer from '@/components/FilterContainer'
import { MainPagination } from '@/components/MainPagination'
import { useSelector } from 'react-redux'

const page = () => {
    const {isLoading, jobs} = useSelector((store) => store.job)

  return (
      <>
      <FilterContainer />
      <div className='my-6 lg:my-8 grid place-content-end'>
          <MainPagination />
      </div>
          <AllJobsContainer jobs={jobs} />
    </>
  )
}

export default page