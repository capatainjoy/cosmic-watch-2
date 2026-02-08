# 🚀 Cosmic Watch - Setup Guide

## Step-by-Step Setup Instructions

### Step 1: Google OAuth Setup

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project** (or select existing)
   - Click on the project dropdown at the top
   - Click "New Project"
   - Name it: "Cosmic Watch"
   - Click "Create"

3. **Enable Google+ API**
   - In the left sidebar, go to "APIs & Services" → "Library"
   - Search for "Google+ API"
   - Click on it and press "Enable"

4. **Create OAuth Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - If prompted, configure OAuth consent screen:
     - User Type: External
     - App name: Cosmic Watch
     - User support email: Your email
     - Developer contact: Your email
     - Click "Save and Continue" through the scopes and test users

5. **Configure OAuth Client**
   - Application type: "Web application"
   - Name: "Cosmic Watch Web Client"
   - Authorized JavaScript origins:
     ```
     http://localhost:3000
     ```
   - Authorized redirect URIs:
     ```
     http://localhost:3000/api/auth/callback/google
     ```
   - Click "Create"

6. **Copy Credentials**
   - You'll see a popup with Client ID and Client Secret
   - **IMPORTANT**: Copy both - you'll need them for `.env.local`

### Step 2: NASA API Key

1. **Get Free API Key**
   - Visit: https://api.nasa.gov/
   - Fill in the form with your:
     - First Name
     - Last Name
     - Email
   - Click "Signup"
   - Check your email for the API key

2. **API Key Details**
   - Default "DEMO_KEY" works but has strict rate limits (30 requests/hour)
   - Personal key allows 1000 requests/hour
   - No cost, completely free!

### Step 3: Configure Environment Variables

1. **Create `.env.local` file** in the project root

2. **Add your credentials:**

```env
# Google OAuth Configuration
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret_here

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_super_secret_key_here

# NASA API Configuration
NASA_API_KEY=your_nasa_api_key_here
```

3. **Generate NextAuth Secret**

**Option 1 - Using OpenSSL (Recommended):**
```bash
openssl rand -base64 32
```

**Option 2 - Using Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Option 3 - Online Generator:**
- Visit: https://generate-secret.vercel.app/32

Copy the output and paste it as your `NEXTAUTH_SECRET`

### Step 4: Install Dependencies

```bash
npm install --legacy-peer-deps
```

**Why `--legacy-peer-deps`?**
Some packages (React Three Fiber with React 19) have peer dependency conflicts. This flag allows installation while the ecosystem catches up.

### Step 5: Run the Application

```bash
npm run dev
```

The app will start on: `http://localhost:3000`

### Step 6: First Login

1. Open `http://localhost:3000` in your browser
2. You'll be redirected to the sign-in page
3. Click "Continue with Google"
4. Select your Google account
5. Grant permissions
6. You'll be redirected to the dashboard!

## 🎯 Verification Checklist

- [ ] Google OAuth credentials created
- [ ] `.env.local` file created with all values
- [ ] Dependencies installed successfully
- [ ] Development server running
- [ ] Can access sign-in page
- [ ] Google login works
- [ ] Dashboard loads with asteroid data
- [ ] 3D visualization renders

## 🐛 Common Issues

### Issue: "Error: GOOGLE_CLIENT_ID is undefined"
**Solution:** Check that `.env.local` exists and has the correct variable names (no typos)

### Issue: "Callback URL mismatch"
**Solution:** 
- Verify the redirect URI in Google Cloud Console is exactly:
  `http://localhost:3000/api/auth/callback/google`
- Make sure there are no trailing slashes

### Issue: "Module not found" errors
**Solution:** Run `npm install --legacy-peer-deps` again

### Issue: NASA API returns 403 Forbidden
**Solution:** 
- Check your API key is correct in `.env.local`
- Verify you haven't exceeded rate limits
- Try using "DEMO_KEY" temporarily

### Issue: 3D visualization doesn't load
**Solution:**
- This is a heavy component - give it a few seconds
- Check browser console for WebGL errors
- Some browsers need WebGL enabled in settings

## 🚀 Production Deployment

### For Vercel Deployment:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Add environment variables:
     - `GOOGLE_CLIENT_ID`
     - `GOOGLE_CLIENT_SECRET`
     - `NEXTAUTH_SECRET`
     - `NASA_API_KEY`
     - `NEXTAUTH_URL` (set to your Vercel URL, e.g., `https://cosmic-watch.vercel.app`)

3. **Update Google OAuth**
   - Add your Vercel URL to Authorized JavaScript origins
   - Add `https://your-app.vercel.app/api/auth/callback/google` to Authorized redirect URIs

## 📊 Understanding the Data

### What is a Near-Earth Object (NEO)?
Asteroids and comets that orbit within 1.3 AU of the Sun and can come close to Earth.

### What is "Potentially Hazardous"?
NASA classifies an asteroid as PHA if:
- It comes within 0.05 AU (7.5 million km) of Earth's orbit
- Its size is > 140 meters

### Lunar Distance (LD)
- 1 LD = ~384,400 km (distance from Earth to Moon)
- Closer than 1 LD is considered very close
- Most NEOs pass at 5-30 LD

## 🎓 Next Steps

- Explore the dashboard and different risk categories
- Try the 3D visualization with the interactive camera
- Monitor for high-risk asteroids
- Share the platform with friends interested in space!

## 💡 Tips

- Keep the dashboard open - data auto-refreshes every 5 minutes
- The 3D view is interactive - click and drag to rotate
- Sort asteroids by risk score to see the most concerning ones first
- Check the risk factors to understand why each asteroid is classified

---

**Need help?** Check the main README.md or open an issue on GitHub!
