# 🌌 Cosmic Watch - NEO Monitoring Platform

A **full-stack real-time Near-Earth Object (NEO) monitoring platform** that fetches live asteroid data from NASA's NeoWs API, provides comprehensive risk analysis, and features stunning 3D visualizations.

![Cosmic Watch](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🔐 User Authentication & Verification
- ✅ Secure Google OAuth authentication via NextAuth.js
- ✅ Protected routes and session management
- ✅ User profile display with avatar

### 📡 Real-Time Data Feed
- ✅ Integration with NASA NeoWs API for live asteroid data
- ✅ Automatic data refresh every 5 minutes
- ✅ Display of asteroid velocity and distance from Earth
- ✅ Real-time tracking of multiple NEOs

### 🎯 Risk Analysis Engine
- ✅ Comprehensive risk scoring algorithm based on:
  - Potentially Hazardous Asteroid (PHA) classification
  - Estimated diameter
  - Miss distance (in Lunar Distances)
  - Relative velocity
- ✅ Color-coded risk levels: LOW, MEDIUM, HIGH, CRITICAL
- ✅ Detailed risk factor breakdown for each asteroid

### 🔔 Alert & Notification System
- ✅ Visual indicators for high-risk asteroids
- ✅ Risk distribution charts
- ✅ Hazardous asteroid badges
- ✅ Priority-sorted asteroid list

### 🎨 Beautiful UI/UX
- ✅ Premium dark theme with glassmorphism effects
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design for all devices
- ✅ Interactive data visualizations with Recharts

### 🌍 3D Visualization (Bonus)
- ✅ Interactive 3D view using Three.js
- ✅ Earth model with orbiting asteroids
- ✅ Color-coded asteroids by risk level
- ✅ Auto-rotating camera with manual controls
- ✅ Starfield background for cosmic atmosphere

## 🏗️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics with Three.js
- **Recharts** - Data visualization

### Backend (API Folder)
- **Next.js API Routes** - Serverless API endpoints
- **NASA NeoWs API** - Real-time asteroid data
- **Axios** - HTTP client

### Authentication
- **NextAuth.js v5** - Authentication solution
- **Google OAuth** - Social login provider

### State Management
- **React Query (TanStack Query)** - Server state management
- **React Context** - Client state management

## 📁 Project Structure

```
cosmic-watch/
├── app/                          # Next.js App Router
│   ├── api/                      # Backend API routes
│   │   ├── auth/[...nextauth]/   # NextAuth handler
│   │   └── neo/                  # NASA API endpoints
│   │       ├── feed/             # Fetch NEO feed
│   │       ├── stats/            # NEO statistics
│   │       └── [id]/             # Individual asteroid
│   ├── auth/
│   │   └── signin/               # Sign-in page
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── dashboard/                # Dashboard components
│   │   ├── Dashboard.tsx         # Main dashboard
│   │   ├── AsteroidCard.tsx      # Asteroid info cards
│   │   └── RiskChart.tsx         # Risk distribution chart
│   ├── layout/
│   │   └── Header.tsx            # App header/nav
│   ├── providers/
│   │   └── query-provider.tsx    # React Query provider
│   ├── ui/
│   │   └── tabs.tsx              # Tabs component
│   └── visualization/
│       └── AsteroidVisualization.tsx  # 3D viewer
├── lib/
│   ├── nasa-api.ts               # NASA API client & risk engine
│   └── utils.ts                  # Utility functions
├── auth.ts                       # NextAuth configuration
├── .env.local                    # Environment variables
└── package.json                  # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Google Cloud account for OAuth credentials
- NASA API key (free at https://api.nasa.gov/)

### 1. Clone the repository
```bash
cd cosmic-watch
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Set up environment variables

Create a `.env.local` file with the following:

```env
# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here  # Generate with: openssl rand -base64 32

# NASA API Configuration
NASA_API_KEY=DEMO_KEY  # Or your personal key from https://api.nasa.gov/
```

### 4. Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Set **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
6. Copy **Client ID** and **Client Secret** to `.env.local`

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How It Works

### Risk Analysis Algorithm

The platform calculates a risk score (0-100) for each asteroid based on:

1. **Potentially Hazardous Status** (30 points)
   - NASA's official PHA classification

2. **Size** (up to 25 points)
   - Large (>1 km): 25 points
   - Medium (0.5-1 km): 15 points
   - Small (0.1-0.5 km): 5 points

3. **Miss Distance** (up to 25 points)
   - Very close (<1 LD): 25 points
   - Close (1-5 LD): 15 points
   - Moderate (5-10 LD): 5 points

4. **Velocity** (up to 20 points)
   - Very high (>100k km/h): 20 points
   - High (70-100k km/h): 10 points
   - Moderate (40-70k km/h): 5 points

**Risk Levels:**
- **CRITICAL**: Score ≥ 70
- **HIGH**: Score 50-69
- **MEDIUM**: Score 30-49
- **LOW**: Score < 30

## 📊 API Routes

### `GET /api/neo/feed`
Fetch Near-Earth Objects for a date range with risk analysis.

**Query Parameters:**
- `start_date` (optional): Start date (YYYY-MM-DD)
- `end_date` (optional): End date (YYYY-MM-DD)

**Response:**
```json
{
  "element_count": 20,
  "near_earth_objects": {
    "2026-02-07": [
      {
        "id": "2021277",
        "name": "NEO Name",
        "is_potentially_hazardous_asteroid": true,
        "risk_analysis": {
          "score": 75,
          "level": "CRITICAL",
          "factors": ["Classified as Potentially Hazardous", ...]
        }
      }
    ]
  }
}
```

### `GET /api/neo/stats`
Get overall NEO statistics.

### `GET /api/neo/[id]`
Get detailed information for a specific asteroid.

## 🎨 Design Philosophy

- **Premium Aesthetics**: Gradient backgrounds, glassmorphism, glow effects
- **Dark Mode First**: Easy on the eyes for long monitoring sessions
- **Smooth Animations**: Framer Motion for delightful interactions
- **Data-Driven**: Real-time updates from NASA's official API
- **Responsive**: Works beautifully on desktop, tablet, and mobile

## 🐛 Troubleshooting

### "Cannot find module" errors
Run: `npm install --legacy-peer-deps`

### Google OAuth not working
- Check redirect URI matches exactly: `http://localhost:3000/api/auth/callback/google`
- Ensure Google+ API is enabled in Cloud Console

### NASA API rate limits
- Free tier: 1000 requests/hour
- Get your own key at https://api.nasa.gov/ for better limits

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Credits

- **NASA NeoWs API** - Asteroid data
- **Next.js** - Framework
- **Three.js** - 3D graphics
- **NextAuth.js** - Authentication

---

Built with ❤️ using Next.js, TypeScript, and NASA data | **Stay safe from space rocks!** 🛡️
