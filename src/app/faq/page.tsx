"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqsData } from "@/data/faq";
import MascotTeddy from "@/components/MascotTeddy";
import { WhatsAppIcon } from "@/components/Header";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((f) => ({
      "@type": "Question",
      name: f.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.acceptedAnswer.text,
      },
    })),
  };

  return (
    <div className="gutter mx-auto max-w-4xl pb-24 pt-8 md:pt-14">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-cocoa/10 pb-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
            <HelpCircle className="size-3 text-toffee" />
            <span>Got Questions?</span>
          </div>
          <h1 className="font-plush text-giant mt-3 font-bold text-cocoa">
            Questions &amp; answers
          </h1>
          <p className="text-lede mt-4 text-cocoa-soft">
            Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.
          </p>
        </div>

        <div className="flex flex-col items-center self-center sm:self-auto">
          <MascotTeddy pose="standing" className="w-32" />
          <span className="font-scrawl mt-1 text-xs font-bold text-toffee-ink">
            ask away ♥
          </span>
        </div>
      </div>

      {/* FAQs List */}
      <div className="mt-12 space-y-4">
        {faqsData.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.name}
              className="overflow-hidden rounded-2xl border-2 border-cocoa/15 bg-milk transition-all hover:border-toffee/40"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left font-plush text-lg sm:text-xl font-bold text-cocoa hover:text-toffee-deep transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.name}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-toffee transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-cocoa/10 px-6 pb-6 pt-4 text-cocoa-soft leading-relaxed text-base">
                  {faq.acceptedAnswer.text}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions CTA */}
      <div className="mt-20 rounded-3xl border-2 border-cocoa bg-[#fffdf8] p-8 sm:p-12 text-center shadow-[6px_6px_0px_#2a170e]">
        <p className="font-scrawl text-lg font-bold text-toffee-ink">need more details?</p>
        <h2 className="font-plush text-3xl font-bold text-cocoa sm:text-4xl mt-2">
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className="mt-3 text-cocoa-soft max-w-xl mx-auto text-base">
          Our friendly team is on standby 24/7 on WhatsApp to answer any questions about breeds, travel, vaccination passports, or visits.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%20about%20your%20puppies."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon className="size-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Visit &amp; contact
          </Link>
        </div>
      </div>
    </div>
  );
}

