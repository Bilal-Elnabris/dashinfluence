# Dash Influence Development Troubleshooting Guide

## 🚀 Quick Start

Use the development script for the easiest setup:

```bash
./dev.sh
```

This will automatically:

- Clean up any existing processes
- Check port availability
- Start both frontend and backend servers
- Provide clear status messages

## 🔧 Common Issues & Solutions

### 1. Port Conflicts (EADDRINUSE)

**Symptoms:**

```
Error: listen EADDRINUSE: address already in use 0.0.0.0:3000
```

**Causes:**

- Multiple processes trying to use the same port
- Previous development session didn't shut down properly
- Other applications using the ports

**Solutions:**

**Option A: Use the dev script (Recommended)**

```bash
./dev.sh
```

**Option B: Manual cleanup**

```bash
# Kill all related processes
pkill -f "tsx server/index.ts"
pkill -f "vite"
sleep 2

# Check what's using the ports
lsof -i :3000
lsof -i :5173
```

**Option C: Kill specific processes**

```bash
# Find process IDs
ps aux | grep -E "(tsx|vite)" | grep -v grep

# Kill by PID
kill -9 <PID>
```

### 2. Module System Errors

**Symptoms:**

```
ReferenceError: require is not defined
```

**Causes:**

- Mixing CommonJS (`require`) and ES Modules (`import`)
- Incorrect TypeScript configuration
- Missing module resolution settings

**Solutions:**

**Check package.json:**

```json
{
  "type": "module" // This should be present for ES modules
}
```

**Update tsconfig.json:**

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["client/src", "server/**/*", "shared/**/*"]
}
```

**Use proper import syntax:**

```typescript
// ✅ Correct (ES Modules)
import express from "express";
import { Resend } from "resend";

// ❌ Incorrect (CommonJS)
const express = require("express");
const { Resend } = require("resend");
```

### 3. Email Service Issues

**Symptoms:**

```
Resend API error: {"statusCode":403,"error":"The dashinfluence.com domain is not verified"}
```

**Causes:**

- Domain not verified in Resend
- Using unverified sender email
- Missing or incorrect API key

**Solutions:**

**For development (using verified email):**

```typescript
const { data, error } = await resend.emails.send({
  from: "Dash Influence <dashinfluence@gmail.com>", // Use verified email
  to: ["dashinfluence@gmail.com"], // Send to verified email
  subject: "New Contact Form Submission",
  // ... rest of email config
});
```

**For production (after domain verification):**

1. Go to https://resend.com/domains
2. Add and verify your domain
3. Update the `from` address to use your domain
4. Update the `to` address to your business email

### 4. TypeScript Configuration Issues

**Symptoms:**

```
SyntaxError: Unexpected non-whitespace character after JSON at position 542
```

**Causes:**

- Invalid JSON syntax in tsconfig.json
- Missing commas or brackets
- Extra characters

**Solutions:**

**Validate JSON syntax:**

```bash
# Check if JSON is valid
node -e "JSON.parse(require('fs').readFileSync('tsconfig.json', 'utf8'))"
```

**Use a proper tsconfig.json:**

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["client/src", "server/**/*", "shared/**/*"],
  "exclude": ["node_modules"]
}
```

### 5. Environment Variables

**Symptoms:**

```
Resend API key not configured
```

**Causes:**

- Missing .env file
- Incorrect environment variable names
- Environment variables not loaded

**Solutions:**

**Create/update .env file:**

```bash
# .env
RESEND_API_KEY=re_your_api_key_here
NODE_ENV=development
```

**Check environment loading:**

```typescript
// In your server code
console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Set" : "Not set");
```

**Verify dotenv is working:**

```typescript
import dotenv from "dotenv";
dotenv.config();
```

## 🛠️ Development Workflow

### Starting Development

```bash
# Option 1: Use the dev script (recommended)
./dev.sh

# Option 2: Manual start
pnpm run dev:server &  # Backend on port 3000
pnpm dev              # Frontend on port 5173
```

### Stopping Development

```bash
# If using dev script, just press Ctrl+C

# Manual cleanup
pkill -f "tsx server/index.ts"
pkill -f "vite"
```

### Checking Server Status

```bash
# Check what's running
ps aux | grep -E "(tsx|vite)" | grep -v grep

# Check ports
lsof -i :3000  # Backend
lsof -i :5173  # Frontend
```

## 🔍 Debugging Tips

### 1. Check Logs

```bash
# Backend logs
pnpm run dev:server

# Frontend logs
pnpm dev
```

### 2. Network Issues

```bash
# Test API endpoints
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","message":"test"}'
```

### 3. Database Issues

```bash
# Check database connection
pnpm run db:push
```

### 4. Build Issues

```bash
# Clean and rebuild
rm -rf node_modules
pnpm install --frozen-lockfile
pnpm run build
```

## 📚 Learning Resources

### Understanding the Issues

1. **Port Management:**

   - Learn about TCP ports and how they work
   - Understand process management in Unix/Linux
   - Study the `lsof` and `netstat` commands

2. **Module Systems:**

   - ES Modules vs CommonJS
   - TypeScript module resolution
   - Package.json "type" field

3. **Environment Configuration:**

   - Environment variables in Node.js
   - .env files and dotenv
   - Security best practices

4. **Process Management:**
   - Unix process signals
   - Background processes
   - Process cleanup

### Tools to Master

- **lsof**: List open files and ports
- **ps**: Process status
- **kill/pkill**: Process termination
- **curl**: HTTP requests for testing
- **netstat**: Network statistics

## 🎯 Best Practices

1. **Always use the dev script** for consistent development environment
2. **Check ports before starting** to avoid conflicts
3. **Use proper error handling** in your code
4. **Keep environment variables secure** and never commit them
5. **Regularly clean up processes** to avoid resource leaks
6. **Use TypeScript strict mode** for better code quality
7. **Test API endpoints** before deploying

## 🆘 Getting Help

If you encounter issues not covered here:

1. Check the terminal output for specific error messages
2. Use the debugging commands above
3. Check the official documentation for the tools you're using
4. Search for similar issues on Stack Overflow
5. Ask for help with specific error messages and context
