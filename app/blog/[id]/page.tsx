'use client'
import Hero from "../Hero";
import { useParams } from 'next/navigation'
import ViewBlog from "./ViewBlog";

export default function page() {

    return (
        <div className="w-full min-h-screen relative">
            <Hero />
            <GetParam />
        </div>
    )
}

const GetParam = () => {
    const { id } = useParams()
    return <ViewBlog id={id} />
}