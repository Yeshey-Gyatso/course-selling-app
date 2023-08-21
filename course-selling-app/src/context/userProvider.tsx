"use client";
import React, { useEffect, useState } from 'react'
import UserContext from './userContext';
import { toast } from 'react-toastify';
import { httpAxios } from '@/helper/httpHelper';
import { currentUser } from '@/services/userService';

const UserProvider = ({children}: {
    children: React.ReactNode
  }) => {

    const [user,setUser]=useState(undefined);

    useEffect(()=>{
        try {
           async function DoFunc(){
                const currentUser=await currentUser()
            }
            setUser({ ...user});
        } catch (error) {
            console.log(error);
            toast.error("error in loading current user")
            setUser(undefined);
        }
        DoFunc();
    },[])

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;