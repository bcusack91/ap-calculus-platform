/**
 * Local env precedence for standalone scripts.
 *
 * Next.js loads `.env.local` with precedence over `.env`, so the dev server
 * correctly targets the local database. Standalone `tsx`/node scripts do NOT go
 * through Next's loader, and the Prisma client only auto-loads `.env` — so a
 * script run locally would silently connect to whatever `.env` points at
 * (historically: production). This module reproduces Next's behavior for those
 * scripts: outside production, load `.env.local` with `override: true` so it
 * wins, exactly like the dev server.
 *
 * Guards:
 *  - No-op when NODE_ENV === 'production' (real deploys use platform env vars;
 *    `.env.local` is gitignored and absent there anyway).
 *  - No-op if `.env.local` doesn't exist.
 *
 * Import this FIRST, before constructing the Prisma client (see lib/prisma.ts).
 * To deliberately target production from a script, run with
 * `NODE_ENV=production` or pass `DATABASE_URL=... DIRECT_URL=...` inline.
 */
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  const localEnvPath = path.join(process.cwd(), '.env.local')
  if (fs.existsSync(localEnvPath)) {
    dotenv.config({ path: localEnvPath, override: true })
  }
}
