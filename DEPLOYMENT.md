# 🚀 Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## ⚡ Quick Deploy (Recommended)

### Vercel (One-Click Deploy)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanaullahkhan1266/protfolio)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Configure project settings (use defaults)
4. Deploy! Your site will be live in minutes

**Benefits:**
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs

## 🌐 Alternative Deployment Options

### Netlify
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out` (if using static export)
5. Deploy site

### AWS Amplify
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Choose "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   ```yaml
   version: 1
   applications:
     - frontend:
         phases:
           preBuild:
             commands:
               - npm install
           build:
             commands:
               - npm run build
         artifacts:
           baseDirectory: .next
           files:
             - '**/*'
   ```

### Digital Ocean App Platform
1. Go to [Digital Ocean Apps](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your GitHub repository
4. Configure:
   - Source: Your GitHub repo
   - Branch: main
   - Build command: `npm run build`
   - Run command: `npm start`

## 🛠️ Custom Server Deployment

### Docker Deployment
1. Create `Dockerfile`:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. Build and run:
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

### Traditional VPS/Server
1. Clone repository on your server
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Start the application: `npm start`
5. Use PM2 for production:
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 startup
   pm2 save
   ```

## 🔧 Environment Configuration

### Required Environment Variables
Create a `.env.local` file (if needed):
```env
# Add any environment variables here
# Example: NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Build Optimization
For optimal performance, ensure these settings in `next.config.ts`:
```typescript
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    domains: ['your-domain.com'],
  },
  
  // Static export (if needed)
  output: 'export',
  trailingSlash: true,
}
```

## 📊 Performance Monitoring

### Vercel Analytics
Add to your project:
```bash
npm install @vercel/analytics
```

### Google Analytics
1. Get GA4 tracking ID
2. Add to `_app.tsx` or `layout.tsx`
3. Set environment variable

## 🔒 Security Headers

Add security headers in `next.config.ts`:
```typescript
const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 🚨 Troubleshooting

### Common Issues
1. **Build fails**: Check Node.js version (18+ required)
2. **3D models not loading**: Ensure `.glb` files are in `public/models/`
3. **Styling issues**: Verify TailwindCSS configuration
4. **Type errors**: Run `npx tsc --noEmit` to check

### Support
- Create an issue on GitHub
- Check the deployment platform's documentation
- Review build logs for specific errors

---

🎉 **Happy Deploying!** Your portfolio will be live and accessible worldwide!