# 🚀 Cloudflare Deployment Guide for Dash Influence

## ✅ **Your Current Setup**

- ✅ Domain: `influence.com`
- ✅ Cloudflare hosting
- ✅ Resend API key: `re_LCVtZVoo_4z78tSfEHZ1y4hJqKm7czoBG`

## 🌐 **Deploy to Cloudflare Pages**

### **Step 1: Connect GitHub to Cloudflare**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **"Pages"** in the left sidebar
3. Click **"Create a project"**
4. Select **"Connect to Git"**
5. Choose your GitHub repository: `Bilal-Elnabris/dashinfluence`

### **Step 2: Configure Build Settings**

Set these build settings:

- **Framework preset**: `Vite`
- **Build command**: `pnpm run build`
- **Build output directory**: `dist`
- **Root directory**: `client`
- **Node.js version**: `20`

### **Step 3: Set Environment Variables**

In your Cloudflare Pages project settings:

1. Go to **"Settings"** → **"Environment variables"**
2. Add this variable:
   ```
   Name: RESEND_API_KEY
   Value: re_LCVtZVoo_4z78tSfEHZ1y4hJqKm7czoBG
   Environment: Production
   ```

### **Step 4: Deploy**

1. Click **"Save and Deploy"**
2. Your app will be available at: `https://influence.com`

## 🔧 **For Backend API (Important!)**

Since you have API routes (`/api/contact`, `/api/early-access`, `/api/business-intake`), you need to deploy the backend separately:

### **Option A: Cloudflare Workers (Recommended)**

1. Go to **"Workers & Pages"** in Cloudflare
2. Create a new **Worker**
3. Upload your server code
4. Set environment variables in the Worker

### **Option B: Railway/Render (Easier)**

1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repo
3. Set environment variable: `RESEND_API_KEY=re_LCVtZVoo_4z78tSfEHZ1y4hJqKm7czoBG`
4. Deploy

## 🎯 **Quick Test**

After deployment, test your forms at:

- `https://influence.com/contact`
- `https://influence.com/early-access`
- `https://influence.com/business-intake`

## 🔒 **Security Benefits**

- ✅ No SMTP credentials in code
- ✅ API key stored securely in environment variables
- ✅ Resend handles email delivery reliably
- ✅ Free tier: 3,000 emails/month

## 📧 **Email Delivery**

All form submissions will be sent to: `hello@dashinfluence.com`
