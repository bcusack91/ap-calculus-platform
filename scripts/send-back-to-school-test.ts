/**
 * Sends test copies of the back-to-school email to the owner's inbox, one per
 * personalization variant, over the same Google Workspace SMTP route
 * (brendan@cusackprep.com) used for the May 2026 competitive announcement.
 * The recipient is hard-coded on purpose: this script can never reach users.
 *
 *   npx tsx scripts/send-back-to-school-test.ts            # every variant
 *   npx tsx scripts/send-back-to-school-test.ts ap mcat    # just these
 */
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config({ path: '.env' })

const TEST_RECIPIENT = 'bcusack91@gmail.com'
const SPRING = new Date('2026-05-04')

async function main() {
  // Imported after dotenv so SMTP_FROM and the unsubscribe secret are set
  // when email.ts reads them at module load.
  const { buildBackToSchoolEmail } = await import('../src/lib/email')
  type Ctx = Parameters<typeof buildBackToSchoolEmail>[2]

  const variants: Record<string, Ctx> = {
    ap: { track: 'ap', courseSlug: 'ap-chemistry', courseName: 'AP Chemistry', signedUpAt: SPRING },
    sat: { track: 'sat', courseSlug: 'sat-prep', courseName: 'SAT Prep', signedUpAt: SPRING },
    mcat: { track: 'mcat', courseSlug: 'mcat-prep', courseName: 'MCAT Prep', signedUpAt: SPRING },
    'hs-math': { track: 'hs-math', courseSlug: 'algebra-1', courseName: 'Algebra 1', signedUpAt: new Date('2026-08-10') },
    none: { track: 'none', courseSlug: null, courseName: null, signedUpAt: SPRING },
  }
  const wanted = process.argv.slice(2)
  const picked = wanted.length ? wanted : Object.keys(variants)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })
  for (const key of picked) {
    const ctx = variants[key]
    if (!ctx) throw new Error(`Unknown variant "${key}" (have: ${Object.keys(variants).join(', ')})`)
    const message = buildBackToSchoolEmail(TEST_RECIPIENT, 'Brendan Cusack', ctx)
    const info = await transporter.sendMail({ ...message, to: TEST_RECIPIENT, subject: `[TEST: ${key}] ${message.subject}` })
    console.log(`${key}: sent to ${TEST_RECIPIENT} (${info.response.slice(0, 16)})`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
