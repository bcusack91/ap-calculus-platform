/**
 * Entrance Quiz — Logarithmic Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Logarithmic Functions — Definition & Inverse Relation
  {
    id: 'lgp-ent-1a',
    question: 'What is the value of $\\log_8 4$?',
    options: ['$\\tfrac{2}{3}$', '$\\tfrac{3}{2}$', '$\\tfrac{1}{2}$', '$2$'],
    correctIndex: 0,
    explanation: '$\\log_8 4 = y$ means $8^y = 4$, so $2^{3y} = 2^2$ and $y = \\tfrac{2}{3}$. The value $\\tfrac{3}{2}$ answers $4^y = 8$ instead.',
    partNumber: 1,
    partTitle: 'Logarithmic Functions — Definition & Inverse Relation',
  },
  {
    id: 'lgp-ent-1b',
    question: 'What is the inverse of $f(x) = 3 + \\log_2(x - 1)$?',
    options: ['$f^{-1}(x) = 2^{x + 3} - 1$', '$f^{-1}(x) = 2^{x - 3} + 1$', '$f^{-1}(x) = 3^{x - 1} + 2$', '$f^{-1}(x) = 2^{x - 1} + 3$'],
    correctIndex: 1,
    explanation: 'Swap and solve: $x - 3 = \\log_2(y - 1)$, so $y - 1 = 2^{x - 3}$ and $y = 2^{x - 3} + 1$. Each step of $f$ is undone in reverse order with the opposite operation.',
    partNumber: 1,
    partTitle: 'Logarithmic Functions — Definition & Inverse Relation',
  },
  // Part 2 — Logarithmic Functions — Core Log Properties
  {
    id: 'lgp-ent-2a',
    question: 'Which expression equals $\\log_3\\left(\\dfrac{9x^2}{\\sqrt{y}}\\right)$ for $x, y > 0$?',
    options: ['$9 + 2\\log_3 x - \\tfrac{1}{2}\\log_3 y$', '$2 + 2\\log_3 x + \\tfrac{1}{2}\\log_3 y$', '$2 + 2\\log_3 x - \\tfrac{1}{2}\\log_3 y$', '$2 \\cdot 2\\log_3 x - \\tfrac{1}{2}\\log_3 y$'],
    correctIndex: 2,
    explanation: 'Quotient, product, and power rules give $\\log_3 9 + 2\\log_3 x - \\tfrac{1}{2}\\log_3 y$, and $\\log_3 9 = 2$. The constant is the logarithm of 9, not 9 itself, and it is added, not multiplied.',
    partNumber: 2,
    partTitle: 'Logarithmic Functions — Core Log Properties',
  },
  {
    id: 'lgp-ent-2b',
    question: 'If $\\log_b 2 = m$ and $\\log_b 3 = n$, which expression equals $\\log_b 18$?',
    options: ['$m \\cdot n^2$', '$2(m + n)$', '$m + n^2$', '$m + 2n$'],
    correctIndex: 3,
    explanation: '$18 = 2 \\cdot 3^2$, so $\\log_b 18 = \\log_b 2 + 2\\log_b 3 = m + 2n$. The power rule turns the exponent into a coefficient, not a power of $n$.',
    partNumber: 2,
    partTitle: 'Logarithmic Functions — Core Log Properties',
  },
  // Part 3 — Logarithmic Functions — Transformations & Graphs
  {
    id: 'lgp-ent-3a',
    question: 'Which describes $g(x) = -\\log_2(x + 3) + 1$?',
    options: ['Domain $x > 3$; decreasing', 'Domain $x > -3$; decreasing', 'Domain $x > -3$; increasing', 'Domain $x > 3$; increasing'],
    correctIndex: 1,
    explanation: 'The argument $x + 3$ must be positive, so $x > -3$ (vertical asymptote $x = -3$). The negative coefficient reflects the increasing graph of $\\log_2 x$ across the $x$-axis, so $g$ decreases.',
    partNumber: 3,
    partTitle: 'Logarithmic Functions — Transformations & Graphs',
  },
  {
    id: 'lgp-ent-3b',
    question: 'Where does the graph of $g(x) = 2\\log_3(x - 1) - 4$ cross the $x$-axis?',
    options: ['$(82, 0)$', '$(9, 0)$', '$(10, 0)$', '$(7, 0)$'],
    correctIndex: 2,
    explanation: 'Set $g(x) = 0$: $\\log_3(x - 1) = 2$, so $x - 1 = 9$ and $x = 10$. The value $82$ forgets to divide by 2 before converting.',
    partNumber: 3,
    partTitle: 'Logarithmic Functions — Transformations & Graphs',
  },
  // Part 4 — Logarithmic Functions — Solving Log Equations
  {
    id: 'lgp-ent-4a',
    question: 'Solve $\\log_3 x + \\log_3(x - 8) = 2$.',
    options: ['$x = -1$ and $x = 9$', '$x = -1$', '$x = 8.5$', '$x = 9$'],
    correctIndex: 3,
    explanation: 'Condense: $\\log_3[x(x - 8)] = 2$, so $x^2 - 8x - 9 = 0$ and $x = 9$ or $x = -1$. The candidate $-1$ makes both arguments negative, so only $x = 9$ works; $8.5$ adds the arguments instead of multiplying them.',
    partNumber: 4,
    partTitle: 'Logarithmic Functions — Solving Log Equations',
  },
  {
    id: 'lgp-ent-4b',
    question: 'Solve $\\log_3(x^2 - 7) = 2$.',
    options: ['$x = -4$ and $x = 4$', '$x = 4$ only', '$x = 16$ only', '$x = 3$ only'],
    correctIndex: 0,
    explanation: 'Convert: $x^2 - 7 = 9$, so $x^2 = 16$ and $x = \\pm 4$. Both make the argument $x^2 - 7 = 9$ positive, so neither is extraneous.',
    partNumber: 4,
    partTitle: 'Logarithmic Functions — Solving Log Equations',
  },
  // Part 5 — Logarithmic Functions — Change of Base & Calculator Fluency
  {
    id: 'lgp-ent-5a',
    question: 'What is the value of $\\log_4 9 \\cdot \\log_3 16$?',
    options: ['$\\tfrac{16}{9}$', '$\\tfrac{4}{3}$', '$4$', '$12$'],
    correctIndex: 2,
    explanation: 'Change of base: $\\tfrac{\\ln 9}{\\ln 4} \\cdot \\tfrac{\\ln 16}{\\ln 3} = \\tfrac{2\\ln 3}{2\\ln 2} \\cdot \\tfrac{4\\ln 2}{\\ln 3} = 4$. The logarithms do not divide like the numbers $16$ and $9$.',
    partNumber: 5,
    partTitle: 'Logarithmic Functions — Change of Base & Calculator Fluency',
  },
  {
    id: 'lgp-ent-5b',
    question: 'If $\\log_2 7 = k$, which expression equals $\\log_{49} 2$?',
    options: ['$2k$', '$\\dfrac{k}{2}$', '$\\dfrac{2}{k}$', '$\\dfrac{1}{2k}$'],
    correctIndex: 3,
    explanation: '$\\log_{49} 2 = \\tfrac{1}{\\log_2 49}$, and $\\log_2 49 = 2\\log_2 7 = 2k$, so the value is $\\tfrac{1}{2k}$. The expression $2k$ is $\\log_2 49$ itself, the reciprocal of the answer.',
    partNumber: 5,
    partTitle: 'Logarithmic Functions — Change of Base & Calculator Fluency',
  },
  // Part 6 — Logarithmic Functions — Modeling with Logs
  {
    id: 'lgp-ent-6a',
    question: 'Solution A has pH $3.2$ and solution B has pH $5.2$, where $\\text{pH} = -\\log[H^+]$. How do their hydrogen-ion concentrations compare?',
    options: ['A has $100$ times the concentration of B', 'A has $2$ times the concentration of B', 'B has $100$ times the concentration of A', 'A has $20$ times the concentration of B'],
    correctIndex: 0,
    explanation: 'A pH difference of 2 means $[H^+]$ differs by a factor of $10^2 = 100$, and the lower pH has the higher concentration, so A has 100 times as much. The factor 2 treats the log scale as linear.',
    partNumber: 6,
    partTitle: 'Logarithmic Functions — Modeling with Logs',
  },
  {
    id: 'lgp-ent-6b',
    question: 'The decibel level of a sound is $L = 10\\log\\left(\\tfrac{I}{I_0}\\right)$. If a sound\\\'s intensity $I$ is multiplied by $1000$, how does $L$ change?',
    options: ['It increases by $3$ dB', 'It increases by $30$ dB', 'It increases by $300$ dB', 'It is multiplied by $1000$'],
    correctIndex: 1,
    explanation: 'The new level is $10\\log\\left(\\tfrac{1000I}{I_0}\\right) = 10\\left(3 + \\log\\tfrac{I}{I_0}\\right) = L + 30$. The value $3$ dB forgets the factor of 10 in front of the logarithm.',
    partNumber: 6,
    partTitle: 'Logarithmic Functions — Modeling with Logs',
  },
  // Part 7 — Logarithmic Functions — Full Synthesis
  {
    id: 'lgp-ent-7a',
    question: 'A quantity grows as $Q(t) = 80e^{0.05t}$. At what time $t$ does $Q$ reach $240$?',
    options: ['$\\dfrac{\\ln 3}{20}$', '$\\dfrac{\\ln 160}{0.05}$', '$\\dfrac{\\ln 240}{0.05}$', '$20\\ln 3$'],
    correctIndex: 3,
    explanation: 'Divide by 80: $e^{0.05t} = 3$, so $0.05t = \\ln 3$ and $t = \\tfrac{\\ln 3}{0.05} = 20\\ln 3$. Using $\\ln 240$ skips dividing by the initial amount.',
    partNumber: 7,
    partTitle: 'Logarithmic Functions — Full Synthesis',
  },
  {
    id: 'lgp-ent-7b',
    question: 'Which single logarithm equals $2\\log x - \\log(x + 1) - 1$ for $x > 0$? (All logs are base 10.)',
    options: ['$\\log \\dfrac{x^2}{10(x + 1)}$', '$\\log \\dfrac{x^2 - 10}{x + 1}$', '$\\log \\dfrac{2x}{10(x + 1)}$', '$\\log \\dfrac{x^2}{10x + 1}$'],
    correctIndex: 0,
    explanation: 'Write $1 = \\log 10$; then $\\log x^2 - \\log(x + 1) - \\log 10 = \\log \\tfrac{x^2}{10(x + 1)}$. Subtracting a logarithm divides the argument, it does not subtract inside it.',
    partNumber: 7,
    partTitle: 'Logarithmic Functions — Full Synthesis',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Logarithmic Functions — Definition & Inverse Relation' },
    { partNumber: 2, partTitle: 'Logarithmic Functions — Core Log Properties' },
    { partNumber: 3, partTitle: 'Logarithmic Functions — Transformations & Graphs' },
    { partNumber: 4, partTitle: 'Logarithmic Functions — Solving Log Equations' },
    { partNumber: 5, partTitle: 'Logarithmic Functions — Change of Base & Calculator Fluency' },
    { partNumber: 6, partTitle: 'Logarithmic Functions — Modeling with Logs' },
    { partNumber: 7, partTitle: 'Logarithmic Functions — Full Synthesis' },
  ]
}
