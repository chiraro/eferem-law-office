'use client'
import Image from 'next/image'
import React from 'react'
import staff from '@/data/staff'
import Link from 'next/link'

export default function Staff() {
  return (
    <div className='w-full px-[100px] flex flex-col gap-5'>
        <h3 className='text-3xl text-[#3a3a38] font-bold'>Meet Our Staff</h3>
        <h2 className='text-6xl text-[#3a3a38] font-bold max-w-[800px] leading-[4.25rem] mb-10'>Professional lawyers With extensive experience</h2>
        <div className="w-full flex items-center justify-between gap-20">
            {staff?.slice(0, 3).map((member, index) => (
                <div key={index} className="w-[350px] p-8 flex flex-col items-center bg-[#D9D9D9]">
                    <Image src={member.image} className="w-full h-[300px] object-cover" alt={member.name} width={500} height={800} />
                    <h2 className='text-4xl my-5'>{member.name}</h2>
                    <p className='text-[#085AA3] mb-5 text-lg'>{member.title}</p>
                    <div className="w-fit flex items-center justify-between gap-5 text-[#085AA3] text-2xl">
                        {member?.socials.map((social, i) => (
                            <Link key={i} href={social.link}>{social.icon}</Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full flex justify-center mt-[70px]">
            <Link href={"/"} className="group w-fit px-20 py-4 flex items-center gap-14 bg-[#D9D9D9] border border-[#085AA3] rounded-lg text-xl text-[#3A3A38] font-semibold"><p>Our People</p></Link>
        </div>
    </div>
  )
}
