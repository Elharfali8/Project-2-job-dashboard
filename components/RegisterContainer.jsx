import React from 'react'
import FormInput from './FormInput'
import { Button } from './ui/button'

const RegisterContainer = ({
    isLogin,
    handleIsLogin,
    handleChange,
    name,
    email,
    password,
    handleSubmit
}) => {

    

  return (
      <div className='p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-[500px]'>
          <div className='mb-3 lg:mb-5'>
            <h1 className='text-primary text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide'>
                {isLogin ? 'Login' : 'Register'}
              </h1>
          </div>
          <form className='grid gap-y-3' onSubmit={handleSubmit}>
              {!isLogin && (
              <FormInput
                    type='text'
                    name='name'
                      label='name'
                      value={name}
                      handleChange={handleChange}
                />
              )}
              {/* email */}
              <FormInput
                  type='email'
                  name='email'
                  label='email'
                  value={email}
                  handleChange={handleChange}
              />
              {/* password */}
              <FormInput
                  type='password'
                  name='password'
                  label='password'
                  value={password}
                  handleChange={handleChange}
              />
              <Button className='text-lg lg:text-xl capitalize text-white mt-2 lg:mt-3' type='submit'>
                  submit
              </Button>
          </form>
          <div className='mt-2 lg:mt-3 grid place-items-center'>
              {isLogin ? (
                  <p className='lg:text-lg'>
                      create a new account! <button type="button" onClick={handleIsLogin} className='text-primary'>register</button>
              </p>
              ): (
                  <p className='lg:text-lg'>
                  you already have an account? <button type="button" onClick={handleIsLogin} className='text-primary'>login</button>
              </p>
              )}
          </div>
    </div>
  )
}

export default RegisterContainer