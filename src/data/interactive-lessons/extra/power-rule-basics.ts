import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Power Rule (AP Calculus AB).
 * Registry key / DB Topic.slug: 'power-rule-basics'.
 * 7 parts, gold-standard structure: what a derivative is + the rule for whole-number
 * powers → negative & fractional (radical) exponents via rewriting → constant-multiple
 * and sum/difference rules (full polynomials) → tricky rewrites (constants, x, 1/x,
 * roots, products you must expand) → higher-order derivatives & evaluating at a point →
 * applications (slopes, tangent lines, rates, particle motion) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative computation was verified by hand and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'power-rule-basics',
    sections: [
      {
        id: 'pwr1-intro',
        type: 'text' as const,
        content: `# 📈 The Power Rule

**Part 1 of 7 — The Rule for Whole-Number Powers**

---

### Topics in This Part

| Section |
|---------|
| What a Derivative Tells You |
| The Power Rule Formula |
| Bring Down, Subtract One |
| Your First Derivatives |

> 🔑 **Key Concept:** The derivative of $x^n$ is $n x^{n-1}$. You **bring the exponent down** as a multiplier and **subtract 1** from it. This one rule is the workhorse of all of differential calculus.`,
      },
      {
        id: 'pwr1-meaning',
        type: 'text' as const,
        content: `## What a Derivative Tells You, and the Rule That Finds It

The **derivative** of $f(x)$, written $f'(x)$ or $\\dfrac{dy}{dx}$, measures the **slope** of the curve at each point.

- For a line $y = mx + b$, the slope is the constant $m$ everywhere.
- For a curve like $y = x^2$, the slope **changes** from point to point, so the derivative is a *formula* that gives the slope at any $x$.

We *could* find every slope with the limit definition $f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}$ — but that's slow. The **Power Rule** is the shortcut:

$$\\frac{d}{dx}\\left[x^n\\right] = n\\,x^{\\,n-1}$$

In words: **multiply by the old exponent, then lower the exponent by 1.**

> 💡 **Notation:** $f'(x)$, $y'$, and $\\dfrac{dy}{dx}$ all mean "the derivative." We'll use them interchangeably.

### Examples — Bring Down, Subtract One

| Function | Bring down $n$ | Subtract 1 | Derivative |
|----------|----------------|-----------|------------|
| $x^2$ | $2 \\cdot x$ | $2-1 = 1$ | $2x$ |
| $x^3$ | $3 \\cdot x$ | $3-1 = 2$ | $3x^2$ |
| $x^5$ | $5 \\cdot x$ | $5-1 = 4$ | $5x^4$ |
| $x^{10}$ | $10 \\cdot x$ | $10-1 = 9$ | $10x^9$ |

> 🔑 **The two-step ritual:** (1) the exponent jumps down in front, (2) the exponent shrinks by one. Say it every time until it's automatic.`,
      },
      {
        id: 'pwr1-mc-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\left[x^7\\right]$?',
              options: ['$7x^6$', '$7x^8$', '$6x^7$', '$x^6$'],
              correctAnswer: 0,
              explanation: 'Bring the $7$ down and subtract 1 from the exponent: $7x^{7-1} = 7x^6$.',
            },
            {
              question: 'When you apply the Power Rule to $x^n$, the new exponent is:',
              options: ['$n - 1$', '$n + 1$', '$n$', '$1 - n$'],
              correctAnswer: 0,
              explanation: 'The Power Rule lowers the exponent by one: $x^n \\to n\\,x^{n-1}$.',
            },
          ],
        },
      },
      {
        id: 'pwr1-try',
        type: 'text' as const,
        content: `## Read the Output Carefully

Every Power Rule answer has two parts: a **coefficient** (the number you brought down) and a **new exponent**.

$$\\frac{d}{dx}\\left[x^4\\right] = \\underbrace{4}_{\\text{coefficient}}\\;x^{\\underbrace{3}_{\\text{new exponent}}}$$

Keep those two pieces straight in the next drill.`,
      },
      {
        id: 'pwr1-input-basic',
        type: 'input-boxes' as const,
        content: `**Bring Down, Subtract One** 🧮

Differentiate each. Enter the **coefficient** and the **new exponent** for each derivative.

**1)** $\\dfrac{d}{dx}\\left[x^4\\right] = \\square\\,x^{\\square}$  → enter the coefficient, then the exponent
**2)** $\\dfrac{d}{dx}\\left[x^9\\right] = \\square\\,x^{\\square}$  → enter the coefficient, then the exponent`,
        exercise: {
          boxes: 4,
          correctAnswers: ['4', '3', '9', '8'],
          hint1: 'The coefficient is the old exponent; the new exponent is one less.',
          hint2: 'For $x^4$: coefficient $4$, new exponent $4-1=3$.',
          hint3: 'For $x^9$: coefficient $9$, new exponent $9-1=8$.',
          explanation: '1) $\\frac{d}{dx}[x^4] = 4x^3$ → coefficient $4$, exponent $3$.  2) $\\frac{d}{dx}[x^9] = 9x^8$ → coefficient $9$, exponent $8$.',
        },
      },
      {
        id: 'pwr1-why',
        type: 'text' as const,
        content: `## A Derivative Is a Formula, Not a Number

It's worth pausing on *why* a derivative looks like $2x$ instead of a single value. The graph of $y = x^2$ **curves**, so its slope is different at every point. The derivative $2x$ is a **slope formula**: plug in any $x$ and it returns the slope there.

Keep that in mind for the final check of this part.`,
      },
      {
        id: 'pwr1-mc-evaluate',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The derivative of $x^6$ is:',
              options: ['$6x^5$', '$5x^6$', '$6x^7$', '$x^5$'],
              correctAnswer: 0,
              explanation: '$\\frac{d}{dx}[x^6] = 6x^{6-1} = 6x^5$.',
            },
            {
              question: 'Why is the derivative of $y = x^2$ NOT a single number?',
              options: [
                'The slope of a parabola changes from point to point, so the derivative is a formula in $x$.',
                'Because $x^2$ has no slope.',
                'Because the Power Rule only works for lines.',
                'The derivative of $x^2$ really is a single number, $2$.',
              ],
              correctAnswer: 0,
              explanation: 'A parabola curves, so its slope is different at every $x$. The derivative $2x$ is a formula that outputs the slope at whatever $x$ you plug in.',
            },
          ],
        },
      },
      {
        id: 'pwr1-recap',
        type: 'text' as const,
        content: `## Part 1 Recap

You now own the core move:

$$\\frac{d}{dx}\\left[x^n\\right] = n\\,x^{\\,n-1}$$

- The derivative is the **slope** of the curve at each point.
- **Bring the exponent down**, then **subtract 1**.

So far we've only used whole-number exponents like $2, 3, 5$. But the Power Rule works for **every** constant exponent — including **negative** and **fractional** ones. That's Part 2, and it's what makes the rule so powerful.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'power-rule-basics',
    sections: [
      {
        id: 'pwr2-intro',
        type: 'text' as const,
        content: `# 📈 The Power Rule

**Part 2 of 7 — Negative & Fractional Exponents**

---

> 🔑 **The Big Idea:** $\\frac{d}{dx}[x^n] = n x^{n-1}$ holds for **any** constant $n$ — negative, zero, or fractional. The trick is **rewriting** roots and reciprocals as powers of $x$ *first*, then differentiating.`,
      },
      {
        id: 'pwr2-rewrite',
        type: 'text' as const,
        content: `## Rewrite First, Then Differentiate

The Power Rule needs a clean $x^n$. So before you differentiate, convert reciprocals and radicals into exponents:

| Expression | Rewrite as $x^n$ |
|------------|------------------|
| $\\dfrac{1}{x}$ | $x^{-1}$ |
| $\\dfrac{1}{x^3}$ | $x^{-3}$ |
| $\\sqrt{x}$ | $x^{1/2}$ |
| $\\sqrt[3]{x}$ | $x^{1/3}$ |
| $\\dfrac{1}{\\sqrt{x}}$ | $x^{-1/2}$ |

Two laws of exponents make every rewrite:

$$\\frac{1}{x^a} = x^{-a} \\qquad \\sqrt[b]{x^a} = x^{a/b}$$

> ⚠️ **Don't try to differentiate $\\dfrac{1}{x^3}$ directly.** Rewrite it as $x^{-3}$, *then* apply the rule.`,
      },
      {
        id: 'pwr2-dropdown-rewrite',
        type: 'dropdown-select' as const,
        content: `**Rewrite as a Power** 🔽

Convert each expression to the form $x^n$ before differentiating.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{1}{x^5}$ is:', options: ['$x^{-5}$', '$x^5$', '$x^{1/5}$', '$x^{-1/5}$'] },
            { label: '$\\sqrt{x}$ is:', options: ['$x^{1/2}$', '$x^2$', '$x^{-1/2}$', '$2x$'] },
            { label: '$\\dfrac{1}{\\sqrt{x}}$ is:', options: ['$x^{-1/2}$', '$x^{1/2}$', '$x^{-2}$', '$x^2$'] },
            { label: '$\\sqrt[3]{x^2}$ is:', options: ['$x^{2/3}$', '$x^{3/2}$', '$x^{-2/3}$', '$x^6$'] },
          ],
          correctAnswers: ['$x^{-5}$', '$x^{1/2}$', '$x^{-1/2}$', '$x^{2/3}$'],
          hint1: 'A reciprocal flips the sign of the exponent: $\\frac{1}{x^a} = x^{-a}$.',
          hint2: 'A root becomes a fractional exponent: $\\sqrt[b]{x} = x^{1/b}$.',
          hint3: '$\\sqrt[3]{x^2} = x^{2/3}$ — the root index is the denominator, the inner power is the numerator.',
          explanation: 'Reciprocals give negative exponents; roots give fractional exponents. These rewrites set up the Power Rule.',
        },
      },
      {
        id: 'pwr2-worked-neg',
        type: 'text' as const,
        content: `## Worked Example: A Negative Exponent

Differentiate $f(x) = \\dfrac{1}{x^3}$.

**Step 1 — Rewrite:** $f(x) = x^{-3}$

**Step 2 — Power Rule:** bring down $-3$, subtract 1 from the exponent:

$$f'(x) = -3\\,x^{-3-1} = -3x^{-4}$$

**Step 3 — Rewrite back (optional, but expected on the AP exam):**

$$f'(x) = -\\frac{3}{x^4}$$

> 💡 With negative exponents, "subtract 1" makes the exponent **more negative**: $-3 - 1 = -4$.`,
      },
      {
        id: 'pwr2-worked-frac',
        type: 'text' as const,
        content: `## Worked Example: A Fractional Exponent

Differentiate $g(x) = \\sqrt{x}$.

**Step 1 — Rewrite:** $g(x) = x^{1/2}$

**Step 2 — Power Rule:** bring down $\\frac{1}{2}$, subtract 1 from the exponent. Note $\\frac{1}{2} - 1 = -\\frac{1}{2}$:

$$g'(x) = \\frac{1}{2}\\,x^{-1/2}$$

**Step 3 — Rewrite back:**

$$g'(x) = \\frac{1}{2\\sqrt{x}}$$

> 🔑 **Memorize this one:** $\\dfrac{d}{dx}\\left[\\sqrt{x}\\right] = \\dfrac{1}{2\\sqrt{x}}$. It shows up constantly.`,
      },
      {
        id: 'pwr2-mc-negfrac',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\left[x^{-4}\\right]$?',
              options: ['$-4x^{-5}$', '$4x^{-3}$', '$-4x^{-3}$', '$-4x^5$'],
              correctAnswer: 0,
              explanation: 'Bring down $-4$ and subtract 1: $-4 - 1 = -5$, giving $-4x^{-5}$ (also written $-\\frac{4}{x^5}$).',
            },
            {
              question: 'Rewriting $\\sqrt[3]{x}$ as a power, its derivative is:',
              options: ['$\\frac{1}{3}x^{-2/3}$', '$\\frac{1}{3}x^{2/3}$', '$3x^{-2/3}$', '$\\frac{1}{3}x^{1/3}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt[3]{x} = x^{1/3}$. Then $\\frac{1}{3}x^{1/3 - 1} = \\frac{1}{3}x^{-2/3}$.',
            },
          ],
        },
      },
      {
        id: 'pwr2-bridge',
        type: 'text' as const,
        content: `## Watch the Subtraction

The one place students slip is the "subtract 1" step with fractions and negatives:

- $-2 - 1 = -3$ (more negative)
- $\\dfrac{1}{5} - 1 = -\\dfrac{4}{5}$ (crosses below zero)

Write the subtraction out explicitly in the next drill — don't do it in your head.`,
      },
      {
        id: 'pwr2-input-negfrac',
        type: 'input-boxes' as const,
        content: `**Differentiate (Negative & Fractional)** 🧮

Rewrite as a power, then differentiate. Enter the **coefficient** and the **new exponent** (use a fraction like $-1/2$ when needed).

**1)** $\\dfrac{1}{x^2}$:  coefficient $= \\square$, new exponent $= \\square$
**2)** $\\sqrt[5]{x}$ (i.e. $x^{1/5}$):  coefficient $= \\square$, new exponent $= \\square$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-2', '-3', '1/5', '-4/5'],
          hint1: '$\\frac{1}{x^2} = x^{-2}$, so the coefficient is $-2$ and the new exponent is $-2-1$.',
          hint2: '$-2 - 1 = -3$, so $\\frac{d}{dx}[x^{-2}] = -2x^{-3}$.',
          hint3: '$x^{1/5}$: coefficient $\\frac{1}{5}$; new exponent $\\frac{1}{5} - 1 = -\\frac{4}{5}$.',
          explanation: '1) $x^{-2} \\to -2x^{-3}$.  2) $x^{1/5} \\to \\frac{1}{5}x^{-4/5}$. Subtracting 1 always lowers the exponent.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'power-rule-basics',
    sections: [
      {
        id: 'pwr3-intro',
        type: 'text' as const,
        content: `# 📈 The Power Rule

**Part 3 of 7 — Constant Multiples, Sums & Differences**

---

> 🔑 **The Combo:** A coefficient just rides along ($\\frac{d}{dx}[c\\,x^n] = c\\,n\\,x^{n-1}$), and you can differentiate a sum **term by term**. Together with the Power Rule, this lets you differentiate **any polynomial**.`,
      },
      {
        id: 'pwr3-rules',
        type: 'text' as const,
        content: `## Two Helper Rules

**Constant Multiple Rule** — a constant factor stays put:

$$\\frac{d}{dx}\\left[c \\cdot f(x)\\right] = c \\cdot f'(x)$$

So $\\dfrac{d}{dx}\\left[7x^3\\right] = 7 \\cdot 3x^2 = 21x^2$.

**Sum & Difference Rule** — differentiate each term separately:

$$\\frac{d}{dx}\\left[f(x) \\pm g(x)\\right] = f'(x) \\pm g'(x)$$

### Worked Example: $y = 4x^3 - 2x^2 + 5x$

$$\\frac{dy}{dx} = 4(3x^2) - 2(2x) + 5(1) = 12x^2 - 4x + 5$$

> 💡 Each term is handled on its own — the coefficient multiplies the result of the Power Rule.`,
      },
      {
        id: 'pwr3-mc-coeff',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\left[6x^5\\right]$?',
              options: ['$30x^4$', '$6x^4$', '$30x^5$', '$11x^4$'],
              correctAnswer: 0,
              explanation: 'Keep the $6$, apply the Power Rule to $x^5$: $6 \\cdot 5x^4 = 30x^4$.',
            },
            {
              question: 'What is $\\dfrac{d}{dx}\\left[x^4 + x^2\\right]$?',
              options: ['$4x^3 + 2x$', '$4x^3 + 2x^2$', '$x^3 + x$', '$4x^4 + 2x^2$'],
              correctAnswer: 0,
              explanation: 'Differentiate term by term: $\\frac{d}{dx}[x^4] = 4x^3$ and $\\frac{d}{dx}[x^2] = 2x$, so the sum is $4x^3 + 2x$.',
            },
          ],
        },
      },
      {
        id: 'pwr3-worked-poly',
        type: 'text' as const,
        content: `## Worked Example: A Full Polynomial

Differentiate $f(x) = 3x^4 - 5x^2 + 2x - 9$.

Go **term by term**:

$$\\frac{d}{dx}\\left[3x^4\\right] = 12x^3$$
$$\\frac{d}{dx}\\left[-5x^2\\right] = -10x$$
$$\\frac{d}{dx}\\left[2x\\right] = 2$$
$$\\frac{d}{dx}\\left[-9\\right] = 0$$

Add them up:

$$f'(x) = 12x^3 - 10x + 2$$

> ⚠️ **The constant $-9$ vanishes.** A constant has slope $0$ (its graph is a flat line), so its derivative is $0$. More on this in Part 4.`,
      },
      {
        id: 'pwr3-dropdown-terms',
        type: 'dropdown-select' as const,
        content: `**Differentiate Term by Term** 🔽

For $f(x) = 2x^3 - 7x^2 + 4x + 1$, choose the derivative of each piece.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{d}{dx}[2x^3] =$', options: ['$6x^2$', '$2x^2$', '$6x^3$', '$3x^2$'] },
            { label: '$\\frac{d}{dx}[-7x^2] =$', options: ['$-14x$', '$-7x$', '$14x$', '$-14x^2$'] },
            { label: '$\\frac{d}{dx}[4x] =$', options: ['$4$', '$4x$', '$0$', '$1$'] },
            { label: '$\\frac{d}{dx}[1] =$', options: ['$0$', '$1$', '$x$', '$-1$'] },
          ],
          correctAnswers: ['$6x^2$', '$-14x$', '$4$', '$0$'],
          hint1: 'Constant multiples ride along: $\\frac{d}{dx}[2x^3] = 2 \\cdot 3x^2$.',
          hint2: '$\\frac{d}{dx}[4x] = 4$, since $x^1 \\to 1 \\cdot x^0 = 1$, times the coefficient $4$.',
          hint3: 'The derivative of any constant (like $1$) is $0$.',
          explanation: 'Putting it together: $f\'(x) = 6x^2 - 14x + 4$.',
        },
      },
      {
        id: 'pwr3-assemble',
        type: 'text' as const,
        content: `## Assemble the Whole Derivative

Once you've differentiated each term, just **string them back together** with their signs:

$$f(x) = 2x^3 - 7x^2 + 4x + 1 \\;\\Longrightarrow\\; f'(x) = 6x^2 - 14x + 4$$

The constant term disappears, and every other term drops one degree. Try a complete polynomial next.`,
      },
      {
        id: 'pwr3-input-poly',
        type: 'input-boxes' as const,
        content: `**Differentiate the Polynomial** 🧮

For $f(x) = x^3 - 4x^2 + 6x - 5$, the derivative is $f'(x) = ax^2 + bx + c$.

Enter $a$, $b$, and $c$ in order.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-8', '6'],
          hint1: '$\\frac{d}{dx}[x^3] = 3x^2$, so $a = 3$.',
          hint2: '$\\frac{d}{dx}[-4x^2] = -8x$, so $b = -8$.',
          hint3: '$\\frac{d}{dx}[6x] = 6$ and $\\frac{d}{dx}[-5] = 0$, so $c = 6$.',
          explanation: '$f\'(x) = 3x^2 - 8x + 6$. So $a=3$, $b=-8$, $c=6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'power-rule-basics',
    sections: [
      {
        id: 'pwr4-intro',
        type: 'text' as const,
        content: `# 📈 The Power Rule

**Part 4 of 7 — Special Cases & Sneaky Rewrites**

---

> 🔑 **The Trap:** Many problems *look* like they need a new rule, but they're just the Power Rule in disguise. The skill is **algebra first** — turn the expression into a sum of powers $c\\,x^n$, then differentiate.`,
      },
      {
        id: 'pwr4-special',
        type: 'text' as const,
        content: `## Three Special Cases to Memorize

| Function | Why | Derivative |
|----------|-----|------------|
| $\\dfrac{d}{dx}[c]$ (a constant) | $c = c x^0$, and a flat line has slope $0$ | $0$ |
| $\\dfrac{d}{dx}[x]$ | $x = x^1$, so $1 \\cdot x^0 = 1$ | $1$ |
| $\\dfrac{d}{dx}\\left[\\dfrac{1}{x}\\right]$ | rewrite $x^{-1} \\to -1 \\cdot x^{-2}$ | $-\\dfrac{1}{x^2}$ |

> 🔑 **The derivative of a constant is $0$, and the derivative of $x$ is $1$.** These come up in nearly every problem.`,
      },
      {
        id: 'pwr4-mc-special',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\left[12\\right]$?',
              options: ['$0$', '$12$', '$1$', '$12x$'],
              correctAnswer: 0,
              explanation: 'The derivative of any constant is $0$ — a horizontal line has slope $0$.',
            },
            {
              question: 'What is $\\dfrac{d}{dx}\\left[\\dfrac{1}{x}\\right]$?',
              options: ['$-\\dfrac{1}{x^2}$', '$\\dfrac{1}{x^2}$', '$-\\dfrac{1}{x}$', '$\\ln x$'],
              correctAnswer: 0,
              explanation: 'Rewrite $\\frac{1}{x} = x^{-1}$. Then $-1 \\cdot x^{-2} = -x^{-2} = -\\frac{1}{x^2}$.',
            },
          ],
        },
      },
      {
        id: 'pwr4-expand',
        type: 'text' as const,
        content: `## When You Must Rewrite First

The Power Rule applies to a **single** power $x^n$. It does **not** apply directly to products or quotients of powers. **Expand or split first.**

### Worked Example: A Product — $f(x) = x^2(3x - 4)$

Distribute, *then* differentiate:

$$f(x) = 3x^3 - 4x^2 \\quad\\Longrightarrow\\quad f'(x) = 9x^2 - 8x$$

### Worked Example: A Quotient — $g(x) = \\dfrac{x^3 + 6x}{x}$

Split the fraction, *then* differentiate:

$$g(x) = \\frac{x^3}{x} + \\frac{6x}{x} = x^2 + 6 \\quad\\Longrightarrow\\quad g'(x) = 2x$$

> ⚠️ **Common mistake:** "differentiating top and bottom separately" is **wrong**. Simplify into a sum of powers first — then the Power Rule is legal.`,
      },
      {
        id: 'pwr4-dropdown-rewrite',
        type: 'dropdown-select' as const,
        content: `**Rewrite, Then Differentiate** 🔽

For each, pick the simplified form first, then its derivative.`,
        exercise: {
          dropdowns: [
            { label: '$x(x + 5)$ simplifies to:', options: ['$x^2 + 5x$', '$x^2 + 5$', '$2x + 5$', '$x + 5$'] },
            { label: 'so its derivative is:', options: ['$2x + 5$', '$x + 5$', '$2x$', '$2x + 5x$'] },
            { label: '$\\dfrac{x^4 - x^2}{x^2}$ simplifies to:', options: ['$x^2 - 1$', '$x^2 - x$', '$x^4 - 1$', '$x^2 + 1$'] },
            { label: 'so its derivative is:', options: ['$2x$', '$2x - 1$', '$x$', '$2x - 2x$'] },
          ],
          correctAnswers: ['$x^2 + 5x$', '$2x + 5$', '$x^2 - 1$', '$2x$'],
          hint1: 'Distribute or split the fraction before differentiating.',
          hint2: '$x(x+5) = x^2 + 5x$, whose derivative is $2x + 5$.',
          hint3: '$\\frac{x^4 - x^2}{x^2} = x^2 - 1$; the $-1$ is a constant, so its derivative is just $2x$.',
          explanation: 'Always simplify to a sum of powers first, then apply the Power Rule term by term.',
        },
      },
      {
        id: 'pwr4-checklist',
        type: 'text' as const,
        content: `## The "Simplify First" Checklist

Before reaching for the Power Rule, ask:

1. Is there a **product**? → distribute it.
2. Is there a **quotient** of powers? → split the fraction term by term.
3. Are there **roots or reciprocals**? → rewrite as exponents.

Only when the expression is a clean **sum of powers** $c\\,x^n$ is it safe to differentiate. Apply that checklist now.`,
      },
      {
        id: 'pwr4-input-rewrite',
        type: 'input-boxes' as const,
        content: `**Simplify, Then Differentiate** 🧮

**1)** $f(x) = x^2(x - 3)$. Its derivative is $f'(x) = ax^2 + bx$. Enter $a$, then $b$.
**2)** $g(x) = \\dfrac{4x^3}{x}$. After simplifying, $g'(x) = cx$. Enter $c$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-6', '8'],
          hint1: 'Distribute: $x^2(x-3) = x^3 - 3x^2$.',
          hint2: '$\\frac{d}{dx}[x^3 - 3x^2] = 3x^2 - 6x$, so $a=3$, $b=-6$.',
          hint3: '$\\frac{4x^3}{x} = 4x^2$, and $\\frac{d}{dx}[4x^2] = 8x$, so $c=8$.',
          explanation: '1) $x^3 - 3x^2 \\to 3x^2 - 6x$, so $a=3$, $b=-6$.  2) $4x^2 \\to 8x$, so $c=8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'power-rule-basics',
    sections: [
      {
        id: 'pwr5-intro',
        type: 'text' as const,
        content: `# 📈 The Power Rule

**Part 5 of 7 — Evaluating & Higher-Order Derivatives**

---

> 🔑 **Two skills here:** (1) plug a number into $f'(x)$ to get the **slope at a point**, and (2) differentiate *again* to get the **second derivative** $f''(x)$, which measures how the slope itself is changing.`,
      },
      {
        id: 'pwr5-evaluate',
        type: 'text' as const,
        content: `## Evaluating a Derivative at a Point

$f'(x)$ is a **formula**. Plug in a specific $x$ to get the **slope there**, written $f'(a)$ or $\\left.\\dfrac{dy}{dx}\\right|_{x=a}$.

### Worked Example: $f(x) = x^3$, find $f'(2)$

$$f'(x) = 3x^2 \\quad\\Longrightarrow\\quad f'(2) = 3(2)^2 = 3 \\cdot 4 = 12$$

So the curve $y = x^3$ has slope $12$ at the point where $x = 2$.

> ⚠️ **Differentiate first, plug in second.** Never substitute the number *before* taking the derivative — you'd just get the slope of a horizontal line ($0$).`,
      },
      {
        id: 'pwr5-input-evaluate',
        type: 'input-boxes' as const,
        content: `**Slope at a Point** 🧮

**1)** $f(x) = x^2$. Find $f'(3)$.
**2)** $g(x) = x^4 - 2x$. Find $g'(1)$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '2'],
          hint1: '$f\'(x) = 2x$, so $f\'(3) = 2(3)$.',
          hint2: '$g\'(x) = 4x^3 - 2$, so $g\'(1) = 4(1)^3 - 2$.',
          hint3: '$g\'(1) = 4 - 2 = 2$.',
          explanation: '1) $f\'(x)=2x$, $f\'(3) = 6$.  2) $g\'(x) = 4x^3 - 2$, $g\'(1) = 4 - 2 = 2$.',
        },
      },
      {
        id: 'pwr5-higher',
        type: 'text' as const,
        content: `## Higher-Order Derivatives

Differentiate the derivative to get the **second derivative**, $f''(x)$. Keep going for the third, $f'''(x)$, and beyond.

### Worked Example: $f(x) = x^4$

$$f'(x) = 4x^3$$
$$f''(x) = 12x^2$$
$$f'''(x) = 24x$$
$$f^{(4)}(x) = 24$$

Each time, you just apply the Power Rule again.

| Notation | Meaning |
|----------|---------|
| $f'(x)$, $\\dfrac{dy}{dx}$ | first derivative — the slope |
| $f''(x)$, $\\dfrac{d^2y}{dx^2}$ | second derivative — concavity / acceleration |

> 💡 The second derivative tells you whether the slope is **increasing** (curve bends up, concave up) or **decreasing** (concave down).`,
      },
      {
        id: 'pwr5-mc-higher',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f(x) = x^5$, what is $f\'\'(x)$ (the second derivative)?',
              options: ['$20x^3$', '$5x^4$', '$20x^4$', '$25x^3$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 5x^4$, then $f\'\'(x) = 5 \\cdot 4x^3 = 20x^3$.',
            },
            {
              question: 'For $f(x) = 2x^3$, what is $f\'\'(x)$?',
              options: ['$12x$', '$6x^2$', '$6x$', '$12x^2$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 6x^2$, then $f\'\'(x) = 12x$.',
            },
          ],
        },
      },
      {
        id: 'pwr5-stack',
        type: 'text' as const,
        content: `## Differentiate, Then Differentiate Again

To get $f''(x)$, treat $f'(x)$ as your new function and apply the Power Rule a **second** time:

$$x^6 \\;\\xrightarrow{\\;\\frac{d}{dx}\\;}\\; 6x^5 \\;\\xrightarrow{\\;\\frac{d}{dx}\\;}\\; 30x^4$$

The next drill asks for second derivatives — and one of them you'll **evaluate** at a point afterward.`,
      },
      {
        id: 'pwr5-input-second',
        type: 'input-boxes' as const,
        content: `**Second Derivatives** 🧮

**1)** $f(x) = x^6$. Find $f''(x)$: it equals $\\square\\,x^{\\square}$. Enter coefficient, then exponent.
**2)** $g(x) = x^3 - 4x^2$. Find $g''(x)$, then evaluate $g''(2)$ (one number).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '4', '4'],
          hint1: '$f\'(x) = 6x^5$, then $f\'\'(x) = 30x^4$, so coefficient $30$, exponent $4$.',
          hint2: '$g\'(x) = 3x^2 - 8x$, then $g\'\'(x) = 6x - 8$.',
          hint3: '$g\'\'(2) = 6(2) - 8 = 12 - 8 = 4$.',
          explanation: '1) $f\'\'(x) = 30x^4$ → coefficient $30$, exponent $4$.  2) $g\'\'(x) = 6x - 8$, so $g\'\'(2) = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'power-rule-basics',
    sections: [
      {
        id: 'pwr6-intro',
        type: 'text' as const,
        content: `# 📈 The Power Rule

**Part 6 of 7 — Applications: Slopes, Tangent Lines & Motion**

---

> 🔑 **Why it matters:** The derivative is a **slope** and a **rate of change**. With the Power Rule you can find the equation of a **tangent line**, locate where a curve is **flat**, and analyze **velocity** and **acceleration** of a moving object.`,
      },
      {
        id: 'pwr6-tangent',
        type: 'text' as const,
        content: `## Tangent Lines

The **tangent line** to $y = f(x)$ at $x = a$ touches the curve and has slope $f'(a)$. Use point-slope form:

$$y - f(a) = f'(a)\\,(x - a)$$

### Worked Example: Tangent to $y = x^2$ at $x = 3$

1. **Point:** $f(3) = 3^2 = 9$, so the point is $(3, 9)$.
2. **Slope:** $f'(x) = 2x$, so $f'(3) = 6$.
3. **Line:** $y - 9 = 6(x - 3) \\Rightarrow y = 6x - 18 + 9 \\Rightarrow y = 6x - 9$.

> 💡 A curve is **horizontal** (slope $0$) wherever $f'(x) = 0$ — those are the peaks and valleys you'll study in later units.`,
      },
      {
        id: 'pwr6-mc-tangent',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The slope of the tangent to $y = x^3$ at $x = 2$ is:',
              options: ['$12$', '$8$', '$6$', '$3$'],
              correctAnswer: 0,
              explanation: '$y\' = 3x^2$, so at $x=2$ the slope is $3(2)^2 = 3 \\cdot 4 = 12$.',
            },
            {
              question: 'For $f(x) = x^2 - 6x$, where is the tangent line horizontal (slope $0$)?',
              options: ['$x = 3$', '$x = 6$', '$x = 0$', '$x = -3$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 2x - 6$. Set $2x - 6 = 0 \\Rightarrow x = 3$. The slope is $0$ there (the vertex).',
            },
          ],
        },
      },
      {
        id: 'pwr6-motion',
        type: 'text' as const,
        content: `## Position, Velocity & Acceleration

If $s(t)$ gives an object's **position** at time $t$, then:

- **Velocity** is the derivative of position: $v(t) = s'(t)$
- **Acceleration** is the derivative of velocity: $a(t) = v'(t) = s''(t)$

### Worked Example: $s(t) = t^3 - 6t^2 + 9t$

$$v(t) = s'(t) = 3t^2 - 12t + 9$$
$$a(t) = v'(t) = 6t - 12$$

**When is the object at rest?** Set $v(t) = 0$:

$$3t^2 - 12t + 9 = 0 \\;\\Rightarrow\\; t^2 - 4t + 3 = 0 \\;\\Rightarrow\\; (t-1)(t-3) = 0$$

So the object is at rest at $t = 1$ and $t = 3$ seconds.

> 🔑 **Velocity is the first derivative of position; acceleration is the second.** The Power Rule does all the heavy lifting.`,
      },
      {
        id: 'pwr6-dropdown-motion',
        type: 'dropdown-select' as const,
        content: `**Motion Analysis** 🔽

A particle has position $s(t) = t^3 - 6t^2 + 9t$. Use $v(t) = 3t^2 - 12t + 9$ and $a(t) = 6t - 12$.`,
        exercise: {
          dropdowns: [
            { label: 'Velocity at $t = 0$:', options: ['$9$', '$0$', '$-12$', '$3$'] },
            { label: 'Acceleration at $t = 1$:', options: ['$-6$', '$6$', '$0$', '$-12$'] },
            { label: 'Acceleration at $t = 3$:', options: ['$6$', '$-6$', '$0$', '$18$'] },
          ],
          correctAnswers: ['$9$', '$-6$', '$6$'],
          hint1: '$v(0) = 3(0)^2 - 12(0) + 9 = 9$.',
          hint2: '$a(t) = 6t - 12$, so $a(1) = 6 - 12 = -6$.',
          hint3: '$a(3) = 6(3) - 12 = 18 - 12 = 6$.',
          explanation: '$v(0) = 9$; $a(1) = -6$ (slowing/turning); $a(3) = 6$. Acceleration is the second derivative of position.',
        },
      },
      {
        id: 'pwr6-synthesis',
        type: 'text' as const,
        content: `## One Rule, Many Questions

Notice that "slope of a tangent," "where is the curve flat," and "what is the velocity" are all the **same computation**: differentiate, then either plug in a value or set the derivative equal to $0$.

| Question | What to do |
|----------|-----------|
| Slope at $x = a$ | compute $f'(a)$ |
| Where horizontal? | solve $f'(x) = 0$ |
| Velocity at time $t$ | compute $s'(t)$ |

Put all three to work in the final drill.`,
      },
      {
        id: 'pwr6-input-app',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

**1)** Find the slope of the tangent to $y = x^4$ at $x = 1$.
**2)** For $s(t) = t^2 - 8t$, find the velocity $v(t) = s'(t)$ at $t = 5$.
**3)** The tangent to $y = x^2$ is horizontal at which $x$-value?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '0'],
          hint1: '$y\' = 4x^3$, so at $x=1$ the slope is $4(1)^3 = 4$.',
          hint2: '$v(t) = 2t - 8$, so $v(5) = 10 - 8 = 2$.',
          hint3: '$y\' = 2x = 0 \\Rightarrow x = 0$ (the vertex of the parabola).',
          explanation: '1) slope $= 4$.  2) $v(5) = 2$.  3) $2x = 0 \\Rightarrow x = 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'power-rule-basics',
    sections: [
      {
        id: 'pwr7-intro',
        type: 'text' as const,
        content: `# 📈 The Power Rule

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now differentiate any power of $x$, handle negative and fractional exponents, work through full polynomials, take higher-order derivatives, and apply it all to slopes and motion. Time to put it together.`,
      },
      {
        id: 'pwr7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Derivative of $x^n$ | $n\\,x^{n-1}$ — bring down, subtract 1 |
| Coefficient | rides along: $\\frac{d}{dx}[c\\,x^n] = c\\,n\\,x^{n-1}$ |
| Sum / difference | differentiate term by term |
| Constant $c$ | derivative is $0$ |
| $\\frac{1}{x^a}$ or $\\sqrt[b]{x^a}$ | rewrite as $x^{-a}$ or $x^{a/b}$ first |
| Product / quotient of powers | expand or split into a sum first |
| Slope at $x=a$ | compute $f'(a)$ |
| Tangent line | $y - f(a) = f'(a)(x-a)$ |
| Velocity / acceleration | $v = s'$, $\\;a = s''$ |

> ⚠️ **Top two mistakes:** (1) forgetting that a constant's derivative is $0$, and (2) applying the Power Rule to a product/quotient *before* simplifying it into a sum of powers.`,
      },
      {
        id: 'pwr7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $f(x) = 5x^3 - 2x + 7$.',
              options: ['$15x^2 - 2$', '$15x^2 - 2x$', '$15x^2 - 2 + 7$', '$5x^2 - 2$'],
              correctAnswer: 0,
              explanation: 'Term by term: $15x^2$ from $5x^3$, $-2$ from $-2x$, and $0$ from the constant $7$. So $f\'(x) = 15x^2 - 2$.',
            },
            {
              question: 'Differentiate $g(x) = \\dfrac{1}{x^2}$.',
              options: ['$-2x^{-3}$', '$2x^{-3}$', '$-\\frac{1}{2}x^{-3}$', '$-2x^{-1}$'],
              correctAnswer: 0,
              explanation: 'Rewrite $\\frac{1}{x^2} = x^{-2}$. Then $-2x^{-3} = -\\frac{2}{x^3}$.',
            },
          ],
        },
      },
      {
        id: 'pwr7-strategy',
        type: 'text' as const,
        content: `## Before the Final Drill

Two of the questions below hide a product or a coefficient. Remember the plan:

- See a **product**? Expand it into a sum of powers first.
- See a **coefficient**? It just rides along through the Power Rule.

Then it's the same "bring down, subtract 1" you've done all lesson.`,
      },
      {
        id: 'pwr7-input-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $f(x) = x^3(x + 2)$. After expanding, $f'(x) = ax^3 + bx^2$. Enter $a$, then $b$.
**2)** Find the slope of the tangent to $y = 2x^3$ at $x = 1$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '6', '6'],
          hint1: 'Expand: $x^3(x+2) = x^4 + 2x^3$.',
          hint2: '$\\frac{d}{dx}[x^4 + 2x^3] = 4x^3 + 6x^2$, so $a=4$, $b=6$.',
          hint3: 'For $y = 2x^3$: $y\' = 6x^2$, so at $x=1$ the slope is $6(1)^2 = 6$.',
          explanation: '1) $x^4 + 2x^3 \\to 4x^3 + 6x^2$, so $a=4$, $b=6$.  2) $y\' = 6x^2$, slope at $x=1$ is $6$.',
        },
      },
      {
        id: 'pwr7-final-word',
        type: 'text' as const,
        content: `## You're Ready

Everything in differential calculus builds on the move you just mastered:

$$\\frac{d}{dx}\\left[x^n\\right] = n\\,x^{\\,n-1}$$

Bring it down, subtract 1, handle coefficients and sums term by term, and rewrite roots and reciprocals first. The Exit Quiz below confirms you've got it.`,
      },
      {
        id: 'pwr7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\left[x^8\\right]$?',
              options: ['$8x^7$', '$8x^9$', '$7x^8$', '$x^7$'],
              correctAnswer: 0,
              explanation: 'Bring down the $8$ and subtract 1 from the exponent: $8x^{8-1} = 8x^7$.',
            },
            {
              question: 'Differentiate $f(x) = \\sqrt{x}$ (i.e. $x^{1/2}$).',
              options: ['$\\dfrac{1}{2\\sqrt{x}}$', '$\\dfrac{1}{2}\\sqrt{x}$', '$2\\sqrt{x}$', '$\\dfrac{1}{\\sqrt{x}}$'],
              correctAnswer: 0,
              explanation: '$x^{1/2} \\to \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$.',
            },
            {
              question: 'If $s(t) = t^2 - 4t$ is position, what is the velocity $v(t) = s\'(t)$?',
              options: ['$2t - 4$', '$2t$', '$t - 4$', '$2t - 4t$'],
              correctAnswer: 0,
              explanation: 'Velocity is the first derivative of position: $s\'(t) = 2t - 4$.',
            },
          ],
        },
      },
    ],
  },
]
