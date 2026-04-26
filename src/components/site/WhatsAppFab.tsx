import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export const WhatsAppFab = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Stuur een WhatsApp-bericht"
    className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-3 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-[0_10px_30px_-10px_hsl(var(--whatsapp)/0.6)] transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_hsl(var(--whatsapp)/0.7)] sm:bottom-6 sm:right-6"
  >
    <span className="relative flex h-10 w-10 items-center justify-center">
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp-foreground/30" />
      <MessageCircle className="relative h-6 w-6" />
    </span>
    <span className="hidden sm:inline pr-1 text-sm font-semibold">Stuur een WhatsApp</span>
  </a>
);
