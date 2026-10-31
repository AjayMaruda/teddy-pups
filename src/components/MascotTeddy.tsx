import React from "react";

export type TeddyVariant = "korean-poodle" | "bichon-maltipoo" | "fluffy-bear";

interface MascotTeddyProps {
  pose?: "standing" | "peek" | "snug" | "sit";
  facing?: "left" | "right";
  variant?: TeddyVariant;
  className?: string;
  label?: string;
}

export default function MascotTeddy({
  pose = "standing",
  facing = "right",
  variant = "korean-poodle",
  className = "w-32",
  label = "Teddy, the TeddyPups mascot puppy",
}: MascotTeddyProps) {
  const isLeft = facing === "left";

  // Palette definitions
  const furMain = variant === "bichon-maltipoo" ? "#fffcf4" : "#f2be6b";
  const furShade = variant === "bichon-maltipoo" ? "#f5ede0" : "#e4a352";
  const lineStroke = "#2a170e";
  const strokeW = "3.2";

  return (
    <div
      className={`inline-block select-none transition-transform ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 280 230"
        className="w-full h-auto overflow-visible"
        focusable="false"
      >
        <g transform={isLeft ? "translate(280 0) scale(-1 1)" : ""}>
          {/* Ground soft shadow */}
          {pose !== "peek" && (
            <ellipse
              cx="135"
              cy="216"
              rx="75"
              ry="8"
              fill="#2a170e"
              opacity="0.14"
            />
          )}

          {/* STANDING POSE: Matching the reference website wooden floor mascot */}
          {pose === "standing" && (
            <g id="teddy-standing">
              {/* Fluffy Pom-Pom Curly Tail */}
              <g className="teddy-tail">
                <path
                  d="M62 138 C52 128 46 112 50 96 C52 86 60 80 70 84 C76 86 80 92 82 100"
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Cloud Pom-pom at tip of tail */}
                <path
                  d="M48 94 C40 92 34 82 38 72 C32 64 40 52 50 56 C56 48 68 50 72 58 C80 54 88 64 84 74 C90 82 82 92 72 92 C66 96 54 98 48 94 Z"
                  fill={furMain}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />
              </g>

              {/* Back Legs */}
              <g className="teddy-back-legs">
                {/* Back Left Leg */}
                <path
                  d="M68 150 C68 168 62 188 64 206 C64 212 70 214 78 214 C86 214 90 211 90 205 C88 188 88 170 88 150 Z"
                  fill={furShade}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />
                {/* Back Right Leg (foreground) */}
                <path
                  d="M92 148 C92 168 88 188 90 206 C90 212 96 214 104 214 C112 214 116 211 116 205 C114 188 114 170 114 148 Z"
                  fill={furMain}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />
              </g>

              {/* Puppy Body / Torso */}
              <path
                d="M66 142 C66 118 84 108 120 108 C155 108 178 118 182 142 C182 168 158 182 124 182 C88 182 66 168 66 142 Z"
                fill={furMain}
                stroke={lineStroke}
                strokeWidth={strokeW}
                strokeLinejoin="round"
              />

              {/* Front Legs */}
              <g className="teddy-front-legs">
                {/* Front Left Leg (background) */}
                <path
                  d="M148 145 C148 165 144 188 146 206 C146 212 152 214 160 214 C168 214 172 211 172 205 C170 188 168 168 168 145 Z"
                  fill={furShade}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />
                {/* Front Right Leg (foreground) */}
                <path
                  d="M174 145 C174 165 170 188 172 206 C172 212 178 214 186 214 C194 214 198 211 198 205 C196 188 194 168 194 145 Z"
                  fill={furMain}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />
              </g>

              {/* Collar & Heart Tag */}
              <g className="teddy-collar">
                <path
                  d="M150 116 C158 126 180 126 190 116 L188 123 C178 133 156 133 148 123 Z"
                  fill="#7a3a1d"
                  stroke={lineStroke}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {/* Golden Heart Tag */}
                <path
                  d="M168 129 C168 126 163 125 163 129 C163 133 168 136 168 138 C168 136 173 133 173 129 C173 125 168 126 168 129 Z"
                  fill="#ffd369"
                  stroke={lineStroke}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </g>

              {/* Head Section (Poodle Cloud Curls) */}
              <g id="teddy-head-group" transform="translate(15, -10)">
                {/* Left Drooping Curly Ear */}
                <path
                  d="M142 56 C134 50 126 58 124 68 C116 66 114 78 116 88 C108 92 110 106 118 114 C114 126 124 136 134 134 C140 138 150 134 150 126 C154 116 150 100 148 88 Z"
                  fill={furShade}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />

                {/* Right Drooping Curly Ear */}
                <path
                  d="M208 56 C216 50 224 58 226 68 C234 66 236 78 234 88 C242 92 240 106 232 114 C236 126 226 136 216 134 C210 138 200 134 200 126 C196 116 200 100 202 88 Z"
                  fill={furShade}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />

                {/* Scalloped Poodle Head Silhouette */}
                <path
                  d="M175 32 C185 24 198 32 198 42 C208 40 216 50 214 62 C224 66 226 78 220 88 C226 96 222 110 212 116 C212 126 200 134 190 132 C184 138 166 138 160 132 C150 134 138 126 138 116 C128 110 124 96 130 88 C124 78 126 66 136 62 C134 50 142 40 152 42 C152 32 165 24 175 32 Z"
                  fill={furMain}
                  stroke={lineStroke}
                  strokeWidth={strokeW}
                  strokeLinejoin="round"
                />

                {/* Sparkling Puppy Eyes */}
                <ellipse cx="160" cy="84" rx="7.5" ry="9" fill={lineStroke} />
                <circle cx="157.5" cy="80.5" r="2.8" fill="#ffffff" />
                <circle cx="162.5" cy="87" r="1.2" fill="#ffffff" />

                <ellipse cx="190" cy="84" rx="7.5" ry="9" fill={lineStroke} />
                <circle cx="187.5" cy="80.5" r="2.8" fill="#ffffff" />
                <circle cx="192.5" cy="87" r="1.2" fill="#ffffff" />

                {/* Rosy Blush Cheeks */}
                <ellipse
                  cx="146"
                  cy="98"
                  rx="7"
                  ry="5"
                  fill="#ff9e99"
                  opacity="0.8"
                />
                <ellipse
                  cx="204"
                  cy="98"
                  rx="7"
                  ry="5"
                  fill="#ff9e99"
                  opacity="0.8"
                />

                {/* Cute Button Nose */}
                <path
                  d="M170 91 C172 88 178 88 180 91 C182 95 178 100 175 100 C172 100 168 95 170 91 Z"
                  fill={lineStroke}
                />

                {/* Happy Smile & Tongue */}
                <path
                  d="M175 100 L175 104 M170 104 C172 108 175 108 175 104 C175 108 178 108 180 104"
                  stroke={lineStroke}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M172 106 C172 112 178 112 178 106 Z"
                  fill="#ff8585"
                  stroke={lineStroke}
                  strokeWidth="1.6"
                />
              </g>
            </g>
          )}

          {/* PEEK POSE: For peeking over the blanket/quilt ledge */}
          {pose === "peek" && (
            <g id="teddy-peek" transform="translate(15, 10)">
              {/* Left Curly Ear */}
              <path
                d="M92 56 C84 50 76 58 74 68 C66 66 64 78 66 88 C58 92 60 106 68 114 C64 126 74 136 84 134 C90 138 100 134 100 126 C104 116 100 100 98 88 Z"
                fill={furShade}
                stroke={lineStroke}
                strokeWidth={strokeW}
                strokeLinejoin="round"
              />

              {/* Right Curly Ear */}
              <path
                d="M158 56 C166 50 174 58 176 68 C184 66 186 78 184 88 C192 92 190 106 182 114 C186 126 176 136 166 134 C160 138 150 134 150 126 C146 116 150 100 152 88 Z"
                fill={furShade}
                stroke={lineStroke}
                strokeWidth={strokeW}
                strokeLinejoin="round"
              />

              {/* Scalloped Poodle Head */}
              <path
                d="M125 32 C135 24 148 32 148 42 C158 40 166 50 164 62 C174 66 176 78 170 88 C176 96 172 110 162 116 C162 126 150 134 140 132 C134 138 116 138 110 132 C100 134 88 126 88 116 C78 110 74 96 80 88 C74 78 76 66 86 62 C84 50 92 40 102 42 C102 32 115 24 125 32 Z"
                fill={furMain}
                stroke={lineStroke}
                strokeWidth={strokeW}
                strokeLinejoin="round"
              />

              {/* Eyes */}
              <ellipse cx="110" cy="84" rx="7.5" ry="9" fill={lineStroke} />
              <circle cx="107.5" cy="80.5" r="2.8" fill="#ffffff" />
              <circle cx="112.5" cy="87" r="1.2" fill="#ffffff" />

              <ellipse cx="140" cy="84" rx="7.5" ry="9" fill={lineStroke} />
              <circle cx="137.5" cy="80.5" r="2.8" fill="#ffffff" />
              <circle cx="142.5" cy="87" r="1.2" fill="#ffffff" />

              {/* Blush */}
              <ellipse
                cx="96"
                cy="98"
                rx="7"
                ry="5"
                fill="#ff9e99"
                opacity="0.8"
              />
              <ellipse
                cx="154"
                cy="98"
                rx="7"
                ry="5"
                fill="#ff9e99"
                opacity="0.8"
              />

              {/* Nose & Smile */}
              <path
                d="M120 91 C122 88 128 88 130 91 C132 95 128 100 125 100 C122 100 118 95 120 91 Z"
                fill={lineStroke}
              />
              <path
                d="M125 100 L125 104 M120 104 C122 108 125 108 125 104 C125 108 128 108 130 104"
                stroke={lineStroke}
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M122 106 C122 112 128 112 128 106 Z"
                fill="#ff8585"
                stroke={lineStroke}
                strokeWidth="1.6"
              />

              {/* Cute Front Paws Resting On Ledge */}
              <g id="teddy-peek-paws">
                <path
                  d="M102 144 C102 136 108 130 116 130 C124 130 130 136 130 144 Z"
                  fill={furMain}
                  stroke={lineStroke}
                  strokeWidth="2.8"
                />
                <path
                  d="M110 138 v5 M116 138 v5"
                  stroke={lineStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M120 144 C120 136 126 130 134 130 C142 130 148 136 148 144 Z"
                  fill={furMain}
                  stroke={lineStroke}
                  strokeWidth="2.8"
                />
                <path
                  d="M128 138 v5 M134 138 v5"
                  stroke={lineStroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
