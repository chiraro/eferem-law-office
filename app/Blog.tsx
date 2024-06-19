import Image from 'next/image'
import React from 'react'
import blogs from '../data/blogs'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className='w-full px-8 sm:px-[100px] py-20 flex flex-col gap-5'>
        <h3 className='text-xl sm:text-2xl md:text-3xl text-[#3a3a38] font-semibold'>News</h3>
        <h2 className='text-3xl sm:text-4xl md:text-5xl text-[#3a3a38] font-bold max-w-[450px] md:leading-[4.25rem] mb-10'>The Latest News And Blog From ELO</h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14">
            {blogs?.slice(0, 4).map((blog, index) => (
                <div key={index} className='w-full lg:max-w-[600px] flex flex-col sm:flex-row gap-5 items-center'>
                    <div className="relative w-full sm:w-[400px] h-[300px] ">
                        <Image className='w-full h-full object-cover' src={blog.image} alt={blog.title} width={800} height={600} quality={100} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className='text-3xl font-medium leading-[2.3rem] max-w-[350px] text-[#3A3A38]'>{blog.title}</h3>
                        <div className="flex flex-col gap-10 border-t border-[#3A3A38] pt-5">
                            <p className='text-lg font-normal text-[#3A3A38]'>{blog.content.slice(0, 100)}</p>
                        </div>
                        <Link href={`/blog/${blog.id}`} className="group w-fit px-8 sm:px-10 py-2 flex items-center gap-14 bg-[#D9D9D9] border border-[#085AA3] text-lg text-[#3A3A38] font-semibold"><p>Read now</p></Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
