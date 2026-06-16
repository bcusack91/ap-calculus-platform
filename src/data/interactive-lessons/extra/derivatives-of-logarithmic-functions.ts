import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Derivatives of Logarithmic Functions (AP Calculus AB).
 * Registry key / DB Topic.slug: 'derivatives-of-logarithmic-functions'.
 * 7 parts, gold-standard structure: the derivative of ln x → the chain rule with
 * logs → log laws as a pre-differentiation simplifier → general bases log_b and b^x →
 * logarithmic differentiation (products, quotients, variable exponents) → applications
 * (tangent lines, related rates, graph behavior) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative computation was verified by hand and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'derivatives-of-logarithmic-functions',
    sections: [
      {
        id: 'dlog1-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Logarithmic Functions

**Part 1 of 7 — The Derivative of $\\ln x$**

---

### Topics in This Part

| Section |
|---------|
| The One Formula That Starts It All |
| Why the Slope Is $\\tfrac{1}{x}$ |
| The Domain Trap |

> 🔑 **Key Concept:** The natural logarithm has the cleanest derivative in all of calculus: $\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{x}$. Everything in this lesson is built on top of that single fact, so we start by nailing it down completely.`,
      },
      {
        id: 'dlog1-formula',
        type: 'text' as const,
        content: `## The One Formula That Starts It All

The **natural logarithm** $\\ln x$ is the logarithm with base $e \\approx 2.718$. Its derivative is remarkably simple:

$$\\frac{d}{dx}\\left[\\ln x\\right] = \\frac{1}{x}, \\qquad x > 0$$

That's it. No constants, no extra factors — the slope of $y = \\ln x$ at any point is just the *reciprocal* of the $x$-coordinate.

### A Few Instant Values

| Point on $y = \\ln x$ | Slope $= \\tfrac{1}{x}$ |
|----------------------|------------------------|
| $x = 1$ | $\\dfrac{1}{1} = 1$ |
| $x = 2$ | $\\dfrac{1}{2}$ |
| $x = 5$ | $\\dfrac{1}{5}$ |
| $x = \\tfrac{1}{2}$ | $\\dfrac{1}{1/2} = 2$ |

> 💡 Notice the slope is **always positive** (for $x>0$) but **shrinks** as $x$ grows. That matches the graph: $\\ln x$ always rises, but more and more slowly.`,
      },
      {
        id: 'dlog1-why',
        type: 'text' as const,
        content: `## Why the Slope Is $\\tfrac{1}{x}$

You don't have to memorize this blindly — it follows from $e^x$ and $\\ln x$ being inverses.

Let $y = \\ln x$. Rewriting in exponential form gives $e^{\\,y} = x$. Differentiate **both sides** with respect to $x$ (using implicit differentiation, since $y$ depends on $x$):

$$\\frac{d}{dx}\\left[e^{\\,y}\\right] = \\frac{d}{dx}[x] \\;\\Longrightarrow\\; e^{\\,y}\\cdot \\frac{dy}{dx} = 1$$

Solve for $\\dfrac{dy}{dx}$ and replace $e^{\\,y}$ with $x$:

$$\\frac{dy}{dx} = \\frac{1}{e^{\\,y}} = \\frac{1}{x}$$

> ✅ **Takeaway:** $\\dfrac{1}{x}$ isn't an arbitrary rule — it's forced by the fact that $\\ln$ undoes $e^x$.`,
      },
      {
        id: 'dlog1-value-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $f(x) = \\ln x$, what is $f\\,\'(4)$?',
              options: ['$\\dfrac{1}{4}$', '$4$', '$\\ln 4$', '$\\dfrac{1}{\\ln 4}$'],
              correctAnswer: 0,
              explanation: '$f\\,\'(x) = \\tfrac{1}{x}$, so $f\\,\'(4) = \\tfrac{1}{4}$. The slope is the reciprocal of the $x$-value, not the $y$-value $\\ln 4$.',
            },
            {
              question: 'As $x$ gets larger and larger, the slope of $y = \\ln x$:',
              options: ['approaches $0$ but stays positive', 'approaches $1$', 'becomes negative', 'grows without bound'],
              correctAnswer: 0,
              explanation: 'The slope is $\\tfrac{1}{x}$. As $x \\to \\infty$, $\\tfrac{1}{x} \\to 0^+$ — it shrinks toward $0$ but never reaches it, so the curve keeps rising, ever more gently.',
            },
          ],
        },
      },
      {
        id: 'dlog1-reciprocal-note',
        type: 'text' as const,
        content: `## Practice Reading the Slope

Because the slope is *always* $\\dfrac{1}{x}$, evaluating it is just "flip the $x$-value." A point far to the right has a tiny slope; a point near $x=0^+$ has a huge slope.

> 💡 Keep fractions exact when they're clean (like $\\tfrac18$) and switch to decimals only when asked.`,
      },
      {
        id: 'dlog1-slope-drill',
        type: 'input-boxes' as const,
        content: `**Read Off the Slope** 🧮

For $y = \\ln x$, give the slope $\\dfrac{1}{x}$ at each point. Decimals or fractions are fine.

**1)** at $x = 10$, slope $= \\,?$
**2)** at $x = \\tfrac{1}{4}$, slope $= \\,?$
**3)** at $x = 8$, slope $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.1', '4', '1/8'],
          hint1: 'Slope $= \\tfrac{1}{x}$. At $x=10$ that is $\\tfrac{1}{10} = 0.1$.',
          hint2: 'At $x = \\tfrac14$, the reciprocal is $\\tfrac{1}{1/4} = 4$.',
          hint3: 'At $x = 8$, slope $= \\tfrac18 = 0.125$.',
          explanation: '1) $\\tfrac{1}{10}=0.1$.  2) $\\tfrac{1}{1/4}=4$.  3) $\\tfrac18 = 0.125$. The slope is always the reciprocal of $x$.',
        },
      },
      {
        id: 'dlog1-domain',
        type: 'text' as const,
        content: `## The Domain Trap

The formula $\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{x}$ is only valid where $\\ln x$ is **defined**, which is $x > 0$. You can't take the slope of a graph at a point that doesn't exist.

> ⚠️ **Watch out:** The *derivative* $\\tfrac{1}{x}$ makes sense for $x < 0$ too, but $\\ln x$ itself does **not** exist there. In Part 4 we'll meet $\\ln\\lvert x\\rvert$, whose derivative *is* $\\tfrac1x$ on both sides — but plain $\\ln x$ lives only on $x>0$.

With the base formula secured, Part 2 unleashes its real power: combining $\\ln$ with the **chain rule**.`,
      },
      {
        id: 'dlog1-domain-dropdown',
        type: 'dropdown-select' as const,
        content: `**Domain & Slope Quick Check** 🔽

Decide each statement about $y = \\ln x$.`,
        exercise: {
          dropdowns: [
            { label: 'The domain of $\\ln x$ is:', options: ['$x > 0$', '$x \\ge 0$', 'all real $x$', '$x \\ne 0$'] },
            { label: 'The derivative of $\\ln x$ is:', options: ['$\\dfrac{1}{x}$', '$\\ln x$', '$x$', '$\\dfrac{1}{x^2}$'] },
            { label: 'The slope at $x = 1$ equals:', options: ['$1$', '$0$', '$e$', '$\\dfrac{1}{e}$'] },
          ],
          correctAnswers: ['$x > 0$', '$\\dfrac{1}{x}$', '$1$'],
          hint1: '$\\ln x$ is only defined for positive inputs, so the domain is $x>0$.',
          hint2: 'The derivative of the natural log is the reciprocal $\\tfrac1x$.',
          hint3: 'At $x=1$, slope $= \\tfrac{1}{1} = 1$.',
          explanation: 'Domain $x>0$; derivative $\\tfrac1x$; at $x=1$ the slope is $\\tfrac11 = 1$. (Note $\\ln 1 = 0$, but the *slope* there is $1$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'derivatives-of-logarithmic-functions',
    sections: [
      {
        id: 'dlog2-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Logarithmic Functions

**Part 2 of 7 — The Chain Rule with $\\ln$**

---

> 🔑 **The Idea:** Real problems rarely give you a bare $\\ln x$. You'll see $\\ln(\\text{something})$ — like $\\ln(x^2+1)$ or $\\ln(\\sin x)$. The chain rule turns *every* one of these into a quick, mechanical computation.`,
      },
      {
        id: 'dlog2-rule',
        type: 'text' as const,
        content: `## The General Logarithmic Derivative

If $u = g(x)$ is a differentiable function, then by the chain rule:

$$\\frac{d}{dx}\\left[\\ln u\\right] = \\frac{1}{u}\\cdot \\frac{du}{dx} = \\frac{u^{\\prime}}{u}$$

In words: **the derivative of the inside, divided by the inside.**

### The Two-Step Recipe

1. Write $\\dfrac{1}{(\\text{inside})}$.
2. Multiply by the **derivative of the inside**.

### Quick Examples

| Function | $u$ (inside) | $u^{\\prime}$ | $\\dfrac{u^{\\prime}}{u}$ |
|----------|--------------|--------|----------------------|
| $\\ln(3x)$ | $3x$ | $3$ | $\\dfrac{3}{3x} = \\dfrac{1}{x}$ |
| $\\ln(x^2+1)$ | $x^2+1$ | $2x$ | $\\dfrac{2x}{x^2+1}$ |
| $\\ln(5x-4)$ | $5x-4$ | $5$ | $\\dfrac{5}{5x-4}$ |

> 💡 Surprise from row 1: $\\ln(3x)$ and $\\ln x$ have the **same** derivative $\\tfrac1x$! That's because $\\ln(3x) = \\ln 3 + \\ln x$, and $\\ln 3$ is a constant. We'll exploit this idea heavily in Part 3.`,
      },
      {
        id: 'dlog2-worked',
        type: 'text' as const,
        content: `## Worked Example: $y = \\ln(x^2 + 1)$

**Step 1 — Identify the inside.** $\\;u = x^2 + 1$.

**Step 2 — Differentiate the inside.** $\\;u^{\\prime} = 2x$.

**Step 3 — Apply $\\dfrac{u^{\\prime}}{u}$:**

$$\\frac{dy}{dx} = \\frac{2x}{x^2+1}$$

### Worked Example: $y = \\ln(\\sin x)$

Inside $u = \\sin x$, so $u^{\\prime} = \\cos x$:

$$\\frac{dy}{dx} = \\frac{\\cos x}{\\sin x} = \\cot x$$

> ✅ **Check the structure:** every answer is a fraction whose **top** is the derivative of the inside and whose **bottom** is the inside, untouched.`,
      },
      {
        id: 'dlog2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find $\\dfrac{d}{dx}\\left[\\ln(4x+7)\\right]$.',
              options: ['$\\dfrac{4}{4x+7}$', '$\\dfrac{1}{4x+7}$', '$\\dfrac{4x+7}{4}$', '$\\dfrac{4}{x}$'],
              correctAnswer: 0,
              explanation: 'Inside $u = 4x+7$, so $u^{\\prime} = 4$. Then $\\tfrac{u^{\\prime}}{u} = \\tfrac{4}{4x+7}$.',
            },
            {
              question: 'Which is $\\dfrac{d}{dx}\\left[\\ln(\\cos x)\\right]$?',
              options: ['$-\\tan x$', '$\\tan x$', '$\\dfrac{1}{\\cos x}$', '$-\\dfrac{1}{\\sin x}$'],
              correctAnswer: 0,
              explanation: 'Inside $u = \\cos x$, so $u^{\\prime} = -\\sin x$. Then $\\tfrac{u^{\\prime}}{u} = \\tfrac{-\\sin x}{\\cos x} = -\\tan x$.',
            },
          ],
        },
      },
      {
        id: 'dlog2-decompose-note',
        type: 'text' as const,
        content: `## Always Decompose First

Every chain-rule logarithm boils down to two questions: **what is the inside $u$?** and **what is $u^{\\prime}$?** Get those two right and the answer $\\dfrac{u^{\\prime}}{u}$ writes itself.

> 💡 In the next check, build the derivative one piece at a time — inside, then its derivative, then the quotient.`,
      },
      {
        id: 'dlog2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Derivative** 🔽

You're differentiating $y = \\ln(x^3 - 2x)$. Choose each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The inside $u$ is:', options: ['$x^3 - 2x$', '$\\ln x$', '$3x^2 - 2$', '$x^3$'] },
            { label: 'The derivative of the inside $u^{\\prime}$ is:', options: ['$3x^2 - 2$', '$x^3 - 2x$', '$3x^2$', '$3x^2 - 2x$'] },
            { label: 'So $\\dfrac{dy}{dx} = \\dfrac{u^{\\prime}}{u} =$', options: ['$\\dfrac{3x^2-2}{x^3-2x}$', '$\\dfrac{x^3-2x}{3x^2-2}$', '$\\dfrac{1}{x^3-2x}$', '$3x^2-2$'] },
          ],
          correctAnswers: ['$x^3 - 2x$', '$3x^2 - 2$', '$\\dfrac{3x^2-2}{x^3-2x}$'],
          hint1: 'The inside is the whole expression sitting in the parentheses of $\\ln(\\cdots)$.',
          hint2: 'Differentiate $x^3 - 2x$ term by term: $3x^2 - 2$.',
          hint3: 'The rule is "derivative of inside over inside": $\\tfrac{3x^2-2}{x^3-2x}$.',
          explanation: 'With $u = x^3-2x$ and $u^{\\prime} = 3x^2-2$, the chain rule gives $\\tfrac{dy}{dx} = \\tfrac{3x^2-2}{x^3-2x}$.',
        },
      },
      {
        id: 'dlog2-linear-note',
        type: 'text' as const,
        content: `## A Shortcut for Linear Insides

When the inside is **linear** — like $ax+b$ — its derivative is just the constant $a$. So $\\ln(ax+b)$ differentiates to $\\dfrac{a}{ax+b}$ in one step.

> 💡 This is the most common pattern on multiple-choice questions, so make it automatic.`,
      },
      {
        id: 'dlog2-drill',
        type: 'input-boxes' as const,
        content: `**Differentiate** 🧮

These have a **linear** inside, so the top is just a number. Enter the numerator of $\\dfrac{u^{\\prime}}{u}$ (the bottom stays the same).

**1)** $y = \\ln(2x+9)$. Numerator $= \\,?$
**2)** $y = \\ln(7x)$. Numerator $= \\,?$
**3)** $y = \\ln(1-6x)$. Numerator $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '7', '-6'],
          hint1: 'The numerator is the derivative of the inside. For $2x+9$ that derivative is $2$.',
          hint2: 'For $7x$, the derivative is $7$, giving $\\tfrac{7}{7x}=\\tfrac1x$.',
          hint3: 'For $1-6x$, the derivative is $-6$ (the $1$ is constant).',
          explanation: '1) $u^{\\prime}=2 \\Rightarrow \\tfrac{2}{2x+9}$.  2) $u^{\\prime}=7 \\Rightarrow \\tfrac{7}{7x}=\\tfrac1x$.  3) $u^{\\prime}=-6 \\Rightarrow \\tfrac{-6}{1-6x}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'derivatives-of-logarithmic-functions',
    sections: [
      {
        id: 'dlog3-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Logarithmic Functions

**Part 3 of 7 — Expand First, Then Differentiate**

---

> 🔑 **The Power Move:** The smartest students rarely differentiate a complicated logarithm directly. They use **log laws** to break it into a sum of simple pieces *first* — turning a quotient-rule nightmare into a one-line answer.`,
      },
      {
        id: 'dlog3-laws',
        type: 'text' as const,
        content: `## The Three Log Laws (Your Pre-Processing Tools)

| Law | Rewrite |
|-----|---------|
| **Product** | $\\ln(AB) = \\ln A + \\ln B$ |
| **Quotient** | $\\ln\\!\\left(\\dfrac{A}{B}\\right) = \\ln A - \\ln B$ |
| **Power** | $\\ln\\!\\left(A^n\\right) = n\\ln A$ |

Because differentiation distributes over $+$ and $-$, expanding **before** you differentiate replaces hard rules with easy ones.

### Example: $y = \\ln\\!\\left(x^2\\sqrt{x+1}\\right)$

Expand using product + power laws (note $\\sqrt{x+1} = (x+1)^{1/2}$):

$$y = \\ln(x^2) + \\ln\\big((x+1)^{1/2}\\big) = 2\\ln x + \\tfrac{1}{2}\\ln(x+1)$$

Now differentiate term by term:

$$\\frac{dy}{dx} = 2\\cdot\\frac{1}{x} + \\frac{1}{2}\\cdot\\frac{1}{x+1} = \\frac{2}{x} + \\frac{1}{2(x+1)}$$

> 💡 Without expanding, this would have required the chain rule on a product *inside* a log. With expanding, it's two reciprocals. That's the whole point.`,
      },
      {
        id: 'dlog3-quotient',
        type: 'text' as const,
        content: `## Quotients Become Subtraction

### Example: $y = \\ln\\!\\left(\\dfrac{3x-1}{x+5}\\right)$

Use the quotient law to split it:

$$y = \\ln(3x-1) - \\ln(x+5)$$

Differentiate each $\\ln$ with the chain rule ($\\tfrac{u^{\\prime}}{u}$):

$$\\frac{dy}{dx} = \\frac{3}{3x-1} - \\frac{1}{x+5}$$

> ⚠️ **Trap:** Do **not** write $\\dfrac{d}{dx}\\ln\\!\\left(\\frac{A}{B}\\right) = \\dfrac{1}{A/B}$ and stop — you still owe a chain-rule factor. Splitting with the quotient law avoids the mess entirely.`,
      },
      {
        id: 'dlog3-expand-dropdown',
        type: 'dropdown-select' as const,
        content: `**Expand Before You Differentiate** 🔽

Match each logarithm to its fully expanded form.`,
        exercise: {
          dropdowns: [
            { label: '$\\ln(x^5)$', options: ['$5\\ln x$', '$\\ln 5 \\cdot x$', '$x\\ln 5$', '$\\dfrac{1}{5}\\ln x$'] },
            { label: '$\\ln\\!\\left(\\dfrac{x}{4}\\right)$', options: ['$\\ln x - \\ln 4$', '$\\ln x + \\ln 4$', '$\\dfrac{\\ln x}{\\ln 4}$', '$4\\ln x$'] },
            { label: '$\\ln\\!\\left(x\\sqrt{x}\\right)$', options: ['$\\tfrac{3}{2}\\ln x$', '$2\\ln x$', '$\\ln x + \\ln\\sqrt{x}$ only', '$\\tfrac{1}{2}\\ln x$'] },
          ],
          correctAnswers: ['$5\\ln x$', '$\\ln x - \\ln 4$', '$\\tfrac{3}{2}\\ln x$'],
          hint1: 'The power law pulls the exponent out front: $\\ln(x^5) = 5\\ln x$.',
          hint2: 'A quotient inside a log becomes a difference: $\\ln(x/4) = \\ln x - \\ln 4$.',
          hint3: '$x\\sqrt{x} = x^{1}\\cdot x^{1/2} = x^{3/2}$, so $\\ln(x\\sqrt x) = \\tfrac32\\ln x$.',
          explanation: 'Powers come out front, products become sums, quotients become differences. $x\\sqrt x = x^{3/2}$, so its log is $\\tfrac32\\ln x$.',
        },
      },
      {
        id: 'dlog3-distribute-note',
        type: 'text' as const,
        content: `## Why Expanding Helps

Once a logarithm is a **sum** of terms, the derivative is just the sum of each term's derivative — and each term is a simple $c\\ln(\\text{linear})$, which you already know how to differentiate.

> 💡 Test the idea on the next check: expand mentally first, then differentiate the easy pieces.`,
      },
      {
        id: 'dlog3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expanding first, $\\dfrac{d}{dx}\\left[\\ln(x^4)\\right] = $',
              options: ['$\\dfrac{4}{x}$', '$\\dfrac{1}{x^4}$', '$4x^3$', '$\\dfrac{4}{x^4}$'],
              correctAnswer: 0,
              explanation: '$\\ln(x^4) = 4\\ln x$, so the derivative is $4\\cdot\\tfrac1x = \\tfrac4x$. (Direct chain rule agrees: $\\tfrac{4x^3}{x^4} = \\tfrac4x$.)',
            },
            {
              question: 'For $y = \\ln(8x)$, the derivative is:',
              options: ['$\\dfrac{1}{x}$', '$\\dfrac{8}{x}$', '$\\dfrac{1}{8x}$', '$8$'],
              correctAnswer: 0,
              explanation: '$\\ln(8x) = \\ln 8 + \\ln x$. The $\\ln 8$ is a constant, so the derivative is just $\\tfrac1x$. (Chain rule: $\\tfrac{8}{8x} = \\tfrac1x$ ✓.)',
            },
          ],
        },
      },
      {
        id: 'dlog3-power-note',
        type: 'text' as const,
        content: `## The Power Law Gives You the Coefficient

For any constant power, $\\ln(x^n) = n\\ln x$, so its derivative is simply $\\dfrac{n}{x}$. Even roots and reciprocals fit this: $\\sqrt x = x^{1/2}$ and $\\dfrac{1}{x^3} = x^{-3}$.

> 💡 Rewrite radicals and reciprocals as powers first — then the coefficient $n$ falls right out.`,
      },
      {
        id: 'dlog3-drill',
        type: 'input-boxes' as const,
        content: `**Coefficient Out Front** 🧮

After expanding with the power law, each derivative is $\\dfrac{(\\text{coefficient})}{x}$. Enter the coefficient.

**1)** $y = \\ln(x^7)$. Coefficient $= \\,?$
**2)** $y = \\ln(\\sqrt{x})$. Coefficient $= \\,?$  *(recall $\\sqrt x = x^{1/2}$; decimal ok)*
**3)** $y = \\ln\\!\\left(\\dfrac{1}{x^3}\\right)$. Coefficient $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '0.5', '-3'],
          hint1: '$\\ln(x^7) = 7\\ln x \\Rightarrow$ derivative $\\tfrac7x$, so coefficient $7$.',
          hint2: '$\\ln(\\sqrt x) = \\tfrac12\\ln x \\Rightarrow$ coefficient $\\tfrac12 = 0.5$.',
          hint3: '$\\tfrac{1}{x^3} = x^{-3}$, so $\\ln(x^{-3}) = -3\\ln x \\Rightarrow$ coefficient $-3$.',
          explanation: '1) $7\\ln x \\Rightarrow 7$.  2) $\\tfrac12\\ln x \\Rightarrow 0.5$.  3) $-3\\ln x \\Rightarrow -3$. The power law turns each exponent into the coefficient of $\\tfrac1x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'derivatives-of-logarithmic-functions',
    sections: [
      {
        id: 'dlog4-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Logarithmic Functions

**Part 4 of 7 — Other Bases, $\\ln\\lvert x\\rvert$, and the $b^x$ Connection**

---

> 🔑 **The Idea:** Not every log is base $e$. AP problems use $\\log_{10}$, $\\log_2$, and others. One small formula handles them all — and the same idea gives us the derivative of $b^x$ as a bonus.`,
      },
      {
        id: 'dlog4-base',
        type: 'text' as const,
        content: `## The General-Base Formula

For any base $b > 0,\\ b \\ne 1$:

$$\\frac{d}{dx}\\left[\\log_b x\\right] = \\frac{1}{x\\ln b}$$

Where does the extra $\\ln b$ come from? The **change-of-base** identity: $\\log_b x = \\dfrac{\\ln x}{\\ln b}$. Since $\\ln b$ is a constant,

$$\\frac{d}{dx}\\left[\\frac{\\ln x}{\\ln b}\\right] = \\frac{1}{\\ln b}\\cdot\\frac{1}{x} = \\frac{1}{x\\ln b}$$

With a chain-rule inside $u$:

$$\\frac{d}{dx}\\left[\\log_b u\\right] = \\frac{u^{\\prime}}{u\\ln b}$$

### Examples

| Function | Derivative |
|----------|------------|
| $\\log_{10} x$ | $\\dfrac{1}{x\\ln 10}$ |
| $\\log_2 x$ | $\\dfrac{1}{x\\ln 2}$ |
| $\\log_5(3x)$ | $\\dfrac{3}{3x\\ln 5} = \\dfrac{1}{x\\ln 5}$ |

> 💡 **Sanity check:** When $b = e$, $\\ln b = \\ln e = 1$, and the formula collapses back to $\\tfrac1x$. The natural log is "natural" precisely because its $\\ln b$ factor is $1$.`,
      },
      {
        id: 'dlog4-base-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\left[\\log_2 x\\right]$?',
              options: ['$\\dfrac{1}{x\\ln 2}$', '$\\dfrac{1}{2x}$', '$\\dfrac{\\ln 2}{x}$', '$\\dfrac{1}{x}$'],
              correctAnswer: 0,
              explanation: 'Use $\\tfrac{1}{x\\ln b}$ with $b=2$: the derivative is $\\tfrac{1}{x\\ln 2}$. The $\\ln 2$ stays in the denominator.',
            },
            {
              question: 'Why does $\\dfrac{d}{dx}[\\ln x]$ have no $\\ln b$ factor?',
              options: ['Because $\\ln e = 1$', 'Because $\\ln$ has no base', 'Because $e \\approx 2.718$', 'Because $\\ln 0$ is undefined'],
              correctAnswer: 0,
              explanation: '$\\ln$ is $\\log_e$, so its base factor is $\\ln e = 1$. Dividing by $1$ changes nothing, leaving the clean $\\tfrac1x$.',
            },
          ],
        },
      },
      {
        id: 'dlog4-absval',
        type: 'text' as const,
        content: `## The Useful Cousin: $\\ln\\lvert x\\rvert$

Because $\\ln x$ only exists for $x>0$, antiderivative work uses the absolute-value version, whose derivative covers **both** signs:

$$\\frac{d}{dx}\\left[\\ln\\lvert x\\rvert\\right] = \\frac{1}{x}, \\qquad x \\ne 0$$

And with a chain rule:

$$\\frac{d}{dx}\\left[\\ln\\lvert u\\rvert\\right] = \\frac{u^{\\prime}}{u}$$

The $\\lvert\\,\\cdot\\,\\rvert$ doesn't change the derivative formula — it just *widens the domain*. (This is exactly why $\\displaystyle\\int \\tfrac1x\\,dx = \\ln\\lvert x\\rvert + C$.)

> ⚠️ Don't let the bars scare you. For derivatives, treat $\\ln\\lvert u\\rvert$ exactly like $\\ln u$: the answer is still $\\dfrac{u^{\\prime}}{u}$.`,
      },
      {
        id: 'dlog4-exp',
        type: 'text' as const,
        content: `## The Bonus: Derivative of $b^x$

The same $\\ln b$ shows up when we differentiate a general exponential. Since $b^x = e^{\\,x\\ln b}$:

$$\\frac{d}{dx}\\left[b^{\\,x}\\right] = b^{\\,x}\\ln b$$

| Function | Derivative |
|----------|------------|
| $e^{\\,x}$ | $e^{\\,x}\\ln e = e^{\\,x}$ |
| $2^{\\,x}$ | $2^{\\,x}\\ln 2$ |
| $10^{\\,x}$ | $10^{\\,x}\\ln 10$ |

> 💡 **Pattern to remember:** Logarithms put $\\ln b$ in the **denominator** $\\left(\\tfrac{1}{x\\ln b}\\right)$; exponentials put $\\ln b$ as a **multiplier** $\\left(b^x\\ln b\\right)$. Same constant, opposite position.`,
      },
      {
        id: 'dlog4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Derivative** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d}{dx}\\left[\\log_3 x\\right]$', options: ['$\\dfrac{1}{x\\ln 3}$', '$\\dfrac{1}{3x}$', '$\\dfrac{\\ln 3}{x}$', '$3^x\\ln 3$'] },
            { label: '$\\dfrac{d}{dx}\\left[5^{\\,x}\\right]$', options: ['$5^{\\,x}\\ln 5$', '$x\\,5^{\\,x-1}$', '$\\dfrac{1}{x\\ln 5}$', '$5^{\\,x}$'] },
            { label: '$\\dfrac{d}{dx}\\left[\\ln\\lvert 3x\\rvert\\right]$', options: ['$\\dfrac{1}{x}$', '$\\dfrac{1}{3x}$', '$\\dfrac{3}{x}$', '$\\dfrac{1}{\\lvert 3x\\rvert}$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{x\\ln 3}$', '$5^{\\,x}\\ln 5$', '$\\dfrac{1}{x}$'],
          hint1: 'Logs of base $b$: $\\tfrac{1}{x\\ln b}$, so base $3$ gives $\\tfrac{1}{x\\ln 3}$.',
          hint2: 'Exponentials $b^x$ differentiate to $b^x\\ln b$, so $5^x \\to 5^x\\ln 5$.',
          hint3: '$\\ln\\lvert 3x\\rvert$: with $u=3x$, $u^{\\prime}=3$, so $\\tfrac{3}{3x}=\\tfrac1x$.',
          explanation: 'Base-$b$ logs: $\\tfrac{1}{x\\ln b}$. Base-$b$ exponentials: $b^x\\ln b$. And $\\ln\\lvert 3x\\rvert$ differentiates to $\\tfrac{3}{3x}=\\tfrac1x$.',
        },
      },
      {
        id: 'dlog4-numeric-note',
        type: 'text' as const,
        content: `## Putting a Number on It

The constant $\\ln b$ is just a fixed decimal you can compute. Two values worth recognizing:

$$\\ln 2 \\approx 0.693, \\qquad \\ln 10 \\approx 2.303$$

So, for instance, the slope of $y = \\log_{2} x$ at $x = 1$ is

$$\\frac{1}{x\\ln 2}\\bigg|_{x=1} = \\frac{1}{\\ln 2} \\approx \\frac{1}{0.693} \\approx 1.443$$

> 💡 You usually leave answers in *exact* form (with $\\ln b$ symbolic) — but knowing the rough size of $\\ln 2$ and $\\ln 10$ helps you sanity-check a decimal answer on the calculator portion of the exam.`,
      },
      {
        id: 'dlog4-base-drill',
        type: 'input-boxes' as const,
        content: `**Identify the Constant** 🧮

For each derivative, enter the **base** that appears inside the $\\ln$ of the formula (the $b$ in $\\tfrac{1}{x\\ln b}$ for logs, or the $b$ in $b^x\\ln b$ for exponentials).

**1)** $\\dfrac{d}{dx}\\left[\\log_{6} x\\right] = \\dfrac{1}{x\\ln b}$. $\\;b = \\,?$
**2)** $\\dfrac{d}{dx}\\left[4^{\\,x}\\right] = 4^{\\,x}\\ln b$. $\\;b = \\,?$
**3)** For $\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{x\\ln b}$ to give the clean $\\tfrac1x$, the base is $\\;b = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', 'e'],
          hint1: '$\\log_6 x$ has base $6$, so $b = 6$.',
          hint2: 'For $4^x$, the multiplier is $\\ln 4$, so $b = 4$.',
          hint3: '$\\ln x = \\log_e x$, and $\\ln e = 1$, which is why the $\\ln b$ factor disappears. So $b = e$.',
          explanation: '1) base $6$.  2) base $4$.  3) $\\ln$ is base $e$, and $\\ln e = 1$ collapses the formula to $\\tfrac1x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'derivatives-of-logarithmic-functions',
    sections: [
      {
        id: 'dlog5-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Logarithmic Functions

**Part 5 of 7 — Logarithmic Differentiation**

---

> 🔑 **The Technique:** When a function is a tangle of products, quotients, and powers — or worse, has a **variable in the exponent** like $x^x$ — take $\\ln$ of both sides first. The log laws flatten the whole thing into easy pieces.`,
      },
      {
        id: 'dlog5-method',
        type: 'text' as const,
        content: `## The Four-Step Method

To differentiate a messy $y = f(x)$:

1. **Take $\\ln$** of both sides: $\\ln y = \\ln(f(x))$.
2. **Expand** the right side using log laws (products → sums, powers → coefficients).
3. **Differentiate implicitly.** The left side becomes $\\dfrac{1}{y}\\cdot\\dfrac{dy}{dx}$.
4. **Solve** for $\\dfrac{dy}{dx}$ by multiplying both sides by $y$, then substitute the original $f(x)$ back in for $y$.

> 💡 The key engine is step 3: differentiating $\\ln y$ with respect to $x$ gives $\\dfrac{y^{\\prime}}{y}$ by the chain rule. That $\\dfrac{1}{y}$ is what lets us isolate $y^{\\prime}$.`,
      },
      {
        id: 'dlog5-worked',
        type: 'text' as const,
        content: `## Worked Example: $y = \\dfrac{x^2\\,(x+1)^3}{\\sqrt{x-4}}$

**Step 1 — Take $\\ln$:**

$$\\ln y = \\ln\\!\\left(\\frac{x^2(x+1)^3}{(x-4)^{1/2}}\\right)$$

**Step 2 — Expand:**

$$\\ln y = 2\\ln x + 3\\ln(x+1) - \\tfrac{1}{2}\\ln(x-4)$$

**Step 3 — Differentiate both sides:**

$$\\frac{y^{\\prime}}{y} = \\frac{2}{x} + \\frac{3}{x+1} - \\frac{1}{2(x-4)}$$

**Step 4 — Solve for $y^{\\prime}$** (multiply by $y$, the original function):

$$y^{\\prime} = \\frac{x^2(x+1)^3}{\\sqrt{x-4}}\\left(\\frac{2}{x} + \\frac{3}{x+1} - \\frac{1}{2(x-4)}\\right)$$

> ✅ Doing this with the quotient and product rules directly would take three times as long and invite sign errors. Logarithmic differentiation is the clean path.`,
      },
      {
        id: 'dlog5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In logarithmic differentiation, what does the left side $\\dfrac{d}{dx}[\\ln y]$ become?',
              options: ['$\\dfrac{1}{y}\\cdot\\dfrac{dy}{dx}$', '$\\dfrac{1}{y}$', '$\\dfrac{dy}{dx}$', '$\\ln\\!\\left(\\dfrac{dy}{dx}\\right)$'],
              correctAnswer: 0,
              explanation: 'By the chain rule, $\\tfrac{d}{dx}[\\ln y] = \\tfrac1y \\cdot \\tfrac{dy}{dx}$ because $y$ is a function of $x$. That factor of $\\tfrac1y$ is exactly what lets us solve for $y^{\\prime}$.',
            },
            {
              question: 'After expanding, $\\ln\\!\\left(\\dfrac{(x+1)^4}{x}\\right) = $',
              options: ['$4\\ln(x+1) - \\ln x$', '$4\\ln(x+1) + \\ln x$', '$\\dfrac{4\\ln(x+1)}{\\ln x}$', '$\\ln(x+1)^4 \\cdot \\ln x$'],
              correctAnswer: 0,
              explanation: 'Quotient → subtraction and power → coefficient: $\\ln\\!\\big((x+1)^4\\big) - \\ln x = 4\\ln(x+1) - \\ln x$.',
            },
          ],
        },
      },
      {
        id: 'dlog5-varexp',
        type: 'text' as const,
        content: `## The Killer App: Variable in the Exponent

You **cannot** use the power rule on $x^x$ (the exponent isn't constant) or the exponential rule (the base isn't constant). Logarithmic differentiation is the *only* elementary way.

### Worked Example: $y = x^{\\,x}$

$$\\ln y = \\ln\\!\\left(x^{\\,x}\\right) = x\\ln x$$

Differentiate (the right side needs the **product rule**, since $x\\cdot\\ln x$):

$$\\frac{y^{\\prime}}{y} = (1)\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$$

Multiply by $y = x^x$:

$$y^{\\prime} = x^{\\,x}\\left(\\ln x + 1\\right)$$

> ⚠️ **Never** write $\\tfrac{d}{dx}[x^x] = x\\cdot x^{x-1}$. The power rule requires a *constant* exponent; here the exponent is $x$. Logarithmic differentiation is mandatory.`,
      },
      {
        id: 'dlog5-drill',
        type: 'input-boxes' as const,
        content: `**Logarithmic Differentiation** 🧮

Take $\\ln$, expand, and differentiate. Each $\\dfrac{y^{\\prime}}{y}$ below is a sum of simple terms — enter the requested coefficient or value.

**1)** For $y = x^3(x-2)^5$: after expanding, $\\ln y = 3\\ln x + 5\\ln(x-2)$. The coefficient on $\\dfrac{1}{x-2}$ in $\\dfrac{y^{\\prime}}{y}$ is $\\,?$
**2)** For $y = x^{\\,x}$: $\\dfrac{y^{\\prime}}{y} = \\ln x + \\,?$  *(the constant term)*
**3)** For $y = \\dfrac{x^6}{(x+1)^2}$: $\\ln y = 6\\ln x - 2\\ln(x+1)$. The coefficient on $\\dfrac{1}{x}$ in $\\dfrac{y^{\\prime}}{y}$ is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '1', '6'],
          hint1: 'Differentiating $5\\ln(x-2)$ gives $5\\cdot\\tfrac{1}{x-2}$, so the coefficient is $5$.',
          hint2: '$\\tfrac{d}{dx}[x\\ln x] = \\ln x + 1$, so the constant term is $1$.',
          hint3: 'Differentiating $6\\ln x$ gives $6\\cdot\\tfrac1x$, so the coefficient on $\\tfrac1x$ is $6$.',
          explanation: '1) $5\\ln(x-2)\\to \\tfrac{5}{x-2}$, coefficient $5$.  2) product rule on $x\\ln x$ gives $\\ln x + 1$, constant $1$.  3) $6\\ln x \\to \\tfrac6x$, coefficient $6$.',
        },
      },
      {
        id: 'dlog5-recap',
        type: 'text' as const,
        content: `## When to Reach for This Tool

Logarithmic differentiation earns its keep in exactly two situations:

| Situation | Why ordinary rules fail |
|-----------|--------------------------|
| A product/quotient of **several** factors with powers | Quotient + product rules get long and error-prone |
| A **variable in the exponent** (e.g. $x^x$, $(\\sin x)^x$) | Neither the power rule nor the $b^x$ rule applies |

> 💡 If the exponent is a constant, just use the power rule. If the base is a constant, use $b^x\\ln b$. Logarithmic differentiation is for when **both** vary, or when expanding a sprawling product would save you real work.`,
      },
      {
        id: 'dlog5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

For each function, choose the rule you'd use to differentiate it.`,
        exercise: {
          dropdowns: [
            { label: '$y = x^7$', options: ['power rule', 'logarithmic differentiation', 'the $b^x$ rule', 'chain rule on $\\ln$'] },
            { label: '$y = 3^{\\,x}$', options: ['the $b^x$ rule', 'power rule', 'logarithmic differentiation', 'quotient rule'] },
            { label: '$y = x^{\\,x}$', options: ['logarithmic differentiation', 'power rule', 'the $b^x$ rule', 'product rule alone'] },
          ],
          correctAnswers: ['power rule', 'the $b^x$ rule', 'logarithmic differentiation'],
          hint1: 'A constant exponent on a variable base means the plain power rule applies.',
          hint2: 'A constant base raised to a variable power is $b^x$, with derivative $b^x\\ln b$.',
          hint3: 'When the variable is in *both* the base and the exponent, only logarithmic differentiation works.',
          explanation: '$x^7$: power rule. $3^x$: the $b^x$ rule ($3^x\\ln 3$). $x^x$: logarithmic differentiation, since the variable is in both base and exponent.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'derivatives-of-logarithmic-functions',
    sections: [
      {
        id: 'dlog6-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Logarithmic Functions

**Part 6 of 7 — Tangent Lines, Related Rates & Graph Behavior**

---

> 🔑 **The Payoff:** A derivative is a slope. Once you can differentiate logs, you can write tangent lines to log curves, plug log functions into related-rates chains, and read where they increase, decrease, or curve.`,
      },
      {
        id: 'dlog6-tangent',
        type: 'text' as const,
        content: `## Tangent Lines to Log Curves

The recipe is the usual one — find the point, find the slope, use point-slope.

### Example: tangent to $y = \\ln x$ at $x = e$

**Point:** at $x = e$, $\\;y = \\ln e = 1$, so the point is $(e,\\,1)$.

**Slope:** $\\;y^{\\prime} = \\dfrac1x$, so at $x = e$ the slope is $\\dfrac1e$.

**Line** (point-slope $y - y_1 = m(x-x_1)$):

$$y - 1 = \\frac{1}{e}(x - e) \\;\\Longrightarrow\\; y = \\frac{1}{e}x - 1 + 1 = \\frac{x}{e}$$

So the tangent is $y = \\dfrac{x}{e}$ — it even passes through the origin!

> 💡 At $x = 1$, $y = \\ln 1 = 0$ and slope $= \\tfrac11 = 1$, so the tangent there is $y = x - 1$ — a handy fact worth memorizing.`,
      },
      {
        id: 'dlog6-tangent-input',
        type: 'input-boxes' as const,
        content: `**Tangent-Line Pieces** 🧮

Find the slope of the tangent line at the given point.

**1)** $y = \\ln x$ at $x = 1$. Slope $= \\,?$
**2)** $y = \\ln(x^2+3)$ at $x = 1$. Slope $= \\,?$  *(use $\\tfrac{2x}{x^2+3}$; fraction ok)*
**3)** $y = \\ln(2x)$ at $x = 5$. Slope $= \\,?$  *(decimal ok)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/2', '0.2'],
          hint1: '$y^{\\prime} = \\tfrac1x$, so at $x=1$ the slope is $1$.',
          hint2: '$y^{\\prime} = \\tfrac{2x}{x^2+3}$; at $x=1$ that is $\\tfrac{2}{1+3} = \\tfrac24 = \\tfrac12$.',
          hint3: '$\\ln(2x)$ has derivative $\\tfrac{2}{2x}=\\tfrac1x$; at $x=5$ that is $\\tfrac15 = 0.2$.',
          explanation: '1) $\\tfrac11 = 1$.  2) $\\tfrac{2(1)}{1^2+3} = \\tfrac24 = \\tfrac12$.  3) $\\tfrac{2}{2(5)} = \\tfrac1{5} = 0.2$.',
        },
      },
      {
        id: 'dlog6-relatedrates',
        type: 'text' as const,
        content: `## Logs Inside Related Rates

When a quantity is defined with a logarithm, its rate of change carries the $\\tfrac1x$ factor through the chain rule.

### Example

Suppose $Q = \\ln(P)$ where $P$ changes over time, with $P = 4$ and $\\dfrac{dP}{dt} = 6$ at the moment of interest. Find $\\dfrac{dQ}{dt}$.

Differentiate $Q = \\ln P$ with respect to $t$:

$$\\frac{dQ}{dt} = \\frac{1}{P}\\cdot\\frac{dP}{dt} = \\frac{1}{4}\\cdot 6 = \\frac{6}{4} = \\frac{3}{2}$$

> 💡 The structure is identical to the chain rule on $\\ln u$ — here the "inside" is $P$, and $\\tfrac{dP}{dt}$ plays the role of $u^{\\prime}$.`,
      },
      {
        id: 'dlog6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On its entire domain $x>0$, the function $y = \\ln x$ is:',
              options: ['always increasing and concave down', 'always increasing and concave up', 'always decreasing', 'increasing then decreasing'],
              correctAnswer: 0,
              explanation: '$y^{\\prime} = \\tfrac1x > 0$ for all $x>0$, so it always increases. $y^{\\prime\\prime} = -\\tfrac{1}{x^2} < 0$, so it is concave down everywhere.',
            },
            {
              question: 'If $W = \\ln(s)$ and $\\dfrac{ds}{dt} = 10$ when $s = 5$, then $\\dfrac{dW}{dt} = $',
              options: ['$2$', '$10$', '$50$', '$\\dfrac{1}{2}$'],
              correctAnswer: 0,
              explanation: '$\\tfrac{dW}{dt} = \\tfrac1s\\cdot\\tfrac{ds}{dt} = \\tfrac15\\cdot 10 = 2$.',
            },
          ],
        },
      },
      {
        id: 'dlog6-shape-note',
        type: 'text' as const,
        content: `## What the Derivatives Say About the Shape

The **first** derivative tells you whether $\\ln x$ rises or falls; the **second** tells you how it curves.

$$y = \\ln x, \\qquad y^{\\prime} = \\frac{1}{x}, \\qquad y^{\\prime\\prime} = -\\frac{1}{x^2}$$

Since $y^{\\prime} > 0$ and $y^{\\prime\\prime} < 0$ for every $x>0$, the graph is **always increasing** and **always concave down** — it never has a max, min, or inflection point.

> 💡 Confirm each piece in the check below.`,
      },
      {
        id: 'dlog6-concavity-dropdown',
        type: 'dropdown-select' as const,
        content: `**First and Second Derivatives of $\\ln x$** 🔽

Fill in the derivatives and what they tell you (domain $x>0$).`,
        exercise: {
          dropdowns: [
            { label: 'First derivative $y^{\\prime}$:', options: ['$\\dfrac{1}{x}$', '$-\\dfrac{1}{x^2}$', '$x$', '$\\ln x$'] },
            { label: 'Second derivative $y^{\\prime\\prime}$:', options: ['$-\\dfrac{1}{x^2}$', '$\\dfrac{1}{x}$', '$\\dfrac{1}{x^2}$', '$0$'] },
            { label: 'So the curve is:', options: ['increasing, concave down', 'increasing, concave up', 'decreasing, concave down', 'decreasing, concave up'] },
          ],
          correctAnswers: ['$\\dfrac{1}{x}$', '$-\\dfrac{1}{x^2}$', 'increasing, concave down'],
          hint1: '$\\tfrac{d}{dx}[\\ln x] = \\tfrac1x$.',
          hint2: '$\\tfrac{d}{dx}\\big[x^{-1}\\big] = -x^{-2} = -\\tfrac{1}{x^2}$.',
          hint3: 'Positive $y^{\\prime}$ ⇒ increasing; negative $y^{\\prime\\prime}$ ⇒ concave down.',
          explanation: '$y^{\\prime}=\\tfrac1x>0$ (increasing) and $y^{\\prime\\prime}=-\\tfrac{1}{x^2}<0$ (concave down) for all $x>0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'derivatives-of-logarithmic-functions',
    sections: [
      {
        id: 'dlog7-intro',
        type: 'text' as const,
        content: `# 📈 Derivatives of Logarithmic Functions

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) differentiate $\\ln x$, (2) apply the chain rule to $\\ln u$, (3) expand with log laws first, (4) handle other bases and $b^x$, (5) run logarithmic differentiation, and (6) use it all in tangent lines and rates. Let's pull it together.`,
      },
      {
        id: 'dlog7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Function | Derivative |
|----------|------------|
| $\\ln x$ | $\\dfrac{1}{x}$ |
| $\\ln u$ | $\\dfrac{u^{\\prime}}{u}$ |
| $\\ln\\lvert x\\rvert$ | $\\dfrac{1}{x}$ |
| $\\log_b x$ | $\\dfrac{1}{x\\ln b}$ |
| $\\log_b u$ | $\\dfrac{u^{\\prime}}{u\\ln b}$ |
| $b^{\\,x}$ | $b^{\\,x}\\ln b$ |
| $x^{\\,x}$ | $x^{\\,x}(\\ln x + 1)$ |

> ⚠️ **Top three reminders:** (1) expand with log laws *before* differentiating; (2) base-$b$ logs put $\\ln b$ in the denominator; (3) variable exponents *require* logarithmic differentiation — the power rule does not apply.`,
      },
      {
        id: 'dlog7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = \\ln(5x^2 - 1)$.',
              options: ['$\\dfrac{10x}{5x^2-1}$', '$\\dfrac{1}{5x^2-1}$', '$\\dfrac{10x}{x}$', '$\\dfrac{2x}{5x^2-1}$'],
              correctAnswer: 0,
              explanation: 'Inside $u = 5x^2-1$, so $u^{\\prime} = 10x$. Then $\\tfrac{u^{\\prime}}{u} = \\tfrac{10x}{5x^2-1}$.',
            },
            {
              question: 'Using log laws first, $\\dfrac{d}{dx}\\left[\\ln\\!\\left(\\dfrac{x^3}{x+2}\\right)\\right] = $',
              options: ['$\\dfrac{3}{x} - \\dfrac{1}{x+2}$', '$\\dfrac{3}{x} + \\dfrac{1}{x+2}$', '$\\dfrac{x^3}{x+2}$', '$\\dfrac{3x^2}{x+2}$'],
              correctAnswer: 0,
              explanation: '$\\ln\\!\\left(\\tfrac{x^3}{x+2}\\right) = 3\\ln x - \\ln(x+2)$, which differentiates to $\\tfrac3x - \\tfrac{1}{x+2}$.',
            },
            {
              question: 'Which requires logarithmic differentiation (no other elementary rule applies)?',
              options: ['$y = x^{\\,x}$', '$y = x^5$', '$y = 5^{\\,x}$', '$y = \\ln(x^5)$'],
              correctAnswer: 0,
              explanation: '$x^x$ has a variable in *both* the base and the exponent, so neither the power rule nor the exponential rule works — logarithmic differentiation is required. The others use the power rule, the $b^x$ rule, and the chain rule respectively.',
            },
          ],
        },
      },
      {
        id: 'dlog7-evaluate-note',
        type: 'text' as const,
        content: `## From Formula to Number

The last skill is plugging in: find the derivative as a formula, **then** substitute the given $x$. Keep the two steps separate so you don't accidentally differentiate the number.

> 💡 Remember the freebies: $\\ln 1 = 0$, $\\ln e = 1$, and $1^1 = 1$ — they make several evaluations collapse to clean integers.`,
      },
      {
        id: 'dlog7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Compute the Value** 🧮

Evaluate each derivative at the given point.

**1)** $f(x) = \\ln(x^2)$. Find $f^{\\prime}(2)$.  *(decimal or fraction)*
**2)** $g(x) = \\log_{10} x$. The derivative is $\\dfrac{1}{x\\ln 10}$. At $x = 1$, $g^{\\prime}(1) \\cdot \\ln 10 = \\,?$
**3)** $h(x) = x^{\\,x}$, so $h^{\\prime}(x) = x^x(\\ln x + 1)$. Find $h^{\\prime}(1)$.  *(recall $\\ln 1 = 0$ and $1^1=1$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1', '1'],
          hint1: '$\\ln(x^2)=2\\ln x \\Rightarrow f^{\\prime}(x)=\\tfrac2x$; at $x=2$, $\\tfrac22 = 1$.',
          hint2: '$g^{\\prime}(1) = \\tfrac{1}{1\\cdot\\ln 10}$, so $g^{\\prime}(1)\\cdot\\ln 10 = 1$.',
          hint3: '$h^{\\prime}(1) = 1^1(\\ln 1 + 1) = 1\\cdot(0+1) = 1$.',
          explanation: '1) $f^{\\prime}(x)=\\tfrac2x$, $f^{\\prime}(2)=1$.  2) $g^{\\prime}(1)\\cdot\\ln10 = \\tfrac{\\ln10}{\\ln10}=1$.  3) $h^{\\prime}(1)=1(0+1)=1$.',
        },
      },
      {
        id: 'dlog7-wrapup',
        type: 'text' as const,
        content: `## You're Ready

You've built the complete toolkit: the core $\\tfrac1x$, the chain-rule quotient $\\tfrac{u^{\\prime}}{u}$, log-law expansion, general bases, logarithmic differentiation, and applications. One short quiz stands between you and mastery.

> 🔑 If you remember just one thing: **the derivative of a logarithm is the derivative of the inside, divided by the inside** (times $\\tfrac{1}{\\ln b}$ if the base isn't $e$).`,
      },
      {
        id: 'dlog7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\dfrac{d}{dx}\\left[\\ln(7x)\\right]$?',
              options: ['$\\dfrac{1}{x}$', '$\\dfrac{7}{x}$', '$\\dfrac{1}{7x}$', '$7\\ln x$'],
              correctAnswer: 0,
              explanation: 'Chain rule: $\\tfrac{7}{7x} = \\tfrac1x$. (Or expand: $\\ln(7x)=\\ln 7 + \\ln x$, and $\\ln 7$ is constant.)',
            },
            {
              question: 'The slope of the tangent to $y = \\ln x$ at $x = e$ is:',
              options: ['$\\dfrac{1}{e}$', '$e$', '$1$', '$0$'],
              correctAnswer: 0,
              explanation: '$y^{\\prime} = \\tfrac1x$, so at $x=e$ the slope is $\\tfrac1e$.',
            },
            {
              question: 'Which formula is correct for a base $b \\ne e$?',
              options: ['$\\dfrac{d}{dx}[\\log_b x] = \\dfrac{1}{x\\ln b}$', '$\\dfrac{d}{dx}[\\log_b x] = \\dfrac{\\ln b}{x}$', '$\\dfrac{d}{dx}[\\log_b x] = \\dfrac{1}{x}$', '$\\dfrac{d}{dx}[\\log_b x] = b^x\\ln b$'],
              correctAnswer: 0,
              explanation: 'From change of base $\\log_b x = \\tfrac{\\ln x}{\\ln b}$, the derivative is $\\tfrac{1}{x\\ln b}$ — the $\\ln b$ sits in the denominator.',
            },
          ],
        },
      },
    ],
  },
]
