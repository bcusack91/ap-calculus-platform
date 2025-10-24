import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Sequences & Series (BC) micro-lessons - Part 3...')

  // Get the Sequences & Series category
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
          'alternating-series-test',
          'ratio-root-tests',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 5: Alternating Series Test
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'alternating-series-test',
      title: 'Alternating Series Test',
      description: 'Testing convergence of alternating series',
      order: 5,
      categoryId: sequencesSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Alternating Series Test

## What is an Alternating Series?

An **alternating series** has terms that alternate in sign:

$$\\sum_{n=1}^{\\infty} (-1)^n a_n \\quad \\text{or} \\quad \\sum_{n=1}^{\\infty} (-1)^{n+1} a_n$$

where $a_n > 0$.

**Examples**:
- $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\sum (-1)^{n+1} \\frac{1}{n}$ (alternating harmonic)
- $-1 + \\frac{1}{2} - \\frac{1}{3} + \\frac{1}{4} - \\cdots = \\sum (-1)^n \\frac{1}{n}$

> **💡 Key Idea**: Signs flip back and forth: positive, negative, positive, negative, ...

---

## Alternating Series Test (AST)

The series $\\sum (-1)^n a_n$ (or $\\sum (-1)^{n+1} a_n$) **converges** if:

1. $a_n > 0$ for all $n$ (terms are positive before adding the sign)
2. $a_n \\geq a_{n+1}$ for all $n \\geq N$ (eventually decreasing)
3. $\\lim_{n \\to \\infty} a_n = 0$ (terms approach 0)

> **🎯 Three conditions**: positive, decreasing, limit is 0

---

## Why It Works

The partial sums oscillate but get closer together:

$$S_1 = a_1$$
$$S_2 = a_1 - a_2$$
$$S_3 = a_1 - a_2 + a_3$$

Since $a_n$ is decreasing:
- Adding positive term moves right (but less each time)
- Subtracting negative term moves left (but less each time)

The partial sums converge to a limit!

---

## Example 1: Alternating Harmonic Series

Test $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$

**Check conditions**: Let $a_n = \\frac{1}{n}$

1. ✓ $a_n = \\frac{1}{n} > 0$ for all $n$

2. ✓ $a_n = \\frac{1}{n}$ is decreasing (since $\\frac{1}{n+1} < \\frac{1}{n}$)

3. ✓ $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$

---

**Conclusion**: By the Alternating Series Test, the series **converges**!

(Actually converges to $\\ln 2 \\approx 0.693$)

**Note**: The regular harmonic series $\\sum \\frac{1}{n}$ diverges, but the alternating version converges!

---

## Example 2: Use AST

Determine if $\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n^2 + 1}$ converges.

**Check conditions**: Let $a_n = \\frac{n}{n^2 + 1}$

1. ✓ $a_n > 0$ for all $n > 0$

---

2. **Check if decreasing**: Is $a_{n+1} \\leq a_n$?

$$a_{n+1} = \\frac{n+1}{(n+1)^2 + 1}$$

This is hard to compare directly. Try the derivative test:

Let $f(x) = \\frac{x}{x^2 + 1}$

$$f'(x) = \\frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}$$

For $x > 1$: $1 - x^2 < 0$, so $f'(x) < 0$

✓ $a_n$ is decreasing for $n \\geq 1$

---

3. **Check limit**:

$$\\lim_{n \\to \\infty} \\frac{n}{n^2 + 1} = \\lim_{n \\to \\infty} \\frac{1}{n + \\frac{1}{n}} = 0$$ ✓

---

**Conclusion**: All three conditions satisfied!

**By AST, the series converges.**

---

## Example 3: AST Fails

Does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n + 1}$ converge?

**Check conditions**: Let $a_n = \\frac{n}{n+1}$

1. ✓ $a_n > 0$

2. Let's assume it's eventually decreasing (we can verify)

3. **Check limit**:

$$\\lim_{n \\to \\infty} \\frac{n}{n+1} = \\lim_{n \\to \\infty} \\frac{1}{1 + \\frac{1}{n}} = 1 \\neq 0$$

---

**Condition 3 fails!**

Since $\\lim a_n \\neq 0$, we have $\\lim (-1)^n a_n \\neq 0$.

By the **nth Term Test**: the series **diverges**.

(Don't even need AST here - nth term test is quicker!)

---

## Absolute vs Conditional Convergence

A series $\\sum a_n$ is:

**Absolutely convergent** if $\\sum |a_n|$ converges

**Conditionally convergent** if $\\sum a_n$ converges but $\\sum |a_n|$ diverges

> **💡 Important**: Absolute convergence is stronger than regular convergence!

---

## Theorem: Absolute Convergence Implies Convergence

If $\\sum |a_n|$ converges, then $\\sum a_n$ converges.

**Contrapositive**: If $\\sum a_n$ diverges, then $\\sum |a_n|$ diverges.

---

## Example 4: Absolute vs Conditional

The alternating harmonic series $\\sum \\frac{(-1)^{n+1}}{n}$:

**Converges** (by AST)

But: $\\sum \\left|\\frac{(-1)^{n+1}}{n}\\right| = \\sum \\frac{1}{n}$ (harmonic series) **diverges**!

**This series is conditionally convergent** (converges, but not absolutely).

---

## Example 5: Absolutely Convergent

Does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}$ converge absolutely, conditionally, or diverge?

**Step 1: Test absolute convergence**

$$\\sum \\left|\\frac{(-1)^n}{n^2}\\right| = \\sum \\frac{1}{n^2}$$

This is a p-series with $p = 2 > 1$, so it **converges**!

---

**Conclusion**: Since $\\sum |a_n|$ converges, the series is **absolutely convergent**.

(It's also convergent, since absolute convergence implies convergence)

---

## Alternating Series Estimation Theorem

If $\\sum (-1)^n a_n$ converges by AST, and $S$ is the sum, then:

**The error after $n$ terms satisfies**:

$$|R_n| = |S - S_n| \\leq a_{n+1}$$

> **💡 Key Idea**: Error is at most the first omitted term!

**Also**: The true sum is between $S_n$ and $S_{n+1}$ (partial sums bracket the answer).

---

## Example 6: Estimate Error

For $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$, estimate the error if we use the first 10 terms.

**The error is**:

$$|R_{10}| \\leq a_{11} = \\frac{1}{11} \\approx 0.091$$

**So the sum is within 0.091 of** $S_{10} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\cdots + \\frac{1}{10}$.

---

## Example 7: How Many Terms?

For $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}$, how many terms are needed for error less than 0.01?

**Need**: $a_{n+1} < 0.01$

$$\\frac{1}{(n+1)^2} < 0.01 = \\frac{1}{100}$$

$$(n+1)^2 > 100$$

$$n+1 > 10$$

$$n \\geq 10$$

**Need at least 10 terms.**

---

## Strategy for Alternating Series

**Step 1**: Recognize it's alternating (look for $(-1)^n$ or $(-1)^{n+1}$)

**Step 2**: Apply AST (check three conditions)

**Step 3**: If AST works, test for absolute convergence:
- Check if $\\sum |a_n|$ converges (using p-series, comparison, etc.)
- If yes: absolutely convergent
- If no: conditionally convergent

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting to Check Decreasing

**WRONG**: "Since $\\lim a_n = 0$, AST says it converges"

**RIGHT**: Must check ALL three conditions! Decreasing is crucial.

**Counterexample**: $a_n = \\begin{cases} \\frac{1}{n} & n \\text{ odd} \\\\ \\frac{1}{n^2} & n \\text{ even} \\end{cases}$

Limit is 0, but not decreasing!

---

### Mistake 2: Testing Wrong Series for Absolute Convergence

**WRONG**: Test $\\sum (-1)^n a_n$ for absolute convergence

**RIGHT**: Test $\\sum |(-1)^n a_n| = \\sum a_n$ (drop the $(-1)^n$!)

---

### Mistake 3: Using AST on Non-Alternating Series

AST only works for series that alternate signs!

Can't use it on $\\sum \\frac{1}{n}$ (all positive).

---

### Mistake 4: Confusing Conditional and Absolute

**Conditionally convergent**: Converges, but not absolutely (more fragile)

**Absolutely convergent**: Both $\\sum a_n$ and $\\sum |a_n|$ converge (stronger!)

If absolutely convergent, then also convergent (but not vice versa).

---

## Summary Table

| Series | Converges? | $\\sum |a_n|$ Converges? | Type |
|--------|------------|------------------------|------|
| $\\sum \\frac{(-1)^n}{n}$ | Yes (AST) | No (harmonic) | Conditional |
| $\\sum \\frac{(-1)^n}{n^2}$ | Yes (AST) | Yes (p-series) | Absolute |
| $\\sum \\frac{(-1)^n n}{n+1}$ | No (nth term) | No | Divergent |

---

## 📝 Practice Strategy

1. **Look for $(-1)^n$ pattern** - signals alternating series
2. **Check nth term test first**: If $\\lim a_n \\neq 0$, diverges immediately!
3. **Apply AST**: Check positive, decreasing (use derivative!), limit is 0
4. **For decreasing**: Can use $f'(x) < 0$ or direct comparison
5. **Test absolute convergence**: Drop the $(-1)^n$, test $\\sum a_n$
6. **For error estimates**: Use $|R_n| \\leq a_{n+1}$
7. **Memorize**: Absolute convergence → convergence (but not reverse!)
`,
      exampleProblems: {
        create: [
          {
            question: 'Determine if $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^{1/3}}$ converges absolutely, conditionally, or diverges.',
            solution: `**Step 1: Test for convergence using AST**

Let $a_n = \\frac{1}{n^{1/3}}$

1. ✓ $a_n > 0$ for all $n$

2. ✓ $a_n = \\frac{1}{n^{1/3}}$ is decreasing (larger denominator → smaller value)

3. ✓ $\\lim_{n \\to \\infty} \\frac{1}{n^{1/3}} = 0$

**By AST, the series converges.**

---

**Step 2: Test for absolute convergence**

$$\\sum \\left|\\frac{(-1)^n}{n^{1/3}}\\right| = \\sum \\frac{1}{n^{1/3}}$$

This is a p-series with $p = \\frac{1}{3} < 1$.

**By p-series test: diverges!**

---

**Step 3: Conclusion**

The series converges (by AST) but $\\sum |a_n|$ diverges.

**The series is conditionally convergent.**`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'For $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{3^n}$, determine convergence type and estimate error using 5 terms.',
            solution: `**Step 1: Test for absolute convergence**

$$\\sum \\left|\\frac{(-1)^{n+1}}{3^n}\\right| = \\sum \\frac{1}{3^n}$$

This is geometric with $r = \\frac{1}{3} < 1$.

**Converges!** (Sum is $\\frac{1/3}{1-1/3} = \\frac{1}{2}$)

---

**Step 2: Conclusion on convergence**

Since $\\sum |a_n|$ converges:

**The series is absolutely convergent** (and therefore convergent).

---

**Step 3: Estimate error using 5 terms**

By Alternating Series Estimation Theorem:

$$|R_5| \\leq a_6 = \\frac{1}{3^6} = \\frac{1}{729} \\approx 0.00137$$

**The error using 5 terms is at most 0.00137.**

---

**Step 4: Calculate $S_5$ (optional)**

$$S_5 = \\frac{1}{3} - \\frac{1}{9} + \\frac{1}{27} - \\frac{1}{81} + \\frac{1}{243}$$

$$= \\frac{81 - 27 + 9 - 3 + 1}{243} = \\frac{61}{243} \\approx 0.251$$

The true sum is approximately $0.251 \\pm 0.00137$.`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'Show that $\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{\\ln n}$ converges and determine if it converges absolutely.',
            solution: `**Step 1: Apply Alternating Series Test**

Let $a_n = \\frac{1}{\\ln n}$ for $n \\geq 2$

1. ✓ $a_n = \\frac{1}{\\ln n} > 0$ for $n \\geq 2$ (since $\\ln n > 0$ for $n > 1$)

---

2. **Check if decreasing**: As $n$ increases, $\\ln n$ increases, so $\\frac{1}{\\ln n}$ decreases ✓

Or use derivative: $f(x) = \\frac{1}{\\ln x}$

$$f'(x) = -\\frac{1}{x(\\ln x)^2} < 0$$ for $x > 1$ ✓

---

3. **Check limit**:

$$\\lim_{n \\to \\infty} \\frac{1}{\\ln n} = 0$$ ✓

(Since $\\ln n \\to \\infty$)

---

**By AST, the series converges.**

---

**Step 2: Test for absolute convergence**

$$\\sum_{n=2}^{\\infty} \\left|\\frac{(-1)^n}{\\ln n}\\right| = \\sum_{n=2}^{\\infty} \\frac{1}{\\ln n}$$

Compare to $\\sum \\frac{1}{n}$ using Limit Comparison Test:

$$\\lim_{n \\to \\infty} \\frac{\\frac{1}{\\ln n}}{\\frac{1}{n}} = \\lim_{n \\to \\infty} \\frac{n}{\\ln n}$$

This is $\\frac{\\infty}{\\infty}$ form. Use L'Hôpital's:

$$= \\lim_{n \\to \\infty} \\frac{1}{1/n} = \\lim_{n \\to \\infty} n = \\infty$$

Since the limit is $\\infty$ and $\\sum \\frac{1}{n}$ diverges, $\\sum \\frac{1}{\\ln n}$ **diverges**.

---

**Step 3: Conclusion**

The series converges (by AST) but does not converge absolutely.

**The series is conditionally convergent.**`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the Alternating Series Test (AST)?',
            back: '$\\sum (-1)^n a_n$ converges if: (1) $a_n > 0$, (2) $a_n$ eventually decreasing, (3) $\\lim a_n = 0$. Check decreasing using derivative or direct comparison. Example: $\\sum\\frac{(-1)^n}{n}$ converges (alternating harmonic), but $\\sum\\frac{1}{n}$ diverges!',
            hint: 'Positive, decreasing, limit zero',
          },
          {
            front: 'What is absolute vs conditional convergence?',
            back: 'Absolutely convergent: Both $\\sum a_n$ and $\\sum |a_n|$ converge (strongest). Conditionally convergent: $\\sum a_n$ converges but $\\sum |a_n|$ diverges (weaker). Absolute → convergent (but not reverse). Example: $\\sum\\frac{(-1)^n}{n}$ is conditional, $\\sum\\frac{(-1)^n}{n^2}$ is absolute.',
            hint: 'Absolute: both converge, Conditional: only with signs',
          },
          {
            front: 'What is the Alternating Series Estimation Theorem?',
            back: 'If $\\sum (-1)^n a_n$ converges by AST with sum $S$, then error after $n$ terms: $|R_n| = |S - S_n| \\leq a_{n+1}$. Error is at most the first omitted term! Also: $S$ is between $S_n$ and $S_{n+1}$. Use to find how many terms needed for desired accuracy.',
            hint: 'Error ≤ first omitted term',
          },
          {
            front: 'Common mistakes with alternating series?',
            back: '1) Forgetting to check decreasing (all 3 conditions needed!). 2) Testing wrong series for absolute ($\\sum a_n$ not $\\sum (-1)^n a_n$). 3) Using AST on non-alternating series. 4) Confusing conditional/absolute. Always check nth term test first if $\\lim a_n \\neq 0$!',
            hint: 'Check all 3 conditions, drop (-1)^n for absolute test',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 6: Ratio and Root Tests
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'ratio-root-tests',
      title: 'Ratio and Root Tests',
      description: 'Testing convergence with ratios and roots',
      order: 6,
      categoryId: sequencesSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Ratio and Root Tests

## The Ratio Test

The **Ratio Test** is especially useful for series with **factorials** or **exponentials**!

Given $\\sum a_n$ with $a_n > 0$, compute:

$$L = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n}$$

Then:
- If $L < 1$: series **converges absolutely**
- If $L > 1$ (or $L = \\infty$): series **diverges**
- If $L = 1$: **inconclusive** (test tells you nothing!)

> **💡 Key Idea**: Compare each term to the previous one. If ratio approaches something less than 1, terms shrink fast enough!

---

## Why It Works

If $\\frac{a_{n+1}}{a_n} \\to r < 1$, then eventually:

$$a_{n+1} \\approx r \\cdot a_n$$

This behaves like a geometric series with ratio $r$!

Geometric series with $|r| < 1$ converge.

---

## Example 1: Factorial Series

Test $\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}$ for convergence.

**Step 1: Set up ratio**

$$a_n = \\frac{n!}{3^n}, \\quad a_{n+1} = \\frac{(n+1)!}{3^{n+1}}$$

---

**Step 2: Compute $\\frac{a_{n+1}}{a_n}$**

$$\\frac{a_{n+1}}{a_n} = \\frac{\\frac{(n+1)!}{3^{n+1}}}{\\frac{n!}{3^n}}$$

$$= \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!}$$

$$= \\frac{(n+1)!}{n!} \\cdot \\frac{3^n}{3^{n+1}}$$

$$= (n+1) \\cdot \\frac{1}{3} = \\frac{n+1}{3}$$

---

**Step 3: Take limit**

$$L = \\lim_{n \\to \\infty} \\frac{n+1}{3} = \\infty$$

---

**Step 4: Conclusion**

Since $L = \\infty > 1$:

**By Ratio Test, the series diverges.**

(Factorials grow faster than exponentials!)

---

## Example 2: Exponential Series

Test $\\sum_{n=0}^{\\infty} \\frac{2^n}{n!}$ for convergence.

**Step 1: Set up**

$$a_n = \\frac{2^n}{n!}, \\quad a_{n+1} = \\frac{2^{n+1}}{(n+1)!}$$

---

**Step 2: Compute ratio**

$$\\frac{a_{n+1}}{a_n} = \\frac{\\frac{2^{n+1}}{(n+1)!}}{\\frac{2^n}{n!}}$$

$$= \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n}$$

$$= \\frac{2^{n+1}}{2^n} \\cdot \\frac{n!}{(n+1)!}$$

$$= 2 \\cdot \\frac{1}{n+1} = \\frac{2}{n+1}$$

---

**Step 3: Take limit**

$$L = \\lim_{n \\to \\infty} \\frac{2}{n+1} = 0$$

---

**Step 4: Conclusion**

Since $L = 0 < 1$:

**By Ratio Test, the series converges absolutely.**

(This is actually the Taylor series for $e^2$!)

---

## Example 3: When Ratio Test Fails

Test $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ using Ratio Test.

**Compute ratio**:

$$\\frac{a_{n+1}}{a_n} = \\frac{\\frac{1}{(n+1)^2}}{\\frac{1}{n^2}} = \\frac{n^2}{(n+1)^2}$$

$$= \\left(\\frac{n}{n+1}\\right)^2 = \\left(\\frac{1}{1+\\frac{1}{n}}\\right)^2$$

---

**Take limit**:

$$L = \\lim_{n \\to \\infty} \\left(\\frac{1}{1+\\frac{1}{n}}\\right)^2 = 1$$

---

**Conclusion**: $L = 1$, so Ratio Test is **inconclusive**!

(But we know from p-series test that this converges.)

> **⚠️ When $L = 1$, use a different test!**

---

## Ratio Test for Series with Powers

For $\\sum a_n x^n$ (power series), the Ratio Test finds the **radius of convergence**!

We'll cover this more in the Power Series topic.

---

## The Root Test

Given $\\sum a_n$ with $a_n \\geq 0$, compute:

$$L = \\lim_{n \\to \\infty} \\sqrt[n]{a_n} = \\lim_{n \\to \\infty} (a_n)^{1/n}$$

Then:
- If $L < 1$: series **converges absolutely**
- If $L > 1$ (or $L = \\infty$): series **diverges**
- If $L = 1$: **inconclusive**

---

## When to Use Root Test

**Best for series with $n$th powers**:
- $(\\text{something})^n$
- Terms like $\\left(\\frac{2n+1}{3n-2}\\right)^n$

---

## Example 4: Use Root Test

Test $\\sum_{n=1}^{\\infty} \\left(\\frac{2n}{3n+1}\\right)^n$ for convergence.

**Step 1: Compute $\\sqrt[n]{a_n}$**

$$a_n = \\left(\\frac{2n}{3n+1}\\right)^n$$

$$\\sqrt[n]{a_n} = \\left[\\left(\\frac{2n}{3n+1}\\right)^n\\right]^{1/n} = \\frac{2n}{3n+1}$$

---

**Step 2: Take limit**

$$L = \\lim_{n \\to \\infty} \\frac{2n}{3n+1} = \\lim_{n \\to \\infty} \\frac{2}{3 + \\frac{1}{n}} = \\frac{2}{3}$$

---

**Step 3: Conclusion**

Since $L = \\frac{2}{3} < 1$:

**By Root Test, the series converges absolutely.**

---

## Example 5: Root Test with Exponentials

Test $\\sum_{n=1}^{\\infty} \\frac{n^n}{3^{n^2}}$ for convergence.

**Step 1: Compute $\\sqrt[n]{a_n}$**

$$a_n = \\frac{n^n}{3^{n^2}}$$

$$\\sqrt[n]{a_n} = \\left(\\frac{n^n}{3^{n^2}}\\right)^{1/n} = \\frac{n}{3^n}$$

---

**Step 2: Take limit**

$$L = \\lim_{n \\to \\infty} \\frac{n}{3^n}$$

This is $\\frac{\\infty}{\\infty}$ form. Use L'Hôpital's Rule:

$$= \\lim_{n \\to \\infty} \\frac{1}{3^n \\ln 3} = 0$$

(Exponentials grow much faster than polynomials!)

---

**Step 3: Conclusion**

Since $L = 0 < 1$:

**By Root Test, the series converges absolutely.**

---

## Ratio Test vs Root Test

**Ratio Test**:
- Best for factorials: $n!$, $(2n)!$
- Best for products: $n \\cdot 2^n$
- Generally easier to compute

**Root Test**:
- Best for $n$th powers: $(\\text{stuff})^n$
- Best when taking $n$th root simplifies nicely
- Less commonly used

> **💡 If both apply, use Ratio Test** (usually easier)!

---

## Important Limits for These Tests

Useful limits to know:

$$\\lim_{n \\to \\infty} \\frac{n!}{n^n} = 0$$

$$\\lim_{n \\to \\infty} \\frac{n^k}{a^n} = 0$$ (for any $k$ and $a > 1$)

$$\\lim_{n \\to \\infty} n^{1/n} = 1$$

$$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$

---

## Example 6: Ratio Test with Powers

Test $\\sum_{n=1}^{\\infty} \\frac{5^n n^2}{n!}$ for convergence.

**Compute ratio**:

$$\\frac{a_{n+1}}{a_n} = \\frac{\\frac{5^{n+1}(n+1)^2}{(n+1)!}}{\\frac{5^n n^2}{n!}}$$

$$= \\frac{5^{n+1}(n+1)^2}{(n+1)!} \\cdot \\frac{n!}{5^n n^2}$$

$$= 5 \\cdot \\frac{(n+1)^2}{n^2} \\cdot \\frac{n!}{(n+1)!}$$

$$= 5 \\cdot \\frac{(n+1)^2}{n^2} \\cdot \\frac{1}{n+1}$$

$$= 5 \\cdot \\frac{n+1}{n^2}$$

Wait, let me recalculate:

$$= 5 \\cdot \\left(\\frac{n+1}{n}\\right)^2 \\cdot \\frac{1}{n+1} = \\frac{5(n+1)}{n^2}$$

Hmm, that's not right either. Let me be more careful:

$$\\frac{(n+1)^2 n!}{n^2 (n+1)!} = \\frac{(n+1)^2}{n^2} \\cdot \\frac{1}{n+1} = \\frac{n+1}{n^2}$$

So:
$$\\frac{a_{n+1}}{a_n} = 5 \\cdot \\frac{n+1}{n^2}$$

Actually, let me recalculate more carefully:

$$\\frac{(n+1)!}{n!} = n+1$$

So:
$$\\frac{n!}{(n+1)!} = \\frac{1}{n+1}$$

$$\\frac{a_{n+1}}{a_n} = 5 \\cdot \\frac{(n+1)^2}{n^2(n+1)} = 5 \\cdot \\frac{n+1}{n^2}$$

Taking limit: This goes to 0.

Actually, let me redo this completely:

$$\\frac{a_{n+1}}{a_n} = \\frac{5 \\cdot (n+1)^2 \\cdot n!}{(n+1)! \\cdot n^2 \\cdot 1} = \\frac{5(n+1)^2 n!}{(n+1) \\cdot n! \\cdot n^2} = \\frac{5(n+1)}{n^2}$$

$$L = \\lim_{n \\to \\infty} \\frac{5(n+1)}{n^2} = \\lim_{n \\to \\infty} \\frac{5n}{n^2} = \\lim_{n \\to \\infty} \\frac{5}{n} = 0$$

**Since $L = 0 < 1$, the series converges absolutely.**

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Ratio Direction

**WRONG**: $\\frac{a_n}{a_{n+1}}$ (backwards!)

**RIGHT**: $\\frac{a_{n+1}}{a_n}$ (next term over current term)

---

### Mistake 2: Simplifying Factorials Wrong

$(n+1)! = (n+1) \\cdot n!$, NOT $n! + 1$

$$\\frac{(n+1)!}{n!} = n+1$$

---

### Mistake 3: Thinking $L=1$ Means Diverges

When $L = 1$, the test is **inconclusive**!

Could converge or diverge - need a different test.

---

### Mistake 4: Forgetting Absolute Value for Negative Terms

Ratio and Root Tests test for **absolute convergence**.

If series has negative terms, these tests tell you about $\\sum |a_n|$.

---

## 📝 Practice Strategy

1. **Look for factorials**: $n!$, $(2n)!$ → use Ratio Test
2. **Look for $n$th powers**: $(\\text{stuff})^n$ → consider Root Test
3. **Simplify ratio carefully**: Cancel common factors, watch factorials
4. **Remember**: $L < 1$ converges, $L > 1$ diverges, $L = 1$ inconclusive
5. **When $L = 1$**: Try comparison test, integral test, or p-series
6. **For limits**: Use L'Hôpital's if needed, remember $\\frac{n^k}{a^n} \\to 0$
7. **Check your algebra**: Factorial mistakes are very common!
`,
      exampleProblems: {
        create: [
          {
            question: 'Use the Ratio Test to determine if $\\sum_{n=1}^{\\infty} \\frac{(2n)!}{(n!)^2}$ converges.',
            solution: `**Step 1: Set up the ratio**

$$a_n = \\frac{(2n)!}{(n!)^2}, \\quad a_{n+1} = \\frac{(2(n+1))!}{((n+1)!)^2} = \\frac{(2n+2)!}{((n+1)!)^2}$$

---

**Step 2: Compute $\\frac{a_{n+1}}{a_n}$**

$$\\frac{a_{n+1}}{a_n} = \\frac{(2n+2)!}{((n+1)!)^2} \\cdot \\frac{(n!)^2}{(2n)!}$$

$$= \\frac{(2n+2)!}{(2n)!} \\cdot \\frac{(n!)^2}{((n+1)!)^2}$$

---

**Step 3: Simplify factorials**

$$(2n+2)! = (2n+2)(2n+1)(2n)!$$

$$(n+1)! = (n+1) \\cdot n!$$

So:
$$\\frac{(2n+2)!}{(2n)!} = (2n+2)(2n+1)$$

$$\\frac{(n!)^2}{((n+1)!)^2} = \\left(\\frac{n!}{(n+1)!}\\right)^2 = \\frac{1}{(n+1)^2}$$

---

**Step 4: Combine**

$$\\frac{a_{n+1}}{a_n} = (2n+2)(2n+1) \\cdot \\frac{1}{(n+1)^2}$$

$$= \\frac{2(n+1)(2n+1)}{(n+1)^2} = \\frac{2(2n+1)}{n+1}$$

$$= \\frac{4n + 2}{n+1}$$

---

**Step 5: Take limit**

$$L = \\lim_{n \\to \\infty} \\frac{4n+2}{n+1} = \\lim_{n \\to \\infty} \\frac{4 + \\frac{2}{n}}{1 + \\frac{1}{n}} = \\frac{4}{1} = 4$$

---

**Step 6: Conclusion**

Since $L = 4 > 1$:

**By the Ratio Test, the series diverges.**`,
            difficulty: Difficulty.HARD,
            order: 1,
          },
          {
            question: 'Determine if $\\sum_{n=1}^{\\infty} \\frac{n^n}{n! \\cdot 3^n}$ converges using the Ratio Test.',
            solution: `**Step 1: Set up**

$$a_n = \\frac{n^n}{n! \\cdot 3^n}, \\quad a_{n+1} = \\frac{(n+1)^{n+1}}{(n+1)! \\cdot 3^{n+1}}$$

---

**Step 2: Compute ratio**

$$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^{n+1}}{(n+1)! \\cdot 3^{n+1}} \\cdot \\frac{n! \\cdot 3^n}{n^n}$$

$$= \\frac{(n+1)^{n+1}}{n^n} \\cdot \\frac{n!}{(n+1)!} \\cdot \\frac{3^n}{3^{n+1}}$$

$$= \\frac{(n+1)^{n+1}}{n^n} \\cdot \\frac{1}{n+1} \\cdot \\frac{1}{3}$$

$$= \\frac{(n+1)^n}{n^n} \\cdot \\frac{1}{3}$$

$$= \\frac{1}{3}\\left(\\frac{n+1}{n}\\right)^n = \\frac{1}{3}\\left(1 + \\frac{1}{n}\\right)^n$$

---

**Step 3: Take limit**

$$L = \\lim_{n \\to \\infty} \\frac{1}{3}\\left(1 + \\frac{1}{n}\\right)^n$$

We know: $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$

$$L = \\frac{e}{3} \\approx \\frac{2.718}{3} \\approx 0.906$$

---

**Step 4: Conclusion**

Since $L = \\frac{e}{3} < 1$:

**By the Ratio Test, the series converges absolutely.**`,
            difficulty: Difficulty.EXPERT,
            order: 2,
          },
          {
            question: 'Use the Root Test to determine if $\\sum_{n=1}^{\\infty} \\left(\\frac{n^2}{e^n}\\right)^n$ converges.',
            solution: `**Step 1: Compute $\\sqrt[n]{a_n}$**

$$a_n = \\left(\\frac{n^2}{e^n}\\right)^n$$

$$\\sqrt[n]{a_n} = \\left[\\left(\\frac{n^2}{e^n}\\right)^n\\right]^{1/n} = \\frac{n^2}{e^n}$$

---

**Step 2: Take limit**

$$L = \\lim_{n \\to \\infty} \\frac{n^2}{e^n}$$

This is $\\frac{\\infty}{\\infty}$ form. Use L'Hôpital's Rule (twice):

$$= \\lim_{n \\to \\infty} \\frac{2n}{e^n}$$ (still $\\frac{\\infty}{\\infty}$)

$$= \\lim_{n \\to \\infty} \\frac{2}{e^n} = 0$$

---

**Step 3: Conclusion**

Since $L = 0 < 1$:

**By the Root Test, the series converges absolutely.**

---

**Note**: Exponentials always dominate polynomials!`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the Ratio Test and when should you use it?',
            back: 'For $\\sum a_n$, compute $L = \\lim\\frac{a_{n+1}}{a_n}$. If $L < 1$: converges absolutely. If $L > 1$: diverges. If $L = 1$: inconclusive. BEST FOR: factorials ($n!$) and products ($n \\cdot 2^n$). Watch direction: next over current!',
            hint: 'Limit of ratio: <1 converges, >1 diverges, =1 inconclusive',
          },
          {
            front: 'What is the Root Test and when should you use it?',
            back: 'For $\\sum a_n$, compute $L = \\lim\\sqrt[n]{a_n} = \\lim(a_n)^{1/n}$. If $L < 1$: converges absolutely. If $L > 1$: diverges. If $L = 1$: inconclusive. BEST FOR: nth powers like $(stuff)^n$. Less common than Ratio Test.',
            hint: 'Limit of nth root: <1 converges, >1 diverges',
          },
          {
            front: 'How do you simplify factorial ratios?',
            back: '$(n+1)! = (n+1) \\cdot n!$, so $\\frac{(n+1)!}{n!} = n+1$ and $\\frac{n!}{(n+1)!} = \\frac{1}{n+1}$. For double factorials: $(2n+2)! = (2n+2)(2n+1)(2n)!$. Cancel carefully! Common mistakes: $(n+1)! \\neq n! + 1$.',
            hint: '(n+1)! = (n+1)·n!, simplify by canceling',
          },
          {
            front: 'Common mistakes with Ratio and Root Tests?',
            back: '1) Wrong direction: use $\\frac{a_{n+1}}{a_n}$ not $\\frac{a_n}{a_{n+1}}$. 2) Factorial errors: $(n+1)! = (n+1)n!$. 3) When $L=1$: inconclusive, NOT diverges! 4) These test absolute convergence only. 5) Forgetting useful limits: $(1+\\frac{1}{n})^n \\to e$, $\\frac{n^k}{a^n} \\to 0$.',
            hint: 'Right direction, L=1 inconclusive, factorial careful',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Sequences & Series (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  5. Alternating Series Test')
  console.log('  6. Ratio and Root Tests')
  console.log('\n∞ Convergence tests Part 2 complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
