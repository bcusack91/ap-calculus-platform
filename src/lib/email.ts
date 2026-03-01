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

/**
 * Send a verification email with a clickable link.
 */
export async function sendVerificationEmail(email: string, verifyUrl: string) {
  await transporter.sendMail({
    from: FROM_ADDRESS,
    to: email,
    subject: 'Verify your Study Mondo email',
    text: `Verify your email by visiting: ${verifyUrl}\n\nThis link expires in 24 hours.\n\nIf you didn't create an account, you can safely ignore this email.`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
        <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827;">
          Verify your email
        </h1>
        <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
          Click the button below to verify your Study Mondo account. This link expires in 24&nbsp;hours.
        </p>
        <a href="${verifyUrl}" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
          Verify Email
        </a>
        <p style="color: #9ca3af; font-size: 13px; margin-top: 32px;">
          If you didn&rsquo;t create an account on Study Mondo, you can safely ignore this email.
        </p>
      </div>
    `,
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
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
        <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827;">
          Reset your password
        </h1>
        <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
          Click the button below to choose a new password. This link expires in 1&nbsp;hour.
        </p>
        <a href="${resetUrl}" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
          Reset Password
        </a>
        <p style="color: #9ca3af; font-size: 13px; margin-top: 32px;">
          If you didn&rsquo;t request this, you can safely ignore this email.
        </p>
      </div>
    `,
  })
}
