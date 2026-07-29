/**
 * Apply the additive open-lobby columns to production (the two-DB workflow:
 * deploys never migrate prod, so schema changes are applied manually).
 * Idempotent — every statement is IF NOT EXISTS.
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
const p = new PrismaClient()
;(async () => {
  console.log('DB host:', (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0])
  const sql = fs.readFileSync('prisma/migrations/20260728000000_add_open_lobbies/migration.sql', 'utf8')
  // Strip comment LINES first — filtering whole chunks that merely start with a
  // comment silently dropped the first ALTER on the initial run.
  const cleaned = sql.split('\n').filter(l => !l.trim().startsWith('--')).join('\n')
  const stmts = cleaned.split(';').map(s => s.trim()).filter(Boolean)
  for (const st of stmts) { await p.$executeRawUnsafe(st); console.log('  ✓', st.slice(0, 72).replace(/\n/g, ' ')) }
  const cols = await p.$queryRaw<{ table_name: string; column_name: string }[]>`
    SELECT table_name, column_name FROM information_schema.columns
    WHERE (table_name = 'CompetitiveLobby' AND column_name IN ('isPublic','topicSlug','gameMode'))
       OR (table_name = 'TeacherLobby' AND column_name IN ('studentHosted','isPublic','maxPlayers','format'))
    ORDER BY 1, 2`
  console.log(`\nverified ${cols.length}/7 columns present`)
  process.exit(0)
})()
