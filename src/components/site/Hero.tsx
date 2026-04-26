import { ArrowRight, Star, MapPin, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";
import heroImage from "@/assets/hero-instructor.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative grid */}
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="container-tight relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="badge-pill">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Rijschool in Groningen · Nieuwe leerlingen welkom
            </div>

            <h1 className="mt-6 font-display text-[2.6rem] sm:text-5xl lg:text-[4rem] xl:text-[4.4rem] leading-[1.02] font-extrabold text-ink">
              Je rijbewijs halen in{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Groningen</span>
                <span aria-hidden className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-primary/15" />
              </span>
              ,
              <br className="hidden sm:block" /> met rust en{" "}
              <span className="text-gradient-primary">vertrouwen</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-soft leading-relaxed">
              Bij Ron Bakker Rijschool leer je rijden van één vaste, ervaren instructeur — meer dan 20 jaar
              praktijkervaring, persoonlijke begeleiding en een rustige, duidelijke uitleg.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">
                  Plan een proefles <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/rijlessen-en-tarieven">Bekijk pakketten</Link>
              </Button>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground text-[10px] font-bold">W</span>
              Snelle reactie via WhatsApp · meestal binnen 1 uur
            </a>

            {/* Trust strip */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
              <TrustStat value="20+" label="Jaar ervaring" />
              <TrustStat value="98%" label="Slaagt met plezier" />
              <TrustStat value="1" label="Vaste instructeur" />
            </div>
          </div>

          {/* RIGHT — image card stack */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              {/* Background blob */}
              <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />

              {/* Main image card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-card)]">
                <img
                  src={heroImage}
                  alt="Ron Bakker, ervaren rij-instructeur in Groningen, naast zijn lesauto"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover aspect-[4/5]"
                />
                {/* Gradient overlay */}
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

                {/* Bottom testimonial overlay */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 backdrop-blur-md border border-border p-4 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-1 text-xs font-semibold text-ink">5,0</span>
                  </div>
                  <p className="mt-2 text-sm text-ink leading-snug">
                    “Rustige uitleg, geduldig en duidelijk. In één keer geslaagd!”
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">— Lisa, geslaagd in 2025</p>
                </div>
              </div>

              {/* Floating chip — top left */}
              <div className="hidden sm:flex absolute -left-4 top-8 items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2 shadow-[var(--shadow-card)] animate-float">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-ink-soft uppercase tracking-wide">CBR-erkend</p>
                  <p className="text-xs text-ink">Rijschoolnummer 2347H8</p>
                </div>
              </div>

              {/* Floating chip — top right */}
              <div
                className="hidden sm:flex absolute -right-3 top-1/3 items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2 shadow-[var(--shadow-card)] animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-ink-soft uppercase tracking-wide">Snel starten</p>
                  <p className="text-xs text-ink">Plekken deze maand</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee logos / trust */}
        <div className="mt-16 md:mt-24 border-t border-border pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Vertrouwd door honderden leerlingen in Groningen
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ink-soft text-sm">
            <span>★★★★★ Google Reviews</span>
            <span className="hidden sm:inline">·</span>
            <span>CBR-erkende rijschool</span>
            <span className="hidden sm:inline">·</span>
            <span>BOVAG-aangesloten gedragscode</span>
            <span className="hidden sm:inline">·</span>
            <span>VW T-Cross lesauto</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustStat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="font-display text-3xl font-extrabold text-ink">{value}</p>
    <p className="mt-1 text-xs sm:text-sm text-ink-soft leading-tight">{label}</p>
  </div>
);
