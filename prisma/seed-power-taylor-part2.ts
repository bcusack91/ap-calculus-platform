import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Taylor & Maclaurin Series (BC) micro-lessons - Part 2...')

  // Get the Power Series & Taylor Series category
  const powerSeriesCategory = await prisma.category.findUnique({
    where: { slug: 'power-taylor-series' },
  })

  if (!powerSeriesCategory) {
    throw new Error('Power Series category not found! Run part 1 first.')
  }

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'taylor-maclaurin-series',
          'common-taylor-series',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 3: Taylor and Maclaurin Series
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'taylor-maclaurin-series',
      title: 'Taylor and Maclaurin Series',
      description: 'Representing functions as infinite series',
      order: 3,
      categoryId: powerSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Taylor and Maclaurin Series

## Taylor Polynomials Review

For a function $f$ with derivatives at $x = a$:

**Taylor polynomial of degree $n$**:

$$P_n(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n$$

$$= \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$$

This is a **finite** polynomial that approximates $f$ near $x = a$.

---

## Taylor Series (Infinite!)

If we let $n \\to \\infty$, we get the **Taylor series**:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$$

$$= f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\cdots$$

> **💡 Key Idea**: Taylor series is the "best" power series representation of $f$ centered at $a$!

---

## Maclaurin Series (Special Case)

When $a = 0$, we get a **Maclaurin series**:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n$$

$$= f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\cdots$$

**Most common Taylor series are Maclaurin series!**

---

## Finding Taylor Series - The Recipe

**Step 1**: Find derivatives $f'(x), f''(x), f'''(x), \\ldots$

**Step 2**: Evaluate at center: $f(a), f'(a), f''(a), \\ldots$

**Step 3**: Look for pattern in derivatives

**Step 4**: Write general term $\\frac{f^{(n)}(a)}{n!}(x-a)^n$

**Step 5**: Sum from $n = 0$ to $\\infty$

---

## Example 1: Maclaurin Series for $e^x$

**Step 1: Find derivatives**

$$f(x) = e^x, \\quad f'(x) = e^x, \\quad f''(x) = e^x, \\quad \\ldots$$

All derivatives are $e^x$!

---

**Step 2: Evaluate at $a = 0$**

$$f(0) = e^0 = 1$$
$$f'(0) = 1$$
$$f''(0) = 1$$
$$f^{(n)}(0) = 1$$ for all $n$

---

**Step 3: Write Taylor series**

$$e^x = \\sum_{n=0}^{\\infty} \\frac{1}{n!}x^n = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

**Converges for all $x$!** (radius $R = \\infty$)

---

## Example 2: Maclaurin Series for $\\sin x$

**Step 1: Find derivatives**

$$f(x) = \\sin x$$
$$f'(x) = \\cos x$$
$$f''(x) = -\\sin x$$
$$f'''(x) = -\\cos x$$
$$f^{(4)}(x) = \\sin x$$ (pattern repeats!)

---

**Step 2: Evaluate at $x = 0$**

$$f(0) = \\sin 0 = 0$$
$$f'(0) = \\cos 0 = 1$$
$$f''(0) = -\\sin 0 = 0$$
$$f'''(0) = -\\cos 0 = -1$$
$$f^{(4)}(0) = \\sin 0 = 0$$
$$f^{(5)}(0) = \\cos 0 = 1$$

Pattern: $0, 1, 0, -1, 0, 1, 0, -1, \\ldots$

---

**Step 3: Only odd powers survive!**

$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots$$

$$= \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n+1)!}x^{2n+1}$$

**Converges for all $x$!**

---

## Example 3: Maclaurin Series for $\\cos x$

**Pattern in derivatives at $x = 0$**:

$$f(0) = 1, \\quad f'(0) = 0, \\quad f''(0) = -1, \\quad f'''(0) = 0, \\quad f^{(4)}(0) = 1$$

Pattern: $1, 0, -1, 0, 1, 0, -1, 0, \\ldots$

---

**Only even powers!**

$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots$$

$$= \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n)!}x^{2n}$$

**Converges for all $x$!**

---

## Example 4: Taylor Series for $\\ln x$ centered at $a = 1$

**Step 1: Find derivatives**

$$f(x) = \\ln x$$
$$f'(x) = \\frac{1}{x} = x^{-1}$$
$$f''(x) = -x^{-2}$$
$$f'''(x) = 2x^{-3}$$
$$f^{(4)}(x) = -6x^{-4} = -3!x^{-4}$$
$$f^{(n)}(x) = \\frac{(-1)^{n-1}(n-1)!}{x^n}$$ for $n \\geq 1$

---

**Step 2: Evaluate at $x = 1$**

$$f(1) = \\ln 1 = 0$$
$$f'(1) = 1$$
$$f''(1) = -1$$
$$f'''(1) = 2$$
$$f^{(n)}(1) = (-1)^{n-1}(n-1)!$$ for $n \\geq 1$

---

**Step 3: Write Taylor series**

$$\\ln x = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}(n-1)!}{n!}(x-1)^n$$

$$= \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n}(x-1)^n$$

$$= (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\frac{(x-1)^4}{4} + \\cdots$$

**Converges for $0 < x \\leq 2$** (interval: $(0, 2]$)

---

## Relationship Between $\\sin x$ and $\\cos x$

Notice:
$$\\frac{d}{dx}[\\sin x] = \\cos x$$

Differentiate the series for $\\sin x$:

$$\\frac{d}{dx}\\left[x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\\right]$$

$$= 1 - \\frac{3x^2}{3!} + \\frac{5x^4}{5!} - \\cdots$$

$$= 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\cos x$$ ✓

**Series confirm calculus relationships!**

---

## Using Known Series (Smart Way!)

Instead of computing all derivatives, use:
- Substitution
- Differentiation/Integration
- Algebraic manipulation

---

## Example 5: Find Series for $e^{-x^2}$

**Start with**: $e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$

**Substitute $x \\to -x^2$**:

$$e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$$

$$= 1 - x^2 + \\frac{x^4}{2!} - \\frac{x^6}{3!} + \\frac{x^8}{4!} - \\cdots$$

**Much easier than computing derivatives!**

---

## Example 6: Find Series for $x \\sin x$

**Start with**: $\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$

**Multiply by $x$**:

$$x \\sin x = x \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$

$$= \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+2}}{(2n+1)!}$$

$$= x^2 - \\frac{x^4}{3!} + \\frac{x^6}{5!} - \\frac{x^8}{7!} + \\cdots$$

---

## Example 7: Find Series for $\\int e^{-x^2} dx$

From Example 5: $e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$

**Integrate term by term**:

$$\\int e^{-x^2} dx = C + \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{n!(2n+1)}$$

$$= C + x - \\frac{x^3}{1! \\cdot 3} + \\frac{x^5}{2! \\cdot 5} - \\frac{x^7}{3! \\cdot 7} + \\cdots$$

> **Note**: This integral has no elementary antiderivative, but we can express it as a series!

---

## Taylor Series Centered at $a \\neq 0$

**Example**: Find Taylor series for $e^x$ centered at $a = 2$.

All derivatives of $e^x$ are $e^x$, so:

$$f^{(n)}(2) = e^2$$ for all $n$

Taylor series:

$$e^x = \\sum_{n=0}^{\\infty} \\frac{e^2}{n!}(x-2)^n$$

$$= e^2 \\left[1 + (x-2) + \\frac{(x-2)^2}{2!} + \\frac{(x-2)^3}{3!} + \\cdots\\right]$$

$$= e^2 \\sum_{n=0}^{\\infty} \\frac{(x-2)^n}{n!}$$

---

## When Does Taylor Series Equal the Function?

The Taylor series equals $f(x)$ when:

$$\\lim_{n \\to \\infty} R_n(x) = 0$$

where $R_n(x)$ is the **remainder** (error) after $n$ terms.

**For most common functions** (like $e^x, \\sin x, \\cos x, \\ln(1+x)$), this happens on their interval of convergence.

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Factorial in General Term

For $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$:

**WRONG**: General term is $\\frac{(-1)^n x^n}{n!}$

**RIGHT**: General term is $\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (only odd powers!)

---

### Mistake 2: Wrong Starting Index

For $\\sin x$, first nonzero term is $x$ (when $n = 0$).

**WRONG**: Sum starts at $n = 1$

**RIGHT**: $\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (starts at $n = 0$)

---

### Mistake 3: Forgetting Center for Taylor Series

For $\\ln x$ centered at $a = 1$:

**WRONG**: $\\ln x = \\sum \\frac{(-1)^{n-1} x^n}{n}$

**RIGHT**: $\\ln x = \\sum \\frac{(-1)^{n-1} (x-1)^n}{n}$ (must use $(x-1)^n$!)

---

### Mistake 4: Computing All Derivatives Unnecessarily

To find series for $e^{3x}$:

**WRONG**: Compute $f'(x), f''(x), f'''(x), \\ldots$

**RIGHT**: Use $e^x = \\sum \\frac{x^n}{n!}$, substitute $x \\to 3x$:

$$e^{3x} = \\sum_{n=0}^{\\infty} \\frac{(3x)^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{3^n x^n}{n!}$$

---

## 📝 Practice Strategy

1. **Memorize basic series**: $e^x, \\sin x, \\cos x, \\frac{1}{1-x}, \\ln(1+x)$
2. **Use substitution**: Replace $x$ with $f(x)$ in known series
3. **Multiply/divide by powers**: For $x^k f(x)$, just multiply series by $x^k$
4. **Differentiate/integrate**: Term by term when needed
5. **For derivatives at $a$**: Look for patterns to avoid computing all
6. **Check first few terms**: Make sure they match Taylor polynomial
7. **Odd/even functions**: $\\sin x$ has only odd powers, $\\cos x$ only even
8. **Write general term**: Essential for summation notation
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the Maclaurin series for $f(x) = \\frac{1}{1-x}$ and state the interval of convergence.',
            solution: `**Method 1: Using derivatives**

$$f(x) = (1-x)^{-1}$$
$$f'(x) = (1-x)^{-2}$$
$$f''(x) = 2(1-x)^{-3}$$
$$f'''(x) = 6(1-x)^{-4} = 3!(1-x)^{-4}$$
$$f^{(n)}(x) = n!(1-x)^{-(n+1)}$$

At $x = 0$:
$$f^{(n)}(0) = n!$$

Maclaurin series:
$$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} \\frac{n!}{n!}x^n = \\sum_{n=0}^{\\infty} x^n$$

$$= 1 + x + x^2 + x^3 + x^4 + \\cdots$$

---

**Method 2: Geometric series (faster!)**

This is just the geometric series with ratio $r = x$.

$$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$$

---

**Interval of convergence**:

Geometric series converges when $|r| < 1$:

$$|x| < 1$$

At $x = 1$: $\\sum 1$ diverges

At $x = -1$: $\\sum (-1)^n$ diverges

**Interval**: $(-1, 1)$

---

**Answer**: $\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$ for $|x| < 1$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Use the Maclaurin series for $e^x$ to find the Maclaurin series for $f(x) = e^{2x} \\cos x$.',
            solution: `**Step 1: Write known series**

$$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$

$$\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$

---

**Step 2: Find $e^{2x}$**

Substitute $x \\to 2x$ in series for $e^x$:

$$e^{2x} = \\sum_{n=0}^{\\infty} \\frac{(2x)^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{2^n x^n}{n!}$$

$$= 1 + 2x + \\frac{4x^2}{2!} + \\frac{8x^3}{3!} + \\cdots$$

$$= 1 + 2x + 2x^2 + \\frac{4x^3}{3} + \\cdots$$

---

**Step 3: Multiply series**

$$e^{2x} \\cos x = \\left(1 + 2x + 2x^2 + \\frac{4x^3}{3} + \\cdots\\right)\\left(1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\cdots\\right)$$

Multiply term by term (collect like powers):

---

**Constant term**: $1 \\cdot 1 = 1$

**$x$ term**: $2x \\cdot 1 = 2x$

**$x^2$ term**: $2x^2 \\cdot 1 + 1 \\cdot (-\\frac{x^2}{2}) = 2x^2 - \\frac{x^2}{2} = \\frac{3x^2}{2}$

**$x^3$ term**: $\\frac{4x^3}{3} \\cdot 1 + 2x \\cdot (-\\frac{x^2}{2}) = \\frac{4x^3}{3} - x^3 = \\frac{x^3}{3}$

**$x^4$ term**: (from multiple products)
$1 \\cdot \\frac{x^4}{24} + 2x^2 \\cdot (-\\frac{x^2}{2}) + (\\text{higher order terms})$
$= \\frac{x^4}{24} - x^4 + \\cdots$

(This gets tedious!)

---

**First few terms**:

$$e^{2x} \\cos x = 1 + 2x + \\frac{3x^2}{2} + \\frac{x^3}{3} + \\cdots$$

---

**Answer**: $e^{2x}\\cos x = 1 + 2x + \\frac{3x^2}{2} + \\frac{x^3}{3} + \\cdots$

(Usually only first 3-4 terms are requested)`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Find the Taylor series for $f(x) = \\frac{1}{x}$ centered at $a = 1$.',
            solution: `**Step 1: Rewrite in useful form**

$$f(x) = \\frac{1}{x} = \\frac{1}{1 + (x-1)}$$

Let $u = x - 1$, so $x = 1 + u$:

$$f(x) = \\frac{1}{1+u}$$

---

**Step 2: Use geometric series**

We know: $\\frac{1}{1-r} = \\sum_{n=0}^{\\infty} r^n$ for $|r| < 1$

Replace $r$ with $-u$:

$$\\frac{1}{1+u} = \\frac{1}{1-(-u)} = \\sum_{n=0}^{\\infty} (-u)^n = \\sum_{n=0}^{\\infty} (-1)^n u^n$$

---

**Step 3: Substitute back $u = x-1$**

$$\\frac{1}{x} = \\sum_{n=0}^{\\infty} (-1)^n (x-1)^n$$

$$= 1 - (x-1) + (x-1)^2 - (x-1)^3 + \\cdots$$

---

**Step 4: Find interval of convergence**

Need $|u| < 1$:
$$|x-1| < 1$$
$$-1 < x - 1 < 1$$
$$0 < x < 2$$

---

**Answer**: $\\frac{1}{x} = \\sum_{n=0}^{\\infty} (-1)^n(x-1)^n$ for $0 < x < 2$`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the Taylor series formula and when is it a Maclaurin series?',
            back: 'Taylor series centered at $a$: $f(x) = \\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n$. When $a=0$, it\'s Maclaurin: $\\sum\\frac{f^{(n)}(0)}{n!}x^n$. Recipe: find derivatives, evaluate at $a$, look for pattern, write general term.',
            hint: 'Infinite Taylor polynomial, a=0 is Maclaurin',
          },
          {
            front: 'What are the essential Maclaurin series to memorize?',
            back: '$e^x = \\sum\\frac{x^n}{n!}$ (all $x$). $\\sin x = \\sum\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (odd powers). $\\cos x = \\sum\\frac{(-1)^n x^{2n}}{(2n)!}$ (even powers). $\\frac{1}{1-x} = \\sum x^n$ ($|x|<1$). $\\ln(1+x) = \\sum\\frac{(-1)^{n-1}x^n}{n}$ ($|x|<1$). All converge everywhere except last two.',
            hint: 'e^x, sin, cos, 1/(1-x), ln(1+x)',
          },
          {
            front: 'How do you build new series from known ones?',
            back: 'Substitution: replace $x$ with $f(x)$ (e.g., $e^{-x^2}$ from $e^x$). Multiply by $x^k$: shift all powers. Differentiate/integrate term by term (same radius $R$). Add/subtract series. Multiply series (tedious, usually first few terms only). Way faster than computing all derivatives!',
            hint: 'Substitute, multiply, differentiate, integrate',
          },
          {
            front: 'Common Taylor series mistakes to avoid?',
            back: '1) Wrong general term for odd/even powers ($\\sin x$ needs $(2n+1)!$ not $n!$). 2) Wrong starting index (check first nonzero term). 3) Forgetting center: use $(x-a)^n$ not $x^n$ when $a\\neq 0$. 4) Computing all derivatives instead of substitution. 5) Wrong signs in alternating series.',
            hint: 'Check factorials, index, center, use substitution',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 4: Common Taylor Series and Applications
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'common-taylor-series',
      title: 'Common Taylor Series and Applications',
      description: 'Key series formulas and how to use them',
      order: 4,
      categoryId: powerSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Common Taylor Series and Applications

## Essential Maclaurin Series Reference

### 1. Exponential Function

$$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

**Interval**: $(-\\infty, \\infty)$

**Radius**: $R = \\infty$

---

### 2. Sine Function

$$\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots$$

**Interval**: $(-\\infty, \\infty)$

**Only odd powers!**

---

### 3. Cosine Function

$$\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots$$

**Interval**: $(-\\infty, \\infty)$

**Only even powers!**

---

### 4. Geometric Series

$$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + x^4 + \\cdots$$

**Interval**: $(-1, 1)$

**Most versatile for substitutions!**

---

### 5. Natural Logarithm

$$\\ln(1+x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots$$

**Interval**: $(-1, 1]$ (includes 1!)

---

### 6. Binomial Series (General)

$$(1+x)^p = 1 + px + \\frac{p(p-1)}{2!}x^2 + \\frac{p(p-1)(p-2)}{3!}x^3 + \\cdots$$

**Interval**: $(-1, 1)$ when $p$ is not a positive integer

When $p$ is a positive integer, this is a finite polynomial (binomial theorem).

---

## Application 1: Approximating Functions

**Example**: Approximate $\\sin(0.1)$ using the first three terms.

$$\\sin x \\approx x - \\frac{x^3}{6}$$

$$\\sin(0.1) \\approx 0.1 - \\frac{(0.1)^3}{6} = 0.1 - \\frac{0.001}{6}$$

$$\\approx 0.1 - 0.000167 = 0.099833$$

**Actual value**: $\\sin(0.1) \\approx 0.0998334...$

Very close! ✓

---

## Application 2: Evaluating Limits

**Example**: Find $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$

**Substitute series for $e^x$**:

$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$

$$e^x - 1 - x = \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

---

$$\\frac{e^x - 1 - x}{x^2} = \\frac{\\frac{x^2}{2} + \\frac{x^3}{6} + \\frac{x^4}{24} + \\cdots}{x^2}$$

$$= \\frac{1}{2} + \\frac{x}{6} + \\frac{x^2}{24} + \\cdots$$

As $x \\to 0$:

$$\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\frac{1}{2}$$

**No L'Hôpital's needed!**

---

## Application 3: Finding Derivatives at a Point

**Example**: Find $f^{(10)}(0)$ if $f(x) = x^2 e^{3x}$.

**Step 1**: Find Maclaurin series for $f(x)$

$$e^{3x} = \\sum_{n=0}^{\\infty} \\frac{(3x)^n}{n!} = 1 + 3x + \\frac{9x^2}{2} + \\frac{27x^3}{6} + \\cdots$$

$$x^2 e^{3x} = x^2\\left(1 + 3x + \\frac{9x^2}{2} + \\frac{9x^3}{2} + \\cdots\\right)$$

$$= x^2 + 3x^3 + \\frac{9x^4}{2} + \\frac{9x^5}{2} + \\cdots$$

---

**Step 2**: General term has form $\\frac{f^{(n)}(0)}{n!}x^n$

The coefficient of $x^{10}$ is $\\frac{f^{(10)}(0)}{10!}$.

From $x^2 e^{3x} = x^2 \\sum_{n=0}^{\\infty} \\frac{3^n x^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{3^n x^{n+2}}{n!}$

For $x^{10}$ term: $n + 2 = 10$, so $n = 8$.

Coefficient: $\\frac{3^8}{8!}$

---

$$\\frac{f^{(10)}(0)}{10!} = \\frac{3^8}{8!}$$

$$f^{(10)}(0) = \\frac{3^8 \\cdot 10!}{8!} = 3^8 \\cdot 10 \\cdot 9 = 3^8 \\cdot 90$$

$$= 6561 \\cdot 90 = 590,490$$

---

## Application 4: Integrating Non-Elementary Functions

**Example**: Express $\\int_0^1 \\frac{\\sin x}{x} dx$ as an infinite series.

**Step 1**: Write series for $\\sin x$

$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots$$

---

**Step 2**: Divide by $x$

$$\\frac{\\sin x}{x} = 1 - \\frac{x^2}{3!} + \\frac{x^4}{5!} - \\frac{x^6}{7!} + \\cdots$$

---

**Step 3**: Integrate from 0 to 1

$$\\int_0^1 \\frac{\\sin x}{x} dx = \\int_0^1 \\left(1 - \\frac{x^2}{6} + \\frac{x^4}{120} - \\frac{x^6}{5040} + \\cdots\\right) dx$$

$$= \\left[x - \\frac{x^3}{18} + \\frac{x^5}{600} - \\frac{x^7}{35280} + \\cdots\\right]_0^1$$

$$= 1 - \\frac{1}{18} + \\frac{1}{600} - \\frac{1}{35280} + \\cdots$$

$$\\approx 0.9461$$ (using first 4 terms)

---

## Substitution Techniques

### Example 5: Find series for $\\frac{1}{1+x^2}$

**Start with**: $\\frac{1}{1-u} = \\sum_{n=0}^{\\infty} u^n$

**Substitute $u = -x^2$**:

$$\\frac{1}{1+x^2} = \\frac{1}{1-(-x^2)} = \\sum_{n=0}^{\\infty} (-x^2)^n$$

$$= \\sum_{n=0}^{\\infty} (-1)^n x^{2n}$$

$$= 1 - x^2 + x^4 - x^6 + x^8 - \\cdots$$

**Interval**: $|x| < 1$

---

### Example 6: Find series for $\\arctan x$

**From Example 5**: $\\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \\cdots$

We know: $\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$

**Integrate both sides**:

$$\\arctan x = \\int \\left(1 - x^2 + x^4 - x^6 + \\cdots\\right) dx$$

$$= C + x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots$$

---

At $x = 0$: $\\arctan 0 = 0$, so $C = 0$.

$$\\arctan x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n+1}$$

$$= x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots$$

**Interval**: $[-1, 1]$

---

## Fun Application: Approximating $\\pi$

From $\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$

At $x = 1$: $\\arctan 1 = \\frac{\\pi}{4}$

$$\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\frac{1}{9} - \\cdots$$

$$\\pi = 4\\left(1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\frac{1}{9} - \\cdots\\right)$$

(This converges very slowly, but it's a cool formula!)

---

## Differentiation Example

### Example 7: Find series for $\\frac{1}{(1-x)^2}$

**Method 1: Differentiate $\\frac{1}{1-x}$**

$$\\frac{d}{dx}\\left[\\frac{1}{1-x}\\right] = \\frac{1}{(1-x)^2}$$

$$\\frac{d}{dx}\\left[\\sum_{n=0}^{\\infty} x^n\\right] = \\sum_{n=1}^{\\infty} n x^{n-1}$$

$$\\frac{1}{(1-x)^2} = \\sum_{n=1}^{\\infty} n x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots$$

Or reindex: $\\sum_{n=0}^{\\infty} (n+1)x^n$

---

## Multiplying Series

### Example 8: Find first 3 terms of $e^x \\sin x$

$$e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$$

$$\\sin x = x - \\frac{x^3}{6} + \\cdots$$

**Multiply**:

$$(1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots)(x - \\frac{x^3}{6} + \\cdots)$$

---

**Constant term**: None (since $\\sin x$ starts with $x$)

**$x$ term**: $1 \\cdot x = x$

**$x^2$ term**: $x \\cdot x = x^2$

**$x^3$ term**: $\\frac{x^2}{2} \\cdot x + 1 \\cdot (-\\frac{x^3}{6}) + x \\cdot 0 = \\frac{x^3}{2} - \\frac{x^3}{6} = \\frac{x^3}{3}$

$$e^x \\sin x = x + x^2 + \\frac{x^3}{3} + \\cdots$$

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Interval After Substitution

For $\\frac{1}{1+x^2}$ from $\\frac{1}{1-u}$ with $u = -x^2$:

**WRONG**: Interval is still $(-1, 1)$

**RIGHT**: Need $|u| < 1$, so $|-x^2| < 1$, which means $|x| < 1$ (still $(-1,1)$!)

But if you substitute $u = 2x$, interval changes!

---

### Mistake 2: Forgetting Integration Constant

When integrating series: $\\int \\sum c_n x^n dx = C + \\sum \\frac{c_n x^{n+1}}{n+1}$

Must find $C$ using initial condition!

---

### Mistake 3: Using Series Outside Interval of Convergence

$$\\ln(1+x) = x - \\frac{x^2}{2} + \\cdots$$ only for $-1 < x \\leq 1$

**WRONG**: $\\ln 3 = 2 - \\frac{4}{2} + \\frac{8}{3} - \\cdots$ (using $x = 2$)

$x = 2$ is outside the interval!

---

### Mistake 4: Wrong Power After Substitution

For $e^{x^2}$ from $e^x = \\sum \\frac{x^n}{n!}$:

**WRONG**: $e^{x^2} = \\sum \\frac{x^{2n}}{n!}$

**RIGHT**: $e^{x^2} = \\sum \\frac{(x^2)^n}{n!} = \\sum \\frac{x^{2n}}{n!}$ ✓

(In this case same answer, but be careful with the logic!)

---

## 📝 Practice Strategy

1. **Memorize the Big 5**: $e^x, \\sin x, \\cos x, \\frac{1}{1-x}, \\ln(1+x)$
2. **Know intervals**: Most are $(-\\infty, \\infty)$ except geometric and log
3. **Substitution**: Replace $x$ with anything, adjust interval
4. **Term by term operations**: Valid within radius of convergence
5. **For limits**: Expand both numerator and denominator
6. **For integrals**: Integrate series term by term
7. **For derivatives at 0**: Find coefficient of $x^n$ in series
8. **Check first 3-4 terms**: Usually sufficient for problems
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the Maclaurin series for $f(x) = \\frac{x}{1-x^2}$ and determine its radius of convergence.',
            solution: `**Step 1: Use geometric series**

$$\\frac{1}{1-x^2} = \\sum_{n=0}^{\\infty} (x^2)^n = \\sum_{n=0}^{\\infty} x^{2n}$$

$$= 1 + x^2 + x^4 + x^6 + x^8 + \\cdots$$

for $|x^2| < 1$, i.e., $|x| < 1$.

---

**Step 2: Multiply by $x$**

$$\\frac{x}{1-x^2} = x \\cdot \\sum_{n=0}^{\\infty} x^{2n} = \\sum_{n=0}^{\\infty} x^{2n+1}$$

$$= x + x^3 + x^5 + x^7 + x^9 + \\cdots$$

---

**Step 3: Radius of convergence**

From geometric series with $u = x^2$:

Need $|u| < 1$, so $|x^2| < 1$, which gives $|x| < 1$.

**Radius**: $R = 1$

---

**Answer**: $\\frac{x}{1-x^2} = \\sum_{n=0}^{\\infty} x^{2n+1}$ for $|x| < 1$, with $R = 1$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin x - x + \\frac{x^3}{6}}{x^5}$ using Maclaurin series.',
            solution: `**Step 1: Write series for $\\sin x$**

$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots$$

$$= x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\frac{x^7}{5040} + \\cdots$$

---

**Step 2: Simplify numerator**

$$\\sin x - x + \\frac{x^3}{6} = \\left(x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots\\right) - x + \\frac{x^3}{6}$$

$$= \\frac{x^5}{120} - \\frac{x^7}{5040} + \\cdots$$

---

**Step 3: Divide by $x^5$**

$$\\frac{\\sin x - x + \\frac{x^3}{6}}{x^5} = \\frac{\\frac{x^5}{120} - \\frac{x^7}{5040} + \\cdots}{x^5}$$

$$= \\frac{1}{120} - \\frac{x^2}{5040} + \\cdots$$

---

**Step 4: Take limit**

$$\\lim_{x \\to 0} \\left(\\frac{1}{120} - \\frac{x^2}{5040} + \\cdots\\right) = \\frac{1}{120}$$

---

**Answer**: $\\frac{1}{120}$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Use series to approximate $\\int_0^{0.5} e^{-x^2} dx$ to three decimal places.',
            solution: `**Step 1: Find series for $e^{-x^2}$**

$$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$$

Substitute $x \\to -x^2$:

$$e^{-x^2} = \\sum_{n=0}^{\\infty} \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{n!}$$

$$= 1 - x^2 + \\frac{x^4}{2!} - \\frac{x^6}{3!} + \\frac{x^8}{4!} - \\cdots$$

---

**Step 2: Integrate term by term**

$$\\int_0^{0.5} e^{-x^2} dx = \\int_0^{0.5} \\left(1 - x^2 + \\frac{x^4}{2} - \\frac{x^6}{6} + \\frac{x^8}{24} - \\cdots\\right) dx$$

$$= \\left[x - \\frac{x^3}{3} + \\frac{x^5}{10} - \\frac{x^7}{42} + \\frac{x^9}{216} - \\cdots\\right]_0^{0.5}$$

---

**Step 3: Evaluate at $x = 0.5$**

$$= 0.5 - \\frac{(0.5)^3}{3} + \\frac{(0.5)^5}{10} - \\frac{(0.5)^7}{42} + \\frac{(0.5)^9}{216} - \\cdots$$

$$= 0.5 - \\frac{0.125}{3} + \\frac{0.03125}{10} - \\frac{0.0078125}{42} + \\frac{0.001953125}{216} - \\cdots$$

$$= 0.5 - 0.041667 + 0.003125 - 0.000186 + 0.000009 - \\cdots$$

---

**Step 4: Sum terms**

$$\\approx 0.5 - 0.041667 + 0.003125 - 0.000186$$

$$\\approx 0.461272$$

To three decimal places: **0.461**

---

**Answer**: $\\int_0^{0.5} e^{-x^2} dx \\approx 0.461$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What are the Big 5 Maclaurin series with intervals?',
            back: '$e^x = \\sum\\frac{x^n}{n!}$ (all $x$). $\\sin x = \\sum\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (all $x$). $\\cos x = \\sum\\frac{(-1)^n x^{2n}}{(2n)!}$ (all $x$). $\\frac{1}{1-x} = \\sum x^n$ ($|x|<1$). $\\ln(1+x) = \\sum\\frac{(-1)^{n-1}x^n}{n}$ ($-1<x\\leq 1$). First three converge everywhere!',
            hint: 'e^x, sin, cos (all x); geometric, ln (|x|<1)',
          },
          {
            front: 'How do you use series to evaluate limits?',
            back: 'Expand both numerator and denominator using series. Simplify (many terms cancel). Divide by lowest power. Take limit. Example: $\\lim\\frac{e^x-1-x}{x^2} = \\lim\\frac{\\frac{x^2}{2}+\\frac{x^3}{6}+\\cdots}{x^2} = \\frac{1}{2}$. No L\'Hôpital\'s needed!',
            hint: 'Expand, simplify, divide, take limit',
          },
          {
            front: 'Key series applications for BC Calculus?',
            back: '1) Approximating functions (use first few terms). 2) Evaluating limits (expand num/denom). 3) Finding derivatives at 0 (coefficient of $x^n$ is $\\frac{f^{(n)}(0)}{n!}$). 4) Integrating non-elementary functions ($\\int e^{-x^2}$). 5) Representing functions as series (substitution, differentiation, integration).',
            hint: 'Approximate, limits, derivatives, integrals, representations',
          },
          {
            front: 'Common series application mistakes?',
            back: '1) Using series outside interval of convergence. 2) Wrong interval after substitution (check $|u|<1$). 3) Forgetting integration constant. 4) Wrong power after substitution ($e^{x^2}$ needs $(x^2)^n = x^{2n}$). 5) Not simplifying before taking limit. Always check interval validity!',
            hint: 'Check interval, find C, simplify, verify substitution',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Taylor Series (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  3. Taylor and Maclaurin Series')
  console.log('  4. Common Taylor Series and Applications')
  console.log('\n∑ Complete BC Calculus curriculum achieved! 🎓')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
