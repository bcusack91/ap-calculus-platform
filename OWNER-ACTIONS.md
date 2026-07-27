# Owner Actions

Three things left that only you can do. Everything else is done.

**Do #1 first.** There's no point driving signups into a verification email that
lands in spam.

| # | Action | Where | Time |
|---|---|---|---|
| 1 | Email → studymondo.com, with DKIM + DMARC | Resend · GoDaddy DNS · Vercel | 30 min + propagation |
| 2 | Stripe live keys + webhook | Stripe · Vercel | 20 min |
| 3 | `privacy@` alias | GoDaddy | 2 min |

---

## 1. Fix email deliverability 🔴

**Why:** your verification and password-reset emails are landing in spam. The
sending domain has no DKIM, no return-path subdomain, and no DMARC record —
Gmail and Yahoo have spam-foldered unauthenticated bulk mail since February
2024. This is very likely a major reason only **2.6%** of your 2,849 signups
ever completed a single quiz: a large share never received a working
verification email.

Because Cusack Prep is being retired, this moves sending to `studymondo.com`
rather than repairing the old domain — fixing deliverability and the branding in
one pass, and putting `privacy@` (action #3) on the same domain.

### 1a. Add the domain to Resend

1. **resend.com** → **Domains** → **Add Domain**
2. Enter `studymondo.com`, pick the region closest to you
3. Resend shows **three DNS records**. Keep that page open.

### 1b. Add those records at GoDaddy

**godaddy.com** → **My Products** → studymondo.com → **DNS** → **Manage Zones**

The records will look like this:

| Type | Name | Value |
|---|---|---|
| `MX` | `send` | `feedback-smtp.us-east-1.amazonses.com` (priority `10`) |
| `TXT` | `send` | `v=spf1 include:amazonses.com ~all` |
| `TXT` | `resend._domainkey` | `p=MIGfMA0GCSq...` (long key) |

⚠️ **Copy the actual values from your Resend page, not from this table** — the
DKIM key is unique to you and the region may differ.

⚠️ GoDaddy sometimes appends the domain automatically. If it turns `send` into
`send.studymondo.com.studymondo.com`, enter just `send`.

### 1c. Add DMARC

Still in GoDaddy DNS, add one more record:

| Type | Name | Value |
|---|---|---|
| `TXT` | `_dmarc` | `v=DMARC1; p=none; rua=mailto:brendan@studymondo.com; fo=1` |

`p=none` means "monitor, don't reject" — the safe starting point. After a few
weeks of clean reports you can tighten it to `p=quarantine`.

### 1d. Verify and switch over

1. Back in Resend, click **Verify DNS Records**. Propagation takes 15 minutes to
   a few hours. Green checkmarks on all three = done.
2. **Vercel** → project → **Settings** → **Environment Variables** → set:
   ```
   SMTP_FROM = Study Mondo <noreply@studymondo.com>
   ```
3. **Redeploy** (Deployments → ⋯ on the latest → Redeploy). Env changes don't
   take effect until you do.

### 1e. Prove it works

1. On the live site, use **forgot password** with your own address.
2. It should arrive from `noreply@studymondo.com`, **in the inbox, not spam**.
3. In Gmail: open it → ⋮ → **Show original**. You want:
   ```
   SPF:   PASS
   DKIM:  PASS
   DMARC: PASS
   ```
4. Optional: send a test to **mail-tester.com**, aim for 9/10+.

### 1f. Retire the old domain

Once studymondo.com is verified and sending, remove `cusackprep.com` from
Resend → Domains. Nothing in the codebase references it any more.

---

## 2. Turn on Stripe 🟠

**Why:** the site is deliberately ad-free — the ad components render nothing —
so subscriptions are the entire business model. Right now `/pricing` → checkout
returns **HTTP 503** because the keys aren't set. You have 1 paying user.

### 2a. Create the products

1. **dashboard.stripe.com** → toggle **Test mode OFF** (top right)
2. **Product catalog** → **Add product**
   - Name: `Study Mondo Premium`
   - Add a **monthly recurring** price → copy its ID (`price_...`)
   - **Add another price** → **yearly recurring** → copy that ID too

### 2b. Create the webhook

1. **Developers** → **Webhooks** → **Add endpoint**
2. Endpoint URL: `https://www.studymondo.com/api/stripe/webhook`
3. **Select events:**
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. Click **Reveal** under **Signing secret** → copy the `whsec_...` value

### 2c. Put the keys in Vercel

**Vercel** → project → **Settings** → **Environment Variables**, for the
**Production** environment:

| Variable | Where it comes from |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe → Developers → API keys → **Secret key** (`sk_live_...`) |
| `STRIPE_WEBHOOK_SECRET` | the `whsec_...` from 2b |
| `STRIPE_PREMIUM_PRICE_ID` | the **monthly** `price_...` |
| `STRIPE_PREMIUM_ANNUAL_PRICE_ID` | the **annual** `price_...` |
| `NEXT_PUBLIC_APP_URL` | `https://www.studymondo.com` |

Then **Redeploy**.

⚠️ `sk_live_...` is a live-money credential. Never paste it into git, a
screenshot, or a chat window — Vercel only.

### 2d. Test with a real card

1. `/pricing` on the live site → subscribe
2. Use a real card (live mode rejects test cards), then **refund yourself** in
   Stripe → Payments
3. Confirm your account flipped to Premium, and that Stripe → Webhooks shows a
   **200** for the event

---

## 3. Create privacy@studymondo.com 🟠

**Why:** your public `/security` and `/dpa` pages tell school districts to
contact `privacy@studymondo.com`. A district emailing it and bouncing is a dead
adoption lead.

Your email is **Microsoft 365 via GoDaddy**:

1. **productivity.godaddy.com**
2. **Email & Office** admin → select `studymondo.com`
3. **Email aliases** → **Add alias**
4. Alias `privacy` → forward to your real inbox
5. Send yourself a test and confirm it lands

> If you'd rather not create an alias, tell me and I'll change the two public
> pages to whatever address you prefer.

---

## When a district asks for a DPA

Not a task — just so you know what to expect. The `/security` and `/dpa` pages
are built and linked in the footer; they tell districts how to start. What's
left is the human signature: sign their agreement, or the SDPC / NDPA national
template (privacy.a4l.org). You can optionally register on the SDPC proactively
so districts can find you.
