/**
 * Pre-Algebra — Flashcard seed
 * ~35 cards across key topics: integers, fractions, decimals, percents,
 * ratios/proportions, expressions, equations, geometry basics, data/graphs.
 *
 * Run:  npx ts-node prisma/add-flashcards-prealgebra-concepts.ts
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicSlugs = [
  'operations-with-integers',
  'operations-with-fractions',
  'decimals-and-percents',
  'percents-applications-prealg',
  'ratios-proportions-prealg',
  'variables-algebraic-expressions-prealg',
  'solving-equations-prealg',
  'exponents-order-operations-prealg',
  'solving-graphing-inequalities-prealg',
  'coordinate-plane-graphing-prealg',
  'intro-statistics-prealg',
  'order-of-operations-pemdas',
]

interface Card { front: string; back: string; hint?: string }

const cardsByTopic: Record<string, Card[]> = {
  'operations-with-integers': [
    { front: 'What is the result of (−3) × (−5)?', back: '15. Negative × negative = positive.', hint: 'Two negatives make a positive' },
    { front: 'What is the absolute value of −7?', back: '|−7| = 7. Absolute value is the distance from zero.', hint: 'Distance from zero, always positive' },
    { front: 'What is (−8) ÷ 2?', back: '−4. Negative ÷ positive = negative.', hint: 'Different signs → negative' },
  ],
  'operations-with-fractions': [
    { front: 'How do you add fractions with different denominators?', back: 'Find the LCD, convert each fraction, then add the numerators. Example: 1/3 + 1/4 = 4/12 + 3/12 = 7/12.', hint: 'Find common denominator first' },
    { front: 'How do you multiply fractions?', back: 'Multiply numerators × numerators and denominators × denominators: (a/b) × (c/d) = ac/bd. Simplify if possible.', hint: 'Straight across' },
    { front: 'How do you divide fractions?', back: 'Multiply by the reciprocal: (a/b) ÷ (c/d) = (a/b) × (d/c).', hint: 'Keep, change, flip' },
  ],
  'decimals-and-percents': [
    { front: 'How do you convert a fraction to a decimal?', back: 'Divide the numerator by the denominator. Example: 3/8 = 0.375.', hint: 'Numerator ÷ denominator' },
    { front: 'How do you multiply decimals?', back: 'Multiply as whole numbers, then count total decimal places in both factors and place the decimal point accordingly.', hint: 'Count decimal places' },
    { front: 'Convert 0.75 to a fraction.', back: '0.75 = 75/100 = 3/4.', hint: 'Place value then simplify' },
  ],
  'percents-applications-prealg': [
    { front: 'How do you convert a percent to a decimal?', back: 'Divide by 100 (move decimal point 2 places left). Example: 45% = 0.45.', hint: 'Divide by 100' },
    { front: 'What is the percent of a number? (e.g., 20% of 60)', back: 'Convert percent to decimal and multiply: 0.20 × 60 = 12.', hint: '"of" means multiply' },
    { front: 'How do you find percent change?', back: '% change = ((new − original) / original) × 100. Positive = increase, negative = decrease.', hint: 'Change over original' },
  ],
  'ratios-proportions-prealg': [
    { front: 'What is a proportion?', back: 'An equation that states two ratios are equal: a/b = c/d.', hint: 'Two equal ratios' },
    { front: 'How do you solve a proportion?', back: 'Cross-multiply: a/b = c/d → ad = bc. Then solve for the unknown.', hint: 'Cross multiply' },
    { front: 'What is a unit rate?', back: 'A rate with a denominator of 1. Example: $3.60 for 4 apples → $0.90 per apple.', hint: 'Per one unit' },
  ],
  'variables-algebraic-expressions-prealg': [
    { front: 'What is a variable?', back: 'A letter that represents an unknown value. Example: in 3x + 5, x is the variable.', hint: 'A letter standing for a number' },
    { front: 'What are like terms?', back: 'Terms with the same variable raised to the same power. Example: 3x and 5x are like terms, but 3x and 3x² are not.', hint: 'Same variable, same exponent' },
    { front: 'What does it mean to evaluate an expression?', back: 'Substitute given values for variables and simplify. Example: evaluate 2x + 3 when x = 4 → 2(4) + 3 = 11.', hint: 'Plug in and compute' },
  ],
  'solving-equations-prealg': [
    { front: 'How do you solve x + 7 = 12?', back: 'Subtract 7 from both sides: x = 12 − 7 = 5. Use the inverse operation.', hint: 'Undo addition with subtraction' },
    { front: 'How do you solve 3x = 18?', back: 'Divide both sides by 3: x = 18/3 = 6. Use the inverse operation.', hint: 'Undo multiplication with division' },
  ],
  'exponents-order-operations-prealg': [
    { front: 'How do you solve 2x + 5 = 13?', back: 'Step 1: Subtract 5 → 2x = 8. Step 2: Divide by 2 → x = 4. Undo operations in reverse order.', hint: 'Undo addition first, then multiplication' },
    { front: 'How do you solve (x/3) − 4 = 2?', back: 'Step 1: Add 4 → x/3 = 6. Step 2: Multiply by 3 → x = 18.', hint: 'Undo subtraction first, then division' },
  ],
  'solving-graphing-inequalities-prealg': [
    { front: 'What does the symbol ≤ mean?', back: 'Less than or equal to. Example: x ≤ 5 means x can be 5 or any number less than 5.', hint: 'Less than, including equal' },
    { front: 'What happens when you multiply or divide an inequality by a negative number?', back: 'You must FLIP the inequality sign. Example: −2x > 6 → x < −3.', hint: 'Flip the sign!' },
  ],
  'coordinate-plane-graphing-prealg': [
    { front: 'What is the area of a triangle?', back: 'A = ½ × base × height.', hint: 'Half of base times height' },
    { front: 'What is the area of a circle?', back: 'A = πr², where r is the radius.', hint: 'Pi r squared' },
    { front: 'What is the circumference of a circle?', back: 'C = 2πr = πd, where r = radius and d = diameter.', hint: '2 pi r' },
  ],
  'intro-statistics-prealg': [
    { front: 'What is the mean of a data set?', back: 'The average: sum of all values divided by the number of values.', hint: 'Add them all up and divide' },
    { front: 'What is the median?', back: 'The middle value when data is arranged in order. If even number of values, average the two middle ones.', hint: 'Middle value when sorted' },
    { front: 'What is the mode?', back: 'The value that appears most frequently. A data set can have no mode, one mode, or multiple modes.', hint: 'Most frequent value' },
  ],
  'order-of-operations-pemdas': [
    { front: 'What is the order of operations?', back: 'PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', hint: 'Please Excuse My Dear Aunt Sally' },
    { front: 'What is 2⁴?', back: '2⁴ = 2 × 2 × 2 × 2 = 16. The base (2) is multiplied by itself 4 times.', hint: 'Repeated multiplication' },
    { front: 'What is any number raised to the zero power?', back: 'Any nonzero number raised to the 0 power equals 1. Example: 5⁰ = 1.', hint: 'Always equals 1' },
  ],
}

async function main() {
  console.log('🔧 Seeding Pre-Algebra flashcards …')
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
