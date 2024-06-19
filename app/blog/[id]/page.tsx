'use client'
import Hero from '../../../components/Hero'
import ViewBlog from "./ViewBlog";

export default function page() {

    return (
        <div className="w-full min-h-screen relative">
            <Hero title="News" />
            <ViewBlog />
        </div>
    )
}
