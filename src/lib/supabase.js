import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and Key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are valid (not placeholder values)
const isValidUrl = (url) => {
  if (!url) return false;
  return url.startsWith('http://') || url.startsWith('https://');
};

const isValidKey = (key) => {
  if (!key) return false;
  // Placeholder values typically contain spaces or are too short
  return key.length > 20 && !key.includes(' ') && !key.includes('your_');
};

// Validate that environment variables are set and valid
const hasValidCredentials = isValidUrl(supabaseUrl) && isValidKey(supabaseAnonKey);

if (!hasValidCredentials) {
  console.warn(
    'Supabase credentials not configured. Form submissions will not be saved to database.'
  );
}

// Create and export Supabase client only if credentials are valid
export const supabase = hasValidCredentials
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
