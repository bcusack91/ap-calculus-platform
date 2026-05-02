import { hasInteractiveLesson, getInteractiveTopicConfig } from '../src/data/interactive-lessons/registry'
import { hasEntranceQuiz } from '../src/data/entrance-quizzes'
import { hasExitQuiz } from '../src/data/exit-quizzes'
import * as fs from 'fs'

async function main() {
  const physics1Exit = await import('../src/data/exit-quizzes/ap-physics-1')
  const exitTopicSlugs = new Set<string>(
    physics1Exit.apPhysics1QuestionPool
      .map((q: { topicSlug?: string }) => q.topicSlug)
      .filter((s): s is string => !!s)
  )

  const exitIndexSrc = fs.readFileSync('src/data/exit-quizzes/index.ts', 'utf8')
  const physics1Slugs = new Set<string>()
  const re = /'([^']+)':\s*\(\)\s*=>\s*import\(['"]\.\/ap-physics-1['"]\)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(exitIndexSrc))) physics1Slugs.add(m[1])

  console.log('AP Physics 1 topics registered in exit-quizzes/index:', physics1Slugs.size)
  console.log('AP Physics 1 topics with at least one exit-quiz question:', exitTopicSlugs.size)
  console.log()

  const allSlugs = new Set<string>([...physics1Slugs, ...exitTopicSlugs])
  console.log('SLUG'.padEnd(50), 'LESSON', 'ENTR', 'EXITREG', 'EXITQ')
  const issues: string[] = []
  for (const slug of [...allSlugs].sort()) {
    const hasLesson = hasInteractiveLesson(slug)
    const lessonParts = getInteractiveTopicConfig(slug)?.parts.length ?? 0
    const hasEntr = hasEntranceQuiz(slug)
    const hasExitReg = hasExitQuiz(slug)
    const hasExitQ = exitTopicSlugs.has(slug)
    console.log(
      slug.padEnd(50),
      (hasLesson ? `Y(${lessonParts})` : '-').padEnd(7),
      (hasEntr ? 'Y' : '-').padEnd(4),
      (hasExitReg ? 'Y' : '-').padEnd(7),
      hasExitQ ? 'Y' : '-'
    )
    if (hasLesson && !hasEntr) issues.push(`MISSING_ENTRANCE: ${slug}`)
    if (hasLesson && !hasExitQ) issues.push(`MISSING_EXIT_QUESTIONS: ${slug}`)
    if (!hasLesson && (hasExitReg || hasExitQ)) issues.push(`NO_LESSON_BUT_EXIT: ${slug}`)
  }
  console.log('\n=== ISSUES ===')
  issues.forEach(i => console.log(i))
  console.log(`\n${issues.length} issues across ${allSlugs.size} candidate topics`)
}
main().catch(e => { console.error(e); process.exit(1) })
