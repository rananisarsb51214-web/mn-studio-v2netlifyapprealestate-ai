https://github.com/rananisarsb51214-web/mn-studio-v2netlifyapprealestate-ai.git# Real Estate AI

Real Estate AI is a modern SaaS platform designed for real estate professionals. It provides actionable intelligence by automatically evaluating property listings, scoring leads using behavioral data, and instantly generating high-conversion marketing content.

## Features

- **AI Property Analysis Engine**: Automatically evaluates listings, pricing trends, ROI potential, and market signals with predictive modeling.
- **Smart Lead Intelligence**: Filters, scores, and prioritizes prospects using behavioral data and intent detection—no wasted pipeline.
- **Automated Content Generation**: High-conversion property descriptions, ad copy, and marketing assets generated instantly.

## Tech Stack

- **Framework**: TanStack Start
- **Frontend**: React 19, TanStack Router v1
- **Build**: Vite 7
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5.7

## Getting Started

To run the application locally, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite/Netlify Dev).

## Building for Production

To build the application for production, run:
```bash
npm run build
```

You can preview the built application with:
```bash
npm run preview
```
Install and Configure Vercel

Overview

Vercel is a cloud deployment platform built for modern frontend frameworks and serverless architectures. It automates build pipelines, global CDN delivery, SSL provisioning, edge functions, and continuous deployment directly from Git repositories.

This setup configures:

Automatic deployments from GitHub/GitLab/Bitbucket

Production + preview environments

Custom domains

Environment variables

Edge/serverless functions

Build optimization

CI/CD rollback support



---

Core Architecture

Developer Push
      ↓
Git Repository
      ↓
Vercel Build System
      ↓
Static/SSR Compilation
      ↓
Global Edge CDN
      ↓
Production Deployment


---

Installation

1. Install Vercel CLI

npm install -g vercel

Verify:

vercel --version


---

Authentication

vercel login

Supported:

GitHub

GitLab

Bitbucket

Email OTP



---

Initialize Project

Inside project root:

vercel

CLI automatically detects:

Next.js

React

Vite

Vue

Svelte

Nuxt

Astro

Node APIs



---

Production Deploy

vercel --prod


---

Environment Variables

Add securely:

vercel env add

Example:

FIREBASE_API_KEY=
CLAUDE_API_KEY=
NEXT_PUBLIC_API_URL=

Pull locally:

vercel env pull .env.local


---

Custom Domain

Attach domain:

vercel domains add yourdomain.com

DNS handled automatically if using:

Cloudflare

Namecheap

GoDaddy

Route53



---

Recommended Project Structure

project/
├── app/
├── components/
├── lib/
├── api/
├── public/
├── firebase/
├── middleware.ts
├── vercel.json
├── package.json
└── .env.local


---

Example vercel.json

{
  "framework": "nextjs",
  "cleanUrls": true,
  "trailingSlash": false,
  "functions": {
    "api/**/*.js": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}


---

Security Hardening

Required

Disable exposed source maps

{
  "productionBrowserSourceMaps": false
}

Prevent ENV leakage

Never expose:

Firebase admin keys

Claude private keys

service accounts


Only expose:

NEXT_PUBLIC_*

Add middleware protection

export function middleware(req) {
  // auth validation
}


---

Rollback Strategy

Instant rollback:

vercel rollback

Or restore older deployment from dashboard.


---

CI/CD Flow

Git Push
   ↓
Preview Deployment
   ↓
Automated Testing
   ↓
Production Promotion


---

Performance Stack

Enabled automatically:

Edge CDN

Brotli compression

Image optimization

ISR caching

Smart routing

HTTP/3



---

Firebase Integration

Recommended deployment pattern:

Frontend → Vercel
Backend APIs → Firebase Functions
Database → Firestore
Storage → Firebase Storage
Auth → Firebase Auth


---

Common Commands

vercel
vercel --prod
vercel ls
vercel logs
vercel inspect
vercel env pull
vercel rollback


---

Failure Recovery

Build failure

rm -rf .next node_modules
npm install
vercel --prod

Cache corruption

vercel build --force


---

Recommended Stack

Frontend: Next.js
Hosting: Vercel
Backend: Firebase
AI: Claude API
Storage: Firestore
Analytics: GA4 + Vercel Analytics
Monitoring: Sentry
