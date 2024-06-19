import Image from 'next/image'
import blogs from '../../../data/blogs'
import Link from 'next/link'

export default function Recommended() {
  return (
    <div className='lg:max-w-[400px] flex flex-col gap-5'>
        <h2 className='text-xl font-bold text-[#3a3a38]'>Recommendations</h2>
        {blogs?.slice(blogs.length - 3, blogs.length).map((blog, index) => (
            <div key={index} className='w-full sm:min-w-[400px] lg:max-w-[600px] flex flex-col sm:flex-row gap-5 mb-5 items-center '>
                <div className="relative w-full min-w-[170px] h-[170px]">
                    <Image className='w-full h-full object-cover' src={blog.image} alt={blog.title} width={500} height={500}  quality={100} />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className='text-lg font-semibold max-w-[350px] text-[#3A3A38]'>{blog.title}</h3>
                    <div className="flex flex-col gap-10 border-t border-[#3A3A38] pt-3">
                        <p className='text-sm font-normal text-[#3A3A38]'>{blog.content.slice(0, 60)}... <Link href={`/blog/${blog.id}`} className="text-[#085AA3]">Read more</Link></p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
