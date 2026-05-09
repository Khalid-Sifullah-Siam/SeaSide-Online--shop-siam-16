"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/all-products" },
    { name: "My Profile", href: "/profile" },
  ];

  const authLinks = [
    { name: "Sign Up", href: "/signup" },
    { name: "Sign In", href: "/signin" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-md z-50 sticky top-0 border-b">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-orange-500"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Logo */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link href="/" className="text-2xl font-extrabold text-orange-500">
            SeaSide
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-red-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-3">
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold px-4 py-1 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Expansion - Pushes content down */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMenuOpen ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-5">
          {[...links, ...authLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-semibold text-lg transition-colors ${
                isActive(link.href)
                  ? "text-red-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
