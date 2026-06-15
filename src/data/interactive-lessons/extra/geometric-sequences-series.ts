import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Geometric Sequences and Series (Algebra 2).
 * Registry key: 'geometric-sequences-series' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-series',
    sections: [
      {
        id: 'gss1-intro',
        type: 'text' as const,
        content: `# 🔢 Geometric Sequences & Series

**Part 1 of 5 — The Common Ratio**

---

### Topics in This Part

| Section |
|---------|
| What Is a Geometric Sequence? |
| Finding the Common Ratio |
| Geometric vs. Arithmetic |

> 🔑 **Key Concept:** A **geometric sequence** multiplies by the same number each step. That number — the **common ratio** $r$ — is the heartbeat of everything in this lesson.`,
      },
      {
        id: 'gss1-define',
        type: 'text' as const,
        content: `## What Is a Geometric Sequence?

In a **geometric sequence**, you get each term by **multiplying** the previous term by a fixed number called the **common ratio**, written $r$.

$$2,\\; 6,\\; 18,\\; 54,\\; 162,\\; \\dots \\qquad (r = 3)$$

Each term is $3$ times the one before it.

### How to spot the ratio

To find $r$, **divide any term by the term before it**:

$$r = \\frac{a_2}{a_1} = \\frac{a_3}{a_2} = \\dots$$

| Sequence | Ratio test | $r$ |
|----------|-----------|-----|
| $5,\\,10,\\,20,\\,40$ | $10/5 = 2$ | $2$ |
| $81,\\,27,\\,9,\\,3$ | $27/81 = \\tfrac{1}{3}$ | $\\tfrac{1}{3}$ |
| $4,\\,-8,\\,16,\\,-32$ | $-8/4 = -2$ | $-2$ |

> 🔑 **Key Idea:** If the ratio between *every* consecutive pair is the **same**, the sequence is geometric. If it's not constant, it isn't.`,
      },
      {
        id: 'gss1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sequence is geometric?',
              options: ['$3,\\,6,\\,9,\\,12$', '$3,\\,6,\\,12,\\,24$', '$3,\\,6,\\,10,\\,15$', '$3,\\,5,\\,8,\\,12$'],
              correctAnswer: 1,
              explanation: 'In $3,6,12,24$ each term is multiplied by $2$: $6/3=2$, $12/6=2$, $24/12=2$. The first sequence *adds* $3$ each time (arithmetic, not geometric); the others have no constant ratio.',
            },
            {
              question: 'What is the common ratio of $80,\\,40,\\,20,\\,10$?',
              options: ['$2$', '$-40$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
              correctAnswer: 2,
              explanation: 'Divide a term by the one before it: $40/80 = \\frac{1}{2}$. The terms are shrinking, so $0 < r < 1$.',
            },
          ],
        },
      },
      {
        id: 'gss1-ratio-note',
        type: 'text' as const,
        content: `## Pinning Down $r$ Exactly

When the ratio isn't obvious, just divide. The result can be a whole number, a fraction, or negative:

$$r = \\frac{\\text{any term}}{\\text{the term right before it}}$$

A quick sanity check: pick a *different* pair of consecutive terms and divide again. If you get the **same** $r$, you've found it. If not, the sequence isn't geometric.`,
      },
      {
        id: 'gss1-find-r-drill',
        type: 'input-boxes' as const,
        content: `**Find the Common Ratio** 🧮

Compute $r$ for each geometric sequence. *(Fractions like \`1/3\` are fine.)*

**1)** $2,\\,10,\\,50,\\,250,\\dots \\quad r = \\,?$
**2)** $48,\\,24,\\,12,\\,6,\\dots \\quad r = \\,?$
**3)** $1,\\,-3,\\,9,\\,-27,\\dots \\quad r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '1/2', '-3'],
          hint1: 'Divide the second term by the first: $10 \\div 2 = 5$.',
          hint2: '$24 \\div 48 = \\frac{1}{2}$. The terms are getting smaller.',
          hint3: '$-3 \\div 1 = -3$. A negative ratio makes the signs alternate.',
          explanation: '1) $r = 10/2 = 5$.  2) $r = 24/48 = \\tfrac{1}{2}$.  3) $r = -3/1 = -3$ (alternating signs).',
        },
      },
      {
        id: 'gss1-vs-arithmetic',
        type: 'text' as const,
        content: `## Geometric vs. Arithmetic

Don't confuse the two big sequence types:

| | Arithmetic | Geometric |
|---|-----------|-----------|
| Step rule | **add** common difference $d$ | **multiply** by common ratio $r$ |
| Example | $4,\\,7,\\,10,\\,13$ ($d=3$) | $4,\\,12,\\,36,\\,108$ ($r=3$) |
| Growth | linear (straight line) | exponential (curves fast) |

> 💡 **Quick test:** *Subtract* consecutive terms — constant? Arithmetic. *Divide* consecutive terms — constant? Geometric.

> ⚠️ A sequence like $2,\\,4,\\,6,\\,10$ is **neither**: differences aren't constant ($2,2,4$) and ratios aren't constant ($2,1.5,1.67$).`,
      },
      {
        id: 'gss1-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Sequence** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$7,\\,14,\\,28,\\,56,\\dots$', options: ['Geometric', 'Arithmetic', 'Neither'] },
            { label: '$20,\\,17,\\,14,\\,11,\\dots$', options: ['Geometric', 'Arithmetic', 'Neither'] },
            { label: '$1,\\,4,\\,9,\\,16,\\dots$', options: ['Geometric', 'Arithmetic', 'Neither'] },
          ],
          correctAnswers: ['Geometric', 'Arithmetic', 'Neither'],
          hint1: 'For the first, test the ratio: $14/7 = 2$, $28/14 = 2$ — constant ratio.',
          hint2: 'For the second, test the difference: $17-20 = -3$, $14-17=-3$ — constant difference.',
          hint3: 'For $1,4,9,16$ (perfect squares): differences are $3,5,7$ (not constant) and ratios are $4, 2.25, \\dots$ (not constant).',
          explanation: '$7,14,28,56$ multiplies by $2$ → geometric. $20,17,14,11$ subtracts $3$ → arithmetic. $1,4,9,16$ has neither a constant ratio nor a constant difference → neither.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-series',
    sections: [
      {
        id: 'gss2-intro',
        type: 'text' as const,
        content: `# 🔢 Geometric Sequences & Series

**Part 2 of 5 — The nth-Term Formula**

---

> 🔑 **The Goal:** Instead of multiplying term by term forever, we want a formula that jumps straight to *any* term — the 10th, the 50th, the 100th — using just $a_1$ and $r$.`,
      },
      {
        id: 'gss2-explicit',
        type: 'text' as const,
        content: `## The Explicit Formula

The $n$th term of a geometric sequence is:

$$a_n = a_1 \\cdot r^{\\,n-1}$$

where $a_1$ is the **first term** and $r$ is the **common ratio**.

**Why $n-1$?** To reach the first term you multiply by $r$ zero times, to reach the second term you multiply once, and so on — always **one fewer** multiplication than the term number.

### Worked Example: $3,\\,6,\\,12,\\,24,\\dots$ — find $a_7$

Here $a_1 = 3$ and $r = 2$:

$$a_7 = 3 \\cdot 2^{\\,7-1} = 3 \\cdot 2^{6} = 3 \\cdot 64 = 192$$

> ✅ **Check:** $3, 6, 12, 24, 48, 96, \\mathbf{192}$ — the 7th term is indeed $192$.`,
      },
      {
        id: 'gss2-worked2',
        type: 'text' as const,
        content: `### Worked Example: a shrinking sequence

Find the 5th term of $80,\\,40,\\,20,\\dots$

Here $a_1 = 80$ and $r = \\frac{1}{2}$:

$$a_5 = 80 \\cdot \\left(\\tfrac{1}{2}\\right)^{5-1} = 80 \\cdot \\left(\\tfrac{1}{2}\\right)^{4} = 80 \\cdot \\tfrac{1}{16} = 5$$

### Worked Example: alternating signs

Find $a_4$ of $2,\\,-6,\\,18,\\dots$

Here $a_1 = 2$ and $r = -3$:

$$a_4 = 2 \\cdot (-3)^{4-1} = 2 \\cdot (-3)^{3} = 2 \\cdot (-27) = -54$$

> ⚠️ **Watch the parentheses:** wrap a negative ratio in parentheses. For an **even** power the difference is real: $(-3)^2 = 9$ (positive), but $-3^2 = -(3^2) = -9$. Always write $(-3)^{n-1}$ so the sign comes out right.`,
      },
      {
        id: 'gss2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the sequence $5,\\,15,\\,45,\\dots$, which formula gives the $n$th term?',
              options: ['$a_n = 5 \\cdot 3^{\\,n-1}$', '$a_n = 5 \\cdot 3^{\\,n}$', '$a_n = 3 \\cdot 5^{\\,n-1}$', '$a_n = 5 + 3(n-1)$'],
              correctAnswer: 0,
              explanation: 'First term $a_1 = 5$, ratio $r = 15/5 = 3$. The explicit formula is $a_n = a_1 r^{n-1} = 5 \\cdot 3^{n-1}$. The last option is the *arithmetic* formula — wrong type.',
            },
            {
              question: 'Find the 6th term of $1,\\,2,\\,4,\\,8,\\dots$',
              options: ['$32$', '$64$', '$12$', '$16$'],
              correctAnswer: 0,
              explanation: '$a_1 = 1$, $r = 2$, so $a_6 = 1 \\cdot 2^{6-1} = 2^5 = 32$. (Listing it out: $1,2,4,8,16,\\mathbf{32}$.)',
            },
          ],
        },
      },
      {
        id: 'gss2-recursive',
        type: 'text' as const,
        content: `## Recursive vs. Explicit

There are two valid ways to *define* a geometric sequence:

| Form | Rule | Says… |
|------|------|-------|
| **Recursive** | $a_1 = \\text{(given)},\\quad a_n = r \\cdot a_{n-1}$ | "multiply the **previous** term by $r$" |
| **Explicit** | $a_n = a_1 \\cdot r^{\\,n-1}$ | "jump **straight** to term $n$" |

**Example** for $3,\\,6,\\,12,\\dots$:
- Recursive: $a_1 = 3,\\;\\; a_n = 2 \\cdot a_{n-1}$
- Explicit: $a_n = 3 \\cdot 2^{\\,n-1}$

> 💡 Use **recursive** when you only need the next term; use **explicit** when you need a *far-off* term like $a_{20}$ without listing all the others.`,
      },
      {
        id: 'gss2-form-dropdown',
        type: 'dropdown-select' as const,
        content: `**Recursive or Explicit?** 🔽

The sequence $4,\\,12,\\,36,\\,108,\\dots$ has $a_1 = 4$ and $r = 3$.`,
        exercise: {
          dropdowns: [
            { label: 'Its **explicit** formula:', options: ['$a_n = 4 \\cdot 3^{\\,n-1}$', '$a_n = 3 \\cdot 4^{\\,n-1}$', '$a_n = 4 + 3(n-1)$', '$a_n = 4 \\cdot 3^{\\,n}$'] },
            { label: 'Its **recursive** rule:', options: ['$a_n = 3 \\cdot a_{n-1}$', '$a_n = a_{n-1} + 3$', '$a_n = 4 \\cdot a_{n-1}$', '$a_n = 3 \\cdot a_{n}$'] },
            { label: 'Best tool to find $a_{15}$ fast:', options: ['Explicit', 'Recursive'] },
          ],
          correctAnswers: ['$a_n = 4 \\cdot 3^{\\,n-1}$', '$a_n = 3 \\cdot a_{n-1}$', 'Explicit'],
          hint1: 'Explicit form is $a_1 \\cdot r^{n-1}$ with $a_1 = 4$ and $r = 3$.',
          hint2: 'Recursive form multiplies the *previous* term by $r = 3$: $a_n = 3 \\cdot a_{n-1}$.',
          hint3: 'For a far-off term like $a_{15}$, the explicit formula jumps straight there without listing every term.',
          explanation: 'Explicit: $a_n = 4 \\cdot 3^{n-1}$. Recursive: $a_1 = 4,\\; a_n = 3 a_{n-1}$. The explicit formula is best for distant terms like $a_{15}$.',
        },
      },
      {
        id: 'gss2-nth-note',
        type: 'text' as const,
        content: `## A Reliable Routine

For *any* "find the $n$th term" problem, run the same three steps:

1. **Identify $a_1$** — the first term.
2. **Find $r$** — divide the second term by the first.
3. **Plug into** $a_n = a_1 \\cdot r^{\\,n-1}$ and simplify the power carefully.

The only place students slip is the exponent: it's $n-1$, *one less* than the term number. Keep that front of mind as you try the next set.`,
      },
      {
        id: 'gss2-nth-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Term** 🧮

Use $a_n = a_1 \\cdot r^{\\,n-1}$.

**1)** $2,\\,6,\\,18,\\dots$  Find $a_5$. $\\;=\\,?$
**2)** $a_1 = 7,\\; r = 2$.  Find $a_4$. $\\;=\\,?$
**3)** $a_1 = 100,\\; r = \\tfrac{1}{5}$.  Find $a_3$. $\\;=\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['162', '56', '4'],
          hint1: '$a_5 = 2 \\cdot 3^{5-1} = 2 \\cdot 3^4 = 2 \\cdot 81$.',
          hint2: '$a_4 = 7 \\cdot 2^{4-1} = 7 \\cdot 2^3 = 7 \\cdot 8$.',
          hint3: '$a_3 = 100 \\cdot \\left(\\tfrac{1}{5}\\right)^{3-1} = 100 \\cdot \\tfrac{1}{25}$.',
          explanation: '1) $2 \\cdot 81 = 162$.  2) $7 \\cdot 8 = 56$.  3) $100 \\cdot \\tfrac{1}{25} = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-series',
    sections: [
      {
        id: 'gss3-intro',
        type: 'text' as const,
        content: `# 🔢 Geometric Sequences & Series

**Part 3 of 5 — Finite Geometric Series**

---

> 🔑 **From sequence to series:** A **series** is what you get when you **add up** the terms of a sequence. Adding $3+6+12+24$ by hand is fine, but adding the first $20$ terms? You need a formula.`,
      },
      {
        id: 'gss3-sum-formula',
        type: 'text' as const,
        content: `## The Finite Sum Formula

The sum of the first $n$ terms of a geometric sequence is:

$$S_n = a_1 \\cdot \\frac{1 - r^{\\,n}}{1 - r} \\qquad (r \\ne 1)$$

You only need three things: the **first term** $a_1$, the **ratio** $r$, and **how many terms** $n$.

### Worked Example: sum the first 5 terms of $2,\\,6,\\,18,\\dots$

Here $a_1 = 2$, $r = 3$, $n = 5$:

$$S_5 = 2 \\cdot \\frac{1 - 3^{5}}{1 - 3} = 2 \\cdot \\frac{1 - 243}{-2} = 2 \\cdot \\frac{-242}{-2} = 2 \\cdot 121 = 242$$

> ✅ **Check by hand:** $2 + 6 + 18 + 54 + 162 = 242$ ✓`,
      },
      {
        id: 'gss3-worked2',
        type: 'text' as const,
        content: `### Worked Example: a fractional ratio

Sum the first 4 terms of $16,\\,8,\\,4,\\,2,\\dots$

Here $a_1 = 16$, $r = \\frac{1}{2}$, $n = 4$:

$$S_4 = 16 \\cdot \\frac{1 - \\left(\\frac{1}{2}\\right)^{4}}{1 - \\frac{1}{2}} = 16 \\cdot \\frac{1 - \\frac{1}{16}}{\\frac{1}{2}} = 16 \\cdot \\frac{\\frac{15}{16}}{\\frac{1}{2}} = 16 \\cdot \\frac{15}{16} \\cdot 2 = 30$$

> ✅ **Check by hand:** $16 + 8 + 4 + 2 = 30$ ✓

> ⚠️ **Common mistake:** the exponent on $r$ is $n$ (the number of terms), **not** $n-1$. The $n-1$ exponent belongs to the *term* formula, not the *sum* formula.`,
      },
      {
        id: 'gss3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which formula correctly gives the sum of the first $n$ terms of a geometric series?',
              options: ['$S_n = a_1 \\dfrac{1 - r^{\\,n}}{1 - r}$', '$S_n = a_1 \\dfrac{1 - r^{\\,n-1}}{1 - r}$', '$S_n = a_1 \\dfrac{1 - r}{1 - r^{\\,n}}$', '$S_n = a_1 \\cdot r^{\\,n-1}$'],
              correctAnswer: 0,
              explanation: 'The finite geometric sum is $S_n = a_1 \\frac{1-r^n}{1-r}$. The last option is the *term* formula, not a sum.',
            },
            {
              question: 'Find $S_3$ for $4,\\,12,\\,36,\\dots$',
              options: ['$52$', '$48$', '$156$', '$40$'],
              correctAnswer: 0,
              explanation: '$a_1=4$, $r=3$: $S_3 = 4 \\cdot \\frac{1-3^3}{1-3} = 4 \\cdot \\frac{1-27}{-2} = 4 \\cdot \\frac{-26}{-2} = 4 \\cdot 13 = 52$. Check: $4+12+36 = 52$. ✓',
            },
          ],
        },
      },
      {
        id: 'gss3-sigma',
        type: 'text' as const,
        content: `## Sigma (Summation) Notation

Series are often written compactly with **sigma notation** $\\Sigma$:

$$\\sum_{k=1}^{n} a_1 \\, r^{\\,k-1}$$

This means: "add up $a_1 r^{k-1}$ as $k$ runs from $1$ to $n$."

### Example: unpack $\\displaystyle\\sum_{k=1}^{4} 3 \\cdot 2^{\\,k-1}$

| $k$ | $3 \\cdot 2^{k-1}$ | value |
|-----|-------------------|-------|
| $1$ | $3 \\cdot 2^{0}$ | $3$ |
| $2$ | $3 \\cdot 2^{1}$ | $6$ |
| $3$ | $3 \\cdot 2^{2}$ | $12$ |
| $4$ | $3 \\cdot 2^{3}$ | $24$ |

So the sum is $3 + 6 + 12 + 24 = 45$. Reading off $a_1 = 3$, $r = 2$, $n = 4$, the formula agrees: $S_4 = 3 \\cdot \\frac{1-2^4}{1-2} = 3 \\cdot \\frac{-15}{-1} = 45$. ✓`,
      },
      {
        id: 'gss3-sigma-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Sigma Notation** 🔽

For the series $\\displaystyle\\sum_{k=1}^{5} 6 \\cdot 4^{\\,k-1}$, identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'First term $a_1$:', options: ['$6$', '$4$', '$5$', '$24$'] },
            { label: 'Common ratio $r$:', options: ['$4$', '$6$', '$5$', '$\\frac{1}{4}$'] },
            { label: 'Number of terms $n$:', options: ['$5$', '$6$', '$4$', '$1$'] },
          ],
          correctAnswers: ['$6$', '$4$', '$5$'],
          hint1: 'The constant multiplied out front, $6$, is the first term $a_1$.',
          hint2: 'The base of the power, $4$, is the common ratio $r$.',
          hint3: 'The top of the sigma, $5$, tells you the upper limit — so there are $n = 5$ terms (from $k=1$ to $k=5$).',
          explanation: 'Matching $\\sum_{k=1}^{n} a_1 r^{k-1}$: $a_1 = 6$, $r = 4$, and $n = 5$ (the upper limit).',
        },
      },
      {
        id: 'gss3-sum-note',
        type: 'text' as const,
        content: `## Two Routes to the Same Answer

For a **short** sum (3–5 terms), you can simply list the terms and add — and it's a great way to *check* the formula.

For a **long** sum (say, 20 terms), the formula is the only practical choice:

$$S_n = a_1 \\cdot \\frac{1 - r^{\\,n}}{1 - r}$$

In the drill below, use the formula on at least one problem and confirm it matches the by-hand total. Remember: the exponent is $n$ (the **count of terms**), not $n-1$.`,
      },
      {
        id: 'gss3-sum-drill',
        type: 'input-boxes' as const,
        content: `**Sum It Up** 🧮

Use $S_n = a_1 \\dfrac{1 - r^{\\,n}}{1 - r}$.

**1)** $5,\\,10,\\,20,\\dots$  Find $S_4$. $\\;=\\,?$
**2)** $\\displaystyle\\sum_{k=1}^{3} 2 \\cdot 5^{\\,k-1} \\;=\\,?$
**3)** $1,\\,3,\\,9,\\,27,\\,81,\\dots$  Find $S_5$. $\\;=\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '62', '121'],
          hint1: '$a_1=5,\\,r=2,\\,n=4$: $5 \\cdot \\frac{1-2^4}{1-2} = 5 \\cdot \\frac{-15}{-1} = 5 \\cdot 15$. Or just add $5+10+20+40$.',
          hint2: 'Terms are $2, 10, 50$ (since $a_1=2,r=5$): $2 + 10 + 50 = 62$.',
          hint3: '$a_1=1, r=3, n=5$: $1 \\cdot \\frac{1-3^5}{1-3} = \\frac{1-243}{-2} = \\frac{-242}{-2} = 121$. Or add $1+3+9+27+81$.',
          explanation: '1) $5+10+20+40 = 75$.  2) $2+10+50 = 62$.  3) $1+3+9+27+81 = 121$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-series',
    sections: [
      {
        id: 'gss4-intro',
        type: 'text' as const,
        content: `# 🔢 Geometric Sequences & Series

**Part 4 of 5 — Infinite Geometric Series**

---

> 🔑 **The surprising idea:** You can add **infinitely many** numbers and still get a **finite** total — *but only when the terms shrink fast enough*, meaning $|r| < 1$.`,
      },
      {
        id: 'gss4-converge',
        type: 'text' as const,
        content: `## When Does an Infinite Series Have a Sum?

An infinite geometric series $a_1 + a_1 r + a_1 r^2 + \\dots$ either **converges** (adds to a finite number) or **diverges** (grows without bound).

| Condition | Behavior |
|-----------|----------|
| $\\lvert r \\rvert < 1$ | **Converges** — terms shrink to $0$; the sum is finite |
| $\\lvert r \\rvert \\ge 1$ | **Diverges** — terms don't shrink; no finite sum |

When $|r| < 1$, the sum is:

$$S_{\\infty} = \\frac{a_1}{1 - r}$$

> 💡 **Intuition:** Think of $\\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{1}{8} + \\dots$ Each piece is half of what's left, so you creep ever closer to **$1$** but never overshoot it. Here $a_1 = \\tfrac12$, $r = \\tfrac12$, and $S_\\infty = \\frac{1/2}{1 - 1/2} = 1$.`,
      },
      {
        id: 'gss4-converge-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which infinite geometric series converges (has a finite sum)?',
              options: ['$r = 3$', '$r = -2$', '$r = \\frac{2}{3}$', '$r = 1$'],
              correctAnswer: 2,
              explanation: 'A series converges exactly when $|r| < 1$. Only $r = \\frac{2}{3}$ satisfies $|r| < 1$. With $r=3$ or $r=-2$ the terms grow; with $r=1$ they never shrink.',
            },
            {
              question: 'Why does $5 + 10 + 20 + 40 + \\dots$ have no finite sum?',
              options: ['Because $r = 2$, so $|r| \\ge 1$ and the terms keep growing', 'Because $a_1 = 5$ is too large', 'Because it has infinitely many terms', 'Because $r$ is positive'],
              correctAnswer: 0,
              explanation: 'The ratio is $r = 2$, and since $|r| = 2 \\ge 1$ the terms grow without bound, so the series diverges. Having infinitely many terms is fine — what matters is whether $|r| < 1$.',
            },
          ],
        },
      },
      {
        id: 'gss4-worked',
        type: 'text' as const,
        content: `## Worked Examples — Sum to Infinity

### Example 1: $8 + 4 + 2 + 1 + \\dots$

Here $a_1 = 8$ and $r = \\frac{1}{2}$ (and $|r| < 1$ ✓):

$$S_{\\infty} = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16$$

### Example 2: $9 - 3 + 1 - \\frac{1}{3} + \\dots$

Here $a_1 = 9$ and $r = -\\frac{1}{3}$ (and $|r| < 1$ ✓):

$$S_{\\infty} = \\frac{9}{1 - \\left(-\\frac{1}{3}\\right)} = \\frac{9}{1 + \\frac{1}{3}} = \\frac{9}{\\frac{4}{3}} = 9 \\cdot \\frac{3}{4} = \\frac{27}{4} = 6.75$$

> ⚠️ Watch the sign! With $r = -\\frac13$, the denominator becomes $1 - (-\\frac13) = 1 + \\frac13$. Subtracting a negative **adds**.`,
      },
      {
        id: 'gss4-inf-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Sum** 🔽

You're finding $S_\\infty$ for $12 + 4 + \\frac{4}{3} + \\dots$`,
        exercise: {
          dropdowns: [
            { label: 'Common ratio $r$:', options: ['$\\frac{1}{3}$', '$3$', '$-\\frac{1}{3}$', '$4$'] },
            { label: 'Does it converge?', options: ['Yes, $|r| < 1$', 'No, $|r| \\ge 1$'] },
            { label: 'The sum $S_\\infty$:', options: ['$18$', '$36$', '$16$', '$12$'] },
          ],
          correctAnswers: ['$\\frac{1}{3}$', 'Yes, $|r| < 1$', '$18$'],
          hint1: 'Divide a term by the one before it: $4 \\div 12 = \\frac{1}{3}$.',
          hint2: 'Since $\\left|\\frac{1}{3}\\right| < 1$, the series converges.',
          hint3: '$S_\\infty = \\frac{a_1}{1-r} = \\frac{12}{1 - \\frac{1}{3}} = \\frac{12}{\\frac{2}{3}} = 12 \\cdot \\frac{3}{2} = 18$.',
          explanation: '$r = 4/12 = \\frac13$, which is $<1$ in absolute value, so it converges to $S_\\infty = \\frac{12}{1-\\frac13} = \\frac{12}{2/3} = 18$.',
        },
      },
      {
        id: 'gss4-inf-note',
        type: 'text' as const,
        content: `## Before You Compute, Check Convergence

The infinite-sum formula $S_\\infty = \\dfrac{a_1}{1-r}$ is **only valid when $|r| < 1$**. So make convergence your *first* move on every problem:

1. Find $r$.
2. If $|r| \\ge 1$ → the series **diverges**; there is no finite sum.
3. If $|r| < 1$ → plug into $\\dfrac{a_1}{1-r}$.

> ⚠️ Skipping step 2 is the classic error — applying the formula to a divergent series gives a nonsense answer.`,
      },
      {
        id: 'gss4-inf-drill',
        type: 'input-boxes' as const,
        content: `**Sum to Infinity** 🧮

Use $S_\\infty = \\dfrac{a_1}{1 - r}$ (only valid when $|r| < 1$).

**1)** $20 + 10 + 5 + \\dots \\;\\; S_\\infty = \\,?$
**2)** $a_1 = 6,\\; r = \\tfrac{1}{3}.\\;\\; S_\\infty = \\,?$
**3)** $a_1 = 10,\\; r = -\\tfrac{1}{2}.\\;\\; S_\\infty = \\,?$  *(fraction or decimal ok)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', '9', '20/3'],
          hint1: '$r = 10/20 = \\frac12$: $S_\\infty = \\frac{20}{1 - \\frac12} = \\frac{20}{1/2} = 40$.',
          hint2: '$S_\\infty = \\frac{6}{1 - \\frac13} = \\frac{6}{2/3} = 6 \\cdot \\frac32 = 9$.',
          hint3: '$S_\\infty = \\frac{10}{1 - (-\\frac12)} = \\frac{10}{3/2} = 10 \\cdot \\frac23 = \\frac{20}{3} \\approx 6.67$.',
          explanation: '1) $\\frac{20}{1/2} = 40$.  2) $\\frac{6}{2/3} = 9$.  3) $\\frac{10}{3/2} = \\frac{20}{3} \\approx 6.67$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-series',
    sections: [
      {
        id: 'gss5-intro',
        type: 'text' as const,
        content: `# 🔢 Geometric Sequences & Series

**Part 5 of 5 — Applications & Mastery Check**

---

You can now (1) find a common ratio, (2) compute any term, (3) sum a finite series, and (4) sum a convergent infinite series. Let's apply it to the real world, then prove your mastery.`,
      },
      {
        id: 'gss5-applications',
        type: 'text' as const,
        content: `## Real-World Geometric Models

Geometric sequences and series model anything that **grows or decays by a fixed percent**.

### Compound situations as a ratio

A quantity changing by $p\\%$ each period multiplies by a ratio $r$:
- **Growth** of $p\\%$: $r = 1 + \\dfrac{p}{100}$  (e.g. $+5\\% \\Rightarrow r = 1.05$)
- **Decay** of $p\\%$: $r = 1 - \\dfrac{p}{100}$  (e.g. $-20\\% \\Rightarrow r = 0.80$)

### Worked Example: bouncing ball

A ball dropped from $24$ ft rebounds to $\\frac{1}{2}$ its height each bounce. The rebound heights $12, 6, 3, \\dots$ form a geometric sequence with $a_1 = 12$, $r = \\frac12$. The **total rebound distance** is the infinite sum:

$$S_\\infty = \\frac{12}{1 - \\frac12} = 24 \\text{ ft}$$

> 💡 Decay problems ($|r|<1$) are exactly the ones whose infinite series **converge** — perfect for "total distance" or "total amount forever" questions.`,
      },
      {
        id: 'gss5-app-quiz',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A culture of $200$ bacteria doubles every hour. How many are there after $4$ hours (i.e. the 5th term, counting the start as term 1)?',
              options: ['$3200$', '$1600$', '$800$', '$6400$'],
              correctAnswer: 0,
              explanation: 'Start $a_1 = 200$, $r = 2$. After 4 hours is the 5th term: $a_5 = 200 \\cdot 2^{5-1} = 200 \\cdot 16 = 3200$. (Hours: $200,400,800,1600,\\mathbf{3200}$.)',
            },
            {
              question: 'A car worth \\$20,000 loses $10\\%$ of its value each year. What ratio $r$ models its value?',
              options: ['$0.90$', '$1.10$', '$0.10$', '$-0.10$'],
              correctAnswer: 0,
              explanation: 'Losing $10\\%$ means keeping $90\\%$, so $r = 1 - 0.10 = 0.90$. Each year the value is multiplied by $0.90$.',
            },
          ],
        },
      },
      {
        id: 'gss5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula |
|------|---------|
| Common ratio | $r = \\dfrac{a_{n}}{a_{n-1}}$ |
| $n$th term | $a_n = a_1 \\cdot r^{\\,n-1}$ |
| Finite sum | $S_n = a_1 \\dfrac{1 - r^{\\,n}}{1 - r}$ |
| Infinite sum ($\\lvert r\\rvert<1$) | $S_\\infty = \\dfrac{a_1}{1 - r}$ |

> ⚠️ **Remember the traps:** the term formula uses $r^{n-1}$ but the *sum* formula uses $r^{n}$; an infinite series only converges when $\\lvert r\\rvert < 1$; and subtracting a **negative** ratio in the denominator **adds**.`,
      },
      {
        id: 'gss5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

Match each question to the formula you'd use.`,
        exercise: {
          dropdowns: [
            { label: '"Find the 12th term"', options: ['$a_n = a_1 r^{\\,n-1}$', '$S_n = a_1\\frac{1-r^n}{1-r}$', '$S_\\infty = \\frac{a_1}{1-r}$'] },
            { label: '"Add the first 8 terms"', options: ['$S_n = a_1\\frac{1-r^n}{1-r}$', '$a_n = a_1 r^{\\,n-1}$', '$S_\\infty = \\frac{a_1}{1-r}$'] },
            { label: '"Total of all terms forever, $r=\\frac14$"', options: ['$S_\\infty = \\frac{a_1}{1-r}$', '$a_n = a_1 r^{\\,n-1}$', '$S_n = a_1\\frac{1-r^n}{1-r}$'] },
          ],
          correctAnswers: ['$a_n = a_1 r^{\\,n-1}$', '$S_n = a_1\\frac{1-r^n}{1-r}$', '$S_\\infty = \\frac{a_1}{1-r}$'],
          hint1: 'A single specific term → the $n$th-term formula.',
          hint2: 'A fixed *number* of terms added → the finite sum formula.',
          hint3: '"Forever" with $|r|<1$ → the infinite sum formula.',
          explanation: 'One term → $a_n = a_1 r^{n-1}$. A finite count of terms → $S_n = a_1\\frac{1-r^n}{1-r}$. An infinite total with $|r|<1$ → $S_\\infty = \\frac{a_1}{1-r}$.',
        },
      },
      {
        id: 'gss5-final-recap',
        type: 'text' as const,
        content: `## You're Ready

Here's the whole lesson in one breath:

> 🔑 A geometric sequence **multiplies** by $r$ each step. Reach any term with $a_n = a_1 r^{\\,n-1}$. Add a finite count of terms with $S_n = a_1\\frac{1-r^n}{1-r}$. Add infinitely many — but **only** when $|r|<1$ — with $S_\\infty = \\frac{a_1}{1-r}$.

The Exit Quiz below pulls one question from each major skill. Take your time and check your arithmetic.`,
      },
      {
        id: 'gss5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the 5th term of the geometric sequence $3,\\,6,\\,12,\\dots$?',
              options: ['$48$', '$24$', '$96$', '$15$'],
              correctAnswer: 0,
              explanation: '$a_1=3$, $r=2$: $a_5 = 3 \\cdot 2^{5-1} = 3 \\cdot 16 = 48$. (Listing: $3,6,12,24,\\mathbf{48}$.)',
            },
            {
              question: 'Find the sum of the first 4 terms of $2,\\,8,\\,32,\\dots$',
              options: ['$170$', '$128$', '$42$', '$512$'],
              correctAnswer: 0,
              explanation: '$a_1=2$, $r=4$: $S_4 = 2 \\cdot \\frac{1-4^4}{1-4} = 2 \\cdot \\frac{1-256}{-3} = 2 \\cdot \\frac{-255}{-3} = 2 \\cdot 85 = 170$. Check: $2+8+32+128 = 170$. ✓',
            },
            {
              question: 'Find the sum of the infinite series $18 + 6 + 2 + \\dots$',
              options: ['$27$', '$24$', '$36$', 'It diverges'],
              correctAnswer: 0,
              explanation: '$r = 6/18 = \\frac13$, and $|r|<1$ so it converges: $S_\\infty = \\frac{18}{1-\\frac13} = \\frac{18}{2/3} = 18 \\cdot \\frac32 = 27$.',
            },
          ],
        },
      },
    ],
  },
]
