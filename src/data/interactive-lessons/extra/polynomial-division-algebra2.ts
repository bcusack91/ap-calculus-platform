import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polynomial Division (Algebra 2).
 * Registry key / DB Topic.slug: 'polynomial-division-algebra2'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polynomial-division-algebra2',
    sections: [
      {
        id: 'pdiv1-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division

**Part 1 of 5 — The Big Picture & Dividing by a Monomial**

---

### Topics in This Part

| Section |
|---------|
| Why Divide Polynomials? |
| The Division Vocabulary |
| Dividing by a Monomial |

> 🔑 **Key Concept:** Polynomial division answers the question *"how many times does one polynomial fit inside another?"* — just like $\\dfrac{17}{5} = 3$ remainder $2$, we'll write $\\dfrac{2x^2 + 7x + 3}{x + 3}$ as a **quotient plus a remainder**.`,
      },
      {
        id: 'pdiv1-vocab',
        type: 'text' as const,
        content: `## The Division Vocabulary

Every division problem — with numbers or polynomials — uses the same four words:

$$\\underbrace{17}_{\\text{dividend}} \\div \\underbrace{5}_{\\text{divisor}} = \\underbrace{3}_{\\text{quotient}} \\; \\text{remainder } \\underbrace{2}_{\\text{remainder}}$$

The **Division Algorithm** ties them together. For polynomials:

$$\\text{dividend} = (\\text{divisor})(\\text{quotient}) + \\text{remainder}$$

or, written as fractions:

$$\\frac{P(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}$$

> 🔑 **Key Rule:** The remainder must have a **smaller degree** than the divisor. You keep dividing until the leftover is "too small" to divide further — exactly like long division of numbers.

| Symbol | Name | Example: $\\dfrac{2x^2+7x+3}{x+3}$ |
|--------|------|-----------------------------------|
| $P(x)$ | dividend | $2x^2 + 7x + 3$ |
| $D(x)$ | divisor | $x + 3$ |
| $Q(x)$ | quotient | $2x + 1$ |
| $R(x)$ | remainder | $0$ |`,
      },
      {
        id: 'pdiv1-vocab-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the division algorithm $\\text{dividend} = (\\text{divisor})(\\text{quotient}) + \\text{remainder}$, which part must have the SMALLEST degree?',
              options: ['The remainder', 'The quotient', 'The divisor', 'The dividend'],
              correctAnswer: 0,
              explanation: 'You keep dividing until the leftover is smaller in degree than the divisor, so the remainder always has the smallest degree — and degree less than the divisor.',
            },
            {
              question: 'If $\\dfrac{P(x)}{D(x)} = Q(x) + 0$ (remainder zero), then we say $D(x)$ is a:',
              options: ['factor of $P(x)$', 'multiple of $P(x)$', 'remainder of $P(x)$', 'reciprocal of $P(x)$'],
              correctAnswer: 0,
              explanation: 'A zero remainder means $P(x) = D(x)\\cdot Q(x)$, so $D(x)$ divides evenly — it is a factor of $P(x)$.',
            },
          ],
        },
      },
      {
        id: 'pdiv1-monomial',
        type: 'text' as const,
        content: `## Dividing by a Monomial

The easiest case: a **monomial** (one term) divisor. Split the fraction term-by-term and use the quotient rule for exponents, $\\dfrac{x^m}{x^n} = x^{m-n}$.

### Worked Example: $\\dfrac{6x^3 + 9x^2 - 3x}{3x}$

Divide **each** term by $3x$:

$$\\frac{6x^3}{3x} + \\frac{9x^2}{3x} - \\frac{3x}{3x} = 2x^2 + 3x - 1$$

> ⚠️ **Most common mistake:** dividing only the *first* term by the divisor. You must divide **every** term — $\\dfrac{a+b}{c} = \\dfrac{a}{c} + \\dfrac{b}{c}$, not just $\\dfrac{a}{c} + b$.

### Worked Example: $\\dfrac{8x^4 - 12x^2}{4x^2}$

$$\\frac{8x^4}{4x^2} - \\frac{12x^2}{4x^2} = 2x^2 - 3$$`,
      },
      {
        id: 'pdiv1-monomial-drill',
        type: 'input-boxes' as const,
        content: `**Divide by a Monomial** 🧮

Simplify each quotient. Enter the result as a polynomial (e.g. \`2x^2+3x-1\`).

**1)** $\\dfrac{10x^3 + 15x^2}{5x^2} = \\,?$
**2)** $\\dfrac{12x^4 - 8x^3 + 4x^2}{4x^2} = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2x+3', '3x^2-2x+1'],
          hint1: 'Divide each term separately: $\\dfrac{10x^3}{5x^2} + \\dfrac{15x^2}{5x^2}$.',
          hint2: '$\\dfrac{12x^4}{4x^2} = 3x^2$, $\\dfrac{8x^3}{4x^2} = 2x$, $\\dfrac{4x^2}{4x^2} = 1$.',
          hint3: 'Subtract exponents: $x^4 \\div x^2 = x^{2}$, $x^3 \\div x^2 = x$, $x^2 \\div x^2 = 1$.',
          explanation: '1) $\\dfrac{10x^3}{5x^2} + \\dfrac{15x^2}{5x^2} = 2x + 3$.  2) $3x^2 - 2x + 1$.',
        },
      },
      {
        id: 'pdiv1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Vocabulary** 🔽

Consider $\\dfrac{6x^2 + 11x + 4}{2x + 1} = 3x + 4$ (remainder $0$). Identify each part.`,
        exercise: {
          dropdowns: [
            { label: 'The dividend is:', options: ['$6x^2 + 11x + 4$', '$2x + 1$', '$3x + 4$', '$0$'] },
            { label: 'The divisor is:', options: ['$2x + 1$', '$6x^2 + 11x + 4$', '$3x + 4$', '$0$'] },
            { label: 'The quotient is:', options: ['$3x + 4$', '$2x + 1$', '$6x^2 + 11x + 4$', '$0$'] },
            { label: 'The remainder is:', options: ['$0$', '$4$', '$3x + 4$', '$2x + 1$'] },
          ],
          correctAnswers: ['$6x^2 + 11x + 4$', '$2x + 1$', '$3x + 4$', '$0$'],
          hint1: 'The dividend is the polynomial being divided — the numerator $6x^2 + 11x + 4$.',
          hint2: 'The divisor is what you divide by — the denominator $2x + 1$. The quotient is the result, $3x + 4$.',
          hint3: 'Since the division comes out even, the leftover (remainder) is $0$.',
          explanation: 'Dividend $6x^2+11x+4$, divisor $2x+1$, quotient $3x+4$, remainder $0$. Check: $(2x+1)(3x+4) = 6x^2+8x+3x+4 = 6x^2+11x+4$ ✓',
        },
      },
      {
        id: 'pdiv1-wrap',
        type: 'text' as const,
        content: `## Looking Ahead

Monomial division is easy because nothing "carries over." But what about dividing by a **binomial** like $x + 3$? That needs the workhorse of this lesson: **polynomial long division**, coming up in Part 2.

> 💡 **Preview:** Every polynomial division can be checked the same way you check number division — multiply the quotient by the divisor and add the remainder. You should land back on the original dividend.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polynomial-division-algebra2',
    sections: [
      {
        id: 'pdiv2-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division

**Part 2 of 5 — Long Division**

---

> 🔑 **The Idea:** Polynomial long division mirrors the long division you learned for numbers. Four repeating steps — **Divide, Multiply, Subtract, Bring down** — until the remainder's degree drops below the divisor's.`,
      },
      {
        id: 'pdiv2-steps',
        type: 'text' as const,
        content: `## The Four-Step Loop

To compute $P(x) \\div D(x)$:

1. **Divide** the leading term of the current dividend by the leading term of the divisor → next quotient term.
2. **Multiply** that quotient term by the *entire* divisor.
3. **Subtract** the product from the current dividend.
4. **Bring down** the next term and repeat.

Stop when the remaining polynomial's degree is **less than** the divisor's degree.

> ⚠️ **Setup rule:** Write both polynomials in **descending powers** of $x$, and insert a $0$ placeholder for any missing power (e.g. write $x^3 + 0x^2 - 5x + 1$). Skipping a placeholder is the #1 source of long-division errors.`,
      },
      {
        id: 'pdiv2-worked',
        type: 'text' as const,
        content: `## Worked Example: $(2x^2 + 7x + 3) \\div (x + 3)$

**Step 1 — Divide:** $\\dfrac{2x^2}{x} = 2x$. First quotient term is $2x$.

**Step 2 — Multiply:** $2x(x + 3) = 2x^2 + 6x$.

**Step 3 — Subtract:**
$$(2x^2 + 7x) - (2x^2 + 6x) = x$$

**Step 4 — Bring down** the $+3$: now we have $x + 3$.

Repeat — **Divide:** $\\dfrac{x}{x} = 1$. **Multiply:** $1(x+3) = x + 3$. **Subtract:** $(x+3)-(x+3) = 0$.

$$2x^2 + 7x + 3 = (x + 3)(2x + 1) + 0$$

So the quotient is $2x + 1$ with remainder $0$.

> ✅ **Check:** $(x+3)(2x+1) = 2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$ ✓`,
      },
      {
        id: 'pdiv2-step-dropdown',
        type: 'dropdown-select' as const,
        content: `**Trace the Steps** 🔽

You're dividing $x^2 + 5x + 6$ by $x + 2$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First quotient term ($\\frac{x^2}{x}$):', options: ['$x$', '$x^2$', '$2x$', '$1$'] },
            { label: 'Multiply that term by $x+2$:', options: ['$x^2 + 2x$', '$x^2 + 5x$', '$x^2 + 2$', '$2x + 4$'] },
            { label: 'Subtract, then bring down:', options: ['$3x + 6$', '$7x + 6$', '$3x$', '$5x + 6$'] },
            { label: 'Final quotient and remainder:', options: ['$x + 3$, R $0$', '$x + 2$, R $0$', '$x + 3$, R $6$', '$x + 6$, R $0$'] },
          ],
          correctAnswers: ['$x$', '$x^2 + 2x$', '$3x + 6$', '$x + 3$, R $0$'],
          hint1: '$\\dfrac{x^2}{x} = x$, so the first quotient term is $x$.',
          hint2: '$x(x+2) = x^2 + 2x$. Subtracting from $x^2 + 5x$ leaves $3x$; bring down $+6$ to get $3x + 6$.',
          hint3: 'Next: $\\dfrac{3x}{x} = 3$, and $3(x+2) = 3x+6$, which subtracts to $0$. Quotient $x+3$, remainder $0$.',
          explanation: '$x^2 + 5x + 6 = (x+2)(x+3)$, so the quotient is $x+3$ with remainder $0$.',
        },
      },
      {
        id: 'pdiv2-remainder-worked',
        type: 'text' as const,
        content: `## When the Remainder Isn't Zero

Not every division comes out even. Consider $(x^2 + 3x + 5) \\div (x + 1)$.

**Divide:** $\\dfrac{x^2}{x} = x$. **Multiply:** $x(x+1) = x^2 + x$. **Subtract:** $(x^2 + 3x) - (x^2 + x) = 2x$. **Bring down** $+5$: now $2x + 5$.

**Divide:** $\\dfrac{2x}{x} = 2$. **Multiply:** $2(x+1) = 2x + 2$. **Subtract:** $(2x+5)-(2x+2) = 3$.

The leftover $3$ has degree $0 <$ degree of $x+1$, so we **stop**:

$$\\frac{x^2 + 3x + 5}{x + 1} = x + 2 + \\frac{3}{x + 1}$$

> 💡 **Read it like a number:** $\\dfrac{17}{5} = 3 + \\dfrac{2}{5}$. Same shape — quotient plus (remainder over divisor).`,
      },
      {
        id: 'pdiv2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why must you insert a $0$ placeholder before dividing $x^3 - 5x + 2$ by $x - 1$?',
              options: [
                'To hold the missing $x^2$ term so columns stay aligned',
                'Because every long division starts with a zero',
                'To make the remainder come out to zero',
                'It is optional — the placeholder changes nothing',
              ],
              correctAnswer: 0,
              explanation: 'There is no $x^2$ term, so we write $x^3 + 0x^2 - 5x + 2$. The placeholder keeps each column lined up with its power of $x$; without it the digits shift and the answer is wrong.',
            },
            {
              question: 'After dividing, you get quotient $x + 4$ with remainder $3$ when dividing some $P(x)$ by $x - 2$. Which expression equals $P(x)$?',
              options: ['$(x - 2)(x + 4) + 3$', '$(x - 2)(x + 4) - 3$', '$(x + 4)(3) + (x-2)$', '$(x - 2)(x + 4) \\cdot 3$'],
              correctAnswer: 0,
              explanation: 'The division algorithm says dividend $= (\\text{divisor})(\\text{quotient}) + \\text{remainder} = (x-2)(x+4) + 3$.',
            },
          ],
        },
      },
      {
        id: 'pdiv2-drill',
        type: 'input-boxes' as const,
        content: `**Long Division Practice** 🧮

Find the **quotient** $Q(x)$ and **remainder** $R$ for each.

**1)** $(x^2 + 7x + 10) \\div (x + 2)$:  quotient $= \\,?$ , remainder $= \\,?$
**2)** $(x^2 + 4x + 7) \\div (x + 1)$:  quotient $= \\,?$ , remainder $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['x+5', '0', 'x+3', '4'],
          hint1: 'For #1: $\\dfrac{x^2}{x} = x$; $x(x+2)=x^2+2x$; subtract to get $5x+10$.',
          hint2: 'For #1: $\\dfrac{5x}{x}=5$; $5(x+2)=5x+10$, subtracts to $0$. Quotient $x+5$, remainder $0$.',
          hint3: 'For #2: quotient term $x$ leaves $3x+7$; then $3$ leaves $3x+3$ subtracted off $3x+7$ → remainder $4$. Quotient $x+3$.',
          explanation: '1) $x^2+7x+10=(x+2)(x+5)$, so $Q=x+5$, $R=0$.  2) $x^2+4x+7=(x+1)(x+3)+4$, so $Q=x+3$, $R=4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polynomial-division-algebra2',
    sections: [
      {
        id: 'pdiv3-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division

**Part 3 of 5 — Synthetic Division**

---

> 🔑 **The Shortcut:** When the divisor is a simple linear $x - c$, **synthetic division** does the whole job with just the coefficients — no $x$'s, no rewriting. It's faster and cleaner than long division.`,
      },
      {
        id: 'pdiv3-setup',
        type: 'text' as const,
        content: `## Setting Up Synthetic Division

Synthetic division works **only** when the divisor has the form $x - c$ (degree 1, leading coefficient 1).

> ⚠️ **Sign flip:** For divisor $x - c$ you use $+c$; for divisor $x + c$ you use $-c$. Dividing by $x + 3$ means $c = -3$. Always solve $x - c = 0$ to find the number you carry in.

**The procedure (for $x - c$):**
1. Write $c$ in the box, then list the dividend's coefficients (with $0$ placeholders).
2. **Bring down** the first coefficient.
3. **Multiply** it by $c$, write the product under the next coefficient.
4. **Add** the column. Repeat multiply-and-add across the row.
5. The last number is the **remainder**; the rest are the quotient's coefficients (degree one less than the dividend).`,
      },
      {
        id: 'pdiv3-worked',
        type: 'text' as const,
        content: `## Worked Example: $(2x^3 - 3x^2 - 11x + 6) \\div (x - 3)$

Divisor $x - 3 \\Rightarrow c = 3$. Coefficients: $2,\\; -3,\\; -11,\\; 6$.

$$\\begin{array}{c|rrrr} 3 & 2 & -3 & -11 & 6 \\\\ & & 6 & 9 & -6 \\\\ \\hline & 2 & 3 & -2 & 0 \\end{array}$$

- Bring down $2$. Multiply $2\\cdot 3 = 6$, add to $-3$ → $3$.
- Multiply $3\\cdot 3 = 9$, add to $-11$ → $-2$.
- Multiply $-2\\cdot 3 = -6$, add to $6$ → $0$ (the remainder).

The bottom row $2,\\;3,\\;-2$ gives the quotient (start one degree below the cubic, so degree 2):

$$2x^3 - 3x^2 - 11x + 6 = (x - 3)(2x^2 + 3x - 2) + 0$$

> ✅ **Check:** $(x-3)(2x^2+3x-2) = 2x^3+3x^2-2x -6x^2-9x+6 = 2x^3 - 3x^2 - 11x + 6$ ✓`,
      },
      {
        id: 'pdiv3-c-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To divide by $x + 5$ using synthetic division, what value of $c$ goes in the box?',
              options: ['$-5$', '$5$', '$\\frac{1}{5}$', '$0$'],
              correctAnswer: 0,
              explanation: 'Set $x + 5 = x - c$, so $-c = 5$ and $c = -5$. Dividing by $x + 5$ uses $c = -5$.',
            },
            {
              question: 'Which divisor allows synthetic division as taught here?',
              options: ['$x - 4$', '$x^2 - 4$', '$2x - 1$ (as written)', '$x^2 + x + 1$'],
              correctAnswer: 0,
              explanation: 'Synthetic division (this form) needs a degree-1 divisor $x - c$ with leading coefficient 1. $x^2-4$ is degree 2; $2x-1$ has leading coefficient $2$ (would need rewriting first).',
            },
          ],
        },
      },
      {
        id: 'pdiv3-placeholder',
        type: 'text' as const,
        content: `## Don't Forget the Placeholders!

If a power is missing, you **must** include a $0$ coefficient. Divide $x^3 - 8$ by $x - 2$:

Write the coefficients as $1,\\; 0,\\; 0,\\; -8$ (for $x^3 + 0x^2 + 0x - 8$), with $c = 2$:

$$\\begin{array}{c|rrrr} 2 & 1 & 0 & 0 & -8 \\\\ & & 2 & 4 & 8 \\\\ \\hline & 1 & 2 & 4 & 0 \\end{array}$$

So $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ — a perfect difference-of-cubes factorization!

> ⚠️ If you had written only $1, -8$, you'd get nonsense. The $0$ placeholders keep every column aligned with its power of $x$.`,
      },
      {
        id: 'pdiv3-drill',
        type: 'input-boxes' as const,
        content: `**Synthetic Division Practice** 🧮

**1)** Divide $x^2 - 5x + 6$ by $x - 2$. The quotient is $x + a$ — enter $a$. Then enter the remainder.
**2)** Divide $x^3 + 2x^2 - 5x - 6$ by $x - 2$. Enter the remainder.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-3', '0', '0'],
          hint1: 'For #1, $c = 2$: bring down $1$; $1\\cdot 2 = 2$, add to $-5$ → $-3$; $-3\\cdot 2 = -6$, add to $6$ → $0$.',
          hint2: 'Quotient row for #1 is $1,\\;-3$, i.e. $x - 3$, so $a = -3$ and remainder $0$.',
          hint3: 'For #2, $c=2$: $1,\\,2,\\,-5,\\,-6 \\to$ bring down $1$; $+2\\to4$; $\\,4\\cdot2=8,\\,-5+8=3$; $\\,3\\cdot2=6,\\,-6+6=0$. Remainder $0$.',
          explanation: '1) $x^2-5x+6 = (x-2)(x-3)$, so $a=-3$, remainder $0$.  2) $x^3+2x^2-5x-6=(x-2)(x^2+4x+3)$, remainder $0$.',
        },
      },
      {
        id: 'pdiv3-synth-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill the Synthetic Row** 🔽

Divide $x^3 + 4x^2 + x - 6$ by $x - 1$ ($c = 1$). Coefficients: $1,\\;4,\\;1,\\;-6$. Complete the bottom row left to right.`,
        exercise: {
          dropdowns: [
            { label: '1st entry (bring down):', options: ['$1$', '$4$', '$0$', '$-1$'] },
            { label: '2nd entry ($4 + 1\\cdot 1$):', options: ['$5$', '$4$', '$3$', '$6$'] },
            { label: '3rd entry ($1 + 5\\cdot 1$):', options: ['$6$', '$1$', '$5$', '$0$'] },
            { label: '4th entry = remainder ($-6 + 6\\cdot 1$):', options: ['$0$', '$6$', '$-6$', '$12$'] },
          ],
          correctAnswers: ['$1$', '$5$', '$6$', '$0$'],
          hint1: 'Bring down the first coefficient unchanged: $1$.',
          hint2: 'Multiply each new entry by $c = 1$ and add to the next coefficient: $4 + 1 = 5$, then $1 + 5 = 6$.',
          hint3: 'Last column: $-6 + 6 = 0$ — that is the remainder.',
          explanation: 'Bottom row $1,\\,5,\\,6,\\,0$: quotient $x^2 + 5x + 6$, remainder $0$. So $x^3+4x^2+x-6 = (x-1)(x^2+5x+6) = (x-1)(x+2)(x+3)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polynomial-division-algebra2',
    sections: [
      {
        id: 'pdiv4-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division

**Part 4 of 5 — The Remainder & Factor Theorems**

---

> 🔑 **Big Payoff:** Division isn't just bookkeeping — it reveals where a polynomial equals zero. Two theorems turn a single division (or even a single substitution) into deep information about roots and factors.`,
      },
      {
        id: 'pdiv4-remainder-thm',
        type: 'text' as const,
        content: `## The Remainder Theorem

> 🔑 **Remainder Theorem:** When a polynomial $P(x)$ is divided by $x - c$, the remainder equals $P(c)$.

This means you can find a remainder **without dividing at all** — just plug in $c$.

### Example

Find the remainder when $P(x) = x^3 - 4x^2 + 2x + 5$ is divided by $x - 1$.

Here $c = 1$:

$$P(1) = (1)^3 - 4(1)^2 + 2(1) + 5 = 1 - 4 + 2 + 5 = 4$$

So the remainder is $4$ — no long division needed.

> 💡 This is *why* synthetic division's last entry is the remainder: that final add is secretly computing $P(c)$.`,
      },
      {
        id: 'pdiv4-remainder-check',
        type: 'input-boxes' as const,
        content: `**Use the Remainder Theorem** 🧮

Use $P(c)$ — not long division — to find each remainder.

**1)** $P(x) = x^2 + 3x - 4$ divided by $x - 2$. Remainder $= P(2) = \\,?$
**2)** $P(x) = 2x^3 - x + 1$ divided by $x + 1$. Remainder $= P(-1) = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '0'],
          hint1: 'For #1, plug in $c = 2$: $(2)^2 + 3(2) - 4$.',
          hint2: 'For #2, divisor $x + 1$ means $c = -1$: $2(-1)^3 - (-1) + 1$.',
          hint3: '#1: $4 + 6 - 4 = 6$.  #2: $2(-1) + 1 + 1 = -2 + 2 = 0$.',
          explanation: '1) $P(2) = 4 + 6 - 4 = 6$.  2) $P(-1) = -2 + 1 + 1 = 0$. A remainder of $0$ in #2 means $x+1$ is a factor!',
        },
      },
      {
        id: 'pdiv4-factor-thm',
        type: 'text' as const,
        content: `## The Factor Theorem

The Factor Theorem is the special case where the remainder is **zero**:

> 🔑 **Factor Theorem:** $(x - c)$ is a factor of $P(x)$ **if and only if** $P(c) = 0$.

In other words, $c$ is a **root** (zero) of the polynomial exactly when $x - c$ divides it evenly.

### Example

Is $x - 3$ a factor of $P(x) = x^3 - 2x^2 - 5x + 6$?

$$P(3) = 27 - 18 - 15 + 6 = 0 \\;\\checkmark$$

Yes! Since $P(3) = 0$, $x - 3$ is a factor. Dividing confirms it:

$$x^3 - 2x^2 - 5x + 6 = (x - 3)(x^2 + x - 2) = (x-3)(x+2)(x-1)$$

The roots are $x = 3,\\, -2,\\, 1$.`,
      },
      {
        id: 'pdiv4-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Factor or Not?** 🔽

For $P(x) = x^3 - 7x + 6$, decide each statement. (Compute $P(c)$ in your head.)`,
        exercise: {
          dropdowns: [
            { label: '$P(1) = $', options: ['$0$', '$6$', '$-12$', '$2$'] },
            { label: 'Is $x - 1$ a factor?', options: ['Yes', 'No'] },
            { label: '$P(2) = $', options: ['$0$', '$4$', '$-4$', '$8$'] },
            { label: 'Is $x + 3$ a factor? ($P(-3)=?$)', options: ['Yes', 'No'] },
          ],
          correctAnswers: ['$0$', 'Yes', '$0$', 'Yes'],
          hint1: '$P(1) = 1 - 7 + 6 = 0$, so by the Factor Theorem $x - 1$ is a factor.',
          hint2: '$P(2) = 8 - 14 + 6 = 0$, so $x - 2$ is a factor too.',
          hint3: '$P(-3) = -27 + 21 + 6 = 0$, so $x + 3$ is a factor. In fact $x^3-7x+6 = (x-1)(x-2)(x+3)$.',
          explanation: 'All three are roots: $P(1)=P(2)=P(-3)=0$, giving $x^3 - 7x + 6 = (x-1)(x-2)(x+3)$.',
        },
      },
      {
        id: 'pdiv4-roots-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $P(4) = 0$, which statement is guaranteed by the Factor Theorem?',
              options: ['$x - 4$ is a factor of $P(x)$', '$x + 4$ is a factor of $P(x)$', '$4$ is the remainder of $P(x) \\div x$', '$P(x)$ has degree $4$'],
              correctAnswer: 0,
              explanation: 'The Factor Theorem says $P(c)=0 \\iff (x-c)$ is a factor. With $c = 4$, $x - 4$ is a factor.',
            },
            {
              question: 'A polynomial $P(x)$ is divided by $x - 6$ and the remainder is $11$. What is $P(6)$?',
              options: ['$11$', '$6$', '$0$', '$-11$'],
              correctAnswer: 0,
              explanation: 'By the Remainder Theorem, the remainder on division by $x - c$ equals $P(c)$. So $P(6) = 11$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polynomial-division-algebra2',
    sections: [
      {
        id: 'pdiv5-intro',
        type: 'text' as const,
        content: `# ➗ Polynomial Division

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) divide by a monomial, (2) run polynomial long division, (3) use synthetic division for $x - c$, and (4) apply the Remainder and Factor Theorems. Let's put it all together.`,
      },
      {
        id: 'pdiv5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Divide by a monomial | split the fraction, subtract exponents |
| Divide by any polynomial | long division: divide–multiply–subtract–bring down |
| Divide by $x - c$ | synthetic division with $c$ |
| Find a remainder fast | Remainder Theorem: remainder $= P(c)$ |
| Test for a factor | Factor Theorem: $(x-c)$ factor $\\iff P(c) = 0$ |
| Check any division | $\\text{dividend} = (\\text{divisor})(\\text{quotient}) + \\text{remainder}$ |

> ⚠️ **Two habits that prevent most errors:** write polynomials in descending order with $0$ placeholders, and remember the **sign flip** — divisor $x + c$ uses $-c$ in synthetic division.`,
      },
      {
        id: 'pdiv5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Divide: $\\dfrac{x^2 + 2x - 15}{x - 3}$.',
              options: ['$x + 5$', '$x - 5$', '$x + 5 + \\dfrac{0}{x-3}$ only if remainder $\\ne 0$', '$x + 2$'],
              correctAnswer: 0,
              explanation: '$x^2 + 2x - 15 = (x-3)(x+5)$, so the quotient is $x + 5$ with remainder $0$.',
            },
            {
              question: 'When $x^3 + 2x^2 - 4x + 1$ is divided by $x - 1$, what is the remainder? (Use the Remainder Theorem.)',
              options: ['$0$', '$1$', '$2$', '$-2$'],
              correctAnswer: 0,
              explanation: '$P(1) = 1 + 2 - 4 + 1 = 0$. The remainder is $0$, so $x - 1$ is a factor.',
            },
          ],
        },
      },
      {
        id: 'pdiv5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Long Division** 🧮

Divide $2x^2 + 5x - 1$ by $x + 3$ and express as $Q(x) + \\dfrac{R}{x+3}$.

**1)** Quotient $Q(x) = \\,?$  *(enter as e.g.* \`2x-1\` *)*
**2)** Remainder $R = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2x-1', '2'],
          hint1: '$\\dfrac{2x^2}{x} = 2x$; $2x(x+3) = 2x^2 + 6x$; subtract from $2x^2+5x$ to get $-x$, bring down $-1$: $-x-1$.',
          hint2: '$\\dfrac{-x}{x} = -1$; $-1(x+3) = -x-3$; subtract: $(-x-1)-(-x-3) = 2$.',
          hint3: 'Quotient $2x - 1$, remainder $2$. Check: $(x+3)(2x-1)+2 = 2x^2+5x-3+2 = 2x^2+5x-1$ ✓',
          explanation: '$2x^2+5x-1 = (x+3)(2x-1) + 2$, so $Q(x)=2x-1$ and $R=2$.',
        },
      },
      {
        id: 'pdiv5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{15x^4 - 10x^3 + 5x^2}{5x^2}$.',
              options: ['$3x^2 - 2x + 1$', '$3x^2 - 2x$', '$3x^4 - 2x^3 + 1$', '$3x^2 - 10x^3 + 1$'],
              correctAnswer: 0,
              explanation: 'Divide each term by $5x^2$: $\\dfrac{15x^4}{5x^2} - \\dfrac{10x^3}{5x^2} + \\dfrac{5x^2}{5x^2} = 3x^2 - 2x + 1$.',
            },
            {
              question: 'Using synthetic division, dividing by $x + 2$ means the value carried into the box is:',
              options: ['$-2$', '$2$', '$0$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Set $x + 2 = x - c \\Rightarrow c = -2$. You carry $-2$ into the synthetic-division box.',
            },
            {
              question: 'A polynomial $P(x)$ satisfies $P(-3) = 0$. Which is true?',
              options: ['$x + 3$ is a factor of $P(x)$', '$x - 3$ is a factor of $P(x)$', 'The remainder of $P(x) \\div (x-3)$ is $0$', '$P(x)$ has no real roots'],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, $P(c)=0 \\iff (x-c)$ is a factor. With $c=-3$, $(x-(-3)) = x+3$ is a factor.',
            },
          ],
        },
      },
    ],
  },
]
