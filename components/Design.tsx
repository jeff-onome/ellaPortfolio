'use client'
import Image from 'next/image'
import React from 'react'

import Exp from '../assets/1.jpeg'

function Design() {
  return (
    <>
       <div className="flex flex-col items-center justify-center text-center  relative">
   <div className='mb-15'>
            <p className="text-white/50 italic  absolute left-40 top-0 ">Who’s this girl about to work her design magic?</p>
   </div>
     
    <div className="w-full max-w-6xl">
        <Image 
            src={Exp} 
            alt="Me" 
            layout="responsive" 
            // width={500} 
            height={40} 
            className=" rounded-lg "
        />
    </div>
</div>

        
    </>
  )
}

export default Design
