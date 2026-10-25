/**
 * Entrance Quiz — Polynomials, Factoring and Quadratics (ASVAB Mathematics Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Numbers and scenarios differ from the lesson checks, the exit pool and the competitive bank.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Polynomials on the ASVAB: Terms and Like Terms'
const P2 = 'Multiplying Polynomials and FOIL'
const P3 = 'Factoring Out the GCF and Factoring Trinomials'
const P4 = 'Special Patterns and Algebraic Fractions'
const P5 = 'Solving Quadratics by Factoring'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Polynomials on the ASVAB: Terms and Like Terms
  {
    id: 'mk-algebra-expressions-ent-1a',
    question: 'Simplify $8n + 3 - 5n + 4$.',
    options: ['$13n + 7$', '$3n + 7$', '$3n - 1$', '$10n$'],
    correctIndex: 1,
    explanation: '$8n - 5n = 3n$ and $3 + 4 = 7$, so $3n + 7$. The $n$ terms and the constants are not like terms, so they never merge into one term like $10n$.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mk-algebra-expressions-ent-1b',
    question: 'What is the degree of $4x^2 - 9x^6 + 3x$?',
    options: ['$2$', '$9$', '$6$', '$3$'],
    correctIndex: 2,
    explanation: 'The degree is the highest exponent in the polynomial: $x^6$ gives degree $6$. It is not the first exponent written, and not a coefficient.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Multiplying Polynomials and FOIL
  {
    id: 'mk-algebra-expressions-ent-2a',
    question: 'Simplify $(6m^2)(3m^4)$.',
    options: ['$18m^8$', '$9m^6$', '$18m^6$', '$2m^2$'],
    correctIndex: 2,
    explanation: 'Multiply the numbers ($6 \\cdot 3 = 18$) and add the exponents ($2 + 4 = 6$): $18m^6$. Multiplying the exponents gives $m^8$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mk-algebra-expressions-ent-2b',
    question: 'Multiply $(x + 3)(x - 8)$.',
    options: ['$x^2 - 5x - 24$', '$x^2 + 5x - 24$', '$x^2 - 11x - 24$', '$x^2 - 24$'],
    correctIndex: 0,
    explanation: 'FOIL: $x^2 - 8x + 3x - 24 = x^2 - 5x - 24$. The middle term is $-8x + 3x = -5x$; it does not vanish because the numbers are not opposites.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Factoring Out the GCF and Factoring Trinomials
  {
    id: 'mk-algebra-expressions-ent-3a',
    question: 'Factor $x^2 + 10x + 21$.',
    options: ['$(x + 1)(x + 21)$', '$(x + 3)(x + 7)$', '$(x - 3)(x - 7)$', '$(x + 4)(x + 6)$'],
    correctIndex: 1,
    explanation: '$3 \\cdot 7 = 21$ and $3 + 7 = 10$. The pair $1, 21$ adds to $22$; two negatives would give $-10x$; $4 \\cdot 6 = 24$.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mk-algebra-expressions-ent-3b',
    question: 'Factor $4x^3 + 10x^2$ completely.',
    options: ['$2x(2x^2 + 5x)$', '$4x^2(x + 10)$', '$x^2(4x + 10)$', '$2x^2(2x + 5)$'],
    correctIndex: 3,
    explanation: 'The GCF is $2x^2$: $\\frac{4x^3}{2x^2} = 2x$ and $\\frac{10x^2}{2x^2} = 5$. Taking out only $2x$ or only $x^2$ leaves a common factor inside, and $4x^2$ does not divide $10x^2$ evenly into $10$.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Special Patterns and Algebraic Fractions
  {
    id: 'mk-algebra-expressions-ent-4a',
    question: 'Factor $16x^2 - 1$.',
    options: ['$(4x + 1)(4x - 1)$', '$(4x - 1)^2$', '$(16x + 1)(x - 1)$', '$(8x + 1)(2x - 1)$'],
    correctIndex: 0,
    explanation: 'Difference of squares: $(4x)^2 - 1^2 = (4x + 1)(4x - 1)$. $(4x - 1)^2$ has a middle term of $-8x$, and the other two products have middle terms too.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mk-algebra-expressions-ent-4b',
    question: 'Simplify $\\frac{x^2 - 36}{x - 6}$ (for $x \\neq 6$).',
    options: ['$x - 6$', '$x + 6$', '$x^2 + 6$', '$x - 30$'],
    correctIndex: 1,
    explanation: '$x^2 - 36 = (x + 6)(x - 6)$; cancel the factor $(x - 6)$ to get $x + 6$.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — Solving Quadratics by Factoring
  {
    id: 'mk-algebra-expressions-ent-5a',
    question: 'Solve $x^2 + x - 20 = 0$.',
    options: ['$x = 5$ or $x = -4$', '$x = 10$ or $x = -2$', '$x = -5$ or $x = 4$', '$x = -5$ or $x = -4$'],
    correctIndex: 2,
    explanation: '$(x + 5)(x - 4) = 0$, so $x = -5$ or $x = 4$. Check $x = 4$: $16 + 4 - 20 = 0$ ✓. The pair $5, -4$ keeps the signs from the factors instead of flipping them.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mk-algebra-expressions-ent-5b',
    question: 'Solve $5x^2 = 45$.',
    options: ['$x = 3$ only', '$x = \\pm 9$', '$x = \\pm 3$', '$x = \\pm 5$'],
    correctIndex: 2,
    explanation: 'Divide by $5$: $x^2 = 9$, so $x = 3$ or $x = -3$. Both square to $9$, so both count.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'mk-algebra-expressions-ent-6a',
    question: 'Which expression is equal to $(x - 2)^2$?',
    options: ['$x^2 + 4$', '$x^2 - 4x + 4$', '$x^2 - 4$', '$x^2 - 2x + 4$'],
    correctIndex: 1,
    explanation: '$(x - 2)(x - 2) = x^2 - 2x - 2x + 4 = x^2 - 4x + 4$. Squaring each term separately gives the trap $x^2 + 4$; the middle term is $2 \\cdot x \\cdot (-2) = -4x$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mk-algebra-expressions-ent-6b',
    question: 'Solve $x^2 = 12x$.',
    options: ['$x = 12$ only', '$x = 0$ or $x = 12$', '$x = \\pm 12$', '$x = 0$ or $x = -12$'],
    correctIndex: 1,
    explanation: '$x^2 - 12x = 0$ factors as $x(x - 12) = 0$, so $x = 0$ or $x = 12$. Dividing both sides by $x$ loses $x = 0$.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'mk-algebra-expressions-ent-7a',
    question: 'Simplify $(7x^2 + 2x - 5) - (3x^2 - 4x + 2)$.',
    options: ['$4x^2 - 2x - 3$', '$4x^2 + 6x - 3$', '$4x^2 - 2x - 7$', '$4x^2 + 6x - 7$'],
    correctIndex: 3,
    explanation: 'Flip every sign in the second polynomial: $7x^2 + 2x - 5 - 3x^2 + 4x - 2 = 4x^2 + 6x - 7$. A $-2x$ or a $-3$ means a sign was left unflipped.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'mk-algebra-expressions-ent-7b',
    question: 'Factor $3x^2 - 27$ completely.',
    options: ['$3(x^2 - 9)$', '$(3x + 9)(x - 3)$', '$3(x - 3)^2$', '$3(x + 3)(x - 3)$'],
    correctIndex: 3,
    explanation: 'GCF $3$ first: $3(x^2 - 9)$, then the difference of squares: $3(x + 3)(x - 3)$. Stopping at $3(x^2 - 9)$ is not complete, and $(3x + 9)(x - 3)$ still has a $3$ inside.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
