// Read-only: list study contexts for a user to verify the active course mode
// now appears even with zero progress rows.
import { prisma } from '../src/lib/prisma'
import { listStudyContexts, getActiveStudyContext } from '../src/lib/study-context'
async function m() {
  const u = await prisma.user.findFirst({ where: { email: process.argv[2] }, select: { id: true, email: true, studyContext: true } })
  if (!u) { console.log('no user'); process.exit(1) }
  const [active, contexts] = await Promise.all([getActiveStudyContext(u.id), listStudyContexts(u.id)])
  console.log('stored:', u.studyContext, '| resolved active:', active)
  contexts.forEach(c => console.log(`  [${c.kind}] ${c.key} — ${c.label} (${c.cardCount ?? '?'} cards)`))
  console.log('active present in list:', contexts.some(c => c.key === active))
  await prisma.$disconnect()
}
m()
