-- Roles enum + tabel (security best practice)
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function om RLS recursie te voorkomen
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Policies user_roles: alleen admins kunnen lezen/beheren
CREATE POLICY "Admins kunnen rollen bekijken"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Reviews tabel
CREATE TABLE public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT name_length CHECK (char_length(name) BETWEEN 2 AND 80),
    CONSTRAINT message_length CHECK (char_length(message) BETWEEN 10 AND 1000),
    CONSTRAINT status_valid CHECK (status IN ('pending', 'approved'))
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Iedereen mag een review insturen (status wordt geforceerd op pending door trigger)
CREATE POLICY "Iedereen kan een review insturen"
ON public.reviews FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending');

-- Iedereen mag goedgekeurde reviews lezen
CREATE POLICY "Iedereen kan goedgekeurde reviews zien"
ON public.reviews FOR SELECT
TO anon, authenticated
USING (status = 'approved');

-- Admins mogen alle reviews zien
CREATE POLICY "Admins kunnen alle reviews zien"
ON public.reviews FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins mogen reviews goedkeuren (status wijzigen)
CREATE POLICY "Admins kunnen reviews bijwerken"
ON public.reviews FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins mogen reviews verwijderen
CREATE POLICY "Admins kunnen reviews verwijderen"
ON public.reviews FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Trigger zodat ingestuurde reviews altijd op 'pending' starten (anti-tampering)
CREATE OR REPLACE FUNCTION public.force_pending_on_insert()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.status := 'pending';
  RETURN NEW;
END;
$$;

CREATE TRIGGER reviews_force_pending
BEFORE INSERT ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION public.force_pending_on_insert();

CREATE INDEX reviews_status_created_idx ON public.reviews (status, created_at DESC);