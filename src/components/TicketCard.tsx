import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoneHomePuppy } from "@/types";

interface TicketCardProps {
  puppy: GoneHomePuppy;
}

export default function TicketCard({ puppy }: TicketCardProps) {
  let imgUrl = puppy.coverUrl;
  if (!imgUrl.startsWith("http")) {
    imgUrl = `https://puppy.instabizweb.com${imgUrl}`;
  }

  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      className="group relative block overflow-hidden rounded-2xl border-2 border-cocoa bg-milk p-4 shadow-[4px_4px_0px_#2a170e] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#2a170e]"
    >
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-cocoa/30 pb-2 text-xs font-bold uppercase tracking-wider text-toffee">
        <span className="font-scrawl text-sm lowercase text-cocoa-soft">one ticket home</span>
        <span className="rounded bg-honey px-1.5 py-0.5 text-[10px] text-cocoa">Admit One</span>
      </div>

      {/* Main Ticket Body */}
      <div className="mt-3 flex gap-4">
        {/* Photo with vintage rounded border */}
        <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border border-cocoa/20 bg-[#faf5ed]">
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={puppy.name}
              fill
              sizes="80px"
              className="object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-xs font-bold text-toffee">
              Puppy
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-plush text-lg font-bold text-cocoa group-hover:text-toffee-deep">
              {puppy.name}
            </h3>
            <p className="text-xs font-medium text-cocoa-soft">
              {puppy.breed} · {puppy.genderLabel}
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="font-scrawl font-bold text-toffee-ink">
              {puppy.location}
            </span>
            <span className="text-[11px] font-semibold text-cocoa/60">
              Joined family ♥
            </span>
          </div>
        </div>
      </div>

      {/* Barcode graphic footer */}
      <div className="mt-3 border-t border-dashed border-cocoa/20 pt-2 flex items-center justify-between text-[10px] text-cocoa/40">
        <div className="flex h-5 items-end gap-[2px]">
          <span className="h-4 w-[2px] bg-cocoa/40" />
          <span className="h-5 w-[1px] bg-cocoa/40" />
          <span className="h-3 w-[3px] bg-cocoa/40" />
          <span className="h-5 w-[1px] bg-cocoa/40" />
          <span className="h-4 w-[2px] bg-cocoa/40" />
          <span className="h-5 w-[2px] bg-cocoa/40" />
          <span className="h-3 w-[1px] bg-cocoa/40" />
          <span className="h-5 w-[3px] bg-cocoa/40" />
          <span className="h-4 w-[1px] bg-cocoa/40" />
          <span className="h-5 w-[2px] bg-cocoa/40" />
        </div>
        <span className="font-mono">TP-{puppy.slug.slice(0, 8).toUpperCase()}</span>
      </div>
    </Link>
  );
}

