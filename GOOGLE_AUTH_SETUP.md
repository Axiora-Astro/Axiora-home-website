# Google OAuth Setup Guide

## ✅ What We've Implemented

Google OAuth now works **client-side** using Supabase's JavaScript client. This means:
- No more PKCE errors
- Secure token handling
- Automatic session management
- Works with Supabase's built-in OAuth flow

## 📋 Required Setup Steps

### 1. Create `.env` File

Create a `.env` file in the `Axiora-home-website` directory with your Supabase credentials:

```env
PUBLIC_API_URL=https://axiora-backend-production.up.railway.app
PUBLIC_SUPABASE_URL=https://vfrgpnpjlgofdmefvxlw.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**To get your Supabase Anon Key:**
1. Go to your Supabase Dashboard
2. Click on "Settings" → "API"
3. Copy the "anon" key (public key)
4. Paste it in the `.env` file

### 2. Verify Supabase Configuration

Make sure these are configured in your Supabase Dashboard:

**✅ Redirect URLs** (Already done):
- `https://axiora.software/auth/callback`
- `https://www.axiora.software/auth/callback`
- `http://localhost:4321/auth/callback`

**✅ Google OAuth Enabled** (Already done):
- Provider: Google
- Client ID and Secret configured

### 3. Test Locally

```bash
cd Axiora-home-website
npm run dev
```

Then:
1. Click the user icon in the header
2. Click "Sign in with Google"
3. You should be redirected to Google
4. After authentication, you'll be redirected back to `/auth/callback`
5. Session will be stored and you'll be redirected to home

## 🔧 How It Works

### Sign In Flow:
1. User clicks "Sign in with Google"
2. **Frontend** calls `supabase.auth.signInWithOAuth()`
3. User is redirected to Google
4. Google authenticates and redirects to `/auth/callback`
5. **Supabase** handles the OAuth callback automatically
6. **Frontend** retrieves the session
7. Tokens stored in localStorage
8. User redirected to home page

### Email/Password Flow:
- Still uses your **backend API** at Railway
- Works exactly as before
- No changes needed

## 📁 Files Changed

1. **`src/lib/supabase.ts`** - New Supabase client configuration
2. **`src/components/widgets/Header.astro`** - Updated Google OAuth to use Supabase client
3. **`src/pages/auth/callback.astro`** - Updated to handle Supabase session
4. **`.env.example`** - Added Supabase configuration
5. **`package.json`** - Added `@supabase/supabase-js` dependency

## 🚀 Deployment

When deploying to production (Netlify, Vercel, etc.):

1. Add environment variables in your hosting platform:
   ```
   PUBLIC_API_URL=https://axiora-backend-production.up.railway.app
   PUBLIC_SUPABASE_URL=https://vfrgpnpjlgofdmefvxlw.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
   ```

2. Make sure your production domain is in Supabase Redirect URLs

## 🔒 Security Notes

- The **anon key** is safe to expose publicly (it's designed for client-side use)
- Supabase handles all security with Row Level Security (RLS)
- Tokens are stored in localStorage (consider using httpOnly cookies for production)
- The backend API still validates tokens for email/password auth

## 🐛 Troubleshooting

### "No session found"
- Check that redirect URLs are correctly configured in Supabase
- Verify the anon key is correct
- Check browser console for errors

### "PKCE error"
- This should no longer happen with client-side OAuth
- If it does, check that you're using the latest code

### Google OAuth not working
- Verify Google OAuth is enabled in Supabase
- Check that the callback URL is registered in Google Cloud Console
- Make sure redirect URLs match exactly (no trailing slashes)
