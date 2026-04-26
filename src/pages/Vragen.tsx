import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { UsefulLinks } from "@/components/site/UsefulLinks";
import { CTASection } from "@/components/site/CTASection";
import { useSEO } from "@/lib/seo";

const Vragen = () => {
  useSEO({
    title: "Veelgestelde vragen | Ron Bakker Rijschool Groningen",
    description:
      "Antwoorden op de meest gestelde vragen over rijles in Groningen: aantal lessen, prijzen, ziekte, examen, betaling in termijnen en aanmelden.",
    path: "/veelgestelde-vragen",
  });

  return (
    <>
      <PageHero
        eyebrow="Meest gestelde vragen"
        title={<>Antwoorden op jouw <span className="text-primary">vragen</span>.</>}
        description="Hieronder vind je alle veelgestelde vragen over rijlessen, pakketten, examen en betaling. Onderaan vind je ook handige links naar het CBR, RDW en 2toDrive."
      />
      <FAQ />
      <UsefulLinks />
      <CTASection title="Nog een vraag over rijlessen?" description="Stuur een berichtje en je krijgt persoonlijk antwoord, meestal binnen 1 uur." />
    </>
  );
};

export default Vragen;
