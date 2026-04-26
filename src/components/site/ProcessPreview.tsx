import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "Proefles",
    text: "Vrijblijvend kennismaken in 60 minuten. Je ervaart direct mijn manier van lesgeven.",
  },
  {
    n: "02",
    title: "Lestraject",
    text: "Vaste instructeur, persoonlijk lesplan en duidelijke voortgang per les — op jouw tempo.",
  },
  {
    n: "03",
    title: "Examen",
    text: "Goed voorbereid het CBR-examen in. We rijden de ochtend van het examen rustig in.",
  },
];

export const ProcessPreview = () => (
  <section className="section-pad bg-surface">
    <div className="container-tight">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hoe het werkt</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Van proefles tot <span className="text-gradient-primary">rijbewijs</span>.
          </h2>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link to="/hoe-het-werkt">
            Bekijk het hele traject <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
          >
            <span className="font-display text-5xl font-extrabold text-primary/30">{s.n}</span>
            <h3 className="mt-3 font-display text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
