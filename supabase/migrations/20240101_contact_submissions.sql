-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting data (anyone can submit a contact form)
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

-- Create policy for viewing data (only authenticated users can view submissions)
DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON contact_submissions;
CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Add to realtime publication
alter publication supabase_realtime add table contact_submissions;
