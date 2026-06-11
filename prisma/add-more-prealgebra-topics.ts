import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding more Pre-Algebra topics...')

  const preAlgebraCourse = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  })

  if (!preAlgebraCourse) {
    throw new Error('Pre-Algebra course not found')
  }

  // Get existing category
  const orderOps = await prisma.category.findUnique({
    where: { slug: 'prealgebra-order-operations' }
  })

  // NEW CATEGORY: Ratios, Proportions, and Percents
  const ratiosPercents = await prisma.category.upsert({
    where: { slug: 'prealgebra-ratios-proportions' },
    update: {},
    create: {
      slug: 'prealgebra-ratios-proportions',
      name: 'Ratios, Proportions, and Percents',
      order: 4,
      courseId: preAlgebraCourse.id
    }
  })

  // NEW CATEGORY: Introduction to Algebra
  const introAlgebra = await prisma.category.upsert({
    where: { slug: 'prealgebra-intro-algebra' },
    update: {},
    create: {
      slug: 'prealgebra-intro-algebra',
      name: 'Introduction to Algebra',
      order: 5,
      courseId: preAlgebraCourse.id
    }
  })

  // Topic: Exponents
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'exponents-prealgebra' },
    update: {},
    create: {
      slug: 'exponents-prealgebra',
      title: 'Introduction to Exponents',
      description: 'Understanding exponent notation and basic exponent rules',
      order: 2,
      categoryId: orderOps!.id,
      textContent: `# Introduction to Exponents

## Exponent Notation

**Base** and **exponent** (or power):
$$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_\\text{n times}$$

**Example:** $5^3 = 5 \\times 5 \\times 5 = 125$

**Read as:** "5 to the third power" or "5 cubed"

## Special Cases

**Any number to the first power equals itself:**
$$a^1 = a$$

**Any number (except 0) to the zero power equals 1:**
$$a^0 = 1$$

## Perfect Squares

Numbers that are squares of whole numbers:
$$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, ...$$

$$4 = 2^2, \\quad 9 = 3^2, \\quad 16 = 4^2$$

## Perfect Cubes

$$1, 8, 27, 64, 125, ...$$

$$8 = 2^3, \\quad 27 = 3^3, \\quad 64 = 4^3$$

## Product Rule

When multiplying with the same base, **add** the exponents:
$$a^m \\times a^n = a^{m+n}$$

**Example:** $2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$

## Quotient Rule

When dividing with the same base, **subtract** the exponents:
$$\\frac{a^m}{a^n} = a^{m-n}$$

**Example:** $\\frac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$

## Power Rule

When raising a power to a power, **multiply** the exponents:
$$(a^m)^n = a^{mn}$$

**Example:** $(3^2)^3 = 3^{2 \\times 3} = 3^6 = 729$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Evaluate: $4^3$',
        solution: `$$4^3 = 4 \\times 4 \\times 4 = 64$$

**Answer:** $64$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Simplify: $3^4 \\times 3^2$',
        solution: `Use the product rule: add exponents when bases are the same.

$$3^4 \\times 3^2 = 3^{4+2} = 3^6$$

$$3^6 = 729$$

**Answer:** $3^6$ or $729$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Simplify: $\\frac{7^5}{7^3}$',
        solution: `Use the quotient rule: subtract exponents when dividing with the same base.

$$\\frac{7^5}{7^3} = 7^{5-3} = 7^2$$

$$7^2 = 49$$

**Answer:** $7^2$ or $49$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What is $a^n$?', back: 'a multiplied by itself n times' },
      { topicId: topic1.id, front: 'What is the product rule for exponents?', back: 'When multiplying with same base: $a^m \\times a^n = a^{m+n}$' },
      { topicId: topic1.id, front: 'What is $5^0$?', back: '1 (any non-zero number to the power of 0 equals 1)' }
    ]
  })

  console.log('✓ Created topic: Introduction to Exponents (3 examples, 3 flashcards)')

  // Topic: Ratios and Rates
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'ratios-and-rates-prealgebra' },
    update: {},
    create: {
      slug: 'ratios-and-rates-prealgebra',
      title: 'Ratios and Rates',
      description: 'Understanding and simplifying ratios and rates',
      order: 1,
      categoryId: ratiosPercents.id,
      textContent: `# Ratios and Rates

## Ratio

A **ratio** compares two quantities by division.

**Three ways to write:**
- Using colon: $3:5$
- Using "to": $3 \\text{ to } 5$
- As a fraction: $\\frac{3}{5}$

**Example:** If there are 3 cats and 5 dogs, the ratio of cats to dogs is $3:5$.

## Simplifying Ratios

Divide both numbers by their GCF (like simplifying fractions).

**Example:** $12:18 = \\frac{12}{18} = \\frac{2}{3} = 2:3$

## Rate

A **rate** is a ratio that compares two different units.

**Examples:**
- 60 miles per hour: $\\frac{60 \\text{ miles}}{1 \\text{ hour}}$
- $\\$3$ per pound: $\\frac{\\$3}{1 \\text{ lb}}$
- 25 miles per gallon: $\\frac{25 \\text{ miles}}{1 \\text{ gallon}}$

## Unit Rate

A rate with a denominator of 1.

**To find unit rate:** Divide numerator by denominator.

**Example:** If you travel 150 miles in 3 hours:
$$\\frac{150 \\text{ miles}}{3 \\text{ hours}} = 50 \\text{ miles per hour}$$

## Comparing Rates

Find the unit rate for each, then compare.

**Example:** Which is cheaper: 3 lb for $\\$6$ or 5 lb for $\\$9$?
- First: $\\frac{\\$6}{3} = \\$2$ per lb
- Second: $\\frac{\\$9}{5} = \\$1.80$ per lb

The second option is cheaper!`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Simplify the ratio $15:25$.',
        solution: `Find the GCF of 15 and 25:
$$\\text{GCF} = 5$$

Divide both by 5:
$$15 \\div 5 = 3$$
$$25 \\div 5 = 5$$

**Answer:** $3:5$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A car travels 240 miles in 4 hours. Find the unit rate (miles per hour).',
        solution: `Divide distance by time:

$$\\text{Rate} = \\frac{240 \\text{ miles}}{4 \\text{ hours}}$$

$$= 60 \\text{ miles per hour}$$

**Answer:** 60 mph`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Which is the better buy: 8 oz for $\\$2.40$ or 12 oz for $\\$3.36$?',
        solution: `Find the unit price for each:

**First option:**
$$\\frac{\\$2.40}{8 \\text{ oz}} = \\$0.30 \\text{ per oz}$$

**Second option:**
$$\\frac{\\$3.36}{12 \\text{ oz}} = \\$0.28 \\text{ per oz}$$

$\\$0.28 < \\$0.30$

**Answer:** 12 oz for $\\$3.36$ is the better buy`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is a ratio?', back: 'A comparison of two quantities by division' },
      { topicId: topic2.id, front: 'What is a unit rate?', back: 'A rate with a denominator of 1' },
      { topicId: topic2.id, front: 'How do you simplify a ratio?', back: 'Divide both numbers by their GCF' }
    ]
  })

  console.log('✓ Created topic: Ratios and Rates (3 examples, 3 flashcards)')

  // Topic: Proportions
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'proportions-prealgebra' },
    update: {},
    create: {
      slug: 'proportions-prealgebra',
      title: 'Solving Proportions',
      description: 'Using cross products to solve proportions',
      order: 2,
      categoryId: ratiosPercents.id,
      textContent: `# Solving Proportions

## What is a Proportion?

A **proportion** states that two ratios are equal.

$$\\frac{a}{b} = \\frac{c}{d}$$

**Example:** $\\frac{2}{3} = \\frac{4}{6}$ is a proportion.

## Cross Products

**Cross Product Property:**
$$\\frac{a}{b} = \\frac{c}{d} \\text{ means } ad = bc$$

**Visual:** 
$$\\frac{a}{b} = \\frac{c}{d} \\rightarrow a \\times d = b \\times c$$

## Solving Proportions

Use cross products to find the missing value.

**Example:** Solve $\\frac{3}{x} = \\frac{9}{15}$

**Step 1:** Cross multiply
$$3 \\times 15 = 9 \\times x$$
$$45 = 9x$$

**Step 2:** Solve
$$x = 5$$

## Word Problems

**Strategy:**
1. Set up the proportion (keep units aligned)
2. Cross multiply
3. Solve for the unknown

**Example:** If 3 apples cost $\\$2$, how much do 12 apples cost?

$$\\frac{3 \\text{ apples}}{\\$2} = \\frac{12 \\text{ apples}}{x}$$

## Scale Problems

Maps and models use proportions for scale.

**Example:** If 1 inch represents 50 miles, how many miles does 3.5 inches represent?
$$\\frac{1 \\text{ in}}{50 \\text{ mi}} = \\frac{3.5 \\text{ in}}{x \\text{ mi}}$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve: $\\frac{x}{4} = \\frac{6}{8}$',
        solution: `**Cross multiply:**
$$x \\times 8 = 4 \\times 6$$
$$8x = 24$$

**Solve:**
$$x = 3$$

**Answer:** $x = 3$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'If 5 notebooks cost $\\$12$, how much do 8 notebooks cost?',
        solution: `Set up proportion:
$$\\frac{5 \\text{ notebooks}}{\\$12} = \\frac{8 \\text{ notebooks}}{x}$$

**Cross multiply:**
$$5x = 12 \\times 8$$
$$5x = 96$$

**Solve:**
$$x = \\frac{96}{5} = 19.20$$

**Answer:** $\\$19.20$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'On a map, 2 cm represents 15 km. Two cities are 7.5 cm apart on the map. What is the actual distance?',
        solution: `Set up proportion:
$$\\frac{2 \\text{ cm}}{15 \\text{ km}} = \\frac{7.5 \\text{ cm}}{x \\text{ km}}$$

**Cross multiply:**
$$2x = 15 \\times 7.5$$
$$2x = 112.5$$

**Solve:**
$$x = 56.25$$

**Answer:** 56.25 km`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is a proportion?', back: 'An equation stating that two ratios are equal' },
      { topicId: topic3.id, front: 'What is the cross product property?', back: 'If a/b = c/d, then ad = bc' },
      { topicId: topic3.id, front: 'How do you solve a proportion?', back: 'Cross multiply and solve the resulting equation' }
    ]
  })

  console.log('✓ Created topic: Solving Proportions (3 examples, 3 flashcards)')

  // Topic: Percent Problems
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'percent-problems-prealgebra' },
    update: {},
    create: {
      slug: 'percent-problems-prealgebra',
      title: 'Percent Problems',
      description: 'Finding percent of a number, percent increase/decrease',
      order: 3,
      categoryId: ratiosPercents.id,
      textContent: `# Percent Problems

## Finding a Percent of a Number

**Method:** Convert percent to decimal, then multiply.

**Example:** What is 25% of 60?
$$0.25 \\times 60 = 15$$

## The Percent Equation

$$\\text{Part} = \\text{Percent} \\times \\text{Whole}$$

Can be rearranged:
- $\\text{Percent} = \\frac{\\text{Part}}{\\text{Whole}}$
- $\\text{Whole} = \\frac{\\text{Part}}{\\text{Percent}}$

## Percent Increase

$$\\text{Percent Increase} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100\\%$$

**Example:** Price increases from $\\$20$ to $\\$25$:
$$\\frac{25 - 20}{20} \\times 100\\% = \\frac{5}{20} \\times 100\\% = 25\\%$$

## Percent Decrease

$$\\text{Percent Decrease} = \\frac{\\text{Original} - \\text{New}}{\\text{Original}} \\times 100\\%$$

**Example:** Price drops from $\\$40$ to $\\$30$:
$$\\frac{40 - 30}{40} \\times 100\\% = \\frac{10}{40} \\times 100\\% = 25\\%$$

## Tips and Discounts

**Discount:** amount saved
**Sale price** = Original price - Discount

**Tip/Tax:** added amount
**Total** = Original + Tip (or Tax)

## Common Percent Problems

- **Finding a sale price:** Original $\\times$ (1 - percent off)
- **Finding total with tax:** Original $\\times$ (1 + tax rate)`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'What is 30% of 80?',
        solution: `Convert percent to decimal and multiply:

$$30\\% = 0.30$$

$$0.30 \\times 80 = 24$$

**Answer:** $24$`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A shirt costs $\\$40$. It is on sale for 25% off. What is the sale price?',
        solution: `**Method 1:** Find discount, then subtract
$$\\text{Discount} = 0.25 \\times 40 = 10$$
$$\\text{Sale price} = 40 - 10 = 30$$

**Method 2:** Multiply by (1 - 0.25)
$$\\text{Sale price} = 40 \\times 0.75 = 30$$

**Answer:** $\\$30$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A population increased from 250 to 300. What is the percent increase?',
        solution: `Use percent increase formula:

$$\\text{Percent Increase} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100\\%$$

$$= \\frac{300 - 250}{250} \\times 100\\%$$

$$= \\frac{50}{250} \\times 100\\%$$

$$= 0.2 \\times 100\\% = 20\\%$$

**Answer:** 20% increase`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'How do you find a percent of a number?', back: 'Convert percent to decimal and multiply' },
      { topicId: topic4.id, front: 'What is the percent increase formula?', back: '(New - Original) / Original × 100%' },
      { topicId: topic4.id, front: 'How do you find a sale price with 20% off?', back: 'Multiply by 0.80 or (1 - 0.20)' }
    ]
  })

  console.log('✓ Created topic: Percent Problems (3 examples, 3 flashcards)')

  // Topic: Variables and Expressions
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'variables-and-expressions' },
    update: {},
    create: {
      slug: 'variables-and-expressions',
      title: 'Variables and Expressions',
      description: 'Evaluating and simplifying algebraic expressions',
      order: 1,
      categoryId: introAlgebra.id,
      textContent: `# Variables and Expressions

## Variables

A **variable** is a letter that represents an unknown number.

**Common variables:** $x, y, n, a, b$

**Example:** If $x = 5$, then $x + 3 = 5 + 3 = 8$

## Algebraic Expression

A combination of variables, numbers, and operations.

**Examples:**
- $2x + 5$
- $3n - 7$
- $\\frac{x}{4} + 2$

## Evaluating Expressions

**Substitute** the value for the variable and **calculate**.

**Example:** Evaluate $3x - 4$ when $x = 5$
$$3(5) - 4 = 15 - 4 = 11$$

## Terms

Parts of an expression separated by $+$ or $-$ signs.

**Example:** In $3x + 2y - 5$
- Three terms: $3x$, $2y$, and $-5$

## Coefficients

The **number** part of a term with a variable.

**Example:** In $5x$, the coefficient is $5$

## Like Terms

Terms with the **same variable** raised to the **same power**.

**Like terms:**
- $3x$ and $7x$
- $2y^2$ and $5y^2$

**NOT like terms:**
- $3x$ and $3y$ (different variables)
- $x$ and $x^2$ (different powers)

## Combining Like Terms

Add or subtract the coefficients, keep the variable part.

$$5x + 3x = 8x$$
$$7y - 2y = 5y$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Evaluate $2x + 7$ when $x = 4$.',
        solution: `Substitute $x = 4$:

$$2(4) + 7$$

$$= 8 + 7$$

$$= 15$$

**Answer:** $15$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Simplify: $5x + 3x - 2x$',
        solution: `All terms are like terms (all have variable $x$).

Combine by adding/subtracting coefficients:

$$5x + 3x - 2x = (5 + 3 - 2)x = 6x$$

**Answer:** $6x$`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Evaluate $x^2 - 3x + 5$ when $x = -2$.',
        solution: `Substitute $x = -2$:

$$(-2)^2 - 3(-2) + 5$$

**Step 1:** Calculate exponent
$$4 - 3(-2) + 5$$

**Step 2:** Multiply
$$4 - (-6) + 5$$

**Step 3:** Simplify (subtracting negative is adding)
$$4 + 6 + 5 = 15$$

**Answer:** $15$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What is a variable?', back: 'A letter that represents an unknown number' },
      { topicId: topic5.id, front: 'What are like terms?', back: 'Terms with the same variable raised to the same power' },
      { topicId: topic5.id, front: 'How do you combine like terms?', back: 'Add or subtract the coefficients and keep the variable part' }
    ]
  })

  console.log('✓ Created topic: Variables and Expressions (3 examples, 3 flashcards)')

  // Topic: One-Step Equations
  const topic6 = await prisma.topic.upsert({
    where: { slug: 'one-step-equations-prealgebra' },
    update: {},
    create: {
      slug: 'one-step-equations-prealgebra',
      title: 'Solving One-Step Equations',
      description: 'Using inverse operations to solve equations',
      order: 2,
      categoryId: introAlgebra.id,
      textContent: `# Solving One-Step Equations

## What is an Equation?

An equation is a statement that two expressions are equal.

**Example:** $x + 5 = 12$

## Inverse Operations

Operations that "undo" each other:
- **Addition** ↔ **Subtraction**
- **Multiplication** ↔ **Division**

## Solving Addition Equations

**Undo addition with subtraction**

$$x + 5 = 12$$
$$x + 5 - 5 = 12 - 5$$
$$x = 7$$

## Solving Subtraction Equations

**Undo subtraction with addition**

$$x - 3 = 10$$
$$x - 3 + 3 = 10 + 3$$
$$x = 13$$

## Solving Multiplication Equations

**Undo multiplication with division**

$$4x = 20$$
$$\\frac{4x}{4} = \\frac{20}{4}$$
$$x = 5$$

## Solving Division Equations

**Undo division with multiplication**

$$\\frac{x}{3} = 7$$
$$3 \\times \\frac{x}{3} = 7 \\times 3$$
$$x = 21$$

## Golden Rule

**Whatever you do to one side, do to the other side!**

This keeps the equation balanced.

## Checking Solutions

Substitute your answer back into the original equation.

If both sides are equal, you're correct!`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic6.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve: $x + 8 = 15$',
        solution: `Subtract 8 from both sides:

$$x + 8 - 8 = 15 - 8$$

$$x = 7$$

**Check:** $7 + 8 = 15$ ✓

**Answer:** $x = 7$`
      },
      {
        topicId: topic6.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Solve: $6x = 42$',
        solution: `Divide both sides by 6:

$$\\frac{6x}{6} = \\frac{42}{6}$$

$$x = 7$$

**Check:** $6(7) = 42$ ✓

**Answer:** $x = 7$`
      },
      {
        topicId: topic6.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $\\frac{x}{-5} = 9$',
        solution: `Multiply both sides by $-5$:

$$-5 \\times \\frac{x}{-5} = 9 \\times (-5)$$

$$x = -45$$

**Check:** $\\frac{-45}{-5} = 9$ ✓

**Answer:** $x = -45$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic6.id, front: 'What are inverse operations?', back: 'Operations that undo each other (addition ↔ subtraction, multiplication ↔ division)' },
      { topicId: topic6.id, front: 'How do you solve x + 5 = 12?', back: 'Subtract 5 from both sides: x = 7' },
      { topicId: topic6.id, front: 'What is the golden rule for solving equations?', back: 'Whatever you do to one side, do to the other side' }
    ]
  })

  console.log('✓ Created topic: Solving One-Step Equations (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added more Pre-Algebra topics!')
  console.log('   New categories: 2 (Ratios/Proportions/Percents, Introduction to Algebra)')
  console.log('   New topics: 6')
  console.log('   Total example problems added: 18')
  console.log('   Total flashcards added: 18')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
