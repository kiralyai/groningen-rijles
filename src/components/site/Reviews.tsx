import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marco Kregel",
    date: "08-10-2024",
    text: "Aardige man met goede humor, zeker aan te raden. Neemt goed de tijd voor dingen als je het niet helemaal beheerst. Vandaag in 1x geslaagd 👍🏼",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Joshua Franzé",
    date: "15-09-2024",
    text: "Top rijschool, aardige humoristische instructeur. Neemt de tijd voor je. In 1 keer geslaagd!",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Jordy Staal",
    date: "09-02-2023",
    text: "Fijne tijd gehad met Ron. Rustige man waar je lekker mee kan kletsen tijdens het rijlessen. Ondertussen leert hij je wel heel fijn het auto rijden. Zeker aan te raden!",
  },
  {
    name: "David Van den Berg",
    date: "17-11-2022",
    text: "Ron is een relaxte man die je goed kan leren rijden. Hij heeft geduld en geeft goede aanwijzingen waar je op moet letten. Er is ruimte om speciale verrichtingen extra te oefenen en je kan de lessen flexibel inplannen. De auto rijdt super lekker waardoor je snel vertrouwd bent met de auto waar je ook in gaat afrijden. In één keer geslaagd! En altijd goede muziek onderweg 😁",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Ilse Hoekzema",
    date: "05-10-2022",
    text: "Ik heb de rijlessen bij Ron altijd als zeer prettig ervaren, dat resulteerde in het feit dat ik in 1 keer geslaagd ben voor mijn praktijkexamen! 🚗",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Arman Jafari",
    date: "27-07-2022",
    text: "Het was een hele leuke ervaring en altijd gezellig. Alles is goed en duidelijk uitgelegd en daarom heb ik dankzij Ron mijn praktijkexamen in een keer gehaald. Zeker een aanrader.",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Elaine Dorcas",
    date: "01-07-2022",
    text: "Ik heb het ervaren als een hele leuke rijschool. Hij ging goed met mijn onzekerheden om. Ik heb niet alleen mijn rijbewijs gehad 🚘 maar ook een stukje zelfvertrouwen. Dankjewel Ron!",
  },
  {
    name: "Anitya Stijnen",
    date: "27-06-2022",
    text: "Hele goeie rijschool. Super leuke en leerzame lessen, en Ron heeft veel geduld voor je!",
  },
  {
    name: "Mahsa Najari",
    date: "31-05-2022",
    text: "Hele fijne rijschool! Leuke en leerzame lessen gehad! In 1x geslaagd vandaag voor mijn praktijk 🎉 Bedankt Ron.",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Naomi Hamersma",
    date: "18-05-2022",
    text: "Altijd erg fijne rijlessen gehad! Ron neemt de tijd voor je en stelt je op je gemak. Vandaag in 1 keer geslaagd! Ik raad deze rijschool iedereen aan.",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Quincy Huisman",
    date: "24-03-2022",
    text: "Lekker rijden op je gemak en zonder druk. Super leerzame gesprekken, echt een top gozer. Wegens omstandigheden toch geslaagd. Bedankt Ron.",
  },
  {
    name: "Niek Hartman",
    date: "03-03-2022",
    text: "Elke rijles wordt gekeken wat de verbeterpunten zijn en wat al goed gaat, hierdoor ben je een stuk zelfverzekerder om te rijden. Ik zou deze rijschool echt aanraden!",
  },
  {
    name: "Christel M.",
    date: "10-01-2022",
    text: "Goede rijschool, gezellige rijlessen! In 1x geslaagd!!",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Damian Schokker",
    date: "07-10-2021",
    text: "Goede rijschool, fijne instructeur, in 1 keer geslaagd!",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Mariam Hasami",
    date: "29-09-2021",
    text: "Ik zou iedereen Ron Bakker Rijschool aanbevelen! Goede lessen en tussendoor veel uitleg en goede persoonlijke begeleiding. Helemaal top. Ben erg tevreden!",
  },
  {
    name: "Anouk Van Huit",
    date: "28-09-2021",
    text: "Dit is echt een hele goeie rijschool. Ron neemt echt de tijd voor je en zorgt dat de lessen met veel plezier en geduld worden gegeven. Hele aardige en leerzame man.",
  },
  {
    name: "Julia Akkerman",
    date: "14-09-2021",
    text: "Ik vond dit een hele goede rijschool omdat Ron echt de tijd met je neemt om te oefenen waar je moeite mee hebt, hij is geduldig en legt alles goed en duidelijk uit!",
  },
  {
    name: "Safina Maat",
    date: "18-08-2021",
    text: "Hele fijne rijschool! Leuke en leerzame lessen gehad! In 1x geslaagd voor mijn praktijk.",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Sita Veltman",
    date: "17-08-2021",
    text: "Dikke 10 voor deze rijschool! Neemt tijd voor je en helpt je waar nodig. Leuke, leerzame en vooral gezellige rijlessen gehad. Vandaag in één keer geslaagd voor m'n rijexamen: had ik zonder Ron niet gekund! Dankjewel!",
    badge: "In 1 keer geslaagd",
  },
  {
    name: "Jimmy de Vries",
    date: "03-08-2021",
    text: "Ik heb hier rijlessen gehad en ben hier in 1x keer geslaagd. Ron Bakker is een hele goede rij-instructeur en neemt ook graag de tijd voor je. Echt een hele goede rijschool. De beste vind ik.",
    badge: "In 1 keer geslaagd",
  },
];

interface ReviewsProps {
  limit?: number;
}

export const Reviews = ({ limit }: ReviewsProps = {}) => {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section id="reviews" className="section-pad bg-ink text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-tight relative">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">Ervaringen van leerlingen</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Wat leerlingen <span className="text-primary">zeggen</span>.
            </h2>
            <p className="mt-3 text-white/70">Echte berichten uit het gastenboek. Veel leerlingen slagen in één keer.</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none">5,0 / 5</p>
              <p className="text-xs text-white/70">Gemiddeld cijfer</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <figure
              key={r.name + r.date}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/40" />
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              {r.badge && (
                <span className="mt-3 inline-flex w-fit items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-glow">
                  ✓ {r.badge}
                </span>
              )}
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/95">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-white/60">{r.date}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
