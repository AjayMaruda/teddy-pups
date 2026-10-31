"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface LineupPuppy {
  name: string;
  breed: string;
  label: string;
  href: string;
  image: string;
  alt: string;
  objectPosition: string;
  x: string;
  w: string;
  peek: number;
  tilt: string;
  index: number;
  tagX?: string;
}

const LINEUP_PUPPIES: LineupPuppy[] = [
  {
    name: "Max",
    breed: "Maltipoo",
    label: "Meet Max, Maltipoo",
    href: "/puppies/maltipoo-max-male",
    image:
      "https://puppy.instabizweb.com/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
    alt: "Max, male Maltipoo puppy",
    objectPosition: "53.8% 44.3%",
    x: "5%",
    w: "8.6rem",
    peek: 0.62,
    tilt: "-5deg",
    index: 0,
    tagX: "-22%",
  },
  {
    name: "Korean Teacup Maltipoo",
    breed: "Korean Teacup Maltipoo",
    label: "Meet Korean Teacup Maltipoo, Korean Teacup Maltipoo",
    href: "/puppies/korean-teacup-maltipoo-female",
    image:
      "https://puppy.instabizweb.com/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg",
    alt: "Female Korean Teacup Maltipoo puppy",
    objectPosition: "52.5% 42.6%",
    x: "22.5%",
    w: "10.4rem",
    peek: 0.8,
    tilt: "3deg",
    index: 1,
  },
  {
    name: "Korean Teacup Poodle",
    breed: "Korean Teacup Poodle",
    label: "Meet Korean Teacup Poodle, Korean Teacup Poodle",
    href: "/puppies/korean-teacup-poodle-female",
    image:
      "https://puppy.instabizweb.com/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
    alt: "Female Korean Teacup Poodle puppy",
    objectPosition: "54.5% 45.7%",
    x: "35%",
    w: "9.2rem",
    peek: 0.7,
    tilt: "-2deg",
    index: 2,
  },
  {
    name: "Maltipoo & Cavapoo",
    breed: "Maltipoo & Cavapoo",
    label: "Meet Maltipoo & Cavapoo, Maltipoo & Cavapoo",
    href: "/puppies/maltipoo-cavapoo-male",
    image:
      "https://puppy.instabizweb.com/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
    alt: "Male Maltipoo & Cavapoo puppy",
    objectPosition: "44.7% 29.5%",
    x: "65%",
    w: "9.4rem",
    peek: 0.74,
    tilt: "3deg",
    index: 3,
  },
  {
    name: "Toy Poodle",
    breed: "Toy Poodle",
    label: "Meet Toy Poodle, Toy Poodle",
    href: "/puppies/toy-poodle-male-female",
    image:
      "https://puppy.instabizweb.com/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg",
    alt: "Toy Poodle puppy",
    objectPosition: "65.4% 44.7%",
    x: "77.5%",
    w: "10.6rem",
    peek: 0.82,
    tilt: "-3deg",
    index: 4,
  },
  {
    name: "Maltipoo",
    breed: "Maltipoo",
    label: "Meet Maltipoo, Maltipoo",
    href: "/puppies/maltipoo-female-2",
    image:
      "https://puppy.instabizweb.com/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
    alt: "Female Maltipoo puppy",
    objectPosition: "64.6% 42.3%",
    x: "91%",
    w: "8.4rem",
    peek: 0.6,
    tilt: "4deg",
    index: 5,
    tagX: "-78%",
  },
];

export default function HeroLineup() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="tp-hero__stage select-none">
      {/* Puppy Arched Windows Lineup */}
      <ul
        className="tp-lineup"
        aria-label="Some of the puppies in our showroom"
      >
        {LINEUP_PUPPIES.map((pup, i) => {
          const isHovered = hoveredIdx === i;
          const style = {
            "--x": pup.x,
            "--w": pup.w,
            "--peek": pup.peek,
            "--tilt": pup.tilt,
            "--i": pup.index,
            ...(pup.tagX ? { "--tag-x": pup.tagX } : {}),
          } as React.CSSProperties;

          return (
            <li
              key={pup.name + i}
              className="tp-lineup__seat"
              style={style}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setHoveredIdx(i)}
              onBlur={() => setHoveredIdx(null)}
            >
              <Link
                className="tp-lineup__pup group"
                data-pup-friend="true"
                data-state={isHovered ? "pop" : undefined}
                aria-label={pup.label}
                href={pup.href}
              >
                {/* Floating message tag naming the dog's breed */}
                <span
                  className={`tp-lineup__name font-scrawl font-bold ${
                    isHovered ? "tp-lineup__name--show" : ""
                  }`}
                >
                  {pup.breed}
                </span>

                {/* Arched photo window */}
                <span className="tp-lineup__photo">
                  <Image
                    alt={pup.alt}
                    src={pup.image}
                    fill
                    sizes="(max-width: 640px) 18vw, 11rem"
                    priority
                    style={{
                      objectFit: "cover",
                      objectPosition: pup.objectPosition,
                    }}
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Center Mascot Teddy Peeking with Interactive Speech Bubble */}
      <div
        data-pup-stop="true"
        data-pose="peek"
        data-facing="right"
        data-act="peekaboo"
        data-behind="true"
        data-lane="true"
        className="pup-stop tp-hero__teddy"
      >
        <div className="pup-buddy relative" data-facing="right">
          <svg
            viewBox="0 0 300 240"
            style={{ overflow: "visible" }}
            role="img"
            aria-label="Teddy, the TeddyPups puppy, peeking over the quilt"
            focusable="false"
          >
            <g data-p="root">
              <ellipse
                data-p="shadow"
                cx="150"
                cy="230"
                rx="92"
                ry="7"
                fill="#2a170e"
                opacity="0"
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
              <g data-p="head" transform="translate(0 4) rotate(0 212 100)">
                {/* Collar */}
                <path
                  d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
                  fill="#a24a1a"
                  stroke="#2a170e"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Collar Tag */}
                <path
                  d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
                  fill="#fbe3b4"
                  stroke="#2a170e"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Left Ear */}
                <path
                  data-p="earL"
                  d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                  fill="#e4a352"
                  stroke="#2a170e"
                  strokeWidth="3.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  transform="rotate(-6 174 82)"
                />
                {/* Right Ear */}
                <path
                  data-p="earR"
                  d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                  fill="#e4a352"
                  stroke="#2a170e"
                  strokeWidth="3.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  transform="rotate(6 250 82)"
                />
                {/* Curly Head Fluff */}
                <path
                  d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
                  fill="#f2be6b"
                  stroke="#2a170e"
                  strokeWidth="3.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
                  fill="#f2be6b"
                  stroke="#2a170e"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Muzzle */}
                <path
                  d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
                  fill="#fbe3b4"
                />
                {/* Blushing Cheeks */}
                <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                {/* Eyes with Twinkle */}
                <g data-p="eyes">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
                {/* Nose & Smile */}
                <path
                  d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
                  fill="#2a170e"
                />
                <path
                  d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
                  stroke="#2a170e"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Tongue */}
                <path
                  data-p="tongue"
                  d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
                  fill="#e98c8c"
                  stroke="#2a170e"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
              </g>
              {/* Front Paws on Ledge */}
              <g data-p="ledge" opacity="1">
                <path
                  d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
                  fill="#f2be6b"
                  stroke="#2a170e"
                  strokeWidth="3.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
                  stroke="#2a170e"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </g>
          </svg>

          {/* Teddy Mascot Message Bubble */}
          <span
            aria-hidden="true"
            className="pup-bubble font-scrawl font-bold"
            data-show={hoveredIdx !== null ? "true" : "false"}
          >
            {hoveredIdx !== null ? LINEUP_PUPPIES[hoveredIdx].breed : ""}
          </span>
        </div>
      </div>

      {/* Quilted Blanket & Scalloped Edge Stage */}
      <div aria-hidden="true" className="tp-quilt">
        <svg
          className="tp-quilt__edge"
          width="100%"
          height="40"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="tp-scallop"
              width="76"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40V27A38 25 0 0 1 76 27V40Z"
                style={{ fill: "var(--quilt, #fff1d8)" }}
              />
              <path
                d="M0 27A38 25 0 0 1 76 27"
                fill="none"
                stroke="#2a170e"
                strokeWidth="3"
              />
              <path
                d="M11 33A27 19 0 0 1 65 33"
                fill="none"
                stroke="#2a170e"
                strokeWidth="1.6"
                strokeDasharray="3.5 5.5"
                strokeLinecap="round"
                opacity="0.42"
              />
            </pattern>
          </defs>
          <rect width="100%" height="40" fill="url(#tp-scallop)" />
        </svg>
      </div>
    </div>
  );
}
