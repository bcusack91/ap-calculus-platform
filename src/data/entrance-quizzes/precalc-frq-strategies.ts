/**
 * Entrance Quiz — Free-Response Strategies: the Four Question Types (AP Precalculus, 2027 FRQ format) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Free-Response Section and How Points Are Earned
  {
    id: 'pfs-ent-1a',
    question: 'Which statement describes the free-response section of the AP Precalculus exam?',
    options: ['Four questions in 70 minutes: two with a graphing calculator, then two without', 'Six questions in 90 minutes, all of them with a graphing calculator', 'Four questions in 60 minutes, all of them without any calculator', 'Three questions in 70 minutes: one with a graphing calculator, two without'],
    correctIndex: 0,
    explanation: 'Section II has four questions in two separately timed 35-minute parts: Part A (Questions 1 and 2) requires a graphing calculator and Part B (Questions 3 and 4) does not allow one.',
    partNumber: 1,
    partTitle: 'The Free-Response Section and How Points Are Earned',
  },
  {
    id: 'pfs-ent-1b',
    question: 'In a calculator part, a computed value is $7.2496\\ldots$ and a student writes $7.25$. What happens to the point for that value?',
    options: ['It earns the point, since rounding to the nearest hundredth is accepted on the exam', 'It is lost: three decimal places are required, $7.250$ or $7.249$', 'It earns the point, since $7.25$ and $7.250$ are the same number', 'It earns the point only if the setup is shown next to it'],
    correctIndex: 1,
    explanation: 'Decimal answers in the calculator parts must be accurate to three decimal places, rounded or truncated. Two decimal places fall short regardless of the setup.',
    partNumber: 1,
    partTitle: 'The Free-Response Section and How Points Are Earned',
  },

  // Part 2 — Question 1: Function Concepts
  {
    id: 'pfs-ent-2a',
    question: 'Selected values of $f$ are $f(1) = 4$, $f(2) = 9$, $f(3) = 16$, and $g(x) = 2x - 1$. What is $g(f(2))$?',
    options: ['$16$', '$9$', '$17$', '$7$'],
    correctIndex: 2,
    explanation: 'Inside first: $f(2) = 9$. Then $g(9) = 2(9) - 1 = 17$. The value $16$ is $f(g(2)) = f(3)$, which composes in the other order.',
    partNumber: 2,
    partTitle: 'Question 1: Function Concepts',
  },
  {
    id: 'pfs-ent-2b',
    question: 'A free-response part asks: "Explain why $f$ has an inverse function." Which response earns the point?',
    options: ['$f$ is defined for every input listed in the table of values', '$f$ is strictly increasing, so each output comes from exactly one input', '$f(0)$ is the smallest value of $f$ listed in the table', '$f$ is a polynomial function, and every polynomial function is invertible'],
    correctIndex: 1,
    explanation: 'An inverse function exists exactly when $f$ is one-to-one, and strictly increasing (or strictly decreasing) guarantees it. Being defined, having a minimum, or being a polynomial does not.',
    partNumber: 2,
    partTitle: 'Question 1: Function Concepts',
  },

  // Part 3 — Question 2: Modeling a Non-Periodic Context
  {
    id: 'pfs-ent-3a',
    question: 'Over equal input steps, a data set\'s first differences are $2.1, 2.0, 2.1, 1.9$. Which model type is appropriate, and why?',
    options: ['Quadratic, because the outputs are increasing', 'Exponential, because every ratio of consecutive outputs is greater than $1$', 'Logarithmic, because the growth is slow', 'Linear, because the first differences are roughly constant'],
    correctIndex: 3,
    explanation: 'Roughly constant first differences mean a roughly constant rate of change, the defining feature of a linear model. The other justifications do not distinguish model types.',
    partNumber: 3,
    partTitle: 'Question 2: Modeling a Non-Periodic Context',
  },
  {
    id: 'pfs-ent-3b',
    question: 'A calculator reports an exponential regression with $a = 2.0384$ and $b = 1.07116$. Which is the correctly stated model?',
    options: ['$y = 2.038(1.071)^x$', '$y = 2.04(1.07)^x$', '$y = 2.038x + 1.071$', '$y = 2.039(1.072)^x$'],
    correctIndex: 0,
    explanation: 'State each coefficient to three decimal places, rounded: $2.038$ and $1.071$. Two decimals is not enough, the linear form is the wrong model, and $2.039$ and $1.072$ round in the wrong direction.',
    partNumber: 3,
    partTitle: 'Question 2: Modeling a Non-Periodic Context',
  },

  // Part 4 — Question 3: Modeling a Periodic Context
  {
    id: 'pfs-ent-4a',
    question: 'A buoy\'s height above its rest level is $3$ meters at $t = 0$ seconds, $-1$ meter at $t = 4$ seconds, and the motion repeats every $8$ seconds. Which function models the height $h(t)$?',
    options: ['$h(t) = 2\\cos\\left(\\dfrac{\\pi}{8}t\\right) + 1$', '$h(t) = 4\\cos\\left(\\dfrac{\\pi}{4}t\\right) + 1$', '$h(t) = 2\\cos\\left(\\dfrac{\\pi}{4}t\\right) + 1$', '$h(t) = 2\\cos\\left(\\dfrac{\\pi}{4}t\\right) - 1$'],
    correctIndex: 2,
    explanation: 'Midline $\\frac{3 + (-1)}{2} = 1$, amplitude $\\frac{3 - (-1)}{2} = 2$, period $8$ so $b = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$, and a maximum at $t = 0$ fits an unshifted cosine. $\\frac{\\pi}{8}$ gives period $16$, $4$ is the full range, and $-1$ is the minimum, not the midline.',
    partNumber: 4,
    partTitle: 'Question 3: Modeling a Periodic Context',
  },
  {
    id: 'pfs-ent-4b',
    question: 'On the part of a sinusoid\'s graph between a midline crossing and the next maximum, the function is:',
    options: ['increasing, and its rate of change is increasing', 'decreasing, and its rate of change is decreasing', 'decreasing, and its rate of change is increasing', 'increasing, and its rate of change is decreasing'],
    correctIndex: 3,
    explanation: 'Rising from the midline to a maximum, the function increases but flattens as it approaches the maximum: the graph is concave down, so the rate of change is decreasing.',
    partNumber: 4,
    partTitle: 'Question 3: Modeling a Periodic Context',
  },

  // Part 5 — Question 4: Symbolic Manipulations
  {
    id: 'pfs-ent-5a',
    question: 'What is the solution set of $\\log_3(x - 1) + \\log_3(x + 1) = 1$?',
    options: ['$x = 2$ or $x = -2$', '$x = 2$ only', '$x = -2$ only', '$x = 4$ only'],
    correctIndex: 1,
    explanation: 'Combining gives $\\log_3(x^2 - 1) = 1$, so $x^2 - 1 = 3$ and $x = \\pm 2$. The original logarithms need $x - 1 > 0$, so $x = -2$ is extraneous and only $x = 2$ remains.',
    partNumber: 5,
    partTitle: 'Question 4: Symbolic Manipulations',
  },
  {
    id: 'pfs-ent-5b',
    question: 'Which expression writes $2^{x + 2}$ in the form $a \\cdot b^x$?',
    options: ['$2 \\cdot 4^x$', '$2^x + 4$', '$4 \\cdot 2^x$', '$2 \\cdot 2^x$'],
    correctIndex: 2,
    explanation: '$2^{x + 2} = 2^x \\cdot 2^2 = 4 \\cdot 2^x$. Adding $4$ or changing the base to $4$ gives different functions.',
    partNumber: 5,
    partTitle: 'Question 4: Symbolic Manipulations',
  },

  // Part 6 — Common Point Losses and the 35 + 35 Minute Budget
  {
    id: 'pfs-ent-6a',
    question: 'Asked to find and interpret an average rate of change, a student writes only "the rate of change is $12.5$." What is missing for the interpretation point?',
    options: ['The regression equation that produced the data values', 'The units of the rate and the interval it applies to', 'The second differences of the outputs in the table', 'A sketch of the graph showing the secant line'],
    correctIndex: 1,
    explanation: 'An interpretation names the quantity, its units (output per input) and the interval, for example "$12.5$ liters per minute between minute $2$ and minute $6$." Equations, differences and sketches are not interpretations.',
    partNumber: 6,
    partTitle: 'Common Point Losses and the 35 + 35 Minute Budget',
  },
  {
    id: 'pfs-ent-6b',
    question: 'How is time allotted in the free-response section?',
    options: ['Parts A and B are each 35 minutes, timed separately', 'All four questions share one 70-minute block that can be split in any way the student chooses', 'Each question is timed separately at 17 minutes 30 seconds', 'Part A is 45 minutes and Part B is 25 minutes'],
    correctIndex: 0,
    explanation: 'The calculator part and the no-calculator part are separate 35-minute sittings, so time cannot be shifted from one part to the other. Within a part, the two questions share the 35 minutes.',
    partNumber: 6,
    partTitle: 'Common Point Losses and the 35 + 35 Minute Budget',
  },

  // Part 7 — Mixed Mini-FRQ Set and Mastery Check
  {
    id: 'pfs-ent-7a',
    question: 'An exponential function $f$ has $f(0) = 5$, $f(1) = 15$ and $f(2) = 45$. What is $f(4)$?',
    options: ['$135$', '$405$', '$125$', '$60$'],
    correctIndex: 1,
    explanation: 'Each unit step triples the output, so $f(x) = 5 \\cdot 3^x$ and $f(4) = 5 \\cdot 81 = 405$. $135$ is $f(3)$.',
    partNumber: 7,
    partTitle: 'Mixed Mini-FRQ Set and Mastery Check',
  },
  {
    id: 'pfs-ent-7b',
    question: 'What are all solutions of $\\tan\\theta = -1$ on $0 \\le \\theta < 2\\pi$?',
    options: ['$\\theta = \\dfrac{\\pi}{4}$ and $\\theta = \\dfrac{5\\pi}{4}$', '$\\theta = \\dfrac{3\\pi}{4}$ only', '$\\theta = \\dfrac{3\\pi}{4}$ and $\\theta = \\dfrac{5\\pi}{4}$', '$\\theta = \\dfrac{3\\pi}{4}$ and $\\theta = \\dfrac{7\\pi}{4}$'],
    correctIndex: 3,
    explanation: 'Tangent is $-1$ where sine and cosine have equal size and opposite signs: Quadrant II ($\\frac{3\\pi}{4}$) and Quadrant IV ($\\frac{7\\pi}{4}$). The angles $\\frac{\\pi}{4}$ and $\\frac{5\\pi}{4}$ give $\\tan\\theta = 1$.',
    partNumber: 7,
    partTitle: 'Mixed Mini-FRQ Set and Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Free-Response Section and How Points Are Earned' },
    { partNumber: 2, partTitle: 'Question 1: Function Concepts' },
    { partNumber: 3, partTitle: 'Question 2: Modeling a Non-Periodic Context' },
    { partNumber: 4, partTitle: 'Question 3: Modeling a Periodic Context' },
    { partNumber: 5, partTitle: 'Question 4: Symbolic Manipulations' },
    { partNumber: 6, partTitle: 'Common Point Losses and the 35 + 35 Minute Budget' },
    { partNumber: 7, partTitle: 'Mixed Mini-FRQ Set and Mastery Check' },
  ]
}
