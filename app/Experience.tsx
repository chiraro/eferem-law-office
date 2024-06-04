import Image from 'next/image'
import React from 'react'
import { FaSquareCheck } from "react-icons/fa6";

export default function Experience() {
  return (
    <div className='w-full p-[100px] flex gap-20 items-center'>
        <div className="max-w-[450px]">
          <Image src="/images/home/Experience.png" alt="experience" width={1080} height={1920} quality={100} />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className='text-5xl leading-[3.5rem] max-w-[600px] text-[#3A3A38]'>25 Years Of Extensive Experience Advising And Representing Entites</h2>
          <div className="flex flex-col gap-10 border-t border-[#3A3A38] pt-10">
            <div className="flex gap-4 items-center">
              <FaSquareCheck size={30} className='text-[#085AA3]' />
              <p className='text-3xl text-[#3A3A38] font-normal'>Success Handled Cases</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaSquareCheck size={30} className='text-[#085AA3]' />
              <p className='text-3xl text-[#3A3A38] font-normal'>Responsible Raised</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaSquareCheck size={30} className='text-[#085AA3]' />
              <p className='text-3xl text-[#3A3A38] font-normal'>Success Handled Cases</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaSquareCheck size={30} className='text-[#085AA3]' />
              <p className='text-3xl text-[#3A3A38] font-normal'>Responsible Raised</p>
            </div>
          </div>
        </div>
    </div>
  )
}
