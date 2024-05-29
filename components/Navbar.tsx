'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const currentPage = usePathname().split("/")[1] || "";

  const checkCurrentPage = (page: String) => {
    if (currentPage === page) {
      return true;
    } else {
      return false;
    }
  };
  
  return (
    <nav className={`fixed top-0 left-0 z-[999999] ${scroll ? "bg-white shadow-lg py-[20px]" : "py-[50px]"} duration-300 w-full px-[100px] flex justify-between items-center gap-10`}>
      <Link href={"/"} className="flex gap-4 items-center">
        <Image className="w-16 h-16" src="/images/Logo_t.png" width={200} height={200} alt="Eferem Law Office" quality={100} />
        <h2 className="text-2xl font-bold text-[#3a3a38]">Eferem Law Office</h2>
      </Link>

      <div className="flex items-center gap-[50px]">
        <Link href="/" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("") ? "text-[#085AA3] font-bold" : "text-[#3a3a38]"}`}>Home</Link>
        <Link href="/about" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("/about") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>About</Link>
        <Link href="/practice-areas" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("/practice-areas") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Practice Areas</Link>
        <Link href="/our-team" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("/our-team") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Our Team</Link>
        <Link href="/blog" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("/blog") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Blog</Link>
        <Link href="/contact" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("/contact") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
