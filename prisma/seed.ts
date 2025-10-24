import { prisma } from '../src/lib/prisma'

async function main() {
  console.log('Seeding database...')

  // Create categories
  const limitsCategory = await prisma.category.upsert({
    where: { slug: 'limits' },
    update: {},
    create: {
      slug: 'limits',
      name: 'Limits and Continuity',
      description: 'Understanding limits, continuity, and the foundations of calculus',
      order: 1,
      icon: '∞'
    }
  })

  const derivativesCategory = await prisma.category.upsert({
    where: { slug: 'derivatives' },
    update: {},
    create: {
      slug: 'derivatives',
      name: 'Derivatives',
      description: 'Differentiation rules, techniques, and applications',
      order: 2,
      icon: 'd/dx'
    }
  })

  // Create topics for Limits
  const limitDefinition = await prisma.topic.upsert({
    where: { slug: 'limit-definition' },
    update: {},
    create: {
      slug: 'limit-definition',
      title: 'Definition of a Limit',
      description: 'Learn the formal definition of limits and how to evaluate them',
      order: 1,
      categoryId: limitsCategory.id,
      isPremium: false,
      textContent: `
# Definition of a Limit

## Introduction

The concept of a limit is fundamental to calculus. A limit describes the value that a function approaches as the input approaches some value.

## Formal Definition

We say that the limit of $f(x)$ as $x$ approaches $a$ is $L$, written as:

$$\\lim_{x \\to a} f(x) = L$$

This means that as $x$ gets arbitrarily close to $a$ (but not equal to $a$), $f(x)$ gets arbitrarily close to $L$.

## Intuitive Understanding

Think of a limit as asking: "Where is this function heading as we get closer and closer to a specific x-value?"

## Examples

### Example 1: Simple Polynomial

$$\\lim_{x \\to 2} (3x + 1) = 3(2) + 1 = 7$$

For continuous functions like polynomials, we can often just substitute the value directly.

### Example 2: With Algebra

$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$

We can't substitute $x = 3$ directly (we'd get $0/0$). Instead, factor:

$$\\lim_{x \\to 3} \\frac{(x+3)(x-3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6$$

## Key Points

1. The limit is about the behavior **near** a point, not necessarily at the point
2. A function can have a limit at a point even if it's not defined there
3. Limits form the foundation for derivatives and integrals
      `,
    }
  })

  // Create example problems for limit definition
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: limitDefinition.id,
        question: 'Evaluate $\\lim_{x \\to 5} (2x - 3)$',
        solution: `
Since this is a polynomial, we can substitute directly:

$$\\lim_{x \\to 5} (2x - 3) = 2(5) - 3 = 10 - 3 = 7$$

**Answer: 7**
        `,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: limitDefinition.id,
        question: 'Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$',
        solution: `
Direct substitution gives $\\frac{0}{0}$ (indeterminate form), so we need to simplify:

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x+2)(x-2)}{x - 2}$$

Cancel the $(x-2)$ terms:

$$= \\lim_{x \\to 2} (x+2) = 2 + 2 = 4$$

**Answer: 4**
        `,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      }
    ]
  })

  // Create flashcards for limit definition
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: limitDefinition.id,
        front: 'What does $\\lim_{x \\to a} f(x) = L$ mean?',
        back: 'As $x$ approaches $a$, $f(x)$ approaches $L$. The function value gets arbitrarily close to $L$ as $x$ gets arbitrarily close to $a$.',
        isPremium: false
      },
      {
        topicId: limitDefinition.id,
        front: 'Can a function have a limit at a point where it is not defined?',
        back: 'Yes! A limit is about the behavior near a point, not necessarily at the point itself.',
        hint: 'Think about removable discontinuities',
        isPremium: false
      },
      {
        topicId: limitDefinition.id,
        front: 'What is the first step when evaluating a limit?',
        back: 'Try direct substitution. If you get a real number, that\'s your limit. If you get 0/0 or ∞/∞, you need to use algebra or other techniques.',
        isPremium: false
      }
    ]
  })

  // Create a derivative topic
  const powerRule = await prisma.topic.upsert({
    where: { slug: 'power-rule' },
    update: {},
    create: {
      slug: 'power-rule',
      title: 'The Power Rule',
      description: 'Master the fundamental rule for differentiating polynomial functions',
      order: 1,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# The Power Rule

## Introduction

The power rule is one of the most fundamental and useful differentiation rules in calculus.

## The Rule

If $f(x) = x^n$ where $n$ is any real number, then:

$$f'(x) = nx^{n-1}$$

## How to Use It

1. Multiply by the exponent
2. Subtract 1 from the exponent

## Examples

### Example 1: Basic Application

$$\\frac{d}{dx}(x^5) = 5x^4$$

### Example 2: With Coefficients

$$\\frac{d}{dx}(3x^7) = 3 \\cdot 7x^6 = 21x^6$$

### Example 3: Negative Exponents

$$\\frac{d}{dx}(x^{-2}) = -2x^{-3} = \\frac{-2}{x^3}$$

## Combined with Other Rules

The power rule works great with the sum rule:

$$\\frac{d}{dx}(x^3 + 2x^2 - 5x + 7) = 3x^2 + 4x - 5$$
      `,
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: powerRule.id,
        front: 'State the Power Rule',
        back: 'If $f(x) = x^n$, then $f\'(x) = nx^{n-1}$',
        isPremium: false
      },
      {
        topicId: powerRule.id,
        front: 'Find the derivative of $x^4$',
        back: '$4x^3$',
        hint: 'Multiply by the exponent, subtract 1',
        isPremium: false
      },
      {
        topicId: powerRule.id,
        front: 'Find the derivative of $5x^3$',
        back: '$15x^2$',
        isPremium: false
      }
    ]
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
