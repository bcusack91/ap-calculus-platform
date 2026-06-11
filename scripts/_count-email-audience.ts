import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
;(async () => {
  const totalUsers = await prisma.user.count({ where: { email: { not: null } } })
  const unsubCount = await prisma.emailSubscriber.count({ where: { unsubscribed: true } })
  const subCount = await prisma.emailSubscriber.count({ where: { unsubscribed: false } })
  const unsub = await prisma.emailSubscriber.findMany({ where: { unsubscribed: true }, select: { email: true } })
  const blocked = new Set(unsub.map(u => u.email.toLowerCase()))
  const users = await prisma.user.findMany({ where: { email: { not: null } }, select: { email: true } })
  const seen = new Set<string>()
  let eligible = 0
  let blockedCount = 0
  for (const u of users) {
    if (!u.email) continue
    const k = u.email.toLowerCase()
    if (seen.has(k)) continue
    seen.add(k)
    if (blocked.has(k)) { blockedCount++; continue }
    eligible++
  }
  console.log('Users with email rows:              ', totalUsers)
  console.log('EmailSubscriber rows (subscribed):  ', subCount)
  console.log('EmailSubscriber rows (unsubscribed):', unsubCount)
  console.log('Unique User emails:                 ', seen.size)
  console.log('Blocked by unsubscribe:             ', blockedCount)
  console.log('Eligible to receive:                ', eligible)
  await prisma.$disconnect()
})()
