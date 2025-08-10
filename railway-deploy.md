# 🚂 Railway Deployment - Lunexa Healthcare

## Quick Deploy Steps:

### Option 1: Railway CLI (Fastest)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy directly from current directory
railway deploy
```

### Option 2: Railway Web Dashboard
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "Deploy from GitHub" 
4. Upload project folder
5. Add environment variables:
   - GMAIL_USER: nags.sellaiah@gmail.com
   - GMAIL_APP_PASSWORD: kugv funh mcil ralc

### Option 3: Render (After GitHub)
1. Create GitHub repo: https://github.com/new
2. Name: lunexa-healthcare
3. Push code to GitHub
4. Connect to Render

## Environment Variables Needed:
```
GMAIL_USER=nags.sellaiah@gmail.com
GMAIL_APP_PASSWORD=kugv funh mcil ralc
PORT=3000
```

## Expected Result:
- Live URL: https://lunexa-healthcare-production.up.railway.app
- Working contact form with Gmail SMTP
- Professional Lunexa Healthcare website