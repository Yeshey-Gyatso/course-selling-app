"use client";
import React, { useEffect, useState } from 'react'
import { NextResponse } from 'next/server';
import { GetCourse } from '@/services/courseService';
const Courses = () => {
 
  const [course,setCourse]=useState([]);
  async function load() {

    try {
        const Task = await GetCourse();
        setCourse([...Task])
        console.log(Task);
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(()=>{
      load()
  },[])
  return (

    <div  >
      <div className=' '>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        { course.map((task)=>(
            
            
            <div className='max-w-sm mt-10 rounded overflow-hidden shadow-lg bg-white'>
            <img
              className="w-full"
              src={task.imageLink}
              alt="card"
              style={{ width: '100%' }} 
            />
      
            <div className="px-6 py-4">
            
              <p className="text-gray-700 text-base">
              <div className="font-bold text-xl mb-2">
              {task.title}
              </div>
               {task.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            
            
            
            </div>
             
          
          
        )) }
        </div>
      
     
    </div>
    </div>
  )
}

export default Courses