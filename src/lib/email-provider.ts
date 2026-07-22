import { captureServerError } from '@/lib/observability'

type EmailRecipient = string | string[]

type EmailMessage = {
  from: string
  to: EmailRecipient
  subject: string
  text: string
  html: string
  bcc?: EmailRecipient
}

function asArray(value: EmailRecipient | undefined): string[] | undefined {
  if (!value) return undefined
  return Array.isArray(value) ? value : [value]
}

export async function sendEmail(message: EmailMessage) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured — email sending is disabled')
  }

  // Context attached to any failure report. Deliberately excludes recipient
  // addresses (PII) — subject alone is enough to identify which mail broke.
  const failureContext = { where: 'sendEmail', subject: message.subject }

  let response: Response
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: message.from,
        to: asArray(message.to),
        bcc: asArray(message.bcc),
        subject: message.subject,
        text: message.text,
        html: message.html,
      }),
    })
  } catch (err) {
    // Network / DNS failure reaching Resend — email IS configured but the send
    // broke, which is exactly the kind of silent failure worth an alert.
    await captureServerError(err, failureContext)
    throw err
  }

  if (!response.ok) {
    const errorText = await response.text()
    const err = new Error(`Resend email failed (${response.status}): ${errorText}`)
    await captureServerError(err, { ...failureContext, status: response.status })
    throw err
  }
}
