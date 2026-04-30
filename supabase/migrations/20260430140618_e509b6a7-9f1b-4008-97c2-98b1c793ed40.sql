CREATE POLICY "Gebruikers kunnen hun eigen rollen bekijken"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;