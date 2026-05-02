/**
 * Broadcast the "Competitive Mode unlocked for AP exam season" announcement.
 *
 * Usage:
 *   npx tsx scripts/broadcast-competitive-announcement.ts                # dry-run (default, no emails sent)
 *   npx tsx scripts/broadcast-competitive-announcement.ts --preview      # send only to brendan@cusackprep.com
 *   npx tsx scripts/broadcast-competitive-announcement.ts --send         # actually send to all eligible users
 *
 * Audience:
 *   - All Users with a non-null email
 *   - Excludes any email that appears in EmailSubscriber with unsubscribed=true
 *   - Deduplicated case-insensitively
 *
 * Throttling: ~10 emails/sec (100ms between sends) so we don't hammer SMTP.
 */
import { PrismaClient } from '@prisma/client'
import { sendCompetitiveModeAnnouncementEmail } from '../src/lib/email'

const prisma = new PrismaClient()

const args = new Set(process.argv.slice(2))
const PREVIEW = args.has('--preview')
const SEND = args.has('--send')
const PREVIEW_TO = 'brendan@cusackprep.com'

async function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms))
}

async function main() {
  const mode = PREVIEW ? 'PREVIEW' : SEND ? 'SEND' : 'DRY-RUN'
  console.log(`\n=== Competitive Mode Announcement Broadcast — ${mode} ===\n`)

  // Build unsubscribe blocklist
  const unsub = await prisma.emailSubscriber.findMany({
    where: { unsubscribed: true },
    select: { email: true },
  })
  const blocked = new Set(unsub.map(u => u.email.toLowerCase()))
  console.log(`Unsubscribe blocklist: ${blocked.size} emails`)

  if (PREVIEW) {
    const user = await prisma.user.findUnique({
      where: { email: PREVIEW_TO },
      select: { email: true, name: true },
    })
    if (!user || !user.email) {
      console.error(`Preview recipient ${PREVIEW_TO} not found.`)
      process.exit(1)
    }
    console.log(`Sending preview to ${user.email}...`)
    await sendCompetitiveModeAnnouncementEmail(user.email, user.name)
    console.log('Preview sent. Check your inbox.')
    return
  }

  // Build full audience
  const users = await prisma.user.findMany({
    where: { email: { not: null } },
    select: { email: true, name: true },
  })

  const seen = new Set<string>()
  const audience: Array<{ email: string; name: string | null }> = []
  for (const u of users) {
    if (!u.email) continue
    const key = u.email.toLowerCase()
    if (seen.has(key)) continue
    if (blocked.has(key)) continue
    seen.add(key)
    audience.push({ email: u.email, name: u.name })
  }

  console.log(`Total Users with email: ${users.length}`)
  console.log(`After dedupe + unsubscribe filter: ${audience.length}`)

  if (!SEND) {
    console.log('\n(dry-run) First 10 recipients:')
    for (const r of audience.slice(0, 10)) {
      console.log(`  - ${r.name ?? '(no name)'} <${r.email}>`)
    }
    console.log('\nRe-run with --preview to send a single email to brendan@cusackprep.com.')
    console.log('Re-run with --send to actually broadcast.')
    return
  }

  let sent = 0
  let failed = 0
  for (const r of audience) {
    try {
      await sendCompetitiveModeAnnouncementEmail(r.email, r.name)
      sent++
      if (sent % 25 === 0) console.log(`  sent ${sent}/${audience.length}`)
    } catch (err) {
      failed++
      console.error(`FAIL ${r.email}:`, err instanceof Error ? err.message : err)
    }
    await sleep(100)
  }
  console.log(`\nDone. sent=${sent} failed=${failed} total=${audience.length}`)
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
