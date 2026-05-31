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

  const response = await fetch('https://api.resend.com/emails', {
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

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend email failed (${response.status}): ${errorText}`)
  }
}
