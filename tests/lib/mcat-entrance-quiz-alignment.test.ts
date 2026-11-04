/**
 * An entrance quiz credits lesson part N when the student masters quiz part N
 * (InteractiveLessonRenderer), so every MCAT entrance quiz must list exactly
 * the lesson's parts, in order, under the titles the lesson's own
 * "**Part N of M — Title**" lines show. In Nov 2026 the four gen-chem topics
 * that kept the first half of a split still carried 5-part quizzes for the
 * old whole topic, and all 18 seven-part overview quizzes had drifted to
 * generic part lists, so a pass skipped the wrong lesson parts.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const quizDir = path.join(process.cwd(), 'src/data/entrance-quizzes')
const lessonDir = path.join(process.cwd(), 'src/data/interactive-lessons')

/** Lesson part titles from each part file's "**Part N of M — Title**" line. */
function lessonParts(slug: string): { n: number; of: number; title: string }[] | null {
  const re = new RegExp(`^mcat-mcat-${slug.replace(/^mcat-/, '')}-part(\\d+)\\.ts$`)
  const files = fs.readdirSync(lessonDir).filter((f) => re.test(f))
  if (files.length === 0) return null
  return files
    .map((f) => {
      const src = fs.readFileSync(path.join(lessonDir, f), 'utf8')
      const m = src.match(/\*\*Part (\d+) of (\d+) — ([^*\n]+?)\*\*/)
      return { file: Number(f.match(re)![1]), m }
    })
    .sort((a, b) => a.file - b.file)
    // Titles are read from source, where a template literal's "\\" is one backslash at runtime.
    .map(({ file, m }) => ({ n: m ? Number(m[1]) : -file, of: m ? Number(m[2]) : -1, title: m ? m[3].trim().replace(/\\\\/g, '\\') : '' }))
}

const slugs = fs
  .readdirSync(quizDir)
  .filter((f) => /^mcat-.*-mcat\.ts$/.test(f))
  .map((f) => f.replace(/\.ts$/, ''))
  .filter((slug) => lessonParts(slug) !== null)

describe('MCAT entrance quizzes match their lessons part for part', () => {
  it('finds the MCAT quizzes that have lessons', () => {
    expect(slugs.length).toBeGreaterThanOrEqual(27)
  })

  for (const slug of slugs) {
    it(slug, async () => {
      const mod = await import(path.join(quizDir, `${slug}.ts`))
      const quizParts = (mod.getEntranceQuizParts() as { partNumber: number; partTitle: string }[]).map((p) => ({
        n: p.partNumber,
        title: p.partTitle.trim(),
      }))
      const parts = lessonParts(slug)!
      // Every lesson part file carries its own, consistent Part line.
      expect(parts.map((p) => p.n)).toEqual(parts.map((_, i) => i + 1))
      expect(new Set(parts.map((p) => p.of))).toEqual(new Set([parts.length]))
      expect(quizParts).toEqual(parts.map((p) => ({ n: p.n, title: p.title })))
      // Each quiz part asks at least one question, and no question points at a missing part.
      const qs = mod.generateEntranceQuiz() as { partNumber: number }[]
      for (const p of parts) expect(qs.some((q) => q.partNumber === p.n)).toBe(true)
      expect(qs.every((q) => q.partNumber >= 1 && q.partNumber <= parts.length)).toBe(true)
    })
  }
})
