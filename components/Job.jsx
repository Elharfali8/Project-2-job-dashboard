'use client'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import JobInfo from './JobInfo';
import moment from 'moment';
import { Badge } from './ui/badge';
import { Button } from './ui/button';


const Job = ({ id, position, company, location, status, mode, createdAt }) => {
    
    const date = moment(createdAt).format('MMM Do, YYYY')

  return (
      <div className='p-4 rounded-lg bg-muted'>
          <header className='flex gap-2 items-center border-b-[2px] pb-4 border-b-gray-400 pl-2'>
          <div className='bg-primary w-14 h-14 grid place-items-center text-white text-2xl lg:text-4xl font-bold rounded'>{company.charAt(0).toUpperCase()}</div>
              <div>
                  <h2 className=' capitalize text-lg lg:text-xl font-semibold'>{position}</h2>
                  <h3 className='text-gray-600 dark:text-gray-400'>{company}</h3>
              </div>
          </header>
              <div className='my-4  pl-2'>
                  <div className='grid grid-cols-2 gap-4'>
                  <JobInfo icon={<FaLocationArrow />} text={location} />
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={mode} />
          <div>
            <Badge
              
              className={`${status === 'interview' && 'bg-orange-500 hover:bg-orange-600 text-white'} text-[15px] lg:text-[16px] ${status === 'declined' && 'bg-purple-700 hover:bg-purple-800' } ${status === 'pending' && 'bg-blue-600 hover:bg-blue-700 text-white'} bg-opacity-80 text-opacity-100`}
            >{status}</Badge>
          </div>
                  </div>
      </div>
      <div className='flex items-center gap-x-2 pl-2'>
        <button type='button' className='edit-btn px-[7px] py-1 rounded text-green-800'>Edit</button >
        <button type='button' className='remove-btn px-[7px] py-1 rounded text-red-900'>Remove</button >
      </div>
    </div>
  )
}

export default Job