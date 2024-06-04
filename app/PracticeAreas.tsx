import React from 'react'
import practiceAreas from '@/data/practiceAreas'
import Link from 'next/link'
import { PiArrowRightFill } from "react-icons/pi";

export default function PracticeAreas() {
  return (
    <div className='w-full flex flex-col items-center gap-14 px-8 md:px-14 lg:px-[100px]'>
        <h2 className='text-5xl xs:text-[60px] text-[#3a3a38] font-semibold'>Our Practice Areas</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {practiceAreas?.slice(0, 4).map((area, index) => (
                <div key={index} className="w-full md:max-w-[570px] px-5 xs:px-12 py-10 bg-[#085AA3] rounded-lg flex flex-col gap-5">
                    <div className="w-fit flex items-center justify-center bg-[#043C6F] text-5xl text-[#FCA834] rounded-full p-4">
                        {area.icon}
                    </div>
                    <h3 className="text-white text-3xl font-bold">{area.title}</h3>
                    <p className="text-white text-xl font-light">{area.description}</p>
                </div>
            ))}
        </div>
        <div className="w-full">
            <Link href={"/"} className="group w-fit px-5 py-4 flex items-center gap-14 bg-[#D9D9D9] border border-[#085AA3] rounded-lg text-xl text-[#3A3A38] font-semibold"><p>See More</p> <PiArrowRightFill className='-translate-x-5 group-hover:translate-x-0 duration-300' color='#085AA3' size={30} /></Link>
        </div>
    </div>
  )
}
