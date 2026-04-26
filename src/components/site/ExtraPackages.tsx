import { Plus, GraduationCap, BookOpen, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const aanvulPakketten = [
  {
    name: "Pakket D",
    subtitle: "10 rijlessen + praktijkexamen",
    price: "€ 880,-",
  },
  {
    name: "Pakket E",
    subtitle: "10 rijlessen",
    price: "€ 600,-",
  },
];

const losseOpties = [
  {
    icon: Car,
    name: "Losse rijles / Proefles",
    description: "Per les van 60 minuten — vrijblijvend kennismaken of bijspijkeren.",
    price: "€ 60,-",
  },
  {
    icon: GraduationCap,
    name: "Los praktijkexamen",
    description: "Boek alleen het praktijkexamen via de rijschool.",
    price: "€ 280,-",
  },
  {
    icon: BookOpen,
    name: "Theorie Leren",
    description: "Online theoriecursus via Nationaal Theorie Centrum.",
    price: "vanaf € 50,00",
  },
];

export const ExtraPackages = () => {
  return (
    <section className="section-pad bg-surface">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary inline-flex items-center gap-2">
            <Plus className="h-4 w-4" /> Aanvulpakketten
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-ink">
            <span className="text-primary">Aanvul</span>pakketten
          </h2>
          <p className="mt-3 text-ink-soft">
            Voor leerlingen die een tijd gestopt zijn en de draad weer willen oppakken.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {aanvulPakketten.map((p) => (
            <article
              key={p.name}
              className="rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-2xl font-extrabold text-ink">
                {p.name.split(" ")[0]} <span className="text-primary">{p.name.split(" ")[1]}</span>
              </h3>
              <p className="mt-2 text-ink-soft">{p.subtitle}</p>
              <p className="mt-5 font-display text-2xl font-extrabold">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft mr-2">Nu:</span>
                <span className="text-primary">{p.price}</span>
              </p>
              <Button asChild variant="default" size="sm" className="mt-5">
                <Link to="/contact">Vraag info aan</Link>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Losse opties</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-ink">
            Losse rijles, examen & <span className="text-primary">theorie</span>.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {losseOpties.map((o) => (
            <article
              key={o.name}
              className="rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <o.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{o.name}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{o.description}</p>
              <p className="mt-5 font-display text-2xl font-extrabold text-primary">{o.price}</p>
            </article>
          ))}
        </div>

        <ul className="mt-12 space-y-2 text-sm text-ink-soft italic max-w-2xl border-l-2 border-primary/30 pl-5">
          <li>• Alle prijzen zijn incl. 21% BTW</li>
          <li>• Gebruik van de lesauto is inbegrepen</li>
          <li>• Praktijkexamens zijn 0% BTW</li>
        </ul>
      </div>
    </section>
  );
};
