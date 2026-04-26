import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { useSEO } from "@/lib/seo";

const Vragen = () => {
  useSEO({
    title: "Veelgestelde vragen | Ron Bakker Rijschool Groningen",
    description:
      "Antwoorden op de meest gestelde vragen over rijles in Groningen: aantal lessen, prijzen, faalangst, lesauto en aanmelden.",
    path: "/veelgestelde-vragen",
  });

  return (
    <>
      <PageHero
        eyebrow="Meest gestelde vragen"
        title={<>Antwoorden op jouw <span className="text-primary">vragen</span>.</>}
        description="Hieronder vind je de meest gestelde vragen over rijlessen, pakketten en het traject. Staat jouw vraag er niet tussen? Neem gerust contact op."
      />
      <FAQ />
      <CTASection title="Nog een vraag over rijlessen?" description="Stuur een berichtje en je krijgt persoonlijk antwoord — meestal binnen 1 uur." />
    </>
  );
};

export default Vragen;
