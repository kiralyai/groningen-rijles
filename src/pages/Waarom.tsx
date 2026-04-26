import { PageHero } from "@/components/site/PageHero";
import { WhyChoose } from "@/components/site/WhyChoose";
import { About } from "@/components/site/About";
import { CTASection } from "@/components/site/CTASection";
import { useSEO } from "@/lib/seo";

const Waarom = () => {
  useSEO({
    title: "Waarom kiezen voor Ron Bakker Rijschool Groningen | Persoonlijke rijles",
    description:
      "Eén vaste instructeur, 20+ jaar ervaring en rustige uitleg. Ontdek waarom leerlingen in Groningen kiezen voor Ron Bakker Rijschool.",
    path: "/waarom-wij",
  });

  return (
    <>
      <PageHero
        eyebrow="Waarom wij"
        title={<>Persoonlijk. Rustig. <span className="text-primary">Lokaal in Groningen.</span></>}
        description="Geen anonieme rijschool met wisselende instructeurs. Bij Ron Bakker krijg je een vaste, ervaren rij-instructeur die jouw naam, jouw tempo én jouw twijfels kent."
      />
      <WhyChoose />
      <About />
      <CTASection title="Klaar voor je eerste rijles?" />
    </>
  );
};

export default Waarom;
