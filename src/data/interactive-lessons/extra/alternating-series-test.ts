import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Alternating Series Test (AP Calculus BC).
 * Registry key / DB Topic.slug: 'alternating-series-test'.
 * 7 parts, gold-standard structure: what alternating series are → the two AST
 * conditions → running the test → the alternating series error/remainder bound →
 * absolute vs conditional convergence → common pitfalls → mixed practice & exit
 * quiz. LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every limit, sum, and error bound was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'alternating-series-test',
    sections: [
      {
        id: 'ast1-intro',
        type: 'text' as const,
        content: `# 🔁 The Alternating Series Test

**Part 1 of 7 — What Is an Alternating Series?**

---

### Topics in This Part

| Section |
|---------|
| The Sign Pattern: $(-1)^n$ and $(-1)^{n+1}$ |
| Spotting an Alternating Series |
| Why Alternating Series Are Special |

> 🔑 **Key Concept:** An **alternating series** is one whose terms switch sign forever: $+,-,+,-,\\dots$ This back-and-forth lets a series converge even when the "all-positive" version would diverge — and it gives us a uniquely simple test, the **Alternating Series Test (AST)**.`,
      },
      {
        id: 'ast1-pattern',
        type: 'text' as const,
        content: `## The Sign Pattern

Every alternating series carries a factor that flips sign with each step. The two you'll meet constantly are:

$$(-1)^n = -1, +1, -1, +1, \\dots \\quad(\\text{starts negative when } n=1)$$
$$(-1)^{n+1} = +1, -1, +1, -1, \\dots \\quad(\\text{starts positive when } n=1)$$

So an alternating series has one of these standard forms, where $b_n > 0$ is the **size** (absolute value) of each term:

$$\\sum_{n=1}^{\\infty} (-1)^{n+1} b_n = b_1 - b_2 + b_3 - b_4 + \\cdots$$
$$\\sum_{n=1}^{\\infty} (-1)^{n} b_n = -b_1 + b_2 - b_3 + b_4 - \\cdots$$

### A Famous Example: The Alternating Harmonic Series

$$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$$

Here $b_n = \\dfrac{1}{n}$. The plain harmonic series $\\sum \\frac{1}{n}$ **diverges** — but with the alternating signs, this one **converges** (to $\\ln 2$). That contrast is the whole reason this topic exists.

> 💡 **Read the sign factor first.** $(-1)^{n+1}$ makes the **first** term positive; $(-1)^n$ makes the first term **negative**. Either way, the terms alternate — and that's all the AST needs.`,
      },
      {
        id: 'ast1-spot',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which series is alternating?',
              options: [
                '$\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n}{n^2}$',
                '$\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2}$',
                '$\\sum_{n=1}^{\\infty} \\dfrac{n}{n+1}$',
                '$\\sum_{n=1}^{\\infty} \\dfrac{2^n}{n!}$',
              ],
              correctAnswer: 0,
              explanation: 'Only the first has a sign-flipping factor $(-1)^n$, so its terms go $+,-,+,-$. The other three are series of positive terms — nothing alternates.',
            },
            {
              question: 'In the series $\\sum_{n=1}^{\\infty} (-1)^{n+1}\\,\\dfrac{1}{2n-1} = 1 - \\dfrac{1}{3} + \\dfrac{1}{5} - \\cdots$, what is $b_n$ (the size of each term)?',
              options: ['$\\dfrac{1}{2n-1}$', '$\\dfrac{(-1)^{n+1}}{2n-1}$', '$2n-1$', '$(-1)^{n+1}$'],
              correctAnswer: 0,
              explanation: '$b_n$ is the positive size of the term — strip off the $(-1)^{n+1}$. So $b_n = \\dfrac{1}{2n-1}$, which is always positive.',
            },
          ],
        },
      },
      {
        id: 'ast1-firstsign',
        type: 'dropdown-select' as const,
        content: `**First Term, First Sign** 🔽

For each series, decide whether the very first term ($n=1$) is positive or negative.`,
        exercise: {
          dropdowns: [
            { label: '$\\sum_{n=1}^{\\infty} (-1)^{n+1}\\,\\dfrac{1}{n}$ — first term is:', options: ['positive', 'negative'] },
            { label: '$\\sum_{n=1}^{\\infty} (-1)^{n}\\,\\dfrac{1}{n}$ — first term is:', options: ['positive', 'negative'] },
            { label: '$\\sum_{n=1}^{\\infty} (-1)^{n-1}\\,\\dfrac{1}{2^n}$ — first term is:', options: ['positive', 'negative'] },
          ],
          correctAnswers: ['positive', 'negative', 'positive'],
          hint1: 'Plug in $n=1$ to the sign factor and read its sign.',
          hint2: '$(-1)^{1+1} = (-1)^2 = +1$, while $(-1)^1 = -1$.',
          hint3: '$(-1)^{n-1}$ at $n=1$ is $(-1)^0 = +1$, so it starts positive — same pattern as $(-1)^{n+1}$.',
          explanation: 'At $n=1$: $(-1)^{n+1}=+1$ (positive start), $(-1)^n=-1$ (negative start), and $(-1)^{n-1}=(-1)^0=+1$ (positive start). $(-1)^{n+1}$ and $(-1)^{n-1}$ behave identically.',
        },
      },
      {
        id: 'ast1-partials',
        type: 'input-boxes' as const,
        content: `**Build the Partial Sums** 🧮

For $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n} = 1 - \\frac12 + \\frac13 - \\frac14 + \\cdots$, compute these partial sums.

**1)** $S_1 = 1 = \\,?$
**2)** $S_2 = 1 - \\frac12 = \\,?$  *(fraction or decimal)*
**3)** $S_3 = 1 - \\frac12 + \\frac13 = \\,?$  *(fraction or decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/2', '5/6'],
          hint1: '$S_1$ is just the first term.',
          hint2: '$1 - \\frac12 = \\frac12 = 0.5$.',
          hint3: 'Common denominator $6$: $\\frac66 - \\frac36 + \\frac26 = \\frac56 \\approx 0.833$.',
          explanation: '$S_1=1$, $S_2=\\frac12=0.5$, $S_3=\\frac56\\approx 0.833$. Notice they bounce: above, below, above — each overshoot smaller than the last, closing in on $\\ln 2\\approx 0.693$.',
        },
      },
      {
        id: 'ast1-why',
        type: 'text' as const,
        content: `## Why Alternating Series Are Special

Picture adding the partial sums of $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$:

$$S_1 = 1,\\quad S_2 = 0.5,\\quad S_3 \\approx 0.833,\\quad S_4 \\approx 0.583,\\quad S_5 \\approx 0.783,\\dots$$

The partial sums **bounce** — overshoot, undershoot, overshoot — but each bounce is **smaller** than the last, so they close in on a single value (here $\\ln 2 \\approx 0.693$). The sum is trapped between consecutive partial sums.

> 🔑 **The intuition behind the AST:** if the steps you take keep shrinking toward $0$ and you reverse direction every step, you spiral inward to a limit. Two conditions capture exactly that — and we meet them in Part 2.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'alternating-series-test',
    sections: [
      {
        id: 'ast2-intro',
        type: 'text' as const,
        content: `# 🔁 The Alternating Series Test

**Part 2 of 7 — The Two Conditions**

---

> 🔑 **The Test, stated:** For an alternating series $\\sum (-1)^{n} b_n$ or $\\sum (-1)^{n+1} b_n$ with every $b_n > 0$, the series **converges** if **both** hold:
> 1. $b_{n+1} \\le b_n$ for all $n$ (eventually) — the sizes are **decreasing**.
> 2. $\\displaystyle\\lim_{n\\to\\infty} b_n = 0$ — the sizes shrink to **zero**.`,
      },
      {
        id: 'ast2-conditions',
        type: 'text' as const,
        content: `## The Two Conditions Up Close

Let $b_n$ be the **positive size** of the $n$-th term (the part left after you remove the $(-1)$ factor).

**Condition 1 — Decreasing.** Each term is no bigger than the one before it:
$$b_{n+1} \\le b_n \\quad\\text{for all (sufficiently large) } n.$$
You may show this with a ratio $\\dfrac{b_{n+1}}{b_n} \\le 1$, a difference $b_{n+1} - b_n \\le 0$, or by checking the function $b(x)$ has $b'(x) \\le 0$.

**Condition 2 — Limit zero.** The terms must vanish:
$$\\lim_{n\\to\\infty} b_n = 0.$$

> ⚠️ **Both are required.** Condition 2 alone is *not* enough to conclude convergence by this test, and Condition 1 alone is meaningless without it. The AST gives convergence only when **both** boxes are checked.

> 💡 **One-way street:** the AST can only *prove convergence*. If a condition fails, the AST is simply **inconclusive** here — except in one special case we'll flag in Part 6 (when $b_n \\not\\to 0$, the series truly diverges, but by the $n$-th term test, not the AST).`,
      },
      {
        id: 'ast2-checklimit',
        type: 'input-boxes' as const,
        content: `**Check Condition 2** 🧮

Compute $\\displaystyle\\lim_{n\\to\\infty} b_n$ for each size sequence. Enter the limit (a number).

**1)** $b_n = \\dfrac{1}{n}$
**2)** $b_n = \\dfrac{3n}{n+5}$
**3)** $b_n = \\dfrac{1}{\\sqrt{n}}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '3', '0'],
          hint1: 'As $n\\to\\infty$, $\\frac{1}{n}\\to 0$.',
          hint2: 'Divide top and bottom by $n$: $\\frac{3n}{n+5}=\\frac{3}{1+5/n}\\to \\frac{3}{1}=3$.',
          hint3: 'As $n\\to\\infty$, $\\sqrt{n}\\to\\infty$, so $\\frac{1}{\\sqrt n}\\to 0$.',
          explanation: '1) $0$ ✓ Condition 2 met.  2) $3 \\ne 0$ ✗ Condition 2 FAILS, so the AST cannot give convergence (in fact the terms don\'t vanish, so it diverges).  3) $0$ ✓ Condition 2 met.',
        },
      },
      {
        id: 'ast2-decreasing',
        type: 'text' as const,
        content: `## Showing the Terms Decrease

Three reliable ways to prove $b_{n+1} \\le b_n$:

| Method | What you show | Good when |
|--------|---------------|-----------|
| **Ratio** | $\\dfrac{b_{n+1}}{b_n} \\le 1$ | $b_n$ is a product/quotient |
| **Difference** | $b_{n+1} - b_n \\le 0$ | $b_n$ is a simple algebraic expression |
| **Derivative** | $b'(x) \\le 0$ for $x \\ge 1$ | $b_n = b(n)$ for a differentiable $b$ |

### Example: is $b_n = \\dfrac{n}{n^2+1}$ decreasing?

Treat $b(x) = \\dfrac{x}{x^2+1}$ and differentiate with the quotient rule:

$$b'(x) = \\frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}.$$

For $x \\ge 1$, the numerator $1 - x^2 \\le 0$, so $b'(x) \\le 0$ and $b_n$ is decreasing. ✓

> 💡 A quick gut check before any work: if the numerator grows slower than the denominator, the terms shrink. Confirm with one of the three methods above when it isn't obvious.`,
      },
      {
        id: 'ast2-decquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Three of these size sequences satisfy BOTH AST conditions (decreasing AND limit $0$). Which one does NOT?',
              options: [
                '$b_n = \\dfrac{n+1}{n}$',
                '$b_n = \\dfrac{\\ln n}{n}$',
                '$b_n = \\dfrac{1}{n+3}$',
                '$b_n = \\dfrac{5}{2^n}$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{n+1}{n} = 1 + \\frac{1}{n}$ IS decreasing, but it decreases toward $1$, not $0$ — so its limit is $1\\ne 0$ and Condition 2 fails. The other three are each decreasing AND have limit $0$, so they satisfy both conditions.',
            },
            {
              question: 'To prove $b_n = \\dfrac{n}{2^n}$ is decreasing, the cleanest tool is the ratio $\\dfrac{b_{n+1}}{b_n}$. What does it simplify to?',
              options: [
                '$\\dfrac{n+1}{2n}$',
                '$\\dfrac{2(n+1)}{n}$',
                '$\\dfrac{n+1}{n}$',
                '$\\dfrac{n}{2(n+1)}$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{b_{n+1}}{b_n} = \\dfrac{(n+1)/2^{n+1}}{n/2^n} = \\dfrac{n+1}{2^{n+1}}\\cdot\\dfrac{2^n}{n} = \\dfrac{n+1}{2n}$. For $n\\ge 1$ this is $\\le 1$, so the terms decrease.',
            },
          ],
        },
      },
      {
        id: 'ast2-bothbox',
        type: 'dropdown-select' as const,
        content: `**Check Both Boxes** 🔽

For each size $b_n$, decide whether each AST condition is met.`,
        exercise: {
          dropdowns: [
            { label: '$b_n = \\dfrac{1}{n}$ — decreasing?', options: ['Yes', 'No'] },
            { label: '$b_n = \\dfrac{1}{n}$ — limit is $0$?', options: ['Yes', 'No'] },
            { label: '$b_n = \\dfrac{n}{n+5}$ — limit is $0$?', options: ['Yes', 'No'] },
          ],
          correctAnswers: ['Yes', 'Yes', 'No'],
          hint1: '$\\frac{1}{n+1}<\\frac{1}{n}$, so $\\frac1n$ is decreasing.',
          hint2: '$\\frac1n\\to 0$, so both conditions hold for $b_n=\\frac1n$.',
          hint3: '$\\frac{n}{n+5}\\to 1\\ne 0$, so Condition 2 FAILS for that one.',
          explanation: '$b_n=\\frac1n$ is decreasing AND $\\to 0$ (both conditions met — AST gives convergence). But $\\frac{n}{n+5}\\to 1\\ne 0$, so its Condition 2 fails.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'alternating-series-test',
    sections: [
      {
        id: 'ast3-intro',
        type: 'text' as const,
        content: `# 🔁 The Alternating Series Test

**Part 3 of 7 — Running the Test**

---

> 🔑 **The procedure:** (1) confirm the series alternates, (2) identify $b_n > 0$, (3) check $b_n$ decreasing, (4) check $b_n \\to 0$. Both pass ⇒ **converges**. Then state your conclusion clearly.`,
      },
      {
        id: 'ast3-worked1',
        type: 'text' as const,
        content: `## Worked Example: the Alternating Harmonic Series

$$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$$

**Step 1 — Alternates?** Yes, $(-1)^{n+1}$ flips the sign each term.

**Step 2 — Identify $b_n$.** $b_n = \\dfrac{1}{n} > 0$. ✓

**Step 3 — Decreasing?** $\\dfrac{1}{n+1} \\le \\dfrac{1}{n}$ for all $n \\ge 1$. ✓

**Step 4 — Limit zero?** $\\displaystyle\\lim_{n\\to\\infty}\\frac{1}{n} = 0$. ✓

Both conditions hold, so by the Alternating Series Test the series **converges**.

> ✅ **Conclusion sentence (write this on the AP exam):** "Because $b_n = \\frac{1}{n}$ is decreasing and $\\lim_{n\\to\\infty} b_n = 0$, the alternating series converges by the Alternating Series Test."`,
      },
      {
        id: 'ast3-worked2',
        type: 'text' as const,
        content: `## Worked Example: a Decision That Goes the Other Way

$$\\sum_{n=1}^{\\infty} (-1)^{n}\\,\\frac{n}{n+1}$$

**Step 1 — Alternates?** Yes.

**Step 2 — $b_n$.** $b_n = \\dfrac{n}{n+1} > 0$. ✓

**Step 4 — Limit zero?** $\\displaystyle\\lim_{n\\to\\infty}\\frac{n}{n+1} = 1 \\ne 0$. ✗

Condition 2 fails. The AST does not apply — and since the terms don't go to $0$, the series **diverges by the $n$-th Term Test** for divergence.

> ⚠️ **Always check the limit first when you suspect trouble.** If $b_n \\not\\to 0$, you're done immediately: the series diverges, no need to test anything else.`,
      },
      {
        id: 'ast3-converge',
        type: 'multiple-choice' as const,
        content: `**Does It Converge by the AST?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n}}{\\sqrt{n}}$ converge by the Alternating Series Test?',
              options: [
                'Yes — $b_n=\\frac{1}{\\sqrt n}$ decreases to $0$',
                'No — $b_n$ does not go to $0$',
                'No — $b_n$ is increasing',
                'The AST cannot be applied because it alternates',
              ],
              correctAnswer: 0,
              explanation: '$b_n = \\frac{1}{\\sqrt n}$ is positive, decreasing, and $\\lim_{n\\to\\infty}\\frac{1}{\\sqrt n}=0$. Both conditions hold, so the series converges by the AST.',
            },
            {
              question: 'Does $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^{n+1}\\,\\frac{n}{2n-1}$ converge by the Alternating Series Test?',
              options: [
                'No — $\\lim b_n = \\frac{1}{2}\\ne 0$, so it diverges',
                'Yes — $b_n$ decreases to $0$',
                'Yes — it alternates, which is enough',
                'The test is inconclusive',
              ],
              correctAnswer: 0,
              explanation: '$\\lim_{n\\to\\infty}\\frac{n}{2n-1}=\\frac12 \\ne 0$. Condition 2 fails; the terms don\'t vanish, so the series diverges (by the $n$-th Term Test).',
            },
          ],
        },
      },
      {
        id: 'ast3-steps',
        type: 'dropdown-select' as const,
        content: `**Order the Test** 🔽

You're testing $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n^2}$. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Identify the size $b_n$:', options: ['$\\dfrac{1}{n^2}$', '$\\dfrac{(-1)^{n+1}}{n^2}$', '$n^2$', '$\\dfrac{1}{n}$'] },
            { label: 'Is $b_n$ decreasing?', options: ['Yes', 'No'] },
            { label: '$\\lim_{n\\to\\infty} b_n =$', options: ['$0$', '$1$', '$\\infty$', '$\\tfrac12$'] },
            { label: 'Conclusion:', options: ['Converges by the AST', 'Diverges by the AST', 'Test is inconclusive', 'Diverges by the $n$-th term test'] },
          ],
          correctAnswers: ['$\\dfrac{1}{n^2}$', 'Yes', '$0$', 'Converges by the AST'],
          hint1: 'Strip the $(-1)^{n+1}$ to get the positive size $b_n=\\frac{1}{n^2}$.',
          hint2: '$\\frac{1}{(n+1)^2} < \\frac{1}{n^2}$, so $b_n$ decreases; and $\\frac{1}{n^2}\\to 0$.',
          hint3: 'Both AST conditions hold, so the series converges by the AST.',
          explanation: '$b_n=\\frac{1}{n^2}$ is positive, decreasing, and $\\to 0$. Both conditions hold ⇒ converges by the Alternating Series Test.',
        },
      },
      {
        id: 'ast3-limitdrill',
        type: 'input-boxes' as const,
        content: `**The Deciding Limit** 🧮

For each alternating series, compute $\\displaystyle\\lim_{n\\to\\infty} b_n$ — the value that decides whether the AST can even apply. Enter the limit.

**1)** $\\sum (-1)^{n}\\,\\dfrac{1}{n+4}$,  so $b_n = \\dfrac{1}{n+4}$
**2)** $\\sum (-1)^{n+1}\\,\\dfrac{4n+1}{2n}$,  so $b_n = \\dfrac{4n+1}{2n}$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '2'],
          hint1: 'As $n\\to\\infty$, $\\frac{1}{n+4}\\to 0$.',
          hint2: 'Divide by $n$: $\\frac{4n+1}{2n}=\\frac{4 + 1/n}{2}\\to \\frac{4}{2}=2$.',
          hint3: 'A nonzero limit means Condition 2 fails and the AST cannot give convergence.',
          explanation: '1) $0$ — Condition 2 met, AST can apply (and it converges).  2) $2 \\ne 0$ — Condition 2 fails, so this series diverges by the $n$-th term test.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'alternating-series-test',
    sections: [
      {
        id: 'ast4-intro',
        type: 'text' as const,
        content: `# 🔁 The Alternating Series Test

**Part 4 of 7 — The Error (Remainder) Bound**

---

> 🔑 **The payoff:** when an alternating series converges by the AST, the error from stopping at the $n$-th partial sum is **no larger than the first term you left out**. This is one of the most useful — and most testable — facts in BC.`,
      },
      {
        id: 'ast4-bound',
        type: 'text' as const,
        content: `## The Alternating Series Remainder Bound

Let $S$ be the true sum and $S_n = \\sum_{k=1}^{n}(\\pm b_k)$ the $n$-th partial sum of a **convergent** alternating series (passing both AST conditions). Define the remainder $R_n = S - S_n$. Then:

$$\\boxed{\\;|R_n| = |S - S_n| \\le b_{n+1}\\;}$$

In words: **the error is at most the size of the first omitted term.** Because the partial sums bounce above and below $S$, the truth is always trapped between $S_n$ and $S_{n+1}$, so it can't be farther than the gap $b_{n+1}$ between them.

> 💡 **A bonus you get for free:** the sign of the first omitted term tells you which *side* $S_n$ is on. If the next term you'd add is positive, $S_n$ is an **underestimate**; if negative, an **overestimate**.

> ⚠️ This bound applies **only** to alternating series that satisfy the AST conditions ($b_n$ decreasing to $0$). Do not use it on positive-term series.`,
      },
      {
        id: 'ast4-worked',
        type: 'text' as const,
        content: `## Worked Example: Bounding the Error

Estimate $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}$ with the first **four** terms, and bound the error.

$$S_4 = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} = \\frac{12 - 6 + 4 - 3}{12} = \\frac{7}{12} \\approx 0.5833.$$

The first **omitted** term is the 5th: $\\dfrac{(-1)^{6}}{5} = +\\dfrac{1}{5}$, so $b_5 = \\dfrac15$. Therefore

$$|R_4| = |S - S_4| \\le b_5 = \\frac{1}{5} = 0.2.$$

The next omitted term is **positive**, so $S_4$ is an **underestimate** — and indeed $S = \\ln 2 \\approx 0.693 > 0.583$. ✓

> ✅ **Check:** the true error is $|\\,0.693 - 0.583\\,| \\approx 0.110$, which is $\\le 0.2$ as promised.`,
      },
      {
        id: 'ast4-bounddrill',
        type: 'input-boxes' as const,
        content: `**Bound the Error** 🧮

For $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n!} = 1 - \\frac{1}{2} + \\frac{1}{6} - \\frac{1}{24} + \\cdots$ (here $b_n = \\frac{1}{n!}$):

**1)** Using $S_3$ (first 3 terms), the error bound is $b_4 = \\dfrac{1}{4!} = \\,?$  *(enter a fraction or decimal)*
**2)** Using $S_4$, the error bound is $b_5 = \\dfrac{1}{5!} = \\,?$  *(fraction or decimal)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/24', '1/120'],
          hint1: 'The error bound after $S_n$ is $b_{n+1}$, the size of the FIRST omitted term.',
          hint2: '$4! = 24$, so $b_4 = \\frac{1}{24} \\approx 0.0417$.',
          hint3: '$5! = 120$, so $b_5 = \\frac{1}{120} \\approx 0.00833$.',
          explanation: '1) After 3 terms the first omitted term is $b_4 = \\frac{1}{4!} = \\frac{1}{24}$.  2) After 4 terms it is $b_5 = \\frac{1}{5!} = \\frac{1}{120}$. Each is the size of the next term you didn\'t add.',
        },
      },
      {
        id: 'ast4-howmany',
        type: 'text' as const,
        content: `## "How Many Terms for a Given Accuracy?"

A classic question reverses the bound: **how many terms** guarantee an error below some target $\\varepsilon$?

Solve $b_{n+1} \\le \\varepsilon$ for $n$.

### Example: error $< 0.01$ for $\\sum \\frac{(-1)^{n+1}}{n}$

We need $b_{n+1} = \\dfrac{1}{n+1} \\le 0.01$, i.e. $n + 1 \\ge 100$, so $n \\ge 99$.

Using $S_{99}$ (the first **99** terms) guarantees $|R_{99}| \\le b_{100} = \\frac{1}{100} = 0.01$.

> 💡 **Watch the index.** You bound $R_n$ by $b_{n+1}$, so the inequality is on $b_{n+1}$, not $b_n$. A careless student solving $b_n \\le \\varepsilon$ lands one term off.`,
      },
      {
        id: 'ast4-howmanyquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n^2}$, how many terms guarantee an error of at most $\\frac{1}{100}$? (Solve $b_{n+1}=\\frac{1}{(n+1)^2}\\le\\frac{1}{100}$.)',
              options: [
                '$9$ terms',
                '$10$ terms',
                '$99$ terms',
                '$100$ terms',
              ],
              correctAnswer: 0,
              explanation: 'Need $(n+1)^2 \\ge 100$, so $n+1 \\ge 10$, i.e. $n \\ge 9$. Using the first $9$ terms gives $|R_9| \\le b_{10} = \\frac{1}{100}$. ✓',
            },
            {
              question: 'You approximate a convergent alternating series by $S_6$ and the 7th (first omitted) term is $-\\frac{1}{50}$. What can you say?',
              options: [
                '$|S - S_6| \\le \\frac{1}{50}$, and $S_6$ is an overestimate',
                '$|S - S_6| \\le \\frac{1}{50}$, and $S_6$ is an underestimate',
                '$|S - S_6| \\le \\frac{1}{49}$',
                'Nothing — the bound needs all terms positive',
              ],
              correctAnswer: 0,
              explanation: 'The error is at most the size of the first omitted term: $|R_6| \\le \\frac{1}{50}$. Since that omitted term is negative, adding it would lower the sum — so $S_6$ currently sits ABOVE $S$: an overestimate.',
            },
          ],
        },
      },
      {
        id: 'ast4-bounddrop',
        type: 'dropdown-select' as const,
        content: `**Match the Bound** 🔽

A convergent alternating series has $b_n = \\dfrac{1}{n}$. Pick the correct error bound and side for each partial sum.`,
        exercise: {
          dropdowns: [
            { label: 'Error bound after $S_4$:', options: ['$\\dfrac{1}{5}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$'] },
            { label: 'Error bound after $S_{10}$:', options: ['$\\dfrac{1}{11}$', '$\\dfrac{1}{10}$', '$\\dfrac{1}{9}$', '$\\dfrac{1}{12}$'] },
            { label: 'For $\\sum(-1)^{n+1}b_n$, the first omitted term after $S_4$ has sign:', options: ['positive', 'negative'] },
          ],
          correctAnswers: ['$\\dfrac{1}{5}$', '$\\dfrac{1}{11}$', 'positive'],
          hint1: 'The bound after $S_n$ is $b_{n+1}$ — use the NEXT index.',
          hint2: 'After $S_4$ that\'s $b_5=\\frac15$; after $S_{10}$ that\'s $b_{11}=\\frac{1}{11}$.',
          hint3: 'In $\\sum(-1)^{n+1}b_n$, the 5th term carries $(-1)^{6}=+1$, so it is positive.',
          explanation: 'Bound after $S_n$ is $b_{n+1}$: so $b_5=\\frac15$ and $b_{11}=\\frac{1}{11}$. The 5th term has sign $(-1)^{5+1}=+1$ (positive), meaning $S_4$ is an underestimate.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'alternating-series-test',
    sections: [
      {
        id: 'ast5-intro',
        type: 'text' as const,
        content: `# 🔁 The Alternating Series Test

**Part 5 of 7 — Absolute vs. Conditional Convergence**

---

> 🔑 **The big distinction:** a convergent alternating series can be **absolutely** convergent (robust — the all-positive version also converges) or only **conditionally** convergent (fragile — it converges *only because* the signs alternate).`,
      },
      {
        id: 'ast5-defs',
        type: 'text' as const,
        content: `## Two Flavors of Convergence

Given a series $\\sum a_n$, look at the **absolute-value series** $\\sum |a_n|$:

| If… | …then $\\sum a_n$ is |
|-----|---------------------|
| $\\sum \\lvert a_n\\rvert$ converges | **Absolutely convergent** |
| $\\sum \\lvert a_n\\rvert$ diverges, but $\\sum a_n$ converges | **Conditionally convergent** |
| $\\sum a_n$ diverges | (just) **divergent** |

**Key theorem:** absolute convergence ⟹ convergence. If $\\sum |a_n|$ converges, so does $\\sum a_n$ — automatically. (The converse is false: convergence does **not** force absolute convergence.)

> 💡 **The decision flow:** First test $\\sum |a_n|$ (with $p$-series, ratio, comparison, etc.). If it converges ⇒ **absolutely convergent, done**. If it diverges, fall back to the AST on $\\sum a_n$; if the AST gives convergence ⇒ **conditionally convergent**.`,
      },
      {
        id: 'ast5-classify1',
        type: 'text' as const,
        content: `## Two Worked Classifications

### $\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}$ — conditional

- Absolute series: $\\sum \\dfrac{1}{n}$ is the harmonic series — **diverges** ($p=1$).
- Original series: passes the AST (shown in Part 3) — **converges**.

Converges, but not absolutely ⇒ **conditionally convergent**.

### $\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n^2}$ — absolute

- Absolute series: $\\sum \\dfrac{1}{n^2}$ is a $p$-series with $p=2>1$ — **converges**.

That's all we need: $\\sum|a_n|$ converges ⇒ the series is **absolutely convergent** (and therefore convergent). No AST required.

> 🔑 **Memory hook:** $\\frac{(-1)^{n+1}}{n}$ is *conditional*; $\\frac{(-1)^{n+1}}{n^2}$ is *absolute*. The squared denominator is the one strong enough to converge even without the alternating signs.`,
      },
      {
        id: 'ast5-classifydrop',
        type: 'dropdown-select' as const,
        content: `**Classify Each Series** 🔽

Decide: absolutely convergent, conditionally convergent, or divergent.`,
        exercise: {
          dropdowns: [
            { label: '$\\sum \\dfrac{(-1)^{n+1}}{n^3}$', options: ['absolutely convergent', 'conditionally convergent', 'divergent'] },
            { label: '$\\sum \\dfrac{(-1)^{n+1}}{\\sqrt{n}}$', options: ['absolutely convergent', 'conditionally convergent', 'divergent'] },
            { label: '$\\sum (-1)^{n}\\,\\dfrac{n}{n+1}$', options: ['absolutely convergent', 'conditionally convergent', 'divergent'] },
          ],
          correctAnswers: ['absolutely convergent', 'conditionally convergent', 'divergent'],
          hint1: 'Always test the absolute series $\\sum |a_n|$ first — compare to a $p$-series.',
          hint2: '$\\sum\\frac{1}{n^3}$ has $p=3>1$ (converges); $\\sum\\frac{1}{\\sqrt n}$ has $p=\\frac12\\le 1$ (diverges).',
          hint3: 'For the third, $\\frac{n}{n+1}\\to 1\\ne 0$, so the terms don\'t vanish — it diverges outright.',
          explanation: '1) $\\sum\\frac{1}{n^3}$ converges ($p=3$) ⇒ absolutely convergent. 2) $\\sum\\frac{1}{\\sqrt n}$ diverges ($p=\\frac12$) but the AST gives convergence ⇒ conditionally convergent. 3) $\\frac{n}{n+1}\\to 1\\ne 0$ ⇒ divergent by the $n$-th term test.',
        },
      },
      {
        id: 'ast5-abstheorem',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $\\sum |a_n|$ converges, what must be true of $\\sum a_n$?',
              options: [
                'It converges (absolute convergence implies convergence)',
                'It diverges',
                'It is conditionally convergent',
                'Nothing can be concluded',
              ],
              correctAnswer: 0,
              explanation: 'Absolute convergence implies convergence — this is a theorem. Convergence of $\\sum|a_n|$ guarantees $\\sum a_n$ converges, and we call it absolutely convergent.',
            },
            {
              question: 'A series converges by the AST, but $\\sum|a_n|$ diverges. The series is:',
              options: [
                'Conditionally convergent',
                'Absolutely convergent',
                'Divergent',
                'Both absolutely and conditionally convergent',
              ],
              correctAnswer: 0,
              explanation: 'It converges (by the AST) yet its absolute version diverges — that is exactly the definition of conditional convergence.',
            },
          ],
        },
      },
      {
        id: 'ast5-pdrill',
        type: 'input-boxes' as const,
        content: `**Find the $p$-Value** 🧮

To classify $\\sum\\frac{(-1)^{n+1}}{n^{p}}$, you test the absolute series $\\sum\\frac{1}{n^{p}}$ — a $p$-series that converges exactly when $p>1$. Enter the value of $p$ for each absolute series.

**1)** $\\sum \\dfrac{1}{n^4}$,  $p = \\,?$
**2)** $\\sum \\dfrac{1}{\\sqrt{n}}$,  $p = \\,?$  *(fraction or decimal)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '1/2'],
          hint1: 'Rewrite each as $n$ to a power: $\\frac{1}{n^4}=n^{-4}$, so $p=4$.',
          hint2: '$\\sqrt{n}=n^{1/2}$, so $\\frac{1}{\\sqrt n}=n^{-1/2}$ and $p=\\frac12$.',
          hint3: 'A $p$-series converges iff $p>1$. So $p=4$ converges (⇒ absolute); $p=\\frac12\\le 1$ diverges (⇒ at best conditional).',
          explanation: '1) $p=4>1$, so $\\sum\\frac{1}{n^4}$ converges ⇒ the alternating version is absolutely convergent.  2) $p=\\frac12\\le 1$, so $\\sum\\frac{1}{\\sqrt n}$ diverges ⇒ the alternating version is only conditionally convergent.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'alternating-series-test',
    sections: [
      {
        id: 'ast6-intro',
        type: 'text' as const,
        content: `# 🔁 The Alternating Series Test

**Part 6 of 7 — Pitfalls & Fine Print**

---

> 🔑 **Goal:** know exactly when the AST does and doesn't apply, so you never claim convergence the test can't deliver — and never miss a divergence it makes obvious.`,
      },
      {
        id: 'ast6-pitfalls',
        type: 'text' as const,
        content: `## The Five Most Common Mistakes

| # | Mistake | Fix |
|---|---------|-----|
| 1 | Concluding **divergence** from a failed AST | A failed AST is usually just **inconclusive** — try another test |
| 2 | Forgetting Condition 1 (decreasing) | Always verify $b_{n+1}\\le b_n$, not just $b_n\\to 0$ |
| 3 | Bounding the error with $b_n$ instead of $b_{n+1}$ | The remainder $\\lvert R_n\\rvert \\le b_{n+1}$ — the **next** term |
| 4 | Using the error bound on a positive-term series | It's an *alternating*-series bound only |
| 5 | Mixing up the two convergence flavors | Test $\\sum\\lvert a_n\\rvert$ first; only then decide absolute vs. conditional |

> ⚠️ **The one exception to "failed test = inconclusive":** if Condition 2 fails because $b_n \\not\\to 0$ (equivalently $a_n \\not\\to 0$), the series genuinely **diverges** — by the $n$-th Term Test, not the AST. A failed *decreasing* condition, by contrast, leaves the AST inconclusive.`,
      },
      {
        id: 'ast6-pitquiz',
        type: 'multiple-choice' as const,
        content: `**Spot the Error** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student writes: "$\\sum\\frac{(-1)^n n}{n+4}$ fails the AST because $b_n\\to 1\\ne 0$, so the AST is inconclusive." What\'s wrong?',
              options: [
                'The conclusion should be that the series DIVERGES (by the $n$-th term test), not "inconclusive"',
                'Nothing — the statement is correct',
                '$b_n$ actually goes to $0$',
                'The series is alternating, so it must converge',
              ],
              correctAnswer: 0,
              explanation: 'When $b_n \\not\\to 0$, the terms $a_n$ don\'t vanish, so the series diverges by the $n$-th Term Test. This is the one case where a failed Condition 2 gives a definitive answer — divergence — rather than "inconclusive."',
            },
            {
              question: 'Which statement about the AST is TRUE?',
              options: [
                'If the AST conditions fail to hold, the series may still converge by another test',
                'The AST can prove a series diverges whenever its conditions fail',
                'The AST applies to any series with some negative terms',
                'The AST requires $\\sum |a_n|$ to converge',
              ],
              correctAnswer: 0,
              explanation: 'The AST is a one-way (sufficient) test for CONVERGENCE. If its conditions don\'t hold, it\'s generally inconclusive — the series might still converge by, say, absolute convergence. It does not require the absolute series to converge.',
            },
          ],
        },
      },
      {
        id: 'ast6-inconclusive',
        type: 'text' as const,
        content: `## "Inconclusive" vs. "Diverges" — Get This Right

The single most punished error is treating a *failed* AST as *divergence*. Sort it by **which condition** fails:

| Which condition fails | Correct verdict |
|------------------------|-----------------|
| $b_n \\not\\to 0$ (limit isn't $0$) | **Diverges** (by the $n$-th Term Test) |
| $b_n \\to 0$ but not (eventually) decreasing | **AST inconclusive** — try another test |

> ⚠️ A series can have terms $\\to 0$ yet still diverge (e.g. the harmonic series). So $b_n\\to 0$ alone never proves convergence — it only keeps the AST *in play*.`,
      },
      {
        id: 'ast6-verdict',
        type: 'multiple-choice' as const,
        content: `**Inconclusive or Divergent?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An alternating series has $b_n\\to 0$, but $b_n$ is NOT decreasing (and you can\'t make it eventually decreasing). What is the correct verdict from the AST alone?',
              options: [
                'The AST is inconclusive — try another test',
                'The series diverges',
                'The series converges',
                'The series is conditionally convergent',
              ],
              correctAnswer: 0,
              explanation: 'With $b_n\\to 0$ the divergence test gives nothing, and a broken decreasing condition leaves the AST unable to conclude. The honest answer is "inconclusive" — reach for absolute convergence or another test.',
            },
            {
              question: 'For which scenario does a failed AST condition actually PROVE divergence?',
              options: [
                'When $\\lim_{n\\to\\infty} b_n \\ne 0$',
                'When $b_n$ is not decreasing',
                'When the first term is negative',
                'When $\\sum |a_n|$ diverges',
              ],
              correctAnswer: 0,
              explanation: 'If $b_n\\not\\to 0$ then $a_n\\not\\to 0$, so the $n$-th Term Test forces divergence. The other failures don\'t prove divergence on their own.',
            },
          ],
        },
      },
      {
        id: 'ast6-grouping',
        type: 'text' as const,
        content: `## Fine Print: "Eventually" Decreasing Is Enough

Condition 1 needs $b_{n+1}\\le b_n$ only **for all sufficiently large $n$** — the first few terms may misbehave. Convergence depends on the tail, so a finite stretch of increasing terms doesn't break the test, as long as the terms decrease from some point on (and still $\\to 0$).

### Example: $b_n = \\dfrac{\\ln n}{n}$

This actually *increases* from $n=1$ to $n=2$ (since $\\frac{\\ln 1}{1}=0$ and $\\frac{\\ln 2}{2}\\approx 0.347$), then decreases forever after. Check the derivative of $b(x)=\\frac{\\ln x}{x}$:

$$b'(x) = \\frac{1 - \\ln x}{x^2} \\le 0 \\quad\\text{once } \\ln x \\ge 1,\\text{ i.e. } x \\ge e \\approx 2.72.$$

So $b_n$ decreases for $n \\ge 3$, and $\\frac{\\ln n}{n}\\to 0$. The AST still applies — the alternating series converges. ✓

> 💡 You don't need decreasing from the very first term — just an eventual, permanent decline plus a limit of $0$.`,
      },
      {
        id: 'ast6-eventually',
        type: 'dropdown-select' as const,
        content: `**Apply the Fine Print** 🔽

For the alternating series with size $b_n = \\dfrac{\\ln n}{n}$:`,
        exercise: {
          dropdowns: [
            { label: 'Does $b_n \\to 0$?', options: ['Yes', 'No'] },
            { label: 'Is $b_n$ EVENTUALLY decreasing?', options: ['Yes, for $n\\ge 3$', 'No, it increases forever', 'Only for $n=1$'] },
            { label: 'Does the AST apply (give convergence)?', options: ['Yes', 'No'] },
          ],
          correctAnswers: ['Yes', 'Yes, for $n\\ge 3$', 'Yes'],
          hint1: '$\\frac{\\ln n}{n}\\to 0$ since the denominator outgrows the logarithm.',
          hint2: '$b\'(x)=\\frac{1-\\ln x}{x^2}\\le 0$ once $\\ln x\\ge 1$, i.e. $x\\ge e\\approx 2.72$, so decreasing for $n\\ge 3$.',
          hint3: 'Eventually decreasing PLUS limit $0$ is enough — the AST gives convergence.',
          explanation: '$b_n\\to 0$ and $b_n$ decreases for $n\\ge 3$ (an early bump doesn\'t matter), so the AST applies and the series converges.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'alternating-series-test',
    sections: [
      {
        id: 'ast7-intro',
        type: 'text' as const,
        content: `# 🔁 The Alternating Series Test

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) recognize an alternating series, (2) run the two-condition AST, (3) bound the error with $b_{n+1}$, and (4) classify absolute vs. conditional convergence. Let's put it all together.`,
      },
      {
        id: 'ast7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Apply the AST | Check $b_n>0$ **decreasing** AND $b_n\\to 0$ ⇒ converges |
| If $b_n\\not\\to 0$ | Series **diverges** ($n$-th term test) — not "inconclusive" |
| Error after $S_n$ | $\\lvert R_n\\rvert \\le b_{n+1}$ (size of first omitted term) |
| Terms for accuracy $\\varepsilon$ | Solve $b_{n+1}\\le \\varepsilon$ |
| Absolute convergence | $\\sum\\lvert a_n\\rvert$ converges ⇒ done (also converges) |
| Conditional convergence | $\\sum a_n$ converges but $\\sum\\lvert a_n\\rvert$ diverges |

> ⚠️ Remember: bound the error with the **next** term $b_{n+1}$, "eventually decreasing" is enough, and absolute convergence is the strong, sign-independent kind.`,
      },
      {
        id: 'ast7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Classify $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{2n-1} = 1-\\frac13+\\frac15-\\cdots$',
              options: [
                'Conditionally convergent',
                'Absolutely convergent',
                'Divergent',
                'Absolutely AND conditionally convergent',
              ],
              correctAnswer: 0,
              explanation: 'The absolute series $\\sum\\frac{1}{2n-1}$ behaves like $\\sum\\frac{1}{2n}=\\frac12\\sum\\frac1n$, which diverges. But $b_n=\\frac{1}{2n-1}$ decreases to $0$, so the AST gives convergence. Converges but not absolutely ⇒ conditionally convergent. (Its sum is $\\frac{\\pi}{4}$.)',
            },
            {
              question: 'For $\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n^3}$, you use $S_2 = 1 - \\frac18 = 0.875$. What is the best error bound?',
              options: [
                '$|R_2| \\le \\frac{1}{27}$',
                '$|R_2| \\le \\frac{1}{8}$',
                '$|R_2| \\le \\frac{1}{64}$',
                '$|R_2| \\le \\frac{1}{2}$',
              ],
              correctAnswer: 0,
              explanation: 'After $S_2$, the first omitted term is the 3rd: $b_3 = \\frac{1}{3^3} = \\frac{1}{27}$. So $|R_2|\\le b_3 = \\frac{1}{27}\\approx 0.037$.',
            },
          ],
        },
      },
      {
        id: 'ast7-mixeddrill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

Consider $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{2^n} = \\frac12 - \\frac14 + \\frac18 - \\cdots$ (so $b_n = \\frac{1}{2^n}$).

**1)** The partial sum $S_3 = \\frac12 - \\frac14 + \\frac18 = \\,?$  *(enter a fraction or decimal)*
**2)** The error bound after $S_3$ is $b_4 = \\frac{1}{2^4} = \\,?$  *(fraction or decimal)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3/8', '1/16'],
          hint1: 'Common denominator $8$: $\\frac{4}{8}-\\frac{2}{8}+\\frac{1}{8} = \\frac{3}{8}$.',
          hint2: 'The error bound is the size of the FIRST omitted term, $b_4$.',
          hint3: '$2^4 = 16$, so $b_4 = \\frac{1}{16} = 0.0625$.',
          explanation: '1) $S_3 = \\frac{4-2+1}{8} = \\frac38 = 0.375$.  2) $b_4 = \\frac{1}{16} = 0.0625$. (This is a geometric series with ratio $-\\frac12$; its true sum is $\\frac{1/2}{1+1/2} = \\frac13 \\approx 0.333$, and indeed $|0.333-0.375|=0.042 \\le 0.0625$.) ✓',
        },
      },
      {
        id: 'ast7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which two conditions does the Alternating Series Test require?',
              options: [
                '$b_n$ is decreasing AND $\\lim_{n\\to\\infty} b_n = 0$',
                '$\\lim_{n\\to\\infty} b_n = 0$ AND $\\sum b_n$ converges',
                '$b_n$ is increasing AND $\\lim_{n\\to\\infty} b_n = 0$',
                '$b_n>0$ AND the series is geometric',
              ],
              correctAnswer: 0,
              explanation: 'The AST needs the positive sizes $b_n$ to be (eventually) decreasing and to have limit $0$. Both together guarantee convergence of the alternating series.',
            },
            {
              question: 'You approximate a convergent alternating series with $S_5$. The 6th term (first omitted) is $\\frac{1}{36}$. The error satisfies:',
              options: [
                '$|S - S_5| \\le \\frac{1}{36}$',
                '$|S - S_5| \\le \\frac{1}{25}$',
                '$|S - S_5| = \\frac{1}{36}$ exactly',
                '$|S - S_5| \\le \\frac{1}{6}$',
              ],
              correctAnswer: 0,
              explanation: 'The remainder is bounded by the size of the first omitted term: $|R_5| \\le b_6 = \\frac{1}{36}$. It is a bound ($\\le$), not an exact value.',
            },
            {
              question: 'The series $\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{\\sqrt{n}}$ is:',
              options: [
                'Conditionally convergent',
                'Absolutely convergent',
                'Divergent',
                'Neither convergent nor divergent',
              ],
              correctAnswer: 0,
              explanation: 'The absolute series $\\sum\\frac{1}{\\sqrt n}$ is a $p$-series with $p=\\frac12\\le 1$, so it diverges. But $b_n=\\frac{1}{\\sqrt n}$ decreases to $0$, so the AST gives convergence. Converges but not absolutely ⇒ conditionally convergent.',
            },
          ],
        },
      },
    ],
  },
]
