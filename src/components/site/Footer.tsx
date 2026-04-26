import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { MessageCircle, Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Waarom wij", to: "/waarom-wij" },
  { label: "Rijlessen en Tarieven", to: "/rijlessen-en-tarieven" },
  { label: "Hoe het werkt", to: "/hoe-het-werkt" },
  { label: "Veelgestelde vragen", to: "/veelgestelde-vragen" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink text-primary-foreground">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-tight py-10 md:py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
              Klaar om te starten met <span className="text-primary">rijlessen</span>?
            </h3>
            <p className="mt-2 text-sm text-white/70">Plan vrijblijvend je proefles - meestal binnen 1 uur reactie.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Plan een proefles <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative container-tight py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
              Persoonlijke rijschool in Groningen. Eén vaste instructeur, rustige uitleg en meer dan 20 jaar ervaring.
            </p>
            <div className="mt-6 flex gap-2">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Navigatie</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link className="text-white/80 transition-colors hover:text-primary" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-white/80">
                  {CONTACT.street}<br />{CONTACT.postal}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${CONTACT.phoneTel}`} className="text-white/80 hover:text-primary">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="text-white/80 hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-white/80">
                  {CONTACT.hours.weekdays}<br />{CONTACT.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bedrijfsgegevens */}
        <div className="mt-12 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-white/70 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold uppercase tracking-wider text-white/50">Rijschoolnummer</p>
            <p className="mt-1 text-white">{CONTACT.rijschoolnummer}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-white/50">KvK</p>
            <p className="mt-1 text-white">{CONTACT.kvk}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-white/50">BTW</p>
            <p className="mt-1 text-white">{CONTACT.btw}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-white/50">IBAN</p>
            <p className="mt-1 text-white">{CONTACT.iban}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {CONTACT.name} · Alle rechten voorbehouden</p>
          <p>Rijschool Groningen · Rijles Groningen · Rijbewijs halen Groningen</p>
        </div>
      </div>
    </footer>
  );
};
