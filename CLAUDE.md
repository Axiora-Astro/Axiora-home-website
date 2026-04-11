# Axiora-home-website

Marketing and product website with subscription management UI. Static Astro site; Supabase handles auth directly from the browser.

## Stack
- Astro 5.14.1 (static output, no SSR)
- TailwindCSS 3.4.17 + @tailwindcss/typography 0.5.19
- TypeScript
- @supabase/supabase-js 2.86.2
- astro-icon 1.1.5 (tabler + flat-color-icons icon sets)

## Run / Build
```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static output → dist/
npm run preview   # preview built site
```

## Key Folder Structure
```
src/
  pages/
    index.astro       # Landing page (Hero, Features, Steps, Screenshots, TrialCode, NotifyMe)
    pricing.astro     # Subscription plans; fetches from PUBLIC_API_URL
    usage.astro       # Usage dashboard (requires auth)
    legal.astro       # Terms/Privacy
    coming-soon.astro
    auth/             # Auth callback and related pages
  components/
    widgets/          # Header, Footer, Hero, Features, Screenshots, etc.
    ui/               # Reusable UI primitives
  lib/
    supabase.ts       # Supabase client (autoRefreshToken, persistSession)
    auth.ts           # Auth helpers
  styles/             # Global CSS
public/               # Static assets
astro.config.mjs      # Integrations: tailwind (no base styles), icon
```

## Communication
- **Backend API**: `import.meta.env.PUBLIC_API_URL` → defaults to `https://api.axiora.software`
- **Supabase**: `PUBLIC_SUPABASE_URL` + `PUBLIC_SUPABASE_ANON_KEY` (direct client-side SDK)
- No server-side API calls — all requests are browser-to-backend.

## Environment Variables
```
PUBLIC_SUPABASE_URL=https://<project>.supabase.co
PUBLIC_SUPABASE_ANON_KEY=<anon-key>
PUBLIC_API_URL=https://api.axiora.software
```
All vars must be prefixed `PUBLIC_` to be exposed to the browser in Astro.

## Active Constraints
- Static site: no Astro SSR adapter configured; all dynamic data is client-side JS.
- TailwindCSS `applyBaseStyles: false` — base styles injected manually via `src/styles/`.
- Icon sets are tree-shaken at build time via the `include` list in `astro.config.mjs`; add new icons there before using them.
- Auth state managed entirely by Supabase SDK (JWT stored in browser localStorage by default).
