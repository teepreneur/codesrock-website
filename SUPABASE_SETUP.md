# Supabase Form Submissions Setup Guide

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase project: https://app.supabase.com
2. Click on your project (or create a new one if you don't have one)
3. Click on **Settings** (⚙️) in the left sidebar
4. Click on **API**
5. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string)

## Step 2: Add Credentials to Your Project

1. Open the `.env` file in your project root
2. Replace the placeholders with your actual values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. **IMPORTANT**: Never commit the `.env` file to Git (it's already in .gitignore)

## Step 3: Create the Database Table

1. In Supabase, click on **Table Editor** in the left sidebar
2. Click **Create a new table**
3. Use these settings:

**Table Name**: `form_submissions`

**Columns**:

| Name       | Type        | Default Value        | Primary | Extra                  |
| ---------- | ----------- | -------------------- | ------- | ---------------------- |
| id         | int8        | (auto-generated)     | ✅ Yes  | Is identity            |
| created_at | timestamptz | now()                | ❌ No   | -                      |
| name       | text        | -                    | ❌ No   | -                      |
| email      | text        | -                    | ❌ No   | -                      |
| phone      | text        | -                    | ❌ No   | -                      |
| role       | text        | -                    | ❌ No   | -                      |

4. **Enable Row Level Security (RLS)**:
   - Click on the `form_submissions` table
   - Click **RLS disabled** button to enable it
   - Click **New Policy**
   - Choose **"Enable insert access for everyone"**
   - This allows your form to submit data

5. Click **Save**

## Step 4: Set Up Email Notifications

### Option A: Using Supabase Email (Recommended)

1. In Supabase, go to **Database** → **Webhooks**
2. Click **Create a new webhook**
3. Configure:
   - **Name**: Form Submission Notification
   - **Table**: form_submissions
   - **Events**: INSERT
   - **Type**: HTTP Request
   - **URL**: Use a service like:
     - Zapier webhook
     - Make (Integromat) webhook
     - N8n webhook
     - Or any email service API

### Option B: Using Database Function + Edge Function

1. Go to **SQL Editor** in Supabase
2. Run this SQL to create an email notification function:

```sql
-- Create a function to send emails
create or replace function send_email_notification()
returns trigger as $$
begin
  -- This will work with a Supabase Edge Function or external service
  perform
    net.http_post(
      url := 'YOUR_EDGE_FUNCTION_URL',
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body := json_build_object(
        'name', new.name,
        'email', new.email,
        'phone', new.phone,
        'role', new.role
      )::jsonb
    );
  return new;
end;
$$ language plpgsql;

-- Create a trigger
create trigger on_form_submission
  after insert on form_submissions
  for each row
  execute function send_email_notification();
```

### Option C: Simple Solution - Use Zapier (Easiest!)

1. Go to https://zapier.com
2. Create a new Zap:
   - **Trigger**: Supabase → New Row
   - **Action**: Email → Send Email
3. Connect your Supabase account
4. Select the `form_submissions` table
5. Configure email template with form data
6. Test and activate!

## Step 5: Test Your Form

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Fill out the form on your website
3. Check Supabase **Table Editor** → `form_submissions` to see if data appears
4. If email is set up, check your inbox!

## Step 6: Deploy to Production

When deploying to GitHub Pages, you need to set environment variables:

### For GitHub Pages:

Since GitHub Pages is static hosting, environment variables are baked into the build.

1. **Option 1 - Add to .env file before deploying** (Not recommended for security)

2. **Option 2 - Use GitHub Secrets** (Better):
   - Go to your repo settings → Secrets → Actions
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
   - Create a GitHub Action to build with env vars

3. **Option 3 - Best approach**:
   - Deploy to Vercel/Netlify instead (they handle env vars better)
   - Or keep using GitHub Pages and set env vars locally before `npm run build`

## Troubleshooting

### Form submission fails

1. Check browser console for errors
2. Verify Supabase credentials in `.env`
3. Make sure RLS policy allows inserts
4. Check table name matches exactly: `form_submissions`

### Email notifications not working

1. Test the webhook URL directly
2. Check Supabase logs in Dashboard
3. Verify trigger is created in SQL Editor

### Environment variables not loading

1. Restart dev server after changing `.env`
2. Make sure variables start with `VITE_`
3. Check file is named exactly `.env` (not `.env.txt`)

## View Your Submissions

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Click `form_submissions`
4. You'll see all submissions with timestamps
5. You can export to CSV anytime!

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com
