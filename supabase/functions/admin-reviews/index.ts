import { createClient } from "npm:@supabase/supabase-js@2";
import { createRemoteJWKSet, jwtVerify } from "npm:jose@5";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const publishableKeys = Deno.env.get("SUPABASE_PUBLISHABLE_KEYS");
const secretKeys = Deno.env.get("SUPABASE_SECRET_KEYS");

const supabasePublishableKey = publishableKeys
  ? Object.values(JSON.parse(publishableKeys) as Record<string, string>)[0] ?? ""
  : Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY") ?? "";

const serviceRoleKey = secretKeys
  ? Object.values(JSON.parse(secretKeys) as Record<string, string>)[0] ?? ""
  : Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const remoteJwks = supabaseUrl
  ? createRemoteJWKSet(new URL(`${supabaseUrl}/auth/v1/.well-known/jwks.json`))
  : null;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Niet ingelogd" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const token = authHeader.replace(/^Bearer\s+/i, "").trim();
    if (!token || !remoteJwks) {
      return new Response(JSON.stringify({ error: "Ongeldige sessie" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { payload } = await jwtVerify(token, remoteJwks, {
      issuer: `${supabaseUrl}/auth/v1`,
      audience: "authenticated",
    });

    const userId = typeof payload.sub === "string" ? payload.sub : null;
    if (!userId) {
      return new Response(JSON.stringify({ error: "Ongeldige sessie" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userClient = createClient(supabaseUrl, supabasePublishableKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const {
      data: { user },
      error: userError,
    } = await userClient.auth.getUser(token);

    if (userError || !user || user.id !== userId) {
      return new Response(JSON.stringify({ error: "Ongeldige sessie" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: roleRow, error: roleError } = await adminClient
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();

    if (roleError) throw roleError;
    if (!roleRow) {
      return new Response(JSON.stringify({ error: "Geen adminrechten" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let action = "list";
    let reviewId: string | undefined;

    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      action = body.action ?? "list";
      reviewId = body.id;
    }

    if (action === "approve" && reviewId) {
      const { error } = await adminClient
        .from("reviews")
        .update({ status: "approved" })
        .eq("id", reviewId);
      if (error) throw error;
    } else if (action === "delete" && reviewId) {
      const { error } = await adminClient.from("reviews").delete().eq("id", reviewId);
      if (error) throw error;
    }

    const { data: reviews, error: reviewsError } = await adminClient
      .from("reviews")
      .select("id, name, message, status, created_at")
      .order("created_at", { ascending: false });

    if (reviewsError) throw reviewsError;

    return new Response(JSON.stringify({ reviews: reviews ?? [] }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Onbekende fout",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
