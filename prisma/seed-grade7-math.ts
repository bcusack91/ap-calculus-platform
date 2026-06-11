import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Grade 7 Math content...')

  const grade7 = await prisma.course.findUnique({
    where: { slug: 'grade-7-math' }
  })

  if (!grade7) {
    throw new Error('Grade 7 Math course not found')
  }

  // Category 1: Rational Numbers
  const rationalNumbers = await prisma.category.upsert({
    where: { slug: 'grade7-rational-numbers' },
    update: {},
    create: {
      slug: 'grade7-rational-numbers',
      name: 'Rational Numbers',
      order: 1,
      courseId: grade7.id
    }
  })

  // Topic 1: Operations with Integers
  const integerOps = await prisma.topic.upsert({
    where: { slug: 'operations-with-integers-grade7' },
    update: {},
    create: {
      slug: 'operations-with-integers-grade7',
      title: 'Operations with Integers',
      description: 'Add, subtract, multiply, and divide positive and negative numbers',
      order: 1,
      categoryId: rationalNumbers.id,
      isPremium: false,
      textContent: `
# Operations with Integers

## Adding Integers

### Same Signs
Add and keep the sign:
- $5 + 3 = 8$
- $-5 + (-3) = -8$

### Different Signs
Subtract and use the sign of the larger absolute value:
- $7 + (-3) = 4$
- $-7 + 3 = -4$

## Subtracting Integers

**Rule:** Add the opposite!
$$a - b = a + (-b)$$

**Examples:**
- $5 - 8 = 5 + (-8) = -3$
- $-3 - 7 = -3 + (-7) = -10$
- $4 - (-6) = 4 + 6 = 10$

## Multiplying Integers

**Same signs → Positive**
- $5 \\times 3 = 15$
- $(-5) \\times (-3) = 15$

**Different signs → Negative**
- $5 \\times (-3) = -15$
- $(-5) \\times 3 = -15$

## Dividing Integers

Same rules as multiplication:
- Same signs → Positive
- Different signs → Negative

**Examples:**
- $12 \\div 3 = 4$
- $(-12) \\div (-3) = 4$
- $12 \\div (-3) = -4$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: integerOps.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $-8 + 5$',
        solution: `
**Solution:**

Different signs - subtract and use sign of larger absolute value:
$$|-8| = 8, \\quad |5| = 5$$
$$8 - 5 = 3$$

Since -8 has the larger absolute value, the answer is negative.

**Answer:** $-3$
`
      },
      {
        topicId: integerOps.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Calculate: $-6 \\times (-4) + 8 \\div (-2)$',
        solution: `
**Solution:**

Follow order of operations:

Step 1: Multiply and divide (left to right)
$$-6 \\times (-4) = 24$$
$$8 \\div (-2) = -4$$

Step 2: Add
$$24 + (-4) = 20$$

**Answer:** $20$
`
      },
      {
        topicId: integerOps.id,
        order: 3,
        difficulty: 'HARD',
        question: 'The temperature at 6 AM was $-12°$F. It rose $3°$ per hour for 5 hours, then dropped $2°$ per hour for 3 hours. What was the final temperature?',
        solution: `
**Solution:**

Start: $-12°$

Rose $3°$ per hour for 5 hours:
$$5 \\times 3 = 15°$$ increase
$$-12 + 15 = 3°$$

Dropped $2°$ per hour for 3 hours:
$$3 \\times 2 = 6°$$ decrease
$$3 - 6 = -3°$$

**Answer:** $-3°$F
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: integerOps.id,
        front: 'What is the rule for subtracting integers?',
        back: 'Add the opposite: a - b = a + (-b)'
      },
      {
        topicId: integerOps.id,
        front: 'When multiplying two integers with different signs, what is the sign of the product?',
        back: 'Negative (different signs → negative product)'
      },
      {
        topicId: integerOps.id,
        front: 'When multiplying two negative integers, what is the sign of the product?',
        back: 'Positive (same signs → positive product)'
      }
    ]
  })

  console.log('✓ Created topic: Operations with Integers (3 examples, 3 flashcards)')

  // Topic 2: Multiplying and Dividing Fractions
  const multiplyDivideFractions = await prisma.topic.upsert({
    where: { slug: 'multiplying-dividing-fractions-grade7' },
    update: {},
    create: {
      slug: 'multiplying-dividing-fractions-grade7',
      title: 'Multiplying and Dividing Fractions',
      description: 'Master multiplication and division with fractions and mixed numbers',
      order: 2,
      categoryId: rationalNumbers.id,
      isPremium: false,
      textContent: `
# Multiplying and Dividing Fractions

## Multiplying Fractions

### Steps:
1. Multiply numerators
2. Multiply denominators
3. Simplify

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Example:**
$$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$$

### With Mixed Numbers
Convert to improper fractions first!

$$2\\frac{1}{3} \\times 1\\frac{1}{2} = \\frac{7}{3} \\times \\frac{3}{2} = \\frac{21}{6} = \\frac{7}{2} = 3\\frac{1}{2}$$

## Dividing Fractions

**Rule:** Multiply by the reciprocal (flip the second fraction)

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

**Example:**
$$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$$

## Reciprocal

The reciprocal of a fraction is obtained by flipping it:
- Reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$
- Reciprocal of $5 = \\frac{5}{1}$ is $\\frac{1}{5}$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: multiplyDivideFractions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $\\frac{3}{5} \\times \\frac{2}{7}$',
        solution: `
**Solution:**

Multiply numerators and denominators:
$$\\frac{3 \\times 2}{5 \\times 7} = \\frac{6}{35}$$

Already in simplest form.

**Answer:** $\\frac{6}{35}$
`
      },
      {
        topicId: multiplyDivideFractions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Calculate: $\\frac{5}{6} \\div \\frac{2}{3}$',
        solution: `
**Solution:**

Multiply by the reciprocal:
$$\\frac{5}{6} \\div \\frac{2}{3} = \\frac{5}{6} \\times \\frac{3}{2}$$

$$= \\frac{5 \\times 3}{6 \\times 2} = \\frac{15}{12}$$

Simplify (divide by 3):
$$\\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$$

**Answer:** $1\\frac{1}{4}$
`
      },
      {
        topicId: multiplyDivideFractions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A recipe calls for $2\\frac{2}{3}$ cups of flour. If you want to make $\\frac{3}{4}$ of the recipe, how much flour do you need?',
        solution: `
**Solution:**

Multiply: $2\\frac{2}{3} \\times \\frac{3}{4}$

Convert to improper fraction:
$$2\\frac{2}{3} = \\frac{8}{3}$$

Multiply:
$$\\frac{8}{3} \\times \\frac{3}{4} = \\frac{24}{12} = 2$$

**Answer:** 2 cups of flour
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: multiplyDivideFractions.id,
        front: 'How do you multiply fractions?',
        back: 'Multiply numerators, multiply denominators, then simplify'
      },
      {
        topicId: multiplyDivideFractions.id,
        front: 'What is the rule for dividing fractions?',
        back: 'Multiply by the reciprocal (flip the second fraction and multiply)'
      },
      {
        topicId: multiplyDivideFractions.id,
        front: 'What is the reciprocal of 3/5?',
        back: '5/3 (flip the fraction)'
      }
    ]
  })

  console.log('✓ Created topic: Multiplying and Dividing Fractions (3 examples, 3 flashcards)')

  // Category 2: Proportions and Percents
  const proportionsPercents = await prisma.category.upsert({
    where: { slug: 'grade7-proportions-percents' },
    update: {},
    create: {
      slug: 'grade7-proportions-percents',
      name: 'Proportions and Percents',
      order: 2,
      courseId: grade7.id
    }
  })

  // Topic 3: Solving Proportions
  const solvingProportions = await prisma.topic.upsert({
    where: { slug: 'solving-proportions-grade7' },
    update: {},
    create: {
      slug: 'solving-proportions-grade7',
      title: 'Solving Proportions',
      description: 'Use cross multiplication to solve proportion problems',
      order: 1,
      categoryId: proportionsPercents.id,
      isPremium: false,
      textContent: `
# Solving Proportions

## What is a Proportion?

A **proportion** is an equation that states two ratios are equal:
$$\\frac{a}{b} = \\frac{c}{d}$$

## Cross Multiplication

To solve proportions, use cross multiplication:

$$\\frac{a}{b} = \\frac{c}{d} \\quad \\Rightarrow \\quad ad = bc$$

**Example:**
$$\\frac{3}{4} = \\frac{x}{12}$$
$$3 \\times 12 = 4 \\times x$$
$$36 = 4x$$
$$x = 9$$

## Checking Your Answer

Substitute back to verify:
$$\\frac{3}{4} = \\frac{9}{12} \\quad \\checkmark$$

## Real-World Applications

- Scale drawings
- Recipe conversions
- Unit conversions
- Similar figures
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: solvingProportions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Solve for $x$: $\\frac{2}{5} = \\frac{x}{15}$',
        solution: `
**Solution:**

Cross multiply:
$$2 \\times 15 = 5 \\times x$$
$$30 = 5x$$
$$x = 6$$

Check: $\\frac{2}{5} = \\frac{6}{15}$ ✓ (both simplify to $\\frac{2}{5}$)

**Answer:** $x = 6$
`
      },
      {
        topicId: solvingProportions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'If 3 pounds of apples cost $\\$4.50$, how much do 7 pounds cost?',
        solution: `
**Solution:**

Set up proportion:
$$\\frac{3 \\text{ pounds}}{\\$4.50} = \\frac{7 \\text{ pounds}}{x}$$

Cross multiply:
$$3x = 4.50 \\times 7$$
$$3x = 31.50$$
$$x = 10.50$$

**Answer:** $\\$10.50$
`
      },
      {
        topicId: solvingProportions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'On a map, 2 inches represents 50 miles. Two cities are 7 inches apart on the map. What is the actual distance between them?',
        solution: `
**Solution:**

Set up proportion:
$$\\frac{2 \\text{ inches}}{50 \\text{ miles}} = \\frac{7 \\text{ inches}}{x \\text{ miles}}$$

Cross multiply:
$$2x = 50 \\times 7$$
$$2x = 350$$
$$x = 175$$

**Answer:** 175 miles
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: solvingProportions.id,
        front: 'What is a proportion?',
        back: 'An equation that states two ratios are equal: a/b = c/d'
      },
      {
        topicId: solvingProportions.id,
        front: 'How do you solve a proportion?',
        back: 'Use cross multiplication: if a/b = c/d, then ad = bc'
      },
      {
        topicId: solvingProportions.id,
        front: 'What are some real-world uses of proportions?',
        back: 'Scale drawings, recipe conversions, unit conversions, similar figures'
      }
    ]
  })

  console.log('✓ Created topic: Solving Proportions (3 examples, 3 flashcards)')

  // Topic 4: Percent Applications
  const percentApps = await prisma.topic.upsert({
    where: { slug: 'percent-applications-grade7' },
    update: {},
    create: {
      slug: 'percent-applications-grade7',
      title: 'Percent Applications',
      description: 'Solve real-world problems involving discounts, tax, tips, and percent change',
      order: 2,
      categoryId: proportionsPercents.id,
      isPremium: false,
      textContent: `
# Percent Applications

## Finding a Percent of a Number

$$\\text{Part} = \\text{Percent} \\times \\text{Whole}$$

**Example:** Find 25% of 80
$$0.25 \\times 80 = 20$$

## Percent Change

$$\\text{Percent Change} = \\frac{\\text{New - Original}}{\\text{Original}} \\times 100\\%$$

- Positive = Increase
- Negative = Decrease

## Common Applications

### Discount
Original price $\\times$ (1 - discount rate)

**Example:** 20% off $\\$50$
$$50 \\times (1 - 0.20) = 50 \\times 0.80 = \\$40$$

### Tax
Price $\\times$ (1 + tax rate)

**Example:** $\\$30$ with 8% tax
$$30 \\times 1.08 = \\$32.40$$

### Tip
Bill $\\times$ tip rate

**Example:** 15% tip on $\\$40$
$$40 \\times 0.15 = \\$6$$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: percentApps.id,
        order: 1,
        difficulty: 'EASY',
        question: 'A shirt costs $\\$25$. It is on sale for 30% off. What is the sale price?',
        solution: `
**Solution:**

Method 1 - Find discount:
$$\\text{Discount} = 0.30 \\times 25 = \\$7.50$$
$$\\text{Sale price} = 25 - 7.50 = \\$17.50$$

Method 2 - Multiply by remaining percent:
$$25 \\times (1 - 0.30) = 25 \\times 0.70 = \\$17.50$$

**Answer:** $\\$17.50$
`
      },
      {
        topicId: percentApps.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A population increased from 15,000 to 18,000. What is the percent increase?',
        solution: `
**Solution:**

Use percent change formula:
$$\\text{Percent Change} = \\frac{18000 - 15000}{15000} \\times 100\\%$$

$$= \\frac{3000}{15000} \\times 100\\%$$

$$= 0.2 \\times 100\\% = 20\\%$$

**Answer:** 20% increase
`
      },
      {
        topicId: percentApps.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A meal costs $\\$45$. You want to leave a 18% tip and there is 7% sales tax. What is the total amount you pay?',
        solution: `
**Solution:**

Step 1: Add tax to the meal
$$45 \\times 1.07 = \\$48.15$$

Step 2: Calculate tip (on original meal)
$$45 \\times 0.18 = \\$8.10$$

Step 3: Total
$$48.15 + 8.10 = \\$56.25$$

**Answer:** $\\$56.25$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: percentApps.id,
        front: 'How do you find a percent of a number?',
        back: 'Part = Percent × Whole (convert percent to decimal first)'
      },
      {
        topicId: percentApps.id,
        front: 'What is the formula for percent change?',
        back: '(New - Original) / Original × 100%'
      },
      {
        topicId: percentApps.id,
        front: 'How do you calculate a sale price with a discount?',
        back: 'Original price × (1 - discount rate)'
      }
    ]
  })

  console.log('✓ Created topic: Percent Applications (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created Grade 7 Math content!')
  console.log('   New categories: 2 (Rational Numbers, Proportions and Percents)')
  console.log('   New topics: 4')
  console.log('   Total example problems added: 12')
  console.log('   Total flashcards added: 12')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
