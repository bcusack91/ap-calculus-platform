# Google Search Console Setup Guide

## Step 1: Verify Your Site in Google Search Console

### 1.1 Go to Google Search Console
- Visit: https://search.google.com/search-console
- Sign in with your Google account

### 1.2 Add Your Property
- Click "Add property" (top left)
- Choose **"URL prefix"** option
- Enter: `https://studymondo.com`
- Click "Continue"

### 1.3 Verify Ownership
Google will give you several verification methods. **Easiest option: HTML tag**

**HTML Tag Method:**
1. Copy the meta tag Google provides
2. Add it to your Next.js layout file

I'll show you where to add it in the next step.

---

## Step 2: Add Verification Meta Tag

Open `/src/app/layout.tsx` and add the Google verification meta tag to the metadata object:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://studymondo.com"),
  title: "Study Mondo — Free AP Study Platform",
  description: "...",
  verification: {
    google: 'YOUR_VERIFICATION_CODE_HERE', // Add this line
  },
  other: {
    "google-adsense-account": "ca-pub-8403501245603262",
  },
  // ... rest of metadata
}
```

**How to get your verification code:**
1. Google will show you a meta tag like: `<meta name="google-site-verification" content="ABC123..." />`
2. Copy only the content part: `ABC123...`
3. Paste it where it says `YOUR_VERIFICATION_CODE_HERE`

**Deploy your changes**, then click "Verify" in Search Console.

---

## Step 3: Submit Your Sitemap

Once verified:

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**

Your sitemap includes:
- ✅ Homepage
- ✅ All 20 course pages
- ✅ All 534 topic pages
- ✅ All category pages
- ✅ Privacy, Terms, About, Contact pages

**Total: ~560+ URLs submitted for indexing!**

---

## Step 4: Request Manual Indexing (Fast Track)

Google Search Console lets you request indexing for individual URLs:

1. Go to **URL Inspection** tool (top search bar)
2. Enter a URL (e.g., `https://studymondo.com`)
3. Click **Request Indexing**

**Priority URLs to request indexing for:**
- Homepage: `https://studymondo.com`
- AP Calculus AB/BC: `https://studymondo.com/courses/ap-calculus-ab-bc`
- AP Physics 1: `https://studymondo.com/courses/ap-physics-1`
- AP Chemistry: `https://studymondo.com/courses/ap-chemistry`
- AP Biology: `https://studymondo.com/courses/ap-biology`
- SAT Prep: `https://studymondo.com/courses/sat-prep`
- ACT Prep: `https://studymondo.com/courses/act-prep`

You can manually request ~10 URLs per day. Focus on:
- Top course landing pages
- Most popular topics
- Homepage

**Timeline:** Manually requested pages often get indexed within **1-3 days**.

---

## Step 5: Monitor Indexing Progress

### Check Coverage Report
1. Go to **Coverage** (or "Pages") in Search Console
2. You'll see:
   - **Indexed**: Pages successfully in Google
   - **Not indexed**: Pages Google hasn't crawled yet
   - **Errors**: Issues preventing indexing

### What to Expect
- **Week 1-2:** Homepage + manually requested pages indexed
- **Week 2-4:** Sitemap pages start getting indexed (batches)
- **Week 4-8:** Most/all 534+ pages indexed

**Note:** Google indexes ~50-100 pages/day for new sites initially, then accelerates.

---

## Step 6: Performance Tracking

### Use the Performance Report
Once pages are indexed, track:
- **Impressions**: How many times your pages show in search
- **Clicks**: How many people click through
- **Average Position**: Where you rank for keywords
- **Top Queries**: What people search to find you

**Early signals to look for:**
- Impressions start showing up (means Google is showing your pages)
- Clicks increase (people finding you organically)
- Queries like "AP Calculus practice problems", "SAT math help", etc.

---

## Step 7: Accelerate Indexing with Backlinks

Google crawls faster when your site has external links (backlinks). Here's how to get initial backlinks:

### Quick Wins (Do Today):
1. **Reddit** - Share on:
   - r/APStudents
   - r/SATACTprep
   - r/homeschool
   - r/education
   - r/learnmath

2. **Twitter/X** - Tweet about your free platform with hashtags:
   - #APCalc
   - #SATPrep
   - #EdTech
   - #FreeEducation

3. **Quora** - Answer questions like:
   - "Best free AP Calculus resources?"
   - "How to study for SAT Math?"
   - Include link to your site

4. **Education Directories**:
   - Submit to: https://www.education.com
   - Submit to: https://www.khanacademy.org (community forums)
   - Submit to: College Confidential forums

### Medium-Term (This Week):
1. **Product Hunt** - Launch your platform
2. **Hacker News** - Post in "Show HN"
3. **LinkedIn** - Share with education-focused groups
4. **Facebook Groups** - Education/homeschool communities

**Each backlink = Google crawls your site faster.**

---

## Step 8: Check Your Site's Technical SEO

Run these tests:

1. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Your site should pass (Next.js is responsive)

2. **Core Web Vitals**
   - https://pagespeed.web.dev/
   - Check your homepage performance
   - Aim for "Good" scores

3. **Rich Results Test**
   - https://search.google.com/test/rich-results
   - Check if structured data is working (optional)

---

## Step 9: AdSense Approval Checklist

Before applying (or if you already applied):

### Required Pages (You Have These ✅)
- ✅ Privacy Policy: `/privacy`
- ✅ About Us: `/about`
- ✅ Contact: `/contact`
- ✅ Terms of Service: `/terms`

### Content Requirements (You Have This ✅)
- ✅ 20+ high-quality pages (you have 534 topics!)
- ✅ Original content (all your educational material)
- ✅ Professional design (clean Next.js UI)
- ✅ Mobile-friendly (responsive)

### Additional Requirements
- ✅ Domain ownership (you own studymondo.com)
- ✅ Traffic (AdSense likes to see some traffic first)
- ✅ No prohibited content (education is perfect)

**Note:** Some people get approved in 2-3 days, others in 1-2 weeks. 

**Pro tip:** Wait until you have at least 50-100 daily visitors before applying (shows Google you have real traffic).

---

## Step 10: Track AdSense Application Status

If you already applied:
1. Check your email for updates
2. Log in to AdSense dashboard: https://www.google.com/adsense
3. Look for approval status

If not approved:
- Google will tell you what's missing
- Common issues: Low traffic, missing pages (you're good), or "site under construction"

If rejected:
- Fix the issue Google mentions
- Wait 2 weeks
- Reapply

---

## Quick Action Checklist

Do these today to accelerate indexing:

- [ ] Verify site in Google Search Console
- [ ] Add verification meta tag to `layout.tsx`
- [ ] Deploy changes
- [ ] Submit sitemap (`sitemap.xml`)
- [ ] Manually request indexing for homepage + top 5 courses
- [ ] Share site on Reddit (1-2 subreddits)
- [ ] Tweet about your platform
- [ ] Test mobile-friendliness: https://search.google.com/test/mobile-friendly
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/

---

## Timeline Expectations

### With Search Console + Sitemap Submission:
- **Day 1-3:** Homepage indexed
- **Week 1:** Top course pages indexed (~10-20 pages)
- **Week 2:** 100+ pages indexed
- **Week 3-4:** 300+ pages indexed
- **Week 4-8:** All 534 topics indexed

### Without Search Console (Organic):
- **Week 2-4:** Homepage indexed
- **Week 4-8:** Slow indexing of inner pages
- **Month 2-3:** Most pages indexed

**You can speed this up by 4-6 weeks by using Search Console!**

---

## Next Steps After Indexing

Once you see pages indexed:

1. **Monitor which topics rank well**
   - Use Google Search Console Performance report
   - Double down on high-performing topics

2. **Optimize meta descriptions**
   - For topics that get impressions but low clicks
   - Make descriptions more compelling

3. **Create internal linking strategy**
   - Link related topics to each other
   - Helps Google discover pages faster

4. **Build more backlinks**
   - Guest posts on education blogs
   - Partnerships with teachers/tutors
   - YouTube videos linking to your site

5. **Track AdSense revenue**
   - Once approved, monitor RPM (revenue per 1000 impressions)
   - Optimize ad placement based on data

---

## Support

If you run into issues:
- Google Search Console Help: https://support.google.com/webmasters
- AdSense Help: https://support.google.com/adsense
- Community forums: https://support.google.com/webmasters/community

---

**You're all set! Your site is ready for Google indexing and AdSense approval. The technical foundation is solid—now it's all about getting the word out and building traffic.** 🚀
