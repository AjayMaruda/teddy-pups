import React from "react";
import Image from "next/image";
import { FamilyPolaroid } from "@/types";

interface PolaroidCardProps {
  polaroid: FamilyPolaroid;
  onClick?: () => void;
}

export default function PolaroidCard({ polaroid, onClick }: PolaroidCardProps) {
  // If src contains full URL with next/image, unwrap or proxy it
  let imgUrl = polaroid.src;
  if (imgUrl.includes("url=")) {
    const match = imgUrl.match(/url=([^&]+)/);
    if (match) {
      imgUrl = decodeURIComponent(match[1]);
    }
  }
  if (!imgUrl.startsWith("http")) {
    imgUrl = `https://puppy.instabizweb.com${imgUrl}`;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="tp-polaroid group block w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-toffee"
      style={
        {
          "--tilt": polaroid.tilt || "0deg",
          "--tape": polaroid.tape || "#f6d79a",
        } as React.CSSProperties
      }
      aria-label={polaroid.label || "A happy TeddyPups family"}
    >
      {/* Washi Tape */}
      <span aria-hidden="true" className="tp-tape tp-tape--center" />

      {/* Photo Frame */}
      <div className="tp-polaroid__photo relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={imgUrl}
          alt={polaroid.alt || "A happy family with their TeddyPups puppy"}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-2 text-center">
        <p className="font-scrawl text-xs text-cocoa-soft/75">TeddyPups family ♥</p>
      </div>
    </button>
  );
}

