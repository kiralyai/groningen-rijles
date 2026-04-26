import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export const CTASection = ({
  title = "Klaar om te starten met je rijbewijs?",
  description = "Plan een vrijblijvende proefles en ervaar zelf hoe rustig en duidelijk de lessen verlopen.",
}: CTASectionProps) => (
  <section className="section-pad bg-ink text-primary-foreground relative overflow-hidden">
    <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
    <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
    <div className="container-tight relative text-center">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
        {title.split(" ").slice(0, -2).join(" ")}{" "}
        <span className="text-primary">{title.split(" ").slice(-2).join(" ")}</span>
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="xl" variant="hero">
          <Link to="/contact">
            Plan een proefles <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="xl" variant="whatsapp">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> Vraag via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);
