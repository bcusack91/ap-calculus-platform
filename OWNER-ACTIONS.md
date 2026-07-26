# Owner Actions — step-by-step

Four things only you can do. They're ordered: #1 makes your data trustworthy,
#2 unblocks signups, #3 turns on revenue, #4 is a two-minute alias.

> **Note on #2 and #4:** you asked to remove Cusack Prep from the site. That
> changes the email plan — the fix below moves sending to **studymondo.com**
> rather than repairing `cusackprep.com` DNS. Do it this way and both the
> branding and the deliverability problem are solved at once.

---

## 1. Purge the 17,379 junk analytics rows — 🔴 do this first

**Why:** a client bug re-submitted each completed quiz ~every 400ms until the
student navigated away. 17,379 of your 17,583 recorded quiz attempts are that
loop. Until they're gone, every dashboard, funnel, retention chart and alert you
have is inflated roughly 100×. The bug itself is already fixed and deployed.

**Do this** — in the project folder, in Terminal:

```bash
cd "/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based"

# 1. Dry run — changes nothing, just shows you the plan
npx tsx scripts/cleanup-exit-quiz-loop-rows.ts
```

Expected output:

```
total rows:      17583
loop rows:       17379
would remain:    204
```

If those numbers look right:

```bash
# 2. For real. Writes scripts/_exit-quiz-loop-backup.json before deleting.
npx tsx scripts/cleanup-exit-quiz-loop-rows.ts --execute
```

**How it decides what to delete:** a row is junk only if an *identical* row
(same user, topic, score, total) exists less than 30 seconds earlier. The first
attempt of every burst survives, and so does every genuine attempt — a real
retake is minutes apart, not seconds.

**If something looks wrong afterward:** the deleted rows are in
`scripts/_exit-quiz-loop-backup.json`. Tell me and I'll restore them.

**Afterwards** your real numbers will be roughly: ~204 quiz attempts from 74
students. That's the honest baseline you'll measure growth against.

---

## 2. Fix email deliverability — 🔴 and drop cusackprep.com while you're in there

**Why:** your verification and password-reset emails are landing in spam.
`cusackprep.com` has no Resend DKIM, no return-path subdomain, and no DMARC
record — Gmail and Yahoo have rejected or spam-foldered unauthenticated bulk
mail since February 2024. This is very likely a major reason only 2.6% of your
2,847 signups ever completed a single quiz: **a large share of them never
received a working verification email.**

Since you're removing Cusack Prep, move sending to `studymondo.com` instead of
repairing the old domain.

### 2a. Add studymondo.com to Resend

1. Go to **resend.com** → **Domains** → **Add Domain**
2. Enter `studymondo.com`, pick the region closest to you
3. Resend shows you **three DNS records**. Keep that page open.

### 2b. Add those records at your DNS host

Your DNS is at **GoDaddy** (that's where studymondo.com is managed).
Go to **godaddy.com** → **My Products** → studymondo.com → **DNS** → **Manage Zones**.

Add exactly what Resend showed you. They will look like this:

| Type | Name | Value |
|---|---|---|
| `MX` | `send` | `feedback-smtp.us-east-1.amazonses.com` (priority `10`) |
| `TXT` | `send` | `v=spf1 include:amazonses.com ~all` |
| `TXT` | `resend._domainkey` | `p=MIGfMA0GCSq...` (long key — copy Resend's exact value) |

⚠️ **Copy the values from your Resend page, not from this table** — the DKIM key
is unique to you and the region may differ.

⚠️ GoDaddy sometimes appends the domain automatically. If it turns `send` into
`send.studymondo.com.studymondo.com`, enter just `send`.

### 2c. Add a DMARC record

Still in GoDaddy DNS, add one more:

| Type | Name | Value |
|---|---|---|
| `TXT` | `_dmarc` | `v=DMARC1; p=none; rua=mailto:brendan@studymondo.com; fo=1` |

`p=none` means "monitor, don't reject" — the safe starting point. After a few
weeks of clean reports you can tighten to `p=quarantine`.

### 2d. Verify and switch over

1. Back in Resend, click **Verify DNS Records**. It can take 15 minutes to a few
   hours to propagate. Green checkmarks on all three = done.
2. In **Vercel** → your project → **Settings** → **Environment Variables**,
   change `SMTP_FROM` to:
   ```
   Study Mondo <noreply@studymondo.com>
   ```
3. **Redeploy** (Vercel → Deployments → ⋯ on the latest → Redeploy). Env changes
   don't take effect until you do.

### 2e. Prove it works

1. On the live site, go to **forgot password**, enter your own address.
2. The mail should arrive from `noreply@studymondo.com`, **in the inbox, not spam**.
3. In Gmail open the message → ⋮ → **Show original**. You want:
   ```
   SPF:   PASS
   DKIM:  PASS
   DMARC: PASS
   ```
4. Optional but worth it: send a test to **mail-tester.com** and aim for 9/10+.

### 2f. Then retire cusackprep.com sending

Once studymondo.com is verified and sending, you can remove `cusackprep.com`
from Resend → Domains. Nothing in the codebase references it any more.

---

## 3. Turn on Stripe — 🟠 this is your only revenue path

**Why:** the site is deliberately ad-free (the ad components render nothing), so
subscriptions are the entire business model. Right now `/pricing` → checkout
returns **HTTP 503** because the keys aren't set. You have 1 paying user.

### 3a. Create the products

1. **dashboard.stripe.com** → toggle **Test mode OFF** (top right) so you're
   working in live mode
2. **Product catalog** → **Add product**
   - Name: `Study Mondo Premium`
   - Add a **monthly recurring** price → copy its ID (`price_...`)
   - Click **Add another price** → **yearly recurring** → copy that ID too
3. You now have two `price_` IDs. Keep them handy.

### 3b. Create the webhook

1. **Developers** → **Webhooks** → **Add endpoint**
2. Endpoint URL: `https://www.studymondo.com/api/stripe/webhook`
3. **Select events** — add these:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. After creating it, click **Reveal** under **Signing secret** → copy the
   `whsec_...` value

### 3c. Put the keys in Vercel

**Vercel** → project → **Settings** → **Environment Variables** → add each for
the **Production** environment:

| Variable | Where it comes from |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe → Developers → API keys → **Secret key** (`sk_live_...`) |
| `STRIPE_WEBHOOK_SECRET` | the `whsec_...` from step 3b |
| `STRIPE_PREMIUM_PRICE_ID` | the **monthly** `price_...` |
| `STRIPE_PREMIUM_ANNUAL_PRICE_ID` | the **annual** `price_...` |
| `NEXT_PUBLIC_APP_URL` | `https://www.studymondo.com` |

Then **Redeploy**.

⚠️ `sk_live_...` is a live-money credential. Never paste it into git, a
screenshot, or a chat window — Vercel only.

### 3d. Test with a real card

1. Go to `/pricing` on the live site → subscribe
2. Use a real card (live mode rejects test cards), then **refund yourself** in
   Stripe → Payments
3. Confirm your account flipped to Premium, and that Stripe → Webhooks shows a
   **200** response for the event

---

## 4. Create privacy@studymondo.com — 🟠 two minutes

**Why:** your public `/security` and `/dpa` pages tell school districts to
contact `privacy@studymondo.com`. That address must actually receive mail — a
district emailing it and bouncing is a dead adoption lead.

Your email is **Microsoft 365 via GoDaddy**:

1. Go to **productivity.godaddy.com**
2. **Email & Office** admin → select `studymondo.com`
3. **Email aliases** → **Add alias**
4. Alias: `privacy` → forward to your real inbox
5. Send yourself a test from a personal account and confirm it lands

> If you'd rather not create an alias, tell me and I'll change the two public
> pages to whatever address you prefer.

---

## Quick reference

| # | Action | Where | Time |
|---|---|---|---|
| 1 | Purge junk analytics rows | Terminal | 2 min |
| 2 | Move email to studymondo.com + DKIM/DMARC | Resend + GoDaddy DNS + Vercel | 30 min + propagation |
| 3 | Stripe live keys + webhook | Stripe + Vercel | 20 min |
| 4 | privacy@ alias | GoDaddy | 2 min |

Do **1** and **2** first. #1 makes your metrics real; #2 fixes the top of the
funnel, and there's no point driving signups into a broken verification email.
