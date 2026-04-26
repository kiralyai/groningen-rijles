import { PageHero } from "@/components/site/PageHero";
import { Packages } from "@/components/site/Packages";
import { ExtraPackages } from "@/components/site/ExtraPackages";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { useSEO } from "@/lib/seo";

const Tarieven = () => {
  useSEO({
    title: "Rijlessen en Tarieven | Ron Bakker Rijschool Groningen",
    description:
      "Bekijk alle rijlespakketten en tarieven van Ron Bakker Rijschool Groningen. Complete pakketten, aanvulpakketten, losse rijles en theorie. Eerlijke prijzen.",
    keywords: "rijles Groningen prijs, rijlespakket Groningen, tarieven rijschool Groningen",
    path: "/rijlessen-en-tarieven",
  });

  return (
    <>
      <PageHero
        eyebrow="Rijlessen en Tarieven"
        title={<>Tarieven en <span className="text-primary italic">rijlespakketten</span></>}
        description="Bij Ron Bakker Rijschool in Groningen weet je altijd precies waar je aan toe bent. Geen verrassingen, geen kleine lettertjes - gewoon duidelijke tarieven en complete pakketten waarmee je goed voorbereid naar je praktijkexamen gaat."
      />

      <section className="section-pad bg-surface">
        <div className="container-tight">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Mijn <span className="text-primary">manier van lesgeven</span>
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Het CBR adviseert tegenwoordig om voldoende lessen te nemen. Het verkeer is drukker en de examens zijn in de loop der jaren moeilijker geworden. Daarom bied ik verschillende pakketten aan, zodat je altijd een keuze kunt maken die past bij jouw niveau en leertempo.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Mijn lessen zijn altijd afgestemd op jouw niveau. Ik zorg voor een ontspannen sfeer, duidelijke uitleg en overzicht. We bouwen stap voor stap aan jouw rijvaardigheid, zodat je precies weet waar je aan toe bent.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm font-semibold text-primary">
              <li>• Geduldige begeleiding</li>
              <li>• Rustige uitleg</li>
              <li>• Stap voor stap begeleiding</li>
              <li>• Heldere uitleg en duidelijke doelen</li>
              <li>• Lessen volgens Het Nieuwe Rijden</li>
              <li>• Ontspannen sfeer</li>
              <li>• Moderne en comfortabele lesauto</li>
              <li>• Focus op zelfvertrouwen</li>
            </ul>
          </div>
        </div>
      </section>

      <Packages />
      <ExtraPackages />
      <FAQ compact />
      <CTASection title="Welk pakket past bij jou?" description="Twijfel je nog? Plan een proefles en we bespreken samen wat het beste aansluit." />
    </>
  );
};

export default Tarieven;
