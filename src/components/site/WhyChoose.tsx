import { Award, HeartHandshake, UserCheck, MessageCircle, Car, MapPinned } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Meer dan 20 jaar ervaring",
    text: "Twee decennia rijles geven in Groningen - je leert van iemand die de stad door en door kent.",
  },
  {
    icon: HeartHandshake,
    title: "Ideaal bij faalangst",
    text: "Rustige sfeer, geen druk. We bouwen stap voor stap aan jouw zelfvertrouwen achter het stuur.",
  },
  {
    icon: UserCheck,
    title: "Eén vaste instructeur",
    text: "Altijd hetzelfde vertrouwde gezicht naast je. Geen wisselende stijlen of nieuwe afspraken.",
  },
  {
    icon: MessageCircle,
    title: "Duidelijke, rustige uitleg",
    text: "Geen gehaaste theorie. Je krijgt de tijd om alles écht te begrijpen - op jouw tempo.",
  },
  {
    icon: Car,
    title: "Moderne VW T-Cross",
    text: "Comfortabel, overzichtelijk en veilig. Een fijne auto om in te leren rijden.",
  },
  {
    icon: MapPinned,
    title: "Praktijkgerichte routes",
    text: "Stadscentrum, A7 & A28, rotondes en bijzondere verrichtingen - alles wat je écht tegenkomt.",
  },
];

export const WhyChoose = () => {
  return (
    <section id="waarom" className="section-pad bg-surface">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hoe Ron lesgeeft</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Een aanpak die <span className="text-gradient-primary">echt blijft hangen</span>.
          </h2>
          <p className="mt-4 text-ink-soft text-lg leading-relaxed">
            Iedere leerling leert anders. Daarom kijkt Ron eerst waar jij staat en bouwt de lessen daaromheen op.
            Korte en duidelijke instructies, daarna direct zelf doen, en na afloop samen kort terugblikken op wat goed
            ging en wat de volgende keer beter kan.
          </p>
          <p className="mt-4 text-ink-soft text-lg leading-relaxed">
            Geen standaard programma uit een map, maar lessen die meebewegen met jouw groei. Ben je onzeker of heb je
            faalangst? Dan gaan we rustiger en kleiner beginnen. Pak je het snel op? Dan bouwen we het tempo en de
            uitdaging op. Zo werk je elke les aan iets wat voor jou nu het belangrijkst is.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
