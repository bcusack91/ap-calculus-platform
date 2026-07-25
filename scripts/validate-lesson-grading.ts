/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import path from 'path'

// ---- Replicated grading helpers (copied verbatim from InteractiveLessonRenderer.tsx) ----
function normalizeSuperscripts(text: string): string {
  const map: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9'
  }
  return text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, ch => map[ch] || ch)
}
function isAnswerMatch(studentAnswer: string, correctAnswer: string): boolean {
  if (!studentAnswer || !correctAnswer) return false
  const sa = normalizeSuperscripts(studentAnswer).trim().toLowerCase().replace(/\s+/g, '')
  const ca = normalizeSuperscripts(correctAnswer).trim().toLowerCase().replace(/\s+/g, '')
  if (sa === ca) return true
  if (sa === '' || ca === '') return false
  const sNum = Number(sa)
  const cNum = Number(ca)
  if (!isNaN(sNum) && !isNaN(cNum)) {
    if (cNum === 0) return Math.abs(sNum) < 0.001
    const relativeDiff = Math.abs(sNum - cNum) / Math.abs(cNum)
    return relativeDiff < 0.005
  }
  return false
}

const dirs = [
  'src/data/interactive-lessons',
  'src/data/interactive-lessons/extra',
  'src/data/interactive-lessons/grades',
]
const ROOT = process.cwd()

interface Issue { file: string; section: string; kind: string; detail: string }
const issues: Issue[] = []

function walkSections(fileRel: string, data: any) {
  if (!data || !Array.isArray(data.sections)) return
  for (const section of data.sections) {
    const ex = section?.exercise
    if (!ex) continue
    const sid = section.id || '(no id)'
    const type = section.type

    // ---- DROPDOWN-SELECT ----
    if (type === 'dropdown-select' && Array.isArray(ex.dropdowns)) {
      const dropdowns = ex.dropdowns
      // Replicate component: correctAnswersList
      const correctAnswersList: string[] = ex.correctAnswers
        ? ex.correctAnswers
        : dropdowns.map((dd: any) => dd.options?.[dd.correctIndex])
      dropdowns.forEach((dd: any, i: number) => {
        const options: string[] = dd.options || []
        const correct = correctAnswersList[i]
        // 1. correct answer must be a selectable option (strict === grading, value is option string)
        if (correct === undefined || correct === null) {
          issues.push({ file: fileRel, section: sid, kind: 'DROPDOWN_MISSING_CORRECT',
            detail: `dropdown[${i}] has no correct answer (correctAnswers length=${correctAnswersList.length}, dropdowns=${dropdowns.length}, correctIndex=${dd.correctIndex})` })
          return
        }
        // strict equality grading: the correct string must EXACTLY equal one of the options
        if (!options.includes(correct)) {
          // also check a normalized near-match to characterize the bug
          const near = options.find(o => o.trim() === String(correct).trim())
          // Distinguish: options empty (different schema bug) vs options present but mismatch (true grading bug)
          const kind = options.length === 0 ? 'DROPDOWN_OPTIONS_EMPTY' : 'DROPDOWN_CORRECT_NOT_IN_OPTIONS'
          // Is there a normalized (lowercase/whitespace) match? -> means strict === fails but a "looks equal" option exists
          const normCorrect = String(correct).trim().toLowerCase().replace(/\s+/g, '')
          const normNear = options.find(o => o.trim().toLowerCase().replace(/\s+/g, '') === normCorrect)
          issues.push({ file: fileRel, section: sid, kind,
            detail: `dropdown[${i}] correctAnswer="${correct}" is NOT an exact option. options=${JSON.stringify(options)}${near ? ' [whitespace-only diff exists]' : normNear ? ' [case/space-normalized match exists]' : ''}` })
        }
        // 2. correctIndex out of bounds (Format B)
        if (ex.correctAnswers === undefined && (dd.correctIndex === undefined || dd.correctIndex < 0 || dd.correctIndex >= options.length)) {
          issues.push({ file: fileRel, section: sid, kind: 'DROPDOWN_CORRECTINDEX_OOB',
            detail: `dropdown[${i}] correctIndex=${dd.correctIndex} out of bounds for ${options.length} options` })
        }
        // 3. duplicate options where correct text appears twice -> ambiguous strict match still ok, but flag exact-dupe
        const dupes = options.filter((o, idx) => options.indexOf(o) !== idx)
        if (dupes.length) {
          issues.push({ file: fileRel, section: sid, kind: 'DROPDOWN_DUPLICATE_OPTIONS',
            detail: `dropdown[${i}] has duplicate option strings: ${JSON.stringify([...new Set(dupes)])}` })
        }
      })
      // length mismatch between correctAnswers and dropdowns
      if (ex.correctAnswers && ex.correctAnswers.length !== dropdowns.length) {
        issues.push({ file: fileRel, section: sid, kind: 'DROPDOWN_LENGTH_MISMATCH',
          detail: `correctAnswers length ${ex.correctAnswers.length} != dropdowns length ${dropdowns.length}` })
      }
    }

    // ---- INPUT-BOXES / INPUT-BOX ----
    if ((type === 'input-boxes' || type === 'input-box')) {
      const exerciseInputs = ex.inputs ?? []
      const hasInputsFormat = exerciseInputs.length > 0
      const numBoxes = hasInputsFormat ? exerciseInputs.length : (ex.boxes || 1)
      const rawCorrect: string[] = hasInputsFormat
        ? exerciseInputs.map((inp: any) => inp.correctAnswer)
        : (ex.correctAnswers || [])
      const correctAnswersList = rawCorrect.slice(0, numBoxes)
      // count mismatch: fewer correct answers than boxes -> areAllAnswersCorrect length check fails forever
      if (correctAnswersList.length !== numBoxes) {
        issues.push({ file: fileRel, section: sid, kind: 'INPUT_COUNT_MISMATCH',
          detail: `numBoxes=${numBoxes} but correctAnswersList length=${correctAnswersList.length} -> areAllAnswersCorrect() length guard makes it UNGRADEABLE (always wrong)` })
      }
      // empty / undefined correct answers -> isAnswerMatch returns false always
      correctAnswersList.forEach((c: any, i: number) => {
        if (c === undefined || c === null || String(c).trim() === '') {
          issues.push({ file: fileRel, section: sid, kind: 'INPUT_EMPTY_CORRECT',
            detail: `box[${i}] correctAnswer is empty/undefined -> can never be matched` })
        }
      })
    }

    // ---- MULTIPLE-CHOICE / QUIZ ----
    if ((type === 'multiple-choice' || type === 'quiz') && Array.isArray(ex.questions)) {
      ex.questions.forEach((q: any, i: number) => {
        const opts: string[] = q.options || []
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer >= opts.length) {
          issues.push({ file: fileRel, section: sid, kind: 'MC_CORRECTANSWER_OOB',
            detail: `question[${i}] correctAnswer=${q.correctAnswer} out of bounds for ${opts.length} options` })
        }
      })
    }
  }
}

async function run() {
  for (const dir of dirs) {
    const abs = path.join(ROOT, dir)
    if (!fs.existsSync(abs)) continue
    const files = fs.readdirSync(abs).filter(f => f.endsWith('.ts'))
    for (const f of files) {
      const fileRel = path.join(dir, f)
      const fileAbs = path.join(abs, f)
      try {
        const mod = await import(fileAbs)
        for (const key of Object.keys(mod)) {
          const val = (mod as any)[key]
          if (val && typeof val === 'object' && Array.isArray(val.sections)) {
            walkSections(fileRel, val)
          }
        }
      } catch (e: any) {
        // skip import errors (index files, etc.)
      }
    }
  }

  // Group + print
  const byKind: Record<string, Issue[]> = {}
  for (const iss of issues) (byKind[iss.kind] ||= []).push(iss)
  console.log('=== GRADING VALIDATION RESULTS ===')
  for (const kind of Object.keys(byKind).sort()) {
    console.log(`\n### ${kind} (${byKind[kind].length})`)
    for (const iss of byKind[kind].slice(0, 25)) {
      console.log(`  ${iss.file} [${iss.section}] ${iss.detail}`)
    }
    if (byKind[kind].length > 25) console.log(`  ... and ${byKind[kind].length - 25} more`)
  }
  console.log(`\nTOTAL ISSUES: ${issues.length}`)
}
run()
