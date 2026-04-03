/**
 * Patches seed scripts that have category.upsert() calls missing the required courseId field.
 * Adds a course lookup and courseId to each create block.
 */
import * as fs from 'fs'
import * as path from 'path'

// Map each broken file to its course slug
const FILE_COURSE_MAP: Record<string, string> = {
  'seed.ts': 'ap-calculus-ab',
  'seed-limits-micro.ts': 'ap-calculus-ab',
  'seed-limits-expanded.ts': 'ap-calculus-ab',
  'seed-derivatives-part1.ts': 'ap-calculus-ab',
  'seed-derivatives-part3.ts': 'ap-calculus-ab',
  'seed-derivatives-part4.ts': 'ap-calculus-ab',
  'seed-derivatives-part5.ts': 'ap-calculus-ab',
  'seed-integration-part1.ts': 'ap-calculus-ab',
  'seed-integration-part2.ts': 'ap-calculus-ab',
  'seed-integration-part3.ts': 'ap-calculus-ab',
  'seed-integration-part4.ts': 'ap-calculus-ab',
  'seed-integration-part5.ts': 'ap-calculus-ab',
  'seed-advanced-integration-part1.ts': 'ap-calculus-ab',
  'seed-applications-part1.ts': 'ap-calculus-ab',
  'seed-applications-part2.ts': 'ap-calculus-ab',
  'seed-applications-part3.ts': 'ap-calculus-ab',
  'seed-applications-part4.ts': 'ap-calculus-ab',
  'seed-applications-part5.ts': 'ap-calculus-ab',
  'seed-parametric-polar-part1.ts': 'ap-calculus-bc',
  'seed-parametric-polar-part2.ts': 'ap-calculus-bc',
  'seed-sequences-series-part1.ts': 'ap-calculus-bc',
  'seed-sequences-series-part2.ts': 'ap-calculus-bc',
  'seed-sequences-series-part3.ts': 'ap-calculus-bc',
  'seed-power-taylor-part1.ts': 'ap-calculus-bc',
}

const PRISMA_DIR = __dirname

for (const [file, courseSlug] of Object.entries(FILE_COURSE_MAP)) {
  const filePath = path.join(PRISMA_DIR, file)
  if (!fs.existsSync(filePath)) {
    console.log(`⏭  ${file} not found, skipping`)
    continue
  }

  let content = fs.readFileSync(filePath, 'utf-8')

  // Check if already patched
  if (content.includes('__seedCourse')) {
    console.log(`✓  ${file} already patched`)
    continue
  }

  // 1) Insert course lookup right after "async function main() {"
  const mainFnRe = /async function main\(\)\s*\{/
  const mainMatch = content.match(mainFnRe)
  if (!mainMatch || mainMatch.index === undefined) {
    console.log(`⚠  ${file}: could not find async function main()`)
    continue
  }
  const insertPos = mainMatch.index + mainMatch[0].length
  const courseLookup = `\n  const __seedCourse = await (prisma as any).course.findFirst({ where: { slug: '${courseSlug}' } })\n  const __courseId = __seedCourse?.id\n`
  content = content.slice(0, insertPos) + courseLookup + content.slice(insertPos)

  // 2) Find all category.upsert create blocks and add courseId
  // Pattern: inside create: { ... }, add courseId before closing }
  // We look for "create:" followed by a { block } inside a category.upsert context
  let patchCount = 0
  // Match create blocks that don't already have courseId
  content = content.replace(
    /category\.upsert\(\{[\s\S]*?create:\s*\{([\s\S]*?)\}/g,
    (match) => {
      if (match.includes('courseId')) return match // already has it
      // Add courseId before the last } of the create block
      const lastBrace = match.lastIndexOf('}')
      // Find the line before the last }
      const beforeBrace = match.slice(0, lastBrace).trimEnd()
      const needsComma = !beforeBrace.endsWith(',')
      const insertion = (needsComma ? ',' : '') + '\n      courseId: __courseId'
      patchCount++
      return match.slice(0, lastBrace) + insertion + '\n    ' + match.slice(lastBrace)
    }
  )

  fs.writeFileSync(filePath, content)
  console.log(`✅ ${file}: patched ${patchCount} upsert(s), course='${courseSlug}'`)
}

console.log('\nDone! All files patched.')
