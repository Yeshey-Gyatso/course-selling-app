"use client";
import React from 'react'
import bgT from '../app/assets/bgT.jpg';
import {GiMailbox} from 'react-icons/gi';
import { motion as m } from "framer-motion"
import Link from 'next/link';
const Landing2 = () => {
  
                
  return (
    <section  
    className=' snap-y snap-mandatory h-screen w-full
     bg-black/50
     height: 20px
     flex items-center
     bg-cover
     bg-fixed
     bg-blend-overlay
  
     
     '
     style={{
        backgroundImage:`url(${bgT})`,
     }}
     >

       
            
       
        <div className='
        
        max-w-screen-lg mx-auto 
        flex 
        items-center 
        justify-center 
        max-w-responsive
        px-4 md:flex-row
        
        '>
            
              <div 
                className='relative z-10 flex flex-col items-center bottom-0 mt-40'>
                <div className='relative flex flex-row items-center'>
                <m.h2 
                initial={{opacity:0,y:"100%"}} 
                
                transition={{duration:1 , ease:"easeInOut"}}

                animate={{y:-30,opacity:1}}
                
                
                className='cursor-default text-2xl sm:text-4xl font-bold md:6xl text-white'>
                    WELCOME TO MY SITE 
                    
                </m.h2>
                  
                  <m.h2
                     animate={{x:0,y:-30,opacity:1}}
                     initial={{x:"200%",y:"-300%",opacity:-5}}
                     transition={{delay:1.5,duration:0.5}} 
                     className='text-4xl text-opacity-0 md:text-opacity-100 font-bold  text-white pl-2'  
                    >!</m.h2> 
                </div>      
                     <div className=' my-10  py-10  bg-gray-800 opacity-70 w-full px-8 flex flex-col items-center '>
                        <p className=' cursor-default py-4 text-white md:text-2xl max-w-full sm:mx-auto z-10 font-light   
                        '>
                            <span className=' font-quote'>"Creativity is contagious. Pass it on." </span><span className='  font-mono font-bold'>- Albert Einstein</span>
                        </p>
                     </div>
                     
                     {/* smooth duration={800} */}
                      <div className=' mt-auto'>
                    <Link href='#!' className='group text-white w-fit px-6 py-3 my-2 flex 
                     items-center rounded-md
                     bg-gradient-to-r from-orange-400 to to-orange-800
                     cursor-pointer'>
                        Contact Me <span
                        className=' group-hover:skew-y-12 group-hover:rotate-12 duration-200'
                        >
                        <GiMailbox size={40} className=' ml-1'/>
                        </span>
                    </Link>
                </div>
                </div>
                
               
            
        </div>
        
    </section>
  )

}

export default Landing2;