/**
 * Broadcast the "Competitive Mode unlocked for AP exam season" announcement.
 *
 * Usage:
 *   npx tsx scripts/broadcast-competitive-announcement.ts                # dry-run (default, no emails sent)
 *   npx tsx scripts/broadcast-competitive-announcement.ts --preview      # send only to brendan@cusackprep.com
 *   npx tsx scripts/broadcast-competitive-announcement.ts --send         # actually send (resumes from sent.log)
 *
 * Audience: All Users with a non-null email, deduped case-insensitively,
 * minus EmailSubscriber rows where unsubscribed=true.
 *
 * Resumability: Successful sends are appended to
 *   reports/competitive-announcement-sent.log
 * Reruns skip any email already in that file, so it's safe to rerun
 * after Gmail rate-limits us mid-broadcast.
 */
import fs from 'node:fs'
import path from 'node:path'
import nodemailer from 'nodemailer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const args = new Set(process.argv.slice(2))
const PREVIEW = args.has('--preview')
const SEND = args.has('--send')
const PREVIEW_TO = 'brendan@cusackprep.com'

const FROM_ADDRESS = process.env.SMTP_FROM || 'Study Mondo <noreply@studymondo.com>'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'

const SENT_LOG = path.join(process.cwd(), 'reports', 'competitive-announcement-sent.log')
const SEND_DELAY_MS = 1500   // ~40 emails/min, well under Gmail Workspace 2000/day & per-minute caps
const MAX_RETRIES = 4
const RETRY_BACKOFF_MS = 60_000        // 1 min between attempts on a single email
const COOLDOWN_AFTER_AUTH_LOCKOUT_MS = 20 * 60_000  // 20 min cooldown if "Too many login attempts"
const CONSECUTIVE_FAIL_ABORT = 10       // give up entire run after this many consecutive failures

function loadAlreadySent(): Set<string> {
  if (!fs.existsSync(SENT_LOG)) return new Set()
  return new Set(
    fs.readFileSync(SENT_LOG, 'utf8')
      .split('\n')
      .map(l => l.trim().toLowerCase())
      .filter(Boolean)
  )
}

function appendSent(email: string) {
  fs.mkdirSync(path.dirname(SENT_LOG), { recursive: true })
  fs.appendFileSync(SENT_LOG, email.toLowerCase() + '\n')
}

function buildTransporter() {
  if (!process.env.SMTP_HOST) {
    throw new Error('SMTP_HOST is not configured — email sending is disabled')
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    pool: true,
    maxConnections: 1,
    maxMessages: 100,
    rateDelta: 60_000,
    rateLimit: 30, // 30 messages/min ceiling (matches our SEND_DELAY_MS)
  })
}

function emailLayout(content: string, recipientEmail: string) {
  const unsubscribeUrl = `${APP_URL}/api/unsubscribe?token=${Buffer.from(recipientEmail).toString('base64')}`
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 24px;">
        <a href="${APP_URL}" style="text-decoration: none; font-size: 22px; font-weight: 700; color: #7c3aed;">Study Mondo</a>
      </div>
      ${content}
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">
          <a href="${APP_URL}/settings" style="color: #9ca3af;">Email preferences</a> ·
          <a href="${unsubscribeUrl}" style="color: #9ca3af;">Unsubscribe</a> ·
          <a href="${APP_URL}" style="color: #9ca3af;">Study Mondo</a>
        </p>
      </div>
    </div>
  `
}

function buildEmail(email: string, name: string | null) {
  const greeting = name ? `Hi ${name},` : 'Hi there,'
  const text = `${greeting}

Good news: Competitive Mode is now fully unlocked for every Study Mondo student through AP exam season — no lessons or quizzes required to access it.

What is Competitive Mode?
A fast, head-to-head way to drill AP topics in 60-second matches against friends, classmates, or matched opponents. Every course is open: Calculus AB/BC, Bio, Chem, Physics 1/2/C, Psych, Stats, US/World History, Gov, Macro/Micro, English Lang/Lit, Enviro, CSA/CSP, and more.

How to use it well as a study tool:
1. Pick the topic you're weakest on (not the strongest). Losing a few rounds is the fastest way to figure out what to re-read.
2. Run a 5-match warm-up before each study session — it's a sneaky-good diagnostic.
3. Challenge a friend on the same unit. Use the "Challenge a Friend" button and pick the ASYNC option — your friend can accept and play the same questions on their own time, no need to be online together. Whoever loses owes a 10-minute review.
4. Review every wrong answer. Each match shows the correct answer + explanation — that's where the real studying happens.
5. After 1-2 weeks of matches, take the entrance/exit quiz on that topic to confirm the gain.

Jump in: ${APP_URL}/competitive

Good luck on May exams.
— Brendan @ Study Mondo`

  const html = emailLayout(`
    <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #111827;">
      ⚔️ Competitive Mode — Unlocked for Everyone
    </h1>
    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">${greeting}</p>
    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
      Good news: <strong>Competitive Mode is now fully unlocked</strong> for every Study Mondo student through AP exam season — no lessons or quizzes required to access it.
    </p>
    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 8px;">
      Every course is open: Calculus AB/BC, Bio, Chem, Physics 1/2/C, Psych, Stats, US/World History, Gov, Macro/Micro, English Lang/Lit, Enviro, CSA/CSP, and more.
    </p>
    <h2 style="font-size: 18px; font-weight: 700; margin-top: 28px; margin-bottom: 12px; color: #111827;">
      How to use it as a real study tool
    </h2>
    <ol style="color: #4b5563; font-size: 15px; line-height: 1.7; padding-left: 20px; margin-bottom: 24px;">
      <li><strong>Pick your weakest topic, not your strongest.</strong> Losing a few rounds is the fastest way to find what you need to re-read.</li>
      <li><strong>Run a 5-match warm-up</strong> before each study session — it's a sneaky-good diagnostic of what stuck from yesterday.</li>
      <li><strong>Challenge a friend on the same unit.</strong> Use the &ldquo;Challenge a Friend&rdquo; button and pick the <strong>async</strong> option &mdash; your friend can accept and play the same questions on their own time, no need to coordinate schedules. Loser owes a 10-minute review of the unit.</li>
      <li><strong>Review every wrong answer.</strong> Each match shows the correct answer + explanation — that&rsquo;s where the real studying happens.</li>
      <li><strong>Confirm the gain.</strong> After 1&ndash;2 weeks of matches on a topic, take the entrance/exit quiz to verify the bump.</li>
    </ol>
    <a href="${APP_URL}/competitive" style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
      Open Competitive Mode
    </a>
    <p style="color: #4b5563; font-size: 15px; line-height: 1.6; margin-top: 28px;">
      Good luck on May exams.<br>
      &mdash; Brendan @ Study Mondo
    </p>
  `, email)

  return {
    from: FROM_ADDRESS,
    to: email,
    subject: '⚔️ Competitive Mode is unlocked for everyone — for AP exam season',
    text,
    html,
  }
}

async function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms))
}

async function sendOne(transporter: nodemailer.Transporter, email: string, name: string | null) {
  const msg = buildEmail(email, name)
  let lastErr: unknown
  for (let attempt = 1; attempt <= MAX_RETRIES + 1; attempt++) {
    try {
      await transporter.sendMail(msg)
      return
    } catch (err) {
      lastErr = err
      const errMsg = err instanceof Error ? err.message : String(err)
      const isAuthLockout = /Too many login attempts|454-?4\.7\.0/i.test(errMsg)
      const isTransient = /rate|timeout|421|451|454|throttl/i.test(errMsg)
      if (attempt <= MAX_RETRIES && (isAuthLockout || isTransient)) {
        const wait = isAuthLockout ? COOLDOWN_AFTER_AUTH_LOCKOUT_MS : RETRY_BACKOFF_MS
        console.warn(`  retry ${attempt}/${MAX_RETRIES} for ${email} after ${Math.round(wait / 1000)}s (${errMsg.split('\n')[0]})`)
        await sleep(wait)
        continue
      }
      break
    }
  }
  throw lastErr
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
    const transporter = buildTransporter()
    console.log(`Sending preview to ${user.email}...`)
    await sendOne(transporter, user.email, user.name)
    transporter.close()
    console.log('Preview sent.')
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
    // Skip system / bot accounts
    if (key.endsWith('@studyai.com')) continue
    if (key.startsWith('ai-opponent@')) continue
    if (key.startsWith('noreply@') || key.startsWith('no-reply@')) continue
    seen.add(key)
    audience.push({ email: u.email, name: u.name })
  }

  const alreadySent = loadAlreadySent()
  const remaining = audience.filter(r => !alreadySent.has(r.email.toLowerCase()))

  console.log(`Total Users with email:     ${users.length}`)
  console.log(`After dedupe + unsub:       ${audience.length}`)
  console.log(`Already sent (sent.log):    ${alreadySent.size}`)
  console.log(`Remaining to send:          ${remaining.length}`)

  if (!SEND) {
    console.log('\n(dry-run) First 10 remaining:')
    for (const r of remaining.slice(0, 10)) {
      console.log(`  - ${r.name ?? '(no name)'} <${r.email}>`)
    }
    console.log('\nRe-run with --send to broadcast (resumable).')
    return
  }

  const transporter = buildTransporter()
  let sent = 0
  let failed = 0
  let consecutiveFails = 0
  const failedList: string[] = []

  for (const r of remaining) {
    try {
      await sendOne(transporter, r.email, r.name)
      appendSent(r.email)
      sent++
      consecutiveFails = 0
      if (sent % 25 === 0) console.log(`  sent ${sent}/${remaining.length}`)
    } catch (err) {
      failed++
      consecutiveFails++
      failedList.push(r.email)
      console.error(`FAIL ${r.email}:`, err instanceof Error ? err.message.split('\n')[0] : err)
      if (consecutiveFails >= CONSECUTIVE_FAIL_ABORT) {
        console.error(`\nAborting: ${consecutiveFails} consecutive failures. Re-run later — sent.log is up to date.`)
        break
      }
    }
    await sleep(SEND_DELAY_MS)
  }

  transporter.close()
  console.log(`\nDone. sent=${sent} failed=${failed} remaining=${remaining.length}`)
  if (failedList.length) {
    console.log('Failed recipients (rerun the script to retry — they are not in sent.log):')
    failedList.forEach(e => console.log('  -', e))
  }
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
