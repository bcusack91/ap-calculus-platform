import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const FROM_ADDRESS = process.env.SMTP_FROM || 'Study Mondo <noreply@studymondo.com>'

/**
 * Send assignment notification emails to classroom students.
 */
export async function sendAssignmentNotification(params: {
  studentEmails: string[]
  assignmentTitle: string
  classroomName: string
  dueDate: string | null
  teacherName: string
}) {
  const { studentEmails, assignmentTitle, classroomName, dueDate, teacherName } = params

  if (studentEmails.length === 0) return

  const dueLine = dueDate
    ? `<p style="color: #dc2626; font-size: 14px; font-weight: 600; margin-bottom: 16px;">Due: ${new Date(dueDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>`
    : ''

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
      <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: white; font-size: 20px; margin: 0;">New Assignment</h1>
      </div>
      <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <h2 style="font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 8px;">
          ${assignmentTitle}
        </h2>
        <p style="font-size: 14px; color: #6b7280; margin-bottom: 16px;">
          ${classroomName} &middot; Assigned by ${teacherName}
        </p>
        ${dueLine}
        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'}/assignments" 
           style="display: inline-block; background-color: #7c3aed; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
          View Assignment
        </a>
      </div>
      <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
        You received this because you are a member of ${classroomName} on Study Mondo.
      </p>
    </div>
  `

  // Send to all students (BCC for privacy)
  try {
    await transporter.sendMail({
      from: FROM_ADDRESS,
      bcc: studentEmails,
      subject: `New Assignment: ${assignmentTitle} — ${classroomName}`,
      text: `You have a new assignment: ${assignmentTitle} in ${classroomName}.${dueDate ? ` Due: ${new Date(dueDate).toLocaleDateString()}` : ''}\n\nView it at: ${process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'}/assignments`,
      html,
    })
  } catch (error) {
    console.error('Failed to send assignment notification:', error)
  }
}

/**
 * Send due date reminder for assignments due within 24 hours.
 */
export async function sendAssignmentReminder(params: {
  studentEmail: string
  assignmentTitle: string
  classroomName: string
  dueDate: string
}) {
  const { studentEmail, assignmentTitle, classroomName, dueDate } = params

  try {
    await transporter.sendMail({
      from: FROM_ADDRESS,
      to: studentEmail,
      subject: `Reminder: "${assignmentTitle}" due soon — ${classroomName}`,
      text: `Reminder: Your assignment "${assignmentTitle}" in ${classroomName} is due on ${new Date(dueDate).toLocaleDateString()}.\n\nView it at: ${process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'}/assignments`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
          <h1 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">
            Assignment Due Soon
          </h1>
          <p style="color: #4b5563; font-size: 16px; margin-bottom: 8px;">
            <strong>${assignmentTitle}</strong> in ${classroomName} is due on 
            <strong style="color: #dc2626;">${new Date(dueDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong>.
          </p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://www.studymondo.com'}/assignments"
             style="display: inline-block; margin-top: 16px; background-color: #dc2626; color: #ffffff; font-weight: 600; font-size: 16px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
            Complete Assignment
          </a>
        </div>
      `,
    })
  } catch (error) {
    console.error('Failed to send assignment reminder:', error)
  }
}
