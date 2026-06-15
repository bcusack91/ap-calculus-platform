import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Geometric Sequences (Algebra 2).
 * Registry key / DB Topic.slug: 'geometric-sequences-algebra2'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-algebra2',
    sections: [
      {
        id: 'gs1-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Sequences

**Part 1 of 5 — The Common Ratio**

---

### Topics in This Part

| Section |
|---------|
| What Makes a Sequence Geometric? |
| Finding the Common Ratio |
| Geometric vs. Arithmetic |

> 🔑 **Key Concept:** In a **geometric sequence** you get from each term to the next by **multiplying** by the same number — the **common ratio** $r$. (Arithmetic sequences *add*; geometric sequences *multiply*.)`,
      },
      {
        id: 'gs1-what',
        type: 'text' as const,
        content: `## What Makes a Sequence Geometric?

A sequence is **geometric** when each term is the previous term times a fixed number $r$:

$$2,\\; 6,\\; 18,\\; 54,\\; 162,\\; \\dots \\qquad (\\times 3 \\text{ each time})$$

Here $r = 3$. To find $r$, **divide any term by the term before it**:

$$r = \\frac{a_2}{a_1} = \\frac{6}{2} = 3, \\qquad r = \\frac{a_3}{a_2} = \\frac{18}{6} = 3 \\;\\checkmark$$

The ratio must be the **same** between every consecutive pair — that's the test.

### The Ratio Can Be Anything Nonzero

| Sequence | $r$ | Behavior |
|----------|-----|----------|
| $5,\\,10,\\,20,\\,40,\\dots$ | $2$ | grows |
| $80,\\,40,\\,20,\\,10,\\dots$ | $\\frac{1}{2}$ | shrinks toward $0$ |
| $3,\\,-6,\\,12,\\,-24,\\dots$ | $-2$ | alternates sign |

> 💡 A **negative** ratio makes the signs flip $+,-,+,-$. A ratio **between $-1$ and $1$** makes terms shrink toward $0$.`,
      },
      {
        id: 'gs1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which list is a geometric sequence?',
              options: ['$4,\\,8,\\,12,\\,16,\\dots$', '$4,\\,8,\\,16,\\,32,\\dots$', '$4,\\,7,\\,11,\\,16,\\dots$', '$4,\\,2,\\,0,\\,-2,\\dots$'],
              correctAnswer: 1,
              explanation: '$4,8,16,32$ multiplies by $2$ each step ($r=2$). The first option *adds* $4$ each time (arithmetic), and the others have no constant ratio.',
            },
            {
              question: 'In the sequence $5,\\,10,\\,20,\\,40,\\dots$ the common ratio is:',
              options: ['$2$', '$5$', '$\\tfrac{1}{2}$', '$10$'],
              correctAnswer: 0,
              explanation: 'Divide a term by the one before it: $10/5 = 2$ and $20/10 = 2$. So $r = 2$.',
            },
          ],
        },
      },
      {
        id: 'gs1-divide-note',
        type: 'text' as const,
        content: `## A Reliable Way to Get $r$

You never have to guess the ratio — just **divide consecutive terms**:

$$r = \\frac{\\text{any term}}{\\text{the term before it}}$$

If you get the **same** answer for every pair, the sequence is geometric and that number is $r$. If the answers differ, it isn't geometric at all.`,
      },
      {
        id: 'gs1-find-r',
        type: 'input-boxes' as const,
        content: `**Find the Common Ratio** 🧮

Divide any term by the previous one. (Fractions like \`1/3\` are fine.)

**1)** $7,\\,14,\\,28,\\,56,\\dots \\qquad r = \\,?$
**2)** $81,\\,27,\\,9,\\,3,\\dots \\qquad r = \\,?$
**3)** $2,\\,-10,\\,50,\\,-250,\\dots \\qquad r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1/3', '-5'],
          hint1: '$14 \\div 7 = 2$.',
          hint2: '$27 \\div 81 = \\frac{1}{3}$ — the terms are shrinking, so $r$ is a fraction less than $1$.',
          hint3: '$-10 \\div 2 = -5$. The alternating signs tell you $r$ is negative.',
          explanation: '1) $r = 2$.  2) $r = \\frac{1}{3}$.  3) $r = -5$. Always divide a term by the one before it.',
        },
      },
      {
        id: 'gs1-compare-note',
        type: 'text' as const,
        content: `## Geometric vs. Arithmetic — The One-Question Test

Ask: *"To get the next term, do I add the same amount or multiply by the same amount?"*

- **Add** the same amount → **arithmetic** (common difference $d$).
- **Multiply** by the same amount → **geometric** (common ratio $r$).

Some sequences (like the perfect squares $1,4,9,16$) do **neither** — the gaps and the ratios both keep changing.`,
      },
      {
        id: 'gs1-vs',
        type: 'dropdown-select' as const,
        content: `**Geometric or Arithmetic?** 🔽

Decide what kind of sequence each one is.`,
        exercise: {
          dropdowns: [
            { label: '$3,\\,9,\\,27,\\,81,\\dots$', options: ['Geometric', 'Arithmetic', 'Neither'] },
            { label: '$3,\\,9,\\,15,\\,21,\\dots$', options: ['Geometric', 'Arithmetic', 'Neither'] },
            { label: '$1,\\,4,\\,9,\\,16,\\dots$', options: ['Geometric', 'Arithmetic', 'Neither'] },
          ],
          correctAnswers: ['Geometric', 'Arithmetic', 'Neither'],
          hint1: 'Geometric = constant **ratio** (multiply); arithmetic = constant **difference** (add).',
          hint2: '$3,9,27,81$ multiplies by $3$. $3,9,15,21$ adds $6$.',
          hint3: '$1,4,9,16$ are the perfect squares — the gaps grow ($+3,+5,+7$) and the ratios change, so it is neither.',
          explanation: '$3,9,27,81$ has a constant ratio $r=3$ (geometric). $3,9,15,21$ has a constant difference $+6$ (arithmetic). $1,4,9,16$ has neither a constant ratio nor difference.',
        },
      },
      {
        id: 'gs1-recap',
        type: 'text' as const,
        content: `## Recap

- A geometric sequence has a constant **common ratio** $r$.
- Find it by dividing **any term by the previous term**: $r = \\dfrac{a_{n}}{a_{n-1}}$.
- $r > 1$ grows, $0 < r < 1$ shrinks, $r < 0$ alternates sign.

In Part 2 we turn $r$ into a **formula** that jumps straight to any term — no listing required.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-algebra2',
    sections: [
      {
        id: 'gs2-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Sequences

**Part 2 of 5 — The Explicit Formula**

---

> 🔑 **The Idea:** To reach the $n$th term you start at $a_1$ and multiply by $r$ a total of $(n-1)$ times. That's exactly what the explicit formula says.`,
      },
      {
        id: 'gs2-formula',
        type: 'text' as const,
        content: `## The Explicit (nth-Term) Formula

$$\\boxed{\\,a_n = a_1 \\cdot r^{\\,n-1}\\,}$$

- $a_1$ — the **first** term
- $r$ — the **common ratio**
- $n$ — the term number you want

The exponent is $n-1$ (not $n$) because the first term has been multiplied by $r$ **zero** times: $a_1 = a_1 \\cdot r^{0}$.

### Worked Example: $3,\\,6,\\,12,\\,24,\\dots$

Here $a_1 = 3$ and $r = 2$, so the rule is:

$$a_n = 3 \\cdot 2^{\\,n-1}$$

Find the **7th** term:

$$a_7 = 3 \\cdot 2^{\\,7-1} = 3 \\cdot 2^{6} = 3 \\cdot 64 = 192$$

> ✅ **Check by listing:** $3,6,12,24,48,96,192$ — the 7th term is indeed $192$. ✓`,
      },
      {
        id: 'gs2-decay',
        type: 'text' as const,
        content: `### Worked Example with a Fractional Ratio

Sequence $80,\\,40,\\,20,\\,10,\\dots$ has $a_1 = 80$ and $r = \\dfrac{1}{2}$:

$$a_n = 80 \\cdot \\left(\\tfrac{1}{2}\\right)^{\\,n-1}$$

The **5th** term:

$$a_5 = 80 \\cdot \\left(\\tfrac{1}{2}\\right)^{4} = 80 \\cdot \\tfrac{1}{16} = 5$$

> ⚠️ **Watch the exponent.** For the 5th term the exponent is $5-1 = 4$, **not** $5$. Subtracting one is the single most common slip.`,
      },
      {
        id: 'gs2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A geometric sequence has $a_1 = 5$ and $r = 3$. Its explicit formula is:',
              options: ['$a_n = 5 \\cdot 3^{n-1}$', '$a_n = 3 \\cdot 5^{n-1}$', '$a_n = 5 \\cdot 3^{n}$', '$a_n = 5 + 3(n-1)$'],
              correctAnswer: 0,
              explanation: 'The explicit formula is $a_n = a_1 \\cdot r^{n-1}$. With $a_1 = 5$ and $r = 3$ that is $a_n = 5\\cdot 3^{n-1}$. (The last option is the *arithmetic* formula.)',
            },
            {
              question: 'For $a_n = 2 \\cdot 4^{n-1}$, what is the 4th term?',
              options: ['$128$', '$32$', '$512$', '$256$'],
              correctAnswer: 0,
              explanation: '$a_4 = 2 \\cdot 4^{4-1} = 2 \\cdot 4^{3} = 2 \\cdot 64 = 128$.',
            },
          ],
        },
      },
      {
        id: 'gs2-build-note',
        type: 'text' as const,
        content: `## Building a Formula From a List

Given a sequence, writing its explicit formula is always the same two steps:

1. **Read off $a_1$** — the very first term.
2. **Divide to get $r$** — second term over first term.

Then drop both into $a_n = a_1 \\cdot r^{\\,n-1}$. Let's build one piece by piece.`,
      },
      {
        id: 'gs2-build',
        type: 'dropdown-select' as const,
        content: `**Build the Formula** 🔽

The sequence is $4,\\,12,\\,36,\\,108,\\dots$`,
        exercise: {
          dropdowns: [
            { label: 'First term $a_1 =$', options: ['$4$', '$12$', '$3$', '$1$'] },
            { label: 'Common ratio $r =$', options: ['$3$', '$4$', '$8$', '$\\tfrac{1}{3}$'] },
            { label: 'Explicit formula:', options: ['$a_n = 4\\cdot 3^{n-1}$', '$a_n = 3\\cdot 4^{n-1}$', '$a_n = 4\\cdot 3^{n}$', '$a_n = 4 + 3(n-1)$'] },
          ],
          correctAnswers: ['$4$', '$3$', '$a_n = 4\\cdot 3^{n-1}$'],
          hint1: 'The first term listed is $a_1$.',
          hint2: 'Divide: $12 \\div 4 = 3$, so $r = 3$.',
          hint3: 'Plug $a_1 = 4$ and $r = 3$ into $a_n = a_1 r^{n-1}$.',
          explanation: 'First term $a_1 = 4$, ratio $r = 12/4 = 3$, so $a_n = 4 \\cdot 3^{n-1}$.',
        },
      },
      {
        id: 'gs2-exponent-note',
        type: 'text' as const,
        content: `## Mind the Exponent

Before the next drill, lock in the rule that trips up most students:

> ⚠️ The exponent is $\\mathbf{n-1}$, not $n$. The $1^{\\text{st}}$ term uses $r^{0}=1$, the $2^{\\text{nd}}$ uses $r^{1}$, the $5^{\\text{th}}$ uses $r^{4}$, and so on — always **one less** than the term number.`,
      },
      {
        id: 'gs2-drill',
        type: 'input-boxes' as const,
        content: `**Use the Formula** 🧮

Apply $a_n = a_1 \\cdot r^{\\,n-1}$.

**1)** $a_1 = 2,\\; r = 3$. Find $a_5$.
**2)** $a_1 = 6,\\; r = 2$. Find $a_4$.
**3)** $a_1 = 100,\\; r = \\tfrac{1}{5}$. Find $a_3$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['162', '48', '4'],
          hint1: '$a_5 = 2 \\cdot 3^{5-1} = 2 \\cdot 3^4 = 2 \\cdot 81$.',
          hint2: '$a_4 = 6 \\cdot 2^{4-1} = 6 \\cdot 2^3 = 6 \\cdot 8$.',
          hint3: '$a_3 = 100 \\cdot \\left(\\frac{1}{5}\\right)^{2} = 100 \\cdot \\frac{1}{25}$.',
          explanation: '1) $2\\cdot 81 = 162$.  2) $6\\cdot 8 = 48$.  3) $100 \\cdot \\frac{1}{25} = 4$. Remember the exponent is $n-1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-algebra2',
    sections: [
      {
        id: 'gs3-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Sequences

**Part 3 of 5 — Recursive Rules, Missing Terms & Geometric Mean**

---

> 🔑 **Two ways to describe the same sequence:** the **explicit** rule jumps to any term, while the **recursive** rule says how to get the *next* term from the one before it.`,
      },
      {
        id: 'gs3-recursive',
        type: 'text' as const,
        content: `## Recursive Form

A recursive rule needs a **starting value** and a **step**:

$$a_1 = \\text{(given)}, \\qquad a_n = r \\cdot a_{n-1}$$

For $5,\\,15,\\,45,\\,135,\\dots$ ($r = 3$):

$$a_1 = 5, \\qquad a_n = 3\\,a_{n-1}$$

| Form | What it tells you |
|------|-------------------|
| Explicit $a_n = 5\\cdot 3^{n-1}$ | jumps straight to **any** term |
| Recursive $a_n = 3a_{n-1}$ | builds the **next** term from the last |

> 💡 Both describe the *same* sequence. Recursive needs the previous term; explicit only needs $n$.`,
      },
      {
        id: 'gs3-find-r-from-two',
        type: 'text' as const,
        content: `## Finding $r$ When Terms Aren't Adjacent

If you know two terms that are $k$ apart, then $\\dfrac{a_{m+k}}{a_m} = r^{\\,k}$.

### Example: $a_1 = 4$ and $a_4 = 108$. Find $r$.

There are $4 - 1 = 3$ multiplications between them:

$$a_4 = a_1 \\cdot r^{3} \\;\\Rightarrow\\; 108 = 4 r^{3} \\;\\Rightarrow\\; r^{3} = 27 \\;\\Rightarrow\\; r = \\sqrt[3]{27} = 3$$

So the sequence is $4,\\,12,\\,36,\\,108,\\dots$ ✓`,
      },
      {
        id: 'gs3-geo-mean',
        type: 'text' as const,
        content: `## The Geometric Mean (Missing Middle Term)

The **geometric mean** of two positive numbers $a$ and $b$ is the term that sits *between* them in a geometric sequence:

$$\\text{geometric mean} = \\sqrt{a \\cdot b}$$

### Example: Fill the blank $4,\\,\\underline{\\;\\;?\\;\\;},\\,9$

$$\\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$$

So the sequence is $4,\\,6,\\,9$ with $r = \\dfrac{6}{4} = \\dfrac{3}{2}$ (and $\\dfrac{9}{6} = \\dfrac{3}{2}$ ✓).

> ⚠️ Use the **geometric** mean $\\sqrt{ab}$ here — **not** the average $\\frac{a+b}{2}$. The average of $4$ and $9$ is $6.5$, which would *not* keep the ratio constant.`,
      },
      {
        id: 'gs3-match-forms',
        type: 'dropdown-select' as const,
        content: `**Match the Form** 🔽

Use the sequence $6,\\,18,\\,54,\\,162,\\dots$`,
        exercise: {
          dropdowns: [
            { label: 'Common ratio $r =$', options: ['$3$', '$6$', '$12$', '$\\tfrac{1}{3}$'] },
            { label: 'Recursive rule:', options: ['$a_1 = 6,\\; a_n = 3a_{n-1}$', '$a_1 = 3,\\; a_n = 6a_{n-1}$', '$a_1 = 6,\\; a_n = a_{n-1}+12$', '$a_1 = 6,\\; a_n = 3+a_{n-1}$'] },
            { label: 'Explicit rule:', options: ['$a_n = 6\\cdot 3^{n-1}$', '$a_n = 3\\cdot 6^{n-1}$', '$a_n = 6\\cdot 3^{n}$', '$a_n = 6+3(n-1)$'] },
          ],
          correctAnswers: ['$3$', '$a_1 = 6,\\; a_n = 3a_{n-1}$', '$a_n = 6\\cdot 3^{n-1}$'],
          hint1: '$18 \\div 6 = 3$, so $r = 3$.',
          hint2: 'A recursive geometric rule **multiplies** the previous term by $r$: $a_n = 3a_{n-1}$ starting at $a_1 = 6$.',
          hint3: 'The explicit rule plugs $a_1 = 6,\\, r = 3$ into $a_n = a_1 r^{n-1}$.',
          explanation: '$r = 3$. Recursive: $a_1 = 6,\\; a_n = 3a_{n-1}$. Explicit: $a_n = 6\\cdot 3^{n-1}$. Both describe the same sequence.',
        },
      },
      {
        id: 'gs3-forms-note',
        type: 'text' as const,
        content: `## Recursive Rules Always *Multiply*

A common mistake is to write a recursive geometric rule as $a_n = a_{n-1} + r$ — that's **arithmetic**. Geometric rules always **multiply** by $r$:

$$a_n = r \\cdot a_{n-1}$$

Keep that straight and the next check is easy.`,
      },
      {
        id: 'gs3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which recursive rule matches $2,\\,8,\\,32,\\,128,\\dots$?',
              options: ['$a_1 = 2,\\; a_n = 4a_{n-1}$', '$a_1 = 2,\\; a_n = a_{n-1} + 6$', '$a_1 = 4,\\; a_n = 2a_{n-1}$', '$a_1 = 2,\\; a_n = 4 + a_{n-1}$'],
              correctAnswer: 0,
              explanation: 'The ratio is $8/2 = 4$, and the sequence starts at $2$. A recursive geometric rule multiplies: $a_n = 4a_{n-1}$ with $a_1 = 2$.',
            },
            {
              question: 'The geometric mean of $3$ and $12$ is:',
              options: ['$6$', '$7.5$', '$36$', '$9$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{3 \\cdot 12} = \\sqrt{36} = 6$. Check: $3,6,12$ has ratio $2$. (The average $7.5$ would not give a constant ratio.)',
            },
          ],
        },
      },
      {
        id: 'gs3-drill-note',
        type: 'text' as const,
        content: `## Before You Drill

The next problems blend two skills:

- **Geometric mean** → $\\sqrt{a\\cdot b}$ for the term *between* $a$ and $b$.
- **Solving for $r$** → if $a_3 = a_1 r^{2}$, then $r = \\sqrt{a_3 / a_1}$ (take the positive root unless told otherwise).

Match each part to the right tool, then compute.`,
      },
      {
        id: 'gs3-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Geometric mean of $5$ and $20$ $= \\,?$
**2)** $a_1 = 3,\\; a_3 = 75$. Find $r$ (take the positive value).
**3)** Fill the blank: $2,\\,\\underline{\\;\\;?\\;\\;},\\,18$ (positive term).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '5', '6'],
          hint1: '$\\sqrt{5\\cdot 20} = \\sqrt{100}$.',
          hint2: '$a_3 = a_1 r^2 \\Rightarrow 75 = 3r^2 \\Rightarrow r^2 = 25$.',
          hint3: 'The missing middle term is $\\sqrt{2 \\cdot 18} = \\sqrt{36}$.',
          explanation: '1) $\\sqrt{100} = 10$.  2) $r^2 = 25 \\Rightarrow r = 5$.  3) $\\sqrt{36} = 6$, giving $2,6,18$ with $r = 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-algebra2',
    sections: [
      {
        id: 'gs4-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Sequences

**Part 4 of 5 — Finite Geometric Series**

---

> 🔑 **A *series* is the sum of a sequence's terms.** Adding $30$ terms by hand is brutal — the geometric-sum formula does it in one line.`,
      },
      {
        id: 'gs4-sum-formula',
        type: 'text' as const,
        content: `## The Finite Sum Formula

The sum of the first $n$ terms of a geometric sequence is:

$$\\boxed{\\,S_n = a_1 \\cdot \\frac{1 - r^{\\,n}}{1 - r}\\,}, \\qquad r \\ne 1$$

- $a_1$ — first term
- $r$ — common ratio
- $n$ — how many terms you're adding

### Worked Example: Sum the first 6 terms of $3,\\,6,\\,12,\\dots$

Here $a_1 = 3,\\; r = 2,\\; n = 6$:

$$S_6 = 3 \\cdot \\frac{1 - 2^{6}}{1 - 2} = 3 \\cdot \\frac{1 - 64}{-1} = 3 \\cdot \\frac{-63}{-1} = 3 \\cdot 63 = 189$$

> ✅ **Check by listing:** $3+6+12+24+48+96 = 189$. ✓`,
      },
      {
        id: 'gs4-fraction-example',
        type: 'text' as const,
        content: `### Worked Example with $r < 1$

Sum the first $4$ terms of $16,\\,8,\\,4,\\,2,\\dots$, where $a_1 = 16,\\; r = \\dfrac{1}{2}$:

$$S_4 = 16 \\cdot \\frac{1 - \\left(\\tfrac{1}{2}\\right)^{4}}{1 - \\tfrac{1}{2}} = 16 \\cdot \\frac{1 - \\tfrac{1}{16}}{\\tfrac{1}{2}} = 16 \\cdot \\frac{\\tfrac{15}{16}}{\\tfrac{1}{2}}$$

$$= 16 \\cdot \\frac{15}{16} \\cdot 2 = 15 \\cdot 2 = 30$$

> ✅ **Check:** $16+8+4+2 = 30$. ✓

> 💡 Dividing by $\\tfrac{1}{2}$ is the same as **multiplying by $2$** — that's why the $\\tfrac{1}{2}$ in the denominator turned into a $\\times 2$.`,
      },
      {
        id: 'gs4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $S_n = a_1 \\cdot \\dfrac{1 - r^n}{1 - r}$, what does $n$ stand for?',
              options: ['The number of terms being added', 'The common ratio', 'The last term', 'The first term'],
              correctAnswer: 0,
              explanation: '$n$ is how many terms you are summing. $a_1$ is the first term and $r$ is the ratio.',
            },
            {
              question: 'Sum the first 5 terms of $2,\\,6,\\,18,\\dots$ ($a_1 = 2,\\, r = 3$).',
              options: ['$242$', '$162$', '$120$', '$486$'],
              correctAnswer: 0,
              explanation: '$S_5 = 2\\cdot\\frac{1-3^5}{1-3} = 2\\cdot\\frac{1-243}{-2} = 2\\cdot\\frac{-242}{-2} = 2\\cdot 121 = 242$. Check: $2+6+18+54+162 = 242$.',
            },
          ],
        },
      },
      {
        id: 'gs4-setup-note',
        type: 'text' as const,
        content: `## A Setup Checklist

Every geometric-sum problem boils down to pinning three numbers, **in this order**:

1. **$a_1$** — the first term you're adding.
2. **$r$** — second term over first.
3. **$n$** — how many terms the problem asks for.

Get those right and the formula does the rest. Let's set one up.`,
      },
      {
        id: 'gs4-setup',
        type: 'dropdown-select' as const,
        content: `**Set Up the Sum** 🔽

You want the sum of the first **5** terms of $1,\\,4,\\,16,\\,64,\\dots$`,
        exercise: {
          dropdowns: [
            { label: '$a_1 =$', options: ['$1$', '$4$', '$5$', '$16$'] },
            { label: '$r =$', options: ['$4$', '$3$', '$16$', '$\\tfrac{1}{4}$'] },
            { label: '$S_5 =$', options: ['$341$', '$256$', '$320$', '$85$'] },
          ],
          correctAnswers: ['$1$', '$4$', '$341$'],
          hint1: 'The first listed term is $a_1$.',
          hint2: '$4 \\div 1 = 4$, so $r = 4$.',
          hint3: '$S_5 = 1\\cdot\\frac{1-4^5}{1-4} = \\frac{1-1024}{-3} = \\frac{-1023}{-3} = 341$. Check: $1+4+16+64+256 = 341$.',
          explanation: '$a_1 = 1$, $r = 4$, and $S_5 = \\frac{1-4^5}{1-4} = \\frac{-1023}{-3} = 341$.',
        },
      },
      {
        id: 'gs4-sign-note',
        type: 'text' as const,
        content: `## Don't Fear the Negatives

When $r > 1$, both $1 - r^{n}$ (top) and $1 - r$ (bottom) come out **negative** — and the two negatives **cancel**, leaving a positive sum. That cancellation is built in, so trust the formula even when the intermediate fractions look ugly.`,
      },
      {
        id: 'gs4-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Sum** 🧮

Use $S_n = a_1\\cdot\\dfrac{1-r^n}{1-r}$.

**1)** First 4 terms of $5,\\,10,\\,20,\\,40,\\dots$  $\\Rightarrow S_4 = \\,?$
**2)** First 3 terms of $7,\\,21,\\,63,\\dots$  $\\Rightarrow S_3 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['75', '91'],
          hint1: '$S_4 = 5\\cdot\\frac{1-2^4}{1-2} = 5\\cdot\\frac{-15}{-1} = 5\\cdot 15$.',
          hint2: '$S_3 = 7\\cdot\\frac{1-3^3}{1-3} = 7\\cdot\\frac{-26}{-2} = 7\\cdot 13$.',
          hint3: 'Or just add: $5+10+20+40$ and $7+21+63$.',
          explanation: '1) $5\\cdot 15 = 75$ (and $5+10+20+40 = 75$).  2) $7\\cdot 13 = 91$ (and $7+21+63 = 91$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'geometric-sequences-algebra2',
    sections: [
      {
        id: 'gs5-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Sequences

**Part 5 of 5 — Applications & Mastery Check**

---

You can now (1) find $r$, (2) write explicit and recursive rules, (3) find missing terms with the geometric mean, and (4) sum a finite series. Let's apply it to the real world and finish with a mastery check.`,
      },
      {
        id: 'gs5-applications',
        type: 'text' as const,
        content: `## Real-World Growth & Decay

Geometric sequences model anything that grows or shrinks by a **constant percent** each period.

| Situation | $a_1$ | $r$ |
|-----------|-------|-----|
| Grows $20\\%$ per year | starting amount | $1.20$ |
| Loses $10\\%$ each bounce | first height | $0.90$ |
| Doubles each hour | starting count | $2$ |

**Multiplier rule:** grow by $p\\%$ → $r = 1 + \\dfrac{p}{100}$; decay by $p\\%$ → $r = 1 - \\dfrac{p}{100}$.

### Example: Bacteria triple every hour

A colony starts at $200$ cells and triples each hour. Since the starting count is at hour $0$, it's cleanest to track the count by *hours elapsed* $t$ rather than by term number — careful with the indexing!

Model the count $C$ at hour $t$ (with $t=0$ the start) as $C = 200 \\cdot 3^{\\,t}$. After $4$ hours:

$$C = 200 \\cdot 3^{4} = 200 \\cdot 81 = 16{,}200 \\text{ cells}$$

> 💡 When a problem counts from hour $0$, use $a_1 \\cdot r^{t}$ with exponent $t$. When it asks for the "$n$th term," use exponent $n-1$. Read carefully which one is wanted.`,
      },
      {
        id: 'gs5-app-quiz',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \\$1{,}000 investment grows $5\\%$ per year. What common ratio models its value year to year?',
              options: ['$1.05$', '$0.05$', '$5$', '$0.95$'],
              correctAnswer: 0,
              explanation: 'Growing by $5\\%$ multiplies by $1 + 0.05 = 1.05$ each year.',
            },
            {
              question: 'A ball is dropped from $24$ ft and rebounds to $50\\%$ of its previous height each bounce. How high is the rebound after the 3rd bounce?',
              options: ['$3$ ft', '$6$ ft', '$12$ ft', '$1.5$ ft'],
              correctAnswer: 0,
              explanation: 'Heights: $24 \\to 12 \\to 6 \\to 3$. After the 3rd bounce the rebound is $24\\cdot(0.5)^3 = 24\\cdot\\frac{1}{8} = 3$ ft.',
            },
          ],
        },
      },
      {
        id: 'gs5-mixed-note',
        type: 'text' as const,
        content: `## Pull It All Together

The next drill mixes all four skills in one place — the explicit formula, the geometric mean, and the finite sum. Decide which tool each part needs *before* you compute:

- "Find the $n$th term" → $a_n = a_1 r^{\\,n-1}$.
- "Find the term between two numbers" → $\\sqrt{ab}$.
- "Add up the first $n$ terms" → $S_n = a_1\\dfrac{1-r^n}{1-r}$.`,
      },
      {
        id: 'gs5-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Mastery Drill** 🧮

**1)** $a_1 = 2,\\; r = 3$. Find $a_6$.
**2)** Geometric mean of $8$ and $32$ $= \\,?$
**3)** Sum of the first $4$ terms of $1,\\,3,\\,9,\\,27,\\dots$ $\\Rightarrow S_4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['486', '16', '40'],
          hint1: '$a_6 = 2\\cdot 3^{6-1} = 2\\cdot 3^5 = 2\\cdot 243$.',
          hint2: '$\\sqrt{8\\cdot 32} = \\sqrt{256}$.',
          hint3: '$S_4 = 1\\cdot\\frac{1-3^4}{1-3} = \\frac{-80}{-2}$, or add $1+3+9+27$.',
          explanation: '1) $2\\cdot 243 = 486$.  2) $\\sqrt{256} = 16$.  3) $1+3+9+27 = 40$.',
        },
      },
      {
        id: 'gs5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula |
|------|---------|
| Common ratio | $r = \\dfrac{a_n}{a_{n-1}}$ |
| $n$th term (explicit) | $a_n = a_1 \\cdot r^{\\,n-1}$ |
| Recursive rule | $a_1$ given, $a_n = r\\cdot a_{n-1}$ |
| Geometric mean of $a,b$ | $\\sqrt{a\\,b}$ |
| Sum of $n$ terms | $S_n = a_1\\cdot\\dfrac{1-r^{\\,n}}{1-r}$ |

> ⚠️ Top traps: the exponent is $n-1$ (not $n$); use the **geometric** mean $\\sqrt{ab}$ (not the average); and $r$ can be negative or a fraction.`,
      },
      {
        id: 'gs5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the 5th term of the sequence $3,\\,6,\\,12,\\dots$?',
              options: ['$48$', '$24$', '$96$', '$60$'],
              correctAnswer: 0,
              explanation: '$a_1 = 3,\\, r = 2$, so $a_5 = 3\\cdot 2^{5-1} = 3\\cdot 16 = 48$. (Listing: $3,6,12,24,48$.)',
            },
            {
              question: 'The common ratio of $48,\\,12,\\,3,\\,\\tfrac{3}{4},\\dots$ is:',
              options: ['$\\tfrac{1}{4}$', '$4$', '$-\\tfrac{1}{4}$', '$\\tfrac{1}{3}$'],
              correctAnswer: 0,
              explanation: '$12 \\div 48 = \\frac{1}{4}$, and $3 \\div 12 = \\frac{1}{4}$. The terms shrink, so $r = \\frac{1}{4}$.',
            },
            {
              question: 'The sum of the first 4 terms of $2,\\,4,\\,8,\\,16,\\dots$ is:',
              options: ['$30$', '$32$', '$16$', '$60$'],
              correctAnswer: 0,
              explanation: '$S_4 = 2\\cdot\\frac{1-2^4}{1-2} = 2\\cdot\\frac{-15}{-1} = 30$, matching $2+4+8+16 = 30$.',
            },
          ],
        },
      },
    ],
  },
]
