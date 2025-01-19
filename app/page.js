'use client'
import { Button } from '@/components/ui/button'
import landing from '@/public/images/landing.svg'
import Image from 'next/image'
import Link from 'next/link'


function HomePage() {
  return (
    <div className='bg-muted min-h-screen grid place-items-center'>
      <div className="grid lg:grid-cols-2 gap-10 place-content-center container main-container">
        <div className='flex flex-col justify-center items-start'>
        <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            job <span className='text-primary'>tracking</span> app
          </h1>
          <p className="mt-3 lg:mt-4 leading-loose max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sapiente quasi nulla delectus laudantium aut enim ducimus, non animi numquam a temporibus dolorum aperiam consectetur?
          </p>
          <Button asChild className='mt-4 w-auto' >
            <Link href={`/register`} className='capitalize text-lg'>
              get started
            </Link>
          </Button>
        </div>
        <div className="hidden lg:grid place-items-center">
            <Image src={landing} alt="landing" width={500} height={500} className="hidden lg:block" priority />
        </div>
      </div>
    </div>
  )
}

export default HomePage