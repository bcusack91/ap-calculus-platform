import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Advanced Integration (BC) micro-lessons - Part 1...')

  // Create Advanced Integration category (BC content)
  const advancedIntegrationCategory = await prisma.category.upsert({
    where: { slug: 'advanced-integration' },
    update: {},
    create: {
      slug: 'advanced-integration',
      name: 'Advanced Integration (BC)',
      description: 'Advanced integration techniques for Calculus BC',
      order: 5,
      icon: '∫∫',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'trig-substitution',
          'partial-fractions',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Trigonometric Substitution
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'trig-substitution',
      title: 'Trigonometric Substitution',
      description: 'Using trig identities to simplify difficult integrals',
      order: 1,
      categoryId: advancedIntegrationCategory.id,
      isPremium: true,
      textContent: `
# 🔺 Trigonometric Substitution

## The Problem

How do we integrate expressions with square roots like $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, or $\\sqrt{x^2 - a^2}$?

**Example**: $\\int \\frac{1}{\\sqrt{4-x^2}}\\,dx$

> **💡 Key Idea**: Use trig substitutions to eliminate the square root using Pythagorean identities!

---

## The Three Cases

### Case 1: $\\sqrt{a^2 - x^2}$

**Substitution**: $x = a\\sin\\theta$

**Why**: $a^2 - x^2 = a^2 - a^2\\sin^2\\theta = a^2(1 - \\sin^2\\theta) = a^2\\cos^2\\theta$

**Then**: $\\sqrt{a^2 - x^2} = a\\cos\\theta$ (assuming $\\cos\\theta > 0$)

**Also**: $dx = a\\cos\\theta\\,d\\theta$

---

### Case 2: $\\sqrt{a^2 + x^2}$

**Substitution**: $x = a\\tan\\theta$

**Why**: $a^2 + x^2 = a^2 + a^2\\tan^2\\theta = a^2(1 + \\tan^2\\theta) = a^2\\sec^2\\theta$

**Then**: $\\sqrt{a^2 + x^2} = a\\sec\\theta$ (assuming $\\sec\\theta > 0$)

**Also**: $dx = a\\sec^2\\theta\\,d\\theta$

---

### Case 3: $\\sqrt{x^2 - a^2}$

**Substitution**: $x = a\\sec\\theta$

**Why**: $x^2 - a^2 = a^2\\sec^2\\theta - a^2 = a^2(\\sec^2\\theta - 1) = a^2\\tan^2\\theta$

**Then**: $\\sqrt{x^2 - a^2} = a\\tan\\theta$ (assuming $\\tan\\theta > 0$)

**Also**: $dx = a\\sec\\theta\\tan\\theta\\,d\\theta$

---

## Quick Reference Table

| Expression | Substitution | Identity Used | Result |
|------------|-------------|---------------|--------|
| $\\sqrt{a^2 - x^2}$ | $x = a\\sin\\theta$ | $\\cos^2\\theta = 1 - \\sin^2\\theta$ | $a\\cos\\theta$ |
| $\\sqrt{a^2 + x^2}$ | $x = a\\tan\\theta$ | $\\sec^2\\theta = 1 + \\tan^2\\theta$ | $a\\sec\\theta$ |
| $\\sqrt{x^2 - a^2}$ | $x = a\\sec\\theta$ | $\\tan^2\\theta = \\sec^2\\theta - 1$ | $a\\tan\\theta$ |

---

## Example 1: Case 1 - $\\sqrt{a^2 - x^2}$

Evaluate $\\int \\frac{1}{\\sqrt{4-x^2}}\\,dx$

**Step 1: Identify the form**

$\\sqrt{4-x^2} = \\sqrt{2^2 - x^2}$, so $a = 2$

This is Case 1!

---

**Step 2: Make substitution**

Let $x = 2\\sin\\theta$

Then $dx = 2\\cos\\theta\\,d\\theta$

And $\\sqrt{4-x^2} = \\sqrt{4 - 4\\sin^2\\theta} = 2\\sqrt{1-\\sin^2\\theta} = 2\\cos\\theta$

---

**Step 3: Rewrite integral**

$$\\int \\frac{1}{\\sqrt{4-x^2}}\\,dx = \\int \\frac{1}{2\\cos\\theta} \\cdot 2\\cos\\theta\\,d\\theta$$

$$= \\int 1\\,d\\theta = \\theta + C$$

---

**Step 4: Convert back to x**

From $x = 2\\sin\\theta$, we get $\\sin\\theta = \\frac{x}{2}$

Therefore $\\theta = \\arcsin\\left(\\frac{x}{2}\\right)$

**Answer**: $\\arcsin\\left(\\frac{x}{2}\\right) + C$

---

## Example 2: Case 2 - $\\sqrt{a^2 + x^2}$

Evaluate $\\int \\frac{x^2}{\\sqrt{1+x^2}}\\,dx$

**Step 1: Identify the form**

$\\sqrt{1+x^2} = \\sqrt{1^2 + x^2}$, so $a = 1$

This is Case 2!

---

**Step 2: Make substitution**

Let $x = \\tan\\theta$

Then $dx = \\sec^2\\theta\\,d\\theta$

And $\\sqrt{1+x^2} = \\sqrt{1 + \\tan^2\\theta} = \\sec\\theta$

---

**Step 3: Rewrite integral**

$$\\int \\frac{x^2}{\\sqrt{1+x^2}}\\,dx = \\int \\frac{\\tan^2\\theta}{\\sec\\theta} \\cdot \\sec^2\\theta\\,d\\theta$$

$$= \\int \\tan^2\\theta \\cdot \\sec\\theta\\,d\\theta$$

---

**Step 4: Use identity $\\tan^2\\theta = \\sec^2\\theta - 1$**

$$= \\int (\\sec^2\\theta - 1)\\sec\\theta\\,d\\theta$$

$$= \\int (\\sec^3\\theta - \\sec\\theta)\\,d\\theta$$

---

**Step 5: Integrate**

These are standard integrals (using integration by parts for $\\sec^3\\theta$):

$$\\int \\sec^3\\theta\\,d\\theta = \\frac{1}{2}(\\sec\\theta\\tan\\theta + \\ln|\\sec\\theta + \\tan\\theta|) + C$$

$$\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$$

$$= \\frac{1}{2}\\sec\\theta\\tan\\theta + \\frac{1}{2}\\ln|\\sec\\theta + \\tan\\theta| - \\ln|\\sec\\theta + \\tan\\theta| + C$$

$$= \\frac{1}{2}\\sec\\theta\\tan\\theta - \\frac{1}{2}\\ln|\\sec\\theta + \\tan\\theta| + C$$

---

**Step 6: Convert back to x**

From $x = \\tan\\theta$:
- $\\tan\\theta = x$
- $\\sec\\theta = \\sqrt{1+x^2}$

$$= \\frac{1}{2}\\sqrt{1+x^2} \\cdot x - \\frac{1}{2}\\ln|\\sqrt{1+x^2} + x| + C$$

**Answer**: $\\frac{x\\sqrt{1+x^2}}{2} - \\frac{1}{2}\\ln|\\sqrt{1+x^2} + x| + C$

---

## Example 3: Case 3 - $\\sqrt{x^2 - a^2}$

Evaluate $\\int \\sqrt{x^2 - 9}\\,dx$

**Step 1: Identify the form**

$\\sqrt{x^2 - 9} = \\sqrt{x^2 - 3^2}$, so $a = 3$

This is Case 3!

---

**Step 2: Make substitution**

Let $x = 3\\sec\\theta$

Then $dx = 3\\sec\\theta\\tan\\theta\\,d\\theta$

And $\\sqrt{x^2-9} = \\sqrt{9\\sec^2\\theta - 9} = 3\\sqrt{\\sec^2\\theta - 1} = 3\\tan\\theta$

---

**Step 3: Rewrite integral**

$$\\int \\sqrt{x^2-9}\\,dx = \\int 3\\tan\\theta \\cdot 3\\sec\\theta\\tan\\theta\\,d\\theta$$

$$= 9\\int \\tan^2\\theta\\sec\\theta\\,d\\theta$$

This is the same type as Example 2!

$$= 9\\int (\\sec^2\\theta - 1)\\sec\\theta\\,d\\theta$$

$$= 9\\left[\\frac{1}{2}\\sec\\theta\\tan\\theta - \\frac{1}{2}\\ln|\\sec\\theta + \\tan\\theta|\\right] + C$$

---

**Step 4: Convert back to x**

From $x = 3\\sec\\theta$:
- $\\sec\\theta = \\frac{x}{3}$
- $\\tan\\theta = \\sqrt{\\sec^2\\theta - 1} = \\sqrt{\\frac{x^2}{9} - 1} = \\frac{\\sqrt{x^2-9}}{3}$

$$= \\frac{9}{2} \\cdot \\frac{x}{3} \\cdot \\frac{\\sqrt{x^2-9}}{3} - \\frac{9}{2}\\ln\\left|\\frac{x}{3} + \\frac{\\sqrt{x^2-9}}{3}\\right| + C$$

$$= \\frac{x\\sqrt{x^2-9}}{2} - \\frac{9}{2}\\ln\\left|\\frac{x + \\sqrt{x^2-9}}{3}\\right| + C$$

**Answer**: $\\frac{x\\sqrt{x^2-9}}{2} - \\frac{9}{2}\\ln|x + \\sqrt{x^2-9}| + C'$ (absorbing constants into C)

---

## Drawing the Reference Triangle

To convert back from $\\theta$ to $x$, draw a reference triangle!

### For $x = a\\sin\\theta$:

Triangle with:
- Opposite = $x$
- Hypotenuse = $a$
- Adjacent = $\\sqrt{a^2 - x^2}$

Then: $\\cos\\theta = \\frac{\\sqrt{a^2-x^2}}{a}$, $\\tan\\theta = \\frac{x}{\\sqrt{a^2-x^2}}$

---

### For $x = a\\tan\\theta$:

Triangle with:
- Opposite = $x$
- Adjacent = $a$
- Hypotenuse = $\\sqrt{a^2 + x^2}$

Then: $\\sin\\theta = \\frac{x}{\\sqrt{a^2+x^2}}$, $\\sec\\theta = \\frac{\\sqrt{a^2+x^2}}{a}$

---

### For $x = a\\sec\\theta$:

Triangle with:
- Hypotenuse = $x$
- Adjacent = $a$
- Opposite = $\\sqrt{x^2 - a^2}$

Then: $\\tan\\theta = \\frac{\\sqrt{x^2-a^2}}{a}$, $\\sin\\theta = \\frac{\\sqrt{x^2-a^2}}{x}$

---

## When to Use Trig Substitution

### Use when you see:

1. $\\sqrt{a^2 - x^2}$ or $(a^2 - x^2)^{n/2}$
2. $\\sqrt{a^2 + x^2}$ or $(a^2 + x^2)^{n/2}$
3. $\\sqrt{x^2 - a^2}$ or $(x^2 - a^2)^{n/2}$

### Don't use when:

- Regular u-substitution works
- The expression can be simplified algebraically first
- Integration by parts is simpler

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Substitution

$\\sqrt{4 + x^2}$ → Use $x = 2\\tan\\theta$, NOT $x = 2\\sin\\theta$!

Match the pattern carefully!

---

### Mistake 2: Forgetting to Convert Back

Your final answer must be in terms of **x**, not $\\theta$!

Use the reference triangle or inverse trig functions.

---

### Mistake 3: Sign Errors

When taking square roots:
$$\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$$

Usually we assume the appropriate range for $\\theta$ where the trig function is positive.

---

### Mistake 4: Forgetting dx

When substituting $x = a\\sin\\theta$, don't forget:
$$dx = a\\cos\\theta\\,d\\theta$$

---

## Completing the Square First

Sometimes you need to complete the square before using trig substitution!

**Example**: $\\int \\frac{1}{\\sqrt{2x - x^2}}\\,dx$

Complete the square:
$$2x - x^2 = -(x^2 - 2x) = -(x^2 - 2x + 1 - 1) = -(x-1)^2 + 1 = 1 - (x-1)^2$$

Now it's in the form $a^2 - u^2$ with $u = x-1$ and $a = 1$.

---

## Standard Trig Integrals to Know

$$\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$$

$$\\int \\sec^2\\theta\\,d\\theta = \\tan\\theta + C$$

$$\\int \\sec^3\\theta\\,d\\theta = \\frac{1}{2}(\\sec\\theta\\tan\\theta + \\ln|\\sec\\theta + \\tan\\theta|) + C$$

$$\\int \\tan\\theta\\,d\\theta = -\\ln|\\cos\\theta| + C = \\ln|\\sec\\theta| + C$$

---

## 📝 Practice Strategy

1. **Identify the pattern**: $a^2 - x^2$, $a^2 + x^2$, or $x^2 - a^2$
2. **Complete the square** if necessary
3. **Choose substitution** from the table
4. **Calculate dx** (derivative of substitution)
5. **Simplify** the square root using Pythagorean identity
6. **Integrate** with respect to $\\theta$
7. **Draw reference triangle** to convert back
8. **Express answer in terms of x**
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\int \\frac{x^2}{\\sqrt{9-x^2}}\\,dx$ using trigonometric substitution.',
            solution: `**Step 1: Identify the form**

$\\sqrt{9-x^2} = \\sqrt{3^2 - x^2}$ → Case 1, use $x = 3\\sin\\theta$

---

**Step 2: Make substitution**

$x = 3\\sin\\theta$, $dx = 3\\cos\\theta\\,d\\theta$

$\\sqrt{9-x^2} = 3\\cos\\theta$

$x^2 = 9\\sin^2\\theta$

---

**Step 3: Rewrite integral**

$$\\int \\frac{x^2}{\\sqrt{9-x^2}}\\,dx = \\int \\frac{9\\sin^2\\theta}{3\\cos\\theta} \\cdot 3\\cos\\theta\\,d\\theta$$

$$= \\int 9\\sin^2\\theta\\,d\\theta$$

---

**Step 4: Use identity $\\sin^2\\theta = \\frac{1-\\cos 2\\theta}{2}$**

$$= 9\\int \\frac{1-\\cos 2\\theta}{2}\\,d\\theta$$

$$= \\frac{9}{2}\\int (1-\\cos 2\\theta)\\,d\\theta$$

$$= \\frac{9}{2}\\left(\\theta - \\frac{\\sin 2\\theta}{2}\\right) + C$$

$$= \\frac{9\\theta}{2} - \\frac{9\\sin 2\\theta}{4} + C$$

---

**Step 5: Use $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$**

$$= \\frac{9\\theta}{2} - \\frac{9(2\\sin\\theta\\cos\\theta)}{4} + C$$

$$= \\frac{9\\theta}{2} - \\frac{9\\sin\\theta\\cos\\theta}{2} + C$$

---

**Step 6: Convert back to x**

From $x = 3\\sin\\theta$: $\\sin\\theta = \\frac{x}{3}$, $\\theta = \\arcsin\\frac{x}{3}$

$\\cos\\theta = \\frac{\\sqrt{9-x^2}}{3}$

$$= \\frac{9}{2}\\arcsin\\frac{x}{3} - \\frac{9}{2} \\cdot \\frac{x}{3} \\cdot \\frac{\\sqrt{9-x^2}}{3} + C$$

$$= \\frac{9}{2}\\arcsin\\frac{x}{3} - \\frac{x\\sqrt{9-x^2}}{2} + C$$

**Answer**: $\\frac{9}{2}\\arcsin\\frac{x}{3} - \\frac{x\\sqrt{9-x^2}}{2} + C$`,
            difficulty: Difficulty.HARD,
            order: 1,
          },
          {
            question: 'Evaluate $\\int \\frac{dx}{(x^2+1)^2}$ using trigonometric substitution.',
            solution: `**Step 1: Identify the form**

$x^2 + 1 = x^2 + 1^2$ → Case 2, use $x = \\tan\\theta$

---

**Step 2: Make substitution**

$x = \\tan\\theta$, $dx = \\sec^2\\theta\\,d\\theta$

$x^2 + 1 = \\tan^2\\theta + 1 = \\sec^2\\theta$

$(x^2+1)^2 = \\sec^4\\theta$

---

**Step 3: Rewrite integral**

$$\\int \\frac{dx}{(x^2+1)^2} = \\int \\frac{\\sec^2\\theta\\,d\\theta}{\\sec^4\\theta}$$

$$= \\int \\frac{1}{\\sec^2\\theta}\\,d\\theta = \\int \\cos^2\\theta\\,d\\theta$$

---

**Step 4: Use identity $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$**

$$= \\int \\frac{1+\\cos 2\\theta}{2}\\,d\\theta$$

$$= \\frac{1}{2}\\left(\\theta + \\frac{\\sin 2\\theta}{2}\\right) + C$$

$$= \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4} + C$$

---

**Step 5: Use $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$**

$$= \\frac{\\theta}{2} + \\frac{2\\sin\\theta\\cos\\theta}{4} + C$$

$$= \\frac{\\theta}{2} + \\frac{\\sin\\theta\\cos\\theta}{2} + C$$

---

**Step 6: Convert back to x**

From $x = \\tan\\theta$: $\\theta = \\arctan x$

$\\sin\\theta = \\frac{x}{\\sqrt{1+x^2}}$, $\\cos\\theta = \\frac{1}{\\sqrt{1+x^2}}$

$$= \\frac{\\arctan x}{2} + \\frac{1}{2} \\cdot \\frac{x}{\\sqrt{1+x^2}} \\cdot \\frac{1}{\\sqrt{1+x^2}} + C$$

$$= \\frac{\\arctan x}{2} + \\frac{x}{2(1+x^2)} + C$$

**Answer**: $\\frac{\\arctan x}{2} + \\frac{x}{2(1+x^2)} + C$`,
            difficulty: Difficulty.EXPERT,
            order: 2,
          },
          {
            question: 'Evaluate $\\int \\frac{dx}{x\\sqrt{x^2-16}}$ using trigonometric substitution.',
            solution: `**Step 1: Identify the form**

$\\sqrt{x^2-16} = \\sqrt{x^2 - 4^2}$ → Case 3, use $x = 4\\sec\\theta$

---

**Step 2: Make substitution**

$x = 4\\sec\\theta$, $dx = 4\\sec\\theta\\tan\\theta\\,d\\theta$

$\\sqrt{x^2-16} = \\sqrt{16\\sec^2\\theta - 16} = 4\\tan\\theta$

---

**Step 3: Rewrite integral**

$$\\int \\frac{dx}{x\\sqrt{x^2-16}} = \\int \\frac{4\\sec\\theta\\tan\\theta\\,d\\theta}{4\\sec\\theta \\cdot 4\\tan\\theta}$$

$$= \\int \\frac{4\\sec\\theta\\tan\\theta}{16\\sec\\theta\\tan\\theta}\\,d\\theta$$

$$= \\int \\frac{1}{4}\\,d\\theta = \\frac{\\theta}{4} + C$$

---

**Step 4: Convert back to x**

From $x = 4\\sec\\theta$: $\\sec\\theta = \\frac{x}{4}$

$\\theta = \\text{arcsec}\\frac{x}{4}$

Or equivalently: $\\theta = \\arccos\\frac{4}{x}$

**Answer**: $\\frac{1}{4}\\text{arcsec}\\frac{x}{4} + C$ or $\\frac{1}{4}\\arccos\\frac{4}{x} + C$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What are the three main trigonometric substitutions and when do you use each?',
            back: '1) $\\sqrt{a^2-x^2}$: use $x=a\\sin\\theta$ (gives $a\\cos\\theta$). 2) $\\sqrt{a^2+x^2}$: use $x=a\\tan\\theta$ (gives $a\\sec\\theta$). 3) $\\sqrt{x^2-a^2}$: use $x=a\\sec\\theta$ (gives $a\\tan\\theta$). All use Pythagorean identities to eliminate square root.',
            hint: 'Sin for minus, tan for plus, sec for x² first',
          },
          {
            front: 'For $\\sqrt{a^2-x^2}$, what substitution and identity do you use?',
            back: 'Substitution: $x = a\\sin\\theta$, $dx = a\\cos\\theta\\,d\\theta$. Identity: $1-\\sin^2\\theta = \\cos^2\\theta$. Result: $\\sqrt{a^2-x^2} = a\\cos\\theta$. Convert back: draw triangle with opposite=$x$, hypotenuse=$a$, adjacent=$\\sqrt{a^2-x^2}$.',
            hint: 'Sine substitution, cosine identity',
          },
          {
            front: 'For $\\sqrt{a^2+x^2}$, what substitution and identity do you use?',
            back: 'Substitution: $x = a\\tan\\theta$, $dx = a\\sec^2\\theta\\,d\\theta$. Identity: $1+\\tan^2\\theta = \\sec^2\\theta$. Result: $\\sqrt{a^2+x^2} = a\\sec\\theta$. Convert back: draw triangle with opposite=$x$, adjacent=$a$, hypotenuse=$\\sqrt{a^2+x^2}$.',
            hint: 'Tangent substitution, secant identity',
          },
          {
            front: 'What are common mistakes with trigonometric substitution?',
            back: '1) Wrong substitution choice (match pattern carefully). 2) Forgetting to convert back to $x$ (use reference triangle). 3) Forgetting $dx$ when substituting. 4) Sign errors with square roots ($\\sqrt{\\cos^2\\theta}=|\\cos\\theta|$). 5) Not completing the square first when needed.',
            hint: 'Match pattern, convert back, remember dx',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Partial Fractions
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'partial-fractions',
      title: 'Integration by Partial Fractions',
      description: 'Decomposing rational functions for integration',
      order: 2,
      categoryId: advancedIntegrationCategory.id,
      isPremium: true,
      textContent: `
# 🔢 Integration by Partial Fractions

## The Problem

How do we integrate rational functions (fractions with polynomials)?

**Example**: $\\int \\frac{1}{x^2-1}\\,dx$

> **💡 Key Idea**: Decompose the fraction into simpler fractions that we can integrate easily!

---

## What is Partial Fraction Decomposition?

Break a complicated fraction into a sum of simpler fractions.

**Example**:
$$\\frac{1}{x^2-1} = \\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

Find $A$ and $B$, then integrate each piece separately!

---

## When to Use Partial Fractions

### Requirements:

1. **Rational function**: $\\frac{P(x)}{Q(x)}$ where $P$ and $Q$ are polynomials
2. **Proper fraction**: degree of $P <$ degree of $Q$
   - If not, use polynomial long division first!
3. **Factored denominator**: $Q(x)$ must be factored

---

## The Four Cases

### Case 1: Distinct Linear Factors

**Form**: $(x-a)(x-b)(x-c)\\cdots$

**Decomposition**:
$$\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$$

Each linear factor gets one term with a constant numerator.

---

### Case 2: Repeated Linear Factors

**Form**: $(x-a)^n$

**Decomposition**:
$$\\frac{P(x)}{(x-a)^3} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2} + \\frac{C}{(x-a)^3}$$

Include all powers from 1 up to $n$.

---

### Case 3: Distinct Irreducible Quadratic Factors

**Form**: $(ax^2+bx+c)$ where $b^2-4ac < 0$ (can't factor)

**Decomposition**:
$$\\frac{P(x)}{(x-a)(x^2+1)} = \\frac{A}{x-a} + \\frac{Bx+C}{x^2+1}$$

Quadratic factor gets a linear numerator!

---

### Case 4: Repeated Irreducible Quadratic Factors

**Form**: $(ax^2+bx+c)^n$

**Decomposition**:
$$\\frac{P(x)}{(x^2+1)^2} = \\frac{Ax+B}{x^2+1} + \\frac{Cx+D}{(x^2+1)^2}$$

Include all powers with linear numerators.

---

## Example 1: Distinct Linear Factors

Integrate $\\int \\frac{1}{x^2-1}\\,dx$

**Step 1: Factor denominator**

$$x^2 - 1 = (x-1)(x+1)$$

---

**Step 2: Set up partial fractions**

$$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

---

**Step 3: Find A and B**

Multiply both sides by $(x-1)(x+1)$:

$$1 = A(x+1) + B(x-1)$$

**Method 1: Substitution**

Let $x = 1$: $1 = A(2) + B(0)$ → $A = \\frac{1}{2}$

Let $x = -1$: $1 = A(0) + B(-2)$ → $B = -\\frac{1}{2}$

---

**Step 4: Rewrite and integrate**

$$\\int \\frac{1}{x^2-1}\\,dx = \\int \\left(\\frac{1/2}{x-1} - \\frac{1/2}{x+1}\\right)dx$$

$$= \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$$

$$= \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$$

**Answer**: $\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$

---

## Example 2: Repeated Linear Factor

Integrate $\\int \\frac{2x+1}{x^2(x-1)}\\,dx$

**Step 1: Set up partial fractions**

Denominator has $x^2$ (repeated) and $(x-1)$ (distinct).

$$\\frac{2x+1}{x^2(x-1)} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x-1}$$

---

**Step 2: Find A, B, C**

Multiply by $x^2(x-1)$:

$$2x+1 = Ax(x-1) + B(x-1) + Cx^2$$

**Let $x = 1$**: $3 = C(1)$ → $C = 3$

**Let $x = 0$**: $1 = B(-1)$ → $B = -1$

**Let $x = 2$**: $5 = A(2)(1) + (-1)(1) + 3(4)$
$$5 = 2A - 1 + 12$$
$$2A = -6$$ → $A = -3$

---

**Step 3: Integrate**

$$\\int \\frac{2x+1}{x^2(x-1)}\\,dx = \\int \\left(-\\frac{3}{x} - \\frac{1}{x^2} + \\frac{3}{x-1}\\right)dx$$

$$= -3\\ln|x| + \\frac{1}{x} + 3\\ln|x-1| + C$$

$$= 3\\ln\\left|\\frac{x-1}{x}\\right| + \\frac{1}{x} + C$$

**Answer**: $3\\ln\\left|\\frac{x-1}{x}\\right| + \\frac{1}{x} + C$

---

## Example 3: Irreducible Quadratic

Integrate $\\int \\frac{x}{(x-1)(x^2+1)}\\,dx$

**Step 1: Set up partial fractions**

$$\\frac{x}{(x-1)(x^2+1)} = \\frac{A}{x-1} + \\frac{Bx+C}{x^2+1}$$

Note: $x^2+1$ gets a **linear** numerator!

---

**Step 2: Find A, B, C**

Multiply by $(x-1)(x^2+1)$:

$$x = A(x^2+1) + (Bx+C)(x-1)$$

**Let $x = 1$**: $1 = A(2)$ → $A = \\frac{1}{2}$

**Expand and compare coefficients**:
$$x = Ax^2 + A + Bx^2 - Bx + Cx - C$$

Coefficient of $x^2$: $0 = A + B$ → $B = -\\frac{1}{2}$

Coefficient of $x$: $1 = -B + C$ → $C = 1 - \\frac{1}{2} = \\frac{1}{2}$

---

**Step 3: Integrate**

$$\\int \\frac{x}{(x-1)(x^2+1)}\\,dx = \\int \\left(\\frac{1/2}{x-1} + \\frac{-x/2 + 1/2}{x^2+1}\\right)dx$$

$$= \\frac{1}{2}\\ln|x-1| + \\int \\frac{-x/2}{x^2+1}\\,dx + \\int \\frac{1/2}{x^2+1}\\,dx$$

---

For $\\int \\frac{-x/2}{x^2+1}\\,dx$, use $u = x^2+1$:

$$-\\frac{1}{2}\\int \\frac{x}{x^2+1}\\,dx = -\\frac{1}{4}\\ln(x^2+1)$$

For $\\int \\frac{1/2}{x^2+1}\\,dx$:

$$\\frac{1}{2}\\arctan x$$

---

**Combine**:

$$= \\frac{1}{2}\\ln|x-1| - \\frac{1}{4}\\ln(x^2+1) + \\frac{1}{2}\\arctan x + C$$

**Answer**: $\\frac{1}{2}\\ln|x-1| - \\frac{1}{4}\\ln(x^2+1) + \\frac{1}{2}\\arctan x + C$

---

## Improper Fractions: Long Division First

If degree of numerator ≥ degree of denominator, divide first!

**Example**: $\\frac{x^3}{x^2-1}$

$$\\frac{x^3}{x^2-1} = x + \\frac{x}{x^2-1}$$

Then use partial fractions on $\\frac{x}{x^2-1}$.

---

## Method for Finding Constants

### Method 1: Substitution (Cover-Up)

Substitute strategic values of $x$ to make terms disappear.

**Works best for**: distinct linear factors

---

### Method 2: Comparing Coefficients

Expand and match coefficients of like powers.

**Works for**: all cases, especially quadratics

---

### Method 3: Combination

Use substitution for easy ones, coefficients for the rest.

**Most common approach**!

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Long Division

If degree(numerator) ≥ degree(denominator), must divide first!

---

### Mistake 2: Wrong Form for Quadratics

**WRONG**: $\\frac{A}{x^2+1}$

**RIGHT**: $\\frac{Ax+B}{x^2+1}$ (linear numerator!)

---

### Mistake 3: Missing Powers in Repeated Factors

For $(x-1)^3$, you need:
$$\\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{(x-1)^3}$$

Don't skip the middle terms!

---

### Mistake 4: Not Factoring Completely

Always factor the denominator **completely** first!

$x^2-1 = (x-1)(x+1)$, not just $x^2-1$

---

## Summary of Decomposition Rules

| Denominator Factor | Partial Fraction Form |
|-------------------|----------------------|
| $(x-a)$ | $\\frac{A}{x-a}$ |
| $(x-a)^2$ | $\\frac{A}{x-a} + \\frac{B}{(x-a)^2}$ |
| $(x-a)^3$ | $\\frac{A}{x-a} + \\frac{B}{(x-a)^2} + \\frac{C}{(x-a)^3}$ |
| $ax^2+bx+c$ | $\\frac{Ax+B}{ax^2+bx+c}$ |
| $(ax^2+bx+c)^2$ | $\\frac{Ax+B}{ax^2+bx+c} + \\frac{Cx+D}{(ax^2+bx+c)^2}$ |

---

## 📝 Practice Strategy

1. **Check** if fraction is proper (degree top < degree bottom)
2. **If improper**, do long division first
3. **Factor** denominator completely
4. **Set up** partial fraction form based on factors
5. **Find constants** using substitution and/or coefficients
6. **Rewrite** integral as sum of simpler integrals
7. **Integrate** each piece (use u-sub for quadratics if needed)
8. **Combine** and simplify
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\int \\frac{3x+5}{(x+1)(x+2)}\\,dx$ using partial fractions.',
            solution: `**Step 1: Set up partial fractions**

$$\\frac{3x+5}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$$

---

**Step 2: Find A and B**

Multiply by $(x+1)(x+2)$:

$$3x+5 = A(x+2) + B(x+1)$$

**Let $x = -1$**: $2 = A(1)$ → $A = 2$

**Let $x = -2$**: $-1 = B(-1)$ → $B = 1$

---

**Step 3: Verify**

$\\frac{2}{x+1} + \\frac{1}{x+2} = \\frac{2(x+2) + (x+1)}{(x+1)(x+2)} = \\frac{3x+5}{(x+1)(x+2)}$ ✓

---

**Step 4: Integrate**

$$\\int \\frac{3x+5}{(x+1)(x+2)}\\,dx = \\int \\left(\\frac{2}{x+1} + \\frac{1}{x+2}\\right)dx$$

$$= 2\\ln|x+1| + \\ln|x+2| + C$$

**Answer**: $2\\ln|x+1| + \\ln|x+2| + C$ or $\\ln|(x+1)^2(x+2)| + C$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Evaluate $\\int \\frac{x^2+1}{x(x-1)^2}\\,dx$ using partial fractions.',
            solution: `**Step 1: Set up partial fractions**

Repeated factor $(x-1)^2$:

$$\\frac{x^2+1}{x(x-1)^2} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}$$

---

**Step 2: Find A, B, C**

Multiply by $x(x-1)^2$:

$$x^2+1 = A(x-1)^2 + Bx(x-1) + Cx$$

**Let $x = 0$**: $1 = A(1)$ → $A = 1$

**Let $x = 1$**: $2 = C(1)$ → $C = 2$

**Let $x = 2$**: $5 = A(1) + B(2)(1) + C(2)$
$$5 = 1 + 2B + 4$$
$$2B = 0$$ → $B = 0$

---

**Step 3: Integrate**

$$\\int \\frac{x^2+1}{x(x-1)^2}\\,dx = \\int \\left(\\frac{1}{x} + \\frac{2}{(x-1)^2}\\right)dx$$

$$= \\ln|x| + 2 \\cdot \\frac{(x-1)^{-1}}{-1} + C$$

$$= \\ln|x| - \\frac{2}{x-1} + C$$

**Answer**: $\\ln|x| - \\frac{2}{x-1} + C$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Evaluate $\\int \\frac{x^3+x}{x^2+4}\\,dx$ using partial fractions.',
            solution: `**Step 1: Check if proper**

Degree of numerator (3) ≥ degree of denominator (2).

Must do long division first!

---

**Step 2: Polynomial long division**

$$\\frac{x^3+x}{x^2+4} = x + \\frac{x - 4x}{x^2+4} = x + \\frac{-3x}{x^2+4}$$

Actually, let me redo this:

$$x^3 + x = x(x^2+4) - 4x + x = x(x^2+4) - 3x$$

$$\\frac{x^3+x}{x^2+4} = x - \\frac{3x}{x^2+4}$$

---

**Step 3: Integrate**

$$\\int \\frac{x^3+x}{x^2+4}\\,dx = \\int x\\,dx - 3\\int \\frac{x}{x^2+4}\\,dx$$

For the second integral, use $u = x^2+4$, $du = 2x\\,dx$:

$$\\int \\frac{x}{x^2+4}\\,dx = \\frac{1}{2}\\ln(x^2+4)$$

---

**Step 4: Combine**

$$= \\frac{x^2}{2} - 3 \\cdot \\frac{1}{2}\\ln(x^2+4) + C$$

$$= \\frac{x^2}{2} - \\frac{3}{2}\\ln(x^2+4) + C$$

**Answer**: $\\frac{x^2}{2} - \\frac{3}{2}\\ln(x^2+4) + C$`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What are the four cases for partial fraction decomposition?',
            back: '1) Distinct linear: $\\frac{A}{x-a}$ for each factor. 2) Repeated linear: $\\frac{A}{x-a} + \\frac{B}{(x-a)^2} + ...$ up to power. 3) Irreducible quadratic: $\\frac{Ax+B}{x^2+bx+c}$ (linear numerator!). 4) Repeated quadratic: include all powers with linear numerators.',
            hint: 'Linear→constant, quadratic→linear numerator',
          },
          {
            front: 'When must you use polynomial long division before partial fractions?',
            back: 'When the fraction is improper: degree of numerator ≥ degree of denominator. Divide to get: $\\frac{P(x)}{Q(x)} = $ quotient $+ \\frac{\\text{remainder}}{Q(x)}$. Then apply partial fractions to the proper remainder fraction only.',
            hint: 'Improper fraction: degree top ≥ degree bottom',
          },
          {
            front: 'How do you find constants in partial fraction decomposition?',
            back: 'Two methods: 1) Substitution: plug in values that make factors zero (works for linear). 2) Comparing coefficients: expand and match powers of $x$. Often use combination: substitution for easy ones, coefficients for rest.',
            hint: 'Substitution or comparing coefficients',
          },
          {
            front: 'What are common mistakes with partial fractions?',
            back: '1) Forgetting long division when improper. 2) Using $\\frac{A}{x^2+1}$ instead of $\\frac{Ax+B}{x^2+1}$ for quadratics. 3) Missing intermediate powers in repeated factors. 4) Not factoring denominator completely first.',
            hint: 'Long division, linear numerator for quadratics',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 Advanced Integration (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  1. Trigonometric Substitution')
  console.log('  2. Integration by Partial Fractions')
  console.log('\n🎓 BC content begins!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
