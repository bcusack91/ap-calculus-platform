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

  // Loud tripwire: a non-production run that still resolves to a non-local
  // database (no .env.local, or .env.local itself points remote) is almost
  // always the historical footgun this module exists to prevent. Warn — don't
  // throw — so the documented dev-against-Neon workflow keeps working.
  const url = process.env.DATABASE_URL ?? ''
  if (url && !/localhost|127\.0\.0\.1/.test(url)) {
    console.error(
      '\n⚠️  [load-env] DATABASE_URL points at a NON-LOCAL database in a non-production run.' +
        '\n   If this is intentional (deliberate prod access), set NODE_ENV=production or ALLOW_PROD=1.' +
        '\n   Otherwise create .env.local pointing at the local Docker DB (see LOCAL_DB_SETUP.md).\n'
    )
  }
}
