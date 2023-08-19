"use client";
import React from 'react'

const SignUp = () => {
  return (
    <div className='grid grid-cols-12 justify-center'>
        <div className='  col-span-4 col-start-5'>
          <div className=' p-5'>
            <h1 className=' text-3xl text-center'>Sign Up here</h1>
            <form action="" className='mt-5'>
              {/* name */}
              <div className=' mt-5'>
                <label htmlFor="user_name"
                className='block text-sm font-medium mb-2 ps-1'
                >Username</label>
                <input 
                 type="text"
                 className='w-full p-3 rounded-2xl bg-gray-800 
                 focus:ring-gray-400 border-gray-800' 
                 placeholder='Enter your name here'
                 id='user_name'
                 />

              </div>

              {/* email */}
              <div className=' mt-5'>
                <label htmlFor="user_email"
                className='block text-sm font-medium mb-2 ps-1'
                >Email</label>
                <input 
                 type="email"
                 className='w-full p-3 rounded-2xl bg-gray-800 
                 focus:ring-gray-400 border-gray-800' 
                 placeholder='Enter your email here'
                 id='user_email' 
                 />
  
              </div>
              {/* password */}
              <div className=' mt-5'>
                <label htmlFor="user_password"
                className='block text-sm font-medium mb-2 ps-1'
                >Password</label>
                <input 
                 type="password"
                 className='w-full p-3 rounded-2xl bg-gray-800 
                 focus:ring-gray-400 border-gray-800' 
                 placeholder='Enter your password here'
                 id='user_password'
                 /> 
                   
              </div>

              {/* profileUrl */}
              
             {/* button */}
             <div className='flex justify-center gap-x-4 mt-4'>
                    <button className=' bg-blue-700 p-3 rounded-full
                     hover:bg-blue-800 '>Signup</button>
                     <button className=' bg-orange-600 p-3 rounded-full
                     hover:bg-orange-800 '>Reset</button>
                </div>
                   
              
            </form>
          </div>
        </div>

    </div>
  )
}

export default SignUp;