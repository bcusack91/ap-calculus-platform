/**
 * Entrance Quiz — Continuity & the Intermediate Value Theorem (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'civ-ent-1a', question: 'A function $f$ is continuous at $x = a$ if and only if all three of the following hold:', options: ['$f(a)$ is defined, $\\lim_{x \\to a} f(x)$ exists, and they are equal', 'Only that $\\lim_{x \\to a} f(x)$ exists', 'Only that $f(a)$ is defined', 'Only that the left- and right-hand limits exist'], correctIndex: 0, explanation: 'The classical 3-part definition: (1) $f(a)$ defined, (2) $\\lim_{x\\to a}f(x)$ exists, (3) $\\lim_{x\\to a}f(x) = f(a)$.', partNumber: 1, partTitle: 'What Does It Mean for a Function to Be Continuous?' },
  { id: 'civ-ent-1b', question: 'Which type of discontinuity occurs at $x = 1$ for $f(x) = \\frac{x^2-1}{x-1}$?', options: ['Jump discontinuity', 'Removable (hole) discontinuity', 'Infinite (asymptote) discontinuity', 'Oscillating discontinuity'], correctIndex: 1, explanation: '$\\frac{x^2-1}{x-1} = x+1$ for $x \\neq 1$, so the limit exists ($=2$) but $f(1)$ is undefined — a removable hole.', partNumber: 1, partTitle: 'What Does It Mean for a Function to Be Continuous?' },
  { id: 'civ-ent-2a', question: 'For what value of $k$ is $f(x) = \\begin{cases} x^2 + 1, & x \\le 2 \\\\ kx - 1, & x > 2 \\end{cases}$ continuous at $x = 2$?', options: ['$k = 2$', '$k = 3$', '$k = 4$', '$k = 5$'], correctIndex: 1, explanation: 'Need $\\lim_{x\\to 2^-} = \\lim_{x\\to 2^+}$: $5 = 2k - 1 \\Rightarrow k = 3$.', partNumber: 2, partTitle: 'Making Piecewise Functions Continuous' },
  { id: 'civ-ent-2b', question: 'For $f(x) = \\begin{cases} ax + b, & x < 1 \\\\ 4, & x = 1 \\\\ x^2 + 3, & x > 1 \\end{cases}$ to be continuous at $x = 1$, we need:', options: ['$a + b = 4$ only', '$a + b = 4$ and $4 = 4$', 'Both one-sided limits equal $4$, so $a + b = 4$', 'No values make it continuous'], correctIndex: 2, explanation: 'Right-hand limit is $1+3 = 4$ ✓. Left-hand limit must also equal $4$: $a(1)+b = a+b = 4$.', partNumber: 2, partTitle: 'Making Piecewise Functions Continuous' },
  { id: 'civ-ent-3a', question: 'The Intermediate Value Theorem requires the function to be:', options: ['Differentiable on $[a,b]$', 'Continuous on the closed interval $[a,b]$', 'Increasing on $[a,b]$', 'Polynomial on $[a,b]$'], correctIndex: 1, explanation: 'IVT requires only continuity on a closed interval $[a,b]$.', partNumber: 3, partTitle: 'The Intermediate Value Theorem' },
  { id: 'civ-ent-3b', question: 'If $f$ is continuous on $[1,4]$, $f(1) = -2$, and $f(4) = 7$, the IVT guarantees that:', options: ['$f$ has a maximum at $x = 4$', 'There exists $c \\in (1,4)$ with $f(c) = 0$', '$f$ is increasing', '$f\'(c) = 3$ for some $c$'], correctIndex: 1, explanation: 'Since $0$ lies between $f(1) = -2$ and $f(4) = 7$, the IVT guarantees some $c$ with $f(c) = 0$.', partNumber: 3, partTitle: 'The Intermediate Value Theorem' },
  { id: 'civ-ent-4a', question: 'Which statement is TRUE?', options: ['Continuity implies differentiability', 'Differentiability implies continuity', 'Neither implies the other', 'They are equivalent for all functions'], correctIndex: 1, explanation: 'Differentiability $\\Rightarrow$ continuity; the converse fails (e.g., $|x|$ at $0$).', partNumber: 4, partTitle: 'Continuity & Differentiability' },
  { id: 'civ-ent-4b', question: 'At which point is $f(x) = |x - 3|$ continuous but NOT differentiable?', options: ['$x = 0$', '$x = 3$', '$x = -3$', 'Nowhere'], correctIndex: 1, explanation: 'Absolute value functions are continuous everywhere but have a corner (no derivative) at the vertex $x = 3$.', partNumber: 4, partTitle: 'Continuity & Differentiability' },
  { id: 'civ-ent-5a', question: 'The Extreme Value Theorem says that if $f$ is continuous on $[a,b]$, then $f$:', options: ['Has at most one critical point', 'Attains both an absolute maximum and absolute minimum on $[a,b]$', 'Is differentiable on $(a,b)$', 'Has a horizontal asymptote'], correctIndex: 1, explanation: 'EVT: a continuous function on a closed interval must attain both its absolute max and min.', partNumber: 5, partTitle: 'The Extreme Value Theorem' },
  { id: 'civ-ent-5b', question: 'Which interval does NOT guarantee EVT applies to a continuous $f$?', options: ['$[0, 5]$', '$[-2, 2]$', '$(0, 5)$', '$[1, 100]$'], correctIndex: 2, explanation: 'EVT requires a closed interval. $(0,5)$ is open and may fail to attain extrema.', partNumber: 5, partTitle: 'The Extreme Value Theorem' },
  { id: 'civ-ent-6a', question: 'Suppose $f$ is continuous, $f(0) = 5$, $f(2) = -1$, $f(4) = 3$. The minimum number of zeros of $f$ on $[0,4]$ guaranteed by IVT is:', options: ['$0$', '$1$', '$2$', '$3$'], correctIndex: 2, explanation: 'IVT gives a zero in $(0,2)$ (sign change $5 \\to -1$) and in $(2,4)$ (sign change $-1 \\to 3$): at least 2.', partNumber: 6, partTitle: 'AP-Level Practice' },
  { id: 'civ-ent-6b', question: 'For $f(x) = \\frac{x+1}{x^2 - 4}$, the function is discontinuous at:', options: ['$x = -1$ only', '$x = \\pm 2$', '$x = -1$ and $\\pm 2$', 'Nowhere'], correctIndex: 1, explanation: 'Vertical asymptotes (infinite discontinuities) where the denominator vanishes: $x = 2$ and $x = -2$.', partNumber: 6, partTitle: 'AP-Level Practice' },
  { id: 'civ-ent-7a', question: 'On the AP exam, to invoke IVT in a justification, you must explicitly state:', options: ['That $f$ is differentiable', 'That $f$ is continuous on the closed interval', 'That $f$ is increasing', 'That $f$ has a derivative of zero somewhere'], correctIndex: 1, explanation: 'IVT justifications require an explicit citation of continuity on the closed interval.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'civ-ent-7b', question: 'A function $f$ has a removable discontinuity at $x = 2$. Which redefinition makes $f$ continuous there?', options: ['Set $f(2) = 0$', 'Set $f(2) = \\lim_{x \\to 2} f(x)$', 'Set $f(2)$ undefined', 'Multiply $f$ by $(x-2)$'], correctIndex: 1, explanation: 'Defining $f(2)$ to equal the (existing) limit removes the hole and restores continuity.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Does It Mean for a Function to Be Continuous?' },
    { partNumber: 2, partTitle: 'Making Piecewise Functions Continuous' },
    { partNumber: 3, partTitle: 'The Intermediate Value Theorem' },
    { partNumber: 4, partTitle: 'Continuity & Differentiability' },
    { partNumber: 5, partTitle: 'The Extreme Value Theorem' },
    { partNumber: 6, partTitle: 'AP-Level Practice' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
