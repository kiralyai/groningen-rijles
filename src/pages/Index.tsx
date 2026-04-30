import { useEffect } from "react";
import { Hero } from "@/components/site/Hero";
import { WhyPreview } from "@/components/site/WhyPreview";
import { PackagesPreview } from "@/components/site/PackagesPreview";
import { ProcessPreview } from "@/components/site/ProcessPreview";
import { ReviewsPreview } from "@/components/site/ReviewsPreview";
import { CTASection } from "@/components/site/CTASection";
import { useSEO } from "@/lib/seo";

const Index = () => {
  useSEO({
    title: "Rijschool Groningen | Ron Bakker - Rijles & rijbewijs halen",
    description:
      "Rijschool in Groningen met persoonlijke begeleiding, vaste instructeur en 20+ jaar ervaring. Plan vandaag nog je proefles bij Ron Bakker Rijschool.",
    keywords:
      "rijschool Groningen, rijles Groningen, autorijles Groningen, rijbewijs halen Groningen, proefles rijschool Groningen",
    path: "/",
  });

  useEffect(() => {
    const ldId = "ld-localbusiness";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DrivingSchool",
      name: "Ron Bakker Rijschool",
      description:
        "Persoonlijke rijschool in Groningen. Rijles van één vaste, ervaren instructeur - al meer dan 20 jaar.",
      areaServed: "Groningen, Nederland",
      address: { "@type": "PostalAddress", addressLocality: "Groningen", addressCountry: "NL" },
      telephone: "+31612345678",
      email: "info@ron-bakker.nl",
      priceRange: "€€",
      openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "50" },
    });
  }, []);

  return (
    <>
      <Hero />
      <WhyPreview />
      <PackagesPreview />
      <ProcessPreview />
      <ReviewsPreview />
      <CTASection />
    </>
  );
};

export default Index;
