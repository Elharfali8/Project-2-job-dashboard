'use client'

import ChartsContainer from '@/components/ChartsContainer'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const {isLoading, jobs} = useSelector((store) => store.job)

  return (
      <div>
          <div>Hola</div>
          <ChartsContainer jobs={jobs} />
    </div>
  )
}

export default page