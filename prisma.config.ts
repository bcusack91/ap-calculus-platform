import path from 'path'
import dotenv from 'dotenv'
import { defineConfig } from 'prisma/config'

// Prisma config files skip automatic .env loading, so load it manually.
// Prefer .env.local for local Docker DB, then fall back to .env.
dotenv.config({ path: path.join(__dirname, '.env.local') })
dotenv.config({ path: path.join(__dirname, '.env') })

// HARD GUARD against destructive Prisma CLI commands hitting production.
// `.env` points at the production Neon DB, so the moment `.env.local` is
// missing (fresh clone, or the documented "delete .env.local to use Neon"
// workflow), `prisma migrate reset --force` / `db push` would target prod.
// Forward-only commands (`migrate deploy`, `generate`, `migrate status`) are
// deliberately NOT blocked. Escape hatch for intentional prod ops: ALLOW_PROD=1.
{
  const argv = process.argv.slice(2).join(' ')
  const destructive = /\bmigrate\s+(reset|dev)\b|\bdb\s+push\b/.test(argv)
  const url = process.env.DATABASE_URL ?? ''
  const isLocal = /localhost|127\.0\.0\.1/.test(url)
  if (destructive && url && !isLocal && process.env.ALLOW_PROD !== '1') {
    throw new Error(
      `Refusing to run destructive Prisma command ("${argv}") against a non-local database. ` +
        'Create .env.local for the local Docker DB (see LOCAL_DB_SETUP.md), or set ALLOW_PROD=1 if you really mean production.'
    )
  }
}

export default defineConfig({
  schema: path.join(__dirname, 'prisma', 'schema.prisma'),
  seed: 'tsx prisma/seed.ts',
})
