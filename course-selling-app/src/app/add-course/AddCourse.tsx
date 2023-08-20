"use client";

import React from 'react';

import { useState,useEffect } from 'react';
import {  toast } from 'react-toastify';
import { addCourse } from '@/services/courseService';



const AddCourse = () => {
    
    const [course,setCourse]=useState({
        title:"",
        description:"",
        price:NaN,
        imageLink:""
    })

    const handleaddCourse=async(event:any)=>{
        event.preventDefault();
        console.log(event)
        //validation
        try {
           const result= await addCourse(course)
           console.log(result);
           toast.success("your task is added",{
            position:"top-center" 
           });
           setCourse(
            {
                title:"",
                description:"",
                price:NaN,
                imageLink:""
            }
           )

        } catch (error) {
            console.log(error)
            toast.error("Task is not added",{
                position:"top-center" 
               });
        }

    }
  return (
    <div className=' flex justify-center items-center h-full'>
        <div className=''>
        <div className='left-0 absolute h-auto w-auto
         p-4 bg-black border 
        border-gray-200 rounded-lg shadow 
        '>
        {/* h-1/2 sm:h-2/3 md:h-1/2 lg:h-1/3 xl:h-1/4 */}

            <h1 className='text-3xl text-center '> Add your course</h1>
            <form action="#!" onSubmit={handleaddCourse}>
                {/* title */}
                <div className=' mt-4'>
                    <label htmlFor="title" 
                    className='  block text-sm mb-2'
                    >Title</label>
                    <input  type="text"
                     className=' 
                     font-medium  w-full p-3 rounded-3xl
                     bg-slate-500 focus:ring-gray-100
                     border border-gray-800  
                     '
                     name='course_title'
                     id='course_title'
                     onChange={(e) => {
                        setCourse({
                            ...course,
                            title:e.target.value
                        })
                    }}
                    value={course.title}
                     />
                </div>
                {/* description */}
                <div className=' mt-4'>
                    <label htmlFor="description" 
                    className='  block text-sm mb-2'
                    >Description</label>
                    <textarea  
                     className=' 
                     font-medium  w-full p-3 rounded-3xl
                     bg-slate-500 focus:ring-gray-100
                     border border-gray-800  
                     '
                     id='course_description'
                     name='course_description'
                     
                     onChange={(e) => {
                        setCourse({
                            ...course,
                            description:e.target.value
                        })
                    }}
                    value={course.description}
                     rows={2}
                     />
                </div>

                {/* price */}

                <div className=' mt-4'>
                    <label htmlFor="price" 
                    className='  block text-sm mb-2'
                    >Price</label>
                    <input  
                    type="number"
                     className=' 
                     font-medium  w-full p-3 rounded-3xl
                     bg-slate-500 focus:ring-gray-100
                     border border-gray-800  
                     '
                     id='course_price'
                     name='course_price'
                     
                     onChange={(e) => {
                        setCourse({
                            ...course,
                            price:parseInt(e.target.value)
                        })
                    }}
                    value={course.price}
                     />
                </div>

                {/* image */}

                <div className=' mt-4'>
                    <label htmlFor="imageLink" 
                    className='  block text-sm mb-2'
                    >ImageLink</label>
                    <input  type="url"
                     className=' 
                     font-medium  w-full p-3 rounded-3xl
                     bg-slate-500 focus:ring-gray-100
                     border border-gray-800  
                     
                     '
                     id='course_imageLink'
                     name='course_imageLink'
                     
                     onChange={(e) => {
                        setCourse({
                            ...course,
                            imageLink:e.target.value
                        })
                    }}
                    value={course.imageLink}
                     />
                </div>

                {/* button */}
                <div className='flex justify-center gap-x-4 mt-4'>
                    <button className=' bg-blue-700 p-3 rounded-full
                     hover:bg-blue-800 '>Add Course</button>
                     <button className=' bg-red-700 p-3 rounded-full
                     hover:bg-red-800 '>Clear</button>
                </div>
                {
                    JSON.stringify(course)
                }
            </form>

            </div>
            
            

        </div>
    </div>
  )
}

export default AddCourse