import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const GOOGLE_REVIEWS_URL = "https://share.google/ywFWVgsWRqtWRsyT0";

const schema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(80, "Naam is te lang"),
  message: z
    .string()
    .trim()
    .min(10, "Schrijf een korte review (minimaal 10 tekens)")
    .max(1000, "Review is te lang"),
});

export const SubmitReview = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fe[i.path[0] as string] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section-pad bg-surface">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Reviews</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Deel jouw <span className="text-primary">ervaring</span>.
          </h2>
          <p className="mt-4 text-ink-soft text-lg">
            Klaar met je rijlessen? Laat anderen weten hoe jij het hebt ervaren.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="card-elevated p-6 sm:p-10">
            {submitted ? (
              <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">Bedankt voor je review!</h3>
                <p className="mt-2 text-ink-soft">
                  Wil je hem ook op Google delen? Dat helpt nieuwe leerlingen enorm.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-6">
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                    Schrijf een Google review <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <div>
                  <Label htmlFor="name">Naam <span className="text-primary">*</span></Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Je naam"
                    maxLength={80}
                    className="rounded-xl"
                    required
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Review <span className="text-primary">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Vertel kort hoe jij de rijlessen hebt ervaren..."
                    maxLength={1000}
                    className="rounded-xl"
                    required
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" variant="hero" size="lg" disabled={loading} className="flex-1">
                    {loading ? "Versturen..." : (<>Plaats je review <Send className="h-4 w-4" /></>)}
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                      Schrijf een Google review
                    </a>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
