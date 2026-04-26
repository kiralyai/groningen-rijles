import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

const packages = [
  {
    name: "Proefles",
    price: "€ 49",
    unit: "/ 60 min",
    description: "Maak vrijblijvend kennis en ervaar mijn manier van lesgeven.",
    features: [
      "60 minuten rijden",
      "Persoonlijke intake",
      "Tips voor jouw start",
      "Geen verdere verplichtingen",
    ],
    cta: "Plan je proefles",
    highlight: false,
  },
  {
    name: "Startpakket 10 lessen",
    price: "€ 575",
    unit: "10 × 60 min",
    description: "De ideale start als je net begint of al wat ervaring hebt.",
    features: [
      "10 rijlessen van 60 min",
      "Vaste instructeur",
      "Persoonlijk lesplan",
      "Voortgangsoverzicht",
    ],
    cta: "Kies dit pakket",
    highlight: true,
    badge: "Meest gekozen",
  },
  {
    name: "Examenpakket",
    price: "€ 1.295",
    unit: "20 lessen + examen",
    description: "Volledig pakket inclusief tussentijdse toets en praktijkexamen.",
    features: [
      "20 rijlessen van 60 min",
      "Tussentijdse toets (TTT)",
      "Praktijkexamen CBR",
      "Examengarantie-advies",
    ],
    cta: "Vraag info aan",
    highlight: false,
  },
];

export const Packages = () => {
  return (
    <section id="pakketten" className="section-pad">
      <div className="container-tight">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pakketten & tarieven</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
              Eerlijke prijzen.<br />Geen kleine lettertjes.
            </h2>
          </div>
          <p className="max-w-md text-ink-soft">
            Liever losse lessen of maatwerk? Geen probleem — we bespreken samen wat het beste bij jou past.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 ${
                p.highlight
                  ? "border-primary bg-ink text-primary-foreground shadow-[var(--shadow-glow)] scale-[1.02]"
                  : "border-border bg-card hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  <Sparkles className="h-3 w-3" /> {p.badge}
                </span>
              )}
              <h3 className={`font-display text-xl font-bold ${p.highlight ? "text-primary-foreground" : "text-ink"}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.highlight ? "text-primary-foreground/70" : "text-ink-soft"}`}>
                {p.description}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`font-display text-4xl font-extrabold ${p.highlight ? "text-primary-foreground" : "text-ink"}`}>
                  {p.price}
                </span>
                <span className={`text-sm ${p.highlight ? "text-primary-foreground/70" : "text-ink-soft"}`}>
                  {p.unit}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${p.highlight ? "text-primary-foreground/90" : "text-ink"}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-primary" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-2">
                <Button
                  asChild
                  variant={p.highlight ? "hero" : "default"}
                  className={p.highlight ? "" : ""}
                  size="lg"
                >
                  <a href="#contact">{p.cta}</a>
                </Button>
                <Button asChild variant="ghost" size="sm" className={p.highlight ? "text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground" : ""}>
                  <a href={whatsappLink(`Hoi Ron, ik heb interesse in het ${p.name}-pakket. Kun je me meer informatie geven?`)} target="_blank" rel="noopener noreferrer">
                    Vraag via WhatsApp
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-soft">
          Alle prijzen zijn inclusief btw. Wijzigingen voorbehouden.
        </p>
      </div>
    </section>
  );
};
