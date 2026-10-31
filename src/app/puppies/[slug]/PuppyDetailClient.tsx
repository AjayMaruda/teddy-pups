"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Puppy } from "@/types";
import MascotTeddy from "@/components/MascotTeddy";
import LightboxModal from "@/components/LightboxModal";
import LetterForm from "@/components/LetterForm";
import { PawIcon, WhatsAppIcon } from "@/components/Header";
import { Play, Check, ShieldCheck, Heart, Share2, Sparkles } from "lucide-react";

interface PuppyDetailClientProps {
  puppy: Puppy;
}

export default function PuppyDetailClient({ puppy }: PuppyDetailClientProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const mediaItems = puppy.media && puppy.media.length > 0 ? puppy.media : [puppy.cover];
  const activeMedia = mediaItems[activeMediaIndex] || mediaItems[0];
  const isVideo = activeMedia.kind === "video";

  const getMediaUrl = (url: string) =>
    url.startsWith("http") ? url : `https://puppy.instabizweb.com${url}`;

  const currentMediaUrl = getMediaUrl(activeMedia.url);

  const whatsappMessage = encodeURIComponent(
    `Hi TeddyPups! I'm interested in ${puppy.displayName}, the ${puppy.breed}: https://puppy.instabizweb.com/puppies/${puppy.slug}`
  );
  const whatsappUrl = `https://wa.me/971541676733?text=${whatsappMessage}`;

  const isImported = puppy.origin?.slug === "imported";

  return (
    <div className="mt-6">
      {/* CHAPTER 1: HELLO, IT'S ME */}
      <div className="flex items-center gap-2">
        <span className="tp-chapter__n">1</span>
        <span className="font-scrawl text-lg font-bold text-toffee-ink">
          hello, it&apos;s me
        </span>
      </div>

      <div className="mt-4 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Media Gallery */}
        <div className="min-w-0 lg:col-span-7">
          {/* Main Media Preview Frame */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-3xl border-2 border-cocoa bg-[#faf5ed] shadow-[6px_6px_0px_#2a170e]"
          >
            {isVideo ? (
              <div className="relative size-full flex items-center justify-center bg-cocoa/90">
                {activeMedia.poster?.url && (
                  <Image
                    src={getMediaUrl(activeMedia.poster.url)}
                    alt={activeMedia.alt || puppy.displayName}
                    fill
                    className="object-cover opacity-75"
                  />
                )}
                <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-honey text-cocoa shadow-xl transition-transform group-hover:scale-110">
                  <Play className="size-8 fill-current ml-1" />
                </div>
                <div className="absolute bottom-4 left-4 z-10 rounded-full bg-cocoa/80 px-3 py-1 text-xs font-semibold text-milk">
                  Click to play video
                </div>
              </div>
            ) : (
              <Image
                src={currentMediaUrl}
                alt={activeMedia.alt || puppy.displayName}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
            )}

            <div className="absolute right-4 bottom-4 rounded-full bg-milk/90 px-3 py-1 text-xs font-semibold text-cocoa backdrop-blur-sm">
              Click to enlarge
            </div>
          </div>

          {/* Thumbnails Row */}
          {mediaItems.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {mediaItems.map((item, idx) => {
                const thumbUrl =
                  item.kind === "video" && item.poster?.url
                    ? getMediaUrl(item.poster.url)
                    : getMediaUrl(item.url);
                const isSelected = activeMediaIndex === idx;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative size-20 shrink-0 overflow-hidden rounded-2xl border-2 transition-all ${
                      isSelected
                        ? "border-toffee shadow-[3px_3px_0px_#c2622b] scale-105"
                        : "border-cocoa/20 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumbUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    {item.kind === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="size-4 fill-white text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Sticky Collar Tag Board */}
        <div className="mt-14 min-w-0 lg:mt-0 lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            {/* Tag Container */}
            <div className="tp-board relative rounded-[2.2rem_2.2rem_2.2rem_0.6rem] p-6 sm:p-9">
              {/* Mascot Peeking over the collar tag (visible with clearance) */}
              <div className="absolute -top-[4.2rem] right-6 w-32 sm:w-36 pointer-events-none">
                <MascotTeddy pose="peek" label={`Teddy peeking over ${puppy.displayName}'s tag`} />
              </div>

              {/* Status Chip */}
              <div className="flex items-center gap-2">
                <span className="chip">
                  <PawIcon className="size-3 text-toffee" />
                  <span className="capitalize">{puppy.status}</span>
                </span>
                <span className="chip bg-honey-soft/50 text-toffee-deep">
                  <Sparkles className="size-3" />
                  <span>{puppy.origin.name}</span>
                </span>
              </div>

              {/* Puppy Name */}
              <h1 className="font-plush mt-4 text-4xl font-bold tracking-tight text-cocoa sm:text-5xl">
                {puppy.displayName}
              </h1>
              <p className="mt-2 text-lg font-semibold text-cocoa-soft">
                {puppy.breed}
              </p>

              {/* Specifications 2x2 Grid */}
              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-b border-cocoa/10 py-6">
                <div>
                  <dt className="font-scrawl text-sm text-cocoa-soft">Breed</dt>
                  <dd className="mt-0.5 text-base font-bold text-cocoa">{puppy.breed}</dd>
                </div>
                <div>
                  <dt className="font-scrawl text-sm text-cocoa-soft">Boy or girl</dt>
                  <dd className="mt-0.5 text-base font-bold text-cocoa">{puppy.genderLabel}</dd>
                </div>
                <div>
                  <dt className="font-scrawl text-sm text-cocoa-soft">Age</dt>
                  <dd className="mt-0.5 text-base font-bold text-cocoa">{puppy.age}</dd>
                </div>
                <div>
                  <dt className="font-scrawl text-sm text-cocoa-soft">Where</dt>
                  <dd className="mt-0.5 text-base font-bold text-cocoa">
                    {isImported ? "Imported for you" : "In Dubai showroom"}
                  </dd>
                </div>
              </dl>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center text-base"
                >
                  <WhatsAppIcon className="size-5" />
                  <span>Ask about {puppy.displayName} on WhatsApp</span>
                </a>
                <a
                  href={`#enquire-${puppy.slug}`}
                  className="btn btn-ghost w-full justify-center text-sm font-bold text-cocoa hover:text-toffee-deep"
                >
                  Send an enquiry
                </a>
              </div>
            </div>

            {/* CHAPTER 2: WHAT COMES WITH PUPPY */}
            <div className="tp-paper mt-8 -rotate-1">
              <div className="flex items-center gap-2">
                <span className="tp-chapter__n">2</span>
                <span className="font-scrawl text-base font-bold text-toffee-ink">
                  what comes with {puppy.displayName}
                </span>
              </div>
              <h2 className="font-plush mt-2 text-xl font-bold text-cocoa">
                Every Teddy Pup comes
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm font-semibold text-cocoa">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 text-toffee shrink-0" />
                  <span>Vaccinated &amp; microchipped</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 text-toffee shrink-0" />
                  <span>Dewormed with preventive parasite care</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 text-toffee shrink-0" />
                  <span>Verified health certificate from licensed vets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 text-toffee shrink-0" />
                  <span>24/7 post-adoption care &amp; nutrition advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CHAPTER 3: THE WAY HOME */}
      <section className="mt-24 border-t border-cocoa/10 pt-16">
        <div className="flex items-center gap-2">
          <span className="tp-chapter__n">3</span>
          <span className="font-scrawl text-lg font-bold text-toffee-ink">the way home</span>
        </div>
        <h2 className="font-plush text-big mt-3 font-bold text-cocoa">
          {isImported ? "Coming home from abroad" : "Taking your puppy home in Dubai"}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isImported ? (
            <>
              <div className="tp-paper">
                <span className="tp-trail__num">1</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Reserve your puppy</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  Tell us which puppy has captured your heart and secure your reservation.
                </p>
              </div>
              <div className="tp-paper">
                <span className="tp-trail__num">2</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Personalized consultation</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  We finalize details with you and share real-time photo &amp; video updates on your puppy&apos;s journey.
                </p>
              </div>
              <div className="tp-paper">
                <span className="tp-trail__num">3</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Import &amp; arrival</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  We manage all veterinary health checks, certified travel arrangements, and customs documentation.
                </p>
              </div>
              <div className="tp-paper">
                <span className="tp-trail__num">4</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Welcome home</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  We hand-deliver your puppy and provide dedicated guidance to ensure a smooth transition into your family.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="tp-paper">
                <span className="tp-trail__num">1</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Explore &amp; connect</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  Browse photos and chat with our team on WhatsApp about {puppy.displayName}&apos;s personality.
                </p>
              </div>
              <div className="tp-paper">
                <span className="tp-trail__num">2</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Showroom visit</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  Step into our Downtown Dubai showroom to cuddle and bond with {puppy.displayName} face-to-face.
                </p>
              </div>
              <div className="tp-paper">
                <span className="tp-trail__num">3</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Health review</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  Review complete vaccination passports and licensed vet health certificates together.
                </p>
              </div>
              <div className="tp-paper">
                <span className="tp-trail__num">4</span>
                <h3 className="font-plush text-lg font-bold text-cocoa">Take puppy home</h3>
                <p className="mt-2 text-sm text-cocoa-soft leading-relaxed">
                  Take {puppy.displayName} home the very same day, or arrange white-glove delivery to your doorstep.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CHAPTER 4: ASK ABOUT PUPPY FORM */}
      <section id={`enquire-${puppy.slug}`} className="mt-24 border-t border-cocoa/10 pt-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="tp-chapter__n">4</span>
          <span className="font-scrawl text-lg font-bold text-toffee-ink">
            send an inquiry letter
          </span>
        </div>
        <LetterForm
          defaultPuppy={puppy.slug}
          preselectedPuppyName={puppy.displayName}
        />
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={`${puppy.displayName} — ${puppy.breed}`}
        currentIndex={activeMediaIndex}
        totalCount={mediaItems.length}
        src={currentMediaUrl}
        alt={activeMedia.alt || puppy.displayName}
        isVideo={isVideo}
        videoUrl={isVideo ? currentMediaUrl : undefined}
        onPrev={() =>
          setActiveMediaIndex(
            (activeMediaIndex - 1 + mediaItems.length) % mediaItems.length
          )
        }
        onNext={() =>
          setActiveMediaIndex((activeMediaIndex + 1) % mediaItems.length)
        }
      />
    </div>
  );
}

