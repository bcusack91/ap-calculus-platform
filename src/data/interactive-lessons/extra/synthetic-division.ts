import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Synthetic Division (Algebra 2).
 * Registry key: 'synthetic-division' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'synthetic-division',
    sections: [
      {
        id: 'sd1-intro',
        type: 'text' as const,
        content: `# ➗ Synthetic Division

**Part 1 of 5 — Setting Up the Shortcut**

---

### Topics in This Part

| Section |
|---------|
| What Synthetic Division Does |
| Writing Coefficients (with Zeros!) |
| Finding the Divisor's Root |

> 🔑 **Key Concept:** Synthetic division is a fast, paper-saving shortcut for dividing a polynomial by a **linear** factor $x - c$. No variables, no long-division scaffolding — just the coefficients and one number.`,
      },
      {
        id: 'sd1-what',
        type: 'text' as const,
        content: `## What Synthetic Division Does

When you divide a polynomial $P(x)$ by $x - c$, you get a **quotient** and a **remainder**:

$$P(x) = (x - c)\\cdot Q(x) + r$$

Long division works, but it's slow. **Synthetic division** does the exact same job using only:

1. The **coefficients** of $P(x)$, and
2. The single number $c$ (the root of the divisor).

### Long division vs. synthetic division

| | Writes out $x$, $x^2$, … | Speed | Works for divisor… |
|--|--|--|--|
| **Long division** | Yes | Slower | any polynomial |
| **Synthetic division** | No | Much faster | only **linear** $x - c$ |

> ⚠️ **Limitation:** Synthetic division only works when you divide by a *linear* factor of the form $x - c$ (leading coefficient $1$). For $2x - 3$ you must first rewrite it — we cover that in Part 4.`,
      },
      {
        id: 'sd1-coeffs',
        type: 'text' as const,
        content: `## Step 1 — List the Coefficients

Write the coefficients of the polynomial **in order of descending degree**. The crucial rule:

> 🔑 **Insert a $0$ for every missing term.** A skipped power of $x$ throws off the entire alignment.

### Example

| Polynomial | Coefficients |
|------------|--------------|
| $x^3 + 5x^2 + 2x - 8$ | $1,\\ 5,\\ 2,\\ -8$ |
| $2x^3 - 7x + 4$ | $2,\\ 0,\\ -7,\\ 4$ *(no $x^2$ term → 0)* |
| $x^4 - 16$ | $1,\\ 0,\\ 0,\\ 0,\\ -16$ *(three gaps!)* |

The first polynomial above has every degree from $3$ down to $0$. The second skips $x^2$, so we hold its place with a $0$. The third skips $x^3$, $x^2$, and $x^1$.`,
      },
      {
        id: 'sd1-coeff-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the correct coefficient list for $3x^3 - x + 6$?',
              options: ['$3,\\ 0,\\ -1,\\ 6$', '$3,\\ -1,\\ 6$', '$3,\\ -1,\\ 0,\\ 6$', '$3,\\ 0,\\ 1,\\ 6$'],
              correctAnswer: 0,
              explanation: 'The $x^2$ term is missing, so we insert a $0$ in its place: $3,\\ 0,\\ -1,\\ 6$. The middle coefficient is $-1$ (from $-x$), kept with its sign.',
            },
            {
              question: 'Why must you insert a $0$ for a missing term?',
              options: [
                'To keep each coefficient lined up with the correct power of $x$',
                'Because synthetic division cannot use negative numbers',
                'To make the polynomial a perfect square',
                'It is optional and only helps with neatness',
              ],
              correctAnswer: 0,
              explanation: 'Each column in synthetic division stands for a specific power of $x$. A missing $0$ shifts every later term into the wrong column and ruins the answer.',
            },
          ],
        },
      },
      {
        id: 'sd1-root',
        type: 'text' as const,
        content: `## Step 2 — Find the Divisor's Root

Synthetic division uses the **root** of the divisor — the value of $x$ that makes $x - c = 0$.

$$x - c = 0 \\;\\Longrightarrow\\; x = c$$

> 💡 **Watch the sign flip!** When you divide by $x - 3$, you use $\\mathbf{+3}$. When you divide by $x + 3$, rewrite it as $x - (-3)$ and use $\\mathbf{-3}$.

| Divisor | Root $c$ to use |
|---------|-----------------|
| $x - 5$ | $5$ |
| $x + 2$ | $-2$ |
| $x - 1$ | $1$ |
| $x + 7$ | $-7$ |`,
      },
      {
        id: 'sd1-root-drill',
        type: 'input-boxes' as const,
        content: `**Find the Root** 🧮

Enter the number $c$ you would place in the synthetic-division box for each divisor.

**1)** Divide by $x - 4 \\;\\Rightarrow\\; c = \\,?$
**2)** Divide by $x + 6 \\;\\Rightarrow\\; c = \\,?$
**3)** Divide by $x + 1 \\;\\Rightarrow\\; c = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '-6', '-1'],
          hint1: 'Set the divisor equal to $0$ and solve for $x$.',
          hint2: '$x + 6 = 0 \\Rightarrow x = -6$. Adding inside the parentheses flips the sign.',
          hint3: '$x + 1 = 0 \\Rightarrow x = -1$.',
          explanation: '1) $x - 4 = 0 \\Rightarrow c = 4$.  2) $x + 6 = 0 \\Rightarrow c = -6$.  3) $x + 1 = 0 \\Rightarrow c = -1$.',
        },
      },
      {
        id: 'sd1-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Setup** 🔽

You're about to divide $2x^3 - 7x + 4$ by $x + 3$. Choose the correct setup pieces before running the algorithm.`,
        exercise: {
          dropdowns: [
            { label: 'Coefficient list (mind the gap!):', options: ['$2,\\ 0,\\ -7,\\ 4$', '$2,\\ -7,\\ 4$', '$2,\\ 7,\\ 4$', '$2,\\ 0,\\ 7,\\ 4$'] },
            { label: 'Number $c$ in the box:', options: ['$-3$', '$3$', '$7$', '$-7$'] },
            { label: 'The quotient will start at degree:', options: ['$2$ (it is $x^2$)', '$3$ (it is $x^3$)', '$1$ (it is $x$)', '$0$ (a constant)'] },
          ],
          correctAnswers: ['$2,\\ 0,\\ -7,\\ 4$', '$-3$', '$2$ (it is $x^2$)'],
          hint1: 'The $x^2$ term is missing, so hold its place with a $0$: $2,\\ 0,\\ -7,\\ 4$.',
          hint2: '$x + 3 = x - (-3)$, so $c = -3$.',
          hint3: 'Dividing a degree-$3$ polynomial by a linear factor gives a degree-$2$ quotient.',
          explanation: 'Coefficients $2,\\ 0,\\ -7,\\ 4$ (with the place-holding $0$), root $c = -3$, and the quotient begins at $x^2$.',
        },
      },
      {
        id: 'sd1-wrap',
        type: 'text' as const,
        content: `## You're Set Up

You now have the two ingredients synthetic division needs:

- a tidy **coefficient list** (with $0$s for any gaps), and
- the **root** $c$ of the divisor $x - c$.

In Part 2 we run the actual algorithm — *bring down, multiply, add* — and read off a quotient and remainder.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'synthetic-division',
    sections: [
      {
        id: 'sd2-intro',
        type: 'text' as const,
        content: `# ➗ Synthetic Division

**Part 2 of 5 — The Algorithm: Bring Down, Multiply, Add**

---

> 🔑 **The Rhythm:** Synthetic division is just three moves repeated across the row — **bring down** the first number, then loop: **multiply by $c$**, write it under the next coefficient, and **add**.`,
      },
      {
        id: 'sd2-steps',
        type: 'text' as const,
        content: `## The Three Moves

Divide $x^3 - 4x^2 + 5x - 2$ by $x - 2$. Root $c = 2$; coefficients $1,\\ -4,\\ 5,\\ -2$.

**Set up.** Put $c=2$ on the left and the coefficients across the top.

**1. Bring down** the leading coefficient $1$.

**2. Multiply** $1 \\cdot 2 = 2$; write it under the next coefficient $-4$.

**3. Add** the column: $-4 + 2 = -2$.

Repeat across:
- $-2 \\cdot 2 = -4$; add to $5$: $\\;5 + (-4) = 1$
- $1 \\cdot 2 = 2$; add to $-2$: $\\;-2 + 2 = 0$

$$\\begin{array}{c|cccc} 2 & 1 & -4 & 5 & -2 \\\\ & & 2 & -4 & 2 \\\\ \\hline & 1 & -2 & 1 & 0 \\end{array}$$

The bottom row $1,\\ -2,\\ 1,\\ \\boxed{0}$ holds the answer.`,
      },
      {
        id: 'sd2-read',
        type: 'text' as const,
        content: `## Reading the Bottom Row

The **last** number in the bottom row is the **remainder**. Everything before it gives the **quotient**, with degree **one less** than the original polynomial.

For our example the bottom row was $1,\\ -2,\\ 1,\\ 0$:

- Remainder $= \\boxed{0}$
- Quotient coefficients $= 1,\\ -2,\\ 1$ → starts at $x^2$ (one degree below the cubic):

$$Q(x) = x^2 - 2x + 1$$

So $\\;x^3 - 4x^2 + 5x - 2 = (x - 2)(x^2 - 2x + 1)$.

> ✅ **Check by multiplying:** $(x-2)(x^2-2x+1) = x^3 -2x^2 + x -2x^2 +4x -2 = x^3 - 4x^2 + 5x - 2$ ✓`,
      },
      {
        id: 'sd2-step-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In synthetic division, after you bring down the first coefficient, what is the very next move?',
              options: [
                'Multiply it by $c$ and write the result under the next coefficient',
                'Add it to the next coefficient',
                'Divide it by $c$',
                'Subtract $c$ from it',
              ],
              correctAnswer: 0,
              explanation: 'The loop is multiply-then-add: multiply the number you just brought down by $c$, place that product under the next coefficient, then add the column.',
            },
            {
              question: 'The bottom row of a synthetic division of a cubic is $2,\\ 1,\\ -3,\\ 0$. What is the quotient?',
              options: ['$2x^2 + x - 3$', '$2x^3 + x^2 - 3x$', '$2x^2 + x - 3$ remainder $0$ — same thing', '$x^2 + x - 3$'],
              correctAnswer: 0,
              explanation: 'The last entry $0$ is the remainder. The remaining $2,\\ 1,\\ -3$ form the quotient one degree below the cubic: $2x^2 + x - 3$.',
            },
          ],
        },
      },
      {
        id: 'sd2-fill-drill',
        type: 'input-boxes' as const,
        content: `**Run the Algorithm** 🧮

Divide $x^3 + 2x^2 - 5x - 6$ by $x - 2$ (so $c = 2$; coefficients $1,\\ 2,\\ -5,\\ -6$).

Fill in the **bottom row** in order.

**1)** First bottom-row entry (brought down) $= \\,?$
**2)** Second entry $= \\,?$
**3)** Third entry $= \\,?$
**4)** Remainder (last entry) $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['1', '4', '3', '0'],
          hint1: 'Bring down the leading $1$. Then $1\\cdot 2 = 2$, and $2 + 2 = 4$.',
          hint2: '$4 \\cdot 2 = 8$, and $-5 + 8 = 3$.',
          hint3: '$3 \\cdot 2 = 6$, and $-6 + 6 = 0$. The remainder is $0$.',
          explanation: 'Bottom row $1,\\ 4,\\ 3,\\ 0$. Quotient $x^2 + 4x + 3$, remainder $0$, so $x^3+2x^2-5x-6 = (x-2)(x^2+4x+3)$.',
        },
      },
      {
        id: 'sd2-quotient-drill',
        type: 'input-boxes' as const,
        content: `**Name the Quotient & Remainder** 🧮

A synthetic division of the cubic $x^3 - 7x + 6$ by $x - 1$ produces the bottom row $1,\\ 1,\\ -6,\\ 0$.

**1)** What is the remainder? $\\,?$
**2)** The quotient is $x^2 + \\,?\\,x - 6$. Enter the middle coefficient. $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '1'],
          hint1: 'The last bottom-row entry is the remainder.',
          hint2: 'The quotient coefficients are the first three numbers: $1,\\ 1,\\ -6$.',
          hint3: 'So $Q(x) = x^2 + 1x - 6 = x^2 + x - 6$.',
          explanation: 'Remainder $= 0$. Quotient $= x^2 + x - 6$, so the middle coefficient is $1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'synthetic-division',
    sections: [
      {
        id: 'sd3-intro',
        type: 'text' as const,
        content: `# ➗ Synthetic Division

**Part 3 of 5 — The Remainder & Factor Theorems**

---

> 🔑 **The Payoff:** That last number in the bottom row isn't just a leftover. It's $P(c)$ — the value of the whole polynomial at $x = c$. This is the **Remainder Theorem**, and it makes synthetic division a lightning-fast evaluator.`,
      },
      {
        id: 'sd3-remainder-thm',
        type: 'text' as const,
        content: `## The Remainder Theorem

> 🔑 **Remainder Theorem:** When $P(x)$ is divided by $x - c$, the remainder equals $P(c)$.

So instead of plugging $c$ into a messy polynomial, you can synthetic-divide and just read the remainder.

### Example: evaluate $P(x) = x^3 - 2x^2 + 3x - 5$ at $x = 2$

$$\\begin{array}{c|cccc} 2 & 1 & -2 & 3 & -5 \\\\ & & 2 & 0 & 6 \\\\ \\hline & 1 & 0 & 3 & 1 \\end{array}$$

The remainder is $\\boxed{1}$, so $P(2) = 1$.

> ✅ **Check by substitution:** $P(2) = 8 - 8 + 6 - 5 = 1$ ✓`,
      },
      {
        id: 'sd3-remainder-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate with the Remainder Theorem** 🧮

Use synthetic division to find each value.

**1)** $P(x) = x^3 + 4x^2 - x + 2$. Find $P(1)$.
**2)** $P(x) = 2x^3 - 3x^2 + x - 4$. Find $P(2)$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '2'],
          hint1: 'For $P(1)$, use $c = 1$: bottom row builds as $1,\\ 5,\\ 4,\\ 6$. The remainder is $P(1)$.',
          hint2: 'For $P(2)$, use $c = 2$ on $2,\\ -3,\\ 1,\\ -4$: $2,\\ 1,\\ 3,\\ 2$. Remainder is $P(2)$.',
          hint3: 'Double-check by direct substitution: $P(1) = 1+4-1+2 = 6$; $P(2) = 16-12+2-4 = 2$.',
          explanation: '1) $P(1) = 1 + 4 - 1 + 2 = 6$.  2) $P(2) = 2(8) - 3(4) + 2 - 4 = 16 - 12 + 2 - 4 = 2$.',
        },
      },
      {
        id: 'sd3-factor-thm',
        type: 'text' as const,
        content: `## The Factor Theorem

The Remainder Theorem has a powerful special case:

> 🔑 **Factor Theorem:** $(x - c)$ is a factor of $P(x)$ **if and only if** $P(c) = 0$ — i.e., the remainder is $0$.

A remainder of $0$ means the division came out clean: $c$ is a **root** (zero) of the polynomial, and $x - c$ divides it evenly.

| Remainder after dividing by $x - c$ | Conclusion |
|--|--|
| $r = 0$ | $x - c$ **is** a factor; $c$ is a root |
| $r \\ne 0$ | $x - c$ is **not** a factor; remainder $= P(c)$ |

> 💡 This turns synthetic division into a **factor test**: try a candidate $c$, and a remainder of $0$ confirms a factor instantly.`,
      },
      {
        id: 'sd3-factor-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Dividing $P(x)$ by $x - 3$ gives a remainder of $0$. Which statement is true?',
              options: [
                '$x - 3$ is a factor of $P(x)$ and $P(3) = 0$',
                '$P(3) = 3$',
                '$x + 3$ is a factor of $P(x)$',
                '$P(x)$ has no real roots',
              ],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, a remainder of $0$ means $x - 3$ is a factor and $3$ is a root, so $P(3) = 0$.',
            },
            {
              question: 'Dividing $P(x)$ by $x + 4$ gives a remainder of $7$. What is $P(-4)$?',
              options: ['$7$', '$-7$', '$4$', '$0$'],
              correctAnswer: 0,
              explanation: 'Dividing by $x + 4 = x - (-4)$ uses $c = -4$. By the Remainder Theorem, the remainder $7$ equals $P(-4)$.',
            },
          ],
        },
      },
      {
        id: 'sd3-isfactor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Factor or Not?** 🔽

For each test, decide what the remainder tells you. (You can compute the remainder by synthetic division, or note that it equals $P(c)$.)`,
        exercise: {
          dropdowns: [
            { label: 'Is $x - 1$ a factor of $x^3 - 1$?  $P(1) = $', options: ['$0$', '$1$', '$-1$', '$2$'] },
            { label: 'Therefore $x - 1$ is…', options: ['a factor', 'not a factor'] },
            { label: 'Is $x - 2$ a factor of $x^3 + 1$?  $P(2) = $', options: ['$9$', '$0$', '$5$', '$3$'] },
            { label: 'Therefore $x - 2$ is…', options: ['not a factor', 'a factor'] },
          ],
          correctAnswers: ['$0$', 'a factor', '$9$', 'not a factor'],
          hint1: '$P(1) = 1^3 - 1 = 0$, so by the Factor Theorem $x-1$ is a factor.',
          hint2: '$P(2) = 2^3 + 1 = 9 \\ne 0$, so $x-2$ is not a factor.',
          hint3: 'Remainder $0$ ⟺ factor. Any nonzero remainder ⟹ not a factor.',
          explanation: '$x^3 - 1$: $P(1)=0$ → factor. $x^3 + 1$: $P(2) = 9 \\ne 0$ → not a factor.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'synthetic-division',
    sections: [
      {
        id: 'sd4-intro',
        type: 'text' as const,
        content: `# ➗ Synthetic Division

**Part 4 of 5 — Factoring Polynomials & Special Divisors**

---

> 🔑 **Putting It to Work:** Find one root, synthetic-divide to peel it off, and you're left with a smaller polynomial that's far easier to factor. Repeat until the polynomial is fully broken down.`,
      },
      {
        id: 'sd4-fully-factor',
        type: 'text' as const,
        content: `## Factoring with Synthetic Division

### Example: factor $x^3 - 4x^2 + x + 6$

**Step 1 — find a root.** Test small integers. $P(2) = 8 - 16 + 2 + 6 = 0$, so $x - 2$ is a factor.

**Step 2 — divide out $x - 2$** (coefficients $1,\\ -4,\\ 1,\\ 6$, root $c = 2$):

$$\\begin{array}{c|cccc} 2 & 1 & -4 & 1 & 6 \\\\ & & 2 & -4 & -6 \\\\ \\hline & 1 & -2 & -3 & 0 \\end{array}$$

Quotient: $x^2 - 2x - 3$.

**Step 3 — factor the quotient.** $x^2 - 2x - 3 = (x - 3)(x + 1)$.

$$x^3 - 4x^2 + x + 6 = (x - 2)(x - 3)(x + 1)$$

The roots are $x = 2,\\ 3,\\ -1$.`,
      },
      {
        id: 'sd4-roots-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After dividing $x^3 - 4x^2 + x + 6$ by $x - 2$, the quotient is $x^2 - 2x - 3$. What are ALL the roots of the original cubic?',
              options: ['$x = 2,\\ 3,\\ -1$', '$x = 2,\\ -3,\\ 1$', '$x = -2,\\ 3,\\ 1$', '$x = 2,\\ 3,\\ 1$'],
              correctAnswer: 0,
              explanation: '$x - 2 = 0 \\Rightarrow x = 2$, and $x^2 - 2x - 3 = (x-3)(x+1) \\Rightarrow x = 3,\\ -1$. All roots: $2,\\ 3,\\ -1$.',
            },
            {
              question: 'You know $x = -1$ is a root of a cubic. Which divisor should you use in synthetic division to peel it off?',
              options: ['$x + 1$ (use $c = -1$)', '$x - 1$ (use $c = 1$)', '$x + 1$ (use $c = 1$)', '$x - 1$ (use $c = -1$)'],
              correctAnswer: 0,
              explanation: 'A root of $x = -1$ corresponds to the factor $x - (-1) = x + 1$, and you place $c = -1$ in the box.',
            },
          ],
        },
      },
      {
        id: 'sd4-special',
        type: 'text' as const,
        content: `## When the Divisor Isn't $x - c$

### Divisor with a leading coefficient: $2x - 3$

Synthetic division needs a **monic** linear divisor ($x - c$). Factor out the leading coefficient first:

$$2x - 3 = 2\\left(x - \\tfrac{3}{2}\\right)$$

Synthetic-divide by $x - \\tfrac{3}{2}$ (use $c = \\tfrac{3}{2}$), **then divide the quotient by $2$** to account for the factored-out constant.

### A negative root: dividing by $x + 5$

Rewrite $x + 5 = x - (-5)$ and use $c = -5$. The algorithm is identical — just carry the negative carefully through every multiply step.

> ⚠️ **Two common slips:** (1) forgetting to use the *negative* root for $x + c$, and (2) forgetting the place-holding $0$s for missing terms.`,
      },
      {
        id: 'sd4-negroot-drill',
        type: 'input-boxes' as const,
        content: `**Divide by a Binomial with a Negative Root** 🧮

Divide $x^3 + 6x^2 + 11x + 6$ by $x + 1$.

First, the root: $x + 1 = 0 \\Rightarrow c = -1$. Coefficients $1,\\ 6,\\ 11,\\ 6$. Fill in the bottom row.

**1)** First entry (brought down) $= \\,?$
**2)** Second entry $= \\,?$
**3)** Third entry $= \\,?$
**4)** Remainder $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['1', '5', '6', '0'],
          hint1: 'Bring down $1$. Then $1\\cdot(-1) = -1$, and $6 + (-1) = 5$.',
          hint2: '$5 \\cdot (-1) = -5$, and $11 + (-5) = 6$.',
          hint3: '$6 \\cdot (-1) = -6$, and $6 + (-6) = 0$. Remainder $0$ confirms $x+1$ is a factor.',
          explanation: 'Bottom row $1,\\ 5,\\ 6,\\ 0$. Quotient $x^2 + 5x + 6 = (x+2)(x+3)$, so $x^3+6x^2+11x+6 = (x+1)(x+2)(x+3)$.',
        },
      },
      {
        id: 'sd4-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Complete the Factoring** 🔽

From the drill above, $x^3 + 6x^2 + 11x + 6 = (x+1)\\cdot Q(x)$ where $Q(x) = x^2 + 5x + 6$.`,
        exercise: {
          dropdowns: [
            { label: 'The quotient $x^2 + 5x + 6$ factors as:', options: ['$(x+2)(x+3)$', '$(x-2)(x-3)$', '$(x+1)(x+6)$', '$(x+5)(x+6)$'] },
            { label: 'So the full factorization is:', options: ['$(x+1)(x+2)(x+3)$', '$(x+1)(x-2)(x-3)$', '$(x-1)(x-2)(x-3)$', '$(x+1)(x+5)(x+6)$'] },
            { label: 'The three roots are:', options: ['$-1,\\ -2,\\ -3$', '$1,\\ 2,\\ 3$', '$-1,\\ 2,\\ 3$', '$1,\\ -2,\\ -3$'] },
          ],
          correctAnswers: ['$(x+2)(x+3)$', '$(x+1)(x+2)(x+3)$', '$-1,\\ -2,\\ -3$'],
          hint1: 'Find two numbers that multiply to $6$ and add to $5$: namely $2$ and $3$.',
          hint2: 'Combine the peeled-off factor $(x+1)$ with the factors of the quotient.',
          hint3: 'Set each factor to $0$: $x+1=0,\\ x+2=0,\\ x+3=0$ give $-1,\\ -2,\\ -3$.',
          explanation: '$x^2+5x+6 = (x+2)(x+3)$, so the cubic is $(x+1)(x+2)(x+3)$ with roots $-1,\\ -2,\\ -3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'synthetic-division',
    sections: [
      {
        id: 'sd5-intro',
        type: 'text' as const,
        content: `# ➗ Synthetic Division

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) set up coefficients and roots, (2) run the bring-down-multiply-add algorithm, (3) use the Remainder and Factor Theorems, and (4) factor polynomials completely. Time to put it together.`,
      },
      {
        id: 'sd5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Set up | List coefficients (insert $0$ for gaps); use root $c$ of $x - c$ |
| Run it | Bring down → multiply by $c$ → add, across the row |
| Read it | Last entry = remainder; rest = quotient (degree one lower) |
| Evaluate $P(c)$ | Remainder Theorem: remainder $= P(c)$ |
| Test a factor | Factor Theorem: remainder $0$ ⟺ $x - c$ is a factor |

> ⚠️ Remember: divide by $x + c$ ⟹ use $c$ **negative**, and never skip a place-holding $0$.`,
      },
      {
        id: 'sd5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Divide $x^3 - 6x^2 + 11x - 6$ by $x - 1$. What is the remainder?',
              options: ['$0$', '$1$', '$-6$', '$6$'],
              correctAnswer: 0,
              explanation: 'Using $c = 1$ on $1,\\ -6,\\ 11,\\ -6$: bottom row $1,\\ -5,\\ 6,\\ 0$. Remainder $0$, so $x - 1$ is a factor (and $P(1) = 1-6+11-6 = 0$).',
            },
            {
              question: 'Using the Remainder Theorem, $P(x) = x^3 + 2x^2 - x + 1$ at $x = -1$ equals:',
              options: ['$3$', '$1$', '$-1$', '$0$'],
              correctAnswer: 0,
              explanation: 'Direct check: $P(-1) = (-1) + 2(1) - (-1) + 1 = -1 + 2 + 1 + 1 = 3$. Synthetic division with $c=-1$ gives the same remainder $3$.',
            },
          ],
        },
      },
      {
        id: 'sd5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Full Division** 🧮

Divide $2x^3 + 3x^2 - 11x - 6$ by $x - 2$ (root $c = 2$; coefficients $2,\\ 3,\\ -11,\\ -6$).

**1)** First bottom-row entry $= \\,?$
**2)** Second entry $= \\,?$
**3)** Third entry $= \\,?$
**4)** Remainder $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '7', '3', '0'],
          hint1: 'Bring down $2$. Then $2\\cdot 2 = 4$, and $3 + 4 = 7$.',
          hint2: '$7 \\cdot 2 = 14$, and $-11 + 14 = 3$.',
          hint3: '$3 \\cdot 2 = 6$, and $-6 + 6 = 0$.',
          explanation: 'Bottom row $2,\\ 7,\\ 3,\\ 0$. Quotient $2x^2 + 7x + 3$, remainder $0$, so $x - 2$ is a factor.',
        },
      },
      {
        id: 'sd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'To divide $3x^3 - 5x + 2$ by $x + 2$ using synthetic division, what number goes in the box and what coefficient list do you use?',
              options: [
                '$c = -2$ with coefficients $3,\\ 0,\\ -5,\\ 2$',
                '$c = 2$ with coefficients $3,\\ -5,\\ 2$',
                '$c = -2$ with coefficients $3,\\ -5,\\ 2$',
                '$c = 2$ with coefficients $3,\\ 0,\\ -5,\\ 2$',
              ],
              correctAnswer: 0,
              explanation: '$x + 2 = x - (-2)$ so $c = -2$. The $x^2$ term is missing, so insert a $0$: coefficients are $3,\\ 0,\\ -5,\\ 2$.',
            },
            {
              question: 'Dividing $P(x)$ by $x - 5$ leaves a remainder of $0$. Which is guaranteed?',
              options: [
                '$x - 5$ is a factor of $P(x)$',
                '$P(0) = 5$',
                '$P(x)$ is a quadratic',
                '$x + 5$ is a factor of $P(x)$',
              ],
              correctAnswer: 0,
              explanation: 'By the Factor Theorem, remainder $0$ means $x - 5$ is a factor and $5$ is a root, so $P(5) = 0$.',
            },
            {
              question: 'A synthetic division of $x^3 - 2x^2 - 5x + 6$ by $x - 1$ gives bottom row $1,\\ -1,\\ -6,\\ 0$. The fully factored form is:',
              options: [
                '$(x - 1)(x - 3)(x + 2)$',
                '$(x - 1)(x + 3)(x - 2)$',
                '$(x - 1)(x - 3)(x - 2)$',
                '$(x + 1)(x - 3)(x + 2)$',
              ],
              correctAnswer: 0,
              explanation: 'Quotient $x^2 - x - 6 = (x - 3)(x + 2)$. With the peeled factor $x - 1$: $(x-1)(x-3)(x+2)$. Roots $1,\\ 3,\\ -2$.',
            },
          ],
        },
      },
    ],
  },
]
