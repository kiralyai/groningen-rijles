import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const previewPackages = [
  { name: "Pakket A", subtitle: "Tot je slaagt", price: "€ 2.275,-", features: ["Onbeperkt rijlessen", "Praktijkexamen + herexamen", "2 termijnen mogelijk"] },
  { name: "Pakket B", subtitle: "30 rijlessen", price: "€ 1.980,-", features: ["30 rijlessen", "Praktijkexamen", "Gratis herexamen"], highlight: true },
  { name: "Pakket C", subtitle: "20 rijlessen", price: "€ 1.570,-", features: ["20 rijlessen", "Praktijkexamen", "Zelfplan-app"] },
];

export const PackagesPreview = () => (
  <section className="section-pad">
    <div className="container-tight">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Rijlessen en tarieven</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Complete <span className="text-primary">rijlespakketten</span>.
          </h2>
          <p className="mt-3 text-ink-soft">Eerlijke prijzen, geen kleine lettertjes. Losse lessen v.a. € 60,-.</p>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link to="/rijlessen-en-tarieven">
            Bekijk alle pakketten <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
        {previewPackages.map((p) => (
          <article
            key={p.name}
            className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 ${
              p.highlight
                ? "border-primary bg-ink text-primary-foreground shadow-[var(--shadow-glow)]"
                : "border-border bg-card hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            }`}
          >
            <h3 className={`font-display text-2xl font-extrabold ${p.highlight ? "text-primary-foreground" : "text-ink"}`}>
              {p.name.split(" ")[0]} <span className="text-primary">{p.name.split(" ")[1]}</span>
            </h3>
            <p className={`mt-1 text-sm ${p.highlight ? "text-primary-foreground/70" : "text-ink-soft"}`}>{p.subtitle}</p>
            <p className="mt-4 font-display text-3xl font-extrabold text-primary">{p.price}</p>
            <ul className="mt-5 space-y-2 flex-1">
              {p.features.map((f) => (
                <li key={f} className={`flex items-start gap-2 text-sm ${p.highlight ? "text-primary-foreground/90" : "text-ink"}`}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Button asChild variant={p.highlight ? "hero" : "default"} size="lg" className="mt-6">
              <Link to="/rijlessen-en-tarieven">Meer info</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  </section>
);
