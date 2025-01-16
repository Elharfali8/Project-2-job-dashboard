import React from 'react'
import LinksDropdown from './LinksDropDown'
import { ThemToggle } from './ThemeToggle'

const Navbar = () => {
  return (
      <nav className='bg-muted py-4 sm:px-16 lg:px-24 '>
          <div className="container main-container flex items-center justify-between">
              <div>
              <LinksDropdown />
        </div>
        <div className='  '>
          <h3 className='text-xl lg:text-2xl font-semibold'>Dashboard</h3>
        </div>
          <div className=' flex items-center gap-x-4'>
              <ThemToggle />
          </div>
          </div>
    </nav>
  )
}

export default Navbar