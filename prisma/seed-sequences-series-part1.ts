import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Sequences & Series (BC) micro-lessons - Part 1...')

  // Create or get the Sequences & Series category
  const sequencesSeriesCategory = await prisma.category.upsert({
    where: { slug: 'sequences-series' },
    update: {},
    create: {
      slug: 'sequences-series',
      name: 'Sequences & Series (BC)',
      description: 'Sequences, infinite series, and convergence tests for Calculus BC',
      order: 7,
      icon: '∞',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'sequences-intro',
          'series-intro',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Introduction to Sequences
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'sequences-intro',
      title: 'Introduction to Sequences',
      description: 'Understanding sequences and their behavior',
      order: 1,
      categoryId: sequencesSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Introduction to Sequences

## What is a Sequence?

A **sequence** is an ordered list of numbers:

$$a_1, a_2, a_3, a_4, \\ldots, a_n, \\ldots$$

Each number is called a **term**.

**Notation**: 
- Individual terms: $a_1, a_2, a_3, \\ldots$
- General term: $a_n$ (the nth term)
- Whole sequence: $\\{a_n\\}$ or $\\{a_n\\}_{n=1}^{\\infty}$

> **💡 Key Idea**: A sequence is a function from positive integers to real numbers! $a_n = f(n)$

---

## Explicit Formula

A formula that gives $a_n$ directly in terms of $n$.

**Example 1**: $a_n = \\frac{1}{n}$

$$a_1 = 1, \\quad a_2 = \\frac{1}{2}, \\quad a_3 = \\frac{1}{3}, \\quad a_4 = \\frac{1}{4}, \\ldots$$

---

**Example 2**: $a_n = (-1)^n \\cdot n$

$$a_1 = -1, \\quad a_2 = 2, \\quad a_3 = -3, \\quad a_4 = 4, \\ldots$$

Alternating signs!

---

## Recursive Formula

Defines each term using previous term(s).

**Example 3**: $a_1 = 1$, $a_n = 2a_{n-1}$ for $n \\geq 2$

$$a_1 = 1$$
$$a_2 = 2(1) = 2$$
$$a_3 = 2(2) = 4$$
$$a_4 = 2(4) = 8$$

This is the sequence $1, 2, 4, 8, 16, \\ldots$ (powers of 2!)

---

**Example 4** (Fibonacci): $a_1 = 1$, $a_2 = 1$, $a_n = a_{n-1} + a_{n-2}$ for $n \\geq 3$

$$1, 1, 2, 3, 5, 8, 13, 21, \\ldots$$

---

## Finding Patterns

Given the first few terms, find the formula.

**Example**: $2, 4, 6, 8, 10, \\ldots$

Pattern: Even numbers!

$$a_n = 2n$$

---

**Example**: $1, 4, 9, 16, 25, \\ldots$

Pattern: Perfect squares!

$$a_n = n^2$$

---

**Example**: $1, -1, 1, -1, 1, \\ldots$

Pattern: Alternating!

$$a_n = (-1)^{n+1}$$ (or $(-1)^{n-1}$)

---

## Limit of a Sequence

The sequence $\\{a_n\\}$ **converges** to limit $L$ if:

$$\\lim_{n \\to \\infty} a_n = L$$

**Meaning**: As $n$ gets larger, $a_n$ gets closer and closer to $L$.

---

**If the limit exists (finite)**: sequence **converges**

**If the limit doesn't exist or is infinite**: sequence **diverges**

---

## Example 5: Find $\\lim_{n \\to \\infty} \\frac{1}{n}$

As $n \\to \\infty$, the denominator grows without bound.

$$\\lim_{n \\to \\infty} \\frac{1}{n} = 0$$

**The sequence converges to 0.**

---

## Example 6: Find $\\lim_{n \\to \\infty} \\frac{2n + 1}{3n - 2}$

**Method**: Divide numerator and denominator by highest power of $n$ (which is $n^1$).

$$\\lim_{n \\to \\infty} \\frac{2n + 1}{3n - 2} = \\lim_{n \\to \\infty} \\frac{\\frac{2n}{n} + \\frac{1}{n}}{\\frac{3n}{n} - \\frac{2}{n}}$$

$$= \\lim_{n \\to \\infty} \\frac{2 + \\frac{1}{n}}{3 - \\frac{2}{n}}$$

As $n \\to \\infty$: $\\frac{1}{n} \\to 0$ and $\\frac{2}{n} \\to 0$

$$= \\frac{2 + 0}{3 - 0} = \\frac{2}{3}$$

**The sequence converges to $\\frac{2}{3}$.**

---

## Example 7: Find $\\lim_{n \\to \\infty} (-1)^n$

The sequence is: $-1, 1, -1, 1, -1, 1, \\ldots$

It oscillates between -1 and 1, never settling down.

$$\\lim_{n \\to \\infty} (-1)^n \\text{ does not exist}$$

**The sequence diverges.**

---

## Limit Laws for Sequences

If $\\lim_{n \\to \\infty} a_n = A$ and $\\lim_{n \\to \\infty} b_n = B$, then:

1. **Sum**: $\\lim_{n \\to \\infty} (a_n + b_n) = A + B$

2. **Difference**: $\\lim_{n \\to \\infty} (a_n - b_n) = A - B$

3. **Product**: $\\lim_{n \\to \\infty} (a_n \\cdot b_n) = A \\cdot B$

4. **Quotient**: $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\frac{A}{B}$ (if $B \\neq 0$)

5. **Constant Multiple**: $\\lim_{n \\to \\infty} c \\cdot a_n = c \\cdot A$

---

## Squeeze Theorem for Sequences

If $a_n \\leq b_n \\leq c_n$ for all $n$, and:

$$\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} c_n = L$$

Then:

$$\\lim_{n \\to \\infty} b_n = L$$

---

## Example 8: Use Squeeze Theorem

Find $\\lim_{n \\to \\infty} \\frac{\\sin n}{n}$.

**Step 1**: Recall $-1 \\leq \\sin n \\leq 1$ for all $n$.

---

**Step 2**: Divide by $n$ (positive):

$$-\\frac{1}{n} \\leq \\frac{\\sin n}{n} \\leq \\frac{1}{n}$$

---

**Step 3**: Take limits:

$$\\lim_{n \\to \\infty} -\\frac{1}{n} = 0 \\quad \\text{and} \\quad \\lim_{n \\to \\infty} \\frac{1}{n} = 0$$

---

**Step 4**: By Squeeze Theorem:

$$\\lim_{n \\to \\infty} \\frac{\\sin n}{n} = 0$$

**The sequence converges to 0.**

---

## Monotonic Sequences

**Increasing**: $a_n \\leq a_{n+1}$ for all $n$

**Decreasing**: $a_n \\geq a_{n+1}$ for all $n$

**Monotonic**: either increasing or decreasing

---

## Bounded Sequences

**Bounded above**: $a_n \\leq M$ for some $M$ and all $n$

**Bounded below**: $a_n \\geq m$ for some $m$ and all $n$

**Bounded**: both bounded above and below

---

## Monotone Convergence Theorem

If a sequence is **monotonic** and **bounded**, then it **converges**.

> **💡 Key Idea**: If sequence is increasing but can't go past some ceiling, it must level off!

---

## Example 9: Show $a_n = \\frac{n}{n+1}$ converges

**Step 1: Find limit**

$$\\lim_{n \\to \\infty} \\frac{n}{n+1} = \\lim_{n \\to \\infty} \\frac{1}{1 + \\frac{1}{n}} = \\frac{1}{1+0} = 1$$

---

**Step 2: Check if increasing**

$$a_{n+1} = \\frac{n+1}{n+2}$$

Compare: Is $\\frac{n+1}{n+2} \\geq \\frac{n}{n+1}$?

Cross-multiply: $(n+1)^2 \\geq n(n+2)$

$$n^2 + 2n + 1 \\geq n^2 + 2n$$

$$1 \\geq 0$$ ✓

**Sequence is increasing.**

---

**Step 3: Check if bounded**

$$a_n = \\frac{n}{n+1} < 1$$ for all $n$

Also, $a_n > 0$ for all $n$.

**Sequence is bounded**: $0 < a_n < 1$

---

**Conclusion**: By Monotone Convergence Theorem, sequence converges (to 1).

---

## Common Sequence Limits

| Sequence | Limit |
|----------|-------|
| $\\frac{1}{n^p}$ (p > 0) | 0 |
| $\\frac{1}{n}$ | 0 |
| $a^n$ (if abs(a) < 1) | 0 |
| $a^n$ (if a > 1) | ∞ |
| $\\frac{\\ln n}{n}$ | 0 |
| $n^{1/n}$ | 1 |
| $\\left(1 + \\frac{1}{n}\\right)^n$ | e |

---

## L'Hôpital's Rule for Sequences

If $\\lim_{n \\to \\infty} a_n$ has indeterminate form, treat $n$ as continuous variable $x$ and use L'Hôpital's Rule!

**Example**: $\\lim_{n \\to \\infty} \\frac{\\ln n}{n}$

This is $\\frac{\\infty}{\\infty}$ form.

Replace $n$ with $x$:

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{1/x}{1} = \\lim_{x \\to \\infty} \\frac{1}{x} = 0$$

---

## Example 10: $\\lim_{n \\to \\infty} \\frac{n^2}{e^n}$

This is $\\frac{\\infty}{\\infty}$ form.

Use L'Hôpital's Rule (twice):

$$\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = \\lim_{x \\to \\infty} \\frac{2x}{e^x}$$ (still $\\frac{\\infty}{\\infty}$)

$$= \\lim_{x \\to \\infty} \\frac{2}{e^x} = 0$$

**The sequence converges to 0.**

Exponentials grow faster than polynomials!

---

## ⚠️ Common Mistakes

### Mistake 1: Confusing Sequence Index

$a_1$ is the FIRST term, not $a_0$ (unless stated otherwise).

Be careful with initial conditions!

---

### Mistake 2: Thinking Convergence Means Limit is 0

**WRONG**: "If $\\{a_n\\}$ converges, then $\\lim a_n = 0$"

**EXAMPLE**: $a_n = 1 + \\frac{1}{n}$ converges to 1, not 0!

---

### Mistake 3: Using Wrong Variable

When using L'Hôpital's Rule, replace discrete $n$ with continuous $x$.

---

### Mistake 4: Ignoring Oscillation

$a_n = \\cos(n\\pi)$ oscillates: $1, -1, 1, -1, \\ldots$

This diverges! Don't assume every formula converges.

---

## 📝 Practice Strategy

1. **Find first few terms** to see the pattern
2. **For limits**: divide by highest power, use L'Hôpital's if needed
3. **Check for oscillation**: look for $(-1)^n$ or trig functions
4. **Use Squeeze Theorem** for bounded oscillating terms
5. **Monotonic + Bounded** → converges (even if you can't find exact limit)
6. **Common limits**: memorize $\\frac{1}{n^p} \\to 0$, $r^n \\to 0$ if $|r| < 1$
7. **Exponentials beat polynomials**: $e^n$ grows faster than $n^k$
`,
      exampleProblems: {
        create: [
          {
            question: 'Find an explicit formula for the sequence $2, 5, 10, 17, 26, \\ldots$ and determine if it converges.',
            solution: `**Step 1: Look for pattern in differences**

Terms: 2, 5, 10, 17, 26

First differences: 3, 5, 7, 9

Second differences: 2, 2, 2

Since second differences are constant, this is a quadratic sequence!

---

**Step 2: Assume form $a_n = An^2 + Bn + C$**

Use first three terms:

$n=1$: $A + B + C = 2$

$n=2$: $4A + 2B + C = 5$

$n=3$: $9A + 3B + C = 10$

---

**Step 3: Solve system**

From equations 1 and 2:
$(4A + 2B + C) - (A + B + C) = 5 - 2$
$3A + B = 3$ ... (equation i)

From equations 2 and 3:
$(9A + 3B + C) - (4A + 2B + C) = 10 - 5$
$5A + B = 5$ ... (equation ii)

Subtract (i) from (ii):
$2A = 2$
$A = 1$

From equation (i): $B = 3 - 3(1) = 0$

From original: $C = 2 - A - B = 2 - 1 - 0 = 1$

---

**Step 4: Formula is $a_n = n^2 + 1$**

Check: 
- $a_1 = 1 + 1 = 2$ ✓
- $a_2 = 4 + 1 = 5$ ✓
- $a_3 = 9 + 1 = 10$ ✓

---

**Step 5: Find limit**

$$\\lim_{n \\to \\infty} (n^2 + 1) = \\infty$$

**The sequence diverges to infinity.**

---

**Answer**: $a_n = n^2 + 1$, diverges`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Determine if the sequence $a_n = \\frac{3n^2 - 5n}{2n^2 + n + 1}$ converges. If so, find the limit.',
            solution: `**Step 1: Identify form**

As $n \\to \\infty$: both numerator and denominator → ∞

This is $\\frac{\\infty}{\\infty}$ form.

---

**Step 2: Divide by highest power (which is $n^2$)**

$$a_n = \\frac{3n^2 - 5n}{2n^2 + n + 1} = \\frac{\\frac{3n^2}{n^2} - \\frac{5n}{n^2}}{\\frac{2n^2}{n^2} + \\frac{n}{n^2} + \\frac{1}{n^2}}$$

$$= \\frac{3 - \\frac{5}{n}}{2 + \\frac{1}{n} + \\frac{1}{n^2}}$$

---

**Step 3: Take limit as $n \\to \\infty$**

$$\\lim_{n \\to \\infty} a_n = \\frac{3 - 0}{2 + 0 + 0} = \\frac{3}{2}$$

---

**Answer**: The sequence converges to $\\frac{3}{2}$.`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'Prove that the sequence $a_n = \\frac{(-1)^n}{n}$ converges to 0.',
            solution: `**Step 1: Understand the sequence**

$$a_1 = -1, \\quad a_2 = \\frac{1}{2}, \\quad a_3 = -\\frac{1}{3}, \\quad a_4 = \\frac{1}{4}, \\ldots$$

Terms oscillate but get closer to 0.

---

**Step 2: Use absolute value**

$$|a_n| = \\left|\\frac{(-1)^n}{n}\\right| = \\frac{1}{n}$$

---

**Step 3: Find limit of absolute value**

$$\\lim_{n \\to \\infty} |a_n| = \\lim_{n \\to \\infty} \\frac{1}{n} = 0$$

---

**Step 4: Apply theorem**

If $\\lim_{n \\to \\infty} |a_n| = 0$, then $\\lim_{n \\to \\infty} a_n = 0$.

---

**Alternative: Use Squeeze Theorem**

$$-\\frac{1}{n} \\leq \\frac{(-1)^n}{n} \\leq \\frac{1}{n}$$

$$\\lim_{n \\to \\infty} -\\frac{1}{n} = 0 \\quad \\text{and} \\quad \\lim_{n \\to \\infty} \\frac{1}{n} = 0$$

By Squeeze Theorem:

$$\\lim_{n \\to \\infty} \\frac{(-1)^n}{n} = 0$$

---

**Answer**: The sequence converges to 0 (proven by Squeeze Theorem or absolute value test).`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is a sequence and how is it different from a series?',
            back: 'A sequence is an ordered list of numbers: $a_1, a_2, a_3, \\ldots$ Notation: $\\{a_n\\}$. It\'s a function from positive integers to reals. A series (coming next!) is the SUM of terms in a sequence. Sequence: list. Series: sum.',
            hint: 'Sequence is a list, series is a sum',
          },
          {
            front: 'How do you find the limit of a sequence with rational function?',
            back: 'Divide numerator and denominator by highest power of $n$. Example: $\\lim \\frac{2n^2+3}{5n^2-1} = \\lim \\frac{2+3/n^2}{5-1/n^2} = \\frac{2}{5}$. Can also use L\'Hôpital\'s Rule treating $n$ as continuous $x$.',
            hint: 'Divide by highest power of n',
          },
          {
            front: 'What is the Monotone Convergence Theorem?',
            back: 'If a sequence is monotonic (always increasing or always decreasing) AND bounded, then it converges. Don\'t need to find exact limit! Just prove monotonic + bounded → guaranteed to converge.',
            hint: 'Monotonic + Bounded → Converges',
          },
          {
            front: 'Common sequence limits to memorize?',
            back: '$\\frac{1}{n^p} \\to 0$ (p>0), $r^n \\to 0$ (|r|<1), $\\frac{\\ln n}{n} \\to 0$, $n^{1/n} \\to 1$, $(1+\\frac{1}{n})^n \\to e$. Key: exponentials beat polynomials ($\\frac{n^k}{e^n} \\to 0$). If $|r|>1$: $r^n \\to \\infty$.',
            hint: '1/n^p → 0, exponentials dominate',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Introduction to Infinite Series
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'series-intro',
      title: 'Introduction to Infinite Series',
      description: 'Understanding infinite series and partial sums',
      order: 2,
      categoryId: sequencesSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Introduction to Infinite Series

## What is an Infinite Series?

An **infinite series** is the sum of all terms in an infinite sequence:

$$\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + a_4 + \\cdots$$

**Question**: How can we add infinitely many numbers?

**Answer**: Use **partial sums**!

---

## Partial Sums

The **nth partial sum** $S_n$ is the sum of the first $n$ terms:

$$S_n = \\sum_{k=1}^{n} a_k = a_1 + a_2 + \\cdots + a_n$$

**Examples**:
- $S_1 = a_1$
- $S_2 = a_1 + a_2$
- $S_3 = a_1 + a_2 + a_3$

---

## Convergence of a Series

The series $\\sum_{n=1}^{\\infty} a_n$ **converges to $S$** if:

$$\\lim_{n \\to \\infty} S_n = S$$

where $S_n$ is the sequence of partial sums.

If the limit exists (and is finite), the series **converges**.

If the limit doesn't exist or is infinite, the series **diverges**.

> **💡 Key Idea**: A series converges if its partial sums approach a finite number!

---

## Example 1: Finite Geometric Series

Sum: $1 + 2 + 4 + 8 + \\cdots + 2^{n-1}$

**Formula**: For geometric series with first term $a$ and ratio $r$:

$$S_n = a\\frac{1 - r^n}{1 - r} \\quad (r \\neq 1)$$

Here: $a = 1$, $r = 2$

$$S_n = \\frac{1 - 2^n}{1 - 2} = \\frac{1 - 2^n}{-1} = 2^n - 1$$

Check: $S_1 = 1$, $S_2 = 3$, $S_3 = 7$, $S_4 = 15$ ✓

---

## Infinite Geometric Series

$$\\sum_{n=0}^{\\infty} ar^n = a + ar + ar^2 + ar^3 + \\cdots$$

**Partial sum**: $S_n = a\\frac{1 - r^n}{1 - r}$ (if $r \\neq 1$)

---

**Take limit**:

$$\\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} a\\frac{1 - r^n}{1 - r}$$

---

**Case 1**: If $|r| < 1$, then $r^n \\to 0$ as $n \\to \\infty$

$$S = \\frac{a}{1 - r}$$

**Series converges!**

---

**Case 2**: If $|r| \\geq 1$, then $r^n$ doesn't approach 0

**Series diverges!**

---

## Geometric Series Formula

$$\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r} \\quad \\text{if } |r| < 1$$

**Diverges if $|r| \\geq 1$**

> **🎯 MEMORIZE THIS!** Most important series formula!

---

## Example 2: Evaluate $\\sum_{n=0}^{\\infty} \\frac{1}{2^n}$

This is geometric with $a = 1$ and $r = \\frac{1}{2}$.

Since $|r| = \\frac{1}{2} < 1$, it converges:

$$S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$$

**Check**: $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 2$ ✓

---

## Example 3: Evaluate $\\sum_{n=1}^{\\infty} \\frac{3}{5^n}$

Rewrite with $n$ starting at 0:

$$\\sum_{n=1}^{\\infty} \\frac{3}{5^n} = 3\\sum_{n=1}^{\\infty} \\left(\\frac{1}{5}\\right)^n$$

$$= 3\\left[\\sum_{n=0}^{\\infty} \\left(\\frac{1}{5}\\right)^n - 1\\right]$$

$$= 3\\left[\\frac{1}{1-\\frac{1}{5}} - 1\\right]$$

$$= 3\\left[\\frac{5}{4} - 1\\right] = 3 \\cdot \\frac{1}{4} = \\frac{3}{4}$$

**Or directly**: First term is $a = \\frac{3}{5}$, ratio $r = \\frac{1}{5}$

$$S = \\frac{\\frac{3}{5}}{1 - \\frac{1}{5}} = \\frac{\\frac{3}{5}}{\\frac{4}{5}} = \\frac{3}{4}$$

---

## Telescoping Series

A series where most terms cancel out!

**General form**: $\\sum_{n=1}^{\\infty} (b_n - b_{n+1})$

**Partial sum**:
$$S_n = (b_1 - b_2) + (b_2 - b_3) + (b_3 - b_4) + \\cdots + (b_n - b_{n+1})$$

Most terms cancel:
$$S_n = b_1 - b_{n+1}$$

---

**Limit**:
$$S = \\lim_{n \\to \\infty} S_n = b_1 - \\lim_{n \\to \\infty} b_{n+1}$$

If $\\lim_{n \\to \\infty} b_{n+1}$ exists, the series converges!

---

## Example 4: Telescoping Series

Evaluate $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$.

**Step 1: Use partial fractions**

$$\\frac{1}{n(n+1)} = \\frac{A}{n} + \\frac{B}{n+1}$$

$$1 = A(n+1) + Bn$$

Set $n = 0$: $1 = A$

Set $n = -1$: $1 = -B$, so $B = -1$

$$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$

---

**Step 2: Write out partial sum**

$$S_n = \\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)$$

$$= \\left(\\frac{1}{1} - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$$

---

**Step 3: Most terms cancel (telescope!)**

$$S_n = 1 - \\frac{1}{n+1}$$

---

**Step 4: Take limit**

$$S = \\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n+1}\\right) = 1 - 0 = 1$$

**Answer**: $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = 1$

---

## The Harmonic Series

$$\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$$

**Question**: Does it converge?

**Intuition**: Terms approach 0, so maybe it converges?

**Answer**: **IT DIVERGES!** 🤯

---

**Proof** (grouping argument):

$$S = 1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right) + \\cdots$$

$$> 1 + \\frac{1}{2} + \\left(\\frac{1}{4} + \\frac{1}{4}\\right) + \\left(\\frac{1}{8} + \\frac{1}{8} + \\frac{1}{8} + \\frac{1}{8}\\right) + \\cdots$$

$$= 1 + \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} + \\cdots = \\infty$$

**The harmonic series diverges!**

> **⚠️ Important**: Just because $a_n \\to 0$ doesn't mean $\\sum a_n$ converges!

---

## The nth Term Test for Divergence

If $\\lim_{n \\to \\infty} a_n \\neq 0$, then $\\sum_{n=1}^{\\infty} a_n$ **diverges**.

**Contrapositive**: If $\\sum a_n$ converges, then $\\lim a_n = 0$.

> **⚠️ WARNING**: The converse is FALSE! $\\lim a_n = 0$ does NOT imply convergence (harmonic series is a counterexample).

---

## Example 5: Use nth Term Test

Does $\\sum_{n=1}^{\\infty} \\frac{n}{2n+1}$ converge?

**Check limit**:

$$\\lim_{n \\to \\infty} \\frac{n}{2n+1} = \\lim_{n \\to \\infty} \\frac{1}{2 + \\frac{1}{n}} = \\frac{1}{2} \\neq 0$$

**By nth Term Test, the series diverges.**

---

## Properties of Convergent Series

If $\\sum a_n = A$ and $\\sum b_n = B$ (both converge), then:

1. **Sum**: $\\sum (a_n + b_n) = A + B$

2. **Constant Multiple**: $\\sum c \\cdot a_n = c \\cdot A$

3. **Difference**: $\\sum (a_n - b_n) = A - B$

**Note**: Can't multiply series directly! $(\\sum a_n)(\\sum b_n) \\neq \\sum a_n b_n$

---

## Example 6: Use Properties

If $\\sum_{n=1}^{\\infty} a_n = 5$ and $\\sum_{n=1}^{\\infty} b_n = 3$, find:

$$\\sum_{n=1}^{\\infty} (2a_n - 3b_n)$$

**Solution**:

$$\\sum (2a_n - 3b_n) = 2\\sum a_n - 3\\sum b_n = 2(5) - 3(3) = 10 - 9 = 1$$

---

## Changing Index

You can shift the starting index of a series (but it changes the value for geometric series!).

**Example**: $\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}$ (if $|r| < 1$)

But: $\\sum_{n=1}^{\\infty} r^n = \\frac{r}{1-r}$ (missing the first term!)

Always check where the sum starts!

---

## ⚠️ Common Mistakes

### Mistake 1: Thinking $\\lim a_n = 0$ Implies Convergence

**WRONG**: "Since $\\lim \\frac{1}{n} = 0$, the series $\\sum \\frac{1}{n}$ converges"

**RIGHT**: Harmonic series diverges even though terms approach 0!

$\\lim a_n = 0$ is **necessary** but **not sufficient** for convergence.

---

### Mistake 2: Wrong Geometric Series Formula

For $\\sum_{n=1}^{\\infty} ar^n$ (starting at $n=1$):

First term is $ar$ (not $a$), so sum is $\\frac{ar}{1-r}$

Or rewrite: $\\sum_{n=1}^{\\infty} ar^n = ar\\sum_{n=0}^{\\infty} r^n = ar \\cdot \\frac{1}{1-r} = \\frac{ar}{1-r}$

---

### Mistake 3: Using nth Term Test to Prove Convergence

nth Term Test can only prove DIVERGENCE!

If $\\lim a_n = 0$, you learn nothing from this test.

---

### Mistake 4: Arithmetic with Divergent Series

Can't add/subtract/multiply divergent series using the properties!

Properties only work when BOTH series converge.

---

## 📝 Practice Strategy

1. **Geometric series**: Identify $a$ and $r$, check $|r| < 1$, use formula $\\frac{a}{1-r}$
2. **Telescoping**: Use partial fractions, write out terms to see cancellation
3. **Always check nth term test first**: If $\\lim a_n \\neq 0$, you're done (diverges)!
4. **Harmonic series diverges**: Memorize this fact
5. **Watch starting index**: $n=0$ vs $n=1$ changes the sum
6. **Partial sums**: When in doubt, find $S_n$ formula and take limit
7. **Series vs Sequence**: Series is sum, sequence is list!
`,
      exampleProblems: {
        create: [
          {
            question: 'Determine if the series $\\sum_{n=1}^{\\infty} \\frac{2n+3}{5n-1}$ converges or diverges.',
            solution: `**Step 1: Use nth Term Test**

Check if $\\lim_{n \\to \\infty} a_n = 0$.

$$\\lim_{n \\to \\infty} \\frac{2n+3}{5n-1}$$

---

**Step 2: Divide by $n$**

$$= \\lim_{n \\to \\infty} \\frac{2 + \\frac{3}{n}}{5 - \\frac{1}{n}} = \\frac{2}{5} \\neq 0$$

---

**Step 3: Conclusion**

Since $\\lim_{n \\to \\infty} a_n = \\frac{2}{5} \\neq 0$, by the nth Term Test:

**The series diverges.**

---

**Answer**: Diverges (nth Term Test)`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Find the sum of the series $\\sum_{n=0}^{\\infty} \\frac{3 \\cdot 2^n}{5^{n+1}}$.',
            solution: `**Step 1: Rewrite the series**

$$\\sum_{n=0}^{\\infty} \\frac{3 \\cdot 2^n}{5^{n+1}} = \\sum_{n=0}^{\\infty} \\frac{3 \\cdot 2^n}{5 \\cdot 5^n}$$

$$= \\frac{3}{5} \\sum_{n=0}^{\\infty} \\frac{2^n}{5^n}$$

$$= \\frac{3}{5} \\sum_{n=0}^{\\infty} \\left(\\frac{2}{5}\\right)^n$$

---

**Step 2: Identify geometric series**

This is geometric with:
- First term: $a = 1$ (when summing $r^n$ from $n=0$)
- Common ratio: $r = \\frac{2}{5}$

Since $|r| = \\frac{2}{5} < 1$, it converges!

---

**Step 3: Apply formula**

$$\\sum_{n=0}^{\\infty} \\left(\\frac{2}{5}\\right)^n = \\frac{1}{1 - \\frac{2}{5}} = \\frac{1}{\\frac{3}{5}} = \\frac{5}{3}$$

---

**Step 4: Multiply by constant**

$$\\frac{3}{5} \\cdot \\frac{5}{3} = 1$$

---

**Answer**: The series converges to $1$.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Evaluate $\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n+1} - \\frac{1}{n+2}\\right)$ using telescoping.',
            solution: `**Step 1: Write out partial sum**

$$S_n = \\sum_{k=1}^{n} \\left(\\frac{1}{k+1} - \\frac{1}{k+2}\\right)$$

---

**Step 2: Expand terms**

$$S_n = \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{n+1} - \\frac{1}{n+2}\\right)$$

---

**Step 3: Look for cancellation**

Rearrange to see pattern:
$$S_n = \\frac{1}{2} - \\frac{1}{3} + \\frac{1}{3} - \\frac{1}{4} + \\frac{1}{4} - \\frac{1}{5} + \\cdots + \\frac{1}{n+1} - \\frac{1}{n+2}$$

Most terms cancel!

$$S_n = \\frac{1}{2} - \\frac{1}{n+2}$$

---

**Step 4: Take limit**

$$S = \\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} \\left(\\frac{1}{2} - \\frac{1}{n+2}\\right)$$

$$= \\frac{1}{2} - 0 = \\frac{1}{2}$$

---

**Answer**: The series converges to $\\frac{1}{2}$.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the difference between a sequence and a series?',
            back: 'A sequence $\\{a_n\\}$ is a list: $a_1, a_2, a_3, \\ldots$ A series $\\sum a_n$ is the SUM: $a_1 + a_2 + a_3 + \\cdots$. Series converges if sequence of partial sums $S_n = a_1 + \\cdots + a_n$ approaches a limit.',
            hint: 'Sequence: list, Series: sum',
          },
          {
            front: 'When does a geometric series converge and what is its sum?',
            back: '$\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}$ if and only if $|r| < 1$. If $|r| \\geq 1$, diverges. First term $a$, common ratio $r$. MOST IMPORTANT SERIES FORMULA! Watch starting index: if starts at $n=1$, first term is $ar$ not $a$.',
            hint: '|r| < 1, sum is a/(1-r)',
          },
          {
            front: 'What is the nth Term Test for Divergence?',
            back: 'If $\\lim_{n\\to\\infty} a_n \\neq 0$ (or limit doesn\'t exist), then $\\sum a_n$ DIVERGES. CONVERSE IS FALSE: $\\lim a_n = 0$ does NOT guarantee convergence (harmonic series is counterexample). Can only prove divergence, not convergence!',
            hint: 'Limit ≠ 0 → diverges, but limit = 0 proves nothing',
          },
          {
            front: 'What is a telescoping series and how do you evaluate it?',
            back: 'Series where consecutive terms cancel: $\\sum(b_n - b_{n+1})$. Partial sum: $S_n = b_1 - b_{n+1}$. Often use partial fractions to create telescoping form. Example: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Then most terms cancel when summed!',
            hint: 'Consecutive terms cancel, write out to see pattern',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 Sequences & Series (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  1. Introduction to Sequences')
  console.log('  2. Introduction to Infinite Series')
  console.log('\n∞ Sequences and series foundations complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
