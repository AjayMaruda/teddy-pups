"use client";

import React, { useState } from "react";
import Link from "next/link";
import { puppiesData, breedsList } from "@/data/puppies";
import { faqsData } from "@/data/faq";
import { familiesData } from "@/data/families";
import PuppyCard from "@/components/PuppyCard";
import PolaroidCard from "@/components/PolaroidCard";
import MascotTeddy from "@/components/MascotTeddy";
import HeroLineup from "@/components/HeroLineup";
import LightboxModal from "@/components/LightboxModal";
import { PawIcon, WhatsAppIcon } from "@/components/Header";
import { Check, ShieldCheck, Plane, Award, HeartHandshake, ChevronDown, Sparkles } from "lucide-react";

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedPolaroidIndex, setSelectedPolaroidIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const previewPuppies = puppiesData.slice(0, 6);
  const previewFamilies = familiesData.slice(0, 8);

  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1: HERO SCENE */}
      <section
        id="hero-title"
        data-pup-scene="true"
        data-tone="light"
        className="tp-hero relative overflow-hidden flex flex-col justify-between"
        style={{
          "--sky-top": "#fffdf8",
          "--sky-bottom": "#fff1d8",
          "--quilt": "#fff1d8",
        } as React.CSSProperties}
        aria-labelledby="hero-title"
      >
        <span aria-hidden="true" className="tp-hero__sun pointer-events-none" />

        <div className="tp-hero__copy gutter mx-auto max-w-[110rem] flex flex-col items-center text-center pt-8 sm:pt-12 md:pt-16 z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-toffee/20 bg-honey-soft/40 px-3 py-1.5 shadow-sm sm:px-4">
            <PawIcon className="size-3 text-toffee" />
            <span className="font-scrawl text-xs font-bold text-toffee-ink sm:text-sm relative">
              every puppy is family
              <svg viewBox="0 0 220 24" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-2.5 w-full text-toffee" aria-hidden="true">
                <path d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <h1 className="font-plush text-giant mt-5 max-w-4xl font-bold tracking-tight text-cocoa sm:mt-6">
            <span className="block">Premium teacup</span>
            <span className="block text-toffee-deep">puppies in Dubai</span>
          </h1>

          <p className="text-lede mt-4 max-w-2xl text-cocoa-soft sm:mt-6">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders in Korea &amp; Europe.
          </p>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/puppies" className="btn btn-primary w-full text-sm sm:w-auto sm:text-base">
              View available puppies
            </Link>
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full text-sm sm:w-auto sm:text-base"
            >
              <WhatsAppIcon className="size-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Hero Lineup Stage: Arched Puppy Windows, Mascot Centerpiece, and Scalloped Quilt */}
        <HeroLineup />
      </section>

      {/* SECTION 2: MEET THE PUPS */}
      <section id="meet-title" className="tp-meet gutter mx-auto max-w-[110rem] py-20 border-t border-cocoa/10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-scrawl text-sm font-bold text-toffee-ink">Teddy&apos;s favorites</p>
            <h2 className="font-plush text-big mt-1 font-bold text-cocoa">Meet the pups</h2>
            <p className="mt-2 text-cocoa-soft">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>
          <Link
            href="/puppies"
            className="btn btn-ghost shrink-0 self-start sm:self-auto text-sm font-bold text-toffee-deep hover:text-cocoa"
          >
            See all available puppies ({puppiesData.length}) →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewPuppies.map((puppy, idx) => (
            <PuppyCard key={puppy.id} puppy={puppy} tiltIndex={idx} />
          ))}
        </div>
      </section>

      {/* SECTION 3: TWO WAYS TO MEET YOUR PUPPY */}
      <section id="paths-title" className="tp-paths gutter mx-auto max-w-[110rem] py-20">
        <div className="text-center">
          <p className="font-scrawl text-sm font-bold text-toffee-ink">choose your path</p>
          <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
            Two ways to meet your puppy
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Path 1: Local */}
          <div className="tp-board relative flex flex-col justify-between overflow-hidden p-6 sm:p-10">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-honey-soft/30 blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
                <span>In Downtown Dubai</span>
              </div>
              <h3 className="font-plush mt-4 text-2xl font-bold text-cocoa sm:text-3xl">
                Puppies in Dubai
              </h3>
              <p className="mt-3 text-base leading-relaxed text-cocoa-soft">
                In our showroom: See them, love them, take them home. Come meet our locally available puppies before you decide, bond with them face-to-face, and take your puppy home the very same day.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm font-semibold text-cocoa">
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-toffee shrink-0" />
                  <span>Available immediately for same-day adoption</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-toffee shrink-0" />
                  <span>Meet &amp; cuddle in our Downtown Dubai showroom</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-toffee shrink-0" />
                  <span>Complete veterinary health check &amp; microchip</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-cocoa/10">
              <Link href="/puppies?origin=local" className="btn btn-primary w-full sm:w-auto">
                Meet local puppies
              </Link>
            </div>
          </div>

          {/* Path 2: Imported */}
          <div className="tp-board relative flex flex-col justify-between overflow-hidden p-6 sm:p-10 bg-[#fffdfb]">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-sky/30 blur-2xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky/40 px-3 py-1 text-xs font-bold text-sky-deep">
                <span>Korea · Europe → Dubai</span>
              </div>
              <h3 className="font-plush mt-4 text-2xl font-bold text-cocoa sm:text-3xl">
                Imported for you
              </h3>
              <p className="mt-3 text-base leading-relaxed text-cocoa-soft">
                Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable breeders upon request. We handle every step: pre-travel veterinary checks, certified flight transport, and safe delivery right to your door.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm font-semibold text-cocoa">
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-toffee shrink-0" />
                  <span>Sourced from certified ethical Korean &amp; European breeders</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-toffee shrink-0" />
                  <span>Live video calls &amp; detailed health reports before travel</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-toffee shrink-0" />
                  <span>Stress-free international flight &amp; white-glove arrival</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-cocoa/10">
              <Link href="/puppies?origin=imported" className="btn btn-primary w-full sm:w-auto">
                See imported puppies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: YOUR PUPPY JOURNEY */}
      <section id="journey-title" className="tp-chat gutter mx-auto max-w-[110rem] py-20 bg-honey-soft/20 rounded-3xl border border-cocoa/10 my-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-scrawl text-sm font-bold text-toffee-ink">smooth &amp; transparent</p>
          <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
            Your puppy journey
          </h2>
          <p className="text-lede mt-4 text-cocoa-soft">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="tp-paper bg-milk flex flex-col justify-between">
            <div>
              <span className="tp-trail__num">1</span>
              <h3 className="font-plush text-xl font-bold text-cocoa">Choose your breed</h3>
              <p className="mt-3 text-sm text-cocoa-soft leading-relaxed">
                Select your preferred breed or tell us what you&apos;re looking for. We&apos;ll guide you based on personality, lifestyle, and home setting.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-cocoa/10">
              {breedsList.slice(0, 4).map((b) => (
                <Link
                  key={b.slug}
                  href={`/puppies?breed=${b.slug}`}
                  className="rounded-full bg-honey-soft/60 px-3 py-1 text-xs font-semibold text-cocoa hover:bg-honey hover:text-cocoa transition-colors"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="tp-paper bg-milk flex flex-col justify-between">
            <div>
              <span className="tp-trail__num">2</span>
              <h3 className="font-plush text-xl font-bold text-cocoa">Get photos &amp; details</h3>
              <p className="mt-3 text-sm text-cocoa-soft leading-relaxed">
                Our team shares unedited photos, videos, and full veterinary health records directly with you on WhatsApp so you know every charming detail.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cocoa/10">
              <span className="font-scrawl text-sm text-toffee-ink">100% full transparency</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="tp-paper bg-milk flex flex-col justify-between">
            <div>
              <span className="tp-trail__num">3</span>
              <h3 className="font-plush text-xl font-bold text-cocoa">Secure &amp; safe delivery</h3>
              <p className="mt-3 text-sm text-cocoa-soft leading-relaxed">
                Pick up in our Downtown Dubai showroom or enjoy safe, climate-controlled door-to-door delivery across Dubai and internationally.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cocoa/10">
              <Link href="/how-it-works" className="text-xs font-bold text-toffee hover:underline">
                Explore full process →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY FAMILIES TRUST TEDDYPUPS */}
      <section id="trust-title" className="tp-passport gutter mx-auto max-w-[110rem] py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
            <Sparkles className="size-3 text-toffee" />
            <span>The TeddyPups Guarantee</span>
          </div>
          <h2 className="font-plush text-big mt-3 font-bold text-cocoa">
            Why families trust TeddyPups
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="tp-paper text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-honey-soft text-toffee-deep">
              <ShieldCheck className="size-7" />
            </div>
            <h3 className="font-plush mt-5 text-lg font-bold text-cocoa">Vet-checked &amp; healthy</h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              Every puppy comes vaccinated, dewormed, microchipped, and accompanied by a certified health certificate from licensed vets.
            </p>
          </div>

          <div className="tp-paper text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-sky/50 text-sky-deep">
              <Plane className="size-7" />
            </div>
            <h3 className="font-plush mt-5 text-lg font-bold text-cocoa">Korea to Dubai, safely</h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              Partnered with world-renowned miniature breeders with dedicated pet-first international flight handling.
            </p>
          </div>

          <div className="tp-paper text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-honey-soft text-toffee-deep">
              <Award className="size-7" />
            </div>
            <h3 className="font-plush mt-5 text-lg font-bold text-cocoa">100% Purebred Teacup</h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              Exclusively authentic, ethically raised teacup &amp; teddy bear puppies with verified lineage and records.
            </p>
          </div>

          <div className="tp-paper text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blush/60 text-toffee-deep">
              <HeartHandshake className="size-7" />
            </div>
            <h3 className="font-plush mt-5 text-lg font-bold text-cocoa">24/7 Puppy Parent Care</h3>
            <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
              From nutrition schedules to bedtime routines, our concierge team is always just a WhatsApp message away.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: HAPPY FAMILIES PREVIEW */}
      <section id="dusk-title" className="tp-dusk gutter mx-auto max-w-[110rem] py-20 border-t border-cocoa/10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-scrawl text-sm font-bold text-toffee-ink">real stories</p>
            <h2 className="font-plush text-big mt-1 font-bold text-cocoa">
              Happy families &amp; puppies
            </h2>
            <p className="mt-2 text-cocoa-soft max-w-xl">
              We are truly honored to see our puppies become cherished members of loving families across Dubai and the world.
            </p>
          </div>
          <Link
            href="/happy-families"
            className="btn btn-ghost shrink-0 self-start sm:self-auto text-sm font-bold text-toffee-deep hover:text-cocoa"
          >
            See every happy family ({familiesData.length}) →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {previewFamilies.map((pol, idx) => (
            <PolaroidCard
              key={pol.id}
              polaroid={pol}
              onClick={() => setSelectedPolaroidIndex(idx)}
            />
          ))}
        </div>
      </section>

      {/* SECTION 7: QUESTIONS ANSWERED (FAQ PREVIEW) */}
      <section id="questions-title" className="tp-night gutter mx-auto max-w-4xl py-14 sm:py-20 border-t border-cocoa/10">
        <div className="text-center">
          <p className="font-scrawl text-sm font-bold text-toffee-ink">clear answers</p>
          <h2 className="font-plush text-big mt-2 font-bold text-cocoa">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqsData.slice(0, 5).map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.name}
                className="overflow-hidden rounded-2xl border border-cocoa/15 bg-milk transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left font-plush text-base sm:text-lg font-bold text-cocoa hover:text-toffee-deep"
                >
                  <span>{faq.name}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-toffee transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-cocoa/10 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 text-cocoa-soft leading-relaxed text-sm sm:text-[0.95rem]">
                    {faq.acceptedAnswer.text}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/faq" className="btn btn-ghost text-sm font-bold text-toffee-deep hover:text-cocoa">
            Read all {faqsData.length} questions &amp; answers →
          </Link>
        </div>
      </section>

      {/* SECTION 8: CTA BANNER */}
      <section id="cta-title" className="tp-home gutter mx-auto max-w-[110rem] pb-20 sm:pb-24 pt-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-3xl border-2 border-cocoa bg-[#fffdf8] p-6 sm:p-14 md:p-16 text-center shadow-[6px_6px_0px_#2a170e]">
          <div className="absolute -left-16 -top-16 size-48 rounded-full bg-honey-soft/50 blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 size-48 rounded-full bg-blush/40 blur-3xl pointer-events-none" />

          <p className="font-scrawl text-lg font-bold text-toffee-ink">your journey begins here</p>
          <h2 className="font-plush text-giant mt-3 font-bold text-cocoa">
            Ready to meet your new best friend?
          </h2>
          <p className="text-lede mt-4 max-w-2xl mx-auto text-cocoa-soft">
            Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We can&apos;t wait to welcome you into the TeddyPups family.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-base"
            >
              <WhatsAppIcon className="size-4" />
              <span>Enquire on WhatsApp</span>
            </a>
            <Link href="/contact" className="btn btn-primary text-base">
              Visit &amp; contact
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox for polaroids */}
      {selectedPolaroidIndex !== null && (
        <LightboxModal
          isOpen={selectedPolaroidIndex !== null}
          onClose={() => setSelectedPolaroidIndex(null)}
          title="TeddyPups Family"
          currentIndex={selectedPolaroidIndex}
          totalCount={previewFamilies.length}
          src={previewFamilies[selectedPolaroidIndex].src}
          alt={previewFamilies[selectedPolaroidIndex].alt}
          onPrev={() =>
            setSelectedPolaroidIndex(
              (selectedPolaroidIndex - 1 + previewFamilies.length) % previewFamilies.length
            )
          }
          onNext={() =>
            setSelectedPolaroidIndex((selectedPolaroidIndex + 1) % previewFamilies.length)
          }
        />
      )}
    </div>
  );
}
