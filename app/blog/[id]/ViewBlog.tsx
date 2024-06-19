'use client'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import blogs from '../../../data/blogs'
import Recommended from './Recommended'

export default function ViewBlog() {
    const { id } = useParams()

    const [blog, setBlog] = useState<any>()
    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState("")

    useEffect(() => {
        setBlog(blogs.find(blog => blog.id === id))
        setLoading(false)

        if (blog) {
            setContent(
                blog.content.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className='text-base mb-5'>{paragraph}</p>
                ))
            )
        }

        return () => {
            setBlog(null)
        }
    }, [id, blog])

    if (loading) return <div className='w-full h-[500px] bg-gray-300 animate-pulse'></div>
    return (
        blog &&
        <div className='w-full px-5 md:px-[80px] xl:px-[120px] mb-[100px]'>
            <div className="w-full mb-20">
                <Image className='w-full h-[500px] object-cover' src={blog.image} alt={blog.title} width={1920} height={1080} quality={100} />
            </div>
            <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-14 xl:gap-[100px]">
                <div className="">
                    <h1 className='text-4xl font-bold mb-10'>{blog.title}</h1>
                    <div className='text-base'>{content}</div>
                </div>
                <Recommended />
            </div>
        </div>
    )
}
