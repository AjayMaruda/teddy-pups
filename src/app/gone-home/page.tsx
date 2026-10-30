import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { goneHomeData } from "@/data/goneHome";
import TicketCard from "@/components/TicketCard";
import MascotTeddy from "@/components/MascotTeddy";
import { Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Gone home | TeddyPups U.A.E.",
  description: "TeddyPups puppies who have already joined their loving families.",
};

export default function GoneHomePage() {
  return (
    <div className="gutter mx-auto max-w-[110rem] pb-24 pt-8 md:pt-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-cocoa/10 pb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
            <Heart className="size-3 text-toffee fill-current" />
            <span>Forever Homes Found</span>
          </div>
          <h1 className="font-plush text-giant mt-3 font-bold text-cocoa">
            Gone home
          </h1>
          <p className="text-lede mt-4 text-cocoa-soft">
            TeddyPups puppies who have already joined their families. Each ticket represents a joyful new beginning and a lifetime of love.
          </p>
        </div>

        {/* Mascot */}
        <div className="flex flex-col items-center self-center md:self-auto">
          <MascotTeddy pose="standing" className="w-36" />
          <span className="font-scrawl mt-1 text-xs font-bold text-toffee-ink">
            all settled in ♥
          </span>
        </div>
      </div>

      {/* Grid of Boarding Passes */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {goneHomeData.map((puppy) => (
          <TicketCard key={puppy.id} puppy={puppy} />
        ))}
      </div>

      {/* Bottom CTA to find available pups */}
      <div className="mt-24 rounded-3xl border-2 border-cocoa bg-[#fffdf8] p-8 sm:p-12 text-center shadow-[6px_6px_0px_#2a170e]">
        <p className="font-scrawl text-lg font-bold text-toffee-ink">ready for your turn?</p>
        <h2 className="font-plush text-3xl font-bold text-cocoa sm:text-4xl mt-2">
          Your puppy is waiting for you
        </h2>
        <p className="mt-3 text-cocoa-soft max-w-xl mx-auto text-base">
          Explore our currently available puppies in Dubai or order an imported teacup breed tailored to your preferences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/puppies" className="btn btn-primary">
            View available puppies
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact our team
          </Link>
        </div>
      </div>
    </div>
  );
}

