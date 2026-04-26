import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { ImportantInfo } from "@/components/site/ImportantInfo";
import { CTASection } from "@/components/site/CTASection";
import { useSEO } from "@/lib/seo";
import { Car, GraduationCap, Award } from "lucide-react";

const phases = [
  {
    icon: Car,
    title: "1. De proefles",
    text: "Een vrijblijvende rijles van 60 minuten. We maken kennis, jij ervaart hoe ik lesgeef, en samen bekijken we waar je staat. Ideaal als startpunt - je zit nergens aan vast.",
  },
  {
    icon: GraduationCap,
    title: "2. Het lestraject",
    text: "Na de proefles maken we samen een persoonlijk lesplan. Vaste instructeur, vaste tijden en duidelijke voortgang per les. We rijden in stadsverkeer, op de snelweg en oefenen alle bijzondere verrichtingen - alles op jouw tempo.",
  },
  {
    icon: Award,
    title: "3. Het examen",
    text: "Wanneer je er klaar voor bent gaan we voor het CBR-examen. We rijden de ochtend van het examen rustig in, en ik zorg dat je goed voorbereid en met vertrouwen het examen ingaat.",
  },
];

const HoeHetWerkt = () => {
  useSEO({
    title: "Hoe het werkt | Van proefles tot rijbewijs | Ron Bakker Rijschool",
    description:
      "Stap voor stap van proefles naar rijbewijs. Bekijk hoe het traject bij Ron Bakker Rijschool Groningen verloopt - duidelijk en zonder verrassingen.",
    path: "/hoe-het-werkt",
  });

  return (
    <>
      <PageHero
        eyebrow="Hoe het werkt"
        title={<>Van proefles tot <span className="text-primary">rijbewijs</span>.</>}
        description="Een duidelijk traject in drie fases. Geen verrassingen - wel een persoonlijke aanpak van begin tot eind."
      />

      <section className="section-pad">
        <div className="container-tight grid gap-6 md:grid-cols-3">
          {phases.map((p) => (
            <article key={p.title} className="rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <p.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h2>
              <p className="mt-3 text-ink-soft leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <ImportantInfo />
      <CTASection title="Klaar voor stap 1: je proefles?" />
    </>
  );
};

export default HoeHetWerkt;
