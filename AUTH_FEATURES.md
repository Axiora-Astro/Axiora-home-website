# Authentication Features

## ✅ Implemented Features

### 1. **User Registration (Sign Up)**
- Display Name field
- Email validation
- Password (minimum 6 characters)
- Stores display name in `user_metadata`

### 2. **User Login (Sign In)**
- Email/password authentication
- Session persistence across page refreshes
- Automatic token storage

### 3. **Google OAuth**
- Client-side Google Sign-In
- Automatic session handling via Supabase
- No PKCE errors

### 4. **Persistent Sessions**
- User stays logged in across page refreshes
- Session stored in localStorage
- Automatic session restoration on page load

### 5. **User Display**
- Shows user's display name in header when logged in
- Falls back to email username if no display name
- User icon with name display

### 6. **Logout**
- Logout button visible when logged in
- Clears session from localStorage
- Signs out from Supabase
- Redirects to home page

## 📁 Files Structure

### Frontend (`Axiora-home-website`)
```
src/
├── lib/
│   ├── auth.ts          # Authentication utilities
│   └── supabase.ts      # Supabase client config
├── components/
│   └── widgets/
│       └── Header.astro # Login UI, user display, logout
└── pages/
    └── auth/
        └── callback.astro # OAuth callback handler
```

### Backend (`axiora-backend`)
```
app/
├── api/
│   └── routes/
│       └── auth.py      # Auth endpoints
├── services/
│   └── auth_service.py  # Supabase integration
└── schemas/
    └── auth.py          # Request/response models
```

## 🔐 How It Works

### Sign Up Flow:
1. User enters display name, email, password
2. Frontend sends to backend API
3. Backend creates user in Supabase with metadata
4. Session tokens returned and stored
5. User redirected, header shows logged-in state

### Sign In Flow:
1. User enters email, password
2. Frontend sends to backend API
3. Backend authenticates with Supabase
4. Session tokens returned and stored
5. User redirected, header shows logged-in state

### Google OAuth Flow:
1. User clicks "Sign in with Google"
2. Frontend calls Supabase directly (client-side)
3. User redirected to Google
4. Google redirects to `/auth/callback`
5. Callback page gets session from Supabase
6. Session stored, user redirected home

### Session Persistence:
1. On page load, `checkLoginStatus()` runs
2. Checks localStorage for session
3. If found, displays user info and logout button
4. If not found, shows login button

### Logout Flow:
1. User clicks logout button
2. Calls Supabase `signOut()`
3. Clears localStorage
4. Redirects to home page

## 🎨 UI States

### Not Logged In:
- User icon button (opens login modal)
- No display name shown
- No logout button

### Logged In:
- User icon + display name shown
- Logout button visible
- User icon doesn't open modal (disabled)

## 🔧 Auth Utilities (`src/lib/auth.ts`)

### Functions:
- `getSession()` - Get current session from localStorage
- `getCurrentUser()` - Get current user object
- `isLoggedIn()` - Check if user is logged in
- `saveSession()` - Save session to localStorage
- `clearSession()` - Clear session from localStorage
- `signOut()` - Sign out user and clear session

## 🚀 Environment Variables

### Frontend (`.env`):
```env
PUBLIC_API_URL=https://axiora-backend-production.up.railway.app
PUBLIC_SUPABASE_URL=https://vfrgpnpjlgofdmefvxlw.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Backend (Railway):
```env
SUPABASE_URL=https://vfrgpnpjlgofdmefvxlw.supabase.co
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_JWT_SECRET=your_jwt_secret
ALLOWED_ORIGINS=https://axiora.software,https://www.axiora.software
```

## 📝 User Data Structure

```typescript
{
  id: string;
  email: string;
  user_metadata: {
    display_name: string;  // From signup form
    // other custom fields
  };
  created_at: string;
  updated_at: string;
  email_confirmed_at: string;
}
```

## 🔒 Security Notes

- Tokens stored in localStorage (consider httpOnly cookies for production)
- Supabase handles all password hashing
- JWT tokens auto-expire
- Backend validates all tokens
- CORS configured for allowed origins

## 🐛 Known Issues & Solutions

### Issue: Timeout on Railway
- **Cause**: Railway → Supabase network latency
- **Solution**: Added retry logic with 60s timeout
- **Alternative**: Use client-side auth (recommended)

### Issue: PKCE Error
- **Cause**: Server-side OAuth flow
- **Solution**: Moved Google OAuth to client-side

## 🎯 Next Steps

Consider implementing:
- [ ] Password reset functionality
- [ ] Email verification flow
- [ ] Profile page to edit display name
- [ ] Remember me checkbox
- [ ] Social login (GitHub, Facebook, etc.)
- [ ] Two-factor authentication
- [ ] Session refresh on token expiry
