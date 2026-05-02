/**
 * More accurate audit: cross-reference each course's exit-quiz pool topics
 * against its competitive bank topics. Prints per-course missing/low coverage.
 */
import { promises as fs } from 'fs'
import path from 'path'

const root = path.resolve(__dirname, '..')
const exitQuizDir = path.join(root, 'src/data/exit-quizzes')
const banksDir = path.join(root, 'src/data/competitive-questions')

const courseMap: Record<string, string> = {
  'ap-physics-1.ts':       'ap-physics1-bank.ts',
  'ap-physics-2.ts':       'ap-physics2-bank.ts',
  'ap-physics-c-mechanics.ts': 'ap-physics-c-mech-bank.ts',
  'ap-physics-c-em.ts':    'ap-physics-c-em-bank.ts',
  'ap-biology.ts':         'ap-biology-bank.ts',
  'ap-chemistry.ts':       'ap-chemistry-bank.ts',
  'ap-psychology.ts':      'ap-psychology-bank.ts',
  'ap-statistics.ts':      'ap-statistics-bank.ts',
  'ap-calculus-ab.ts':     'ap-calculus-bank.ts',
  'ap-calculus-bc.ts':     'ap-calculus-bc-bank.ts',
  'ap-precalculus.ts':     'precalc-bank.ts',
  'ap-microeconomics.ts':  'ap-micro-bank.ts',
  'ap-macroeconomics.ts':  'ap-macro-bank.ts',
  'ap-us-government.ts':   'ap-us-gov-bank.ts',
  'ap-us-history.ts':      'ap-us-history-bank.ts',
  'ap-world-history.ts':   'ap-world-history-bank.ts',
  'ap-human-geography.ts': 'ap-human-geo-bank.ts',
  'ap-environmental-science.ts': 'ap-enviro-bank.ts',
  'ap-english-language.ts':'ap-english-lang-bank.ts',
  'ap-english-literature.ts':'ap-english-lit-bank.ts',
  'ap-csa.ts':             'ap-csa-bank.ts',
  'ap-csp.ts':             'ap-csp-bank.ts',
  'ap-african-american-studies.ts': 'ap-african-american-studies-bank.ts',
  'organic-chemistry.ts':  'ochem-bank.ts',
  'algebra-1.ts':          'algebra-bank.ts',
  'algebra-2.ts':          'algebra2-bank.ts',
  'geometry.ts':           'geometry-bank.ts',
}

async function main() {
  const issues: string[] = []
  for (const [exitFile, bankFile] of Object.entries(courseMap)) {
    const exitPath = path.join(exitQuizDir, exitFile)
    const bankPath = path.join(banksDir, bankFile)
    let exitContent: string, bankContent: string
    try { exitContent = await fs.readFile(exitPath, 'utf8') } catch { continue }
    try { bankContent = await fs.readFile(bankPath, 'utf8') } catch {
      issues.push(`📚 ${exitFile.replace('.ts','')}: ❌ NO BANK FILE (${bankFile})`); continue
    }
    const exitTopics = new Set<string>()
    for (const m of exitContent.matchAll(/topicSlug:\s*'([^']+)'/g)) exitTopics.add(m[1])
    const counts: Record<string, number> = {}
    for (const m of bankContent.matchAll(/topicSlug:\s*'([^']+)'/g)) counts[m[1]] = (counts[m[1]] || 0) + 1
    const missing: string[] = []
    const low: { slug: string; n: number }[] = []
    for (const t of exitTopics) {
      const n = counts[t] || 0
      if (n === 0) missing.push(t)
      else if (n < 10) low.push({ slug: t, n })
    }
    if (missing.length || low.length) {
      const lines = [`📚 ${exitFile.replace('.ts','')}`]
      if (missing.length) {
        lines.push(`   ❌ MISSING: ${missing.length}`)
        for (const m of missing) lines.push(`      • ${m}`)
      }
      if (low.length) {
        lines.push(`   ⚠️  LOW (<10): ${low.length}`)
        for (const l of low) lines.push(`      • ${l.slug} — ${l.n}`)
      }
      issues.push(lines.join('\n'))
    }
  }
  console.log('=== COMPETITIVE BANK COVERAGE AUDIT (vs exit-quiz topics) ===\n')
  if (!issues.length) console.log('✅ All courses fully covered.')
  else issues.forEach(i => { console.log(i); console.log() })
}

main().catch(e => { console.error(e); process.exit(1) })
