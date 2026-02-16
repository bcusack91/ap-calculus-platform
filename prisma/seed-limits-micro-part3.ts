import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Creating advanced micro-lessons for Limits (Part 3)...')

  // Find the Limits category
  const category = await prisma.category.findFirst({
    where: { slug: 'limits' }
  })

  if (!category) {
    throw new Error('Limits category not found.')
  }

  // Delete any existing topics with these slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: ['limits-at-infinity', 'infinite-limits-vertical-asymptotes', 'continuity-introduction', 'types-of-discontinuity']
      }
    }
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // 9. Limits at Infinity
  const topic9 = await prisma.topic.create({
    data: {
      title: 'Limits at Infinity',
      slug: 'limits-at-infinity',
      description: 'Understanding what happens as x grows without bound',
      order: 9,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Limits at Infinity

What happens to a function as x gets **really, really large**? Or really, really **negative**?

### The Notation

**As x approaches positive infinity:**
$$\\lim_{x \\to \\infty} f(x) = L$$

**As x approaches negative infinity:**
$$\\lim_{x \\to -\\infty} f(x) = L$$

> These describe the **end behavior** of a function - where is it heading as we go far right or far left?

### For Polynomials

The limit at infinity of a polynomial is determined by its **leading term** (highest power).

$$\\lim_{x \\to \\infty} (3x^4 - 5x^2 + 7) = \\lim_{x \\to \\infty} 3x^4 = \\infty$$

**Rule of Thumb:**
- **Even degree, positive leading coefficient** → $+\\infty$ on both sides
- **Even degree, negative leading coefficient** → $-\\infty$ on both sides
- **Odd degree, positive leading coefficient** → $-\\infty$ (left), $+\\infty$ (right)
- **Odd degree, negative leading coefficient** → $+\\infty$ (left), $-\\infty$ (right)

### For Rational Functions

With rational functions, **divide everything by the highest power of x in the denominator**:

$$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x - 1}{2x^2 - 7}$$

**Step 1: Divide every term by $x^2$**

$$= \\lim_{x \\to \\infty} \\frac{\\frac{3x^2}{x^2} + \\frac{5x}{x^2} - \\frac{1}{x^2}}{\\frac{2x^2}{x^2} - \\frac{7}{x^2}}$$

**Step 2: Simplify**

$$= \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x} - \\frac{1}{x^2}}{2 - \\frac{7}{x^2}}$$

**Step 3: As $x \\to \\infty$, terms like $\\frac{1}{x} \\to 0$**

$$= \\frac{3 + 0 - 0}{2 - 0} = \\frac{3}{2}$$

### The Key Insight

$$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$$
$$\\lim_{x \\to \\infty} \\frac{1}{x^n} = 0 \\text{ for any } n > 0$$

> Big numbers make fractions tiny!

### Horizontal Asymptotes

If $\\lim_{x \\to \\infty} f(x) = L$, then **y = L is a horizontal asymptote**.

The graph approaches this horizontal line as x gets large.

### Three Cases for Rational Functions

For $\\frac{a_nx^n + ...}{b_mx^m + ...}$:

1. **$n < m$** (denominator degree higher): Limit = 0
2. **$n = m$** (same degree): Limit = $\\frac{a_n}{b_m}$ (ratio of leading coefficients)
3. **$n > m$** (numerator degree higher): Limit = $\\pm\\infty$

### Example

$$\\lim_{x \\to \\infty} \\frac{5x^3 + 2x}{x^3 - 4}$$

Same degree (both 3), so:

$$\\text{Limit} = \\frac{5}{1} = 5$$

Horizontal asymptote at y = 5!
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{4x^2 - 3x + 1}{2x^2 + 5}$',
            solution: `**Step 1: Identify degrees**

Numerator: degree 2
Denominator: degree 2

Same degree! The limit will be the ratio of leading coefficients.

**Step 2: Find leading coefficients**

Leading coefficient of numerator: 4
Leading coefficient of denominator: 2

**Step 3: Take the ratio**

$$\\lim_{x \\to \\infty} \\frac{4x^2 - 3x + 1}{2x^2 + 5} = \\frac{4}{2} = 2$$

**Answer: 2**

**Verification by division:**
Divide all terms by $x^2$:

$$\\lim_{x \\to \\infty} \\frac{4 - \\frac{3}{x} + \\frac{1}{x^2}}{2 + \\frac{5}{x^2}} = \\frac{4 - 0 + 0}{2 + 0} = \\frac{4}{2} = 2$$ ✓`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{7x}{3x^2 + 1}$',
            solution: `**Step 1: Identify degrees**

Numerator: degree 1
Denominator: degree 2

Denominator has higher degree!

**Step 2: Apply the rule**

When denominator degree > numerator degree, the limit is **0**.

$$\\lim_{x \\to -\\infty} \\frac{7x}{3x^2 + 1} = 0$$

**Verification:**
Divide all terms by $x^2$:

$$\\lim_{x \\to -\\infty} \\frac{\\frac{7x}{x^2}}{\\frac{3x^2}{x^2} + \\frac{1}{x^2}} = \\lim_{x \\to -\\infty} \\frac{\\frac{7}{x}}{3 + \\frac{1}{x^2}}$$

As $x \\to -\\infty$: $\\frac{7}{x} \\to 0$ and $\\frac{1}{x^2} \\to 0$

$$= \\frac{0}{3 + 0} = 0$$ ✓

**Answer: 0**`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'For a rational function where the degrees of numerator and denominator are equal, what is the limit at infinity?',
            back: 'The ratio of the leading coefficients'
          },
          {
            front: 'What happens to $\\frac{1}{x}$ as $x \\to \\infty$?',
            back: 'It approaches 0 (larger denominators make fractions smaller)'
          },
          {
            front: 'If $\\lim_{x \\to \\infty} f(x) = 5$, what does this tell you about the graph?',
            back: 'The function has a horizontal asymptote at y = 5'
          }
        ]
      }
    }
  })

  // 10. Infinite Limits (Vertical Asymptotes)
  const topic10 = await prisma.topic.create({
    data: {
      title: 'Infinite Limits and Vertical Asymptotes',
      slug: 'infinite-limits-vertical-asymptotes',
      description: 'When functions shoot off to infinity at a specific point',
      order: 10,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Infinite Limits

Sometimes a function doesn't approach a finite value - it **shoots off to infinity**!

### The Notation

$$\\lim_{x \\to a} f(x) = \\infty$$

This means: as x approaches a, f(x) grows **without bound** (gets arbitrarily large).

$$\\lim_{x \\to a} f(x) = -\\infty$$

This means: as x approaches a, f(x) becomes **arbitrarily negative**.

> **Important:** When we write $= \\infty$, the limit **does not exist** (DNE) in the traditional sense. We're just being specific about *how* it doesn't exist.

### Vertical Asymptotes

If $\\lim_{x \\to a} f(x) = \\pm\\infty$, then **x = a is a vertical asymptote**.

The graph shoots up or down near this vertical line.

### Common Cause: Division by Zero

The most common way to get infinite limits: **denominator approaches 0 while numerator doesn't**.

Example: $f(x) = \\frac{1}{x - 2}$

As $x \\to 2$:
- Numerator: 1 (constant)
- Denominator: $x - 2 \\to 0$

Result: $\\frac{1}{\\text{tiny number}} = \\text{huge number}$

### One-Sided Infinite Limits

We often need to check **both sides** because they might go different directions!

**Example:** $f(x) = \\frac{1}{x - 2}$

**From the left** ($x \\to 2^-$):
- When x = 1.9: $\\frac{1}{1.9 - 2} = \\frac{1}{-0.1} = -10$
- When x = 1.99: $\\frac{1}{1.99 - 2} = \\frac{1}{-0.01} = -100$
- When x = 1.999: $\\frac{1}{-0.001} = -1000$

$$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$

**From the right** ($x \\to 2^+$):
- When x = 2.1: $\\frac{1}{2.1 - 2} = \\frac{1}{0.1} = 10$
- When x = 2.01: $\\frac{1}{0.01} = 100$
- When x = 2.001: $\\frac{1}{0.001} = 1000$

$$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

### The Sign Test

To determine if the limit is $+\\infty$ or $-\\infty$:

1. **Find where denominator = 0**
2. **Check a test point** just to the left
3. **Check a test point** just to the right
4. **Determine the sign** of the function

### Visual Interpretation

On a graph:
- **Vertical asymptote**: Dashed vertical line at x = a
- **Left side**: Graph shoots up ($+\\infty$) or down ($-\\infty$)
- **Right side**: Graph shoots up or down
- The graph **never touches** the vertical asymptote

### Example with Factoring

$$f(x) = \\frac{x + 1}{(x - 3)^2}$$

As $x \\to 3$:
- Numerator: $3 + 1 = 4$ (positive)
- Denominator: $(3 - 3)^2 = 0$

But $(x - 3)^2$ is **always positive** (it's squared!)

So from both sides: $\\frac{\\text{positive}}{\\text{positive tiny}} = +\\infty$

$$\\lim_{x \\to 3} \\frac{x + 1}{(x - 3)^2} = +\\infty$$

Both sides go to $+\\infty$!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find $\\lim_{x \\to 1^-} \\frac{2}{x - 1}$ and $\\lim_{x \\to 1^+} \\frac{2}{x - 1}$',
            solution: `**Approaching from the left** ($x \\to 1^-$):

Test with x = 0.9:
$$\\frac{2}{0.9 - 1} = \\frac{2}{-0.1} = -20$$

The numerator is positive (2), the denominator is negative (approaching 0 from below).

$$\\lim_{x \\to 1^-} \\frac{2}{x - 1} = -\\infty$$

**Approaching from the right** ($x \\to 1^+$):

Test with x = 1.1:
$$\\frac{2}{1.1 - 1} = \\frac{2}{0.1} = 20$$

The numerator is positive (2), the denominator is positive (approaching 0 from above).

$$\\lim_{x \\to 1^+} \\frac{2}{x - 1} = +\\infty$$

**Conclusion:**
- Left-hand limit: $-\\infty$
- Right-hand limit: $+\\infty$
- There is a **vertical asymptote** at x = 1`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'Find $\\lim_{x \\to -2} \\frac{x}{(x + 2)^2}$ and describe the behavior',
            solution: `**Step 1: Check what happens at x = -2**

Numerator: $x \\to -2$ (negative)
Denominator: $(x + 2)^2 \\to 0$ (positive, because it's squared)

**Step 2: Determine the sign**

$$\\frac{\\text{negative}}{\\text{positive tiny}} = \\text{large negative}$$

**Step 3: Check both sides**

Since $(x + 2)^2$ is always positive (squared term), and the numerator x is negative near -2, the function will be negative on both sides.

**From the left** (x = -2.1):
$$\\frac{-2.1}{(-2.1 + 2)^2} = \\frac{-2.1}{0.01} = -210$$

**From the right** (x = -1.9):
$$\\frac{-1.9}{(-1.9 + 2)^2} = \\frac{-1.9}{0.01} = -190$$

Both sides go to $-\\infty$!

$$\\lim_{x \\to -2} \\frac{x}{(x + 2)^2} = -\\infty$$

**Behavior:** There is a vertical asymptote at x = -2, and the graph approaches $-\\infty$ from both sides.`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What creates a vertical asymptote in a rational function?',
            back: 'When the denominator approaches 0 while the numerator approaches a non-zero value'
          },
          {
            front: 'If $(x - a)^2$ appears in the denominator, what can you say about the infinite limit?',
            back: 'Both one-sided limits will have the same sign (both $+\\infty$ or both $-\\infty$) because a squared term is always positive'
          },
          {
            front: 'Does $\\lim_{x \\to a} f(x) = \\infty$ mean the limit exists?',
            back: 'Technically no - the limit DNE. But we say it equals infinity to describe the specific unbounded behavior'
          }
        ]
      }
    }
  })

  // 11. Introduction to Continuity
  const topic11 = await prisma.topic.create({
    data: {
      title: 'What is Continuity?',
      slug: 'continuity-introduction',
      description: 'Understanding when a function is continuous at a point',
      order: 11,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Understanding Continuity

A function is **continuous** if you can draw it without lifting your pencil. Mathematically, it's more precise!

### The Informal Definition

A function is continuous at x = a if:
> The graph has **no breaks, jumps, or holes** at that point

### The Formal Definition

A function f is **continuous at x = a** if all three conditions hold:

1. **f(a) exists** - The function is defined at a
2. **$\\lim_{x \\to a} f(x)$ exists** - The limit exists at a
3. **$\\lim_{x \\to a} f(x) = f(a)$** - The limit equals the function value

> All three must be true! If even one fails, the function is discontinuous at that point.

### Testing for Continuity

**Example 1:** Is $f(x) = x^2$ continuous at x = 3?

**Check 1:** Does f(3) exist?
$$f(3) = 3^2 = 9$$ ✓ Yes

**Check 2:** Does $\\lim_{x \\to 3} f(x)$ exist?
$$\\lim_{x \\to 3} x^2 = 9$$ ✓ Yes

**Check 3:** Does $\\lim_{x \\to 3} f(x) = f(3)$?
$$9 = 9$$ ✓ Yes

**Conclusion:** f is continuous at x = 3!

### Example 2: Not Continuous

$$f(x) = \\begin{cases} x + 1 & \\text{if } x \\neq 2 \\\\ 5 & \\text{if } x = 2 \\end{cases}$$

Is this continuous at x = 2?

**Check 1:** Does f(2) exist?
$$f(2) = 5$$ ✓ Yes

**Check 2:** Does $\\lim_{x \\to 2} f(x)$ exist?
$$\\lim_{x \\to 2} (x + 1) = 3$$ ✓ Yes

**Check 3:** Does $\\lim_{x \\to 2} f(x) = f(2)$?
$$3 \\neq 5$$ ✗ NO!

**Conclusion:** f is **NOT continuous** at x = 2 (even though f(2) exists and the limit exists!)

### Continuous Everywhere

Many familiar functions are continuous **everywhere**:

- **Polynomials**: $x^2$, $x^3 - 2x + 1$, etc.
- **Exponential functions**: $e^x$, $2^x$
- **Sine and cosine**: $\\sin(x)$, $\\cos(x)$
- **Square root** (on its domain): $\\sqrt{x}$ for $x \\geq 0$

### Common Discontinuities

Functions are typically discontinuous where:
- **Rational functions** have division by zero
- **Piecewise functions** change formulas
- **Absolute value** creates a corner (still continuous, but not differentiable!)

### Why Continuity Matters

Continuous functions have nice properties:
- **Intermediate Value Theorem**: If continuous on [a, b], it takes every value between f(a) and f(b)
- **Can find limits** by direct substitution
- **Behave predictably** - no surprises!

### Visual Test

On a graph, a function is continuous at a point if:
- No **gap** (both sides connect)
- No **hole** (no open circle)
- No **jump** (no sudden leap)
- The point is actually **on the curve**
`,
      exampleProblems: {
        create: [
          {
            question: 'Determine if $f(x) = \\frac{x^2 - 9}{x - 3}$ is continuous at x = 3.',
            solution: `**Check 1: Does f(3) exist?**

$$f(3) = \\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$$

This is undefined! ✗

**Conclusion:** f is **NOT continuous** at x = 3 because f(3) doesn't exist.

The function has a **hole** at x = 3.

**Note:** Even though we can find the limit:
$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 6$$

The limit exists (equals 6), but f(3) doesn't exist, so the function fails condition 1 of continuity.`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'For what value of k is $f(x) = \\begin{cases} x^2 & \\text{if } x < 2 \\\\ kx + 1 & \\text{if } x \\geq 2 \\end{cases}$ continuous at x = 2?',
            solution: `For f to be continuous at x = 2, we need:
$$\\lim_{x \\to 2} f(x) = f(2)$$

**Find f(2):**
Since $x = 2 \\geq 2$, we use the second piece:
$$f(2) = k(2) + 1 = 2k + 1$$

**Find the limit from the left:**
$$\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^-} x^2 = 4$$

**Find the limit from the right:**
$$\\lim_{x \\to 2^+} f(x) = \\lim_{x \\to 2^+} (kx + 1) = 2k + 1$$

**For continuity, these must all be equal:**
$$4 = 2k + 1$$
$$3 = 2k$$
$$k = \\frac{3}{2}$$

**Answer: $k = \\frac{3}{2}$**

With this value, f(2) = 4 and both one-sided limits equal 4, making the function continuous!`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What are the three conditions for a function to be continuous at x = a?',
            back: '1) f(a) exists, 2) lim as x→a of f(x) exists, 3) lim as x→a of f(x) = f(a)'
          },
          {
            front: 'Can a function have a limit at a point but not be continuous there?',
            back: 'Yes! If the limit exists but either f(a) doesn\'t exist or f(a) ≠ lim f(x), it\'s discontinuous'
          },
          {
            front: 'Name three types of functions that are continuous everywhere on their domains.',
            back: 'Polynomials, exponential functions, and trigonometric functions like sin and cos'
          }
        ]
      }
    }
  })

  // 12. Types of Discontinuity
  const topic12 = await prisma.topic.create({
    data: {
      title: 'Types of Discontinuity',
      slug: 'types-of-discontinuity',
      description: 'Classifying the different ways a function can be discontinuous',
      order: 12,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Types of Discontinuity

Not all discontinuities are created equal! There are three main types.

### 1. Removable Discontinuity (Hole)

**What it is:** The limit exists, but either f(a) doesn't exist or f(a) ≠ limit

**Visual:** An open circle (hole) in the graph

**Example:**
$$f(x) = \\frac{x^2 - 1}{x - 1}$$

At x = 1: $\\lim_{x \\to 1} f(x) = 2$ but f(1) is undefined.

**Why "removable"?**
You could "fix" it by defining or redefining f(1) = 2!

### 2. Jump Discontinuity

**What it is:** Left and right limits exist but are **different**

**Visual:** The graph "jumps" from one height to another

**Example:**
$$f(x) = \\begin{cases} x & \\text{if } x < 1 \\\\ x + 2 & \\text{if } x \\geq 1 \\end{cases}$$

At x = 1:
- $\\lim_{x \\to 1^-} f(x) = 1$
- $\\lim_{x \\to 1^+} f(x) = 3$
- These are different, so there's a jump!

**Why not removable?**
No way to pick a single value for f(1) that makes both sides happy.

### 3. Infinite Discontinuity (Vertical Asymptote)

**What it is:** At least one one-sided limit is infinite

**Visual:** The graph shoots off to $\\pm\\infty$

**Example:**
$$f(x) = \\frac{1}{x - 2}$$

At x = 2: $\\lim_{x \\to 2^+} f(x) = +\\infty$ (infinite limit)

**Why the worst?**
The function completely "blows up" - can't fix it at all!

### Comparison Table

| Type | Limit Exists? | f(a) Exists? | Can Fix It? | Visual |
|------|---------------|--------------|-------------|---------|
| **Removable** | Yes | Maybe, but wrong | Yes ✓ | Hole ○ |
| **Jump** | No (sides differ) | Maybe | No ✗ | Step ⌐⌙ |
| **Infinite** | No (infinite) | No | No ✗ | Asymptote ↕ |

### Identifying the Type

**Step 1:** Find the one-sided limits

**Step 2:** Apply this flowchart:
- Both sides equal → Removable (if discontinuous)
- Both sides different (but finite) → Jump
- At least one side infinite → Infinite

### Example Analysis 1

$$f(x) = \\frac{x + 2}{x^2 - 4}$$ at x = 2

Factor: $x^2 - 4 = (x - 2)(x + 2)$

$$f(x) = \\frac{x + 2}{(x - 2)(x + 2)} = \\frac{1}{x - 2}$$ (after canceling)

At x = 2: The denominator → 0 while numerator → 1

One-sided limits are infinite!

**Type: Infinite discontinuity** (vertical asymptote at x = 2)

### Example Analysis 2

$$f(x) = \\begin{cases} x^2 & \\text{if } x \\neq 3 \\\\ 5 & \\text{if } x = 3 \\end{cases}$$

$\\lim_{x \\to 3} f(x) = \\lim_{x \\to 3} x^2 = 9$

But f(3) = 5 ≠ 9

**Type: Removable discontinuity** (could fix by changing f(3) to 9)

### Example Analysis 3

$$f(x) = \\lfloor x \\rfloor$$ (floor function) at x = 2

- $\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1$ (approaching 2 from below)
- $\\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2$ (at 2 and above)

Different limits!

**Type: Jump discontinuity**

### The Intermediate Value Theorem

**Important connection:** If f is **continuous** on [a, b], it must take every value between f(a) and f(b).

Discontinuities break this! With a jump, the function "skips" values.

### Practice Tip

When analyzing discontinuity:
1. Find where it's discontinuous (often where denominator = 0)
2. Calculate one-sided limits
3. Compare limits to each other and to f(a)
4. Classify the type based on your findings
`,
      exampleProblems: {
        create: [
          {
            question: 'Identify the type of discontinuity in $f(x) = \\frac{x^2 - 16}{x - 4}$ at x = 4.',
            solution: `**Step 1: Check if discontinuous**

$$f(4) = \\frac{16 - 16}{4 - 4} = \\frac{0}{0}$$ 

Undefined, so discontinuous! ✓

**Step 2: Find the limit**

Factor the numerator:
$$f(x) = \\frac{(x - 4)(x + 4)}{x - 4} = x + 4$$ (for $x \\neq 4$)

$$\\lim_{x \\to 4} f(x) = \\lim_{x \\to 4} (x + 4) = 8$$

**Step 3: Analyze**

- Limit exists and equals 8
- f(4) doesn't exist
- No infinite behavior
- Both one-sided limits equal 8

**Type: Removable discontinuity**

We could "remove" the hole by defining f(4) = 8!`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'Classify all discontinuities of $g(x) = \\begin{cases} x - 1 & \\text{if } x < 0 \\\\ x^2 & \\text{if } 0 \\leq x < 2 \\\\ 5 & \\text{if } x = 2 \\\\ 4 & \\text{if } x > 2 \\end{cases}$',
            solution: `Let's check potential discontinuity points: x = 0 and x = 2

**At x = 0:**

Left limit: $\\lim_{x \\to 0^-} (x - 1) = -1$

Right limit: $\\lim_{x \\to 0^+} x^2 = 0$

$-1 \\neq 0$ → Different one-sided limits!

**Type: Jump discontinuity at x = 0**

---

**At x = 2:**

Left limit: $\\lim_{x \\to 2^-} x^2 = 4$

Right limit: $\\lim_{x \\to 2^+} 4 = 4$

Both limits equal 4, and g(2) = 5

Limit exists (= 4) but g(2) = 5 ≠ 4

**Type: Removable discontinuity at x = 2**

Could fix by changing g(2) from 5 to 4!

---

**Summary:**
- Jump discontinuity at x = 0
- Removable discontinuity at x = 2`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What is a removable discontinuity and why is it called "removable"?',
            back: 'A hole where the limit exists but f(a) is wrong or missing. It\'s "removable" because you can fix it by defining f(a) = the limit value'
          },
          {
            front: 'What characterizes a jump discontinuity?',
            back: 'The left and right limits exist but are different values, causing the graph to "jump"'
          },
          {
            front: 'When does an infinite discontinuity occur?',
            back: 'When at least one one-sided limit is infinite (±∞), usually creating a vertical asymptote'
          }
        ]
      }
    }
  })

  console.log('✅ Created 4 advanced micro-lessons for Limits!')
  console.log('📚 Topics created (Part 3):')
  console.log('   9. Limits at Infinity')
  console.log('   10. Infinite Limits and Vertical Asymptotes')
  console.log('   11. What is Continuity?')
  console.log('   12. Types of Discontinuity')
  console.log('\n🎉 Limits section is now comprehensive with 12 focused micro-lessons!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
