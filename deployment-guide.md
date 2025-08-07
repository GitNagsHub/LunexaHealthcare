# 🚀 Lunexa Healthcare - Deployment Guide

## Quick Deployment Options

### Option 1: Render (Recommended - Free Tier)

1. **Create Render Account**: Go to [render.com](https://render.com) and sign up
2. **Connect GitHub**: 
   - Push your code to GitHub repository
   - Connect your GitHub account to Render

3. **Deploy Steps**:
   ```bash
   # Initialize git repository (if not done)
   git init
   git add .
   git commit -m "Initial commit - Lunexa Healthcare website"
   
   # Create GitHub repository and push
   git remote add origin https://github.com/yourusername/lunexa-healthcare.git
   git push -u origin main
   ```

4. **Render Configuration**:
   - Create new "Web Service" on Render
   - Connect GitHub repository
   - Use these settings:
     - **Name**: lunexa-healthcare
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Node Version**: 18 or higher

5. **Environment Variables** (Add in Render Dashboard):
   ```
   GMAIL_USER=nags.sellaiah@gmail.com
   GMAIL_APP_PASSWORD=kugv funh mcil ralc
   PORT=10000
   ```

### Option 2: Railway (Alternative Free Option)

1. **Create Railway Account**: Go to [railway.app](https://railway.app)
2. **Deploy from GitHub**:
   - Click "Deploy from GitHub"
   - Select your repository
   - Railway will auto-detect Node.js

3. **Add Environment Variables**:
   ```
   GMAIL_USER=nags.sellaiah@gmail.com
   GMAIL_APP_PASSWORD=kugv funh mcil ralc
   ```

### Option 3: Heroku (Paid but Reliable)

1. **Install Heroku CLI**
2. **Deploy Commands**:
   ```bash
   heroku create lunexa-healthcare
   heroku config:set GMAIL_USER=nags.sellaiah@gmail.com
   heroku config:set GMAIL_APP_PASSWORD="kugv funh mcil ralc"
   git push heroku main
   ```

## Project Structure Ready for Deployment

✅ **Server Configuration**: Express server with proper PORT handling
✅ **Package.json**: All dependencies specified
✅ **Procfile**: Heroku deployment ready
✅ **render.yaml**: Render deployment configuration
✅ **Environment Variables**: Secure Gmail SMTP setup
✅ **Static Files**: All CSS, JS, images properly served

## Testing After Deployment

1. **Website Access**: Visit the deployed URL
2. **Navigation**: Test all page transitions
3. **Contact Form**: Submit a test message
4. **Email Functionality**: 
   - Check if notification email arrives at nags.sellaiah@gmail.com
   - Verify confirmation email is sent to form submitter

## Domain & SSL

- **Custom Domain**: Most platforms provide free subdomains
- **SSL Certificate**: Automatically provided by hosting platforms
- **Professional URL**: Available with paid plans

## Recommended: Render Deployment

**Pros**:
- ✅ Free tier with 750 hours/month
- ✅ Automatic SSL certificates
- ✅ Easy GitHub integration
- ✅ Good for Node.js applications
- ✅ Environment variable support

**Expected URL**: `https://lunexa-healthcare.onrender.com`

## Quick Start Commands

```bash
# 1. Initialize Git (if needed)
git init
git add .
git commit -m "Lunexa Healthcare website ready for deployment"

# 2. Create GitHub repository
# (Do this on GitHub.com)

# 3. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/lunexa-healthcare.git
git push -u origin main

# 4. Deploy on Render
# - Go to render.com
# - Create new Web Service
# - Connect GitHub repository
# - Add environment variables
# - Deploy!
```

## Environment Variables for Production

```env
GMAIL_USER=nags.sellaiah@gmail.com
GMAIL_APP_PASSWORD=kugv funh mcil ralc
NODE_ENV=production
PORT=10000
```

## Support

After deployment, the website will be accessible worldwide with:
- ✅ Working contact form with Gmail integration
- ✅ Professional Lunexa Healthcare branding  
- ✅ Responsive design for all devices
- ✅ Real UK contact information
- ✅ SSL security certificate

**Next Steps**: Choose a deployment platform and I can help guide you through the specific deployment process!