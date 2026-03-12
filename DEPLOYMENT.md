# 🚀 Deployment Guide - AP Calculus Platform

## Step-by-Step Vercel Deployment

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Name it: `ap-calculus-platform` (or your preferred name)
4. Make it **Private** (recommended) or Public
5. **Do NOT** initialize with README (we already have one)
6. Click **"Create repository"**

### 2. Push Your Code to GitHub

Run these commands in your terminal:

\`\`\`bash
cd "/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ap-calculus-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"** with GitHub
3. Click **"Add New..."** → **"Project"**
4. **Import** your `ap-calculus-platform` repository
5. Vercel will auto-detect Next.js settings ✅
6. Click **"Deploy"**

**Your site will be live in ~2 minutes at:**
`your-project-name.vercel.app`

### 4. Set Up PostgreSQL Database

**Option A: Vercel Postgres (Recommended)**

1. In your Vercel project dashboard
2. Go to **Storage** tab
3. Click **"Create Database"** → **"Postgres"**
4. Click **"Create"**
5. Vercel automatically adds `DATABASE_URL` to your environment variables ✅

**Option B: External PostgreSQL (Supabase, Railway, etc.)**

1. Create a PostgreSQL database on your preferred provider
2. Copy the connection string
3. In Vercel: **Settings** → **Environment Variables**
4. Add `DATABASE_URL` = your connection string

### 5. Add Environment Variables

In Vercel dashboard → **Settings** → **Environment Variables**, add:

\`\`\`
DATABASE_URL=<automatically-added-if-using-vercel-postgres>
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=<generate-with-command-below>
\`\`\`

Generate NEXTAUTH_SECRET:
\`\`\`bash
openssl rand -base64 32
\`\`\`

### 6. Run Database Migrations

After database is connected:

1. In Vercel dashboard, go to **Deployments**
2. Click on your latest deployment → **"..."** → **"Redeploy"**
3. Or run locally then push migrations:

\`\`\`bash
# Update .env with production DATABASE_URL
npx prisma migrate deploy
npx prisma generate
\`\`\`

### 7. Seed Your Production Database

You can either:

**Option A: Run seed scripts from Vercel CLI**
\`\`\`bash
npm i -g vercel
vercel link
vercel env pull .env.production
# Then run seed scripts with production DATABASE_URL
\`\`\`

**Option B: Create a seed API endpoint** (recommended for large datasets)

Or manually run seed scripts after updating DATABASE_URL in .env

### 8. Add Custom Domain (Optional)

1. Buy domain from GoDaddy, Namecheap, Google Domains, etc.
2. In Vercel: **Settings** → **Domains**
3. Click **"Add"**
4. Enter your domain (e.g., `apcalculus.com`)
5. Follow DNS setup instructions
6. Wait 10-30 minutes for propagation
7. ✅ Done! Automatic HTTPS included

### 9. Update NEXTAUTH_URL

After adding custom domain:

1. Go to **Settings** → **Environment Variables**
2. Update `NEXTAUTH_URL` to your custom domain
3. **Redeploy** the project

---

## 📊 Post-Deployment Checklist

- [ ] Site is live and loading correctly
- [ ] Database is connected
- [ ] All 69 topics are seeded and displaying
- [ ] Math equations render properly (KaTeX)
- [ ] Ads are displaying in all positions
- [ ] Mobile responsive design works
- [ ] Custom domain connected (if applicable)
- [ ] NEXTAUTH_URL updated with production URL

---

## 🎯 Next Steps

### Set Up Google AdSense

1. Apply for [Google AdSense](https://www.google.com/adsense)
2. Add your site and verify ownership
3. Wait for approval (usually 1-2 weeks)
4. Replace placeholder ad components with real AdSense code
5. Start earning! 💰

### Monitor Performance

- **Vercel Analytics**: Built-in, enable in dashboard
- **Google Analytics**: Add tracking code to layout.tsx
- **AdSense Reports**: Monitor revenue and impressions

### Content Updates

To add more topics or update content:

\`\`\`bash
# Make changes locally
git add .
git commit -m "Add new topics"
git push

# Vercel auto-deploys on push! ✅
\`\`\`

---

## 🆘 Troubleshooting

**Issue**: Database connection failed
- **Fix**: Check DATABASE_URL is correct in environment variables

**Issue**: Pages showing 404
- **Fix**: Ensure database is seeded with topics

**Issue**: Math not rendering
- **Fix**: KaTeX CSS is included in layout

**Issue**: Ads not showing
- **Fix**: Replace placeholder ads with real AdSense code after approval

---

## 🎉 You're Live!

Your AP Calculus platform is now accessible worldwide!

**Share it**: `https://your-domain.com`

Good luck with your educational platform! 🚀📚
