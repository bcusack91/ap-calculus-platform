import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Sequences (AP Calculus BC).
 * Registry key / DB Topic.slug: 'sequences-intro'.
 * 7 parts, gold-standard structure: what a sequence is and its notation →
 * explicit vs recursive formulas → arithmetic & geometric patterns →
 * monotonic & bounded sequences → the limit of a sequence → convergence/divergence
 * tools (squeeze, ratio/geometric, function-to-sequence) → mixed practice & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every limit, term, and ratio was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'sequences-intro',
    sections: [
      {
        id: 'seq1-intro',
        type: 'text' as const,
        content: `# 🔢 Introduction to Sequences

**Part 1 of 7 — What Is a Sequence?**

---

### Topics in This Part

| Section |
|---------|
| Sequences as Lists and as Functions |
| Subscript Notation: $a_n$ and the Index |
| Terms, Indices, and the General Term |

> 🔑 **Key Concept:** A **sequence** is an ordered, never-ending list of numbers $a_1, a_2, a_3, \\dots$ It is really just a **function whose domain is the positive integers** — feed it a whole number $n$, and it returns the $n$-th term $a_n$. Sequences are the launchpad for the entire BC unit on series.`,
      },
      {
        id: 'seq1-as-functions',
        type: 'text' as const,
        content: `## Sequences as Functions

A **sequence** $\\{a_n\\}$ assigns one number to each positive integer:

$$1 \\mapsto a_1, \\quad 2 \\mapsto a_2, \\quad 3 \\mapsto a_3, \\quad \\dots$$

The input $n$ is called the **index**, and $a_n$ is the **$n$-th term** (the *general term*). Unlike a normal function $f(x)$ where $x$ slides continuously, the index $n$ only takes the values $1, 2, 3, \\dots$, so a sequence is a string of isolated dots, not a smooth curve.

### Example: $a_n = \\dfrac{1}{n}$

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----|-----|-----|-----|-----|-----|
| $a_n$ | $1$ | $\\frac{1}{2}$ | $\\frac{1}{3}$ | $\\frac{1}{4}$ | $\\frac{1}{5}$ |

> 💡 **Indexing convention:** Most AP sequences start at $n = 1$, but some start at $n = 0$. Always check the starting index before you read off "the first term" — $a_0$ and $a_1$ are different positions.`,
      },
      {
        id: 'seq1-notation-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A sequence is best described as a function whose domain is:',
              options: ['all real numbers', 'the positive integers', 'a closed interval $[a,b]$', 'the rational numbers'],
              correctAnswer: 1,
              explanation: 'A sequence assigns a term $a_n$ to each positive integer $n$, so its domain is the positive integers (sometimes including $0$). That is why we get isolated points, not a continuous curve.',
            },
            {
              question: 'In the sequence $a_n = \\dfrac{1}{n}$, what is the term $a_4$?',
              options: ['$4$', '$\\frac{1}{4}$', '$\\frac{1}{5}$', '$\\frac{1}{3}$'],
              correctAnswer: 1,
              explanation: 'Substitute $n = 4$: $a_4 = \\frac{1}{4}$. The index $n$ goes *into* the formula; it is not the term itself.',
            },
          ],
        },
      },
      {
        id: 'seq1-evaluate-drill',
        type: 'input-boxes' as const,
        content: `**Read Off the Terms** 🧮

For the sequence $a_n = 2n - 1$ (the odd numbers), evaluate each term.

**1)** $a_1 = \\,?$
**2)** $a_3 = \\,?$
**3)** $a_{10} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '5', '19'],
          hint1: 'Plug $n = 1$ into $2n - 1$: $2(1) - 1 = 1$.',
          hint2: 'Plug $n = 3$: $2(3) - 1 = 5$.',
          hint3: 'Plug $n = 10$: $2(10) - 1 = 19$.',
          explanation: '$a_n = 2n-1$ gives $a_1 = 1$, $a_3 = 5$, and $a_{10} = 19$ — the odd numbers $1, 3, 5, 7, \\dots$',
        },
      },
      {
        id: 'seq1-general-term',
        type: 'text' as const,
        content: `## Finding a General Term from a List

Often you are *handed* the first few terms and asked for a formula for $a_n$. Look for a pattern that depends on the index $n$.

### Example: $2, 4, 6, 8, \\dots$

Each term is $2$ times its position: $a_n = 2n$.

### Example: $\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}, \\dfrac{4}{5}, \\dots$

The numerator equals $n$ and the denominator is one larger, so

$$a_n = \\frac{n}{n+1}.$$

### Example: $-1, 1, -1, 1, \\dots$

The signs flip, so use a power of $-1$:

$$a_n = (-1)^n.$$

> ⚠️ **Watch the sign factor.** $(-1)^n$ starts **negative** at $n=1$ ($-1, 1, -1, \\dots$), while $(-1)^{n+1}$ starts **positive** ($1, -1, 1, \\dots$). Picking the wrong one is the most common formula error.`,
      },
      {
        id: 'seq1-formula-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Formula** 🔽

Choose the explicit formula $a_n$ (with $n$ starting at $1$) that produces each list.`,
        exercise: {
          dropdowns: [
            { label: '$3, 6, 9, 12, \\dots$', options: ['$a_n = 3n$', '$a_n = n + 3$', '$a_n = 3^n$', '$a_n = n^3$'] },
            { label: '$1, 4, 9, 16, \\dots$', options: ['$a_n = n^2$', '$a_n = 2n$', '$a_n = 4n - 3$', '$a_n = n + 3$'] },
            { label: '$1, -1, 1, -1, \\dots$', options: ['$a_n = (-1)^{n+1}$', '$a_n = (-1)^{n}$', '$a_n = (-1)^{2n}$', '$a_n = -1^n$'] },
          ],
          correctAnswers: ['$a_n = 3n$', '$a_n = n^2$', '$a_n = (-1)^{n+1}$'],
          hint1: 'Multiples of $3$: each term is $3$ times its index.',
          hint2: 'Perfect squares: $1^2, 2^2, 3^2, 4^2$, so $a_n = n^2$.',
          hint3: 'It starts positive at $n=1$, so use $(-1)^{n+1}$, which gives $(-1)^2 = 1$ first.',
          explanation: '$3n \\to 3,6,9,\\dots$; $n^2 \\to 1,4,9,16,\\dots$; $(-1)^{n+1} \\to 1,-1,1,\\dots$ because the exponent $n+1$ is even when $n=1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'sequences-intro',
    sections: [
      {
        id: 'seq2-intro',
        type: 'text' as const,
        content: `# 🔢 Introduction to Sequences

**Part 2 of 7 — Explicit vs. Recursive Formulas**

---

> 🔑 **Two ways to define a sequence:** An **explicit** formula gives $a_n$ directly from $n$ (jump straight to the $100$th term). A **recursive** formula builds each term from the previous one(s), so you must supply a **starting value** and a **rule**.`,
      },
      {
        id: 'seq2-explicit',
        type: 'text' as const,
        content: `## Explicit Formulas

An **explicit** (or *closed-form*) formula writes $a_n$ as a function of $n$ alone:

$$a_n = 5n - 2.$$

To find any term, substitute its index — no earlier terms needed.

| $n$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|
| $a_n = 5n - 2$ | $3$ | $8$ | $13$ | $18$ |

Want $a_{100}$? Just compute $5(100) - 2 = 498$. That "jump anywhere" power is the big advantage of explicit formulas.`,
      },
      {
        id: 'seq2-recursive',
        type: 'text' as const,
        content: `## Recursive Formulas

A **recursive** formula gives a **seed** plus a rule that uses earlier terms:

$$a_1 = 3, \\qquad a_n = a_{n-1} + 5.$$

Read it as "start at $3$, then each term is the previous term plus $5$":

$$a_1 = 3,\\quad a_2 = 3 + 5 = 8,\\quad a_3 = 8 + 5 = 13,\\quad a_4 = 13 + 5 = 18.$$

This is the *same* sequence as $a_n = 5n - 2$ above — two formulas, one sequence.

> ⚠️ **A recursion is incomplete without its seed.** "$a_n = a_{n-1} + 5$" alone does not pin down a sequence; you also need $a_1$. Forgetting the starting value is a classic mistake.

### The Fibonacci Sequence

Some recursions reach back **two** terms:

$$F_1 = 1,\\quad F_2 = 1,\\quad F_n = F_{n-1} + F_{n-2}.$$

That generates $1, 1, 2, 3, 5, 8, 13, \\dots$ — there is **no simple explicit formula** you would use by hand, so recursion is the natural language here.`,
      },
      {
        id: 'seq2-recursive-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Given $a_1 = 4$ and $a_n = 2a_{n-1} - 1$, what is $a_3$?',
              options: ['$13$', '$7$', '$11$', '$8$'],
              correctAnswer: 0,
              explanation: 'First $a_2 = 2a_1 - 1 = 2(4) - 1 = 7$. Then $a_3 = 2a_2 - 1 = 2(7) - 1 = 13$. You must build $a_2$ before you can reach $a_3$.',
            },
            {
              question: 'Which advantage is unique to an EXPLICIT formula $a_n = f(n)$?',
              options: ['It needs a starting value.', 'You can jump straight to $a_{500}$ without earlier terms.', 'It always describes Fibonacci.', 'It can never describe an arithmetic sequence.'],
              correctAnswer: 1,
              explanation: 'An explicit formula computes any term directly from its index, so $a_{500} = f(500)$ needs no chain of earlier terms — the defining advantage over recursion.',
            },
          ],
        },
      },
      {
        id: 'seq2-recursive-drill',
        type: 'input-boxes' as const,
        content: `**Unroll the Recursion** 🧮

Given $a_1 = 2$ and $a_n = 3a_{n-1} + 1$, compute the next three terms.

**1)** $a_2 = \\,?$
**2)** $a_3 = \\,?$
**3)** $a_4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '22', '67'],
          hint1: '$a_2 = 3a_1 + 1 = 3(2) + 1 = 7$.',
          hint2: '$a_3 = 3a_2 + 1 = 3(7) + 1 = 22$.',
          hint3: '$a_4 = 3a_3 + 1 = 3(22) + 1 = 67$.',
          explanation: 'Each step multiplies the previous term by $3$ and adds $1$: $2 \\to 7 \\to 22 \\to 67$.',
        },
      },
      {
        id: 'seq2-convert-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate Between Forms** 🔽

Each row shows one definition. Pick the matching alternate description.`,
        exercise: {
          dropdowns: [
            { label: 'Explicit $a_n = 4n$ matches the recursion:', options: ['$a_1 = 4,\\ a_n = a_{n-1} + 4$', '$a_1 = 4,\\ a_n = 4a_{n-1}$', '$a_1 = 0,\\ a_n = a_{n-1} + 4$', '$a_1 = 1,\\ a_n = a_{n-1} + 4$'] },
            { label: 'Recursion $a_1 = 1,\\ a_n = 2a_{n-1}$ matches explicit:', options: ['$a_n = 2^{n-1}$', '$a_n = 2n$', '$a_n = 2^{n}$', '$a_n = n^2$'] },
          ],
          correctAnswers: ['$a_1 = 4,\\ a_n = a_{n-1} + 4$', '$a_n = 2^{n-1}$'],
          hint1: '$a_n = 4n$ gives $4, 8, 12, \\dots$ — start at $4$ and add $4$ each step.',
          hint2: 'Doubling from $1$: $1, 2, 4, 8, \\dots = 2^0, 2^1, 2^2, \\dots$, so $a_n = 2^{n-1}$.',
          hint3: 'Check $n=1$: $2^{1-1} = 2^0 = 1$ ✓, and $n=3$: $2^{2} = 4$ ✓.',
          explanation: 'Adding the same amount each step is arithmetic ($a_n = 4n$); multiplying by the same factor is geometric ($a_n = 2^{n-1}$ starts at $1$ and doubles).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'sequences-intro',
    sections: [
      {
        id: 'seq3-intro',
        type: 'text' as const,
        content: `# 🔢 Introduction to Sequences

**Part 3 of 7 — Arithmetic & Geometric Sequences**

---

> 🔑 **Two famous families:** In an **arithmetic** sequence you *add* a fixed **common difference** $d$ each step. In a **geometric** sequence you *multiply* by a fixed **common ratio** $r$. Recognizing which family you have unlocks a ready-made explicit formula.`,
      },
      {
        id: 'seq3-arithmetic',
        type: 'text' as const,
        content: `## Arithmetic Sequences

A sequence is **arithmetic** if consecutive terms differ by a constant $d$:

$$a_n = a_1 + (n - 1)d.$$

### Example: $7, 10, 13, 16, \\dots$

Here $a_1 = 7$ and the common difference is $d = 10 - 7 = 3$, so

$$a_n = 7 + (n-1)(3) = 3n + 4.$$

> ✅ **Check:** $a_1 = 3(1)+4 = 7$ ✓ and $a_4 = 3(4)+4 = 16$ ✓.

| Feature | Value |
|---------|-------|
| First term $a_1$ | $7$ |
| Common difference $d$ | $3$ |
| Explicit form | $a_n = 3n + 4$ |`,
      },
      {
        id: 'seq3-geometric',
        type: 'text' as const,
        content: `## Geometric Sequences

A sequence is **geometric** if each term is a constant multiple $r$ of the one before it:

$$a_n = a_1 \\cdot r^{\\,n-1}.$$

### Example: $3, 6, 12, 24, \\dots$

Here $a_1 = 3$ and the common ratio is $r = \\dfrac{6}{3} = 2$, so

$$a_n = 3 \\cdot 2^{\\,n-1}.$$

> ✅ **Check:** $a_1 = 3 \\cdot 2^0 = 3$ ✓ and $a_4 = 3 \\cdot 2^{3} = 24$ ✓.

To test which family a sequence belongs to: look at **differences** (constant ⇒ arithmetic) and **ratios** (constant ⇒ geometric). A sequence can be neither — e.g. $1, 4, 9, 16, \\dots$ is quadratic, with neither a constant difference nor a constant ratio.

> 💡 The ratio $r$ controls a geometric sequence's *destiny*: if $\\lvert r \\rvert < 1$ the terms shrink toward $0$; if $\\lvert r \\rvert > 1$ they blow up. We will lean on this hard when we study limits in Part 5.`,
      },
      {
        id: 'seq3-classify-mc',
        type: 'multiple-choice' as const,
        content: `**Classify It** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sequence is geometric?',
              options: ['$2, 5, 8, 11, \\dots$', '$2, 6, 18, 54, \\dots$', '$1, 4, 9, 16, \\dots$', '$5, 5, 6, 8, \\dots$'],
              correctAnswer: 1,
              explanation: 'In $2, 6, 18, 54$ each term is $3$ times the previous one ($r = 3$), so it is geometric. $2,5,8,11$ is arithmetic ($d=3$); $1,4,9,16$ is neither.',
            },
            {
              question: 'For the arithmetic sequence $20, 17, 14, 11, \\dots$, the common difference $d$ is:',
              options: ['$3$', '$-3$', '$\\frac{17}{20}$', '$-\\frac{1}{3}$'],
              correctAnswer: 1,
              explanation: '$d = a_2 - a_1 = 17 - 20 = -3$. The terms decrease by $3$ each step, so the common difference is negative.',
            },
          ],
        },
      },
      {
        id: 'seq3-arithmetic-drill',
        type: 'input-boxes' as const,
        content: `**Use the Explicit Formulas** 🧮

**1)** Arithmetic with $a_1 = 5$, $d = 4$. Find $a_n = a_1 + (n-1)d$ at $n = 6$: $a_6 = \\,?$
**2)** Geometric with $a_1 = 3$, $r = 2$. Find $a_n = a_1 r^{\\,n-1}$ at $n = 5$: $a_5 = \\,?$
**3)** Arithmetic $4, 9, 14, 19, \\dots$ — what is $a_{20}$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '48', '99'],
          hint1: '$a_6 = 5 + (6-1)(4) = 5 + 20 = 25$.',
          hint2: '$a_5 = 3 \\cdot 2^{5-1} = 3 \\cdot 16 = 48$.',
          hint3: '$a_1 = 4$, $d = 5$, so $a_{20} = 4 + (20-1)(5) = 4 + 95 = 99$.',
          explanation: '1) $5 + 5\\cdot 4 = 25$.  2) $3 \\cdot 2^4 = 48$.  3) $4 + 19\\cdot 5 = 99$.',
        },
      },
      {
        id: 'seq3-find-ratio-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Pattern** 🔽

Identify the family and its key parameter for each sequence.`,
        exercise: {
          dropdowns: [
            { label: '$100, 50, 25, 12.5, \\dots$ is', options: ['geometric, $r = \\frac{1}{2}$', 'arithmetic, $d = -50$', 'geometric, $r = 2$', 'neither'] },
            { label: '$-3, -7, -11, -15, \\dots$ is', options: ['arithmetic, $d = -4$', 'geometric, $r = -4$', 'arithmetic, $d = 4$', 'neither'] },
            { label: '$1, 2, 4, 7, 11, \\dots$ is', options: ['neither (differences grow)', 'arithmetic, $d = 1$', 'geometric, $r = 2$', 'geometric, $r = 1$'] },
          ],
          correctAnswers: ['geometric, $r = \\frac{1}{2}$', 'arithmetic, $d = -4$', 'neither (differences grow)'],
          hint1: 'Each term is half the previous: $50/100 = \\frac{1}{2}$, so geometric with $r = \\frac{1}{2}$.',
          hint2: 'Differences are constant: $-7 - (-3) = -4$, so arithmetic with $d = -4$.',
          hint3: 'Differences are $1, 2, 3, 4, \\dots$ — not constant and not a constant ratio, so neither family.',
          explanation: 'Constant ratio ⇒ geometric; constant difference ⇒ arithmetic. When the differences themselves grow ($1,2,3,4$), it is neither.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'sequences-intro',
    sections: [
      {
        id: 'seq4-intro',
        type: 'text' as const,
        content: `# 🔢 Introduction to Sequences

**Part 4 of 7 — Monotonic & Bounded Sequences**

---

> 🔑 **Describing behavior:** Before we ask *where* a sequence is heading (its limit), we describe *how* it moves. Is it always climbing or always falling (**monotonic**)? Is it trapped between two values (**bounded**)? These two properties together guarantee a limit exists.`,
      },
      {
        id: 'seq4-monotonic',
        type: 'text' as const,
        content: `## Monotonic Sequences

A sequence is **monotonic** if it never changes direction:

- **Increasing** if $a_{n+1} > a_n$ for all $n$ (each term is bigger).
- **Decreasing** if $a_{n+1} < a_n$ for all $n$ (each term is smaller).

### Example: $a_n = \\dfrac{n}{n+1}$

The terms are $\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\frac{4}{5}, \\dots$ — each one is *larger* than the last, so the sequence is **increasing**.

### Example: $a_n = \\dfrac{1}{n}$

The terms $1, \\frac{1}{2}, \\frac{1}{3}, \\dots$ keep shrinking, so this is **decreasing**.

> 💡 **How to prove monotonicity.** Compare $a_{n+1}$ with $a_n$ — either by checking the **difference** $a_{n+1} - a_n$ (positive ⇒ increasing) or, for all-positive terms, the **ratio** $\\dfrac{a_{n+1}}{a_n}$ (greater than $1$ ⇒ increasing).`,
      },
      {
        id: 'seq4-bounded',
        type: 'text' as const,
        content: `## Bounded Sequences

A sequence is **bounded** if it stays inside a fixed band of values:

- **Bounded above** by $M$ if $a_n \\le M$ for all $n$.
- **Bounded below** by $m$ if $a_n \\ge m$ for all $n$.
- **Bounded** if it is bounded both above and below.

### Example: $a_n = \\dfrac{n}{n+1}$

Every term satisfies $0 < a_n < 1$. It is bounded below by $0$ and above by $1$, so it is **bounded**.

> 🔑 **The Monotonic Sequence Theorem.** *Every bounded monotonic sequence converges.* If a sequence only climbs but can never pass a ceiling $M$, it has nowhere to go but toward a limit $\\le M$. This is the key existence result behind convergence — you do not even need the limit's value to know it exists.

| Sequence | Monotonic? | Bounded? | Converges? |
|----------|-----------|----------|-----------|
| $\\frac{1}{n}$ | decreasing | yes ($0 < a_n \\le 1$) | yes (to $0$) |
| $\\frac{n}{n+1}$ | increasing | yes ($0 < a_n < 1$) | yes (to $1$) |
| $n$ | increasing | no (unbounded above) | no |`,
      },
      {
        id: 'seq4-monotonic-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The sequence $a_n = \\dfrac{1}{n}$ ($1, \\frac{1}{2}, \\frac{1}{3}, \\dots$) is:',
              options: ['increasing and unbounded', 'decreasing and bounded', 'increasing and bounded', 'neither monotonic nor bounded'],
              correctAnswer: 1,
              explanation: 'The terms shrink ($a_{n+1} < a_n$), so it is decreasing, and every term lies in $(0, 1]$, so it is bounded. By the Monotonic Sequence Theorem it must converge — and it converges to $0$.',
            },
            {
              question: 'By the Monotonic Sequence Theorem, a sequence is guaranteed to converge if it is:',
              options: ['monotonic only', 'bounded only', 'both bounded and monotonic', 'alternating in sign'],
              correctAnswer: 2,
              explanation: 'Monotonic alone can run off to infinity (like $a_n = n$), and bounded alone can oscillate forever (like $(-1)^n$). You need BOTH: a bounded monotonic sequence always converges.',
            },
          ],
        },
      },
      {
        id: 'seq4-bounds-drill',
        type: 'input-boxes' as const,
        content: `**Find a Bound** 🧮

Consider $a_n = 3 - \\dfrac{1}{n}$, whose terms are $2, 2.5, 2.\\overline{6}, 2.75, \\dots$

**1)** Its smallest term ($n=1$), a lower bound, is $a_1 = \\,?$
**2)** The terms increase toward but never reach this least upper bound (the value of $3 - \\frac{1}{n}$ as $n$ grows huge): $\\,?$
**3)** Is the sequence increasing? Enter $1$ for yes, $0$ for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '1'],
          hint1: 'At $n=1$: $3 - \\frac{1}{1} = 2$. Since terms only grow, $2$ is a lower bound.',
          hint2: 'As $n \\to \\infty$, $\\frac{1}{n} \\to 0$, so $a_n \\to 3 - 0 = 3$. The terms approach $3$ but never equal it, so $3$ is the least upper bound.',
          hint3: 'Subtracting a smaller positive amount ($\\frac{1}{n}$ shrinks) leaves a larger result, so $a_{n+1} > a_n$: increasing, enter $1$.',
          explanation: '$a_n = 3 - \\frac{1}{n}$ starts at $2$, increases, and is bounded above by $3$. Increasing + bounded ⇒ it converges (to $3$).',
        },
      },
      {
        id: 'seq4-behavior-dropdown',
        type: 'dropdown-select' as const,
        content: `**Describe the Behavior** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$a_n = (-1)^n$ ($-1, 1, -1, 1, \\dots$) is', options: ['bounded but not monotonic', 'monotonic but not bounded', 'both bounded and monotonic', 'neither'] },
            { label: '$a_n = n^2$ ($1, 4, 9, 16, \\dots$) is', options: ['increasing and unbounded', 'decreasing and bounded', 'bounded but not monotonic', 'bounded and monotonic'] },
            { label: '$a_n = 5$ for all $n$ ($5, 5, 5, \\dots$) is', options: ['bounded; non-strictly monotonic', 'unbounded', 'decreasing', 'not bounded above'] },
          ],
          correctAnswers: ['bounded but not monotonic', 'increasing and unbounded', 'bounded; non-strictly monotonic'],
          hint1: '$(-1)^n$ bounces between $-1$ and $1$: it stays in $[-1,1]$ (bounded) but keeps reversing direction (not monotonic).',
          hint2: '$n^2$ grows without ceiling, so it is increasing and unbounded above.',
          hint3: 'A constant sequence stays at $5$: it is bounded ($5 \\le a_n \\le 5$) and counts as monotonic in the non-strict ($\\le$) sense.',
          explanation: 'Bounded means trapped in a band; monotonic means it never reverses. $(-1)^n$ is the textbook "bounded, not monotonic" case; $n^2$ is "monotonic, not bounded."',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'sequences-intro',
    sections: [
      {
        id: 'seq5-intro',
        type: 'text' as const,
        content: `# 🔢 Introduction to Sequences

**Part 5 of 7 — The Limit of a Sequence**

---

> 🔑 **The central question:** Where is a sequence headed as $n \\to \\infty$? If the terms settle toward a single finite number $L$, we write $\\displaystyle\\lim_{n\\to\\infty} a_n = L$ and say the sequence **converges**. If they do not, it **diverges**.`,
      },
      {
        id: 'seq5-definition',
        type: 'text' as const,
        content: `## Convergence and Divergence

$$\\lim_{n\\to\\infty} a_n = L \\quad\\text{means the terms get and stay arbitrarily close to } L.$$

- If the limit is a finite number $L$, the sequence **converges to $L$**.
- If the terms grow without bound, oscillate, or otherwise fail to settle, the sequence **diverges**.

### Three behaviors to know

| Sequence | Terms | Limit | Verdict |
|----------|-------|-------|---------|
| $a_n = \\frac{1}{n}$ | $1, \\frac12, \\frac13, \\dots$ | $0$ | converges |
| $a_n = n$ | $1, 2, 3, \\dots$ | $\\infty$ | diverges |
| $a_n = (-1)^n$ | $-1, 1, -1, \\dots$ | none | diverges (oscillates) |

> ⚠️ **Diverging to infinity and oscillating are both divergence.** "Diverges" simply means "does not converge to a finite limit" — it covers $a_n \\to \\infty$ **and** the bouncing of $(-1)^n$, which has no single target.`,
      },
      {
        id: 'seq5-rational',
        type: 'text' as const,
        content: `## Limits of Rational Sequences

For a ratio of polynomials in $n$, the **highest powers win**. Divide top and bottom by the highest power of $n$ in the denominator.

### Example: $a_n = \\dfrac{3n^2 + 5}{2n^2 - n}$

Divide every term by $n^2$:

$$a_n = \\frac{3 + \\dfrac{5}{n^2}}{2 - \\dfrac{1}{n}} \\;\\xrightarrow{\\,n\\to\\infty\\,}\\; \\frac{3 + 0}{2 - 0} = \\frac{3}{2}.$$

So the sequence **converges to $\\frac{3}{2}$**.

> 💡 **The degree shortcut for $\\dfrac{\\text{poly}}{\\text{poly}}$:**
> - Top degree **<** bottom degree ⇒ limit $= 0$.
> - Top degree **=** bottom degree ⇒ limit $=$ ratio of leading coefficients.
> - Top degree **>** bottom degree ⇒ diverges to $\\pm\\infty$.`,
      },
      {
        id: 'seq5-limit-mc',
        type: 'multiple-choice' as const,
        content: `**Find the Limit** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\lim_{n\\to\\infty} \\frac{5n + 2}{n - 7} = $',
              options: ['$0$', '$5$', '$\\infty$', '$-\\frac{2}{7}$'],
              correctAnswer: 1,
              explanation: 'Top and bottom both have degree $1$, so the limit is the ratio of leading coefficients: $\\frac{5}{1} = 5$. (Divide by $n$: $\\frac{5 + 2/n}{1 - 7/n} \\to \\frac{5}{1}$.)',
            },
            {
              question: '$\\displaystyle\\lim_{n\\to\\infty} \\frac{4n + 1}{n^2 + 3} = $',
              options: ['$0$', '$4$', '$\\frac{1}{3}$', '$\\infty$'],
              correctAnswer: 0,
              explanation: 'The numerator has degree $1$, the denominator degree $2$. Top degree is smaller, so the limit is $0$ — the denominator outgrows the numerator.',
            },
          ],
        },
      },
      {
        id: 'seq5-limit-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Limits** 🧮

Enter each limit as $n \\to \\infty$. Use a whole number, a fraction like $3/4$, or the word $\\infty$ if it diverges to infinity.

**1)** $\\displaystyle\\lim_{n\\to\\infty} \\frac{7n^2 - n}{2n^2 + 5} = \\,?$
**2)** $\\displaystyle\\lim_{n\\to\\infty} \\left(2 + \\frac{1}{n}\\right) = \\,?$
**3)** $\\displaystyle\\lim_{n\\to\\infty} \\frac{n^2}{n + 4} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7/2', '2', '∞'],
          hint1: 'Equal degrees ($2$ and $2$): take the ratio of leading coefficients, $\\frac{7}{2}$.',
          hint2: 'As $n \\to \\infty$, $\\frac{1}{n} \\to 0$, so the limit is $2 + 0 = 2$.',
          hint3: 'Top degree ($2$) exceeds bottom degree ($1$), so the terms blow up: the limit is $\\infty$.',
          explanation: '1) equal degrees ⇒ $\\frac{7}{2}$.  2) $\\frac{1}{n}\\to 0$ ⇒ $2$.  3) numerator grows faster ⇒ diverges to $\\infty$. (Either $7/2$ or $3.5$ is accepted; for #3 type the infinity symbol $\\infty$.)',
        },
      },
      {
        id: 'seq5-converge-dropdown',
        type: 'dropdown-select' as const,
        content: `**Converge or Diverge?** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$a_n = \\dfrac{6n}{3n + 1}$', options: ['converges to $2$', 'converges to $0$', 'diverges to $\\infty$', 'diverges (oscillates)'] },
            { label: '$a_n = (-1)^n$', options: ['diverges (oscillates)', 'converges to $0$', 'converges to $1$', 'diverges to $\\infty$'] },
            { label: '$a_n = \\dfrac{n^3 + 1}{n^2}$', options: ['diverges to $\\infty$', 'converges to $1$', 'converges to $0$', 'diverges (oscillates)'] },
          ],
          correctAnswers: ['converges to $2$', 'diverges (oscillates)', 'diverges to $\\infty$'],
          hint1: 'Equal degrees: ratio of leading coefficients $\\frac{6}{3} = 2$, so it converges to $2$.',
          hint2: '$(-1)^n$ bounces $-1, 1, -1, \\dots$ forever, never settling — it diverges by oscillation.',
          hint3: 'Top degree $3$ beats bottom degree $2$, so $a_n \\to \\infty$: divergence.',
          explanation: 'Use the degree rule for ratios; remember oscillation (no single target) is also divergence, distinct from diverging to infinity.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'sequences-intro',
    sections: [
      {
        id: 'seq6-intro',
        type: 'text' as const,
        content: `# 🔢 Introduction to Sequences

**Part 6 of 7 — Convergence Tools: Functions, Geometric Terms & the Squeeze Theorem**

---

> 🔑 **Three workhorse tools.** (1) Borrow a *continuous function's* limit. (2) Use the **geometric rule** for $r^n$. (3) **Squeeze** a stubborn sequence between two friendlier ones. These handle almost every limit you will meet in BC.`,
      },
      {
        id: 'seq6-function-theorem',
        type: 'text' as const,
        content: `## Tool 1 — Borrow a Function's Limit

If $f(x)$ is a function with $a_n = f(n)$, and $\\displaystyle\\lim_{x\\to\\infty} f(x) = L$, then $\\displaystyle\\lim_{n\\to\\infty} a_n = L$ too. The sequence is just $f$ sampled at the integers.

This lets you use **L'Hôpital's Rule** on the continuous version.

### Example: $a_n = \\dfrac{\\ln n}{n}$

Treat it as $f(x) = \\dfrac{\\ln x}{x}$. As $x \\to \\infty$ this is $\\frac{\\infty}{\\infty}$, so apply L'Hôpital:

$$\\lim_{x\\to\\infty} \\frac{\\ln x}{x} = \\lim_{x\\to\\infty} \\frac{1/x}{1} = 0.$$

Therefore $\\displaystyle\\lim_{n\\to\\infty} \\frac{\\ln n}{n} = 0$ — the sequence **converges to $0$**.

> ⚠️ **The bridge only goes one way.** If $f(n) = a_n$ and $\\lim_{x\\to\\infty} f(x)$ exists, the sequence shares it. But a sequence can converge while the function oscillates (e.g. $f(x)=\\sin(\\pi x)$ is $0$ at every integer but oscillates between integers), so a *missing* function limit does not prove the sequence diverges.`,
      },
      {
        id: 'seq6-geometric-rule',
        type: 'text' as const,
        content: `## Tool 2 — The Geometric Limit Rule

The sequence $a_n = r^n$ is the most important convergence example in the course:

$$\\lim_{n\\to\\infty} r^n = \\begin{cases} 0 & \\text{if } \\lvert r \\rvert < 1 \\\\ 1 & \\text{if } r = 1 \\\\ \\text{diverges} & \\text{if } \\lvert r \\rvert > 1 \\text{ or } r = -1. \\end{cases}$$

### Examples

| Sequence | $r$ | Limit |
|----------|-----|-------|
| $\\left(\\frac{1}{2}\\right)^n$ | $\\frac12$ | $0$ (since $\\lvert r \\rvert < 1$) |
| $(0.9)^n$ | $0.9$ | $0$ |
| $2^n$ | $2$ | diverges to $\\infty$ |
| $(-1)^n$ | $-1$ | diverges (oscillates) |

> 💡 This single rule explains why $\\left(\\frac{2}{3}\\right)^n \\to 0$ but $\\left(\\frac{3}{2}\\right)^n \\to \\infty$: shrink toward $0$ when $\\lvert r \\rvert < 1$, blow up when $\\lvert r \\rvert > 1$.`,
      },
      {
        id: 'seq6-geo-mc',
        type: 'multiple-choice' as const,
        content: `**Geometric Limits** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\displaystyle\\lim_{n\\to\\infty} \\left(\\frac{4}{5}\\right)^n = $',
              options: ['$0$', '$1$', '$\\frac{4}{5}$', 'diverges'],
              correctAnswer: 0,
              explanation: 'Here $r = \\frac{4}{5}$ and $\\lvert r \\rvert < 1$, so $r^n \\to 0$. Any base strictly between $-1$ and $1$ drives the powers to $0$.',
            },
            {
              question: '$\\displaystyle\\lim_{n\\to\\infty} \\left(\\frac{5}{4}\\right)^n = $',
              options: ['$0$', '$1$', 'diverges to $\\infty$', '$\\frac{5}{4}$'],
              correctAnswer: 2,
              explanation: 'Now $r = \\frac{5}{4} > 1$, so the powers grow without bound: the sequence diverges to $\\infty$.',
            },
          ],
        },
      },
      {
        id: 'seq6-squeeze',
        type: 'text' as const,
        content: `## Tool 3 — The Squeeze Theorem

If $b_n \\le a_n \\le c_n$ for all large $n$, and the outer sequences share a limit,

$$\\lim_{n\\to\\infty} b_n = \\lim_{n\\to\\infty} c_n = L \\;\\Longrightarrow\\; \\lim_{n\\to\\infty} a_n = L.$$

Trapped between two sequences both heading to $L$, the middle one has no choice but to go there too.

### Example: $a_n = \\dfrac{\\sin n}{n}$

Since $-1 \\le \\sin n \\le 1$, divide by $n > 0$:

$$-\\frac{1}{n} \\le \\frac{\\sin n}{n} \\le \\frac{1}{n}.$$

Both $-\\frac{1}{n}$ and $\\frac{1}{n}$ go to $0$, so the squeeze forces

$$\\lim_{n\\to\\infty} \\frac{\\sin n}{n} = 0.$$

> 🔑 The Squeeze Theorem is the go-to move whenever a **bounded oscillating piece** (like $\\sin n$, $\\cos n$, or $(-1)^n$) is divided by something growing — the wiggle gets crushed to $0$.`,
      },
      {
        id: 'seq6-squeeze-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Tools** 🧮

Enter each limit as $n \\to \\infty$ (a number, or $\\infty$).

**1)** $\\displaystyle\\lim_{n\\to\\infty} \\frac{\\cos n}{n^2} = \\,?$  *(squeeze: $-\\frac{1}{n^2} \\le a_n \\le \\frac{1}{n^2}$)*
**2)** $\\displaystyle\\lim_{n\\to\\infty} \\left(\\frac{1}{3}\\right)^n = \\,?$  *(geometric, $\\lvert r \\rvert < 1$)*
**3)** $\\displaystyle\\lim_{n\\to\\infty} 3^n = \\,?$  *(geometric, $\\lvert r \\rvert > 1$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '0', '∞'],
          hint1: '$\\cos n$ stays in $[-1,1]$, so $a_n$ is squeezed between $\\pm\\frac{1}{n^2}$, both $\\to 0$. Limit $= 0$.',
          hint2: '$r = \\frac{1}{3}$ has $\\lvert r \\rvert < 1$, so $\\left(\\frac{1}{3}\\right)^n \\to 0$.',
          hint3: '$r = 3 > 1$, so $3^n$ grows without bound: $\\infty$.',
          explanation: '1) Squeeze ⇒ $0$.  2) $\\lvert r \\rvert < 1$ ⇒ $0$.  3) $\\lvert r \\rvert > 1$ ⇒ diverges to $\\infty$ (type the symbol $\\infty$).',
        },
      },
      {
        id: 'seq6-tool-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

Which technique is the natural first move for each limit?`,
        exercise: {
          dropdowns: [
            { label: '$\\displaystyle\\lim_{n\\to\\infty} \\frac{(-1)^n}{n}$', options: ['Squeeze Theorem', 'Geometric rule', "L'Hôpital on $f(x)$", 'Ratio of leading coefficients'] },
            { label: '$\\displaystyle\\lim_{n\\to\\infty} \\frac{\\ln n}{\\sqrt{n}}$', options: ["L'Hôpital on $f(x)$", 'Geometric rule', 'Squeeze Theorem', 'It clearly diverges'] },
            { label: '$\\displaystyle\\lim_{n\\to\\infty} (0.7)^n$', options: ['Geometric rule', 'Squeeze Theorem', "L'Hôpital on $f(x)$", 'Degree comparison'] },
          ],
          correctAnswers: ['Squeeze Theorem', "L'Hôpital on $f(x)$", 'Geometric rule'],
          hint1: '$(-1)^n$ is bounded in $[-1,1]$ and divided by growing $n$ — squeeze it between $\\pm\\frac{1}{n}$.',
          hint2: '$\\frac{\\ln n}{\\sqrt n}$ is $\\frac{\\infty}{\\infty}$; switch to $f(x)=\\frac{\\ln x}{\\sqrt x}$ and use L\'Hôpital (the limit is $0$).',
          hint3: '$(0.7)^n$ is a pure power of a fixed base, so apply the geometric rule ($\\lvert 0.7 \\rvert < 1 \\Rightarrow 0$).',
          explanation: 'Bounded-wiggle-over-growth ⇒ Squeeze; $\\frac{\\infty}{\\infty}$ of nice functions ⇒ L\'Hôpital on $f(x)$; a fixed base raised to $n$ ⇒ geometric rule.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'sequences-intro',
    sections: [
      {
        id: 'seq7-intro',
        type: 'text' as const,
        content: `# 🔢 Introduction to Sequences

**Part 7 of 7 — Mixed Practice & Exit Quiz**

---

You can now (1) read sequence notation, (2) move between explicit and recursive forms, (3) classify arithmetic vs. geometric, (4) judge monotonicity and boundedness, and (5) compute limits with the degree rule, the geometric rule, function limits, and the Squeeze Theorem. Let's tie it together.`,
      },
      {
        id: 'seq7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| $n$-th term of arithmetic | $a_n = a_1 + (n-1)d$ |
| $n$-th term of geometric | $a_n = a_1 r^{\\,n-1}$ |
| Limit of $\\frac{\\text{poly}}{\\text{poly}}$ | compare degrees / leading coefficients |
| Limit of $r^n$ | $0$ if $\\lvert r \\rvert < 1$; diverges if $\\lvert r \\rvert > 1$ |
| Bounded wiggle over growth | Squeeze Theorem |
| $\\frac{\\infty}{\\infty}$ of smooth $f(n)$ | L'Hôpital on $f(x)$ |
| Existence without a value | bounded + monotonic ⇒ converges |

> ⚠️ **Three traps to avoid:** (1) confusing $(-1)^n$ (starts $-1$) with $(-1)^{n+1}$ (starts $+1$); (2) forgetting a recursion needs a seed; (3) calling an oscillating sequence "convergent" — oscillation is divergence.`,
      },
      {
        id: 'seq7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Given $a_1 = 5$ and $a_n = a_{n-1} - 3$, what is $a_4$?',
              options: ['$-4$', '$-1$', '$2$', '$-7$'],
              correctAnswer: 0,
              explanation: 'Subtract $3$ each step: $a_2 = 2$, $a_3 = -1$, $a_4 = -4$. (It is arithmetic with $a_1 = 5$, $d = -3$, so $a_4 = 5 + 3(-3) = -4$.)',
            },
            {
              question: '$\\displaystyle\\lim_{n\\to\\infty} \\frac{2n^2 + 3n}{5n^2 - 1} = $',
              options: ['$\\frac{2}{5}$', '$0$', '$\\frac{3}{5}$', '$\\infty$'],
              correctAnswer: 0,
              explanation: 'Equal degrees ($2$ and $2$), so the limit is the ratio of leading coefficients: $\\frac{2}{5}$.',
            },
          ],
        },
      },
      {
        id: 'seq7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Final Mixed Drill** 🧮

**1)** Geometric: $a_1 = 4$, $r = 3$. Using $a_n = a_1 r^{\\,n-1}$, find $a_4 = \\,?$
**2)** $\\displaystyle\\lim_{n\\to\\infty} \\frac{8n - 5}{2n + 1} = \\,?$  *(equal degrees)*
**3)** $\\displaystyle\\lim_{n\\to\\infty} \\left(\\frac{2}{7}\\right)^n = \\,?$  *(geometric, $\\lvert r \\rvert < 1$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['108', '4', '0'],
          hint1: '$a_4 = 4 \\cdot 3^{4-1} = 4 \\cdot 27 = 108$.',
          hint2: 'Equal degrees ⇒ ratio of leading coefficients $\\frac{8}{2} = 4$.',
          hint3: '$\\lvert r \\rvert = \\frac{2}{7} < 1$, so $\\left(\\frac{2}{7}\\right)^n \\to 0$.',
          explanation: '1) $4 \\cdot 27 = 108$.  2) $\\frac{8}{2} = 4$.  3) $\\lvert r \\rvert < 1 \\Rightarrow 0$.',
        },
      },
      {
        id: 'seq7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which sequence DIVERGES?',
              options: ['$a_n = \\frac{n+1}{n}$', '$a_n = \\left(\\frac{1}{2}\\right)^n$', '$a_n = (-1)^n$', '$a_n = \\frac{3}{n}$'],
              correctAnswer: 2,
              explanation: '$(-1)^n$ oscillates $-1, 1, -1, \\dots$ with no single target, so it diverges. The others converge: $\\frac{n+1}{n}\\to 1$, $\\left(\\frac12\\right)^n \\to 0$, $\\frac{3}{n} \\to 0$.',
            },
            {
              question: 'A bounded, monotonic sequence is guaranteed to:',
              options: ['diverge to $\\infty$', 'converge', 'oscillate', 'be geometric'],
              correctAnswer: 1,
              explanation: 'By the Monotonic Sequence Theorem, any sequence that is both bounded and monotonic must converge — even if you cannot easily compute the limit.',
            },
            {
              question: '$\\displaystyle\\lim_{n\\to\\infty} \\frac{\\sin n}{n} = $',
              options: ['$0$', '$1$', 'does not exist (oscillates)', '$\\infty$'],
              correctAnswer: 0,
              explanation: 'Since $-1 \\le \\sin n \\le 1$, we have $-\\frac{1}{n} \\le \\frac{\\sin n}{n} \\le \\frac{1}{n}$. Both bounds $\\to 0$, so by the Squeeze Theorem the limit is $0$.',
            },
          ],
        },
      },
    ],
  },
]
