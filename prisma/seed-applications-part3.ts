import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Applications of Derivatives micro-lessons - Part 3...')

  // Get the Applications of Derivatives category
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
          'curve-sketching',
          'mean-value-theorem',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Curve Sketching
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'curve-sketching',
      title: 'Curve Sketching',
      description: 'Using derivatives to sketch accurate graphs of functions',
      order: 5,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 📈 Curve Sketching

## What is Curve Sketching?

**Curve sketching** is the art of drawing an accurate graph of a function using calculus. Instead of plotting points, we use derivatives to understand the function's behavior!

> **💡 Key Idea**: Use $f'(x)$ and $f''(x)$ to determine where the function is increasing/decreasing and where it's curving up/down.

---

## The Complete Curve Sketching Checklist

### Step-by-Step Guide

**Step 1**: Find the **domain**

**Step 2**: Find **intercepts**
- $y$-intercept: Set $x = 0$
- $x$-intercepts: Solve $f(x) = 0$

**Step 3**: Check for **symmetry**
- Even: $f(-x) = f(x)$ (symmetric about $y$-axis)
- Odd: $f(-x) = -f(x)$ (symmetric about origin)

**Step 4**: Find **asymptotes**
- Vertical: Where denominator = 0 (for rational functions)
- Horizontal: Check $\\lim_{x \\to \\pm\\infty} f(x)$
- Slant: If degree of numerator is 1 more than denominator

**Step 5**: Find **critical points** ($f'(x) = 0$ or undefined)

**Step 6**: Determine **intervals of increase/decrease**
- $f'(x) > 0$: increasing
- $f'(x) < 0$: decreasing

**Step 7**: Find **local extrema** (use First or Second Derivative Test)

**Step 8**: Find **inflection points** ($f''(x) = 0$ and concavity changes)

**Step 9**: Determine **concavity**
- $f''(x) > 0$: concave up ∪
- $f''(x) < 0$: concave down ∩

**Step 10**: **Sketch** the graph using all information!

---

## What Each Derivative Tells You

### First Derivative: $f'(x)$

**Sign of $f'(x)$**:
- $f'(x) > 0$ → function **increasing** ↗
- $f'(x) < 0$ → function **decreasing** ↘
- $f'(x) = 0$ → **horizontal tangent** (potential max/min)

**Critical points**: Where $f'(x) = 0$ or $f'(x)$ undefined

**Local extrema**: Where $f'$ changes sign

### Second Derivative: $f''(x)$

**Sign of $f''(x)$**:
- $f''(x) > 0$ → **concave up** ∪ (curving upward)
- $f''(x) < 0$ → **concave down** ∩ (curving downward)
- $f''(x) = 0$ → potential **inflection point**

**Inflection points**: Where concavity changes (and $f''$ changes sign)

---

## Example: Complete Curve Sketch

Sketch $f(x) = x^3 - 6x^2 + 9x + 1$

---

**Step 1: Domain**

Polynomial → domain is all real numbers: $(-\\infty, \\infty)$

---

**Step 2: Intercepts**

$y$-intercept: $f(0) = 1$ → point $(0, 1)$

$x$-intercepts: $x^3 - 6x^2 + 9x + 1 = 0$ (hard to solve, skip for now)

---

**Step 3: Symmetry**

$f(-x) = -x^3 - 6x^2 - 9x + 1 \\neq f(x)$ and $\\neq -f(x)$

No symmetry

---

**Step 4: Asymptotes**

Polynomial → no asymptotes

---

**Step 5: First derivative and critical points**

$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$

Critical points: $x = 1$ and $x = 3$

---

**Step 6: Sign chart for $f'(x)$**

\`\`\`
        1         3
   ++++  |  ----  |  ++++
      ↗  ▼  ↘     ▲  ↗
\`\`\`

- Increasing on $(-\\infty, 1)$ and $(3, \\infty)$
- Decreasing on $(1, 3)$

---

**Step 7: Local extrema**

At $x = 1$: $f'$ changes + to − → **local max**
$f(1) = 1 - 6 + 9 + 1 = 5$

At $x = 3$: $f'$ changes − to + → **local min**
$f(3) = 27 - 54 + 27 + 1 = 1$

---

**Step 8: Second derivative and inflection points**

$f''(x) = 6x - 12 = 6(x - 2)$

$f''(x) = 0$ when $x = 2$

---

**Step 9: Concavity**

\`\`\`
           2
   ----    |    ++++
      ∩         ∪
\`\`\`

- Concave down on $(-\\infty, 2)$
- Concave up on $(2, \\infty)$
- Inflection point at $x = 2$: $f(2) = 8 - 24 + 18 + 1 = 3$

---

**Step 10: Sketch**

Key points:
- $(0, 1)$ - $y$-intercept
- $(1, 5)$ - local max
- $(2, 3)$ - inflection point
- $(3, 1)$ - local min

The graph:
- Increases to $(1, 5)$, then decreases to $(3, 1)$, then increases again
- Concave down until $x = 2$, then concave up
- Passes through $(0, 1)$

---

## Special Features to Look For

### Cusps and Corners

Where $f$ is continuous but $f'$ doesn't exist

**Example**: $f(x) = |x|$ has a corner at $x = 0$

### Vertical Tangents

Where $f'(x) = \\pm\\infty$

**Example**: $f(x) = x^{1/3}$ has vertical tangent at $x = 0$

### Discontinuities

- Jump discontinuity
- Removable discontinuity
- Infinite discontinuity (vertical asymptote)

---

## Analyzing Rational Functions

For $f(x) = \\frac{p(x)}{q(x)}$:

### Vertical Asymptotes

Occur where $q(x) = 0$ (denominator zero, numerator non-zero)

**Example**: $f(x) = \\frac{1}{x-2}$ has vertical asymptote at $x = 2$

### Horizontal Asymptotes

Compare degrees of $p(x)$ and $q(x)$:

1. If deg($p$) < deg($q$): $y = 0$ is horizontal asymptote
2. If deg($p$) = deg($q$): $y = \\frac{\\text{leading coef of } p}{\\text{leading coef of } q}$
3. If deg($p$) > deg($q$): No horizontal asymptote (may have slant asymptote)

**Example**: $f(x) = \\frac{2x^2 + 1}{x^2 - 4}$ has horizontal asymptote $y = 2$

### Slant (Oblique) Asymptotes

When deg($p$) = deg($q$) + 1, use polynomial division

**Example**: $f(x) = \\frac{x^2 + 1}{x}$ has slant asymptote $y = x$

---

## Quick Summary Table

| Feature | How to Find | What It Tells You |
|---------|-------------|-------------------|
| Domain | Where $f$ is defined | Valid $x$ values |
| Intercepts | $f(0)$ and $f(x) = 0$ | Where graph crosses axes |
| Critical pts | $f'(x) = 0$ or undef | Potential max/min |
| Inc/Dec | Sign of $f'(x)$ | Direction of graph |
| Local extrema | Sign change in $f'$ | Peaks and valleys |
| Inflection pts | $f''(x) = 0$ + sign change | Where concavity changes |
| Concavity | Sign of $f''(x)$ | Curvature direction |
| Asymptotes | Limits, denominators | Boundary behavior |

---

## ⚠️ Common Mistakes

### Mistake 1: Not Checking Sign Changes
$f''(c) = 0$ doesn't guarantee an inflection point - concavity must **change**!

### Mistake 2: Forgetting Domain
Always consider where the function is actually defined.

### Mistake 3: Plotting Only Critical Points
Include inflection points, intercepts, and other key features!

### Mistake 4: Wrong Asymptote Analysis
Vertical asymptotes: denominator = 0
Horizontal asymptotes: check limits at infinity

### Mistake 5: Ignoring Behavior at Infinity
Always check what happens as $x \\to \\pm\\infty$

---

## The Big Picture

### Putting It All Together

1. **$f(x)$** tells you the **height** of the graph
2. **$f'(x)$** tells you the **slope** (increasing/decreasing)
3. **$f''(x)$** tells you the **curvature** (concave up/down)

All three work together to give you a complete picture!

---

## Shortcut for Simple Polynomials

For polynomials, you can often skip some steps:
- No asymptotes
- Domain is always $\\mathbb{R}$
- Continuous everywhere
- Focus on critical points, extrema, and inflection points

---

## 📝 Practice Strategy

1. **Follow the checklist** systematically
2. **Make a sign chart** for both $f'$ and $f''$
3. **Calculate key points** (don't just mark $x$-values, find $y$ too!)
4. **Sketch lightly first**, then refine
5. **Check your work**: Does the sketch match your analysis?
6. **Label everything**: maxima, minima, inflection points, asymptotes
`,
      exampleProblems: {
        create: [
          {
            question: 'Sketch the graph of $f(x) = x^4 - 4x^3$ using calculus.',
            solution: `**Step 1: Domain**

Polynomial → $(-\\infty, \\infty)$

---

**Step 2: Intercepts**

$y$-intercept: $f(0) = 0$ → $(0, 0)$

$x$-intercepts: $x^4 - 4x^3 = 0$
$x^3(x - 4) = 0$
$x = 0$ or $x = 4$ → $(0, 0)$ and $(4, 0)$

---

**Step 3: Symmetry**

$f(-x) = x^4 + 4x^3 \\neq f(x)$ → No symmetry

---

**Step 4: First derivative**

$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$

Critical points: $x = 0, 3$

---

**Step 5: Sign chart for $f'$**

Test points:
- $x = -1$: $f'(-1) = 4(1)(-4) = -16 < 0$
- $x = 1$: $f'(1) = 4(1)(-2) = -8 < 0$
- $x = 4$: $f'(4) = 4(16)(1) = 64 > 0$

\`\`\`
        0         3
   ----  |  ----  |  ++++
      ↘       ↘  ▲  ↗
\`\`\`

Decreasing on $(-\\infty, 3)$, increasing on $(3, \\infty)$

Local minimum at $x = 3$: $f(3) = 81 - 108 = -27$

Note: $x = 0$ is NOT an extremum (no sign change)

---

**Step 6: Second derivative**

$f''(x) = 12x^2 - 24x = 12x(x - 2)$

$f''(x) = 0$ when $x = 0$ or $x = 2$

---

**Step 7: Concavity**

Test points:
- $x = -1$: $f''(-1) = 12(1)(-3) = -36... wait, let me recalculate$
- $x = -1$: $f''(-1) = 12(-1)(-1-2) = 12(-1)(-3) = 36 > 0$
- $x = 1$: $f''(1) = 12(1)(1-2) = 12(1)(-1) = -12 < 0$
- $x = 3$: $f''(3) = 12(3)(3-2) = 36 > 0$

\`\`\`
        0         2
   ++++  |  ----  |  ++++
      ∪       ∩       ∪
\`\`\`

Inflection points at $x = 0$ and $x = 2$

$f(0) = 0$, $f(2) = 16 - 32 = -16$

---

**Summary for sketch**:

Key points:
- $(0, 0)$ - intercept and inflection point
- $(2, -16)$ - inflection point
- $(3, -27)$ - local minimum
- $(4, 0)$ - $x$-intercept

Behavior:
- Decreasing from $-\\infty$ to $(3, -27)$
- Then increasing to $+\\infty$
- Concave up, then down, then up again
- Passes through origin`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Sketch the graph of $g(x) = \\frac{x^2}{x^2 - 4}$ using calculus. Include all asymptotes.',
            solution: `**Step 1: Domain**

Denominator: $x^2 - 4 = (x-2)(x+2) = 0$ when $x = \\pm 2$

Domain: $(-\\infty, -2) \\cup (-2, 2) \\cup (2, \\infty)$

---

**Step 2: Intercepts**

$y$-intercept: $g(0) = \\frac{0}{-4} = 0$ → $(0, 0)$

$x$-intercepts: $x^2 = 0$ → $x = 0$ → $(0, 0)$

---

**Step 3: Symmetry**

$g(-x) = \\frac{(-x)^2}{(-x)^2 - 4} = \\frac{x^2}{x^2-4} = g(x)$

**EVEN function** - symmetric about $y$-axis!

---

**Step 4: Asymptotes**

**Vertical**: At $x = -2$ and $x = 2$ (where denominator = 0)

**Horizontal**: 
$\\lim_{x \\to \\infty} \\frac{x^2}{x^2 - 4} = \\lim_{x \\to \\infty} \\frac{1}{1 - 4/x^2} = 1$

Horizontal asymptote: $y = 1$

---

**Step 5: First derivative (Quotient Rule)**

$g'(x) = \\frac{2x(x^2-4) - x^2(2x)}{(x^2-4)^2}$

$= \\frac{2x^3 - 8x - 2x^3}{(x^2-4)^2}$

$= \\frac{-8x}{(x^2-4)^2}$

Critical point: $-8x = 0$ → $x = 0$

---

**Step 6: Sign of $g'$**

Since $(x^2-4)^2 > 0$ always, sign depends on $-8x$:

- $x < 0$: $-8x > 0$ → increasing
- $x > 0$: $-8x < 0$ → decreasing

Local maximum at $x = 0$: $g(0) = 0$

---

**Step 7: Second derivative (skip for brevity)**

Can verify concavity, but we have enough information.

---

**Step 8: Behavior near asymptotes**

Near $x = 2^+$: numerator → 4, denominator → $0^+$ → $g(x) \\to +\\infty$

Near $x = 2^-$: numerator → 4, denominator → $0^-$ → $g(x) \\to -\\infty$

By symmetry, similar behavior at $x = -2$

---

**Summary for sketch**:

- Symmetric about $y$-axis
- Vertical asymptotes at $x = \\pm 2$
- Horizontal asymptote at $y = 1$
- Local max at $(0, 0)$
- Increasing on $(-\\infty, -2)$ and $(-2, 0)$
- Decreasing on $(0, 2)$ and $(2, \\infty)$
- As $x \\to \\pm\\infty$, $g(x) \\to 1$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Analyze and sketch $h(x) = xe^{-x}$ completely.',
            solution: `**Step 1: Domain**

All real numbers: $(-\\infty, \\infty)$

---

**Step 2: Intercepts**

$y$-intercept: $h(0) = 0 \\cdot e^0 = 0$ → $(0, 0)$

$x$-intercepts: $xe^{-x} = 0$ → $x = 0$ → $(0, 0)$

---

**Step 3: Limits (behavior at infinity)**

As $x \\to -\\infty$: $e^{-x} \\to \\infty$, so $h(x) \\to -\\infty$

As $x \\to +\\infty$: $\\frac{x}{e^x} \\to 0$ (exponential dominates)

Horizontal asymptote: $y = 0$ (as $x \\to \\infty$)

---

**Step 4: First derivative (Product Rule)**

$h'(x) = (1)(e^{-x}) + (x)(-e^{-x})$

$= e^{-x} - xe^{-x}$

$= e^{-x}(1 - x)$

Critical point: $1 - x = 0$ → $x = 1$

---

**Step 5: Sign of $h'$**

$e^{-x} > 0$ always, so sign depends on $(1-x)$:

- $x < 1$: $(1-x) > 0$ → increasing
- $x > 1$: $(1-x) < 0$ → decreasing

Local maximum at $x = 1$: $h(1) = 1 \\cdot e^{-1} = \\frac{1}{e} \\approx 0.368$

---

**Step 6: Second derivative**

$h''(x) = (-e^{-x})(1-x) + e^{-x}(-1)$

$= -e^{-x}(1-x) - e^{-x}$

$= -e^{-x}(1-x+1)$

$= -e^{-x}(2-x)$

$= e^{-x}(x-2)$

Inflection point: $x - 2 = 0$ → $x = 2$

---

**Step 7: Concavity**

- $x < 2$: $(x-2) < 0$ → concave down
- $x > 2$: $(x-2) > 0$ → concave up

Inflection point at $x = 2$: $h(2) = 2e^{-2} = \\frac{2}{e^2} \\approx 0.271$

---

**Summary for sketch**:

Key points:
- $(0, 0)$ - origin
- $(1, 1/e)$ - local maximum
- $(2, 2/e^2)$ - inflection point

Behavior:
- Increases from $-\\infty$ to max at $x=1$
- Decreases from max, approaching 0 as $x \\to \\infty$
- Concave down until $x=2$, then concave up
- Horizontal asymptote $y=0$ on the right

**Answer**: The graph rises from negative infinity through the origin, reaches a maximum at $(1, 1/e)$, has an inflection point at $(2, 2/e^2)$, and approaches 0 as $x \\to \\infty$.`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What does the sign of $f\'(x)$ tell you when sketching a curve?',
            back: 'If $f\'(x) > 0$, the function is increasing (going up). If $f\'(x) < 0$, the function is decreasing (going down). Where $f\'(x) = 0$, there\'s a horizontal tangent.',
            hint: 'Think about the slope of the tangent line',
          },
          {
            front: 'What does the sign of $f\'\'(x)$ tell you when sketching a curve?',
            back: 'If $f\'\'(x) > 0$, the graph is concave up (∪). If $f\'\'(x) < 0$, the graph is concave down (∩). Where $f\'\'(x) = 0$ and changes sign, there\'s an inflection point.',
            hint: 'Think about the curvature direction',
          },
          {
            front: 'How do you find vertical asymptotes of a rational function?',
            back: 'Set the denominator equal to zero and solve. Check that the numerator is non-zero at those points. Example: $f(x) = \\frac{1}{x-3}$ has vertical asymptote at $x = 3$.',
            hint: 'Look at where the denominator equals zero',
          },
          {
            front: 'What are the three main things you need for a complete curve sketch?',
            back: '1) Critical points and extrema (using $f\'$), 2) Inflection points and concavity (using $f\'\'$), 3) Asymptotes and limits at infinity (using domain and limits).',
            hint: 'First derivative, second derivative, and boundary behavior',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Mean Value Theorem
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'mean-value-theorem',
      title: 'Mean Value Theorem',
      description: 'Understanding the theoretical foundation connecting average and instantaneous rates',
      order: 6,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 🎓 Mean Value Theorem

## What is the Mean Value Theorem?

The **Mean Value Theorem (MVT)** is one of the most important theoretical results in calculus. It connects the **average rate of change** over an interval to the **instantaneous rate of change** at some point.

> **💡 Key Idea**: If you drive 100 miles in 2 hours (average 50 mph), at some moment you were going exactly 50 mph!

---

## The Theorem (Formal Statement)

Let $f$ be a function that is:
1. **Continuous** on the closed interval $[a, b]$
2. **Differentiable** on the open interval $(a, b)$

Then there exists at least one number $c$ in $(a, b)$ such that:

$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

### In Words

There is at least one point where the **instantaneous rate of change** (derivative) equals the **average rate of change** (slope of secant line).

---

## Visual Understanding

### The Secant Line

The secant line connects $(a, f(a))$ to $(b, f(b))$.

Its slope is: $\\frac{f(b) - f(a)}{b - a}$

### The Tangent Line

The MVT says there's a point $c$ where the tangent line is **parallel** to the secant line.

**Geometric interpretation**: Somewhere between $a$ and $b$, the curve has a tangent line with the same slope as the overall average slope.

---

## Rolle's Theorem (Special Case)

**Rolle's Theorem** is a special case of MVT when $f(a) = f(b)$.

### Statement

If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists $c$ in $(a, b)$ such that:

$$f'(c) = 0$$

### In Words

If a function starts and ends at the same height, somewhere in between it has a horizontal tangent!

**Example**: If you hike up and back down to your starting elevation, at some point you reached the top (where slope = 0).

---

## How to Apply the MVT

### Step-by-Step Process

**Step 1**: Verify the hypotheses
- Is $f$ continuous on $[a, b]$?
- Is $f$ differentiable on $(a, b)$?

**Step 2**: Calculate the average rate of change
$$m = \\frac{f(b) - f(a)}{b - a}$$

**Step 3**: Find $f'(x)$

**Step 4**: Solve $f'(c) = m$ for $c$

**Step 5**: Verify that $c$ is in $(a, b)$

---

## Example 1: Finding the Point

Find all values of $c$ that satisfy the MVT for $f(x) = x^2$ on $[1, 3]$.

**Step 1: Check hypotheses**

$f(x) = x^2$ is a polynomial:
- Continuous everywhere ✓
- Differentiable everywhere ✓

MVT applies!

---

**Step 2: Average rate of change**

$$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$$

---

**Step 3: Find derivative**

$$f'(x) = 2x$$

---

**Step 4: Solve $f'(c) = 4$**

$$2c = 4$$
$$c = 2$$

---

**Step 5: Verify**

Is $c = 2$ in $(1, 3)$? Yes! ✓

**Answer**: $c = 2$ satisfies the MVT.

At $x = 2$, the instantaneous rate equals the average rate!

---

## Example 2: MVT Doesn't Apply

Why doesn't MVT apply to $f(x) = |x|$ on $[-1, 1]$?

$f$ is continuous on $[-1, 1]$ ✓

But $f$ is NOT differentiable at $x = 0$ (corner/cusp) ✗

Since $0$ is in $(-1, 1)$, the MVT **does not apply**.

---

## Why the Hypotheses Matter

### Continuity Required

If $f$ has a jump discontinuity, there may be no point where the tangent slope equals the average slope.

### Differentiability Required

If $f$ has a corner (like $|x|$ at $x=0$), the derivative doesn't exist there, so we can't apply MVT.

### On $(a, b)$, not $[a, b]$

The function only needs to be differentiable on the **open** interval. It's okay if $f'(a)$ or $f'(b)$ don't exist!

---

## Applications of MVT

### Application 1: Proving Functions are Equal

If $f'(x) = g'(x)$ for all $x$ in an interval, then:
$$f(x) = g(x) + C$$

for some constant $C$.

**Why**: If $h(x) = f(x) - g(x)$, then $h'(x) = 0$ everywhere. By MVT, $h$ must be constant!

### Application 2: Estimating Values

If we know $f'(x)$ is bounded, we can estimate how much $f$ can change.

**Example**: If $|f'(x)| \\leq 2$ for all $x$ in $[0, 5]$, then:
$$|f(5) - f(0)| \\leq 2 \\cdot 5 = 10$$

### Application 3: Speed Limits

If a car travels 120 miles in 2 hours (average 60 mph), by MVT the car must have been going exactly 60 mph at some instant!

If the speed limit is 55 mph, the driver was definitely speeding at some point. 🚗

---

## Increasing and Decreasing Functions

### Important Corollary

Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$.

**Increasing Function Test**:
- If $f'(x) > 0$ for all $x$ in $(a, b)$, then $f$ is increasing on $[a, b]$

**Decreasing Function Test**:
- If $f'(x) < 0$ for all $x$ in $(a, b)$, then $f$ is decreasing on $[a, b]$

**Constant Function Test**:
- If $f'(x) = 0$ for all $x$ in $(a, b)$, then $f$ is constant on $[a, b]$

**Proof idea**: Uses MVT repeatedly!

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Interval
The value $c$ must be in the **open** interval $(a, b)$, not including endpoints!

### Mistake 2: Not Checking Hypotheses
Always verify continuity and differentiability before applying MVT!

### Mistake 3: Expecting Unique $c$
MVT says "at least one" $c$ exists. There might be multiple values!

### Mistake 4: Confusing with Extreme Value Theorem
- EVT: Guarantees max and min exist
- MVT: Guarantees a point where instantaneous rate = average rate

---

## MVT vs. Other Theorems

### Extreme Value Theorem (EVT)

**EVT**: Continuous function on $[a, b]$ has absolute max and min

**MVT**: Connects average and instantaneous rates

### Intermediate Value Theorem (IVT)

**IVT**: Continuous function takes all values between $f(a)$ and $f(b)$

**MVT**: About derivatives, not function values

---

## Extended Mean Value Theorem (Cauchy)

There's a more general version for two functions:

If $f$ and $g$ are continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c$ in $(a, b)$ such that:

$$\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$$

This is used in proving L'Hôpital's Rule!

---

## Proof Sketch of MVT

**Idea**: Create a function that measures the vertical distance from the curve to the secant line, then apply Rolle's Theorem.

**Define**: 
$$h(x) = f(x) - \\left[f(a) + \\frac{f(b)-f(a)}{b-a}(x-a)\\right]$$

Then $h(a) = h(b) = 0$, so by Rolle's Theorem, there exists $c$ where $h'(c) = 0$.

Working out $h'(c) = 0$ gives $f'(c) = \\frac{f(b)-f(a)}{b-a}$ ✓

---

## 📝 Key Takeaways

1. **MVT connects average and instantaneous rates** - somewhere the tangent is parallel to the secant

2. **Requires continuity on $[a, b]$** and **differentiability on $(a, b)$**

3. **Guarantees existence** of at least one $c$, but doesn't tell you how many

4. **Applications**: Proving functions equal, bounding changes, theoretical foundation

5. **Geometric meaning**: Tangent line parallel to secant line

6. **Rolle's Theorem** is the special case when $f(a) = f(b)$

---

## Practice Tips

1. **Always check hypotheses** before applying MVT
2. **Calculate average rate first**: $\\frac{f(b)-f(a)}{b-a}$
3. **Set $f'(c)$ equal** to the average rate and solve
4. **Verify** $c$ is in the open interval $(a, b)$
5. **Understand geometrically** - it's about parallel slopes!
`,
      exampleProblems: {
        create: [
          {
            question: 'Verify that $f(x) = x^3 - 3x + 1$ satisfies the hypotheses of the Mean Value Theorem on $[0, 2]$, then find all values of $c$ that satisfy the conclusion.',
            solution: `**Step 1: Verify hypotheses**

$f(x) = x^3 - 3x + 1$ is a polynomial.

Polynomials are continuous everywhere ✓

Polynomials are differentiable everywhere ✓

MVT applies on $[0, 2]$ ✓

---

**Step 2: Calculate average rate of change**

$f(0) = 0^3 - 3(0) + 1 = 1$

$f(2) = 2^3 - 3(2) + 1 = 8 - 6 + 1 = 3$

Average rate:
$$\\frac{f(2) - f(0)}{2 - 0} = \\frac{3 - 1}{2} = \\frac{2}{2} = 1$$

---

**Step 3: Find $f'(x)$**

$$f'(x) = 3x^2 - 3$$

---

**Step 4: Solve $f'(c) = 1$**

$$3c^2 - 3 = 1$$

$$3c^2 = 4$$

$$c^2 = \\frac{4}{3}$$

$$c = \\pm\\frac{2}{\\sqrt{3}} = \\pm\\frac{2\\sqrt{3}}{3}$$

---

**Step 5: Check which values are in $(0, 2)$**

$c = \\frac{2\\sqrt{3}}{3} \\approx 1.155$ ✓ (in $(0, 2)$)

$c = -\\frac{2\\sqrt{3}}{3} \\approx -1.155$ ✗ (not in $(0, 2)$)

**Answer**: $c = \\frac{2\\sqrt{3}}{3}$ satisfies the Mean Value Theorem.`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Explain why the Mean Value Theorem does not apply to $f(x) = \\frac{1}{x}$ on $[-1, 1]$.',
            solution: `**Check Hypothesis 1: Continuity on $[-1, 1]$**

$f(x) = \\frac{1}{x}$ has a vertical asymptote at $x = 0$.

$f$ is NOT continuous at $x = 0$ ✗

Since $0 \\in [-1, 1]$, the function is not continuous on the entire interval.

---

**Conclusion**

The Mean Value Theorem **does not apply** because $f$ is not continuous on $[-1, 1]$.

---

**Additional observation**:

Even if we tried to apply it:

$f(-1) = -1$ and $f(1) = 1$

Average rate: $\\frac{1 - (-1)}{1 - (-1)} = \\frac{2}{2} = 1$

$f'(x) = -\\frac{1}{x^2}$

Setting $-\\frac{1}{c^2} = 1$ gives $c^2 = -1$, which has no real solution!

This makes sense because the function is discontinuous - there's no point where the tangent slope equals the average slope.

**Answer**: MVT does not apply because $f$ is not continuous on $[-1, 1]$ (discontinuity at $x = 0$).`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'A car travels 180 miles in 3 hours. Use the Mean Value Theorem to prove that at some time during the trip, the car was traveling exactly 60 mph.',
            solution: `**Step 1: Set up the problem**

Let $s(t)$ = position at time $t$ (in miles)

We know:
- $s(0) = 0$ (starting position)
- $s(3) = 180$ (ending position after 3 hours)

---

**Step 2: Apply Mean Value Theorem**

Assume $s(t)$ is continuous on $[0, 3]$ and differentiable on $(0, 3)$.

(Reasonable assumption for position function)

By MVT, there exists a time $c$ in $(0, 3)$ such that:

$$s'(c) = \\frac{s(3) - s(0)}{3 - 0}$$

---

**Step 3: Interpret**

$s'(c)$ is the **instantaneous velocity** at time $c$

$$s'(c) = \\frac{180 - 0}{3} = \\frac{180}{3} = 60 \\text{ mph}$$

---

**Conclusion**

By the Mean Value Theorem, there exists a time $c$ (somewhere between 0 and 3 hours) where the instantaneous velocity was exactly 60 mph.

---

**Real-world interpretation**:

The average speed was $\\frac{180 \\text{ miles}}{3 \\text{ hours}} = 60$ mph.

MVT guarantees that at some moment, the speedometer read exactly 60 mph!

**Answer**: By the Mean Value Theorem, at some time $c$ in $(0, 3)$ hours, the car's instantaneous speed $s'(c) = 60$ mph.`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What does the Mean Value Theorem state?',
            back: 'If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c$ in $(a,b)$ where $f\'(c) = \\frac{f(b)-f(a)}{b-a}$ (instantaneous rate = average rate).',
            hint: 'Connects average rate to instantaneous rate',
          },
          {
            front: 'What are the two hypotheses needed for MVT to apply?',
            back: '1) $f$ must be continuous on the closed interval $[a, b]$, and 2) $f$ must be differentiable on the open interval $(a, b)$.',
            hint: 'Continuous on closed, differentiable on open',
          },
          {
            front: 'What is Rolle\'s Theorem?',
            back: 'Special case of MVT when $f(a) = f(b)$. Says there exists $c$ in $(a,b)$ where $f\'(c) = 0$ (horizontal tangent). Example: if you return to starting height, you reached a peak or valley.',
            hint: 'MVT when endpoints have same height',
          },
          {
            front: 'Give a real-world example of the Mean Value Theorem.',
            back: 'If you drive 120 miles in 2 hours (average 60 mph), at some instant during the trip you were going exactly 60 mph. This is guaranteed by MVT!',
            hint: 'Think about average speed vs. instantaneous speed',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Applications of Derivatives micro-lessons!')
  console.log('\nTopics created:')
  console.log('  5. Curve Sketching')
  console.log('  6. Mean Value Theorem')
  console.log('\n💡 Applications section is growing!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
