"use client";
import { signUpapi } from '@/services/userService';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const SignUp = () => {

  const [user,setUser]=useState({
    username:"",
    email:"",
    password:"",
    profileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXTLButxvbD04FiW1CxI4SF72fIJgz6KD9MeYd4WB0wClHvo2yC6P56zKqT44CgA9jEI&usqp=CAU"
  });

  const doSignup=async(event)=>{
    event.prevent.default();
  // input validation
  try {
    const result = await signUpapi(user);
    console.log(result)
    toast.success("user is registered successfully",{
        position:"top-center",
              
    })
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message);
    toast.error("error singning up"+error.response.data.message,{
        position:"top-center",
    })
    
  }
  }

  return (
    <div className='grid grid-cols-12 justify-center'>
        <div className='  col-span-4 col-start-5'>
          <div className=' p-5'>
            <h1 className=' text-3xl text-center'>Sign Up here</h1>
            <form action="" className='mt-5' onSubmit={doSignup} >
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
                 onChange={(e)=>{
                  setUser({
                    ...user,
                    username:e.target.value,
                  });
                 }}
                 value={user.username}

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
                 onChange={(e)=>{
                  setUser({
                    ...user,
                    email:e.target.value,
                  });
                 }}
                 value={user.email}
                 
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
                 onChange={(e)=>{
                  setUser({
                    ...user,
                    password:e.target.value,
                  });
                 }}
                 value={user.password}
                 /> 
                   
              </div>

              {/* profileUrl */}
              
             {/* button */}
             <div className='flex justify-center gap-x-4 mt-4'>
                    <button 
                    type='submit'
                    className=' bg-blue-700 p-3 rounded-full
                     hover:bg-blue-800 '>Signup</button>
                     <button className=' bg-orange-600 p-3 rounded-full
                     hover:bg-orange-800 '>Reset</button>
                </div>
                    
              {JSON.stringify(user)}
            </form>
          </div>
        </div>

    </div>
  )
}

export default SignUp;