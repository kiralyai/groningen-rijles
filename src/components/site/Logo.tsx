import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className = "", showText = true }: LogoProps) => (
  <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Ron Bakker Rijschool - Home">
    <span className="relative flex h-9 w-9 items-center justify-center">
      <span className="absolute inset-0 rounded-full border-[2.5px] border-primary" />
      <span className="font-display text-[13px] font-extrabold leading-none">
        <span className="text-primary">R</span>
        <span className="text-current">B</span>
      </span>
    </span>
    {showText && (
      <span className="font-display text-[13px] font-bold leading-tight text-current">
        Ron Bakker
        <span className="block text-[10px] font-semibold tracking-[0.18em] text-primary">RIJSCHOOL</span>
      </span>
    )}
  </Link>
);
