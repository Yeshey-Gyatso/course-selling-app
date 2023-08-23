"use client";
import UserContext from '@/context/userContext';
import { PurachasedCourses } from '@/services/courseService'
import React, { useContext, useEffect, useState } from 'react'

const context=useContext(UserContext);
const userP=context.user;
const userId = userP ? userP._id : null;
const [course,setCourse]=useState([]);
  async function load() {

    try {
      const Purchased =async()=>{
        const Task =await PurachasedCourses(userId)
        setCourse([...Task])
        console.log(Task);
      }
        
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(()=>{
      
    load()
    
  },[])

const Profile = () => {

 

  return (
    <div>
        <h1></h1>

    </div>
  )
}

export default Profile;