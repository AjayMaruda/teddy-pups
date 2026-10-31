"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { puppiesData, breedsList } from "@/data/puppies";
import { goneHomeData } from "@/data/goneHome";
import PuppyCard from "@/components/PuppyCard";
import TicketCard from "@/components/TicketCard";
import MascotTeddy from "@/components/MascotTeddy";
import { Sparkles, Filter } from "lucide-react";

function PuppiesContent() {
  const searchParams = useSearchParams();
  const initialBreed = searchParams.get("breed") || "all";
  const initialOrigin = searchParams.get("origin") || "all";

  const [selectedBreed, setSelectedBreed] = useState<string>(initialBreed);
  const [selectedOrigin, setSelectedOrigin] = useState<string>(initialOrigin);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPuppies = useMemo(() => {
    return puppiesData.filter((puppy) => {
      // Breed match
      if (selectedBreed !== "all") {
        const matchesBreed =
          puppy.breed.toLowerCase().includes(selectedBreed.toLowerCase()) ||
          puppy.breeds?.some(
            (b) => b.slug.toLowerCase() === selectedBreed.toLowerCase(),
          );
        if (!matchesBreed) return false;
      }

      // Origin match
      if (selectedOrigin !== "all") {
        if (puppy.origin?.slug !== selectedOrigin) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = puppy.displayName.toLowerCase().includes(q);
        const matchesBreed = puppy.breed.toLowerCase().includes(q);
        const matchesAge = puppy.age.toLowerCase().includes(q);
        if (!matchesName && !matchesBreed && !matchesAge) return false;
      }

      return true;
    });
  }, [selectedBreed, selectedOrigin, searchQuery]);

  return (
    <div className="gutter mx-auto max-w-[110rem] pb-24 pt-8 md:pt-14">
      {/* Header Scene */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-cocoa/10 pb-12">
        <div className="max-w-2xl">
          <p className="font-scrawl text-lg font-bold text-toffee-ink">
            from Teddy&apos;s sketchbook
          </p>
          <div className="relative inline-block">
            <h1 className="font-plush text-giant font-bold text-cocoa">
              Available puppies
            </h1>
            <svg
              aria-hidden="true"
              viewBox="0 0 400 24"
              preserveAspectRatio="none"
              className="mt-1 h-3 w-full text-toffee"
            >
              <path
                d="M4 15c40-9 70 5 112-2s70-9 112 0 74 8 116-1 38-4 52 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-lede mt-6 text-cocoa-soft">
            Every listing shows real photos of the actual puppy. Open a profile
            to see them all, then ask us about them on WhatsApp.
          </p>
        </div>

        {/* Mascot Self-portrait */}
        <div className="flex flex-col items-center self-center md:self-auto">
          <MascotTeddy pose="standing" facing="left" className="w-36" />
          <span className="font-scrawl mt-1 text-xs font-bold text-toffee-ink">
            self-portrait ♥
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-10 flex flex-col gap-6">
        {/* Origin Toggle Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedOrigin("all")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              selectedOrigin === "all"
                ? "bg-cocoa text-milk shadow-sm"
                : "bg-honey-soft/40 text-cocoa hover:bg-honey-soft"
            }`}
          >
            All puppies ({puppiesData.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedOrigin("local")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              selectedOrigin === "local"
                ? "bg-cocoa text-milk shadow-sm"
                : "bg-honey-soft/40 text-cocoa hover:bg-honey-soft"
            }`}
          >
            Showroom in Dubai
          </button>
          <button
            type="button"
            onClick={() => setSelectedOrigin("imported")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              selectedOrigin === "imported"
                ? "bg-cocoa text-milk shadow-sm"
                : "bg-honey-soft/40 text-cocoa hover:bg-honey-soft"
            }`}
          >
            Imported for you
          </button>
        </div>

        {/* Breed Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cocoa/50 mr-1">
            <Filter className="size-3.5" />
            <span>Breed:</span>
          </div>

          <button
            type="button"
            onClick={() => setSelectedBreed("all")}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedBreed === "all"
                ? "border-toffee bg-toffee text-milk"
                : "border-cocoa/20 bg-milk text-cocoa hover:border-toffee"
            }`}
          >
            All breeds
          </button>

          {breedsList.map((breed) => {
            const isSelected = selectedBreed === breed.slug;
            return (
              <button
                key={breed.slug}
                type="button"
                onClick={() =>
                  setSelectedBreed(isSelected ? "all" : breed.slug)
                }
                className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? "border-toffee bg-toffee text-milk"
                    : "border-cocoa/20 bg-milk text-cocoa hover:border-toffee"
                }`}
              >
                {breed.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Puppy Grid */}
      <div className="mt-12">
        {filteredPuppies.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPuppies.map((puppy, idx) => (
              <PuppyCard key={puppy.id} puppy={puppy} tiltIndex={idx} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-cocoa/15 bg-milk py-16 text-center">
            <p className="font-scrawl text-lg text-toffee-ink">no pups found</p>
            <h3 className="font-plush mt-2 text-2xl font-bold text-cocoa">
              Looking for a specific breed?
            </h3>
            <p className="mt-2 text-sm text-cocoa-soft max-w-md mx-auto">
              We frequently source rare teacup breeds upon request. Send us a
              message on WhatsApp and we will find your dream companion.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedBreed("all");
                  setSelectedOrigin("all");
                  setSearchQuery("");
                }}
                className="btn btn-ghost text-sm"
              >
                Reset filters
              </button>
              <a
                href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'm%20looking%20for%20a%20specific%20breed."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm"
              >
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Showcase: Already Gone Home */}
      <div className="mt-28 border-t border-cocoa/10 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
              <Sparkles className="size-3 text-toffee" />
              <span>Happy Departures</span>
            </div>
            <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
              Already gone home
            </h2>
            <p className="mt-2 text-cocoa-soft">
              These precious pups have already found their loving families.
            </p>
          </div>
          <Link
            href="/gone-home"
            className="btn btn-ghost shrink-0 self-start sm:self-auto text-sm font-bold text-toffee-deep hover:text-cocoa"
          >
            See all gone home ({goneHomeData.length}) →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {goneHomeData.slice(0, 4).map((puppy) => (
            <TicketCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PuppiesPage() {
  return (
    <Suspense
      fallback={
        <div className="gutter mx-auto max-w-[110rem] py-24 text-center">
          <p className="font-scrawl text-lg text-toffee-ink">
            loading puppies...
          </p>
        </div>
      }
    >
      <PuppiesContent />
    </Suspense>
  );
}
