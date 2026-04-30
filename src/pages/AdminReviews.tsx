import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/lib/seo";
import { Check, Trash2, LogOut, Inbox, Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  message: string;
  status: string;
  created_at: string;
}

const AdminReviews = () => {
  useSEO({
    title: "Reviews beheren | Ron Bakker Rijschool",
    description: "Beheer en goedkeur ingestuurde reviews.",
    path: "/admin/reviews",
  });

  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [tab, setTab] = useState<"pending" | "approved">("pending");

  const loadAdminReviews = async () => {
    const { data, error } = await supabase.functions.invoke<{ reviews: Review[] }>("admin-reviews");

    if (error) {
      const message = error.message.toLowerCase();
      if (message.includes("403") || message.includes("geen adminrechten")) {
        toast({
          title: "Geen toegang",
          description: "Dit account heeft geen admin-rechten.",
          variant: "destructive",
        });
        await supabase.auth.signOut();
        navigate("/admin/login", { replace: true });
        return;
      }

      toast({
        title: "Laden mislukt",
        description: "De adminpagina kon niet worden geladen. Probeer het opnieuw.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    setReviews(data?.reviews ?? []);
    setIsAdmin(true);
    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      if (!mounted) return;

      await loadAdminReviews();
    };
    init();

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/admin/login", { replace: true });
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const approve = async (id: string) => {
    const { error } = await supabase.from("reviews").update({ status: "approved" }).eq("id", id);
    if (error) {
      toast({ title: "Goedkeuren mislukt", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Review goedgekeurd", description: "De review staat nu op de website." });
    loadAdminReviews();
  };

  const remove = async (id: string) => {
    if (!confirm("Weet je zeker dat je deze review wil verwijderen?")) return;
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (error) {
      toast({ title: "Verwijderen mislukt", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Review verwijderd" });
    loadAdminReviews();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-surface">
        <p className="text-ink-soft">Laden...</p>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-surface px-4">
        <div className="card-elevated w-full max-w-md p-6 text-center">
          <h1 className="font-display text-xl font-bold text-ink">Admincontrole mislukt</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Je bent wel ingelogd, maar de controle op adminrechten gaf tijdelijk geen antwoord.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button variant="hero" onClick={() => window.location.reload()}>
              Opnieuw proberen
            </Button>
            <Button variant="outline" onClick={logout}>
              Uitloggen
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const filtered = reviews.filter((r) => r.status === tab);
  const pendingCount = reviews.filter((r) => r.status === "pending").length;
  const approvedCount = reviews.filter((r) => r.status === "approved").length;

  return (
    <main className="min-h-screen bg-surface">
      <header className="border-b border-border bg-background">
        <div className="container-tight flex items-center justify-between py-4">
          <div>
            <h1 className="font-display text-xl font-bold text-ink">Reviews beheren</h1>
            <p className="text-xs text-ink-soft">Ron Bakker Rijschool</p>
          </div>
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="h-4 w-4" /> Uitloggen
          </Button>
        </div>
      </header>

      <div className="container-tight py-8">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("pending")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === "pending"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-ink-soft hover:bg-muted"
            }`}
          >
            Wachtend op goedkeuring ({pendingCount})
          </button>
          <button
            onClick={() => setTab("approved")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === "approved"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-ink-soft hover:bg-muted"
            }`}
          >
            Goedgekeurd ({approvedCount})
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="card-elevated p-12 text-center">
              <Inbox className="mx-auto h-10 w-10 text-ink-soft" />
              <p className="mt-3 text-ink-soft">
                {tab === "pending" ? "Geen nieuwe reviews om te beoordelen." : "Nog geen goedgekeurde reviews."}
              </p>
            </div>
          ) : (
            filtered.map((r) => (
              <article key={r.id} className="card-elevated p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-ink">{r.name}</h3>
                    <p className="text-xs text-ink-soft">
                      {new Date(r.created_at).toLocaleString("nl-NL")}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {r.status === "pending" && (
                      <Button variant="hero" size="sm" onClick={() => approve(r.id)}>
                        <Check className="h-4 w-4" /> Goedkeuren
                      </Button>
                    )}
                    <Button variant="outline" size="sm" onClick={() => remove(r.id)}>
                      <Trash2 className="h-4 w-4" /> Verwijderen
                    </Button>
                  </div>
                </div>
                <p className="mt-4 text-ink leading-relaxed whitespace-pre-wrap">{r.message}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminReviews;
