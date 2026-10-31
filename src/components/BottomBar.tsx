import React from "react";
import { WhatsAppIcon } from "./Header";
import { Phone } from "lucide-react";

export default function BottomBar() {
  return (
    <div
      data-whatsapp-bar="true"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-cocoa bg-milk px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] pt-2.5 md:hidden"
    >
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp !min-h-12 flex-1 !shadow-none text-sm font-semibold"
        >
          <WhatsAppIcon className="size-4" />
          <span>WhatsApp us</span>
        </a>
        <a
          href="tel:+971541676733"
          className="btn btn-ghost !min-h-12 !px-5 text-sm font-semibold"
        >
          <Phone className="size-3.5" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
}

