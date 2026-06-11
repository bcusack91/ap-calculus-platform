import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Grade 4 Math content...')

  const grade4 = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  })

  if (!grade4) {
    throw new Error('Grade 4 Math course not found')
  }

  // Category 1: Multiplication and Division
  const multiplicationDivision = await prisma.category.upsert({
    where: { slug: 'grade4-multiplication-division' },
    update: {},
    create: {
      slug: 'grade4-multiplication-division',
      name: 'Multiplication and Division',
      order: 1,
      courseId: grade4.id
    }
  })

  // Topic 1: Multi-Digit Multiplication
  const multiDigitMultiplication = await prisma.topic.upsert({
    where: { slug: 'multi-digit-multiplication' },
    update: {},
    create: {
      slug: 'multi-digit-multiplication',
      title: 'Multi-Digit Multiplication',
      description: 'Learn to multiply larger numbers using the standard algorithm',
      order: 1,
      categoryId: multiplicationDivision.id,
      isPremium: false,
      textContent: `
# Multi-Digit Multiplication

## Multiplying by One Digit

**Example:** $23 \\times 4$

$$\\begin{align}
  &23 \\\\
\\times &\\phantom{0}4 \\\\
\\hline
  &92
\\end{align}$$

Steps:
1. Multiply ones: $3 \\times 4 = 12$ (write 2, carry 1)
2. Multiply tens: $2 \\times 4 = 8$, plus carried 1 = 9

## Multiplying by Two Digits

**Example:** $25 \\times 13$

$$\\begin{align}
  &\\phantom{0}25 \\\\
\\times &\\phantom{0}13 \\\\
\\hline
  &\\phantom{0}75 & \\text{(25 × 3)} \\\\
+ &250 & \\text{(25 × 10)} \\\\
\\hline
  &325
\\end{align}$$

## Tips to Remember

- Line up your numbers carefully
- Remember to add a zero when multiplying by the tens place
- Check your work by estimating

## Real-World Uses

- Calculating total cost (items × price)
- Finding area (length × width)
- Figuring out groups of things
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: multiDigitMultiplication.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $34 \\times 5$',
        solution: `
**Solution:**

$$\\begin{align}
  &34 \\\\
\\times &\\phantom{0}5 \\\\
\\hline
  &170
\\end{align}$$

Step by step:
- $4 \\times 5 = 20$ (write 0, carry 2)
- $3 \\times 5 = 15$, plus carried 2 = 17

**Answer:** 170
`
      },
      {
        topicId: multiDigitMultiplication.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A box contains 24 crayons. If there are 6 boxes, how many total crayons are there?',
        solution: `
**Solution:**

Multiply: $24 \\times 6$

$$\\begin{align}
  &24 \\\\
\\times &\\phantom{0}6 \\\\
\\hline
  &144
\\end{align}$$

**Answer:** 144 crayons
`
      },
      {
        topicId: multiDigitMultiplication.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Calculate: $46 \\times 23$',
        solution: `
**Solution:**

$$\\begin{align}
  &\\phantom{0}46 \\\\
\\times &\\phantom{0}23 \\\\
\\hline
  &138 & \\text{(46 × 3)} \\\\
+ &920 & \\text{(46 × 20)} \\\\
\\hline
  &1058
\\end{align}$$

**Answer:** 1,058
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: multiDigitMultiplication.id,
        front: 'When multiplying 34 × 5, what do you do first?',
        back: 'Multiply the ones place: 4 × 5 = 20, write 0 and carry 2'
      },
      {
        topicId: multiDigitMultiplication.id,
        front: 'When multiplying by the tens digit in 25 × 13, what do you add?',
        back: 'Add a zero before multiplying by 1 (really multiplying by 10)'
      },
      {
        topicId: multiDigitMultiplication.id,
        front: 'How can you check if your multiplication answer is reasonable?',
        back: 'Round the numbers and estimate (like 34 × 5 is about 30 × 5 = 150)'
      }
    ]
  })

  console.log('✓ Created topic: Multi-Digit Multiplication (3 examples, 3 flashcards)')

  // Topic 2: Long Division
  const longDivision = await prisma.topic.upsert({
    where: { slug: 'long-division-grade4' },
    update: {},
    create: {
      slug: 'long-division-grade4',
      title: 'Long Division',
      description: 'Use long division to divide larger numbers',
      order: 2,
      categoryId: multiplicationDivision.id,
      isPremium: false,
      textContent: `
# Long Division

## The Steps: Divide, Multiply, Subtract, Bring Down

**Remember:** DMSB - Dad, Mom, Sister, Brother

**Example:** $84 \\div 4$

$$\\begin{align}
&\\phantom{00}21 \\\\
4 &\\overline{)84} \\\\
&\\underline{-8\\phantom{0}} \\\\
&\\phantom{0}04 \\\\
&\\phantom{0}\\underline{-4} \\\\
&\\phantom{00}0
\\end{align}$$

Steps:
1. **Divide:** 8 ÷ 4 = 2
2. **Multiply:** 2 × 4 = 8
3. **Subtract:** 8 - 8 = 0
4. **Bring down:** Bring down 4
5. Repeat: 4 ÷ 4 = 1

## Remainders

Sometimes there's a number left over:

**Example:** $17 \\div 3 = 5$ R $2$

This means: 3 goes into 17 five times (15), with 2 left over.

## Checking Your Answer

Multiply your answer by the divisor:
- $84 \\div 4 = 21$
- Check: $21 \\times 4 = 84$ ✓
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: longDivision.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $63 \\div 3$',
        solution: `
**Solution:**

$$\\begin{align}
&\\phantom{00}21 \\\\
3 &\\overline{)63} \\\\
&\\underline{-6\\phantom{0}} \\\\
&\\phantom{0}03 \\\\
&\\phantom{0}\\underline{-3} \\\\
&\\phantom{00}0
\\end{align}$$

**Answer:** 21
`
      },
      {
        topicId: longDivision.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'There are 96 students going on a field trip. If each bus holds 8 students, how many buses are needed?',
        solution: `
**Solution:**

Divide: $96 \\div 8$

$$\\begin{align}
&\\phantom{00}12 \\\\
8 &\\overline{)96} \\\\
&\\underline{-8\\phantom{0}} \\\\
&\\phantom{0}16 \\\\
&\\phantom{0}\\underline{-16} \\\\
&\\phantom{00}0
\\end{align}$$

**Answer:** 12 buses
`
      },
      {
        topicId: longDivision.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Calculate: $127 \\div 5$',
        solution: `
**Solution:**

$$\\begin{align}
&\\phantom{000}25 \\text{ R } 2 \\\\
5 &\\overline{)127} \\\\
&\\underline{-10\\phantom{00}} \\\\
&\\phantom{0}27 \\\\
&\\phantom{0}\\underline{-25} \\\\
&\\phantom{00}2
\\end{align}$$

**Answer:** 25 R 2 (or 25 remainder 2)
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: longDivision.id,
        front: 'What do the letters DMSB stand for in long division?',
        back: 'Divide, Multiply, Subtract, Bring down (the steps of long division)'
      },
      {
        topicId: longDivision.id,
        front: 'What is a remainder?',
        back: 'The amount left over after dividing when it doesn\'t divide evenly'
      },
      {
        topicId: longDivision.id,
        front: 'How do you check a division answer?',
        back: 'Multiply the answer by the divisor to get back to the original number'
      }
    ]
  })

  console.log('✓ Created topic: Long Division (3 examples, 3 flashcards)')

  // Category 2: Fractions
  const fractions = await prisma.category.upsert({
    where: { slug: 'grade4-fractions' },
    update: {},
    create: {
      slug: 'grade4-fractions',
      name: 'Fractions',
      order: 2,
      courseId: grade4.id
    }
  })

  // Topic 3: Equivalent Fractions
  const equivalentFractions = await prisma.topic.upsert({
    where: { slug: 'equivalent-fractions-grade4' },
    update: {},
    create: {
      slug: 'equivalent-fractions-grade4',
      title: 'Equivalent Fractions',
      description: 'Find fractions that represent the same value',
      order: 1,
      categoryId: fractions.id,
      isPremium: false,
      textContent: `
# Equivalent Fractions

## What Are Equivalent Fractions?

Fractions that look different but have the same value:

$$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$$

All of these equal one-half!

## Creating Equivalent Fractions

### Method 1: Multiply
Multiply both numerator and denominator by the same number:

$$\\frac{2}{3} = \\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$$

$$\\frac{2}{3} = \\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}$$

### Method 2: Divide (Simplifying)
Divide both numerator and denominator by the same number:

$$\\frac{6}{8} = \\frac{6 \\div 2}{8 \\div 2} = \\frac{3}{4}$$

## Simplest Form

A fraction is in **simplest form** when the numerator and denominator have no common factors except 1:

- $\\frac{3}{4}$ is in simplest form
- $\\frac{6}{8}$ is NOT (it can simplify to $\\frac{3}{4}$)

## Why Is This Useful?

- Comparing fractions
- Adding and subtracting fractions
- Understanding the same amount in different ways
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: equivalentFractions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Find an equivalent fraction for $\\frac{1}{3}$ by multiplying by 2.',
        solution: `
**Solution:**

Multiply both top and bottom by 2:

$$\\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}$$

**Answer:** $\\frac{2}{6}$
`
      },
      {
        topicId: equivalentFractions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Simplify $\\frac{8}{12}$ to simplest form.',
        solution: `
**Solution:**

Find a common factor of 8 and 12:
Both divide by 4:

$$\\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}$$

**Answer:** $\\frac{2}{3}$
`
      },
      {
        topicId: equivalentFractions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Are $\\frac{3}{5}$ and $\\frac{12}{20}$ equivalent? Explain.',
        solution: `
**Solution:**

Check by simplifying $\\frac{12}{20}$:

Find common factor (both divide by 4):
$$\\frac{12 \\div 4}{20 \\div 4} = \\frac{3}{5}$$

Since $\\frac{12}{20}$ simplifies to $\\frac{3}{5}$, they are equivalent!

**Answer:** Yes, they are equivalent
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: equivalentFractions.id,
        front: 'What are equivalent fractions?',
        back: 'Fractions that look different but have the same value (like 1/2 = 2/4)'
      },
      {
        topicId: equivalentFractions.id,
        front: 'How do you create an equivalent fraction?',
        back: 'Multiply (or divide) both the numerator and denominator by the same number'
      },
      {
        topicId: equivalentFractions.id,
        front: 'What does "simplest form" mean?',
        back: 'When the numerator and denominator have no common factors except 1'
      }
    ]
  })

  console.log('✓ Created topic: Equivalent Fractions (3 examples, 3 flashcards)')

  // Topic 4: Comparing Fractions
  const comparingFractions = await prisma.topic.upsert({
    where: { slug: 'comparing-fractions-grade4' },
    update: {},
    create: {
      slug: 'comparing-fractions-grade4',
      title: 'Comparing Fractions',
      description: 'Compare fractions using common denominators',
      order: 2,
      categoryId: fractions.id,
      isPremium: false,
      textContent: `
# Comparing Fractions

## Same Denominator

When fractions have the same denominator, compare numerators:

$$\\frac{3}{8} < \\frac{5}{8}$$

(3 parts < 5 parts)

## Different Denominators

Find a common denominator first, then compare:

**Example:** Compare $\\frac{1}{2}$ and $\\frac{2}{5}$

Common denominator is 10:
- $\\frac{1}{2} = \\frac{5}{10}$
- $\\frac{2}{5} = \\frac{4}{10}$

Since $\\frac{5}{10} > \\frac{4}{10}$, we know $\\frac{1}{2} > \\frac{2}{5}$

## Using Benchmarks

Compare to common fractions:
- Is it close to $0$, $\\frac{1}{2}$, or $1$?

**Example:**
- $\\frac{1}{8}$ is close to 0
- $\\frac{7}{8}$ is close to 1

So $\\frac{7}{8} > \\frac{1}{8}$ (obviously!)

## Tips

- Same numerator? Smaller denominator = larger fraction
  - $\\frac{3}{4} > \\frac{3}{8}$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: comparingFractions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is greater: $\\frac{2}{7}$ or $\\frac{5}{7}$?',
        solution: `
**Solution:**

Same denominator - compare numerators:

$2 < 5$

So $\\frac{2}{7} < \\frac{5}{7}$

**Answer:** $\\frac{5}{7}$ is greater
`
      },
      {
        topicId: comparingFractions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is greater: $\\frac{1}{3}$ or $\\frac{1}{4}$?',
        solution: `
**Solution:**

Same numerator (1) - smaller denominator wins:

Think: $\\frac{1}{3}$ of a pizza is bigger than $\\frac{1}{4}$ of a pizza

Common denominator (12):
- $\\frac{1}{3} = \\frac{4}{12}$
- $\\frac{1}{4} = \\frac{3}{12}$

**Answer:** $\\frac{1}{3}$ is greater
`
      },
      {
        topicId: comparingFractions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Order from least to greatest: $\\frac{1}{2}$, $\\frac{3}{8}$, $\\frac{5}{6}$',
        solution: `
**Solution:**

Find common denominator (24):

- $\\frac{1}{2} = \\frac{12}{24}$
- $\\frac{3}{8} = \\frac{9}{24}$
- $\\frac{5}{6} = \\frac{20}{24}$

Order: $\\frac{9}{24} < \\frac{12}{24} < \\frac{20}{24}$

**Answer:** $\\frac{3}{8}, \\frac{1}{2}, \\frac{5}{6}$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: comparingFractions.id,
        front: 'How do you compare fractions with the same denominator?',
        back: 'Compare the numerators - larger numerator = larger fraction'
      },
      {
        topicId: comparingFractions.id,
        front: 'How do you compare fractions with different denominators?',
        back: 'Find a common denominator first, then compare the numerators'
      },
      {
        topicId: comparingFractions.id,
        front: 'If two fractions have the same numerator, which is larger?',
        back: 'The one with the smaller denominator (like 1/3 > 1/4)'
      }
    ]
  })

  console.log('✓ Created topic: Comparing Fractions (3 examples, 3 flashcards)')

  // Category 3: Decimals and Measurement
  const decimals = await prisma.category.upsert({
    where: { slug: 'grade4-decimals-measurement' },
    update: {},
    create: {
      slug: 'grade4-decimals-measurement',
      name: 'Decimals and Measurement',
      order: 3,
      courseId: grade4.id
    }
  })

  // Topic 5: Understanding Decimals
  const understandingDecimals = await prisma.topic.upsert({
    where: { slug: 'understanding-decimals-grade4' },
    update: {},
    create: {
      slug: 'understanding-decimals-grade4',
      title: 'Understanding Decimals',
      description: 'Learn about tenths and hundredths',
      order: 1,
      categoryId: decimals.id,
      isPremium: false,
      textContent: `
# Understanding Decimals

## What Are Decimals?

Decimals are another way to show parts of a whole.

## Place Value with Decimals

**Example:** $3.45$

| Ones | . | Tenths | Hundredths |
|------|---|--------|------------|
| 3 | . | 4 | 5 |

- 3 is in the **ones** place
- 4 is in the **tenths** place (4 tenths = $\\frac{4}{10}$)
- 5 is in the **hundredths** place (5 hundredths = $\\frac{5}{100}$)

## Reading Decimals

- $0.3$ → "three tenths"
- $0.45$ → "forty-five hundredths"
- $2.7$ → "two and seven tenths"

## Decimals and Fractions

Decimals are related to fractions:

- $0.1 = \\frac{1}{10}$
- $0.5 = \\frac{5}{10} = \\frac{1}{2}$
- $0.25 = \\frac{25}{100} = \\frac{1}{4}$

## Money Connection

Money uses decimals!
- $\\$0.25$ = 25 cents = one quarter
- $\\$0.50$ = 50 cents = one half dollar
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: understandingDecimals.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What decimal represents "five tenths"?',
        solution: `
**Solution:**

"Five tenths" means 5 in the tenths place:

$$0.5$$

This is the same as $\\frac{5}{10}$

**Answer:** $0.5$
`
      },
      {
        topicId: understandingDecimals.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Write $\\frac{3}{10}$ as a decimal.',
        solution: `
**Solution:**

The denominator 10 tells us this is tenths.
Put 3 in the tenths place:

$$\\frac{3}{10} = 0.3$$

**Answer:** $0.3$
`
      },
      {
        topicId: understandingDecimals.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Write $\\frac{47}{100}$ as a decimal.',
        solution: `
**Solution:**

The denominator 100 tells us this is hundredths.
47 hundredths:

$$\\frac{47}{100} = 0.47$$

**Answer:** $0.47$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: understandingDecimals.id,
        front: 'What does the first digit after the decimal point represent?',
        back: 'Tenths (like 0.3 means 3 tenths)'
      },
      {
        topicId: understandingDecimals.id,
        front: 'What decimal equals one-half?',
        back: '0.5 (five tenths = 1/2)'
      },
      {
        topicId: understandingDecimals.id,
        front: 'How do you write "twenty-three hundredths" as a decimal?',
        back: '0.23'
      }
    ]
  })

  console.log('✓ Created topic: Understanding Decimals (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created Grade 4 Math content!')
  console.log('   New categories: 3 (Multiplication/Division, Fractions, Decimals/Measurement)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
