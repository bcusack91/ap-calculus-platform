import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Applications of Derivatives micro-lessons - Part 5...')

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
          'newtons-method',
          'absolute-extrema',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Newton's Method
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'newtons-method',
      title: "Newton's Method",
      description: 'Using derivatives to find numerical solutions to equations',
      order: 9,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 🎯 Newton's Method

## What is Newton's Method?

**Newton's Method** (also called the Newton-Raphson Method) is a powerful technique for finding approximate solutions to equations of the form $f(x) = 0$.

> **💡 Key Idea**: Start with a guess, use the tangent line to get a better guess, and repeat!

---

## The Problem

We want to solve $f(x) = 0$, but:
- Can't solve algebraically
- Need a numerical approximation

**Example**: Solve $x^5 - 2x - 1 = 0$

No algebraic method exists! Newton's Method to the rescue! 🚀

---

## The Method (How It Works)

### The Recursive Formula

Start with an initial guess $x_0$, then generate better approximations:

$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

**Repeat** this process until the values converge!

### Geometric Interpretation

**Step 1**: Start at point $(x_n, f(x_n))$ on the curve

**Step 2**: Draw the tangent line at that point

**Step 3**: Find where the tangent line crosses the $x$-axis

**Step 4**: This $x$-intercept becomes $x_{n+1}$ (your next guess)

**Step 5**: Repeat!

The tangent line equation at $(x_n, f(x_n))$ is:
$$y - f(x_n) = f'(x_n)(x - x_n)$$

Setting $y = 0$ and solving for $x$ gives:
$$x = x_n - \\frac{f(x_n)}{f'(x_n)}$$

This is $x_{n+1}$!

---

## Step-by-Step Process

**Step 1**: Make sure $f'(x)$ exists and can be calculated

**Step 2**: Choose an initial guess $x_0$ (look at a graph if possible)

**Step 3**: Apply the formula:
$$x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$$

**Step 4**: Repeat with $x_1$ to get $x_2$:
$$x_2 = x_1 - \\frac{f(x_1)}{f'(x_1)}$$

**Step 5**: Continue until:
- $|x_{n+1} - x_n|$ is very small, OR
- $|f(x_n)|$ is very close to 0, OR
- You've reached a specified number of iterations

---

## Example 1: Finding a Square Root

Use Newton's Method to approximate $\\sqrt{2}$ (starting with $x_0 = 1$).

**Step 1: Set up the equation**

We want $\\sqrt{2}$, so we need to solve $x^2 = 2$

Rewrite as: $f(x) = x^2 - 2 = 0$

---

**Step 2: Find $f'(x)$**

$$f'(x) = 2x$$

---

**Step 3: Write Newton's formula**

$$x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n}$$

Simplify:
$$x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n} = \\frac{2x_n^2 - (x_n^2 - 2)}{2x_n} = \\frac{x_n^2 + 2}{2x_n}$$

$$x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{2}{x_n}\\right)$$

---

**Step 4: Iterate starting from $x_0 = 1$**

$x_0 = 1$

$x_1 = \\frac{1}{2}\\left(1 + \\frac{2}{1}\\right) = \\frac{1}{2}(3) = 1.5$

$x_2 = \\frac{1}{2}\\left(1.5 + \\frac{2}{1.5}\\right) = \\frac{1}{2}(1.5 + 1.333...) = \\frac{1}{2}(2.833...) \\approx 1.4167$

$x_3 = \\frac{1}{2}\\left(1.4167 + \\frac{2}{1.4167}\\right) \\approx \\frac{1}{2}(1.4167 + 1.4118) \\approx 1.4142$

$x_4 = \\frac{1}{2}\\left(1.4142 + \\frac{2}{1.4142}\\right) \\approx 1.41421356...$

---

**Check**: $\\sqrt{2} \\approx 1.41421356...$ ✓

After just 4 iterations, we have 8 decimal places of accuracy!

---

## Example 2: Solving a Polynomial

Find the root of $f(x) = x^3 - x - 1 = 0$ near $x = 1$.

**Step 1: Find $f'(x)$**

$$f'(x) = 3x^2 - 1$$

---

**Step 2: Newton's formula**

$$x_{n+1} = x_n - \\frac{x_n^3 - x_n - 1}{3x_n^2 - 1}$$

---

**Step 3: Iterate starting from $x_0 = 1$**

$x_0 = 1$

$x_1 = 1 - \\frac{1^3 - 1 - 1}{3(1)^2 - 1} = 1 - \\frac{-1}{2} = 1 + 0.5 = 1.5$

$x_2 = 1.5 - \\frac{(1.5)^3 - 1.5 - 1}{3(1.5)^2 - 1}$

$= 1.5 - \\frac{3.375 - 1.5 - 1}{6.75 - 1}$

$= 1.5 - \\frac{0.875}{5.75} \\approx 1.5 - 0.152 = 1.348$

$x_3 = 1.348 - \\frac{(1.348)^3 - 1.348 - 1}{3(1.348)^2 - 1}$

$\\approx 1.348 - \\frac{0.0447}{4.452} \\approx 1.348 - 0.010 = 1.338$

$x_4 \\approx 1.3247$

$x_5 \\approx 1.32472$ (converged!)

---

**Answer**: The root is approximately $x \\approx 1.32472$

**Check**: $f(1.32472) = (1.32472)^3 - 1.32472 - 1 \\approx 0.00001$ ✓

---

## Example 3: Finding Where Functions Intersect

Find where $\\cos x = x$ (i.e., solve $\\cos x - x = 0$).

**Step 1: Set up**

$f(x) = \\cos x - x$

$f'(x) = -\\sin x - 1$

---

**Step 2: Choose initial guess**

From a graph, the intersection is near $x = 1$

Let $x_0 = 1$

---

**Step 3: Newton's formula**

$$x_{n+1} = x_n - \\frac{\\cos x_n - x_n}{-\\sin x_n - 1}$$

---

**Step 4: Iterate**

$x_0 = 1$

$x_1 = 1 - \\frac{\\cos(1) - 1}{-\\sin(1) - 1}$

$\\approx 1 - \\frac{0.5403 - 1}{-0.8415 - 1}$

$\\approx 1 - \\frac{-0.4597}{-1.8415} \\approx 1 - 0.2497 = 0.7503$

$x_2 \\approx 0.7391$

$x_3 \\approx 0.7391$ (converged!)

---

**Answer**: $\\cos x = x$ at $x \\approx 0.739$

---

## When Newton's Method Works Best

### Good Conditions

Newton's Method converges quickly when:

1. **$f'(x) \\neq 0$** near the root
2. **Good initial guess** (close to actual root)
3. **$f$ is smooth** (continuous, differentiable)
4. **$f'$ doesn't change sign** near the root

### Convergence Rate

When it works, Newton's Method has **quadratic convergence**:
- The number of correct digits roughly **doubles** each iteration!
- This is why we got 8 decimals in just 4 steps for $\\sqrt{2}$

---

## When Newton's Method Fails

### Failure Case 1: Division by Zero

If $f'(x_n) = 0$, the formula breaks down!

**Example**: Finding root of $f(x) = x^3$ starting at $x_0 = 0$

$f'(0) = 0$ → Cannot compute $x_1$!

### Failure Case 2: Cycles

Sometimes the iterates go in circles and never converge.

**Example**: $f(x) = x^3 - 2x + 2$ with $x_0 = 0$ creates a 2-cycle

### Failure Case 3: Divergence

Poor initial guess can cause iterates to move away from the root.

**Example**: Finding $\\sqrt{2}$ but starting with $x_0 = -1$ can diverge

### Failure Case 4: Multiple Roots

At a multiple root (where $f(x) = f'(x) = 0$), convergence is much slower.

**Example**: $f(x) = (x-1)^2$ has a double root at $x = 1$

---

## Tips for Choosing $x_0$

### Strategy 1: Use a Graph

Sketch or plot $y = f(x)$ to see where it crosses the $x$-axis

### Strategy 2: Try Simple Values

Test $x = 0, 1, -1, 2$, etc. and see which gives $f(x)$ closest to 0

### Strategy 3: Use Algebra

Simplify or factor $f(x)$ as much as possible first

### Strategy 4: Intermediate Value Theorem

Find $a$ and $b$ where $f(a)$ and $f(b)$ have opposite signs

The root is between $a$ and $b$ → use $x_0 = \\frac{a+b}{2}$

---

## How Many Iterations?

### Stopping Criteria

Stop when ONE of these is true:

1. **Relative error**: $\\left|\\frac{x_{n+1} - x_n}{x_n}\\right| < \\epsilon$ (e.g., $\\epsilon = 0.0001$)

2. **Absolute error**: $|x_{n+1} - x_n| < \\epsilon$

3. **Function value**: $|f(x_n)| < \\epsilon$

4. **Maximum iterations**: Reached some limit (e.g., 50 iterations)

---

## Applications of Newton's Method

### Application 1: Square Roots

The formula for $\\sqrt{a}$:
$$x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{a}{x_n}\\right)$$

This was the ancient Babylonian method!

### Application 2: Finding Reciprocals

To compute $\\frac{1}{a}$, solve $f(x) = \\frac{1}{x} - a = 0$:
$$x_{n+1} = x_n(2 - ax_n)$$

Used in calculators (avoids division!)

### Application 3: Optimization

Newton's Method can optimize $f(x)$ by finding where $f'(x) = 0$

Apply the method to $g(x) = f'(x)$!

### Application 4: Root-Finding in Engineering

Used in:
- Solving nonlinear circuits
- Finding equilibrium points
- Solving transcendental equations
- Computer graphics and animation

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Sign

The formula is $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ (MINUS, not plus!)

### Mistake 2: Derivative of the Whole Expression

Calculate $f(x)$ and $f'(x)$ separately, don't mix them up!

### Mistake 3: Stopping Too Early

Check that consecutive iterates are actually close before stopping

### Mistake 4: Bad Initial Guess

If iterates jump around wildly, try a different $x_0$

### Mistake 5: Not Checking the Answer

Always verify: plug your answer into $f(x)$ to see if it's close to 0!

---

## Comparison with Other Methods

### Bisection Method

- **Pros**: Always converges (if conditions met), simple
- **Cons**: Slow (linear convergence)

### Newton's Method

- **Pros**: Very fast (quadratic convergence)
- **Cons**: Requires derivative, can fail

### Secant Method

- **Pros**: No derivative needed, faster than bisection
- **Cons**: Slower than Newton's, can still fail

---

## Modified Newton's Method

For multiple roots (where $f(x) = f'(x) = 0$), use:

$$x_{n+1} = x_n - m\\frac{f(x_n)}{f'(x_n)}$$

where $m$ is the multiplicity of the root.

This restores quadratic convergence!

---

## The Big Picture

### Historical Significance

- Discovered by **Isaac Newton** (1669) and **Joseph Raphson** (1690)
- One of the first iterative numerical methods
- Foundation for modern computational mathematics

### Modern Importance

- Built into calculators and computer software
- Basis for more advanced methods
- Essential in scientific computing

---

## 📝 Practice Strategy

1. **Write down $f(x)$ and $f'(x)$** clearly
2. **Set up the formula**: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$
3. **Choose a reasonable $x_0$** (use a graph or test values)
4. **Calculate systematically** - make a table with columns for $n$, $x_n$, $f(x_n)$, $f'(x_n)$, $x_{n+1}$
5. **Check convergence** - are successive values getting closer?
6. **Verify your answer** by substituting into $f(x)$
7. **Keep 6-8 decimal places** during calculations to avoid rounding errors
`,
      exampleProblems: {
        create: [
          {
            question: 'Use Newton\'s Method to approximate $\\sqrt[3]{10}$ with initial guess $x_0 = 2$. Perform 3 iterations.',
            solution: `**Step 1: Set up the equation**

We want $\\sqrt[3]{10}$, so we need to solve $x^3 = 10$

Let $f(x) = x^3 - 10 = 0$

---

**Step 2: Find $f'(x)$**

$$f'(x) = 3x^2$$

---

**Step 3: Newton's formula**

$$x_{n+1} = x_n - \\frac{x_n^3 - 10}{3x_n^2}$$

Simplify:
$$x_{n+1} = x_n - \\frac{x_n^3 - 10}{3x_n^2} = \\frac{3x_n^3 - (x_n^3 - 10)}{3x_n^2} = \\frac{2x_n^3 + 10}{3x_n^2}$$

---

**Step 4: First iteration ($n = 0$)**

$x_0 = 2$

$$x_1 = \\frac{2(2)^3 + 10}{3(2)^2} = \\frac{2(8) + 10}{3(4)} = \\frac{16 + 10}{12} = \\frac{26}{12} \\approx 2.1667$$

---

**Step 5: Second iteration ($n = 1$)**

$x_1 = 2.1667$

$$x_2 = \\frac{2(2.1667)^3 + 10}{3(2.1667)^2}$$

$$= \\frac{2(10.1584) + 10}{3(4.6946)} = \\frac{20.3168 + 10}{14.0838} = \\frac{30.3168}{14.0838} \\approx 2.1544$$

---

**Step 6: Third iteration ($n = 2$)**

$x_2 = 2.1544$

$$x_3 = \\frac{2(2.1544)^3 + 10}{3(2.1544)^2}$$

$$= \\frac{2(10.0008) + 10}{3(4.6414)} = \\frac{20.0016 + 10}{13.9242} = \\frac{30.0016}{13.9242} \\approx 2.1544$$

---

**Step 7: Verify convergence**

$x_2 \\approx 2.1544$ and $x_3 \\approx 2.1544$ → Converged!

**Check**: $(2.1544)^3 \\approx 10.00$ ✓

**Answer**: $\\sqrt[3]{10} \\approx 2.1544$ (after 3 iterations)

**Actual value**: $\\sqrt[3]{10} \\approx 2.154434...$ (excellent match!)`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find the positive solution to $e^x = 3x$ using Newton\'s Method. Start with $x_0 = 1$ and perform iterations until consecutive approximations differ by less than 0.001.',
            solution: `**Step 1: Rewrite as $f(x) = 0$**

$$e^x = 3x \\implies f(x) = e^x - 3x = 0$$

---

**Step 2: Find $f'(x)$**

$$f'(x) = e^x - 3$$

---

**Step 3: Newton's formula**

$$x_{n+1} = x_n - \\frac{e^{x_n} - 3x_n}{e^{x_n} - 3}$$

---

**Step 4: Iteration 0 → 1**

$x_0 = 1$

$f(1) = e^1 - 3(1) = 2.7183 - 3 = -0.2817$

$f'(1) = e^1 - 3 = 2.7183 - 3 = -0.2817$

$$x_1 = 1 - \\frac{-0.2817}{-0.2817} = 1 - 1 = 0$$

---

Wait, this doesn't look right. Let me recalculate more carefully:

$f(1) = e - 3 \\approx 2.7183 - 3 = -0.2817$

$f'(1) = e - 3 \\approx -0.2817$

$$x_1 = 1 - \\frac{-0.2817}{-0.2817} = 1 - 1.0 = 0$$

This suggests our initial guess led to $x_1 = 0$, but $e^0 = 1 \\neq 0$. Let me try $x_0 = 1.5$:

---

**Restart with $x_0 = 1.5$**

$f(1.5) = e^{1.5} - 3(1.5) = 4.4817 - 4.5 = -0.0183$

$f'(1.5) = e^{1.5} - 3 = 4.4817 - 3 = 1.4817$

$$x_1 = 1.5 - \\frac{-0.0183}{1.4817} = 1.5 + 0.0123 = 1.5123$$

---

**Iteration 1 → 2**

$f(1.5123) = e^{1.5123} - 3(1.5123) \\approx 4.5375 - 4.5369 \\approx 0.0006$

$f'(1.5123) = e^{1.5123} - 3 \\approx 1.5375$

$$x_2 = 1.5123 - \\frac{0.0006}{1.5375} \\approx 1.5123 - 0.0004 = 1.5119$$

---

**Check convergence**

$|x_2 - x_1| = |1.5119 - 1.5123| = 0.0004 < 0.001$ ✓

**Answer**: $x \\approx 1.512$

**Verify**: $e^{1.512} \\approx 4.536$ and $3(1.512) = 4.536$ ✓`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Show what happens when Newton\'s Method is applied to $f(x) = x^{1/3}$ with initial guess $x_0 = 1$. Does it converge to the root at $x = 0$?',
            solution: `**Step 1: Set up**

$f(x) = x^{1/3}$, and we're looking for the root at $x = 0$

---

**Step 2: Find $f'(x)$**

$$f'(x) = \\frac{1}{3}x^{-2/3} = \\frac{1}{3x^{2/3}}$$

---

**Step 3: Newton's formula**

$$x_{n+1} = x_n - \\frac{x_n^{1/3}}{\\frac{1}{3x_n^{2/3}}} = x_n - \\frac{x_n^{1/3} \\cdot 3x_n^{2/3}}{1} = x_n - 3x_n = -2x_n$$

---

**Step 4: Iterate from $x_0 = 1$**

$x_0 = 1$

$x_1 = -2(1) = -2$

$x_2 = -2(-2) = 4$

$x_3 = -2(4) = -8$

$x_4 = -2(-8) = 16$

The iterates are: $1, -2, 4, -8, 16, -32, ...$

---

**Step 5: Analysis**

The sequence **diverges**! The values alternate in sign and grow in magnitude.

**Why does this happen?**

At the root $x = 0$, we have $f(0) = 0$ but $f'(0)$ is **undefined** (vertical tangent).

The tangent line at any point $(x_n, x_n^{1/3})$ is very steep, causing the next iterate to overshoot dramatically.

---

**Answer**: Newton's Method **fails** for this function. The iterates diverge because $f'(0)$ doesn't exist and the function has a vertical tangent at the root.

**Lesson**: Newton's Method requires $f'(x) \\neq 0$ near the root!`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the Newton\'s Method formula?',
            back: '$x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$. Start with an initial guess $x_0$, then repeatedly apply this formula. The new approximation is where the tangent line at $(x_n, f(x_n))$ crosses the x-axis.',
            hint: 'Subtract the ratio of function to derivative',
          },
          {
            front: 'Geometrically, how does Newton\'s Method work?',
            back: 'Draw the tangent line at the current point on the curve. Find where this tangent line crosses the x-axis. That x-intercept becomes your next approximation. Repeat this process.',
            hint: 'Think about tangent lines and x-intercepts',
          },
          {
            front: 'When does Newton\'s Method fail or work poorly?',
            back: 'Fails when: 1) $f\'(x_n) = 0$ (can\'t divide by zero), 2) Poor initial guess causes divergence, 3) Multiple roots slow convergence, 4) Vertical tangents near the root. Works best with good initial guess and $f\'(x) \\neq 0$ near root.',
            hint: 'Problems with derivative being zero or initial guess',
          },
          {
            front: 'What is the convergence rate of Newton\'s Method?',
            back: 'Quadratic convergence - when it works, the number of correct digits roughly doubles with each iteration! This is why it\'s so fast. For example: 1 digit → 2 digits → 4 digits → 8 digits in just 4 steps.',
            hint: 'Digits double each iteration',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Absolute Extrema
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'absolute-extrema',
      title: 'Absolute Extrema on Closed Intervals',
      description: 'Finding absolute maximum and minimum values on closed intervals',
      order: 10,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 🏔️ Absolute Extrema on Closed Intervals

## What Are Absolute Extrema?

**Absolute extrema** are the highest and lowest values of a function over an entire interval.

> **💡 Key Idea**: On a closed interval, a continuous function MUST have an absolute maximum and minimum - and they occur either at critical points or endpoints!

---

## Definitions

### Absolute Maximum

$f(c)$ is an **absolute maximum** on $[a, b]$ if:
$$f(c) \\geq f(x) \\text{ for all } x \\in [a, b]$$

$f(c)$ is the **highest** value on the entire interval.

### Absolute Minimum

$f(c)$ is an **absolute minimum** on $[a, b]$ if:
$$f(c) \\leq f(x) \\text{ for all } x \\in [a, b]$$

$f(c)$ is the **lowest** value on the entire interval.

---

## Extreme Value Theorem

**Statement**: If $f$ is **continuous** on a **closed interval** $[a, b]$, then $f$ has both an absolute maximum and an absolute minimum on $[a, b]$.

### Why It Matters

This theorem **guarantees** that absolute extrema exist!

**Key requirements**:
1. Function must be **continuous**
2. Interval must be **closed** (includes endpoints)

---

## Where Do Absolute Extrema Occur?

Absolute extrema can ONLY occur at:

1. **Critical points** in $(a, b)$ (where $f'(x) = 0$ or $f'(x)$ undefined)
2. **Endpoints** $x = a$ or $x = b$

That's it! These are the only candidates.

---

## The Closed Interval Method

This is your **foolproof strategy** for finding absolute extrema:

### Step-by-Step Process

**Step 1**: Verify that $f$ is continuous on $[a, b]$

**Step 2**: Find all critical points in the **open interval** $(a, b)$
- Solve $f'(x) = 0$
- Find where $f'(x)$ is undefined

**Step 3**: Evaluate $f$ at:
- Each critical point
- Both endpoints $a$ and $b$

**Step 4**: Compare all these values:
- **Largest** value → absolute maximum
- **Smallest** value → absolute minimum

**Step 5**: State your answer with both $x$-value and $y$-value

---

## Example 1: Basic Application

Find the absolute extrema of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

**Step 1: Verify continuity**

$f(x)$ is a polynomial → continuous everywhere ✓

---

**Step 2: Find critical points**

$$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$$

$f'(x) = 0$ when $x = 1$ or $x = -1$

Both are in $(-2, 2)$ ✓

---

**Step 3: Evaluate at critical points and endpoints**

| $x$ | $f(x) = x^3 - 3x + 1$ | Type |
|-----|---------------------|------|
| $-2$ | $(-2)^3 - 3(-2) + 1 = -8 + 6 + 1 = -1$ | Endpoint |
| $-1$ | $(-1)^3 - 3(-1) + 1 = -1 + 3 + 1 = 3$ | Critical pt |
| $1$ | $(1)^3 - 3(1) + 1 = 1 - 3 + 1 = -1$ | Critical pt |
| $2$ | $(2)^3 - 3(2) + 1 = 8 - 6 + 1 = 3$ | Endpoint |

---

**Step 4: Identify extrema**

**Largest value**: $f(-1) = 3$ and $f(2) = 3$

**Smallest value**: $f(-2) = -1$ and $f(1) = -1$

---

**Answer**:
- **Absolute maximum**: $f(-1) = 3$ and $f(2) = 3$
- **Absolute minimum**: $f(-2) = -1$ and $f(1) = -1$

Note: It's possible to have absolute extrema at multiple points!

---

## Example 2: With Undefined Derivative

Find the absolute extrema of $f(x) = x^{2/3}$ on $[-1, 8]$.

**Step 1: Continuity**

$f(x) = x^{2/3}$ is continuous everywhere ✓

---

**Step 2: Find critical points**

$$f'(x) = \\frac{2}{3}x^{-1/3} = \\frac{2}{3x^{1/3}}$$

$f'(x) = 0$: No solution (numerator never zero)

$f'(x)$ undefined: When $x = 0$ (denominator zero)

Critical point: $x = 0$ (and $0 \\in (-1, 8)$) ✓

---

**Step 3: Evaluate function**

| $x$ | $f(x) = x^{2/3}$ |
|-----|------------------|
| $-1$ | $(-1)^{2/3} = 1$ |
| $0$ | $(0)^{2/3} = 0$ |
| $8$ | $(8)^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$ |

---

**Step 4: Compare**

**Largest**: $f(8) = 4$

**Smallest**: $f(0) = 0$

---

**Answer**:
- **Absolute maximum**: $f(8) = 4$
- **Absolute minimum**: $f(0) = 0$

---

## Example 3: Extrema at Endpoints

Find the absolute extrema of $f(x) = \\cos x$ on $[0, \\frac{\\pi}{2}]$.

**Step 1: Continuity**

$\\cos x$ is continuous everywhere ✓

---

**Step 2: Critical points**

$$f'(x) = -\\sin x$$

$f'(x) = 0$ when $\\sin x = 0$

On $(0, \\frac{\\pi}{2})$: No solutions (since $\\sin x > 0$ for $0 < x < \\frac{\\pi}{2}$)

---

**Step 3: Evaluate at endpoints only**

| $x$ | $f(x) = \\cos x$ |
|-----|------------------|
| $0$ | $\\cos 0 = 1$ |
| $\\frac{\\pi}{2}$ | $\\cos(\\frac{\\pi}{2}) = 0$ |

---

**Step 4: Compare**

**Largest**: $f(0) = 1$

**Smallest**: $f(\\frac{\\pi}{2}) = 0$

---

**Answer**:
- **Absolute maximum**: $f(0) = 1$
- **Absolute minimum**: $f(\\frac{\\pi}{2}) = 0$

Both extrema occur at **endpoints**!

---

## Local vs. Absolute Extrema

### Local (Relative) Extrema

- **Local maximum**: Highest in some neighborhood
- Can occur at any critical point
- There can be multiple local maxima

### Absolute (Global) Extrema

- **Absolute maximum**: Highest on entire interval
- Only one value (but can occur at multiple points)
- Must be at critical point or endpoint

### Relationship

- Every absolute extremum is also a local extremum
- NOT every local extremum is an absolute extremum

**Example**: $f(x) = x^3 - 3x + 1$ on $[-2, 2]$ has:
- Local max at $x = -1$, which is also absolute max
- Local min at $x = 1$, which is also absolute min

---

## What If the Interval Isn't Closed?

### Open Interval $(a, b)$

- No guarantee of absolute extrema
- May or may not exist

**Example**: $f(x) = x$ on $(0, 1)$
- No absolute max (approaches 1 but never reaches it)
- No absolute min (approaches 0 but never reaches it)

### Infinite Interval $(-\\infty, \\infty)$

- No guarantee of extrema
- Often no absolute extrema

**Example**: $f(x) = x^2$ on $(-\\infty, \\infty)$
- Absolute min at $x = 0$: $f(0) = 0$
- No absolute max (grows to $\\infty$)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Endpoints

**Always** check the endpoints! They're often where absolute extrema occur.

### Mistake 2: Not Checking if Critical Points Are in the Interval

If you find $f'(x) = 0$ at $x = 5$, but the interval is $[0, 3]$, don't include $x = 5$!

### Mistake 3: Only Listing $x$-values

Give BOTH the location ($x$-value) AND the value ($f(x)$)!

**WRONG**: "Absolute max at $x = 2$"

**RIGHT**: "Absolute maximum is $f(2) = 7$ at $x = 2$"

### Mistake 4: Confusing Local and Absolute

A local maximum might NOT be the absolute maximum!

### Mistake 5: Not Verifying Continuity

If $f$ is not continuous on $[a, b]$, the Extreme Value Theorem doesn't apply!

---

## Special Cases

### Case 1: Constant Function

If $f(x) = c$ (constant), then:
- Every point is both an absolute max and min
- Value is $c$ everywhere

### Case 2: Linear Function

$f(x) = mx + b$ on $[a, b]$:
- Absolute extrema always at endpoints
- If $m > 0$: min at $a$, max at $b$
- If $m < 0$: max at $a$, min at $b$

### Case 3: No Critical Points

If $f'(x) \\neq 0$ and $f'$ always defined on $(a, b)$:
- Function is strictly monotonic (always increasing or decreasing)
- Absolute extrema MUST be at endpoints

---

## Quick Decision Tree

**Is $f$ continuous on $[a, b]$?**
- NO → Extreme Value Theorem doesn't apply
- YES → Continue

**Find critical points in $(a, b)$:**
1. Solve $f'(x) = 0$
2. Find where $f'(x)$ undefined

**Evaluate $f$ at:**
- All critical points
- Both endpoints

**Compare values:**
- Largest → Absolute max
- Smallest → Absolute min

---

## Real-World Applications

### Optimization Problems

- Maximizing profit over a time period
- Minimizing cost over a production range
- Finding best dimensions within constraints

### Physics

- Maximum height of projectile
- Minimum potential energy
- Optimal angle for range

### Economics

- Maximum revenue over demand range
- Minimum average cost in production interval

---

## 📝 Practice Strategy

1. **Check continuity first** - is Extreme Value Theorem applicable?
2. **Find all critical points** - solve $f'(x) = 0$ and check where $f'$ undefined
3. **Make a table** with columns: $x$, $f(x)$, Type
4. **Evaluate systematically** - critical points AND endpoints
5. **Identify largest and smallest** values
6. **Write complete answers** - include both $x$ and $f(x)$
7. **Double-check** - did you evaluate at ALL candidates?
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the absolute maximum and minimum values of $f(x) = 2x^3 - 3x^2 - 12x + 5$ on the interval $[-2, 3]$.',
            solution: `**Step 1: Verify continuity**

$f(x)$ is a polynomial → continuous everywhere ✓

Extreme Value Theorem applies!

---

**Step 2: Find critical points**

$$f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x-2)(x+1)$$

$f'(x) = 0$ when $x = 2$ or $x = -1$

Both are in $(-2, 3)$ ✓

---

**Step 3: Evaluate at critical points and endpoints**

$f(-2) = 2(-2)^3 - 3(-2)^2 - 12(-2) + 5$
$= 2(-8) - 3(4) + 24 + 5 = -16 - 12 + 24 + 5 = 1$

$f(-1) = 2(-1)^3 - 3(-1)^2 - 12(-1) + 5$
$= 2(-1) - 3(1) + 12 + 5 = -2 - 3 + 12 + 5 = 12$

$f(2) = 2(2)^3 - 3(2)^2 - 12(2) + 5$
$= 2(8) - 3(4) - 24 + 5 = 16 - 12 - 24 + 5 = -15$

$f(3) = 2(3)^3 - 3(3)^2 - 12(3) + 5$
$= 2(27) - 3(9) - 36 + 5 = 54 - 27 - 36 + 5 = -4$

---

**Step 4: Make a comparison table**

| $x$ | $f(x)$ | Type |
|-----|--------|------|
| $-2$ | $1$ | Endpoint |
| $-1$ | $12$ | Critical point |
| $2$ | $-15$ | Critical point |
| $3$ | $-4$ | Endpoint |

---

**Step 5: Identify extrema**

**Largest value**: $f(-1) = 12$

**Smallest value**: $f(2) = -15$

---

**Answer**:
- **Absolute maximum**: $f(-1) = 12$ at $x = -1$
- **Absolute minimum**: $f(2) = -15$ at $x = 2$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find the absolute extrema of $g(x) = x\\sqrt{4-x^2}$ on $[-2, 2]$.',
            solution: `**Step 1: Verify continuity**

$g(x) = x\\sqrt{4-x^2}$ is continuous on $[-2, 2]$ because $4-x^2 \\geq 0$ on this interval ✓

---

**Step 2: Find critical points**

Use product rule:
$$g'(x) = (1)\\sqrt{4-x^2} + x \\cdot \\frac{-2x}{2\\sqrt{4-x^2}}$$

$$= \\sqrt{4-x^2} - \\frac{x^2}{\\sqrt{4-x^2}}$$

$$= \\frac{4-x^2 - x^2}{\\sqrt{4-x^2}} = \\frac{4-2x^2}{\\sqrt{4-x^2}}$$

$g'(x) = 0$ when numerator = 0:
$$4-2x^2 = 0 \\implies x^2 = 2 \\implies x = \\pm\\sqrt{2}$$

$g'(x)$ undefined when denominator = 0:
$$4-x^2 = 0 \\implies x = \\pm 2$$

But $x = \\pm 2$ are endpoints, not in $(- 2, 2)$

Critical points in $(-2, 2)$: $x = \\sqrt{2}$ and $x = -\\sqrt{2}$

---

**Step 3: Evaluate function**

$g(-2) = (-2)\\sqrt{4-4} = (-2)(0) = 0$

$g(-\\sqrt{2}) = (-\\sqrt{2})\\sqrt{4-2} = (-\\sqrt{2})(\\sqrt{2}) = -2$

$g(\\sqrt{2}) = (\\sqrt{2})\\sqrt{4-2} = (\\sqrt{2})(\\sqrt{2}) = 2$

$g(2) = (2)\\sqrt{4-4} = (2)(0) = 0$

---

**Step 4: Compare values**

| $x$ | $g(x)$ |
|-----|--------|
| $-2$ | $0$ |
| $-\\sqrt{2}$ | $-2$ |
| $\\sqrt{2}$ | $2$ |
| $2$ | $0$ |

---

**Answer**:
- **Absolute maximum**: $g(\\sqrt{2}) = 2$ at $x = \\sqrt{2}$
- **Absolute minimum**: $g(-\\sqrt{2}) = -2$ at $x = -\\sqrt{2}$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'A continuous function $h$ on $[0, 4]$ has $h(0) = 3$, $h(4) = 1$, and $h\'(x) < 0$ for all $x$ in $(0, 4)$. What are the absolute extrema of $h$ on $[0, 4]$?',
            solution: `**Step 1: Analyze the given information**

- $h$ is continuous on $[0, 4]$ ✓
- $h'(x) < 0$ for all $x \\in (0, 4)$

---

**Step 2: Interpret $h'(x) < 0$**

Since $h'(x) < 0$ everywhere on $(0, 4)$:
- The function is **strictly decreasing** throughout the interval
- There are **no critical points** in $(0, 4)$ (because $f'(x) \\neq 0$ anywhere)

---

**Step 3: Implications for extrema**

For a strictly decreasing function:
- The **highest** point must be at the **left endpoint**
- The **lowest** point must be at the **right endpoint**

---

**Step 4: Identify extrema**

Since $h$ is decreasing from left to right:

**At $x = 0$** (left endpoint): $h(0) = 3$ is the highest value

**At $x = 4$** (right endpoint): $h(4) = 1$ is the lowest value

---

**Answer**:
- **Absolute maximum**: $h(0) = 3$ at $x = 0$
- **Absolute minimum**: $h(4) = 1$ at $x = 4$

**Key insight**: When a function is strictly monotonic (always increasing or always decreasing) with no critical points, the absolute extrema MUST occur at the endpoints!`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'State the Extreme Value Theorem.',
            back: 'If $f$ is continuous on a closed interval $[a,b]$, then $f$ has both an absolute maximum and an absolute minimum on $[a,b]$. These extrema occur at critical points or endpoints.',
            hint: 'Continuous on closed interval guarantees extrema exist',
          },
          {
            front: 'What is the Closed Interval Method for finding absolute extrema?',
            back: '1) Find all critical points in $(a,b)$ where $f\'(x)=0$ or undefined. 2) Evaluate $f$ at each critical point and both endpoints. 3) Largest value = absolute max, smallest value = absolute min.',
            hint: 'Check critical points AND endpoints',
          },
          {
            front: 'Where can absolute extrema occur on a closed interval?',
            back: 'Only at: 1) Critical points in the interior (where $f\'(x)=0$ or $f\'$ undefined), or 2) The endpoints $x=a$ or $x=b$. These are the ONLY possible locations.',
            hint: 'Critical points or endpoints only',
          },
          {
            front: 'What\'s the difference between local and absolute extrema?',
            back: 'Local extrema are highest/lowest in a neighborhood (many possible). Absolute extrema are highest/lowest on entire interval (only one value, but can occur at multiple points). Every absolute extremum is also local, but not vice versa.',
            hint: 'Local = neighborhood, absolute = entire interval',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Applications of Derivatives micro-lessons!')
  console.log('\nTopics created:')
  console.log('  9. Newton\'s Method')
  console.log('  10. Absolute Extrema on Closed Intervals')
  console.log('\n🎉 Applications section now has 10 comprehensive lessons!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
