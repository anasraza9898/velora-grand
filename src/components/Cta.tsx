import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type CtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Cta({ to, href, children, variant = "primary", className = "", ...props }: CtaProps) {
  const cls = `cta cta-${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Link className={cls} to={to} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a className={cls} href={href} {...props}>
      {content}
    </a>
  );
}
