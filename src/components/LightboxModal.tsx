"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  currentIndex: number;
  totalCount: number;
  src: string;
  alt?: string;
  isVideo?: boolean;
  videoUrl?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  title,
  currentIndex,
  totalCount,
  src,
  alt = "Lightbox image",
  isVideo = false,
  videoUrl,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  let displaySrc = src;
  if (displaySrc.includes("url=")) {
    const match = displaySrc.match(/url=([^&]+)/);
    if (match) displaySrc = decodeURIComponent(match[1]);
  }
  if (!displaySrc.startsWith("http")) {
    displaySrc = `https://puppy.instabizweb.com${displaySrc}`;
  }

  let finalVideoUrl = videoUrl;
  if (finalVideoUrl && !finalVideoUrl.startsWith("http")) {
    finalVideoUrl = `https://puppy.instabizweb.com${finalVideoUrl}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa/90 p-4 backdrop-blur-md">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-milk/20 text-milk backdrop-blur-sm transition-all hover:bg-milk hover:text-cocoa"
        aria-label="Close"
      >
        <X className="size-6" />
      </button>

      {/* Top Header / Counter */}
      <div className="absolute top-5 left-6 z-20 text-milk">
        {totalCount > 1 && (
          <p className="font-scrawl text-sm text-honey-soft">
            {currentIndex + 1} of {totalCount}
          </p>
        )}
        {title && <h3 className="font-plush text-lg font-bold">{title}</h3>}
      </div>

      {/* Navigation - Prev */}
      {onPrev && totalCount > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-milk/20 text-milk backdrop-blur-sm transition-all hover:bg-milk hover:text-cocoa"
          aria-label="Previous"
        >
          <ChevronLeft className="size-7" />
        </button>
      )}

      {/* Navigation - Next */}
      {onNext && totalCount > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-milk/20 text-milk backdrop-blur-sm transition-all hover:bg-milk hover:text-cocoa"
          aria-label="Next"
        >
          <ChevronRight className="size-7" />
        </button>
      )}

      {/* Main Content Area */}
      <div
        className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo && finalVideoUrl ? (
          <video
            src={finalVideoUrl}
            controls
            autoPlay
            playsInline
            className="max-h-[80vh] w-auto rounded-2xl bg-black"
          />
        ) : (
          <div className="relative h-[80vh] w-[80vw] max-w-4xl">
            <Image
              src={displaySrc}
              alt={alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}

