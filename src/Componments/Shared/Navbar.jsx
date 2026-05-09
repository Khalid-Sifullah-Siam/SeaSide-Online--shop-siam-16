"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

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

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

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

        {/* Avatar for mobile to md screens (always visible on right side) */}
        {user && (
          <div className="flex md:hidden items-center gap-3">
            <Avatar>
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
          </div>
        )}

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

        {/* Desktop Auth / User */}
        <div className="hidden md:flex gap-6 items-center">
          {!user ? (
            authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold px-4 py-1 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))
          ) : (
            <>
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} variant="danger">
                Sign Out
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMenuOpen ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-5">
          {links.map((link) => (
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

          {!user ? (
            authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold text-lg px-4 py-2 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))
          ) : (
            /* Only SignOut button when menu open */
            <Button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
              variant="danger"
              className="w-full"
            >
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
