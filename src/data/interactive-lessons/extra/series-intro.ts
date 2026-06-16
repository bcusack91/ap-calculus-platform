import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Infinite Series (AP Calculus BC).
 * Registry key / DB Topic.slug: 'series-intro'.
 * 7 parts, gold-standard structure: sequences vs. series → partial sums &
 * convergence → sigma notation fluency → geometric series → telescoping series →
 * the nth-term test for divergence → mixed practice & exit quiz. Every partial
 * sum, limit, geometric sum, and telescoped value was recomputed by hand before
 * authoring. Sections strictly alternate teaching (text) with interactive checks.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'series-intro',
    sections: [
      {
        id: 'si1-intro',
        type: 'text' as const,
        content: `# ➕ Introduction to Infinite Series

**Part 1 of 7 — From Sequences to Series**

---

### Topics in This Part

| Section |
|---------|
| Sequence vs. Series |
| Adding Up Infinitely Many Terms |
| Why "Infinite Sum" Even Makes Sense |

> 🔑 **Key Concept:** A **series** is what you get when you *add up* the terms of a **sequence**. The big question of this entire unit is simple to ask but deep to answer: when you add infinitely many numbers, do you get a finite total?`,
      },
      {
        id: 'si1-seq-vs-series',
        type: 'text' as const,
        content: `## Sequence vs. Series

A **sequence** is an ordered *list* of numbers, written $a_1, a_2, a_3, \\ldots$ Its $n$-th entry $a_n$ is the **general term**.

A **series** is the *sum* of those numbers:

$$\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\cdots$$

| | Sequence | Series |
|---|----------|--------|
| What it is | a **list** | a **sum** |
| Example | $1, \\tfrac12, \\tfrac14, \\tfrac18, \\ldots$ | $1 + \\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots$ |
| Notation | $a_n = \\dfrac{1}{2^{\\,n-1}}$ | $\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{1}{2^{\\,n-1}}$ |

> 💡 The same letters appear in both, but a sequence and a series are *different objects*. Keeping them straight is the first skill of the unit. The symbol $\\sum$ (capital Greek sigma) means "sum."`,
      },
      {
        id: 'si1-concept-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of the following is a **series**?',
              options: [
                '$3, 6, 9, 12, \\ldots$',
                '$3 + 6 + 9 + 12 + \\cdots$',
                '$a_n = 3n$',
                'The number $12$',
              ],
              correctAnswer: 1,
              explanation: 'A series is a *sum* of terms (it uses $+$ signs or $\\sum$). The list $3, 6, 9, \\ldots$ and the formula $a_n = 3n$ are the *sequence*; the running total $3 + 6 + 9 + \\cdots$ is the *series*.',
            },
            {
              question: 'For the sequence $a_n = \\dfrac{1}{2^{\\,n-1}}$ (starting at $n=1$), what is the **third term** $a_3$?',
              options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{8}$', '$\\dfrac{1}{3}$'],
              correctAnswer: 1,
              explanation: 'Plug in $n=3$: $a_3 = \\dfrac{1}{2^{\\,3-1}} = \\dfrac{1}{2^2} = \\dfrac14$. The terms are $1, \\tfrac12, \\tfrac14, \\tfrac18, \\ldots$',
            },
          ],
        },
      },
      {
        id: 'si1-general-term',
        type: 'text' as const,
        content: `## Reading the General Term

To list a sequence's terms, substitute $n = 1, 2, 3, \\ldots$ into its general term $a_n$.

| General term $a_n$ | First three terms |
|--------------------|-------------------|
| $a_n = 2n$ | $2, 4, 6, \\ldots$ |
| $a_n = \\dfrac1n$ | $1, \\tfrac12, \\tfrac13, \\ldots$ |
| $a_n = (-1)^n$ | $-1, 1, -1, \\ldots$ |

> 💡 The general term is the engine of a series. Once you can generate terms from $a_n$, you can build the **partial sums** that decide convergence — the focus of Part 2.`,
      },
      {
        id: 'si1-terms-drill',
        type: 'input-boxes' as const,
        content: `**List the Terms** 🧮

For the sequence $a_n = \\dfrac{1}{n}$ (starting at $n=1$), enter the first three terms as fractions or decimals.

**1)** $a_1 = \\,?$
**2)** $a_2 = \\,?$
**3)** $a_3 = \\,?$  *(fraction is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/2', '1/3'],
          hint1: 'Plug $n=1$ into $\\dfrac1n$: $a_1 = \\dfrac11 = 1$.',
          hint2: 'For $n=2$: $a_2 = \\dfrac12$.',
          hint3: 'For $n=3$: $a_3 = \\dfrac13$.',
          explanation: 'The terms of $a_n = \\tfrac1n$ are $1, \\tfrac12, \\tfrac13, \\tfrac14, \\ldots$ Adding them gives the famous **harmonic series**, which we will meet again in Part 6.',
        },
      },
      {
        id: 'si1-why-finite',
        type: 'text' as const,
        content: `## Can an Infinite Sum Be Finite?

It sounds impossible — add infinitely many positive numbers and surely you reach $\\infty$. But not always. Picture walking toward a wall, each step covering **half** the remaining distance:

$$\\tfrac12 + \\tfrac14 + \\tfrac18 + \\tfrac{1}{16} + \\cdots$$

After many steps you are *almost* at the wall but never past it. The total distance covered approaches exactly $1$:

$$\\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots = 1$$

> 🔑 **Key Idea:** An infinite sum can be a finite number. When the running total settles down to a single value $S$, we say the series **converges to $S$**. When it grows without bound (or never settles), the series **diverges**.`,
      },
      {
        id: 'si1-finite-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does it mean for a series to **converge**?',
              options: [
                'Its running totals (partial sums) approach a single finite number',
                'It has finitely many terms',
                'Its terms eventually become negative',
                'Its terms get larger and larger',
              ],
              correctAnswer: 0,
              explanation: 'Convergence means the partial sums settle on one finite value $S$. The series "converges to $S$." If the totals grow without bound or never settle, the series diverges.',
            },
            {
              question: 'The walking-to-the-wall sum $\\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots$ converges to:',
              options: ['$\\tfrac12$', '$1$', '$2$', '$\\infty$'],
              correctAnswer: 1,
              explanation: 'Each step halves the remaining distance, so the total distance covered approaches the full $1$ unit to the wall — never overshooting. The sum is exactly $1$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'series-intro',
    sections: [
      {
        id: 'si2-intro',
        type: 'text' as const,
        content: `# ➕ Introduction to Infinite Series

**Part 2 of 7 — Partial Sums & Convergence**

---

> 🔑 **The Idea:** Instead of trying to add infinitely many terms at once, add the **first $n$** of them. That running total is the $n$-th **partial sum** $S_n$. If the sequence $S_1, S_2, S_3, \\ldots$ approaches a limit, that limit *is* the sum of the series.`,
      },
      {
        id: 'si2-partial-sums',
        type: 'text' as const,
        content: `## The Partial Sum

The **$n$-th partial sum** of $\\sum a_k$ is the sum of just the first $n$ terms:

$$S_n = a_1 + a_2 + \\cdots + a_n = \\sum_{k=1}^{n} a_k$$

The **sum of the series** is the limit of the partial sums:

$$\\sum_{n=1}^{\\infty} a_n = \\lim_{n \\to \\infty} S_n$$

- If $\\displaystyle\\lim_{n\\to\\infty} S_n = S$ (a finite number), the series **converges** to $S$.
- If the limit is $\\pm\\infty$ or does not exist, the series **diverges**.

### Example: the halving series $\\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots$

| $n$ | term $a_n$ | partial sum $S_n$ |
|----|-----------|-------------------|
| 1 | $\\tfrac12$ | $\\tfrac12 = 0.5$ |
| 2 | $\\tfrac14$ | $\\tfrac34 = 0.75$ |
| 3 | $\\tfrac18$ | $\\tfrac78 = 0.875$ |
| 4 | $\\tfrac{1}{16}$ | $\\tfrac{15}{16} = 0.9375$ |

The partial sums march toward $1$, so $S_n \\to 1$ and the series **converges to $1$**.

> 💡 Notice a clean pattern: $S_n = 1 - \\dfrac{1}{2^{\\,n}}$. As $n \\to \\infty$, $\\dfrac{1}{2^{\\,n}} \\to 0$, so $S_n \\to 1$.`,
      },
      {
        id: 'si2-partial-drill',
        type: 'input-boxes' as const,
        content: `**Build the Partial Sums** 🧮

Consider the series $\\;1 + 3 + 5 + 7 + \\cdots\\;$ (the odd numbers). Compute these partial sums.

**1)** $S_1 = \\,?$
**2)** $S_2 = 1 + 3 = \\,?$
**3)** $S_3 = 1 + 3 + 5 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '4', '9'],
          hint1: '$S_1$ is just the first term: $1$.',
          hint2: '$S_2 = 1 + 3 = 4$.',
          hint3: '$S_3 = 1 + 3 + 5 = 9$. (These partial sums are the perfect squares!)',
          explanation: '$S_1=1,\\; S_2=4,\\; S_3=9$. The partial sums grow without bound ($S_n = n^2 \\to \\infty$), so this series **diverges**.',
        },
      },
      {
        id: 'si2-limit-of-Sn',
        type: 'text' as const,
        content: `## Convergence Lives in the Limit of $S_n$

Sometimes you are *handed* a closed form for the partial sum. Then convergence is just a limit:

$$\\sum_{n=1}^{\\infty} a_n = \\lim_{n\\to\\infty} S_n$$

### Example: $S_n = \\dfrac{3n}{n+1}$

Divide top and bottom by $n$:

$$\\lim_{n\\to\\infty}\\frac{3n}{n+1} = \\lim_{n\\to\\infty}\\frac{3}{1 + \\tfrac1n} = \\frac{3}{1+0} = 3$$

A finite limit, so the series **converges to $3$**.

> ⚠️ "Diverges to $\\infty$" still counts as **divergence** — convergence requires a *finite* limit. A partial sum like $S_n = \\sqrt{n}$ grows forever, so its series diverges.`,
      },
      {
        id: 'si2-converge-mc',
        type: 'multiple-choice' as const,
        content: `**Convergence Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A series has partial sums $S_n = \\dfrac{3n}{n+1}$. Does the series converge, and to what?',
              options: [
                'Converges to $3$',
                'Converges to $0$',
                'Diverges to $\\infty$',
                'Converges to $1$',
              ],
              correctAnswer: 0,
              explanation: 'The sum of the series is $\\displaystyle\\lim_{n\\to\\infty} S_n = \\lim_{n\\to\\infty}\\dfrac{3n}{n+1} = 3$ (divide top and bottom by $n$). A finite limit means it **converges to $3$**.',
            },
            {
              question: 'A series has partial sums $S_n = \\sqrt{n}$. What can you conclude?',
              options: [
                'It converges to $0$',
                'It converges to $1$',
                'It diverges, because $S_n \\to \\infty$',
                'It converges to $\\sqrt{2}$',
              ],
              correctAnswer: 2,
              explanation: 'Since $\\sqrt{n} \\to \\infty$ as $n \\to \\infty$, the partial sums grow without bound, so the series **diverges**. Convergence requires the partial sums to settle on a *finite* limit.',
            },
          ],
        },
      },
      {
        id: 'si2-behavior-text',
        type: 'text' as const,
        content: `## Reading Convergence from $S_n$ at a Glance

A quick checklist when you see a closed-form $S_n$:

- **Approaches a number?** Converges to that number.
- **Grows without bound ($\\to \\pm\\infty$)?** Diverges.
- **Oscillates with no single limit?** Diverges.

> 💡 The whole rest of the unit (geometric, telescoping, the $n$-th term test, and later convergence tests) exists to determine $\\lim S_n$ *without* having to compute every partial sum by hand.`,
      },
      {
        id: 'si2-definition-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Behavior** 🔽

Decide whether each series converges or diverges based on its partial sums $S_n$.`,
        exercise: {
          dropdowns: [
            { label: '$S_n = 5 - \\dfrac{1}{n}$:', options: ['converges to $5$', 'converges to $0$', 'diverges', 'converges to $-1$'] },
            { label: '$S_n = 2n$:', options: ['converges to $2$', 'diverges', 'converges to $0$', 'converges to $\\tfrac12$'] },
            { label: '$S_n = \\dfrac{n}{2n+4}$:', options: ['converges to $\\tfrac12$', 'converges to $2$', 'diverges', 'converges to $0$'] },
          ],
          correctAnswers: ['converges to $5$', 'diverges', 'converges to $\\tfrac12$'],
          hint1: 'As $n \\to \\infty$, $\\dfrac1n \\to 0$, so $5 - \\dfrac1n \\to 5$.',
          hint2: '$2n$ grows without bound, so the partial sums never settle — the series diverges.',
          hint3: 'Divide top and bottom of $\\dfrac{n}{2n+4}$ by $n$: $\\dfrac{1}{2 + 4/n} \\to \\dfrac12$.',
          explanation: 'A series converges exactly when $\\lim S_n$ is a finite number. $5 - \\tfrac1n \\to 5$ and $\\tfrac{n}{2n+4} \\to \\tfrac12$ converge; $2n \\to \\infty$ diverges.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'series-intro',
    sections: [
      {
        id: 'si3-intro',
        type: 'text' as const,
        content: `# ➕ Introduction to Infinite Series

**Part 3 of 7 — Sigma Notation Fluency**

---

> 🔑 **Why this part:** Every series you meet on the AP exam is written with $\\sum$. Reading sigma notation fluently — knowing where the sum starts, what each term is, and how to shift the index — is a prerequisite for everything that follows.`,
      },
      {
        id: 'si3-anatomy',
        type: 'text' as const,
        content: `## Anatomy of $\\sum$

$$\\sum_{n=1}^{\\infty} a_n$$

- **$n$** — the *index* (a counter; the letter doesn't matter, $k$ or $i$ work too).
- **$n = 1$** below — the *starting value* of the index.
- **$\\infty$** above — the index runs forever.
- **$a_n$** — the *general term*; substitute each index value and add the results.

### Expanding a sum

$$\\sum_{n=1}^{4} \\frac{1}{n} = \\frac11 + \\frac12 + \\frac13 + \\frac14 = \\frac{25}{12}$$

$$\\sum_{n=0}^{3} 2^{n} = 2^0 + 2^1 + 2^2 + 2^3 = 1 + 2 + 4 + 8 = 15$$

> ⚠️ **Watch the starting index!** $\\displaystyle\\sum_{n=0}^{\\infty}$ and $\\displaystyle\\sum_{n=1}^{\\infty}$ of the *same* formula differ by the $n=0$ term. Always check whether a series starts at $0$ or $1$.`,
      },
      {
        id: 'si3-expand-drill',
        type: 'input-boxes' as const,
        content: `**Expand and Evaluate** 🧮

Write out and add each finite sum.

**1)** $\\displaystyle\\sum_{n=1}^{3} n^2 = \\,?$
**2)** $\\displaystyle\\sum_{k=0}^{2} 3^{k} = \\,?$
**3)** $\\displaystyle\\sum_{n=1}^{4} (-1)^{n} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['14', '13', '0'],
          hint1: '$1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$.',
          hint2: '$3^0 + 3^1 + 3^2 = 1 + 3 + 9 = 13$.',
          hint3: '$(-1)^1 + (-1)^2 + (-1)^3 + (-1)^4 = -1 + 1 - 1 + 1 = 0$.',
          explanation: '1) $14$.  2) $13$.  3) $0$ — the alternating signs cancel in pairs. Reading $(-1)^n$ correctly is essential for alternating series later in BC.',
        },
      },
      {
        id: 'si3-count-text',
        type: 'text' as const,
        content: `## Counting Terms in a Finite Sum

A finite sum $\\displaystyle\\sum_{n=a}^{b} a_n$ has

$$b - a + 1 \\quad \\text{terms.}$$

The "$+1$" is because the count is **inclusive** of both endpoints. For example $\\displaystyle\\sum_{n=3}^{7} a_n$ runs over $n = 3, 4, 5, 6, 7$ — that's $7 - 3 + 1 = 5$ terms.

> ⚠️ Off-by-one errors here are a classic source of lost points. Always list the endpoints in your head: "$3$ up to $7$" $= 5$ values, not $4$.`,
      },
      {
        id: 'si3-notation-mc',
        type: 'multiple-choice' as const,
        content: `**Read the Notation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sum equals $\\dfrac12 + \\dfrac14 + \\dfrac18 + \\cdots$?',
              options: [
                '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{2^{\\,n}}$',
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{1}{2^{\\,n}}$',
                '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{2n}$',
                '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n}{2}$',
              ],
              correctAnswer: 0,
              explanation: 'Starting at $n=1$: $\\frac{1}{2^1} + \\frac{1}{2^2} + \\frac{1}{2^3} + \\cdots = \\frac12 + \\frac14 + \\frac18 + \\cdots$ ✓. Starting at $n=0$ would add an extra $\\frac{1}{2^0}=1$ term in front.',
            },
            {
              question: 'How many terms are in the finite sum $\\displaystyle\\sum_{n=3}^{7} a_n$?',
              options: ['$4$', '$5$', '$7$', '$10$'],
              correctAnswer: 1,
              explanation: 'Count inclusively from $n=3$ to $n=7$: that is $n = 3,4,5,6,7$ — **five** terms. In general $\\sum_{n=a}^{b}$ has $b - a + 1$ terms.',
            },
          ],
        },
      },
      {
        id: 'si3-reindex',
        type: 'text' as const,
        content: `## Re-indexing (Shifting the Index)

The same series can be written with different starting indices. To shift the start from $n=1$ to $n=0$, **replace $n$ with $n+1$** in the formula:

$$\\sum_{n=1}^{\\infty} \\frac{1}{2^{\\,n-1}} \\;=\\; \\sum_{n=0}^{\\infty} \\frac{1}{2^{\\,n}}$$

Both expand to $1 + \\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots$ — identical series, different bookkeeping.

> 💡 **Sanity check after re-indexing:** write out the first two terms of each form. If they match, the shift is correct.`,
      },
      {
        id: 'si3-reindex-dropdown',
        type: 'dropdown-select' as const,
        content: `**Re-index and Count** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{2^{\\,n-1}}$ re-indexed to start at $n=0$:', options: ['$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{1}{2^{\\,n}}$', '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{1}{2^{\\,n+1}}$', '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{1}{2^{\\,n-1}}$', '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{n}{2}$'] },
            { label: 'Number of terms in $\\displaystyle\\sum_{n=2}^{6} a_n$:', options: ['$5$', '$4$', '$6$', '$8$'] },
            { label: 'First term ($n=0$ value) of $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{1}{2^{\\,n}}$:', options: ['$1$', '$\\tfrac12$', '$2$', '$0$'] },
          ],
          correctAnswers: ['$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{1}{2^{\\,n}}$', '$5$', '$1$'],
          hint1: 'Replace $n$ with $n+1$ in $\\tfrac{1}{2^{\\,n-1}}$: the exponent becomes $(n+1)-1 = n$.',
          hint2: 'From $n=2$ to $n=6$ inclusive: $6 - 2 + 1 = 5$ terms.',
          hint3: 'At $n=0$, $\\tfrac{1}{2^0} = \\tfrac11 = 1$.',
          explanation: 'Re-indexing shifts the formula to match the new start; the term count is $b-a+1$; and the first term comes from plugging the starting index into $a_n$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'series-intro',
    sections: [
      {
        id: 'si4-intro',
        type: 'text' as const,
        content: `# ➕ Introduction to Infinite Series

**Part 4 of 7 — Geometric Series**

---

> 🔑 **The Workhorse:** The **geometric series** is the one infinite series whose sum we can write down with a formula. It is the most important example in the whole unit, and it shows up constantly on the AP exam.`,
      },
      {
        id: 'si4-formula',
        type: 'text' as const,
        content: `## The Geometric Series

A **geometric series** has a constant ratio $r$ between consecutive terms:

$$\\sum_{n=0}^{\\infty} a\\, r^{\\,n} = a + ar + ar^2 + ar^3 + \\cdots$$

Here $a$ is the **first term** and $r$ is the **common ratio**.

> 🔑 **Convergence Rule:**
> - If $\\lvert r \\rvert < 1$, the series **converges** and $\\displaystyle\\sum_{n=0}^{\\infty} a r^{\\,n} = \\frac{a}{1 - r}$.
> - If $\\lvert r \\rvert \\ge 1$, the series **diverges**.

### Why the formula works

The partial sum is $S_n = a\\dfrac{1 - r^{\\,n}}{1 - r}$. When $\\lvert r \\rvert < 1$, $r^{\\,n} \\to 0$, so $S_n \\to \\dfrac{a}{1 - r}$.

### Example: $\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac13\\right)^{n}$

Here $a = 1$ (the $n=0$ term) and $r = \\tfrac13$, and $\\lvert r \\rvert < 1$:

$$\\sum_{n=0}^{\\infty} \\left(\\tfrac13\\right)^{n} = \\frac{1}{1 - \\tfrac13} = \\frac{1}{\\tfrac23} = \\frac{3}{2}$$

> ⚠️ **Find $a$ correctly:** $a$ is the *actual first term you write down*, not just the coefficient. For $\\sum_{n=1}^{\\infty} \\tfrac12\\left(\\tfrac12\\right)^{n-1}$ the first term ($n=1$) is $\\tfrac12$, so $a = \\tfrac12$.`,
      },
      {
        id: 'si4-ratio-mc',
        type: 'multiple-choice' as const,
        content: `**Spot the Ratio** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the series $5 + \\dfrac{5}{2} + \\dfrac{5}{4} + \\dfrac{5}{8} + \\cdots$, what are $a$ and $r$?',
              options: [
                '$a = 5,\\; r = \\tfrac12$',
                '$a = 5,\\; r = 2$',
                '$a = \\tfrac12,\\; r = 5$',
                '$a = 5,\\; r = \\tfrac15$',
              ],
              correctAnswer: 0,
              explanation: 'The first term is $a = 5$. Each term is half the previous one ($\\tfrac{5/2}{5} = \\tfrac12$), so $r = \\tfrac12$.',
            },
            {
              question: 'Which geometric series **diverges**?',
              options: [
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac34\\right)^{n}$',
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\left(-\\tfrac12\\right)^{n}$',
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac54\\right)^{n}$',
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\left(0.9\\right)^{n}$',
              ],
              correctAnswer: 2,
              explanation: 'A geometric series diverges when $\\lvert r \\rvert \\ge 1$. Here $\\lvert \\tfrac54 \\rvert = 1.25 \\ge 1$, so it diverges. The others have $\\lvert r \\rvert < 1$ ($\\tfrac34$, $\\tfrac12$, $0.9$) and converge.',
            },
          ],
        },
      },
      {
        id: 'si4-finding-a',
        type: 'text' as const,
        content: `## Identifying $a$ When the Series Doesn't Start at $n=0$

The formula $\\dfrac{a}{1-r}$ uses $a = $ the **first term actually present**. The starting index decides it:

$$\\sum_{n=1}^{\\infty} \\left(\\tfrac12\\right)^{n} = \\underbrace{\\tfrac12}_{n=1} + \\tfrac14 + \\tfrac18 + \\cdots$$

The first term is $\\left(\\tfrac12\\right)^1 = \\tfrac12$, so $a = \\tfrac12$ (not $1$), and the ratio is still $r = \\tfrac12$:

$$\\frac{a}{1-r} = \\frac{1/2}{1 - 1/2} = \\frac{1/2}{1/2} = 1$$

> 💡 **Cross-check:** the $n=0$ version $\\sum_{n=0}^{\\infty}\\left(\\tfrac12\\right)^n = 2$ includes the extra $n=0$ term, which is $1$. Removing it leaves $2 - 1 = 1$ ✓ — matching what we got.`,
      },
      {
        id: 'si4-sum-drill',
        type: 'input-boxes' as const,
        content: `**Sum the Geometric Series** 🧮

Use $\\dfrac{a}{1 - r}$. Enter each sum as a fraction or whole number.

**1)** $\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac12\\right)^{n} = \\,?$
**2)** $\\displaystyle\\sum_{n=1}^{\\infty} \\left(\\tfrac12\\right)^{n} = \\,?$  *(starts at $n=1$!)*
**3)** $\\displaystyle\\sum_{n=0}^{\\infty} 6\\left(\\tfrac13\\right)^{n} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '9'],
          hint1: '$a = 1$ (the $n=0$ term), $r = \\tfrac12$: sum $= \\dfrac{1}{1 - 1/2} = 2$.',
          hint2: 'Starting at $n=1$, the first term is $\\left(\\tfrac12\\right)^1 = \\tfrac12$, so $a = \\tfrac12$: sum $= \\dfrac{1/2}{1 - 1/2} = 1$.',
          hint3: '$a = 6$, $r = \\tfrac13$: sum $= \\dfrac{6}{1 - 1/3} = \\dfrac{6}{2/3} = 9$.',
          explanation: '1) $\\dfrac{1}{1-1/2} = 2$.  2) $\\dfrac{1/2}{1-1/2} = 1$ (it lost the $n=0$ term $1$, so $2 - 1 = 1$ ✓).  3) $\\dfrac{6}{2/3} = 9$. Always identify $a$ as the *actual first term*.',
        },
      },
      {
        id: 'si4-repeating',
        type: 'text' as const,
        content: `## A Classic Application: Repeating Decimals

A repeating decimal is secretly a geometric series. Take $0.\\overline{3} = 0.3333\\ldots$:

$$0.3 + 0.03 + 0.003 + \\cdots = \\sum_{n=1}^{\\infty} 3\\left(\\tfrac{1}{10}\\right)^{n}$$

First term $a = 0.3$, ratio $r = \\tfrac{1}{10}$:

$$\\frac{0.3}{1 - 0.1} = \\frac{0.3}{0.9} = \\frac{1}{3}$$

So $0.\\overline{3} = \\tfrac13$ — exactly as you learned in middle school, now *proven* with a geometric series.

> 💡 This trick converts **any** repeating decimal to a fraction. The geometric series is everywhere.`,
      },
      {
        id: 'si4-convergence-dropdown',
        type: 'dropdown-select' as const,
        content: `**Converge or Diverge?** 🔽

For each geometric series, pick its behavior (and sum if it converges).`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac15\\right)^{n}$:', options: ['converges to $\\tfrac54$', 'converges to $5$', 'diverges', 'converges to $\\tfrac15$'] },
            { label: '$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac32\\right)^{n}$:', options: ['converges to $-2$', 'diverges', 'converges to $\\tfrac32$', 'converges to $3$'] },
            { label: '$\\displaystyle\\sum_{n=0}^{\\infty} 4\\left(\\tfrac14\\right)^{n}$:', options: ['converges to $\\tfrac{16}{3}$', 'converges to $4$', 'diverges', 'converges to $5$'] },
          ],
          correctAnswers: ['converges to $\\tfrac54$', 'diverges', 'converges to $\\tfrac{16}{3}$'],
          hint1: '$a=1$, $r=\\tfrac15$: $\\dfrac{1}{1 - 1/5} = \\dfrac{1}{4/5} = \\dfrac54$.',
          hint2: '$\\lvert r \\rvert = \\tfrac32 \\ge 1$, so the geometric series **diverges**.',
          hint3: '$a = 4$, $r = \\tfrac14$: $\\dfrac{4}{1 - 1/4} = \\dfrac{4}{3/4} = \\dfrac{16}{3}$.',
          explanation: 'Converges iff $\\lvert r \\rvert<1$, with sum $\\tfrac{a}{1-r}$. First: $\\tfrac54$. Second diverges ($r=\\tfrac32$). Third: $\\tfrac{16}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'series-intro',
    sections: [
      {
        id: 'si5-intro',
        type: 'text' as const,
        content: `# ➕ Introduction to Infinite Series

**Part 5 of 7 — Telescoping Series**

---

> 🔑 **The Idea:** A **telescoping series** collapses because each term *cancels* part of the next one — like a folding telescope. After the cancellation only a few terms survive in each partial sum, so you can find $\\lim S_n$ directly.`,
      },
      {
        id: 'si5-telescope',
        type: 'text' as const,
        content: `## How Telescoping Works

The key move is **partial fractions** — splitting a term into a difference. The model example:

$$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$

Now write out the partial sum $S_n$ and watch the middle cancel:

$$S_n = \\left(\\frac11 - \\frac12\\right) + \\left(\\frac12 - \\frac13\\right) + \\left(\\frac13 - \\frac14\\right) + \\cdots + \\left(\\frac1n - \\frac{1}{n+1}\\right)$$

Every $-\\tfrac1k$ is cancelled by the $+\\tfrac1k$ in the next pair. Only the **first** and **last** pieces survive:

$$S_n = 1 - \\frac{1}{n+1}$$

Take the limit:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = \\lim_{n\\to\\infty}\\left(1 - \\frac{1}{n+1}\\right) = 1$$

> 🔑 **Strategy:** For a telescoping series, **never** try to add all the terms. Instead, write $S_n$, cancel the middle, and take the limit of what's left.`,
      },
      {
        id: 'si5-survivors-mc',
        type: 'multiple-choice' as const,
        content: `**What Survives?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\frac1n - \\frac{1}{n+1}\\right)$, the partial sum $S_n$ simplifies to:',
              options: [
                '$1 - \\dfrac{1}{n+1}$',
                '$\\dfrac1n - 1$',
                '$1 + \\dfrac{1}{n+1}$',
                '$\\dfrac{1}{n+1}$',
              ],
              correctAnswer: 0,
              explanation: 'The interior terms cancel, leaving the first piece $\\tfrac11 = 1$ and the last piece $-\\tfrac{1}{n+1}$. So $S_n = 1 - \\tfrac{1}{n+1}$.',
            },
            {
              question: 'Therefore $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\frac1n - \\frac{1}{n+1}\\right)$ equals:',
              options: ['$0$', '$1$', '$2$', 'It diverges'],
              correctAnswer: 1,
              explanation: '$\\displaystyle\\lim_{n\\to\\infty}\\left(1 - \\tfrac{1}{n+1}\\right) = 1 - 0 = 1$. The series converges to $1$.',
            },
          ],
        },
      },
      {
        id: 'si5-decomp-text',
        type: 'text' as const,
        content: `## Setting Up the Cancellation

The whole method depends on the partial-fraction split. For $\\dfrac{1}{n(n+1)}$ the decomposition is

$$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}.$$

You can verify it by combining the right side over a common denominator: $\\dfrac{(n+1) - n}{n(n+1)} = \\dfrac{1}{n(n+1)}$ ✓.

Once split, line up the partial sum and cancel. The surviving pieces are always the **very first** positive piece and the **very last** negative piece.

> ⚠️ Keep the signs straight when you split. A sign error here flips which pieces survive and gives the wrong limit.`,
      },
      {
        id: 'si5-telescope-drill',
        type: 'input-boxes' as const,
        content: `**Telescope It** 🧮

Use $\\dfrac{1}{n(n+1)} = \\dfrac1n - \\dfrac{1}{n+1}$, so $S_n = 1 - \\dfrac{1}{n+1}$.

**1)** Compute $S_2 = 1 - \\dfrac13$. Enter as a fraction. $S_2 = \\,?$
**2)** Compute $S_3 = 1 - \\dfrac14$. Enter as a fraction. $S_3 = \\,?$
**3)** The full sum $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n(n+1)} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2/3', '3/4', '1'],
          hint1: '$S_2 = 1 - \\dfrac{1}{2+1} = 1 - \\dfrac13 = \\dfrac23$.',
          hint2: '$S_3 = 1 - \\dfrac{1}{3+1} = 1 - \\dfrac14 = \\dfrac34$.',
          hint3: 'As $n \\to \\infty$, $S_n = 1 - \\dfrac{1}{n+1} \\to 1 - 0 = 1$.',
          explanation: '$S_2 = \\tfrac23$, $S_3 = \\tfrac34$, and the partial sums $\\tfrac23, \\tfrac34, \\tfrac45, \\ldots$ climb toward $1$. The series converges to $1$.',
        },
      },
      {
        id: 'si5-another-telescope',
        type: 'text' as const,
        content: `## When the Series Starts Elsewhere

The decomposition isn't always $\\tfrac1n - \\tfrac{1}{n+1}$, and the surviving first piece depends on the **starting index**. Consider:

$$\\sum_{n=1}^{\\infty} \\frac{1}{(n+1)(n+2)} = \\sum_{n=1}^{\\infty}\\left(\\frac{1}{n+1} - \\frac{1}{n+2}\\right)$$

The partial sum keeps its first piece $\\tfrac12$ (from $n=1$, since $\\tfrac{1}{1+1} = \\tfrac12$) and the last piece $-\\tfrac{1}{n+2}$:

$$S_n = \\frac12 - \\frac{1}{n+2} \\;\\longrightarrow\\; \\frac12$$

> ⚠️ **Always plug in the starting index to find what survives.** Here the first piece is $\\tfrac12$, not $1$.`,
      },
      {
        id: 'si5-telescope-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Telescoped Sum** 🔽

Each series telescopes. Identify the surviving first piece and the resulting sum.`,
        exercise: {
          dropdowns: [
            { label: 'In $\\sum_{n=1}^{\\infty}\\left(\\tfrac1n - \\tfrac{1}{n+1}\\right)$, the surviving first piece is:', options: ['$1$', '$\\tfrac12$', '$\\tfrac13$', '$0$'] },
            { label: 'In $\\sum_{n=2}^{\\infty}\\left(\\tfrac1n - \\tfrac{1}{n+1}\\right)$, the surviving first piece is:', options: ['$\\tfrac12$', '$1$', '$\\tfrac13$', '$\\tfrac14$'] },
            { label: 'Therefore $\\sum_{n=2}^{\\infty}\\left(\\tfrac1n - \\tfrac{1}{n+1}\\right)$ converges to:', options: ['$\\tfrac12$', '$1$', '$0$', '$\\tfrac13$'] },
          ],
          correctAnswers: ['$1$', '$\\tfrac12$', '$\\tfrac12$'],
          hint1: 'Starting at $n=1$, the first piece is $\\tfrac11 = 1$.',
          hint2: 'Starting at $n=2$, the first surviving piece is $\\tfrac12$ (plug $n=2$ into $\\tfrac1n$).',
          hint3: '$S_n = \\tfrac12 - \\tfrac{1}{n+1} \\to \\tfrac12$ as the last piece vanishes.',
          explanation: 'The surviving first piece is whatever $\\tfrac1n$ gives at the starting index. Starting at $n=2$ leaves $\\tfrac12$, and the tail $\\to 0$, so the sum is $\\tfrac12$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'series-intro',
    sections: [
      {
        id: 'si6-intro',
        type: 'text' as const,
        content: `# ➕ Introduction to Infinite Series

**Part 6 of 7 — The $n$-th Term Test for Divergence**

---

> 🔑 **A free divergence detector:** If the terms of a series don't shrink to $0$, the series cannot possibly converge. This is the **$n$-th Term Test** — the very first test to try on any series.`,
      },
      {
        id: 'si6-nth-term',
        type: 'text' as const,
        content: `## The $n$-th Term Test for Divergence

> 🔑 **The Test:** If $\\displaystyle\\lim_{n\\to\\infty} a_n \\ne 0$ (or the limit doesn't exist), then $\\displaystyle\\sum a_n$ **diverges**.

The logic: for the partial sums to settle on a finite limit, the terms you're still adding must fade to nothing. If they don't, the sum can't stabilize.

### Example: $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{n}{2n+1}$

$$\\lim_{n\\to\\infty} \\frac{n}{2n+1} = \\frac12 \\ne 0 \\;\\Longrightarrow\\; \\textbf{diverges}$$

### Example: $\\displaystyle\\sum_{n=1}^{\\infty} (-1)^{n}$

The terms are $-1, +1, -1, +1, \\ldots$ — the limit doesn't exist (it's not $0$), so the series **diverges**.

> ⚠️ **One-way street!** The test can only prove **divergence**. If $\\lim a_n = 0$, the test is *inconclusive* — the series might converge or might diverge. You must use a different test.`,
      },
      {
        id: 'si6-nth-mc',
        type: 'multiple-choice' as const,
        content: `**Apply the Test** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does the $n$-th Term Test conclude about $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{3n^2}{n^2 + 5}$?',
              options: [
                'Diverges, since $\\lim a_n = 3 \\ne 0$',
                'Converges, since $\\lim a_n = 3$',
                'Converges to $3$',
                'The test is inconclusive',
              ],
              correctAnswer: 0,
              explanation: '$\\displaystyle\\lim_{n\\to\\infty}\\frac{3n^2}{n^2+5} = 3 \\ne 0$, so by the $n$-th Term Test the series **diverges**. (The sum is *not* $3$ — that limit is of the *terms*, not the series.)',
            },
            {
              question: 'For $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$, the terms satisfy $\\lim a_n = 0$. What does the $n$-th Term Test tell you?',
              options: [
                'The series converges',
                'The series diverges',
                'The test is inconclusive — try another test',
                'The series converges to $0$',
              ],
              correctAnswer: 2,
              explanation: 'When $\\lim a_n = 0$, the $n$-th Term Test says **nothing** — it is inconclusive. (In fact this is a $p$-series with $p = \\tfrac12 \\le 1$, so it diverges, but that needs a *different* test.)',
            },
          ],
        },
      },
      {
        id: 'si6-harmonic',
        type: 'text' as const,
        content: `## The Harmonic Series: Why $a_n \\to 0$ Isn't Enough

The **harmonic series** is the perfect warning:

$$\\sum_{n=1}^{\\infty} \\frac1n = 1 + \\frac12 + \\frac13 + \\frac14 + \\cdots$$

Its terms *do* shrink to $0$: $\\;\\lim_{n\\to\\infty}\\tfrac1n = 0$. Yet the series **diverges** — the partial sums creep to infinity, just very slowly.

| Where you stop | Partial sum $S_n$ (approx.) |
|----------------|------------------------------|
| $n = 10$ | $2.93$ |
| $n = 100$ | $5.19$ |
| $n = 1000$ | $7.49$ |

The growth never stops; it just slows. This is the headline cautionary tale of the unit.

> 🔑 **Remember:** $\\lim a_n = 0$ is **necessary** but **not sufficient** for convergence. The harmonic series proves it: terms $\\to 0$ yet the sum $\\to \\infty$.`,
      },
      {
        id: 'si6-harmonic-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement best captures the lesson of the harmonic series $\\sum \\tfrac1n$?',
              options: [
                '$\\lim a_n = 0$ is necessary for convergence but does not guarantee it',
                'A series converges whenever its terms approach $0$',
                'The harmonic series is geometric with $r = 1$',
                'The harmonic series converges to a large number',
              ],
              correctAnswer: 0,
              explanation: 'The harmonic series has $\\tfrac1n \\to 0$ yet **diverges**. So "terms $\\to 0$" is necessary (the $n$-th Term Test) but never sufficient on its own.',
            },
            {
              question: 'Why can the $n$-th Term Test NOT prove the harmonic series converges or diverges?',
              options: [
                'Because $\\lim \\tfrac1n = 0$, which makes the test inconclusive',
                'Because the harmonic series has finitely many terms',
                'Because $\\lim \\tfrac1n \\ne 0$',
                'Because the test only works for geometric series',
              ],
              correctAnswer: 0,
              explanation: 'The test concludes divergence only when $\\lim a_n \\ne 0$. Since $\\lim \\tfrac1n = 0$, the test is inconclusive here — divergence is established by other means (the integral test / $p$-series rule).',
            },
          ],
        },
      },
      {
        id: 'si6-summary-text',
        type: 'text' as const,
        content: `## Two Outcomes, Never Three

Lock in exactly what the $n$-th Term Test can and cannot say:

| If $\\lim a_n$ is... | The test concludes |
|---------------------|--------------------|
| not $0$ (or DNE) | **diverges** |
| $0$ | **inconclusive** — try another test |

There is no version of this test that proves *convergence*. Use the table below to classify a few series at a glance.`,
      },
      {
        id: 'si6-test-dropdown',
        type: 'dropdown-select' as const,
        content: `**Test or No Test?** 🔽

For each series, decide what the $n$-th Term Test concludes.`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\sum \\frac{n+1}{n}$ ($\\lim a_n = 1$):', options: ['diverges', 'converges', 'inconclusive'] },
            { label: '$\\displaystyle\\sum \\frac{1}{n^2}$ ($\\lim a_n = 0$):', options: ['inconclusive', 'diverges', 'converges'] },
            { label: '$\\displaystyle\\sum \\cos(n\\pi)$ ($a_n = \\pm 1$):', options: ['diverges', 'converges', 'inconclusive'] },
          ],
          correctAnswers: ['diverges', 'inconclusive', 'diverges'],
          hint1: '$\\lim \\frac{n+1}{n} = 1 \\ne 0$, so the test forces divergence.',
          hint2: '$\\lim \\frac{1}{n^2} = 0$, so the $n$-th Term Test is inconclusive (this series actually converges, but by a different test).',
          hint3: '$\\cos(n\\pi) = (-1)^n = \\pm 1$, so the limit is not $0$ — the test gives divergence.',
          explanation: 'The test proves divergence only when $\\lim a_n \\ne 0$. When $\\lim a_n = 0$ (as for $\\sum \\tfrac{1}{n^2}$) it is inconclusive.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'series-intro',
    sections: [
      {
        id: 'si7-intro',
        type: 'text' as const,
        content: `# ➕ Introduction to Infinite Series

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) tell a sequence from a series, (2) use partial sums to define convergence, (3) read and re-index $\\sum$ notation, (4) sum geometric series, (5) collapse telescoping series, and (6) apply the $n$-th Term Test. Let's put it all together.`,
      },
      {
        id: 'si7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Tool | What to remember |
|------|------------------|
| Convergence | $\\sum a_n$ converges $\\iff$ partial sums $S_n$ have a finite limit |
| Geometric | $\\sum_{n=0}^{\\infty} a r^n = \\dfrac{a}{1-r}$ **if** $\\lvert r \\rvert < 1$; else diverges |
| Telescoping | Cancel the middle of $S_n$; take the limit of what survives |
| $n$-th Term Test | $\\lim a_n \\ne 0 \\Rightarrow$ diverges; $\\lim a_n = 0 \\Rightarrow$ inconclusive |
| Harmonic series | $\\sum \\tfrac1n$ **diverges** even though $\\tfrac1n \\to 0$ |

> ⚠️ **Two traps to avoid:** (1) For geometric series, find $a$ as the *actual first term*, watching the starting index. (2) Never conclude convergence just because $\\lim a_n = 0$ — that's only necessary, not sufficient.`,
      },
      {
        id: 'si7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\sum_{n=1}^{\\infty} 4\\left(\\tfrac14\\right)^{n-1}$.',
              options: [
                '$\\dfrac{16}{3}$',
                '$4$',
                '$\\dfrac{4}{3}$',
                'It diverges',
              ],
              correctAnswer: 0,
              explanation: 'Geometric with first term ($n=1$) $a = 4\\left(\\tfrac14\\right)^0 = 4$ and ratio $r = \\tfrac14$. Sum $= \\dfrac{4}{1 - 1/4} = \\dfrac{4}{3/4} = \\dfrac{16}{3}$.',
            },
            {
              question: 'Which series **diverges** by the $n$-th Term Test?',
              options: [
                '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{2n+3}{4n-1}$',
                '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$',
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac12\\right)^{n}$',
                '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$',
              ],
              correctAnswer: 0,
              explanation: '$\\lim_{n\\to\\infty}\\frac{2n+3}{4n-1} = \\frac24 = \\frac12 \\ne 0$, so it diverges. The other three have $\\lim a_n = 0$ and in fact all converge.',
            },
            {
              question: 'The telescoping series $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\frac{1}{n+2} - \\frac{1}{n+3}\\right)$ converges to:',
              options: ['$\\dfrac13$', '$\\dfrac12$', '$1$', '$0$'],
              correctAnswer: 0,
              explanation: 'The surviving first piece (at $n=1$) is $\\tfrac{1}{1+2} = \\tfrac13$, and the tail $-\\tfrac{1}{n+3} \\to 0$. So $S_n = \\tfrac13 - \\tfrac{1}{n+3} \\to \\tfrac13$.',
            },
          ],
        },
      },
      {
        id: 'si7-strategy-text',
        type: 'text' as const,
        content: `## One Last Strategy Note

When a brand-new series lands in front of you, run this quick triage:

1. **Is it geometric?** Look for a constant ratio $r$. If so, $\\lvert r \\rvert<1$ decides convergence and $\\tfrac{a}{1-r}$ gives the sum.
2. **Does it telescope?** Look for a difference (often via partial fractions). Cancel and take the limit of $S_n$.
3. **Do the terms fail to go to $0$?** Then the $n$-th Term Test instantly gives divergence.

> 💡 If none of these settle it (terms $\\to 0$ but it isn't geometric or telescoping), you need the deeper convergence tests of the rest of the unit. This lesson built the foundation they all stand on.`,
      },
      {
        id: 'si7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mastery Drill** 🧮

**1)** Sum the geometric series $\\displaystyle\\sum_{n=0}^{\\infty} \\left(\\tfrac25\\right)^{n}$. Enter as a fraction. $\\,?$
**2)** Write the repeating decimal $0.\\overline{7}$ as a fraction (use $\\dfrac{a}{1-r}$ with $a=0.7$, $r=0.1$). $\\,?$
**3)** The telescoping series $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n(n+1)}$ converges to $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/3', '7/9', '1'],
          hint1: '$a=1$, $r=\\tfrac25$: $\\dfrac{1}{1 - 2/5} = \\dfrac{1}{3/5} = \\dfrac53$.',
          hint2: '$0.\\overline{7} = \\dfrac{0.7}{1 - 0.1} = \\dfrac{0.7}{0.9} = \\dfrac{7}{9}$.',
          hint3: '$S_n = 1 - \\dfrac{1}{n+1} \\to 1$.',
          explanation: '1) $\\dfrac{1}{3/5} = \\dfrac53$.  2) $\\dfrac{0.7}{0.9} = \\dfrac79$.  3) The model telescoping series sums to $1$.',
        },
      },
      {
        id: 'si7-wrapup',
        type: 'text' as const,
        content: `## You're Ready

You started the unit asking "can infinitely many numbers add to a finite total?" and you can now answer it three different ways — with the geometric formula, by telescoping, and by ruling out divergence with the $n$-th Term Test.

> 🔑 One last reminder for the exit quiz: convergence is *defined* by the limit of the **partial sums** $S_n$, and "$\\lim a_n = 0$" is only the *entry ticket* — never the whole story.`,
      },
      {
        id: 'si7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A series converges if and only if:',
              options: [
                'its sequence of partial sums $S_n$ has a finite limit',
                'its terms $a_n$ approach $0$',
                'it has infinitely many terms',
                'its terms are all positive',
              ],
              correctAnswer: 0,
              explanation: 'Convergence is *defined* by $\\lim_{n\\to\\infty} S_n$ existing as a finite number. Terms approaching $0$ is necessary but not sufficient (the harmonic series is the counterexample).',
            },
            {
              question: 'What is $\\displaystyle\\sum_{n=0}^{\\infty} \\left(-\\tfrac13\\right)^{n}$?',
              options: ['$\\dfrac34$', '$\\dfrac32$', '$3$', 'It diverges'],
              correctAnswer: 0,
              explanation: 'Geometric with $a = 1$, $r = -\\tfrac13$, and $\\lvert r \\rvert = \\tfrac13 < 1$. Sum $= \\dfrac{1}{1 - (-1/3)} = \\dfrac{1}{4/3} = \\dfrac34$.',
            },
            {
              question: 'Which statement about the harmonic series $\\sum \\tfrac1n$ is correct?',
              options: [
                'Its terms $\\to 0$, but the series diverges',
                'Its terms $\\to 0$, so the series converges',
                'It is a geometric series with $r = \\tfrac12$',
                'It converges to $1$',
              ],
              correctAnswer: 0,
              explanation: 'The harmonic series is the classic case where $\\lim a_n = 0$ yet the series **diverges** — proof that "terms $\\to 0$" alone never guarantees convergence. It is not geometric (no constant ratio).',
            },
          ],
        },
      },
    ],
  },
]
