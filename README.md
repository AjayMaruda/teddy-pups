# 🐾 TeddyPups U.A.E. — Full-Stack Website Clone

> **A pixel-perfect, fully responsive, and functionally complete recreation of [TeddyPups U.A.E.](https://puppy.instabizweb.com/)** built as a technical hiring assignment demonstrating senior full-stack development, UI/UX reverse engineering, responsive design, and production-grade frontend architecture.

---

## 🌟 1. Project Overview

TeddyPups U.A.E. is a boutique luxury pet adoption service located in Downtown Dubai specializing in premium teacup and teddy bear puppies (Maltipoo, Pomeranian, Poodle, Cavapoo, Shih Tzu, etc.).

This repository contains a full-stack, reverse-engineered clone recreating:
- **Exact Visual Aesthetics & Typography:** Storybook charm with Google Fonts (`Fraunces` plush serif, `Figtree` clean sans-serif, and `Shantell Sans` whimsical cursive script).
- **Exact Color Palette & Design Tokens:** Warm Toffee, Honey, Cocoa ink, Milk off-white, Sky blue, and Blush.
- **Micro-Interactions & Details:** Custom scalloped navbar hemline, animated interactive SVG mascot ("Teddy"), vintage luggage tag collar cards, perforated boarding pass tickets, washi-tape polaroids, and postal letter forms.
- **7 Core Accessible Pages + 15 Dynamic Puppy Profiles:** All rendered with Next.js App Router and Static Site Generation (SSG).
- **Mobile, Tablet, Laptop, and Desktop Responsiveness:** Hand-tested and verified across all standard viewports.

---

## 🛠️ 2. Technology Stack

### Frontend & Core
* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) — Utilizing Server Components, Client Components, Static Site Generation (SSG), and `generateStaticParams`.
* **Library:** React 19
* **Language:** TypeScript 5 (Strict Mode, zero `any` types)
* **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom design tokens, custom font variables, and utility classes.
* **Icons:** [Lucide React](https://lucide.dev/) + Hand-crafted brand SVGs (scalloped hemline, paw prints, stamps, tickets, Mascot Teddy).

### Interactive & Form Libraries
* **Form Handling:** [React Hook Form](https://react-hook-form.com/)
* **Schema Validation:** [Zod](https://zod.dev/)
* **Animations & Modals:** Tailwind transition primitives, responsive CSS transforms, and custom lightbox overlay with keyboard navigation.

---

## 🐶 3. Features & Page Checklist

### 🧭 Global Layout & Navigation
- [x] **Sticky Navigation Header (`Header.tsx`):**
  - Brand logo and serif wordmark.
  - Desktop nav links with active state pill highlight and paw icon.
  - WhatsApp quick-action concierge button.
  - Mobile slide-over drawer menu with backdrop blur and touch dismiss.
  - Scalloped decorative hemline border (`.tp-header__hem`).
- [x] **Cosmic Night Sky Footer (`Footer.tsx`):**
  - Undulating rolling hill transition SVG.
  - Twinkling star animations and brand manifesto.
  - Categorized exploration links.
  - Decoded contact details: WhatsApp `+971 54 167 6733`, email `teddypupsadmin@gmail.com`, and social links (Instagram, TikTok, Facebook).

---

### 📄 Pages Implemented

#### 1. Home Page (`/`)
- [x] **Hero Scene (`.tp-hero`):** Headline, subtitle, dual CTAs ("View available puppies", "Enquire on WhatsApp"), and interactive Mascot centerpiece.
- [x] **Meet the Pups (`.tp-meet`):** Showcase grid of available puppies with watercolor wash backgrounds.
- [x] **Two Ways to Meet (`.tp-paths`):** Dual pathways for Downtown Dubai showroom visits vs. imported Korean teacup puppies.
- [x] **Puppy Journey (`.tp-chat`):** 3-step concierge adoption process with breed tags.
- [x] **Why Families Trust Us (`.tp-passport`):** 4 trust pillars (Vet-checked, Safe travel, 100% purebred, 24/7 support).
- [x] **Happy Families Preview (`.tp-dusk`):** Polaroid gallery preview with organic tilts.
- [x] **Questions Answered (`.tp-night`):** Expandable accordion FAQ preview.
- [x] **Ready to Meet Banner (`.tp-home`):** Bottom CTA banner with direct contact links.

#### 2. Available Puppies Catalog (`/puppies`)
- [x] **Teddy's Sketchbook Header:** Custom header with animated mascot self-portrait.
- [x] **Interactive Filtering:**
  - Origin tabs: *All puppies*, *Showroom in Dubai*, *Imported for you*.
  - Breed filter chips: *Maltipoo*, *Pomeranian*, *Poodle*, *Cavapoo*, *Shih Tzu*, *Maltese*, *Bichon*, *Pomsky*.
  - Real-time client-side filtering and empty-state guidance.
- [x] **Puppy Grid:** 15 distinct available puppy cards featuring watercolor wash frames, video badges, age, gender, and status badges.
- [x] **"Already Gone Home" Section:** Preview of adopted puppies leading to the memory showcase.

#### 3. Dynamic Puppy Detail Pages (`/puppies/[slug]`)
- [x] Statically prerendered via `generateStaticParams()` for all 15 available puppies.
- [x] **Breadcrumbs:** `Available puppies / [Puppy Name]`.
- [x] **Chapter 1: "hello, it's me":**
  - Left: Multi-photo/video gallery with thumbnail selector and click-to-enlarge lightbox modal.
  - Right: Sticky luggage tag card with tag ring, mascot Teddy peeking over the edge, specs grid (Breed, Gender, Age, Where), and direct WhatsApp deep link.
- [x] **Chapter 2: "what comes with [Puppy Name]":** Tilted paper card with health and vaccination checklist.
- [x] **Chapter 3: "the way home":** 4-step adoption pathway customized by origin.
- [x] **Chapter 4: "send an inquiry letter":** Mad-libs letter form pre-selected with the puppy's details.

#### 4. Gone Home (`/gone-home`)
- [x] Dedicated showcase of 27 adopted puppies.
- [x] Styled as vintage perforated Boarding Pass tickets (`.tp-ticket`) with "Admit One" stamps, barcode motifs, and destination tags.

#### 5. Happy Families (`/happy-families`)
- [x] Authentic photo wall of 64 real family polaroids.
- [x] Realistic random rotation tilts (`-3deg` to `+3deg`), drop shadows, and colored washi tape strips.
- [x] **Interactive Fullscreen Lightbox Modal:** Open any photo, navigate with next/previous arrows, keyboard arrows (`Left`/`Right`/`Esc`), and counter ("Photo X of 64").

#### 6. How It Works (`/how-it-works`)
- [x] **Dual Pathway Switcher Tabs:**
  - *In Dubai — meet in person:* 4-step showroom walkthrough.
  - *Imported — order upon request:* 4-step international concierge reservation walkthrough.
- [x] **Our Premium Puppy Promise:** 3 trust cards.
- [x] **Delivery & Collection (`#delivery`):** Same-day collection, Dubai delivery, Safe international cargo, Worldwide delivery.
- [x] **Why Choose Us:** 4 feature cards.

#### 7. FAQ (`/faq`)
- [x] 9 full questions and answers in expandable accordion cards.
- [x] Embedded Schema.org JSON-LD `FAQPage` structured data for search engine optimization.

#### 8. Visit & Contact (`/contact`)
- [x] **Interactive Mad-Libs Letter Form:** Real-time form with Zod validation, simulated vintage postage stamp, honeypot protection, and submission feedback.
- [x] **Downtown Dubai Showroom Card:** Location address, Google Maps directions button, business hours, telephone, email, and WhatsApp link.

---

## 🗂️ 4. Project Structure

```text
teddy-pups/
├── public/
│   ├── brand/
│   │   └── logo.png              # Brand icon & logo asset
│   └── media/                    # Media assets
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx          # Visit & Contact page
│   │   ├── faq/
│   │   │   └── page.tsx          # Questions & Answers page
│   │   ├── gone-home/
│   │   │   └── page.tsx          # Adopted puppy tickets
│   │   ├── happy-families/
│   │   │   └── page.tsx          # Family polaroids & lightbox
│   │   ├── how-it-works/
│   │   │   └── page.tsx          # Process walkthrough & dual tabs
│   │   ├── puppies/
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx      # Dynamic SSG puppy detail
│   │   │   │   └── PuppyDetailClient.tsx
│   │   │   └── page.tsx          # Available puppies catalog
│   │   ├── globals.css           # Custom styles & design tokens
│   │   ├── layout.tsx            # Root layout with fonts & metadata
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── Footer.tsx            # Night sky footer
│   │   ├── Header.tsx            # Sticky header with scalloped hem
│   │   ├── LetterForm.tsx        # Mad-libs postal letter form
│   │   ├── LightboxModal.tsx     # Fullscreen image/video lightbox
│   │   ├── MascotTeddy.tsx       # Animated SVG Mascot (Teddy)
│   │   ├── PolaroidCard.tsx      # Polaroid card with washi tape
│   │   ├── PuppyCard.tsx         # Watercolor sketch card
│   │   └── TicketCard.tsx        # Perforated boarding pass ticket
│   ├── data/
│   │   ├── families.ts           # 64 family polaroids data
│   │   ├── faq.ts                # 9 FAQ items
│   │   ├── goneHome.ts           # 27 adopted puppies
│   │   └── puppies.ts            # 15 available puppies database
│   ├── lib/
│   │   └── utils.ts              # Classname merge helper
│   └── types/
│       └── index.ts              # TypeScript interfaces
├── next.config.mjs               # Next.js configuration & image hosts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts            # Theme colors & fonts configuration
└── tsconfig.json
```

---

## 🌿 5. Git Branching Strategy

Development follows the enterprise Git-Flow structure requested:

* `main` — Production-ready code deployed to live hosting.
* `develop` — Primary integration branch. All features branch from and merge back into `develop`.
* `feat/*` — Feature branches for modular, traceable development:
  * `feat/project-setup-and-design-system`
  * `feat/all-pages-and-interactions`
  * `feat/readme-docs-and-final-polish`

---

## 🚀 6. Installation & Local Development

### Prerequisites
* **Node.js:** v18.18+ (v22 LTS recommended)
* **npm:** v9+

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AjayMaruda/teddy-pups.git
   cd teddy-pups
   ```

2. **Checkout the develop branch:**
   ```bash
   git checkout develop
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Start production server:**
   ```bash
   npm run start
   ```

---

## 📱 7. Responsive Design & QA Verification

The website layout has been rigorously tested across all target breakpoints:

| Viewport | Dimensions | Verification Status |
|---|---|---|
| **Mobile** | 320px – 480px | Stacked hero, slide-over hamburger drawer, 1-col cards, smooth horizontal chip scroll |
| **Tablet** | 481px – 768px | 2-col puppy grid, 3-col polaroid wall, comfortable touch targets |
| **Laptop** | 769px – 1024px | Full desktop navbar visible, 3-col puppy grid, sticky luggage tag |
| **Desktop** | 1025px – 1440px | Optimized gutter spacing, 4-col puppy grid, 6-col polaroid wall |
| **Large Desktop**| 1440px+ | Max container width constraint (`110rem`), high-res image scaling |

---

## 🔒 8. Known Limitations & Technical Notes

* **External WhatsApp Concierge:** WhatsApp inquiry links open directly to the official TeddyPups business phone number (`+971 54 167 6733`) with URL-encoded messages tailored to the specific puppy being viewed.
* **Form Submission:** The contact and letter forms include full client-side validation and bot honeypot protection, providing instant user feedback upon submission.
* **Asset Optimization:** Remote puppy photography is loaded dynamically through Next.js Image Optimization with blur placeholders where available.
