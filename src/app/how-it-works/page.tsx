"use client";

import React, { useState } from "react";
import Link from "next/link";
import MascotTeddy from "@/components/MascotTeddy";
import {
  Check,
  ShieldCheck,
  HeartHandshake,
  Plane,
  Truck,
  Clock,
  Sparkles,
} from "lucide-react";

export default function HowItWorksPage() {
  const [activeWay, setActiveWay] = useState<"local" | "imported">("local");

  return (
    <div className="gutter mx-auto max-w-[110rem] pb-24 pt-8 md:pt-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-cocoa/10 pb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
            <Sparkles className="size-3 text-toffee" />
            <span>Adoption Made Simple</span>
          </div>
          <h1 className="font-plush text-giant mt-3 font-bold text-cocoa">
            How it works
          </h1>
          <p className="text-lede mt-4 text-cocoa-soft">
            Meet a local puppy in our Downtown Dubai showroom or reserve a
            premium teacup breed imported for you — every step, from choosing to
            coming home.
          </p>
        </div>

        {/* Mascot */}
        <div className="flex flex-col items-center self-center md:self-auto">
          <MascotTeddy pose="standing" className="w-36" />
          <span className="font-scrawl mt-1 text-xs font-bold text-toffee-ink">
            step by step ♥
          </span>
        </div>
      </div>

      {/* TWO WAYS HOME: DUAL INTERACTIVE TABS */}
      <section className="mt-16">
        <div className="text-center">
          <p className="font-scrawl text-sm font-bold text-toffee-ink">
            choose your path
          </p>
          <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
            Two ways home
          </h2>
          <p className="mt-2 text-cocoa-soft max-w-xl mx-auto">
            Whether you choose to visit us locally or order a premium breed from
            overseas, TeddyPups is here to make the experience unforgettable.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-10 flex justify-center px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-lg rounded-2xl sm:rounded-full border-2 border-cocoa bg-milk p-1.5 shadow-[4px_4px_0px_#2a170e] gap-1">
            <button
              type="button"
              onClick={() => setActiveWay("local")}
              className={`rounded-xl sm:rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-all text-center ${
                activeWay === "local"
                  ? "bg-toffee text-milk shadow-sm"
                  : "text-cocoa hover:text-toffee-deep"
              }`}
            >
              In Dubai — meet in person
            </button>
            <button
              type="button"
              onClick={() => setActiveWay("imported")}
              className={`rounded-xl sm:rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-all text-center ${
                activeWay === "imported"
                  ? "bg-toffee text-milk shadow-sm"
                  : "text-cocoa hover:text-toffee-deep"
              }`}
            >
              Imported — order upon request
            </button>
          </div>
        </div>

        {/* Tab 1 Content: Local Showroom */}
        {activeWay === "local" && (
          <div className="mt-12 animate-fadeIn">
            <div className="tp-board p-8 sm:p-12">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
                  <span>Downtown Dubai Showroom</span>
                </div>
                <h3 className="font-plush mt-4 text-3xl font-bold text-cocoa">
                  Meet your puppy in person
                </h3>
                <p className="mt-3 text-base text-cocoa-soft leading-relaxed">
                  Step into our Downtown Dubai showroom and experience the joy
                  of choosing your puppy face-to-face. We source healthy,
                  well-socialized puppies from trusted local breeders, ensuring
                  they&apos;re raised with care, proper nutrition, and
                  veterinary checks.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">1</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Explore our puppies
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    Browse our website to view available puppies. Each listing
                    includes authentic photos, breed details, age, and health
                    history.
                  </p>
                </div>
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">2</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Choose your puppy
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    Once you find a puppy you love, open their profile to
                    enquire on WhatsApp or arrange a personal viewing.
                  </p>
                </div>
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">3</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Meet before you choose
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    Spend time cuddling and bonding in our comfortable Downtown
                    Dubai showroom before making your decision.
                  </p>
                </div>
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">4</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Pick-up or delivery
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    Take your puppy home the same day, or enjoy
                    climate-controlled door-to-door delivery anywhere in Dubai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2 Content: Imported Upon Request */}
        {activeWay === "imported" && (
          <div className="mt-12 animate-fadeIn">
            <div className="tp-board p-8 sm:p-12 bg-[#fffdfb]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky/40 px-3 py-1 text-xs font-bold text-sky-deep">
                  <span>Korea · Europe → Dubai</span>
                </div>
                <h3 className="font-plush mt-4 text-3xl font-bold text-cocoa">
                  Order upon request
                </h3>
                <p className="mt-3 text-base text-cocoa-soft leading-relaxed">
                  Looking for a truly exceptional companion? Our Order Upon
                  Request service gives you access to some of the world&apos;s
                  most sought-after teacup breeds — ethically sourced from the
                  most reputable, certified breeders across Europe, Korea, and
                  beyond.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">1</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Reserve your puppy
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    Browse our selection of available breeds and place a
                    reservation for the teacup puppy that captures your heart.
                  </p>
                </div>
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">2</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Personalized consultation
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    Once your reservation is confirmed, we share updates,
                    unedited videos, and veterinary health records.
                  </p>
                </div>
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">3</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Import &amp; arrival
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    We manage all health checks, pet travel arrangements, flight
                    cargo clearance, and regulatory paperwork.
                  </p>
                </div>
                <div className="tp-paper bg-milk">
                  <span className="tp-trail__num">4</span>
                  <h4 className="font-plush text-lg font-bold text-cocoa">
                    Welcome home
                  </h4>
                  <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                    Upon arrival, we provide full support and guidance to help
                    your new puppy acclimate to their new home smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* OUR PREMIUM PUPPY PROMISE */}
      <section className="mt-28 border-t border-cocoa/10 pt-16">
        <div className="text-center">
          <p className="font-scrawl text-sm font-bold text-toffee-ink">
            our commitment
          </p>
          <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
            Our premium puppy promise
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="tp-paper text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-honey-soft text-toffee-deep">
              <ShieldCheck className="size-7" />
            </div>
            <h3 className="font-plush mt-5 text-xl font-bold text-cocoa">
              Hand-selected breeders
            </h3>
            <p className="mt-3 text-sm text-cocoa-soft leading-relaxed">
              We work only with certified, ethical breeders who uphold the
              highest veterinary and welfare standards.
            </p>
          </div>

          <div className="tp-paper text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-sky/40 text-sky-deep">
              <Check className="size-7" />
            </div>
            <h3 className="font-plush mt-5 text-xl font-bold text-cocoa">
              Full transparency
            </h3>
            <p className="mt-3 text-sm text-cocoa-soft leading-relaxed">
              Photos, videos, and official health certificates are shared
              thoroughly before your puppy travels.
            </p>
          </div>

          <div className="tp-paper text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blush/60 text-toffee-deep">
              <HeartHandshake className="size-7" />
            </div>
            <h3 className="font-plush mt-5 text-xl font-bold text-cocoa">
              Safe, stress-free delivery
            </h3>
            <p className="mt-3 text-sm text-cocoa-soft leading-relaxed">
              We handle every detail of the travel process, so your puppy
              arrives happy, healthy, and ready to love you.
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERY & COLLECTION */}
      <section
        id="delivery"
        className="mt-28 border-t border-cocoa/10 pt-16 scroll-mt-24"
      >
        <div className="text-center">
          <p className="font-scrawl text-sm font-bold text-toffee-ink">
            safe journeys
          </p>
          <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
            Delivery &amp; collection
          </h2>
          <p className="mt-2 text-cocoa-soft max-w-xl mx-auto">
            From a same-day visit in Downtown Dubai to a flight from Korea,
            every puppy travels comfortably and arrives safely.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="tp-board p-6">
            <h3 className="font-plush text-lg font-bold text-cocoa">
              Same-day collection
            </h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              Local puppies in our Dubai showroom are available immediately —
              visit, fall in love, and go home together.
            </p>
          </div>
          <div className="tp-board p-6">
            <h3 className="font-plush text-lg font-bold text-cocoa">
              Delivery in Dubai
            </h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              Prefer to stay home? We deliver your puppy to your door across
              Dubai safely and comfortably in a dedicated vehicle.
            </p>
          </div>
          <div className="tp-board p-6">
            <h3 className="font-plush text-lg font-bold text-cocoa">
              Safe international cargo
            </h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              We handle all travel paperwork, pet flights, and health clearance
              so your puppy arrives stress-free.
            </p>
          </div>
          <div className="tp-board p-6">
            <h3 className="font-plush text-lg font-bold text-cocoa">
              Worldwide delivery
            </h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              We safely deliver puppies to loving homes all around the world via
              trusted international airline cargo partners.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-28 border-t border-cocoa/10 pt-16">
        <div className="tp-board p-8 sm:p-14 bg-honey-soft/20">
          <div className="max-w-2xl">
            <p className="font-scrawl text-sm font-bold text-toffee-ink">
              the teddypups difference
            </p>
            <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
              Why choose us
            </h2>
            <p className="mt-3 text-base text-cocoa-soft leading-relaxed">
              We&apos;re here to help you find a new family member. From the
              moment you visit our site to the joyful day your puppy arrives at
              your door, we&apos;re with you every step of the way. Our mission
              is to make the entire adoption process smooth, transparent, and
              full of love.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-cocoa/15 bg-milk p-6">
              <Plane className="size-6 text-toffee" />
              <h3 className="font-plush mt-3 text-lg font-bold text-cocoa">
                International cargo
              </h3>
              <p className="mt-1 text-xs text-cocoa-soft leading-relaxed">
                Trusted cargo partners ensuring your furry friend travels
                comfortably and arrives safely.
              </p>
            </div>
            <div className="rounded-2xl border border-cocoa/15 bg-milk p-6">
              <Clock className="size-6 text-toffee" />
              <h3 className="font-plush mt-3 text-lg font-bold text-cocoa">
                Support 24/7
              </h3>
              <p className="mt-1 text-xs text-cocoa-soft leading-relaxed">
                Available around the clock to answer your questions through
                every step of adoption.
              </p>
            </div>
            <div className="rounded-2xl border border-cocoa/15 bg-milk p-6">
              <ShieldCheck className="size-6 text-toffee" />
              <h3 className="font-plush mt-3 text-lg font-bold text-cocoa">
                Health guarantee
              </h3>
              <p className="mt-1 text-xs text-cocoa-soft leading-relaxed">
                Certified health certificates, vaccinations, deworming, and
                thorough vet checks.
              </p>
            </div>
            <div className="rounded-2xl border border-cocoa/15 bg-milk p-6">
              <Sparkles className="size-6 text-toffee" />
              <h3 className="font-plush mt-3 text-lg font-bold text-cocoa">
                High quality puppies
              </h3>
              <p className="mt-1 text-xs text-cocoa-soft leading-relaxed">
                Guidance on training, nutrition, and care for a seamless
                transition into your home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
