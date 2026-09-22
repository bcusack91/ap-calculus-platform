/**
 * Broadcast the back-to-school email over Google Workspace SMTP
 * (brendan@cusackprep.com), the route used for the May 2026 announcement.
 *
 *   npx tsx scripts/broadcast-back-to-school.ts                    # dry run: counts only, sends nothing
 *   npx tsx scripts/broadcast-back-to-school.ts --send --limit 1197
 *
 * Audience comes from back-to-school-audience.ts, newest accounts first.
 * Resumable: each successful send is appended to
 *   reports/back-to-school-sent.log
 * and reruns skip anything already there, so day 2 is the same command
 * (and a crash mid-run loses nothing). `--limit` caps sends per run, which
 * is how the list is split across days to stay well under Gmail's cap, which
 * is a ROLLING 24 hours: start each batch at least 24h after the last one ended.
 */
import fs from 'node:fs'
import path from 'node:path'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config({ path: '.env' })

const args = process.argv.slice(2)
const SEND = args.includes('--send')
const limitArg = args.indexOf('--limit')
const LIMIT = limitArg >= 0 ? Number(args[limitArg + 1]) : Infinity

const SENT_LOG = path.join(process.cwd(), 'reports', 'back-to-school-sent.log')
const SEND_DELAY_MS = 1500 // ~40/min
const MAX_RETRIES = 4
const RETRY_BACKOFF_MS = 60_000
const COOLDOWN_AFTER_AUTH_LOCKOUT_MS = 20 * 60_000
const CONSECUTIVE_FAIL_ABORT = 10

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function loadAlreadySent(): Set<string> {
  if (!fs.existsSync(SENT_LOG)) return new Set()
  return new Set(fs.readFileSync(SENT_LOG, 'utf8').split('\n').map((l) => l.trim().toLowerCase()).filter(Boolean))
}

function appendSent(email: string) {
  fs.mkdirSync(path.dirname(SENT_LOG), { recursive: true })
  fs.appendFileSync(SENT_LOG, email.toLowerCase() + '\n')
}

async function main() {
  if (!Number.isFinite(LIMIT) && SEND) throw new Error('Pass --limit N with --send so a run can never exceed the daily plan')
  if (limitArg >= 0 && !(LIMIT > 0)) throw new Error('--limit must be a positive number')

  // Imported after dotenv so SMTP_FROM, the unsubscribe secret and DATABASE_URL are set.
  const { buildBackToSchoolEmail } = await import('../src/lib/email')
  const { loadBackToSchoolAudience } = await import('./back-to-school-audience')
  const { PrismaClient } = await import('@prisma/client')
  const prisma = new PrismaClient()

  try {
    const { eligible, excluded } = await loadBackToSchoolAudience(prisma)
    const courseNames = new Map((await prisma.course.findMany({ select: { slug: true, name: true } })).map((c) => [c.slug, c.name]))
    const alreadySent = loadAlreadySent()
    const remaining = eligible.filter((m) => !alreadySent.has(m.email.toLowerCase()))
    const batch = remaining.slice(0, LIMIT)

    console.log(`=== Back-to-school broadcast: ${SEND ? 'SEND' : 'DRY RUN'} ===`)
    console.log(`Eligible: ${eligible.length}  Excluded: ${excluded.length}  Already sent: ${alreadySent.size}`)
    console.log(`Remaining: ${remaining.length}  This run: ${batch.length}`)
    if (!SEND) return

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      pool: true,
      maxConnections: 1,
      maxMessages: 100,
    })

    let sent = 0
    let consecutiveFails = 0
    const failed: string[] = []

    for (const m of batch) {
      const message = buildBackToSchoolEmail(m.email, m.name, {
        track: m.track,
        courseSlug: m.primaryCourse,
        courseName: m.primaryCourse ? courseNames.get(m.primaryCourse) ?? null : null,
        signedUpAt: m.createdAt,
      })
      let ok = false
      for (let attempt = 1; attempt <= MAX_RETRIES + 1 && !ok; attempt++) {
        try {
          await transporter.sendMail(message)
          ok = true
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err)
          // Gmail's cap is a rolling 24 hours, not a calendar day. Once it trips,
          // every further attempt fails too, so stop and resume the next day.
          if (/5\.4\.5|sending limit exceeded/i.test(msg)) {
            console.error(`Gmail sending limit reached: stopping. Rerun 24h after the previous batch finished.`)
            transporter.close()
            console.log(`\nStopped. Sent ${sent}. Remaining: ${remaining.length - sent}`)
            return
          }
          const lockout = /Too many login attempts|454-?4\.7\.0/i.test(msg)
          const transient = /rate|timeout|421|451|454|throttl|ECONNRESET|ETIMEDOUT/i.test(msg)
          if (attempt <= MAX_RETRIES && (lockout || transient)) {
            const wait = lockout ? COOLDOWN_AFTER_AUTH_LOCKOUT_MS : RETRY_BACKOFF_MS
            console.warn(`  retry ${attempt}/${MAX_RETRIES} after ${wait / 1000}s: ${msg.split('\n')[0]}`)
            await sleep(wait)
          } else {
            console.error(`  FAILED ${m.email}: ${msg.split('\n')[0]}`)
            break
          }
        }
      }
      if (ok) {
        appendSent(m.email)
        sent++
        consecutiveFails = 0
        if (sent % 50 === 0) console.log(`  sent ${sent}/${batch.length}`)
      } else {
        failed.push(m.email)
        if (++consecutiveFails >= CONSECUTIVE_FAIL_ABORT) {
          console.error(`Aborting: ${CONSECUTIVE_FAIL_ABORT} consecutive failures`)
          break
        }
      }
      await sleep(SEND_DELAY_MS)
    }

    transporter.close()
    console.log(`\nDone. Sent ${sent}, failed ${failed.length}. Remaining after this run: ${remaining.length - sent}`)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
