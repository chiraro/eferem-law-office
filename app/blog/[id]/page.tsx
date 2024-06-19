'use client'
import Hero from "../Hero";
import ViewBlog from "./ViewBlog";

export default function page() {

    return (
        <div className="w-full min-h-screen relative">
            <Hero />
            <ViewBlog />
        </div>
    )
}
