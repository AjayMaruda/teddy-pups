import React from "react";
import { Metadata } from "next";
import LetterForm from "@/components/LetterForm";
import MascotTeddy from "@/components/MascotTeddy";
import { WhatsAppIcon } from "@/components/Header";
import { MapPin, Phone, Mail, Clock, ExternalLink, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Visit & contact | TeddyPups U.A.E.",
  description: "Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email.",
};

export default function ContactPage() {
  return (
    <div className="gutter mx-auto max-w-[110rem] pb-24 pt-8 md:pt-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-cocoa/10 pb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
            <Sparkles className="size-3 text-toffee" />
            <span>We&apos;re Here For You</span>
          </div>
          <h1 className="font-plush text-giant mt-3 font-bold text-cocoa">
            Get in touch with us
          </h1>
          <p className="text-lede mt-4 text-cocoa-soft">
            Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we&apos;d love to hear from you!
          </p>
        </div>

        {/* Mascot */}
        <div className="flex flex-col items-center self-center md:self-auto">
          <MascotTeddy pose="standing" className="w-36" />
          <span className="font-scrawl mt-1 text-xs font-bold text-toffee-ink">
            say hello ♥
          </span>
        </div>
      </div>

      {/* Main Grid: Letter Form (Left) & Showroom Info (Right) */}
      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Mad-Libs Letter Form */}
        <div className="lg:col-span-7">
          <LetterForm />
        </div>

        {/* Right Column: Showroom Card & Details */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Showroom Details Card */}
          <div className="tp-board p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-honey-soft px-3 py-1 text-xs font-bold text-cocoa">
              <MapPin className="size-3.5 text-toffee" />
              <span>Showroom</span>
            </div>

            <h2 className="font-plush mt-4 text-2xl font-bold text-cocoa sm:text-3xl">
              Visit us in Downtown Dubai
            </h2>
            <p className="mt-3 text-sm text-cocoa-soft leading-relaxed">
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. Schedule an appointment or drop by to cuddle our available pups.
            </p>

            <div className="mt-8 space-y-5 border-t border-cocoa/10 pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="size-5 text-toffee shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-cocoa/50">Address</p>
                  <p className="mt-0.5 text-base font-semibold text-cocoa">
                    Downtown Dubai, United Arab Emirates
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-toffee hover:underline mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="size-5 text-toffee shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-cocoa/50">Opening Hours</p>
                  <p className="mt-0.5 text-sm font-semibold text-cocoa">
                    Monday – Sunday: 10:00 AM – 9:00 PM (GST)
                  </p>
                  <p className="text-xs text-cocoa-soft">Visits by appointment welcomed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="size-5 text-toffee shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-cocoa/50">Call or WhatsApp</p>
                  <a
                    href="tel:+971541676733"
                    className="mt-0.5 block text-base font-semibold text-cocoa hover:text-toffee"
                  >
                    +971 54 167 6733
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="size-5 text-toffee shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-cocoa/50">Email</p>
                  <a
                    href="mailto:teddypupsadmin@gmail.com"
                    className="mt-0.5 block text-base font-semibold text-cocoa hover:text-toffee"
                  >
                    teddypupsadmin@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cocoa/10">
              <a
                href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20like%20to%20visit%20your%20Dubai%20showroom."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full justify-center text-sm"
              >
                <WhatsAppIcon className="size-4" />
                <span>Chat with showroom concierge</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

