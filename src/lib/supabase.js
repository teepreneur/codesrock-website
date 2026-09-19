import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and Key from environment variables with public defaults
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ryazhfrwjhkguzdwxegn.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5YXpoZnJ3amhrZ3V6ZHd4ZWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MDcyNzAsImV4cCI6MjA3OTI4MzI3MH0.LvQtwD4riBVJAuWIQ4hMoC6VEub7lTD8fEjX3aqKGh8';

// Check if credentials are valid (not placeholder values)
const isValidUrl = (url) => {
  if (!url) return false;
  return url.startsWith('http://') || url.startsWith('https://');
};

const isValidKey = (key) => {
  if (!key) return false;
  return key.length > 20 && !key.includes(' ') && !key.includes('your_');
};

// Validate that credentials are valid
const hasValidCredentials = isValidUrl(supabaseUrl) && isValidKey(supabaseAnonKey);

if (!hasValidCredentials) {
  console.warn(
    'Supabase credentials not configured. Form submissions will not be saved to database.'
  );
}

// Create and export Supabase client
export const supabase = hasValidCredentials
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
