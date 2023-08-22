"use client";
import React, { useEffect, useState } from 'react'
import UserContext from './userContext';
import { toast } from 'react-toastify';
import { currentUser } from '@/services/userService';

const UserProvider = ({children}: {
    children: React.ReactNode
  }) => {

    const [user,setUser]=useState(undefined);

    useEffect(()=>{
       
        async function DoFunc(){
            try {
                
                const logUser=await currentUser()
                   
                setUser({ ...logUser});
               } catch (error) {
                   console.log(error);
                  //  toast.error("error in loading current user")
                   setUser(undefined);
               }
        }
       if(!user) DoFunc();
    },[])

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;