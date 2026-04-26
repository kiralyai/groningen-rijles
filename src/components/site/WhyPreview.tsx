import { Link } from "react-router-dom";
import { Award, HeartHandshake, UserCheck, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    icon: Award,
    title: "20+ jaar ervaring",
    text: "Twee decennia lesgeven in Groningen.",
  },
  {
    icon: UserCheck,
    title: "Eén vaste instructeur",
    text: "Altijd hetzelfde vertrouwde gezicht naast je.",
  },
  {
    icon: HeartHandshake,
    title: "Ideaal bij faalangst",
    text: "Rustige sfeer, geen druk, stap voor stap.",
  },
  {
    icon: MessageCircle,
    title: "Duidelijke uitleg",
    text: "Je krijgt de tijd om alles écht te begrijpen.",
  },
];

export const WhyPreview = () => (
  <section className="section-pad bg-surface">
    <div className="container-tight">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Waarom Ron Bakker</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Rijles in Groningen die <span className="text-gradient-primary">echt past</span>.
          </h2>
        </div>
        <Button asChild variant="outline" size="lg">
          <Link to="/waarom-wij">
            Lees meer over ons <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <article
            key={it.title}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-ink">{it.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{it.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
