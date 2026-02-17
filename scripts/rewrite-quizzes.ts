/**
 * Script to rewrite auto-generated "Check Your Understanding" questions
 * in interactive lesson files.
 *
 * Problems with current questions:
 *   - Correct answer is verbatim bullet text from content above
 *   - Wrong answers are absurd: "Only in linear algebra", "Exclusively in statistics"
 *   - Dropdown options are truncated at ~50 chars
 *   - Correct answer is always at index 0
 *   - Explanations just restate the answer
 *
 * This script fixes:
 *   1. Uses all concepts from the lesson as options (plausible cross-concept distractors)
 *   2. Randomizes correct answer position
 *   3. Fixes truncated dropdown options
 *   4. Generates better question stems
 *   5. Provides meaningful explanations
 *   6. Restructures dropdowns as real comprehension exercises
 *
 * Usage: npx tsx scripts/rewrite-quizzes.ts [--dry-run] [--file <path>]
 */

import * as fs from 'fs'
import * as path from 'path'

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const LESSONS_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons')

// Bad-pattern markers that identify auto-generated files needing fixes
const BAD_MARKERS = [
  'This applies only to discrete math',
  'Exclusively in statistics',
  'Only in linear algebra',
  'A concept from a different course',
  'Not applicable',
  'Unrelated to calculus',
  'Only in higher math',
  'it is not relevant',
  'it only occurs in labs',
  'it was disproven',
  'This is not covered in AP',
  'This only occurs in prokaryotes',
  'Photosynthesis only',
  'The opposite process occurs',
  'None of these apply to',
  'This concept is obsolete',
  'None of these are correct',
  'An unrelated concept',
  'The opposite is true',
  'Guess randomly',
  'Skip the question',
  'Use a different test',
  'Skip these questions entirely',
  'This topic appears only on the',
]

// ---------------------------------------------------------------------------
// Deterministic seeded PRNG (same as the renderer uses)
// ---------------------------------------------------------------------------
function createRng(seed: number): () => number {
  let s = Math.max(seed, 1)
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function hashStr(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h) || 1
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ---------------------------------------------------------------------------
// Concept extraction
// ---------------------------------------------------------------------------
interface Concept {
  label: string   // Short identifier (e.g. "Chain Rule", "Overall equation")
  detail: string  // Full description (e.g. "d/dx[f(g(x))] = f'(g(x)) · g'(x)")
}

function extractConcepts(introContent: string, detailContent: string): Concept[] {
  const concepts: Concept[] = []
  const lines = introContent.split('\n').map(l => l.trim()).filter(Boolean)

  // Strategy 1: Numbered items with ### headings
  // Pattern: "### 1. Label text"  followed by detail on next line
  const headingPattern = /^###\s*\d+\.\s*(.+)$/
  const numberedPattern = /^(\d+)\.\s+(.+)$/

  // Try ### headings first
  for (let i = 0; i < lines.length; i++) {
    const hMatch = lines[i].match(headingPattern)
    if (hMatch) {
      const label = hMatch[1].trim()
      // Next non-empty, non-heading line is the detail
      let detail = label
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim()
        if (!nextLine || nextLine.startsWith('#') || nextLine.startsWith('**Part')) break
        if (!nextLine.startsWith('###') && !nextLine.startsWith('# ')) {
          detail = nextLine
          break
        }
      }
      concepts.push({ label, detail })
    }
  }

  // Strategy 2: Numbered items without headings (bio pattern)
  if (concepts.length === 0) {
    for (const line of lines) {
      const nMatch = line.match(numberedPattern)
      if (nMatch) {
        const full = nMatch[2].trim()
        // Split on colon if present for label/detail
        const colonIdx = full.indexOf(':')
        if (colonIdx > 0 && colonIdx < full.length - 1) {
          concepts.push({
            label: full.substring(0, colonIdx).trim(),
            detail: full.substring(colonIdx + 1).trim(),
          })
        } else {
          concepts.push({ label: full, detail: full })
        }
      }
    }
  }

  // Strategy 3: Plain text lines (ACT/SAT pattern)
  if (concepts.length === 0) {
    for (const line of lines) {
      if (
        line.startsWith('#') ||
        line.startsWith('**Part') ||
        line.startsWith('**Key') ||
        line.startsWith('**ACT') ||
        line.startsWith('**SAT') ||
        line.length < 5
      ) continue

      const stripped = line.replace(/^\*\*/, '').replace(/\*\*$/, '').trim()
      if (stripped.length < 5) continue

      const colonIdx = stripped.indexOf(':')
      if (colonIdx > 0 && colonIdx < stripped.length - 1) {
        concepts.push({
          label: stripped.substring(0, colonIdx).trim(),
          detail: stripped.substring(colonIdx + 1).trim(),
        })
      } else {
        concepts.push({ label: stripped, detail: stripped })
      }
    }
  }

  // Also extract concepts from the detail section
  if (detailContent) {
    const detailLines = detailContent.split('\n').map(l => l.trim()).filter(Boolean)
    for (const line of detailLines) {
      // Match "**Key Insight:**", "**ACT Tip:**", "**SAT Tip:**" etc.
      const tipMatch = line.match(/^\*\*(.+?):\*\*\s*(.+)$/)
      if (tipMatch) {
        const tipLabel = tipMatch[1].trim()
        const tipDetail = tipMatch[2].trim()
        // Only add if it's a new concept not already captured
        if (!concepts.some(c => c.detail === tipDetail || c.label === tipLabel)) {
          concepts.push({ label: tipLabel, detail: tipDetail })
        }
      }

      // Match bullet points: "- **label**: detail"
      const bulletMatch = line.match(/^-\s*\*\*(.+?)\*\*:?\s*(.*)$/)
      if (bulletMatch) {
        const bLabel = bulletMatch[1].trim()
        const bDetail = bulletMatch[2].trim() || bLabel
        if (!concepts.some(c => c.label === bLabel)) {
          concepts.push({ label: bLabel, detail: bDetail })
        }
      }
    }
  }

  return concepts
}

// ---------------------------------------------------------------------------
// Subject detection
// ---------------------------------------------------------------------------
function detectSubject(fileName: string): string {
  if (fileName.startsWith('act-')) return 'act'
  if (fileName.startsWith('sat-')) return 'sat'
  if (fileName.startsWith('calcab-') || fileName.startsWith('calcbc-')) return 'calculus'
  if (fileName.startsWith('bio-')) return 'biology'
  if (fileName.startsWith('chem')) return 'chemistry'
  if (fileName.startsWith('precalc-')) return 'precalculus'
  if (fileName.startsWith('physics')) return 'physics'
  if (fileName.startsWith('mcat-')) return 'mcat'
  if (fileName.startsWith('psych-')) return 'psychology'
  if (fileName.includes('algebra')) return 'algebra'
  if (fileName.includes('geometry')) return 'geometry'
  if (fileName.includes('stats')) return 'statistics'
  if (fileName.includes('grade')) return 'math'
  return 'general'
}

function getSubjectName(subject: string): string {
  const names: Record<string, string> = {
    act: 'ACT prep',
    sat: 'SAT prep',
    calculus: 'calculus',
    biology: 'biology',
    chemistry: 'chemistry',
    precalculus: 'precalculus',
    physics: 'physics',
    mcat: 'MCAT prep',
    psychology: 'psychology',
    algebra: 'algebra',
    geometry: 'geometry',
    statistics: 'statistics',
    math: 'math',
    general: 'this topic',
  }
  return names[subject] || 'this topic'
}

// ---------------------------------------------------------------------------
// Question generation
// ---------------------------------------------------------------------------

/** Get a short label for a concept (used in question stems) */
function shortLabel(concept: Concept): string {
  // If label and detail are different and label is short, use the label  
  if (concept.label !== concept.detail && concept.label.length < 50) {
    return concept.label
  }
  // If the full text is short enough, use it
  if (concept.detail.length <= 40) {
    return concept.detail
  }
  // Truncate the detail to first meaningful portion
  const short = concept.detail.substring(0, 40).replace(/\s+\S*$/, '') + '…'
  return short
}

/** Build 4 options from concepts, with a known correct index */
function buildOptions(
  correctConcept: Concept,
  allConcepts: Concept[],
  rng: () => number,
  useDetails = true
): { options: string[]; correctIndex: number } {
  const correctText = useDetails ? correctConcept.detail : correctConcept.label
  
  // Get distractor concepts (different from correct)
  const distractors = allConcepts
    .filter(c => c.detail !== correctConcept.detail && c.label !== correctConcept.label)
    .map(c => useDetails ? c.detail : c.label)

  // Pick up to 3 distractors
  const shuffledDistractors = shuffle(distractors, rng).slice(0, 3)
  
  // If we don't have enough distractors, add generic ones
  while (shuffledDistractors.length < 3) {
    const fillers = [
      'This concept applies to a different topic',
      'This describes a related but different principle',
      'This is a common misconception about the topic',
    ]
    shuffledDistractors.push(fillers[shuffledDistractors.length])
  }

  // Combine and shuffle
  const allOptions = [correctText, ...shuffledDistractors]
  const shuffled = shuffle(allOptions, rng)
  const correctIndex = shuffled.indexOf(correctText)

  return { options: shuffled, correctIndex }
}

interface GeneratedQuiz {
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

function generateQuiz1(
  concepts: Concept[],
  topicName: string,
  subject: string,
  rng: () => number,
): GeneratedQuiz {
  const questions: GeneratedQuiz['questions'] = []

  if (concepts.length === 0) return { questions }

  // Question 1: Ask about concept 0
  const c0 = concepts[0]
  const { options: opts1, correctIndex: ci1 } = buildOptions(c0, concepts, rng)
  
  const q1Stems = [
    `Which of the following correctly describes ${shortLabel(c0)}?`,
    `What does "${shortLabel(c0)}" refer to in ${getSubjectName(subject)}?`,
    `Which statement accurately explains ${shortLabel(c0)}?`,
  ]
  const q1Stem = q1Stems[Math.floor(rng() * q1Stems.length)]
  
  questions.push({
    question: q1Stem,
    options: opts1,
    correctAnswer: ci1,
    explanation: `Correct — ${c0.label !== c0.detail ? c0.label + ': ' : ''}${c0.detail.replace(/\.$/, '')}. The other options describe different concepts from this topic.`,
  })

  // Question 2: Ask about concept 2 (or 1 if only 2 concepts)
  if (concepts.length >= 2) {
    const cIdx = concepts.length >= 3 ? 2 : 1
    const c2 = concepts[cIdx]
    const { options: opts2, correctIndex: ci2 } = buildOptions(c2, concepts, rng)
    
    const q2Stems = [
      `Which of the following is true about ${shortLabel(c2)}?`,
      `Select the statement that correctly describes ${shortLabel(c2)}:`,
      `In the context of ${topicName}, which explains ${shortLabel(c2)}?`,
    ]
    const q2Stem = q2Stems[Math.floor(rng() * q2Stems.length)]
    
    questions.push({
      question: q2Stem,
      options: opts2,
      correctAnswer: ci2,
      explanation: `Correct — ${c2.label !== c2.detail ? c2.label + ': ' : ''}${c2.detail.replace(/\.$/, '')}. Be careful to distinguish between the different concepts in this topic.`,
    })
  }

  return { questions }
}

function generateQuiz2(
  concepts: Concept[],
  topicName: string,
  subject: string,
  rng: () => number,
): GeneratedQuiz {
  if (concepts.length < 2) return { questions: [] }

  // Ask about concept 1 (or 3 if available)
  const cIdx = concepts.length >= 4 ? 3 : 1
  const c = concepts[cIdx]
  const { options, correctIndex } = buildOptions(c, concepts, rng)

  const stems = [
    `Which statement about ${shortLabel(c)} is correct?`,
    `Regarding ${topicName}, which correctly describes ${shortLabel(c)}?`,
    `Which of these accurately represents ${shortLabel(c)}?`,
  ]
  const stem = stems[Math.floor(rng() * stems.length)]

  return {
    questions: [{
      question: stem,
      options,
      correctAnswer: correctIndex,
      explanation: `Correct — ${c.label !== c.detail ? c.label + ': ' : ''}${c.detail.replace(/\.$/, '')}. Each option describes a real concept from this topic, so pay attention to the specific details.`,
    }]
  }
}

interface GeneratedDropdown {
  dropdowns: { label: string; options: string[] }[]
  correctAnswers: string[]
  hint1: string
  hint2: string
  hint3?: string
  explanation: string
}

function generateDropdown(
  concepts: Concept[],
  topicName: string,
  subject: string,
  rng: () => number,
): GeneratedDropdown {
  // For the matching exercise, prefer concepts where label ≠ detail
  // (so the student actually has to match a label to a description)
  const richConcepts = concepts.filter(c => c.label !== c.detail)
  const conceptsToUse = richConcepts.length >= 2 ? richConcepts : concepts
  
  const numDropdowns = Math.min(conceptsToUse.length, 3)
  const selectedConcepts = conceptsToUse.slice(0, numDropdowns)
  
  // All details as potential options
  const allDetails = concepts.map(c => c.detail)
  // Remove duplicates
  const uniqueDetails = [...new Set(allDetails)]
  
  const dropdowns: { label: string; options: string[] }[] = []
  const correctAnswers: string[] = []

  for (let i = 0; i < numDropdowns; i++) {
    const concept = selectedConcepts[i]
    const correctDetail = concept.detail

    // Build options: correct + other details (shuffled)
    const otherDetails = uniqueDetails.filter(d => d !== correctDetail)
    const distractorDetails = shuffle(otherDetails, rng).slice(0, 3)
    
    // If not enough distractors, add placeholders
    while (distractorDetails.length < Math.min(3, uniqueDetails.length - 1)) {
      distractorDetails.push('This describes a different concept')
    }
    
    const options = shuffle([correctDetail, ...distractorDetails], rng)
    
    // Use the label (short name) as the dropdown prompt
    const label = concept.label !== concept.detail 
      ? concept.label 
      : shortLabel(concept)
    
    dropdowns.push({ label, options })
    correctAnswers.push(correctDetail)
  }

  const hints = [
    `Think about what each concept specifically describes in ${topicName}.`,
    `Look for key terms that distinguish each concept from the others.`,
    `Remember the specific details — each concept has unique characteristics.`,
  ]

  return {
    dropdowns,
    correctAnswers,
    hint1: hints[0],
    hint2: hints[1],
    hint3: hints[2],
    explanation: `Each concept in ${topicName} describes a specific idea. ${selectedConcepts.map(c => c.label !== c.detail ? `${c.label}: ${c.detail.replace(/\.$/, '')}` : c.detail.replace(/\.$/, '')).join('. ')}.`,
  }
}

// ---------------------------------------------------------------------------
// Escape helpers for template literals
// ---------------------------------------------------------------------------
function escapeForTemplateLiteral(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')
}

function escapeForSingleQuotedString(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

// ---------------------------------------------------------------------------
// File rewriting
// ---------------------------------------------------------------------------

function extractSection(fileContent: string, sectionIdSuffix: string): { start: number; end: number; content: string } | null {
  // Find the section by looking for the id pattern (allowing trailing chars like -p1)
  const idPattern = new RegExp(`id:\\s*'[^']*${sectionIdSuffix}[^']*'`)
  const match = fileContent.match(idPattern)
  if (!match || match.index === undefined) return null

  return extractSectionFromIndex(fileContent, match.index)
}

function extractSectionFromIndex(fileContent: string, fromIndex: number): { start: number; end: number; content: string } | null {
  // Find the opening { before this index
  let startIdx = fromIndex
  for (let i = fromIndex; i >= 0; i--) {
    if (fileContent[i] === '{') {
      startIdx = i
      break
    }
  }

  // Now scan forward to find the matching closing }
  let endIdx = startIdx
  let braceCount = 0
  let inString = false
  let stringChar = ''
  let inTemplateLiteral = false

  for (let i = startIdx; i < fileContent.length; i++) {
    const ch = fileContent[i]
    const prev = i > 0 ? fileContent[i - 1] : ''

    if (inTemplateLiteral) {
      if (ch === '`' && prev !== '\\') {
        inTemplateLiteral = false
      }
      continue
    }

    if (inString) {
      if (ch === stringChar && prev !== '\\') {
        inString = false
      }
      continue
    }

    if (ch === '`') {
      inTemplateLiteral = true
      continue
    }
    if (ch === "'" || ch === '"') {
      inString = true
      stringChar = ch
      continue
    }

    if (ch === '{') braceCount++
    if (ch === '}') {
      braceCount--
      if (braceCount === 0) {
        endIdx = i
        break
      }
    }
  }

  return {
    start: startIdx,
    end: endIdx,
    content: fileContent.substring(startIdx, endIdx + 1),
  }
}

function extractContentFromSection(sectionText: string): string {
  // Extract content between backticks in a section
  const match = sectionText.match(/content:\s*`([\s\S]*?)`/)
  return match ? match[1].trim() : ''
}

function buildQuizSection(
  sectionId: string,
  quiz: GeneratedQuiz,
): string {
  if (quiz.questions.length === 0) return ''
  
  const questionsStr = quiz.questions.map(q => {
    const optsStr = q.options.map(o => `              '${escapeForSingleQuotedString(o)}'`).join(',\n')
    return `          {
            question: '${escapeForSingleQuotedString(q.question)}',
            options: [
${optsStr}
            ],
            correctAnswer: ${q.correctAnswer},
            explanation: '${escapeForSingleQuotedString(q.explanation)}'
          }`
  }).join(',\n')

  return `{
      id: '${sectionId}',
      type: 'multiple-choice' as const,
      content: \`
**Check Your Understanding** 🎯
      \`,
      exercise: {
        questions: [
${questionsStr}
        ]
      }
    }`
}

function buildDropdownSection(
  sectionId: string,
  dropdown: GeneratedDropdown,
): string {
  const dropdownsStr = dropdown.dropdowns.map(dd => {
    const optsStr = dd.options.map(o => `'${escapeForSingleQuotedString(o)}'`).join(', ')
    return `          {
            label: '${escapeForSingleQuotedString(dd.label)}',
            options: [${optsStr}]
          }`
  }).join(',\n')

  const correctStr = dropdown.correctAnswers.map(a => `'${escapeForSingleQuotedString(a)}'`).join(', ')

  let hintsStr = `
        hint1: '${escapeForSingleQuotedString(dropdown.hint1)}',
        hint2: '${escapeForSingleQuotedString(dropdown.hint2)}',`
  if (dropdown.hint3) {
    hintsStr += `
        hint3: '${escapeForSingleQuotedString(dropdown.hint3)}',`
  }

  return `{
      id: '${sectionId}',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concepts** 🔍
      \`,
      exercise: {
        dropdowns: [
${dropdownsStr}
        ],
        correctAnswers: [${correctStr}],${hintsStr}
        explanation: '${escapeForSingleQuotedString(dropdown.explanation)}'
      }
    }`
}

// ---------------------------------------------------------------------------
// Main processing
// ---------------------------------------------------------------------------

function processFile(filePath: string, dryRun: boolean): { success: boolean; changed: boolean; error?: string } {
  const fileName = path.basename(filePath)
  
  try {
    let content = fs.readFileSync(filePath, 'utf-8')
    
    // Check if this file has bad patterns
    const hasBadPatterns = BAD_MARKERS.some(marker => content.includes(marker))
    if (!hasBadPatterns) {
      return { success: true, changed: false }
    }

    // Extract the section IDs pattern
    const idMatch = content.match(/id:\s*'([^']+?)-intro/)
    if (!idMatch) {
      // Try alternate pattern: look for first section with type 'text'
      const altMatch = content.match(/id:\s*'([^']+?)-(?:intro|text)/)
      if (!altMatch) {
        return { success: false, changed: false, error: 'Could not find intro section ID' }
      }
    }

    // Find section variants for quiz1, quiz2, dropdown
    const quiz1Section = extractSection(content, '-quiz1')
    const quiz2Section = extractSection(content, '-quiz2')
    const dropdownSection = extractSection(content, '-dropdown')

    if (!quiz1Section && !quiz2Section && !dropdownSection) {
      return { success: true, changed: false }
    }

    // Extract intro content — try -intro first, then the first text section
    let introSection = extractSection(content, '-intro')
    if (!introSection) {
      // Find the first 'text' section in the file
      const textMatch = content.match(/\{\s*id:\s*'[^']+',\s*type:\s*'text'\s*as\s*const/)
      if (textMatch && textMatch.index !== undefined) {
        // Re-extract from this position
        introSection = extractSectionFromIndex(content, textMatch.index)
      }
    }
    if (!introSection) {
      return { success: false, changed: false, error: 'Could not find intro section' }
    }
    const introContent = extractContentFromSection(introSection.content)

    // Extract detail content
    const detailSection = extractSection(content, '-detail')
    const detailContent = detailSection ? extractContentFromSection(detailSection.content) : ''

    // Extract concepts
    const concepts = extractConcepts(introContent, detailContent)
    if (concepts.length < 2) {
      return { success: false, changed: false, error: `Only ${concepts.length} concepts found` }
    }

    // Detect subject and topic
    const subject = detectSubject(fileName)
    // Clean topic name: remove emoji, extra #, and markdown formatting
    const topicMatch = introContent.match(/^#\s*(?:#+\s*)?(?:[\p{Emoji}\p{Extended_Pictographic}∫∑∏Δ]\s*)?(.+)$/mu)
    let topicName = topicMatch 
      ? topicMatch[1].trim().replace(/^\*\*/, '').replace(/\*\*$/, '')
      : fileName.replace(/-part\d+\.ts$/, '').replace(/-/g, ' ')
    // Remove any remaining # from the topic name
    topicName = topicName.replace(/^#+\s*/, '').trim()

    // Create deterministic RNG from file name
    const rng = createRng(hashStr(fileName))

    // Generate new quiz and dropdown content
    let changed = false

    if (quiz1Section) {
      // Check if quiz1 actually has bad patterns
      const quiz1HasBad = BAD_MARKERS.some(m => quiz1Section.content.includes(m))
      if (quiz1HasBad) {
        const quiz1 = generateQuiz1(concepts, topicName, subject, rng)
        const quiz1Id = quiz1Section.content.match(/id:\s*'([^']+)'/)?.[1] || `${idPrefix}-quiz1`
        const newQuiz1 = buildQuizSection(quiz1Id, quiz1)
        content = content.substring(0, quiz1Section.start) + newQuiz1 + content.substring(quiz1Section.end + 1)
        changed = true
      }
    }

    // Re-extract positions since content may have changed
    if (quiz2Section) {
      const updatedQuiz2 = extractSection(content, '-quiz2')
      if (updatedQuiz2) {
        const quiz2HasBad = BAD_MARKERS.some(m => updatedQuiz2.content.includes(m))
        if (quiz2HasBad) {
          const quiz2 = generateQuiz2(concepts, topicName, subject, rng)
          const quiz2Id = updatedQuiz2.content.match(/id:\s*'([^']+)'/)?.[1] || `${idPrefix}-quiz2`
          const newQuiz2 = buildQuizSection(quiz2Id, quiz2)
          content = content.substring(0, updatedQuiz2.start) + newQuiz2 + content.substring(updatedQuiz2.end + 1)
          changed = true
        }
      }
    }

    if (dropdownSection) {
      const updatedDropdown = extractSection(content, '-dropdown')
      if (updatedDropdown) {
        const dropdownHasBad = BAD_MARKERS.some(m => updatedDropdown.content.includes(m))
        if (dropdownHasBad) {
          const dropdown = generateDropdown(concepts, topicName, subject, rng)
          const dropdownId = updatedDropdown.content.match(/id:\s*'([^']+)'/)?.[1] || `${idPrefix}-dropdown`
          const newDropdown = buildDropdownSection(dropdownId, dropdown)
          content = content.substring(0, updatedDropdown.start) + newDropdown + content.substring(updatedDropdown.end + 1)
          changed = true
        }
      }
    }

    if (changed && !dryRun) {
      fs.writeFileSync(filePath, content, 'utf-8')
    }

    return { success: true, changed }
  } catch (err: any) {
    return { success: false, changed: false, error: err.message }
  }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const fileIdx = args.indexOf('--file')
  const singleFile = fileIdx >= 0 ? args[fileIdx + 1] : null

  let files: string[]

  if (singleFile) {
    const fullPath = path.isAbsolute(singleFile) ? singleFile : path.join(LESSONS_DIR, singleFile)
    files = [fullPath]
  } else {
    files = fs.readdirSync(LESSONS_DIR)
      .filter(f => f.endsWith('.ts') && f.includes('-part'))
      .map(f => path.join(LESSONS_DIR, f))
  }

  console.log(`\n🔧 Quiz Rewriter — Processing ${files.length} files${dryRun ? ' (DRY RUN)' : ''}\n`)

  let changed = 0
  let skipped = 0
  let errors = 0

  for (const file of files) {
    const result = processFile(file, dryRun)
    const name = path.basename(file)
    
    if (result.changed) {
      changed++
      console.log(`  ✅ ${name}`)
    } else if (result.success) {
      skipped++
    } else {
      errors++
      console.log(`  ❌ ${name}: ${result.error}`)
    }
  }

  console.log(`\n📊 Results:`)
  console.log(`   Changed: ${changed}`)
  console.log(`   Skipped (good already): ${skipped}`)
  console.log(`   Errors: ${errors}`)
  console.log(`   Total: ${files.length}\n`)
}

main()
