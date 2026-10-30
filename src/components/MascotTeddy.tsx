import React from "react";

interface MascotTeddyProps {
  pose?: "standing" | "peek" | "snug" | "sit";
  facing?: "left" | "right";
  className?: string;
  label?: string;
}

export default function MascotTeddy({
  pose = "standing",
  facing = "right",
  className = "w-32",
  label = "Teddy, the TeddyPups puppy",
}: MascotTeddyProps) {
  const isLeft = facing === "left";

  return (
    <div
      className={`inline-block select-none transition-transform ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 300 240"
        className="w-full h-auto overflow-visible"
        focusable="false"
      >
        <g transform={isLeft ? "translate(300 0) scale(-1 1)" : ""}>
          {/* Ground shadow */}
          {pose !== "peek" && (
            <ellipse
              cx="150"
              cy="230"
              rx="85"
              ry="8"
              fill="#2a170e"
              opacity="0.14"
            />
          )}

          {/* Tail */}
          <g transform="rotate(25 84 150)">
            <path
              d="M86 152 C80 146 76 140 74 136"
              stroke="#2a170e"
              strokeWidth="9"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M86 152 C80 146 76 140 74 136"
              stroke="#f2be6b"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Body */}
          <g transform="translate(0, 0)">
            {/* Back legs */}
            {pose !== "peek" && (
              <>
                <path
                  d="M102 185 C102 195 106 215 106 226 C106 230 110 232 116 232 C122 232 126 230 126 226 C126 215 128 195 128 185 Z"
                  fill="#e4a352"
                  stroke="#2a170e"
                  strokeWidth="3.2"
                />
                <path
                  d="M182 185 C182 195 186 215 186 226 C186 230 190 232 196 232 C202 232 206 230 206 226 C206 215 208 195 208 185 Z"
                  fill="#e4a352"
                  stroke="#2a170e"
                  strokeWidth="3.2"
                />
              </>
            )}

            {/* Torso */}
            <path
              d="M95 140 C95 110 120 100 155 100 C190 100 215 110 215 140 C215 175 190 205 155 205 C120 205 95 175 95 140 Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="3.4"
            />

            {/* White chest fluff */}
            <path
              d="M135 120 C145 120 165 120 175 120 C175 145 165 170 155 170 C145 170 135 145 135 120 Z"
              fill="#fffdf8"
              opacity="0.9"
            />

            {/* Front Paws (if peek, paws resting on edge) */}
            {pose === "peek" ? (
              <g transform="translate(0, -10)">
                <ellipse cx="120" cy="195" rx="14" ry="10" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" />
                <ellipse cx="190" cy="195" rx="14" ry="10" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" />
              </g>
            ) : null}

            {/* Head */}
            <g transform="translate(0, 0)">
              {/* Ears */}
              <ellipse
                cx="105"
                cy="85"
                rx="24"
                ry="32"
                transform="rotate(-25 105 85)"
                fill="#d88c3a"
                stroke="#2a170e"
                strokeWidth="3.4"
              />
              <ellipse
                cx="205"
                cy="85"
                rx="24"
                ry="32"
                transform="rotate(25 205 85)"
                fill="#d88c3a"
                stroke="#2a170e"
                strokeWidth="3.4"
              />

              {/* Head shape */}
              <circle
                cx="155"
                cy="90"
                r="48"
                fill="#f2be6b"
                stroke="#2a170e"
                strokeWidth="3.4"
              />

              {/* Muzzle */}
              <ellipse
                cx="155"
                cy="104"
                rx="22"
                ry="18"
                fill="#fffdf8"
                stroke="#2a170e"
                strokeWidth="2.5"
              />

              {/* Cute nose */}
              <ellipse cx="155" cy="96" rx="7" ry="5" fill="#2a170e" />

              {/* Smile */}
              <path
                d="M155 101 L155 108 M149 108 Q155 114 161 108"
                stroke="#2a170e"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Eyes */}
              <circle cx="138" cy="84" r="5" fill="#2a170e" />
              <circle cx="136" cy="82" r="1.5" fill="#fff" />

              <circle cx="172" cy="84" r="5" fill="#2a170e" />
              <circle cx="170" cy="82" r="1.5" fill="#fff" />

              {/* Rosy cheeks */}
              <circle cx="125" cy="98" r="6" fill="#f9cdbf" opacity="0.65" />
              <circle cx="185" cy="98" r="6" fill="#f9cdbf" opacity="0.65" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

