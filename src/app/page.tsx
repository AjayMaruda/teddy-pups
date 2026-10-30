import React from "react";
import Link from "next/link";
import { puppiesData } from "@/data/puppies";
import PuppyCard from "@/components/PuppyCard";
import MascotTeddy from "@/components/MascotTeddy";
import { PawIcon, WhatsAppIcon } from "@/components/Header";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="tp-hero gutter mx-auto max-w-[110rem] pb-20 pt-8 md:pt-16">
        <div className="flex flex-col items-center text-center">
          <p className="font-scrawl text-lg font-bold text-toffee-ink">
            every puppy is family
          </p>
          <h1 className="font-plush text-giant mt-3 max-w-4xl font-bold tracking-tight text-cocoa">
            Premium teacup <br className="hidden sm:inline" />
            puppies in Dubai
          </h1>
          <p className="text-lede mt-6 max-w-2xl text-cocoa-soft">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders in Korea &amp; Europe.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/puppies" className="btn btn-primary">
              View available puppies
            </Link>
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon className="size-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mascot Centerpiece */}
        <div className="mt-12 flex justify-center">
          <MascotTeddy pose="standing" className="w-40 sm:w-48" />
        </div>

        {/* Lineup of Available Puppies Preview */}
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-scrawl text-sm text-toffee-ink">meet the pups</p>
              <h2 className="font-plush text-2xl font-bold text-cocoa sm:text-3xl">
                Ready to find their forever homes
              </h2>
            </div>
            <Link href="/puppies" className="text-sm font-bold text-toffee hover:underline">
              See all ({puppiesData.length}) →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {puppiesData.slice(0, 4).map((puppy, idx) => (
              <PuppyCard key={puppy.id} puppy={puppy} tiltIndex={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

