'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const currentPage = usePathname().split("/")[1] || "";
  const whiteNavs = useMemo(() => ["contact", "blog", "our-team"], []);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll1 = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 50);
      setScrollingUp(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    if (whiteNavs.includes(currentPage)) {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }

    const handleScroll2 = (e: Event) => {
      if (window.scrollY > 50) {
        setIsWhite(false);
      } else {
        if (whiteNavs.includes(currentPage)) {
          setIsWhite(true);
        } else {
          setIsWhite(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll1);
    window.addEventListener("scroll", handleScroll2);

    return () => {
      window.removeEventListener("scroll", handleScroll1);
      window.removeEventListener("scroll", handleScroll2);
    };
  }, [isScrolled, scrollingUp, currentPage, whiteNavs]);

  const checkCurrentPage = (page: string) => currentPage === page;
  
  return (
    <div className="relative w-full overflow-x-hidden">
      <nav className={`fixed top-0 left-0 z-[999999] ${scrollingUp ? "translate-y-0" : isScrolled && "translate-y-[-100%]"} ${isScrolled ? "bg-white shadow-lg py-[20px]" : "py-[50px]"} duration-300 w-full md:px-[100px] px-[30px] flex justify-between items-center gap-10`}>
        <Link href={"/"} className="flex gap-4 items-center">
          <Image className="w-16 h-16" src="/images/Logo.png" width={200} height={200} alt="Eferem Law Office" quality={100} />
          <h2 className={`sm:text-2xl text-xl font-bold ${isWhite ? "text-white" : "text-[#3a3a38]"}`}>Eferem Law Office</h2>
        </Link>

        <div className="hidden xl:flex items-center gap-[50px]">
          <Link href="/" className={`text-lg ${isWhite && "text-[#ffffff_!important]"} hover:text-[#085AA3] duration-300 ${checkCurrentPage("") ? "text-[#085AA3] font-bold" : "text-[#3a3a38]"}`}>Home</Link>
          <Link href="/about" className={`text-lg ${isWhite && "text-[#ffffff_!important]"} hover:text-[#085AA3] duration-300 ${checkCurrentPage("about") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>About</Link>
          <Link href="/practice-areas" className={`text-lg ${isWhite && "text-[#ffffff_!important]"} hover:text-[#085AA3] duration-300 ${checkCurrentPage("practice-areas") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Practice Areas</Link>
          <Link href="/our-team" className={`text-lg ${isWhite && "text-[#ffffff_!important]"} hover:text-[#085AA3] duration-300 ${checkCurrentPage("our-team") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Our Team</Link>
          <Link href="/blog" className={`text-lg ${isWhite && "text-[#ffffff_!important]"} hover:text-[#085AA3] duration-300 ${checkCurrentPage("blog") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Blog</Link>
          <Link href="/contact" className={`text-lg ${isWhite && "text-[#ffffff_!important]"} hover:text-[#085AA3] duration-300 ${checkCurrentPage("contact") ? "text-[#085AA3]" : "text-[#3a3a38]"}`}>Contact</Link>
        </div>

        <div className={`flex xl:hidden border ${isWhite ? "text-white border-[#fff]" : "text-[#3a3a38] border-[#3a3a38]"} text-4xl cursor-pointer rounded-lg p-2`} onClick={() => setMenuOpen(true)}>
          <LuMenu />
        </div>
      </nav>

      <div className={`fixed z-[9999999] ${menuOpen ? "left-0" : "left-full"} duration-300 w-full h-screen bg-[#085AA3] flex flex-col pt-[150px]`}>
        <div className={`absolute ${isScrolled ? "top-5" : "top-[50px]"} right-[30px] md:right-[100px] border border-[#fff] text-[#fff] text-4xl cursor-pointer rounded-lg p-2`} onClick={() => setMenuOpen(false)}>
          <LuX />
        </div>
        <div className="flex justify-center px-10">
            <div className="flex flex-col items-center gap-10">
              <Link href="/" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("") ? "text-[#FCA834] font-bold" : "text-[#fff]"}`} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("about") ? "text-[#FCA834]" : "text-[#fff]"}`} onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/practice-areas" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("practice-areas") ? "text-[#FCA834]" : "text-[#fff]"}`} onClick={() => setMenuOpen(false)}>Practice Areas</Link>
              <Link href="/our-team" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("our-team") ? "text-[#FCA834]" : "text-[#fff]"}`} onClick={() => setMenuOpen(false)}>Our Team</Link>
              <Link href="/blog" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("blog") ? "text-[#FCA834]" : "text-[#fff]"}`} onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className={`text-3xl hover:text-[#FCA834] duration-300 ${checkCurrentPage("contact") ? "text-[#FCA834]" : "text-[#fff]"}`} onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
