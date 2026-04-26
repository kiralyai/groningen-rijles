import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, whatsappLink } from "@/lib/contact";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(100, "Naam is te lang"),
  phone: z
    .string()
    .trim()
    .min(6, "Vul een geldig telefoonnummer in")
    .max(20, "Telefoonnummer is te lang")
    .regex(/^[0-9+\-\s()]+$/, "Alleen cijfers en + - ( ) toegestaan"),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255, "E-mailadres is te lang"),
  message: z.string().trim().min(5, "Schrijf een kort bericht").max(1000, "Bericht is te lang"),
});

export const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => {
        if (iss.path[0]) fieldErrors[iss.path[0] as string] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate submission — connect to email/CRM/Sheets here
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
    toast({
      title: "Bedankt voor je aanvraag!",
      description: "Ik neem zo snel mogelijk contact met je op — meestal binnen 1 uur.",
    });
  };

  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="card-elevated p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Plan een proefles</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-ink">
                Start vandaag nog met je rijbewijs.
              </h2>
              <p className="mt-3 text-ink-soft">
                Vul het formulier in en je ontvangt snel een persoonlijk antwoord. Geen verplichtingen.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">Bedankt!</h3>
                  <p className="mt-2 text-ink-soft">
                    Je aanvraag is verstuurd. Ik neem zo snel mogelijk contact met je op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Naam</Label>
                      <Input id="name" name="name" autoComplete="name" placeholder="Je voornaam" maxLength={100} required />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" maxLength={20} required />
                      {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">E-mailadres</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="naam@email.nl" maxLength={255} required />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Vertel kort waar je staat: beginner, ervaring, voorkeur dagdelen..."
                      maxLength={1000}
                      required
                    />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" variant="hero" size="lg" disabled={loading} className="flex-1">
                      {loading ? "Versturen..." : (<>Plan een proefles <Send className="h-4 w-4" /></>)}
                    </Button>
                    <Button asChild variant="whatsapp" size="lg" className="flex-1">
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" /> Direct via WhatsApp
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-ink-soft">
                    Snelle reactie via WhatsApp mogelijk · Je gegevens worden alleen gebruikt om je terug te bellen.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contactgegevens</p>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-ink">
              Liever direct contact?
            </h3>
            <p className="mt-3 text-ink-soft">
              Bel, mail of stuur een berichtje via WhatsApp — je krijgt altijd persoonlijk antwoord.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactRow icon={MessageCircle} label="WhatsApp" value="Stuur een berichtje" href={whatsappLink()} highlight />
              <ContactRow icon={Phone} label="Telefoon" value={CONTACT.phoneDisplay} href={`tel:${CONTACT.phoneTel}`} />
              <ContactRow icon={Mail} label="E-mail" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
              <ContactRow icon={MapPin} label="Lesgebied" value={`${CONTACT.city} & omstreken`} />
              <ContactRow
                icon={Clock}
                label="Bereikbaarheid"
                value={`${CONTACT.hours.weekdays} · ${CONTACT.hours.saturday}`}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({
  icon: Icon,
  label,
  value,
  href,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) => {
  const inner = (
    <div className="flex items-start gap-4">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          highlight ? "bg-whatsapp text-whatsapp-foreground" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{label}</p>
        <p className="text-base font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block rounded-2xl border border-transparent p-2 -m-2 transition-colors hover:border-border hover:bg-card"
      >
        {inner}
      </a>
    </li>
  ) : (
    <li className="p-2 -m-2">{inner}</li>
  );
};
