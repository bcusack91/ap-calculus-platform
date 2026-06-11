import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

function extractRegistrySlugs(): string[] {
  const registryPath = path.resolve(__dirname, '../src/data/interactive-lessons/registry.ts')
  const content = fs.readFileSync(registryPath, 'utf-8')
  // Match top-level keys like  'some-slug': {
  const regex = /^\s{2}'([^']+)':\s*\{/gm
  const slugs: string[] = []
  let match: RegExpExecArray | null
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1])
  }
  return slugs
}

function sharedWordScore(a: string, b: string): number {
  const wordsA = new Set(a.split('-'))
  const wordsB = new Set(b.split('-'))
  let shared = 0
  for (const w of wordsA) {
    if (wordsB.has(w)) shared++
  }
  const union = new Set([...wordsA, ...wordsB]).size
  return union === 0 ? 0 : shared / union // Jaccard
}

const SUFFIXES = ['-act', '-sat', '-precalc', '-calcab', '-calcbc', '-mcat', '-ochem']

function findBestMatch(orphan: string, dbSlugs: Set<string>, dbSlugList: string[]): string | null {
  // 1. Exact match after removing known suffix
  for (const suffix of SUFFIXES) {
    if (orphan.endsWith(suffix)) {
      const stripped = orphan.slice(0, -suffix.length)
      if (dbSlugs.has(stripped)) return stripped
    }
  }

  // 2. Check if orphan is a substring of a DB slug or vice-versa
  const substringMatches = dbSlugList.filter(
    db => db.includes(orphan) || orphan.includes(db)
  )
  if (substringMatches.length === 1) return substringMatches[0]
  if (substringMatches.length > 1) {
    // pick the one with shortest edit distance (closest length)
    substringMatches.sort((a, b) => Math.abs(a.length - orphan.length) - Math.abs(b.length - orphan.length))
    return substringMatches[0]
  }

  // 3. Fuzzy: try stripping suffix then substring
  for (const suffix of SUFFIXES) {
    if (orphan.endsWith(suffix)) {
      const stripped = orphan.slice(0, -suffix.length)
      const subMatches = dbSlugList.filter(
        db => db.includes(stripped) || stripped.includes(db)
      )
      if (subMatches.length === 1) return subMatches[0]
      if (subMatches.length > 1) {
        subMatches.sort((a, b) => Math.abs(a.length - stripped.length) - Math.abs(b.length - stripped.length))
        return subMatches[0]
      }
    }
  }

  // 4. Shared-word (Jaccard) fuzzy matching
  let bestScore = 0
  let bestMatch: string | null = null
  for (const db of dbSlugList) {
    const score = sharedWordScore(orphan, db)
    if (score > bestScore) {
      bestScore = score
      bestMatch = db
    }
  }
  if (bestScore >= 0.35) return bestMatch

  return null
}

function inferCourseGroup(slug: string): string {
  if (slug.endsWith('-act') || slug.startsWith('act-')) return 'ACT'
  if (slug.endsWith('-sat') || slug.startsWith('sat-')) return 'SAT'
  if (slug.endsWith('-mcat') || slug.startsWith('mcat-')) return 'MCAT'
  if (slug.endsWith('-precalc')) return 'Pre-Calculus'
  if (slug.endsWith('-calcab')) return 'Calculus AB'
  if (slug.endsWith('-calcbc')) return 'Calculus BC'
  if (slug.endsWith('-ochem') || slug.includes('ochem')) return 'Organic Chemistry'
  if (slug.includes('physics2') || slug.includes('electric') || slug.includes('magnetic') || slug.includes('buoyancy') || slug.includes('density') || slug.includes('fluid') || slug.includes('bernoulli') || slug.includes('temperature') || slug.includes('heat') || slug.includes('phase-change') || slug.includes('thermodynamics') || slug.includes('current-resistance') || slug.includes('kirchhoff') || slug.includes('series-parallel') || slug.includes('lenses') || slug.includes('interference') || slug.includes('photons')) return 'AP Physics 2'
  if (slug.includes('psychology') || slug.includes('conditioning') || slug.includes('cognition') || slug.includes('memory') || slug.includes('personality') || slug.includes('disorders') || slug.includes('therapy') || slug.includes('prejudice') || slug.includes('persuasion') || slug.includes('conformity') || slug.includes('emotion') || slug.includes('motivation') || slug.includes('intelligence') || slug.includes('development') || slug.includes('sensation') || slug.includes('perception') || slug.includes('brain') || slug.includes('genetics-behavior')) return 'AP Psychology'
  if (slug.includes('biochemistry') || slug.includes('macromolecule') || slug.includes('enzyme') || slug.includes('cell') || slug.includes('membrane') || slug.includes('respiration') || slug.includes('photosynthesis') || slug.includes('meiosis') || slug.includes('mendelian') || slug.includes('dna') || slug.includes('transcription') || slug.includes('gene') || slug.includes('biotechnology') || slug.includes('evolution') || slug.includes('ecology') || slug.includes('speciation') || slug.includes('population') || slug.includes('fitness-environment') || slug.includes('natural-selection')) return 'AP Biology'
  if (slug.includes('mole') || slug.includes('electron-config') || slug.includes('periodic') || slug.includes('photoelectron') || slug.includes('bond') || slug.includes('lewis') || slug.includes('vsepr') || slug.includes('hybridization') || slug.includes('intermolecular') || slug.includes('solub') || slug.includes('gas-law') || slug.includes('stoichiometry') || slug.includes('ionic') || slug.includes('oxidation') || slug.includes('rate') || slug.includes('enthalpy') || slug.includes('entropy') || slug.includes('gibbs') || slug.includes('equilibrium') || slug.includes('acid') || slug.includes('buffer') || slug.includes('titration') || slug.includes('galvanic') || slug.includes('nernst') || slug.includes('electrolytic') || slug.includes('reaction') || slug.includes('mixtures')) return 'AP Chemistry'
  if (slug.includes('motion') || slug.includes('newton') || slug.includes('friction') || slug.includes('inclined') || slug.includes('work') || slug.includes('energy') || slug.includes('momentum') || slug.includes('collision') || slug.includes('circular') || slug.includes('centripetal') || slug.includes('gravitation') || slug.includes('torque') || slug.includes('rotational') || slug.includes('angular') || slug.includes('shm')) return 'AP Physics 1'
  if (slug.includes('algebra1') || slug.includes('factoring-algebra')) return 'Algebra 1'
  return 'Other'
}

async function main() {
  const registrySlugs = extractRegistrySlugs()
  console.log(`Total registry slugs: ${registrySlugs.length}`)

  const topics = await prisma.topic.findMany({ select: { slug: true } })
  const dbSlugSet = new Set(topics.map(t => t.slug))
  const dbSlugList = topics.map(t => t.slug)
  console.log(`Total DB topic slugs: ${dbSlugList.length}`)

  const orphans = registrySlugs.filter(s => !dbSlugSet.has(s))
  console.log(`Orphan registry slugs (not in DB): ${orphans.length}\n`)

  // Group by course
  const groups: Record<string, { orphan: string; match: string | null }[]> = {}

  for (const orphan of orphans) {
    const match = findBestMatch(orphan, dbSlugSet, dbSlugList)
    const group = inferCourseGroup(orphan)
    if (!groups[group]) groups[group] = []
    groups[group].push({ orphan, match })
  }

  // Print results
  for (const [group, entries] of Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]))) {
    console.log(`\n=== ${group} (${entries.length} orphans) ===`)
    for (const { orphan, match } of entries) {
      console.log(`  "${orphan}" → ${match ? `"${match}"` : 'null'}`)
    }
  }

  // Also output as JSON
  console.log('\n\n=== FULL JSON MAPPING ===')
  const mapping: Record<string, string | null> = {}
  for (const orphan of orphans) {
    mapping[orphan] = findBestMatch(orphan, dbSlugSet, dbSlugList)
  }
  console.log(JSON.stringify(mapping, null, 2))
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
