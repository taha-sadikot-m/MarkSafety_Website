import type { IndustryId } from "@/data/industries";

type HumanFigureProps = {
  industry: IndustryId;
};

export function HumanFigure({ industry }: HumanFigureProps) {
  const gearAccent =
    industry === "electrical" || industry === "power"
      ? "#C0001D"
      : industry === "chemical" || industry === "petrochem"
        ? "#C0001D"
        : "#C0001D";

  return (
    <svg
      viewBox="0 0 200 480"
      className="mx-auto h-[420px] w-auto max-w-full transition-opacity duration-300 md:h-[500px]"
      role="img"
      aria-label={`Worker silhouette for ${industry} industry`}
    >
      {/* Head */}
      <circle cx="100" cy="42" r="28" fill="none" stroke="#2C2C2C" strokeWidth="2.5" />
      {/* Hard hat / gear hint */}
      <path
        d="M72 38 Q100 10 128 38"
        fill="none"
        stroke={gearAccent}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {(industry === "petrochem" || industry === "engineering" || industry === "power") && (
        <path
          d="M70 36 L70 28 Q100 8 130 28 L130 36"
          fill="none"
          stroke={gearAccent}
          strokeWidth="2"
        />
      )}
      {/* Face mask hint for pharma/chemical/fertilizer */}
      {(industry === "pharma" ||
        industry === "chemical" ||
        industry === "fertilizer" ||
        industry === "petrochem") && (
        <path
          d="M85 50 Q100 62 115 50"
          fill="none"
          stroke={gearAccent}
          strokeWidth="2"
        />
      )}
      {/* Neck */}
      <line x1="100" y1="70" x2="100" y2="88" stroke="#2C2C2C" strokeWidth="2.5" />
      {/* Torso */}
      <path
        d="M60 95 L140 95 L150 210 L50 210 Z"
        fill="none"
        stroke="#2C2C2C"
        strokeWidth="2.5"
      />
      {/* Coverall / suit accent */}
      <line x1="100" y1="95" x2="100" y2="210" stroke={gearAccent} strokeWidth="1.5" opacity="0.7" />
      {/* Arms */}
      <path
        d="M60 100 L30 170 L40 175 L70 115"
        fill="none"
        stroke="#2C2C2C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M140 100 L170 170 L160 175 L130 115"
        fill="none"
        stroke="#2C2C2C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Hands accent */}
      <circle cx="35" cy="172" r="8" fill="none" stroke={gearAccent} strokeWidth="2" />
      <circle cx="165" cy="172" r="8" fill="none" stroke={gearAccent} strokeWidth="2" />
      {/* Fall harness for petrochem/power */}
      {(industry === "petrochem" || industry === "power" || industry === "engineering") && (
        <>
          <path
            d="M70 120 H130 M70 150 H130 M85 120 V180 M115 120 V180"
            fill="none"
            stroke={gearAccent}
            strokeWidth="1.5"
            opacity="0.8"
          />
        </>
      )}
      {/* Legs */}
      <path
        d="M70 210 L60 380 L85 380 L95 210"
        fill="none"
        stroke="#2C2C2C"
        strokeWidth="2.5"
      />
      <path
        d="M130 210 L140 380 L115 380 L105 210"
        fill="none"
        stroke="#2C2C2C"
        strokeWidth="2.5"
      />
      {/* Boots */}
      <path
        d="M50 380 H90 M110 380 H150"
        stroke={gearAccent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Arc flash face shield hint */}
      {industry === "electrical" && (
        <path
          d="M78 30 Q100 55 122 30"
          fill="none"
          stroke={gearAccent}
          strokeWidth="2"
          opacity="0.8"
        />
      )}
    </svg>
  );
}
