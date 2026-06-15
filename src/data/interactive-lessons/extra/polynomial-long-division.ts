import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polynomial Long Division (Algebra 2).
 * Registry key: 'polynomial-long-division' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-long-division',
    sections: [
      {
        id: 'pld1-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Long Division

**Part 1 of 5 — Why Divide Polynomials?**

---

### Topics in This Part

| Section |
|---------|
| The Division Vocabulary |
| The Division Algorithm |
| Standard Form & Placeholders |

> 🔑 **Key Concept:** Polynomial long division works *exactly* like the long division you learned for whole numbers — you just divide, multiply, subtract, and bring down. The numbers are replaced by terms like $x^2$ and $3x$, but the rhythm is identical.`,
      },
      {
        id: 'pld1-vocab',
        type: 'text' as const,
        content: `## The Division Vocabulary

Every division problem has the same four roles. Compare arithmetic to polynomials:

| Role | Arithmetic | Polynomial |
|------|-----------|------------|
| **Dividend** (what you split) | $17$ | $x^2 + 5x + 6$ |
| **Divisor** (what you split by) | $5$ | $x + 2$ |
| **Quotient** (the answer) | $3$ | $x + 3$ |
| **Remainder** (what's left) | $2$ | $0$ |

We write the result the same way too. For $17 \\div 5$:

$$17 = 5 \\cdot 3 + 2 \\qquad\\Longleftrightarrow\\qquad \\frac{17}{5} = 3 + \\frac{2}{5}$$

For polynomials, $\\dfrac{x^2+5x+6}{x+2} = x + 3$ with remainder $0$, because $(x+2)(x+3) = x^2+5x+6$ exactly.

> 💡 The remainder must always be **"smaller"** than the divisor. With numbers that means a smaller value; with polynomials it means a **lower degree**.`,
      },
      {
        id: 'pld1-vocab-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\dfrac{2x^3 - x + 4}{x - 3}$, which polynomial is the **divisor**?',
              options: ['$x - 3$', '$2x^3 - x + 4$', '$2x^3$', '$x$'],
              correctAnswer: 0,
              explanation: 'The divisor is what you divide *by* — the polynomial on the bottom of the fraction (or outside the long-division bracket). Here that is $x - 3$.',
            },
            {
              question: 'When you divide a polynomial by $x - 3$, the remainder must have degree:',
              options: ['less than $1$ (so it is a constant or $0$)', 'exactly $1$', 'less than $3$', 'equal to the dividend',],
              correctAnswer: 0,
              explanation: 'The remainder must have lower degree than the divisor. The divisor $x-3$ has degree $1$, so the remainder has degree less than $1$ — i.e. a constant (or $0$).',
            },
          ],
        },
      },
      {
        id: 'pld1-standard-form',
        type: 'text' as const,
        content: `## Standard Form & Placeholders

Before dividing, **always** write both polynomials in **standard form** (highest power first) and **fill every gap** with a zero coefficient.

If a power is missing, insert it as $0 \\cdot x^n$. This keeps your columns lined up — just like writing $204$ instead of "$2\\;\\;4$" so the place values don't shift.

### Example

$$x^3 - 8 \\quad\\longrightarrow\\quad x^3 + 0x^2 + 0x - 8$$

$$2x^4 - 3x + 1 \\quad\\longrightarrow\\quad 2x^4 + 0x^3 + 0x^2 - 3x + 1$$

> ⚠️ **The #1 cause of wrong answers** in polynomial division is forgetting a placeholder. A missing $x^2$ or $x$ term silently shifts everything and corrupts the result.`,
      },
      {
        id: 'pld1-standard-form-dropdown',
        type: 'dropdown-select' as const,
        content: `**Standard Form & Placeholders** 🔽

Choose the correct full standard form for each polynomial.`,
        exercise: {
          dropdowns: [
            { label: '$5 + x^2$ in standard form:', options: ['$x^2 + 0x + 5$', '$5 + x^2$', '$x^2 + 5x$', '$0x^2 + x + 5$'] },
            { label: '$x^3 - 8$ with placeholders:', options: ['$x^3 + 0x^2 + 0x - 8$', '$x^3 - 8x^2 - 8$', '$x^3 + 0x - 8$', '$x^3 - 0x^2 - 8$'] },
          ],
          correctAnswers: ['$x^2 + 0x + 5$', '$x^3 + 0x^2 + 0x - 8$'],
          hint1: 'Standard form means highest power first, then fill every missing power with a $0$ coefficient.',
          hint2: '$5 + x^2 = x^2 + 0x + 5$ — the $x$ term is missing, so insert $0x$.',
          hint3: '$x^3 - 8$ is missing both $x^2$ and $x$, so write $x^3 + 0x^2 + 0x - 8$.',
          explanation: 'Reorder highest-to-lowest power and insert a $0$ for every gap: $x^2 + 0x + 5$ and $x^3 + 0x^2 + 0x - 8$.',
        },
      },
      {
        id: 'pld1-degree-note',
        type: 'text' as const,
        content: `## One More Idea: Degree

The **degree** of a polynomial is its highest exponent — $x^4 - 5$ has degree $4$, and $x - 1$ has degree $1$. Degree is what tells you *when to stop* dividing (you'll use it in every problem from here on).

Counting placeholders is just counting the missing powers between the top degree and the constant.`,
      },
      {
        id: 'pld1-placeholder-drill',
        type: 'input-boxes' as const,
        content: `**Count the Placeholders** 🧮

To divide $x^4 - 5$ by $x - 1$, you first rewrite the dividend with placeholders:

$$x^4 + 0x^3 + 0x^2 + 0x - 5$$

**1)** How many **placeholder** terms (terms with coefficient $0$) did you have to insert?
**2)** What is the **degree** of the dividend $x^4 - 5$?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '4'],
          hint1: 'List the powers from $x^4$ down to $x^0$: which ones are missing in $x^4 - 5$?',
          hint2: 'The original has $x^4$ and the constant $-5$; the $x^3$, $x^2$, and $x$ terms are all missing.',
          hint3: 'Degree = the highest exponent. For $x^4 - 5$ that is $4$.',
          explanation: 'You insert placeholders for $x^3$, $x^2$, and $x$ — that is $3$ placeholders. The degree of $x^4 - 5$ is $4$ (the highest power present).',
        },
      },
      {
        id: 'pld1-outro',
        type: 'text' as const,
        content: `## You're Set Up to Divide

You now know the vocabulary (**dividend, divisor, quotient, remainder**), the rule that the remainder is always lower degree than the divisor, and the must-do prep step of **standard form + placeholders**.

In **Part 2** we run the full divide–multiply–subtract–bring-down loop on a real example.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polynomial-long-division',
    sections: [
      {
        id: 'pld2-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Long Division

**Part 2 of 5 — The Four-Step Loop**

---

> 🔑 **The Loop:** Every step of polynomial long division repeats four moves — **Divide, Multiply, Subtract, Bring down** (D-M-S-B). Memorize this rhythm and the whole method becomes mechanical.`,
      },
      {
        id: 'pld2-steps',
        type: 'text' as const,
        content: `## The Four Steps

To divide, you repeat this loop until the leftover has lower degree than the divisor:

1. **Divide** the *leading term* of the current dividend by the *leading term* of the divisor. This gives the next term of the quotient.
2. **Multiply** that quotient term by the *entire* divisor.
3. **Subtract** the product from the current dividend.
4. **Bring down** the next term and repeat.

> ⚠️ **Subtracting flips signs.** When you subtract a product, change the sign of *every* term you're subtracting. Distributing that minus sign is where most arithmetic errors happen.`,
      },
      {
        id: 'pld2-worked',
        type: 'text' as const,
        content: `## Worked Example: $(x^2 + 5x + 6) \\div (x + 2)$

**Step 1 — Divide:** Leading terms: $\\dfrac{x^2}{x} = x$. First quotient term is $x$.

**Step 2 — Multiply:** $x(x+2) = x^2 + 2x$.

**Step 3 — Subtract:**
$$(x^2 + 5x) - (x^2 + 2x) = 3x$$

**Step 4 — Bring down** the $+6$: now we have $3x + 6$.

**Repeat — Divide:** $\\dfrac{3x}{x} = 3$. Next quotient term is $+3$.

**Multiply:** $3(x+2) = 3x + 6$.

**Subtract:** $(3x+6) - (3x+6) = 0$.

$$\\frac{x^2+5x+6}{x+2} = x + 3 \\quad\\text{(remainder } 0\\text{)}$$

> ✅ **Check:** $(x+2)(x+3) = x^2 + 5x + 6$ ✓`,
      },
      {
        id: 'pld2-step-dropdown',
        type: 'dropdown-select' as const,
        content: `**Track the Loop** 🔽

You're dividing $(x^2 + 7x + 10) \\div (x + 2)$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First quotient term ($x^2 \\div x$):', options: ['$x$', '$x^2$', '$2x$', '$7x$'] },
            { label: 'Multiply that term by $(x+2)$:', options: ['$x^2 + 2x$', '$x^2 + 7x$', '$x^2 + 2$', '$x + 2$'] },
            { label: 'Subtract to get:', options: ['$5x$', '$9x$', '$5x + 10$', '$7x$'] },
            { label: 'Bring down $+10$, then $5x \\div x$ gives:', options: ['$5$', '$10$', '$2$', '$5x$'] },
          ],
          correctAnswers: ['$x$', '$x^2 + 2x$', '$5x$', '$5$'],
          hint1: 'Divide the leading terms first: $x^2 \\div x = x$.',
          hint2: 'Distribute: $x \\cdot (x+2) = x^2 + 2x$.',
          hint3: '$(x^2 + 7x) - (x^2 + 2x) = 5x$. Bring down $+10$ to get $5x + 10$; then $5x \\div x = 5$.',
          explanation: 'The quotient is $x + 5$ with remainder $0$. Check: $(x+2)(x+5) = x^2 + 7x + 10$ ✓.',
        },
      },
      {
        id: 'pld2-sign-warning',
        type: 'text' as const,
        content: `## The Subtraction Trap

Step 3 (**Subtract**) trips up more students than any other. Remember: you are subtracting an entire expression, so the minus sign hits **every** term.

$$(x^2 + 7x) - (x^2 + 2x) = x^2 + 7x - x^2 - 2x = 5x$$

A reliable trick: mentally **flip the sign of each term** in the product, then *add*. Try the next check on exactly this skill.`,
      },
      {
        id: 'pld2-subtract-check',
        type: 'multiple-choice' as const,
        content: `**Watch the Signs** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You need to compute $(2x^2 - 3x) - (2x^2 + 4x)$. What is the result?',
              options: ['$-7x$', '$x$', '$7x$', '$-x$'],
              correctAnswer: 0,
              explanation: 'Distribute the minus sign: $2x^2 - 3x - 2x^2 - 4x$. The $2x^2$ terms cancel, leaving $-3x - 4x = -7x$. Forgetting to flip the $+4x$ to $-4x$ is the classic error.',
            },
          ],
        },
      },
      {
        id: 'pld2-loop-recap',
        type: 'text' as const,
        content: `## Putting the Loop Together

You now have all four moves. The complete rhythm for one full division is:

> 🔑 **D-M-S-B:** **D**ivide leading terms → **M**ultiply by the whole divisor → **S**ubtract (flip signs!) → **B**ring down the next term → repeat.

Run the full loop yourself on the next two problems — both divide evenly, so a leftover of $0$ confirms you did it right.`,
      },
      {
        id: 'pld2-quotient-drill',
        type: 'input-boxes' as const,
        content: `**Run the Loop** 🧮

Divide each. Every one comes out with **remainder $0$**, so enter the quotient's pieces.

**1)** $(x^2 + 9x + 20) \\div (x + 4) = x + \\,?$
**2)** $(x^2 - 7x + 12) \\div (x - 3) = x + \\,?$  *(enter the constant, including its sign)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '-4'],
          hint1: 'For (1): $x^2 \\div x = x$; $x(x+4)=x^2+4x$; subtract to get $5x+20$; $5x \\div x = 5$.',
          hint2: 'For (2): $x^2 \\div x = x$; $x(x-3)=x^2-3x$; subtract to get $-4x+12$; $-4x \\div x = -4$.',
          hint3: 'Check by multiplying back: $(x+4)(x+5)=x^2+9x+20$; $(x-3)(x-4)=x^2-7x+12$.',
          explanation: '1) Quotient $x+5$, so the constant is $5$. 2) Quotient $x-4$, so the constant is $-4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-long-division',
    sections: [
      {
        id: 'pld3-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Long Division

**Part 3 of 5 — Remainders & Placeholders**

---

> 🔑 **Reality Check:** Most divisions do **not** come out evenly. When a remainder is left over, we write the answer as $\\text{quotient} + \\dfrac{\\text{remainder}}{\\text{divisor}}$ — exactly like a mixed number.`,
      },
      {
        id: 'pld3-remainder',
        type: 'text' as const,
        content: `## Writing a Remainder

When the leftover has lower degree than the divisor, you **stop** — that leftover is the remainder $R$. The complete answer is:

$$\\frac{\\text{dividend}}{\\text{divisor}} = \\text{quotient} + \\frac{R}{\\text{divisor}}$$

### Worked Example: $(x^2 + 4x + 7) \\div (x + 1)$

**Divide:** $x^2 \\div x = x$. **Multiply:** $x(x+1) = x^2 + x$. **Subtract:** $(x^2+4x) - (x^2+x) = 3x$. **Bring down** $+7$: now $3x + 7$.

**Divide:** $3x \\div x = 3$. **Multiply:** $3(x+1) = 3x + 3$. **Subtract:** $(3x+7) - (3x+3) = 4$.

$4$ has degree $0$, lower than the divisor's degree $1$, so we stop. The remainder is $4$:

$$\\frac{x^2+4x+7}{x+1} = x + 3 + \\frac{4}{x+1}$$

> ✅ **Check:** $(x+1)(x+3) + 4 = x^2 + 4x + 3 + 4 = x^2 + 4x + 7$ ✓`,
      },
      {
        id: 'pld3-remainder-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A division gives quotient $2x - 1$ and remainder $5$ when dividing by $x + 3$. The full answer is:',
              options: ['$2x - 1 + \\dfrac{5}{x+3}$', '$2x - 1 + \\dfrac{x+3}{5}$', '$2x - 1 - \\dfrac{5}{x+3}$', '$\\dfrac{2x-1}{x+3} + 5$'],
              correctAnswer: 0,
              explanation: 'The result is always quotient plus remainder-over-divisor: $2x - 1 + \\dfrac{5}{x+3}$.',
            },
            {
              question: 'While dividing by $x^2 + 1$, you reach a leftover of $3x - 2$. Should you keep going?',
              options: ['No — its degree ($1$) is already lower than the divisor\'s degree ($2$), so it is the remainder.', 'Yes — keep dividing until the leftover is $0$.', 'Yes — until the leftover is a constant.', 'No — but only because it has two terms.'],
              correctAnswer: 0,
              explanation: 'You stop when the leftover has lower degree than the divisor. The divisor has degree $2$; $3x - 2$ has degree $1$, which is lower, so $3x - 2$ is the remainder.',
            },
          ],
        },
      },
      {
        id: 'pld3-placeholder-worked',
        type: 'text' as const,
        content: `## When Terms Are Missing

### Worked Example: $(x^3 - 7x - 6) \\div (x - 3)$

There's no $x^2$ term, so rewrite the dividend **with a placeholder**: $x^3 + 0x^2 - 7x - 6$.

| Step | Divide | Multiply | Subtract → leftover |
|------|--------|----------|---------------------|
| 1 | $x^3 \\div x = x^2$ | $x^2(x-3) = x^3 - 3x^2$ | $0x^2 - (-3x^2) = 3x^2$, bring down $-7x$ → $3x^2 - 7x$ |
| 2 | $3x^2 \\div x = 3x$ | $3x(x-3) = 3x^2 - 9x$ | $-7x - (-9x) = 2x$, bring down $-6$ → $2x - 6$ |
| 3 | $2x \\div x = 2$ | $2(x-3) = 2x - 6$ | $(2x-6)-(2x-6) = 0$ |

$$\\frac{x^3 - 7x - 6}{x - 3} = x^2 + 3x + 2 \\quad\\text{(remainder } 0\\text{)}$$

> ✅ **Check:** $(x-3)(x^2+3x+2) = x^3 + 3x^2 + 2x - 3x^2 - 9x - 6 = x^3 - 7x - 6$ ✓`,
      },
      {
        id: 'pld3-placeholder-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up With Placeholders** 🔽

You're about to divide $2x^3 - 5$ by $x + 1$.`,
        exercise: {
          dropdowns: [
            { label: 'Rewrite the dividend in full standard form:', options: ['$2x^3 + 0x^2 + 0x - 5$', '$2x^3 - 5x^2 + 0x + 0$', '$2x^3 + 0x - 5$', '$2x^3 - 5$'] },
            { label: 'First quotient term ($2x^3 \\div x$):', options: ['$2x^2$', '$2x^3$', '$2x$', '$x^2$'] },
            { label: 'Multiply that term by $(x+1)$:', options: ['$2x^3 + 2x^2$', '$2x^3 + 2x$', '$2x^3 + x^2$', '$2x^2 + 2x$'] },
          ],
          correctAnswers: ['$2x^3 + 0x^2 + 0x - 5$', '$2x^2$', '$2x^3 + 2x^2$'],
          hint1: 'Fill every missing power from $x^3$ down to the constant with a $0$ coefficient.',
          hint2: 'Divide leading terms: $2x^3 \\div x = 2x^2$.',
          hint3: 'Distribute: $2x^2(x+1) = 2x^3 + 2x^2$.',
          explanation: 'Placeholders give $2x^3 + 0x^2 + 0x - 5$. The first quotient term is $2x^2$, and $2x^2(x+1) = 2x^3 + 2x^2$.',
        },
      },
      {
        id: 'pld3-stop-rule',
        type: 'text' as const,
        content: `## Knowing When to Stop

You keep looping until the leftover's **degree drops below the divisor's degree**. With a degree-$1$ divisor like $x + 1$, you stop as soon as the leftover is a **constant** — that constant is your remainder.

On the next drill, run each division all the way down and report the final constant left over.`,
      },
      {
        id: 'pld3-remainder-drill',
        type: 'input-boxes' as const,
        content: `**Find the Remainder** 🧮

Divide and report the **remainder** (a single number, with its sign).

**1)** $(x^2 + 2x + 5) \\div (x + 1)$.  Remainder $= \\,?$
**2)** $(x^2 - 3x + 10) \\div (x - 2)$.  Remainder $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '8'],
          hint1: 'For (1): quotient starts $x$; $x(x+1)=x^2+x$; subtract → $x+5$; then $1$; $1(x+1)=x+1$; subtract → $4$.',
          hint2: 'For (2): quotient starts $x$; $x(x-2)=x^2-2x$; subtract → $-x+10$; then $-1$; $-1(x-2)=-x+2$; subtract → $8$.',
          hint3: 'Check (1): $(x+1)(x+1)+4 = x^2+2x+1+4 = x^2+2x+5$ ✓. Check (2): $(x-2)(x-1)+8 = x^2-3x+2+8 = x^2-3x+10$ ✓.',
          explanation: '1) Quotient $x+1$, remainder $4$. 2) Quotient $x-1$, remainder $8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-long-division',
    sections: [
      {
        id: 'pld4-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Long Division

**Part 4 of 5 — The Remainder & Factor Theorems**

---

> 🔑 **Big Payoff:** Division isn't just busywork. The **Remainder Theorem** lets you find a remainder *without* dividing, and the **Factor Theorem** turns division into a tool for **factoring** and **finding roots**.`,
      },
      {
        id: 'pld4-remainder-theorem',
        type: 'text' as const,
        content: `## The Remainder Theorem

> 🔑 **Remainder Theorem:** When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$.

So to find the remainder of $P(x) \\div (x - c)$, just **plug $c$ into $P$** — no long division needed.

### Example: remainder of $(x^2 + 4x + 7) \\div (x + 1)$

Here the divisor is $x - (-1)$, so $c = -1$:

$$P(-1) = (-1)^2 + 4(-1) + 7 = 1 - 4 + 7 = 4$$

The remainder is $4$ — matching the long division we did in Part 3. ✓

> ⚠️ **Mind the sign of $c$.** Dividing by $x + 1$ means $c = -1$, not $+1$. Set the divisor equal to zero: $x + 1 = 0 \\Rightarrow x = -1$.`,
      },
      {
        id: 'pld4-remainder-theorem-drill',
        type: 'input-boxes' as const,
        content: `**Remainder Theorem Shortcut** 🧮

Use $P(c)$ to find each remainder. Set the divisor $= 0$ to get $c$ first.

**1)** $P(x) = x^2 - 5x + 3$ divided by $(x - 2)$.  Remainder $= P(2) = \\,?$
**2)** $P(x) = x^3 + 2x - 1$ divided by $(x + 1)$.  Remainder $= P(-1) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-3', '-4'],
          hint1: 'For (1): $c = 2$. Compute $2^2 - 5(2) + 3$.',
          hint2: 'For (2): $x + 1 = 0$ gives $c = -1$. Compute $(-1)^3 + 2(-1) - 1$.',
          hint3: '$P(2) = 4 - 10 + 3 = -3$.  $P(-1) = -1 - 2 - 1 = -4$.',
          explanation: '1) $P(2) = 4 - 10 + 3 = -3$. 2) $P(-1) = -1 - 2 - 1 = -4$. Each remainder is just the polynomial evaluated at $c$.',
        },
      },
      {
        id: 'pld4-factor-theorem',
        type: 'text' as const,
        content: `## The Factor Theorem

The Factor Theorem is the special case where the remainder is **zero**:

> 🔑 **Factor Theorem:** $(x - c)$ is a factor of $P(x)$ **if and only if** $P(c) = 0$.

In words: if dividing by $(x - c)$ leaves no remainder, then $(x - c)$ divides evenly — it's a factor — and $c$ is a **root** (a zero) of $P$.

### Example: Is $(x - 2)$ a factor of $P(x) = x^3 - 3x^2 + 4x - 4$?

$$P(2) = 8 - 12 + 8 - 4 = 0$$

Yes! Since $P(2) = 0$, $(x - 2)$ is a factor. Dividing then peels it off:

$$\\frac{x^3 - 3x^2 + 4x - 4}{x - 2} = x^2 - x + 2$$

So $P(x) = (x - 2)(x^2 - x + 2)$.

> 💡 This is the everyday workflow for factoring cubics: **test** a value with the Factor Theorem, then **divide** to get the leftover quadratic.`,
      },
      {
        id: 'pld4-factor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $P(5) = 0$, which statement is guaranteed true?',
              options: ['$(x - 5)$ is a factor of $P(x)$', '$(x + 5)$ is a factor of $P(x)$', 'The remainder of $P(x) \\div (x-5)$ is $5$', '$P(x)$ has degree $5$'],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, $P(c) = 0$ means $(x - c)$ is a factor. With $c = 5$, the factor is $(x - 5)$, and the remainder of that division is $0$.',
            },
            {
              question: 'You divide $P(x)$ by $(x + 4)$ and the remainder is $0$. What is a root of $P(x)$?',
              options: ['$x = -4$', '$x = 4$', '$x = 0$', '$x = \\dfrac{1}{4}$'],
              correctAnswer: 0,
              explanation: 'Remainder $0$ means $(x + 4)$ is a factor, i.e. $(x - (-4))$. So $c = -4$ is a root: $P(-4) = 0$.',
            },
          ],
        },
      },
      {
        id: 'pld4-test-workflow',
        type: 'text' as const,
        content: `## The Test-Then-Divide Workflow

Putting the two theorems together gives a powerful routine for factoring:

1. **Test** small values ($1, -1, 2, -2, \\dots$) by computing $P(c)$.
2. When you find $P(c) = 0$, you've found a factor $(x - c)$.
3. **Divide** by $(x - c)$ to peel it off and reveal the remaining factor.

Walk through this routine in the next check.`,
      },
      {
        id: 'pld4-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Test for Factors** 🔽

Let $P(x) = x^3 - 4x^2 + x + 6$.`,
        exercise: {
          dropdowns: [
            { label: '$P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6$ equals:', options: ['$0$', '$2$', '$-12$', '$4$'] },
            { label: 'Therefore $(x + 1)$ is:', options: ['a factor of $P(x)$', 'not a factor of $P(x)$', 'the remainder', 'the quotient'] },
            { label: 'And $x = -1$ is:', options: ['a root of $P(x)$', 'the degree of $P(x)$', 'a remainder', 'undefined'] },
          ],
          correctAnswers: ['$0$', 'a factor of $P(x)$', 'a root of $P(x)$'],
          hint1: 'Carefully evaluate: $(-1)^3 = -1$, $-4(-1)^2 = -4$, then $+(-1)$, then $+6$.',
          hint2: '$-1 - 4 - 1 + 6 = 0$. A zero result triggers the Factor Theorem.',
          hint3: 'Because $P(-1) = 0$, the divisor $x - (-1) = x + 1$ is a factor and $x = -1$ is a root.',
          explanation: '$P(-1) = -1 - 4 - 1 + 6 = 0$. By the Factor Theorem, $(x+1)$ is a factor and $x = -1$ is a root of $P(x)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-long-division',
    sections: [
      {
        id: 'pld5-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Long Division

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) set up with standard form and placeholders, (2) run the divide–multiply–subtract–bring-down loop, (3) write remainders correctly, and (4) use the Remainder and Factor Theorems. Time to put it all together.`,
      },
      {
        id: 'pld5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Prep the dividend | standard form + placeholders ($0x^n$ for gaps) |
| Each step | **D**ivide leading terms → **M**ultiply → **S**ubtract (flip signs!) → **B**ring down |
| When to stop | leftover degree $<$ divisor degree |
| Write the answer | $\\text{quotient} + \\dfrac{R}{\\text{divisor}}$ |
| Remainder of $P(x) \\div (x-c)$ | $P(c)$ — no division needed |
| $(x - c)$ is a factor | $\\iff P(c) = 0$ (and then $c$ is a root) |

> ⚠️ The two killers: **forgetting a placeholder**, and **not flipping signs** when you subtract. Slow down on those two and your accuracy soars.`,
      },
      {
        id: 'pld5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** $(x^2 + 6x + 8) \\div (x + 2)$ has remainder $0$. The quotient is $x + \\,?$  *(the constant)*
**2)** Use the Remainder Theorem: the remainder of $(x^3 - 2x^2 + x + 5) \\div (x - 1)$ is $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '5'],
          hint1: 'For (1): $x^2 \\div x = x$; $x(x+2)=x^2+2x$; subtract → $4x+8$; $4x \\div x = 4$.',
          hint2: 'For (2): set $x - 1 = 0$ so $c = 1$; evaluate $P(1) = 1 - 2 + 1 + 5$.',
          hint3: '(1) Quotient is $x + 4$ since $(x+2)(x+4) = x^2+6x+8$. (2) $P(1) = 1 - 2 + 1 + 5 = 5$.',
          explanation: '1) Quotient $x + 4$, so the constant is $4$. 2) $P(1) = 1 - 2 + 1 + 5 = 5$, so the remainder is $5$.',
        },
      },
      {
        id: 'pld5-mixed-bridge',
        type: 'text' as const,
        content: `## Mixing Methods

Notice how you chose the *right tool* for each problem above: long division when you need the full quotient, and the Remainder Theorem when you only need the remainder. A strong solver picks the shortcut whenever the question allows it.

The next set blends both skills — read each question carefully to decide which method is fastest.`,
      },
      {
        id: 'pld5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Divide $(2x^2 + 3x - 2) \\div (x + 2)$. The result is:',
              options: ['$2x - 1$', '$2x + 1$', '$2x - 1 + \\dfrac{1}{x+2}$', '$2x + 7$'],
              correctAnswer: 0,
              explanation: '$2x^2 \\div x = 2x$; $2x(x+2)=2x^2+4x$; subtract → $-x-2$; $-x \\div x = -1$; $-1(x+2)=-x-2$; subtract → $0$. Quotient $2x-1$, remainder $0$. Check: $(x+2)(2x-1)=2x^2+3x-2$ ✓.',
            },
            {
              question: 'Which value of $c$ makes $(x - c)$ a factor of $P(x) = x^2 - 9$?',
              options: ['$c = 3$', '$c = 9$', '$c = -9$', '$c = 1$'],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, $(x-c)$ is a factor when $P(c)=0$. $P(3) = 9 - 9 = 0$, so $c = 3$ works. (So does $c = -3$, since $x^2 - 9 = (x-3)(x+3)$.)',
            },
          ],
        },
      },
      {
        id: 'pld5-exit-setup',
        type: 'text' as const,
        content: `## Ready for the Exit Quiz

You've covered the full arc: **set up** with placeholders, **run** the D-M-S-B loop, **write** remainders, and **apply** the Remainder and Factor Theorems.

The three questions below pull from all of it. Take your time, watch your signs, and you'll finish strong. ✅`,
      },
      {
        id: 'pld5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Before dividing $x^4 - 1$ by $x - 1$, the dividend in full standard form is:',
              options: ['$x^4 + 0x^3 + 0x^2 + 0x - 1$', '$x^4 - 1x^3 - 1$', '$x^4 + 0x^2 - 1$', '$x^4 - 1$'],
              correctAnswer: 0,
              explanation: 'Insert placeholders for every missing power between $x^4$ and the constant: $x^4 + 0x^3 + 0x^2 + 0x - 1$.',
            },
            {
              question: 'By the Remainder Theorem, the remainder of $(x^2 + x - 6) \\div (x - 2)$ is:',
              options: ['$0$', '$4$', '$-6$', '$8$'],
              correctAnswer: 0,
              explanation: 'The divisor gives $c = 2$. $P(2) = 4 + 2 - 6 = 0$. (Remainder $0$ also means $(x-2)$ is a factor: $x^2+x-6 = (x-2)(x+3)$.)',
            },
            {
              question: 'Dividing $P(x)$ by $(x - 3)$ gives quotient $x + 1$ and remainder $2$. What is $P(x)$?',
              options: ['$x^2 - 2x - 1$', '$x^2 + 4x + 5$', '$x^2 - 2x + 2$', '$x^2 + x + 2$'],
              correctAnswer: 0,
              explanation: 'Rebuild via $P(x) = (\\text{divisor})(\\text{quotient}) + R = (x-3)(x+1) + 2 = x^2 - 2x - 3 + 2 = x^2 - 2x - 1$.',
            },
          ],
        },
      },
    ],
  },
]
