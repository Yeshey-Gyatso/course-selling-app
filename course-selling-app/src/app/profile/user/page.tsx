"use client";
import UserContext from '@/context/userContext';
import { PurachasedCourses } from '@/services/courseService'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Profile = () => {

  const context=useContext(UserContext)
  
  // const userP=context.user;
  // const userId = userP ? userP._id : null;
  const [course,setCourse]=useState([]);
    
  
  
    async function load(userId) {

      try {
          const Task = await PurachasedCourses(userId);
          setCourse([...Task])
          console.log(Task);
      } catch (error) {
        console.log(error);
      }
      
    }
    useEffect(()=>{
        if(context.user){
          load(context.user._id)
        }
      
      
    },[])



  return (
    <div  >
      <div className=' lg:pb-36 pb-20 '>
      <div className="p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        { course.map((task)=>(
            
           
            <div className='max-w-sm mt-10 
            rounded overflow-hidden shadow-lg 
            bg-white
            
            '
            key={task.title}
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
                <button  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  Click Content 
                </button>
            </div>
            
            
            </div>
             
          
          
        )) }
        </div>
      
     
    </div>
    </div>
  )
}

export default Profile;