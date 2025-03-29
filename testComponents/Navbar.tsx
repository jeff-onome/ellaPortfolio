'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu , AiOutlineClose }  from 'react-icons/ai'

const navBar =[
    {title : 'About' , path: '#about'},
    {title : 'Contact' , path: '#contact'},
    {title : 'Portfolio' , path: '#portfolio'},
]



function Navbar() {


    const [ nav , setNav ] = useState(false)


    const toggleNav = () =>{
        setNav(!nav)
    }

    const closeNav = () =>{
        setNav(false)
    }

  return (
    <div className='pt-6 text-white/70'>
        <div className='hidden items-center md:flex px-4 pt-2 mx-auto max-w[400px]'>
            <ul className='flex'>
                    {navBar.map((link, index)=>(
                        <li key={index}>
                                <Link href={link.path}>
                                    <p>{link.title}</p>
                                </Link>
                            </li>
                           
                    ))}
                     <li><a>
                        <h1 className='text-lg font-bold text-white/70 cursor-pointer '>Contact me</h1>
                        <div className='relative'>
                            <div className='absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full  '></div>
                            <div className='mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full  '></div>
                        </div>
                     </a>
                                
                                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
