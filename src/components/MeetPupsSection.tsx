"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Puppy } from "@/types";
import MascotTeddy from "./MascotTeddy";

interface MeetPupsSectionProps {
  puppies: Puppy[];
}

const DOOR_COLORS = ["#a24a1a", "#5a3a28", "#d4893f", "#b8644a", "#7a4a2e"];

export default function MeetPupsSection({ puppies }: MeetPupsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [pinHeight, setPinHeight] = useState<number | null>(null);
  const [maxScrollDist, setMaxScrollDist] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Measure and calculate exact scroll distance so the page stays pinned until the carousel finishes
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const trackW = trackRef.current.scrollWidth;
    const viewportW = window.innerWidth;
    const windowH = window.innerHeight;

    // Full distance to bring the very last door (See all available) fully into comfortable view
    const maxScroll = Math.max(0, trackW - viewportW * 0.7);
    setMaxScrollDist(maxScroll);

    // Pin container height equals the horizontal travel distance plus 100vh of viewport:
    // This guarantees the screen stays pinned at top: 0 until the entire carousel has finished!
    const totalHeight = maxScroll + windowH;
    setPinHeight(totalHeight);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, puppies.length]);

  // Synchronize vertical scroll with horizontal carousel translation
  useEffect(() => {
    let animId: number;

    const onScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScrollable = containerRef.current.offsetHeight - windowH;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      // Progress clamped strictly between 0 and 1:
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const trackW = trackRef.current.scrollWidth;
      const viewportW = window.innerWidth;
      const maxScroll = Math.max(0, trackW - viewportW * 0.7);

      animId = requestAnimationFrame(() => {
        setScrollProgress(progress);
        setScrollX(progress * maxScroll);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="meet-title"
      data-pup-scene="true"
      data-tone="light"
      data-pinned="true"
      className="tp-scene tp-meet relative"
      style={
        {
          "--sky-top": "#fff1d8",
          "--sky-bottom": "#fbe3b4",
          "--floor-x": `-${scrollX}px`,
        } as React.CSSProperties
      }
      aria-labelledby="meet-title"
    >
      {/* Scroll Pin Range Container: tall enough so screen stays completely pinned until carousel finishes */}
      <div
        ref={containerRef}
        className="tp-meet__pin-range relative w-full"
        style={{
          height: pinHeight ? `${pinHeight}px` : "380vh",
        }}
      >
        {/* Sticky 100vh stage pinned at top: 0 */}
        <div className="tp-meet__stage sticky top-0 h-screen overflow-hidden flex flex-col justify-between z-20">
          {/* Header */}
          <header className="tp-meet__head gutter mx-auto w-full max-w-[110rem] flex flex-wrap justify-between items-end gap-4 z-10 pt-4 sm:pt-6">
            <div>
              <h2
                id="meet-title"
                className="font-plush text-big sm:text-huge font-bold text-cocoa"
              >
                Meet the pups
              </h2>
              <p className="text-lede mt-2 sm:mt-3 max-w-[44ch] text-cocoa-soft">
                Real puppies, real photos, looking for their families right now.
              </p>
            </div>
            <Link
              href="/puppies"
              className="btn btn-primary shrink-0 text-sm sm:text-base"
            >
              Meet them all
            </Link>
          </header>

          {/* Hallway & Carousel Track */}
          <div className="tp-meet__hall relative flex-1 w-full overflow-hidden">
            {/* Horizontal Track of Puppy Doors */}
            <ol
              ref={trackRef}
              className="tp-meet__track select-none flex items-end gap-8 sm:gap-14 md:gap-20 absolute bottom-[var(--floor-h)]"
              style={{
                transform: `translateX(-${scrollX}px)`,
                transition: "transform 0.08s ease-out",
              }}
              aria-label="Puppies looking for a family"
            >
              {puppies.map((puppy, i) => {
                const color = DOOR_COLORS[i % DOOR_COLORS.length];
                const hasVideo = puppy.media.some((m) => m.kind === "video");

                // Door metadata string (e.g. "Maltipoo, boy, 3 months, with video")
                const metaParts: string[] = [];
                if (puppy.name !== puppy.breed) {
                  metaParts.push(puppy.breed);
                }
                if (puppy.genderLabel) {
                  metaParts.push(puppy.genderLabel.toLowerCase());
                }
                if (puppy.age) {
                  metaParts.push(puppy.age);
                }
                if (hasVideo) {
                  metaParts.push("with video");
                }
                const metaString = metaParts.join(", ");

                // Doors 0, 1, 2 start open (matching reference screenshot); subsequent doors open as scrolled past or hovered
                const isDoorOpen =
                  hoveredIdx === i ||
                  i < 3 ||
                  scrollProgress >= (i - 1.2) / puppies.length;

                const imageUrl = puppy.cover.url.startsWith("http")
                  ? puppy.cover.url
                  : `https://puppy.instabizweb.com${puppy.cover.url}`;

                return (
                  <li
                    key={puppy.id}
                    className="tp-door"
                    data-open={isDoorOpen ? "true" : "false"}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <Link
                      className="tp-door__link group"
                      style={{ "--door": color } as React.CSSProperties}
                      href={`/puppies/${puppy.slug}`}
                    >
                      {/* Door Header Plate */}
                      <span className="tp-door__plate">
                        <span className="font-plush tp-door__name">
                          {puppy.displayName}
                        </span>
                        <span className="tp-door__meta">{metaString}</span>
                      </span>

                      {/* Arched Door Frame */}
                      <span className="tp-door__frame">
                        {/* Puppy Room (Photo Inside) */}
                        <span className="tp-door__room">
                          <Image
                            alt={
                              puppy.cover.alt || `${puppy.displayName} puppy`
                            }
                            src={imageUrl}
                            fill
                            sizes="(min-width: 1024px) 16rem, 44vw"
                            style={{
                              objectFit: "cover",
                              objectPosition: `${(puppy.cover.focalX || 0.5) * 100}% ${(puppy.cover.focalY || 0.44) * 100}%`,
                            }}
                          />
                        </span>

                        {/* 3D Hinged Door Leaf */}
                        <span aria-hidden="true" className="tp-door__way">
                          <span className="tp-door__leaf">
                            {/* Paw-Print Peephole Cutout */}
                            <svg
                              viewBox="0 0 64 64"
                              className="tp-door__peephole"
                              aria-hidden="true"
                              fill="currentColor"
                            >
                              <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                            </svg>
                            {/* Brass Doorknob */}
                            <span className="tp-door__knob" />
                          </span>
                        </span>

                        {/* "Available" Tag Badge */}
                        <span className="tp-door__tag font-scrawl">
                          Available
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Final Door: See All Puppies */}
              <li className="tp-door tp-door--all">
                <Link href="/puppies" className="tp-door__link group block">
                  <span className="tp-door__plate">
                    <span className="tp-door__name">&nbsp;</span>
                    <span className="tp-door__meta">&nbsp;</span>
                  </span>
                  <span className="tp-door__frame tp-door__frame--all hover:bg-milk/70 transition-colors">
                    <span className="font-plush font-extrabold text-[25px] underline underline-offset-2 text-center leading-tight block">
                      <span className="block">Meet</span>
                      <span className="block">them all</span>
                    </span>
                  </span>
                </Link>
              </li>
            </ol>

            {/* Wooden Plank Floor Running Across the Bottom */}
            <div aria-hidden="true" className="tp-meet__floor" />

            {/* Mascot Teddy Sitting / Standing in front */}
            <div className="tp-meet__teddy pointer-events-none select-none">
              <MascotTeddy
                pose="standing"
                facing="right"
                className="w-28 sm:w-36 md:w-44"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
