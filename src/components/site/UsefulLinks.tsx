import { ExternalLink, Globe, BookOpen, Car, ShieldCheck, Award } from "lucide-react";

const links = [
  {
    icon: ShieldCheck,
    label: "CBR — Mijn CBR",
    description: "Inloggen, theorie-examen plannen, rijschool machtigen en medische verklaring invullen.",
    href: "https://www.cbr.nl/",
  },
  {
    icon: Car,
    label: "2toDrive — begeleiderspas",
    description: "Aanvragen van een begeleiderspas voor leerlingen tussen 17 en 18 jaar.",
    href: "https://www.2todrive.nl/",
  },
  {
    icon: Globe,
    label: "RDW",
    description: "Rijbewijsregistratie, voertuiggegevens en officiële zaken rondom je rijbewijs.",
    href: "https://www.rdw.nl/",
  },
  {
    icon: BookOpen,
    label: "Verkeersborden (RVV 1990)",
    description: "Bijlage 1 van het Reglement verkeersregels en verkeerstekens — alle borden op een rij.",
    href: "https://wetten.overheid.nl/BWBR0004825/2024-01-01#Bijlage1",
  },
  {
    icon: BookOpen,
    label: "Begripsbepalingen RVV 1990",
    description: "Officiële begripsbepalingen die je nodig hebt voor je theorie-examen.",
    href: "https://wetten.overheid.nl/BWBR0004825/2024-01-01#Hoofdstuk1",
  },
  {
    icon: Award,
    label: "Slagingspercentage CBR",
    description: "Bekijk het officiële slagingspercentage van Ron Bakker Rijschool bij het CBR.",
    href: "https://www.cbr.nl/nl/voor-rijscholen/nl/slagingspercentages.htm",
  },
];

export const UsefulLinks = () => {
  return (
    <section id="handige-links" className="section-pad">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Handige links</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Alles wat je nodig hebt op <span className="text-gradient-primary">één plek</span>.
          </h2>
          <p className="mt-4 text-ink-soft">
            De belangrijkste websites rondom je rijopleiding, theorie en CBR-zaken. Open ze in een nieuw tabblad.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <l.icon className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-ink-soft transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink">{l.label}</h3>
              <p className="mt-2 text-sm text-ink-soft">{l.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
