import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Waarom wij", to: "/waarom-wij" },
  { label: "Tarieven", to: "/rijlessen-en-tarieven" },
  { label: "Hoe het werkt", to: "/hoe-het-werkt" },
  { label: "FAQ", to: "/veelgestelde-vragen" },
  { label: "Reviews", to: "/reviews" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || location.pathname !== "/"
          ? "bg-background/85 backdrop-blur-lg shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-transparent"
      )}
    >
      <div className="container-tight flex h-14 items-center justify-between md:h-16">
        <Logo />

        <nav aria-label="Hoofdmenu" className="hidden lg:flex items-center gap-0.5">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-ink-soft"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" /> {CONTACT.phoneDisplay}
          </a>
          <Button asChild size="sm" variant="hero" className="h-9 px-4 text-sm">
            <Link to="/contact">Plan een proefles</Link>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
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
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-base font-medium",
                    isActive ? "text-primary" : "text-ink"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button asChild className="mt-3" variant="hero">
              <Link to="/contact">Plan een proefles</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
