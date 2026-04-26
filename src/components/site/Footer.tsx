import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { MessageCircle, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-ink-soft leading-relaxed">
              Persoonlijke rijschool in Groningen. Eén vaste instructeur, rustige uitleg, en meer dan 20 jaar ervaring.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-primary-foreground transition-transform hover:scale-110"
                aria-label="Bellen"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">Navigatie</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><Link className="hover:text-primary" to="/waarom-wij">Waarom wij</Link></li>
              <li><Link className="hover:text-primary" to="/rijlessen-en-tarieven">Rijlessen en Tarieven</Link></li>
              <li><Link className="hover:text-primary" to="/hoe-het-werkt">Hoe het werkt</Link></li>
              <li><Link className="hover:text-primary" to="/veelgestelde-vragen">Veelgestelde vragen</Link></li>
              <li><Link className="hover:text-primary" to="/reviews">Reviews</Link></li>
              <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><a href={`tel:${CONTACT.phoneTel}`} className="hover:text-primary">{CONTACT.phoneDisplay}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-primary">{CONTACT.email}</a></li>
              <li>{CONTACT.address}</li>
              <li className="pt-2">
                <span className="block">{CONTACT.hours.weekdays}</span>
                <span className="block">{CONTACT.hours.saturday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-ink-soft sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {CONTACT.name} · Alle rechten voorbehouden</p>
          <p>KvK {CONTACT.kvk} · Rijschoolnummer {CONTACT.rijschoolnummer}</p>
        </div>
      </div>

      <div className="bg-primary py-3">
        <div className="container-tight text-center text-sm font-semibold text-primary-foreground">
          Rijschool Groningen · Rijles Groningen · Rijbewijs halen Groningen · Proefles aanvragen
        </div>
      </div>
    </footer>
  );
};
