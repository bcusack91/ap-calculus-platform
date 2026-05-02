import { hasEntranceQuiz, loadEntranceQuiz } from '../src/data/entrance-quizzes'
import { getInteractiveTopicConfig, getAllInteractiveSlugs } from '../src/data/interactive-lessons/registry'

async function main() {
  const rows: { slug: string; lessonParts: number; quizQuestions: number; coveredParts: number; uncovered: number[] }[] = []
  const slugs = getAllInteractiveSlugs()
  for (const slug of slugs) {
    if (!hasEntranceQuiz(slug)) continue
    const cfg = getInteractiveTopicConfig(slug)
    if (!cfg) continue
    const lessonParts = cfg.parts.length
    try {
      const data = await loadEntranceQuiz(slug)
      if (!data) continue
      const qs = data.questions
      const partsCovered = new Set<number>(qs.map((q: any) => q.partNumber))
      const uncovered: number[] = []
      for (let i = 1; i <= lessonParts; i++) if (!partsCovered.has(i)) uncovered.push(i)
      const overflow: number[] = []
      partsCovered.forEach(p => { if (p > lessonParts || p < 1) overflow.push(p) })
      if (overflow.length) console.log(`OVERFLOW ${slug} (lesson has ${lessonParts} parts) → quiz refs parts ${[...overflow].sort().join(',')}`)
      rows.push({ slug, lessonParts, quizQuestions: qs.length, coveredParts: partsCovered.size, uncovered })
    } catch {}
  }
  rows.sort((a, b) => b.uncovered.length - a.uncovered.length)
  console.log('slug | lessonParts | qCount | partsCovered | uncoveredParts')
  for (const r of rows) {
    if (r.uncovered.length > 0) {
      console.log(`${r.slug} | ${r.lessonParts} | ${r.quizQuestions} | ${r.coveredParts} | [${r.uncovered.join(',')}]`)
    }
  }
  console.log('\nMismatched topics:', rows.filter(r => r.uncovered.length > 0).length, '/', rows.length)
}
main().catch(e => { console.error(e); process.exit(1) })
