'use client'
import Image from 'next/image'
import React from 'react'

import Abubakba from '../assets/2.jpeg'

function SelectedWork() {
  return (
    <div className='container'>
      <p>SELECTED WORKS</p>
      <p>That speak for itself 😜</p>
      <div>
      <Image src={Abubakba} alt='ABUBAKA' width={500} height={300} />
      </div>
    </div>
  )
}

export default SelectedWork
