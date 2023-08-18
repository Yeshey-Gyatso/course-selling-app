import React from 'react'

export const metadata={
    title:"Add Course: JamStore",
}

const AddCourse = () => {
  return (
    <div className=' grid grid-cols-12 justify-center'>
        <div className=' col-span-6 
        col-start-4 
        shadow-orange-200 shadow 
        p-5
        '>
            <h1 className='text-3xl text-white'> Add your course</h1>
            <form action="#!">
                <div className=' mt-4'>
                    <label htmlFor="title">Title</label>
                    <input  type="text"
                     className=' block text-sm text-white
                     font-medium mb-2 w-full p-3 rounded-3xl
                     bg-slate-500 focus:ring-gray-100
                     border border-gray-800  
                     
                     '
                     id='course_title'
                     />

                </div>
            </form>

        </div>
    </div>
  )
}

export default AddCourse