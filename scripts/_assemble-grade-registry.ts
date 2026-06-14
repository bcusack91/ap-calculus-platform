/**
 * Post-workflow integration for grade 4-8 lessons. Reads every authored file in
 * src/data/interactive-lessons/grades/, validates its `parts: LessonData[]`
 * export, derives a title per part (first markdown heading, else "Part N"), and
 * splices registry entries into interactiveLessonRegistry — idempotently, between
 * marker comments, skipping any slug that already has an entry elsewhere.
 *
 *   npx tsx scripts/_assemble-grade-registry.ts        # write
 *   npx tsx scripts/_assemble-grade-registry.ts --dry  # report only
 */
import fs from 'fs'
import path from 'path'

const DRY = process.argv.includes('--dry')
const GRADES_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons', 'grades')
const REGISTRY = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons', 'registry.ts')
const START = '  // __GRADE_LESSONS_START__ (generated — do not edit by hand)'
const END = '  // __GRADE_LESSONS_END__'

function firstHeading(part: { sections?: { type?: string; content?: string }[] }): string | null {
  for (const s of part.sections ?? []) {
    if (typeof s.content !== 'string') continue
    const m = s.content.match(/^\s*#{1,3}\s+(.+?)\s*$/m)
    if (m) return m[1].replace(/[#*`📐🎯🔍📋🧮⭐🏆➗✨🔥🌌👑]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 60)
  }
  return null
}

async function main() {
  if (!fs.existsSync(GRADES_DIR)) { console.error('no grades dir'); process.exit(1) }
  const files = fs.readdirSync(GRADES_DIR).filter((f) => f.endsWith('.ts')).sort()
  console.log(`Found ${files.length} grade lesson files.`)

  let registry = fs.readFileSync(REGISTRY, 'utf8')
  const entries: string[] = []
  const bad: string[] = []
  const dupes: string[] = []
  let totalParts = 0

  for (const f of files) {
    const slug = f.replace(/\.ts$/, '')
    let mod: { parts?: { topicSlug?: string; sections?: unknown[] }[] }
    try {
      mod = await import(path.join(GRADES_DIR, f))
    } catch (e) {
      bad.push(`${slug}: import failed — ${String((e as Error).message).slice(0, 90)}`); continue
    }
    const parts = mod.parts
    if (!Array.isArray(parts) || parts.length === 0) { bad.push(`${slug}: no parts[] export`); continue }
    const partsOk = parts.every((p) => p && typeof p.topicSlug === 'string' && Array.isArray(p.sections) && p.sections.length > 0)
    if (!partsOk) { bad.push(`${slug}: a part is missing topicSlug/sections`); continue }
    if (parts.some((p) => p.topicSlug !== slug)) { bad.push(`${slug}: a part.topicSlug != filename slug`); continue }

    // Already wired elsewhere in the registry (outside our marker block)? Skip to avoid dup keys.
    const outside = registry.replace(new RegExp(`${START}[\\s\\S]*?${END}`), '')
    if (new RegExp(`['"]${slug.replace(/[-]/g, '\\-')}['"]\\s*:\\s*\\{`).test(outside)) { dupes.push(slug); continue }

    const partLines = parts.map((p, i) => {
      const title = (firstHeading(p as { sections?: { type?: string; content?: string }[] }) || `Part ${i + 1}`).replace(/'/g, "\\'")
      return `      { title: '${title}', loader: () => import('./grades/${slug}').then(m => m.parts[${i}]) },`
    })
    entries.push(`  '${slug}': {\n    completionDestination: 'competitive',\n    parts: [\n${partLines.join('\n')}\n    ]\n  },`)
    totalParts += parts.length
  }

  console.log(`\nWiring ${entries.length} lessons (${totalParts} parts). Skipped ${dupes.length} already-wired, ${bad.length} bad.`)
  if (dupes.length) console.log(`  already-wired: ${dupes.join(', ')}`)
  if (bad.length) console.log(`  BAD FILES:\n    ${bad.join('\n    ')}`)
  if (!entries.length) { console.log('Nothing to wire.'); return }

  const block = `${START}\n${entries.join('\n')}\n${END}`
  if (new RegExp(`${START}[\\s\\S]*?${END}`).test(registry)) {
    registry = registry.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block)
  } else {
    // Insert right after the registry object opens.
    registry = registry.replace(
      /(const interactiveLessonRegistry: Record<string, InteractiveTopicConfig> = \{\n)/,
      `$1${block}\n`,
    )
  }

  if (DRY) { console.log('\n--dry: not writing. First entry preview:\n' + entries[0]); return }
  fs.writeFileSync(REGISTRY, registry)
  console.log(`\n✅ Wrote ${entries.length} entries into registry.ts`)
}

main()
