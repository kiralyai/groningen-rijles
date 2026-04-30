import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import g1 from "@/assets/geslaagd/g1.jpeg";
import g2 from "@/assets/geslaagd/g2.jpeg";
import g3 from "@/assets/geslaagd/g3.jpeg";
import g4 from "@/assets/geslaagd/g4.jpeg";
import g5 from "@/assets/geslaagd/g5.jpeg";
import g6 from "@/assets/geslaagd/g6.jpeg";
import g7 from "@/assets/geslaagd/g7.jpeg";
import g8 from "@/assets/geslaagd/g8.jpeg";
import g9 from "@/assets/geslaagd/g9.jpeg";

const photos = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

export const PassedSlideshow = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="section-pad bg-surface">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Geslaagden</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Geslaagd? <span className="text-primary">Gefeliciteerd!</span>
          </h2>
          <p className="mt-4 text-ink-soft text-lg">Deze leerlingen gingen je voor.</p>
        </div>

        <div className="mt-10 relative">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {photos.map((src, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-3/4 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                    <img
                      src={src}
                      alt={`Geslaagde leerling ${i + 1} bij Ron Bakker Rijschool Groningen`}
                      loading="lazy"
                      className="h-72 w-full object-cover sm:h-80 md:h-96 transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
