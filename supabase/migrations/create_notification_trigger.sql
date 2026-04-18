-- 0. Enable the HTTP extension (needed for Edge Function calls)
create extension if not exists pg_net with schema extensions;

-- 1. Function to call the Edge Function
create or replace function public.handle_new_form_submission()
returns trigger as $$
declare
  payload jsonb;
  headers_text text;
  headers_json jsonb;
  req_host text;
  req_auth text;
begin
  -- Get headers safely
  begin
    headers_text := current_setting('request.headers', true);
    if headers_text is not null then
      headers_json := headers_text::jsonb;
      req_host := headers_json->>'host';
      req_auth := headers_json->>'authorization';
    end if;
  exception when others then
    -- Fallback or ignore
  end;

  -- Build the payload based on the table
  payload := jsonb_build_object(
    'id', new.id,
    'created_at', new.created_at
  );

  -- Add specific fields based on which table triggered it
  if TG_TABLE_NAME = 'demo_requests' then
    payload := payload || jsonb_build_object(
      'name', new.name,
      'email', new.email,
      'phone', new.phone,
      'role', new.role,
      'type', 'Demo Request'
    );
  elsif TG_TABLE_NAME = 'school_applications' then
    payload := payload || jsonb_build_object(
      'name', new.representative_name,
      'email', new.email,
      'phone', new.school_phone,
      'school_name', new.school_name,
      'representative_role', new.representative_role,
      'type', 'School Application'
    );
  elsif TG_TABLE_NAME = 'parent_orders' then
    payload := payload || jsonb_build_object(
      'name', new.parent_name,
      'email', new.email,
      'phone', new.phone,
      'delivery_location', new.delivery_location,
      'type', 'Parent Order'
    );
  end if;

  -- Call the Edge Function
  -- If we can't find the host, we'll try to use the project ref directly
  if req_host is null then
    req_host := 'ryazhfrwjhkguzdwxegn.supabase.co';
  end if;

  perform net.http_post(
    url := 'https://' || req_host || '/functions/v1/send-notification-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', coalesce(req_auth, '')
    ),
    body := payload
  );

  return new;
end;
$$ language plpgsql security definer;

-- 2. Create triggers for each table
drop trigger if exists on_demo_request_insert on public.demo_requests;
create trigger on_demo_request_insert
  after insert on public.demo_requests
  for each row execute function public.handle_new_form_submission();

drop trigger if exists on_school_application_insert on public.school_applications;
create trigger on_school_application_insert
  after insert on public.school_applications
  for each row execute function public.handle_new_form_submission();

-- 3. Ensure all tables are accessible to the public API
alter table if exists public.demo_requests enable row level security;
alter table if exists public.school_applications enable row level security;
alter table if exists public.parent_orders enable row level security;

-- Grant schema usage
grant usage on schema public to anon, authenticated;
grant usage on schema extensions to anon, authenticated;

-- Grant table & sequence access
grant insert, select on table public.demo_requests to anon, authenticated;
grant insert, select on table public.school_applications to anon, authenticated;
grant insert, select on table public.parent_orders to anon, authenticated;
grant usage, select on all sequences in schema public to anon, authenticated;

-- Add policies (using FOR ALL to allow .select() after insert)
do $$
begin
    -- Policy for demo_requests
    drop policy if exists "Enable all for everyone" on public.demo_requests;
    create policy "Enable all for everyone" on public.demo_requests for all using (true) with check (true);

    -- Policy for school_applications
    drop policy if exists "Enable all for everyone" on public.school_applications;
    create policy "Enable all for everyone" on public.school_applications for all using (true) with check (true);

    -- Policy for parent_orders
    drop policy if exists "Enable all for everyone" on public.parent_orders;
    create policy "Enable all for everyone" on public.parent_orders for all using (true) with check (true);
end $$;
