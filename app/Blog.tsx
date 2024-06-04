import Image from 'next/image'
import React from 'react'
import blogs from '../data/blogs'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className='w-full px-[100px] py-20 flex flex-col gap-5'>
        <h3 className='text-3xl text-[#3a3a38] font-semibold'>News</h3>
        <h2 className='text-5xl text-[#3a3a38] font-bold max-w-[450px] leading-[4.25rem] mb-10'>The Latest News And Blog From ELO</h2>
        <div className="w-full flex flex-wrap gap-14">
            {blogs?.slice(0, 4).map((blog, index) => (
                <div key={index} className='w-full max-w-[600px] flex gap-5 items-center'>
                    <div className="relative w-[400px] bg-red-500">
                        <Image className='aspect-[3/4] object-cover' src={blog.image} alt={blog.title} width={1080} height={1920} quality={100} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className='text-3xl font-medium leading-[2.3rem] max-w-[350px] text-[#3A3A38]'>{blog.title}</h3>
                        <div className="flex flex-col gap-10 border-t border-[#3A3A38] pt-5">
                            <p className='text-lg font-normal text-[#3A3A38]'>{blog.content}</p>
                        </div>
                        <Link href={"/"} className="group w-fit px-10 py-2 flex items-center gap-14 bg-[#D9D9D9] border border-[#085AA3] text-lg text-[#3A3A38] font-semibold"><p>Read now</p></Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
