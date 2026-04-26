import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { CONTACT } from "@/lib/contact";

const NAV = [
  { label: "Waarom wij", href: "#waarom" },
  { label: "Pakketten", href: "#pakketten" },
  { label: "Hoe het werkt", href: "#proces" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-[0_1px_0_hsl(var(--border))]" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav aria-label="Hoofdmenu" className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-muted hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary"
          >
            <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
          </a>
          <Button asChild size="sm" variant="hero">
            <a href="#contact">Plan een proefles</a>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-tight flex flex-col py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink"
              >
                {n.label}
              </a>
            ))}
            <Button asChild className="mt-3" variant="hero">
              <a href="#contact" onClick={() => setOpen(false)}>Plan een proefles</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
