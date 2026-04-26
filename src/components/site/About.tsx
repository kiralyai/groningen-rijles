import groningen from "@/assets/groningen.jpg";

export const About = () => {
  return (
    <section id="over" className="section-pad bg-surface">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
              <img
                src={groningen}
                alt="Stad Groningen - het lesgebied van Ron Bakker Rijschool"
                width={1280}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover aspect-[5/4]"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-background px-5 py-4 shadow-[var(--shadow-card)] hidden sm:block">
              <p className="font-display text-2xl font-extrabold text-primary">20+</p>
              <p className="text-xs text-ink-soft">jaar in Groningen</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Over de rijschool</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
              Geboren en getogen in Groningen.<br />
              <span className="text-gradient-primary">Hier rijden, hier leren.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              Ron Bakker Rijschool is een kleine, persoonlijke rijschool in Groningen. Geen anonieme organisatie,
              maar één vaste instructeur die jouw naam, jouw tempo én jouw twijfels kent.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Met meer dan 20 jaar ervaring help ik leerlingen - van complete beginners tot mensen met faalangst -
              op een rustige, eerlijke manier hun rijbewijs te halen. Geen druk, wel duidelijkheid. Geen lopende band,
              wel échte aandacht.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Lesauto</dt>
                <dd className="mt-1 font-display text-lg font-bold text-ink">VW T-Cross</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Lesgebied</dt>
                <dd className="mt-1 font-display text-lg font-bold text-ink">Groningen & omstreken</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Erkenning</dt>
                <dd className="mt-1 font-display text-lg font-bold text-ink">CBR · 2347H8</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Aanpak</dt>
                <dd className="mt-1 font-display text-lg font-bold text-ink">Rustig & persoonlijk</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
