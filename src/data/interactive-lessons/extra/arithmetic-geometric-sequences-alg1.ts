import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Arithmetic & Geometric Sequences (Algebra 1).
 * Registry key: 'arithmetic-geometric-sequences-alg1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'arithmetic-geometric-sequences-alg1',
    sections: [
      {
        id: 'ags1-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 1 of 5 — Sequences & the Common Difference**

---

### Topics in This Part

| Section |
|---------|
| What Is a Sequence? |
| Arithmetic Sequences |
| Finding the Common Difference |

> 🔑 **Key Concept:** A **sequence** is an ordered list of numbers. The numbers are called **terms**. The whole lesson is about spotting the *pattern* that gets you from one term to the next — and writing a rule for it.`,
      },
      {
        id: 'ags1-what',
        type: 'text' as const,
        content: `## What Is a Sequence?

A **sequence** is just a list of numbers in a set order:

$$2,\\; 5,\\; 8,\\; 11,\\; 14,\\; \\dots$$

We name the terms with subscripts:

| Term | Symbol | Value |
|------|--------|-------|
| 1st term | $a_1$ | $2$ |
| 2nd term | $a_2$ | $5$ |
| 3rd term | $a_3$ | $8$ |
| $n$th term | $a_n$ | ? |

The little number is the **position** (or *index*). So $a_4 = 11$ means "the 4th term is $11$."

> 💡 The "$\\dots$" means the pattern keeps going forever. A sequence can be **finite** (it stops) or **infinite** (it never ends).`,
      },
      {
        id: 'ags1-arith',
        type: 'text' as const,
        content: `## Arithmetic Sequences

In an **arithmetic sequence**, you get the next term by **adding the same number every time**. That fixed number is the **common difference**, written $d$.

$$2,\\; 5,\\; 8,\\; 11,\\; 14,\\; \\dots \\qquad d = +3$$

To find $d$, subtract **any term from the one after it**:

$$d = a_2 - a_1 = 5 - 2 = 3$$

It must be the **same** gap every time, or the sequence is *not* arithmetic.

| Sequence | Difference between terms | Arithmetic? |
|----------|--------------------------|-------------|
| $4, 7, 10, 13$ | $+3, +3, +3$ | ✅ yes, $d=3$ |
| $20, 17, 14, 11$ | $-3, -3, -3$ | ✅ yes, $d=-3$ |
| $1, 2, 4, 8$ | $+1, +2, +4$ | ❌ no (gap changes) |

> 🔑 **Key Idea:** Arithmetic = **repeated addition** of a constant $d$. If $d$ is negative, the terms go *down*.`,
      },
      {
        id: 'ags1-id',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which list is an arithmetic sequence?',
              options: ['$3, 6, 12, 24$', '$2, 9, 16, 23$', '$1, 4, 9, 16$', '$5, 10, 20, 40$'],
              correctAnswer: 1,
              explanation: '$2, 9, 16, 23$ adds $+7$ each step ($d=7$), so it is arithmetic. The others multiply ($3,6,12,24$ and $5,10,20,40$) or have a changing gap ($1,4,9,16$ adds $+3,+5,+7$).',
            },
            {
              question: 'What is the common difference of $15, 11, 7, 3, \\dots$?',
              options: ['$-4$', '$4$', '$-3$', '$11$'],
              correctAnswer: 0,
              explanation: '$d = a_2 - a_1 = 11 - 15 = -4$. Each term is $4$ less than the one before, so $d = -4$.',
            },
          ],
        },
      },
      {
        id: 'ags1-diff-drill',
        type: 'input-boxes' as const,
        content: `**Find the Common Difference** 🧮

For each arithmetic sequence, find $d$ by computing $a_2 - a_1$. (Negative answers are fine.)

**1)** $6, 10, 14, 18, \\dots \\quad d = \\,?$
**2)** $30, 24, 18, 12, \\dots \\quad d = \\,?$
**3)** $-7, -4, -1, 2, \\dots \\quad d = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-6', '3'],
          hint1: '$d = a_2 - a_1$. For (1), $10 - 6 = 4$.',
          hint2: 'For (2) the terms go down, so $d$ is negative: $24 - 30 = -6$.',
          hint3: 'For (3), $-4 - (-7) = -4 + 7 = 3$.',
          explanation: '1) $10-6 = 4$.  2) $24-30 = -6$.  3) $-4-(-7) = 3$. Always subtract a term from the one **after** it.',
        },
      },
      {
        id: 'ags1-next',
        type: 'text' as const,
        content: `## Predicting the Next Term

Once you know $d$, the next term is just **current term $+\\, d$**:

$$a_{n+1} = a_n + d$$

This is called a **recursive rule** — it tells you how to get the *next* term from the one you have.

**Example:** $4, 11, 18, 25, \\dots$ has $d = 7$. The next term is $25 + 7 = 32$.

> ⚠️ Recursion is great for the *next* term, but slow for far-away terms. To jump straight to the 100th term without listing all of them, we need a direct formula — that's Part 2.`,
      },
      {
        id: 'ags1-next-dropdown',
        type: 'dropdown-select' as const,
        content: `**Extend the Pattern** 🔽

The arithmetic sequence is $4, 11, 18, 25, \\dots$. Fill in each blank using $a_{n+1} = a_n + d$.`,
        exercise: {
          dropdowns: [
            { label: 'Common difference $d =$', options: ['$7$', '$11$', '$4$', '$-7$'] },
            { label: 'Next term after $25$:', options: ['$32$', '$31$', '$36$', '$50$'] },
            { label: 'The term after that:', options: ['$39$', '$38$', '$40$', '$32$'] },
          ],
          correctAnswers: ['$7$', '$32$', '$39$'],
          hint1: '$d = a_2 - a_1 = 11 - 4 = 7$.',
          hint2: 'Add $d$ to the last term: $25 + 7 = 32$.',
          hint3: 'Keep adding $7$: $32 + 7 = 39$.',
          explanation: '$d = 7$, so the list continues $25 \\to 32 \\to 39$. Each recursive step adds the common difference.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'arithmetic-geometric-sequences-alg1',
    sections: [
      {
        id: 'ags2-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 2 of 5 — The Explicit Formula for Arithmetic Sequences**

---

> 🔑 **The Idea:** Instead of adding $d$ over and over, the **explicit formula** lets you plug in a position $n$ and get the term $a_n$ directly — even the 500th term.`,
      },
      {
        id: 'ags2-formula',
        type: 'text' as const,
        content: `## The Explicit (nth-Term) Formula

For an arithmetic sequence with first term $a_1$ and common difference $d$:

$$\\boxed{\\,a_n = a_1 + (n - 1)\\,d\\,}$$

**Why $(n-1)$?** To reach the $n$th term, you start at $a_1$ and add $d$ a total of $(n-1)$ times — because there are $n-1$ *gaps* between $n$ terms.

| Term | Built from $a_1$ | Adds of $d$ |
|------|------------------|-------------|
| $a_1$ | $a_1$ | $0$ times |
| $a_2$ | $a_1 + d$ | $1$ time |
| $a_3$ | $a_1 + 2d$ | $2$ times |
| $a_n$ | $a_1 + (n-1)d$ | $n-1$ times |

> 💡 The number of steps is always **one less** than the term number. That single "$-1$" is the most common place students slip.`,
      },
      {
        id: 'ags2-worked',
        type: 'text' as const,
        content: `## Worked Example

**Find the 10th term of $3, 7, 11, 15, \\dots$**

First, identify the pieces: $a_1 = 3$ and $d = 7 - 3 = 4$.

Plug into $a_n = a_1 + (n-1)d$ with $n = 10$:

$$a_{10} = 3 + (10 - 1)(4) = 3 + (9)(4) = 3 + 36 = 39$$

> ✅ **Check:** Count up — $3, 7, 11, 15, 19, 23, 27, 31, 35, 39$. The 10th term is indeed $39$. ✓

### Building the Rule

You can also write the whole formula for this sequence by simplifying:

$$a_n = 3 + (n-1)(4) = 3 + 4n - 4 = 4n - 1$$

Now any term is one step away: $a_{20} = 4(20) - 1 = 79$.`,
      },
      {
        id: 'ags2-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Formula** 🔽

You're writing the explicit formula for the arithmetic sequence $5, 8, 11, 14, \\dots$. Fill in each piece.`,
        exercise: {
          dropdowns: [
            { label: 'First term $a_1 =$', options: ['$5$', '$8$', '$3$', '$1$'] },
            { label: 'Common difference $d =$', options: ['$3$', '$5$', '$8$', '$-3$'] },
            { label: 'Formula $a_n =$', options: ['$5 + (n-1)(3)$', '$3 + (n-1)(5)$', '$5 + 3n$', '$5 + (n-1)(5)$'] },
            { label: 'Simplified, $a_n =$', options: ['$3n + 2$', '$3n + 5$', '$5n + 3$', '$8n - 3$'] },
          ],
          correctAnswers: ['$5$', '$3$', '$5 + (n-1)(3)$', '$3n + 2$'],
          hint1: 'The first term you see is $5$, so $a_1 = 5$.',
          hint2: '$d = a_2 - a_1 = 8 - 5 = 3$.',
          hint3: '$a_n = 5 + (n-1)(3) = 5 + 3n - 3 = 3n + 2$.',
          explanation: '$a_1 = 5$, $d = 3$, so $a_n = 5 + (n-1)(3) = 3n + 2$. Check: $a_1 = 3(1)+2 = 5$ ✓.',
        },
      },
      {
        id: 'ags2-nth-drill',
        type: 'input-boxes' as const,
        content: `**Find the Term** 🧮

Use $a_n = a_1 + (n-1)d$ for each.

**1)** $a_1 = 2,\\; d = 5$. Find $a_8 = \\,?$
**2)** $4, 9, 14, 19, \\dots$ Find the 12th term, $a_{12} = \\,?$
**3)** $a_1 = 50,\\; d = -3$. Find $a_{10} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['37', '59', '23'],
          hint1: '(1) $a_8 = 2 + (8-1)(5) = 2 + 35 = 37$.',
          hint2: '(2) $d = 5$, so $a_{12} = 4 + (12-1)(5) = 4 + 55 = 59$.',
          hint3: '(3) $a_{10} = 50 + (10-1)(-3) = 50 - 27 = 23$.',
          explanation: '1) $2 + 7(5) = 37$.  2) $4 + 11(5) = 59$.  3) $50 + 9(-3) = 23$. Remember: multiply $d$ by $(n-1)$, not $n$.',
        },
      },
      {
        id: 'ags2-reverse',
        type: 'multiple-choice' as const,
        content: `**Working Backwards** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An arithmetic sequence has $a_1 = 7$ and $a_5 = 23$. What is the common difference $d$?',
              options: ['$4$', '$16$', '$5$', '$3$'],
              correctAnswer: 0,
              explanation: 'From $a_1$ to $a_5$ is $4$ steps, and the total change is $23 - 7 = 16$. So $d = 16 \\div 4 = 4$.',
            },
            {
              question: 'For the sequence with formula $a_n = 6n - 2$, which term equals $40$?',
              options: ['$n = 7$', '$n = 6$', '$n = 8$', '$n = 5$'],
              correctAnswer: 0,
              explanation: 'Set $6n - 2 = 40 \\Rightarrow 6n = 42 \\Rightarrow n = 7$. So $a_7 = 40$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'arithmetic-geometric-sequences-alg1',
    sections: [
      {
        id: 'ags3-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 3 of 5 — Geometric Sequences & the Common Ratio**

---

> 🔑 **New Pattern:** Arithmetic sequences **add** the same number. **Geometric** sequences **multiply** by the same number every time. That multiplier is the **common ratio**, $r$.`,
      },
      {
        id: 'ags3-geo',
        type: 'text' as const,
        content: `## Geometric Sequences

In a **geometric sequence**, each term is the previous term **times a fixed number** $r$:

$$2,\\; 6,\\; 18,\\; 54,\\; 162,\\; \\dots \\qquad r = \\times 3$$

To find the **common ratio**, **divide any term by the one before it**:

$$r = \\frac{a_2}{a_1} = \\frac{6}{2} = 3$$

It must be the **same** ratio every step:

| Sequence | Ratio between terms | Geometric? |
|----------|---------------------|------------|
| $5, 10, 20, 40$ | $\\times 2$ each | ✅ yes, $r=2$ |
| $81, 27, 9, 3$ | $\\times \\frac{1}{3}$ each | ✅ yes, $r=\\frac{1}{3}$ |
| $2, 4, 6, 8$ | $\\times 2, \\times 1.5, \\dots$ | ❌ no (it's arithmetic) |

> 🔑 **Key Idea:** Geometric = **repeated multiplication** by a constant $r$. If $0 < r < 1$, the terms **shrink**; if $r > 1$, they **grow** fast.`,
      },
      {
        id: 'ags3-ratio-drill',
        type: 'input-boxes' as const,
        content: `**Find the Common Ratio** 🧮

Find $r$ by computing $\\dfrac{a_2}{a_1}$. (Fractions like $1/2$ are fine.)

**1)** $3, 12, 48, 192, \\dots \\quad r = \\,?$
**2)** $7, 14, 28, 56, \\dots \\quad r = \\,?$
**3)** $80, 40, 20, 10, \\dots \\quad r = \\,?$  *(fraction or decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '1/2'],
          hint1: '(1) $r = 12 \\div 3 = 4$.',
          hint2: '(2) $r = 14 \\div 7 = 2$.',
          hint3: '(3) The terms are halving: $40 \\div 80 = \\frac{1}{2}$ (or $0.5$).',
          explanation: '1) $12/3 = 4$.  2) $14/7 = 2$.  3) $40/80 = \\frac{1}{2}$. Always **divide**, not subtract, to find $r$.',
        },
      },
      {
        id: 'ags3-formula',
        type: 'text' as const,
        content: `## The Explicit Formula for Geometric Sequences

For a geometric sequence with first term $a_1$ and common ratio $r$:

$$\\boxed{\\,a_n = a_1 \\cdot r^{\\,n-1}\\,}$$

Just like arithmetic, the exponent is $(n-1)$ — because reaching the $n$th term takes $n-1$ multiplications.

### Worked Example

**Find the 5th term of $2, 6, 18, \\dots$**

Here $a_1 = 2$ and $r = \\frac{6}{2} = 3$. With $n = 5$:

$$a_5 = 2 \\cdot 3^{\\,5-1} = 2 \\cdot 3^4 = 2 \\cdot 81 = 162$$

> ✅ **Check:** $2, 6, 18, 54, 162$ — the 5th term is $162$. ✓`,
      },
      {
        id: 'ags3-geo-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the 4th term of the geometric sequence with $a_1 = 5$ and $r = 2$.',
              options: ['$40$', '$20$', '$80$', '$10$'],
              correctAnswer: 0,
              explanation: '$a_4 = 5 \\cdot 2^{4-1} = 5 \\cdot 2^3 = 5 \\cdot 8 = 40$.',
            },
            {
              question: 'Which sequence is geometric with $r = \\frac{1}{2}$?',
              options: ['$48, 24, 12, 6$', '$48, 46, 44, 42$', '$2, 4, 8, 16$', '$48, 24, 16, 12$'],
              correctAnswer: 0,
              explanation: '$48, 24, 12, 6$ multiplies by $\\frac{1}{2}$ each step ($48\\cdot\\frac12 = 24$, etc.). $48,46,44,42$ is arithmetic; $2,4,8,16$ has $r=2$; the last one has a changing ratio.',
            },
          ],
        },
      },
      {
        id: 'ags3-geo-drill',
        type: 'input-boxes' as const,
        content: `**Find the Term** 🧮

Use $a_n = a_1 \\cdot r^{\\,n-1}$.

**1)** $a_1 = 3,\\; r = 2$. Find $a_6 = \\,?$
**2)** $1, 5, 25, 125, \\dots$ Find $a_4 = \\,?$
**3)** $a_1 = 4,\\; r = 3$. Find $a_4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['96', '125', '108'],
          hint1: '(1) $a_6 = 3 \\cdot 2^{5} = 3 \\cdot 32 = 96$.',
          hint2: '(2) $r = 5$, so $a_4 = 1 \\cdot 5^{3} = 125$.',
          hint3: '(3) $a_4 = 4 \\cdot 3^{3} = 4 \\cdot 27 = 108$.',
          explanation: '1) $3\\cdot 2^5 = 96$.  2) $1\\cdot 5^3 = 125$.  3) $4\\cdot 3^3 = 108$. The exponent is $n-1$, and apply the exponent **before** multiplying by $a_1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'arithmetic-geometric-sequences-alg1',
    sections: [
      {
        id: 'ags4-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 4 of 5 — Telling Them Apart & Real-World Models**

---

> 🔑 **The Big Question:** Given a sequence, is it arithmetic, geometric, or neither? Then: how do sequences model real situations like savings, populations, and bouncing balls?`,
      },
      {
        id: 'ags4-compare',
        type: 'text' as const,
        content: `## Arithmetic vs. Geometric

The fastest test: look at how you get from one term to the next.

| | Arithmetic | Geometric |
|---|-----------|-----------|
| **Operation** | add $d$ | multiply by $r$ |
| **Find the rate** | subtract: $a_2 - a_1$ | divide: $a_2 \\div a_1$ |
| **Formula** | $a_n = a_1 + (n-1)d$ | $a_n = a_1 \\cdot r^{\\,n-1}$ |
| **Graph shape** | straight line | curve (exponential) |
| **Example** | $3, 7, 11, 15$ | $3, 6, 12, 24$ |

> 💡 **Quick test:** Compute both the *difference* and the *ratio* of the first two pairs. If the **difference** is constant → arithmetic. If the **ratio** is constant → geometric. If neither is constant → it's neither.`,
      },
      {
        id: 'ags4-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Sequence** 🔽

Decide whether each sequence is arithmetic, geometric, or neither.`,
        exercise: {
          dropdowns: [
            { label: '$4, 12, 36, 108, \\dots$', options: ['geometric', 'arithmetic', 'neither'] },
            { label: '$20, 17, 14, 11, \\dots$', options: ['arithmetic', 'geometric', 'neither'] },
            { label: '$1, 4, 9, 16, 25, \\dots$', options: ['neither', 'arithmetic', 'geometric'] },
            { label: '$100, 50, 25, 12.5, \\dots$', options: ['geometric', 'arithmetic', 'neither'] },
          ],
          correctAnswers: ['geometric', 'arithmetic', 'neither', 'geometric'],
          hint1: 'For each, test the difference and the ratio between the first two terms.',
          hint2: '$4,12,36,108$ multiplies by $3$; $20,17,14,11$ subtracts $3$.',
          hint3: '$1,4,9,16,25$ are perfect squares — the gaps $+3,+5,+7$ change, and the ratios change too, so it is neither. $100,50,25,12.5$ halves each time ($r=\\frac12$).',
          explanation: 'Geometric ($r=3$); arithmetic ($d=-3$); neither (squares — no constant gap or ratio); geometric ($r=\\frac12$).',
        },
      },
      {
        id: 'ags4-models',
        type: 'text' as const,
        content: `## Sequences in the Real World

**Arithmetic models** describe steady, repeated **adding**:

> You save \\$50 in a jar, then add \\$15 every week. Week $n$ has $a_n = 50 + (n-1)(15)$ dollars.

**Geometric models** describe repeated **multiplying** (percent growth/decay):

> A bacteria colony of $200$ **doubles** every hour. After $n$ hours there are $a_n = 200 \\cdot 2^{\\,n}$ cells. *(Here we use the exponent $n$ because "after 1 hour" already means one doubling.)*

> ⚠️ **Watch the starting point.** "Doubles every hour starting at 200" can be written as a sequence $200, 400, 800, \\dots$ where $a_1 = 200, r = 2$, giving $a_n = 200\\cdot 2^{n-1}$ for the $n$th term in the list. Read carefully whether $n$ counts *terms* or *hours*.`,
      },
      {
        id: 'ags4-app-mc',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A theater has 18 seats in row 1, 22 in row 2, 26 in row 3, and so on. How many seats are in row 8?',
              options: ['$46$', '$50$', '$42$', '$44$'],
              correctAnswer: 0,
              explanation: 'Arithmetic with $a_1 = 18$, $d = 4$. $a_8 = 18 + (8-1)(4) = 18 + 28 = 46$ seats.',
            },
            {
              question: 'A ball is dropped and each bounce reaches 80% of the previous height. If the first bounce is 200 cm, the heights form a sequence with common ratio:',
              options: ['$r = 0.8$', '$r = 80$', '$d = -40$', '$r = 1.2$'],
              correctAnswer: 0,
              explanation: 'Reaching 80% means multiplying by $0.8$ each time, so it is geometric with $r = 0.8$ (the heights shrink).',
            },
          ],
        },
      },
      {
        id: 'ags4-model-drill',
        type: 'input-boxes' as const,
        content: `**Model It** 🧮

**1)** You start with \\$50 and add \\$15 each week: $a_n = 50 + (n-1)(15)$. How many dollars after **week 6** ($a_6$)? $\\,?$
**2)** A colony starts at $200$ and **doubles** each hour: the list is $200, 400, 800, \\dots$ with $a_n = 200\\cdot 2^{\\,n-1}$. How many cells is the **4th** term ($a_4$)? $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['125', '1600'],
          hint1: '(1) $a_6 = 50 + (6-1)(15) = 50 + 75 = 125$ dollars.',
          hint2: '(2) $a_4 = 200 \\cdot 2^{4-1} = 200 \\cdot 2^3 = 200 \\cdot 8 = 1600$ cells.',
          hint3: 'Arithmetic adds (use $(n-1)d$); geometric multiplies (use $r^{n-1}$).',
          explanation: '1) $50 + 5(15) = 125$.  2) $200 \\cdot 2^3 = 1600$. Steady adding → arithmetic; repeated doubling → geometric.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'arithmetic-geometric-sequences-alg1',
    sections: [
      {
        id: 'ags5-intro',
        type: 'text' as const,
        content: `# 🔢 Arithmetic & Geometric Sequences

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) find $d$ and $r$, (2) use both explicit formulas, (3) tell the two types apart, and (4) model real situations. Let's put it all together.`,
      },
      {
        id: 'ags5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Arithmetic | Geometric |
|------|-----------|-----------|
| Get the next term | $+\\,d$ | $\\times\\, r$ |
| Find the rate | $d = a_2 - a_1$ | $r = a_2 \\div a_1$ |
| $n$th term | $a_n = a_1 + (n-1)d$ | $a_n = a_1 \\cdot r^{\\,n-1}$ |
| Behaviour | constant difference (line) | constant ratio (curve) |

> ⚠️ **Top traps:** use $(n-1)$, **not** $n$, in both formulas; **subtract** for $d$ but **divide** for $r$; and for geometric terms, apply the exponent *before* multiplying by $a_1$.`,
      },
      {
        id: 'ags5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Pull the right tool for each problem.`,
        exercise: {
          dropdowns: [
            { label: 'Type of $2, 6, 18, 54, \\dots$', options: ['geometric', 'arithmetic', 'neither'] },
            { label: 'Its rate is', options: ['$r = 3$', '$d = 4$', '$r = 4$', '$d = 3$'] },
            { label: '$a_4$ of that sequence', options: ['$54$', '$48$', '$162$', '$24$'] },
          ],
          correctAnswers: ['geometric', '$r = 3$', '$54$'],
          hint1: '$6 \\div 2 = 3$ and $18 \\div 6 = 3$ — the ratio is constant, so it is geometric.',
          hint2: 'The common ratio is $r = 3$.',
          hint3: '$a_4 = 2 \\cdot 3^{4-1} = 2 \\cdot 27 = 54$ (you can also just read it off the list).',
          explanation: 'Geometric with $r=3$; the 4th term is $2\\cdot 3^3 = 54$.',
        },
      },
      {
        id: 'ags5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Arithmetic: $a_1 = 9,\\; d = 6$. Find $a_7 = \\,?$
**2)** Geometric: $a_1 = 2,\\; r = 5$. Find $a_4 = \\,?$
**3)** Arithmetic sequence $11, 8, 5, 2, \\dots$ Find $a_9 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['45', '250', '-13'],
          hint1: '(1) $a_7 = 9 + (7-1)(6) = 9 + 36 = 45$.',
          hint2: '(2) $a_4 = 2 \\cdot 5^{4-1} = 2 \\cdot 125 = 250$.',
          hint3: '(3) $d = -3$, so $a_9 = 11 + (9-1)(-3) = 11 - 24 = -13$.',
          explanation: '1) $9 + 6(6) = 45$.  2) $2 \\cdot 5^3 = 250$.  3) $11 + 8(-3) = -13$.',
        },
      },
      {
        id: 'ags5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An arithmetic sequence has $a_1 = 4$ and $a_6 = 29$. Find the common difference $d$.',
              options: ['$5$', '$25$', '$6$', '$4$'],
              correctAnswer: 0,
              explanation: 'From $a_1$ to $a_6$ is $5$ steps and the change is $29 - 4 = 25$, so $d = 25 \\div 5 = 5$.',
            },
            {
              question: 'Which formula gives the geometric sequence $6, 12, 24, 48, \\dots$?',
              options: ['$a_n = 6 \\cdot 2^{\\,n-1}$', '$a_n = 6 + 2(n-1)$', '$a_n = 6 \\cdot 2^{\\,n}$', '$a_n = 2 \\cdot 6^{\\,n-1}$'],
              correctAnswer: 0,
              explanation: '$a_1 = 6$ and $r = 2$, so $a_n = 6 \\cdot 2^{\\,n-1}$. Check: $a_1 = 6\\cdot 2^0 = 6$ ✓ and $a_3 = 6\\cdot 2^2 = 24$ ✓.',
            },
          ],
        },
      },
      {
        id: 'ags5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the common difference of $7, 3, -1, -5, \\dots$?',
              options: ['$-4$', '$4$', '$-3$', '$-1$'],
              correctAnswer: 0,
              explanation: '$d = a_2 - a_1 = 3 - 7 = -4$. Each term is $4$ less than the one before.',
            },
            {
              question: 'Find the 5th term of the geometric sequence with $a_1 = 3$ and $r = 2$.',
              options: ['$48$', '$30$', '$96$', '$24$'],
              correctAnswer: 0,
              explanation: '$a_5 = 3 \\cdot 2^{5-1} = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.',
            },
            {
              question: 'Which sequence is arithmetic?',
              options: ['$2, 5, 8, 11, \\dots$', '$2, 6, 18, 54, \\dots$', '$1, 1, 2, 3, 5, \\dots$', '$3, 9, 27, 81, \\dots$'],
              correctAnswer: 0,
              explanation: '$2, 5, 8, 11$ adds a constant $+3$ each step, so it is arithmetic ($d=3$). The others multiply or (Fibonacci) follow a different rule.',
            },
          ],
        },
      },
    ],
  },
]
