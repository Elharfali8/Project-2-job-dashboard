'use client'

import SelectInput from '@/components/SelectInput'
import FormInput from '@/components/FormInput'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'

const page = () => {
    const { isLoading, jobs, status, mode } = useSelector((store) => store.job)
    

  return (
      <main >
          <div className='bg-muted rounded-lg p-4'>
                  <PageTitle text='add job'/>
              <form className='mt-2'>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* position */}
                      <FormInput
                          label='position'
                          type='text'
                          name='position'
                      />
                      {/* company */}
                      <FormInput
                          label='company'
                          type='text'
                          name='company'
                      />
                      {/* location */}
                      <FormInput
                          label='location'
                          type='text'
                          name='location'
                      />
                      {/* status */}
                      <SelectInput
                          label='status'
                          name='status'
                          data={status}
                      />
                      {/* mode */}
                      <SelectInput
                          label='mode'
                          name='mode'
                          data={mode}
                      />
                      {/* submit */}
                      <div className='flex items-end w-full'>
                      <Button className='w-full text-lg capitalize'>
                          submit
                      </Button>
                      </div>
                  </div>
          </form>
          </div>
    </main>
  )
}

export default page