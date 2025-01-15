import FormInput from '@/components/FormInput'
import PageTitle from '@/components/PageTitle'
import React from 'react'

const page = () => {
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
                  </div>
          </form>
          </div>
    </main>
  )
}

export default page