import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, CONTACT } from "@/lib/contact";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export const CTASection = ({
  title = "Klaar om te starten met je rijbewijs?",
  description = "Plan een vrijblijvende proefles en ervaar zelf hoe rustig en duidelijk de lessen verlopen.",
}: CTASectionProps) => (
  <section className="section-pad">
    <div className="container-tight">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 sm:p-14 text-center shadow-[var(--shadow-card)]">
        <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Plan je proefles</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-primary">{title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-ink-soft">{description}</p>
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
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-primary"
          >
            <Phone className="h-4 w-4" /> Liever bellen? {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  </section>
);
