import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Derivatives micro-lessons - Advanced Applications (Part 5)...')

  // Get or create the Derivatives category
  const derivativesCategory = await prisma.category.upsert({
    where: { slug: 'derivatives' },
    update: {},
    create: {
      slug: 'derivatives',
      name: 'Derivatives',
      description: 'Understanding rates of change and differentiation',
      order: 2,
      icon: '📈',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'higher-order-derivatives',
          'logarithmic-differentiation-technique',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Higher-Order Derivatives
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'higher-order-derivatives',
      title: 'Higher-Order Derivatives',
      description: 'Second derivatives, third derivatives, and beyond',
      order: 15,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# 🔢 Higher-Order Derivatives

## What are Higher-Order Derivatives?

The **first derivative** $f'(x)$ tells us the rate of change of $f(x)$.

But we can also take the derivative of the derivative! This gives us the **second derivative**, **third derivative**, and so on.

### The First Few Derivatives

- **First derivative**: $f'(x)$ or $\\frac{dy}{dx}$
- **Second derivative**: $f''(x)$ or $\\frac{d^2y}{dx^2}$
- **Third derivative**: $f'''(x)$ or $\\frac{d^3y}{dx^3}$
- **Fourth derivative**: $f^{(4)}(x)$ or $\\frac{d^4y}{dx^4}$
- **nth derivative**: $f^{(n)}(x)$ or $\\frac{d^ny}{dx^n}$

> **💡 Note**: After the third derivative, we use numbers in parentheses: $f^{(4)}(x)$, $f^{(5)}(x)$, etc.

---

## Notation for Higher-Order Derivatives

### Prime Notation

- $f'(x)$ — first derivative
- $f''(x)$ — second derivative (two primes)
- $f'''(x)$ — third derivative (three primes)
- $f^{(4)}(x)$ — fourth derivative (number in parentheses)

### Leibniz Notation

- $\\frac{dy}{dx}$ — first derivative
- $\\frac{d^2y}{dx^2}$ — second derivative
- $\\frac{d^3y}{dx^3}$ — third derivative
- $\\frac{d^ny}{dx^n}$ — nth derivative

**Important**: In $\\frac{d^2y}{dx^2}$, the "2" is NOT an exponent! It indicates the second derivative.

---

## Finding Higher-Order Derivatives

Simply differentiate repeatedly!

### Example 1: Polynomial

Find all derivatives of $f(x) = x^4 - 3x^3 + 2x^2 - 5x + 7$

$f(x) = x^4 - 3x^3 + 2x^2 - 5x + 7$

$f'(x) = 4x^3 - 9x^2 + 4x - 5$

$f''(x) = 12x^2 - 18x + 4$

$f'''(x) = 24x - 18$

$f^{(4)}(x) = 24$

$f^{(5)}(x) = 0$ (and all higher derivatives are 0)

> **💡 Pattern**: For a polynomial of degree $n$, the $(n+1)$-th derivative and all higher derivatives are zero!

### Example 2: Exponential

Find the first four derivatives of $f(x) = e^{2x}$

$f(x) = e^{2x}$

$f'(x) = 2e^{2x}$

$f''(x) = 4e^{2x}$

$f'''(x) = 8e^{2x}$

$f^{(4)}(x) = 16e^{2x}$

**Pattern**: $f^{(n)}(x) = 2^n e^{2x}$

### Example 3: Trigonometric

Find the pattern for $f(x) = \\sin x$

$f(x) = \\sin x$

$f'(x) = \\cos x$

$f''(x) = -\\sin x$

$f'''(x) = -\\cos x$

$f^{(4)}(x) = \\sin x$ (back to the start!)

**Pattern**: The derivatives of sine cycle every 4 derivatives!

---

## What Does the Second Derivative Tell Us?

The **second derivative** has special meaning:

### Physical Interpretation

If $s(t)$ represents position:
- $s'(t) = v(t)$ is **velocity** (rate of change of position)
- $s''(t) = v'(t) = a(t)$ is **acceleration** (rate of change of velocity)

**Example**: If $s(t) = 16t^2$ (position in feet at time $t$ seconds)
- $v(t) = s'(t) = 32t$ ft/sec (velocity)
- $a(t) = s''(t) = 32$ ft/sec² (acceleration)

### Concavity

The second derivative tells us about the **concavity** (curvature) of a function:

- If $f''(x) > 0$, the graph is **concave up** (curves upward, like ∪)
- If $f''(x) < 0$, the graph is **concave down** (curves downward, like ∩)
- If $f''(x) = 0$, there might be an **inflection point**

> **💡 Memory Trick**: Concave up looks like a cup that holds water ∪

---

## Inflection Points

An **inflection point** is where the concavity changes (from up to down, or vice versa).

### How to Find Inflection Points

1. Find $f''(x)$
2. Set $f''(x) = 0$ and solve
3. Check that $f''(x)$ changes sign on either side

**Example**: Find inflection points of $f(x) = x^3$

$f'(x) = 3x^2$

$f''(x) = 6x$

Set $f''(x) = 0$: $6x = 0$, so $x = 0$

Check signs:
- When $x < 0$: $f''(x) < 0$ (concave down)
- When $x > 0$: $f''(x) > 0$ (concave up)

Since concavity changes, $(0, 0)$ is an inflection point! ✓

---

## The Second Derivative Test

The second derivative can help classify critical points!

### Second Derivative Test for Extrema

If $f'(c) = 0$ (critical point):
- If $f''(c) > 0$ → **local minimum** at $x = c$ (concave up)
- If $f''(c) < 0$ → **local maximum** at $x = c$ (concave down)
- If $f''(c) = 0$ → test is **inconclusive** (use first derivative test)

**Why it works**: If the graph is curving upward at a critical point, it must be a minimum!

---

## Higher-Order Derivatives with Chain Rule

When using Chain Rule multiple times, things get complicated!

### Example: $y = e^{3x}$

$y' = 3e^{3x}$

$y'' = 9e^{3x}$

$y''' = 27e^{3x}$

Pattern: $y^{(n)} = 3^n e^{3x}$

### Example: $y = \\sin(2x)$

$y' = 2\\cos(2x)$

$y'' = -4\\sin(2x)$

$y''' = -8\\cos(2x)$

$y^{(4)} = 16\\sin(2x)$

---

## Special Patterns

### Pattern 1: $f(x) = x^n$

$f^{(k)}(x) = n(n-1)(n-2)\\cdots(n-k+1)x^{n-k}$

For $k = n$: $f^{(n)}(x) = n!$ (factorial)

For $k > n$: $f^{(k)}(x) = 0$

### Pattern 2: $f(x) = e^{kx}$

$f^{(n)}(x) = k^n e^{kx}$

### Pattern 3: $f(x) = \\sin(kx)$

The derivatives cycle with period 4:
- $f^{(4m)}(x) = k^{4m}\\sin(kx)$
- $f^{(4m+1)}(x) = k^{4m+1}\\cos(kx)$
- $f^{(4m+2)}(x) = -k^{4m+2}\\sin(kx)$
- $f^{(4m+3)}(x) = -k^{4m+3}\\cos(kx)$

### Pattern 4: $f(x) = \\ln x$

$f'(x) = \\frac{1}{x} = x^{-1}$

$f''(x) = -x^{-2}$

$f'''(x) = 2x^{-3}$

$f^{(4)}(x) = -6x^{-4}$

Pattern: $f^{(n)}(x) = \\frac{(-1)^{n-1}(n-1)!}{x^n}$

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Notation
❌ $\\frac{d^2y}{dx^2} = \\left(\\frac{dy}{dx}\\right)^2$ (WRONG!)
✅ $\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[\\frac{dy}{dx}\\right]$ (second derivative)

### Mistake 2: Sign Errors
When differentiating $f''(x)$ to get $f'''(x)$, be careful with negative signs!

### Mistake 3: Forgetting Chain Rule
When taking second derivatives of composite functions, don't forget the Chain Rule!

### Mistake 4: Inflection Point Errors
Just because $f''(c) = 0$ doesn't guarantee an inflection point - concavity must **change**!

---

## Applications

### Physics - Motion

- **Position**: $s(t)$
- **Velocity**: $v(t) = s'(t)$
- **Acceleration**: $a(t) = s''(t) = v'(t)$
- **Jerk**: $j(t) = s'''(t) = a'(t)$ (rate of change of acceleration)

### Economics

- **Total Cost**: $C(x)$
- **Marginal Cost**: $C'(x)$
- **Rate of change of Marginal Cost**: $C''(x)$

### Curve Sketching

Use $f''(x)$ to determine:
- Where graph is concave up or down
- Location of inflection points
- Classification of critical points (max or min)

---

## 📝 Practice Tips

1. **Differentiate carefully** - each derivative builds on the previous one
2. **Look for patterns** - especially with trig, exponential, and polynomial functions
3. **Check your work** - a simple error early on compounds with each derivative
4. **Remember**: Second derivative relates to **concavity** and **acceleration**
5. **Don't confuse** $\\frac{d^2y}{dx^2}$ with $\\left(\\frac{dy}{dx}\\right)^2$ - they're completely different!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the second derivative of $f(x) = \\frac{1}{x^2}$.',
            solution: `**Step 1: Rewrite using negative exponents**

$f(x) = \\frac{1}{x^2} = x^{-2}$

---

**Step 2: Find the first derivative**

Using the Power Rule:

$f'(x) = -2x^{-3} = -\\frac{2}{x^3}$

---

**Step 3: Find the second derivative**

Differentiate $f'(x) = -2x^{-3}$:

$f''(x) = -2 \\cdot (-3)x^{-4} = 6x^{-4}$

---

**Step 4: Rewrite in fraction form**

$f''(x) = \\frac{6}{x^4}$

**Answer**: $f''(x) = \\frac{6}{x^4}$ or $6x^{-4}$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A particle moves along a line with position function $s(t) = t^3 - 6t^2 + 9t$ meters at time $t$ seconds. Find the velocity and acceleration at $t = 2$ seconds.',
            solution: `**Step 1: Find velocity (first derivative of position)**

$s(t) = t^3 - 6t^2 + 9t$

$v(t) = s'(t) = 3t^2 - 12t + 9$

---

**Step 2: Evaluate velocity at $t = 2$**

$v(2) = 3(2)^2 - 12(2) + 9$

$= 3(4) - 24 + 9$

$= 12 - 24 + 9$

$= -3$ meters/second

---

**Step 3: Find acceleration (second derivative of position)**

$a(t) = s''(t) = v'(t) = 6t - 12$

---

**Step 4: Evaluate acceleration at $t = 2$**

$a(2) = 6(2) - 12 = 12 - 12 = 0$ meters/second²

---

**Interpretation**:
- At $t = 2$ seconds, the particle is moving at $-3$ m/s (moving backward/left)
- The acceleration is $0$ m/s² (velocity is neither increasing nor decreasing at this instant)

**Answer**: Velocity = $-3$ m/s, Acceleration = $0$ m/s²`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find all inflection points of $f(x) = x^4 - 4x^3$.',
            solution: `**Step 1: Find the first derivative**

$f(x) = x^4 - 4x^3$

$f'(x) = 4x^3 - 12x^2$

---

**Step 2: Find the second derivative**

$f''(x) = 12x^2 - 24x$

---

**Step 3: Set $f''(x) = 0$ and solve**

$12x^2 - 24x = 0$

$12x(x - 2) = 0$

So $x = 0$ or $x = 2$

---

**Step 4: Test for sign changes in $f''(x)$**

We need to check intervals: $(-\\infty, 0)$, $(0, 2)$, $(2, \\infty)$

**Test $x = -1$** (in $(-\\infty, 0)$):
$f''(-1) = 12(-1)^2 - 24(-1) = 12 + 24 = 36 > 0$ ✓ concave up

**Test $x = 1$** (in $(0, 2)$):
$f''(1) = 12(1)^2 - 24(1) = 12 - 24 = -12 < 0$ ✓ concave down

**Test $x = 3$** (in $(2, \\infty)$):
$f''(3) = 12(3)^2 - 24(3) = 108 - 72 = 36 > 0$ ✓ concave up

---

**Step 5: Identify inflection points**

At $x = 0$: concavity changes from up to down → **inflection point** ✓

At $x = 2$: concavity changes from down to up → **inflection point** ✓

---

**Step 6: Find y-coordinates**

$f(0) = 0^4 - 4(0)^3 = 0$

$f(2) = 2^4 - 4(2)^3 = 16 - 32 = -16$

**Answer**: Inflection points at $(0, 0)$ and $(2, -16)$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the notation for the second derivative?',
            back: 'Prime notation: $f\'\'(x)$ or Leibniz notation: $\\frac{d^2y}{dx^2}$. Note: The 2 in Leibniz notation is NOT an exponent!',
            hint: 'Two different notations, both commonly used',
          },
          {
            front: 'If $s(t)$ is position, what are the first and second derivatives?',
            back: '$s\'(t) = v(t)$ is velocity (rate of change of position), and $s\'\'(t) = a(t)$ is acceleration (rate of change of velocity).',
            hint: 'Think about motion: position → velocity → acceleration',
          },
          {
            front: 'What does $f\'\'(x) > 0$ tell you about the graph?',
            back: 'The graph is concave up (curves upward like ∪). Think of it as a cup that can hold water.',
            hint: 'Think about the curvature of the graph',
          },
          {
            front: 'How do you find inflection points?',
            back: '1) Find $f\'\'(x)$, 2) Set $f\'\'(x) = 0$ and solve, 3) Check that $f\'\'(x)$ changes sign (concavity changes). If no sign change, it\'s not an inflection point!',
            hint: 'Must check for sign change in the second derivative',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Logarithmic Differentiation Technique
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'logarithmic-differentiation-technique',
      title: 'Logarithmic Differentiation (Technique)',
      description: 'Using logarithms to simplify difficult differentiation problems',
      order: 16,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# 🎯 Logarithmic Differentiation (Advanced Technique)

## What is Logarithmic Differentiation?

**Logarithmic differentiation** is a powerful technique that uses properties of logarithms to make complicated derivatives much easier!

### When to Use This Technique

Use logarithmic differentiation when you have:

1. **Products of many functions**: $(x+1)(x+2)(x+3)$
2. **Quotients with complicated parts**: $\\frac{\\sqrt{x}(x+1)^3}{(x-2)^4}$
3. **Variable in both base and exponent**: $x^x$, $(x^2)^{\\sin x}$, $x^{\\ln x}$
4. **Messy combinations**: Functions that would require Product Rule, Quotient Rule, and Chain Rule all at once

> **💡 Key Idea**: Take ln of both sides, simplify using log properties, then differentiate!

---

## The General Process

### Step-by-Step Method

1. **Take ln of both sides**: $\\ln y = \\ln[f(x)]$
2. **Simplify using log properties**:
   - $\\ln(ab) = \\ln a + \\ln b$
   - $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$
   - $\\ln(a^n) = n\\ln a$
3. **Differentiate implicitly** with respect to $x$
4. **Solve for $\\frac{dy}{dx}$**: Multiply both sides by $y$
5. **Substitute back**: Replace $y$ with the original function

---

## Example 1: Variable Base and Exponent

**Find** $\\frac{dy}{dx}$ **if** $y = x^x$

This is impossible with our usual rules! But logarithmic differentiation makes it easy.

---

**Step 1: Take ln of both sides**

$$\\ln y = \\ln(x^x)$$

---

**Step 2: Use log property** $\\ln(a^n) = n\\ln a$

$$\\ln y = x\\ln x$$

---

**Step 3: Differentiate both sides implicitly**

Left side: $\\frac{d}{dx}[\\ln y] = \\frac{1}{y}\\frac{dy}{dx}$

Right side (Product Rule): $\\frac{d}{dx}[x\\ln x] = (1)\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$

So: $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + 1$

---

**Step 4: Solve for** $\\frac{dy}{dx}$

$$\\frac{dy}{dx} = y(\\ln x + 1)$$

---

**Step 5: Substitute** $y = x^x$

$$\\frac{dy}{dx} = x^x(\\ln x + 1)$$

**Answer**: $\\frac{dy}{dx} = x^x(\\ln x + 1)$

---

## Example 2: Complicated Products and Quotients

**Find** $\\frac{dy}{dx}$ **if** $y = \\frac{x^3\\sqrt{x+1}}{(2x-1)^4}$

Without logarithmic differentiation, this would require Quotient Rule, Product Rule, and Chain Rule!

---

**Step 1: Take ln of both sides**

$$\\ln y = \\ln\\left[\\frac{x^3\\sqrt{x+1}}{(2x-1)^4}\\right]$$

---

**Step 2: Simplify using log properties**

$$\\ln y = \\ln(x^3) + \\ln\\sqrt{x+1} - \\ln[(2x-1)^4]$$

$$\\ln y = 3\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(2x-1)$$

Now it's just a sum/difference instead of a messy quotient!

---

**Step 3: Differentiate both sides**

$$\\frac{1}{y}\\frac{dy}{dx} = 3\\cdot\\frac{1}{x} + \\frac{1}{2}\\cdot\\frac{1}{x+1} - 4\\cdot\\frac{2}{2x-1}$$

$$\\frac{1}{y}\\frac{dy}{dx} = \\frac{3}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-1}$$

---

**Step 4: Multiply by $y$**

$$\\frac{dy}{dx} = y\\left[\\frac{3}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-1}\\right]$$

---

**Step 5: Substitute original function**

$$\\frac{dy}{dx} = \\frac{x^3\\sqrt{x+1}}{(2x-1)^4}\\left[\\frac{3}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-1}\\right]$$

**Answer**: $\\displaystyle\\frac{dy}{dx} = \\frac{x^3\\sqrt{x+1}}{(2x-1)^4}\\left[\\frac{3}{x} + \\frac{1}{2(x+1)} - \\frac{8}{2x-1}\\right]$

> **💡 Note**: This is much easier than using Quotient Rule + Product Rule!

---

## Why It Works

Logarithmic differentiation works because:

1. **Log properties** turn products into sums and quotients into differences
2. **Sums and differences** are much easier to differentiate than products and quotients
3. **The Chain Rule** for $\\ln y$ gives us $\\frac{1}{y}\\frac{dy}{dx}$, which we can solve

It's essentially using algebra to simplify before calculus!

---

## Common Patterns

### Pattern 1: Variable Exponent Only

$y = a^{f(x)}$ where $a$ is constant

**Example**: $y = 3^{x^2}$

$$\\ln y = \\ln(3^{x^2}) = x^2\\ln 3$$

$$\\frac{1}{y}\\frac{dy}{dx} = 2x\\ln 3$$

$$\\frac{dy}{dx} = 2x(\\ln 3) \\cdot 3^{x^2}$$

### Pattern 2: Variable Base Only

$y = [g(x)]^n$ where $n$ is constant

**Example**: $y = (x^2 + 1)^{10}$

This can also be done with Chain Rule, but log differentiation works:

$$\\ln y = 10\\ln(x^2 + 1)$$

$$\\frac{1}{y}\\frac{dy}{dx} = 10 \\cdot \\frac{2x}{x^2+1}$$

$$\\frac{dy}{dx} = \\frac{20x}{x^2+1} \\cdot (x^2+1)^{10} = 20x(x^2+1)^9$$

### Pattern 3: Both Variable

$y = [g(x)]^{h(x)}$

**Example**: $y = (\\sin x)^x$

$$\\ln y = x\\ln(\\sin x)$$

$$\\frac{1}{y}\\frac{dy}{dx} = \\ln(\\sin x) + x\\cdot\\frac{\\cos x}{\\sin x}$$

$$\\frac{dy}{dx} = (\\sin x)^x[\\ln(\\sin x) + x\\cot x]$$

---

## Advantages Over Other Methods

### Product Rule vs. Logarithmic Differentiation

**Product of 3 functions**: $(x+1)(x+2)(x+3)$

**Product Rule** (messy!):
- Takes 3 applications
- Many terms to combine

**Logarithmic Differentiation** (clean!):
$$\\ln y = \\ln(x+1) + \\ln(x+2) + \\ln(x+3)$$
$$\\frac{1}{y}\\frac{dy}{dx} = \\frac{1}{x+1} + \\frac{1}{x+2} + \\frac{1}{x+3}$$

Much simpler! ✓

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting to Multiply by y
After differentiating, you have $\\frac{1}{y}\\frac{dy}{dx} = ...$

Don't forget to multiply both sides by $y$!

### Mistake 2: Wrong Log Properties
❌ $\\ln(x + y) = \\ln x + \\ln y$ (WRONG!)
✅ $\\ln(xy) = \\ln x + \\ln y$ (multiplication becomes addition)

### Mistake 3: Not Substituting Back
After solving for $\\frac{dy}{dx}$, remember to substitute the original expression for $y$!

### Mistake 4: Domain Issues
$\\ln x$ is only defined for $x > 0$. If needed, use $\\ln|x|$ for all $x \\neq 0$.

---

## When NOT to Use Logarithmic Differentiation

Don't use it for simple functions where standard rules work fine:

- **Simple powers**: $x^5$ — just use Power Rule
- **Simple products**: $x\\sin x$ — just use Product Rule
- **Exponential base $e$**: $e^{3x}$ — just use Chain Rule

Use logarithmic differentiation for **complicated** expressions where it genuinely simplifies your work!

---

## Special Case: Products of Many Terms

For $y = f_1(x) \\cdot f_2(x) \\cdot f_3(x) \\cdots f_n(x)$:

$$\\ln y = \\ln f_1 + \\ln f_2 + \\ln f_3 + \\cdots + \\ln f_n$$

$$\\frac{1}{y}\\frac{dy}{dx} = \\frac{f_1'}{f_1} + \\frac{f_2'}{f_2} + \\frac{f_3'}{f_3} + \\cdots + \\frac{f_n'}{f_n}$$

$$\\frac{dy}{dx} = y\\left[\\frac{f_1'}{f_1} + \\frac{f_2'}{f_2} + \\cdots + \\frac{f_n'}{f_n}\\right]$$

> **💡 Formula**: Each factor contributes $\\frac{\\text{derivative of factor}}{\\text{factor}}$

---

## 📝 Practice Strategy

1. **Recognize** when logarithmic differentiation will help (products, quotients, variable exponents)
2. **Take ln** of both sides
3. **Simplify** thoroughly using all log properties before differentiating
4. **Differentiate** implicitly (left side gives $\\frac{1}{y}\\frac{dy}{dx}$)
5. **Multiply** by $y$ to isolate $\\frac{dy}{dx}$
6. **Substitute** the original expression for $y$
7. **Simplify** if possible (but complicated answers are okay!)
`,
      exampleProblems: {
        create: [
          {
            question: 'Use logarithmic differentiation to find $\\frac{dy}{dx}$ if $y = x^{\\sin x}$.',
            solution: `**Step 1: Take ln of both sides**

$$\\ln y = \\ln(x^{\\sin x})$$

---

**Step 2: Use log property** $\\ln(a^n) = n\\ln a$

$$\\ln y = \\sin x \\cdot \\ln x$$

---

**Step 3: Differentiate both sides**

Left side:
$$\\frac{d}{dx}[\\ln y] = \\frac{1}{y}\\frac{dy}{dx}$$

Right side (Product Rule):
$$\\frac{d}{dx}[\\sin x \\cdot \\ln x] = (\\cos x)(\\ln x) + (\\sin x)\\left(\\frac{1}{x}\\right)$$

$$= \\cos x \\ln x + \\frac{\\sin x}{x}$$

---

**Step 4: Set them equal**

$$\\frac{1}{y}\\frac{dy}{dx} = \\cos x \\ln x + \\frac{\\sin x}{x}$$

---

**Step 5: Multiply by $y$**

$$\\frac{dy}{dx} = y\\left(\\cos x \\ln x + \\frac{\\sin x}{x}\\right)$$

---

**Step 6: Substitute** $y = x^{\\sin x}$

$$\\frac{dy}{dx} = x^{\\sin x}\\left(\\cos x \\ln x + \\frac{\\sin x}{x}\\right)$$

**Answer**: $\\displaystyle\\frac{dy}{dx} = x^{\\sin x}\\left(\\cos x \\ln x + \\frac{\\sin x}{x}\\right)$`,
            difficulty: Difficulty.HARD,
            order: 1,
          },
          {
            question: 'Find $\\frac{dy}{dx}$ if $y = \\frac{(x^2+1)^3\\sqrt{x-1}}{(3x+2)^5}$.',
            solution: `**Step 1: Take ln of both sides**

$$\\ln y = \\ln\\left[\\frac{(x^2+1)^3\\sqrt{x-1}}{(3x+2)^5}\\right]$$

---

**Step 2: Simplify using log properties**

$$\\ln y = \\ln[(x^2+1)^3] + \\ln\\sqrt{x-1} - \\ln[(3x+2)^5]$$

$$\\ln y = 3\\ln(x^2+1) + \\frac{1}{2}\\ln(x-1) - 5\\ln(3x+2)$$

---

**Step 3: Differentiate both sides**

$$\\frac{1}{y}\\frac{dy}{dx} = 3\\cdot\\frac{2x}{x^2+1} + \\frac{1}{2}\\cdot\\frac{1}{x-1} - 5\\cdot\\frac{3}{3x+2}$$

$$\\frac{1}{y}\\frac{dy}{dx} = \\frac{6x}{x^2+1} + \\frac{1}{2(x-1)} - \\frac{15}{3x+2}$$

---

**Step 4: Multiply by $y$**

$$\\frac{dy}{dx} = y\\left[\\frac{6x}{x^2+1} + \\frac{1}{2(x-1)} - \\frac{15}{3x+2}\\right]$$

---

**Step 5: Substitute the original function**

$$\\frac{dy}{dx} = \\frac{(x^2+1)^3\\sqrt{x-1}}{(3x+2)^5}\\left[\\frac{6x}{x^2+1} + \\frac{1}{2(x-1)} - \\frac{15}{3x+2}\\right]$$

**Answer**: $\\displaystyle\\frac{dy}{dx} = \\frac{(x^2+1)^3\\sqrt{x-1}}{(3x+2)^5}\\left[\\frac{6x}{x^2+1} + \\frac{1}{2(x-1)} - \\frac{15}{3x+2}\\right]$

> **Note**: This would be extremely difficult using Quotient Rule and Product Rule!`,
            difficulty: Difficulty.EXPERT,
            order: 2,
          },
          {
            question: 'Use logarithmic differentiation to find $\\frac{dy}{dx}$ if $y = (x+1)(x+2)(x+3)(x+4)$.',
            solution: `**Step 1: Take ln of both sides**

$$\\ln y = \\ln[(x+1)(x+2)(x+3)(x+4)]$$

---

**Step 2: Use log property** $\\ln(ab) = \\ln a + \\ln b$

$$\\ln y = \\ln(x+1) + \\ln(x+2) + \\ln(x+3) + \\ln(x+4)$$

---

**Step 3: Differentiate both sides**

$$\\frac{1}{y}\\frac{dy}{dx} = \\frac{1}{x+1} + \\frac{1}{x+2} + \\frac{1}{x+3} + \\frac{1}{x+4}$$

---

**Step 4: Multiply by $y$**

$$\\frac{dy}{dx} = y\\left[\\frac{1}{x+1} + \\frac{1}{x+2} + \\frac{1}{x+3} + \\frac{1}{x+4}\\right]$$

---

**Step 5: Substitute** $y = (x+1)(x+2)(x+3)(x+4)$

$$\\frac{dy}{dx} = (x+1)(x+2)(x+3)(x+4)\\left[\\frac{1}{x+1} + \\frac{1}{x+2} + \\frac{1}{x+3} + \\frac{1}{x+4}\\right]$$

---

**Optional: Simplify by distributing**

Each term in the bracket cancels one factor:

$$\\frac{dy}{dx} = (x+2)(x+3)(x+4) + (x+1)(x+3)(x+4) + (x+1)(x+2)(x+4) + (x+1)(x+2)(x+3)$$

**Answer**: $\\displaystyle\\frac{dy}{dx} = (x+1)(x+2)(x+3)(x+4)\\left[\\frac{1}{x+1} + \\frac{1}{x+2} + \\frac{1}{x+3} + \\frac{1}{x+4}\\right]$

> **Compare**: Using the Product Rule directly would require 3 applications and be much messier!`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'When should you use logarithmic differentiation?',
            back: 'Use it for: (1) complicated products/quotients, (2) variable in base AND exponent (like $x^x$), (3) products of many terms, (4) anything where log properties can simplify before differentiating.',
            hint: 'Think about when taking ln would simplify the expression',
          },
          {
            front: 'What are the three key log properties for logarithmic differentiation?',
            back: '(1) $\\ln(ab) = \\ln a + \\ln b$, (2) $\\ln(a/b) = \\ln a - \\ln b$, (3) $\\ln(a^n) = n\\ln a$. These turn products/quotients into sums/differences!',
            hint: 'Products become sums, quotients become differences, exponents come down',
          },
          {
            front: 'After taking ln of both sides and differentiating, what do you get on the left side?',
            back: '$\\frac{d}{dx}[\\ln y] = \\frac{1}{y}\\frac{dy}{dx}$. Don\'t forget to multiply both sides by $y$ to solve for $\\frac{dy}{dx}$!',
            hint: 'Implicit differentiation of ln(y)',
          },
          {
            front: 'How do you find the derivative of $y = x^x$ using logarithmic differentiation?',
            back: 'Take ln: $\\ln y = x\\ln x$. Differentiate: $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + 1$. Solve: $\\frac{dy}{dx} = x^x(\\ln x + 1)$',
            hint: 'This is the classic example - can\'t use regular rules!',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 Advanced Derivatives micro-lessons!')
  console.log('\nTopics created:')
  console.log('  15. Higher-Order Derivatives')
  console.log('  16. Logarithmic Differentiation (Technique)')
  console.log('\n💡 Derivatives section is getting comprehensive!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
