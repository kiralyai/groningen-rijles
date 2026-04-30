import { PageHero } from "@/components/site/PageHero";
import { Reviews } from "@/components/site/Reviews";
import { CTASection } from "@/components/site/CTASection";
import { useSEO } from "@/lib/seo";

const ReviewsPage = () => {
  useSEO({
    title: "Reviews & ervaringen | Ron Bakker Rijschool Groningen",
    description:
      "Lees ervaringen van leerlingen die hun rijbewijs haalden bij Ron Bakker Rijschool Groningen. Beoordeeld met 5,0 sterren.",
    path: "/reviews",
  });

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={
          <>
            Wat leerlingen <span className="text-primary">zeggen</span>.
          </>
        }
      />
      <Reviews />
      <CTASection title="Word jij de volgende geslaagde leerling?" />
    </>
  );
};

export default ReviewsPage;
