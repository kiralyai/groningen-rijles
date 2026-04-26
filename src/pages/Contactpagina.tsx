import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";
import { useSEO } from "@/lib/seo";

const Contactpagina = () => {
  useSEO({
    title: "Contact & proefles aanvragen | Ron Bakker Rijschool Groningen",
    description:
      "Plan een vrijblijvende proefles bij Ron Bakker Rijschool Groningen. Contact via formulier, telefoon of WhatsApp. Snelle reactie gegarandeerd.",
    path: "/contact",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Plan je <span className="text-primary">proefles</span>.</>}
        description="Vul het formulier in of stuur een berichtje via WhatsApp. Ik neem zo snel mogelijk contact met je op — meestal binnen 1 uur."
      />
      <Contact />
    </>
  );
};

export default Contactpagina;
