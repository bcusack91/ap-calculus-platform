import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Arithmetic & Geometric Series (Algebra 2).
 * Registry key: 'series-summation-algebra2' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 *
 * Scope (series = the SUM of a sequence, distinct from the sibling "sequences"
 * lesson which covers the terms themselves):
 *   P1 — Series vs. sequence + sigma (summation) notation
 *   P2 — Arithmetic series: the partial-sum formula
 *   P3 — Finite geometric series: the closed-form sum
 *   P4 — Infinite geometric series: convergence and the sum to infinity
 *   P5 — Mixed mastery + exit quiz
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'series-summation-algebra2',
    sections: [
      {
        id: 'ser1-intro',
        type: 'text' as const,
        content: `# ➕ Arithmetic & Geometric Series

**Part 1 of 5 — From Sequences to Series & Sigma Notation**

---

### Topics in This Part

| Section |
|---------|
| Sequence vs. Series |
| Sigma (Summation) Notation |
| Expanding and Evaluating a Sum |

> 🔑 **Key Concept:** A **sequence** is an ordered *list* of numbers. A **series** is what you get when you *add* the terms of a sequence. This lesson is about adding them up — quickly, with formulas, instead of one term at a time.`,
      },
      {
        id: 'ser1-seq-vs-series',
        type: 'text' as const,
        content: `## Sequence vs. Series

Start with the sequence $3,\\ 7,\\ 11,\\ 15,\\ 19$.

- As a **sequence**, we just list the terms.
- As a **series**, we add them: $3 + 7 + 11 + 15 + 19 = 55$.

| | Looks like | Result |
|---|---|---|
| **Sequence** | $3,\\ 7,\\ 11,\\ 15,\\ 19$ | a list |
| **Series** | $3 + 7 + 11 + 15 + 19$ | a single number ($55$) |

A **partial sum** is the sum of the *first $n$ terms*, written $S_n$:

$$S_1 = 3,\\quad S_2 = 3+7 = 10,\\quad S_3 = 3+7+11 = 21$$

> 💡 The whole point of this lesson is to find $S_n$ **without** adding every term by hand. Adding $100$ numbers is slow; a formula is instant.`,
      },
      {
        id: 'ser1-seq-series-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a *series*?',
              options: ['$2,\\ 5,\\ 8,\\ 11$', '$2 + 5 + 8 + 11$', 'the number $8$ in the list', 'the list of even numbers'],
              correctAnswer: 1,
              explanation: 'A series is a SUM of terms (it uses $+$ signs). The list $2,\\ 5,\\ 8,\\ 11$ is a sequence; $2+5+8+11$ is the corresponding series.',
            },
            {
              question: 'For the sequence $4,\\ 9,\\ 14,\\ 19,\\dots$, the partial sum $S_3$ equals:',
              options: ['$14$', '$27$', '$36$', '$46$'],
              correctAnswer: 1,
              explanation: '$S_3$ adds the first three terms: $4 + 9 + 14 = 27$.',
            },
          ],
        },
      },
      {
        id: 'ser1-sigma',
        type: 'text' as const,
        content: `## Sigma (Summation) Notation

Mathematicians abbreviate a sum with the Greek capital letter sigma, $\\Sigma$:

$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n$$

Read it as *"the sum of $a_k$ as $k$ goes from $1$ to $n$."*

- $k$ is the **index** (a counter).
- The number **below** $\\Sigma$ is the **starting** value of $k$.
- The number **above** $\\Sigma$ is the **ending** value of $k$.
- $a_k$ is the **rule** — plug in each $k$ and add the results.

### Example

$$\\sum_{k=1}^{4} (2k + 1) = \\underbrace{3}_{k=1} + \\underbrace{5}_{k=2} + \\underbrace{7}_{k=3} + \\underbrace{9}_{k=4} = 24$$

> ⚠️ **Watch the index range.** $\\sum_{k=1}^{4}$ has **four** terms ($k = 1, 2, 3, 4$). A sum like $\\sum_{k=0}^{4}$ would have **five** terms. Count carefully: (top) − (bottom) + 1.`,
      },
      {
        id: 'ser1-sigma-dropdown',
        type: 'dropdown-select' as const,
        content: `**Decode the Notation** 🔽

Consider the sum $\\displaystyle\\sum_{k=1}^{5} (3k - 2)$.`,
        exercise: {
          dropdowns: [
            { label: 'The index variable is:', options: ['$k$', '$3$', '$5$', '$n$'] },
            { label: 'Number of terms in the sum:', options: ['$3$', '$4$', '$5$', '$6$'] },
            { label: 'The very first term ($k=1$) equals:', options: ['$1$', '$2$', '$3$', '$5$'] },
          ],
          correctAnswers: ['$k$', '$5$', '$1$'],
          hint1: 'The letter that changes as you count is the index.',
          hint2: '$k$ runs from $1$ to $5$: that is $5 - 1 + 1 = 5$ terms.',
          hint3: 'Plug $k=1$ into $3k - 2$: $3(1) - 2 = 1$.',
          explanation: 'Index $k$ goes $1\\to 5$ (five terms). At $k=1$, $3(1)-2 = 1$. The full sum is $1+4+7+10+13 = 35$.',
        },
      },
      {
        id: 'ser1-expand-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Sum** 🧮

Write out the terms and add them.

**1)** $\\displaystyle\\sum_{k=1}^{3} (4k) = \\,?$
**2)** $\\displaystyle\\sum_{k=1}^{4} (k^2) = \\,?$
**3)** $\\displaystyle\\sum_{k=2}^{4} (k + 5) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['24', '30', '24'],
          hint1: '$\\sum_{k=1}^{3} 4k = 4 + 8 + 12$.',
          hint2: '$\\sum_{k=1}^{4} k^2 = 1 + 4 + 9 + 16$.',
          hint3: 'Start at $k=2$: $(2+5) + (3+5) + (4+5) = 7 + 8 + 9$.',
          explanation: '1) $4+8+12 = 24$.  2) $1+4+9+16 = 30$.  3) $7+8+9 = 24$. Always plug in each index value, then add.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'series-summation-algebra2',
    sections: [
      {
        id: 'ser2-intro',
        type: 'text' as const,
        content: `# ➕ Arithmetic & Geometric Series

**Part 2 of 5 — The Arithmetic Series Formula**

---

> 🔑 **The Idea:** An **arithmetic series** adds terms that change by a constant **common difference** $d$. There's a beautiful shortcut — pair the first and last terms — that sums them all at once.`,
      },
      {
        id: 'ser2-gauss',
        type: 'text' as const,
        content: `## Gauss's Pairing Trick

Legend says young Gauss added $1 + 2 + \\cdots + 100$ in seconds. The trick: **pair the ends.**

$$\\begin{aligned}
S &= 1 + 2 + 3 + \\cdots + 98 + 99 + 100 \\\\
S &= 100 + 99 + 98 + \\cdots + 3 + 2 + 1
\\end{aligned}$$

Add the two lines term by term — every pair sums to $101$, and there are $100$ pairs:

$$2S = 100 \\times 101 = 10100 \\;\\Rightarrow\\; S = \\frac{10100}{2} = 5050$$

This works for **any** arithmetic series, giving the formula:

$$S_n = \\frac{n}{2}\\,(a_1 + a_n)$$

> 💡 In words: the sum equals the **number of terms** times the **average of the first and last term**. ($a_1$ is the first term, $a_n$ is the last term, $n$ is how many terms.)`,
      },
      {
        id: 'ser2-formula-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $S_n = \\dfrac{n}{2}(a_1 + a_n)$, what does $a_n$ represent?',
              options: ['the common difference', 'the first term', 'the last ($n$th) term', 'the number of terms'],
              correctAnswer: 2,
              explanation: '$a_1$ is the first term, $a_n$ is the last term, $n$ is the count. The formula is $\\frac{n}{2}(\\text{first} + \\text{last})$.',
            },
            {
              question: 'The sum $1 + 2 + 3 + \\cdots + 100$ equals:',
              options: ['$5000$', '$5050$', '$10100$', '$100$'],
              correctAnswer: 1,
              explanation: '$S_{100} = \\frac{100}{2}(1 + 100) = 50 \\times 101 = 5050$.',
            },
          ],
        },
      },
      {
        id: 'ser2-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — first and last term known

Find $4 + 7 + 10 + \\cdots + 31$ (common difference $d = 3$).

First find $n$. Since $a_n = a_1 + (n-1)d$:
$$31 = 4 + (n-1)(3) \\;\\Rightarrow\\; 27 = 3(n-1) \\;\\Rightarrow\\; n - 1 = 9 \\;\\Rightarrow\\; n = 10$$

Now apply the sum formula:
$$S_{10} = \\frac{10}{2}(4 + 31) = 5 \\times 35 = 175$$

### Example 2 — last term unknown

Sum the first $20$ terms of $5, 8, 11, 14, \\dots$ ($a_1 = 5$, $d = 3$).

Find the $20$th term first: $a_{20} = 5 + (20-1)(3) = 5 + 57 = 62$.
$$S_{20} = \\frac{20}{2}(5 + 62) = 10 \\times 67 = 670$$

> ⚠️ You need the **last term** $a_n$ to use $\\frac{n}{2}(a_1 + a_n)$. If it's not given, compute it with $a_n = a_1 + (n-1)d$ first.`,
      },
      {
        id: 'ser2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Sum** 🔽

You're summing the first $12$ terms of $2,\\ 6,\\ 10,\\ 14,\\dots$ ($a_1 = 2$, $d = 4$).`,
        exercise: {
          dropdowns: [
            { label: 'The 12th term $a_{12} = 2 + (12-1)(4) =$', options: ['$44$', '$46$', '$48$', '$50$'] },
            { label: 'Set up the sum: $S_{12} =$', options: ['$\\frac{12}{2}(2 + 46)$', '$\\frac{12}{2}(2 + 4)$', '$12(2 + 46)$', '$\\frac{2}{12}(2 + 46)$'] },
            { label: 'Final value of $S_{12}$:', options: ['$144$', '$276$', '$288$', '$552$'] },
          ],
          correctAnswers: ['$46$', '$\\frac{12}{2}(2 + 46)$', '$288$'],
          hint1: '$a_{12} = 2 + 11 \\times 4 = 2 + 44 = 46$.',
          hint2: 'Use $S_n = \\frac{n}{2}(a_1 + a_n)$ with $n=12$, $a_1=2$, $a_{12}=46$.',
          hint3: '$\\frac{12}{2}(2+46) = 6 \\times 48 = 288$.',
          explanation: '$a_{12}=46$, so $S_{12} = 6 \\times 48 = 288$.',
        },
      },
      {
        id: 'ser2-drill',
        type: 'input-boxes' as const,
        content: `**Sum the Series** 🧮

**1)** $3 + 6 + 9 + \\cdots + 30$ (that's $10$ terms). $S = \\,?$
**2)** First $25$ terms of $1, 3, 5, 7, \\dots$ (odd numbers). $S = \\,?$
**3)** $\\displaystyle\\sum_{k=1}^{8}(2k+1)$, which is $3+5+\\cdots+17$. $S = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['165', '625', '80'],
          hint1: '$\\frac{10}{2}(3 + 30) = 5 \\times 33$.',
          hint2: 'The 25th odd number is $a_{25} = 1 + 24(2) = 49$. Then $\\frac{25}{2}(1 + 49)$.',
          hint3: 'First term ($k=1$) is $3$, last ($k=8$) is $17$, with $8$ terms: $\\frac{8}{2}(3 + 17)$.',
          explanation: '1) $5 \\times 33 = 165$.  2) $\\frac{25}{2}(50) = 25 \\times 25 = 625$.  3) $4 \\times 20 = 80$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'series-summation-algebra2',
    sections: [
      {
        id: 'ser3-intro',
        type: 'text' as const,
        content: `# ➕ Arithmetic & Geometric Series

**Part 3 of 5 — Finite Geometric Series**

---

> 🔑 **The Idea:** A **geometric series** *multiplies* by a constant **common ratio** $r$ each step ($2 + 6 + 18 + 54 + \\cdots$). Its sum also has a clean closed form.`,
      },
      {
        id: 'ser3-formula',
        type: 'text' as const,
        content: `## The Finite Geometric Sum Formula

For a geometric series with first term $a_1$ and common ratio $r \\ne 1$, the sum of the first $n$ terms is:

$$S_n = a_1 \\cdot \\frac{1 - r^{\\,n}}{1 - r}$$

**Where it comes from** (the shift-and-subtract trick):

$$\\begin{aligned}
S_n &= a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1} \\\\
r\\,S_n &= \\qquad\\; a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1} + a_1 r^{\\,n}
\\end{aligned}$$

Subtract the second line from the first — almost everything cancels:

$$S_n - r\\,S_n = a_1 - a_1 r^{\\,n} \\;\\Rightarrow\\; S_n(1 - r) = a_1(1 - r^{\\,n})$$

Divide by $(1 - r)$ to get the formula.

> 💡 Identify $a_1$ (first term) and $r$ (divide any term by the one before it). To find $r$: $r = \\dfrac{a_2}{a_1}$.`,
      },
      {
        id: 'ser3-ratio-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the common ratio $r$ of $5,\\ 15,\\ 45,\\ 135,\\dots$?',
              options: ['$3$', '$5$', '$10$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Divide a term by the previous one: $\\frac{15}{5} = 3$ (and $\\frac{45}{15} = 3$). So $r = 3$.',
            },
            {
              question: 'The finite geometric sum formula $S_n = a_1\\dfrac{1 - r^n}{1 - r}$ does NOT work when:',
              options: ['$r = 2$', '$r = 1$', '$r = \\frac{1}{2}$', '$r = -3$'],
              correctAnswer: 1,
              explanation: 'If $r = 1$ the denominator $1 - r = 0$ (division by zero). When $r=1$, every term equals $a_1$, so $S_n = n\\,a_1$ instead.',
            },
          ],
        },
      },
      {
        id: 'ser3-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — $2 + 6 + 18 + 54 + 162$

Here $a_1 = 2$, $r = 3$, and there are $n = 5$ terms:

$$S_5 = 2 \\cdot \\frac{1 - 3^5}{1 - 3} = 2 \\cdot \\frac{1 - 243}{-2} = 2 \\cdot \\frac{-242}{-2} = 2 \\cdot 121 = 242$$

✅ **Check:** $2 + 6 + 18 + 54 + 162 = 242$ ✓

### Example 2 — a fractional ratio

Sum the first $4$ terms of $8 + 4 + 2 + 1 + \\cdots$ ($a_1 = 8$, $r = \\frac{1}{2}$):

$$S_4 = 8 \\cdot \\frac{1 - \\left(\\frac{1}{2}\\right)^4}{1 - \\frac{1}{2}} = 8 \\cdot \\frac{1 - \\frac{1}{16}}{\\frac{1}{2}} = 8 \\cdot \\frac{\\frac{15}{16}}{\\frac{1}{2}} = 8 \\cdot \\frac{15}{8} = 15$$

✅ **Check:** $8 + 4 + 2 + 1 = 15$ ✓`,
      },
      {
        id: 'ser3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Geometric Sum** 🔽

You're summing the first $5$ terms of $3 + 6 + 12 + 24 + \\cdots$`,
        exercise: {
          dropdowns: [
            { label: 'First term $a_1 =$', options: ['$3$', '$6$', '$2$', '$5$'] },
            { label: 'Common ratio $r =$', options: ['$2$', '$3$', '$\\frac{1}{2}$', '$6$'] },
            { label: '$S_5 = 3 \\cdot \\dfrac{1 - 2^5}{1 - 2} =$', options: ['$93$', '$96$', '$48$', '$31$'] },
          ],
          correctAnswers: ['$3$', '$2$', '$93$'],
          hint1: 'The first term is whatever the series starts with.',
          hint2: 'Divide the second term by the first: $\\frac{6}{3} = 2$.',
          hint3: '$3 \\cdot \\frac{1 - 32}{1 - 2} = 3 \\cdot \\frac{-31}{-1} = 3 \\times 31 = 93$.',
          explanation: '$a_1 = 3$, $r = 2$, $n = 5$: $S_5 = 3 \\cdot \\frac{-31}{-1} = 93$. (Check: $3+6+12+24+48 = 93$.)',
        },
      },
      {
        id: 'ser3-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Sum** 🧮

**1)** $1 + 2 + 4 + 8 + 16 + 32$ ($a_1=1$, $r=2$, $n=6$). $S = \\,?$
**2)** $\\displaystyle\\sum_{k=1}^{3} 5\\cdot 3^{\\,k-1}$, i.e. $5 + 15 + 45$. $S = \\,?$
**3)** First $3$ terms of $9 + 3 + 1 + \\cdots$ ($r = \\frac{1}{3}$): $9 + 3 + 1$. $S = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['63', '65', '13'],
          hint1: '$1\\cdot\\frac{1 - 2^6}{1 - 2} = \\frac{1 - 64}{-1} = 63$.',
          hint2: 'Just add: $5 + 15 + 45$. (Or $5\\cdot\\frac{1-3^3}{1-3} = 5\\cdot\\frac{-26}{-2} = 5 \\times 13$.)',
          hint3: '$9 + 3 + 1 = 13$. (Or $9\\cdot\\frac{1 - (1/3)^3}{1 - 1/3}$.)',
          explanation: '1) $\\frac{-63}{-1} = 63$.  2) $5 \\times 13 = 65$.  3) $9+3+1 = 13$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'series-summation-algebra2',
    sections: [
      {
        id: 'ser4-intro',
        type: 'text' as const,
        content: `# ➕ Arithmetic & Geometric Series

**Part 4 of 5 — Infinite Geometric Series**

---

> 🔑 **The Big Surprise:** You can add **infinitely many** numbers and still get a *finite* answer — but only for a geometric series when the terms shrink ($|r| < 1$).`,
      },
      {
        id: 'ser4-converge',
        type: 'text' as const,
        content: `## When Does an Infinite Sum Have a Value?

Take $\\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\dfrac{1}{16} + \\cdots$. The partial sums creep toward $1$:

$$S_1 = 0.5,\\quad S_2 = 0.75,\\quad S_3 = 0.875,\\quad S_4 = 0.9375,\\ \\dots \\to 1$$

They **converge** to a fixed number. This happens exactly when the common ratio satisfies $|r| < 1$ — each new term is a fraction of the one before, so the leftover shrinks to nothing.

| Condition on $r$ | Behavior | Infinite sum? |
|---|---|---|
| $|r| < 1$ | terms shrink to $0$ | **converges** ✓ |
| $|r| = 1$ | terms don't shrink | diverges ✗ |
| $|r| > 1$ | terms blow up | diverges ✗ |

In the formula $S_n = a_1\\dfrac{1 - r^{\\,n}}{1 - r}$, when $|r| < 1$ the term $r^{\\,n} \\to 0$ as $n \\to \\infty$. That leaves:

$$S_\\infty = \\frac{a_1}{1 - r}\\qquad (\\text{valid only when } |r| < 1)$$

> ⚠️ If $|r| \\ge 1$ the series **diverges** — there is *no* finite sum, and you must **not** plug into $\\frac{a_1}{1-r}$.`,
      },
      {
        id: 'ser4-converge-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which infinite geometric series converges (has a finite sum)?',
              options: ['$3 + 6 + 12 + 24 + \\cdots$', '$27 + 9 + 3 + 1 + \\cdots$', '$1 + 1 + 1 + 1 + \\cdots$', '$2 - 4 + 8 - 16 + \\cdots$'],
              correctAnswer: 1,
              explanation: 'Only $27+9+3+\\cdots$ has $|r|<1$ (here $r = \\frac{1}{3}$). The others have $r=2$, $r=1$, and $r=-2$ — all with $|r| \\ge 1$, so they diverge.',
            },
            {
              question: 'For an infinite geometric series with $a_1 = 6$ and $r = \\frac{1}{2}$, the sum $S_\\infty$ is:',
              options: ['$3$', '$6$', '$12$', 'no finite sum'],
              correctAnswer: 2,
              explanation: '$S_\\infty = \\frac{a_1}{1 - r} = \\frac{6}{1 - \\frac{1}{2}} = \\frac{6}{\\frac{1}{2}} = 12$.',
            },
          ],
        },
      },
      {
        id: 'ser4-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — $\\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\cdots$

$a_1 = \\frac{1}{2}$, $r = \\frac{1}{2}$, and $|r| < 1$ so it converges:

$$S_\\infty = \\frac{\\frac{1}{2}}{1 - \\frac{1}{2}} = \\frac{\\frac{1}{2}}{\\frac{1}{2}} = 1$$

### Example 2 — a negative ratio

Sum $8 - 4 + 2 - 1 + \\cdots$ Here $a_1 = 8$ and $r = -\\frac{1}{2}$ (since $\\frac{-4}{8} = -\\frac{1}{2}$), and $|r| = \\frac{1}{2} < 1$:

$$S_\\infty = \\frac{8}{1 - \\left(-\\frac{1}{2}\\right)} = \\frac{8}{\\frac{3}{2}} = 8 \\cdot \\frac{2}{3} = \\frac{16}{3}$$

### Example 3 — repeating decimal as a series

$0.\\overline{3} = 0.3 + 0.03 + 0.003 + \\cdots$ is geometric with $a_1 = 0.3$, $r = 0.1$:

$$S_\\infty = \\frac{0.3}{1 - 0.1} = \\frac{0.3}{0.9} = \\frac{1}{3}$$

> 💡 That's *why* $0.\\overline{3} = \\frac{1}{3}$ — an infinite geometric series in disguise!`,
      },
      {
        id: 'ser4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Converge or Diverge?** 🔽

For each series, decide whether the infinite sum exists.`,
        exercise: {
          dropdowns: [
            { label: '$100 + 10 + 1 + 0.1 + \\cdots$ ($r = 0.1$):', options: ['converges', 'diverges'] },
            { label: '$1 + 3 + 9 + 27 + \\cdots$ ($r = 3$):', options: ['converges', 'diverges'] },
            { label: 'Sum of $\\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\cdots$ ($a_1 = \\frac14,\\ r = \\frac12$):', options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$1$', '$2$'] },
          ],
          correctAnswers: ['converges', 'diverges', '$\\frac{1}{2}$'],
          hint1: '$|0.1| < 1$, so the terms shrink — it converges.',
          hint2: '$r = 3$ means $|r| > 1$, so terms grow without bound — it diverges.',
          hint3: '$S_\\infty = \\frac{1/4}{1 - 1/2} = \\frac{1/4}{1/2} = \\frac{1}{2}$.',
          explanation: 'Converge needs $|r|<1$. $r=0.1$ converges; $r=3$ diverges. The third: $\\frac{1/4}{1/2} = \\frac{1}{2}$.',
        },
      },
      {
        id: 'ser4-drill',
        type: 'input-boxes' as const,
        content: `**Find the Infinite Sum** 🧮

Use $S_\\infty = \\dfrac{a_1}{1 - r}$ (fractions are fine, e.g. \`16/3\`).

**1)** $a_1 = 4$, $r = \\frac{1}{2}$: $S_\\infty = \\,?$
**2)** $a_1 = 10$, $r = \\frac{1}{5}$: $S_\\infty = \\,?$
**3)** $9 + 3 + 1 + \\frac{1}{3} + \\cdots$ ($a_1 = 9$, $r = \\frac{1}{3}$): $S_\\infty = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '12.5', '13.5'],
          hint1: '$\\frac{4}{1 - 1/2} = \\frac{4}{1/2} = 8$.',
          hint2: '$\\frac{10}{1 - 1/5} = \\frac{10}{4/5} = 10 \\cdot \\frac{5}{4} = 12.5$ (or $\\frac{25}{2}$).',
          hint3: '$\\frac{9}{1 - 1/3} = \\frac{9}{2/3} = 9 \\cdot \\frac{3}{2} = 13.5$ (or $\\frac{27}{2}$).',
          explanation: '1) $\\frac{4}{1/2} = 8$.  2) $\\frac{10}{4/5} = 12.5$.  3) $\\frac{9}{2/3} = 13.5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'series-summation-algebra2',
    sections: [
      {
        id: 'ser5-intro',
        type: 'text' as const,
        content: `# ➕ Arithmetic & Geometric Series

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read sigma notation, (2) sum an arithmetic series, (3) sum a finite geometric series, and (4) sum an infinite geometric series when it converges. Time to choose the right tool for each problem.`,
      },
      {
        id: 'ser5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Formula |
|---|---|
| Arithmetic, first & last term known | $S_n = \\dfrac{n}{2}(a_1 + a_n)$ |
| Find the last term | $a_n = a_1 + (n-1)d$ |
| Finite geometric ($r \\ne 1$) | $S_n = a_1\\dfrac{1 - r^{\\,n}}{1 - r}$ |
| Infinite geometric ($|r| < 1$) | $S_\\infty = \\dfrac{a_1}{1 - r}$ |

**Which type is it?**

> 🔑 **Arithmetic** = constant **difference** (you *add* the same amount). **Geometric** = constant **ratio** (you *multiply* by the same amount). Check: is $a_2 - a_1$ constant, or is $a_2 / a_1$ constant?

> ⚠️ An *infinite* sum only has a value for a **geometric** series with $|r| < 1$. An infinite arithmetic series always diverges.`,
      },
      {
        id: 'ser5-classify',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

Classify each series and decide what to use.`,
        exercise: {
          dropdowns: [
            { label: '$5,\\ 8,\\ 11,\\ 14,\\dots$ is:', options: ['arithmetic', 'geometric', 'neither'] },
            { label: '$5,\\ 10,\\ 20,\\ 40,\\dots$ is:', options: ['arithmetic', 'geometric', 'neither'] },
            { label: 'To find $1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots$ forever, use:', options: ['$\\frac{n}{2}(a_1 + a_n)$', '$\\frac{a_1}{1 - r}$', 'it diverges'] },
          ],
          correctAnswers: ['arithmetic', 'geometric', '$\\frac{a_1}{1 - r}$'],
          hint1: 'Add $3$ each time → constant difference → arithmetic.',
          hint2: 'Multiply by $2$ each time → constant ratio → geometric.',
          hint3: 'Infinite geometric with $r = \\frac{1}{2}$ (so $|r| < 1$) converges; use $\\frac{a_1}{1-r}$.',
          explanation: 'Constant difference = arithmetic; constant ratio = geometric. An infinite geometric with $|r|<1$ uses $\\frac{a_1}{1-r}$ (here it sums to $2$).',
        },
      },
      {
        id: 'ser5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Sum the first $30$ terms of $2, 5, 8, 11, \\dots$ ($d = 3$).',
              options: ['$1365$', '$1335$', '$910$', '$2730$'],
              correctAnswer: 0,
              explanation: '$a_{30} = 2 + 29(3) = 89$. $S_{30} = \\frac{30}{2}(2 + 89) = 15 \\times 91 = 1365$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\sum_{k=1}^{4} 2 \\cdot 3^{\\,k-1}$ (i.e. $2 + 6 + 18 + 54$).',
              options: ['$80$', '$78$', '$54$', '$162$'],
              correctAnswer: 0,
              explanation: '$2 \\cdot \\frac{1 - 3^4}{1 - 3} = 2 \\cdot \\frac{1 - 81}{-2} = 2 \\cdot 40 = 80$. (Check: $2+6+18+54 = 80$.)',
            },
          ],
        },
      },
      {
        id: 'ser5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The arithmetic series $7 + 11 + 15 + \\cdots + 43$ has how many terms, and what is its sum?',
              options: ['$10$ terms, sum $250$', '$10$ terms, sum $500$', '$9$ terms, sum $225$', '$11$ terms, sum $275$'],
              correctAnswer: 0,
              explanation: '$d = 4$. $43 = 7 + (n-1)4 \\Rightarrow n = 10$. $S_{10} = \\frac{10}{2}(7 + 43) = 5 \\times 50 = 250$.',
            },
            {
              question: 'A geometric series has $a_1 = 4$ and $r = 3$. What is the sum of its first $3$ terms?',
              options: ['$52$', '$36$', '$40$', '$28$'],
              correctAnswer: 0,
              explanation: 'Terms are $4, 12, 36$, summing to $52$. (Formula: $4 \\cdot \\frac{1 - 3^3}{1 - 3} = 4 \\cdot \\frac{-26}{-2} = 4 \\times 13 = 52$.)',
            },
            {
              question: 'Which statement about $5 + 10 + 20 + 40 + \\cdots$ (continuing forever) is true?',
              options: ['It converges to $\\frac{5}{1 - 2} = -5$', 'It diverges — no finite sum', 'It converges to $10$', 'It converges to $\\frac{5}{2}$'],
              correctAnswer: 1,
              explanation: 'Here $r = 2$, so $|r| \\ge 1$ and the series diverges. The formula $\\frac{a_1}{1-r}$ does NOT apply — getting $-5$ from it is a classic trap.',
            },
          ],
        },
      },
    ],
  },
]
