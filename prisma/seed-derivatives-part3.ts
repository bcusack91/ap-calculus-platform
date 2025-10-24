import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Derivatives micro-lessons - Chain Rule and Special Functions (Part 3)...')

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
          'chain-rule',
          'derivatives-of-trig-functions',
          'derivatives-of-exponential-functions',
          'derivatives-of-logarithmic-functions',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Chain Rule
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'chain-rule',
      title: 'The Chain Rule',
      description: 'Finding derivatives of composite functions',
      order: 9,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# 🔗 The Chain Rule

## What is the Chain Rule?

The **Chain Rule** is one of the most important and widely used differentiation rules. It tells us how to find the derivative of a **composite function** (a function inside another function).

### 📊 The Formula

If $y = f(g(x))$, then:

$$\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$$

Or in Leibniz notation:

$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

where $u = g(x)$.

> **💡 Memory Trick**: "Derivative of the outside times derivative of the inside"

---

## Understanding Composite Functions

A composite function is a function within another function.

### Examples of Composite Functions

1. $f(x) = (x^2 + 1)^5$ — The function $x^2 + 1$ is inside the power of 5
2. $f(x) = \\sin(3x)$ — The function $3x$ is inside the sine function
3. $f(x) = e^{x^2}$ — The function $x^2$ is inside the exponential
4. $f(x) = \\sqrt{x^3 - 2x}$ — The function $x^3 - 2x$ is inside the square root

---

## The "Outside-Inside" Method

### Step-by-Step Process

1. **Identify** the outside function and the inside function
2. **Differentiate** the outside function (leave the inside alone)
3. **Multiply** by the derivative of the inside function

### Example Walkthrough

Find the derivative of $f(x) = (x^2 + 3x)^4$

**Step 1: Identify**
- Outside function: $u^4$ (something to the 4th power)
- Inside function: $u = x^2 + 3x$

**Step 2: Differentiate the outside**
- Derivative of $u^4$ is $4u^3$
- Replace $u$ with $(x^2 + 3x)$: $4(x^2 + 3x)^3$

**Step 3: Multiply by derivative of inside**
- Derivative of $(x^2 + 3x)$ is $2x + 3$
- Final answer: $f'(x) = 4(x^2 + 3x)^3(2x + 3)$

---

## Common Chain Rule Patterns

### Pattern 1: Powers of Functions

If $f(x) = [g(x)]^n$, then $f'(x) = n[g(x)]^{n-1} \\cdot g'(x)$

**Example**: $(3x^2 - 1)^7$
- Answer: $7(3x^2 - 1)^6 \\cdot 6x = 42x(3x^2 - 1)^6$

### Pattern 2: Square Roots

If $f(x) = \\sqrt{g(x)}$, then $f'(x) = \\frac{g'(x)}{2\\sqrt{g(x)}}$

**Example**: $\\sqrt{x^2 + 1}$
- Answer: $\\frac{2x}{2\\sqrt{x^2 + 1}} = \\frac{x}{\\sqrt{x^2 + 1}}$

### Pattern 3: Functions with Coefficients

If $f(x) = g(ax + b)$, then $f'(x) = a \\cdot g'(ax + b)$

**Example**: $\\sin(5x)$
- Answer: $5\\cos(5x)$

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the Chain Rule
❌ **Wrong**: $\\frac{d}{dx}[(2x + 1)^3] = 3(2x + 1)^2$
✅ **Right**: $\\frac{d}{dx}[(2x + 1)^3] = 3(2x + 1)^2 \\cdot 2 = 6(2x + 1)^2$

### Mistake 2: Not Simplifying
While $(3x^2 - 1)^6 \\cdot 6x$ is correct, it's better to write $6x(3x^2 - 1)^6$ (constants first).

### Mistake 3: Confusing Inside and Outside
Make sure you identify which function is inside and which is outside!

---

## 🎯 When to Use the Chain Rule

Use the Chain Rule whenever you see:
- A function raised to a power (other than just $x$)
- Trig functions with anything other than just $x$ inside
- Exponentials with anything other than just $x$ in the exponent
- Square roots or other roots of expressions
- Any function within another function

> **💡 Quick Test**: If you can't apply the Power Rule, Product Rule, or Quotient Rule directly, you probably need the Chain Rule!

---

## Multiple Compositions

Sometimes you need to apply the Chain Rule more than once!

**Example**: $f(x) = \\sin^2(3x) = [\\sin(3x)]^2$

This has TWO layers:
1. Outside: squaring function
2. Middle: sine function  
3. Inside: $3x$

**Solution**:
- Derivative of square: $2\\sin(3x)$
- Times derivative of sine: $2\\sin(3x) \\cdot \\cos(3x)$
- Times derivative of $3x$: $2\\sin(3x)\\cos(3x) \\cdot 3$
- **Answer**: $f'(x) = 6\\sin(3x)\\cos(3x)$

---

## 📝 Practice Strategy

1. **Circle** the inside function
2. **Box** the outside function
3. Write "outside' × inside'" as a reminder
4. Apply the formula step by step
5. Simplify your answer
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of $f(x) = (2x^3 - 5x + 1)^6$ using the Chain Rule.',
            solution: `**Step 1: Identify the functions**

Outside function: $u^6$ (something to the 6th power)

Inside function: $u = 2x^3 - 5x + 1$

---

**Step 2: Apply the Chain Rule**

Using $\\frac{d}{dx}[u^6] = 6u^5 \\cdot \\frac{du}{dx}$

---

**Step 3: Find the derivative of the inside**

$\\frac{du}{dx} = \\frac{d}{dx}[2x^3 - 5x + 1] = 6x^2 - 5$

---

**Step 4: Put it together**

$f'(x) = 6(2x^3 - 5x + 1)^5 \\cdot (6x^2 - 5)$

This can also be written as:

$$f'(x) = 6(6x^2 - 5)(2x^3 - 5x + 1)^5$$

**Answer**: $f'(x) = 6(6x^2 - 5)(2x^3 - 5x + 1)^5$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find $\\frac{dy}{dx}$ if $y = \\sqrt{4x^2 + 9}$.',
            solution: `**Step 1: Rewrite using exponents**

$y = \\sqrt{4x^2 + 9} = (4x^2 + 9)^{1/2}$

---

**Step 2: Identify the functions**

Outside function: $u^{1/2}$

Inside function: $u = 4x^2 + 9$

---

**Step 3: Apply the Chain Rule**

$\\frac{dy}{dx} = \\frac{1}{2}(4x^2 + 9)^{-1/2} \\cdot \\frac{d}{dx}[4x^2 + 9]$

---

**Step 4: Find the derivative of the inside**

$\\frac{d}{dx}[4x^2 + 9] = 8x$

---

**Step 5: Combine and simplify**

$\\frac{dy}{dx} = \\frac{1}{2}(4x^2 + 9)^{-1/2} \\cdot 8x$

$= 4x(4x^2 + 9)^{-1/2}$

$= \\frac{4x}{\\sqrt{4x^2 + 9}}$

**Answer**: $\\displaystyle\\frac{dy}{dx} = \\frac{4x}{\\sqrt{4x^2 + 9}}$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find the derivative of $g(x) = (x^2 + 1)^3(2x - 5)^4$. (This requires both Product Rule AND Chain Rule!)',
            solution: `This problem requires **both** the Product Rule and the Chain Rule.

---

**Step 1: Identify that this is a product**

Let $u = (x^2 + 1)^3$ and $v = (2x - 5)^4$

So $g(x) = u \\cdot v$

---

**Step 2: Apply the Product Rule**

$g'(x) = u'v + uv'$

---

**Step 3: Find $u'$ using the Chain Rule**

$u = (x^2 + 1)^3$

$u' = 3(x^2 + 1)^2 \\cdot 2x = 6x(x^2 + 1)^2$

---

**Step 4: Find $v'$ using the Chain Rule**

$v = (2x - 5)^4$

$v' = 4(2x - 5)^3 \\cdot 2 = 8(2x - 5)^3$

---

**Step 5: Substitute into Product Rule**

$g'(x) = [6x(x^2 + 1)^2][(2x - 5)^4] + [(x^2 + 1)^3][8(2x - 5)^3]$

---

**Step 6: Factor out common terms**

Factor out $(x^2 + 1)^2(2x - 5)^3$:

$g'(x) = (x^2 + 1)^2(2x - 5)^3[6x(2x - 5) + 8(x^2 + 1)]$

Simplify inside the brackets:

$= (x^2 + 1)^2(2x - 5)^3[12x^2 - 30x + 8x^2 + 8]$

$= (x^2 + 1)^2(2x - 5)^3[20x^2 - 30x + 8]$

We can factor out 2:

$= 2(x^2 + 1)^2(2x - 5)^3[10x^2 - 15x + 4]$

**Answer**: $g'(x) = 2(x^2 + 1)^2(2x - 5)^3(10x^2 - 15x + 4)$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the Chain Rule formula?',
            back: 'If $y = f(g(x))$, then $\\frac{dy}{dx} = f\'(g(x)) \\cdot g\'(x)$. In words: "derivative of the outside times derivative of the inside"',
            hint: 'Think about composite functions - a function inside another function',
          },
          {
            front: 'Find the derivative of $(3x^2 + 1)^5$ using the Chain Rule.',
            back: '$\\frac{d}{dx}[(3x^2 + 1)^5] = 5(3x^2 + 1)^4 \\cdot 6x = 30x(3x^2 + 1)^4$',
            hint: 'Outside function is the 5th power, inside is $3x^2 + 1$',
          },
          {
            front: 'When should you use the Chain Rule?',
            back: 'Use the Chain Rule whenever you have a composite function - a function within another function. Examples: $(2x+1)^3$, $\\sin(5x)$, $e^{x^2}$, $\\sqrt{x^2+1}$',
            hint: 'Look for functions inside other functions',
          },
          {
            front: 'What is a common mistake when using the Chain Rule?',
            back: 'Forgetting to multiply by the derivative of the inside function. For example, $\\frac{d}{dx}[(2x+1)^3] = 3(2x+1)^2 \\cdot 2$, NOT just $3(2x+1)^2$',
            hint: 'Don\'t forget the inside derivative!',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Derivatives of Trig Functions
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'derivatives-of-trig-functions',
      title: 'Derivatives of Trigonometric Functions',
      description: 'Finding derivatives of sine, cosine, tangent, and other trig functions',
      order: 10,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# 📐 Derivatives of Trigonometric Functions

## The Six Basic Derivatives

You need to **memorize** these six fundamental trig derivatives:

### Primary Functions

$$\\frac{d}{dx}[\\sin x] = \\cos x$$

$$\\frac{d}{dx}[\\cos x] = -\\sin x$$

$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$

### Secondary Functions

$$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$

$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$$

$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$$

> **💡 Pattern**: Notice that the derivatives of "co-functions" (cosine, cosecant, cotangent) have **negative signs**!

---

## Memory Tricks

### Trick 1: The Sign Pattern
- **CO-functions** (cos, csc, cot) → derivatives are **NEGATIVE**
- Non-co-functions (sin, sec, tan) → derivatives are positive

### Trick 2: Pairs
- $\\sin x$ and $\\cos x$ trade back and forth (with a sign change for cosine)
- $\\sec x$ and $\\tan x$ appear together: $\\sec x \\tan x$
- $\\csc x$ and $\\cot x$ appear together: $-\\csc x \\cot x$

### Trick 3: Squares
- Derivative of $\\tan x$ is $\\sec^2 x$ (square!)
- Derivative of $\\cot x$ is $-\\csc^2 x$ (square with negative!)

---

## Using the Chain Rule with Trig Functions

When the inside is NOT just $x$, use the Chain Rule!

### General Formula

$$\\frac{d}{dx}[\\sin(u)] = \\cos(u) \\cdot u'$$

$$\\frac{d}{dx}[\\cos(u)] = -\\sin(u) \\cdot u'$$

$$\\frac{d}{dx}[\\tan(u)] = \\sec^2(u) \\cdot u'$$

### Examples

1. $\\frac{d}{dx}[\\sin(3x)] = \\cos(3x) \\cdot 3 = 3\\cos(3x)$

2. $\\frac{d}{dx}[\\cos(x^2)] = -\\sin(x^2) \\cdot 2x = -2x\\sin(x^2)$

3. $\\frac{d}{dx}[\\tan(5x + 1)] = \\sec^2(5x + 1) \\cdot 5 = 5\\sec^2(5x + 1)$

---

## Powers of Trig Functions

### Notation Warning

$\\sin^2 x$ means $(\\sin x)^2$, NOT $\\sin(\\sin x)$

Similarly: $\\cos^3 x = (\\cos x)^3$

### Taking Derivatives

Use the **Chain Rule** with the power on the outside!

**Example**: $\\frac{d}{dx}[\\sin^2 x]$

Think of this as $(\\sin x)^2$:
- Outside: square function, so $2(\\sin x)$
- Inside: sine function, so $\\cos x$
- Answer: $2\\sin x \\cos x$

**Example**: $\\frac{d}{dx}[\\cos^3 x]$

Think of this as $(\\cos x)^3$:
- Outside: cube function, so $3(\\cos x)^2$
- Inside: cosine function, so $-\\sin x$
- Answer: $3\\cos^2 x \\cdot (-\\sin x) = -3\\cos^2 x \\sin x$

---

## Common Applications

### Application 1: Motion Problems

If $s(t) = 5\\sin(2t)$ represents position, find velocity at $t = \\frac{\\pi}{4}$:

$v(t) = s'(t) = 5\\cos(2t) \\cdot 2 = 10\\cos(2t)$

$v\\left(\\frac{\\pi}{4}\\right) = 10\\cos\\left(\\frac{\\pi}{2}\\right) = 10(0) = 0$

### Application 2: Rate of Change

The height of a Ferris wheel car: $h(t) = 30 + 25\\sin\\left(\\frac{\\pi t}{10}\\right)$ feet

Rate of change of height:

$h'(t) = 25\\cos\\left(\\frac{\\pi t}{10}\\right) \\cdot \\frac{\\pi}{10} = \\frac{5\\pi}{2}\\cos\\left(\\frac{\\pi t}{10}\\right)$

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the Negative
❌ $\\frac{d}{dx}[\\cos x] = \\sin x$
✅ $\\frac{d}{dx}[\\cos x] = -\\sin x$

### Mistake 2: Wrong Square
❌ $\\frac{d}{dx}[\\tan x] = \\tan^2 x$
✅ $\\frac{d}{dx}[\\tan x] = \\sec^2 x$

### Mistake 3: Forgetting Chain Rule
❌ $\\frac{d}{dx}[\\sin(2x)] = \\cos(2x)$
✅ $\\frac{d}{dx}[\\sin(2x)] = 2\\cos(2x)$

### Mistake 4: Confusing Notation
Remember: $\\sin^2 x = (\\sin x)^2$, not $\\sin(\\sin x)$

---

## Derivatives in Radians

**IMPORTANT**: All trig derivatives assume angles are measured in **radians**, not degrees!

If working in degrees, you need conversion factors. But on the AP Calculus exam, always use radians.

---

## 📝 Practice Tips

1. **Memorize** the six basic trig derivatives - you'll use them constantly
2. **Remember** the co-function negative sign rule
3. **Always** use the Chain Rule when the inside is not just $x$
4. **Rewrite** powers of trig functions: $\\sin^2 x = (\\sin x)^2$
5. **Check** your work by looking at the signs
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of $f(x) = x^2 \\sin x$.',
            solution: `This requires the **Product Rule** combined with trig derivatives.

---

**Step 1: Identify the product**

$u = x^2$ and $v = \\sin x$

---

**Step 2: Find the derivatives**

$u' = 2x$

$v' = \\cos x$

---

**Step 3: Apply the Product Rule**

$f'(x) = u'v + uv'$

$f'(x) = (2x)(\\sin x) + (x^2)(\\cos x)$

$f'(x) = 2x\\sin x + x^2\\cos x$

**Answer**: $f'(x) = 2x\\sin x + x^2\\cos x$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find $\\frac{dy}{dx}$ if $y = \\sin^4(2x)$.',
            solution: `This requires the **Chain Rule twice** (double chain rule).

---

**Step 1: Rewrite the function**

$y = [\\sin(2x)]^4$

This has three layers:
1. Outside: 4th power
2. Middle: sine function
3. Inside: $2x$

---

**Step 2: Derivative of the 4th power**

$\\frac{dy}{dx} = 4[\\sin(2x)]^3 \\cdot \\frac{d}{dx}[\\sin(2x)]$

---

**Step 3: Derivative of sine (with Chain Rule)**

$\\frac{d}{dx}[\\sin(2x)] = \\cos(2x) \\cdot 2 = 2\\cos(2x)$

---

**Step 4: Combine everything**

$\\frac{dy}{dx} = 4[\\sin(2x)]^3 \\cdot 2\\cos(2x)$

$= 8\\sin^3(2x)\\cos(2x)$

**Answer**: $\\displaystyle\\frac{dy}{dx} = 8\\sin^3(2x)\\cos(2x)$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Find the equation of the tangent line to $y = \\cos x$ at $x = \\frac{\\pi}{3}$.',
            solution: `**Step 1: Find the derivative**

$\\frac{dy}{dx} = -\\sin x$

---

**Step 2: Evaluate the derivative at $x = \\frac{\\pi}{3}$**

This gives us the slope of the tangent line:

$m = -\\sin\\left(\\frac{\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2}$

---

**Step 3: Find the y-coordinate**

$y = \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$

So the point is $\\left(\\frac{\\pi}{3}, \\frac{1}{2}\\right)$

---

**Step 4: Use point-slope form**

$y - y_1 = m(x - x_1)$

$y - \\frac{1}{2} = -\\frac{\\sqrt{3}}{2}\\left(x - \\frac{\\pi}{3}\\right)$

$y = -\\frac{\\sqrt{3}}{2}x + \\frac{\\sqrt{3}\\pi}{6} + \\frac{1}{2}$

**Answer**: $y = -\\frac{\\sqrt{3}}{2}x + \\frac{\\sqrt{3}\\pi}{6} + \\frac{1}{2}$

(Or in point-slope form): $y - \\frac{1}{2} = -\\frac{\\sqrt{3}}{2}\\left(x - \\frac{\\pi}{3}\\right)$`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is $\\frac{d}{dx}[\\sin x]$?',
            back: '$\\cos x$',
            hint: 'Sine becomes cosine',
          },
          {
            front: 'What is $\\frac{d}{dx}[\\cos x]$?',
            back: '$-\\sin x$ (note the negative sign!)',
            hint: 'Co-functions have negative derivatives',
          },
          {
            front: 'What is $\\frac{d}{dx}[\\tan x]$?',
            back: '$\\sec^2 x$',
            hint: 'The derivative is a squared secant',
          },
          {
            front: 'Find $\\frac{d}{dx}[\\sin(3x)]$',
            back: '$3\\cos(3x)$ - Don\'t forget the Chain Rule! The derivative of the inside ($3x$) is 3.',
            hint: 'Use the Chain Rule - multiply by the derivative of the inside',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 3: Derivatives of Exponential Functions
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'derivatives-of-exponential-functions',
      title: 'Derivatives of Exponential Functions',
      description: 'Finding derivatives involving e^x and other exponential functions',
      order: 11,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# 🚀 Derivatives of Exponential Functions

## The Most Important Derivative: e^x

The exponential function with base $e$ has a remarkable property:

$$\\frac{d}{dx}[e^x] = e^x$$

The derivative of $e^x$ is **itself**! This makes $e$ the natural choice for calculus.

> **💡 Amazing Fact**: $e^x$ is the ONLY function (up to a constant multiple) that is its own derivative!

---

## Why e is Special

The number $e \\approx 2.71828...$ is called **Euler's number**, and it's defined specifically so that:

$$\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$

This property makes the derivative formula so clean!

---

## Exponential Functions with Chain Rule

When the exponent is not just $x$, use the **Chain Rule**:

### General Formula

$$\\frac{d}{dx}[e^u] = e^u \\cdot u'$$

where $u$ is any function of $x$.

### Examples

1. $\\frac{d}{dx}[e^{2x}] = e^{2x} \\cdot 2 = 2e^{2x}$

2. $\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot 2x = 2xe^{x^2}$

3. $\\frac{d}{dx}[e^{-3x}] = e^{-3x} \\cdot (-3) = -3e^{-3x}$

4. $\\frac{d}{dx}[e^{\\sin x}] = e^{\\sin x} \\cdot \\cos x = e^{\\sin x}\\cos x$

> **💡 Pattern**: The exponential part stays the same, just multiply by the derivative of the exponent!

---

## General Exponential Functions: a^x

For exponential functions with other bases:

$$\\frac{d}{dx}[a^x] = a^x \\ln a$$

### Examples

1. $\\frac{d}{dx}[2^x] = 2^x \\ln 2$

2. $\\frac{d}{dx}[10^x] = 10^x \\ln 10$

3. $\\frac{d}{dx}[3^{2x}] = 3^{2x} \\ln 3 \\cdot 2 = 2\\ln(3) \\cdot 3^{2x}$

### Why the ln a?

When $a = e$, we get $\\ln e = 1$, so the formula becomes $\\frac{d}{dx}[e^x] = e^x \\cdot 1 = e^x$ ✓

---

## Combining Rules

Exponential derivatives often require multiple rules:

### Product Rule + Exponential

**Example**: $f(x) = xe^x$

Using $u = x$ and $v = e^x$:

$f'(x) = (1)(e^x) + (x)(e^x) = e^x + xe^x = e^x(1 + x)$

### Quotient Rule + Exponential

**Example**: $g(x) = \\frac{e^x}{x}$

Using the quotient rule:

$g'(x) = \\frac{(e^x)(x) - (e^x)(1)}{x^2} = \\frac{xe^x - e^x}{x^2} = \\frac{e^x(x-1)}{x^2}$

### Chain Rule + Exponential + Trig

**Example**: $h(x) = e^{\\sin(2x)}$

$h'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cos(2x)e^{\\sin(2x)}$

---

## Applications

### Population Growth

If $P(t) = 1000e^{0.05t}$ represents a population:

$P'(t) = 1000e^{0.05t} \\cdot 0.05 = 50e^{0.05t}$

This gives the **rate of growth** at time $t$.

### Radioactive Decay

If $N(t) = N_0 e^{-\\lambda t}$ represents radioactive atoms:

$N'(t) = N_0 e^{-\\lambda t} \\cdot (-\\lambda) = -\\lambda N_0 e^{-\\lambda t}$

The negative sign shows the quantity is decreasing.

### Compound Interest

If $A(t) = 5000e^{0.06t}$ represents account balance:

$A'(t) = 5000e^{0.06t} \\cdot 0.06 = 300e^{0.06t}$

This is the instantaneous rate at which money is being earned.

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Chain Rule
❌ $\\frac{d}{dx}[e^{2x}] = e^{2x}$
✅ $\\frac{d}{dx}[e^{2x}] = 2e^{2x}$

### Mistake 2: Confusing with Power Rule
❌ $\\frac{d}{dx}[e^x] = xe^{x-1}$ (This is WRONG! Not a power of $x$!)
✅ $\\frac{d}{dx}[e^x] = e^x$

### Mistake 3: Wrong Base Formula
❌ $\\frac{d}{dx}[2^x] = 2^x$
✅ $\\frac{d}{dx}[2^x] = 2^x \\ln 2$

### Mistake 4: Algebraic Errors
$e^{x+1} = e^x \\cdot e^1 = e \\cdot e^x$, NOT $e^x + e$

---

## Special Cases and Tricks

### Constants in Exponents

$\\frac{d}{dx}[e^{3x+5}] = e^{3x+5} \\cdot 3 = 3e^{3x+5}$

The constant 5 disappears when differentiating!

### Negative Exponents

$\\frac{d}{dx}[e^{-x}] = e^{-x} \\cdot (-1) = -e^{-x}$

### Products with e^x Factor Out!

$xe^x + e^x = e^x(x + 1)$ — Always factor out $e^x$ when possible!

---

## 📝 Key Formulas to Memorize

1. $\\frac{d}{dx}[e^x] = e^x$

2. $\\frac{d}{dx}[e^u] = e^u \\cdot u'$ (Chain Rule)

3. $\\frac{d}{dx}[a^x] = a^x \\ln a$ (General base)

4. $\\frac{d}{dx}[a^u] = a^u \\ln a \\cdot u'$ (General base + Chain Rule)

---

## Practice Strategy

1. Identify if it's base $e$ or another base
2. Look for what's in the exponent
3. If exponent is not just $x$, prepare to use Chain Rule
4. Apply the formula and multiply by derivative of exponent
5. Factor out $e^x$ or $a^x$ when simplifying
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of $f(x) = 3e^{4x} + 2e^{-x}$.',
            solution: `**Step 1: Apply the Sum Rule**

Take the derivative of each term separately:

$f'(x) = \\frac{d}{dx}[3e^{4x}] + \\frac{d}{dx}[2e^{-x}]$

---

**Step 2: First term - use Chain Rule**

$\\frac{d}{dx}[3e^{4x}] = 3 \\cdot e^{4x} \\cdot 4 = 12e^{4x}$

---

**Step 3: Second term - use Chain Rule**

$\\frac{d}{dx}[2e^{-x}] = 2 \\cdot e^{-x} \\cdot (-1) = -2e^{-x}$

---

**Step 4: Combine**

$f'(x) = 12e^{4x} - 2e^{-x}$

**Answer**: $f'(x) = 12e^{4x} - 2e^{-x}$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Find $\\frac{dy}{dx}$ if $y = x^2e^{3x}$.',
            solution: `This requires the **Product Rule**.

---

**Step 1: Identify the product**

$u = x^2$ and $v = e^{3x}$

---

**Step 2: Find $u'$**

$u' = 2x$

---

**Step 3: Find $v'$ (using Chain Rule)**

$v' = e^{3x} \\cdot 3 = 3e^{3x}$

---

**Step 4: Apply Product Rule**

$\\frac{dy}{dx} = u'v + uv'$

$= (2x)(e^{3x}) + (x^2)(3e^{3x})$

$= 2xe^{3x} + 3x^2e^{3x}$

---

**Step 5: Factor out $e^{3x}$**

$= e^{3x}(2x + 3x^2)$

$= e^{3x}(3x^2 + 2x)$

$= xe^{3x}(3x + 2)$

**Answer**: $\\displaystyle\\frac{dy}{dx} = xe^{3x}(3x + 2)$ or $e^{3x}(3x^2 + 2x)$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find the derivative of $g(x) = \\frac{e^{2x}}{x^3}$.',
            solution: `This requires the **Quotient Rule**.

---

**Step 1: Identify numerator and denominator**

$u = e^{2x}$ (top)

$v = x^3$ (bottom)

---

**Step 2: Find $u'$ (Chain Rule)**

$u' = e^{2x} \\cdot 2 = 2e^{2x}$

---

**Step 3: Find $v'$**

$v' = 3x^2$

---

**Step 4: Apply Quotient Rule**

$g'(x) = \\frac{u'v - uv'}{v^2}$

$= \\frac{(2e^{2x})(x^3) - (e^{2x})(3x^2)}{(x^3)^2}$

$= \\frac{2x^3e^{2x} - 3x^2e^{2x}}{x^6}$

---

**Step 5: Factor out common terms**

Factor out $e^{2x}$ and $x^2$:

$= \\frac{x^2e^{2x}(2x - 3)}{x^6}$

$= \\frac{e^{2x}(2x - 3)}{x^4}$

**Answer**: $\\displaystyle g'(x) = \\frac{e^{2x}(2x - 3)}{x^4}$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is $\\frac{d}{dx}[e^x]$?',
            back: '$e^x$ - The exponential function is its own derivative!',
            hint: 'This is the special property that makes $e$ so important',
          },
          {
            front: 'Find $\\frac{d}{dx}[e^{5x}]$ using the Chain Rule.',
            back: '$5e^{5x}$ - The exponential stays the same, multiply by the derivative of the exponent (5)',
            hint: 'Use Chain Rule: $e^u \\cdot u\'$',
          },
          {
            front: 'What is $\\frac{d}{dx}[2^x]$?',
            back: '$2^x \\ln 2$ - For base $a$, the derivative is $a^x \\ln a$',
            hint: 'Remember the $\\ln a$ factor for bases other than $e$',
          },
          {
            front: 'Simplify: $xe^x + e^x$',
            back: '$e^x(x + 1)$ - Always factor out the exponential!',
            hint: 'Factor out the common $e^x$ term',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 4: Derivatives of Logarithmic Functions
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'derivatives-of-logarithmic-functions',
      title: 'Derivatives of Logarithmic Functions',
      description: 'Finding derivatives involving ln(x) and other logarithmic functions',
      order: 12,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# 📊 Derivatives of Logarithmic Functions

## The Natural Logarithm: ln(x)

The derivative of the natural logarithm is beautifully simple:

$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$

This formula only works for $x > 0$ since $\\ln x$ is only defined for positive numbers.

> **💡 Connection**: Since $e^x$ and $\\ln x$ are inverse functions, their derivatives are reciprocals in a sense!

---

## The Chain Rule with ln

When taking the derivative of $\\ln$ of a function, use the Chain Rule:

### General Formula

$$\\frac{d}{dx}[\\ln u] = \\frac{u'}{u} = \\frac{1}{u} \\cdot u'$$

where $u$ is any function of $x$.

### Examples

1. $\\frac{d}{dx}[\\ln(2x)] = \\frac{2}{2x} = \\frac{1}{x}$

2. $\\frac{d}{dx}[\\ln(x^2)] = \\frac{2x}{x^2} = \\frac{2}{x}$

3. $\\frac{d}{dx}[\\ln(3x + 1)] = \\frac{3}{3x + 1}$

4. $\\frac{d}{dx}[\\ln(\\sin x)] = \\frac{\\cos x}{\\sin x} = \\cot x$

> **💡 Pattern**: Derivative of the inside over the inside!

---

## Logarithms with Other Bases

For logarithms with base $a$:

$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

### Examples

1. $\\frac{d}{dx}[\\log_{10} x] = \\frac{1}{x \\ln 10}$

2. $\\frac{d}{dx}[\\log_2 x] = \\frac{1}{x \\ln 2}$

### Why We Prefer ln

This is why calculus uses **natural logs** ($\\ln$) instead of $\\log_{10}$:
- Formula is simpler: just $\\frac{1}{x}$
- No extra $\\ln a$ factor to worry about!

---

## Properties of Logarithms (For Simplifying)

Before differentiating, often use log properties to simplify:

### Key Properties

1. $\\ln(ab) = \\ln a + \\ln b$

2. $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$

3. $\\ln(a^n) = n\\ln a$

4. $\\ln(e^x) = x$ and $e^{\\ln x} = x$

### Example Using Properties

**Find** $\\frac{d}{dx}\\left[\\ln\\left(\\frac{x^2}{x+1}\\right)\\right]$

**Method 1**: Direct (harder)
$\\frac{d}{dx}\\left[\\ln\\left(\\frac{x^2}{x+1}\\right)\\right] = \\frac{1}{\\frac{x^2}{x+1}} \\cdot \\frac{(2x)(x+1) - (x^2)(1)}{(x+1)^2}$ (messy!)

**Method 2**: Simplify first (easier)
$\\ln\\left(\\frac{x^2}{x+1}\\right) = \\ln(x^2) - \\ln(x+1) = 2\\ln x - \\ln(x+1)$

Now differentiate:
$\\frac{d}{dx}[2\\ln x - \\ln(x+1)] = \\frac{2}{x} - \\frac{1}{x+1}$

Much simpler! ✓

---

## Logarithmic Differentiation

A powerful technique for **complicated products and quotients**:

### When to Use

Use logarithmic differentiation when you have:
- Products of many functions
- Quotients with complicated numerators and denominators
- Variable bases and exponents: $x^x$, $x^{\\sin x}$, etc.

### The Process

1. Take $\\ln$ of both sides
2. Use log properties to simplify
3. Differentiate implicitly
4. Solve for $\\frac{dy}{dx}$
5. Substitute back to eliminate $y$

### Example: $y = x^x$

**Step 1**: Take ln of both sides
$\\ln y = \\ln(x^x) = x\\ln x$

**Step 2**: Differentiate (implicitly on left, product rule on right)
$\\frac{1}{y} \\cdot \\frac{dy}{dx} = (1)\\ln x + (x)\\frac{1}{x} = \\ln x + 1$

**Step 3**: Solve for $\\frac{dy}{dx}$
$\\frac{dy}{dx} = y(\\ln x + 1)$

**Step 4**: Substitute $y = x^x$
$\\frac{dy}{dx} = x^x(\\ln x + 1)$

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the Chain Rule
❌ $\\frac{d}{dx}[\\ln(x^2)] = \\frac{1}{x^2}$
✅ $\\frac{d}{dx}[\\ln(x^2)] = \\frac{2x}{x^2} = \\frac{2}{x}$

### Mistake 2: Wrong Simplification
Using $\\ln(x^2) = 2\\ln x$ is valid only when $x > 0$!
Actually, $\\ln(x^2) = 2\\ln|x|$ to handle negative $x$.

### Mistake 3: Mixing Up Rules
❌ $\\frac{d}{dx}[\\ln x] = \\frac{1}{x^2}$ (confused with $\\frac{d}{dx}\\left[\\frac{1}{x}\\right]$)
✅ $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$

### Mistake 4: Domain Issues
$\\ln x$ is only defined for $x > 0$. If needed for all $x \\neq 0$, use $\\ln|x|$.

---

## Special Derivatives Involving ln

### Derivative of Absolute Value

$$\\frac{d}{dx}[\\ln|x|] = \\frac{1}{x}$$

This works for both positive and negative $x$ (but not $x = 0$).

### Useful Combination

$$\\frac{d}{dx}[x\\ln x] = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$$

### Integration Connection

Since $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$, we have:

$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$

---

## Applications

### Exponential Growth/Decay

If $y = Ce^{kt}$, then $\\ln y = \\ln C + kt$

Differentiating: $\\frac{1}{y}\\frac{dy}{dt} = k$, so $\\frac{dy}{dt} = ky$

### Economics: Elasticity

Elasticity $E = \\frac{p}{q} \\cdot \\frac{dq}{dp}$ can be written using logs:

$E = \\frac{d(\\ln q)}{d(\\ln p)}$

### Relative Rate of Change

$\\frac{d}{dx}[\\ln f(x)] = \\frac{f'(x)}{f(x)}$ gives the **relative** (or percentage) rate of change.

---

## 📝 Key Formulas to Memorize

1. $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$

2. $\\frac{d}{dx}[\\ln u] = \\frac{u'}{u}$ (Chain Rule)

3. $\\frac{d}{dx}[\\log_a x] = \\frac{1}{x\\ln a}$

4. $\\frac{d}{dx}[\\ln|x|] = \\frac{1}{x}$

---

## Practice Tips

1. **Simplify first** using log properties when possible
2. **Use logarithmic differentiation** for products, quotients, and variable exponents
3. **Remember** $\\frac{d}{dx}[\\ln u] = \\frac{u'}{u}$ - "derivative of inside over inside"
4. **Factor** when you get expressions like $\\frac{2x}{x^2} = \\frac{2}{x}$
5. **Check domains** - ln is only defined for positive arguments
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of $f(x) = \\ln(x^3 + 2x)$.',
            solution: `Use the Chain Rule with $u = x^3 + 2x$:

---

**Step 1: Apply the ln derivative formula**

$\\frac{d}{dx}[\\ln u] = \\frac{u'}{u}$

---

**Step 2: Find $u'$**

$u = x^3 + 2x$

$u' = 3x^2 + 2$

---

**Step 3: Apply the formula**

$f'(x) = \\frac{3x^2 + 2}{x^3 + 2x}$

**Answer**: $\\displaystyle f'(x) = \\frac{3x^2 + 2}{x^3 + 2x}$

> Note: This cannot be simplified further`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find $\\frac{dy}{dx}$ if $y = \\ln\\left(\\frac{x^2\\sqrt{x+1}}{x-1}\\right)$.',
            solution: `**Step 1: Simplify using log properties first!**

$y = \\ln\\left(\\frac{x^2\\sqrt{x+1}}{x-1}\\right)$

Using $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$:

$y = \\ln(x^2\\sqrt{x+1}) - \\ln(x-1)$

Using $\\ln(ab) = \\ln a + \\ln b$:

$y = \\ln(x^2) + \\ln\\sqrt{x+1} - \\ln(x-1)$

Using $\\ln(a^n) = n\\ln a$ and $\\sqrt{x+1} = (x+1)^{1/2}$:

$y = 2\\ln x + \\frac{1}{2}\\ln(x+1) - \\ln(x-1)$

---

**Step 2: Now differentiate (much easier!)**

$\\frac{dy}{dx} = 2 \\cdot \\frac{1}{x} + \\frac{1}{2} \\cdot \\frac{1}{x+1} - \\frac{1}{x-1}$

$= \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{1}{x-1}$

**Answer**: $\\displaystyle\\frac{dy}{dx} = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{1}{x-1}$

> **Key Lesson**: Always simplify with log properties BEFORE differentiating!`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Use logarithmic differentiation to find $\\frac{dy}{dx}$ if $y = (2x + 1)^x$.',
            solution: `This has a variable base AND variable exponent - perfect for logarithmic differentiation!

---

**Step 1: Take ln of both sides**

$\\ln y = \\ln[(2x+1)^x]$

---

**Step 2: Use log properties**

$\\ln y = x\\ln(2x+1)$

---

**Step 3: Differentiate both sides**

Left side (implicit):
$\\frac{d}{dx}[\\ln y] = \\frac{1}{y}\\frac{dy}{dx}$

Right side (product rule):
$\\frac{d}{dx}[x\\ln(2x+1)] = (1)\\ln(2x+1) + (x)\\frac{2}{2x+1}$

$= \\ln(2x+1) + \\frac{2x}{2x+1}$

---

**Step 4: Set them equal**

$\\frac{1}{y}\\frac{dy}{dx} = \\ln(2x+1) + \\frac{2x}{2x+1}$

---

**Step 5: Solve for $\\frac{dy}{dx}$**

$\\frac{dy}{dx} = y\\left[\\ln(2x+1) + \\frac{2x}{2x+1}\\right]$

---

**Step 6: Substitute back $y = (2x+1)^x$**

$\\frac{dy}{dx} = (2x+1)^x\\left[\\ln(2x+1) + \\frac{2x}{2x+1}\\right]$

**Answer**: $\\displaystyle\\frac{dy}{dx} = (2x+1)^x\\left[\\ln(2x+1) + \\frac{2x}{2x+1}\\right]$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is $\\frac{d}{dx}[\\ln x]$?',
            back: '$\\frac{1}{x}$ - The derivative of natural log is one over $x$',
            hint: 'Simple reciprocal of $x$',
          },
          {
            front: 'Find $\\frac{d}{dx}[\\ln(3x + 1)]$ using the Chain Rule.',
            back: '$\\frac{3}{3x+1}$ - Derivative of inside over inside: $\\frac{u\'}{u}$',
            hint: 'Use $\\frac{d}{dx}[\\ln u] = \\frac{u\'}{u}$',
          },
          {
            front: 'Simplify $\\ln(x^2)$ before differentiating.',
            back: '$\\ln(x^2) = 2\\ln x$ (for $x > 0$), so $\\frac{d}{dx}[\\ln(x^2)] = \\frac{2}{x}$',
            hint: 'Use the power property: $\\ln(a^n) = n\\ln a$',
          },
          {
            front: 'When should you use logarithmic differentiation?',
            back: 'When you have: (1) complicated products/quotients, or (2) variable base and exponent like $x^x$ or $(2x+1)^x$',
            hint: 'Take ln of both sides, simplify with log properties, then differentiate',
          },
        ],
      },
    },
  })

  console.log('✅ Created 4 Chain Rule and Special Functions micro-lessons!')
  console.log('\nTopics created:')
  console.log('  9. Chain Rule')
  console.log('  10. Derivatives of Trig Functions')
  console.log('  11. Derivatives of Exponential Functions')
  console.log('  12. Derivatives of Logarithmic Functions')
  console.log('\n💡 Ready to continue with more advanced derivative topics!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
