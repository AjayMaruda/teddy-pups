import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Puppy } from "@/types";
import { PawIcon } from "./Header";
import { Play } from "lucide-react";

interface PuppyCardProps {
  puppy: Puppy;
  tiltIndex?: number;
}

const tilts = ["-1deg", "0.5deg", "-0.75deg", "1.2deg", "-0.4deg", "0.8deg"];
const washes = ["#f2be6b", "#fbe3b4", "#bfddf5", "#f9cdbf", "#e4a352"];

export default function PuppyCard({ puppy, tiltIndex = 0 }: PuppyCardProps) {
  const tilt = tilts[tiltIndex % tilts.length];
  const wash = washes[tiltIndex % washes.length];
  const hasVideo = puppy.media.some((m) => m.kind === "video");

  // Fix image URL: if relative /media, point to reference site CDN or local proxy
  const imageUrl = puppy.cover.url.startsWith("http")
    ? puppy.cover.url
    : `https://puppy.instabizweb.com${puppy.cover.url}`;

  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      className="tp-sketch group block select-none"
      style={{ "--tilt": tilt } as React.CSSProperties}
      aria-label={`${puppy.displayName}, ${puppy.breed}, ${puppy.genderLabel}, ${puppy.age}, ${puppy.status}`}
    >
      <div className="tp-sketch__frame relative overflow-hidden rounded-2xl bg-[#faf5ed]">
        {/* Watercolor wash background accent */}
        <div
          className="absolute -inset-4 opacity-40 blur-xl transition-opacity group-hover:opacity-75"
          style={{ backgroundColor: wash }}
        />

        {/* Video Badge */}
        {hasVideo && (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-cocoa/80 px-2.5 py-1 text-xs font-semibold text-milk backdrop-blur-sm">
            <Play className="size-3 fill-current" />
            <span>Video</span>
          </div>
        )}

        {/* Origin / Collection Badge */}
        {puppy.origin?.name && (
          <div className="absolute left-3 top-3 z-10 rounded-full bg-milk/90 px-2.5 py-1 text-xs font-bold text-toffee shadow-sm backdrop-blur-sm">
            {puppy.origin.name}
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={puppy.cover.alt || `${puppy.displayName} puppy`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            placeholder={puppy.cover.blurDataUrl ? "blur" : "empty"}
            blurDataURL={puppy.cover.blurDataUrl || undefined}
          />
        </div>
      </div>

      {/* Card Info */}
      <div className="mt-4 px-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-plush text-xl font-bold text-cocoa transition-colors group-hover:text-toffee-deep">
            {puppy.displayName}
          </h3>
          <span className="chip text-xs">
            <PawIcon className="size-2.5 text-toffee" />
            <span className="capitalize">{puppy.status}</span>
          </span>
        </div>

        <p className="mt-1 text-sm font-semibold text-cocoa-soft">
          {puppy.breed} · {puppy.genderLabel} · {puppy.age}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-cocoa/10 pt-3">
          <span className="font-scrawl text-sm text-toffee-ink">Ready to adopt</span>
          <span className="text-xs font-bold text-toffee group-hover:underline">
            View profile →
          </span>
        </div>
      </div>
    </Link>
  );
}

