"use client";


import UserContext from '@/context/userContext';
import { logout } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';




const CustomNavbar = () => {
  const context=useContext(UserContext);
  const router = useRouter()
  // console.log("here is the context",context);
  async function doLogout(){
      try { 
          const result=await logout();
          context.setUser(undefined);
          router.push("/") 
      } catch (error) {
        console.log(error)
        toast.error("Logout error")
        
      }
  }


  return (
    <div className=' flex md:justify-between 
    bg-emerald-950 
     w-full 
     fixed
      p-4
       z-10'>
        <div className=' brand'>
            <h1 className='md:text-xl font-bold border-b-2 border-white
                     md:p-1 inline cursor-default '>Vintage Melodies</h1>
        </div>
        <div className=' flex space-x-2  '>
            <h1><Link href={'/'} className=' hover:text-gray-300'>Home</Link></h1>
            {
              context.user &&(
                <>
            <h1><Link href={'/courses' }className=' hover:text-gray-300'>Courses</Link></h1>
                
                </>

              )
            }
            </div>
        <div>
            <ul className='flex   space-x-2 '>
            {
              context.user && (
                <>
                   <li>
               <h1 className=' inline cursor-default'
                
               >{context.user.username}</h1>
                </li>
                <li>
                  <button
                  onClick={doLogout} 
                  >logout</button>
                </li>

                </>
              )
            }
            {
              !context.user &&(
                <>
                  <li>
               <Link href={'/login'} 
               >login</Link>
                </li>
                <li>
                  <Link href={'/signupUser'}
                   
                  >Signup</Link>
                
                </li>
                </>
              )
            }
               
            </ul>
                  
              
                   
                   
                
            
                
        </div>
        </div>
  )
}

export default CustomNavbar;