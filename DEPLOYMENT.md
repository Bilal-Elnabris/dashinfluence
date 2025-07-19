# Dash Influence App - Deployment Guide

## 🚀 **Deployment Options**

### **Option 1: Replit (Recommended for quick deployment)**

1. **Go to Replit.com** and create a new project
2. **Import from GitHub**: `https://github.com/Bilal-Elnabris/dashinfluence.git`
3. **Set Environment Variables** in Replit:
   - Go to "Secrets" in the left sidebar
   - Add these environment variables:
     ```
     SMTP_HOST=mail.privateemail.com
     SMTP_PORT=465
     SMTP_USER=hello@dashinfluence.com
     SMTP_PASS=Hello$200.%
     ```
4. **Deploy**: Click "Deploy" button in the deployment tab
5. **Your app will be available at**: `https://your-replit-project-name.your-username.repl.co`

### **Option 2: Railway**

1. **Go to Railway.app** and connect your GitHub account
2. **Create new project** from GitHub repository
3. **Set Environment Variables** in Railway dashboard
4. **Deploy**: Railway will automatically deploy when you push to main

### **Option 3: Render**

1. **Go to Render.com** and create a new Web Service
2. **Connect your GitHub repository**
3. **Configure**:
   - Build Command: `pnpm install && pnpm run build`
   - Start Command: `pnpm run start`
4. **Set Environment Variables** in Render dashboard
5. **Deploy**: Render will automatically deploy

### **Option 4: Vercel (Frontend only - API needs separate backend)**

1. **Go to Vercel.com** and import your GitHub repository
2. **Configure** as a Node.js project
3. **Note**: You'll need to deploy the API separately (Railway/Render)

## 🔧 **Environment Variables Required**

Make sure to set these in your deployment platform:

```bash
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_USER=hello@dashinfluence.com
SMTP_PASS=Hello$200.%
```

## 📋 **Pre-deployment Checklist**

- [x] ✅ Forms are working locally
- [x] ✅ API endpoints tested
- [x] ✅ Build process works (`pnpm run build`)
- [x] ✅ Production start command works (`pnpm run start`)
- [x] ✅ Environment variables configured
- [x] ✅ .env file added to .gitignore

## 🧪 **Testing Your Deployment**

After deployment, test these endpoints:

1. **Contact Form**: `https://your-domain.com/contact`
2. **Early Access**: `https://your-domain.com/early-access`
3. **Business Intake**: `https://your-domain.com/business-intake`

## 🔍 **Troubleshooting**

### **If forms don't work:**

1. Check environment variables are set correctly
2. Verify SMTP credentials work
3. Check server logs for errors

### **If build fails:**

1. Ensure all dependencies are in package.json
2. Check Node.js version compatibility
3. Verify TypeScript compilation

### **If API returns 500 errors:**

1. Check environment variables
2. Verify SMTP configuration
3. Check server logs

## 🌐 **Custom Domain Setup**

Once deployed, you can connect your custom domain:

1. **Get your deployment URL** (e.g., `https://your-app.railway.app`)
2. **Go to your domain registrar** (Namecheap, GoDaddy, etc.)
3. **Add CNAME record** pointing to your deployment URL
4. **Wait for DNS propagation** (up to 48 hours)

## 📞 **Support**

If you encounter issues:

1. Check the server logs in your deployment platform
2. Test the API endpoints with curl
3. Verify environment variables are set correctly

---

**Your app is now ready for deployment! 🎉**
