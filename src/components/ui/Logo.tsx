import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

export function Logo({ variant = "light", showTagline = false, className = "" }: LogoProps) {
  const markColor = variant === "dark" ? "text-white" : "text-charcoal";
  const safetyColor = variant === "dark" ? "text-white/90" : "text-charcoal";
  const taglineColor = variant === "dark" ? "text-white/60" : "text-muted";

  return (
    <Link href="/" className={`inline-flex flex-col leading-none ${className}`} aria-label="Mark Safety Appliances home">
      <span className={`font-display text-2xl font-bold tracking-tight ${markColor}`}>
        mark<span className="text-crimson">!</span>
      </span>
      <span
        className={`mt-0.5 text-[11px] font-semibold uppercase tracking-[0.28em] ${safetyColor}`}
      >
        Safety
      </span>
      {showTagline ? (
        <span className={`mt-1 text-xs italic ${taglineColor}`}>Protect what&apos;s valued.</span>
      ) : null}
    </Link>
  );
}
