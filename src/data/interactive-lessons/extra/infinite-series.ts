import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Infinite Series (Algebra 2).
 * Registry key: 'infinite-series' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'infinite-series',
    sections: [
      {
        id: 'is1-intro',
        type: 'text' as const,
        content: `# ♾️ Infinite Series

**Part 1 of 5 — From Sequences to Series**

---

### Topics in This Part

| Section |
|---------|
| Sequence vs. Series |
| Partial Sums |
| Summation (Sigma) Notation |

> 🔑 **Key Concept:** A **series** is what you get when you *add up* the terms of a sequence. An **infinite series** keeps adding forever — and the surprising idea of this lesson is that an endless sum can still land on a single, finite number.`,
      },
      {
        id: 'is1-seq-vs-series',
        type: 'text' as const,
        content: `## Sequence vs. Series

A **sequence** is an ordered *list* of numbers. A **series** is the *sum* of those numbers.

| | Looks like | Symbol |
|---|---|---|
| **Sequence** | $2,\\; 4,\\; 8,\\; 16,\\; \\dots$ | commas |
| **Series** | $2 + 4 + 8 + 16 + \\cdots$ | plus signs |

The numbers themselves are called **terms**. We label them $a_1, a_2, a_3, \\dots$, where $a_1$ is the first term.

### Finite vs. Infinite

- A **finite** series stops: $2 + 4 + 8 + 16$ (four terms).
- An **infinite** series never stops: $2 + 4 + 8 + 16 + \\cdots$ — the $\\cdots$ means "forever."

> 💡 The difference is just punctuation, but it changes everything. A finite sum is always a plain number. An infinite sum *might* be a number — or it might blow up to infinity.`,
      },
      {
        id: 'is1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of the following is a *series*?',
              options: ['$3,\\; 6,\\; 9,\\; 12$', '$3 + 6 + 9 + 12$', 'The list $\\{3, 6, 9\\}$', '$a_n = 3n$'],
              correctAnswer: 1,
              explanation: 'A series uses plus signs to **add** the terms: $3+6+9+12$. The comma-separated list is a sequence, and $a_n = 3n$ is a formula for the terms.',
            },
            {
              question: 'In the series $5 + 10 + 20 + 40 + \\cdots$, what is the third term $a_3$?',
              options: ['$10$', '$20$', '$40$', '$3$'],
              correctAnswer: 1,
              explanation: 'Count from the start: $a_1 = 5$, $a_2 = 10$, $a_3 = 20$. The subscript tells you the position of a term, not its value.',
            },
          ],
        },
      },
      {
        id: 'is1-partial-sums',
        type: 'text' as const,
        content: `## Partial Sums

We can't write down an *infinite* sum all at once, so we sneak up on it using **partial sums**. The $n$-th partial sum, written $S_n$, adds just the first $n$ terms.

For the series $1 + 2 + 4 + 8 + \\cdots$:

$$S_1 = 1$$
$$S_2 = 1 + 2 = 3$$
$$S_3 = 1 + 2 + 4 = 7$$
$$S_4 = 1 + 2 + 4 + 8 = 15$$

Each partial sum builds on the last: $S_n = S_{n-1} + a_n$.

> 🔑 **Big Idea:** To understand an infinite series, we watch what the sequence of partial sums $S_1, S_2, S_3, \\dots$ *does*. If they home in on one number, the infinite series **equals** that number. (We make this precise in Part 3.)`,
      },
      {
        id: 'is1-partial-drill',
        type: 'input-boxes' as const,
        content: `**Compute Partial Sums** 🧮

For the series $3 + 6 + 9 + 12 + 15 + \\cdots$, find each partial sum.

**1)** $S_2 = \\,?$
**2)** $S_3 = \\,?$
**3)** $S_4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '18', '30'],
          hint1: '$S_2 = a_1 + a_2 = 3 + 6$.',
          hint2: '$S_3 = S_2 + a_3 = 9 + 9$.',
          hint3: '$S_4 = S_3 + a_4 = 18 + 12$.',
          explanation: '$S_2 = 3+6 = 9$; $S_3 = 9 + 9 = 18$; $S_4 = 18 + 12 = 30$. Each partial sum adds the next term to the previous total.',
        },
      },
      {
        id: 'is1-sigma',
        type: 'text' as const,
        content: `## Summation (Sigma) Notation

Writing out long sums is tedious, so mathematicians use the Greek capital sigma $\\sum$ as shorthand for "add these up."

$$\\sum_{n=1}^{4} 2n \\;=\\; 2(1) + 2(2) + 2(3) + 2(4) \\;=\\; 2 + 4 + 6 + 8 \\;=\\; 20$$

Read it like a recipe:
- $n = 1$ at the bottom is the **starting index**.
- $4$ on top is the **last index** (an $\\infty$ here means an infinite series).
- $2n$ is the **rule** for each term — plug in $n = 1, 2, 3, 4$.

| Sigma form | Expanded |
|---|---|
| $\\sum_{n=1}^{3} n^2$ | $1 + 4 + 9 = 14$ |
| $\\sum_{k=1}^{4} 5$ | $5 + 5 + 5 + 5 = 20$ |
| $\\sum_{n=1}^{\\infty} \\left(\\tfrac{1}{2}\\right)^n$ | $\\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{1}{8} + \\cdots$ |

> 💡 The index letter ($n$, $k$, $i$, …) is just a placeholder — it never appears in the answer.`,
      },
      {
        id: 'is1-sigma-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand and evaluate $\\sum_{n=1}^{3} (2n + 1)$.',
              options: ['$3 + 5 + 7 = 15$', '$2 + 4 + 6 = 12$', '$1 + 3 + 5 = 9$', '$3 + 6 + 9 = 18$'],
              correctAnswer: 0,
              explanation: 'Plug in $n=1,2,3$: $(2\\cdot1+1) + (2\\cdot2+1) + (2\\cdot3+1) = 3 + 5 + 7 = 15$.',
            },
            {
              question: 'What does the $\\infty$ symbol on top of a $\\sum$ tell you?',
              options: ['Stop at the 100th term', 'The series is infinite — keep adding forever', 'The sum equals infinity', 'The first term is infinity'],
              correctAnswer: 1,
              explanation: 'An $\\infty$ upper limit means the series has infinitely many terms. Whether the *sum* is finite is a separate question we tackle in Part 3.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'infinite-series',
    sections: [
      {
        id: 'is2-intro',
        type: 'text' as const,
        content: `# ♾️ Infinite Series

**Part 2 of 5 — Geometric Series & the Common Ratio**

---

> 🔑 **The Star of the Show:** The one infinite series you can fully tame in Algebra 2 is the **geometric series**, where each term is the previous term times a fixed number $r$. Everything in this lesson hinges on $r$.`,
      },
      {
        id: 'is2-geometric',
        type: 'text' as const,
        content: `## What Makes a Series Geometric?

A series is **geometric** when you multiply by the same **common ratio** $r$ to get from each term to the next:

$$a_1 \\;+\\; a_1 r \\;+\\; a_1 r^2 \\;+\\; a_1 r^3 \\;+\\; \\cdots$$

To find $r$, **divide any term by the one before it**:

$$r = \\frac{a_2}{a_1} = \\frac{a_3}{a_2} = \\cdots$$

### Example: $3 + 6 + 12 + 24 + \\cdots$

$$r = \\frac{6}{3} = 2, \\qquad \\frac{12}{6} = 2, \\qquad \\frac{24}{12} = 2 \\;\\checkmark$$

The ratio is consistent, so the series is geometric with $a_1 = 3$ and $r = 2$.

> ⚠️ **Don't confuse geometric with arithmetic.** Arithmetic series *add* a constant ($2 + 5 + 8 + \\cdots$, common difference $3$). Geometric series *multiply* by a constant. Only geometric series have the convergence story we're after.`,
      },
      {
        id: 'is2-find-r',
        type: 'input-boxes' as const,
        content: `**Find the Common Ratio** 🧮

Find $r$ by dividing a term by the one before it. (Fractions like $1/2$ are fine.)

**1)** $5 + 15 + 45 + 135 + \\cdots,\\quad r = \\,?$
**2)** $16 + 8 + 4 + 2 + \\cdots,\\quad r = \\,?$
**3)** $2 - 6 + 18 - 54 + \\cdots,\\quad r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1/2', '-3'],
          hint1: '$r = 15 \\div 5 = 3$.',
          hint2: '$r = 8 \\div 16 = \\tfrac{1}{2}$. The terms shrink, so $|r| < 1$.',
          hint3: '$r = -6 \\div 2 = -3$. Alternating signs mean $r$ is negative.',
          explanation: '1) $r = 3$ (terms grow).  2) $r = \\tfrac{1}{2}$ (terms shrink).  3) $r = -3$ (signs alternate). Always divide a term by the previous term.',
        },
      },
      {
        id: 'is2-nth-term',
        type: 'text' as const,
        content: `## Any Term From the First

Because each step multiplies by $r$, you can jump straight to the $n$-th term:

$$a_n = a_1 \\cdot r^{\\,n-1}$$

The exponent is $n - 1$ (not $n$) because the **first** term has been multiplied by $r$ zero times.

### Example: $4 + 12 + 36 + \\cdots$  ($a_1 = 4$, $r = 3$)

$$a_5 = 4 \\cdot 3^{\\,5-1} = 4 \\cdot 3^4 = 4 \\cdot 81 = 324$$

> 💡 **Sanity check the exponent:** for the first term, $a_1 = a_1 \\cdot r^{\\,1-1} = a_1 \\cdot r^0 = a_1 \\cdot 1 = a_1$. ✓`,
      },
      {
        id: 'is2-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Series** 🔽

For each series, choose its common ratio $r$.`,
        exercise: {
          dropdowns: [
            { label: '$1 + 4 + 16 + 64 + \\cdots$', options: ['$r = 4$', '$r = 3$', '$r = 16$', '$r = \\tfrac{1}{4}$'] },
            { label: '$100 + 50 + 25 + 12.5 + \\cdots$', options: ['$r = \\tfrac{1}{2}$', '$r = 2$', '$r = -50$', '$r = \\tfrac{1}{4}$'] },
            { label: '$9 - 3 + 1 - \\tfrac{1}{3} + \\cdots$', options: ['$r = -\\tfrac{1}{3}$', '$r = \\tfrac{1}{3}$', '$r = -3$', '$r = 3$'] },
          ],
          correctAnswers: ['$r = 4$', '$r = \\tfrac{1}{2}$', '$r = -\\tfrac{1}{3}$'],
          hint1: '$4 \\div 1 = 4$.',
          hint2: '$50 \\div 100 = \\tfrac{1}{2}$ (each term is half the last).',
          hint3: '$-3 \\div 9 = -\\tfrac{1}{3}$; the alternating signs confirm $r < 0$.',
          explanation: 'Divide consecutive terms: $r = 4$, $r = \\tfrac{1}{2}$, $r = -\\tfrac{1}{3}$. A negative $r$ always produces alternating signs.',
        },
      },
      {
        id: 'is2-nth-recap',
        type: 'text' as const,
        content: `## Putting $a_1$ and $r$ to Work

Notice that once you know the **first term** $a_1$ and the **ratio** $r$, the entire series is locked in — every term, and (as we'll see) the whole sum. The $n$-th-term formula is your tool for reaching any single term quickly.

$$a_n = a_1 \\cdot r^{\\,n-1}$$

Let's drill it once more before moving on to the convergence question.`,
      },
      {
        id: 'is2-nth-drill',
        type: 'input-boxes' as const,
        content: `**Use $a_n = a_1 r^{\\,n-1}$** 🧮

**1)** For $2 + 6 + 18 + \\cdots$, find $a_4$.
**2)** For $80 + 40 + 20 + \\cdots$, find $a_5$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['54', '5'],
          hint1: '$a_4 = 2 \\cdot 3^{\\,3} = 2 \\cdot 27$.',
          hint2: '$a_5 = 80 \\cdot \\left(\\tfrac{1}{2}\\right)^{4} = 80 \\cdot \\tfrac{1}{16}$.',
          hint3: 'Remember the exponent is $n-1$: for $a_4$ use $r^3$, and for $a_5$ use $r^4$.',
          explanation: '1) $a_4 = 2\\cdot 3^3 = 2\\cdot 27 = 54$.  2) $a_5 = 80\\cdot(\\tfrac12)^4 = 80\\cdot\\tfrac1{16} = 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'infinite-series',
    sections: [
      {
        id: 'is3-intro',
        type: 'text' as const,
        content: `# ♾️ Infinite Series

**Part 3 of 5 — Convergence: When Does an Infinite Sum Have a Value?**

---

> 🔑 **The Whole Question:** Add infinitely many positive numbers and you might expect the total to be infinite. Sometimes it is. But if the terms shrink fast enough, the partial sums settle on a finite number. That settling-down is called **convergence**.`,
      },
      {
        id: 'is3-converge-idea',
        type: 'text' as const,
        content: `## Watch the Partial Sums

Take the famous series $\\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\dfrac{1}{16} + \\cdots$  ($a_1 = \\tfrac12$, $r = \\tfrac12$).

| $n$ | term $a_n$ | partial sum $S_n$ |
|---|---|---|
| 1 | $\\tfrac{1}{2}$ | $0.5$ |
| 2 | $\\tfrac{1}{4}$ | $0.75$ |
| 3 | $\\tfrac{1}{8}$ | $0.875$ |
| 4 | $\\tfrac{1}{16}$ | $0.9375$ |
| 5 | $\\tfrac{1}{32}$ | $0.96875$ |

The partial sums creep toward $1$ but never overshoot it. We say the series **converges to $1$**.

Now compare $1 + 2 + 4 + 8 + \\cdots$ ($r = 2$): the partial sums $1, 3, 7, 15, 31, \\dots$ explode. This series **diverges** — it has no finite sum.

> 💡 The difference is the size of $r$. When $|r| < 1$ the terms shrink toward $0$ and the sum settles. When $|r| \\ge 1$ the terms don't shrink, so the sum runs away.`,
      },
      {
        id: 'is3-rule',
        type: 'text' as const,
        content: `## The Convergence Rule

> 🔑 **The Rule:** An infinite **geometric** series converges **if and only if** $\\;|r| < 1\\;$ (that is, $-1 < r < 1$).
> - If $|r| < 1$ → **converges** (has a finite sum).
> - If $|r| \\ge 1$ → **diverges** (no finite sum).

| Series | $r$ | $|r| < 1$? | Verdict |
|---|---|---|---|
| $\\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots$ | $\\tfrac12$ | yes | converges |
| $5 + 10 + 20 + \\cdots$ | $2$ | no | diverges |
| $9 - 3 + 1 - \\cdots$ | $-\\tfrac13$ | yes | converges |
| $7 + 7 + 7 + \\cdots$ | $1$ | no | diverges |

> ⚠️ **Watch the absolute value.** A ratio of $r = -\\tfrac{1}{2}$ converges because $|-\\tfrac12| = \\tfrac12 < 1$. Don't reject a series just because $r$ is negative — check the *size* of $r$, ignoring its sign.`,
      },
      {
        id: 'is3-converge-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which infinite geometric series **converges**?',
              options: ['$3 + 6 + 12 + \\cdots\\;(r=2)$', '$8 + 4 + 2 + \\cdots\\;(r=\\tfrac12)$', '$1 + 1 + 1 + \\cdots\\;(r=1)$', '$2 + 6 + 18 + \\cdots\\;(r=3)$'],
              correctAnswer: 1,
              explanation: 'Convergence needs $|r| < 1$. Only $r = \\tfrac12$ qualifies; the others have $r \\ge 1$, so their terms never shrink and the sums blow up.',
            },
            {
              question: 'Does $\\;20 - 10 + 5 - 2.5 + \\cdots\\;$ converge?',
              options: ['Yes, because $|r| = \\tfrac12 < 1$', 'No, because $r$ is negative', 'No, because the terms alternate', 'Yes, because all the terms are positive'],
              correctAnswer: 0,
              explanation: 'Here $r = -10/20 = -\\tfrac12$, and $|-\\tfrac12| = \\tfrac12 < 1$, so it converges. A negative ratio is fine — only the *absolute value* of $r$ matters.',
            },
          ],
        },
      },
      {
        id: 'is3-sign-note',
        type: 'text' as const,
        content: `## A Word on Negative Ratios

The trickiest cases are negative ratios, because the signs flip back and forth. The convergence test is exactly the same — just look at $|r|$:

| Series | $r$ | $|r|$ | Converges? |
|---|---|---|---|
| $1 - \\tfrac12 + \\tfrac14 - \\cdots$ | $-\\tfrac12$ | $\\tfrac12$ | yes ✓ |
| $1 - 2 + 4 - 8 + \\cdots$ | $-2$ | $2$ | no ✗ |
| $1 - 1 + 1 - 1 + \\cdots$ | $-1$ | $1$ | no ✗ |

> 💡 The last row is the boundary case $r = -1$. Its partial sums bounce $1, 0, 1, 0, \\dots$ forever and never settle on one value, so it diverges. The boundary $|r| = 1$ is **always** divergent.`,
      },
      {
        id: 'is3-converge-dropdown',
        type: 'dropdown-select' as const,
        content: `**Converge or Diverge?** 🔽

Decide whether each infinite geometric series has a finite sum.`,
        exercise: {
          dropdowns: [
            { label: '$1 + \\tfrac13 + \\tfrac19 + \\cdots\\;(r = \\tfrac13)$', options: ['Converges', 'Diverges'] },
            { label: '$4 + 8 + 16 + \\cdots\\;(r = 2)$', options: ['Converges', 'Diverges'] },
            { label: '$10 - 10 + 10 - \\cdots\\;(r = -1)$', options: ['Converges', 'Diverges'] },
            { label: '$6 - 2 + \\tfrac23 - \\cdots\\;(r = -\\tfrac13)$', options: ['Converges', 'Diverges'] },
          ],
          correctAnswers: ['Converges', 'Diverges', 'Diverges', 'Converges'],
          hint1: 'Compare $|r|$ to $1$: converges only when $|r| < 1$.',
          hint2: 'Be careful with $r = -1$: $|-1| = 1$, which is **not** less than $1$.',
          hint3: '$r = \\tfrac13$ ✓, $r = 2$ ✗, $r = -1$ ✗ (boundary), $r = -\\tfrac13$ ✓.',
          explanation: '$|r|<1$ for the 1st ($\\tfrac13$) and 4th ($\\tfrac13$) series → converge. $r=2$ and $r=-1$ have $|r|\\ge 1$ → diverge. The case $r=-1$ has partial sums $10,0,10,0,\\dots$ that never settle.',
        },
      },
      {
        id: 'is3-boundary-note',
        type: 'text' as const,
        content: `## Exactly Where Is the Line?

The convergence condition $-1 < r < 1$ is a **strict** double inequality. Both endpoints are excluded:

- At $r = 1$, every term equals $a_1$, so the sum grows without bound ($a_1 + a_1 + a_1 + \\cdots$).
- At $r = -1$, the partial sums oscillate and never settle.

> ⚠️ "$|r| < 1$" means *strictly* less than $1$ — the equals case is **out**. Let's pin down the boundary numerically.`,
      },
      {
        id: 'is3-r-range',
        type: 'input-boxes' as const,
        content: `**The Boundary** 🧮

The convergence rule is $-1 < r < 1$.

**1)** What is the largest **integer** value of $r$ for which a geometric series still converges? *(Hint: $r$ must be strictly less than $1$.)*
**2)** Does $r = -1$ give convergence? Enter **1** for yes or **0** for no.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '0'],
          hint1: 'Integers less than $1$: $\\dots, -2, -1, 0$. But $r = -1$ fails ($|-1| = 1$), so the largest *working* integer is $0$.',
          hint2: 'At $r = -1$, $|r| = 1$, which is not strictly less than $1$ — the series diverges.',
          hint3: 'Convergence needs $|r| < 1$, a strict inequality. $r = 0$ works (every term after the first is $0$); $r = -1$ does not.',
          explanation: '1) The largest integer with $|r| < 1$ is $r = 0$.  2) $r = -1$ gives $|r| = 1$, so it does **not** converge → enter $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'infinite-series',
    sections: [
      {
        id: 'is4-intro',
        type: 'text' as const,
        content: `# ♾️ Infinite Series

**Part 4 of 5 — The Sum Formula & Repeating Decimals**

---

> 🔑 **The Payoff:** When a geometric series converges, we don't just *know* it has a sum — we can compute that sum exactly with one clean formula.`,
      },
      {
        id: 'is4-formula',
        type: 'text' as const,
        content: `## The Infinite Geometric Sum Formula

For an infinite geometric series with first term $a_1$ and ratio $|r| < 1$:

$$S = \\frac{a_1}{1 - r}$$

That's it. Plug in the first term and the ratio.

### Example: $\\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots$  ($a_1 = \\tfrac12$, $r = \\tfrac12$)

$$S = \\frac{\\tfrac12}{1 - \\tfrac12} = \\frac{\\tfrac12}{\\tfrac12} = 1$$

This matches the partial sums creeping toward $1$ from Part 3. ✓

### Example: $6 + 2 + \\tfrac23 + \\cdots$  ($a_1 = 6$, $r = \\tfrac13$)

$$S = \\frac{6}{1 - \\tfrac13} = \\frac{6}{\\tfrac23} = 6 \\cdot \\frac{3}{2} = 9$$

> ⚠️ **Check $|r| < 1$ first!** The formula only works for convergent series. If $|r| \\ge 1$, there is **no** sum, and plugging into $\\frac{a_1}{1-r}$ produces a meaningless number. Always verify convergence before you compute.`,
      },
      {
        id: 'is4-sum-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Formula** 🧮

Use $S = \\dfrac{a_1}{1-r}$. Each series converges, so go ahead.

**1)** $8 + 4 + 2 + 1 + \\cdots\\quad(a_1 = 8,\\; r = \\tfrac12)$
**2)** $3 + 1 + \\tfrac13 + \\cdots\\quad(a_1 = 3,\\; r = \\tfrac13)$
**3)** $10 - 5 + 2.5 - \\cdots\\quad(a_1 = 10,\\; r = -\\tfrac12)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '4.5', '20/3'],
          hint1: '$S = \\dfrac{8}{1 - \\tfrac12} = \\dfrac{8}{\\tfrac12} = 8 \\cdot 2$.',
          hint2: '$S = \\dfrac{3}{1 - \\tfrac13} = \\dfrac{3}{\\tfrac23} = 3 \\cdot \\tfrac32$.',
          hint3: '$S = \\dfrac{10}{1 - (-\\tfrac12)} = \\dfrac{10}{\\tfrac32} = 10 \\cdot \\tfrac23$. Subtracting a negative makes the denominator bigger.',
          explanation: '1) $\\dfrac{8}{1/2} = 16$.  2) $\\dfrac{3}{2/3} = \\dfrac92 = 4.5$.  3) $1-(-\\tfrac12) = \\tfrac32$, so $\\dfrac{10}{3/2} = \\dfrac{20}{3} \\approx 6.67$.',
        },
      },
      {
        id: 'is4-decimals',
        type: 'text' as const,
        content: `## A Surprising Use: Repeating Decimals Are Fractions

A repeating decimal is secretly an infinite geometric series. This is *why* every repeating decimal equals a fraction.

### Example: $0.\\overline{3} = 0.3333\\ldots$

Break it into place values:

$$0.\\overline{3} = 0.3 + 0.03 + 0.003 + \\cdots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\cdots$$

This is geometric with $a_1 = \\tfrac{3}{10}$ and $r = \\tfrac{1}{10}$:

$$S = \\frac{\\tfrac{3}{10}}{1 - \\tfrac{1}{10}} = \\frac{\\tfrac{3}{10}}{\\tfrac{9}{10}} = \\frac{3}{9} = \\frac{1}{3}$$

So $0.\\overline{3} = \\tfrac13$ — exactly. ✓

### Example: $0.\\overline{27} = 0.272727\\ldots$

Group in **pairs**: $a_1 = \\tfrac{27}{100}$, $r = \\tfrac{1}{100}$:

$$S = \\frac{\\tfrac{27}{100}}{1 - \\tfrac{1}{100}} = \\frac{\\tfrac{27}{100}}{\\tfrac{99}{100}} = \\frac{27}{99} = \\frac{3}{11}$$

> 💡 The repeating block sets both $a_1$ and $r$: a $1$-digit block gives $r = \\tfrac1{10}$, a $2$-digit block gives $r = \\tfrac1{100}$, a $3$-digit block gives $r = \\tfrac1{1000}$, and so on.`,
      },
      {
        id: 'is4-decimal-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Written as a geometric series, $0.\\overline{7} = 0.7 + 0.07 + 0.007 + \\cdots$ has which $a_1$ and $r$?',
              options: ['$a_1 = \\tfrac{7}{10},\\; r = \\tfrac{1}{10}$', '$a_1 = 7,\\; r = \\tfrac{1}{10}$', '$a_1 = \\tfrac{7}{10},\\; r = \\tfrac{7}{10}$', '$a_1 = 0.7,\\; r = 7$'],
              correctAnswer: 0,
              explanation: 'The first piece is $0.7 = \\tfrac{7}{10}$, and each next piece is $\\tfrac{1}{10}$ as large, so $r = \\tfrac{1}{10}$.',
            },
            {
              question: 'Using $S = \\frac{a_1}{1-r}$ with $a_1 = \\tfrac{7}{10}$ and $r = \\tfrac{1}{10}$, the value of $0.\\overline{7}$ is:',
              options: ['$\\tfrac{7}{9}$', '$\\tfrac{7}{10}$', '$\\tfrac{1}{7}$', '$\\tfrac{7}{11}$'],
              correctAnswer: 0,
              explanation: '$S = \\dfrac{7/10}{1 - 1/10} = \\dfrac{7/10}{9/10} = \\dfrac{7}{9}$. So $0.\\overline{7} = \\tfrac79$.',
            },
          ],
        },
      },
      {
        id: 'is4-decimal-recap',
        type: 'text' as const,
        content: `## The Two-Step Recipe

Every "repeating decimal → fraction" problem follows the same two steps:

1. **Set up $a_1$ and $r$** from the repeating block. The block becomes the numerator of $a_1$; the number of digits $k$ in the block makes $r = \\dfrac{1}{10^k}$.
2. **Plug into $S = \\dfrac{a_1}{1-r}$** and reduce the fraction.

> 💡 A handy shortcut falls out of this: $0.\\overline{d_1 d_2 \\cdots d_k} = \\dfrac{(\\text{the } k\\text{-digit block})}{\\underbrace{99\\cdots9}_{k\\text{ nines}}}$. For example, $0.\\overline{27} = \\tfrac{27}{99}$ and $0.\\overline{6} = \\tfrac{6}{9} = \\tfrac23$. Your turn:`,
      },
      {
        id: 'is4-decimal-drill',
        type: 'input-boxes' as const,
        content: `**Repeating Decimals → Fractions** 🧮

Convert each repeating decimal to a fraction using $S = \\dfrac{a_1}{1-r}$. Enter your answer as a fraction in lowest terms (e.g. \`3/11\`).

**1)** $0.\\overline{1} \\;(a_1 = \\tfrac1{10},\\; r = \\tfrac1{10})$
**2)** $0.\\overline{45} \\;(a_1 = \\tfrac{45}{100},\\; r = \\tfrac1{100})$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/9', '5/11'],
          hint1: '$S = \\dfrac{1/10}{1 - 1/10} = \\dfrac{1/10}{9/10} = \\dfrac{1}{9}$.',
          hint2: '$S = \\dfrac{45/100}{1 - 1/100} = \\dfrac{45/100}{99/100} = \\dfrac{45}{99}$, then reduce by dividing top and bottom by $9$.',
          hint3: '$\\dfrac{45}{99} = \\dfrac{45 \\div 9}{99 \\div 9} = \\dfrac{5}{11}$.',
          explanation: '1) $0.\\overline{1} = \\dfrac{1/10}{9/10} = \\dfrac19$.  2) $0.\\overline{45} = \\dfrac{45}{99} = \\dfrac{5}{11}$ after reducing by $9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'infinite-series',
    sections: [
      {
        id: 'is5-intro',
        type: 'text' as const,
        content: `# ♾️ Infinite Series

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read summation notation, (2) find a common ratio, (3) decide convergence with the $|r| < 1$ rule, and (4) sum a convergent series with $S = \\dfrac{a_1}{1-r}$. Let's put it all together.`,
      },
      {
        id: 'is5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|---|---|
| Find the common ratio | $r = \\dfrac{a_2}{a_1}$ (divide consecutive terms) |
| Find the $n$-th term | $a_n = a_1 \\cdot r^{\\,n-1}$ |
| Test for convergence | converges $\\iff |r| < 1$ |
| Sum a convergent series | $S = \\dfrac{a_1}{1 - r}$ |
| Repeating decimal → fraction | $k$-digit block $\\Rightarrow r = \\dfrac{1}{10^k}$ |

> ⚠️ **The #1 trap:** Using $S = \\frac{a_1}{1-r}$ on a *divergent* series. Always confirm $|r| < 1$ **before** you compute a sum — if $|r| \\ge 1$, the correct answer is "diverges (no sum)."`,
      },
      {
        id: 'is5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the sum of $\\;12 + 4 + \\tfrac43 + \\cdots\\;$ (geometric, $r = \\tfrac13$).',
              options: ['$18$', '$16$', '$36$', '$12$'],
              correctAnswer: 0,
              explanation: '$|r| = \\tfrac13 < 1$, so $S = \\dfrac{12}{1 - \\tfrac13} = \\dfrac{12}{\\tfrac23} = 12 \\cdot \\tfrac32 = 18$.',
            },
            {
              question: 'Which statement about $\\;2 + 6 + 18 + 54 + \\cdots\\;$ is true?',
              options: ['It diverges because $r = 3$ and $|r| \\ge 1$', 'Its sum is $\\frac{2}{1-3} = -1$', 'It converges to $26$', 'It converges because the terms are positive'],
              correctAnswer: 0,
              explanation: 'Here $r = 3$, so $|r| = 3 \\ge 1$ and the series diverges — it has no finite sum. Plugging into the formula would give a nonsense value of $-1$, which is exactly why you must check $|r| < 1$ first.',
            },
          ],
        },
      },
      {
        id: 'is5-strategy',
        type: 'text' as const,
        content: `## A Reliable Game Plan

Whenever you meet an infinite geometric series, run this checklist:

1. **Find $r$** by dividing a term by the one before it.
2. **Check $|r| < 1$.** If not, stop and answer "diverges."
3. **Identify $a_1$** (the first term).
4. **Compute** $S = \\dfrac{a_1}{1 - r}$ and simplify.

> 🔑 Steps 1–2 are non-negotiable. Most wrong answers come from skipping the convergence check and blindly applying the formula. Walk through the plan one piece at a time below.`,
      },
      {
        id: 'is5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Solution** 🔽

You're summing the infinite series $\\;\\dfrac{1}{5} + \\dfrac{1}{25} + \\dfrac{1}{125} + \\cdots$. Choose what goes in each step.`,
        exercise: {
          dropdowns: [
            { label: 'First term $a_1$:', options: ['$\\tfrac15$', '$\\tfrac1{25}$', '$5$', '$1$'] },
            { label: 'Common ratio $r$:', options: ['$\\tfrac15$', '$5$', '$\\tfrac1{25}$', '$-\\tfrac15$'] },
            { label: 'Does it converge?', options: ['Yes, $|r| < 1$', 'No, $|r| \\ge 1$'] },
            { label: 'Sum $S = \\dfrac{a_1}{1-r}$:', options: ['$\\tfrac14$', '$\\tfrac15$', '$\\tfrac45$', '$1$'] },
          ],
          correctAnswers: ['$\\tfrac15$', '$\\tfrac15$', 'Yes, $|r| < 1$', '$\\tfrac14$'],
          hint1: 'The first term written is $\\tfrac15$; divide $\\tfrac1{25} \\div \\tfrac15 = \\tfrac15$ to get $r$.',
          hint2: '$|r| = \\tfrac15 < 1$, so the series converges and the formula applies.',
          hint3: '$S = \\dfrac{1/5}{1 - 1/5} = \\dfrac{1/5}{4/5} = \\dfrac{1}{4}$.',
          explanation: '$a_1 = \\tfrac15$, $r = \\tfrac15$, $|r| < 1$ so it converges, and $S = \\dfrac{1/5}{4/5} = \\dfrac14$.',
        },
      },
      {
        id: 'is5-ready',
        type: 'text' as const,
        content: `## You're Ready

You've covered the full arc: series and partial sums, summation notation, common ratios, the $|r| < 1$ convergence test, the sum formula $S = \\dfrac{a_1}{1-r}$, and the slick repeating-decimal application.

> 💡 One last reminder before the quiz: an infinite sum *can* be finite — but only when the terms shrink fast enough, i.e. when $|r| < 1$. Keep that test front and center.

Finish strong with the Exit Quiz below. ✅`,
      },
      {
        id: 'is5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For an infinite geometric series to have a finite sum, the common ratio must satisfy:',
              options: ['$|r| < 1$', '$r > 0$', '$|r| > 1$', '$r = 1$'],
              correctAnswer: 0,
              explanation: 'An infinite geometric series converges exactly when $|r| < 1$ (i.e. $-1 < r < 1$). Then the terms shrink toward $0$ and the partial sums settle on $\\frac{a_1}{1-r}$.',
            },
            {
              question: 'What is the sum of $\\;9 + 3 + 1 + \\tfrac13 + \\cdots\\;$?',
              options: ['$\\tfrac{27}{2}$', '$13$', '$27$', 'It diverges'],
              correctAnswer: 0,
              explanation: 'Here $a_1 = 9$ and $r = \\tfrac13$ ($|r|<1$), so $S = \\dfrac{9}{1 - \\tfrac13} = \\dfrac{9}{\\tfrac23} = 9 \\cdot \\tfrac32 = \\tfrac{27}{2} = 13.5$.',
            },
            {
              question: 'Which repeating decimal equals $\\tfrac{1}{3}$ when written as an infinite geometric series?',
              options: ['$0.\\overline{3}$', '$0.\\overline{1}$', '$0.\\overline{13}$', '$0.\\overline{33}$'],
              correctAnswer: 0,
              explanation: '$0.\\overline{3} = \\dfrac{3/10}{1 - 1/10} = \\dfrac{3/10}{9/10} = \\dfrac{3}{9} = \\dfrac13$. (Note $0.\\overline{1} = \\tfrac19$, not $\\tfrac13$.)',
            },
          ],
        },
      },
    ],
  },
]
