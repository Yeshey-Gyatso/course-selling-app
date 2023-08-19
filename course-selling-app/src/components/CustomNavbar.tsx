"use client"


import Link from 'next/link';
import React from 'react'

const CustomNavbar = () => {
  return (
    <div className=' flex justify-between
     bg-gray-500
      p-4
       z-10'>
        <div className=' brand'>
            <h1>JamStore</h1>
        </div>
        <div className=' flex space-x-2'>
            <h1><Link href={'/'} className=' hover:text-gray-300'>Home</Link></h1>
            <h1><Link href={'/courses' }className=' hover:text-gray-300'>Courses</Link></h1>
            </div>
        <div><ul className='flex   space-x-2 '>
                <li>
                login
                </li>
                <li>
                  <Link href={'/signup'}>Signup</Link>
                
                </li>
            </ul></div>
        </div>
  )
}

export default CustomNavbar;