'use client'
import Image from 'next/image'
import React from 'react'

import Abubakba from '../assets/2.jpeg'

function FirstPage() {
  return (
    <div>
        <div className='container mx-auto'>
        <p className='text-white/60 pb-8'>Available for new Opportunity</p>
        <p className='text-5xl font-bold text-white'>EMMANUELLA</p>

        
        </div>
<div className="container mx-auto ">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div className=" text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ratione odit praesentium veniam deleniti officia illum velit facere temporibus error sunt ex eligendi vitae quaerat consequuntur dolorum, aperiam nesciunt eveniet fugiat quos porro eum laboriosam labore ipsa. Nihil dignissimos illo repellendus, ea obcaecati vel iste sunt ipsa molestias natus eveniet?</div>
    <div className="  text-5xl font-bold text-white">ABUBAKA</div>
   
  </div>
</div>
<div className="container mx-auto ">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div className="relative"> 
        <div className="absolute right-0 bottom-0"> 
            <p className='text-white'>| PRODUCT</p>
            <p className='text-green-700'>Hire me </p>
        </div>
    </div>
    <div className=" "><Image src={Abubakba} alt='ABUBAKA' width={500} height={300} /></div>
   
  </div>
</div>

    </div>

  )
}

export default FirstPage
