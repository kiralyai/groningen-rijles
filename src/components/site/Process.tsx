const steps = [
  {
    n: "01",
    title: "Vrijblijvende proefles",
    text: "We maken kennis, je rijdt 60 minuten en ervaart direct mijn manier van lesgeven.",
  },
  {
    n: "02",
    title: "Persoonlijk lesplan",
    text: "Op basis van jouw niveau en doelen stellen we samen een realistisch traject op.",
  },
  {
    n: "03",
    title: "Rijlessen op jouw tempo",
    text: "Vaste instructeur, vaste tijden. Geen druk, wel duidelijke voortgang per les.",
  },
  {
    n: "04",
    title: "Tussentijdse toets (TTT)",
    text: "Een veilige test bij het CBR — vaak met vrijstellingen voor het echte examen.",
  },
  {
    n: "05",
    title: "Praktijkexamen",
    text: "Goed voorbereid het examen in. We rijden de ochtend van het examen rustig in.",
  },
  {
    n: "06",
    title: "Rijbewijs in handen",
    text: "Geslaagd! Tijd om zelfstandig de weg op te gaan — met vertrouwen.",
  },
];

export const Process = () => {
  return (
    <section id="proces" className="section-pad">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hoe het werkt</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Van eerste proefles tot rijbewijs in <span className="text-gradient-primary">6 stappen</span>.
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-5xl font-extrabold text-primary/20 transition-colors group-hover:text-primary/40">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
