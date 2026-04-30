import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
  className?: string;
  starClassName?: string;
  readOnly?: boolean;
}

export const StarRating = ({
  value,
  onChange,
  size = 20,
  className,
  starClassName,
  readOnly,
}: StarRatingProps) => {
  const interactive = !readOnly && !!onChange;
  return (
    <div className={cn("flex items-center gap-1 text-primary", className)} role={interactive ? "radiogroup" : undefined} aria-label="Sterrenbeoordeling">
      {Array.from({ length: 5 }).map((_, i) => {
        const idx = i + 1;
        const filled = idx <= value;
        const StarEl = (
          <Star
            style={{ width: size, height: size }}
            className={cn(filled ? "fill-current" : "fill-none opacity-40", starClassName)}
          />
        );
        if (!interactive) return <span key={i}>{StarEl}</span>;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onChange?.(idx)}
            aria-label={`${idx} ster${idx === 1 ? "" : "ren"}`}
            aria-checked={value === idx}
            role="radio"
            className="transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            {StarEl}
          </button>
        );
      })}
    </div>
  );
};
