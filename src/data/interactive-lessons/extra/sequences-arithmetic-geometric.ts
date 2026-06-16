import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Arithmetic & Geometric Sequences (AP Precalculus).
 * Registry key: 'sequences-arithmetic-geometric' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: foundations → arithmetic → geometric →
 * recursive vs. explicit → series (partial sums) → infinite geometric series →
 * mixed mastery + exit quiz. AP Precalc framing: sequences as functions on the
 * integers; constant difference ↔ linear, constant ratio ↔ exponential.
 * LaTeX uses doubled backslashes (template-literal strings). File lives in
 * extra/, so the registry import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'sequences-arithmetic-geometric',
    sections: [
      {
        id: 'seq1-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 1 of 7 — Sequences as Functions**

---

### Topics in This Part

| Section |
|---------|
| What Is a Sequence? |
| Terms, Index, and Notation |
| Two Patterns That Rule Them All |

> 🔑 **Key Concept:** A **sequence** is just a function whose inputs are the counting numbers $1, 2, 3, \\dots$ and whose outputs are the **terms** $a_1, a_2, a_3, \\dots$. Everything in AP Precalculus about sequences comes from asking *"how does each term grow from the one before it?"*`,
      },
      {
        id: 'seq1-what',
        type: 'text' as const,
        content: `## What Is a Sequence?

A **sequence** is an ordered list of numbers:

$$2,\\; 5,\\; 8,\\; 11,\\; 14,\\; \\dots$$

Each number is a **term**. We label terms by their position $n$ (the **index**):

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $a_n$ | $2$ | $5$ | $8$ | $11$ | $14$ |

So $a_1 = 2$, $a_3 = 8$, and $a_5 = 14$. The subscript is the input; the value is the output.

> 💡 **AP framing:** Because the inputs are the integers $1, 2, 3, \\dots$, a sequence is a **function** $a$ with $a(n) = a_n$. This is why sequences behave like the discrete cousins of the lines and exponentials you already know.`,
      },
      {
        id: 'seq1-notation',
        type: 'multiple-choice' as const,
        content: `**Concept Check — Reading Notation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the sequence $7,\\; 10,\\; 13,\\; 16,\\; 19,\\; \\dots$, what is $a_4$?',
              options: ['$13$', '$16$', '$4$', '$19$'],
              correctAnswer: 1,
              explanation: '$a_4$ is the term in position $4$. Counting $a_1=7, a_2=10, a_3=13, a_4=16$.',
            },
            {
              question: 'What does the subscript $n$ in $a_n$ represent?',
              options: [
                'The value of the term itself',
                'The number of terms total',
                'The position (index) of the term in the list',
                'The difference between terms',
              ],
              correctAnswer: 2,
              explanation: 'The subscript is the **input** — which position you are looking at. The value $a_n$ is the **output**.',
            },
          ],
        },
      },
      {
        id: 'seq1-patterns',
        type: 'text' as const,
        content: `## Two Patterns That Rule Them All

Almost every sequence in AP Precalculus is built one of two ways. Look at *how you get from each term to the next*:

| Sequence | Step from term to term | Name |
|----------|------------------------|------|
| $2, 5, 8, 11, \\dots$ | **add** $3$ each time | **arithmetic** |
| $3, 6, 12, 24, \\dots$ | **multiply** by $2$ each time | **geometric** |

- **Arithmetic** = constant *difference* (you **add** the same number). These grow **linearly**.
- **Geometric** = constant *ratio* (you **multiply** by the same number). These grow **exponentially**.

> 🔑 **The one question:** To classify any sequence, ask *"do I add the same thing, or multiply by the same thing?"* Add → arithmetic. Multiply → geometric. Neither → it is some other kind of sequence.`,
      },
      {
        id: 'seq1-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Sequence** 🔽

Decide whether you **add** the same amount (arithmetic) or **multiply** by the same amount (geometric).`,
        exercise: {
          dropdowns: [
            { label: '$5,\\; 9,\\; 13,\\; 17,\\; \\dots$', options: ['arithmetic', 'geometric', 'neither'] },
            { label: '$1,\\; 3,\\; 9,\\; 27,\\; \\dots$', options: ['arithmetic', 'geometric', 'neither'] },
            { label: '$20,\\; 10,\\; 5,\\; 2.5,\\; \\dots$', options: ['arithmetic', 'geometric', 'neither'] },
            { label: '$1,\\; 4,\\; 9,\\; 16,\\; \\dots$', options: ['arithmetic', 'geometric', 'neither'] },
          ],
          correctAnswers: ['arithmetic', 'geometric', 'geometric', 'neither'],
          hint1: 'For arithmetic, every gap is the same: $9-5=4$, $13-9=4$, $\\dots$',
          hint2: 'For geometric, every ratio is the same: $3\\div 1 = 3$, $9\\div 3 = 3$, $\\dots$',
          hint3: '$1,4,9,16$ are perfect squares — the gaps ($3,5,7$) and ratios both change, so it is neither.',
          explanation: '$5,9,13,17$ adds $4$ (arithmetic). $1,3,9,27$ multiplies by $3$ (geometric). $20,10,5,2.5$ multiplies by $\\frac{1}{2}$ (geometric). $1,4,9,16$ is the squares — neither.',
        },
      },
      {
        id: 'seq1-measure',
        type: 'input-boxes' as const,
        content: `**Measure the Step** 🧮

For an *arithmetic* sequence, report the common **difference** $d = a_2 - a_1$. For a *geometric* one, report the common **ratio** $r = \\dfrac{a_2}{a_1}$.

**1)** Arithmetic $4,\\; 11,\\; 18,\\; 25,\\; \\dots$ — find $d$.
**2)** Geometric $7,\\; 14,\\; 28,\\; 56,\\; \\dots$ — find $r$.
**3)** Geometric $80,\\; 40,\\; 20,\\; 10,\\; \\dots$ — find $r$. *(decimal or fraction is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '2', '0.5'],
          hint1: 'Difference: subtract consecutive terms, $11 - 4 = 7$.',
          hint2: 'Ratio: divide consecutive terms, $14 \\div 7 = 2$.',
          hint3: 'Halving each step means $r = \\frac{40}{80} = \\frac{1}{2} = 0.5$.',
          explanation: '1) $d = 11 - 4 = 7$.  2) $r = 14 \\div 7 = 2$.  3) $r = 40 \\div 80 = 0.5$.',
        },
      },
      {
        id: 'seq1-wrap',
        type: 'text' as const,
        content: `## Where We're Headed

You can now spot the two families. The rest of the lesson gives each family its own toolkit:

- **Part 2–3:** Formulas for the $n$-th term of arithmetic and geometric sequences.
- **Part 4:** Recursive vs. explicit rules — two languages for the same pattern.
- **Part 5–6:** Adding the terms up — **series** and the famous infinite sum.
- **Part 7:** Mixed mastery and an exit quiz.

> 💡 Keep the mantra: **add → arithmetic → linear**, **multiply → geometric → exponential**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'sequences-arithmetic-geometric',
    sections: [
      {
        id: 'seq2-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 2 of 7 — Arithmetic Sequences**

---

> 🔑 **The Idea:** An **arithmetic** sequence has a constant **common difference** $d$. To find *any* term without listing them all, you start at $a_1$ and add $d$ the right number of times.`,
      },
      {
        id: 'seq2-formula',
        type: 'text' as const,
        content: `## The $n$-th Term Formula

If you start at $a_1$ and add $d$ each step, then to reach term $a_n$ you take $(n-1)$ steps:

$$a_n = a_1 + (n-1)\\,d$$

The **common difference** is $d = a_2 - a_1$ (any term minus the one before it).

### Worked Example: $3,\\; 7,\\; 11,\\; 15,\\; \\dots$

Here $a_1 = 3$ and $d = 7 - 3 = 4$. The rule is:

$$a_n = 3 + (n-1)(4) = 4n - 1$$

Find $a_{10}$:

$$a_{10} = 3 + (10-1)(4) = 3 + 36 = 39$$

> ⚠️ **Watch the $(n-1)$.** It is $n-1$, **not** $n$, because the first term takes **zero** steps. Using $n$ is the single most common arithmetic-sequence error.`,
      },
      {
        id: 'seq2-linear',
        type: 'text' as const,
        content: `## Why Arithmetic = Linear

Distribute the formula:

$$a_n = a_1 + (n-1)d = \\underbrace{d}_{\\text{slope}}\\cdot n + \\underbrace{(a_1 - d)}_{\\text{intercept}}$$

This is $y = mx + b$ in disguise. The common difference $d$ **is the slope** — the sequence changes by the same amount over each equal step in $n$.

| Arithmetic sequence | Linear function |
|---------------------|-----------------|
| common difference $d$ | slope $m$ |
| add $d$ each step | rise $m$ per run of $1$ |
| $a_n = a_1 + (n-1)d$ | $y = mx + b$ |

> 💡 **AP connection:** A sequence is arithmetic exactly when it changes by a **constant amount over equal-length input intervals** — the defining feature of a linear function.`,
      },
      {
        id: 'seq2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the sequence $-5,\\; -2,\\; 1,\\; 4,\\; \\dots$, what is the common difference $d$?',
              options: ['$-3$', '$3$', '$-5$', '$7$'],
              correctAnswer: 1,
              explanation: '$d = a_2 - a_1 = -2 - (-5) = 3$. Check: $1 - (-2) = 3$. ✓',
            },
            {
              question: 'Which formula gives the $n$-th term of an arithmetic sequence with first term $a_1$ and common difference $d$?',
              options: [
                '$a_n = a_1 \\cdot d^{\\,n-1}$',
                '$a_n = a_1 + n\\,d$',
                '$a_n = a_1 + (n-1)d$',
                '$a_n = a_1 \\cdot d \\cdot n$',
              ],
              correctAnswer: 2,
              explanation: 'You add $d$ a total of $(n-1)$ times to get from $a_1$ to $a_n$: $a_n = a_1 + (n-1)d$. The multiply version is geometric.',
            },
          ],
        },
      },
      {
        id: 'seq2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Term** 🧮

Use $a_n = a_1 + (n-1)d$.

**1)** $a_1 = 4,\\; d = 6$. Find $a_8$.
**2)** $-5,\\; -2,\\; 1,\\; 4,\\; \\dots$ Find $a_{12}$.
**3)** $a_1 = 50,\\; d = -7$. Find $a_6$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['46', '28', '15'],
          hint1: '$a_8 = 4 + (8-1)(6) = 4 + 42$.',
          hint2: 'Here $a_1 = -5$ and $d = 3$, so $a_{12} = -5 + (12-1)(3) = -5 + 33$.',
          hint3: '$a_6 = 50 + (6-1)(-7) = 50 - 35$.',
          explanation: '1) $a_8 = 4 + 42 = 46$.  2) $a_{12} = -5 + 33 = 28$.  3) $a_6 = 50 - 35 = 15$.',
        },
      },
      {
        id: 'seq2-find-d',
        type: 'input-boxes' as const,
        content: `**Work Backwards** 🧮

Sometimes you are handed two non-adjacent terms.

**1)** An arithmetic sequence has $a_1 = 7$ and $a_5 = 19$. Find $d$.
*(Hint: $a_5 = a_1 + 4d$.)*
**2)** Using that same sequence, find $a_{10}$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '34'],
          hint1: '$a_5 - a_1 = 4d$, so $19 - 7 = 4d$.',
          hint2: '$4d = 12 \\Rightarrow d = 3$.',
          hint3: 'With $d=3$: $a_{10} = 7 + (10-1)(3) = 7 + 27$.',
          explanation: '$19 = 7 + 4d \\Rightarrow d = 3$. Then $a_{10} = 7 + 9(3) = 34$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'sequences-arithmetic-geometric',
    sections: [
      {
        id: 'seq3-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 3 of 7 — Geometric Sequences**

---

> 🔑 **The Idea:** A **geometric** sequence has a constant **common ratio** $r$. Instead of *adding* $d$, you *multiply* by $r$ — so the terms grow (or shrink) by the same **factor** each step.`,
      },
      {
        id: 'seq3-formula',
        type: 'text' as const,
        content: `## The $n$-th Term Formula

Start at $a_1$ and multiply by $r$ each step. Reaching $a_n$ takes $(n-1)$ multiplications:

$$a_n = a_1 \\cdot r^{\\,n-1}$$

The **common ratio** is $r = \\dfrac{a_2}{a_1}$ (any term divided by the one before it).

### Worked Example: $5,\\; 15,\\; 45,\\; 135,\\; \\dots$

Here $a_1 = 5$ and $r = \\dfrac{15}{5} = 3$. So:

$$a_n = 5 \\cdot 3^{\\,n-1}$$

Find $a_4$:

$$a_4 = 5 \\cdot 3^{4-1} = 5 \\cdot 27 = 135$$

> ⚠️ **The exponent is $n-1$, not $n$.** Same reason as arithmetic: the first term has had **zero** multiplications applied.`,
      },
      {
        id: 'seq3-exp',
        type: 'text' as const,
        content: `## Why Geometric = Exponential

The formula $a_n = a_1 \\cdot r^{\\,n-1}$ is an **exponential** function of $n$ — a constant base $r$ raised to a power.

| Geometric sequence | Exponential function |
|--------------------|----------------------|
| common ratio $r$ | base $b$ |
| multiply by $r$ each step | multiply by $b$ per unit |
| $a_n = a_1 \\cdot r^{\\,n-1}$ | $y = a\\,b^{\\,x}$ |

The ratio $r$ controls the behavior:

- $r > 1$: terms **grow** (e.g. $r=2$: $3,6,12,24,\\dots$)
- $0 < r < 1$: terms **decay** toward $0$ (e.g. $r=\\frac{1}{2}$: $16,8,4,2,\\dots$)
- $r < 0$: terms **alternate sign** (e.g. $r=-2$: $1,-2,4,-8,\\dots$)

> 💡 **AP connection:** A sequence is geometric exactly when it changes by a **constant ratio over equal-length input intervals** — the defining feature of an exponential function.`,
      },
      {
        id: 'seq3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $2,\\; 6,\\; 18,\\; 54,\\; \\dots$, what is the common ratio $r$?',
              options: ['$4$', '$3$', '$\\frac{1}{3}$', '$6$'],
              correctAnswer: 1,
              explanation: '$r = \\dfrac{a_2}{a_1} = \\dfrac{6}{2} = 3$. Check: $18 \\div 6 = 3$. ✓',
            },
            {
              question: 'A geometric sequence has $a_1 = 100$ and $r = 0.8$. What happens to the terms?',
              options: [
                'They grow without bound',
                'They alternate in sign',
                'They decay toward $0$',
                'They stay constant',
              ],
              correctAnswer: 2,
              explanation: 'Since $0 < r = 0.8 < 1$, each term is $80\\%$ of the previous one, so the terms shrink toward $0$: $100, 80, 64, \\dots$',
            },
          ],
        },
      },
      {
        id: 'seq3-drill',
        type: 'input-boxes' as const,
        content: `**Find the Term** 🧮

Use $a_n = a_1 \\cdot r^{\\,n-1}$. Decimals are fine.

**1)** $a_1 = 3,\\; r = 2$. Find $a_6$.
**2)** $2,\\; 1,\\; 0.5,\\; 0.25,\\; \\dots$ Find $a_5$.
**3)** $a_1 = 100,\\; r = 0.8$. Find $a_3$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['96', '0.125', '64'],
          hint1: '$a_6 = 3 \\cdot 2^{6-1} = 3 \\cdot 2^5 = 3 \\cdot 32$.',
          hint2: 'Here $r = \\frac{1}{2}$, so $a_5 = 2 \\cdot (\\frac{1}{2})^{4} = 2 \\cdot \\frac{1}{16}$.',
          hint3: '$a_3 = 100 \\cdot (0.8)^{2} = 100 \\cdot 0.64$.',
          explanation: '1) $a_6 = 3 \\cdot 32 = 96$.  2) $a_5 = 2 \\cdot \\frac{1}{16} = 0.125$.  3) $a_3 = 100 \\cdot 0.64 = 64$.',
        },
      },
      {
        id: 'seq3-find-r',
        type: 'dropdown-select' as const,
        content: `**Find the Ratio (and a Term)** 🔽

A geometric sequence has $a_1 = 2$ and $a_4 = 54$.`,
        exercise: {
          dropdowns: [
            { label: 'Relationship between $a_4$ and $a_1$:', options: ['$a_4 = a_1 \\cdot r^{3}$', '$a_4 = a_1 \\cdot r^{4}$', '$a_4 = a_1 + 3r$', '$a_4 = a_1 \\cdot 4r$'] },
            { label: 'Solve $r^{3} = 27$:', options: ['$r = 3$', '$r = 9$', '$r = 27$', '$r = \\sqrt{27}$'] },
            { label: 'Therefore $a_2 = $', options: ['$6$', '$18$', '$54$', '$8$'] },
          ],
          correctAnswers: ['$a_4 = a_1 \\cdot r^{3}$', '$r = 3$', '$6$'],
          hint1: 'From $a_1$ to $a_4$ is $4-1 = 3$ multiplications.',
          hint2: '$\\dfrac{a_4}{a_1} = \\dfrac{54}{2} = 27 = r^3$, and $3^3 = 27$.',
          hint3: 'With $r = 3$: $a_2 = a_1 \\cdot r = 2 \\cdot 3 = 6$.',
          explanation: '$a_4 = a_1 r^3 \\Rightarrow 54 = 2r^3 \\Rightarrow r^3 = 27 \\Rightarrow r = 3$. Then $a_2 = 2\\cdot 3 = 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'sequences-arithmetic-geometric',
    sections: [
      {
        id: 'seq4-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 4 of 7 — Recursive vs. Explicit Rules**

---

> 🔑 **Two languages, one sequence.** An **explicit** rule jumps straight to any term from $n$. A **recursive** rule defines each term using the *previous* one. Both describe the same list — you should be able to translate between them.`,
      },
      {
        id: 'seq4-defs',
        type: 'text' as const,
        content: `## Explicit vs. Recursive

**Explicit:** a formula in terms of $n$ alone. Plug in $n$, get the term.

$$\\text{Arithmetic: } a_n = a_1 + (n-1)d \\qquad \\text{Geometric: } a_n = a_1 \\cdot r^{\\,n-1}$$

**Recursive:** a starting term plus a rule for getting the **next** term from the current one. A recursive definition *always* needs the seed $a_1$.

$$\\text{Arithmetic: } a_1 = \\text{(given)},\\;\\; a_n = a_{n-1} + d$$
$$\\text{Geometric: } a_1 = \\text{(given)},\\;\\; a_n = a_{n-1} \\cdot r$$

| | Explicit | Recursive |
|---|----------|-----------|
| **Strength** | jump to $a_{100}$ instantly | mirrors how the pattern *builds* |
| **Needs** | $a_1$ and $d$ or $r$ | $a_1$ **and** the previous term |

> ⚠️ A recursive rule with **no** starting value is incomplete — you cannot generate a single term without the seed $a_1$.`,
      },
      {
        id: 'seq4-translate',
        type: 'text' as const,
        content: `## Translating Between Them

### Example: Recursive → terms

$$a_1 = 2, \\qquad a_n = a_{n-1} + 5$$

This adds $5$ each step, so it is **arithmetic** with $d = 5$:

$$2,\\; 7,\\; 12,\\; 17,\\; \\dots \\qquad a_4 = 2 + 3(5) = 17$$

### Example: Recursive → terms (geometric)

$$a_1 = 3, \\qquad a_n = 2\\,a_{n-1}$$

This multiplies by $2$ each step, so it is **geometric** with $r = 2$:

$$3,\\; 6,\\; 12,\\; 24,\\; \\dots \\qquad a_4 = 3 \\cdot 2^{3} = 24$$

> 💡 **Spotting the type from a recursive rule:** if the rule **adds** a constant, it is arithmetic; if it **multiplies** by a constant, it is geometric.`,
      },
      {
        id: 'seq4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Rule to the Type** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$a_n = a_{n-1} + 4$', options: ['arithmetic, $d = 4$', 'geometric, $r = 4$', 'arithmetic, $d = -4$'] },
            { label: '$a_n = 0.5\\,a_{n-1}$', options: ['geometric, $r = 0.5$', 'arithmetic, $d = 0.5$', 'geometric, $r = 2$'] },
            { label: '$a_n = a_1 \\cdot 3^{\\,n-1}$', options: ['geometric, $r = 3$', 'arithmetic, $d = 3$', 'geometric, $r = n$'] },
            { label: '$a_n = 6 + (n-1)(-2)$', options: ['arithmetic, $d = -2$', 'geometric, $r = -2$', 'arithmetic, $d = 6$'] },
          ],
          correctAnswers: ['arithmetic, $d = 4$', 'geometric, $r = 0.5$', 'geometric, $r = 3$', 'arithmetic, $d = -2$'],
          hint1: 'A rule that **adds** a constant is arithmetic; the constant is $d$.',
          hint2: 'A rule that **multiplies** by a constant is geometric; the constant is $r$.',
          hint3: 'In explicit form, $a_1 + (n-1)d$ is arithmetic and $a_1 \\cdot r^{n-1}$ is geometric — read $d$ or $r$ straight off.',
          explanation: 'Adding $4$ → arithmetic $d=4$. Multiplying by $0.5$ → geometric $r=0.5$. $a_1\\cdot 3^{n-1}$ → geometric $r=3$. $6+(n-1)(-2)$ → arithmetic $d=-2$.',
        },
      },
      {
        id: 'seq4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A sequence is defined by $a_1 = 10$ and $a_n = a_{n-1} - 3$. What is $a_4$?',
              options: ['$4$', '$1$', '$-2$', '$7$'],
              correctAnswer: 1,
              explanation: 'Subtract $3$ each step: $a_1=10,\\ a_2=7,\\ a_3=4,\\ a_4=1$. (Arithmetic, $d=-3$.)',
            },
            {
              question: 'Which is the *explicit* form of "$a_1 = 4$, $a_n = 3a_{n-1}$"?',
              options: [
                '$a_n = 4 + 3(n-1)$',
                '$a_n = 3 \\cdot 4^{\\,n-1}$',
                '$a_n = 4 \\cdot 3^{\\,n-1}$',
                '$a_n = 4 \\cdot 3^{\\,n}$',
              ],
              correctAnswer: 2,
              explanation: 'Multiplying by $3$ is geometric with $a_1 = 4$, $r = 3$, so $a_n = a_1 r^{n-1} = 4 \\cdot 3^{\\,n-1}$.',
            },
          ],
        },
      },
      {
        id: 'seq4-drill',
        type: 'input-boxes' as const,
        content: `**Generate and Convert** 🧮

**1)** $a_1 = -1$, $a_n = a_{n-1} + 6$. Find $a_5$.
**2)** $a_1 = 64$, $a_n = \\tfrac{1}{2}\\,a_{n-1}$. Find $a_4$.
**3)** The explicit rule $a_n = 7 + (n-1)(4)$ has common difference $d = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['23', '8', '4'],
          hint1: 'Add $6$ four times: $-1, 5, 11, 17, 23$.',
          hint2: 'Halve three times: $64, 32, 16, 8$.',
          hint3: 'In $a_1 + (n-1)d$, the number multiplying $(n-1)$ is $d$.',
          explanation: '1) $a_5 = -1 + 4(6) = 23$.  2) $a_4 = 64 \\cdot (\\frac{1}{2})^3 = 8$.  3) $d = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'sequences-arithmetic-geometric',
    sections: [
      {
        id: 'seq5-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 5 of 7 — Series: Adding the Terms Up**

---

> 🔑 **A series is a sum of a sequence's terms.** Listing and adding by hand is hopeless for many terms — so each family has a closed-form sum formula that does it in one step.`,
      },
      {
        id: 'seq5-arith-sum',
        type: 'text' as const,
        content: `## Arithmetic Series

The sum of the first $n$ terms of an arithmetic sequence is the **average of the first and last term, times the number of terms**:

$$S_n = \\frac{n}{2}\\,(a_1 + a_n)$$

If you do not yet know $a_n$, substitute $a_n = a_1 + (n-1)d$ to get the equivalent form:

$$S_n = \\frac{n}{2}\\,\\bigl(2a_1 + (n-1)d\\bigr)$$

### Worked Example: $3 + 7 + 11 + \\dots$ (first $20$ terms)

Here $a_1 = 3$, $d = 4$, $n = 20$:

$$S_{20} = \\frac{20}{2}\\bigl(2(3) + (20-1)(4)\\bigr) = 10\\,(6 + 76) = 10 \\cdot 82 = 820$$

> 💡 **Why the average works:** pair the first term with the last, the second with the second-to-last — each pair sums to the same total $a_1 + a_n$. There are $\\frac{n}{2}$ such pairs.`,
      },
      {
        id: 'seq5-geo-sum',
        type: 'text' as const,
        content: `## Geometric Series (finite)

The sum of the first $n$ terms of a geometric sequence is:

$$S_n = a_1 \\cdot \\frac{1 - r^{\\,n}}{1 - r} \\qquad (r \\ne 1)$$

### Worked Example: $4 + 12 + 36 + \\dots$ (first $5$ terms)

Here $a_1 = 4$, $r = 3$, $n = 5$:

$$S_5 = 4 \\cdot \\frac{1 - 3^{5}}{1 - 3} = 4 \\cdot \\frac{1 - 243}{-2} = 4 \\cdot \\frac{-242}{-2} = 4 \\cdot 121 = 484$$

> ⚠️ **Use the right formula for the right family.** Arithmetic uses $\\frac{n}{2}(a_1 + a_n)$; geometric uses $a_1\\frac{1-r^n}{1-r}$. Mixing them up is a classic exam slip.`,
      },
      {
        id: 'seq5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which formula sums the first $n$ terms of an *arithmetic* series?',
              options: [
                '$S_n = a_1 \\dfrac{1 - r^n}{1 - r}$',
                '$S_n = \\dfrac{n}{2}(a_1 + a_n)$',
                '$S_n = a_1 + (n-1)d$',
                '$S_n = \\dfrac{a_1}{1 - r}$',
              ],
              correctAnswer: 1,
              explanation: 'The arithmetic sum is the number of terms times the average of the first and last: $\\frac{n}{2}(a_1+a_n)$. The $r$-formulas are geometric.',
            },
            {
              question: 'The first $10$ terms of $4, 8, 12, \\dots, 40$ sum to $S_{10}$. Using $S_n = \\frac{n}{2}(a_1+a_n)$, this is:',
              options: ['$200$', '$440$', '$220$', '$110$'],
              correctAnswer: 2,
              explanation: '$S_{10} = \\frac{10}{2}(4 + 40) = 5 \\cdot 44 = 220$.',
            },
          ],
        },
      },
      {
        id: 'seq5-drill-arith',
        type: 'input-boxes' as const,
        content: `**Sum an Arithmetic Series** 🧮

Use $S_n = \\dfrac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)$.

**1)** $a_1 = -5,\\; d = 3$. Find $S_{15}$.
**2)** $a_1 = 3,\\; d = 4$. Find $S_{20}$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['240', '820'],
          hint1: '$S_{15} = \\frac{15}{2}(2(-5) + 14(3)) = \\frac{15}{2}(-10 + 42)$.',
          hint2: '$S_{20} = \\frac{20}{2}(2(3) + 19(4)) = 10(6 + 76)$.',
          hint3: 'Multiply $\\frac{15}{2} \\cdot 32 = 240$ for #1; $10 \\cdot 82 = 820$ for #2.',
          explanation: '1) $S_{15} = \\frac{15}{2}(32) = 240$.  2) $S_{20} = 10(82) = 820$.',
        },
      },
      {
        id: 'seq5-drill-geo',
        type: 'input-boxes' as const,
        content: `**Sum a Geometric Series** 🧮

Use $S_n = a_1 \\dfrac{1 - r^{\\,n}}{1 - r}$.

**1)** $a_1 = 6,\\; r = 2,\\; n = 4$. Find $S_4$.
**2)** $a_1 = 4,\\; r = 3,\\; n = 5$. Find $S_5$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['90', '484'],
          hint1: '$S_4 = 6 \\cdot \\frac{1 - 2^4}{1 - 2} = 6 \\cdot \\frac{1 - 16}{-1}$.',
          hint2: '$S_5 = 4 \\cdot \\frac{1 - 3^5}{1 - 3} = 4 \\cdot \\frac{1 - 243}{-2}$.',
          hint3: '#1: $6 \\cdot \\frac{-15}{-1} = 6 \\cdot 15 = 90$. #2: $4 \\cdot \\frac{-242}{-2} = 4 \\cdot 121 = 484$.',
          explanation: '1) $S_4 = 6 \\cdot 15 = 90$.  2) $S_5 = 4 \\cdot 121 = 484$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'sequences-arithmetic-geometric',
    sections: [
      {
        id: 'seq6-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 6 of 7 — Infinite Geometric Series**

---

> 🔑 **The surprise:** Adding *infinitely* many positive numbers can still give a **finite** total — but only for a geometric series whose terms shrink fast enough toward $0$.`,
      },
      {
        id: 'seq6-converge',
        type: 'text' as const,
        content: `## When Does an Infinite Sum Settle Down?

For a geometric series $a_1 + a_1 r + a_1 r^2 + \\dots$, look back at the finite formula $S_n = a_1\\dfrac{1 - r^n}{1 - r}$.

- If $|r| < 1$, then $r^n \\to 0$ as $n \\to \\infty$, so $S_n$ approaches a fixed number — the series **converges**.
- If $|r| \\ge 1$, the terms do **not** shrink to $0$, the partial sums run off to infinity (or oscillate) — the series **diverges**.

When $|r| < 1$, dropping the vanishing $r^n$ gives the infinite-sum formula:

$$S_\\infty = \\frac{a_1}{1 - r} \\qquad \\text{(only when } |r| < 1\\text{)}$$

> ⚠️ **The condition $|r| < 1$ is not optional.** If $|r| \\ge 1$ there is **no finite sum**, and plugging into the formula gives a meaningless answer.`,
      },
      {
        id: 'seq6-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example: $8 + 4 + 2 + 1 + \\dots$

Here $a_1 = 8$ and $r = \\dfrac{1}{2}$. Since $|r| < 1$:

$$S_\\infty = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16$$

### Example: $12 + 4 + \\tfrac{4}{3} + \\dots$

Here $a_1 = 12$ and $r = \\dfrac{1}{3}$:

$$S_\\infty = \\frac{12}{1 - \\frac{1}{3}} = \\frac{12}{\\frac{2}{3}} = 12 \\cdot \\frac{3}{2} = 18$$

> 💡 **Sanity check:** the total must be *bigger* than $a_1$ (you keep adding positive terms) but not by an unbounded amount. $16 > 8$ ✓ and $18 > 12$ ✓.`,
      },
      {
        id: 'seq6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check — Converge or Diverge?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which infinite geometric series has a finite sum?',
              options: [
                '$2 + 6 + 18 + \\dots\\;(r = 3)$',
                '$5 + 5 + 5 + \\dots\\;(r = 1)$',
                '$9 + 3 + 1 + \\dots\\;(r = \\frac{1}{3})$',
                '$1 + 2 + 4 + \\dots\\;(r = 2)$',
              ],
              correctAnswer: 2,
              explanation: 'A finite sum requires $|r| < 1$. Only $r = \\frac{1}{3}$ satisfies that; the others have $|r| \\ge 1$ and diverge.',
            },
            {
              question: 'For $16 + 8 + 4 + \\dots$ the infinite sum $S_\\infty$ is:',
              options: ['$24$', '$32$', '$16$', '$\\infty$'],
              correctAnswer: 1,
              explanation: '$a_1 = 16,\\ r = \\frac{1}{2}$, so $S_\\infty = \\dfrac{16}{1 - \\frac{1}{2}} = \\dfrac{16}{\\frac{1}{2}} = 32$.',
            },
          ],
        },
      },
      {
        id: 'seq6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Infinite Sum** 🔽

Evaluate $S_\\infty$ for $3 + 2 + \\tfrac{4}{3} + \\dots$`,
        exercise: {
          dropdowns: [
            { label: 'First term $a_1 = $', options: ['$3$', '$2$', '$\\frac{4}{3}$', '$1$'] },
            { label: 'Common ratio $r = $', options: ['$\\frac{2}{3}$', '$\\frac{3}{2}$', '$\\frac{1}{3}$', '$2$'] },
            { label: 'Does it converge?', options: ['Yes, $|r| < 1$', 'No, $|r| \\ge 1$'] },
            { label: 'Therefore $S_\\infty = $', options: ['$9$', '$6$', '$4.5$', '$\\infty$'] },
          ],
          correctAnswers: ['$3$', '$\\frac{2}{3}$', 'Yes, $|r| < 1$', '$9$'],
          hint1: 'The first term written is $a_1 = 3$.',
          hint2: '$r = \\dfrac{a_2}{a_1} = \\dfrac{2}{3}$, and $\\frac{2}{3} < 1$, so it converges.',
          hint3: '$S_\\infty = \\dfrac{3}{1 - \\frac{2}{3}} = \\dfrac{3}{\\frac{1}{3}} = 9$.',
          explanation: '$a_1 = 3$, $r = \\frac{2}{3}$ (with $|r|<1$ → converges), so $S_\\infty = \\frac{3}{1 - 2/3} = \\frac{3}{1/3} = 9$.',
        },
      },
      {
        id: 'seq6-drill',
        type: 'input-boxes' as const,
        content: `**Infinite Sums** 🧮

Use $S_\\infty = \\dfrac{a_1}{1 - r}$ (only valid when $|r| < 1$).

**1)** $a_1 = 10,\\; r = \\frac{1}{2}$. Find $S_\\infty$.
**2)** $a_1 = 18,\\; r = \\frac{1}{3}$. Find $S_\\infty$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['20', '27'],
          hint1: '$S_\\infty = \\dfrac{10}{1 - \\frac{1}{2}} = \\dfrac{10}{\\frac{1}{2}}$.',
          hint2: '$S_\\infty = \\dfrac{18}{1 - \\frac{1}{3}} = \\dfrac{18}{\\frac{2}{3}} = 18 \\cdot \\frac{3}{2}$.',
          hint3: 'Dividing by $\\frac{1}{2}$ doubles; dividing by $\\frac{2}{3}$ multiplies by $\\frac{3}{2}$.',
          explanation: '1) $S_\\infty = 10 \\div \\frac{1}{2} = 20$.  2) $S_\\infty = 18 \\cdot \\frac{3}{2} = 27$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'sequences-arithmetic-geometric',
    sections: [
      {
        id: 'seq7-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 7 of 7 — Applications, Mastery & Exit Quiz**

---

You now own both families end-to-end: classify, find any term, switch between recursive and explicit, and sum (finite or infinite). Let's apply it and then test it.`,
      },
      {
        id: 'seq7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Arithmetic (add $d$) | Geometric (multiply by $r$) |
|------|----------------------|------------------------------|
| Find the step | $d = a_2 - a_1$ | $r = \\dfrac{a_2}{a_1}$ |
| $n$-th term | $a_n = a_1 + (n-1)d$ | $a_n = a_1 \\cdot r^{\\,n-1}$ |
| Recursive | $a_n = a_{n-1} + d$ | $a_n = r\\,a_{n-1}$ |
| Function type | linear | exponential |
| Finite sum | $\\dfrac{n}{2}(a_1 + a_n)$ | $a_1\\dfrac{1-r^n}{1-r}$ |
| Infinite sum | none (diverges) | $\\dfrac{a_1}{1-r}$, only if $|r|<1$ |

> ⚠️ **Three traps:** use $n-1$ (not $n$) in the term formulas; pick the sum formula that matches the family; and only use $S_\\infty$ when $|r| < 1$.`,
      },
      {
        id: 'seq7-application',
        type: 'text' as const,
        content: `## Modeling With Sequences

**Arithmetic — a raise of a fixed dollar amount.** A job pays \\$40{,}000 in year $1$ and adds a flat \\$2{,}500 raise each year. Salary is arithmetic with $a_1 = 40000$, $d = 2500$:

$$a_{10} = 40000 + (10-1)(2500) = 40000 + 22500 = 62500$$

Total earned over $10$ years (an arithmetic series):

$$S_{10} = \\frac{10}{2}(a_1 + a_{10}) = 5\\,(40000 + 62500) = 5 \\cdot 102500 = 512500$$

**Geometric — a quantity that changes by a fixed percent.** A population multiplies by $r = 1.05$ ($5\\%$ growth) each year. After $3$ years of growth from $1000$:

$$a_4 = 1000 \\cdot (1.05)^{3} \\approx 1157.63$$

> 💡 **Decide the family from the wording:** "increases by a fixed *amount*" → arithmetic; "increases by a fixed *percent/factor*" → geometric.`,
      },
      {
        id: 'seq7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A savings plan deposits \\$300 the first month and \\$50 more each following month (\\$350, \\$400, …). How much is deposited in month $12$?',
              options: ['\\$900', '\\$850', '\\$800', '\\$650'],
              correctAnswer: 1,
              explanation: 'Arithmetic: $a_1 = 300,\\ d = 50$, so $a_{12} = 300 + (12-1)(50) = 300 + 550 = 850$.',
            },
            {
              question: 'A ball is dropped and each bounce reaches $\\frac{1}{2}$ the previous height, starting at $20$ ft. The peak heights $20, 10, 5, \\dots$ form which type of series, and what is their infinite sum?',
              options: [
                'Arithmetic; sum is infinite',
                'Geometric; sum $= 20$ ft',
                'Geometric; sum $= 40$ ft',
                'Geometric; sum $= 10$ ft',
              ],
              correctAnswer: 2,
              explanation: 'Heights multiply by $r=\\frac{1}{2}$ (geometric, $|r|<1$). $S_\\infty = \\dfrac{20}{1-\\frac{1}{2}} = \\dfrac{20}{\\frac{1}{2}} = 40$ ft.',
            },
          ],
        },
      },
      {
        id: 'seq7-mixed2',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Tool** 🔽

For each task, pick the formula you'd use.`,
        exercise: {
          dropdowns: [
            { label: 'Find the $50$th term of $2,5,8,\\dots$', options: ['$a_1 + (n-1)d$', '$a_1 \\cdot r^{n-1}$', '$\\frac{n}{2}(a_1+a_n)$', '$\\frac{a_1}{1-r}$'] },
            { label: 'Add the first $50$ terms of $2,5,8,\\dots$', options: ['$\\frac{n}{2}(a_1+a_n)$', '$a_1 \\cdot r^{n-1}$', '$\\frac{a_1}{1-r}$', '$a_1 + (n-1)d$'] },
            { label: 'Add $1 + \\frac{1}{2} + \\frac{1}{4} + \\dots$ forever', options: ['$\\frac{a_1}{1-r}$', '$\\frac{n}{2}(a_1+a_n)$', '$a_1 + (n-1)d$', '$a_1\\frac{1-r^n}{1-r}$'] },
          ],
          correctAnswers: ['$a_1 + (n-1)d$', '$\\frac{n}{2}(a_1+a_n)$', '$\\frac{a_1}{1-r}$'],
          hint1: '$2,5,8,\\dots$ adds $3$, so it is arithmetic — use the arithmetic tools.',
          hint2: 'A single term uses the $n$-th-term formula; a sum of many terms uses a series formula.',
          hint3: '$1 + \\frac{1}{2} + \\frac{1}{4} + \\dots$ is infinite geometric with $|r|=\\frac{1}{2}<1$, so use $\\frac{a_1}{1-r}$.',
          explanation: 'One term of an arithmetic sequence → $a_1+(n-1)d$. A finite arithmetic sum → $\\frac{n}{2}(a_1+a_n)$. An infinite geometric sum → $\\frac{a_1}{1-r}$.',
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
              question: 'What is the $7$th term of the geometric sequence $2, 6, 18, \\dots$?',
              options: ['$486$', '$162$', '$1458$', '$4374$'],
              correctAnswer: 2,
              explanation: '$a_1 = 2,\\ r = 3$, so $a_7 = 2 \\cdot 3^{6} = 2 \\cdot 729 = 1458$.',
            },
            {
              question: 'The sum of the first $20$ terms of the arithmetic series $3 + 7 + 11 + \\dots$ is:',
              options: ['$800$', '$410$', '$820$', '$1640$'],
              correctAnswer: 2,
              explanation: '$a_1 = 3,\\ d = 4$, so $S_{20} = \\frac{20}{2}(2(3) + 19(4)) = 10(6 + 76) = 820$.',
            },
            {
              question: 'Which infinite geometric series converges, and to what sum?',
              options: [
                '$24 + 8 + \\tfrac{8}{3} + \\dots \\to 48$',
                '$24 + 8 + \\tfrac{8}{3} + \\dots \\to 36$',
                '$3 + 6 + 12 + \\dots \\to 24$',
                '$24 + 8 + \\tfrac{8}{3} + \\dots$ diverges',
              ],
              correctAnswer: 1,
              explanation: '$a_1 = 24,\\ r = \\frac{1}{3}$ with $|r| < 1$, so it converges to $S_\\infty = \\dfrac{24}{1 - \\frac{1}{3}} = \\dfrac{24}{\\frac{2}{3}} = 36$.',
            },
          ],
        },
      },
    ],
  },
]
