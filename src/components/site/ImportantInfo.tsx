import { Calendar, BookOpen, FileCheck, ArrowRight } from "lucide-react";

const blocks = [
  {
    icon: Calendar,
    eyebrow: "2toDrive",
    title: "Al starten vanaf 16,5 jaar",
    points: [
      "Vanaf 16,5 jaar mag je beginnen met rijles.",
      "Op je 17e mag je praktijkexamen doen.",
      "Tussen 17 en 18 jaar rijd je met een vaste begeleider.",
      "Vanaf 18 jaar rijd je volledig zelfstandig.",
    ],
  },
  {
    icon: BookOpen,
    eyebrow: "Theorie",
    title: "Theorie haal je zelfstandig",
    points: [
      "Theorie is verplicht vóór je praktijkexamen.",
      "Wij raden zelfstudie aan via een theorieboek of app.",
      "Een theoriecursus van één dag is ook mogelijk.",
      "Reserveer zelf je theorie-examen via het CBR.",
    ],
  },
  {
    icon: FileCheck,
    eyebrow: "CBR - eerste stappen",
    title: "Wat regel je vooraf bij het CBR",
    points: [
      "Machtig de rijschool zodat wij examens kunnen reserveren.",
      "Vul de Eigen Verklaring (medische verklaring) in op mijncbr.nl.",
      "Plan zelf je theorie-examen via mijn CBR.",
      "Wij plannen samen jouw praktijkexamen op het juiste moment.",
    ],
  },
];

export const ImportantInfo = () => {
  return (
    <section id="belangrijke-informatie" className="section-pad bg-surface">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Belangrijke informatie</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Wat je moet weten <span className="text-gradient-primary">vóór je start</span>.
          </h2>
          <p className="mt-4 text-ink-soft">
            Naast de rijlessen zelf zijn er een aantal zaken die je vooraf goed moet regelen - van leeftijdsregels tot theorie en CBR-formaliteiten.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <article
              key={b.eyebrow}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <b.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{b.eyebrow}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">{b.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-ink-soft">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
