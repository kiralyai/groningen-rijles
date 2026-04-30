import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/lib/seo";
import { Lock } from "lucide-react";

const schema = z.object({
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  password: z.string().min(6, "Wachtwoord is minimaal 6 tekens").max(100),
});

const AdminLogin = () => {
  useSEO({
    title: "Admin login | Ron Bakker Rijschool",
    description: "Beheer reviews van Ron Bakker Rijschool.",
    path: "/admin/login",
  });

  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Als al ingelogd: door naar dashboard
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin/reviews", { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      email: String(fd.get("email") || ""),
      password: String(fd.get("password") || ""),
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
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password,
    });
    setLoading(false);
    if (error) {
      toast({
        title: "Inloggen mislukt",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    navigate("/admin/reviews", { replace: true });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-4 py-16">
      <div className="w-full max-w-md card-elevated p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-extrabold text-ink">Admin login</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Alleen voor de beheerder van Ron Bakker Rijschool.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
          <div>
            <Label htmlFor="email">E-mailadres</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="info@ron-bakker.nl"
              required
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="password">Wachtwoord</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
            {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password}</p>}
          </div>

          <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
            {loading ? "Bezig met inloggen..." : "Inloggen"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;
