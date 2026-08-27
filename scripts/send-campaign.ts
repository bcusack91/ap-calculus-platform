/**
 * Bulk email campaign sender — script-driven, like the rest of this repo's
 * owner tooling. DRY RUN BY DEFAULT; nothing sends without --send.
 *
 *   PROD=1 npx tsx scripts/send-campaign.ts <campaignKey> [--limit N] [--send]
 *
 * Campaigns (audience + template are bound together on purpose — an audience
 * chosen separately from its message is how the wrong people get mailed):
 *
 *   re-permission     Every user who has NEVER verified their email gets a
 *                     quiet "confirm your email" message with a real signed
 *                     verification link (7-day expiry). Account-scoped, not
 *                     marketing, so age/verification gates don't apply.
 *
 *   back-to-school    Marketing. VERIFIED users only, excluding anyone whose
 *                     birthYear says under-13 (COPPA) and anyone unsubscribed.
 *                     Course-aware: SAT students get the October-diagnostic
 *                     angle, everyone else the new-school-year AP angle.
 *
 * Safety model:
 *   - CampaignSend ledger: one row per (campaign, email), written after each
 *     successful send. Re-running a crashed campaign skips everyone already
 *     recorded — a resume can never double-mail.
 *   - EmailSubscriber.unsubscribed suppresses marketing sends.
 *   - Marketing mail carries a signed per-recipient unsubscribe link.
 *   - Throttled to ~2 sends/second (Resend's limit is 10/s).
 *   - --limit N caps a run, so the first real send can be a 20-person canary.
 *
 * DELIVERABILITY GATE: do not run --send until the sending domain has DKIM +
 * DMARC + Resend SPF configured. Unauthenticated bulk mail is spam-foldered
 * by Gmail/Yahoo and burns the domain's reputation.
 */
import { config as dotenv } from 'dotenv'
dotenv({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import crypto from 'crypto'
import { PrismaClient } from '@prisma/client'
import { sendEmail } from '../src/lib/email-provider'
import { makeUnsubscribeToken } from '../src/lib/unsubscribe-token'

const prisma = new PrismaClient()
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.studymondo.com'
/** System accounts (competitive AI bots) live in the User table too — the
 *  admin retention dashboard excludes this domain for the same reason. */
const SYSTEM_EMAIL_DOMAINS = ['studyai.com']
const isSystemEmail = (email: string) => SYSTEM_EMAIL_DOMAINS.some((d) => email.toLowerCase().endsWith('@' + d))
const THIS_YEAR = new Date().getFullYear()

interface Recipient { email: string; name: string | null; userId: string; satStudent: boolean }
interface Prepared { subject: string; html: string }

/* ------------------------------------------------------------------ */
/* Audiences                                                           */
/* ------------------------------------------------------------------ */

async function audienceRePermission(): Promise<Recipient[]> {
  const users = await prisma.user.findMany({
    where: { email: { not: null }, emailVerified: null },
    select: { id: true, email: true, name: true },
  })
  return users.map((u) => ({ email: u.email!, name: u.name, userId: u.id, satStudent: false }))
}

async function audienceBackToSchool(): Promise<Recipient[]> {
  const users = await prisma.user.findMany({
    where: {
      email: { not: null },
      emailVerified: { not: null },
      // COPPA: no marketing to known under-13s. Unknown ages stay in — the
      // signup flow treats missing birthYear as adult-presumed, and the
      // audience is verified accounts only.
      OR: [{ birthYear: null }, { birthYear: { lte: THIS_YEAR - 13 } }],
    },
    select: {
      id: true, email: true, name: true,
      diagnosticTests: { where: { category: { startsWith: 'sat' } }, select: { id: true }, take: 1 },
    },
  })
  return users.map((u) => ({
    email: u.email!, name: u.name, userId: u.id, satStudent: u.diagnosticTests.length > 0,
  }))
}

/* ------------------------------------------------------------------ */
/* Templates                                                           */
/* ------------------------------------------------------------------ */

const wrap = (inner: string, footer: string) => `
  <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#1f2937">
    <p style="font-size:20px;font-weight:700;margin:0 0 16px">Study Mondo</p>
    ${inner}
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />
    <p style="font-size:12px;color:#6b7280">${footer}</p>
  </div>`

async function prepareRePermission(r: Recipient): Promise<Prepared> {
  // Real verification link, same mechanics as /api/auth/verify-email but with
  // a 7-day expiry — campaign readers are slower than just-signed-up users.
  const token = crypto.randomBytes(32).toString('hex')
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex')
  await prisma.emailVerificationToken.deleteMany({ where: { email: r.email } })
  await prisma.emailVerificationToken.create({
    data: { email: r.email, token: tokenHash, expires: new Date(Date.now() + 7 * 24 * 3600 * 1000) },
  })
  const url = `${APP_URL}/auth/verify-email?token=${token}`
  return {
    subject: 'Confirm your Study Mondo email',
    html: wrap(
      `<p>Hi${r.name ? ` ${r.name.split(' ')[0]}` : ''},</p>
       <p>Your Study Mondo account is missing one step — confirming your email address. It takes one click:</p>
       <p style="margin:24px 0"><a href="${url}" style="background:#7c3aed;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">Confirm my email</a></p>
       <p>Confirming keeps your account recoverable and turns on progress emails. That's it — no newsletter, nothing else.</p>`,
      `You're receiving this because an account was created with this address on studymondo.com. If that wasn't you, ignore this email and the link will expire on its own.`,
    ),
  }
}

async function prepareBackToSchool(r: Recipient): Promise<Prepared> {
  const unsubToken = makeUnsubscribeToken(r.email)
  const unsubUrl = unsubToken ? `${APP_URL}/api/unsubscribe?token=${unsubToken}` : `${APP_URL}/contact`
  const inner = r.satStudent
    ? `<p>Hi${r.name ? ` ${r.name.split(' ')[0]}` : ''},</p>
       <p>The October SAT is the one most seniors count on — and the students who move their score the most start with a diagnostic about six weeks out.</p>
       <p>Your last diagnostic already built you a study plan. Retake it now and Study Mondo will rebuild the plan around what you've learned since:</p>
       <p style="margin:24px 0"><a href="${APP_URL}/sat-diagnostic" style="background:#059669;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">Take the SAT diagnostic</a></p>`
    : `<p>Hi${r.name ? ` ${r.name.split(' ')[0]}` : ''},</p>
       <p>New school year, clean slate. Study Mondo now covers 37 courses — every AP with interactive lessons, unit tests, free-response practice, and spaced-repetition flashcards.</p>
       <p>The fastest way in: take a diagnostic in your hardest course and get a study plan built from exactly what you missed.</p>
       <p style="margin:24px 0"><a href="${APP_URL}/courses" style="background:#7c3aed;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">Pick your course</a></p>`
  return {
    subject: r.satStudent ? 'Six weeks to the October SAT — start with a diagnostic' : 'New year, new study plan — 37 courses ready',
    html: wrap(inner, `You're receiving this because you have a Study Mondo account. <a href="${unsubUrl}" style="color:#6b7280">Unsubscribe</a> from emails like this any time.`),
  }
}

const CAMPAIGNS: Record<string, { audience: () => Promise<Recipient[]>; prepare: (r: Recipient) => Promise<Prepared>; marketing: boolean }> = {
  're-permission': { audience: audienceRePermission, prepare: prepareRePermission, marketing: false },
  'back-to-school': { audience: audienceBackToSchool, prepare: prepareBackToSchool, marketing: true },
}

/* ------------------------------------------------------------------ */

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function main() {
  const [key] = process.argv.slice(2).filter((a) => !a.startsWith('--'))
  const send = process.argv.includes('--send')
  const limitIdx = process.argv.indexOf('--limit')
  const limit = limitIdx !== -1 ? parseInt(process.argv[limitIdx + 1], 10) : Infinity

  const campaign = key ? CAMPAIGNS[key] : undefined
  if (!campaign) {
    console.error(`usage: PROD=1 npx tsx scripts/send-campaign.ts <${Object.keys(CAMPAIGNS).join('|')}> [--limit N] [--send]`)
    process.exit(1)
  }

  const all = await campaign.audience()

  // Suppression: campaign ledger (resume safety) + unsubscribes (marketing).
  const sent = new Set(
    (await prisma.campaignSend.findMany({ where: { campaignKey: key }, select: { email: true } })).map((s) => s.email.toLowerCase()),
  )
  const unsubscribed = campaign.marketing
    ? new Set(
        (await prisma.emailSubscriber.findMany({ where: { unsubscribed: true }, select: { email: true } })).map((s) => s.email.toLowerCase()),
      )
    : new Set<string>()

  const queue = all
    .filter((r) => !isSystemEmail(r.email))
    .filter((r) => !sent.has(r.email.toLowerCase()))
    .filter((r) => !unsubscribed.has(r.email.toLowerCase()))
    .slice(0, limit)

  console.log(`campaign "${key}": audience ${all.length}, already sent ${sent.size}, unsubscribed ${unsubscribed.size}, queued ${queue.length}${Number.isFinite(limit) ? ` (limit ${limit})` : ''}`)
  if (!send) {
    for (const r of queue.slice(0, 10)) console.log(`  would send -> ${r.email}${r.satStudent ? ' [sat]' : ''}`)
    if (queue.length > 10) console.log(`  ... +${queue.length - 10} more`)
    console.log('\nDRY RUN — pass --send to actually send.')
    await prisma.$disconnect()
    return
  }

  let ok = 0, failed = 0
  for (const r of queue) {
    try {
      const msg = await campaign.prepare(r)
      await sendEmail({ to: r.email, subject: msg.subject, html: msg.html })
      await prisma.campaignSend.create({ data: { campaignKey: key, email: r.email } })
      ok++
      if (ok % 25 === 0) console.log(`  ${ok}/${queue.length} sent`)
    } catch (e) {
      failed++
      console.error(`  FAILED ${r.email}: ${(e as Error).message.slice(0, 90)}`)
      if (failed >= 10 && failed > ok) {
        console.error('aborting: failures outnumber successes — check RESEND_API_KEY / domain status')
        break
      }
    }
    await sleep(500) // ~2/sec
  }
  console.log(`done: ${ok} sent, ${failed} failed, ledger has ${sent.size + ok} total for this campaign`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
