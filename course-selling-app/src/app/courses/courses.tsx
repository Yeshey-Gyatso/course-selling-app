"use client";
import React, { useContext, useEffect, useState } from 'react'
import { NextResponse } from 'next/server';
import { GetCourse, Purachased } from '@/services/courseService';
import UserContext from '@/context/userContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
const Courses = () => {
  const router=useRouter();
  const context=useContext(UserContext)
  const userP=context.user;
  const userId = userP ? userP._id : null;
  const [course,setCourse]=useState([]);
  async function load() {

    try {
        const Task = await GetCourse();
        setCourse([...Task])
       
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(()=>{
      
    load()
    
  },[])

  const Purchase=async(courseId)=>{

    try {
      const result= await Purachased(userId,courseId)
      toast.success(" assuming paayment successfull",{
        position:"top-center" 
       });
       console.log(userId,courseId)
       router.push("/profile/user")
    } catch (error) {
      console.log(error)
    }
    
  }


  return (

    <div  >
      <div className=' lg:pb-36 pb-20 '>
      <div className="p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        { course.map((task)=>(
            
           
            <div className='max-w-sm mt-10 
            rounded overflow-hidden shadow-lg 
            bg-white
            
            '
            key={task._id}
            >
            
            <img

              className="w-full"
              src={task.imageLink}
              alt="card"
              style={{ width: '100%' }} 
            />
      
            <div className="px-6 py-4">
            <div className="font-bold text-black text-xl mb-2">
              {task.title}
              </div>
              <p className="text-gray-700 text-base">
              
               {task.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Instagram</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Facebook</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#YouTube</span>
            </div>
            <div className='px-6 pt-4 pb-2'>
                <button onClick={() => Purchase(task._id)} className='inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' >
                  Purchase
                </button>
            </div>
            
            
            </div>
             
          
          
        )) }
        </div>
      
     
    </div>
    </div>
  )
}

export default Courses