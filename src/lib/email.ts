import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const FROM_ADDRESS = process.env.SMTP_FROM || 'Study Mondo <noreply@studymondo.com>'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'

function emailLayout(content: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 24px;">
        <a href="${APP_URL}" style="text-decoration: none; font-size: 22px; font-weight: 700; color: #7c3aed;">Study Mondo</a>
      </div>
      ${content}
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">
          <a href="${APP_URL}/settings" style="color: #9ca3af;">Email preferences</a> · 
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
  await transporter.sendMail({
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
  await transporter.sendMail({
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
  await transporter.sendMail({
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
  await transporter.sendMail({
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
    `),
  })
}

/**
 * Send a streak reminder to keep the user motivated.
 */
export async function sendStreakReminder(email: string, name: string | null, currentStreak: number) {
  const greeting = name || 'there'
  await transporter.sendMail({
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
    `),
  })
}
