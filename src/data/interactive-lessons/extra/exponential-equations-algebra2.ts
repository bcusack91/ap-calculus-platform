import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solving Exponential Equations (Algebra 2).
 * Registry key: 'exponential-equations-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'exponential-equations-algebra2',
    sections: [
      {
        id: 'expeq1-intro',
        type: 'text' as const,
        content: `# 📈 Solving Exponential Equations

**Part 1 of 5 — What Makes an Equation "Exponential"?**

---

### Topics in This Part

| Section |
|---------|
| The Variable Is in the Exponent |
| Exponent Rules You'll Reuse |
| Spotting a Common Base |

> 🔑 **Key Concept:** In an **exponential equation**, the unknown lives in the *exponent* — like $2^x = 8$ — not in the base. That one difference changes everything about how we solve.`,
      },
      {
        id: 'expeq1-what',
        type: 'text' as const,
        content: `## The Variable Is in the Exponent

Compare these two equations:

| Equation | Type | Unknown is... |
|----------|------|---------------|
| $x^2 = 16$ | quadratic | the **base** |
| $2^x = 16$ | **exponential** | the **exponent** |

For $x^2 = 16$ you take a square root. But for $2^x = 16$, taking a root does nothing useful — you need a different idea.

The big question of this whole lesson is:

> 🔑 **Core Question:** "To what power must I raise the base to get this number?"

For $2^x = 16$, the answer is $x = 4$, because $2^4 = 16$. The rest of the lesson is about answering that question even when it isn't obvious.`,
      },
      {
        id: 'expeq1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an exponential equation?',
              options: ['$3^x = 81$', '$x^3 = 27$', '$5x = 40$', '$x^2 + 4 = 20$'],
              correctAnswer: 0,
              explanation: 'In $3^x = 81$ the unknown $x$ is the exponent — that is what makes it exponential. The others have the variable in the base or as a coefficient.',
            },
            {
              question: 'Solve $2^x = 8$ by asking "2 to what power equals 8?"',
              options: ['$x = 3$', '$x = 4$', '$x = 2$', '$x = 6$'],
              correctAnswer: 0,
              explanation: '$2^3 = 8$, so $x = 3$. (Note $2 \\cdot 3 = 6$, but we need a *power*, not a product.)',
            },
          ],
        },
      },
      {
        id: 'expeq1-rules',
        type: 'text' as const,
        content: `## Exponent Rules You'll Reuse

Solving these equations leans on the laws of exponents. Keep these close:

| Rule | Formula | Example |
|------|---------|---------|
| Product | $b^m \\cdot b^n = b^{m+n}$ | $2^3 \\cdot 2^4 = 2^7$ |
| Quotient | $\\dfrac{b^m}{b^n} = b^{m-n}$ | $\\dfrac{3^5}{3^2} = 3^3$ |
| Power of a power | $(b^m)^n = b^{mn}$ | $(5^2)^3 = 5^6$ |
| Negative | $b^{-n} = \\dfrac{1}{b^n}$ | $2^{-3} = \\dfrac{1}{8}$ |
| Zero | $b^0 = 1$ | $7^0 = 1$ |

> 💡 The **power of a power** rule is the workhorse. It's what lets us rewrite something like $9^x$ as $(3^2)^x = 3^{2x}$ — turning two different bases into one.`,
      },
      {
        id: 'expeq1-powers-drill',
        type: 'input-boxes' as const,
        content: `**Rewrite as a Power of the Same Base** 🧮

Every number below is a power of a single small base. Enter the **exponent**.

**1)** $64 = 2^{\\,?}$
**2)** $81 = 3^{\\,?}$
**3)** $125 = 5^{\\,?}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '3'],
          hint1: 'Count the doublings: $2, 4, 8, 16, 32, 64$ — that is $2^6$.',
          hint2: '$3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$, so $81 = 3^4$.',
          hint3: '$5 \\cdot 5 \\cdot 5 = 125$, so $125 = 5^3$.',
          explanation: '1) $2^6 = 64$.  2) $3^4 = 81$.  3) $5^3 = 125$. Recognizing numbers as powers is the first skill for the same-base method.',
        },
      },
      {
        id: 'expeq1-commonbase',
        type: 'text' as const,
        content: `## Spotting a Common Base

The cleanest way to solve an exponential equation is to make **both sides have the same base**. Then the exponents must match.

To do that, you have to recognize when *different-looking* numbers share a base:

$$8 = 2^3, \\qquad 4 = 2^2, \\qquad 16 = 2^4, \\qquad 32 = 2^5$$

So $8$, $4$, $16$, and $32$ are **all powers of $2$**. Likewise $9 = 3^2$ and $27 = 3^3$ are both powers of $3$.

> 🔑 **Preview:** If you can write an equation as $b^{(\\text{stuff})} = b^{(\\text{other stuff})}$ with the **same** $b$, then *stuff = other stuff*. That single move — coming in Part 2 — solves a huge family of problems.`,
      },
      {
        id: 'expeq1-base-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Common Base** 🔽

For each pair of numbers, choose the smallest base that makes *both* a whole-number power.`,
        exercise: {
          dropdowns: [
            { label: '$8$ and $32$ are both powers of:', options: ['$2$', '$3$', '$4$', '$8$'] },
            { label: '$9$ and $27$ are both powers of:', options: ['$3$', '$9$', '$2$', '$6$'] },
            { label: '$25$ and $125$ are both powers of:', options: ['$5$', '$25$', '$10$', '$2$'] },
          ],
          correctAnswers: ['$2$', '$3$', '$5$'],
          hint1: '$8 = 2^3$ and $32 = 2^5$ — both are powers of $2$.',
          hint2: '$9 = 3^2$ and $27 = 3^3$ — both are powers of $3$.',
          hint3: '$25 = 5^2$ and $125 = 5^3$ — both are powers of $5$.',
          explanation: 'Always reduce to the *smallest* base both numbers share. That common base is what lets you set exponents equal in Part 2.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'exponential-equations-algebra2',
    sections: [
      {
        id: 'expeq2-intro',
        type: 'text' as const,
        content: `# 📈 Solving Exponential Equations

**Part 2 of 5 — The Same-Base Method**

---

> 🔑 **The One-Line Rule:** If $b^M = b^N$ (same base $b$, with $b > 0$ and $b \\ne 1$), then $M = N$. Match the bases, then set the exponents equal.`,
      },
      {
        id: 'expeq2-method',
        type: 'text' as const,
        content: `## The Method

**Step 1.** Rewrite both sides as powers of the **same base**.
**Step 2.** Set the **exponents equal**.
**Step 3.** Solve the resulting (usually linear) equation.

### Worked Example: $2^{x+1} = 32$

Write $32$ as a power of $2$: $\\;32 = 2^5$.

$$2^{x+1} = 2^5 \\;\\Rightarrow\\; x + 1 = 5 \\;\\Rightarrow\\; x = 4$$

> ✅ **Check:** $2^{4+1} = 2^5 = 32$ ✓`,
      },
      {
        id: 'expeq2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $5^{2x} = 5^{x+3}$.',
              options: ['$x = 3$', '$x = 1$', '$x = -3$', '$x = 6$'],
              correctAnswer: 0,
              explanation: 'Same base, so set exponents equal: $2x = x + 3 \\Rightarrow x = 3$.',
            },
            {
              question: 'Rewrite $25^x$ as a power of $5$.',
              options: ['$5^{2x}$', '$5^{x+2}$', '$5^{x^2}$', '$5^{x/2}$'],
              correctAnswer: 0,
              explanation: '$25 = 5^2$, so $25^x = (5^2)^x = 5^{2x}$ by the power-of-a-power rule.',
            },
          ],
        },
      },
      {
        id: 'expeq2-powerpower',
        type: 'text' as const,
        content: `## When the Bases Look Different

Sometimes the two bases aren't equal yet — but both are powers of a smaller base. Use $(b^m)^n = b^{mn}$ to fix that.

### Worked Example: $9^x = 27$

Both sides are powers of $3$: $\\;9 = 3^2$ and $27 = 3^3$.

$$\\left(3^2\\right)^x = 3^3 \\;\\Rightarrow\\; 3^{2x} = 3^3 \\;\\Rightarrow\\; 2x = 3 \\;\\Rightarrow\\; x = \\tfrac{3}{2}$$

### Worked Example: $8^x = 4^{x+1}$

Write everything as a power of $2$: $\\;8 = 2^3$, $\\;4 = 2^2$.

$$\\left(2^3\\right)^x = \\left(2^2\\right)^{x+1} \\;\\Rightarrow\\; 2^{3x} = 2^{2x+2} \\;\\Rightarrow\\; 3x = 2x + 2 \\;\\Rightarrow\\; x = 2$$

> ⚠️ **Watch the parentheses:** $\\left(2^2\\right)^{x+1}$ means the *entire* exponent $x+1$ gets multiplied by $2$, giving $2x + 2$ — not $2x + 1$.`,
      },
      {
        id: 'expeq2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk the Steps** 🔽

You're solving $4^{x-1} = 64$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Write $64$ as a power of $4$:', options: ['$4^3$', '$4^2$', '$4^4$', '$4^{16}$'] },
            { label: 'The equation becomes:', options: ['$4^{x-1} = 4^3$', '$4^{x-1} = 4^{64}$', '$4^{x-1} = 4^6$', '$x - 1 = 64$'] },
            { label: 'Set the exponents equal:', options: ['$x - 1 = 3$', '$x - 1 = 64$', '$x = 3$', '$x - 1 = 4$'] },
            { label: 'Solve for $x$:', options: ['$x = 4$', '$x = 2$', '$x = 65$', '$x = 3$'] },
          ],
          correctAnswers: ['$4^3$', '$4^{x-1} = 4^3$', '$x - 1 = 3$', '$x = 4$'],
          hint1: '$4^3 = 64$ (since $4 \\cdot 4 \\cdot 4 = 64$).',
          hint2: 'Replace $64$ with $4^3$ to get matching bases.',
          hint3: 'Equal bases $\\Rightarrow$ equal exponents: $x - 1 = 3 \\Rightarrow x = 4$.',
          explanation: '$4^{x-1} = 64 = 4^3 \\Rightarrow x - 1 = 3 \\Rightarrow x = 4$. Check: $4^{4-1} = 4^3 = 64$ ✓.',
        },
      },
      {
        id: 'expeq2-recap',
        type: 'text' as const,
        content: `## Same-Base Checklist

Before you reach for a calculator, run through this:

| Ask | If yes... |
|-----|-----------|
| Are both sides already the same base? | Set exponents equal. |
| Are they powers of a smaller base? | Rewrite with $(b^m)^n = b^{mn}$, then match. |
| Is a side a single number like $81$? | Express it as a power: $81 = 3^4$. |

> 💡 The same-base method gives **exact** answers with no rounding. Always try it first; only switch to logs (Part 3) when no common base exists.`,
      },
      {
        id: 'expeq2-drill',
        type: 'input-boxes' as const,
        content: `**Solve by Matching Bases** 🧮

Rewrite each side with a common base, then solve for $x$. *(Decimals or fractions are fine.)*

**1)** $3^{x} = 81 \\;\\Rightarrow\\; x = \\,?$
**2)** $2^{3x} = 32 \\;\\Rightarrow\\; x = \\,?$
**3)** $25^{x} = 125 \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '5/3', '3/2'],
          hint1: '$81 = 3^4$, so $x = 4$.',
          hint2: '$32 = 2^5$, so $3x = 5 \\Rightarrow x = \\frac{5}{3}$.',
          hint3: 'Base $5$: $5^{2x} = 5^3 \\Rightarrow 2x = 3 \\Rightarrow x = \\frac{3}{2}$.',
          explanation: '1) $3^x = 3^4 \\Rightarrow x = 4$.  2) $2^{3x} = 2^5 \\Rightarrow x = \\frac{5}{3}$.  3) $5^{2x} = 5^3 \\Rightarrow x = \\frac{3}{2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'exponential-equations-algebra2',
    sections: [
      {
        id: 'expeq3-intro',
        type: 'text' as const,
        content: `# 📈 Solving Exponential Equations

**Part 3 of 5 — Logarithms: The Tool for Every Other Case**

---

> 🔑 **Why we need logs:** $2^x = 10$ has *no* clean common base — $10$ isn't a power of $2$. The logarithm is the operation that finally answers "$2$ to what power gives $10$?"`,
      },
      {
        id: 'expeq3-deflog',
        type: 'text' as const,
        content: `## What a Logarithm Is

A logarithm is just an **exponent in disguise**. The statement

$$\\log_b N = x \\qquad \\text{means exactly} \\qquad b^x = N$$

Read $\\log_b N$ as "the power you raise $b$ to in order to get $N$."

| Logarithm form | Exponential form | Value |
|----------------|------------------|-------|
| $\\log_2 8$ | $2^x = 8$ | $3$ |
| $\\log_3 81$ | $3^x = 81$ | $4$ |
| $\\log_{10} 1000$ | $10^x = 1000$ | $3$ |
| $\\log_5 1$ | $5^x = 1$ | $0$ |

> 🔑 **The two-way switch:** $b^x = N \\;\\Longleftrightarrow\\; \\log_b N = x$. Logs and exponentials undo each other — they are inverse operations.`,
      },
      {
        id: 'expeq3-evallog',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\log_2 16$.',
              options: ['$4$', '$8$', '$2$', '$5$'],
              correctAnswer: 0,
              explanation: '$\\log_2 16$ asks "$2$ to what power is $16$?" Since $2^4 = 16$, the answer is $4$.',
            },
            {
              question: 'Rewrite $10^x = 4500$ in logarithmic form.',
              options: ['$x = \\log_{10} 4500$', '$x = \\log_{4500} 10$', '$x = 10 \\cdot 4500$', '$x = 4500^{10}$'],
              correctAnswer: 0,
              explanation: '$b^x = N \\Leftrightarrow \\log_b N = x$. With $b = 10$ and $N = 4500$, we get $x = \\log_{10} 4500$.',
            },
          ],
        },
      },
      {
        id: 'expeq3-special',
        type: 'text' as const,
        content: `## Two Logs Your Calculator Has

Most calculators only have **two** log buttons, so we lean on them:

- **Common log** $\\log x$ — base $10$ (the "$\\log$" key).
- **Natural log** $\\ln x$ — base $e$, where $e \\approx 2.718$ (the "$\\ln$" key).

These two are enough to solve *anything*, thanks to the **change-of-base formula**:

$$\\log_b N = \\frac{\\ln N}{\\ln b} = \\frac{\\log N}{\\log b}$$

### Example: Evaluate $\\log_5 20$

$$\\log_5 20 = \\frac{\\ln 20}{\\ln 5} \\approx \\frac{2.996}{1.609} \\approx 1.861$$

> 💡 You can divide by **either** $\\ln$ or $\\log$ — just be consistent on top and bottom. Both give the same answer.`,
      },
      {
        id: 'expeq3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Switch Between Forms** 🔽

Match each exponential statement to its logarithmic twin (and vice-versa).`,
        exercise: {
          dropdowns: [
            { label: '$3^4 = 81$ in log form:', options: ['$\\log_3 81 = 4$', '$\\log_4 81 = 3$', '$\\log_{81} 3 = 4$', '$\\log_3 4 = 81$'] },
            { label: '$\\log_2 32 = 5$ in exponential form:', options: ['$2^5 = 32$', '$5^2 = 32$', '$2^{32} = 5$', '$32^5 = 2$'] },
            { label: '$\\log_7 200$ rewritten with $\\ln$:', options: ['$\\dfrac{\\ln 200}{\\ln 7}$', '$\\dfrac{\\ln 7}{\\ln 200}$', '$\\ln 200 - \\ln 7$', '$\\ln(200 \\cdot 7)$'] },
          ],
          correctAnswers: ['$\\log_3 81 = 4$', '$2^5 = 32$', '$\\dfrac{\\ln 200}{\\ln 7}$'],
          hint1: '$b^x = N \\Leftrightarrow \\log_b N = x$; here $b = 3$, $x = 4$, $N = 81$.',
          hint2: '$\\log_2 32 = 5$ means $2$ raised to $5$ gives $32$.',
          hint3: 'Change of base: $\\log_b N = \\dfrac{\\ln N}{\\ln b}$ — the new number goes on top.',
          explanation: 'A log equation and an exponential equation are two views of the same fact; change-of-base puts any log in terms of $\\ln$ (numerator $= N$, denominator $= b$).',
        },
      },
      {
        id: 'expeq3-cob-note',
        type: 'text' as const,
        content: `## Using Change of Base in Practice

Your calculator can't compute $\\log_3 50$ directly, but change of base fixes that:

$$\\log_3 50 = \\frac{\\ln 50}{\\ln 3} = \\frac{3.912}{1.099} \\approx 3.56$$

> ✅ **Sanity check:** $3^{3.56} \\approx 50$, so the answer is reasonable — $\\log_3 50$ should land between $3$ (since $3^3 = 27$) and $4$ (since $3^4 = 81$), and $3.56$ does.`,
      },
      {
        id: 'expeq3-cob-drill',
        type: 'input-boxes' as const,
        content: `**Change of Base** 🧮

Use $\\log_b N = \\dfrac{\\ln N}{\\ln b}$. Round to **two decimal places**.

**1)** $\\log_3 50 = \\,?$
**2)** $\\log_2 10 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3.56', '3.32'],
          hint1: '$\\dfrac{\\ln 50}{\\ln 3} = \\dfrac{3.912}{1.099} \\approx 3.56$.',
          hint2: '$\\dfrac{\\ln 10}{\\ln 2} = \\dfrac{2.303}{0.693} \\approx 3.32$.',
          hint3: 'Put the number you want the log *of* on top, and the base on the bottom.',
          explanation: '1) $\\log_3 50 \\approx 3.56$.  2) $\\log_2 10 \\approx 3.32$. Check #1: $3^{3.56} \\approx 50$ ✓.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'exponential-equations-algebra2',
    sections: [
      {
        id: 'expeq4-intro',
        type: 'text' as const,
        content: `# 📈 Solving Exponential Equations

**Part 4 of 5 — Solving with Logs & Real Applications**

---

> 🔑 **The Move:** When bases won't match, take the log (or $\\ln$) of **both sides**, then use $\\ln(b^x) = x \\ln b$ to bring the exponent *down* where you can solve for it.`,
      },
      {
        id: 'expeq4-takelog',
        type: 'text' as const,
        content: `## Taking the Log of Both Sides

The power rule of logs, $\\log(b^x) = x \\log b$, is what frees the exponent.

### Worked Example: $5^x = 20$

$$\\ln(5^x) = \\ln 20 \\;\\Rightarrow\\; x \\ln 5 = \\ln 20 \\;\\Rightarrow\\; x = \\frac{\\ln 20}{\\ln 5} \\approx 1.86$$

### Worked Example: $e^{x} = 7$

Because the base is $e$, use $\\ln$ — and $\\ln(e^x) = x$:

$$\\ln(e^x) = \\ln 7 \\;\\Rightarrow\\; x = \\ln 7 \\approx 1.95$$

> 💡 **Rule of thumb:** base $e$ → use $\\ln$; base $10$ → use $\\log$; any other base → use either, with change-of-base.`,
      },
      {
        id: 'expeq4-takelog-dropdown',
        type: 'dropdown-select' as const,
        content: `**Bring the Exponent Down** 🔽

You're solving $3^x = 50$ by taking $\\ln$ of both sides. Choose each step.`,
        exercise: {
          dropdowns: [
            { label: 'Take $\\ln$ of both sides:', options: ['$\\ln(3^x) = \\ln 50$', '$\\ln 3 = \\ln(50^x)$', '$x = \\ln 50$', '$3 = \\ln 50$'] },
            { label: 'Bring the exponent down:', options: ['$x \\ln 3 = \\ln 50$', '$3 \\ln x = \\ln 50$', '$\\ln 3 = x \\ln 50$', '$x = 3 \\ln 50$'] },
            { label: 'Solve for $x$:', options: ['$x = \\dfrac{\\ln 50}{\\ln 3}$', '$x = \\dfrac{\\ln 3}{\\ln 50}$', '$x = \\ln 50 - \\ln 3$', '$x = \\ln 50 \\cdot \\ln 3$'] },
          ],
          correctAnswers: ['$\\ln(3^x) = \\ln 50$', '$x \\ln 3 = \\ln 50$', '$x = \\dfrac{\\ln 50}{\\ln 3}$'],
          hint1: 'Apply $\\ln$ to each side without changing anything else.',
          hint2: 'The power rule $\\ln(b^x) = x \\ln b$ moves the exponent to the front.',
          hint3: 'Divide both sides by $\\ln 3$ to isolate $x$: $x = \\dfrac{\\ln 50}{\\ln 3} \\approx 3.56$.',
          explanation: '$\\ln(3^x) = \\ln 50 \\Rightarrow x \\ln 3 = \\ln 50 \\Rightarrow x = \\dfrac{\\ln 50}{\\ln 3} \\approx 3.56$.',
        },
      },
      {
        id: 'expeq4-isolate',
        type: 'text' as const,
        content: `## Isolate the Power First

If something is multiplied onto (or added to) the exponential, undo that **before** taking a log.

### Worked Example: $4 \\cdot 3^{x} = 36$

Divide by $4$ first: $\\;3^x = 9$. Now it's a same-base problem!

$$3^x = 3^2 \\;\\Rightarrow\\; x = 2$$

### Worked Example: $e^{3x} = 20$

The power is already alone, so take $\\ln$:

$$3x = \\ln 20 \\;\\Rightarrow\\; x = \\frac{\\ln 20}{3} \\approx 1.00$$

> ⚠️ **Order matters.** In $4 \\cdot 3^x = 36$ you must divide by $4$ *first*. Taking a log of $4 \\cdot 3^x$ before isolating creates a mess ($\\ln 4 + x\\ln 3$) — correct, but far harder.`,
      },
      {
        id: 'expeq4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $e^x = 7$ exactly.',
              options: ['$x = \\ln 7$', '$x = \\log 7$', '$x = 7e$', '$x = e^7$'],
              correctAnswer: 0,
              explanation: 'Take $\\ln$ of both sides: $\\ln(e^x) = \\ln 7$, and $\\ln(e^x) = x$, so $x = \\ln 7 \\approx 1.95$.',
            },
            {
              question: 'First step to solve $4 \\cdot 3^x = 36$?',
              options: ['Divide both sides by $4$', 'Take $\\ln$ of both sides', 'Subtract $4$', 'Divide by $3$'],
              correctAnswer: 0,
              explanation: 'Isolate the power: divide by $4$ to get $3^x = 9$, which is then an easy same-base equation ($x = 2$).',
            },
          ],
        },
      },
      {
        id: 'expeq4-apps',
        type: 'text' as const,
        content: `## Where This Shows Up: Growth & Decay

Exponential equations model money, populations, and radioactive decay. Solving them means finding a **time**.

### Compound Interest: How long to double \\$1000 at 5%?

The balance is $A = 1000(1.05)^t$. Set $A = 2000$:

$$1000(1.05)^t = 2000 \\;\\Rightarrow\\; 1.05^t = 2 \\;\\Rightarrow\\; t = \\frac{\\ln 2}{\\ln 1.05} \\approx 14.2 \\text{ years}$$

### Half-Life Decay: $80$ mg, halving every $6$ hours, down to $10$ mg?

$$80\\left(\\tfrac{1}{2}\\right)^{t/6} = 10 \\;\\Rightarrow\\; \\left(\\tfrac{1}{2}\\right)^{t/6} = \\tfrac{1}{8} = \\left(\\tfrac{1}{2}\\right)^3 \\;\\Rightarrow\\; \\tfrac{t}{6} = 3 \\;\\Rightarrow\\; t = 18 \\text{ hours}$$

> 💡 Notice the decay problem reduced to a **same-base** equation — always check whether the numbers line up before reaching for a calculator log.`,
      },
      {
        id: 'expeq4-app-drill',
        type: 'input-boxes' as const,
        content: `**Application Practice** 🧮

**1)** Solve $2^x = 10$ for $x$, rounded to **two decimals**.
**2)** A \\$500 investment grows as $500(1.04)^t$. To reach \\$2000 you need $1.04^t = 4$. Find $t = \\dfrac{\\ln 4}{\\ln 1.04}$, rounded to the **nearest whole year**.
**3)** Solve $500 \\cdot 2^{\\,t/10} = 4000$ exactly (it's a same-base problem): $t = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3.32', '35', '30'],
          hint1: '$x = \\dfrac{\\ln 10}{\\ln 2} \\approx 3.32$.',
          hint2: '$t = \\dfrac{\\ln 4}{\\ln 1.04} = \\dfrac{1.386}{0.0392} \\approx 35.3 \\to 35$ years.',
          hint3: '$2^{t/10} = 8 = 2^3 \\Rightarrow \\frac{t}{10} = 3 \\Rightarrow t = 30$.',
          explanation: '1) $x \\approx 3.32$.  2) $t \\approx 35$ years.  3) $500 \\cdot 2^{t/10} = 4000 \\Rightarrow 2^{t/10} = 8 = 2^3 \\Rightarrow t = 30$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'exponential-equations-algebra2',
    sections: [
      {
        id: 'expeq5-intro',
        type: 'text' as const,
        content: `# 📈 Solving Exponential Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) match common bases, (2) read a log as an exponent, (3) change base with $\\ln$, and (4) solve real growth/decay problems. Time to mix it all together — plus one new twist.`,
      },
      {
        id: 'expeq5-quadform',
        type: 'text' as const,
        content: `## A New Twist: Quadratic in Form

Some equations hide a quadratic inside. Watch for $b^{2x}$, which equals $(b^x)^2$.

### Worked Example: $2^{2x} - 5 \\cdot 2^{x} + 4 = 0$

Let $u = 2^x$. Then $2^{2x} = (2^x)^2 = u^2$:

$$u^2 - 5u + 4 = 0 \\;\\Rightarrow\\; (u - 1)(u - 4) = 0 \\;\\Rightarrow\\; u = 1 \\text{ or } u = 4$$

Now switch back to $x$ using $u = 2^x$:

$$2^x = 1 \\Rightarrow x = 0, \\qquad 2^x = 4 \\Rightarrow x = 2$$

> ⚠️ **Don't stop at $u$.** The variable is $x$, not $u$. You must replace $u$ with $2^x$ and solve for $x$ at the end. Also: if a $u$-value is **negative or zero**, discard it — $b^x$ is always positive.`,
      },
      {
        id: 'expeq5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $3^{x+2} = 3^{2x - 1}$.',
              options: ['$x = 3$', '$x = 1$', '$x = -1$', '$x = \\tfrac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Same base, so $x + 2 = 2x - 1 \\Rightarrow 3 = x$. Check: exponents $3+2 = 5$ and $2(3)-1 = 5$ ✓.',
            },
            {
              question: 'Using $u = 2^x$, the equation $2^{2x} - 5 \\cdot 2^x + 4 = 0$ becomes:',
              options: ['$u^2 - 5u + 4 = 0$', '$2u - 5u + 4 = 0$', '$u^2 - 5u^2 + 4 = 0$', '$u - 5u + 4 = 0$'],
              correctAnswer: 0,
              explanation: '$2^{2x} = (2^x)^2 = u^2$ and $2^x = u$, so the equation becomes $u^2 - 5u + 4 = 0$.',
            },
          ],
        },
      },
      {
        id: 'expeq5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Strategy |
|-----------|----------|
| Both sides share a base (or can) | Match bases, set exponents equal |
| Bases can't match | Take $\\ln$/$\\log$ of both sides |
| Base is $e$ / base is $10$ | Use $\\ln$ / use $\\log$ |
| Need $\\log_b N$ on a calculator | $\\dfrac{\\ln N}{\\ln b}$ (change of base) |
| Coefficient on the power | **Isolate** the power first |
| $b^{2x}$ appears | Substitute $u = b^x$ (quadratic in form) |

> 🔑 **The golden order:** isolate the power → match bases if you can → otherwise take a log → solve → and **check** by plugging back in.`,
      },
      {
        id: 'expeq5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Solve** 🧮

**1)** $6^x = 216 \\;\\Rightarrow\\; x = \\,?$  *(same base — exact answer)*
**2)** $e^{x} = 0.5 \\;\\Rightarrow\\; x = \\ln(0.5) = \\,?$  *(round to two decimals)*
**3)** From $2^{2x} - 5\\cdot 2^x + 4 = 0$, the two solutions are $x = 0$ and $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-0.69', '2'],
          hint1: '$216 = 6^3$, so $x = 3$.',
          hint2: '$\\ln(0.5) \\approx -0.693$; rounded, $-0.69$. (Negative because $0.5 < 1$.)',
          hint3: '$u = 4$ gives $2^x = 4 = 2^2 \\Rightarrow x = 2$.',
          explanation: '1) $6^x = 6^3 \\Rightarrow x = 3$.  2) $x = \\ln 0.5 \\approx -0.69$.  3) The roots $u = 1, 4$ give $2^x = 1 \\Rightarrow x = 0$ and $2^x = 4 \\Rightarrow x = 2$.',
        },
      },
      {
        id: 'expeq5-wrapup',
        type: 'text' as const,
        content: `## You're Ready

You started by asking "to what power?" and now you have a full toolkit:

- **Same base** → set exponents equal (exact, no rounding).
- **No common base** → take $\\ln$ or $\\log$ and use $\\ln(b^x) = x\\ln b$.
- **$\\log_b N$ on a calculator** → change of base, $\\dfrac{\\ln N}{\\ln b}$.
- **$b^{2x}$ pattern** → substitute $u = b^x$ and factor.

> 🔑 **One last reminder:** $b^x$ is **always positive**. If an answer would require $b^x \\le 0$, that branch has no real solution. The Exit Quiz below confirms you've got it.`,
      },
      {
        id: 'expeq5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Solve $9^x = 27$.',
              options: ['$x = \\tfrac{3}{2}$', '$x = 3$', '$x = \\tfrac{2}{3}$', '$x = 18$'],
              correctAnswer: 0,
              explanation: 'Base $3$: $(3^2)^x = 3^3 \\Rightarrow 3^{2x} = 3^3 \\Rightarrow 2x = 3 \\Rightarrow x = \\tfrac{3}{2}$.',
            },
            {
              question: 'Which expression equals the exact solution of $5^x = 20$?',
              options: ['$\\dfrac{\\ln 20}{\\ln 5}$', '$\\dfrac{\\ln 5}{\\ln 20}$', '$\\ln 20 - \\ln 5$', '$20 \\ln 5$'],
              correctAnswer: 0,
              explanation: 'Take $\\ln$: $x \\ln 5 = \\ln 20 \\Rightarrow x = \\dfrac{\\ln 20}{\\ln 5} \\approx 1.86$.',
            },
            {
              question: '$\\log_2 64 = ?$',
              options: ['$6$', '$8$', '$32$', '$5$'],
              correctAnswer: 0,
              explanation: '$\\log_2 64$ asks "$2$ to what power is $64$?" Since $2^6 = 64$, the answer is $6$.',
            },
          ],
        },
      },
    ],
  },
]
