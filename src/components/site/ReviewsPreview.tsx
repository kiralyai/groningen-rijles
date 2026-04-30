import { useEffect, useState } from "react";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { StarRating } from "@/components/site/StarRating";

const GOOGLE_REVIEWS_URL = "https://share.google/ywFWVgsWRqtWRsyT0";

interface PreviewItem {
  name: string;
  city: string;
  text: string;
  year: string;
  rating: number;
}

const reviews: PreviewItem[] = [
  {
    name: "Marco Kregel",
    city: "Groningen",
    text: "Aardige man met goede humor, zeker aan te raden. Neemt goed de tijd voor dingen als je het niet helemaal beheerst. Vandaag in 1x geslaagd 👍🏼",
    year: "2024",
    rating: 5,
  },
  {
    name: "Joshua Franzé",
    city: "Groningen",
    text: "Top rijschool, aardige humoristische instructeur. Neemt de tijd voor je. In 1 keer geslaagd!",
    year: "2024",
    rating: 5,
  },
];

export const ReviewsPreview = () => {
  const [previewReviews, setPreviewReviews] = useState<PreviewItem[]>(reviews);

  useEffect(() => {
    supabase.functions.invoke<{ reviews: Array<{ name: string; message: string; rating: number; created_at: string }> }>("public-reviews", {
      body: { limit: 2 },
    }).then(({ data, error }) => {
        if (error || !data?.reviews?.length) return;

        setPreviewReviews(
          data.reviews.map((review) => ({
            name: review.name,
            city: "Groningen",
            text: review.message,
            year: new Date(review.created_at).getFullYear().toString(),
            rating: review.rating ?? 5,
          }))
        );
      });
  }, []);

  return (
    <section className="section-pad bg-ink text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-tight relative">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">Ervaringen</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              5,0 sterren van <span className="text-primary">leerlingen</span>.
            </h2>
          </div>
          <Button asChild variant="hero" size="lg">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Lees alle reviews <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {previewReviews.map((r) => (
            <a
              key={r.name + r.year + r.text}
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-sm transition hover:border-primary/40 hover:bg-white/10"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/40" />
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-white/95">"{r.text}"</blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-white/60">{r.city} · geslaagd {r.year}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
