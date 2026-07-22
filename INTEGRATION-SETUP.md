# Integration Setup — Owner Steps

_Everything below is the account/key/DNS side that Claude can't do for you. All the **code** is already shipped and dormant, gated on these env vars. Nothing changes on the live site until you add the keys **and redeploy**._

**Where env vars go:** Vercel → your project → **Settings → Environment Variables** → add for **Production** (and Preview if you test there) → then **Deployments → ⋯ → Redeploy** (env changes only take effect on a new deploy).

**How to verify afterward:** sign in as an admin → **/admin → 🩺 System tab**. Each service shows 🟢 Ready / 🟡 Needs setup / ⚪ Off, and exactly which variables are still missing. That page reads the *running* deployment, so check it after redeploying.

Priority order: **1 (email — likely already done, verify) → 2 (monitoring) → 3 (privacy alias) → 4 (Stripe, when you're ready to charge) → 5 (parent emails).**

---

## 1. ✅ Email (Resend) — you already set this up (~early July 2026); just verify

**Correction:** an earlier version of this guide said email was broken. That was wrong — it came from a stale checklist (frozen June 28, before you configured Resend), not a live check. Your `SMTP_FROM` is `Study Mondo <brendan@cusackprep.com>`, so **cusackprep.com** is your verified Resend domain, and the `RESEND_API_KEY` lives in Vercel prod (not in local `.env`, which is correct for a secret).

### Verify it's healthy (2 minutes)
- **/admin → 🩺 System tab** → **Email delivery** should show 🟢 Ready (this reads production's real env).
- **Functional test:** on the live site, go to the forgot-password page, enter your own email, and confirm the reset email arrives from `brendan@cusackprep.com`.
- If either fails, the usual causes are: the `cusackprep.com` domain verification lapsed in Resend (Resend → Domains — re-verify the DNS records), the free-tier send cap was hit (Resend → Usage), or the API key was rotated. Fix in the Resend dashboard, then confirm on the System tab.

### Original setup steps (for reference / if you ever re-provision)
1. Create an account at **https://resend.com** (free tier = 3,000 emails/mo, 100/day — fine to start).
2. **Add your domain:** Resend dashboard → **Domains → Add Domain**. Use a **subdomain** for sending, e.g. `send.studymondo.com` (keeps your main domain's email reputation separate — recommended).
3. Resend shows you **DNS records** (SPF/`MX`, `DKIM`, and usually a `DMARC` record). Add these in **GoDaddy** (your DNS host): productivity.godaddy.com isn't it — go to **dcc.godaddy.com** → your domain → **DNS → Add** each record exactly as Resend lists. Then click **Verify** in Resend (propagation is usually minutes, sometimes up to an hour).
4. Once the domain shows **Verified**, create an **API key**: Resend → **API Keys → Create API Key** (Full Access or Sending Access). Copy it (starts with `re_`).
5. In **Vercel env vars**, add:
   - `RESEND_API_KEY` = `re_…` (the key you just copied)
   - `SMTP_FROM` = `Study Mondo <noreply@send.studymondo.com>` — **must** use the domain/subdomain you verified in step 2.
6. Confirm `AUTH_SECRET` **or** `NEXTAUTH_SECRET` is already set (it signs unsubscribe/confirm links). If auth/login already works in production, this is set — the 🩺 System tab will confirm.
7. **Redeploy.**

### Verify
- 🩺 System tab → **Email delivery** shows 🟢 Ready.
- Real test: go to `/auth/forgot-password` (or wherever your reset link is), submit your own email, and confirm the reset email arrives.

---

## 2. 🩺 Error monitoring (Sentry) — 10 minutes, all code is done

The code is fully wired (server + browser + source-map support), sitting dark behind one env var. Turning it on means you find production breaks from an alert instead of by hand — like we just did twice with the Chaos enum and the reduced-motion bug.

### Steps
1. Create an account at **https://sentry.io** (free "Developer" tier is generous).
2. **Create a project** → platform **Next.js**. Sentry will show you setup instructions — **ignore the code steps (already done)**; you only need the **DSN**.
3. Copy the **DSN** (looks like `https://abc123@o456.ingest.us.sentry.io/789`). Find it anytime under **Project → Settings → Client Keys (DSN)**. _(A DSN is safe to expose publicly — it's write-only.)_
4. In **Vercel env vars**, add:
   - `NEXT_PUBLIC_SENTRY_DSN` = the DSN from step 3. **This one var turns on both server and browser capture.**
5. **(Optional but recommended — readable stack traces via source maps.)** Also add:
   - `SENTRY_ORG` = your Sentry org slug (Sentry → Settings → General → "Organization Slug")
   - `SENTRY_PROJECT` = your project slug
   - `SENTRY_AUTH_TOKEN` = create at **Sentry → Settings → Auth Tokens** with the `project:releases` + `org:read` scopes. _(Secret — do not prefix with `NEXT_PUBLIC_`.)_ Without this, errors still capture fine; the stack traces are just minified.
6. **Redeploy.**

### Verify
- 🩺 System tab → **Error monitoring** shows 🟢 Ready.
- Optional smoke test: Sentry's project setup page has a "trigger a test error" button, or just watch the Issues stream for a day.

---

## 3. 🟠 Privacy inbox alias — 2 minutes

Your public `/security` and `/dpa` pages tell districts to email **privacy@studymondo.com**. That address must actually receive mail.

### Steps
- Your email is **Microsoft 365 via GoDaddy**. Go to **productivity.godaddy.com** → **Email & Office** admin → your domain → **Email aliases** (or add a **shared mailbox** if 2+ people should read it) → add **privacy** → forward to `brendan@cusackprep.com` (or wherever you want it).
- **Alternative:** if you'd rather not create the alias, tell Claude "swap the privacy pages to brendan@cusackprep.com" and I'll change the pages instead.

### Verify
- Send a test email to privacy@studymondo.com and confirm it lands.

---

## 4. 🟠 Payments (Stripe) — when you're ready to charge

The checkout + webhook code is production-grade already (idempotency, dunning, role protection) — it just needs keys and a webhook. Currently checkout returns HTTP 503 ("checkout isn't switched on yet").

> You can do this whole thing in **Test mode** first (keys start `sk_test_`) to rehearse the flow with Stripe's test cards, then repeat with **Live mode** keys (`sk_live_`) when ready. The 🩺 System tab shows which mode you're in.

### Steps
1. **Create the product + prices:** Stripe Dashboard → **Products → Add product** → name it (e.g. "Study Mondo Premium"). Add a **monthly** recurring price (e.g. $9.99/mo). Optionally add an **annual** price too. Copy each **Price ID** (`price_…`).
2. **Get your secret key:** Stripe → **Developers → API keys → Secret key** (`sk_test_…` or `sk_live_…`).
3. **Create the webhook:** Stripe → **Developers → Webhooks → Add endpoint**:
   - **Endpoint URL:** `https://www.studymondo.com/api/stripe/webhook`
   - **Events to send** — select exactly these five (the handler processes them):
     `checkout.session.completed`, `invoice.payment_succeeded`, `customer.subscription.updated`, `invoice.payment_failed`, `customer.subscription.deleted`
   - After creating, copy the endpoint's **Signing secret** (`whsec_…`).
4. In **Vercel env vars**, add:
   - `STRIPE_SECRET_KEY` = `sk_…`
   - `STRIPE_WEBHOOK_SECRET` = `whsec_…`
   - `STRIPE_PREMIUM_PRICE_ID` = the monthly `price_…`
   - `STRIPE_PREMIUM_ANNUAL_PRICE_ID` = the annual `price_…` _(optional; enables the monthly/annual toggle)_
   - `NEXT_PUBLIC_APP_URL` = `https://www.studymondo.com` _(used for the post-checkout redirect; falls back to request origin if unset)_
5. **Redeploy.**

### Verify
- 🩺 System tab → **Payments** shows 🟢 Ready and the correct **TEST/LIVE** badge.
- In Test mode: go to `/premium`, start checkout, pay with card `4242 4242 4242 4242` (any future expiry/CVC), and confirm your account flips to PREMIUM. Stripe → Webhooks → your endpoint shows a `200` for the events.
- **Going live:** swap the four `STRIPE_*` values for their `sk_live_`/live equivalents (create a **separate live-mode webhook** for the signing secret) → redeploy.

---

## 5. 🟡 Parent/guardian progress emails — one word from you

This feature is **fully built** (double opt-in, unsubscribe, rate-limit, adversarially reviewed) but held back because it needs one additive database column (`User.guardianEmail`) applied to the production DB. It also only does anything once **email (step 1)** is live.

### What to do
- After step 1 is done, **tell Claude "go" on parent emails** — I'll apply the `guardianEmail` column to the production Neon DB (additive, nullable, zero downtime) and push the code that exposes the "add a guardian" field in student profiles. No action needed from you beyond the go-ahead.

---

## Optional / deferred (only when a specific district needs it)

- **Microsoft SSO** — code scaffold is done. Needs an Azure app registration (redirect URI `https://www.studymondo.com/api/auth/callback/microsoft-entra-id`) → set `AUTH_MICROSOFT_ENTRA_ID_ID`, `AUTH_MICROSOFT_ENTRA_ID_SECRET`, and `NEXT_PUBLIC_MICROSOFT_SSO_ENABLED=true`. K-12 is Google-dominant, so defer until a Microsoft-shop district asks. Ask Claude for the click-by-click Azure walkthrough when needed.
- **Edlink roster sync** — the real district-rostering unlock, but ~$499+/mo and a build. CSV import + self-join bridge the gap. Provision an Edlink sandbox account and hand Claude the credentials when you're ready.

---

_Last updated when the 🩺 System health panel shipped. The panel is the live source of truth — this doc is the how-to._
