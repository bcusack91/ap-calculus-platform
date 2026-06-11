import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Algebra 2 — Flashcard seed
 * ~40 cards across key topics: linear systems, quadratics, polynomials,
 * rational expressions, radicals, exponentials/logs, sequences, conic sections.
 *
 * Run:  npx ts-node prisma/add-flashcards-algebra2-concepts.ts
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicSlugs = [
  'polynomial-operations-algebra2',
  'factoring-polynomials-algebra2',
  'simplifying-rationals-algebra2',
  'complex-number-system-alg2',
  'polynomial-operations-theorems-alg2',
  'rational-functions-graphs-alg2',
  'exponential-functions-algebra2',
  'logarithms-properties-alg2',
  'series-probability-alg2',
  'intro-trigonometry-alg2',
  'rational-operations-algebra2',
]

interface Card { front: string; back: string; hint?: string }

const cardsByTopic: Record<string, Card[]> = {
  'polynomial-operations-algebra2': [
    { front: 'What is slope-intercept form?', back: 'y = mx + b, where m = slope, b = y-intercept.', hint: 'Starts with y =' },
    { front: 'How do you find the slope between two points?', back: 'm = (y₂ − y₁) / (x₂ − x₁). Rise over run.', hint: 'Change in y over change in x' },
    { front: 'When solving |ax + b| > c, what do you get?', back: 'Two inequalities: ax + b > c OR ax + b < −c. The solution is a union of two intervals.', hint: 'Split into OR' },
  ],
  'factoring-polynomials-algebra2': [
    { front: 'How many solutions can a system of two linear equations have?', back: 'One (lines intersect), none (parallel lines), or infinitely many (same line).', hint: 'Compare slopes and intercepts' },
    { front: 'What is Cramer\'s rule for a 2×2 system?', back: 'x = Dₓ/D, y = Dᵧ/D, where D is the determinant of coefficients, Dₓ replaces the x-column with constants, etc.', hint: 'Determinants of matrices' },
    { front: 'How do you solve a system by elimination?', back: 'Multiply equations to make coefficients of one variable opposites, then add equations to eliminate that variable.', hint: 'Add or subtract equations' },
  ],
  'simplifying-rationals-algebra2': [
    { front: 'State the quadratic formula.', back: 'x = (−b ± √(b² − 4ac)) / (2a) for ax² + bx + c = 0.', hint: 'Negative b plus or minus...' },
    { front: 'What does the discriminant tell you?', back: 'b² − 4ac: positive → 2 real solutions, zero → 1 real solution (repeated), negative → 2 complex solutions.', hint: 'The part under the radical' },
    { front: 'How do you find the vertex of y = ax² + bx + c?', back: 'Vertex: x = −b/(2a), then y = f(−b/(2a)). This is the maximum (a < 0) or minimum (a > 0).', hint: 'x = −b/(2a)' },
    { front: 'How do you complete the square?', back: 'ax² + bx + c → a(x + b/(2a))² + (c − b²/(4a)). Add and subtract (b/(2a))² inside.', hint: 'Half the coefficient of x, squared' },
  ],
  'complex-number-system-alg2': [
    { front: 'What is the imaginary unit i?', back: 'i = √(−1), so i² = −1.', hint: 'Square root of negative one' },
    { front: 'How do you multiply complex numbers (a+bi)(c+di)?', back: '(ac − bd) + (ad + bc)i. Use FOIL and replace i² with −1.', hint: 'FOIL then substitute i² = −1' },
    { front: 'What is the complex conjugate of a + bi?', back: 'a − bi. Multiplying a complex number by its conjugate gives a² + b² (a real number).', hint: 'Flip the sign of the imaginary part' },
  ],
  'polynomial-operations-theorems-alg2': [
    { front: 'State the Remainder Theorem.', back: 'When polynomial f(x) is divided by (x − c), the remainder equals f(c).', hint: 'Evaluate f at c' },
    { front: 'State the Factor Theorem.', back: '(x − c) is a factor of f(x) if and only if f(c) = 0.', hint: 'Zero remainder means it\'s a factor' },
    { front: 'How many roots does a degree-n polynomial have?', back: 'Exactly n roots (counting multiplicity), by the Fundamental Theorem of Algebra. Some may be complex.', hint: 'Degree = number of roots' },
    { front: 'What is end behavior of a polynomial?', back: 'Determined by the leading term axⁿ. Even degree: both ends same direction. Odd degree: opposite directions. Sign of a determines up/down.', hint: 'Leading coefficient and degree' },
  ],
  'rational-functions-graphs-alg2': [
    { front: 'How do you find vertical asymptotes?', back: 'Set the denominator = 0 (after canceling common factors). The remaining zeros of the denominator are vertical asymptotes.', hint: 'Where denominator = 0' },
    { front: 'How do you find horizontal asymptotes?', back: 'Compare degrees: if deg(numerator) < deg(denominator): y = 0. Equal degrees: y = ratio of leading coefficients. Numerator degree larger: no HA (may have oblique).', hint: 'Compare degrees of top and bottom' },
    { front: 'How do you add rational expressions?', back: 'Find a common denominator (LCD), rewrite each fraction with the LCD, then add numerators.', hint: 'Same as adding regular fractions' },
  ],
  'exponential-functions-algebra2': [
    { front: 'What is a radical function?', back: 'A function involving a root: f(x) = ⁿ√(expression). The domain is restricted so the radicand ≥ 0 for even roots.', hint: 'Involves roots' },
    { front: 'How do you rationalize the denominator of 1/√a?', back: 'Multiply by √a/√a: 1/√a = √a/a.', hint: 'Multiply by the conjugate' },
    { front: 'Simplify √(50).', back: '√(50) = √(25·2) = 5√2.', hint: 'Factor out perfect squares' },
  ],
  'intro-trigonometry-alg2': [
    { front: 'How do you solve a radical equation?', back: 'Isolate the radical, raise both sides to the appropriate power, solve, and CHECK for extraneous solutions.', hint: 'Always check solutions' },
    { front: 'Simplify √(a) · √(b).', back: '√(ab). Product rule for radicals. Only valid when a, b ≥ 0.', hint: 'Combine under one radical' },
    { front: 'Convert between radical and rational exponent form.', back: '√[n]{aᵐ} = a^(m/n). The denominator of the exponent is the index, the numerator is the power.', hint: 'Denominator = index' },
  ],
  'rational-operations-algebra2': [
    { front: 'What is the general form of exponential growth/decay?', back: 'y = a · bˣ. Growth: b > 1. Decay: 0 < b < 1. a = initial value.', hint: 'Base determines growth or decay' },
    { front: 'What is the formula for compound interest?', back: 'A = P(1 + r/n)^(nt). P = principal, r = rate, n = compoundings per year, t = years.', hint: 'Repeated multiplication' },
    { front: 'What is continuous compounding?', back: 'A = Pe^(rt). The limit as n → ∞ of compound interest.', hint: 'Uses e' },
  ],
  'logarithms-properties-alg2': [
    { front: 'What does log_b(x) = y mean?', back: 'b^y = x. A logarithm is an exponent.', hint: 'Rewrite in exponential form' },
    { front: 'State the three log rules (product, quotient, power).', back: 'log(ab) = log a + log b. log(a/b) = log a − log b. log(aⁿ) = n log a.', hint: 'Multiplication → addition' },
    { front: 'What is the change of base formula?', back: 'log_b(x) = ln(x)/ln(b) = log(x)/log(b). Convert any log to natural or common log.', hint: 'Divide logarithms of same base' },
  ],
  'series-probability-alg2': [
    { front: 'What is the nth term of an arithmetic sequence?', back: 'aₙ = a₁ + (n − 1)d, where a₁ = first term, d = common difference.', hint: 'Linear pattern' },
    { front: 'What is the sum of an arithmetic series?', back: 'Sₙ = n(a₁ + aₙ)/2 = n/2 · (2a₁ + (n−1)d).', hint: 'Average of first and last, times n' },
    { front: 'What is the nth term of a geometric sequence?', back: 'aₙ = a₁ · r^(n−1), where r = common ratio.', hint: 'Exponential pattern' },
    { front: 'When does an infinite geometric series converge?', back: 'When |r| < 1. Sum = a₁/(1 − r).', hint: 'Common ratio must be between −1 and 1' },
  ],

}

async function main() {
  console.log('🔧 Seeding Algebra 2 flashcards …')
  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } })
    if (!topic) { console.log(`  ⚠️  Topic "${slug}" not found — skipping`); continue }

    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } })

    const cards = cardsByTopic[slug]
    if (!cards?.length) continue

    await prisma.flashcard.createMany({
      data: cards.map((c) => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint ?? null,
      })),
    })
    console.log(`  ✅ ${cards.length} cards → ${slug}`)
  }
  console.log('Done.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
