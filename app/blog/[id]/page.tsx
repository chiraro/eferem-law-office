'use client'
import Hero from "../Hero";
import { useParams } from 'next/navigation'
import ViewBlog from "./ViewBlog";

export default function page() {
    const { id } = useParams()

    return (
        <div className="w-full min-h-screen relative">
            <Hero />
            <ViewBlog id={id} />
        </div>
    )
}