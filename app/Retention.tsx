import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Retention() {
  return (
    <div className='w-full p-[100px] flex flex-col items-center gap-16'>
        <h1 className='text-[60px] text-[#3a3a38] font-bold mb-4'>Legal Retention Process</h1>
        <Image src='/images/home/retention.svg' className='w-full object-contain' alt='retention' width={1920} height={1080} />
        <Link href={"/"} className="group w-fit px-20 py-4 mt-5 flex items-center gap-14 bg-[#D9D9D9] border border-[#085AA3] rounded-lg text-2xl text-[#3A3A38] font-semibold"><p>Enquire</p></Link>
    </div>
  )
}
