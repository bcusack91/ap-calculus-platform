import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Constant Multiple and Sum Rules (AP Calculus AB).
 * Registry key: 'constant-multiple-sum-rules' (matches the DB Topic.slug).
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'constant-multiple-sum-rules',
    sections: [
      {
        id: 'cmsr1-intro',
        type: 'text' as const,
        content: `# ➗ Constant Multiple & Sum Rules

**Part 1 of 7 — Why We Need Differentiation Rules**

---

### Topics in This Part

| Section |
|---------|
| The Problem with the Limit Definition |
| Two Rules That Do the Heavy Lifting |
| Reading the Notation |

> 🔑 **Key Concept:** The Constant Multiple Rule and the Sum/Difference Rule let you differentiate *term by term* — break a long polynomial into pieces, differentiate each piece, and reassemble. They are the rules you'll use in almost every derivative for the rest of AP Calculus.`,
      },
      {
        id: 'cmsr1-limit-pain',
        type: 'text' as const,
        content: `## The Problem with the Limit Definition

The derivative is *defined* by a limit:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

That definition always works, but it is slow. To differentiate something like $y = 5x^4 - 3x^2 + 7x$ straight from the limit, you'd expand $(x+h)^4$, $(x+h)^2$, cancel, and take a limit — pages of algebra.

**The rules in this lesson replace all of that.** Once you know the derivative of each *building block*, two structural rules let you combine those pieces instantly:

- the **Constant Multiple Rule** — pull a number out front,
- the **Sum & Difference Rule** — differentiate added/subtracted terms one at a time.

> 💡 You will lean on the **Power Rule** for the building blocks: $\\dfrac{d}{dx}\\left[x^n\\right] = n\\,x^{n-1}$. We'll use it throughout, but the *star* of this lesson is how to combine derivatives, not the power rule itself.`,
      },
      {
        id: 'cmsr1-notation',
        type: 'text' as const,
        content: `## Reading the Notation

The same idea gets written several ways. They all mean "the derivative of":

| Notation | Read as |
|----------|---------|
| $f'(x)$ | "f prime of x" |
| $\\dfrac{dy}{dx}$ | "the derivative of y with respect to x" |
| $\\dfrac{d}{dx}\\big[\\,\\cdots\\,\\big]$ | "take the derivative of whatever's in the brackets" |

A **constant** is just a fixed number ($3$, $-7$, $\\pi$, $\\frac{1}{2}$). A **variable term** contains $x$. Telling these apart is the whole game in Part 2.

> 🔑 The notation $\\dfrac{d}{dx}[\\,\\cdot\\,]$ is an **operator** — it acts on the expression inside the brackets. The two rules tell us how that operator behaves when the inside is a constant times a function, or a sum of functions.`,
      },
      {
        id: 'cmsr1-concept-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression below is a *constant* (no derivative-changing variable)?',
              options: ['$x^2$', '$\\pi$', '$3x$', '$\\sqrt{x}$'],
              correctAnswer: 1,
              explanation: '$\\pi \\approx 3.14159$ is a fixed number, so it is a constant. The others all contain the variable $x$.',
            },
            {
              question: 'In the expression $\\dfrac{d}{dx}\\big[\\,7x^3\\,\\big]$, what is the role of the $7$?',
              options: ['It is the exponent', 'It is the variable', 'It is a constant multiple (a coefficient)', 'It is the base'],
              correctAnswer: 2,
              explanation: 'The $7$ multiplies the function $x^3$. It is a constant coefficient — exactly what the Constant Multiple Rule lets us pull out front.',
            },
          ],
        },
      },
      {
        id: 'cmsr1-count-terms',
        type: 'input-boxes' as const,
        content: `**Count the Pieces** 🧮

The Sum/Difference Rule lets you break an expression at every $+$ or $-$ into separate terms. How many terms does each expression have?

**1)** $x^3 + x^2 + x$ — how many terms?
**2)** $5x^4 - 2x + 7$ — how many terms?
**3)** $9x^2$ — how many terms?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '3', '1'],
          hint1: 'Count the chunks separated by $+$ or $-$ signs.',
          hint2: '$5x^4$, then $-2x$, then $+7$ — that is three separate terms.',
          hint3: 'A single product like $9x^2$ has no $+$ or $-$ inside, so it is just one term.',
          explanation: '1) $x^3,\\ x^2,\\ x$ → $3$ terms.  2) $5x^4,\\ -2x,\\ 7$ → $3$ terms.  3) $9x^2$ → $1$ term. Each term gets differentiated on its own.',
        },
      },
      {
        id: 'cmsr1-preview',
        type: 'text' as const,
        content: `## A Two-Minute Preview

Here are the two rules in plain symbols. We'll prove and drill each one, but it helps to see the destination:

$$\\frac{d}{dx}\\big[\\,c\\cdot f(x)\\,\\big] = c\\cdot f'(x) \\qquad \\text{(Constant Multiple)}$$

$$\\frac{d}{dx}\\big[\\,f(x) \\pm g(x)\\,\\big] = f'(x) \\pm g'(x) \\qquad \\text{(Sum \\& Difference)}$$

In words: **constants slide outside** the derivative, and **the derivative of a sum is the sum of the derivatives.** That's it. The rest of this lesson is learning to use them fluently and avoid the traps.`,
      },
      {
        id: 'cmsr1-which-rule',
        type: 'dropdown-select' as const,
        content: `**Which Rule Applies?** 🔽

For each expression, choose the rule you'd reach for *first*.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d}{dx}\\big[\\,4x^2\\,\\big]$', options: ['Constant Multiple Rule', 'Sum Rule', 'Difference Rule'] },
            { label: '$\\dfrac{d}{dx}\\big[\\,x^3 + x\\,\\big]$', options: ['Constant Multiple Rule', 'Sum Rule', 'Difference Rule'] },
            { label: '$\\dfrac{d}{dx}\\big[\\,x^5 - x^2\\,\\big]$', options: ['Constant Multiple Rule', 'Sum Rule', 'Difference Rule'] },
          ],
          correctAnswers: ['Constant Multiple Rule', 'Sum Rule', 'Difference Rule'],
          hint1: 'A single number multiplying a power signals the Constant Multiple Rule.',
          hint2: 'A plus sign between two terms signals the Sum Rule.',
          hint3: 'A minus sign between two terms signals the Difference Rule.',
          explanation: '$4x^2$ is a constant ($4$) times a function, so Constant Multiple. $x^3+x$ is an addition, so Sum. $x^5-x^2$ is a subtraction, so Difference. Real problems combine all three.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'constant-multiple-sum-rules',
    sections: [
      {
        id: 'cmsr2-intro',
        type: 'text' as const,
        content: `# ➗ Constant Multiple & Sum Rules

**Part 2 of 7 — The Constant Multiple Rule**

---

> 🔑 **The Rule:** $\\dfrac{d}{dx}\\big[\\,c\\cdot f(x)\\,\\big] = c\\cdot f'(x)$. A constant coefficient comes along *unchanged* — differentiate the function and keep the number out front.`,
      },
      {
        id: 'cmsr2-statement',
        type: 'text' as const,
        content: `## Why a Constant Slides Out

Suppose $f(x) = x^2$, so $f'(x) = 2x$. What is the derivative of $5x^2$? Go to the limit definition for one moment:

$$\\frac{d}{dx}\\big[5x^2\\big] = \\lim_{h\\to 0}\\frac{5(x+h)^2 - 5x^2}{h} = 5\\lim_{h\\to 0}\\frac{(x+h)^2 - x^2}{h} = 5\\cdot f'(x)$$

The $5$ factors straight out of the limit because *multiplying every value by 5 multiplies the rate of change by 5.* That is the whole idea:

$$\\boxed{\\;\\frac{d}{dx}\\big[\\,c\\cdot f(x)\\,\\big] = c\\cdot f'(x)\\;}$$

> 💡 **Intuition:** If a car's position is always scaled up by 5, its *speed* (the rate) is scaled up by 5 too. Constants ride along without changing.`,
      },
      {
        id: 'cmsr2-worked',
        type: 'text' as const,
        content: `## Worked Examples

Combine the Constant Multiple Rule with the Power Rule $\\dfrac{d}{dx}[x^n] = n x^{n-1}$.

**Example 1.** Differentiate $y = 5x^3$.
$$\\frac{dy}{dx} = 5\\cdot\\frac{d}{dx}\\big[x^3\\big] = 5\\cdot 3x^2 = 15x^2$$

**Example 2.** Differentiate $y = -4x^6$.
$$\\frac{dy}{dx} = -4\\cdot 6x^5 = -24x^5$$

**Example 3.** Differentiate $y = \\dfrac{1}{2}x^8$.
$$\\frac{dy}{dx} = \\frac{1}{2}\\cdot 8x^7 = 4x^7$$

> ⚠️ The constant multiplies the **whole result**, including the number the Power Rule brings down. In Example 3, you multiply $\\frac{1}{2}\\cdot 8 = 4$ — don't forget to combine the two coefficients.`,
      },
      {
        id: 'cmsr2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Keep the Constant** 🔽

Differentiate $y = 5x^4$ in two stages.`,
        exercise: {
          dropdowns: [
            { label: 'Pull the constant out front:', options: ['$5\\cdot\\dfrac{d}{dx}[x^4]$', '$\\dfrac{d}{dx}[x^4]$', '$x^4\\cdot\\dfrac{d}{dx}[5]$', '$5\\cdot 5\\cdot\\dfrac{d}{dx}[x^4]$'] },
            { label: 'Apply the Power Rule to $x^4$:', options: ['$4x^3$', '$4x^4$', '$x^3$', '$5x^3$'] },
            { label: 'Multiply to finish:', options: ['$20x^3$', '$9x^3$', '$5x^3$', '$20x^4$'] },
          ],
          correctAnswers: ['$5\\cdot\\dfrac{d}{dx}[x^4]$', '$4x^3$', '$20x^3$'],
          hint1: 'The Constant Multiple Rule lets you write $\\frac{d}{dx}[5x^4] = 5\\cdot\\frac{d}{dx}[x^4]$.',
          hint2: '$\\frac{d}{dx}[x^4] = 4x^3$ by the Power Rule.',
          hint3: 'Now multiply the constant back in: $5\\cdot 4x^3 = 20x^3$.',
          explanation: '$\\frac{d}{dx}[5x^4] = 5\\cdot\\frac{d}{dx}[x^4] = 5\\cdot 4x^3 = 20x^3$. The constant rides along and multiplies the final result.',
        },
      },
      {
        id: 'cmsr2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\big[\\,6x^4\\,\\big]$?',
              options: ['$24x^3$', '$6x^3$', '$24x^4$', '$10x^3$'],
              correctAnswer: 0,
              explanation: 'Keep the $6$, apply the Power Rule to $x^4$: $6\\cdot 4x^3 = 24x^3$.',
            },
            {
              question: 'What is $\\dfrac{d}{dx}\\big[\\,-3x^2\\,\\big]$?',
              options: ['$-6x$', '$6x$', '$-3x$', '$-6x^2$'],
              correctAnswer: 0,
              explanation: 'The constant $-3$ stays: $-3\\cdot 2x = -6x$. The sign comes along with the constant.',
            },
          ],
        },
      },
      {
        id: 'cmsr2-bridge',
        type: 'text' as const,
        content: `## One Combined Step

In practice you don't write the rule out in pieces — you multiply the coefficient by the exponent in a single move:

$$\\frac{d}{dx}\\big[\\,c\\,x^n\\,\\big] = (c\\cdot n)\\,x^{n-1}$$

For $7x^2$: multiply $7\\cdot 2 = 14$, lower the exponent to $1$, giving $14x$. Try that shortcut on the drill below.`,
      },
      {
        id: 'cmsr2-drill',
        type: 'input-boxes' as const,
        content: `**Pull Out the Constant** 🧮

Differentiate. Enter the full coefficient of $x$ in each answer (the number out front after simplifying).

**1)** $\\dfrac{d}{dx}\\big[\\,7x^2\\,\\big] = \\,?\\,x$ — enter the coefficient.
**2)** $\\dfrac{d}{dx}\\big[\\,10x^5\\,\\big] = \\,?\\,x^4$ — enter the coefficient.
**3)** $\\dfrac{d}{dx}\\big[\\,\\tfrac{1}{3}x^9\\,\\big] = \\,?\\,x^8$ — enter the coefficient.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['14', '50', '3'],
          hint1: '$7\\cdot 2 = 14$, so the answer is $14x$.',
          hint2: '$10\\cdot 5 = 50$, so the answer is $50x^4$.',
          hint3: '$\\frac{1}{3}\\cdot 9 = 3$, so the answer is $3x^8$.',
          explanation: '1) $7\\cdot 2x = 14x$.  2) $10\\cdot 5x^4 = 50x^4$.  3) $\\frac{1}{3}\\cdot 9x^8 = 3x^8$. Multiply the constant by the exponent the Power Rule brings down.',
        },
      },
      {
        id: 'cmsr2-constant-fn',
        type: 'text' as const,
        content: `## Special Case: The Derivative of a Constant Alone

What about a *bare* constant like $y = 7$? Its graph is a flat horizontal line — it never changes — so its rate of change is **zero**:

$$\\frac{d}{dx}[\\,c\\,] = 0$$

This is *not* the Constant Multiple Rule (there's no function being multiplied). It's a separate fact, but it pairs with everything ahead: when you differentiate a polynomial term by term, every standalone constant drops to $0$.

> 🔑 **Two different "constant" facts, don't mix them up:**
> - $\\dfrac{d}{dx}[\\,c\\cdot f(x)\\,] = c\\,f'(x)$ — constant *multiplying* a function: it stays.
> - $\\dfrac{d}{dx}[\\,c\\,] = 0$ — constant *all by itself*: it vanishes.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'constant-multiple-sum-rules',
    sections: [
      {
        id: 'cmsr3-intro',
        type: 'text' as const,
        content: `# ➗ Constant Multiple & Sum Rules

**Part 3 of 7 — The Sum & Difference Rule**

---

> 🔑 **The Rule:** $\\dfrac{d}{dx}\\big[\\,f(x) \\pm g(x)\\,\\big] = f'(x) \\pm g'(x)$. Differentiate each term separately, then add (or subtract) the results in the same order.`,
      },
      {
        id: 'cmsr3-statement',
        type: 'text' as const,
        content: `## The Derivative of a Sum Is the Sum of the Derivatives

Rates of change *add*. If you walk east at $3$ mph while a walkway carries you east at $2$ mph, your combined speed is $3 + 2 = 5$ mph. The same is true for derivatives:

$$\\frac{d}{dx}\\big[\\,f(x) + g(x)\\,\\big] = f'(x) + g'(x)$$

Subtraction works the same way, sign and all:

$$\\frac{d}{dx}\\big[\\,f(x) - g(x)\\,\\big] = f'(x) - g'(x)$$

This means you may break any sum into pieces, differentiate each piece on its own, and reassemble.

> 💡 The rule extends to **any number of terms**: $\\dfrac{d}{dx}[a + b + c + \\cdots] = a' + b' + c' + \\cdots$. That's what makes long polynomials easy.`,
      },
      {
        id: 'cmsr3-worked',
        type: 'text' as const,
        content: `## Worked Examples

**Example 1.** Differentiate $y = x^3 + x^2$.
$$\\frac{dy}{dx} = \\frac{d}{dx}[x^3] + \\frac{d}{dx}[x^2] = 3x^2 + 2x$$

**Example 2.** Differentiate $y = x^4 - x$.
$$\\frac{dy}{dx} = 4x^3 - 1$$
(Recall $\\frac{d}{dx}[x] = 1$, since $x = x^1$ and $1\\cdot x^0 = 1$.)

**Example 3.** Differentiate $y = x^2 + 9$.
$$\\frac{dy}{dx} = 2x + 0 = 2x$$
The standalone constant $9$ differentiates to $0$ and disappears.

> ⚠️ Differentiate **term by term in place** — keep each result lined up with its original term and keep the $+$ / $-$ signs.`,
      },
      {
        id: 'cmsr3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\big[\\,x^5 + x^2\\,\\big]$?',
              options: ['$5x^4 + 2x$', '$5x^4 + 2x^2$', '$x^4 + x$', '$5x^4 \\cdot 2x$'],
              correctAnswer: 0,
              explanation: 'Differentiate each term: $\\frac{d}{dx}[x^5] = 5x^4$ and $\\frac{d}{dx}[x^2] = 2x$. Add them: $5x^4 + 2x$.',
            },
            {
              question: 'What is $\\dfrac{d}{dx}\\big[\\,x^3 - 8\\,\\big]$?',
              options: ['$3x^2 - 8$', '$3x^2$', '$3x^2 - 1$', '$x^2 - 8$'],
              correctAnswer: 1,
              explanation: 'The derivative of $x^3$ is $3x^2$; the derivative of the constant $8$ is $0$. So the result is $3x^2 - 0 = 3x^2$.',
            },
          ],
        },
      },
      {
        id: 'cmsr3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Differentiate Each Term** 🔽

You're finding $\\dfrac{d}{dx}\\big[\\,x^6 - x^4 + 3\\,\\big]$. Choose the derivative of each piece.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d}{dx}[x^6] = $', options: ['$6x^5$', '$6x^6$', '$5x^6$', '$x^5$'] },
            { label: '$\\dfrac{d}{dx}[-x^4] = $', options: ['$-4x^3$', '$4x^3$', '$-4x^4$', '$-x^3$'] },
            { label: '$\\dfrac{d}{dx}[3] = $', options: ['$0$', '$3$', '$1$', '$3x$'] },
          ],
          correctAnswers: ['$6x^5$', '$-4x^3$', '$0$'],
          hint1: 'Power Rule: $\\frac{d}{dx}[x^6] = 6x^{6-1} = 6x^5$.',
          hint2: 'The $-1$ coefficient stays: $\\frac{d}{dx}[-x^4] = -4x^3$.',
          hint3: 'A standalone constant differentiates to $0$.',
          explanation: 'Assembling the pieces: $\\frac{d}{dx}[x^6 - x^4 + 3] = 6x^5 - 4x^3 + 0 = 6x^5 - 4x^3$.',
        },
      },
      {
        id: 'cmsr3-bridge',
        type: 'text' as const,
        content: `## Two Facts You'll Reuse Constantly

Before the next drill, lock in the two simplest derivatives — they appear in almost every problem:

$$\\frac{d}{dx}[x] = 1 \\qquad\\text{and}\\qquad \\frac{d}{dx}[c] = 0$$

A linear term like $2x$ has derivative $2$ (the slope of the line). A standalone constant has derivative $0$ (a flat line has no slope).`,
      },
      {
        id: 'cmsr3-drill',
        type: 'input-boxes' as const,
        content: `**Sum & Difference Drill** 🧮

Differentiate. Each answer is a single number (a constant) — enter it.

**1)** $\\dfrac{d}{dx}\\big[\\,x + 5\\,\\big] = \\,?$
**2)** $\\dfrac{d}{dx}\\big[\\,2x - 11\\,\\big] = \\,?$
**3)** $\\dfrac{d}{dx}\\big[\\,100\\,\\big] = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '2', '0'],
          hint1: '$\\frac{d}{dx}[x] = 1$ and $\\frac{d}{dx}[5] = 0$, so the sum is $1$.',
          hint2: '$\\frac{d}{dx}[2x] = 2$ and $\\frac{d}{dx}[-11] = 0$, so the result is $2$.',
          hint3: '$100$ is a standalone constant; its derivative is $0$.',
          explanation: '1) $1 + 0 = 1$.  2) $2 + 0 = 2$.  3) $0$. Linear terms $cx$ differentiate to the constant $c$; standalone constants differentiate to $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'constant-multiple-sum-rules',
    sections: [
      {
        id: 'cmsr4-intro',
        type: 'text' as const,
        content: `# ➗ Constant Multiple & Sum Rules

**Part 4 of 7 — Combining Both Rules on Polynomials**

---

> 🔑 **The Payoff:** Together, the two rules let you differentiate *any polynomial* in one sweep — coefficient by coefficient, term by term, left to right.`,
      },
      {
        id: 'cmsr4-method',
        type: 'text' as const,
        content: `## The Term-by-Term Method

To differentiate a polynomial like $y = a x^n + b x^m + \\cdots$:

1. **Split** at each $+$ or $-$ (Sum/Difference Rule).
2. For each term, **keep the coefficient**, apply the Power Rule to the variable (Constant Multiple Rule).
3. **Drop** standalone constants to $0$.

### Worked Example: $y = 5x^4 - 3x^2 + 7x - 9$

| Term | Rule used | Derivative |
|------|-----------|------------|
| $5x^4$ | const. mult. + power | $5\\cdot 4x^3 = 20x^3$ |
| $-3x^2$ | const. mult. + power | $-3\\cdot 2x = -6x$ |
| $7x$ | const. mult. ($x^1$) | $7\\cdot 1 = 7$ |
| $-9$ | constant | $0$ |

$$\\frac{dy}{dx} = 20x^3 - 6x + 7$$

> 💡 Notice the degree drops by one in every term, and the standalone constant simply vanishes.`,
      },
      {
        id: 'cmsr4-worked2',
        type: 'text' as const,
        content: `### Worked Example: $y = \\dfrac{x^3}{4} + 6x^2 - x$

Rewrite $\\dfrac{x^3}{4}$ as $\\dfrac{1}{4}x^3$ so the coefficient is visible, then go term by term:

$$\\frac{dy}{dx} = \\frac{1}{4}\\cdot 3x^2 + 6\\cdot 2x - 1 = \\frac{3}{4}x^2 + 12x - 1$$

### Worked Example: $y = 2x^5 + 4$

$$\\frac{dy}{dx} = 2\\cdot 5x^4 + 0 = 10x^4$$

> ⚠️ A fraction like $\\dfrac{x^3}{4}$ is just a constant multiple $\\frac{1}{4}x^3$ — don't be thrown by the division. Coefficients can be fractions, negatives, or decimals.`,
      },
      {
        id: 'cmsr4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = 3x^4 - 2x^3 + x$.',
              options: ['$12x^3 - 6x^2 + 1$', '$12x^3 - 6x^2$', '$12x^3 - 6x^2 + x$', '$7x^3 - 6x^2 + 1$'],
              correctAnswer: 0,
              explanation: '$3\\cdot 4x^3 = 12x^3$; $-2\\cdot 3x^2 = -6x^2$; $\\frac{d}{dx}[x] = 1$. Together: $12x^3 - 6x^2 + 1$.',
            },
            {
              question: 'Differentiate $y = 8x^2 + 5x - 12$.',
              options: ['$16x + 5$', '$16x + 5 - 12$', '$16x - 12$', '$10x + 5$'],
              correctAnswer: 0,
              explanation: '$8\\cdot 2x = 16x$; $\\frac{d}{dx}[5x] = 5$; $\\frac{d}{dx}[-12] = 0$. Result: $16x + 5$.',
            },
          ],
        },
      },
      {
        id: 'cmsr4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Derivative** 🔽

Differentiate $y = 6x^3 + \\dfrac{1}{2}x^2 - 4x + 10$ one term at a time.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d}{dx}[6x^3] = $', options: ['$18x^2$', '$6x^2$', '$18x^3$', '$3x^2$'] },
            { label: '$\\dfrac{d}{dx}\\!\\left[\\tfrac{1}{2}x^2\\right] = $', options: ['$x$', '$\\tfrac{1}{2}x$', '$2x$', '$\\tfrac{1}{4}x$'] },
            { label: '$\\dfrac{d}{dx}[-4x] = $', options: ['$-4$', '$4$', '$-4x$', '$0$'] },
            { label: '$\\dfrac{d}{dx}[10] = $', options: ['$0$', '$10$', '$1$', '$10x$'] },
          ],
          correctAnswers: ['$18x^2$', '$x$', '$-4$', '$0$'],
          hint1: '$6\\cdot 3x^2 = 18x^2$.',
          hint2: '$\\frac{1}{2}\\cdot 2x = x$ (the $2$s cancel).',
          hint3: 'A linear term $cx$ differentiates to $c$; a standalone constant to $0$.',
          explanation: 'Combining: $\\frac{dy}{dx} = 18x^2 + x - 4 + 0 = 18x^2 + x - 4$.',
        },
      },
      {
        id: 'cmsr4-bridge',
        type: 'text' as const,
        content: `## Reading Off Coefficients

For a clean polynomial $a x^3 + b x^2 + c x + d$, the derivative is
$$3a\\,x^2 + 2b\\,x + c$$
Each new coefficient is "old coefficient times old exponent," and the constant $d$ drops away. The drill below asks you to read those new coefficients straight off.`,
      },
      {
        id: 'cmsr4-drill',
        type: 'input-boxes' as const,
        content: `**Full Polynomial Drill** 🧮

For $y = 4x^3 - 7x^2 + 2x - 6$, find $\\dfrac{dy}{dx} = A x^2 + B x + C$.

**1)** Enter $A$ (coefficient of $x^2$).
**2)** Enter $B$ (coefficient of $x$).
**3)** Enter $C$ (the constant term of the derivative).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '-14', '2'],
          hint1: '$4\\cdot 3 = 12$, so $A = 12$.',
          hint2: '$-7\\cdot 2 = -14$, so $B = -14$.',
          hint3: '$\\frac{d}{dx}[2x] = 2$ and $\\frac{d}{dx}[-6] = 0$, so $C = 2$.',
          explanation: '$\\frac{dy}{dx} = 12x^2 - 14x + 2$. So $A = 12$, $B = -14$, $C = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'constant-multiple-sum-rules',
    sections: [
      {
        id: 'cmsr5-intro',
        type: 'text' as const,
        content: `# ➗ Constant Multiple & Sum Rules

**Part 5 of 7 — Negative & Fractional Powers, Roots, and Rewrites**

---

> 🔑 **Key Move:** The Constant Multiple and Sum Rules don't care *what kind* of power you have. Rewrite roots and fractions as powers of $x$ first, then differentiate term by term.`,
      },
      {
        id: 'cmsr5-rewrite',
        type: 'text' as const,
        content: `## Rewrite First, Then Differentiate

The two rules combine with the Power Rule for **any** real exponent — negative, fractional, whatever. The trick is to rewrite the expression so every term is a constant times a power of $x$:

| Original | Rewritten | Why |
|----------|-----------|-----|
| $\\sqrt{x}$ | $x^{1/2}$ | a square root is a $\\frac{1}{2}$ power |
| $\\dfrac{1}{x}$ | $x^{-1}$ | reciprocal = negative power |
| $\\dfrac{5}{x^2}$ | $5x^{-2}$ | constant times a negative power |
| $\\dfrac{x^3}{4}$ | $\\dfrac{1}{4}x^3$ | constant times a positive power |

Then the Power Rule $\\dfrac{d}{dx}[x^n] = n x^{n-1}$ applies as usual.

> 💡 **Always rewrite into $c\\,x^n$ form before differentiating.** Trying to differentiate $\\frac{5}{x^2}$ "as a fraction" is where most mistakes happen.`,
      },
      {
        id: 'cmsr5-worked',
        type: 'text' as const,
        content: `## Worked Examples

**Example 1.** Differentiate $y = 3\\sqrt{x}$.
Rewrite: $y = 3x^{1/2}$. Then
$$\\frac{dy}{dx} = 3\\cdot\\tfrac{1}{2}x^{-1/2} = \\frac{3}{2}x^{-1/2} = \\frac{3}{2\\sqrt{x}}$$

**Example 2.** Differentiate $y = \\dfrac{6}{x^2}$.
Rewrite: $y = 6x^{-2}$. Then
$$\\frac{dy}{dx} = 6\\cdot(-2)x^{-3} = -12x^{-3} = -\\frac{12}{x^3}$$

**Example 3.** Differentiate $y = x^{1/2} + 4x^{-1}$.
$$\\frac{dy}{dx} = \\tfrac{1}{2}x^{-1/2} + 4\\cdot(-1)x^{-2} = \\tfrac{1}{2}x^{-1/2} - 4x^{-2}$$

> ⚠️ When the exponent is negative, $n - 1$ goes **more** negative: $-2 \\to -3$. When it's fractional, subtract $1$ as a fraction: $\\frac{1}{2} - 1 = -\\frac{1}{2}$.`,
      },
      {
        id: 'cmsr5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rewrite $\\dfrac{8}{x^4}$ as a constant times a power of $x$.',
              options: ['$8x^{-4}$', '$8x^{4}$', '$\\tfrac{1}{8}x^{-4}$', '$8x^{-3}$'],
              correctAnswer: 0,
              explanation: '$\\frac{1}{x^4} = x^{-4}$, and the constant $8$ stays out front: $8x^{-4}$. This is the form you differentiate.',
            },
            {
              question: 'What is $\\dfrac{d}{dx}\\big[\\,2x^{-3}\\,\\big]$?',
              options: ['$-6x^{-4}$', '$6x^{-4}$', '$-6x^{-2}$', '$-5x^{-4}$'],
              correctAnswer: 0,
              explanation: 'Keep the $2$, apply the Power Rule: $2\\cdot(-3)x^{-3-1} = -6x^{-4}$.',
            },
          ],
        },
      },
      {
        id: 'cmsr5-drill',
        type: 'input-boxes' as const,
        content: `**New Exponent Drill** 🧮

After differentiating, what is the new exponent on $x$?

**1)** $\\dfrac{d}{dx}\\big[x^{1/2}\\big] = \\tfrac{1}{2}x^{?}$ — enter the exponent (a fraction).
**2)** $\\dfrac{d}{dx}\\big[x^{-1}\\big] = -1\\cdot x^{?}$ — enter the exponent.
**3)** $\\dfrac{d}{dx}\\big[x^{-4}\\big] = -4 x^{?}$ — enter the exponent.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1/2', '-2', '-5'],
          hint1: '$\\frac{1}{2} - 1 = -\\frac{1}{2}$.',
          hint2: '$-1 - 1 = -2$.',
          hint3: '$-4 - 1 = -5$. Subtracting $1$ from a negative makes it more negative.',
          explanation: '1) $\\frac{1}{2}-1 = -\\frac{1}{2}$.  2) $-1-1 = -2$.  3) $-4-1 = -5$. The Power Rule always subtracts $1$ from the exponent.',
        },
      },
      {
        id: 'cmsr5-bridge',
        type: 'text' as const,
        content: `## Putting Rewrites Inside a Sum

Real problems mix roots and reciprocals into a single sum. The plan is always the same: **rewrite every term as $c\\,x^n$, then differentiate term by term.** For example,
$$y = \\sqrt{x} + \\frac{2}{x} \\;\\Longrightarrow\\; y = x^{1/2} + 2x^{-1}$$
and now the Sum Rule applies cleanly. Walk through exactly that in the dropdown below.`,
      },
      {
        id: 'cmsr5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Rewrite, Then Differentiate** 🔽

Differentiate $y = \\sqrt{x} + \\dfrac{2}{x}$. Track each step.`,
        exercise: {
          dropdowns: [
            { label: 'Rewrite $\\sqrt{x}$ as:', options: ['$x^{1/2}$', '$x^{2}$', '$x^{-1/2}$', '$2x$'] },
            { label: 'Rewrite $\\dfrac{2}{x}$ as:', options: ['$2x^{-1}$', '$2x$', '$\\tfrac{1}{2}x$', '$2x^{-2}$'] },
            { label: '$\\dfrac{dy}{dx} = $', options: ['$\\tfrac{1}{2}x^{-1/2} - 2x^{-2}$', '$\\tfrac{1}{2}x^{-1/2} + 2x^{-2}$', '$x^{-1/2} - 2x^{-2}$', '$\\tfrac{1}{2}x^{1/2} - 2x^{-1}$'] },
          ],
          correctAnswers: ['$x^{1/2}$', '$2x^{-1}$', '$\\tfrac{1}{2}x^{-1/2} - 2x^{-2}$'],
          hint1: 'A square root is the $\\frac{1}{2}$ power.',
          hint2: '$\\frac{2}{x} = 2\\cdot\\frac{1}{x} = 2x^{-1}$.',
          hint3: '$\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2}x^{-1/2}$ and $\\frac{d}{dx}[2x^{-1}] = 2(-1)x^{-2} = -2x^{-2}$.',
          explanation: 'Rewrite to $x^{1/2} + 2x^{-1}$, then differentiate term by term: $\\frac{1}{2}x^{-1/2} - 2x^{-2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'constant-multiple-sum-rules',
    sections: [
      {
        id: 'cmsr6-intro',
        type: 'text' as const,
        content: `# ➗ Constant Multiple & Sum Rules

**Part 6 of 7 — Evaluating Derivatives & Common Traps**

---

> 🔑 **Two skills examiners test:** (1) finding the derivative *function*, then (2) plugging in a value to get a number — the slope of the tangent line at that point.`,
      },
      {
        id: 'cmsr6-evaluate',
        type: 'text' as const,
        content: `## Finding a Slope at a Point

The derivative $f'(x)$ is a *function*. To get the **slope at a specific $x$**, differentiate first, then substitute.

### Example: slope of $f(x) = 2x^3 - 5x$ at $x = 2$

**Step 1 — Differentiate:** $f'(x) = 6x^2 - 5$.

**Step 2 — Substitute $x = 2$:**
$$f'(2) = 6(2)^2 - 5 = 6\\cdot 4 - 5 = 24 - 5 = 19$$

So the curve has slope $19$ at $x = 2$.

> ⚠️ **Order matters.** Differentiate *first*, plug in *second*. If you substitute $x=2$ into $f(x)$ before differentiating, you'd be differentiating a constant and get $0$.`,
      },
      {
        id: 'cmsr6-traps',
        type: 'text' as const,
        content: `## Common Traps

| Trap | Wrong | Right |
|------|-------|-------|
| Dropping the coefficient | $\\frac{d}{dx}[5x^2] = 2x$ | $5\\cdot 2x = 10x$ |
| Differentiating a constant to itself | $\\frac{d}{dx}[7] = 7$ | $\\frac{d}{dx}[7] = 0$ |
| Forgetting $\\frac{d}{dx}[x] = 1$ | $\\frac{d}{dx}[3x] = 0$ | $\\frac{d}{dx}[3x] = 3$ |
| Keeping the old exponent | $\\frac{d}{dx}[x^4] = 4x^4$ | $4x^3$ |
| Adding when you should multiply | $5\\cdot 2 = 7$ | $5\\cdot 2 = 10$ |

> 💡 Sanity check: a polynomial of degree $n$ has a derivative of degree $n-1$. If your degree didn't drop by exactly one in each term, recheck.`,
      },
      {
        id: 'cmsr6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f(x) = x^2 + 4x$, what is $f\'(3)$?',
              options: ['$10$', '$21$', '$7$', '$13$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 2x + 4$. Then $f\'(3) = 2(3) + 4 = 6 + 4 = 10$.',
            },
            {
              question: 'A student writes $\\dfrac{d}{dx}[9] = 9$. What went wrong?',
              options: ['The derivative of a standalone constant is $0$, not the constant', 'They forgot the Power Rule', 'They should have gotten $1$', 'Nothing — it is correct'],
              correctAnswer: 0,
              explanation: 'A constant function is flat (slope $0$). So $\\frac{d}{dx}[9] = 0$. Constants only "stay" when they multiply a function.',
            },
          ],
        },
      },
      {
        id: 'cmsr6-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Derivative** 🧮

**1)** $f(x) = 3x^2 - x$. Find $f'(x)$ at $x = 4$, i.e. $f'(4) = \\,?$
**2)** $g(x) = x^3 + 2x$. Find $g'(1) = \\,?$
**3)** $h(x) = 5x^2$. Find $h'(0) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['23', '5', '0'],
          hint1: '$f\'(x) = 6x - 1$, so $f\'(4) = 24 - 1 = 23$.',
          hint2: '$g\'(x) = 3x^2 + 2$, so $g\'(1) = 3 + 2 = 5$.',
          hint3: '$h\'(x) = 10x$, so $h\'(0) = 0$.',
          explanation: '1) $f\'(x)=6x-1 \\Rightarrow f\'(4)=23$.  2) $g\'(x)=3x^2+2 \\Rightarrow g\'(1)=5$.  3) $h\'(x)=10x \\Rightarrow h\'(0)=0$.',
        },
      },
      {
        id: 'cmsr6-bridge',
        type: 'text' as const,
        content: `## Diagnosing Mistakes

On the AP exam you'll sometimes be handed a *worked* derivative and asked whether it's right. The fastest way to grade one is to differentiate it yourself, term by term, and compare. Watch especially for a leftover standalone constant — the single most common slip. Try diagnosing one below.`,
      },
      {
        id: 'cmsr6-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Error** 🔽

A student differentiated $y = 4x^3 + 6$ and got $12x^2 + 6$. Diagnose it.`,
        exercise: {
          dropdowns: [
            { label: 'Is $\\frac{d}{dx}[4x^3] = 12x^2$ correct?', options: ['Yes', 'No'] },
            { label: 'Is $\\frac{d}{dx}[6] = 6$ correct?', options: ['No, it should be $0$', 'Yes', 'No, it should be $1$', 'No, it should be $6x$'] },
            { label: 'The correct derivative is:', options: ['$12x^2$', '$12x^2 + 6$', '$12x^2 + 1$', '$4x^2$'] },
          ],
          correctAnswers: ['Yes', 'No, it should be $0$', '$12x^2$'],
          hint1: '$4\\cdot 3x^2 = 12x^2$ — that part is right.',
          hint2: 'A standalone constant differentiates to $0$, not itself.',
          hint3: 'So $\\frac{dy}{dx} = 12x^2 + 0 = 12x^2$.',
          explanation: 'The first term is correct, but $\\frac{d}{dx}[6] = 0$, not $6$. The right answer is $12x^2$. The student left the constant in by mistake.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'constant-multiple-sum-rules',
    sections: [
      {
        id: 'cmsr7-intro',
        type: 'text' as const,
        content: `# ➗ Constant Multiple & Sum Rules

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) pull constants out front, (2) differentiate sums and differences term by term, (3) handle negative and fractional powers, and (4) evaluate a derivative at a point. Time to put it all together.`,
      },
      {
        id: 'cmsr7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Rule |
|------|------|
| Constant times a function | $\\dfrac{d}{dx}[c\\,f] = c\\,f'$ |
| Sum / difference of terms | $\\dfrac{d}{dx}[f \\pm g] = f' \\pm g'$ |
| Single power of $x$ | $\\dfrac{d}{dx}[x^n] = n x^{n-1}$ |
| Standalone constant | $\\dfrac{d}{dx}[c] = 0$ |
| Slope at a point | differentiate, **then** substitute |

> ⚠️ Remember the four traps: keep the coefficient, drop standalone constants to $0$, use $\\frac{d}{dx}[x]=1$, and always lower the exponent by one.`,
      },
      {
        id: 'cmsr7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = 7x^3 - 2x^2 + 9x - 4$.',
              options: ['$21x^2 - 4x + 9$', '$21x^2 - 4x + 9 - 4$', '$21x^2 - 2x + 9$', '$21x^2 - 4x$'],
              correctAnswer: 0,
              explanation: '$7\\cdot 3x^2 = 21x^2$; $-2\\cdot 2x = -4x$; $\\frac{d}{dx}[9x] = 9$; $\\frac{d}{dx}[-4] = 0$. Result: $21x^2 - 4x + 9$.',
            },
            {
              question: 'Differentiate $y = \\dfrac{10}{x^2}$.',
              options: ['$-20x^{-3}$', '$20x^{-3}$', '$-20x^{-1}$', '$10x^{-3}$'],
              correctAnswer: 0,
              explanation: 'Rewrite as $10x^{-2}$. Then $10\\cdot(-2)x^{-3} = -20x^{-3}$.',
            },
          ],
        },
      },
      {
        id: 'cmsr7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $f(x) = x^4 - 6x^2 + 3$. Find $f'(x)$ at $x = 1$: $f'(1) = \\,?$
**2)** Differentiate $y = 9x^{1/3}$. Enter the coefficient out front (i.e. $y' = ?\\,x^{-2/3}$).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-8', '3'],
          hint1: '$f\'(x) = 4x^3 - 12x$, so $f\'(1) = 4 - 12 = -8$.',
          hint2: '$9\\cdot\\frac{1}{3} = 3$, so $y\' = 3x^{-2/3}$.',
          hint3: 'For #1 plug $x=1$ into $4x^3-12x$; for #2 the new exponent is $\\frac{1}{3}-1=-\\frac{2}{3}$ and the coefficient is $9\\cdot\\frac{1}{3}=3$.',
          explanation: '1) $f\'(x) = 4x^3 - 12x \\Rightarrow f\'(1) = 4(1) - 12(1) = -8$.  2) $9\\cdot\\frac{1}{3}x^{1/3 - 1} = 3x^{-2/3}$; the coefficient is $3$.',
        },
      },
      {
        id: 'cmsr7-final-tips',
        type: 'text' as const,
        content: `## Before the Exit Quiz

Three quick reminders that catch the most points:

- **Coefficients multiply, never add:** $5x^2 \\to 10x$, because $5\\cdot 2 = 10$.
- **Standalone constants vanish:** the $+8$ in $12x^2 - 5x + 8$ contributes nothing to the derivative.
- **Slope at a point = differentiate, then plug in** — in that order.

Ready? The Exit Quiz below has three questions covering all of it.`,
      },
      {
        id: 'cmsr7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\big[\\,12x^2 - 5x + 8\\,\\big]$?',
              options: ['$24x - 5$', '$24x - 5 + 8$', '$24x + 8$', '$14x - 5$'],
              correctAnswer: 0,
              explanation: '$12\\cdot 2x = 24x$; $\\frac{d}{dx}[-5x] = -5$; $\\frac{d}{dx}[8] = 0$. Result: $24x - 5$.',
            },
            {
              question: 'For $f(x) = x^3 - 3x$, what is the slope of the curve at $x = 2$?',
              options: ['$9$', '$5$', '$2$', '$12$'],
              correctAnswer: 0,
              explanation: '$f\'(x) = 3x^2 - 3$. Then $f\'(2) = 3(4) - 3 = 12 - 3 = 9$.',
            },
            {
              question: 'Which statement is TRUE about differentiation rules?',
              options: ['A constant multiplying a function stays; a standalone constant becomes $0$', 'Both kinds of constants become $0$', 'Both kinds of constants stay unchanged', 'The derivative of a sum is the product of the derivatives'],
              correctAnswer: 0,
              explanation: 'Constant Multiple Rule: $\\frac{d}{dx}[c\\,f] = c\\,f\'$ (it stays). Constant Rule: $\\frac{d}{dx}[c] = 0$ (it vanishes). The derivative of a sum is the *sum* (not product) of derivatives.',
            },
          ],
        },
      },
    ],
  },
]
