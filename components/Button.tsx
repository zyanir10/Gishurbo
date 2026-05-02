import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "dark";
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-5 text-lg rounded-xl",
  };

  const variants = {
    primary: "bg-gold text-navy hover:bg-gold/90",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-navy",
    dark: "bg-navy text-white hover:bg-navy/90",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
