import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

const faqs = [
  {
    q: "Hoeveel rijlessen heb ik gemiddeld nodig?",
    a: "Het landelijk gemiddelde ligt rond de 35 tot 40 lessen. Tijdens de proefles maak ik samen met jou een realistische inschatting op basis van je voorkennis en leerstijl.",
  },
  {
    q: "Wat kost een proefles?",
    a: "Een proefles van 60 minuten kost € 49 en is volledig vrijblijvend. Je ervaart direct hoe het rijden in mijn lesauto bevalt en hoe ik lesgeef.",
  },
  {
    q: "Kan ik bij faalangst toch lessen volgen?",
    a: "Absoluut. Veel van mijn leerlingen kwamen juist vanwege faalangst. Ik werk in een rustig tempo, met duidelijke uitleg en zonder druk. Stap voor stap bouwen we vertrouwen op.",
  },
  {
    q: "Krijg ik altijd dezelfde instructeur?",
    a: "Ja, je rijdt altijd met mij: Ron. Eén vast vertrouwd gezicht, één lijn in de lessen, en lessen die naadloos op elkaar aansluiten.",
  },
  {
    q: "In welke auto rijd ik les?",
    a: "Je rijdt in een moderne Volkswagen T-Cross 1.0 TSI: overzichtelijk, comfortabel en uitgerust met alle moderne veiligheidssystemen.",
  },
  {
    q: "Waar wordt er lesgegeven?",
    a: "Het lesgebied is Groningen en omstreken. We oefenen in het stadsverkeer (centrum, rotondes, drukke kruispunten), op de A7 en A28, en alle bijzondere verrichtingen zoals parkeren en hellingproef.",
  },
  {
    q: "Als ik een keer niet kan of ziek ben, moet ik die les dan betalen?",
    a: "Nee, als je ziek bent dan is dat overmacht, daar kun je niks aan doen. Blijf in dat geval thuis om besmetting van anderen te voorkomen.",
  },
  {
    q: "Als de instructeur ziek is, wat gebeurt er dan?",
    a: "Dan houd je die les tegoed en worden er geen kosten in rekening gebracht.",
  },
  {
    q: "Is het pakket dat ik gekocht heb onbeperkt houdbaar?",
    a: "Nee. Je hebt alle tijd om je rijbewijs te halen, maximaal 3 jaar. Maar als je een jaar niet meer hebt gelest, gaan we ervan uit dat je gestopt bent. Voor leerlingen die in dat jaar wél wekelijks hebben gelest, is deze regel NIET van toepassing.",
  },
  {
    q: "Als ik een medische aandoening heb of medicijnen slik, mag ik dan autorijden?",
    a: "Als je een medische aandoening hebt, kun je dat bij het CBR melden via de medische verklaring die elke leerling moet invullen. Je wordt dan uitgenodigd om een rijtest te doen bij het CBR.",
  },
  {
    q: "Zijn er kosten voor de rijtest?",
    a: "Aan de rijtest zelf zijn geen kosten verbonden, die is gratis. De instructeur brengt wel een uur les in rekening in verband met het gebruik van de auto.",
  },
  {
    q: "Wanneer kan ik examen doen?",
    a: "Als je examen wilt doen, moet je: 1) het theorie-examen hebben behaald (geen 1-daagse cursus); 2) de minimale leeftijd van 17 jaar hebben bereikt. De instructeur bepaalt in overleg met jou wanneer je echt klaar bent voor het praktijkexamen.",
  },
  {
    q: "Als ik een botsing krijg tijdens de rijles, ben ik dan aansprakelijk?",
    a: "Nee, tijdens de rijles is de instructeur of rijschool aansprakelijk. We zijn daarvoor verzekerd.",
  },
  {
    q: "Kan de instructeur leerlingen uitsluiten voor rijles of examen?",
    a: "Ja, dat kan in uiterste gevallen. Bijvoorbeeld als de leerling niet gemotiveerd is om iets te leren, of als de leerling niet doet wat er gezegd wordt of totaal niet wil luisteren.",
  },
  {
    q: "Krijg ik geld terug als ik wil stoppen met de rijopleiding?",
    a: "We gaan ervan uit dat je de opleiding afmaakt waar je aan begonnen bent. We kunnen geen geld teruggeven, want er zijn kosten gemaakt.",
  },
  {
    q: "Kan ik mijn pakket in termijnen betalen?",
    a: "Ja, dat kan. Je kunt je rijlespakket in 2 maandelijkse termijnen betalen. Er wordt dan wel per termijn € 50,00 in rekening gebracht.",
  },
  {
    q: "Hoe kan ik me aanmelden?",
    a: "Het makkelijkst via het contactformulier op deze website of een berichtje via WhatsApp. Meestal reageer ik binnen 1 uur.",
  },
];

interface FAQProps {
  compact?: boolean;
}

export const FAQ = ({ compact = false }: FAQProps) => {
  const list = compact ? faqs.slice(0, 4) : faqs;
  return (
    <section id="faq" className="section-pad">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Veelgestelde vragen</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
              Antwoorden op de meest gestelde <span className="text-gradient-primary">vragen</span>.
            </h2>
            <p className="mt-4 text-ink-soft">
              Staat jouw vraag er niet tussen? Stuur me gerust even een berichtje, ik help je graag verder.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <Link to="/contact">Stel je vraag</Link>
              </Button>
              <Button asChild variant="whatsapp">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Vraag via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-3">
              {list.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/50 data-[state=open]:shadow-[var(--shadow-soft)]"
                >
                  <AccordionTrigger className="text-left font-display text-base font-bold text-ink hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink-soft leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
