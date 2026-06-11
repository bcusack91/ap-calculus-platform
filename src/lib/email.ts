import { getPublicAppUrl } from '@/lib/public-url'
import { sendEmail } from '@/lib/email-provider'
import { makeUnsubscribeToken } from '@/lib/unsubscribe-token'

const FROM_ADDRESS = process.env.SMTP_FROM || 'Study Mondo <noreply@studymondo.com>'
const APP_URL = getPublicAppUrl()

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
