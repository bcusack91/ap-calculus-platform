/**
 * AP Precalculus — Flashcard seed
 * ~45 cards across key topics: polynomial/rational functions, exponentials/logs,
 * trigonometry, inverse trig, polar coordinates, parametric equations, sequences.
 *
 * Run:  npx ts-node prisma/add-flashcards-ap-precalculus-formulas.ts
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicSlugs = [
  'polynomial-functions-end-behavior-precalc',
  'rational-functions-asymptotes-precalc',
  'exponential-functions-modeling-precalc',
  'logarithmic-functions-equations-precalc',
  'unit-circle-radian-measure',
  'transformations-functions-precalc',
  'trigonometric-identities',
  'the-unit-circle',
  'arc-length-and-sector-area',
  'polar-coordinates-precalc',
  'parametric-equations-precalc',
  'degrees-and-radians',
]

interface Card { front: string; back: string; hint?: string }

const cardsByTopic: Record<string, Card[]> = {
  'polynomial-functions-end-behavior-precalc': [
    { front: 'What is the Remainder Theorem?', back: 'If f(x) is divided by (x − c), the remainder is f(c).', hint: 'Evaluate the function at c' },
    { front: 'How many turning points can a degree-n polynomial have?', back: 'At most n − 1 turning points.', hint: 'One less than the degree' },
    { front: 'Describe the end behavior of f(x) = −2x⁴ + 3x.', back: 'Even degree, negative leading coefficient: f(x) → −∞ as x → ±∞. Both ends go down.', hint: 'Even degree + negative → both ends down' },
    { front: 'What does the multiplicity of a zero tell you?', back: 'Odd multiplicity: graph crosses the x-axis. Even multiplicity: graph touches/bounces off the x-axis.', hint: 'Cross vs bounce' },
  ],
  'rational-functions-asymptotes-precalc': [
    { front: 'How do you find vertical asymptotes of a rational function?', back: 'Set the denominator equal to 0 (after canceling common factors). Zeros of the denominator are vertical asymptotes.', hint: 'Denominator = 0' },
    { front: 'How do you find horizontal asymptotes?', back: 'Compare degrees: numerator < denominator → y = 0. Equal degrees → ratio of leading coefficients. Numerator > denominator → no HA.', hint: 'Compare degrees of top and bottom' },
    { front: 'What is a hole in a rational function?', back: 'A removable discontinuity where a factor cancels from both numerator and denominator. The function is undefined at that x-value.', hint: 'Common factor cancels' },
    { front: 'When does a slant (oblique) asymptote occur?', back: 'When the degree of the numerator is exactly one more than the degree of the denominator. Find it by polynomial long division.', hint: 'Degree of top = degree of bottom + 1' },
  ],
  'exponential-functions-modeling-precalc': [
    { front: 'General form of exponential growth/decay?', back: 'f(x) = a · bˣ. Growth: b > 1. Decay: 0 < b < 1. a = initial value, b = growth/decay factor.', hint: 'Base determines if growth or decay' },
    { front: 'What is the natural exponential function?', back: 'f(x) = eˣ, where e ≈ 2.71828. It has special properties: d/dx(eˣ) = eˣ.', hint: 'Euler\'s number' },
    { front: 'How do you solve 2ˣ = 32?', back: '32 = 2⁵, so x = 5. Rewrite both sides with the same base.', hint: 'Same base → equal exponents' },
    { front: 'What is continuous growth/decay?', back: 'A(t) = A₀eʳᵗ. r > 0: growth. r < 0: decay. A₀ = initial amount.', hint: 'Uses e' },
  ],
  'logarithmic-functions-equations-precalc': [
    { front: 'What does log_b(x) = y mean?', back: 'bʸ = x. "log base b of x equals y" means b raised to y gives x.', hint: 'Rewrite as exponential' },
    { front: 'State the Product Rule for logarithms.', back: 'log_b(MN) = log_b(M) + log_b(N). Log of a product = sum of logs.', hint: 'Multiplication → addition' },
    { front: 'State the Quotient Rule for logarithms.', back: 'log_b(M/N) = log_b(M) − log_b(N). Log of a quotient = difference of logs.', hint: 'Division → subtraction' },
    { front: 'State the Power Rule for logarithms.', back: 'log_b(Mⁿ) = n · log_b(M). Exponent comes out as a multiplier.', hint: 'Exponent → coefficient' },
  ],
  'unit-circle-radian-measure': [
    { front: 'What are the coordinates at 30° (π/6) on the unit circle?', back: '(√3/2, 1/2). cos 30° = √3/2, sin 30° = 1/2.', hint: 'Larger x-coordinate' },
    { front: 'What are the coordinates at 45° (π/4) on the unit circle?', back: '(√2/2, √2/2). cos 45° = sin 45° = √2/2.', hint: 'x and y are equal' },
    { front: 'What are the coordinates at 60° (π/3) on the unit circle?', back: '(1/2, √3/2). cos 60° = 1/2, sin 60° = √3/2.', hint: 'Larger y-coordinate' },
    { front: 'In which quadrants is sin θ positive?', back: 'Quadrants I and II (top half). Mnemonic: "All Students Take Calculus" (All, Sin, Tan, Cos).', hint: 'Top half of the circle' },
  ],
  'transformations-functions-precalc': [
    { front: 'What is the period of y = sin(Bx)?', back: 'Period = 2π/|B|. Larger B means shorter period (more oscillations).', hint: 'Divide 2π by B' },
    { front: 'What is the amplitude of y = A sin(x)?', back: 'Amplitude = |A|. The maximum displacement from the midline.', hint: 'Absolute value of A' },
    { front: 'How does y = sin(x − C) compare to y = sin(x)?', back: 'Phase shift of C units to the right. Positive C shifts right, negative C shifts left.', hint: 'Opposite sign of what\'s inside' },
    { front: 'What is the period of y = tan(x)?', back: 'Period = π (not 2π). Tangent repeats every π radians.', hint: 'Half the period of sine/cosine' },
  ],
  'trigonometric-identities': [
    { front: 'State the Pythagorean identity.', back: 'sin²θ + cos²θ = 1. Dividing by cos²θ: 1 + tan²θ = sec²θ. Dividing by sin²θ: 1 + cot²θ = csc²θ.', hint: 'Three versions from one identity' },
    { front: 'State the double angle formulas for sin(2θ) and cos(2θ).', back: 'sin(2θ) = 2sinθcosθ. cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ.', hint: 'Three forms for cos(2θ)' },
    { front: 'What is the sum formula for sin(A + B)?', back: 'sin(A + B) = sinAcosB + cosAsinB.', hint: 'Sin-cos plus cos-sin' },
    { front: 'What is the sum formula for cos(A + B)?', back: 'cos(A + B) = cosAcosB − sinAsinB.', hint: 'Cos-cos minus sin-sin' },
  ],
  'the-unit-circle': [
    { front: 'What is the domain and range of arcsin(x)?', back: 'Domain: [−1, 1]. Range: [−π/2, π/2]. Restricted to make sine one-to-one.', hint: 'Input between −1 and 1' },
    { front: 'What is the domain and range of arccos(x)?', back: 'Domain: [−1, 1]. Range: [0, π]. Restricted to make cosine one-to-one.', hint: 'Output between 0 and π' },
    { front: 'What is the domain and range of arctan(x)?', back: 'Domain: (−∞, ∞). Range: (−π/2, π/2). Horizontal asymptotes at y = ±π/2.', hint: 'All real inputs, restricted output' },
    { front: 'Evaluate arcsin(1/2).', back: 'π/6 (30°). Because sin(π/6) = 1/2 and π/6 is in [−π/2, π/2].', hint: 'Which angle in Q1 has sine = 1/2?' },
  ],
  'arc-length-and-sector-area': [
    { front: 'State the Law of Sines.', back: 'a/sin A = b/sin B = c/sin C. Used when you know AAS, ASA, or SSA.', hint: 'Side over sine of opposite angle' },
    { front: 'State the Law of Cosines.', back: 'c² = a² + b² − 2ab cos C. Used when you know SAS or SSS.', hint: 'Generalized Pythagorean theorem' },
    { front: 'What is the ambiguous case (SSA)?', back: 'When given two sides and a non-included angle, there may be 0, 1, or 2 possible triangles. Check if h = a sin B.', hint: 'SSA can give 0, 1, or 2 triangles' },
  ],
  'polar-coordinates-precalc': [
    { front: 'How do you convert from polar (r, θ) to rectangular (x, y)?', back: 'x = r cos θ, y = r sin θ.', hint: 'Use cosine for x, sine for y' },
    { front: 'How do you convert from rectangular to polar?', back: 'r = √(x² + y²), θ = arctan(y/x) (adjust quadrant).', hint: 'Pythagorean theorem for r' },
    { front: 'What is the graph of r = a (constant)?', back: 'A circle centered at the origin with radius a.', hint: 'All points at distance a from origin' },
    { front: 'What is a rose curve?', back: 'r = a cos(nθ) or r = a sin(nθ). If n is odd: n petals. If n is even: 2n petals.', hint: 'Petals depend on whether n is odd or even' },
  ],
  'parametric-equations-precalc': [
    { front: 'What are parametric equations?', back: 'x = f(t), y = g(t), where t is the parameter. They trace out a curve as t varies.', hint: 'Both x and y depend on t' },
    { front: 'How do you eliminate the parameter?', back: 'Solve one equation for t, then substitute into the other to get y as a function of x (or vice versa).', hint: 'Solve for t, then substitute' },
    { front: 'Parametric equations for a circle of radius r?', back: 'x = r cos t, y = r sin t, 0 ≤ t ≤ 2π.', hint: 'Trigonometric parametrization' },
  ],
  'degrees-and-radians': [
    { front: 'What is the nth term of an arithmetic sequence?', back: 'aₙ = a₁ + (n − 1)d, where d = common difference.', hint: 'Add the same number each time' },
    { front: 'What is the nth term of a geometric sequence?', back: 'aₙ = a₁ · rⁿ⁻¹, where r = common ratio.', hint: 'Multiply by the same number each time' },
    { front: 'When does an infinite geometric series converge?', back: 'When |r| < 1. Sum = a₁/(1 − r).', hint: '|ratio| must be less than 1' },
  ],
}

async function main() {
  console.log('🔧 Seeding AP Precalculus flashcards …')
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
