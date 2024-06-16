import BlogPaginator from "./BlogPaginator";
import Hero from "./Hero";


export default function page() {
  return (
    <div className="w-full min-h-screen relative">
        <Hero />
        <BlogPaginator />
    </div>
  )
}
