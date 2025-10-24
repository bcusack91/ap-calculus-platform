import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Integration micro-lessons - Part 1...')

  // Create the Integration category
  const integrationCategory = await prisma.category.upsert({
    where: { slug: 'integration' },
    update: {},
    create: {
      slug: 'integration',
      name: 'Integration',
      description: 'Antiderivatives and the reverse process of differentiation',
      order: 4,
      icon: '∫',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'antiderivatives-intro',
          'indefinite-integrals',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Introduction to Antiderivatives
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'antiderivatives-intro',
      title: 'Introduction to Antiderivatives',
      description: 'Understanding the reverse process of differentiation',
      order: 1,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 🔄 Introduction to Antiderivatives

## What is an Antiderivative?

An **antiderivative** of a function $f(x)$ is a function $F(x)$ whose derivative is $f(x)$.

> **💡 Key Idea**: If $F'(x) = f(x)$, then $F(x)$ is an antiderivative of $f(x)$.

**Antidifferentiation is the reverse of differentiation!**

---

## The Basic Question

**Differentiation asks**: Given $F(x)$, what is $F'(x)$?

**Antidifferentiation asks**: Given $f(x)$, what is $F(x)$ such that $F'(x) = f(x)$?

### Example

**Differentiation**: If $F(x) = x^2$, then $F'(x) = 2x$

**Antidifferentiation**: If $f(x) = 2x$, then $F(x) = x^2$ is an antiderivative

---

## Notation

If $F'(x) = f(x)$, we write:
- "$F(x)$ is an antiderivative of $f(x)$"
- Or: "$F(x)$ is the integral of $f(x)$"

We'll learn the integral notation $\\int$ soon!

---

## Simple Examples

### Example 1: Power Function

**Question**: Find an antiderivative of $f(x) = x^3$

**Think**: What function has derivative $x^3$?

Try $F(x) = x^4$:
$$F'(x) = 4x^3 \\neq x^3$$ ✗

Try $F(x) = \\frac{1}{4}x^4$:
$$F'(x) = \\frac{1}{4}(4x^3) = x^3$$ ✓

**Answer**: $F(x) = \\frac{1}{4}x^4$ is an antiderivative of $f(x) = x^3$

---

### Example 2: Trigonometric Function

**Question**: Find an antiderivative of $f(x) = \\cos x$

**Think**: What function has derivative $\\cos x$?

We know: $\\frac{d}{dx}[\\sin x] = \\cos x$ ✓

**Answer**: $F(x) = \\sin x$ is an antiderivative of $f(x) = \\cos x$

---

### Example 3: Exponential Function

**Question**: Find an antiderivative of $f(x) = e^x$

**Think**: What function has derivative $e^x$?

We know: $\\frac{d}{dx}[e^x] = e^x$ ✓

**Answer**: $F(x) = e^x$ is an antiderivative of $f(x) = e^x$

---

## The "+C" Problem

Here's something important: **antiderivatives are not unique!**

### Why Not?

If $F(x) = x^2$, then $F'(x) = 2x$

But also:
- If $G(x) = x^2 + 5$, then $G'(x) = 2x$
- If $H(x) = x^2 - 7$, then $H'(x) = 2x$
- If $K(x) = x^2 + 100$, then $K'(x) = 2x$

All of these are antiderivatives of $f(x) = 2x$!

### The General Solution

The **most general antiderivative** of $f(x) = 2x$ is:
$$F(x) = x^2 + C$$

where $C$ is any constant (called the **constant of integration**).

---

## Why Does +C Work?

**Theorem**: If $F(x)$ is an antiderivative of $f(x)$, then the most general antiderivative is:
$$F(x) + C$$

where $C$ is any constant.

**Reason**: The derivative of any constant is zero!
$$\\frac{d}{dx}[F(x) + C] = F'(x) + 0 = f(x)$$

---

## Different Functions, Same Derivative

Two functions with the same derivative differ by a constant.

**Theorem**: If $F'(x) = G'(x)$ for all $x$, then $F(x) = G(x) + C$ for some constant $C$.

This is why we need the $+C$!

---

## Finding Antiderivatives: The Reverse Rules

To find antiderivatives, we **reverse** our derivative rules!

### Power Rule (Reversed)

**Derivative**: $\\frac{d}{dx}[x^n] = nx^{n-1}$

**Antiderivative**: If $f(x) = x^n$ (where $n \\neq -1$), then:
$$F(x) = \\frac{x^{n+1}}{n+1} + C$$

**Remember**: 
- Add 1 to the exponent
- Divide by the new exponent
- Don't forget +C!

---

### Examples Using Power Rule

**Example 1**: Find an antiderivative of $f(x) = x^5$

$$F(x) = \\frac{x^{5+1}}{5+1} + C = \\frac{x^6}{6} + C$$

Check: $F'(x) = \\frac{6x^5}{6} = x^5$ ✓

---

**Example 2**: Find an antiderivative of $f(x) = x$

$$F(x) = \\frac{x^{1+1}}{1+1} + C = \\frac{x^2}{2} + C$$

Check: $F'(x) = \\frac{2x}{2} = x$ ✓

---

**Example 3**: Find an antiderivative of $f(x) = 1 = x^0$

$$F(x) = \\frac{x^{0+1}}{0+1} + C = \\frac{x^1}{1} + C = x + C$$

Check: $F'(x) = 1$ ✓

---

**Example 4**: Find an antiderivative of $f(x) = \\frac{1}{x^2} = x^{-2}$

$$F(x) = \\frac{x^{-2+1}}{-2+1} + C = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$$

Check: $F'(x) = -(-1)x^{-2} = \\frac{1}{x^2}$ ✓

---

## Common Antiderivatives to Know

### Basic Functions

| $f(x)$ | $F(x)$ (antiderivative) | Check |
|--------|------------------------|-------|
| $k$ (constant) | $kx + C$ | $(kx)' = k$ |
| $x^n$ ($n \\neq -1$) | $\\frac{x^{n+1}}{n+1} + C$ | Power rule |
| $\\frac{1}{x}$ | $\\ln|x| + C$ | $(\\ln|x|)' = \\frac{1}{x}$ |
| $e^x$ | $e^x + C$ | $(e^x)' = e^x$ |

### Trigonometric Functions

| $f(x)$ | $F(x)$ | Check |
|--------|--------|-------|
| $\\sin x$ | $-\\cos x + C$ | $(-\\cos x)' = \\sin x$ |
| $\\cos x$ | $\\sin x + C$ | $(\\sin x)' = \\cos x$ |
| $\\sec^2 x$ | $\\tan x + C$ | $(\\tan x)' = \\sec^2 x$ |
| $\\sec x \\tan x$ | $\\sec x + C$ | $(\\sec x)' = \\sec x \\tan x$ |

**Note**: These will be covered in more detail in later lessons!

---

## Linearity Properties

Antiderivatives follow the same linearity rules as derivatives:

### Constant Multiple Rule

If $F(x)$ is an antiderivative of $f(x)$, then:
$$k \\cdot F(x) \\text{ is an antiderivative of } k \\cdot f(x)$$

**Example**: Antiderivative of $5x^2$:
$$F(x) = 5 \\cdot \\frac{x^3}{3} + C = \\frac{5x^3}{3} + C$$

---

### Sum/Difference Rule

If $F(x)$ is an antiderivative of $f(x)$ and $G(x)$ is an antiderivative of $g(x)$, then:
$$F(x) \\pm G(x) \\text{ is an antiderivative of } f(x) \\pm g(x)$$

**Example**: Antiderivative of $x^2 + x$:
$$F(x) = \\frac{x^3}{3} + \\frac{x^2}{2} + C$$

---

## Complete Example: Polynomial

Find the most general antiderivative of $f(x) = 3x^4 - 2x^3 + 5x - 7$.

**Step 1: Break it down**

Use sum rule and constant multiple rule:
- Antiderivative of $3x^4$ is $3 \\cdot \\frac{x^5}{5} = \\frac{3x^5}{5}$
- Antiderivative of $-2x^3$ is $-2 \\cdot \\frac{x^4}{4} = -\\frac{x^4}{2}$
- Antiderivative of $5x$ is $5 \\cdot \\frac{x^2}{2} = \\frac{5x^2}{2}$
- Antiderivative of $-7$ is $-7x$

---

**Step 2: Combine**

$$F(x) = \\frac{3x^5}{5} - \\frac{x^4}{2} + \\frac{5x^2}{2} - 7x + C$$

---

**Step 3: Check (optional but recommended!)**

$$F'(x) = \\frac{3 \\cdot 5x^4}{5} - \\frac{4x^3}{2} + \\frac{5 \\cdot 2x}{2} - 7$$

$$= 3x^4 - 2x^3 + 5x - 7$$ ✓

---

## The Special Case: $\\frac{1}{x}$

**Why can't we use the power rule?**

For $f(x) = \\frac{1}{x} = x^{-1}$, the power rule would give:
$$F(x) = \\frac{x^{-1+1}}{-1+1} = \\frac{x^0}{0} = \\frac{1}{0}$$ 

Division by zero! ❌

**The answer**: 
$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$

This is a special case you must memorize!

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting +C

**WRONG**: The antiderivative of $x^2$ is $\\frac{x^3}{3}$

**RIGHT**: The antiderivative of $x^2$ is $\\frac{x^3}{3} + C$

Always include the constant of integration!

### Mistake 2: Wrong Power Rule

**WRONG**: Antiderivative of $x^3$ is $\\frac{x^3}{3}$ (forgot to add 1 to exponent!)

**RIGHT**: Antiderivative of $x^3$ is $\\frac{x^4}{4} + C$

### Mistake 3: Treating Product Like Sum

**WRONG**: Antiderivative of $x \\cdot x^2 = x^3$ is... (treating separately)

**RIGHT**: Simplify first! $x \\cdot x^2 = x^3$, so antiderivative is $\\frac{x^4}{4} + C$

### Mistake 4: Sine and Cosine Signs

Remember:
- Antiderivative of $\\sin x$ is $-\\cos x + C$ (negative!)
- Antiderivative of $\\cos x$ is $\\sin x + C$ (positive!)

---

## Checking Your Work

**Always check** by differentiating your answer!

If you found $F(x)$ as an antiderivative of $f(x)$, verify:
$$F'(x) = f(x)$$

This is a foolproof way to catch errors!

---

## Initial Value Problems

Sometimes we can find the specific value of $C$ using an **initial condition**.

### Example

Find $F(x)$ such that $F'(x) = 2x$ and $F(1) = 5$.

**Step 1**: Find general antiderivative
$$F(x) = x^2 + C$$

**Step 2**: Use initial condition $F(1) = 5$
$$F(1) = 1^2 + C = 5$$
$$1 + C = 5$$
$$C = 4$$

**Step 3**: Write specific solution
$$F(x) = x^2 + 4$$

---

## Physical Interpretations

### Position, Velocity, Acceleration

If $a(t)$ is acceleration:
- $v(t)$ is velocity (antiderivative of $a$)
- $s(t)$ is position (antiderivative of $v$)

**Example**: If $a(t) = -32$ ft/s² (gravity), then:
$$v(t) = -32t + C_1$$
$$s(t) = -16t^2 + C_1 t + C_2$$

The constants are determined by initial conditions!

---

## 📝 Practice Strategy

1. **Memorize basic antiderivatives** (powers, trig, exponential)
2. **Always include +C** in your answer
3. **Use linearity** to break complex problems into simpler parts
4. **Check your work** by differentiating
5. **For power rule**: Add 1 to exponent, divide by new exponent
6. **Watch for special cases** like $\\frac{1}{x}$
7. **For initial value problems**: Find general solution first, then solve for $C$
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the most general antiderivative of $f(x) = 6x^2 - 4x + 3$.',
            solution: `**Step 1: Apply power rule to each term**

For $6x^2$:
$$\\text{Antiderivative} = 6 \\cdot \\frac{x^{2+1}}{2+1} = 6 \\cdot \\frac{x^3}{3} = 2x^3$$

For $-4x = -4x^1$:
$$\\text{Antiderivative} = -4 \\cdot \\frac{x^{1+1}}{1+1} = -4 \\cdot \\frac{x^2}{2} = -2x^2$$

For $3 = 3x^0$:
$$\\text{Antiderivative} = 3x$$

---

**Step 2: Combine and add +C**

$$F(x) = 2x^3 - 2x^2 + 3x + C$$

---

**Step 3: Check by differentiating**

$$F'(x) = 2(3x^2) - 2(2x) + 3 = 6x^2 - 4x + 3$$ ✓

**Answer**: $F(x) = 2x^3 - 2x^2 + 3x + C$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Find $f(x)$ if $f\'(x) = 4x^3 - 6x$ and $f(2) = 10$.',
            solution: `**Step 1: Find the general antiderivative**

$$f(x) = \\int (4x^3 - 6x)\\,dx$$

For $4x^3$:
$$\\frac{4x^4}{4} = x^4$$

For $-6x$:
$$-6 \\cdot \\frac{x^2}{2} = -3x^2$$

General solution:
$$f(x) = x^4 - 3x^2 + C$$

---

**Step 2: Use initial condition $f(2) = 10$**

$$f(2) = (2)^4 - 3(2)^2 + C = 10$$

$$16 - 3(4) + C = 10$$

$$16 - 12 + C = 10$$

$$4 + C = 10$$

$$C = 6$$

---

**Step 3: Write the specific solution**

$$f(x) = x^4 - 3x^2 + 6$$

---

**Check**: 
- $f'(x) = 4x^3 - 6x$ ✓
- $f(2) = 16 - 12 + 6 = 10$ ✓

**Answer**: $f(x) = x^4 - 3x^2 + 6$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A particle moves along a line with acceleration $a(t) = 12t - 6$ m/s². At $t=0$, the velocity is $v(0) = 2$ m/s and position is $s(0) = 5$ m. Find the position function $s(t)$.',
            solution: `**Step 1: Find velocity from acceleration**

$$v(t) = \\int a(t)\\,dt = \\int (12t - 6)\\,dt$$

$$v(t) = \\frac{12t^2}{2} - 6t + C_1 = 6t^2 - 6t + C_1$$

---

**Step 2: Use initial velocity $v(0) = 2$**

$$v(0) = 6(0)^2 - 6(0) + C_1 = 2$$

$$C_1 = 2$$

So: $v(t) = 6t^2 - 6t + 2$

---

**Step 3: Find position from velocity**

$$s(t) = \\int v(t)\\,dt = \\int (6t^2 - 6t + 2)\\,dt$$

$$s(t) = \\frac{6t^3}{3} - \\frac{6t^2}{2} + 2t + C_2$$

$$s(t) = 2t^3 - 3t^2 + 2t + C_2$$

---

**Step 4: Use initial position $s(0) = 5$**

$$s(0) = 2(0)^3 - 3(0)^2 + 2(0) + C_2 = 5$$

$$C_2 = 5$$

---

**Answer**: $s(t) = 2t^3 - 3t^2 + 2t + 5$ meters

---

**Summary**:
- Acceleration: $a(t) = 12t - 6$
- Velocity: $v(t) = 6t^2 - 6t + 2$
- Position: $s(t) = 2t^3 - 3t^2 + 2t + 5$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is an antiderivative?',
            back: 'A function $F(x)$ is an antiderivative of $f(x)$ if $F\'(x) = f(x)$. It\'s the reverse process of differentiation. Example: $F(x) = x^2$ is an antiderivative of $f(x) = 2x$ because $F\'(x) = 2x$.',
            hint: 'The reverse of differentiation',
          },
          {
            front: 'Why do we add +C to antiderivatives?',
            back: 'Because the derivative of any constant is 0, all functions that differ by a constant have the same derivative. So if $F(x)$ is one antiderivative, then $F(x) + C$ represents ALL antiderivatives (the general solution).',
            hint: 'Constants disappear when differentiating',
          },
          {
            front: 'What is the power rule for antiderivatives?',
            back: 'For $f(x) = x^n$ where $n \\neq -1$: $F(x) = \\frac{x^{n+1}}{n+1} + C$. Add 1 to the exponent, then divide by the new exponent. Don\'t forget +C!',
            hint: 'Add 1 to exponent, divide by new exponent',
          },
          {
            front: 'What is the antiderivative of $\\frac{1}{x}$?',
            back: '$\\ln|x| + C$. This is a special case because the power rule fails when $n = -1$ (would give division by zero). Must memorize this!',
            hint: 'Special case - involves natural log',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Indefinite Integrals
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'indefinite-integrals',
      title: 'Indefinite Integrals and Notation',
      description: 'Understanding integral notation and basic integration rules',
      order: 2,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# ∫ Indefinite Integrals and Notation

## The Integral Symbol

The process of finding antiderivatives is called **integration**, and we use the integral symbol:

$$\\int f(x)\\,dx$$

This is read as "the integral of $f(x)$ with respect to $x$."

---

## Notation Breakdown

$$\\int f(x)\\,dx = F(x) + C$$

**Components**:
- $\\int$ - integral symbol (looks like an elongated S for "sum")
- $f(x)$ - the **integrand** (function being integrated)
- $dx$ - tells us we're integrating with respect to $x$
- $F(x) + C$ - the **antiderivative** (general solution)

---

## Indefinite vs. Definite Integrals

### Indefinite Integral

$$\\int f(x)\\,dx = F(x) + C$$

- Represents the **family of all antiderivatives**
- Includes the constant $+C$
- Result is a **function**

### Definite Integral (coming later!)

$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

- Has limits of integration ($a$ to $b$)
- Represents a specific **number** (area)
- No $+C$ needed

**For now, we focus on indefinite integrals!**

---

## Basic Integration Formulas

### Power Rule

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

**Examples**:
- $\\int x^5\\,dx = \\frac{x^6}{6} + C$
- $\\int x\\,dx = \\frac{x^2}{2} + C$
- $\\int 1\\,dx = x + C$

---

### Special Case: $n = -1$

$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$

**Why absolute value?** 
- $\\ln x$ only defined for $x > 0$
- $\\ln|x|$ works for all $x \\neq 0$

---

### Constant Rule

$$\\int k\\,dx = kx + C$$

where $k$ is any constant.

**Example**: $\\int 5\\,dx = 5x + C$

---

### Exponential Function

$$\\int e^x\\,dx = e^x + C$$

The exponential function is its own integral!

---

### Trigonometric Functions

$$\\int \\sin x\\,dx = -\\cos x + C$$

$$\\int \\cos x\\,dx = \\sin x + C$$

$$\\int \\sec^2 x\\,dx = \\tan x + C$$

$$\\int \\sec x \\tan x\\,dx = \\sec x + C$$

$$\\int \\csc^2 x\\,dx = -\\cot x + C$$

$$\\int \\csc x \\cot x\\,dx = -\\csc x + C$$

**Remember**: Sine → negative cosine, Cosine → positive sine

---

## Properties of Integrals

### Constant Multiple Rule

$$\\int k \\cdot f(x)\\,dx = k \\int f(x)\\,dx$$

You can "pull out" constants!

**Example**:
$$\\int 3x^2\\,dx = 3\\int x^2\\,dx = 3 \\cdot \\frac{x^3}{3} + C = x^3 + C$$

---

### Sum/Difference Rule

$$\\int [f(x) \\pm g(x)]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx$$

Integrate term by term!

**Example**:
$$\\int (x^2 + 3x)\\,dx = \\int x^2\\,dx + \\int 3x\\,dx$$
$$= \\frac{x^3}{3} + \\frac{3x^2}{2} + C$$

---

## Important: The $dx$

The "$dx$" is **not optional** - it tells us the variable of integration!

**Example**: $\\int t^2\\,dt$ vs $\\int x^2\\,dx$

Same form, different variables!

**Why it matters**:
- Clarifies which variable we're integrating
- Essential for u-substitution (later topic)
- Part of the mathematical notation

---

## Working with Integrals

### Example 1: Polynomial

Evaluate $\\int (4x^3 - 2x^2 + 5)\\,dx$

**Solution**:

Apply sum rule and constant multiple rule:

$$= \\int 4x^3\\,dx - \\int 2x^2\\,dx + \\int 5\\,dx$$

$$= 4\\int x^3\\,dx - 2\\int x^2\\,dx + \\int 5\\,dx$$

$$= 4 \\cdot \\frac{x^4}{4} - 2 \\cdot \\frac{x^3}{3} + 5x + C$$

$$= x^4 - \\frac{2x^3}{3} + 5x + C$$

---

### Example 2: Rewriting Before Integrating

Evaluate $\\int \\frac{3}{x^4}\\,dx$

**Step 1: Rewrite using exponents**

$$\\int \\frac{3}{x^4}\\,dx = \\int 3x^{-4}\\,dx$$

**Step 2: Apply power rule**

$$= 3 \\cdot \\frac{x^{-4+1}}{-4+1} + C = 3 \\cdot \\frac{x^{-3}}{-3} + C$$

$$= -\\frac{3}{3x^3} + C = -\\frac{1}{x^3} + C$$

---

### Example 3: Expanding First

Evaluate $\\int (x+1)^2\\,dx$

**WRONG approach**: Try to integrate directly ❌

**RIGHT approach**: Expand first!

$$\\int (x+1)^2\\,dx = \\int (x^2 + 2x + 1)\\,dx$$

$$= \\frac{x^3}{3} + \\frac{2x^2}{2} + x + C$$

$$= \\frac{x^3}{3} + x^2 + x + C$$

---

### Example 4: Trigonometric

Evaluate $\\int (3\\sin x - 2\\cos x)\\,dx$

**Solution**:

$$= 3\\int \\sin x\\,dx - 2\\int \\cos x\\,dx$$

$$= 3(-\\cos x) - 2(\\sin x) + C$$

$$= -3\\cos x - 2\\sin x + C$$

---

## Fractional and Negative Exponents

### Square Roots

$$\\int \\sqrt{x}\\,dx = \\int x^{1/2}\\,dx = \\frac{x^{3/2}}{3/2} + C = \\frac{2x^{3/2}}{3} + C$$

**Remember**: $\\sqrt{x} = x^{1/2}$

---

### Cube Roots

$$\\int \\sqrt[3]{x^2}\\,dx = \\int x^{2/3}\\,dx = \\frac{x^{5/3}}{5/3} + C = \\frac{3x^{5/3}}{5} + C$$

---

### Reciprocals

$$\\int \\frac{1}{x^2}\\,dx = \\int x^{-2}\\,dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$$

---

## Combining Multiple Techniques

### Example: Mixed Terms

Evaluate $\\int \\left(x^2 + \\frac{2}{x^2} + \\sqrt{x}\\right)dx$

**Step 1: Rewrite everything as powers**

$$= \\int \\left(x^2 + 2x^{-2} + x^{1/2}\\right)dx$$

**Step 2: Integrate term by term**

$$= \\frac{x^3}{3} + 2 \\cdot \\frac{x^{-1}}{-1} + \\frac{x^{3/2}}{3/2} + C$$

$$= \\frac{x^3}{3} - \\frac{2}{x} + \\frac{2x^{3/2}}{3} + C$$

---

## The "$+C$" Convention

When combining multiple constants, we can consolidate:

$$\\int (x^2 + 1)\\,dx = \\frac{x^3}{3} + C_1 + x + C_2$$

We typically write this as:
$$= \\frac{x^3}{3} + x + C$$

where $C = C_1 + C_2$ (arbitrary constant).

**One +C is enough** at the end!

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting +C

**WRONG**: $\\int x^2\\,dx = \\frac{x^3}{3}$

**RIGHT**: $\\int x^2\\,dx = \\frac{x^3}{3} + C$

Always include the constant of integration!

---

### Mistake 2: Wrong Power Rule

**WRONG**: $\\int x^3\\,dx = \\frac{x^3}{3} + C$ (forgot to add 1 to exponent)

**RIGHT**: $\\int x^3\\,dx = \\frac{x^4}{4} + C$

---

### Mistake 3: Forgetting $dx$

**WRONG**: $\\int x^2$

**RIGHT**: $\\int x^2\\,dx$

The $dx$ is part of the notation!

---

### Mistake 4: Can't Integrate Products/Quotients Directly

**WRONG**: $\\int (x \\cdot x^2)\\,dx = \\left(\\int x\\,dx\\right) \\cdot \\left(\\int x^2\\,dx\\right)$

**RIGHT**: Simplify first! $\\int x^3\\,dx = \\frac{x^4}{4} + C$

There's no "product rule" for integrals!

---

### Mistake 5: Sine/Cosine Signs

**WRONG**: $\\int \\sin x\\,dx = \\cos x + C$

**RIGHT**: $\\int \\sin x\\,dx = -\\cos x + C$ (negative!)

---

## When Basic Rules Don't Work

Some integrals need advanced techniques:

**Can't do easily**:
- $\\int e^{x^2}\\,dx$ (needs special functions)
- $\\int \\sin(x^2)\\,dx$ (needs special functions)
- $\\int \\frac{1}{x^2+1}\\,dx$ (this is $\\arctan x + C$, learned later)

**Can do with techniques**:
- $\\int x\\cos(x^2)\\,dx$ (u-substitution)
- $\\int x e^x\\,dx$ (integration by parts)

We'll learn these methods in future lessons!

---

## Quick Reference Table

| Integrand | Integral |
|-----------|----------|
| $x^n$ ($n \\neq -1$) | $\\frac{x^{n+1}}{n+1} + C$ |
| $\\frac{1}{x}$ | $\\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\sec^2 x$ | $\\tan x + C$ |
| $\\sec x \\tan x$ | $\\sec x + C$ |

---

## 📝 Practice Strategy

1. **Rewrite** the integrand if needed (expand, use exponents)
2. **Apply linearity** (split sums, pull out constants)
3. **Use basic formulas** (power rule, trig, exponential)
4. **Always include +C**
5. **Check your answer** by differentiating
6. **Include $dx$** in your notation
7. **Simplify** before integrating when possible
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\int (5x^4 - 3x^2 + 7x - 2)\\,dx$.',
            solution: `**Step 1: Apply sum/difference and constant multiple rules**

$$\\int (5x^4 - 3x^2 + 7x - 2)\\,dx$$

$$= 5\\int x^4\\,dx - 3\\int x^2\\,dx + 7\\int x\\,dx - \\int 2\\,dx$$

---

**Step 2: Apply power rule to each term**

$$= 5 \\cdot \\frac{x^5}{5} - 3 \\cdot \\frac{x^3}{3} + 7 \\cdot \\frac{x^2}{2} - 2x + C$$

---

**Step 3: Simplify**

$$= x^5 - x^3 + \\frac{7x^2}{2} - 2x + C$$

---

**Check by differentiating**:

$$\\frac{d}{dx}\\left[x^5 - x^3 + \\frac{7x^2}{2} - 2x + C\\right]$$

$$= 5x^4 - 3x^2 + 7x - 2$$ ✓

**Answer**: $x^5 - x^3 + \\frac{7x^2}{2} - 2x + C$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Evaluate $\\int \\left(\\frac{4}{x^3} + 2\\sqrt{x} - \\frac{3}{x}\\right)dx$.',
            solution: `**Step 1: Rewrite using exponents**

$$\\int \\left(\\frac{4}{x^3} + 2\\sqrt{x} - \\frac{3}{x}\\right)dx$$

$$= \\int \\left(4x^{-3} + 2x^{1/2} - 3x^{-1}\\right)dx$$

---

**Step 2: Integrate term by term**

For $4x^{-3}$:
$$4 \\cdot \\frac{x^{-3+1}}{-3+1} = 4 \\cdot \\frac{x^{-2}}{-2} = -\\frac{4}{2x^2} = -\\frac{2}{x^2}$$

For $2x^{1/2}$:
$$2 \\cdot \\frac{x^{1/2+1}}{1/2+1} = 2 \\cdot \\frac{x^{3/2}}{3/2} = 2 \\cdot \\frac{2x^{3/2}}{3} = \\frac{4x^{3/2}}{3}$$

For $-3x^{-1} = -\\frac{3}{x}$:
$$-3\\ln|x|$$

---

**Step 3: Combine**

$$= -\\frac{2}{x^2} + \\frac{4x^{3/2}}{3} - 3\\ln|x| + C$$

Or equivalently:
$$= -2x^{-2} + \\frac{4x\\sqrt{x}}{3} - 3\\ln|x| + C$$

**Answer**: $-\\frac{2}{x^2} + \\frac{4x^{3/2}}{3} - 3\\ln|x| + C$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Evaluate $\\int (2\\sin x + 3\\cos x - e^x)\\,dx$.',
            solution: `**Step 1: Apply sum/difference rule**

$$\\int (2\\sin x + 3\\cos x - e^x)\\,dx$$

$$= 2\\int \\sin x\\,dx + 3\\int \\cos x\\,dx - \\int e^x\\,dx$$

---

**Step 2: Apply basic integration formulas**

For $\\sin x$:
$$2\\int \\sin x\\,dx = 2(-\\cos x) = -2\\cos x$$

For $\\cos x$:
$$3\\int \\cos x\\,dx = 3(\\sin x) = 3\\sin x$$

For $e^x$:
$$-\\int e^x\\,dx = -e^x$$

---

**Step 3: Combine and add +C**

$$= -2\\cos x + 3\\sin x - e^x + C$$

---

**Check by differentiating**:

$$\\frac{d}{dx}[-2\\cos x + 3\\sin x - e^x + C]$$

$$= -2(-\\sin x) + 3(\\cos x) - e^x$$

$$= 2\\sin x + 3\\cos x - e^x$$ ✓

**Answer**: $-2\\cos x + 3\\sin x - e^x + C$`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What does the notation $\\int f(x)\\,dx$ mean?',
            back: 'The indefinite integral (antiderivative) of $f(x)$ with respect to $x$. The $\\int$ is the integral symbol, $f(x)$ is the integrand, and $dx$ indicates the variable. Result: $F(x) + C$ where $F\'(x) = f(x)$.',
            hint: 'Antiderivative notation',
          },
          {
            front: 'What are the constant multiple and sum rules for integrals?',
            back: 'Constant Multiple: $\\int k \\cdot f(x)\\,dx = k\\int f(x)\\,dx$. Sum Rule: $\\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$. You can pull out constants and integrate term by term!',
            hint: 'Linearity properties',
          },
          {
            front: 'What is $\\int \\sin x\\,dx$ and $\\int \\cos x\\,dx$?',
            back: '$\\int \\sin x\\,dx = -\\cos x + C$ (negative!), and $\\int \\cos x\\,dx = \\sin x + C$ (positive!). Remember: sine gives negative cosine, cosine gives positive sine.',
            hint: 'Watch the signs - sine is negative',
          },
          {
            front: 'Why can\'t we use the product rule backwards for integrals?',
            back: 'There is NO rule like $\\int f(x)g(x)\\,dx = (\\int f(x)\\,dx)(\\int g(x)\\,dx)$. Instead, simplify products first if possible (like $\\int x \\cdot x^2\\,dx = \\int x^3\\,dx$), or use advanced techniques like u-substitution or integration by parts.',
            hint: 'No product/quotient rules for integrals',
          },
        ],
      },
    },
  })

  console.log('✅ Created first 2 Integration micro-lessons!')
  console.log('\nTopics created:')
  console.log('  1. Introduction to Antiderivatives')
  console.log('  2. Indefinite Integrals and Notation')
  console.log('\n🎉 Starting the Integration section!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
