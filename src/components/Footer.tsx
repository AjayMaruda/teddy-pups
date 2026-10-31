import React from "react";
import Link from "next/link";
import { WhatsAppIcon } from "./Header";

export default function Footer() {
  return (
    <footer className="relative bg-[#24130b] text-milk pb-[calc(var(--bar-h)+1.5rem)] md:pb-0">
      {/* Rolling hill transition SVG at top */}
      <div className="overflow-hidden leading-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-12 w-full text-milk sm:h-16 md:h-20"
        >
          <path
            fill="currentColor"
            d="M0 0 C360 70 1080 70 1440 0 L1440 80 L0 80 Z"
          />
        </svg>
      </div>

      {/* Decorative stars */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-16 h-48 overflow-hidden opacity-40">
        <span className="absolute left-[8%] top-[20%] text-honey text-xs animate-pulse">✦</span>
        <span className="absolute left-[24%] top-[15%] text-honey text-sm animate-pulse" style={{ animationDelay: '0.8s' }}>✦</span>
        <span className="absolute left-[45%] top-[35%] text-honey text-xs animate-pulse" style={{ animationDelay: '1.4s' }}>✦</span>
        <span className="absolute left-[68%] top-[18%] text-honey text-base animate-pulse" style={{ animationDelay: '0.4s' }}>✦</span>
        <span className="absolute left-[88%] top-[28%] text-honey text-xs animate-pulse" style={{ animationDelay: '1.9s' }}>✦</span>
      </div>

      <div className="gutter mx-auto max-w-[110rem] pb-16 pt-8 md:pt-14">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand Intro & Tagline */}
          <div className="md:col-span-5">
            <h2 className="font-plush text-big text-honey-soft">Home, at last.</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-milk/80">
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium concierge services and worldwide shipping.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm font-semibold"
              >
                <WhatsAppIcon className="size-4" />
                <span>Chat with our team</span>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-4 md:col-start-7">
            <h3 className="font-plush text-xl font-bold text-honey-soft">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              <li>
                <Link href="/puppies" className="text-milk/75 transition-colors hover:text-honey">
                  Available puppies
                </Link>
              </li>
              <li>
                <Link href="/gone-home" className="text-milk/75 transition-colors hover:text-honey">
                  Gone home
                </Link>
              </li>
              <li>
                <Link href="/happy-families" className="text-milk/75 transition-colors hover:text-honey">
                  Happy families
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-milk/75 transition-colors hover:text-honey">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#delivery" className="text-milk/75 transition-colors hover:text-honey">
                  Delivery & collection
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-milk/75 transition-colors hover:text-honey">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-milk/75 transition-colors hover:text-honey">
                  Visit & contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Say Hello & Contact */}
          <div className="md:col-span-3">
            <h3 className="font-plush text-xl font-bold text-honey-soft">Say hello</h3>
            <div className="mt-4 space-y-3 text-[0.95rem]">
              <div>
                <p className="text-xs uppercase tracking-wider text-milk/50">WhatsApp</p>
                <a
                  href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-honey transition-colors hover:underline"
                >
                  +971 54 167 6733
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-milk/50">Email</p>
                <a
                  href="mailto:teddypupsadmin@gmail.com"
                  className="font-medium text-milk/75 transition-colors hover:text-honey"
                >
                  teddypupsadmin@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-milk/50">Follow our pups</p>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://www.instagram.com/teddypups.worldwide/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-milk/20 px-3 py-1 text-milk/80 transition-colors hover:border-honey hover:text-honey"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@teddypupsuae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-milk/20 px-3 py-1 text-milk/80 transition-colors hover:border-honey hover:text-honey"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61567496944539"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-milk/20 px-3 py-1 text-milk/80 transition-colors hover:border-honey hover:text-honey"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-milk/10 pt-8 text-center text-xs text-milk/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} TeddyPups U.A.E. All rights reserved.</p>
          <p className="font-scrawl text-sm text-honey-soft/80">Crafted with love for puppy parents everywhere ♥</p>
        </div>
      </div>
    </footer>
  );
}

