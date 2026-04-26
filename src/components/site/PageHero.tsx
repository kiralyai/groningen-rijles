import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

export const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => (
  <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16" style={{ background: "var(--gradient-hero)" }}>
    <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />
    <div className="container-tight relative">
      <div className="max-w-3xl animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">{description}</p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </div>
  </section>
);
