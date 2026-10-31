"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/puppies", label: "Puppies" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];

export function PawIcon({
  className = "size-3 text-toffee",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      data-scrolled={scrolled}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-milk/95 shadow-sm backdrop-blur-md" : "bg-milk"
      }`}
    >
      <div className="gutter mx-auto flex h-[var(--header-h)] max-w-[110rem] items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          aria-label="TeddyPups U.A.E. — home"
        >
          <div className="relative size-10 overflow-hidden rounded-full border border-cocoa/20 sm:size-12">
            <Image
              src="/brand/logo.png"
              alt="TeddyPups Logo"
              width={56}
              height={56}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="font-plush text-2xl font-bold tracking-tight text-cocoa sm:text-[1.75rem]">
            TeddyPups
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 md:flex lg:gap-2"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-all ${
                  isActive
                    ? "bg-honey-soft/50 text-toffee-deep"
                    : "text-cocoa-soft hover:bg-honey-soft/20 hover:text-cocoa"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <PawIcon className="size-3 text-toffee" />}
              </Link>
            );
          })}
        </nav>

        {/* Action button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp hidden text-sm font-semibold sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            <span>WhatsApp us</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-cocoa bg-milk px-4 text-[0.95rem] font-semibold text-cocoa md:hidden"
            aria-label="Open mobile menu"
          >
            <Menu className="size-4" />
            <span>Menu</span>
          </button>
        </div>
      </div>


      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-milk p-6 md:hidden">
          <div className="flex items-center justify-between border-b border-cocoa/10 pb-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="size-10 overflow-hidden rounded-full border border-cocoa/20">
                <Image
                  src="/brand/logo.png"
                  alt="TeddyPups Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-plush text-xl font-bold text-cocoa">
                TeddyPups
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="h-10 rounded-full border-2 border-cocoa bg-milk px-5 text-sm font-semibold text-cocoa"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          <nav className="flex flex-col gap-3 py-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-lg font-semibold ${
                    isActive
                      ? "bg-honey-soft/50 text-toffee-deep"
                      : "text-cocoa hover:bg-honey-soft/20"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <PawIcon className="size-4 text-toffee" />}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-cocoa/10 pt-6">
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center py-4 text-base font-semibold"
            >
              <WhatsAppIcon className="size-5" />
              <span>WhatsApp us (+971 54 167 6733)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
