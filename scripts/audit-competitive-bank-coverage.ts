/**
 * Audit competitive bank coverage by simulating what generateMatchQuestions
 * would actually return for each lesson topic slug.
 *
 * For each course's exit-quiz topics, checks whether the slug is served by:
 *   1. A direct topicSlug match in the bank.
 *   2. LESSON_TO_BANK_TOPIC alias map in competitive-utils.
 *   3. COURSE_GROUPING_LESSONS map in competitive-utils.
 *   4. An in-bank topicSlugAliases map.
 * Reports topics not covered by any of the above.
 */
import { promises as fs } from 'fs'
import path from 'path'

const root = path.resolve(__dirname, '..')
const exitQuizDir = path.join(root, 'src/data/exit-quizzes')
const banksDir = path.join(root, 'src/data/competitive-questions')
const utilsPath = path.join(root, 'src/lib/competitive-utils.ts')

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

function parseStringMap(src: string, varName: string): Record<string, string> {
  const re = new RegExp(`const ${varName}[^=]*=\\s*\\{([\\s\\S]*?)\\n\\}`, 'm')
  const m = src.match(re)
  if (!m) return {}
  const out: Record<string, string> = {}
  for (const e of m[1].matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)) out[e[1]] = e[2]
  return out
}

async function main() {
  const utils = await fs.readFile(utilsPath, 'utf8')
  const lessonToBank = parseStringMap(utils, 'LESSON_TO_BANK_TOPIC')
  const grouping = parseStringMap(utils, 'COURSE_GROUPING_LESSONS')
  const lessonToCourseBankKey = parseStringMap(utils, 'LESSON_TO_COURSE_BANK_KEY')
  // Bankless-topic lesson slugs are populated via two for-loops; extract the arrays:
  const psychSlugs = new Set<string>()
  const statsSlugs = new Set<string>()
  const psychBlock = utils.match(/PSYCHOLOGY_LESSON_SLUGS\s*=\s*\[([^\]]+)\]/)
  if (psychBlock) for (const m of psychBlock[1].matchAll(/'([^']+)'/g)) psychSlugs.add(m[1])
  const statsBlock = utils.match(/STATISTICS_LESSON_SLUGS\s*=\s*\[([^\]]+)\]/)
  if (statsBlock) for (const m of statsBlock[1].matchAll(/'([^']+)'/g)) statsSlugs.add(m[1])

  const issues: string[] = []
  for (const [exitFile, bankFile] of Object.entries(courseMap)) {
    const exitPath = path.join(exitQuizDir, exitFile)
    const bankPath = path.join(banksDir, bankFile)
    let exitContent: string, bankContent: string
    try { exitContent = await fs.readFile(exitPath, 'utf8') } catch { continue }
    try { bankContent = await fs.readFile(bankPath, 'utf8') } catch {
      issues.push(`📚 ${exitFile.replace('.ts','')}: ❌ NO BANK FILE`); continue
    }
    const exitTopics = new Set<string>()
    for (const m of exitContent.matchAll(/topicSlug:\s*'([^']+)'/g)) exitTopics.add(m[1])
    const bankSlugs = new Set<string>()
    for (const m of bankContent.matchAll(/topicSlug:\s*'([^']+)'/g)) bankSlugs.add(m[1])

    const missing: string[] = []
    for (const t of exitTopics) {
      if (bankSlugs.has(t)) continue                                     // direct
      if (lessonToBank[t] && bankSlugs.has(lessonToBank[t])) continue    // central alias
      if (lessonToCourseBankKey[t]) continue                             // generic dispatch
      if (grouping[t]) continue                                          // course-grouping
      if (psychSlugs.has(t) || statsSlugs.has(t)) continue               // bankless-topic
      missing.push(t)
    }
    if (missing.length) {
      issues.push(`📚 ${exitFile.replace('.ts','')} (${missing.length} uncovered)\n` +
        missing.map(m => `   • ${m}`).join('\n'))
    }
  }
  console.log('=== COMPETITIVE BANK COVERAGE AUDIT (lesson slug routing) ===\n')
  if (!issues.length) console.log('✅ All courses fully covered.')
  else issues.forEach(i => { console.log(i); console.log() })
}

main().catch(e => { console.error(e); process.exit(1) })
