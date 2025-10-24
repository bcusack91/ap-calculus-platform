import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Sequences & Series (BC) micro-lessons - Part 2...')

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
          'integral-test',
          'comparison-tests',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 3: Integral Test
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'integral-test',
      title: 'The Integral Test',
      description: 'Using integrals to test series convergence',
      order: 3,
      categoryId: sequencesSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 The Integral Test

## The Idea

If you can integrate a function $f(x)$, you can use the integral to test whether $\\sum f(n)$ converges!

> **💡 Key Idea**: Compare the series (sum of rectangles) to the integral (area under curve).

---

## Integral Test Theorem

Let $f(x)$ be a function that is:
1. **Continuous** for $x \\geq 1$
2. **Positive**: $f(x) > 0$
3. **Decreasing**: $f(x+1) < f(x)$

Then the series $\\sum_{n=1}^{\\infty} f(n)$ and the integral $\\int_1^{\\infty} f(x)\\,dx$:

**Both converge or both diverge together!**

---

## Visual Understanding

Imagine rectangles with:
- Width: 1
- Heights: $f(1), f(2), f(3), \\ldots$

The sum $\\sum f(n)$ is the total area of rectangles.

The integral $\\int f(x)\\,dx$ is the area under the curve.

Since $f$ is decreasing:
- Rectangles (left endpoints) > curve area
- Rectangles (right endpoints) < curve area

So: $\\int_1^{\\infty} f(x)\\,dx < \\sum_{n=1}^{\\infty} f(n) < f(1) + \\int_1^{\\infty} f(x)\\,dx$

---

## How to Use the Integral Test

**Step 1**: Verify $f(x)$ is continuous, positive, and decreasing for $x \\geq N$ (some starting point)

**Step 2**: Evaluate $\\int_N^{\\infty} f(x)\\,dx = \\lim_{b \\to \\infty} \\int_N^b f(x)\\,dx$

**Step 3**: 
- If integral converges (finite) → series converges
- If integral diverges (infinite) → series diverges

---

## Example 1: Harmonic Series

Test $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ using the Integral Test.

**Step 1: Check conditions**

Let $f(x) = \\frac{1}{x}$ for $x \\geq 1$.

✓ Continuous for $x \\geq 1$
✓ Positive: $\\frac{1}{x} > 0$ for $x > 0$
✓ Decreasing: $f'(x) = -\\frac{1}{x^2} < 0$

---

**Step 2: Evaluate improper integral**

$$\\int_1^{\\infty} \\frac{1}{x}\\,dx = \\lim_{b \\to \\infty} \\int_1^b \\frac{1}{x}\\,dx$$

$$= \\lim_{b \\to \\infty} [\\ln|x|]_1^b = \\lim_{b \\to \\infty} (\\ln b - \\ln 1)$$

$$= \\lim_{b \\to \\infty} \\ln b = \\infty$$

---

**Step 3: Conclusion**

The integral diverges, so by the Integral Test:

**The harmonic series $\\sum \\frac{1}{n}$ diverges!** ✓

---

## The p-Series

A **p-series** has the form:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$$

where $p$ is a constant.

---

## p-Series Convergence Test

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\begin{cases}
\\text{converges} & \\text{if } p > 1 \\\\
\\text{diverges} & \\text{if } p \\leq 1
\\end{cases}$$

> **🎯 MEMORIZE THIS!** Most commonly tested series!

---

## Proof Using Integral Test

**Case 1**: $p > 1$

$$\\int_1^{\\infty} \\frac{1}{x^p}\\,dx = \\lim_{b \\to \\infty} \\left[\\frac{x^{-p+1}}{-p+1}\\right]_1^b$$

$$= \\lim_{b \\to \\infty} \\left[\\frac{1}{(1-p)x^{p-1}}\\right]_1^b$$

$$= \\frac{1}{1-p}\\lim_{b \\to \\infty} \\left(\\frac{1}{b^{p-1}} - 1\\right)$$

Since $p > 1$, we have $p - 1 > 0$, so $\\frac{1}{b^{p-1}} \\to 0$.

$$= \\frac{1}{1-p}(0 - 1) = \\frac{1}{p-1}$$ (finite!)

**Converges when $p > 1$.**

---

**Case 2**: $p = 1$

This is the harmonic series (we showed it diverges).

---

**Case 3**: $p < 1$

$$\\int_1^{\\infty} \\frac{1}{x^p}\\,dx = \\lim_{b \\to \\infty} \\left[\\frac{x^{1-p}}{1-p}\\right]_1^b = \\infty$$

**Diverges when $p < 1$.**

---

## Example 2: Test $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$

This is a p-series with $p = 2 > 1$.

**By p-series test: converges!**

(Actually converges to $\\frac{\\pi^2}{6}$, discovered by Euler!)

---

## Example 3: Test $\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$

Rewrite: $\\sum \\frac{1}{n^{1/2}}$

This is a p-series with $p = \\frac{1}{2} < 1$.

**By p-series test: diverges!**

---

## Example 4: Use Integral Test

Test $\\sum_{n=1}^{\\infty} \\frac{n}{n^2 + 1}$ for convergence.

**Step 1: Check conditions**

$f(x) = \\frac{x}{x^2 + 1}$

✓ Continuous for $x \\geq 1$
✓ Positive for $x > 0$

Check decreasing: $f'(x) = \\frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \\frac{1-x^2}{(x^2+1)^2}$

For $x > 1$: $1 - x^2 < 0$, so $f'(x) < 0$ ✓

---

**Step 2: Evaluate integral**

$$\\int_1^{\\infty} \\frac{x}{x^2+1}\\,dx$$

**Use substitution**: $u = x^2 + 1$, $du = 2x\\,dx$

$$= \\frac{1}{2}\\int_2^{\\infty} \\frac{1}{u}\\,du = \\frac{1}{2}\\lim_{b \\to \\infty} [\\ln u]_2^b$$

$$= \\frac{1}{2}\\lim_{b \\to \\infty} (\\ln b - \\ln 2) = \\infty$$

---

**Step 3: Conclusion**

The integral diverges, so **the series diverges**.

---

## Example 5: Test $\\sum_{n=1}^{\\infty} \\frac{\\ln n}{n}$

**Step 1: Check conditions** (for $n \\geq 2$ to avoid $\\ln 1 = 0$)

$f(x) = \\frac{\\ln x}{x}$ for $x \\geq 2$

✓ Continuous
✓ Positive for $x > 1$

Check decreasing: Use quotient rule or note that for large $x$, denominator grows faster.

$f'(x) = \\frac{\\frac{1}{x} \\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}$

For $x > e \\approx 2.718$: $\\ln x > 1$, so $f'(x) < 0$ ✓

---

**Step 2: Evaluate integral**

$$\\int_2^{\\infty} \\frac{\\ln x}{x}\\,dx$$

**Use substitution**: $u = \\ln x$, $du = \\frac{1}{x}\\,dx$

When $x = 2$: $u = \\ln 2$
When $x \\to \\infty$: $u \\to \\infty$

$$= \\int_{\\ln 2}^{\\infty} u\\,du = \\lim_{b \\to \\infty} \\left[\\frac{u^2}{2}\\right]_{\\ln 2}^b = \\infty$$

---

**Step 3: Conclusion**

**The series diverges.**

---

## Important Notes About Integral Test

### Note 1: Value Not Equal

The Integral Test tells you about **convergence**, not the **value**!

$$\\sum_{n=1}^{\\infty} f(n) \\neq \\int_1^{\\infty} f(x)\\,dx$$

(They're close, but not equal)

---

### Note 2: Can Start Anywhere

You can start the series and integral at any point $N$:

$$\\sum_{n=N}^{\\infty} f(n) \\text{ and } \\int_N^{\\infty} f(x)\\,dx$$

Both converge or both diverge (though values differ).

---

### Note 3: Must Be Decreasing

If $f(x)$ is not eventually decreasing, can't use Integral Test!

**Example**: $f(x) = \\sin x$ oscillates, not decreasing.

---

### Note 4: Remainder Estimate

If the series converges, the **remainder** (error after $n$ terms) satisfies:

$$\\int_{n+1}^{\\infty} f(x)\\,dx < R_n < \\int_n^{\\infty} f(x)\\,dx$$

where $R_n = \\sum_{k=n+1}^{\\infty} f(k)$

---

## Example 6: Estimate Error

For $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$, estimate the error if we use the first 10 terms.

**Remainder is**:

$$R_{10} = \\sum_{n=11}^{\\infty} \\frac{1}{n^2}$$

---

**Upper bound**:

$$R_{10} < \\int_{10}^{\\infty} \\frac{1}{x^2}\\,dx = \\left[-\\frac{1}{x}\\right]_{10}^{\\infty} = 0 - \\left(-\\frac{1}{10}\\right) = \\frac{1}{10} = 0.1$$

**Lower bound**:

$$R_{10} > \\int_{11}^{\\infty} \\frac{1}{x^2}\\,dx = \\left[-\\frac{1}{x}\\right]_{11}^{\\infty} = \\frac{1}{11} \\approx 0.091$$

---

**Conclusion**: $0.091 < R_{10} < 0.1$

The error is less than 0.1!

---

## ⚠️ Common Mistakes

### Mistake 1: Using When Not Decreasing

**WRONG**: Apply Integral Test to $\\sum \\frac{\\sin n}{n}$

$f(x) = \\frac{\\sin x}{x}$ is not always decreasing (oscillates)!

---

### Mistake 2: Thinking Value Equals Integral

**WRONG**: $\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\int_1^{\\infty} \\frac{1}{x^2}\\,dx = 1$

**RIGHT**: The series converges (by Integral Test), but its value is $\\frac{\\pi^2}{6} \\approx 1.645$, not 1.

---

### Mistake 3: Forgetting p-Series Test

Don't do complicated integral when you can use p-series test directly!

For $\\sum \\frac{1}{n^p}$: just check if $p > 1$ (converges) or $p \\leq 1$ (diverges).

---

### Mistake 4: Wrong Limits

Make sure integral limits match series starting point!

If series starts at $n = 2$, use $\\int_2^{\\infty}$.

---

## 📝 Practice Strategy

1. **Check p-series first**: Is it $\\sum \\frac{1}{n^p}$? Use p-series test!
2. **Verify conditions**: continuous, positive, decreasing (check derivative)
3. **Integrate**: Use substitution, partial fractions, etc.
4. **Improper integral**: Always use limits, check if finite or infinite
5. **For estimates**: Use remainder bounds $\\int_{n+1}^{\\infty} < R_n < \\int_n^{\\infty}$
6. **Memorize p-series**: $p > 1$ converges, $p \\leq 1$ diverges
7. **When stuck**: Try to compare to p-series instead of integrating!
`,
      exampleProblems: {
        create: [
          {
            question: 'Use the Integral Test to determine if $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ converges or diverges.',
            solution: `**Step 1: Check conditions**

$f(x) = \\frac{1}{x \\ln x}$ for $x \\geq 2$

✓ Continuous for $x \\geq 2$ (since $\\ln x > 0$ for $x > 1$)
✓ Positive for $x > 1$

Check decreasing: As $x$ increases, both $x$ and $\\ln x$ increase, so $\\frac{1}{x \\ln x}$ decreases ✓

---

**Step 2: Evaluate integral**

$$\\int_2^{\\infty} \\frac{1}{x \\ln x}\\,dx$$

**Use substitution**: $u = \\ln x$, $du = \\frac{1}{x}\\,dx$

When $x = 2$: $u = \\ln 2$
When $x \\to \\infty$: $u \\to \\infty$

$$= \\int_{\\ln 2}^{\\infty} \\frac{1}{u}\\,du = \\lim_{b \\to \\infty} [\\ln|u|]_{\\ln 2}^b$$

$$= \\lim_{b \\to \\infty} (\\ln b - \\ln(\\ln 2)) = \\infty$$

---

**Step 3: Conclusion**

The integral diverges.

**By the Integral Test, the series diverges.**

---

**Note**: Even though terms go to 0 (slowly), they don't go to 0 fast enough!`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Determine if $\\sum_{n=1}^{\\infty} \\frac{2n + 1}{n^3}$ converges or diverges.',
            solution: `**Step 1: Split the series**

$$\\sum_{n=1}^{\\infty} \\frac{2n + 1}{n^3} = \\sum_{n=1}^{\\infty} \\frac{2n}{n^3} + \\sum_{n=1}^{\\infty} \\frac{1}{n^3}$$

$$= \\sum_{n=1}^{\\infty} \\frac{2}{n^2} + \\sum_{n=1}^{\\infty} \\frac{1}{n^3}$$

$$= 2\\sum_{n=1}^{\\infty} \\frac{1}{n^2} + \\sum_{n=1}^{\\infty} \\frac{1}{n^3}$$

---

**Step 2: Identify p-series**

$\\sum \\frac{1}{n^2}$: p-series with $p = 2 > 1$ → converges

$\\sum \\frac{1}{n^3}$: p-series with $p = 3 > 1$ → converges

---

**Step 3: Use series properties**

Sum of two convergent series converges.

**The series converges.**

---

**Alternative Method** (Integral Test):

Could also note that for large $n$: $\\frac{2n+1}{n^3} \\approx \\frac{2n}{n^3} = \\frac{2}{n^2}$

This behaves like $\\frac{1}{n^2}$ (p-series with $p = 2 > 1$), so converges.`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'Use the Integral Test to show that $\\sum_{n=1}^{\\infty} ne^{-n^2}$ converges.',
            solution: `**Step 1: Check conditions**

$f(x) = xe^{-x^2}$ for $x \\geq 1$

✓ Continuous for all $x$
✓ Positive for $x > 0$

Check decreasing: $f'(x) = e^{-x^2} + x \\cdot (-2x)e^{-x^2}$

$$= e^{-x^2}(1 - 2x^2)$$

For $x > \\frac{1}{\\sqrt{2}} \\approx 0.707$: $1 - 2x^2 < 0$, so $f'(x) < 0$ ✓

Decreasing for $x \\geq 1$ ✓

---

**Step 2: Evaluate integral**

$$\\int_1^{\\infty} xe^{-x^2}\\,dx$$

**Use substitution**: $u = -x^2$, $du = -2x\\,dx$

So $x\\,dx = -\\frac{1}{2}du$

When $x = 1$: $u = -1$
When $x \\to \\infty$: $u \\to -\\infty$

$$= \\int_{-1}^{-\\infty} -\\frac{1}{2}e^u\\,du = \\frac{1}{2}\\int_{-\\infty}^{-1} e^u\\,du$$

$$= \\frac{1}{2}\\lim_{a \\to -\\infty} [e^u]_a^{-1}$$

$$= \\frac{1}{2}(e^{-1} - 0) = \\frac{1}{2e}$$ (finite!)

---

**Step 3: Conclusion**

The integral converges to $\\frac{1}{2e}$.

**By the Integral Test, the series converges.**

---

**Note**: The series value is NOT $\\frac{1}{2e}$, but we know it converges!`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the Integral Test and when can you use it?',
            back: 'If $f(x)$ is continuous, positive, and decreasing for $x \\geq N$, then $\\sum_{n=N}^{\\infty} f(n)$ and $\\int_N^{\\infty} f(x)dx$ both converge or both diverge. Evaluate the integral: finite→converges, infinite→diverges. NOTE: Values are different, only convergence is same!',
            hint: 'Same convergence behavior as integral',
          },
          {
            front: 'What is the p-series test?',
            back: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ converges if $p > 1$ and diverges if $p \\leq 1$. Examples: $\\sum\\frac{1}{n^2}$ converges, $\\sum\\frac{1}{n}$ diverges, $\\sum\\frac{1}{\\sqrt{n}}$ diverges. Proven using Integral Test. MOST COMMONLY TESTED!',
            hint: 'p > 1 converges, p ≤ 1 diverges',
          },
          {
            front: 'How do you estimate the error/remainder using the Integral Test?',
            back: 'If $\\sum f(n)$ converges, the remainder after $n$ terms satisfies: $\\int_{n+1}^{\\infty} f(x)dx < R_n < \\int_n^{\\infty} f(x)dx$. Use these integrals to bound the error. Example: for $\\sum\\frac{1}{n^2}$, after 10 terms, $R_{10} < \\int_{10}^{\\infty}\\frac{1}{x^2}dx = 0.1$.',
            hint: 'Remainder bounded by integrals from n and n+1',
          },
          {
            front: 'Common mistakes with Integral Test?',
            back: '1) Using when not decreasing (must verify!). 2) Thinking sum equals integral (only convergence is same). 3) Forgetting to use p-series test for $\\frac{1}{n^p}$ (easier!). 4) Wrong integral limits (must match series start). 5) Not checking all three conditions (continuous, positive, decreasing).',
            hint: 'Must be decreasing, values not equal, use p-series when possible',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 4: Comparison Tests
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'comparison-tests',
      title: 'Direct and Limit Comparison Tests',
      description: 'Comparing series to determine convergence',
      order: 4,
      categoryId: sequencesSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Comparison Tests

## The Big Idea

If you can't evaluate $\\sum a_n$ directly, **compare it to a series you know**!

> **💡 Key Idea**: If $a_n$ is smaller than a convergent series, it converges. If $a_n$ is larger than a divergent series, it diverges.

---

## Direct Comparison Test (DCT)

Suppose $0 \\leq a_n \\leq b_n$ for all $n \\geq N$ (some starting point).

### Part 1: If $\\sum b_n$ converges, then $\\sum a_n$ converges.

**Reason**: $a_n$ is smaller than convergent series, so it must also converge.

> **"Smaller than convergent → convergent"**

---

### Part 2: If $\\sum a_n$ diverges, then $\\sum b_n$ diverges.

**Reason**: $b_n$ is larger than divergent series, so it must also diverge.

> **"Larger than divergent → divergent"**

---

## How to Use Direct Comparison Test

**Step 1**: Find a comparison series $\\sum b_n$ that you know converges or diverges
- Usually a **p-series** or **geometric series**!

**Step 2**: Show $0 \\leq a_n \\leq b_n$ (or $0 \\leq b_n \\leq a_n$)

**Step 3**: Apply the test

---

## Example 1: Use DCT

Determine if $\\sum_{n=1}^{\\infty} \\frac{1}{2^n + n}$ converges.

**Step 1: Find comparison**

For $n \\geq 1$: $2^n + n > 2^n$

So: $\\frac{1}{2^n + n} < \\frac{1}{2^n}$

Compare to $\\sum \\frac{1}{2^n}$ (geometric with $r = \\frac{1}{2}$).

---

**Step 2: Check comparison series**

$$\\sum_{n=1}^{\\infty} \\frac{1}{2^n} = \\frac{1/2}{1 - 1/2} = 1$$ (converges!)

---

**Step 3: Apply DCT**

Since $0 < \\frac{1}{2^n + n} < \\frac{1}{2^n}$ and $\\sum \\frac{1}{2^n}$ converges:

**By DCT, $\\sum \\frac{1}{2^n + n}$ converges.**

---

## Example 2: Use DCT to Show Divergence

Determine if $\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n} + 5}$ converges.

**Step 1: Find comparison**

For $n \\geq 1$: $\\sqrt{n} + 5 < \\sqrt{n} + 5\\sqrt{n} = 6\\sqrt{n}$ (not helpful)

Better: $\\sqrt{n} + 5 < \\sqrt{n} + \\sqrt{n} = 2\\sqrt{n}$ (only true for large $n$)

Actually, for large $n$: $\\sqrt{n} + 5 \\approx \\sqrt{n}$

So: $\\frac{1}{\\sqrt{n} + 5} \\approx \\frac{1}{\\sqrt{n}}$

But we need an inequality! Try:

For $n \\geq 1$: $\\sqrt{n} + 5 > \\sqrt{n}$

So: $\\frac{1}{\\sqrt{n} + 5} < \\frac{1}{\\sqrt{n}}$ (wrong direction for divergence!)

---

**Better approach**: $\\sqrt{n} + 5 < \\sqrt{n} + 5n$ (true for $n \\geq 1$... no)

Actually, for $n \\geq 25$: $\\sqrt{n} + 5 \\leq 2\\sqrt{n}$

So: $\\frac{1}{\\sqrt{n} + 5} \\geq \\frac{1}{2\\sqrt{n}}$

---

**Step 2: Check comparison series**

$$\\sum \\frac{1}{\\sqrt{n}} = \\sum \\frac{1}{n^{1/2}}$$ is a p-series with $p = \\frac{1}{2} < 1$ (diverges!)

So $\\sum \\frac{1}{2\\sqrt{n}} = \\frac{1}{2}\\sum \\frac{1}{\\sqrt{n}}$ also diverges.

---

**Step 3: Apply DCT**

Since $\\frac{1}{\\sqrt{n} + 5} \\geq \\frac{1}{2\\sqrt{n}}$ for $n \\geq 25$ and $\\sum \\frac{1}{2\\sqrt{n}}$ diverges:

**By DCT, $\\sum \\frac{1}{\\sqrt{n} + 5}$ diverges.**

---

## When DCT is Hard to Use

Sometimes it's hard to prove the inequality!

**Example**: Is $\\frac{n}{n^2 + 1}$ less than or greater than $\\frac{1}{n}$?

$$\\frac{n}{n^2 + 1} \\text{ vs } \\frac{1}{n}$$

Cross-multiply: $n^2$ vs $n^2 + 1$

So $\\frac{n}{n^2 + 1} < \\frac{1}{n}$ ✓

But if inequality is close or complicated, use **Limit Comparison Test** instead!

---

## Limit Comparison Test (LCT)

Let $a_n > 0$ and $b_n > 0$ for all $n$.

If: $$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L$$

where $L$ is finite and $L > 0$, then:

**$\\sum a_n$ and $\\sum b_n$ both converge or both diverge!**

> **💡 Key Idea**: If $\\frac{a_n}{b_n} \\to L > 0$, then $a_n$ and $b_n$ behave the same way!

---

## Special Cases of LCT

- If $L = 0$ and $\\sum b_n$ converges → $\\sum a_n$ converges
- If $L = \\infty$ and $\\sum b_n$ diverges → $\\sum a_n$ diverges
- If $L = 0$ and $\\sum b_n$ diverges → inconclusive
- If $L = \\infty$ and $\\sum b_n$ converges → inconclusive

**Best to aim for $0 < L < \\infty$!**

---

## How to Use Limit Comparison Test

**Step 1**: Choose a comparison series $\\sum b_n$ (usually p-series or geometric)

**Tip**: Look at the **dominant terms** (highest powers) in numerator and denominator.

**Step 2**: Compute $\\lim_{n \\to \\infty} \\frac{a_n}{b_n}$

**Step 3**: If $0 < L < \\infty$, both series have same convergence behavior

---

## Example 3: Use LCT

Determine if $\\sum_{n=1}^{\\infty} \\frac{3n^2 + 5}{n^4 - 2n + 1}$ converges.

**Step 1: Find dominant terms**

Numerator: $3n^2$ dominates
Denominator: $n^4$ dominates

So $a_n \\approx \\frac{3n^2}{n^4} = \\frac{3}{n^2}$

**Compare to $b_n = \\frac{1}{n^2}$** (p-series with $p = 2 > 1$, converges!)

---

**Step 2: Compute limit**

$$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\lim_{n \\to \\infty} \\frac{\\frac{3n^2 + 5}{n^4 - 2n + 1}}{\\frac{1}{n^2}}$$

$$= \\lim_{n \\to \\infty} \\frac{(3n^2 + 5)n^2}{n^4 - 2n + 1}$$

$$= \\lim_{n \\to \\infty} \\frac{3n^4 + 5n^2}{n^4 - 2n + 1}$$

Divide by $n^4$:

$$= \\lim_{n \\to \\infty} \\frac{3 + \\frac{5}{n^2}}{1 - \\frac{2}{n^3} + \\frac{1}{n^4}} = \\frac{3}{1} = 3$$

---

**Step 3: Apply LCT**

$L = 3$ (finite and positive), and $\\sum \\frac{1}{n^2}$ converges.

**By LCT, $\\sum \\frac{3n^2 + 5}{n^4 - 2n + 1}$ converges.**

---

## Example 4: Use LCT

Determine if $\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n} + 1}{n^2}$ converges.

**Step 1: Dominant terms**

Numerator: $\\sqrt{n} = n^{1/2}$
Denominator: $n^2$

So $a_n \\approx \\frac{n^{1/2}}{n^2} = \\frac{1}{n^{3/2}}$

**Compare to $b_n = \\frac{1}{n^{3/2}}$** (p-series with $p = \\frac{3}{2} > 1$, converges!)

---

**Step 2: Compute limit**

$$\\lim_{n \\to \\infty} \\frac{\\frac{\\sqrt{n} + 1}{n^2}}{\\frac{1}{n^{3/2}}} = \\lim_{n \\to \\infty} \\frac{(\\sqrt{n} + 1)n^{3/2}}{n^2}$$

$$= \\lim_{n \\to \\infty} \\frac{n^{1/2} \\cdot n^{3/2} + n^{3/2}}{n^2}$$

$$= \\lim_{n \\to \\infty} \\frac{n^2 + n^{3/2}}{n^2}$$

Divide by $n^2$:

$$= \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n^{1/2}}\\right) = 1 + 0 = 1$$

---

**Step 3: Apply LCT**

$L = 1 > 0$ and $\\sum \\frac{1}{n^{3/2}}$ converges.

**By LCT, the series converges.**

---

## Example 5: LCT for Divergence

Determine if $\\sum_{n=1}^{\\infty} \\frac{2n + \\sin n}{3n - 1}$ converges.

**Step 1: Dominant terms**

Numerator: $2n$ dominates (sin n is bounded)
Denominator: $3n$ dominates

So $a_n \\approx \\frac{2n}{3n} = \\frac{2}{3}$

This is like a constant series!

**Compare to $b_n = 1$** (or any constant)

---

**Actually better**: $a_n \\approx \\frac{2n}{3n} = \\frac{2}{3}$, compare to $b_n = \\frac{1}{n^0} = 1$

Wait, we need a series. Since $a_n$ stays around $\\frac{2}{3}$ (doesn't go to 0), use **nth term test**!

$$\\lim_{n \\to \\infty} \\frac{2n + \\sin n}{3n - 1} = \\lim_{n \\to \\infty} \\frac{2 + \\frac{\\sin n}{n}}{3 - \\frac{1}{n}} = \\frac{2}{3} \\neq 0$$

**By nth term test: diverges!**

---

## Choosing the Right Comparison

**For rational functions** (polynomials):
- Keep only highest power terms
- $\\frac{n^a}{n^b} = \\frac{1}{n^{b-a}}$ (compare to p-series with $p = b - a$)

---

**For exponentials**:
- $2^n, e^n$ grow much faster than polynomials
- Compare to geometric series

---

**For square roots and powers**:
- $\\sqrt{n} = n^{1/2}$
- $\\sqrt[3]{n} = n^{1/3}$
- Compare to appropriate p-series

---

## DCT vs LCT: Which to Use?

**Use DCT when**:
- Inequality is obvious
- You need rigorous proof

**Use LCT when**:
- Inequality is hard to prove
- You just need to check convergence
- Working with complicated expressions

> **💡 LCT is usually easier!** Most students prefer it.

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Comparison Direction

**WRONG**: "$a_n < b_n$ and $\\sum b_n$ diverges, so $\\sum a_n$ diverges"

**RIGHT**: Smaller than divergent tells you nothing! Need "larger than divergent" for divergence.

---

### Mistake 2: Limit is 0 or Infinity

If $\\lim \\frac{a_n}{b_n} = 0$ or $\\infty$, basic LCT is **inconclusive** (unless special cases apply).

Choose a different comparison series!

---

### Mistake 3: Negative Terms

Comparison tests require $a_n, b_n \\geq 0$!

For alternating or negative terms, use different tests.

---

### Mistake 4: Ignoring Smaller Terms

**WRONG**: "$\\frac{n^2 + 5n + 1}{n^3}$ is like $\\frac{n^2}{n^3}$... wait, what about the $5n$?"

**RIGHT**: For large $n$, lower powers don't matter! $n^2$ dominates $5n$ and $1$.

---

## 📝 Practice Strategy

1. **Always try nth term test first**: If $\\lim a_n \\neq 0$, diverges immediately!
2. **Find dominant terms**: Highest powers in numerator and denominator
3. **Choose comparison**: Usually p-series $\\sum \\frac{1}{n^p}$ or geometric $\\sum r^n$
4. **Prefer LCT**: Easier than proving inequalities
5. **For DCT**: Make sure inequality goes the right direction!
6. **Check your limit**: Should get finite positive number for LCT
7. **Memorize**: $\\sum \\frac{1}{n^p}$ converges if $p > 1$, diverges if $p \\leq 1$
`,
      exampleProblems: {
        create: [
          {
            question: 'Use the Limit Comparison Test to determine if $\\sum_{n=1}^{\\infty} \\frac{n^2 - 5}{n^4 + 3n^2 + 1}$ converges.',
            solution: `**Step 1: Find dominant terms**

Numerator: $n^2$ dominates
Denominator: $n^4$ dominates

So: $a_n \\approx \\frac{n^2}{n^4} = \\frac{1}{n^2}$

**Compare to $b_n = \\frac{1}{n^2}$** (p-series with $p = 2 > 1$, converges)

---

**Step 2: Compute limit**

$$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\lim_{n \\to \\infty} \\frac{\\frac{n^2-5}{n^4+3n^2+1}}{\\frac{1}{n^2}}$$

$$= \\lim_{n \\to \\infty} \\frac{(n^2-5) \\cdot n^2}{n^4+3n^2+1}$$

$$= \\lim_{n \\to \\infty} \\frac{n^4 - 5n^2}{n^4 + 3n^2 + 1}$$

Divide by $n^4$:

$$= \\lim_{n \\to \\infty} \\frac{1 - \\frac{5}{n^2}}{1 + \\frac{3}{n^2} + \\frac{1}{n^4}} = \\frac{1-0}{1+0+0} = 1$$

---

**Step 3: Apply LCT**

Since $L = 1 > 0$ and $\\sum \\frac{1}{n^2}$ converges:

**By LCT, the series converges.**`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Use the Direct Comparison Test to show that $\\sum_{n=1}^{\\infty} \\frac{2 + \\cos n}{n^3}$ converges.',
            solution: `**Step 1: Find bounds for numerator**

Since $-1 \\leq \\cos n \\leq 1$:

$$1 \\leq 2 + \\cos n \\leq 3$$

---

**Step 2: Create inequality**

$$0 < \\frac{2 + \\cos n}{n^3} \\leq \\frac{3}{n^3}$$

---

**Step 3: Check comparison series**

$$\\sum_{n=1}^{\\infty} \\frac{3}{n^3} = 3\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$$

This is a p-series with $p = 3 > 1$, so it **converges**.

---

**Step 4: Apply DCT**

Since $0 < \\frac{2+\\cos n}{n^3} \\leq \\frac{3}{n^3}$ and $\\sum \\frac{3}{n^3}$ converges:

**By Direct Comparison Test, the series converges.**`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'Determine if $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n - 1}$ converges or diverges.',
            solution: `**Step 1: Analyze for large n**

For large $n$: $n \\ln n - 1 \\approx n \\ln n$

So: $\\frac{1}{n \\ln n - 1} \\approx \\frac{1}{n \\ln n}$

**Compare to $b_n = \\frac{1}{n \\ln n}$**

---

**Step 2: What about $\\sum \\frac{1}{n \\ln n}$?**

From Integral Test (previous topic), we know:

$$\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n} \\text{ diverges}$$

(The integral $\\int \\frac{1}{x \\ln x}dx = \\ln|\\ln x| \\to \\infty$)

---

**Step 3: Use Limit Comparison Test**

$$\\lim_{n \\to \\infty} \\frac{\\frac{1}{n\\ln n - 1}}{\\frac{1}{n\\ln n}} = \\lim_{n \\to \\infty} \\frac{n \\ln n}{n \\ln n - 1}$$

Divide numerator and denominator by $n \\ln n$:

$$= \\lim_{n \\to \\infty} \\frac{1}{1 - \\frac{1}{n\\ln n}} = \\frac{1}{1-0} = 1$$

---

**Step 4: Apply LCT**

Since $L = 1 > 0$ and $\\sum \\frac{1}{n \\ln n}$ diverges:

**By LCT, the series diverges.**`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the Direct Comparison Test (DCT)?',
            back: 'If $0 \\leq a_n \\leq b_n$ for all $n$: (1) If $\\sum b_n$ converges → $\\sum a_n$ converges (smaller than convergent). (2) If $\\sum a_n$ diverges → $\\sum b_n$ diverges (larger than divergent). Must prove inequality! Compare to p-series or geometric.',
            hint: 'Smaller than convergent, larger than divergent',
          },
          {
            front: 'What is the Limit Comparison Test (LCT)?',
            back: 'If $a_n, b_n > 0$ and $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = L$ where $0 < L < \\infty$, then $\\sum a_n$ and $\\sum b_n$ both converge or both diverge. Easier than DCT (no inequality needed!). If $L=0$ or $L=\\infty$, may be inconclusive.',
            hint: 'Limit of ratio positive and finite → same behavior',
          },
          {
            front: 'How do you choose a comparison series?',
            back: 'Find dominant terms (highest powers). For $\\frac{n^a + ...}{n^b + ...}$, behaves like $\\frac{n^a}{n^b} = \\frac{1}{n^{b-a}}$ (compare to p-series with $p=b-a$). For exponentials: use geometric series. Ignore lower powers and constants for large $n$!',
            hint: 'Dominant terms: highest powers only',
          },
          {
            front: 'When should you use DCT vs LCT?',
            back: 'Use DCT when inequality is obvious/easy to prove. Use LCT when inequality is hard or expressions are complicated (MUCH EASIER usually!). LCT is preferred by most students. Both require $a_n, b_n \\geq 0$. Always try nth term test ($\\lim a_n \\neq 0$) first!',
            hint: 'LCT usually easier, no inequality needed',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Sequences & Series (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  3. The Integral Test')
  console.log('  4. Direct and Limit Comparison Tests')
  console.log('\n∞ Convergence tests Part 1 complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
