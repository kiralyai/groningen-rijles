import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

export const completePackages = [
  {
    name: "Pakket A",
    subtitle: "Rijlessen tot je slaagt",
    description: "Inclusief praktijkexamen + gratis herexamen. Ideaal als je zekerheid wilt.",
    price: "€ 2.275,-",
    priceLabel: "Nu tijdelijk",
    features: [
      "Onbeperkt rijlessen tot je rijbewijs is gehaald",
      "Inclusief praktijkexamen en herexamen indien nodig",
      "Inclusief leerling zelfplan-app",
      "Betalen in 2 termijnen mogelijk",
    ],
    footnote: "Ideaal voor leerlingen die zeker willen weten dat ze genoeg lessen hebben.",
    highlight: false,
  },
  {
    name: "Pakket B",
    subtitle: "30 rijlessen",
    description: "Inclusief praktijkexamen + gratis herexamen. Onze meest gekozen optie.",
    price: "€ 1.980,-",
    priceLabel: "Nu",
    features: [
      "30 rijlessen",
      "Praktijkexamen inbegrepen",
      "Gratis herexamen indien nodig",
      "Inclusief leerling zelfplan-app",
      "Betalen in 2 termijnen mogelijk (zie FAQ)",
    ],
    footnote: "Perfect voor leerlingen die al wat ervaring hebben of snel leren.",
    highlight: true,
    badge: "Meest gekozen",
  },
  {
    name: "Pakket C",
    subtitle: "20 rijlessen",
    description: "Inclusief praktijkexamen. Voor leerlingen met een goede basis.",
    price: "€ 1.570,-",
    priceLabel: "Nu",
    features: [
      "20 rijlessen",
      "Praktijkexamen inbegrepen",
      "Inclusief leerling zelfplan-app",
    ],
    footnote: "Geschikt voor leerlingen die al redelijk zelfstandig kunnen rijden.",
    highlight: false,
  },
];

interface PackagesProps {
  showHeading?: boolean;
}

export const Packages = ({ showHeading = true }: PackagesProps) => {
  return (
    <section id="pakketten" className="section-pad">
      <div className="container-tight">
        {showHeading && (
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Complete rijlespakketten</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
                Eerlijke prijzen.<br />Geen kleine lettertjes.
              </h2>
            </div>
            <p className="max-w-md text-ink-soft">
              Bij Ron Bakker Rijschool weet je altijd precies waar je aan toe bent. Duidelijke tarieven en complete pakketten waarmee je goed voorbereid naar je praktijkexamen gaat.
            </p>
          </div>
        )}

        <div className={`${showHeading ? "mt-12" : ""} grid gap-6 lg:grid-cols-3`}>
          {completePackages.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 ${
                p.highlight
                  ? "border-primary bg-ink text-primary-foreground shadow-[var(--shadow-glow)] lg:scale-[1.02]"
                  : "border-border bg-card hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  <Sparkles className="h-3 w-3" /> {p.badge}
                </span>
              )}
              <h3 className={`font-display text-2xl font-extrabold ${p.highlight ? "text-primary-foreground" : "text-ink"}`}>
                {p.name.split(" ")[0]} <span className="text-primary">{p.name.split(" ")[1]}</span>
              </h3>
              <p className={`mt-2 font-display text-base font-bold ${p.highlight ? "text-primary-foreground" : "text-ink"}`}>
                {p.subtitle}
              </p>
              <p className={`mt-1 text-sm ${p.highlight ? "text-primary-foreground/70" : "text-ink-soft"}`}>
                {p.description}
              </p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${p.highlight ? "text-primary-foreground/90" : "text-ink"}`}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className={`mt-6 text-xs italic ${p.highlight ? "text-primary-foreground/70" : "text-ink-soft"}`}>
                {p.footnote}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className={`text-xs font-semibold uppercase tracking-wider ${p.highlight ? "text-primary-foreground/70" : "text-ink-soft"}`}>
                  {p.priceLabel}:
                </span>
                <span className={`font-display text-3xl font-extrabold ${p.highlight ? "text-primary" : "text-primary"}`}>
                  {p.price}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Button asChild variant={p.highlight ? "hero" : "default"} size="lg">
                  <Link to="/contact">
                    Plan proefles <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className={p.highlight ? "text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground" : ""}
                >
                  <a
                    href={whatsappLink(`Hoi Ron, ik heb interesse in ${p.name} (${p.subtitle}). Kun je me meer informatie geven?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vraag via WhatsApp
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
