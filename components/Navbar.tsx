'use client'

import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'


const navLinks = [
    {title : 'Works' , path : '#works',},
    {title : 'About' , path : '#about',},
    {title : 'Contact' , path : '#contact',},
    {title : 'Resume' , path : '#resume',},
]
// const xi = navLinks.filter((maps) => maps.title('About') ) ;
// console.log(xi);
// const xi = navLinks.filter((maps) => maps.title != 'About'); 
// console.log(xi);


function navbar() {

    const [nav , setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNAv =() =>{
        setNav(false)
    }

    return (
        <div className='z-50  flex justify-between w-full text-white font-bold mt-5 p-5' >
          <div>
    <p className="text-white">Portfolio'25</p>
</div>

<div className="hidden md:flex p-2 w-full max-w-[400px] absolute right-0">
    <ul className="flex flex-row p-2 space-x-8 justify-start">
        {navLinks.map((link, index) => (
            <li key={index}>
                <Link 
                    href={link.path} 
                    className="transform text-white/70 hover:text-white/50 transition-all duration-300 ease-in-out"
                >
                    {link.title}
                </Link>
            </li> 
        ))}
    </ul>
</div>


<div onClick={toggleNav} className='md:hidden absolute top-5
right-14 border rounded z-50 text-white/70 border-white/70 p-2'>
{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} /> }

</div> 
 
<div className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full' }  `}>
        <ul className='flex flex-col items-center justify-center space-y-8 h-full'>
                 {navLinks.map((link , index) => (
                    <li key={index}>
                        <Link href={link.path} onClick={closeNAv} 
                        className='text-5xl'
                        >
                            {link.title} 
                        </Link>
                    </li>
                 ))}
        </ul>
</div>


 
        </div>
    );
}

export default navbar;