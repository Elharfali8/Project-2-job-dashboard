
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import { Button } from '@/components/ui/button'

const layout = ({children}) => {
  return (
    <ProtectedRoute>
      <main className='grid lg:grid-cols-5'>

      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar />
      </div>

      <div className="lg:col-span-4 relative">
          <Navbar />
          {/* <div className=' absolute  right-[5%] z-[99] top-[80px]  rounded grid place-items-center  '>
            <Button className='w-full max-w-[130px]'>
              log out
            </Button> 
          </div> */}
        <div className='py-16 px-4 sm:px-8 lg:px-16'>
          {children}
        </div>
      </div>

      </main>
    </ProtectedRoute>
  )
}

export default layout