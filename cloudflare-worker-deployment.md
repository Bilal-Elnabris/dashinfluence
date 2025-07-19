# ⚡ Cloudflare Worker Deployment Guide

## 🎯 **Why Cloudflare Workers?**

- ✅ **Super fast** - Runs on Cloudflare's global network
- ✅ **Reliable** - No server management needed
- ✅ **Secure** - Built-in DDoS protection
- ✅ **Free tier** - 100,000 requests/day free
- ✅ **Integrated** - Works perfectly with your Cloudflare setup

## 📋 **Step-by-Step Deployment**

### **1. Go to Cloudflare Dashboard**

1. Visit [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select your domain: `dashinfluence.com`
3. Go to **"Workers & Pages"** in the sidebar

### **2. Create a New Worker**

1. Click **"Create application"**
2. Select **"Create Worker"**
3. Name it: `dashinfluence-email-worker`
4. Click **"Deploy"**

### **3. Replace the Default Code**

1. In the Worker editor, replace all code with the content from `cloudflare-worker.js`
2. Click **"Save and deploy"**

### **4. Set Environment Variables**

1. Go to **"Settings"** → **"Variables"**
2. Add a new **Environment Variable**:
   - **Variable name**: `RESEND_API_KEY`
   - **Value**: `re_LCVtZVoo_4z78tSfEHZ1y4hJqKm7czoBG`
3. Click **"Save and deploy"**

### **5. Get Your Worker URL**

Your worker will be available at:

```
https://dashinfluence-email-worker.your-subdomain.workers.dev
```

### **6. Update Frontend Configuration**

Update `client/src/config/api.ts` with your actual worker URL:

```javascript
export const API_BASE_URL = isDevelopment
  ? "http://localhost:3000" // Local development
  : "https://dashinfluence-email-worker.your-subdomain.workers.dev"; // Your actual worker URL
```

## 🔗 **Custom Domain (Optional)**

For a cleaner URL, you can add a custom domain:

1. In Worker settings → **"Triggers"**
2. Add **"Custom Domain"**
3. Enter: `api.dashinfluence.com`
4. Update your Cloudflare DNS:
   - **Type**: CNAME
   - **Name**: `api`
   - **Content**: `dashinfluence-email-worker.your-subdomain.workers.dev`
   - **Proxy**: DNS only

## ✅ **Test Your Worker**

### **Test Contact Form:**

```bash
curl -X POST https://dashinfluence-email-worker.your-subdomain.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "firstName": "John",
    "lastName": "Doe",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### **Test Early Access Form:**

```bash
curl -X POST https://dashinfluence-email-worker.your-subdomain.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "early-access",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "company": "Test Company"
  }'
```

## 🎯 **Deploy Frontend**

1. Update the API URL in your frontend
2. Deploy to Cloudflare Pages
3. Test forms on your live site

## 🆘 **Troubleshooting**

### **If Worker Returns 500:**

- Check Cloudflare Worker logs in the dashboard
- Verify `RESEND_API_KEY` is set correctly
- Ensure Resend API key is valid

### **If CORS Errors:**

- The worker already includes CORS headers
- Check that your frontend is making requests to the correct URL

### **If Emails Not Sending:**

- Check Resend dashboard for delivery status
- Verify `hello@dashinfluence.com` is verified in Resend
- Check worker logs for API errors

## 🚀 **Benefits of This Setup**

1. **No Server Management** - Cloudflare handles everything
2. **Global Performance** - Runs on Cloudflare's edge network
3. **Automatic Scaling** - Handles traffic spikes automatically
4. **Cost Effective** - Free tier covers most use cases
5. **Secure** - Built-in security features
6. **Integrated** - Works seamlessly with your existing Cloudflare setup
