# Google OAuth Setup Guide

To resolve the `401: invalid_client` error, ensure your Google Cloud project is configured with the following parameters:

### **Required Configuration**
- **Authorized JavaScript Origins:** `http://localhost:3000`
- **Authorized Redirect URIs:** `http://localhost:3000/api/auth/callback/google`

### **Environment Variables (.env.local)**
```bash
GOOGLE_CLIENT_ID=your_real_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_real_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=run_openssl_rand_base64_32_to_generate_this
```

### **Troubleshooting**
1. **Redirect URI Mismatch:** Ensure there is no trailing slash on the URL in the Google Console.
2. **Client ID Refresh:** Sometimes it takes 5-10 minutes for a new Client ID to propagate.
3. **Localhost vs 127.0.0.1:** Use `localhost:3000` consistently in both the console and your browser.
