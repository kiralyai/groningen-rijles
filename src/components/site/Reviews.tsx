import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Lisa V.",
    city: "Groningen",
    text: "Ron is geduldig en rustig. Ik had veel faalangst, maar door zijn duidelijke uitleg ben ik in één keer geslaagd!",
    year: "2025",
  },
  {
    name: "Daan K.",
    city: "Haren",
    text: "Eindelijk een rijschool waar je niet één van de honderd bent. Vaste tijden, vaste instructeur — top.",
    year: "2024",
  },
  {
    name: "Emma B.",
    city: "Groningen",
    text: "Hele fijne lessen. Je merkt meteen dat Ron veel ervaring heeft. Ontspannen sfeer in de auto.",
    year: "2025",
  },
  {
    name: "Tom R.",
    city: "Paterswolde",
    text: "Heldere structuur per les en altijd eerlijke feedback. Ik kan Ron echt aanraden.",
    year: "2024",
  },
];

interface ReviewsProps {
  limit?: number;
}

export const Reviews = ({ limit }: ReviewsProps = {}) => {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section id="reviews" className="section-pad bg-ink text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-tight relative">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">Ervaringen</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Wat leerlingen <span className="text-primary">zeggen</span>.
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none">5,0 / 5</p>
              <p className="text-xs text-white/70">Gemiddeld cijfer</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {list.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/40" />
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-white/95">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-white/60">
                    {r.city} · geslaagd {r.year}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
