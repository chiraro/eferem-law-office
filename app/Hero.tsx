'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className='relative w-full h-screen overflow-hidden flex items-end justify-end px-[100px]'>
        <motion.div initial={{y: "300px", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ease: "easeInOut", duration: .5,}} className="absolute z-10 left-[100px] max-w-[900px] pb-[100px] flex flex-col gap-[100px]">
            <motion.h1 initial={{y: 0}} animate={{y: [0, 100, 0]}} transition={{duration: .7}} className='text-[82px] leading-[6rem] font-semibold text-[#3a3a38]'>Your Trusted Legal <span className='text-[#FCA834]'>Advisors</span></motion.h1>
            <Link className='text-2xl text-white bg-[#085AA3] hover:bg-[#3a3a38] w-fit rounded-lg duration-300 py-5 px-14' href={'/contact'}>Get started</Link>
        </motion.div>
        <motion.div initial={{x: "300px", opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ease: "easeInOut", duration: .5}} className="w-full h-full flex justify-end items-end ">
            <Image className='w-[900px] object-contain' src='/images/home/Hero.png' width={1920} height={1080} alt='Hero Image' />
        </motion.div>
    </div>
  )
}
