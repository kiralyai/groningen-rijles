import { Link } from "react-router-dom";
import logoRB from "@/assets/logo-rb.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className = "", showText = true }: LogoProps) => (
  <Link
    to="/"
    className={`group inline-flex items-center gap-2.5 ${className}`}
    aria-label="Ron Bakker Rijschool - Home"
  >
    <img
      src={logoRB}
      alt="Ron Bakker Rijschool logo"
      className="h-9 w-9 object-contain"
      loading="eager"
      decoding="async"
    />
    {showText && (
      <span className="font-display text-[13px] font-bold leading-tight text-current">
        Ron Bakker
        <span className="block text-[10px] font-semibold tracking-[0.18em] text-primary">RIJSCHOOL</span>
      </span>
    )}
  </Link>
);
