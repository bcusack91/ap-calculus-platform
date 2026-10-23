import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Arithmetic & Geometric Sequences (AP Precalculus).
 * Registry key: 'sequences-arithmetic-geometric' (matches the DB Topic.slug).
 * 7 parts, scoped to AP Precalculus CED 2.1-2.2: foundations → arithmetic →
 * geometric → recursive vs. explicit → any-term rules & comparing growth →
 * sequences vs. linear/exponential functions → mixed mastery + exit quiz. AP
 * Precalc framing: sequences as functions on the whole numbers; constant
 * difference ↔ linear, constant ratio ↔ exponential. Series are outside the CED.
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

> 🔑 **Key Concept:** A **sequence** is just a function whose inputs are whole numbers (counting from $0$ or from $1$) and whose outputs are the **terms** $a_1, a_2, a_3, \\dots$. Everything in AP Precalculus about sequences comes from asking *"how does each term grow from the one before it?"*`,
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

> 💡 **AP framing:** Because the inputs are whole numbers, a sequence is a **function** $a$ with $a(n) = a_n$, and its graph is a set of separate points. This is why sequences behave like the discrete cousins of the lines and exponentials you already know.`,
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
                'The position of the term in the list',
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
- **Part 5:** Rules from any known term, and how the two families grow differently.
- **Part 6:** Connecting sequences to linear and exponential functions.
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
              options: ['$-3$', '$3$', '$-5$', '$-7$'],
              correctAnswer: 1,
              explanation: '$d = a_2 - a_1 = -2 - (-5) = 3$. Check: $1 - (-2) = 3$. ✓',
            },
            {
              question: 'Which formula gives the $n$-th term of an arithmetic sequence with first term $a_1$ and common difference $d$?',
              options: [
                '$a_n = a_1 \\cdot d^{\\,n-1}$',
                '$a_n = a_1 + n \\cdot d$',
                '$a_n = a_1 + (n-1)d$',
                '$a_n = a_1 \\cdot d(n-1)$',
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
                'They stay the same size',
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

**Part 5 of 7 — Any-Term Rules & Comparing Growth**

---

> 🔑 **Two upgrades:** You can write a rule starting from **any** known term, not just the first one. And you can predict how an arithmetic sequence and a geometric sequence grow differently, step by step.`,
      },
      {
        id: 'seq5-anyterm',
        type: 'text' as const,
        content: `## Rules from Any Known Term

The AP Precalculus course often calls the initial value **term $0$**, so the basic rules are

$$a_n = a_0 + dn \\qquad\\qquad g_n = g_0\\, r^{\\,n}$$

If instead you know term $k$, count the steps $n - k$ from it:

$$a_n = a_k + d\\,(n - k) \\qquad\\qquad g_n = g_k\\, r^{\\,n - k}$$

### Arithmetic: $a_7 = 50$ and $d = 4$

- Rule: $a_n = 50 + 4(n - 7)$
- $a_{12} = 50 + 4(5) = 70$
- $a_0 = 50 + 4(-7) = 22$

### Geometric: $g_3 = 40$ and $r = 0.5$

- Rule: $g_n = 40\\,(0.5)^{\\,n - 3}$
- $g_6 = 40\\,(0.5)^3 = 5$
- $g_0 = 40\\,(0.5)^{-3} = 40 \\cdot 8 = 320$

> 💡 A negative step count $n - k$ just means you are walking **backward** from the known term.`,
      },
      {
        id: 'seq5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An arithmetic sequence has $a_7 = 50$ and $d = 4$. Which rule gives $a_n$?',
              options: ['$a_n = 50 + 4(n - 7)$', '$a_n = 50 + 4n$', '$a_n = 4 + 50(n - 7)$', '$a_n = 50 + 4(n + 7)$'],
              correctAnswer: 0,
              explanation: 'Start from the known term and add $d$ once per step: $a_n = a_7 + 4(n - 7)$. The rule $50 + 4n$ puts $50$ at $n = 0$ instead of $n = 7$.',
            },
            {
              question: 'A geometric sequence has $g_3 = 40$ and $r = 0.5$. What is $g_0$?',
              options: ['$320$', '$5$', '$80$', '$20$'],
              correctAnswer: 0,
              explanation: 'Walking back $3$ steps divides by $0.5$ three times: $g_0 = 40 \\cdot 2^3 = 320$. The value $5$ is $g_6$, three steps forward, $20$ is $g_4$, one step forward, and $80$ stops after one step back.',
            },
          ],
        },
      },
      {
        id: 'seq5-growth',
        type: 'text' as const,
        content: `## Equal Steps vs. Growing Steps

Both sequences below start at $20$ and gain $10$ on the first step.

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|
| $a_n = 20 + 10n$ | $20$ | $30$ | $40$ | $50$ | $60$ |
| $g_n = 20(1.5)^n$ | $20$ | $30$ | $45$ | $67.5$ | $101.25$ |

- The **arithmetic** sequence gains $10$, $10$, $10$, $10$: it increases **equally** with each step.
- The **geometric** sequence gains $10$, $15$, $22.5$, $33.75$: with positive terms and $r > 1$, it increases by a **larger amount** with each successive step.

| Wording | Family | Constant |
|---------|--------|----------|
| "grows by $6$ units each year" | arithmetic | $d = 6$ |
| "grows by $6\\%$ each year" | geometric | $r = 1.06$ |
| "loses a quarter of its value each year" | geometric | $r = 0.75$ |

> ⚠️ A decreasing geometric sequence of positive terms ($0 < r < 1$) drops by **smaller and smaller** amounts, while a decreasing arithmetic sequence drops by the same amount every step.`,
      },
      {
        id: 'seq5-dropdown',
        type: 'dropdown-select' as const,
        content: `**How Do They Grow?** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'An increasing arithmetic sequence increases by:', options: ['the same amount each step', 'a larger amount each step', 'a smaller amount each step'] },
            { label: 'An increasing geometric sequence of positive terms increases by:', options: ['a larger amount each step', 'the same amount each step', 'a smaller amount each step'] },
            { label: '"Grows by $6\\%$ each year" describes:', options: ['geometric, $r = 1.06$', 'arithmetic, $d = 6$', 'geometric, $r = 0.06$', 'arithmetic, $d = 0.06$'] },
          ],
          correctAnswers: ['the same amount each step', 'a larger amount each step', 'geometric, $r = 1.06$'],
          hint1: 'Arithmetic means a common difference: the same amount is added every time.',
          hint2: 'Multiplying a bigger term by the same $r > 1$ adds more than before.',
          hint3: 'A percent increase keeps $100\\%$ and adds $6\\%$: multiply by $1.06$.',
          explanation: 'Arithmetic sequences change by equal amounts. Increasing geometric sequences of positive terms change by larger amounts each step. A $6\\%$ yearly increase is geometric with $r = 1.06$.',
        },
      },
      {
        id: 'seq5-drill',
        type: 'input-boxes' as const,
        content: `**Compare the Growth** 🧮

Use $a_n = 20 + 10n$ and $g_n = 20(1.5)^n$.

**1)** $a_6$
**2)** $g_4$
**3)** How much $g$ gains from $n = 3$ to $n = 4$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['80', '101.25', '33.75'],
          hint1: '$a_6 = 20 + 10(6)$.',
          hint2: '$g_4 = 20(1.5)^4 = 20(5.0625)$.',
          hint3: '$g_3 = 67.5$. Subtract it from $g_4$.',
          explanation: '1) $a_6 = 80$.  2) $g_4 = 101.25$.  3) $101.25 - 67.5 = 33.75$, more than three times the arithmetic gain of $10$.',
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

**Part 6 of 7 — From Sequences to Linear & Exponential Functions**

---

> 🔑 **Same structure, bigger domain.** A linear function is an arithmetic sequence that accepts every real input; an exponential function is a geometric sequence that does the same. Both kinds of function can be built from a known point, just like the any-term rules.`,
      },
      {
        id: 'seq6-forms',
        type: 'text' as const,
        content: `## Matching Forms

| Sequence | Function | Built from |
|----------|----------|------------|
| $a_n = a_0 + dn$ | $f(x) = b + mx$ | initial value plus repeated **addition** |
| $a_n = a_k + d(n - k)$ | $f(x) = y_i + m(x - x_i)$ | a known point and a constant rate |
| $g_n = g_0\\, r^{\\,n}$ | $f(x) = a\\, b^{\\,x}$ | initial value times repeated **multiplication** |
| $g_n = g_k\\, r^{\\,n - k}$ | $f(x) = y_i\\, b^{\\,x - x_i}$ | a known point and a constant ratio |

### Building a Linear Function from Two Points: $(3, 14)$ and $(7, 30)$

$$m = \\frac{30 - 14}{7 - 3} = 4 \\qquad f(x) = 14 + 4(x - 3) = 2 + 4x$$

### Building an Exponential Function from Two Points: $(0, 50)$ and $(2, 72)$

$$b^{2} = \\frac{72}{50} = 1.44 \\;\\Rightarrow\\; b = 1.2 \\qquad f(x) = 50\\,(1.2)^{x}$$

> 💡 Two values at different inputs always determine a linear function (or arithmetic sequence). They determine an exponential function $f(x)=ab^x$ when both outputs are nonzero with the same sign. For a geometric sequence, an even step count leaves $r=\\pm$, so you need extra information such as "positive terms."`,
      },
      {
        id: 'seq6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which linear function passes through $(3, 14)$ and $(7, 30)$?',
              options: ['$f(x) = 14 + 4(x - 3)$', '$f(x) = 14 + 4x$', '$f(x) = 3 + 4(x - 14)$', '$f(x) = 14 + 16(x - 3)$'],
              correctAnswer: 0,
              explanation: 'The slope is $\\frac{30 - 14}{7 - 3} = 4$, and the point form starts from $(3, 14)$. Using $16$ as the slope forgets to divide by the change in input.',
            },
            {
              question: 'Which exponential function passes through $(0, 50)$ and $(2, 72)$?',
              options: ['$f(x) = 50(1.2)^x$', '$f(x) = 50(1.44)^x$', '$f(x) = 50 + 11x$', '$f(x) = 50(0.2)^x$'],
              correctAnswer: 0,
              explanation: 'Over $2$ units the output is multiplied by $1.44$, so $b^2 = 1.44$ and $b = 1.2$. Base $1.44$ is the two-step factor, and $50 + 11x$ is the line through the same two points.',
            },
          ],
        },
      },
      {
        id: 'seq6-table',
        type: 'text' as const,
        content: `## Linear or Exponential? Check Equal Input Steps

When the inputs are equally spaced:

- outputs change by a **constant amount** → **linear**
- outputs change by a **constant factor** → **exponential** (the factor cannot be $0$ or $1$)

| $x$ | $0$ | $3$ | $6$ | $9$ |
|---|---|---|---|---|
| Model A | $200$ | $170$ | $140$ | $110$ |
| Model B | $200$ | $160$ | $128$ | $102.4$ |

- **Model A** drops $30$ every $3$ units: linear, slope $-10$, so $A(x) = 200 - 10x$.
- **Model B** is multiplied by $0.8$ every $3$ units: exponential.

### Different Domains

The sequence $g_n = 200(0.8)^n$ only has whole-number inputs. The function $f(x) = 200(0.8)^x$ also has values like $f(4.5)$, so it can describe what happens **between** the whole-number steps.`,
      },
      {
        id: 'seq6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Model** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Outputs drop by $30$ every $3$ units of input. The model is:', options: ['linear', 'exponential', 'neither'] },
            { label: 'Outputs are multiplied by $0.8$ every $3$ units of input. The model is:', options: ['exponential', 'linear', 'neither'] },
            { label: 'Domains of $g_n = 200(0.8)^n$ and $f(x) = 200(0.8)^x$:', options: ['whole numbers vs. all real numbers', 'all real numbers vs. whole numbers', 'the same for both'] },
          ],
          correctAnswers: ['linear', 'exponential', 'whole numbers vs. all real numbers'],
          hint1: 'A constant amount of change over equal input steps means a constant rate.',
          hint2: 'A constant factor over equal input steps means proportional change.',
          hint3: 'A sequence is a function of the whole numbers.',
          explanation: 'Equal amounts over equal steps: linear. Equal factors over equal steps: exponential. The sequence takes whole-number inputs while the function takes all real inputs.',
        },
      },
      {
        id: 'seq6-drill',
        type: 'input-boxes' as const,
        content: `**Build the Function** 🧮

**1)** Slope of the line through $(3, 14)$ and $(7, 30)$
**2)** That line's value at $x = 0$
**3)** The base $b$ of the exponential function through $(0, 50)$ and $(2, 72)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '1.2'],
          hint1: '$\\frac{30 - 14}{7 - 3}$.',
          hint2: 'Step back $3$ units from $(3, 14)$: $14 - 3(4)$.',
          hint3: '$b^2 = \\frac{72}{50} = 1.44$, so take the positive square root.',
          explanation: '1) $\\frac{16}{4} = 4$.  2) $14 - 12 = 2$.  3) $b = \\sqrt{1.44} = 1.2$.',
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

You now own both families end-to-end: classify, find any term from any known term, switch between recursive and explicit, compare their growth, and match them to linear and exponential functions. Let's apply it and then test it.`,
      },
      {
        id: 'seq7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Arithmetic (add $d$) | Geometric (multiply by $r$) |
|------|----------------------|------------------------------|
| Find the step | $d = a_2 - a_1$ | $r = \\dfrac{a_2}{a_1}$ |
| $n$-th term | $a_n = a_1 + (n-1)d$ | $a_n = a_1 \\cdot r^{\\,n-1}$ |
| From any term $k$ | $a_n = a_k + d(n-k)$ | $a_n = a_k \\cdot r^{\\,n-k}$ |
| Recursive | $a_n = a_{n-1} + d$ | $a_n = r\\,a_{n-1}$ |
| Growth per step | same amount | larger amount (positive terms, $r > 1$) |
| Function type | linear | exponential |

> ⚠️ **Three traps:** use $n-1$ (not $n$) when counting from $a_1$; check whether the count starts at $0$ or $1$; and read percent language as a ratio ($5\\%$ growth means $r = 1.05$).`,
      },
      {
        id: 'seq7-application',
        type: 'text' as const,
        content: `## Modeling With Sequences

**Arithmetic — a raise of a fixed dollar amount.** A job pays \\$40,000 in year $1$ and adds a flat \\$2,500 raise each year. Salary is arithmetic with $a_1 = 40000$, $d = 2500$:

$$a_{10} = 40000 + (10-1)(2500) = 40000 + 22500 = 62500$$

Compare a $5\\%$ raise each year instead, which is geometric with $r = 1.05$: year $10$ pays $40000(1.05)^9 \\approx 62053$, still a little less, but year $11$ pays $40000(1.05)^{10} \\approx 65156$ against the flat plan's \\$65,000. The percent raise grows by more each year, so it pulls ahead and stays ahead.

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
              question: 'A ball is dropped and each bounce reaches $\\frac{1}{2}$ the previous height. The peak heights are $20, 10, 5, \\dots$ ft. What is the height of the $5$th peak?',
              options: ['$1.25$ ft', '$2.5$ ft', '$0.625$ ft', '$-20$ ft'],
              correctAnswer: 0,
              explanation: 'The heights form a geometric sequence with $a_1 = 20$ and $r = \\frac{1}{2}$, so $a_5 = 20 \\cdot (\\frac{1}{2})^4 = 1.25$ ft. Subtracting $10$ ft each bounce treats it as arithmetic and gives $-20$ ft, which is impossible.',
            },
          ],
        },
      },
      {
        id: 'seq7-mixed2',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Tool** 🔽

For each task, pick the form you'd use.`,
        exercise: {
          dropdowns: [
            { label: 'Find the $50$th term of $2,5,8,\\dots$', options: ['$a_1 + (n-1)d$', '$a_1 \\cdot r^{n-1}$', '$g_k \\cdot r^{n-k}$', '$a\\,b^{x}$'] },
            { label: 'Find $g_9$ when you know $g_4$ and $r$', options: ['$g_k \\cdot r^{n-k}$', '$a_1 + (n-1)d$', '$a\\,b^{x}$', '$a_k + d(n-k)$'] },
            { label: 'Model a value growing $3\\%$ per year at any time $x$, including between whole years', options: ['$a\\,b^{x}$', '$a_k + d(n-k)$', '$a_1 + (n-1)d$', '$g_k \\cdot r^{n-k}$'] },
          ],
          correctAnswers: ['$a_1 + (n-1)d$', '$g_k \\cdot r^{n-k}$', '$a\\,b^{x}$'],
          hint1: '$2,5,8,\\dots$ adds $3$, so it is arithmetic — use the arithmetic term rule.',
          hint2: 'You know a term other than the first, so start from $g_k$ and count $n - k$ steps.',
          hint3: 'Inputs between whole years call for a function of all real numbers, and percent growth is exponential.',
          explanation: 'One term of an arithmetic sequence → $a_1+(n-1)d$. A geometric term from a known term $g_k$ → $g_k \\cdot r^{n-k}$. Percent growth at any real time → the exponential function $a\\,b^x$.',
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
              question: 'An arithmetic sequence has $a_0 = 3$ and $d = 4$. Which linear function matches it?',
              options: ['$f(x) = 3 + 4x$', '$f(x) = 4 + 3x$', '$f(x) = 3 \\cdot 4^x$', '$f(x) = 3 + 4(x - 1)$'],
              correctAnswer: 0,
              explanation: 'Both start at $3$ when the input is $0$ and add $4$ per unit of input. The form $3 + 4(x - 1)$ would put $3$ at $x = 1$, and $3 \\cdot 4^x$ multiplies instead of adds.',
            },
            {
              question: 'A geometric sequence with positive terms has $g_2 = 24$ and $g_4 = 96$. What is $g_0$?',
              options: ['$6$', '$12$', '$1.5$', '$-48$'],
              correctAnswer: 0,
              explanation: '$r^2 = \\frac{96}{24} = 4$, so $r = 2$, and $g_0 = 24 \\cdot 2^{-2} = 6$. The value $12$ is $g_1$, $1.5$ divides by $2^4$ instead of $2^2$, and $-48$ treats the sequence as arithmetic with $d = 36$.',
            },
          ],
        },
      },
    ],
  },
]
