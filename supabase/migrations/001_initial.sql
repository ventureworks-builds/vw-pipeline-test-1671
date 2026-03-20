-- Minimal schema for pipeline test
CREATE TABLE IF NOT EXISTS test_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE test_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "test_items_public_read" ON test_items
  FOR SELECT USING (true);
