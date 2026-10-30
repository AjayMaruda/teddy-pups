"use client";

import React, { useState } from "react";
import Link from "next/link";
import { familiesData } from "@/data/families";
import PolaroidCard from "@/components/PolaroidCard";
import LightboxModal from "@/components/LightboxModal";
import MascotTeddy from "@/components/MascotTeddy";
import { Heart, Sparkles } from "lucide-react";

export default function HappyFamiliesPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <div className="gutter mx-auto max-w-[110rem] pb-24 pt-8 md:pt-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-cocoa/10 pb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
            <Heart className="size-3 text-toffee fill-current" />
            <span>Community of Puppy Parents</span>
          </div>
          <h1 className="font-plush text-giant mt-3 font-bold text-cocoa">
            Happy families
          </h1>
          <p className="text-lede mt-4 text-cocoa-soft">
            Real photos shared by TeddyPups families after welcoming their new puppy home. Every snap captures a heartwarming story of companionship, trust, and pure joy.
          </p>
        </div>

        {/* Mascot */}
        <div className="flex flex-col items-center self-center md:self-auto">
          <MascotTeddy pose="standing" className="w-36" />
          <span className="font-scrawl mt-1 text-xs font-bold text-toffee-ink">
            so much love ♥
          </span>
        </div>
      </div>

      {/* Polaroid Photo Wall */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6">
        {familiesData.map((polaroid, idx) => (
          <PolaroidCard
            key={polaroid.id}
            polaroid={polaroid}
            onClick={() => setActivePhotoIndex(idx)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <LightboxModal
          isOpen={activePhotoIndex !== null}
          onClose={() => setActivePhotoIndex(null)}
          title="TeddyPups Family Album"
          currentIndex={activePhotoIndex}
          totalCount={familiesData.length}
          src={familiesData[activePhotoIndex].src}
          alt={familiesData[activePhotoIndex].alt}
          onPrev={() =>
            setActivePhotoIndex(
              (activePhotoIndex - 1 + familiesData.length) % familiesData.length
            )
          }
          onNext={() =>
            setActivePhotoIndex((activePhotoIndex + 1) % familiesData.length)
          }
        />
      )}

      {/* Bottom CTA */}
      <div className="mt-28 rounded-3xl border-2 border-cocoa bg-[#fffdf8] p-8 sm:p-14 text-center shadow-[6px_6px_0px_#2a170e]">
        <p className="font-scrawl text-lg font-bold text-toffee-ink">join our circle</p>
        <h2 className="font-plush text-3xl font-bold text-cocoa sm:text-4xl mt-2">
          Ready to create your own memories?
        </h2>
        <p className="mt-3 text-cocoa-soft max-w-xl mx-auto text-base">
          Browse our available puppies today or visit our showroom in Downtown Dubai.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/puppies" className="btn btn-primary">
            Explore puppies
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

