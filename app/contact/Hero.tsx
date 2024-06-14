import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='relative w-full max-h-[450px] h-[650px] flex items-center justify-center mb-40'>
        <Image className='relative w-full h-full object-cover' src='/images/Contact.png' width={1920} height={650} alt='Hero' quality={100} />
        <h2 className='absolute text-5xl sm:text-7xl text-white font-medium'>Contact Us</h2>
    </div>
  )
}
