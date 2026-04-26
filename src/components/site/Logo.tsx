interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className = "", showText = true }: LogoProps) => (
  <a href="#top" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Ron Bakker Rijschool — Home">
    <span className="relative flex h-10 w-10 items-center justify-center">
      <span className="absolute inset-0 rounded-full border-[3px] border-primary" />
      <span className="font-display text-base font-extrabold leading-none text-ink">
        <span className="text-primary">R</span>B
      </span>
    </span>
    {showText && (
      <span className="font-display text-sm font-bold leading-tight text-ink">
        Ron Bakker
        <span className="block text-[11px] font-semibold tracking-[0.18em] text-primary">RIJSCHOOL</span>
      </span>
    )}
  </a>
);
