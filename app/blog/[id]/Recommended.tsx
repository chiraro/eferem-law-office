import Image from 'next/image'
import blogs from '../../../data/blogs'
import Link from 'next/link'

export default function Recommended() {
  return (
    <div className='lg:max-w-[400px] flex flex-col gap-5'>
        <h2 className='text-xl font-bold text-[#3a3a38]'>Recommendations</h2>
        {blogs?.slice(blogs.length - 3, blogs.length).map((blog, index) => (
            <div key={index} className='w-full lg:max-w-[600px] flex flex-col sm:flex-row gap-5 mb-5 items-center'>
                <div className="relative w-full sm:w-[400px] min-h-[170px] max-h-[170px]">
                    <Image className='' src={blog.image} alt={blog.title} objectFit='cover' layout='fill' quality={100} />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className='text-lg font-semibold max-w-[350px] text-[#3A3A38]'>{blog.title}</h3>
                    <div className="flex flex-col gap-10 border-t border-[#3A3A38] pt-3">
                        <p className='text-sm font-normal text-[#3A3A38]'>{blog.content.slice(0, 60)}... <Link href={"/"} className="text-[#085AA3]">Read more</Link></p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
