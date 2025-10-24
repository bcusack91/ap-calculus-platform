import { prisma } from '../src/lib/prisma'

async function main() {
  console.log('Seeding Limits and Continuity section...')

  // Get or create the Limits category
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

  // Topic 1: Introduction to Limits
  const introToLimits = await prisma.topic.upsert({
    where: { slug: 'introduction-to-limits' },
    update: {},
    create: {
      slug: 'introduction-to-limits',
      title: 'Introduction to Limits',
      description: 'Understand what limits are and why they matter in calculus',
      order: 1,
      categoryId: limitsCategory.id,
      isPremium: false,
      textContent: `
# Introduction to Limits

## What is a Limit?

A **limit** describes the value that a function approaches as the input approaches a certain point. Limits are the foundation of calculus—they allow us to understand behavior at specific points and make precise the idea of "getting close to" a value.

## Intuitive Understanding

Imagine walking toward a wall. As you get closer and closer, you approach the wall—but you haven't necessarily touched it yet. That's the idea of a limit: where you're heading, not necessarily where you are.

## Notation

We write:

$$\\lim_{x \\to a} f(x) = L$$

This reads: "The limit of $f(x)$ as $x$ approaches $a$ is $L$."

## Key Ideas

1. **Limits describe behavior near a point**, not necessarily at the point
2. The function doesn't need to be defined at $a$ for the limit to exist
3. We care about what happens as we get arbitrarily close to $a$ from both sides

## A Simple Example

Consider $f(x) = 2x + 1$. What happens as $x$ approaches 3?

$$\\lim_{x \\to 3} (2x + 1) = 2(3) + 1 = 7$$

As $x$ gets closer to 3, $f(x)$ gets closer to 7.

## Why Limits Matter

Limits allow us to:
- Define derivatives (rates of change)
- Define integrals (accumulated change)
- Handle discontinuities
- Work with infinity
- Make calculus rigorous and precise
      `,
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: introToLimits.id,
        front: 'What does a limit describe?',
        back: 'A limit describes the value that a function approaches as the input approaches a certain point.',
        isPremium: false
      },
      {
        topicId: introToLimits.id,
        front: 'Does a function need to be defined at a point for the limit to exist there?',
        back: 'No! The limit is about behavior NEAR the point, not necessarily AT the point.',
        isPremium: false
      },
      {
        topicId: introToLimits.id,
        front: 'What are the two main applications of limits in calculus?',
        back: 'Derivatives (rates of change) and integrals (accumulated change).',
        isPremium: false
      }
    ]
  })

  // Topic 2: Evaluating Limits Graphically
  const graphicalLimits = await prisma.topic.upsert({
    where: { slug: 'evaluating-limits-graphically' },
    update: {},
    create: {
      slug: 'evaluating-limits-graphically',
      title: 'Evaluating Limits Graphically',
      description: 'Learn to find limits by reading graphs and understanding visual behavior',
      order: 2,
      categoryId: limitsCategory.id,
      isPremium: false,
      textContent: `
# Evaluating Limits Graphically

## Reading Limits from Graphs

When you have a graph of a function, you can find limits by observing where the function is heading as $x$ approaches a specific value.

## The Process

To find $\\lim_{x \\to a} f(x)$ from a graph:

1. **Locate $x = a$** on the horizontal axis
2. **Trace from the left**: Follow the curve as $x$ approaches $a$ from the left ($x \\to a^-$)
3. **Trace from the right**: Follow the curve as $x$ approaches $a$ from the right ($x \\to a^+$)
4. **Check if they match**: If both sides approach the same $y$-value, that's your limit!

## Important Notes

- The limit exists if and only if both one-sided limits exist and are equal
- It doesn't matter if there's a hole or different value AT $x = a$
- Look at the trend of the curve, not individual points

## Common Graph Scenarios

### Scenario 1: Continuous Function
If the function is continuous at $a$, the limit equals the function value:
$$\\lim_{x \\to a} f(x) = f(a)$$

### Scenario 2: Removable Discontinuity (Hole)
Even if there's a hole at $x = a$, the limit can still exist. The limit is where the hole "should be" filled.

### Scenario 3: Jump Discontinuity
If the function jumps from one value to another at $x = a$, the left and right limits differ, so the limit does not exist.

### Scenario 4: Infinite Limit
If the function grows without bound as $x \\to a$, we say the limit is infinite (or doesn't exist as a real number).

## Practice Tip

Always check BOTH sides of the point. If they don't agree, the limit does not exist!
      `,
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: graphicalLimits.id,
        front: 'What must be true for a limit to exist at a point?',
        back: 'The left-hand limit and right-hand limit must both exist and be equal.',
        isPremium: false
      },
      {
        topicId: graphicalLimits.id,
        front: 'If a function has a hole at x = 3, can the limit as x → 3 exist?',
        back: 'Yes! The limit is about where the function is heading, not where it actually is.',
        hint: 'Think removable discontinuity',
        isPremium: false
      },
      {
        topicId: graphicalLimits.id,
        front: 'What does a jump discontinuity tell you about the limit?',
        back: 'The limit does not exist (DNE) because the left and right limits are different.',
        isPremium: false
      }
    ]
  })

  // Topic 3: One-Sided Limits
  const oneSidedLimits = await prisma.topic.upsert({
    where: { slug: 'one-sided-limits' },
    update: {},
    create: {
      slug: 'one-sided-limits',
      title: 'One-Sided Limits',
      description: 'Understand left-hand and right-hand limits and when to use them',
      order: 3,
      categoryId: limitsCategory.id,
      isPremium: false,
      textContent: `
# One-Sided Limits

## What Are One-Sided Limits?

Sometimes we only care about what happens as $x$ approaches a value from one direction—either from the left or from the right.

## Notation

**Left-hand limit** (approaching from the left):
$$\\lim_{x \\to a^-} f(x)$$

**Right-hand limit** (approaching from the right):
$$\\lim_{x \\to a^+} f(x)$$

The superscript minus ($-$) means "from the left" and plus ($+$) means "from the right."

## The Connection to Two-Sided Limits

For a regular (two-sided) limit to exist:
$$\\lim_{x \\to a} f(x) = L$$

Both one-sided limits must exist and equal $L$:
$$\\lim_{x \\to a^-} f(x) = L \\quad \\text{and} \\quad \\lim_{x \\to a^+} f(x) = L$$

## When Are One-Sided Limits Useful?

1. **Piecewise Functions**: Different formulas on each side of a point
2. **Absolute Value Functions**: Behavior changes at certain points
3. **Jump Discontinuities**: Different values on each side
4. **Square Roots**: Only defined for non-negative values
5. **Rational Functions**: Vertical asymptotes

## Example: Piecewise Function

$$f(x) = \\begin{cases} x^2 & \\text{if } x < 2 \\\\ 3x - 1 & \\text{if } x \\geq 2 \\end{cases}$$

Find $\\lim_{x \\to 2} f(x)$:

**Left-hand limit**: $\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^-} x^2 = 4$

**Right-hand limit**: $\\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^+} (3x-1) = 5$

Since $4 \\neq 5$, the limit **does not exist** (DNE).

## Key Insight

One-sided limits help us understand exactly where and why a limit might fail to exist!
      `,
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: oneSidedLimits.id,
        question: `Given $f(x) = \\begin{cases} 2x + 1 & \\text{if } x < 3 \\\\ x^2 & \\text{if } x \\geq 3 \\end{cases}$, find the left and right-hand limits as $x \\to 3$.`,
        solution: `
**Left-hand limit** (use $2x + 1$):
$$\\lim_{x \\to 3^-} f(x) = 2(3) + 1 = 7$$

**Right-hand limit** (use $x^2$):
$$\\lim_{x \\to 3^+} f(x) = 3^2 = 9$$

Since $7 \\neq 9$, $\\lim_{x \\to 3} f(x)$ **does not exist**.
        `,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: oneSidedLimits.id,
        front: 'What does the notation $\\lim_{x \\to 5^-} f(x)$ mean?',
        back: 'The limit of f(x) as x approaches 5 from the left (values less than 5).',
        isPremium: false
      },
      {
        topicId: oneSidedLimits.id,
        front: 'For a two-sided limit to exist, what must be true about one-sided limits?',
        back: 'Both the left and right-hand limits must exist and be equal.',
        isPremium: false
      }
    ]
  })

  // Topic 4: Evaluating Limits Algebraically
  const algebraicLimits = await prisma.topic.upsert({
    where: { slug: 'evaluating-limits-algebraically' },
    update: {},
    create: {
      slug: 'evaluating-limits-algebraically',
      title: 'Evaluating Limits Algebraically',
      description: 'Master algebraic techniques for finding limits including direct substitution',
      order: 4,
      categoryId: limitsCategory.id,
      isPremium: false,
      textContent: `
# Evaluating Limits Algebraically

## Direct Substitution

The simplest method! If the function is continuous at $a$, just plug in:

$$\\lim_{x \\to a} f(x) = f(a)$$

This works for:
- Polynomials
- Rational functions (when denominator ≠ 0)
- Radicals (when defined)
- Trig functions (at most points)

## Example: Direct Substitution

$$\\lim_{x \\to 2} (3x^2 - 5x + 1)$$

Just substitute $x = 2$:
$$= 3(2)^2 - 5(2) + 1 = 12 - 10 + 1 = 3$$

## When Direct Substitution Fails

If you get:
- $\\frac{0}{0}$ → **Indeterminate form** (use algebra!)
- $\\frac{c}{0}$ where $c \\neq 0$ → **Infinite limit or DNE**
- $\\frac{c}{d}$ where $d \\neq 0$ → **That's your answer!**

## Properties of Limits

If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$:

**Sum/Difference**: $\\lim_{x \\to a} [f(x) \\pm g(x)] = L \\pm M$

**Product**: $\\lim_{x \\to a} [f(x) \\cdot g(x)] = L \\cdot M$

**Quotient**: $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}$ (if $M \\neq 0$)

**Constant Multiple**: $\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot L$

**Power**: $\\lim_{x \\to a} [f(x)]^n = L^n$

## Strategy

1. **Try direct substitution first**
2. If you get a real number → Done!
3. If you get $\\frac{0}{0}$ → Use algebraic techniques (next topic!)
4. If you get $\\frac{c}{0}$ → Investigate the limit more carefully
      `,
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: algebraicLimits.id,
        question: 'Evaluate $\\lim_{x \\to 4} (x^2 - 3x + 5)$',
        solution: `
This is a polynomial, so use direct substitution:

$$\\lim_{x \\to 4} (x^2 - 3x + 5) = 4^2 - 3(4) + 5$$
$$= 16 - 12 + 5 = 9$$

**Answer: 9**
        `,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: algebraicLimits.id,
        question: 'Evaluate $\\lim_{x \\to 2} \\frac{x^2 + 3x - 10}{x - 2}$',
        solution: `
Direct substitution gives $\\frac{0}{0}$ (indeterminate), so we can't use it directly.

This signals we need algebraic manipulation (we'll learn techniques for this in the next topic!).

For now, recognize that $\\frac{0}{0}$ means more work is needed.
        `,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: algebraicLimits.id,
        front: 'When can you use direct substitution to evaluate a limit?',
        back: 'When the function is continuous at that point (no holes, jumps, or asymptotes).',
        isPremium: false
      },
      {
        topicId: algebraicLimits.id,
        front: 'What does the indeterminate form 0/0 tell you?',
        back: 'You cannot use direct substitution. You need to use algebraic techniques to simplify first.',
        isPremium: false
      },
      {
        topicId: algebraicLimits.id,
        front: 'State the limit sum rule',
        back: 'lim[f(x) + g(x)] = lim f(x) + lim g(x)',
        isPremium: false
      }
    ]
  })

  // Topic 5: Indeterminate Forms and Factoring
  const indeterminateForms = await prisma.topic.upsert({
    where: { slug: 'indeterminate-forms-factoring' },
    update: {},
    create: {
      slug: 'indeterminate-forms-factoring',
      title: 'Indeterminate Forms and Factoring',
      description: 'Resolve 0/0 indeterminate forms using factoring and cancellation',
      order: 5,
      categoryId: limitsCategory.id,
      isPremium: false,
      textContent: `
# Indeterminate Forms and Factoring

## The Problem: 0/0

When direct substitution gives $\\frac{0}{0}$, we have an **indeterminate form**. This doesn't mean the limit doesn't exist—it means we need to do more work!

## The Solution: Factor and Cancel

The key idea: Factor both numerator and denominator, cancel common factors, then try direct substitution again.

## Step-by-Step Process

1. Try direct substitution
2. If you get $\\frac{0}{0}$, factor the numerator and denominator
3. Cancel common factors
4. Try direct substitution again

## Example 1: Basic Factoring

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$

**Step 1**: Direct substitution gives $\\frac{0}{0}$ ✗

**Step 2**: Factor the numerator:
$$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}$$

**Step 3**: Cancel $(x-2)$:
$$\\lim_{x \\to 2} (x + 2)$$

**Step 4**: Direct substitution:
$$= 2 + 2 = 4$$

## Example 2: Trinomial Factoring

$$\\lim_{x \\to 3} \\frac{x^2 - 5x + 6}{x - 3}$$

Factor numerator: $x^2 - 5x + 6 = (x-2)(x-3)$

$$\\lim_{x \\to 3} \\frac{(x-2)(x-3)}{x - 3} = \\lim_{x \\to 3} (x-2) = 1$$

## Common Factoring Patterns

**Difference of squares**: $a^2 - b^2 = (a-b)(a+b)$

**Perfect square trinomial**: $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$

**Trinomial**: $x^2 + bx + c$ → Find two numbers that multiply to $c$ and add to $b$

## Why Does This Work?

When we cancel $(x-a)$, we're essentially "filling the hole" in the function. The limit cares about values near $a$, not at $a$, so canceling is valid!
      `,
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: indeterminateForms.id,
        question: 'Evaluate $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$',
        solution: `
**Direct substitution**: $\\frac{0}{0}$ → indeterminate

**Factor numerator** (difference of squares):
$$\\lim_{x \\to 5} \\frac{(x-5)(x+5)}{x - 5}$$

**Cancel** $(x-5)$:
$$\\lim_{x \\to 5} (x + 5)$$

**Direct substitution**:
$$= 5 + 5 = 10$$

**Answer: 10**
        `,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: indeterminateForms.id,
        question: 'Evaluate $\\lim_{x \\to -2} \\frac{x^2 + 5x + 6}{x + 2}$',
        solution: `
**Direct substitution**: $\\frac{0}{0}$ → indeterminate

**Factor numerator**: Find factors of 6 that add to 5: 2 and 3
$$x^2 + 5x + 6 = (x+2)(x+3)$$

**Rewrite and cancel**:
$$\\lim_{x \\to -2} \\frac{(x+2)(x+3)}{x + 2} = \\lim_{x \\to -2} (x+3)$$

**Direct substitution**:
$$= -2 + 3 = 1$$

**Answer: 1**
        `,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: indeterminateForms.id,
        front: 'What should you do when you get 0/0?',
        back: 'Factor the numerator and denominator, cancel common factors, then try direct substitution again.',
        isPremium: false
      },
      {
        topicId: indeterminateForms.id,
        front: 'Factor: $x^2 - 9$',
        back: '$(x-3)(x+3)$ (difference of squares)',
        isPremium: false
      },
      {
        topicId: indeterminateForms.id,
        front: 'Why can we cancel common factors when finding limits?',
        back: 'The limit cares about values NEAR the point, not AT it, so canceling the factor that causes 0/0 is valid.',
        isPremium: false
      }
    ]
  })

  // Topic 6: Rationalizing Techniques
  const rationalizing = await prisma.topic.upsert({
    where: { slug: 'rationalizing-techniques' },
    update: {},
    create: {
      slug: 'rationalizing-techniques',
      title: 'Rationalizing Techniques',
      description: 'Use conjugates to evaluate limits involving square roots',
      order: 6,
      categoryId: limitsCategory.id,
      isPremium: false,
      textContent: `
# Rationalizing Techniques

## When to Rationalize

When you have square roots in a limit that produces $\\frac{0}{0}$, factoring won't help. Instead, use **rationalizing** with conjugates.

## The Conjugate Method

The conjugate of $a + b$ is $a - b$ (flip the sign between terms).

**Key property**: $(a+b)(a-b) = a^2 - b^2$

This eliminates the square root!

## Standard Approach

1. Identify the expression with the square root
2. Multiply numerator and denominator by the conjugate
3. Simplify using $(a+b)(a-b) = a^2 - b^2$
4. Cancel common factors
5. Evaluate the limit

## Example 1: Square Root in Numerator

$$\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$$

**Direct substitution**: $\\frac{0}{0}$ ✗

**Multiply by conjugate** $\\sqrt{x+4} + 2$:

$$\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x} \\cdot \\frac{\\sqrt{x+4} + 2}{\\sqrt{x+4} + 2}$$

**Simplify numerator**:
$$(\\sqrt{x+4} - 2)(\\sqrt{x+4} + 2) = (x+4) - 4 = x$$

$$\\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x+4} + 2)}$$

**Cancel $x$**:
$$\\lim_{x \\to 0} \\frac{1}{\\sqrt{x+4} + 2}$$

**Direct substitution**:
$$= \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}$$

## Example 2: Square Root in Denominator

$$\\lim_{h \\to 0} \\frac{h}{\\sqrt{h+1} - 1}$$

Multiply by conjugate of denominator:

$$\\lim_{h \\to 0} \\frac{h}{\\sqrt{h+1} - 1} \\cdot \\frac{\\sqrt{h+1} + 1}{\\sqrt{h+1} + 1}$$

$$= \\lim_{h \\to 0} \\frac{h(\\sqrt{h+1} + 1)}{h} = \\lim_{h \\to 0} (\\sqrt{h+1} + 1) = 2$$

## Remember

Conjugates turn $a^2 - b^2$ differences into factored forms, eliminating radicals!
      `,
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rationalizing.id,
        question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+9} - 3}{x}$',
        solution: `
**Multiply by conjugate**:
$$\\lim_{x \\to 0} \\frac{\\sqrt{x+9} - 3}{x} \\cdot \\frac{\\sqrt{x+9} + 3}{\\sqrt{x+9} + 3}$$

**Simplify numerator**:
$$= \\lim_{x \\to 0} \\frac{(x+9) - 9}{x(\\sqrt{x+9} + 3)} = \\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x+9} + 3)}$$

**Cancel $x$**:
$$= \\lim_{x \\to 0} \\frac{1}{\\sqrt{x+9} + 3}$$

**Direct substitution**:
$$= \\frac{1}{\\sqrt{9} + 3} = \\frac{1}{6}$$

**Answer: 1/6**
        `,
        difficulty: 'MEDIUM',
        order: 1,
        isPremium: false
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rationalizing.id,
        front: 'What is the conjugate of $\\sqrt{x} + 5$?',
        back: '$\\sqrt{x} - 5$',
        isPremium: false
      },
      {
        topicId: rationalizing.id,
        front: 'When should you use the conjugate method?',
        back: 'When you have square roots in a limit that produces 0/0 and factoring won\'t work.',
        isPremium: false
      },
      {
        topicId: rationalizing.id,
        front: 'What is $(\\sqrt{x+h} - \\sqrt{x})(\\sqrt{x+h} + \\sqrt{x})$?',
        back: '$(x+h) - x = h$',
        hint: 'Difference of squares: $(a-b)(a+b) = a^2 - b^2$',
        isPremium: false
      }
    ]
  })

  console.log('✅ Limits and Continuity section expanded successfully!')
  console.log('Created 6 comprehensive topics with examples and flashcards')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
