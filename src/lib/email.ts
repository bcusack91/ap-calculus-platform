import { getPublicAppUrl } from '@/lib/public-url'
import { sendEmail } from '@/lib/email-provider'
import { makeUnsubscribeToken } from '@/lib/unsubscribe-token'

const FROM_ADDRESS = process.env.SMTP_FROM || 'Study Mondo <noreply@studymondo.com>'
const APP_URL = getPublicAppUrl()
// CAN-SPAM requires a valid physical postal address in every commercial email.
const MAILING_ADDRESS = 'Study Mondo · 4713 Cardinal Avenue, Beltsville, MD 20705'

function emailLayout(content: string, recipientEmail?: string) {
  // Signed (HMAC) unsubscribe token — makeUnsubscribeToken returns null if no
  // signing secret is configured, in which case the link is simply omitted.
  const unsubscribeToken = recipientEmail ? makeUnsubscribeToken(recipientEmail) : null
  const unsubscribeUrl = unsubscribeToken
    ? `${APP_URL}/api/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}`
    : null
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 24px;">
        <a href="${APP_URL}" style="text-decoration: none; font-size: 22px; font-weight: 700; color: #7c3aed;">Study Mondo</a>
      </div>
      ${content}
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">
          <a href="${APP_URL}/settings" style="color: #9ca3af;">Email preferences</a> · 
          ${unsubscribeUrl ? `<a href="${unsubscribeUrl}" style="color: #9ca3af;">Unsubscribe</a> · ` : ''}
          <a href="${APP_URL}" style="color: #9ca3af;">Study Mondo</a>
        </p>
        <p style="color: #9ca3af; font-size: 12px; margin: 8px 0 0;">
          ${MAILING_ADDRESS}
        </p>
      </div>
    </div>
  `
}

/**
 * Send a verification email with a clickable link.
 */
export async function sendVerificationEmail(email: string, verifyUrl: string) {
  await sendEmail({
    from: FROM_ADDRESS,
    to: email,
    subject: 'Verify your Study Mondo email',
    text: `Verify your email by visiting: ${verifyUrl}\n\nThis link expires in 24 hours.\n\nIf you didn't create an account, you can safely ignore this email.`,
    html: emailLayout(`
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827;">
        Verify your email
      </h1>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
        Click the button below to verify your Study Mondo account. This link expires in 24&nbsp;hours.
      </p>
      <a href="${verifyUrl}" style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
        Verify Email
      </a>
      <p style="color: #9ca3af; font-size: 13px; margin-top: 32px;">
        If you didn&rsquo;t create an account on Study Mondo, you can safely ignore this email.
      </p>
    `),
  })
}

/**
 * Send a password-reset email with a clickable link.
 */
export async function sendPasswordResetEmail(email: string, resetUrl: string) {
  await sendEmail({
    from: FROM_ADDRESS,
    to: email,
    subject: 'Reset your Study Mondo password',
    text: `Reset your password by visiting: ${resetUrl}\n\nThis link expires in 1 hour.\n\nIf you didn't request a password reset, you can safely ignore this email.`,
    html: emailLayout(`
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827;">
        Reset your password
      </h1>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
        Click the button below to choose a new password. This link expires in 1&nbsp;hour.
      </p>
      <a href="${resetUrl}" style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
        Reset Password
      </a>
      <p style="color: #9ca3af; font-size: 13px; margin-top: 32px;">
        If you didn&rsquo;t request this, you can safely ignore this email.
      </p>
    `),
  })
}

/**
 * Send a welcome email to new users.
 */
export async function sendWelcomeEmail(email: string, name: string | null) {
  const greeting = name ? `Hi ${name}!` : 'Welcome!'
  await sendEmail({
    from: FROM_ADDRESS,
    to: email,
    subject: 'Welcome to Study Mondo! 🎓',
    text: `${greeting} Welcome to Study Mondo — your free study companion. Start exploring topics, flashcards, and quizzes at ${APP_URL}`,
    html: emailLayout(`
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827;">
        ${greeting}
      </h1>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Welcome to <strong>Study Mondo</strong> — your free study companion for AP courses, math, science, and more.
      </p>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
        Here&rsquo;s what you can do:
      </p>
      <ul style="color: #4b5563; font-size: 15px; line-height: 1.8; margin-bottom: 24px; padding-left: 20px;">
        <li>📚 Study interactive lessons across 20+ subjects</li>
        <li>⚡ Master concepts with spaced-repetition flashcards</li>
        <li>🧠 Test yourself with auto-graded quizzes</li>
        <li>⚔️ Challenge friends in competitive mode</li>
        <li>📊 Track your progress and build streaks</li>
      </ul>
      <a href="${APP_URL}/dashboard" style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
        Start Learning
      </a>
    `),
  })
}

/**
 * Send a weekly digest email with study stats.
 */
export async function sendWeeklyDigest(
  email: string,
  name: string | null,
  stats: {
    lessonsCompleted: number
    flashcardsReviewed: number
    quizzesTaken: number
    streak: number
    minutesStudied: number
  }
) {
  const greeting = name ? `Hi ${name},` : 'Hi there,'
  await sendEmail({
    from: FROM_ADDRESS,
    to: email,
    subject: `Your Study Mondo Week: ${stats.lessonsCompleted} lessons, ${stats.streak} day streak 📊`,
    text: `${greeting} Here's your weekly study summary: ${stats.lessonsCompleted} lessons completed, ${stats.flashcardsReviewed} flashcards reviewed, ${stats.quizzesTaken} quizzes taken, ${stats.minutesStudied} minutes studied, ${stats.streak} day streak.`,
    html: emailLayout(`
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827;">
        Your Weekly Summary 📊
      </h1>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
        ${greeting} here&rsquo;s how your week went:
      </p>
      <div style="background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">📚 Lessons</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.lessonsCompleted}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">⚡ Flashcards</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.flashcardsReviewed}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">🧠 Quizzes</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.quizzesTaken}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">⏱️ Minutes</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.minutesStudied}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">🔥 Streak</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #7c3aed; font-size: 18px;">${stats.streak} days</td>
          </tr>
        </table>
      </div>
      <a href="${APP_URL}/dashboard" style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
        Keep Learning
      </a>
    `, email),
  })
}

/**
 * Weekly progress summary sent to a student's parent/guardian. The unsubscribe
 * footer is keyed to the guardian's email so they can opt out independently.
 */
export async function sendParentProgressEmail(
  guardianEmail: string,
  studentName: string | null,
  stats: {
    lessonsCompleted: number
    avgMastery: number // 0-100
    currentStreak: number
    minutesStudied: number
    flashcardsReviewed: number
    quizzesTaken: number
  }
) {
  const who = studentName || 'Your student'
  // Never send a parent digest without a working (signed) unsubscribe link.
  if (!makeUnsubscribeToken(guardianEmail)) return
  await sendEmail({
    from: FROM_ADDRESS,
    to: guardianEmail,
    subject: `${who}'s week on Study Mondo 📊`,
    text: `Here's ${who}'s week on Study Mondo: ${stats.lessonsCompleted} lessons completed, ${stats.avgMastery}% average mastery, ${stats.quizzesTaken} quizzes, ${stats.minutesStudied} minutes studied, ${stats.currentStreak} day streak. You're receiving this because someone added your email as a guardian contact; use the unsubscribe link below to stop.`,
    html: emailLayout(`
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827;">
        ${who}&rsquo;s week 📊
      </h1>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
        Here&rsquo;s a quick summary of ${who}&rsquo;s progress on Study Mondo this week.
      </p>
      <div style="background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">📚 Lessons completed</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.lessonsCompleted}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">🎯 Average mastery</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.avgMastery}%</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">🧠 Quizzes</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.quizzesTaken}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">⏱️ Minutes studied</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #111827; font-size: 18px;">${stats.minutesStudied}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4b5563; font-size: 15px;">🔥 Streak</td>
            <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #7c3aed; font-size: 18px;">${stats.currentStreak} days</td>
          </tr>
        </table>
      </div>
      <p style="color: #9ca3af; font-size: 13px; line-height: 1.5;">
        You&rsquo;re receiving this because your email was added as a parent/guardian contact on Study Mondo. You can
        unsubscribe at any time using the link below.
      </p>
    `, guardianEmail),
  })
}

/**
 * Double opt-in: ask a parent/guardian to confirm before any progress digests
 * are sent. Returns silently (no email) if no signing secret is configured.
 */
export async function sendGuardianConfirmEmail(guardianEmail: string, studentName: string | null) {
  const token = makeUnsubscribeToken(guardianEmail)
  if (!token) return
  const confirmUrl = `${APP_URL}/api/guardian-confirm?token=${encodeURIComponent(token)}`
  const who = studentName || 'A student'
  await sendEmail({
    from: FROM_ADDRESS,
    to: guardianEmail,
    subject: `Confirm weekly progress updates for ${who}`,
    text: `${who} added your email on Study Mondo to receive a short weekly progress summary. Confirm to start: ${confirmUrl}\n\nIf you don't recognize this, just ignore this email — you won't be added or emailed again.`,
    html: emailLayout(`
      <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; color: #111827;">
        Confirm progress updates
      </h1>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
        ${who} added your email on Study Mondo to receive a short <strong>weekly summary</strong> of their progress.
        Confirm below to start receiving it.
      </p>
      <a href="${confirmUrl}" style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
        Confirm &amp; subscribe
      </a>
      <p style="color: #9ca3af; font-size: 13px; line-height: 1.5; margin-top: 20px;">
        If you don&rsquo;t recognize this, just ignore this email — you won&rsquo;t be added or emailed again.
      </p>
    `, guardianEmail),
  })
}

/**
 * Send a streak reminder to keep the user motivated.
 */
export async function sendStreakReminder(email: string, name: string | null, currentStreak: number) {
  const greeting = name || 'there'
  await sendEmail({
    from: FROM_ADDRESS,
    to: email,
    subject: `Don't lose your ${currentStreak}-day streak! 🔥`,
    text: `Hey ${greeting}! You have a ${currentStreak}-day study streak. Don't let it break — study for just 5 minutes today! ${APP_URL}/dashboard`,
    html: emailLayout(`
      <div style="text-align: center;">
        <p style="font-size: 48px; margin-bottom: 8px;">🔥</p>
        <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 8px; color: #111827;">
          ${currentStreak}-Day Streak!
        </h1>
        <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
          Hey ${greeting}, your streak is at risk! Study for just 5 minutes today to keep it going.
        </p>
        <a href="${APP_URL}/dashboard" style="display: inline-block; background-color: #f59e0b; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
          Study Now
        </a>
      </div>
    `, email),
  })
}

/**
 * Announcement: Competitive Mode is fully unlocked for AP exam season.
 */
export async function sendCompetitiveModeAnnouncementEmail(email: string, name: string | null) {
  const greeting = name ? `Hi ${name},` : 'Hi there,'
  await sendEmail({
    from: FROM_ADDRESS,
    to: email,
    subject: '⚔️ Competitive Mode is unlocked for everyone — for AP exam season',
    text: `${greeting}

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
— Brendan @ Study Mondo`,
    html: emailLayout(`
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #111827;">
        ⚔️ Competitive Mode — Unlocked for Everyone
      </h1>
      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        ${greeting}
      </p>
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
    `, email),
  })
}

/**
 * Back-to-school re-engagement email for existing account holders. Bulk mail,
 * so the plain-text part carries its own unsubscribe link and postal address
 * (the HTML part gets both from emailLayout).
 *
 * `context` personalizes the opening line and puts the reader's own track
 * first; without it the email reads as the generic AP-first version.
 */
export type BackToSchoolTrack = 'ap' | 'sat' | 'act' | 'mcat' | 'hs-math' | 'college' | 'none'

export type BackToSchoolContext = {
  track: BackToSchoolTrack
  courseSlug: string | null
  /** Display name from the Course table, e.g. "AP Chemistry". */
  courseName: string | null
  signedUpAt: Date
}

// Course-table names that are too formal for a sentence.
const SHORT_COURSE_NAME: Record<string, string> = {
  'ap-us-government': 'AP US Government',
  'ap-us-history': 'AP US History',
  'ap-world-history': 'AP World History',
  'ap-english-literature': 'AP English Literature',
  'ap-english-language': 'AP English Language',
  'ap-physics-c-em': 'AP Physics C: E&M',
}

type BtsSection = { key: 'ap' | 'sat' | 'hs-math' | 'college' | 'teacher'; title: string; items: string[] }

const BTS_SECTIONS: BtsSection[] = [
  {
    key: 'ap',
    title: 'If you’re taking AP classes this year',
    items: [
      '<strong>Take the diagnostic for your course.</strong> There’s one for each of our 23 AP courses, and it builds a study plan around what you don’t know yet.',
      '<strong>Work through the lessons as your class covers them.</strong> Each ends with an exit quiz, and passing it unlocks spaced-review flashcards that bring each card back at growing intervals so it sticks.',
      '<strong>Use Competitive Mode</strong> for quick 60-second matches against classmates or matched opponents.',
    ],
  },
  {
    key: 'sat',
    title: 'If you’re taking the SAT, PSAT or ACT',
    items: [
      'The SAT diagnostic places you on the Core Skills, standard or 700–800 track.',
      '5 full-length SAT practice tests built to the College Board blueprint, with Desmos one click away.',
      'PSAT practice and study plans, plus an ACT diagnostic and full ACT course.',
    ],
  },
  {
    key: 'hs-math',
    title: 'If you’re in Algebra 1, Geometry or Algebra 2',
    items: [
      'Each course has its own diagnostic, lessons, unit tests and a daily question, so you can get ahead of the first test instead of cramming for it.',
    ],
  },
  {
    key: 'college',
    title: 'If you’ve started college',
    items: [
      'MCAT diagnostic, full-length practice exams and passage practice for every section.',
      'Organic Chemistry 1 and 2, with a diagnostic and practice for each.',
    ],
  },
  {
    key: 'teacher',
    title: 'Know a teacher who’d like it?',
    items: [
      'Teachers can set up a free class, assign lessons and quizzes, and run live class competitions, including the new Chaos Mode. Feel free to forward this.',
    ],
  },
]

const BTS_SECTION_ORDER: Record<BackToSchoolTrack, BtsSection['key'][]> = {
  ap: ['ap', 'sat', 'hs-math', 'college', 'teacher'],
  none: ['ap', 'sat', 'hs-math', 'college', 'teacher'],
  sat: ['sat', 'ap', 'hs-math', 'college', 'teacher'],
  act: ['sat', 'ap', 'hs-math', 'college', 'teacher'],
  'hs-math': ['hs-math', 'ap', 'sat', 'college', 'teacher'],
  mcat: ['college', 'ap', 'sat', 'hs-math', 'teacher'],
  college: ['college', 'ap', 'sat', 'hs-math', 'teacher'],
}

/** "Last spring" / "This summer" / "Recently", from when the account was made. */
function btsWhen(signedUpAt: Date, now = new Date()): string {
  const juneFirst = new Date(now.getFullYear(), 5, 1)
  const septFirst = new Date(now.getFullYear(), 8, 1)
  if (signedUpAt < juneFirst) return 'Last spring'
  if (signedUpAt < septFirst) return 'This summer'
  return 'Recently'
}

/** Opening paragraph (HTML-safe text) and the course link, if any. */
function btsOpening(ctx: BackToSchoolContext | undefined): { html: string; courseLink: { label: string; url: string } | null } {
  if (!ctx) {
    return { html: 'Last spring you used Study Mondo to get ready for AP exams. Thank you, and I hope your scores came back the way you wanted.', courseLink: null }
  }
  const when = btsWhen(ctx.signedUpAt)
  const spring = when === 'Last spring'
  const course = ctx.courseSlug ? SHORT_COURSE_NAME[ctx.courseSlug] ?? ctx.courseName : null
  const lead = when === 'Recently' ? 'You recently' : `${when}, you`
  // Test-prep tracks have their own hub pages; everything else is a course page.
  const EXAM_HUB: Partial<Record<BackToSchoolTrack, { label: string; path: string }>> = {
    sat: { label: 'your SAT prep', path: '/sat' },
    act: { label: 'your ACT prep', path: '/act' },
    mcat: { label: 'your MCAT prep', path: '/mcat' },
  }
  const hub = EXAM_HUB[ctx.track]
  const courseLink = hub
    ? { label: `Pick up ${hub.label} where you left off`, url: `${APP_URL}${hub.path}` }
    : ctx.courseSlug && course
      ? { label: `Pick up ${course} where you left off`, url: `${APP_URL}/courses/${ctx.courseSlug}` }
      : null

  switch (ctx.track) {
    case 'ap':
      return {
        html: spring
          ? `${lead} studied <strong>${course}</strong> with us. Thank you, and I hope your score came back the way you wanted.`
          : `${lead} studied <strong>${course}</strong> with us. Thank you for giving Study Mondo a try.`,
        courseLink,
      }
    case 'sat':
      return { html: `${lead} prepped for <strong>the SAT</strong> with us. Thank you for giving Study Mondo a try.`, courseLink }
    case 'act':
      return { html: `${lead} prepped for <strong>the ACT</strong> with us. Thank you for giving Study Mondo a try.`, courseLink }
    case 'mcat':
      return { html: `${lead} studied for <strong>the MCAT</strong> with us. Thank you for giving Study Mondo a try.`, courseLink }
    case 'hs-math':
    case 'college':
      return { html: `${lead} studied <strong>${course}</strong> with us. Thank you for giving Study Mondo a try.`, courseLink }
    case 'none':
      return {
        html: spring
          ? `${lead} signed up for Study Mondo while getting ready for AP exams. Thank you, and I hope your scores came back the way you wanted.`
          : `${lead} signed up for Study Mondo. Thank you for giving it a try.`,
        courseLink: null,
      }
  }
}

function btsSubject(track: BackToSchoolTrack | undefined): string {
  if (track === 'sat') return 'Back to school: your SAT plan for this fall'
  if (track === 'act') return 'Back to school: your ACT plan for this fall'
  if (track === 'mcat' || track === 'college') return 'Back to school: pick your prep back up'
  return 'Back to school: get ahead of your first unit tests'
}

/** Minimal HTML -> plain text for the copy above (tags and the few entities we use). */
function btsPlain(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&')
}

export function buildBackToSchoolEmail(email: string, name: string | null, context?: BackToSchoolContext) {
  const firstName = name?.trim().split(/\s+/)[0]
  const greeting = firstName ? `Hi ${firstName},` : 'Hi there,'
  const unsubscribeToken = makeUnsubscribeToken(email)
  const unsubscribeUrl = unsubscribeToken
    ? `${APP_URL}/api/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}`
    : `${APP_URL}/settings`
  const coursesUrl = `${APP_URL}/courses`
  const opening = btsOpening(context)
  const sections = BTS_SECTION_ORDER[context?.track ?? 'none'].map((k) => BTS_SECTIONS.find((s) => s.key === k)!)
  const intro =
    'A new school year is underway, and the first tests are usually only a few weeks out. Here’s how to use Study Mondo to stay ahead instead of catching up.'

  const h2 = 'font-size: 17px; font-weight: 700; margin: 28px 0 8px; color: #111827;'
  const p = 'color: #4b5563; font-size: 15px; line-height: 1.6; margin: 0 0 12px;'
  const ul = 'color: #4b5563; font-size: 15px; line-height: 1.6; padding-left: 20px; margin: 0 0 12px;'

  const textSections = sections
    .map((s) => `${btsPlain(s.title).toUpperCase()}\n${s.items.map((i) => (s.items.length > 1 ? `- ${btsPlain(i)}` : btsPlain(i))).join('\n')}`)
    .join('\n\n')
  const htmlSections = sections
    .map(
      (s) =>
        `<h2 style="${h2}">${s.title}</h2>` +
        (s.items.length > 1
          ? `<ul style="${ul}">${s.items.map((i) => `<li>${i}</li>`).join('')}</ul>`
          : `<p style="${p}">${s.items[0]}</p>`),
    )
    .join('\n')

  return {
    from: FROM_ADDRESS,
    to: email,
    subject: btsSubject(context?.track),
    text: `${greeting}

${btsPlain(opening.html)}${opening.courseLink ? `\n${opening.courseLink.label}: ${opening.courseLink.url}` : ''}

${intro}

${textSections}

Pick your course: ${coursesUrl}

All of this is free.

Good luck this year,
Brendan
Study Mondo

---
Unsubscribe: ${unsubscribeUrl}
${MAILING_ADDRESS}`,
    html: emailLayout(`
      <div style="display: none; max-height: 0; overflow: hidden;">Free diagnostics for 23 AP courses, plus SAT, ACT and MCAT prep.</div>
      <p style="${p}">${greeting}</p>
      <p style="${p}">${opening.html}${opening.courseLink ? ` <a href="${opening.courseLink.url}" style="color: #7c3aed; font-weight: 600;">${opening.courseLink.label}&nbsp;&rarr;</a>` : ''}</p>
      <p style="${p}">${intro}</p>

      ${htmlSections}

      <div style="text-align: center; margin: 28px 0 8px;">
        <a href="${coursesUrl}" style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
          Pick your course &rarr;
        </a>
      </div>
      <p style="color: #6b7280; font-size: 14px; text-align: center; margin: 0 0 24px;">All of this is free.</p>

      <p style="${p}">Good luck this year,<br>Brendan<br>Study Mondo</p>
    `, email),
  }
}

export async function sendBackToSchoolEmail(email: string, name: string | null, context?: BackToSchoolContext) {
  await sendEmail(buildBackToSchoolEmail(email, name, context))
}

/**
 * Send an internal admin alert email for critical funnel regressions.
 */
export async function sendAdminAlertEmail(params: {
  to: string[]
  subject: string
  text: string
  html: string
}) {
  const { to, subject, text, html } = params
  if (to.length === 0) return

  await sendEmail({
    from: FROM_ADDRESS,
    to,
    subject,
    text,
    html,
  })
}
