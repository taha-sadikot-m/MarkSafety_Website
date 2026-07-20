import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "ghost-light" | "white" | "text";
type Size = "md" | "sm" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-crimson text-white hover:bg-crimson-hover border border-transparent",
  ghost:
    "bg-white text-crimson border border-crimson hover:bg-crimson-soft",
  "ghost-light":
    "bg-transparent text-white border border-white hover:bg-white/10",
  white:
    "bg-white text-charcoal border border-transparent hover:bg-white/90",
  text: "bg-transparent text-crimson border-transparent underline-offset-4 hover:underline px-0",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-[4px] font-medium transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={classes}
      aria-label={buttonProps["aria-label"]}
    >
      {children}
    </button>
  );
}
