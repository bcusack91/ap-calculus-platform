import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Applications of Derivatives micro-lessons - Part 1...')

  // Create the Applications of Derivatives category
  const applicationsCategory = await prisma.category.upsert({
    where: { slug: 'applications-of-derivatives' },
    update: {},
    create: {
      slug: 'applications-of-derivatives',
      name: 'Applications of Derivatives',
      description: 'Using derivatives to solve real-world problems',
      order: 3,
      icon: '🎯',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'critical-points-and-extrema',
          'first-derivative-test',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Critical Points and Extrema
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'critical-points-and-extrema',
      title: 'Critical Points and Extrema',
      description: 'Finding maximum and minimum values of functions',
      order: 1,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 🔍 Critical Points and Extrema

## What are Extrema?

**Extrema** are the maximum and minimum values of a function. They come in two types:

### Types of Extrema

**Absolute (Global) Extrema**:
- **Absolute maximum**: The highest point on the entire graph
- **Absolute minimum**: The lowest point on the entire graph

**Local (Relative) Extrema**:
- **Local maximum**: A peak - higher than nearby points
- **Local minimum**: A valley - lower than nearby points

> **💡 Key Idea**: A function can have multiple local extrema, but at most one absolute max and one absolute min (on a given interval).

---

## What are Critical Points?

A **critical point** occurs at $x = c$ if:

1. $f'(c) = 0$ (horizontal tangent), **OR**
2. $f'(c)$ does not exist (sharp corner, vertical tangent, discontinuity)

> **⚠️ Important**: Not all critical points are extrema! But all local extrema (that occur in the interior of the domain) ARE critical points.

---

## Fermat's Theorem

**Fermat's Theorem**: If $f$ has a local extremum at $x = c$, and $f'(c)$ exists, then $f'(c) = 0$.

**What this means**: 
- Local maxima and minima can only occur where the derivative is zero or undefined
- To find extrema, we must check critical points!

**BUT**: Not every critical point is an extremum. We need to test them!

---

## Finding Critical Points

### Step-by-Step Process

**Step 1**: Find $f'(x)$

**Step 2**: Solve $f'(x) = 0$

**Step 3**: Find where $f'(x)$ is undefined

**Step 4**: Check that these $x$-values are in the domain of $f$

All these points are critical points!

---

### Example 1: Basic Polynomial

Find all critical points of $f(x) = x^3 - 3x^2 - 9x + 5$

**Step 1: Find the derivative**

$f'(x) = 3x^2 - 6x - 9$

**Step 2: Set equal to zero**

$3x^2 - 6x - 9 = 0$

$3(x^2 - 2x - 3) = 0$

$3(x - 3)(x + 1) = 0$

So $x = 3$ or $x = -1$

**Step 3: Check if undefined**

$f'(x)$ is a polynomial, so it's defined everywhere ✓

**Answer**: Critical points at $x = -1$ and $x = 3$

---

### Example 2: Rational Function

Find critical points of $f(x) = \\frac{x^2}{x - 2}$

**Step 1: Find derivative (Quotient Rule)**

$f'(x) = \\frac{(2x)(x-2) - (x^2)(1)}{(x-2)^2}$

$= \\frac{2x^2 - 4x - x^2}{(x-2)^2}$

$= \\frac{x^2 - 4x}{(x-2)^2}$

$= \\frac{x(x-4)}{(x-2)^2}$

**Step 2: Set equal to zero**

$\\frac{x(x-4)}{(x-2)^2} = 0$

Numerator = 0: $x(x-4) = 0$

So $x = 0$ or $x = 4$

**Step 3: Check if undefined**

$f'(x)$ is undefined when $(x-2)^2 = 0$, i.e., when $x = 2$

But $f(2)$ is also undefined (not in domain), so $x = 2$ is NOT a critical point.

**Answer**: Critical points at $x = 0$ and $x = 4$

---

## The Extreme Value Theorem

**Extreme Value Theorem (EVT)**: If $f$ is continuous on a closed interval $[a, b]$, then $f$ has both an absolute maximum and an absolute minimum on $[a, b]$.

### Why This Matters

On a closed interval, extrema can occur at:
1. **Critical points** in the interior $(a, b)$
2. **Endpoints** $x = a$ or $x = b$

So to find absolute extrema on $[a, b]$:
- Find all critical points in $(a, b)$
- Evaluate $f$ at critical points AND endpoints
- The largest value is the absolute max
- The smallest value is the absolute min

---

## Finding Absolute Extrema on a Closed Interval

### The Closed Interval Method

**Step 1**: Find all critical points in $(a, b)$

**Step 2**: Evaluate $f$ at each critical point

**Step 3**: Evaluate $f$ at the endpoints $a$ and $b$

**Step 4**: Compare all values:
- Largest value = absolute maximum
- Smallest value = absolute minimum

---

### Example: Closed Interval Method

Find the absolute maximum and minimum of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

**Step 1: Find critical points**

$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$

$f'(x) = 0$ when $x = 1$ or $x = -1$

Both are in $(-2, 2)$ ✓

**Step 2: Evaluate at critical points**

$f(-1) = (-1)^3 - 3(-1) + 1 = -1 + 3 + 1 = 3$

$f(1) = 1^3 - 3(1) + 1 = 1 - 3 + 1 = -1$

**Step 3: Evaluate at endpoints**

$f(-2) = (-2)^3 - 3(-2) + 1 = -8 + 6 + 1 = -1$

$f(2) = 2^3 - 3(2) + 1 = 8 - 6 + 1 = 3$

**Step 4: Compare**

Values: $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$

**Answer**: 
- Absolute maximum: $3$ at $x = -1$ and $x = 2$
- Absolute minimum: $-1$ at $x = 1$ and $x = -2$

---

## Common Types of Critical Points

### Type 1: Horizontal Tangent ($f'(c) = 0$)

The most common type - the derivative equals zero.

Examples:
- Tops of hills (local max)
- Bottoms of valleys (local min)
- Inflection points with horizontal tangent

### Type 2: Sharp Corner

The function is continuous but not differentiable.

Example: $f(x) = |x|$ at $x = 0$
- $f$ is continuous at $x = 0$
- $f'(0)$ does not exist (sharp turn)
- $x = 0$ is a critical point (absolute minimum!)

### Type 3: Vertical Tangent

Example: $f(x) = x^{1/3}$ at $x = 0$
- $f'(x) = \\frac{1}{3}x^{-2/3} = \\frac{1}{3x^{2/3}}$
- $f'(0)$ is undefined (vertical tangent)
- $x = 0$ is a critical point (inflection point)

### Type 4: Discontinuity

If $f$ is discontinuous at $x = c$, it's NOT a critical point (must be in domain).

---

## ⚠️ Common Mistakes

### Mistake 1: Assuming All Critical Points Are Extrema
❌ Critical points might be inflection points or saddle points
✅ Always verify using a test (First Derivative Test, Second Derivative Test)

### Mistake 2: Forgetting Endpoints
When finding absolute extrema on $[a, b]$, always check the endpoints!

### Mistake 3: Domain Errors
$x = c$ is only a critical point if it's in the domain of $f$.

### Mistake 4: Undefined vs. Zero
$f'(c) = 0$ and $f'(c)$ undefined are both critical points, but they're different!

---

## Quick Reference

### Critical Point Checklist
- [ ] Find $f'(x)$
- [ ] Solve $f'(x) = 0$
- [ ] Find where $f'(x)$ is undefined
- [ ] Verify points are in domain of $f$

### Absolute Extrema Checklist (on $[a, b]$)
- [ ] Find all critical points in $(a, b)$
- [ ] Evaluate $f$ at critical points
- [ ] Evaluate $f$ at endpoints $a$ and $b$
- [ ] Largest value = absolute max
- [ ] Smallest value = absolute min

---

## 📝 Practice Tips

1. **Always find the derivative first** before looking for critical points
2. **Set derivative equal to zero** and solve carefully
3. **Check for undefined points** in the derivative
4. **Verify domain** - make sure critical points are where $f$ exists
5. **For closed intervals**, don't forget the endpoints!
6. **To classify** critical points, use First or Second Derivative Test (next lessons!)
`,
      exampleProblems: {
        create: [
          {
            question: 'Find all critical points of $f(x) = x^4 - 4x^3 + 3$.',
            solution: `**Step 1: Find the derivative**

$f(x) = x^4 - 4x^3 + 3$

$f'(x) = 4x^3 - 12x^2$

---

**Step 2: Factor the derivative**

$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$

---

**Step 3: Set equal to zero**

$4x^2(x - 3) = 0$

This gives us:
- $4x^2 = 0$ → $x = 0$
- $x - 3 = 0$ → $x = 3$

---

**Step 4: Check if undefined**

$f'(x) = 4x^2(x-3)$ is a polynomial, so it's defined everywhere ✓

---

**Step 5: Verify in domain**

Both $x = 0$ and $x = 3$ are in the domain of $f$ ✓

**Answer**: Critical points at $x = 0$ and $x = 3$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Find the absolute maximum and minimum values of $g(x) = 2x^3 + 3x^2 - 12x + 5$ on the interval $[-3, 2]$.',
            solution: `**Step 1: Find the derivative**

$g'(x) = 6x^2 + 6x - 12$

---

**Step 2: Find critical points**

$6x^2 + 6x - 12 = 0$

$6(x^2 + x - 2) = 0$

$6(x + 2)(x - 1) = 0$

So $x = -2$ or $x = 1$

Both are in $[-3, 2]$ ✓

---

**Step 3: Evaluate at critical points**

$g(-2) = 2(-2)^3 + 3(-2)^2 - 12(-2) + 5$
$= 2(-8) + 3(4) + 24 + 5$
$= -16 + 12 + 24 + 5 = 25$

$g(1) = 2(1)^3 + 3(1)^2 - 12(1) + 5$
$= 2 + 3 - 12 + 5 = -2$

---

**Step 4: Evaluate at endpoints**

$g(-3) = 2(-3)^3 + 3(-3)^2 - 12(-3) + 5$
$= 2(-27) + 3(9) + 36 + 5$
$= -54 + 27 + 36 + 5 = 14$

$g(2) = 2(2)^3 + 3(2)^2 - 12(2) + 5$
$= 2(8) + 3(4) - 24 + 5$
$= 16 + 12 - 24 + 5 = 9$

---

**Step 5: Compare all values**

$g(-3) = 14$, $g(-2) = 25$, $g(1) = -2$, $g(2) = 9$

**Answer**: 
- **Absolute maximum**: $25$ at $x = -2$
- **Absolute minimum**: $-2$ at $x = 1$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find all critical points of $h(x) = x^{2/3}(x - 5)$.',
            solution: `**Step 1: Expand the function**

$h(x) = x^{2/3}(x - 5) = x^{5/3} - 5x^{2/3}$

---

**Step 2: Find the derivative**

$h'(x) = \\frac{5}{3}x^{2/3} - 5 \\cdot \\frac{2}{3}x^{-1/3}$

$h'(x) = \\frac{5}{3}x^{2/3} - \\frac{10}{3}x^{-1/3}$

---

**Step 3: Factor using common denominator**

$h'(x) = \\frac{5x^{2/3}}{3} - \\frac{10}{3x^{1/3}}$

$h'(x) = \\frac{5x^{2/3} \\cdot x^{1/3} - 10}{3x^{1/3}}$

$h'(x) = \\frac{5x - 10}{3x^{1/3}}$

$h'(x) = \\frac{5(x - 2)}{3x^{1/3}}$

---

**Step 4: Find where $h'(x) = 0$**

Numerator = 0: $5(x - 2) = 0$

So $x = 2$ ✓

---

**Step 5: Find where $h'(x)$ is undefined**

Denominator = 0: $3x^{1/3} = 0$

So $x = 0$ ✓

$h(0) = 0^{2/3}(0 - 5) = 0$ (in domain) ✓

---

**Answer**: Critical points at $x = 0$ and $x = 2$

**Note**: At $x = 0$, there's a vertical tangent (cusp).`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is a critical point?',
            back: 'A critical point occurs at $x = c$ if: (1) $f\'(c) = 0$, OR (2) $f\'(c)$ does not exist (and $c$ is in the domain of $f$).',
            hint: 'Two conditions: derivative zero or derivative undefined',
          },
          {
            front: 'What is the difference between absolute and local extrema?',
            back: 'Absolute (global) extrema are the highest/lowest points on the entire graph. Local (relative) extrema are peaks/valleys - higher/lower than nearby points only.',
            hint: 'Absolute = entire graph, Local = neighborhood',
          },
          {
            front: 'How do you find absolute extrema on a closed interval [a, b]?',
            back: '1) Find critical points in (a, b), 2) Evaluate f at critical points, 3) Evaluate f at endpoints a and b, 4) Largest value = abs max, smallest = abs min.',
            hint: 'Check critical points AND endpoints',
          },
          {
            front: 'Can a critical point NOT be an extremum?',
            back: 'Yes! A critical point might be an inflection point or saddle point instead of a max or min. You must test using First or Second Derivative Test.',
            hint: 'Critical points are candidates, not guarantees',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: First Derivative Test
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'first-derivative-test',
      title: 'The First Derivative Test',
      description: 'Using the derivative to classify critical points as maxima, minima, or neither',
      order: 2,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 📊 The First Derivative Test

## What is the First Derivative Test?

The **First Derivative Test** uses the sign of $f'(x)$ to determine whether a critical point is a local maximum, local minimum, or neither.

> **💡 Key Idea**: If the derivative changes from positive to negative at a critical point, you have a local max. If it changes from negative to positive, you have a local min!

---

## Understanding the Signs of the Derivative

### What $f'(x)$ Tells Us

- **$f'(x) > 0$**: Function is **increasing** (going up)
- **$f'(x) < 0$**: Function is **decreasing** (going down)
- **$f'(x) = 0$**: Function has a **horizontal tangent**

Think of it like driving a car:
- $f'(x) > 0$: driving uphill ⬆️
- $f'(x) < 0$: driving downhill ⬇️
- $f'(x) = 0$: at the top or bottom of a hill

---

## The First Derivative Test (Formal Statement)

Let $c$ be a critical point of $f$ (so $f'(c) = 0$ or $f'(c)$ undefined).

**Test the sign of $f'(x)$ on intervals around $c$**:

### Case 1: Local Maximum

If $f'$ changes from **positive to negative** at $c$:
- $f'(x) > 0$ for $x < c$ (increasing before)
- $f'(x) < 0$ for $x > c$ (decreasing after)
- Then $f(c)$ is a **local maximum** 📈➡️📉

### Case 2: Local Minimum

If $f'$ changes from **negative to positive** at $c$:
- $f'(x) < 0$ for $x < c$ (decreasing before)
- $f'(x) > 0$ for $x > c$ (increasing after)
- Then $f(c)$ is a **local minimum** 📉➡️📈

### Case 3: Neither

If $f'$ does **not change sign** at $c$:
- Then $f(c)$ is **neither** a max nor a min
- Could be an inflection point

---

## Step-by-Step Process

### How to Apply the First Derivative Test

**Step 1**: Find all critical points (solve $f'(x) = 0$ and find where $f'(x)$ is undefined)

**Step 2**: Create a **sign chart** for $f'(x)$
- Mark critical points on a number line
- Test the sign of $f'(x)$ in each interval

**Step 3**: Analyze the sign changes
- Positive → Negative = Local MAX
- Negative → Positive = Local MIN
- No change = Neither

**Step 4**: State your conclusions

---

## Example 1: Complete Analysis

Classify the critical points of $f(x) = x^3 - 3x^2 - 9x + 5$

**Step 1: Find critical points**

$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$

Critical points: $x = -1$ and $x = 3$

---

**Step 2: Create sign chart**

Test intervals: $(-\\infty, -1)$, $(-1, 3)$, $(3, \\infty)$

**Interval $(-\\infty, -1)$**: Test $x = -2$
$f'(-2) = 3(-2-3)(-2+1) = 3(-5)(-1) = 15 > 0$ ✓ POSITIVE

**Interval $(-1, 3)$**: Test $x = 0$
$f'(0) = 3(0-3)(0+1) = 3(-3)(1) = -9 < 0$ ✓ NEGATIVE

**Interval $(3, \\infty)$**: Test $x = 4$
$f'(4) = 3(4-3)(4+1) = 3(1)(5) = 15 > 0$ ✓ POSITIVE

---

**Step 3: Sign chart**

\`\`\`
        -1        3
   ++++  |  ----  |  ++++
         ▼        ▲
\`\`\`

---

**Step 4: Conclusions**

At $x = -1$: $f'$ goes from + to − → **LOCAL MAXIMUM**

At $x = 3$: $f'$ goes from − to + → **LOCAL MINIMUM**

Calculate the values:
- $f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10$
- $f(3) = 3^3 - 3(3)^2 - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$

**Answer**: 
- Local maximum of $10$ at $x = -1$
- Local minimum of $-22$ at $x = 3$

---

## Creating Sign Charts

### Method 1: Test Points

Pick any value in each interval and substitute into $f'(x)$.

**Tip**: Use easy numbers like $0, 1, -1, 10, -10$

### Method 2: Factored Form

If $f'(x) = a(x - r_1)(x - r_2)\\cdots$, analyze each factor's sign.

**Example**: $f'(x) = (x+2)(x-1)$

\`\`\`
Interval      (x+2)  (x-1)  Product
(-∞, -2)        −      −       +
(-2, 1)         +      −       −
(1, ∞)          +      +       +
\`\`\`

---

## Increasing and Decreasing Intervals

The First Derivative Test also tells us where $f$ is increasing or decreasing:

### From the Sign Chart

- Where $f'(x) > 0$: $f$ is **increasing**
- Where $f'(x) < 0$: $f$ is **decreasing**

**Example from above**:
- $f$ is increasing on $(-\\infty, -1)$ and $(3, \\infty)$
- $f$ is decreasing on $(-1, 3)$

---

## Special Cases

### Case 1: Inflection Point with Horizontal Tangent

If $f'(c) = 0$ but the sign doesn't change, it's usually an inflection point.

**Example**: $f(x) = x^3$ at $x = 0$
- $f'(x) = 3x^2$, so $f'(0) = 0$
- $f'(x) > 0$ for all $x \\neq 0$ (no sign change!)
- $x = 0$ is an inflection point, not an extremum

### Case 2: Multiple Critical Points in a Row

Handle each one separately using the test.

### Case 3: Derivative Undefined

The test still works! Just check the sign change around the point.

**Example**: $f(x) = |x|$ at $x = 0$
- $f'(x) < 0$ for $x < 0$
- $f'(x) > 0$ for $x > 0$
- Changes from − to + → local minimum at $x = 0$ ✓

---

## ⚠️ Common Mistakes

### Mistake 1: Testing AT the Critical Point
❌ Don't test $f'(c)$ where $c$ is the critical point
✅ Test points on either SIDE of $c$

### Mistake 2: Wrong Sign Interpretation
The sign of $f'$, not $f$, determines increasing/decreasing!

### Mistake 3: Forgetting to Check All Critical Points
Each critical point needs its own analysis.

### Mistake 4: Not Using Factored Form
Factor $f'(x)$ completely to make sign analysis easier!

---

## First Derivative Test vs. Other Methods

### When to Use the First Derivative Test

✅ **Always works** (if derivative exists on either side)
✅ Good for understanding overall behavior
✅ Tells you increasing/decreasing intervals
✅ Works when second derivative is hard to compute

### When to Use the Second Derivative Test (coming next!)

✅ Faster for simple cases
✅ Only need to evaluate at one point
❌ Fails if $f''(c) = 0$
❌ Doesn't give increasing/decreasing info

---

## Quick Reference Chart

| Sign Change | Result |
|-------------|--------|
| + → − | Local MAX ⬆️⬇️ |
| − → + | Local MIN ⬇️⬆️ |
| + → + | Neither (increasing through) |
| − → − | Neither (decreasing through) |

---

## 📝 Practice Strategy

1. **Find and factor** $f'(x)$ completely
2. **Mark critical points** on a number line
3. **Test one point** in each interval (use easy numbers)
4. **Record signs** carefully: + for positive, − for negative
5. **Look for sign changes**: + to − is max, − to + is min
6. **State intervals**: Where increasing? Where decreasing?
7. **Calculate $f$ values** at extrema for complete answer
`,
      exampleProblems: {
        create: [
          {
            question: 'Use the First Derivative Test to find all local extrema of $f(x) = x^4 - 4x^3$.',
            solution: `**Step 1: Find the derivative**

$f(x) = x^4 - 4x^3$

$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$

---

**Step 2: Find critical points**

$4x^2(x - 3) = 0$

$x = 0$ or $x = 3$

---

**Step 3: Create sign chart**

Test intervals: $(-\\infty, 0)$, $(0, 3)$, $(3, \\infty)$

**Test $x = -1$** (in $(-\\infty, 0)$):
$f'(-1) = 4(-1)^2(-1-3) = 4(1)(-4) = -16 < 0$ ✓ NEGATIVE

**Test $x = 1$** (in $(0, 3)$):
$f'(1) = 4(1)^2(1-3) = 4(1)(-2) = -8 < 0$ ✓ NEGATIVE

**Test $x = 4$** (in $(3, \\infty)$):
$f'(4) = 4(4)^2(4-3) = 4(16)(1) = 64 > 0$ ✓ POSITIVE

---

**Step 4: Analyze sign chart**

\`\`\`
        0         3
   ----  |  ----  |  ++++
                  ▲
\`\`\`

At $x = 0$: − to − (no change) → **NEITHER** (inflection point)

At $x = 3$: − to + → **LOCAL MINIMUM**

---

**Step 5: Calculate the minimum value**

$f(3) = 3^4 - 4(3)^3 = 81 - 108 = -27$

**Answer**: Local minimum of $-27$ at $x = 3$. No local maximum. ($x = 0$ is an inflection point with horizontal tangent.)`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find the intervals where $g(x) = x + \\frac{4}{x}$ is increasing and decreasing. Identify all local extrema.',
            solution: `**Step 1: Find the derivative**

$g(x) = x + 4x^{-1}$

$g'(x) = 1 - 4x^{-2} = 1 - \\frac{4}{x^2}$

---

**Step 2: Find critical points**

Set $g'(x) = 0$:

$1 - \\frac{4}{x^2} = 0$

$\\frac{4}{x^2} = 1$

$x^2 = 4$

$x = \\pm 2$

Also, $g'(x)$ is undefined at $x = 0$, but $g(0)$ is also undefined, so $x = 0$ is NOT a critical point (not in domain).

Critical points: $x = -2$ and $x = 2$

---

**Step 3: Create sign chart**

Test intervals: $(-\\infty, -2)$, $(-2, 0)$, $(0, 2)$, $(2, \\infty)$

Note: $x = 0$ is not in the domain but divides the intervals.

**Test $x = -3$**:
$g'(-3) = 1 - \\frac{4}{9} = \\frac{5}{9} > 0$ ✓ POSITIVE

**Test $x = -1$**:
$g'(-1) = 1 - \\frac{4}{1} = -3 < 0$ ✓ NEGATIVE

**Test $x = 1$**:
$g'(1) = 1 - \\frac{4}{1} = -3 < 0$ ✓ NEGATIVE

**Test $x = 3$**:
$g'(3) = 1 - \\frac{4}{9} = \\frac{5}{9} > 0$ ✓ POSITIVE

---

**Step 4: Sign chart**

\`\`\`
       -2    0    2
   ++++  | -- | --  | ++++
         ▼      ▲
\`\`\`

---

**Step 5: Classify critical points**

At $x = -2$: + to − → **LOCAL MAXIMUM**

At $x = 2$: − to + → **LOCAL MINIMUM**

Calculate values:
- $g(-2) = -2 + \\frac{4}{-2} = -2 - 2 = -4$
- $g(2) = 2 + \\frac{4}{2} = 2 + 2 = 4$

---

**Answer**: 
- **Increasing** on $(-\\infty, -2)$ and $(2, \\infty)$
- **Decreasing** on $(-2, 0)$ and $(0, 2)$
- **Local maximum** of $-4$ at $x = -2$
- **Local minimum** of $4$ at $x = 2$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Use the First Derivative Test on $h(x) = x^{2/3}(x-4)$ to find and classify all critical points.',
            solution: `**Step 1: Expand and find derivative**

$h(x) = x^{2/3}(x-4) = x^{5/3} - 4x^{2/3}$

$h'(x) = \\frac{5}{3}x^{2/3} - 4 \\cdot \\frac{2}{3}x^{-1/3}$

$h'(x) = \\frac{5}{3}x^{2/3} - \\frac{8}{3}x^{-1/3}$

---

**Step 2: Combine using common denominator**

$h'(x) = \\frac{5x^{2/3} \\cdot x^{1/3} - 8}{3x^{1/3}} = \\frac{5x - 8}{3x^{1/3}}$

---

**Step 3: Find critical points**

$h'(x) = 0$: $5x - 8 = 0$ → $x = \\frac{8}{5}$

$h'(x)$ undefined: $x^{1/3} = 0$ → $x = 0$

Critical points: $x = 0$ and $x = \\frac{8}{5}$

---

**Step 4: Test signs**

**Test $x = -1$** (in $(-\\infty, 0)$):
$h'(-1) = \\frac{5(-1)-8}{3(-1)^{1/3}} = \\frac{-13}{3(-1)} = \\frac{-13}{-3} > 0$ ✓ POSITIVE

**Test $x = 1$** (in $(0, \\frac{8}{5})$):
$h'(1) = \\frac{5(1)-8}{3(1)^{1/3}} = \\frac{-3}{3} = -1 < 0$ ✓ NEGATIVE

**Test $x = 2$** (in $(\\frac{8}{5}, \\infty)$):
$h'(2) = \\frac{5(2)-8}{3(2)^{1/3}} = \\frac{2}{3\\sqrt[3]{2}} > 0$ ✓ POSITIVE

---

**Step 5: Sign chart**

\`\`\`
        0      8/5
   ++++  |  ----  |  ++++
         ▼        ▲
\`\`\`

At $x = 0$: + to − → **LOCAL MAXIMUM**

At $x = \\frac{8}{5}$: − to + → **LOCAL MINIMUM**

---

**Step 6: Calculate values**

$h(0) = 0^{2/3}(0-4) = 0$

$h\\left(\\frac{8}{5}\\right) = \\left(\\frac{8}{5}\\right)^{2/3}\\left(\\frac{8}{5}-4\\right)$

$= \\left(\\frac{8}{5}\\right)^{2/3}\\left(-\\frac{12}{5}\\right)$

$= -\\frac{12}{5} \\cdot \\frac{4}{5^{2/3}} \\approx -3.07$

**Answer**: 
- **Local maximum** of $0$ at $x = 0$
- **Local minimum** of $-\\frac{12}{5}\\left(\\frac{8}{5}\\right)^{2/3} \\approx -3.07$ at $x = \\frac{8}{5}$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What does it mean if $f\'(x) > 0$ on an interval?',
            back: 'The function $f$ is **increasing** on that interval (going uphill).',
            hint: 'Positive derivative means increasing',
          },
          {
            front: 'How do you identify a local maximum using the First Derivative Test?',
            back: 'If $f\'$ changes from positive to negative at $c$ (+ → −), then $f(c)$ is a local maximum. The function goes from increasing to decreasing.',
            hint: 'Positive to negative = peak',
          },
          {
            front: 'What are the steps for the First Derivative Test?',
            back: '1) Find critical points, 2) Create sign chart for $f\'(x)$, 3) Test signs in each interval, 4) Look for sign changes: + to − is max, − to + is min',
            hint: 'Critical points → sign chart → analyze',
          },
          {
            front: 'If $f\'(x)$ does not change sign at a critical point $c$, what does that mean?',
            back: '$f(c)$ is neither a local maximum nor minimum. It\'s likely an inflection point with horizontal tangent (like $f(x) = x^3$ at $x = 0$).',
            hint: 'No sign change = not an extremum',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 Applications of Derivatives micro-lessons!')
  console.log('\nTopics created:')
  console.log('  1. Critical Points and Extrema')
  console.log('  2. First Derivative Test')
  console.log('\n💡 Starting the Applications section!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
