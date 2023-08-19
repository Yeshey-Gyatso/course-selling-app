"use client"
import React from 'react'

const Footer = () => {
  return (<footer className='fixed bottom-0 left-0 z-50  bg-slate-800 mt-5 w-full mx-auto max-w-screen-x'>
    <div className=' flex p-5 justify-around'>
      <div className=' text-center flex flex-col justify-center '>
          <h1 className=' text-3xl '>Welcome to JamStore</h1>
          <p className=' pt-4'>A music store friendly from beginner to pro 
             .</p>
      </div>
      
    <div className=' text-center'>
      <h1>Import Links</h1>
      <ul>
        <li><a href="#!">facebook</a></li>
        <li><a href="#!">Instagram</a></li>
        <li><a href="#!">LinkedIn</a></li>
      </ul>
    </div>
    </div> 
  </footer>
    
  )
}

export default Footer;