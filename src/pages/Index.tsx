import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Packages } from "@/components/site/Packages";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  useEffect(() => {
    document.title = "Rijschool Groningen | Ron Bakker — Rijles & rijbewijs halen";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Rijschool in Groningen met persoonlijke begeleiding, vaste instructeur en 20+ jaar ervaring. Plan vandaag nog je proefles bij Ron Bakker Rijschool."
    );
    setMeta("keywords", "rijschool Groningen, rijles Groningen, autorijles Groningen, rijbewijs halen Groningen, proefles rijschool Groningen");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    document.documentElement.lang = "nl";

    // JSON-LD LocalBusiness
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
        "Persoonlijke rijschool in Groningen. Rijles van één vaste, ervaren instructeur — al meer dan 20 jaar.",
      areaServed: "Groningen, Nederland",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Groningen",
        addressCountry: "NL",
      },
      telephone: "+31612345678",
      email: "info@ronbakkerrijschool.nl",
      priceRange: "€€",
      openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Packages />
        <About />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
