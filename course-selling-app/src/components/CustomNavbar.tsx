"use client"


import Link from 'next/link';
import React from 'react'

const CustomNavbar = () => {
  return (
    <div className=' flex md:justify-between 
     bg-gray-500
      p-4
       z-10'>
        <div className=' brand'>
            <h1 className='md:text-xl font-bold border-b-2 border-white
                     md:p-1 inline cursor-default '>Vintage Melodies</h1>
        </div>
        <div className=' flex space-x-2  '>
            <h1><Link href={'/'} className=' hover:text-gray-300'>Home</Link></h1>
            <h1><Link href={'/courses' }className=' hover:text-gray-300'>Courses</Link></h1>
            </div>
        <div><ul className='flex   space-x-2 '>
                <li>
               <Link href={'/login'}>login</Link>
                </li>
                <li>
                  <Link href={'/signupUser'}>Signup</Link>
                
                </li>
            </ul></div>
        </div>
  )
}

export default CustomNavbar;