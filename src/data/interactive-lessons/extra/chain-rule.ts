import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Chain Rule (AP Calculus AB).
 * Registry key / DB Topic.slug: 'chain-rule'.
 * 7 parts, gold-standard structure: composite functions → the rule itself →
 * power/general rule → trig, exp & log chains → multi-layer nesting →
 * combining with product/quotient rules + tables & related rates → mixed
 * practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative computation was verified by hand and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'chain-rule',
    sections: [
      {
        id: 'chain1-intro',
        type: 'text' as const,
        content: `# ⛓️ The Chain Rule

**Part 1 of 7 — Composite Functions: The "Inside" and the "Outside"**

---

### Topics in This Part

| Section |
|---------|
| What Is a Composite Function? |
| Spotting the Outer and Inner Function |
| Why the Power Rule Alone Isn't Enough |

> 🔑 **Key Concept:** The Chain Rule is the tool for differentiating a **composition** — a function *inside* another function, like $\\sin(x^2)$ or $\\sqrt{3x+1}$. Before we can differentiate one, we have to learn to *decompose* it. That's Part 1.`,
      },
      {
        id: 'chain1-composite',
        type: 'text' as const,
        content: `## What Is a Composite Function?

A **composite function** plugs one function into another. We write it $f(g(x))$, read "$f$ of $g$ of $x$."

- $g$ is the **inner** function — it acts on $x$ first.
- $f$ is the **outer** function — it acts on the result of $g$.

### Examples

| Composite | Outer $f(u)$ | Inner $g(x)$ |
|-----------|--------------|--------------|
| $(3x+1)^5$ | $u^5$ | $3x+1$ |
| $\\sin(x^2)$ | $\\sin u$ | $x^2$ |
| $\\sqrt{4x-7}$ | $\\sqrt{u}$ | $4x-7$ |
| $e^{\\,5x}$ | $e^{\\,u}$ | $5x$ |

> 💡 **Decomposition trick:** Ask yourself, *"If I evaluated this by hand, what would I compute LAST?"* That last operation is the **outer** function. For $(3x+1)^5$ you'd add and multiply first, then raise to the 5th power last — so the outer function is "raise to the 5th."`,
      },
      {
        id: 'chain1-spot-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\cos(7x)$, what is the **inner** function $g(x)$?',
              options: ['$7x$', '$\\cos u$', '$\\cos x$', '$7$'],
              correctAnswer: 0,
              explanation: 'The inner function acts on $x$ first: here you multiply by $7$ to get $7x$, then take the cosine. So $g(x) = 7x$ and the outer function is $f(u) = \\cos u$.',
            },
            {
              question: 'Which expression is a composite function (not just a product or sum)?',
              options: ['$x^2 \\cdot \\sin x$', '$(2x-5)^3$', '$x^2 + \\sin x$', '$3x^4$'],
              correctAnswer: 1,
              explanation: '$(2x-5)^3$ is "cube of $(2x-5)$" — an outer function (cubing) applied to an inner function $(2x-5)$. The others are a product, a sum, and a simple power of $x$, respectively.',
            },
          ],
        },
      },
      {
        id: 'chain1-decompose-bridge',
        type: 'text' as const,
        content: `## Practicing Decomposition

Before we differentiate anything, build the habit of splitting a composite into its two pieces. For each function, name the **outer** $f(u)$ first (the *last* operation) and the **inner** $g(x)$ second (what happens to $x$ first).

Watch out for square roots: $\\sqrt{x^2+1}$ hides a power. The outer function is "take the square root," i.e. $f(u)=\\sqrt{u}$, and the inner function is everything underneath, $g(x)=x^2+1$.`,
      },
      {
        id: 'chain1-decompose-dropdown',
        type: 'dropdown-select' as const,
        content: `**Decompose Each Function** 🔽

Identify the outer function $f(u)$ and inner function $g(x)$ for each composite.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{x^2 + 1}$ — outer $f(u)$:', options: ['$\\sqrt{u}$', '$u^2 + 1$', '$x^2$', '$u + 1$'] },
            { label: '$\\sqrt{x^2 + 1}$ — inner $g(x)$:', options: ['$x^2 + 1$', '$\\sqrt{u}$', '$x^2$', '$\\sqrt{x}$'] },
            { label: '$\\tan(3x)$ — inner $g(x)$:', options: ['$3x$', '$\\tan u$', '$\\tan x$', '$3$'] },
          ],
          correctAnswers: ['$\\sqrt{u}$', '$x^2 + 1$', '$3x$'],
          hint1: 'For $\\sqrt{x^2+1}$, the LAST thing you do is take the square root — that is the outer function.',
          hint2: 'The inner function is everything *under* the square root: $x^2 + 1$.',
          hint3: 'For $\\tan(3x)$, you compute $3x$ first (inner), then apply tangent (outer).',
          explanation: '$\\sqrt{x^2+1}$ decomposes as outer $f(u)=\\sqrt{u}$ and inner $g(x)=x^2+1$. $\\tan(3x)$ has inner $g(x)=3x$, outer $f(u)=\\tan u$.',
        },
      },
      {
        id: 'chain1-whynot',
        type: 'text' as const,
        content: `## Why the Power Rule Alone Fails

You already know the Power Rule: $\\dfrac{d}{dx}\\,x^n = n x^{n-1}$. It's tempting to apply it directly to $(3x+1)^5$ and write $5(3x+1)^4$. **That's wrong** — it ignores the inner function.

Let's prove it on a small case. Expand $(3x+1)^2$:

$$(3x+1)^2 = 9x^2 + 6x + 1$$

Differentiate the expanded form term by term:

$$\\frac{d}{dx}\\left(9x^2 + 6x + 1\\right) = 18x + 6$$

But the "naive" power rule would give $2(3x+1)^1 = 6x + 2$. **Those don't match!**

Notice the true answer $18x+6$ is exactly $3$ times the naive answer $6x+2$ — and $3$ is the derivative of the inner function $3x+1$. That missing factor of $3$ is *the entire point* of the Chain Rule.

> ⚠️ **The #1 chain-rule mistake** is forgetting to multiply by the derivative of the inside. Every formula in this lesson exists to make sure you never drop that factor.`,
      },
      {
        id: 'chain1-verify-input',
        type: 'input-boxes' as const,
        content: `**See It For Yourself** 🧮

Let's confirm the chain factor using $(2x+1)^2$.

**1)** Expand $(2x+1)^2$ into $4x^2 + bx + 1$. What is $b$?
**2)** Differentiate that expansion: $\\dfrac{d}{dx}(4x^2 + 4x + 1) = 8x + c$. What is $c$?
**3)** The derivative of the inner function $2x+1$ is the constant $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '4', '2'],
          hint1: '$(2x+1)^2 = (2x)^2 + 2\\cdot 2x \\cdot 1 + 1^2 = 4x^2 + 4x + 1$, so $b=4$.',
          hint2: '$\\frac{d}{dx}(4x^2 + 4x + 1) = 8x + 4$, so $c = 4$.',
          hint3: '$\\frac{d}{dx}(2x+1) = 2$. Notice $8x+4 = 2(4x+2) = 2\\cdot 2(2x+1)$ — the factor of $2$ is the chain factor.',
          explanation: 'Expansion gives $4x^2+4x+1$, whose derivative is $8x+4$. The naive rule $2(2x+1)=4x+2$ is off by a factor of $2$ — and $2$ is exactly $\\frac{d}{dx}(2x+1)$. That confirms the chain factor.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'chain-rule',
    sections: [
      {
        id: 'chain2-intro',
        type: 'text' as const,
        content: `# ⛓️ The Chain Rule

**Part 2 of 7 — The Rule Itself**

---

> 🔑 **The Idea:** To differentiate $f(g(x))$, take the derivative of the **outside** (leaving the inside alone), then **multiply** by the derivative of the **inside**.`,
      },
      {
        id: 'chain2-statement',
        type: 'text' as const,
        content: `## Two Ways to State the Chain Rule

**Composition form.** If $y = f(g(x))$, then

$$\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$$

In words: *(derivative of outer, evaluated at the inner)* $\\times$ *(derivative of inner)*.

**Leibniz form.** If $y = f(u)$ and $u = g(x)$, then

$$\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$$

The $du$'s look like they "cancel." That's a memory aid, not a proof, but it captures the spirit: rates of change multiply through the links of the chain.

> 💡 **"Outside-In" mantra:** *Derivative of the outside (keep the inside), times derivative of the inside.* Say it on every problem.`,
      },
      {
        id: 'chain2-worked1',
        type: 'text' as const,
        content: `## Worked Example: $y = (3x+1)^5$

**Decompose:** outer $f(u) = u^5$, inner $g(x) = 3x+1$.

**Differentiate each piece:**
- Outer: $f'(u) = 5u^4$, so $f'(g(x)) = 5(3x+1)^4$.
- Inner: $g'(x) = 3$.

**Multiply:**

$$\\frac{dy}{dx} = 5(3x+1)^4 \\cdot 3 = 15(3x+1)^4$$

> ✅ **Sanity check:** Back in Part 1 we found that the naive answer $5(3x+1)^4$ was missing a factor of $3$. The Chain Rule restores it: $15(3x+1)^4$. ✓`,
      },
      {
        id: 'chain2-firststep-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $y = (5x - 2)^4$, what is $\\dfrac{dy}{dx}$?',
              options: ['$20(5x-2)^3$', '$4(5x-2)^3$', '$(5x-2)^3$', '$20(5x-2)^4$'],
              correctAnswer: 0,
              explanation: 'Outer derivative: $4(5x-2)^3$. Inner derivative: $\\frac{d}{dx}(5x-2)=5$. Multiply: $4(5x-2)^3 \\cdot 5 = 20(5x-2)^3$.',
            },
            {
              question: 'The Chain Rule says $\\frac{d}{dx}f(g(x))$ equals:',
              options: ["$f'(g(x)) \\cdot g'(x)$", "$f'(x) \\cdot g'(x)$", "$f'(g(x))$", "$f'(g'(x))$"],
              correctAnswer: 0,
              explanation: "Differentiate the outer function but keep the inner function inside it: $f'(g(x))$. Then multiply by the derivative of the inner function: $g'(x)$.",
            },
          ],
        },
      },
      {
        id: 'chain2-coeff-bridge',
        type: 'text' as const,
        content: `## A Useful Shortcut for Linear Insides

When the inner function is linear, like $ax+b$, its derivative is just the constant $a$. So the whole chain-rule answer is the ordinary power-rule result **multiplied by $a$**.

For $(ax+b)^n$:

$$\\frac{d}{dx}(ax+b)^n = n(ax+b)^{n-1}\\cdot a$$

That single extra factor of $a$ is the chain factor. Keep an eye on its **sign** — for an inside like $1-x$, the factor is $-1$.`,
      },
      {
        id: 'chain2-drill-input',
        type: 'input-boxes' as const,
        content: `**Apply the Rule** 🧮

Each derivative has the form $\\big[\\text{coefficient}\\big]\\cdot(\\text{inner})^{\\text{power}}$. Enter the **coefficient out front** after simplifying.

**1)** $y=(2x+7)^3 \\Rightarrow y' = ?\\,(2x+7)^2$
**2)** $y=(4x-1)^6 \\Rightarrow y' = ?\\,(4x-1)^5$
**3)** $y=(1-x)^8 \\Rightarrow y' = ?\\,(1-x)^7$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '24', '-8'],
          hint1: 'Outer derivative $3(2x+7)^2$ times inner derivative $2$ gives $6(2x+7)^2$.',
          hint2: '$6(4x-1)^5 \\cdot 4 = 24(4x-1)^5$. Multiply the power-rule coefficient by the inner derivative.',
          hint3: 'Inner derivative of $1-x$ is $-1$, so $8(1-x)^7 \\cdot(-1) = -8(1-x)^7$.',
          explanation: '1) $3\\cdot 2 = 6$.  2) $6\\cdot 4 = 24$.  3) $8\\cdot(-1) = -8$. Each coefficient is (power) $\\times$ (derivative of the inner function).',
        },
      },
      {
        id: 'chain2-steps-bridge',
        type: 'text' as const,
        content: `## Slowing It Down: One Step at a Time

On a fast drill it's easy to merge the steps in your head. But on harder problems it pays to write the Chain Rule out explicitly:

1. Differentiate the **outer** function, keeping the inside untouched.
2. Find the derivative of the **inner** function.
3. **Multiply** the two results, then simplify.

The next check walks through those three stages for $y=(3x+1)^5$.`,
      },
      {
        id: 'chain2-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're differentiating $y = (3x+1)^5$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Differentiate the outer function (keep inside):', options: ['$5(3x+1)^4$', '$5(3x+1)^5$', '$(3x+1)^4$', '$5u^4$'] },
            { label: 'Derivative of the inner function $3x+1$:', options: ['$3$', '$3x$', '$1$', '$3x+1$'] },
            { label: 'Multiply and simplify:', options: ['$15(3x+1)^4$', '$5(3x+1)^4$', '$8(3x+1)^4$', '$15(3x+1)^5$'] },
          ],
          correctAnswers: ['$5(3x+1)^4$', '$3$', '$15(3x+1)^4$'],
          hint1: 'Power rule on the outside, leaving the inside untouched: $5(3x+1)^4$.',
          hint2: '$\\frac{d}{dx}(3x+1) = 3$.',
          hint3: '$5(3x+1)^4 \\cdot 3 = 15(3x+1)^4$.',
          explanation: 'Outer derivative $5(3x+1)^4$, inner derivative $3$, product $15(3x+1)^4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'chain-rule',
    sections: [
      {
        id: 'chain3-intro',
        type: 'text' as const,
        content: `# ⛓️ The Chain Rule

**Part 3 of 7 — The General Power Rule**

---

> 🔑 **Shortcut:** The most common chain-rule pattern is a *power of a function*. The **General Power Rule** packages it so you can write the answer in one line.`,
      },
      {
        id: 'chain3-gpr',
        type: 'text' as const,
        content: `## The General Power Rule

For any differentiable inner function $g(x)$:

$$\\frac{d}{dx}\\,\\big[g(x)\\big]^n = n\\,\\big[g(x)\\big]^{\\,n-1}\\cdot g'(x)$$

Read it as: **bring down the power, reduce the power by one, then multiply by the derivative of the inside.**

### Worked Example: $y = (x^2 + 1)^4$

- $n = 4$, inner $g(x) = x^2+1$, so $g'(x) = 2x$.

$$\\frac{dy}{dx} = 4(x^2+1)^3 \\cdot 2x = 8x(x^2+1)^3$$

### Roots are powers too: $y = \\sqrt{4x - 7}$

Rewrite as a power: $y = (4x-7)^{1/2}$.

$$\\frac{dy}{dx} = \\tfrac{1}{2}(4x-7)^{-1/2}\\cdot 4 = \\frac{4}{2\\sqrt{4x-7}} = \\frac{2}{\\sqrt{4x-7}}$$

> 💡 **Always rewrite roots and reciprocals as powers first.** $\\sqrt{u} = u^{1/2}$ and $\\dfrac{1}{u} = u^{-1}$. Then the General Power Rule handles them.`,
      },
      {
        id: 'chain3-gpr-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = (x^3 - 2x)^5$.',
              options: ['$5(x^3-2x)^4(3x^2-2)$', '$5(x^3-2x)^4$', '$5(3x^2-2)^4$', '$(x^3-2x)^4(3x^2-2)$'],
              correctAnswer: 0,
              explanation: 'General Power Rule: $5(x^3-2x)^4 \\cdot \\frac{d}{dx}(x^3-2x) = 5(x^3-2x)^4(3x^2-2)$.',
            },
            {
              question: 'Differentiate $y = \\dfrac{1}{2x+5}$. (Hint: rewrite as $(2x+5)^{-1}$.)',
              options: ['$-\\dfrac{2}{(2x+5)^2}$', '$\\dfrac{2}{(2x+5)^2}$', '$-\\dfrac{1}{(2x+5)^2}$', '$-\\dfrac{2}{2x+5}$'],
              correctAnswer: 0,
              explanation: "$y=(2x+5)^{-1}$. Then $y' = -1(2x+5)^{-2}\\cdot 2 = -\\dfrac{2}{(2x+5)^2}$.",
            },
          ],
        },
      },
      {
        id: 'chain3-rewrite-bridge',
        type: 'text' as const,
        content: `## Rewrite First, Then Differentiate

The General Power Rule only looks like a power rule when the function *is* a power. So the very first move on a root or a reciprocal is to rewrite it:

| Original | Rewritten as a power |
|----------|----------------------|
| $\\sqrt{6x+1}$ | $(6x+1)^{1/2}$ |
| $\\dfrac{1}{5x-4}$ | $(5x-4)^{-1}$ |
| $\\dfrac{1}{(5x-4)^2}$ | $(5x-4)^{-2}$ |

Once it's a power, apply $n[g]^{\\,n-1}g'$ as usual. In the next drill, do this rewrite in your head before reading off the answer.`,
      },
      {
        id: 'chain3-root-input',
        type: 'input-boxes' as const,
        content: `**Powers, Roots & Reciprocals** 🧮

Differentiate each, then read off the requested number.

**1)** $y = (x^2 + 3)^{10}$. Write $y' = a\\,x\\,(x^2+3)^9$. What is $a$?
**2)** $y = \\sqrt{6x+1} = (6x+1)^{1/2}$. Write $y' = \\dfrac{b}{2\\sqrt{6x+1}}$. What is $b$?
**3)** $y = (5x-4)^{-2}$. Write $y' = c\\,(5x-4)^{-3}$. What is $c$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '6', '-10'],
          hint1: '$10(x^2+3)^9 \\cdot 2x = 20x(x^2+3)^9$, so $a = 20$.',
          hint2: '$\\frac{1}{2}(6x+1)^{-1/2}\\cdot 6 = \\frac{6}{2\\sqrt{6x+1}}$, so $b = 6$.',
          hint3: '$-2(5x-4)^{-3}\\cdot 5 = -10(5x-4)^{-3}$, so $c = -10$.',
          explanation: '1) $10\\cdot 2 = 20$.  2) inner derivative $6$ lands in the numerator, $b=6$.  3) $-2\\cdot 5 = -10$.',
        },
      },
      {
        id: 'chain3-cancel-bridge',
        type: 'text' as const,
        content: `## Watch the Numbers Cancel

A pretty thing happens with square roots whose inside is $x^2 + c$. The $\\tfrac12$ from the power rule and the $2$ from the inner derivative $2x$ **cancel**:

$$\\frac{d}{dx}\\sqrt{x^2+9} = \\tfrac12(x^2+9)^{-1/2}\\cdot 2x = \\frac{2x}{2\\sqrt{x^2+9}} = \\frac{x}{\\sqrt{x^2+9}}$$

> 💡 Don't *force* the cancellation — let it happen and then simplify. The next check has one of these.`,
      },
      {
        id: 'chain3-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Derivative** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{d}{dx}(7x+2)^3 =$', options: ['$21(7x+2)^2$', '$3(7x+2)^2$', '$7(7x+2)^2$', '$21(7x+2)^3$'] },
            { label: '$\\frac{d}{dx}\\sqrt{x^2+9} =$', options: ['$\\dfrac{x}{\\sqrt{x^2+9}}$', '$\\dfrac{2x}{\\sqrt{x^2+9}}$', '$\\dfrac{1}{2\\sqrt{x^2+9}}$', '$\\dfrac{x}{2\\sqrt{x^2+9}}$'] },
          ],
          correctAnswers: ['$21(7x+2)^2$', '$\\dfrac{x}{\\sqrt{x^2+9}}$'],
          hint1: '$3(7x+2)^2 \\cdot 7 = 21(7x+2)^2$.',
          hint2: 'For $\\sqrt{x^2+9}=(x^2+9)^{1/2}$: $\\frac{1}{2}(x^2+9)^{-1/2}\\cdot 2x = \\frac{2x}{2\\sqrt{x^2+9}} = \\frac{x}{\\sqrt{x^2+9}}$.',
          hint3: 'The $2$ from the power rule cancels the $2$ from the inner derivative $2x$.',
          explanation: '$\\frac{d}{dx}(7x+2)^3 = 21(7x+2)^2$. $\\frac{d}{dx}\\sqrt{x^2+9} = \\frac{x}{\\sqrt{x^2+9}}$ after the $2$s cancel.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'chain-rule',
    sections: [
      {
        id: 'chain4-intro',
        type: 'text' as const,
        content: `# ⛓️ The Chain Rule

**Part 4 of 7 — Trig, Exponential & Logarithmic Chains**

---

> 🔑 **Same rule, new outers:** Whenever a trig, exponential, or log function wraps an inner function, differentiate the outer using its standard derivative — then multiply by the derivative of the inside.`,
      },
      {
        id: 'chain4-table',
        type: 'text' as const,
        content: `## The Outer-Function Toolkit

| Outer $f(u)$ | $f'(u)$ | Chain-rule form |
|--------------|---------|-----------------|
| $\\sin u$ | $\\cos u$ | $\\cos(g)\\cdot g'$ |
| $\\cos u$ | $-\\sin u$ | $-\\sin(g)\\cdot g'$ |
| $\\tan u$ | $\\sec^2 u$ | $\\sec^2(g)\\cdot g'$ |
| $e^{\\,u}$ | $e^{\\,u}$ | $e^{\\,g}\\cdot g'$ |
| $\\ln u$ | $\\dfrac{1}{u}$ | $\\dfrac{g'}{g}$ |

### Worked Example: $y = \\sin(x^2)$

Outer $\\sin u$ → $\\cos u$; inner $x^2$ → $2x$:

$$\\frac{dy}{dx} = \\cos(x^2)\\cdot 2x = 2x\\cos(x^2)$$

> ⚠️ $\\sin(x^2)$ and $\\sin^2 x$ are **different**! $\\sin(x^2)$ means "sine of $x^2$" (inner $=x^2$). $\\sin^2 x = (\\sin x)^2$ means "square of $\\sin x$" (inner $=\\sin x$). They have different derivatives.`,
      },
      {
        id: 'chain4-exp-log',
        type: 'text' as const,
        content: `## Exponential and Log Examples

### $y = e^{\\,5x}$

Outer $e^u$ → $e^u$; inner $5x$ → $5$:

$$\\frac{dy}{dx} = e^{\\,5x}\\cdot 5 = 5e^{\\,5x}$$

### $y = \\ln(3x^2 + 1)$

Outer $\\ln u$ → $\\dfrac{1}{u}$; inner $3x^2+1$ → $6x$:

$$\\frac{dy}{dx} = \\frac{1}{3x^2+1}\\cdot 6x = \\frac{6x}{3x^2+1}$$

### $y = \\cos(4x)$

Outer $\\cos u$ → $-\\sin u$; inner $4x$ → $4$:

$$\\frac{dy}{dx} = -\\sin(4x)\\cdot 4 = -4\\sin(4x)$$

> 💡 For $\\ln(g)$ the answer is always the clean fraction $\\dfrac{g'}{g}$. For $e^{\\,g}$ it's the original times $g'$.`,
      },
      {
        id: 'chain4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = \\sin(3x)$.',
              options: ['$3\\cos(3x)$', '$\\cos(3x)$', '$-3\\cos(3x)$', '$3\\sin(3x)$'],
              correctAnswer: 0,
              explanation: 'Outer $\\sin u \\to \\cos u$ gives $\\cos(3x)$; inner $3x \\to 3$. Multiply: $3\\cos(3x)$.',
            },
            {
              question: 'Differentiate $y = e^{\\,x^2}$.',
              options: ['$2x\\,e^{\\,x^2}$', '$e^{\\,x^2}$', '$2x\\,e^{\\,2x}$', '$x^2 e^{\\,x^2}$'],
              correctAnswer: 0,
              explanation: 'Outer $e^u \\to e^u$ stays $e^{x^2}$; inner $x^2 \\to 2x$. Multiply: $2x\\,e^{x^2}$.',
            },
            {
              question: 'Differentiate $y = \\ln(7x)$.',
              options: ['$\\dfrac{1}{x}$', '$\\dfrac{7}{x}$', '$\\dfrac{1}{7x}$', '$\\dfrac{7}{x^2}$'],
              correctAnswer: 0,
              explanation: "$\\frac{g'}{g}=\\frac{7}{7x}=\\frac{1}{x}$. The $7$s cancel — a nice reminder that $\\ln(7x)=\\ln 7 + \\ln x$ has the same derivative as $\\ln x$.",
            },
          ],
        },
      },
      {
        id: 'chain4-linear-bridge',
        type: 'text' as const,
        content: `## The "$kx$" Pattern

When the inside is simply $kx$, the chain factor is just the constant $k$. So:

- $\\dfrac{d}{dx}\\sin(kx) = k\\cos(kx)$
- $\\dfrac{d}{dx}\\cos(kx) = -k\\sin(kx)$
- $\\dfrac{d}{dx}e^{\\,kx} = k\\,e^{\\,kx}$
- $\\dfrac{d}{dx}\\tan(kx) = k\\sec^2(kx)$

The only sign trap is cosine, which contributes a minus from $\\frac{d}{dx}\\cos$. Use this pattern on the next drill.`,
      },
      {
        id: 'chain4-input',
        type: 'input-boxes' as const,
        content: `**Trig / Exp / Log Drill** 🧮

Each derivative is $[\\text{number}]\\cdot(\\text{function})$. Enter the **number out front**.

**1)** $y=\\cos(6x) \\Rightarrow y' = ?\\cdot\\sin(6x)$
**2)** $y=e^{\\,8x} \\Rightarrow y' = ?\\cdot e^{\\,8x}$
**3)** $y=\\tan(5x) \\Rightarrow y' = ?\\cdot\\sec^2(5x)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-6', '8', '5'],
          hint1: '$\\frac{d}{dx}\\cos(6x) = -\\sin(6x)\\cdot 6 = -6\\sin(6x)$.',
          hint2: '$\\frac{d}{dx}e^{8x} = e^{8x}\\cdot 8 = 8e^{8x}$.',
          hint3: '$\\frac{d}{dx}\\tan(5x) = \\sec^2(5x)\\cdot 5 = 5\\sec^2(5x)$.',
          explanation: '1) $-6$ (the $-$ comes from $\\frac{d}{dx}\\cos$).  2) $8$.  3) $5$. Each "number out front" is the derivative of the inner function $kx$, namely $k$.',
        },
      },
      {
        id: 'chain4-nonlinear-bridge',
        type: 'text' as const,
        content: `## When the Inside Isn't Linear

If the inside is $x^2$, $x^2+4$, or $-3x$, the chain factor is no longer a bare constant — it's the *full* derivative of that inside ($2x$, $2x$, and $-3$ respectively). The structure is identical; you just carry a variable factor.

The next check mixes a trig, a log, and an exponential, each with a non-trivial inside.`,
      },
      {
        id: 'chain4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Derivative** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{d}{dx}\\sin(x^2) =$', options: ['$2x\\cos(x^2)$', '$\\cos(x^2)$', '$2x\\cos(2x)$', '$\\cos(2x)$'] },
            { label: '$\\frac{d}{dx}\\ln(x^2+4) =$', options: ['$\\dfrac{2x}{x^2+4}$', '$\\dfrac{1}{x^2+4}$', '$\\dfrac{2x}{x^2}$', '$\\dfrac{x}{x^2+4}$'] },
            { label: '$\\frac{d}{dx}e^{-3x} =$', options: ['$-3e^{-3x}$', '$3e^{-3x}$', '$e^{-3x}$', '$-3e^{-3}$'] },
          ],
          correctAnswers: ['$2x\\cos(x^2)$', '$\\dfrac{2x}{x^2+4}$', '$-3e^{-3x}$'],
          hint1: '$\\sin(x^2)$: outer $\\cos(x^2)$ times inner derivative $2x$.',
          hint2: "$\\ln(x^2+4)$ gives $\\frac{g'}{g} = \\frac{2x}{x^2+4}$.",
          hint3: '$e^{-3x}$: inner derivative of $-3x$ is $-3$, so $-3e^{-3x}$.',
          explanation: 'Each uses (outer derivative at the inner) $\\times$ (inner derivative): $2x\\cos(x^2)$, $\\frac{2x}{x^2+4}$, and $-3e^{-3x}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'chain-rule',
    sections: [
      {
        id: 'chain5-intro',
        type: 'text' as const,
        content: `# ⛓️ The Chain Rule

**Part 5 of 7 — Nested Chains: Functions Inside Functions Inside Functions**

---

> 🔑 **Peel the onion:** When there are three or more layers, the Chain Rule applies *repeatedly*. Differentiate from the outside in, multiplying a new factor for each layer.`,
      },
      {
        id: 'chain5-triple',
        type: 'text' as const,
        content: `## The Multi-Layer Chain Rule

For three layers $y = f(g(h(x)))$:

$$\\frac{dy}{dx} = f'(g(h(x)))\\cdot g'(h(x))\\cdot h'(x)$$

Each layer contributes one factor. **Work outside-in and multiply as you go.**

### Worked Example: $y = \\sin^3(2x)$

Rewrite to see the layers: $y = [\\sin(2x)]^3$.

- **Layer 1 (outermost):** cube → $3[\\sin(2x)]^2$
- **Layer 2 (middle):** $\\sin$ → $\\cos(2x)$
- **Layer 3 (inner):** $2x$ → $2$

Multiply all three:

$$\\frac{dy}{dx} = 3\\sin^2(2x)\\cdot\\cos(2x)\\cdot 2 = 6\\sin^2(2x)\\cos(2x)$$

> 💡 **Count the layers first.** $\\sin^3(2x)$ has three: a cube, a sine, and a "$\\times 2$." Three layers → three factors in the product.`,
      },
      {
        id: 'chain5-worked2',
        type: 'text' as const,
        content: `## Another: $y = \\sqrt{\\cos(4x)}$

Rewrite: $y = [\\cos(4x)]^{1/2}$.

- **Layer 1:** square root → $\\tfrac{1}{2}[\\cos(4x)]^{-1/2}$
- **Layer 2:** $\\cos$ → $-\\sin(4x)$
- **Layer 3:** $4x$ → $4$

$$\\frac{dy}{dx} = \\tfrac{1}{2}[\\cos(4x)]^{-1/2}\\cdot(-\\sin(4x))\\cdot 4 = \\frac{-4\\sin(4x)}{2\\sqrt{\\cos(4x)}} = \\frac{-2\\sin(4x)}{\\sqrt{\\cos(4x)}}$$

> ⚠️ **Don't stop early!** A common error is differentiating two layers and forgetting the innermost factor. The "$\\times 4$" from $4x$ is easy to drop.`,
      },
      {
        id: 'chain5-layers-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many layers (chain factors) does $y = \\cos^2(3x)$ have?',
              options: ['3 layers: square, cosine, and $3x$', '2 layers: square and cosine', '1 layer', '4 layers'],
              correctAnswer: 0,
              explanation: '$\\cos^2(3x) = [\\cos(3x)]^2$: outer square, middle cosine, inner $3x$. Three layers means three factors when you differentiate.',
            },
            {
              question: 'Differentiate $y = (\\sin x)^4 = \\sin^4 x$.',
              options: ['$4\\sin^3 x\\cos x$', '$4\\sin^3 x$', '$4\\cos^3 x$', '$\\sin^3 x \\cos x$'],
              correctAnswer: 0,
              explanation: 'Outer (power) $\\to 4\\sin^3 x$; inner $\\sin x \\to \\cos x$. Multiply: $4\\sin^3 x\\cos x$.',
            },
          ],
        },
      },
      {
        id: 'chain5-count-bridge',
        type: 'text' as const,
        content: `## A Reliable Routine for Nests

For a multi-layer function, this routine never fails:

1. **Count the layers** from the outside in.
2. Write one factor per layer: the derivative of that layer, evaluated at everything inside it.
3. **Multiply all the factors** together, then simplify.

For $\\sin^2(5x)$ there are three layers — square, sine, and $5x$ — giving factors $2\\sin(5x)$, $\\cos(5x)$, and $5$. The product is $10\\sin(5x)\\cos(5x)$. Try the routine on the next drill.`,
      },
      {
        id: 'chain5-input',
        type: 'input-boxes' as const,
        content: `**Nested-Chain Drill** 🧮

For each, the simplified coefficient out front is a single integer. Enter it.

**1)** $y=\\sin^2(5x) \\Rightarrow y' = ?\\cdot\\sin(5x)\\cos(5x)$
**2)** $y=(3x+1)^3 \\Rightarrow y'=?\\,(3x+1)^2$  *(warm-up)*
**3)** $y=\\cos^3(2x) \\Rightarrow y' = ?\\cdot\\cos^2(2x)\\sin(2x)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '9', '-6'],
          hint1: '$\\sin^2(5x)=[\\sin(5x)]^2$: $2\\sin(5x)\\cdot\\cos(5x)\\cdot 5 = 10\\sin(5x)\\cos(5x)$.',
          hint2: '$3(3x+1)^2\\cdot 3 = 9(3x+1)^2$.',
          hint3: '$\\cos^3(2x)=[\\cos(2x)]^3$: $3\\cos^2(2x)\\cdot(-\\sin(2x))\\cdot 2 = -6\\cos^2(2x)\\sin(2x)$.',
          explanation: '1) $2\\cdot 5 = 10$.  2) $3\\cdot 3 = 9$.  3) $3\\cdot(-1)\\cdot 2 = -6$ (the minus is from differentiating cosine).',
        },
      },
      {
        id: 'chain5-assemble-bridge',
        type: 'text' as const,
        content: `## Naming Each Factor

It helps to *name* the three factors out loud as you build a triple chain. For $\\sin^3(2x) = [\\sin(2x)]^3$:

- **Outer (power):** $3[\\sin(2x)]^2$
- **Middle (sine):** $\\cos(2x)$
- **Inner ($2x$):** $2$

In the next check, choose each factor in turn — then imagine multiplying them to get $6\\sin^2(2x)\\cos(2x)$.`,
      },
      {
        id: 'chain5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Triple Chain** 🔽

You are differentiating $y = \\sin^3(2x) = [\\sin(2x)]^3$. Choose each factor.`,
        exercise: {
          dropdowns: [
            { label: 'Outer layer (power):', options: ['$3\\sin^2(2x)$', '$3\\sin^3(2x)$', '$2\\sin^2(2x)$', '$3\\cos^2(2x)$'] },
            { label: 'Middle layer ($\\sin$):', options: ['$\\cos(2x)$', '$\\sin(2x)$', '$-\\cos(2x)$', '$\\cos(x)$'] },
            { label: 'Inner layer ($2x$):', options: ['$2$', '$2x$', '$1$', '$x$'] },
          ],
          correctAnswers: ['$3\\sin^2(2x)$', '$\\cos(2x)$', '$2$'],
          hint1: 'Power rule on the outside: $3[\\sin(2x)]^2 = 3\\sin^2(2x)$.',
          hint2: 'The middle function is sine; its derivative is cosine, evaluated at the same inside: $\\cos(2x)$.',
          hint3: 'Innermost is $2x$, whose derivative is $2$.',
          explanation: 'Product of all three factors: $3\\sin^2(2x)\\cdot\\cos(2x)\\cdot 2 = 6\\sin^2(2x)\\cos(2x)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'chain-rule',
    sections: [
      {
        id: 'chain6-intro',
        type: 'text' as const,
        content: `# ⛓️ The Chain Rule

**Part 6 of 7 — Combining Rules, Tables & Related Rates**

---

> 🔑 **The Chain Rule rarely travels alone.** On the AP exam it shows up *inside* product and quotient rules, *with* given tables of values, and at the heart of related rates.`,
      },
      {
        id: 'chain6-combine',
        type: 'text' as const,
        content: `## Chain Rule Inside Product & Quotient Rules

When a chain-rule expression is one factor of a product, differentiate *that factor* with the Chain Rule, then assemble with the Product Rule.

### Worked Example: $y = x^2\\,(2x+1)^3$

**Product Rule** $(uv)' = u'v + uv'$ with $u = x^2$ and $v = (2x+1)^3$:

- $u' = 2x$
- $v' = 3(2x+1)^2\\cdot 2 = 6(2x+1)^2$ ← Chain Rule here

$$\\frac{dy}{dx} = 2x(2x+1)^3 + x^2\\cdot 6(2x+1)^2 = 2x(2x+1)^2\\big[(2x+1) + 3x\\big] = 2x(2x+1)^2(5x+1)$$

> 💡 Factor out the **lowest power** of $(2x+1)$ and the common $2x$ to simplify — examiners love a factored answer.`,
      },
      {
        id: 'chain6-product-dropdown',
        type: 'dropdown-select' as const,
        content: `**Assemble the Product Rule** 🔽

You are differentiating $y = x^3\\,(x+2)^4$ with the Product Rule, $u=x^3$ and $v=(x+2)^4$.`,
        exercise: {
          dropdowns: [
            { label: "$u' = \\frac{d}{dx}x^3 =$", options: ['$3x^2$', '$x^2$', '$3x^3$', '$3x$'] },
            { label: "$v' = \\frac{d}{dx}(x+2)^4 =$", options: ['$4(x+2)^3$', '$4(x+2)^4$', '$(x+2)^3$', '$4(x+2)^3\\cdot 2$'] },
          ],
          correctAnswers: ['$3x^2$', '$4(x+2)^3$'],
          hint1: 'Plain Power Rule on $x^3$ gives $3x^2$.',
          hint2: 'Chain Rule on $(x+2)^4$: $4(x+2)^3$ times the inner derivative $\\frac{d}{dx}(x+2)=1$, which is just $4(x+2)^3$.',
          hint3: "Then $y' = u'v + uv' = 3x^2(x+2)^4 + x^3\\cdot 4(x+2)^3$.",
          explanation: "$u'=3x^2$ and $v'=4(x+2)^3$ (inner derivative of $x+2$ is $1$). The Product Rule then gives $y' = 3x^2(x+2)^4 + 4x^3(x+2)^3$.",
        },
      },
      {
        id: 'chain6-table',
        type: 'text' as const,
        content: `## Chain Rule with a Table of Values

A classic AP question gives values of $f$, $g$, and their derivatives at specific points and asks for a derivative of $h(x)=f(g(x))$.

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|-----|--------|---------|--------|---------|
| $1$ | $3$ | $5$ | $2$ | $-4$ |
| $2$ | $6$ | $7$ | $1$ | $\\;\\;8$ |

**Find $h'(1)$ where $h(x) = f(g(x))$.**

By the Chain Rule, $h'(x) = f'(g(x))\\cdot g'(x)$. At $x=1$:

$$h'(1) = f'(g(1))\\cdot g'(1) = f'(2)\\cdot g'(1) = 7\\cdot(-4) = -28$$

> ⚠️ **Read the table in the right order.** First find the *inside* value $g(1)=2$, then look up $f'$ at that value: $f'(2)=7$. Don't grab $f'(1)$ by mistake.`,
      },
      {
        id: 'chain6-table-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the table from the previous section.`,
        exercise: {
          questions: [
            {
              question: "With the same table, find $h'(2)$ where $h(x) = f(g(x))$.",
              options: ["$f'(1)\\cdot g'(2) = 5\\cdot 8 = 40$", "$f'(2)\\cdot g'(2) = 7\\cdot 8 = 56$", "$f'(2)\\cdot g'(1) = 7\\cdot(-4) = -28$", "$g'(1)\\cdot f'(2) = -4\\cdot 7 = -28$"],
              correctAnswer: 0,
              explanation: "$h'(2) = f'(g(2))\\cdot g'(2)$. Since $g(2)=1$, use $f'(1)=5$ and $g'(2)=8$: $5\\cdot 8 = 40$.",
            },
            {
              question: 'For $y = x^2(2x+1)^3$, which factor requires the Chain Rule?',
              options: ['Differentiating $(2x+1)^3$', 'Differentiating $x^2$', 'Adding the two terms', 'Neither factor'],
              correctAnswer: 0,
              explanation: '$(2x+1)^3$ is a composite, so its derivative $6(2x+1)^2$ needs the Chain Rule. $x^2$ uses only the basic Power Rule.',
            },
          ],
        },
      },
      {
        id: 'chain6-relatedrates',
        type: 'text' as const,
        content: `## The Chain Rule Powers Related Rates

In related rates we differentiate **with respect to time $t$**, treating every variable as a function of $t$. Each time we differentiate a variable, a factor like $\\dfrac{dx}{dt}$ appears — that's the Chain Rule at work.

### Example: A circle's area grows as its radius changes.

$$A = \\pi r^2 \\;\\Longrightarrow\\; \\frac{dA}{dt} = 2\\pi r\\,\\frac{dr}{dt}$$

The factor $\\dfrac{dr}{dt}$ is exactly the "derivative of the inside" — here the inside variable $r$ depends on $t$.

If $r = 3$ and $\\dfrac{dr}{dt} = 2$, then

$$\\frac{dA}{dt} = 2\\pi(3)(2) = 12\\pi$$

> 💡 Every related-rates equation is one big Chain Rule. The $\\dfrac{d(\\text{var})}{dt}$ factors are the chain factors you must never omit.`,
      },
      {
        id: 'chain6-input',
        type: 'input-boxes' as const,
        content: `**Combine & Apply** 🧮

**1)** Using the table ($f'(2)=7$, $g(1)=2$, $g'(1)=-4$): $h'(1)$ for $h=f(g(x))$ equals $\\,?$
**2)** $A=\\pi r^2$ with $r=5$ and $\\frac{dr}{dt}=3$. Then $\\frac{dA}{dt} = ?\\,\\pi$. Enter the number multiplying $\\pi$.
**3)** $V = s^3$ (cube volume), $s=2$, $\\frac{ds}{dt}=4$. $\\frac{dV}{dt} = 3s^2\\frac{ds}{dt} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-28', '30', '48'],
          hint1: "$h'(1) = f'(g(1))\\cdot g'(1) = f'(2)\\cdot(-4) = 7\\cdot(-4)$.",
          hint2: '$\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt} = 2\\pi(5)(3) = 30\\pi$, so the number is $30$.',
          hint3: '$\\frac{dV}{dt} = 3s^2\\frac{ds}{dt} = 3(2^2)(4) = 3\\cdot 4\\cdot 4 = 48$.',
          explanation: '1) $7\\cdot(-4) = -28$.  2) $2\\cdot 5\\cdot 3 = 30$, so $30\\pi$.  3) $3\\cdot 4\\cdot 4 = 48$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'chain-rule',
    sections: [
      {
        id: 'chain7-intro',
        type: 'text' as const,
        content: `# ⛓️ The Chain Rule

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) decompose any composite, (2) apply the General Power Rule, (3) handle trig/exp/log chains, (4) peel multi-layer nests, and (5) combine the Chain Rule with product, quotient, table, and related-rate problems. Let's put it all together.`,
      },
      {
        id: 'chain7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Type | Rule |
|------|------|
| Composition | $\\dfrac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)$ |
| General Power | $\\dfrac{d}{dx}[g]^n = n[g]^{\\,n-1}g'$ |
| Sine chain | $\\dfrac{d}{dx}\\sin(g) = \\cos(g)\\cdot g'$ |
| Exp chain | $\\dfrac{d}{dx}e^{\\,g} = e^{\\,g}\\cdot g'$ |
| Log chain | $\\dfrac{d}{dx}\\ln(g) = \\dfrac{g'}{g}$ |
| Multi-layer | one factor per layer, outside-in |

> ⚠️ **Top three pitfalls:** (1) dropping the inner derivative $g'$; (2) confusing $\\sin(x^2)$ with $\\sin^2 x$; (3) reading a value table in the wrong order — find $g(a)$ first, then $f'$ at *that* value.`,
      },
      {
        id: 'chain7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = (x^2 + 4x)^7$.',
              options: ['$7(x^2+4x)^6(2x+4)$', '$7(x^2+4x)^6$', '$(x^2+4x)^6(2x+4)$', '$7(2x+4)^6$'],
              correctAnswer: 0,
              explanation: 'General Power Rule: $7(x^2+4x)^6 \\cdot \\frac{d}{dx}(x^2+4x) = 7(x^2+4x)^6(2x+4)$.',
            },
            {
              question: 'Differentiate $y = \\cos(x^3)$.',
              options: ['$-3x^2\\sin(x^3)$', '$3x^2\\sin(x^3)$', '$-\\sin(x^3)$', '$-3x^2\\cos(x^3)$'],
              correctAnswer: 0,
              explanation: 'Outer $\\cos u \\to -\\sin u$ gives $-\\sin(x^3)$; inner $x^3 \\to 3x^2$. Multiply: $-3x^2\\sin(x^3)$.',
            },
          ],
        },
      },
      {
        id: 'chain7-strategy-bridge',
        type: 'text' as const,
        content: `## A Two-Question Self-Check

Before differentiating anything on the exam, ask:

1. **What is the inside?** Name $g(x)$ explicitly.
2. **Did I multiply by $g'(x)$?** If not, you've made the most common error.

These two questions catch the vast majority of chain-rule mistakes. Keep them in mind on the mixed drill below.`,
      },
      {
        id: 'chain7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $y=e^{\\,4x} \\Rightarrow y' = ?\\cdot e^{\\,4x}$. Enter the number.
**2)** $y=\\ln(5x) \\Rightarrow y' = \\dfrac{1}{x}$. The coefficient of $\\frac{1}{x}$ is $\\,?$
**3)** Table: $g(1)=2$, $g'(1)=-4$, $f'(2)=7$. For $h=f(g(x))$, $h'(1) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '1', '-28'],
          hint1: '$\\frac{d}{dx}e^{4x} = 4e^{4x}$.',
          hint2: '$\\frac{d}{dx}\\ln(5x) = \\frac{5}{5x} = \\frac{1}{x}$, so the coefficient is $1$.',
          hint3: "$h'(1) = f'(g(1))\\cdot g'(1) = f'(2)\\cdot(-4) = 7\\cdot(-4) = -28$.",
          explanation: '1) $4$.  2) the $5$s cancel, leaving coefficient $1$.  3) $7\\cdot(-4) = -28$.',
        },
      },
      {
        id: 'chain7-inner-bridge',
        type: 'text' as const,
        content: `## The Factor People Forget

Every chain-rule answer ends with a multiplication by $g'(x)$, the derivative of the inside. Train your eye to spot that factor *first*:

- inside $x^2+1$ → factor $2x$
- inside $7-x$ → factor $-1$
- inside $3x^2$ → factor $6x$

In the next check, identify only that inner-derivative factor for each function — that's the piece most students drop.`,
      },
      {
        id: 'chain7-spot-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Inner Derivative** 🔽

Identify $g'(x)$, the factor you must multiply by, for each function.`,
        exercise: {
          dropdowns: [
            { label: "$y=\\sin(x^2+1)$, inner derivative $g'(x)=$", options: ['$2x$', '$x^2+1$', '$\\cos(x^2+1)$', '$2x+1$'] },
            { label: "$y=\\sqrt{7-x}$, inner derivative $g'(x)=$", options: ['$-1$', '$1$', '$7-x$', '$\\frac{1}{2}$'] },
            { label: "$y=e^{\\,3x^2}$, inner derivative $g'(x)=$", options: ['$6x$', '$3x^2$', '$6x^2$', '$3x$'] },
          ],
          correctAnswers: ['$2x$', '$-1$', '$6x$'],
          hint1: 'Inner of $\\sin(x^2+1)$ is $x^2+1$; its derivative is $2x$.',
          hint2: 'Inner of $\\sqrt{7-x}$ is $7-x$; its derivative is $-1$.',
          hint3: 'Inner of $e^{3x^2}$ is $3x^2$; its derivative is $6x$.',
          explanation: "The chain factor $g'(x)$ is: $2x$ for $x^2+1$; $-1$ for $7-x$; and $6x$ for $3x^2$.",
        },
      },
      {
        id: 'chain7-exit-bridge',
        type: 'text' as const,
        content: `## You're Ready

You can now decompose composites, apply the General Power Rule, differentiate trig/exp/log chains, peel multi-layer nests, and combine the Chain Rule with product, quotient, table, and related-rate problems — always remembering the inner-derivative factor $g'(x)$.

One last set of three questions covers a power, a logarithm, and a table problem. Take your time and use the "what's the inside, did I multiply by $g'$?" check.`,
      },
      {
        id: 'chain7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $y = (3x - 5)^4$.',
              options: ['$12(3x-5)^3$', '$4(3x-5)^3$', '$3(3x-5)^3$', '$12(3x-5)^4$'],
              correctAnswer: 0,
              explanation: 'Outer derivative $4(3x-5)^3$ times inner derivative $3$ gives $12(3x-5)^3$.',
            },
            {
              question: 'Differentiate $y = \\ln(x^2 + 1)$.',
              options: ['$\\dfrac{2x}{x^2+1}$', '$\\dfrac{1}{x^2+1}$', '$\\dfrac{2x}{x^2}$', '$\\dfrac{x}{x^2+1}$'],
              correctAnswer: 0,
              explanation: "Log chain rule: $\\frac{g'}{g} = \\frac{2x}{x^2+1}$, since $\\frac{d}{dx}(x^2+1)=2x$.",
            },
            {
              question: "Given a table with $g(4)=1$, $g'(4)=3$, $f'(1)=10$, find $h'(4)$ for $h(x)=f(g(x))$.",
              options: ['$30$', '$13$', '$10$', '$3$'],
              correctAnswer: 0,
              explanation: "$h'(4) = f'(g(4))\\cdot g'(4) = f'(1)\\cdot 3 = 10\\cdot 3 = 30$. Find the inside value $g(4)=1$ first, then $f'(1)=10$.",
            },
          ],
        },
      },
    ],
  },
]
