import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

;(async () => {
  // Reproduce exact audience order from the original broadcast (default user.findMany order)
  const unsub = await prisma.emailSubscriber.findMany({
    where: { unsubscribed: true },
    select: { email: true },
  })
  const blocked = new Set(unsub.map(u => u.email.toLowerCase()))
  const users = await prisma.user.findMany({
    where: { email: { not: null } },
    select: { email: true, name: true },
  })
  const seen = new Set<string>()
  const audience: Array<{ email: string; name: string | null }> = []
  for (const u of users) {
    if (!u.email) continue
    const k = u.email.toLowerCase()
    if (seen.has(k)) continue
    if (blocked.has(k)) continue
    if (k.endsWith('@studyai.com')) continue
    if (k.startsWith('ai-opponent@')) continue
    if (k.startsWith('noreply@') || k.startsWith('no-reply@')) continue
    seen.add(k)
    audience.push({ email: u.email, name: u.name })
  }

  const COUNT = 93
  const log = path.join(process.cwd(), 'reports', 'competitive-announcement-sent.log')
  fs.mkdirSync(path.dirname(log), { recursive: true })
  const lines = audience.slice(0, COUNT).map(r => r.email.toLowerCase()).join('\n') + '\n'
  fs.writeFileSync(log, lines)
  console.log(`Seeded sent.log with ${COUNT} previously-sent recipients (first ${COUNT} of ${audience.length} in audience order).`)
  console.log('First:', audience[0].email)
  console.log('Last seeded:', audience[COUNT - 1].email)
  console.log('Next to send:', audience[COUNT].email)
  await prisma.$disconnect()
})()
