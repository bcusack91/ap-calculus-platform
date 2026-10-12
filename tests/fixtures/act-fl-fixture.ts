/**
 * A synthetic full-length ACT form with the exact Enhanced ACT blueprint
 * (English 5×10, Math 45, Reading 4×9, Science 6 passages / 40), for tests and
 * local browser checks only. NOT real content — never register it in src/.
 *
 * Keys cycle 0..3 so a "pick index 0 everywhere" sitting gets ~25% right.
 */
import type { ActFLForm, ActFLPassage, ActFLQuestion, ActFLSkill } from '@/data/act-practice/full-length/types'

const opt4 = (a: string, b: string, c: string, d: string) => [a, b, c, d] as [string, string, string, string]
const why = (k: number): [string, string, string, string] =>
  [0, 1, 2, 3].map((i) => (i === k ? 'This choice is correct.' : 'This choice does not fit.')) as [string, string, string, string]

function q(id: string, question: string, options: [string, string, string, string], key: number, skill: ActFLSkill, extra: Partial<ActFLQuestion> = {}): ActFLQuestion {
  return {
    id,
    question,
    options,
    correctIndex: (key % 4) as 0 | 1 | 2 | 3,
    explanation: `Choice ${'ABCD'[key % 4]} is correct for ${id}.`,
    optionExplanations: why(key % 4),
    skill,
    difficulty: (['easy', 'medium', 'hard'] as const)[key % 3],
    ...extra,
  }
}

const ENGLISH_SKILLS: ActFLSkill[] = ['CSE', 'POW', 'KLA']
const MATH_SKILLS: ActFLSkill[] = ['PHM-N', 'PHM-A', 'PHM-F', 'PHM-G', 'PHM-S', 'IES']
const READING_SKILLS: ActFLSkill[] = ['KID', 'CS', 'IKI']
const SCIENCE_SKILLS: ActFLSkill[] = ['IOD', 'SIN', 'EMI']

export function fixtureEnglish(n: number): ActFLPassage[] {
  return Array.from({ length: 5 }, (_, p) => {
    const base = p * 10
    const m = (k: number) => base + k
    const text = [
      `The lighthouse keeper's log for passage ${p + 1} begins with {{${m(1)}:a short entry, written in pencil}}. Each morning she {{${m(2)}:climbed}} the ninety steps to the lamp room.`,
      `{{${m(3)}:However,}} the weather that spring was unusually calm, and the *supply boat* arrived {{${m(4)}:early}} every week. She wrote that {{${m(5)}:it's}} engine could be heard from the point.`,
      `[1] The boat brought oil. [2] It also brought letters. [3] She read them at night. {{${m(6)}}}`,
      `By June the log {{${m(7)}:had grown thick}}, and she started {{${m(8)}:a second volume}}. {{${m(9)}:Its pages}} survive in the county museum today. {{${m(10)}}}`,
    ].join('\n\n')
    const questions = Array.from({ length: 10 }, (_, k) => {
      const num = m(k + 1)
      const isPosition = k === 5 || k === 9
      return q(
        `act-fl${n}-e-0${p + 1}-q${num}`,
        isPosition ? `Where should sentence 3 be placed (question ${num})?` : 'Which choice is the best version of the underlined portion?',
        isPosition ? opt4('Where it is now', 'Before sentence 1', 'After sentence 1', 'After sentence 2') : opt4('NO CHANGE', `variant ${num}b`, `variant ${num}c`, `variant ${num}d`),
        num,
        ENGLISH_SKILLS[num % 3],
        { marker: num },
      )
    })
    return { id: `act-fl${n}-e-0${p + 1}`, title: `Keeper's Log ${p + 1}`, kind: ['narrative', 'informative', 'argumentative'][p % 3], text, questions }
  })
}

export function fixtureMath(n: number): ActFLQuestion[] {
  return Array.from({ length: 45 }, (_, i) => {
    const k = i + 1
    const question = k % 5 === 0
      ? `If $x^2 = ${k * k}$ and $x > 0$, what is the value of $x$?`
      : k % 7 === 0
        ? `The table shows values of $f$.\n\n| $x$ | $f(x)$ |\n|---|---|\n| 1 | ${k} |\n| 2 | ${k + 3} |\n\nWhat is $f(2) - f(1)$?`
        : `What is the value of ${k} + ${k}?`
    const right = k % 5 === 0 ? `${k}` : k % 7 === 0 ? '3' : `${2 * k}`
    const options = [right, `${2 * k + 1}`, `${2 * k + 2}`, `${2 * k + 3}`]
    const key = k % 4
    ;[options[0], options[key]] = [options[key], options[0]]
    return q(`act-fl${n}-m-${String(k).padStart(2, '0')}`, question, options as [string, string, string, string], key, MATH_SKILLS[k % 6])
  })
}

export function fixtureReading(n: number): ActFLPassage[] {
  const kinds = ['literary-narrative', 'social-science', 'humanities', 'natural-science']
  return kinds.map((kind, p) => ({
    id: `act-fl${n}-r-0${p + 1}`,
    title: `Reading passage ${p + 1}`,
    kind,
    text: Array.from({ length: 6 }, (_, para) => `Paragraph ${para + 1} of reading passage ${p + 1}. The town council debated the bridge for a decade; residents wrote letters, engineers drew plans, and the river kept rising.`).join('\n\n'),
    questions: Array.from({ length: 9 }, (_, k) =>
      q(`act-fl${n}-r-0${p + 1}-q${k + 1}`, `Reading ${p + 1}, question ${k + 1}: the passage most strongly suggests that the council:`, opt4(`waited (${p}.${k}a)`, `rushed (${p}.${k}b)`, `refused (${p}.${k}c)`, `forgot (${p}.${k}d)`), p + k, READING_SKILLS[k % 3]),
    ),
  }))
}

export function fixtureScience(n: number): ActFLPassage[] {
  const sizes = [7, 7, 7, 7, 6, 6]
  const kinds = ['data-representation', 'research-summary', 'conflicting-viewpoints']
  return sizes.map((size, p) => ({
    id: `act-fl${n}-s-0${p + 1}`,
    title: `Science passage ${p + 1}`,
    kind: kinds[p % 3],
    text: `Students measured how fast seedlings grew at different temperatures.\n\n**Table 1**\n\n| Temperature (°C) | Growth (mm/day) |\n|---|---|\n| 10 | 1.${p} |\n| 20 | 2.${p} |\n| 30 | 3.${p} |\n\nIn Experiment 2 the light level was doubled.`,
    questions: Array.from({ length: size }, (_, k) =>
      q(`act-fl${n}-s-0${p + 1}-q${k + 1}`, `Science ${p + 1}, question ${k + 1}: according to Table 1, growth at 25 °C was most likely:`, opt4(`below 1 (${p}.${k})`, `between 2 and 3 (${p}.${k})`, `above 4 (${p}.${k})`, `zero (${p}.${k})`), p + k + 1, SCIENCE_SKILLS[k % 3]),
    ),
  }))
}

export function fixtureForm(n = 1): ActFLForm {
  return { form: n, english: fixtureEnglish(n), math: fixtureMath(n), reading: fixtureReading(n), science: fixtureScience(n) }
}

/** Loader map entries for a fixture form (as the generated manifest would list). */
export function fixtureLoaders(n = 1) {
  return {
    english: async () => ({ [`ACT_FL${n}_ENGLISH`]: fixtureEnglish(n) }),
    math: async () => ({ [`ACT_FL${n}_MATH`]: fixtureMath(n) }),
    reading: async () => ({ [`ACT_FL${n}_READING`]: fixtureReading(n) }),
    science: async () => ({ [`ACT_FL${n}_SCIENCE`]: fixtureScience(n) }),
  }
}
