CREATE TABLE public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kind TEXT NOT NULL DEFAULT 'quote' CHECK (kind IN ('quote','corporate','contact')),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_type TEXT,
  property_type TEXT,
  property_size TEXT,
  personnel_count TEXT,
  preferred_date DATE,
  frequency TEXT,
  organisation TEXT,
  facility_location TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages enquiries"
  ON public.enquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);