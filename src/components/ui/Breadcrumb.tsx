import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface">
      <ol className="container-site flex flex-wrap items-center gap-2 py-3 text-[13px] text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">›</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-crimson">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-crimson" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
