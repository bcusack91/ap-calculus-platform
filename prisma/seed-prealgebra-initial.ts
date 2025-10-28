import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating initial Pre-Algebra content...')

  const preAlgebraCourse = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  })

  if (!preAlgebraCourse) {
    throw new Error('Pre-Algebra course not found')
  }

  // CATEGORY 1: Integers and Rational Numbers
  const integers = await prisma.category.upsert({
    where: { slug: 'prealgebra-integers' },
    update: {},
    create: {
      slug: 'prealgebra-integers',
      name: 'Integers and Rational Numbers',
      order: 1,
      courseId: preAlgebraCourse.id
    }
  })

  // Topic: Operations with Integers
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'operations-with-integers' },
    update: {},
    create: {
      slug: 'operations-with-integers',
      title: 'Operations with Integers',
      description: 'Adding, subtracting, multiplying, and dividing integers',
      order: 1,
      categoryId: integers.id,
      textContent: `# Operations with Integers

## What are Integers?

**Integers** are whole numbers and their opposites: $..., -3, -2, -1, 0, 1, 2, 3, ...$

**Positive integers:** $1, 2, 3, ...$
**Negative integers:** $-1, -2, -3, ...$
**Zero:** Neither positive nor negative

## Adding Integers

**Same signs:** Add the absolute values, keep the sign
- $5 + 3 = 8$
- $-5 + (-3) = -8$

**Different signs:** Subtract the absolute values, use the sign of the larger
- $5 + (-3) = 2$
- $-5 + 3 = -2$

## Subtracting Integers

**Key rule:** Subtracting is the same as adding the opposite

$$a - b = a + (-b)$$

**Examples:**
- $7 - 3 = 7 + (-3) = 4$
- $7 - (-3) = 7 + 3 = 10$
- $-7 - 3 = -7 + (-3) = -10$

## Multiplying Integers

**Sign rules:**
- **Same signs** → positive result
- **Different signs** → negative result

**Examples:**
- $5 \\times 3 = 15$ (both positive)
- $-5 \\times (-3) = 15$ (both negative)
- $5 \\times (-3) = -15$ (different signs)
- $-5 \\times 3 = -15$ (different signs)

## Dividing Integers

**Same sign rules as multiplication:**
- **Same signs** → positive result
- **Different signs** → negative result

**Examples:**
- $12 \\div 3 = 4$
- $-12 \\div (-3) = 4$
- $12 \\div (-3) = -4$
- $-12 \\div 3 = -4$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Calculate: $-8 + 5$',
        solution: `Different signs: subtract and use sign of larger absolute value.

$$|-8| = 8, \\quad |5| = 5$$

Since 8 > 5:
$$8 - 5 = 3$$

Use negative sign (from -8):
$$-8 + 5 = -3$$

**Answer:** $-3$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Calculate: $-6 - (-9)$',
        solution: `Change subtraction to adding the opposite:
$$-6 - (-9) = -6 + 9$$

Different signs: subtract and use sign of larger.
$$9 - 6 = 3$$

Use positive sign (from 9):
$$-6 + 9 = 3$$

**Answer:** $3$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Calculate: $(-4) \\times 3 \\times (-2)$',
        solution: `Work left to right:

**Step 1:** $(-4) \\times 3 = -12$ (different signs → negative)

**Step 2:** $-12 \\times (-2) = 24$ (same signs → positive)

**Answer:** $24$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What happens when you multiply two negative numbers?', back: 'You get a positive number' },
      { topicId: topic1.id, front: 'What is the rule for subtracting integers?', back: 'Subtracting is the same as adding the opposite: a - b = a + (-b)' },
      { topicId: topic1.id, front: 'Calculate: -5 + (-3)', back: '-8 (same signs: add and keep the negative)' }
    ]
  })

  console.log('✓ Created topic: Operations with Integers (3 examples, 3 flashcards)')

  // Topic: Absolute Value
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'absolute-value-prealgebra' },
    update: {},
    create: {
      slug: 'absolute-value-prealgebra',
      title: 'Absolute Value',
      description: 'Understanding and using absolute value',
      order: 2,
      categoryId: integers.id,
      textContent: `# Absolute Value

## Definition

The **absolute value** of a number is its distance from zero on the number line.

**Symbol:** $|a|$

**Key point:** Distance is always positive (or zero)!

## Examples

- $|5| = 5$ (5 is 5 units from zero)
- $|-5| = 5$ (-5 is also 5 units from zero)
- $|0| = 0$ (0 is 0 units from zero)

## Formal Definition

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

## Opposite Numbers

Numbers like 5 and -5 are **opposites** (same absolute value, different signs).

If $|a| = |b|$ and $a \\neq b$, then $a = -b$

## Absolute Value with Operations

**Evaluate inside first, then take absolute value:**
- $|3 + (-7)| = |-4| = 4$
- $|-6| + |2| = 6 + 2 = 8$
- $|5 - 8| = |-3| = 3$

## Comparing Absolute Values

To compare $|-8|$ and $|5|$:
$$|-8| = 8, \\quad |5| = 5$$
$$8 > 5$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find: $|-12|$',
        solution: `The absolute value is the distance from zero.

$-12$ is 12 units from zero.

$$|-12| = 12$$

**Answer:** $12$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Evaluate: $|7 - 10|$',
        solution: `**Step 1:** Evaluate inside the absolute value bars
$$7 - 10 = -3$$

**Step 2:** Take absolute value
$$|-3| = 3$$

**Answer:** $3$`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Evaluate: $|-8| - |3 - 7|$',
        solution: `**Step 1:** Evaluate each absolute value

$|-8| = 8$

For $|3 - 7|$:
$$3 - 7 = -4$$
$$|-4| = 4$$

**Step 2:** Subtract
$$8 - 4 = 4$$

**Answer:** $4$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is absolute value?', back: 'The distance of a number from zero on the number line' },
      { topicId: topic2.id, front: 'What is |-7|?', back: '7 (absolute value is always positive or zero)' },
      { topicId: topic2.id, front: 'Is absolute value ever negative?', back: 'No, it is always positive or zero' }
    ]
  })

  console.log('✓ Created topic: Absolute Value (3 examples, 3 flashcards)')

  // CATEGORY 2: Fractions and Decimals
  const fractions = await prisma.category.upsert({
    where: { slug: 'prealgebra-fractions-decimals' },
    update: {},
    create: {
      slug: 'prealgebra-fractions-decimals',
      name: 'Fractions and Decimals',
      order: 2,
      courseId: preAlgebraCourse.id
    }
  })

  // Topic: Operations with Fractions
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'operations-with-fractions' },
    update: {},
    create: {
      slug: 'operations-with-fractions',
      title: 'Operations with Fractions',
      description: 'Adding, subtracting, multiplying, and dividing fractions',
      order: 1,
      categoryId: fractions.id,
      textContent: `# Operations with Fractions

## Adding and Subtracting Fractions

**Same denominator:** Add or subtract numerators, keep denominator
$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

**Example:** $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$

**Different denominators:** Find common denominator first!

**Example:** $\\frac{1}{3} + \\frac{1}{4}$

LCD = 12:
$$\\frac{1}{3} = \\frac{4}{12}, \\quad \\frac{1}{4} = \\frac{3}{12}$$
$$\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$

## Multiplying Fractions

**Multiply numerators, multiply denominators**
$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Example:** $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$

**Tip:** Simplify before multiplying when possible!

## Dividing Fractions

**Multiply by the reciprocal**
$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

**Example:** $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$

**Memory aid:** "Keep, Change, Flip"

## Simplifying Fractions

Divide numerator and denominator by their GCF:
$$\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Calculate: $\\frac{3}{8} + \\frac{1}{8}$',
        solution: `Same denominator: add numerators, keep denominator.

$$\\frac{3}{8} + \\frac{1}{8} = \\frac{3 + 1}{8} = \\frac{4}{8}$$

Simplify:
$$\\frac{4}{8} = \\frac{1}{2}$$

**Answer:** $\\frac{1}{2}$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Calculate: $\\frac{2}{5} \\times \\frac{3}{4}$',
        solution: `Multiply numerators and denominators:

$$\\frac{2}{5} \\times \\frac{3}{4} = \\frac{2 \\times 3}{5 \\times 4} = \\frac{6}{20}$$

Simplify (divide by 2):
$$\\frac{6}{20} = \\frac{3}{10}$$

**Answer:** $\\frac{3}{10}$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Calculate: $\\frac{3}{4} \\div \\frac{2}{3}$',
        solution: `**Keep, Change, Flip:** Multiply by the reciprocal

$$\\frac{3}{4} \\div \\frac{2}{3} = \\frac{3}{4} \\times \\frac{3}{2}$$

Multiply:
$$\\frac{3 \\times 3}{4 \\times 2} = \\frac{9}{8}$$

Convert to mixed number:
$$\\frac{9}{8} = 1\\frac{1}{8}$$

**Answer:** $\\frac{9}{8}$ or $1\\frac{1}{8}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'How do you add fractions with the same denominator?', back: 'Add the numerators and keep the denominator' },
      { topicId: topic3.id, front: 'How do you multiply fractions?', back: 'Multiply numerators together and denominators together' },
      { topicId: topic3.id, front: 'How do you divide fractions?', back: 'Keep, Change, Flip (multiply by the reciprocal)' }
    ]
  })

  console.log('✓ Created topic: Operations with Fractions (3 examples, 3 flashcards)')

  // Topic: Decimals and Percents
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'decimals-and-percents' },
    update: {},
    create: {
      slug: 'decimals-and-percents',
      title: 'Decimals and Percents',
      description: 'Converting between fractions, decimals, and percents',
      order: 2,
      categoryId: fractions.id,
      textContent: `# Decimals and Percents

## Fraction to Decimal

**Divide the numerator by the denominator**

$$\\frac{3}{4} = 3 \\div 4 = 0.75$$

## Decimal to Fraction

**Use place value**

$$0.6 = \\frac{6}{10} = \\frac{3}{5}$$
$$0.25 = \\frac{25}{100} = \\frac{1}{4}$$

## Percent Basics

**Percent** means "per hundred" or "out of 100"

$$50\\% = \\frac{50}{100} = 0.50$$

## Percent to Decimal

**Divide by 100** (move decimal left 2 places)
- $45\\% = 0.45$
- $8\\% = 0.08$
- $125\\% = 1.25$

## Decimal to Percent

**Multiply by 100** (move decimal right 2 places)
- $0.35 = 35\\%$
- $0.08 = 8\\%$
- $1.5 = 150\\%$

## Fraction to Percent

Convert to decimal first, then to percent:
$$\\frac{3}{5} = 0.6 = 60\\%$$

Or multiply by 100:
$$\\frac{3}{5} \\times 100\\% = \\frac{300}{5}\\% = 60\\%$$

## Common Conversions

- $\\frac{1}{2} = 0.5 = 50\\%$
- $\\frac{1}{4} = 0.25 = 25\\%$
- $\\frac{3}{4} = 0.75 = 75\\%$
- $\\frac{1}{5} = 0.2 = 20\\%$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Convert $0.35$ to a percent.',
        solution: `Move decimal point two places to the right:

$$0.35 = 35\\%$$

**Answer:** $35\\%$`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Convert $\\frac{3}{8}$ to a decimal.',
        solution: `Divide numerator by denominator:

$$3 \\div 8 = 0.375$$

**Answer:** $0.375$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Convert $0.125$ to a simplified fraction.',
        solution: `**Step 1:** Write as fraction using place value
$$0.125 = \\frac{125}{1000}$$

**Step 2:** Find GCF of 125 and 1000
$$\\text{GCF} = 125$$

**Step 3:** Simplify
$$\\frac{125}{1000} = \\frac{125 \\div 125}{1000 \\div 125} = \\frac{1}{8}$$

**Answer:** $\\frac{1}{8}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'How do you convert a decimal to a percent?', back: 'Move the decimal point two places to the right (multiply by 100)' },
      { topicId: topic4.id, front: 'How do you convert a percent to a decimal?', back: 'Move the decimal point two places to the left (divide by 100)' },
      { topicId: topic4.id, front: 'What is 0.5 as a percent?', back: '50%' }
    ]
  })

  console.log('✓ Created topic: Decimals and Percents (3 examples, 3 flashcards)')

  // CATEGORY 3: Order of Operations and Expressions
  const orderOps = await prisma.category.upsert({
    where: { slug: 'prealgebra-order-operations' },
    update: {},
    create: {
      slug: 'prealgebra-order-operations',
      name: 'Order of Operations and Expressions',
      order: 3,
      courseId: preAlgebraCourse.id
    }
  })

  // Topic: Order of Operations (PEMDAS)
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'order-of-operations-pemdas' },
    update: {},
    create: {
      slug: 'order-of-operations-pemdas',
      title: 'Order of Operations (PEMDAS)',
      description: 'Using PEMDAS to evaluate expressions',
      order: 1,
      categoryId: orderOps.id,
      textContent: `# Order of Operations (PEMDAS)

## PEMDAS

**P** - Parentheses (and other grouping symbols)
**E** - Exponents
**M/D** - Multiplication and Division (left to right)
**A/S** - Addition and Subtraction (left to right)

**Memory aid:** "Please Excuse My Dear Aunt Sally"

## Important Notes

1. **Multiplication and Division** have the SAME priority - do them left to right
2. **Addition and Subtraction** have the SAME priority - do them left to right
3. Always work from **inside out** with parentheses

## Grouping Symbols

All mean "do this first":
- Parentheses: $( )$
- Brackets: $[ ]$
- Braces: $\\{ \\}$
- Fraction bar: $\\frac{a + b}{c - d}$

## Nested Parentheses

Work from **innermost** to **outermost**:
$$3 + [2 \\times (5 - 1)]$$

## Common Mistakes

❌ $6 + 2 \\times 3 = 8 \\times 3 = 24$ (Wrong!)
✅ $6 + 2 \\times 3 = 6 + 6 = 12$ (Correct: multiply first)

❌ $12 \\div 3 \\times 2 = 12 \\div 6 = 2$ (Wrong!)
✅ $12 \\div 3 \\times 2 = 4 \\times 2 = 8$ (Correct: left to right)`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Evaluate: $5 + 3 \\times 4$',
        solution: `Follow PEMDAS: Multiplication before Addition

**Step 1:** Multiply first
$$3 \\times 4 = 12$$

**Step 2:** Add
$$5 + 12 = 17$$

**Answer:** $17$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Evaluate: $20 \\div 4 \\times 2 + 3$',
        solution: `**Step 1:** Division and multiplication (left to right)
$$20 \\div 4 = 5$$
$$5 \\times 2 = 10$$

**Step 2:** Addition
$$10 + 3 = 13$$

**Answer:** $13$`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Evaluate: $6 + 2[5 - (3 + 1)]$',
        solution: `**Step 1:** Innermost parentheses
$$3 + 1 = 4$$
$$6 + 2[5 - 4]$$

**Step 2:** Brackets
$$5 - 4 = 1$$
$$6 + 2[1]$$

**Step 3:** Multiply
$$2 \\times 1 = 2$$
$$6 + 2$$

**Step 4:** Add
$$6 + 2 = 8$$

**Answer:** $8$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What does PEMDAS stand for?', back: 'Parentheses, Exponents, Multiplication/Division, Addition/Subtraction' },
      { topicId: topic5.id, front: 'In PEMDAS, which comes first: multiplication or division?', back: 'Neither - they have equal priority and are done left to right' },
      { topicId: topic5.id, front: 'Evaluate: 8 + 2 × 3', back: '14 (multiply first: 2 × 3 = 6, then add: 8 + 6 = 14)' }
    ]
  })

  console.log('✓ Created topic: Order of Operations (PEMDAS) (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created initial Pre-Algebra content!')
  console.log('   New categories: 3 (Integers, Fractions/Decimals, Order of Operations)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
