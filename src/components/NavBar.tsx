"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
        <Link href="/" className="font-headline text-2xl italic text-rose-900 dark:text-rose-100">
          Lilly&apos;s Nails
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label tracking-widest uppercase text-xs transition-colors duration-300 ${
                  isActive
                    ? "text-rose-900 dark:text-rose-100 border-b-2 border-rose-400 pb-1"
                    : "text-stone-500 dark:text-stone-400 hover:text-rose-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Link href="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-label tracking-widest uppercase text-xs scale-95 duration-200 ease-in-out hover:scale-100 transition-transform">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
