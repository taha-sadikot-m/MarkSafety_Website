type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtext?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtext,
  tone = "dark",
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const eyebrowColor = tone === "light" ? "text-white" : "text-crimson";
  const titleColor = tone === "light" ? "text-white" : "text-charcoal";
  const subColor = tone === "light" ? "text-white/70" : "text-muted";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      <p
        className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2 className={`font-display mt-3 text-3xl font-bold md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {subtext ? (
        <p className={`mt-4 text-base md:text-lg ${subColor}`}>{subtext}</p>
      ) : null}
    </div>
  );
}
