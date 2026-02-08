# Cosmic Watch - Quick Start

## Quick Setup (TL;DR)

1. **Install dependencies:**
```bash
npm install --force
```

2. **Create `.env.local` file:**
```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
NASA_API_KEY=DEMO_KEY
```

3. **Set up Google OAuth:**
   - Go to: https://console.cloud.google.com/
   - Create OAuth credentials
   - Add redirect URI: `http://localhost:3000/api/auth/callback/google`

4. **Run the app:**
```bash
npm run dev
```

5. **Open in browser:**
http://localhost:3000

## Features You'll See

✅ Google Authentication
✅ Real-time NASA asteroid data
✅ Risk analysis dashboard
✅ 3D visualization
✅ Animated charts and cards

## Need Help?

See `SETUP_GUIDE.md` for detailed instructions!
