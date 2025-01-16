'use client'

import SelectInput from '@/components/SelectInput'
import FormInput from '@/components/FormInput'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'
import { handleChange, createJob } from '@/features/job/jobSlice'
import { toast } from 'react-toastify'

const page = () => {
    const { isLoading, jobs, status, mode, position, company, location, selectedMode, selectedStatus } = useSelector((store) => store.job)
    const dispatch = useDispatch()
    
    const handleJobInput = (e) => {
        const { name, value } = e.target;
        dispatch(handleChange({ name, value }));
    };
    
    const handleJobSelectInput = ({ name, value }) => {
        dispatch(handleChange({ name, value }));
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!company || !location || !position) {
            toast.error('Please Fill Out All Fields');
        return;
        }
        dispatch(createJob(
            {
                company,
                location,
                position,
                status: selectedStatus,
                mode: selectedMode
            }
        ))
    }
      

  return (
      <main >
          <div className='bg-muted rounded-lg p-4'>
                  <PageTitle text='add job'/>
              <form className='mt-2' onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* position */}
                      <FormInput
                          label='position'
                          type='text'
                          name='position'
                          value={position}
                          handleChange={handleJobInput}
                      />
                      {/* company */}
                      <FormInput
                          label='company'
                          type='text'
                          name='company'
                          value={company}
                          handleChange={handleJobInput}
                      />
                      {/* location */}
                      <FormInput
                          label='location'
                          type='text'
                          name='location'
                          value={location}
                          handleChange={handleJobInput}
                      />
                      {/* status */}
                      <SelectInput
  label="status"
  name="status"
  data={status} // Options array
  value={selectedStatus} // Currently selected value
  handleChange={handleJobSelectInput}
/>

<SelectInput
  label="mode"
  name="mode"
  data={mode} // Options array
  value={selectedMode} // Currently selected value
  handleChange={handleJobSelectInput}
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