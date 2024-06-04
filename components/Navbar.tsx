'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    window.onscroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 50);
      setScrollingUp(prevScrollPos > currentScrollPos );
      prevScrollPos = currentScrollPos;
    };
    // console.log(isScrolled, scrollingUp)
  }, [isScrolled, scrollingUp]);
  

  const currentPage = usePathname().split("/")[1] || "";

  const checkCurrentPage = (page: String) => {
    if (currentPage === page) {
      return true;
    } else {
      return false;
    }
  };
  
  return (
    <div className="relative w-full overflow-x-hidden">
      <nav className={`fixed top-0 left-0 z-[999999] ${scrollingUp ? "translate-y-0" : isScrolled && "translate-y-[-100%]"} ${isScrolled ? "bg-white shadow-lg py-[20px]" : "py-[50px]"} duration-300 w-full md:px-[100px] px-[30px] flex justify-between items-center gap-10`}>
        <Link href={"/"} className="flex gap-4 items-center">
          <Image className="w-16 h-16" src="/images/Logo_t.png" width={200} height={200} alt="Eferem Law Office" quality={100} />
          <h2 className="sm:text-2xl text-xl font-bold text-[#3a3a38]">Eferem Law Office</h2>
        </Link>

        <div className="hidden xl:flex items-center gap-[50px]">
          <Link href="/" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("") ? "text-[#085AA3] font-bold" : "text-[#3a3a38]"}`}>Home</Link>
          <Link href="/about" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("about") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>About</Link>
          <Link href="/practice-areas" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("practice-areas") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Practice Areas</Link>
          <Link href="/our-team" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("our-team") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Our Team</Link>
          <Link href="/blog" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("blog") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Blog</Link>
          <Link href="/contact" className={`text-lg hover:text-[#085AA3] duration-300 ${checkCurrentPage("contact") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Contact</Link>
        </div>

        <div className="flex xl:hidden border border-[#3a3a38] text-[#3a3a38] text-4xl cursor-pointer rounded-lg p-2" onClick={() => setMenuOpen(true)}>
          <LuMenu />
        </div>
      </nav>

      <div className={`fixed z-[9999999] ${menuOpen ? "left-0" : "left-full"} duration-300 w-full h-screen bg-[#085AA3] flex flex-col pt-[150px]`}>
        <div className={`absolute ${isScrolled ? "top-5" : "top-[50px]"} right-[30px] md:right-[100px] border border-[#fff] text-[#fff] text-4xl cursor-pointer rounded-lg p-2`} onClick={() => setMenuOpen(false)}>
          <LuX />
        </div>
        <div className="flex justify-center px-10">
            <div className="flex flex-col items-center gap-10">
              <Link href="/" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("") ? "text-[#FCA834] font-bold" : "text-[#fff]"}`}>Home</Link>
              <Link href="/about" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("about") ? "text-[#FCA834]" : "text-[#fff]"}`}>About</Link>
              <Link href="/practice-areas" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("practice-areas") ? "text-[#FCA834]" : "text-[#fff]"}`}>Practice Areas</Link>
              <Link href="/our-team" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("our-team") ? "text-[#FCA834]" : "text-[#fff]"}`}>Our Team</Link>
              <Link href="/blog" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("blog") ? "text-[#FCA834]" : "text-[#fff]"}`}>Blog</Link>
              <Link href="/contact" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("contact") ? "text-[#FCA834]" : "text-[#fff]"}`}>Contact</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
