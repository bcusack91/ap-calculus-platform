/**
 * For every slug in the exit-quiz registry that maps to a COURSE-WIDE bank,
 * report which tier it resolves to: exact tags / relevance subset / whole pool.
 * Whole-pool slugs are the misaligned ones needing authored questions.
 */
import fs from 'fs'
async function m() {
  const src = fs.readFileSync('src/data/exit-quizzes/index.ts', 'utf8')
  const entries = [...src.matchAll(/'([^']+)':\s*\(\)\s*=>\s*import\('\.\/([^']+)'\)/g)].map(m => ({ slug: m[1], file: m[2] }))
  const byFile = new Map<string, string[]>()
  for (const e of entries) byFile.set(e.file, [...(byFile.get(e.file) ?? []), e.slug])
  const wholePool: string[] = []
  const relevance: string[] = []
  for (const [file, slugs] of byFile) {
    if (slugs.length < 3) continue // per-topic files serve only themselves — aligned by construction
    const mod = await import(`../src/data/exit-quizzes/${file}`)
    if (typeof mod.generateExitQuiz !== 'function') continue
    let full: number
    try { full = mod.generateExitQuiz(100000).length } catch { continue }
    for (const slug of slugs) {
      if (slug === file) continue // the course's own slug legitimately uses the whole pool
      try {
        const n = mod.generateExitQuiz(100000, slug).length
        if (n >= full) wholePool.push(`${file}:${slug}`)
        else {
          // exact or relevance? exact if some returned q came tagged with the slug — banks map away tags, so approximate: n < full = aligned enough
          relevance.push(`${file}:${slug} (${n}/${full})`)
        }
      } catch { /* generator variant */ }
    }
  }
  console.log('WHOLE-POOL (misaligned) slugs:', wholePool.length)
  wholePool.forEach(s => console.log('  ', s))
  console.log('aligned (exact or relevance) slugs:', relevance.length)
}
m()
