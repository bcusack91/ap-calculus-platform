import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Logarithmic Differentiation (AP Calculus AB).
 * Registry key / DB Topic.slug: 'logarithmic-differentiation-technique'.
 * 7 parts forming a pedagogical arc: why we need it & the log toolkit →
 * the 4-step method → big products/quotients/powers → variable-base powers
 * (x^x and friends) → general base & exponent + verifying old rules →
 * applications (tangent lines, related rates, common traps) → mixed practice
 * + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative computation was verified by hand and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'logarithmic-differentiation-technique',
    sections: [
      {
        id: 'logdiff1-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Differentiation

**Part 1 of 7 — Why Take the Log First?**

---

### Topics in This Part

| Section |
|---------|
| The functions that break our usual rules |
| The three log laws that do the heavy lifting |
| The derivative of $\\ln$ — including the chain rule version |

> 🔑 **Key Concept:** Some functions are *miserable* to differentiate directly but become *easy* after taking a natural log. Logarithmic differentiation is the trick of taking $\\ln$ of both sides **first**, then differentiating.`,
      },
      {
        id: 'logdiff1-why',
        type: 'text' as const,
        content: `## Two Kinds of "Stuck"

Our power, product, quotient, and chain rules handle a lot — but two situations stop them cold.

**1. A giant product/quotient with roots and powers.** Differentiating this directly with the quotient and product rules is a nightmare:

$$y = \\frac{(x^2+1)^4\\,\\sqrt{x-3}}{(2x+5)^7}$$

**2. A variable in BOTH the base and the exponent.** None of our rules apply here:

$$y = x^x$$

The power rule needs a **constant** exponent ($x^n$). The exponential rule needs a **constant** base ($a^x$). But $x^x$ has a variable in *each* spot — so neither rule is legal.

> 💡 **The fix for both:** take the natural log of each side. Logs turn powers into products, and products into sums — flattening the whole mess into something we *can* differentiate.`,
      },
      {
        id: 'logdiff1-spot',
        type: 'multiple-choice' as const,
        content: `**Spot the Log-Differentiation Candidate** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which function is the BEST candidate for logarithmic differentiation?',
              options: [
                '$y = \\dfrac{(x+1)^6(x-4)^3}{(2x+1)^5}$',
                '$y = 3x^2 + 5x - 1$',
                '$y = \\sin(2x)$',
                '$y = e^{3x}$',
              ],
              correctAnswer: 0,
              explanation: 'A big product/quotient of powers is exactly what logs flatten into a sum. The polynomial, the trig function, and the exponential all differentiate trivially with standard rules.',
            },
          ],
        },
      },
      {
        id: 'logdiff1-laws',
        type: 'text' as const,
        content: `## The Log Toolkit

Three properties of the natural log do all the work:

| Law | Statement | What it does |
|-----|-----------|--------------|
| Product | $\\ln(AB) = \\ln A + \\ln B$ | product → **sum** |
| Quotient | $\\ln\\!\\left(\\dfrac{A}{B}\\right) = \\ln A - \\ln B$ | quotient → **difference** |
| Power | $\\ln(A^p) = p\\ln A$ | exponent → **coefficient out front** |

After applying these, a tangled expression becomes a simple **sum of terms** — and sums are the easiest thing in the world to differentiate.

> ⚠️ These laws need $A, B > 0$. We will address negative inputs with $\\lvert\\,\\cdot\\,\\rvert$ in Part 7; for now assume every expression inside a log is positive.`,
      },
      {
        id: 'logdiff1-expand',
        type: 'dropdown-select' as const,
        content: `**Expand With Log Laws** 🔽

Use the three log laws to rewrite each $\\ln$ as a sum/difference of simpler logs.`,
        exercise: {
          dropdowns: [
            { label: '$\\ln\\!\\left(x^5\\right) =$', options: ['$5\\ln x$', '$\\ln 5 \\cdot x$', '$x\\ln 5$', '$(\\ln x)^5$'] },
            { label: '$\\ln\\!\\left(\\dfrac{x}{y}\\right) =$', options: ['$\\ln x - \\ln y$', '$\\ln x + \\ln y$', '$\\dfrac{\\ln x}{\\ln y}$', '$\\ln(x-y)$'] },
            { label: '$\\ln\\!\\left(x^3\\sqrt{y}\\right) =$', options: ['$3\\ln x + \\tfrac{1}{2}\\ln y$', '$3\\ln x \\cdot \\tfrac{1}{2}\\ln y$', '$\\ln x^3 + \\ln y^{1/2}\\!\\cdot\\! x$', '$\\tfrac{1}{2}(3\\ln x + \\ln y)$'] },
          ],
          correctAnswers: ['$5\\ln x$', '$\\ln x - \\ln y$', '$3\\ln x + \\tfrac{1}{2}\\ln y$'],
          hint1: 'Power law: an exponent comes out front as a multiplier. $\\sqrt{y} = y^{1/2}$.',
          hint2: 'Quotient law turns a fraction into a difference of logs.',
          hint3: 'For the product $x^3\\sqrt{y}$: split into $\\ln x^3 + \\ln \\sqrt{y}$, then pull each exponent out: $3\\ln x + \\tfrac12\\ln y$.',
          explanation: 'Power: $\\ln x^5 = 5\\ln x$. Quotient: $\\ln(x/y) = \\ln x - \\ln y$. Product + power: $\\ln(x^3\\sqrt{y}) = 3\\ln x + \\tfrac{1}{2}\\ln y$.',
        },
      },
      {
        id: 'logdiff1-dlnu',
        type: 'text' as const,
        content: `## The Engine: Derivative of $\\ln u$

After we take a log, we differentiate. The one derivative we lean on constantly is:

$$\\frac{d}{dx}\\big[\\ln x\\big] = \\frac{1}{x}$$

and, when the inside is a function $u(x)$, the **chain rule** version:

$$\\boxed{\\;\\frac{d}{dx}\\big[\\ln u\\big] = \\frac{u'}{u}\\;}$$

This is *the* formula that makes the whole method tick.

| Function | $u$ | $u'$ | $\\dfrac{d}{dx}[\\ln u] = \\dfrac{u'}{u}$ |
|----------|-----|------|-------------------|
| $\\ln(3x)$ | $3x$ | $3$ | $\\dfrac{3}{3x} = \\dfrac{1}{x}$ |
| $\\ln(x^2+1)$ | $x^2+1$ | $2x$ | $\\dfrac{2x}{x^2+1}$ |
| $\\ln(\\sin x)$ | $\\sin x$ | $\\cos x$ | $\\dfrac{\\cos x}{\\sin x} = \\cot x$ |

> 🔑 Memorize this: **"derivative of the inside, over the inside."** Almost every step you take in this lesson is an application of $\\dfrac{u'}{u}$.`,
      },
      {
        id: 'logdiff1-dlnu-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\dfrac{d}{dx}\\big[\\ln(x^2+4)\\big] = $',
              options: ['$\\dfrac{2x}{x^2+4}$', '$\\dfrac{1}{x^2+4}$', '$\\dfrac{1}{2x}$', '$2x\\ln(x^2+4)$'],
              correctAnswer: 0,
              explanation: 'Use $\\frac{u\'}{u}$ with $u = x^2+4$, $u\' = 2x$: the derivative is $\\dfrac{2x}{x^2+4}$.',
            },
            {
              question: 'Why is the power rule $\\frac{d}{dx}[x^n]=nx^{n-1}$ NOT allowed for $y = x^x$?',
              options: [
                'The exponent is not a constant',
                'The base is negative',
                '$x^x$ is not differentiable',
                'The power rule only works for $n=2$',
              ],
              correctAnswer: 0,
              explanation: 'The power rule requires a constant exponent. In $x^x$ the exponent is the variable $x$, so the rule does not apply — that is exactly why we take a log.',
            },
          ],
        },
      },
      {
        id: 'logdiff1-recap',
        type: 'text' as const,
        content: `## You Now Have the Pieces

You can:
- **Spot** the two situations that call for this method (big products/quotients, variable-in-the-exponent).
- **Expand** a log into a sum of simple terms using the three laws.
- **Differentiate** any $\\ln u$ using $\\dfrac{u'}{u}$.

In Part 2 we snap these pieces into a single, repeatable **4-step procedure**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'logarithmic-differentiation-technique',
    sections: [
      {
        id: 'logdiff2-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Differentiation

**Part 2 of 7 — The 4-Step Method**

---

> 🔑 **The Procedure:** (1) take $\\ln$ of both sides, (2) expand with log laws, (3) differentiate both sides implicitly, (4) solve for $\\dfrac{dy}{dx}$ and substitute $y$ back in.`,
      },
      {
        id: 'logdiff2-steps',
        type: 'text' as const,
        content: `## The Four Steps

Given $y = f(x)$:

1. **Take the log.** Write $\\ln y = \\ln\\big(f(x)\\big)$.
2. **Expand.** Use the product/quotient/power laws to flatten the right side into a sum.
3. **Differentiate implicitly.** The left side becomes $\\dfrac{1}{y}\\cdot\\dfrac{dy}{dx}$ (chain rule — $y$ is a function of $x$!). Differentiate the right side term by term.
4. **Solve.** Multiply both sides by $y$, then replace $y$ with the original $f(x)$.

> ⚠️ **Step 3 is where most errors happen.** The left side is $\\dfrac{d}{dx}[\\ln y]$, and since $y$ depends on $x$, that is $\\dfrac{1}{y}\\cdot y'$ — **not** just $\\dfrac{1}{y}$. Never drop the $\\dfrac{dy}{dx}$.`,
      },
      {
        id: 'logdiff2-step3check',
        type: 'multiple-choice' as const,
        content: `**Concept Check — the implicit step** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiating $\\ln y$ with respect to $x$ (where $y$ is a function of $x$) gives:',
              options: [
                '$\\dfrac{1}{y}\\cdot\\dfrac{dy}{dx}$',
                '$\\dfrac{1}{y}$',
                '$\\dfrac{dy}{dx}$',
                '$\\ln\\dfrac{dy}{dx}$',
              ],
              correctAnswer: 0,
              explanation: 'By the chain rule, $\\frac{d}{dx}[\\ln y] = \\frac{1}{y}\\cdot\\frac{dy}{dx}$. The extra $\\frac{dy}{dx}$ factor is what makes this *implicit* differentiation.',
            },
          ],
        },
      },
      {
        id: 'logdiff2-worked1',
        type: 'text' as const,
        content: `## Worked Example: $y = \\dfrac{x^2}{(x+1)^3}$

This is doable with the quotient rule, but logs are cleaner. Watch all four steps.

**Step 1 — log both sides:**
$$\\ln y = \\ln\\!\\left(\\frac{x^2}{(x+1)^3}\\right)$$

**Step 2 — expand:**
$$\\ln y = 2\\ln x - 3\\ln(x+1)$$

**Step 3 — differentiate implicitly:**
$$\\frac{1}{y}\\,\\frac{dy}{dx} = \\frac{2}{x} - \\frac{3}{x+1}$$

**Step 4 — solve (multiply by $y$, then substitute):**
$$\\frac{dy}{dx} = y\\left(\\frac{2}{x} - \\frac{3}{x+1}\\right) = \\frac{x^2}{(x+1)^3}\\left(\\frac{2}{x} - \\frac{3}{x+1}\\right)$$

> ✅ The answer is correct as written — leaving it in factored form is perfectly acceptable (and expected) on the AP exam.`,
      },
      {
        id: 'logdiff2-order',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You are differentiating $y = \\dfrac{x^2}{(x+1)^3}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'After taking $\\ln$ and expanding:', options: ['$\\ln y = 2\\ln x - 3\\ln(x+1)$', '$\\ln y = 2\\ln x \\cdot 3\\ln(x+1)$', '$\\ln y = \\dfrac{2\\ln x}{3\\ln(x+1)}$', '$\\ln y = \\ln(2x) - \\ln(3x+3)$'] },
            { label: 'Left side after differentiating:', options: ['$\\dfrac{1}{y}\\,\\dfrac{dy}{dx}$', '$\\dfrac{1}{y}$', '$\\ln y$', '$\\dfrac{dy}{dx}$'] },
            { label: 'Right side after differentiating:', options: ['$\\dfrac{2}{x} - \\dfrac{3}{x+1}$', '$\\dfrac{2}{x} - \\dfrac{3}{(x+1)^2}$', '$2\\ln x - 3\\ln(x+1)$', '$\\dfrac{1}{x} - \\dfrac{1}{x+1}$'] },
          ],
          correctAnswers: ['$\\ln y = 2\\ln x - 3\\ln(x+1)$', '$\\dfrac{1}{y}\\,\\dfrac{dy}{dx}$', '$\\dfrac{2}{x} - \\dfrac{3}{x+1}$'],
          hint1: 'Power law pulls the exponents $2$ and $3$ out front; quotient law makes a minus sign.',
          hint2: 'The left side is $\\frac{d}{dx}[\\ln y]$ — use the chain rule, keeping $\\frac{dy}{dx}$.',
          hint3: '$\\frac{d}{dx}[2\\ln x] = \\frac{2}{x}$ and $\\frac{d}{dx}[3\\ln(x+1)] = \\frac{3}{x+1}$ (derivative of inside, $1$, over inside).',
          explanation: 'Expand to $2\\ln x - 3\\ln(x+1)$, differentiate to get $\\frac{1}{y}y\' = \\frac{2}{x} - \\frac{3}{x+1}$.',
        },
      },
      {
        id: 'logdiff2-pieces',
        type: 'text' as const,
        content: `## Differentiating Each Expanded Term

Once the right side is a sum like $4\\ln x + 5\\ln(x-2)$, you differentiate **term by term** with $\\dfrac{u'}{u}$:

$$\\frac{d}{dx}\\big[c\\ln u\\big] = c\\cdot\\frac{u'}{u}$$

The coefficient $c$ rides along, and the derivative of the inside lands on top. Try it on the pieces below.`,
      },
      {
        id: 'logdiff2-drill',
        type: 'input-boxes' as const,
        content: `**Fill in the Derivative Pieces** 🧮

For $y = x^4(x-2)^5$, after $\\ln y = 4\\ln x + 5\\ln(x-2)$ you differentiate.

**1)** $\\dfrac{d}{dx}[4\\ln x] = \\dfrac{?}{x}$  — enter the numerator.
**2)** $\\dfrac{d}{dx}[5\\ln(x-2)] = \\dfrac{?}{x-2}$ — enter the numerator.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '5'],
          hint1: '$\\frac{d}{dx}[c\\ln u] = c\\cdot\\frac{u\'}{u}$. Here $u=x$ so $u\'=1$, leaving $\\frac{4}{x}$.',
          hint2: 'For $5\\ln(x-2)$: $u = x-2$, $u\' = 1$, so the result is $\\frac{5}{x-2}$.',
          hint3: 'In both cases the inside has derivative $1$, so the coefficient just sits on top of the inside.',
          explanation: '$\\frac{d}{dx}[4\\ln x] = \\frac{4}{x}$ and $\\frac{d}{dx}[5\\ln(x-2)] = \\frac{5}{x-2}$. So $\\frac{1}{y}y\' = \\frac{4}{x}+\\frac{5}{x-2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'logarithmic-differentiation-technique',
    sections: [
      {
        id: 'logdiff3-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Differentiation

**Part 3 of 7 — Taming Big Products, Quotients & Roots**

---

> 🔑 **Where the method shines:** when a function is a tower of products, quotients, and roots, taking $\\ln$ converts the whole thing into a tidy sum of terms — and the quotient rule disappears entirely.`,
      },
      {
        id: 'logdiff3-roots',
        type: 'text' as const,
        content: `## Roots Are Just Fractional Powers

Before expanding, rewrite every root as a power so the power law can grab the exponent:

$$\\sqrt{x} = x^{1/2}, \\qquad \\sqrt[3]{x} = x^{1/3}, \\qquad \\frac{1}{x^2} = x^{-2}$$

Then $\\ln$ pulls that exponent out front:

$$\\ln\\sqrt{x-3} = \\ln(x-3)^{1/2} = \\tfrac{1}{2}\\ln(x-3)$$

> 💡 A negative power signals a factor in the **denominator** — it will come out with a **minus sign** after the log.`,
      },
      {
        id: 'logdiff3-worked',
        type: 'text' as const,
        content: `## Worked Example: $y = \\dfrac{(x^2+1)^4\\,\\sqrt{x-3}}{(2x+5)^7}$

**Step 1 — log:**
$$\\ln y = \\ln\\!\\left(\\frac{(x^2+1)^4\\,\\sqrt{x-3}}{(2x+5)^7}\\right)$$

**Step 2 — expand** (product → +, quotient → −, power → coefficient):
$$\\ln y = 4\\ln(x^2+1) + \\tfrac{1}{2}\\ln(x-3) - 7\\ln(2x+5)$$

**Step 3 — differentiate** (each term is $\\dfrac{u'}{u}$):
$$\\frac{1}{y}\\frac{dy}{dx} = \\frac{4(2x)}{x^2+1} + \\frac{\\tfrac{1}{2}}{x-3} - \\frac{7(2)}{2x+5}$$
$$= \\frac{8x}{x^2+1} + \\frac{1}{2(x-3)} - \\frac{14}{2x+5}$$

**Step 4 — solve:**
$$\\frac{dy}{dx} = \\frac{(x^2+1)^4\\sqrt{x-3}}{(2x+5)^7}\\left[\\frac{8x}{x^2+1} + \\frac{1}{2(x-3)} - \\frac{14}{2x+5}\\right]$$

> ⚠️ Watch the **chain rule inside each term**: $\\ln(x^2+1)$ differentiates to $\\dfrac{2x}{x^2+1}$ (not $\\dfrac{1}{x^2+1}$), and $\\ln(2x+5)$ to $\\dfrac{2}{2x+5}$.`,
      },
      {
        id: 'logdiff3-signs',
        type: 'dropdown-select' as const,
        content: `**Sign & Coefficient Check** 🔽

For $y = \\dfrac{(x+1)^3}{\\sqrt{x-2}}$, after expanding $\\ln y = 3\\ln(x+1) - \\tfrac{1}{2}\\ln(x-2)$, choose each differentiated term.`,
        exercise: {
          dropdowns: [
            { label: 'Term from $3\\ln(x+1)$:', options: ['$+\\dfrac{3}{x+1}$', '$-\\dfrac{3}{x+1}$', '$+\\dfrac{3}{(x+1)^2}$', '$+\\dfrac{1}{3(x+1)}$'] },
            { label: 'Term from $-\\tfrac{1}{2}\\ln(x-2)$:', options: ['$-\\dfrac{1}{2(x-2)}$', '$+\\dfrac{1}{2(x-2)}$', '$-\\dfrac{2}{x-2}$', '$-\\dfrac{1}{2}(x-2)$'] },
          ],
          correctAnswers: ['$+\\dfrac{3}{x+1}$', '$-\\dfrac{1}{2(x-2)}$'],
          hint1: 'Coefficient $3$ stays; inside $x+1$ has derivative $1$, so $\\frac{3}{x+1}$ with a plus sign.',
          hint2: 'The $\\sqrt{x-2}$ was in the denominator, so it expanded with a MINUS and exponent $\\tfrac12$.',
          hint3: '$\\frac{d}{dx}[-\\tfrac12\\ln(x-2)] = -\\tfrac12\\cdot\\frac{1}{x-2} = -\\frac{1}{2(x-2)}$.',
          explanation: 'The numerator factor gives $+\\frac{3}{x+1}$; the denominator root gives $-\\frac{1}{2(x-2)}$.',
        },
      },
      {
        id: 'logdiff3-expand-first',
        type: 'text' as const,
        content: `## Always Expand Before You Differentiate

The single biggest time-saver is to **fully expand the log first**, *then* differentiate. If you try to differentiate a clumped-up log directly, you re-create the product/quotient nightmare you were trying to escape.

So for $\\dfrac{x^5}{\\sqrt[3]{x+2}}$, write $5\\ln x - \\tfrac{1}{3}\\ln(x+2)$ **before** taking any derivative. Quick expansion check below.`,
      },
      {
        id: 'logdiff3-expand-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Expand $\\ln\\!\\left(\\dfrac{x^5}{\\sqrt[3]{x+2}}\\right)$.',
              options: [
                '$5\\ln x - \\tfrac{1}{3}\\ln(x+2)$',
                '$5\\ln x + \\tfrac{1}{3}\\ln(x+2)$',
                '$5\\ln x - 3\\ln(x+2)$',
                '$\\tfrac{5}{3}\\ln x(x+2)$',
              ],
              correctAnswer: 0,
              explanation: '$\\sqrt[3]{x+2} = (x+2)^{1/3}$ is in the denominator, so $\\ln = 5\\ln x - \\tfrac{1}{3}\\ln(x+2)$.',
            },
          ],
        },
      },
      {
        id: 'logdiff3-chain-note',
        type: 'text' as const,
        content: `## Don't Forget the Inner Derivative

When the inside of a log is more than just $x$, the chain rule puts $u'$ on top:

$$\\frac{d}{dx}\\big[\\ln(x^2+5)\\big] = \\frac{2x}{x^2+5}, \\qquad \\frac{d}{dx}\\big[\\ln(3x-1)\\big] = \\frac{3}{3x-1}$$

Multiply any leading coefficient by that inner derivative. Practice this below.`,
      },
      {
        id: 'logdiff3-drill',
        type: 'input-boxes' as const,
        content: `**Differentiate a Term** 🧮

After $\\ln y = 6\\ln(x^2+5) - 2\\ln(3x-1)$, find each piece of $\\dfrac{1}{y}\\dfrac{dy}{dx}$.

**1)** The $6\\ln(x^2+5)$ term gives $\\dfrac{?\\,x}{x^2+5}$ — enter the numerator coefficient (so the term is "coefficient $\\cdot x$ over $x^2+5$").
**2)** The $-2\\ln(3x-1)$ term gives $-\\dfrac{?}{3x-1}$ — enter the numerator.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '6'],
          hint1: '$\\frac{d}{dx}[6\\ln(x^2+5)] = 6\\cdot\\frac{2x}{x^2+5} = \\frac{12x}{x^2+5}$.',
          hint2: '$\\frac{d}{dx}[2\\ln(3x-1)] = 2\\cdot\\frac{3}{3x-1} = \\frac{6}{3x-1}$, and it carries a minus sign.',
          hint3: 'Multiply the coefficient by the derivative of the inside: $6\\cdot 2 = 12$, and $2\\cdot 3 = 6$.',
          explanation: 'Inside derivatives: $\\frac{d}{dx}(x^2+5)=2x$ gives $\\frac{12x}{x^2+5}$; $\\frac{d}{dx}(3x-1)=3$ gives $-\\frac{6}{3x-1}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'logarithmic-differentiation-technique',
    sections: [
      {
        id: 'logdiff4-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Differentiation

**Part 4 of 7 — Variable Base AND Variable Exponent ($x^x$ and friends)**

---

> 🔑 **The headline use:** when the variable sits in **both** the base and the exponent, logarithmic differentiation is not just convenient — it is the *only* elementary method that works.`,
      },
      {
        id: 'logdiff4-why',
        type: 'text' as const,
        content: `## Why $x^x$ Defeats Our Rules

| Form | Rule | Why it fails for $x^x$ |
|------|------|------------------------|
| $x^n$ ($n$ constant) | power rule | exponent $x$ is **not** constant |
| $a^x$ ($a$ constant) | exponential rule | base $x$ is **not** constant |

$x^x$ is neither — so we take a log to **break the variable apart** from its exponent.

> ⚠️ A classic wrong answer for $\\frac{d}{dx}[x^x]$ is $x\\cdot x^{x-1} = x^x$ (illegally using the power rule). The true derivative carries an extra $\\ln x$ term — let's find it.`,
      },
      {
        id: 'logdiff4-identify',
        type: 'dropdown-select' as const,
        content: `**Take the Log First** 🔽

For a function $y = (\\text{base})^{(\\text{exponent})}$, the power law gives $\\ln y = (\\text{exponent})\\cdot\\ln(\\text{base})$. Apply it.`,
        exercise: {
          dropdowns: [
            { label: '$y = x^x \\Rightarrow \\ln y =$', options: ['$x\\ln x$', '$x^2\\ln x$', '$\\ln x$', '$x + \\ln x$'] },
            { label: '$y = x^{\\sin x} \\Rightarrow \\ln y =$', options: ['$\\sin x\\,\\ln x$', '$x\\ln(\\sin x)$', '$\\ln x\\,\\ln(\\sin x)$', '$\\sin(x\\ln x)$'] },
            { label: '$y = (\\cos x)^{x} \\Rightarrow \\ln y =$', options: ['$x\\ln(\\cos x)$', '$\\cos x\\,\\ln x$', '$\\ln(\\cos x)$', '$x\\cos(\\ln x)$'] },
          ],
          correctAnswers: ['$x\\ln x$', '$\\sin x\\,\\ln x$', '$x\\ln(\\cos x)$'],
          hint1: 'The exponent comes out front, multiplying the $\\ln$ of the base.',
          hint2: 'For $x^{\\sin x}$: exponent $\\sin x$ in front, base $x$ inside the log → $\\sin x\\,\\ln x$.',
          hint3: 'For $(\\cos x)^x$: exponent $x$ in front, base $\\cos x$ inside the log → $x\\ln(\\cos x)$.',
          explanation: 'In every case $\\ln y = (\\text{exponent})\\cdot\\ln(\\text{base})$: $x\\ln x$, then $\\sin x\\,\\ln x$, then $x\\ln(\\cos x)$.',
        },
      },
      {
        id: 'logdiff4-xx',
        type: 'text' as const,
        content: `## Worked Example: $y = x^x$

**Step 1 — log:** $\\;\\ln y = \\ln(x^x)$

**Step 2 — expand** (the power law drops the exponent $x$ in front):
$$\\ln y = x\\ln x$$

**Step 3 — differentiate.** Left side: $\\dfrac{1}{y}\\dfrac{dy}{dx}$. Right side needs the **product rule** on $x\\cdot\\ln x$:
$$\\frac{d}{dx}[x\\ln x] = (1)\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$$

So:
$$\\frac{1}{y}\\frac{dy}{dx} = \\ln x + 1$$

**Step 4 — solve** (multiply by $y = x^x$):
$$\\boxed{\\;\\frac{dy}{dx} = x^x(\\ln x + 1)\\;}$$

> ✅ **Sanity check:** at $x=1$, $y=1^1=1$ and $y' = 1\\cdot(\\ln 1 + 1) = 1$. The curve $y=x^x$ has slope $1$ at $x=1$. ✓`,
      },
      {
        id: 'logdiff4-xx-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After $\\ln y = x\\ln x$, why do we need the product rule on the right side?',
              options: [
                'Because $x\\ln x$ is a product of two functions of $x$',
                'Because $\\ln x$ is not differentiable',
                'Because the chain rule never applies to logs',
                'Because $x\\ln x$ is a quotient',
              ],
              correctAnswer: 0,
              explanation: '$x\\ln x$ is the product of $x$ and $\\ln x$, both functions of $x$, so we differentiate with the product rule: $1\\cdot\\ln x + x\\cdot\\frac1x = \\ln x + 1$.',
            },
            {
              question: 'The derivative of $y = x^x$ is:',
              options: ['$x^x(\\ln x + 1)$', '$x\\cdot x^{x-1}$', '$x^x\\ln x$', '$\\ln x + 1$'],
              correctAnswer: 0,
              explanation: 'From $\\frac1y y\' = \\ln x + 1$, multiply by $y = x^x$: $y\' = x^x(\\ln x + 1)$. The naive $x\\cdot x^{x-1}$ is the power-rule trap.',
            },
          ],
        },
      },
      {
        id: 'logdiff4-xsinx',
        type: 'text' as const,
        content: `## Worked Example: $y = x^{\\sin x}$

Same method — only the exponent changed.

**Step 1–2:** $\\;\\ln y = \\sin x \\cdot \\ln x$

**Step 3 — product rule** on $\\sin x \\cdot \\ln x$:
$$\\frac{1}{y}\\frac{dy}{dx} = \\cos x\\cdot\\ln x + \\sin x\\cdot\\frac{1}{x} = \\cos x\\,\\ln x + \\frac{\\sin x}{x}$$

**Step 4 — solve:**
$$\\frac{dy}{dx} = x^{\\sin x}\\left(\\cos x\\,\\ln x + \\frac{\\sin x}{x}\\right)$$

> 💡 **The pattern for $y = (\\text{base})^{(\\text{exponent})}$ with variables in both:** $\\ln y = (\\text{exponent})\\cdot\\ln(\\text{base})$, then **product rule**. Memorize the shape, not the answer.`,
      },
      {
        id: 'logdiff4-drill',
        type: 'input-boxes' as const,
        content: `**Build the Derivative** 🧮

For $y = x^{2x}$:

**1)** After taking $\\ln$, $\\ln y = 2x\\ln x$. Differentiating the right side gives $\\dfrac{1}{y}y' = 2\\ln x + ?$ — enter the missing constant. *(Hint: product rule on $2x\\cdot\\ln x$.)*`,
        exercise: {
          boxes: 1,
          correctAnswers: ['2'],
          hint1: 'Product rule on $2x\\cdot\\ln x$: derivative of $2x$ is $2$, derivative of $\\ln x$ is $\\frac1x$.',
          hint2: '$\\frac{d}{dx}[2x\\ln x] = 2\\cdot\\ln x + 2x\\cdot\\frac{1}{x}$.',
          hint3: 'The second piece is $2x\\cdot\\frac1x = 2$, so the full result is $2\\ln x + 2$.',
          explanation: '$\\frac{d}{dx}[2x\\ln x] = 2\\ln x + 2$, so $y\' = x^{2x}(2\\ln x + 2)$. The missing constant is $2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'logarithmic-differentiation-technique',
    sections: [
      {
        id: 'logdiff5-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Differentiation

**Part 5 of 7 — General Bases, General Exponents & Why the Old Rules Are Special Cases**

---

> 🔑 **Big picture:** logarithmic differentiation isn't a separate gadget — it *contains* the exponential rule and the power rule as special cases. Seeing this cements when each applies.`,
      },
      {
        id: 'logdiff5-ax',
        type: 'text' as const,
        content: `## Deriving the Exponential Rule $\\dfrac{d}{dx}[a^x]$

Let $y = a^x$ with $a>0$ a **constant** base.

$$\\ln y = x\\ln a \\quad\\Rightarrow\\quad \\frac{1}{y}\\frac{dy}{dx} = \\ln a$$

(Here $\\ln a$ is just a constant.) Solving:

$$\\frac{dy}{dx} = a^x\\ln a$$

That's the familiar exponential rule — and now you can *re-derive* it any time you forget it.

| Function | Derivative |
|----------|-----------|
| $a^x$ | $a^x\\ln a$ |
| $e^x$ | $e^x$ (since $\\ln e = 1$) |
| $2^x$ | $2^x\\ln 2$ |`,
      },
      {
        id: 'logdiff5-xn',
        type: 'text' as const,
        content: `## Deriving the Power Rule $\\dfrac{d}{dx}[x^n]$

Let $y = x^n$ with $n$ a **constant** exponent.

$$\\ln y = n\\ln x \\quad\\Rightarrow\\quad \\frac{1}{y}\\frac{dy}{dx} = \\frac{n}{x}$$

Solving and substituting $y = x^n$:

$$\\frac{dy}{dx} = x^n\\cdot\\frac{n}{x} = n\\,x^{n-1}$$

The power rule falls right out. The two "old" rules and the new $x^x$ case differ only in **what is constant**:

| Case | Constant | Method |
|------|----------|--------|
| $x^n$ | exponent | power rule (or logs) |
| $a^x$ | base | exponential rule (or logs) |
| $x^x$, $x^{\\sin x}$ | **neither** | **logs required** |`,
      },
      {
        id: 'logdiff5-classify',
        type: 'dropdown-select' as const,
        content: `**Which Rule Applies?** 🔽

For each function, pick the *simplest legal* approach.`,
        exercise: {
          dropdowns: [
            { label: '$y = x^7$', options: ['Power rule', 'Exponential rule', 'Logs required (variable in both)'] },
            { label: '$y = 5^x$', options: ['Exponential rule', 'Power rule', 'Logs required (variable in both)'] },
            { label: '$y = x^{\\cos x}$', options: ['Logs required (variable in both)', 'Power rule', 'Exponential rule'] },
            { label: '$y = (\\ln x)^x$', options: ['Logs required (variable in both)', 'Power rule', 'Exponential rule'] },
          ],
          correctAnswers: ['Power rule', 'Exponential rule', 'Logs required (variable in both)', 'Logs required (variable in both)'],
          hint1: 'Constant exponent → power rule. Constant base → exponential rule.',
          hint2: 'If the variable appears in BOTH the base and the exponent, neither simple rule is legal.',
          hint3: '$(\\ln x)^x$ has a variable base $\\ln x$ AND a variable exponent $x$ — logs required.',
          explanation: '$x^7$: constant exponent → power rule. $5^x$: constant base → exponential rule. $x^{\\cos x}$ and $(\\ln x)^x$: variable in both base and exponent → logarithmic differentiation.',
        },
      },
      {
        id: 'logdiff5-unifies',
        type: 'text' as const,
        content: `## One Method, Many Rules

The payoff of these derivations: you never have to *memorize* $a^x\\ln a$ or worry whether you've mixed up the power and exponential rules. If you're ever unsure, **take a log and let the method tell you the answer.** The two checks below confirm it reproduces the standard results.`,
      },
      {
        id: 'logdiff5-general-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using logs, $\\dfrac{d}{dx}[3^x] = $',
              options: ['$3^x\\ln 3$', '$x\\cdot 3^{x-1}$', '$3^x$', '$\\dfrac{3^x}{\\ln 3}$'],
              correctAnswer: 0,
              explanation: '$\\ln y = x\\ln 3 \\Rightarrow \\frac1y y\' = \\ln 3 \\Rightarrow y\' = 3^x\\ln 3$.',
            },
            {
              question: 'Logarithmic differentiation reproduces the power rule because, for $y=x^n$, $\\frac1y y\' = $',
              options: ['$\\dfrac{n}{x}$', '$n\\ln x$', '$\\dfrac{1}{x}$', '$nx^{n-1}$'],
              correctAnswer: 0,
              explanation: '$\\ln y = n\\ln x$, so $\\frac1y y\' = \\frac{n}{x}$; multiplying by $y=x^n$ gives $nx^{n-1}$.',
            },
          ],
        },
      },
      {
        id: 'logdiff5-constant-base',
        type: 'text' as const,
        content: `## Constant Base: The $\\ln a$ Falls Out

For any constant base $a$, $y = a^x$ gives $\\ln y = x\\ln a$. Because $\\ln a$ is just a number, differentiating is trivial:

$$\\frac{1}{y}\\frac{dy}{dx} = \\ln a \\quad\\Rightarrow\\quad \\frac{dy}{dx} = a^x\\ln a$$

Use this on the drill below.`,
      },
      {
        id: 'logdiff5-drill',
        type: 'input-boxes' as const,
        content: `**Apply the General Pattern** 🧮

For $y = 4^x$, logarithmic differentiation gives $y' = 4^x\\cdot k$ for some constant $k$.

**1)** Enter $k$ as $\\ln$ of a number — i.e. $k = \\ln(\\,?\\,)$. Enter the number inside the log.`,
        exercise: {
          boxes: 1,
          correctAnswers: ['4'],
          hint1: '$\\ln y = x\\ln 4$, so $\\frac1y y\' = \\ln 4$.',
          hint2: 'The constant multiplying $4^x$ is exactly $\\ln 4$.',
          hint3: 'So $k = \\ln 4$ — the number inside the log is $4$.',
          explanation: '$y = 4^x \\Rightarrow y\' = 4^x\\ln 4$, so $k = \\ln 4$ and the number inside is $4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'logarithmic-differentiation-technique',
    sections: [
      {
        id: 'logdiff6-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Differentiation

**Part 6 of 7 — Applications & Common Traps**

---

> 🔑 **Putting it to work:** evaluating the derivative at a point, finding tangent lines, and side-stepping the three mistakes that cost the most points.`,
      },
      {
        id: 'logdiff6-evaluate',
        type: 'text' as const,
        content: `## Evaluating at a Point

The factored answer is *easy* to plug into. For $y = x^x$ we found $y' = x^x(\\ln x + 1)$.

**Find the slope at $x = e$:**
$$y'(e) = e^e(\\ln e + 1) = e^e(1 + 1) = 2e^e$$

**Find the slope at $x = 1$:**
$$y'(1) = 1^1(\\ln 1 + 1) = 1\\cdot(0+1) = 1$$

> 💡 Because $y$ appears as a clean factor out front, evaluating $y'$ at a point is just "plug $x$ into the original $y$, then multiply by the bracket." No re-deriving needed.`,
      },
      {
        id: 'logdiff6-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Derivative** 🧮

The curve $y = x^x$ has derivative $y' = x^x(\\ln x + 1)$.

**1)** At $x = 1$, the slope $y'(1) = ?$
**2)** $y = x^{2x}$ has $y' = x^{2x}(2\\ln x + 2)$. Find $y'(1) = ?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '2'],
          hint1: 'At $x=1$: $1^1 = 1$ and $\\ln 1 = 0$, so $y\'(1) = 1\\cdot(0+1)$.',
          hint2: 'For the second: $1^{2} = 1$ and $2\\ln 1 = 0$, so $y\'(1) = 1\\cdot(0+2)$.',
          hint3: 'Remember $\\ln 1 = 0$, which zeroes out every $\\ln$ term at $x=1$.',
          explanation: '$y\'(1) = 1\\cdot(\\ln 1 + 1) = 1$. And $x^{2x}$ at $x=1$: $1\\cdot(2\\cdot 0 + 2) = 2$.',
        },
      },
      {
        id: 'logdiff6-tangent',
        type: 'text' as const,
        content: `## Tangent Line Example

Find the tangent line to $y = x^x$ at $x = 1$.

- **Point:** $y(1) = 1^1 = 1$, so the point is $(1, 1)$.
- **Slope:** $y'(1) = 1$ (computed above).
- **Line:** $y - 1 = 1(x - 1)$, i.e. $\\;y = x$.

So $y = x$ is tangent to $y = x^x$ at $(1,1)$.

> ✅ This matches intuition: near $x=1$, $x^x$ hugs the line $y=x$.`,
      },
      {
        id: 'logdiff6-tangent-check',
        type: 'dropdown-select' as const,
        content: `**Build a Tangent Line** 🔽

Find the tangent to $y = x^{2x}$ at $x = 1$, using $y' = x^{2x}(2\\ln x + 2)$.`,
        exercise: {
          dropdowns: [
            { label: 'The point of tangency is:', options: ['$(1, 1)$', '$(1, 2)$', '$(1, 0)$', '$(2, 1)$'] },
            { label: 'The slope $y\'(1)$ is:', options: ['$2$', '$1$', '$0$', '$4$'] },
            { label: 'The tangent line is:', options: ['$y = 2x - 1$', '$y = x$', '$y = 2x$', '$y = 2x + 1$'] },
          ],
          correctAnswers: ['$(1, 1)$', '$2$', '$y = 2x - 1$'],
          hint1: 'Point: $y(1) = 1^{2} = 1$, so $(1,1)$.',
          hint2: 'Slope: $y\'(1) = 1\\cdot(2\\ln 1 + 2) = 2$.',
          hint3: 'Point-slope: $y - 1 = 2(x-1) \\Rightarrow y = 2x - 1$.',
          explanation: '$y(1)=1$ gives point $(1,1)$; $y\'(1)=2$; the line $y-1=2(x-1)$ simplifies to $y = 2x-1$.',
        },
      },
      {
        id: 'logdiff6-traps',
        type: 'text' as const,
        content: `## The Three Costly Traps

| Trap | Wrong | Right |
|------|-------|-------|
| Forgetting $\\dfrac{dy}{dx}$ on the left | $\\dfrac{d}{dx}[\\ln y] = \\dfrac{1}{y}$ | $\\dfrac{1}{y}\\dfrac{dy}{dx}$ |
| Power-rule on $x^x$ | $x\\cdot x^{x-1}$ | $x^x(\\ln x+1)$ |
| Forgetting to substitute $y$ back | leaving "$y$" in the answer | replace $y$ with the original expression |

> ⚠️ **Trap #1 is the silent killer.** The left side is $\\frac{d}{dx}[\\ln y]$, and $y$ is a function of $x$, so the chain rule *must* produce that $\\frac{dy}{dx}$ factor. Skipping it loses the entire derivative.`,
      },
      {
        id: 'logdiff6-traps-check',
        type: 'multiple-choice' as const,
        content: `**Spot the Error** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student writes $\\frac{d}{dx}[\\ln y] = \\frac{1}{y}$ and then solves. What did they forget?',
              options: [
                'The $\\dfrac{dy}{dx}$ factor from the chain rule',
                'To take the log',
                'The product rule',
                'Nothing — that step is correct',
              ],
              correctAnswer: 0,
              explanation: 'Since $y$ is a function of $x$, $\\frac{d}{dx}[\\ln y] = \\frac{1}{y}\\cdot\\frac{dy}{dx}$. Dropping $\\frac{dy}{dx}$ makes the equation unsolvable for the derivative.',
            },
            {
              question: 'For $y = x^x$, which step correctly handles the right side of $\\ln y = x\\ln x$?',
              options: [
                'Product rule: $\\ln x + 1$',
                'Power rule: $x\\cdot x^{x-1}$',
                'Chain rule only: $\\frac{1}{x}$',
                'Quotient rule',
              ],
              correctAnswer: 0,
              explanation: '$x\\ln x$ is a product, so $\\frac{d}{dx}[x\\ln x] = 1\\cdot\\ln x + x\\cdot\\frac1x = \\ln x + 1$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'logarithmic-differentiation-technique',
    sections: [
      {
        id: 'logdiff7-intro',
        type: 'text' as const,
        content: `# 📈 Logarithmic Differentiation

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) recognize when to take a log, (2) run the 4-step method, (3) tame big products/quotients/roots, (4) differentiate variable-base powers like $x^x$, and (5) dodge the common traps. Time to put it all together.

## Quick Reference

| Goal | Key move |
|------|----------|
| Flatten products/quotients/roots | $\\ln$, then product/quotient/power laws |
| Differentiate $\\ln u$ | $\\dfrac{u'}{u}$ — "inside derivative over inside" |
| Left side after $\\frac{d}{dx}$ | $\\dfrac{1}{y}\\dfrac{dy}{dx}$ (never drop $\\tfrac{dy}{dx}$) |
| $y = (\\text{base})^{(\\text{exponent})}$, both variable | $\\ln y = (\\text{exp})\\ln(\\text{base})$, then product rule |
| Finish | multiply by $y$, then **substitute the original** for $y$ |

> 💡 **Negative inputs (FYI):** strictly, $\\ln$ needs positive arguments. For a general $y$, one writes $\\ln\\lvert y\\rvert$, whose derivative is still $\\frac{y'}{y}$ — so the method and the final derivative are unchanged. On the AP exam you may assume the given domain makes everything positive.`,
      },
      {
        id: 'logdiff7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $y = \\dfrac{x^3}{(x-1)^2}$, logarithmic differentiation gives $\\frac1y y\' = $',
              options: [
                '$\\dfrac{3}{x} - \\dfrac{2}{x-1}$',
                '$\\dfrac{3}{x} + \\dfrac{2}{x-1}$',
                '$\\dfrac{3}{x} - \\dfrac{2}{(x-1)^2}$',
                '$3\\ln x - 2\\ln(x-1)$',
              ],
              correctAnswer: 0,
              explanation: '$\\ln y = 3\\ln x - 2\\ln(x-1)$, so $\\frac1y y\' = \\frac{3}{x} - \\frac{2}{x-1}$ (each $\\ln$ differentiates to $\\frac{u\'}{u}$).',
            },
            {
              question: 'The derivative of $y = x^{\\ln x}$ is:',
              options: [
                '$x^{\\ln x}\\cdot\\dfrac{2\\ln x}{x}$',
                '$x^{\\ln x}\\cdot\\dfrac{1}{x}$',
                '$\\ln x\\cdot x^{\\ln x - 1}$',
                '$x^{\\ln x}\\ln x$',
              ],
              correctAnswer: 0,
              explanation: '$\\ln y = (\\ln x)(\\ln x) = (\\ln x)^2$. Then $\\frac1y y\' = 2\\ln x\\cdot\\frac1x = \\frac{2\\ln x}{x}$, so $y\' = x^{\\ln x}\\cdot\\frac{2\\ln x}{x}$.',
            },
          ],
        },
      },
      {
        id: 'logdiff7-full-walk',
        type: 'text' as const,
        content: `## A Full Solution, Start to Finish

For a variable-base power like $y = (x+2)^x$, march through all four steps:

1. **Log + power law:** $\\ln y = x\\ln(x+2)$.
2. **Product rule** on $x\\cdot\\ln(x+2)$: $\\ln(x+2) + \\dfrac{x}{x+2}$.
3. **Multiply by $y$:** $y' = (x+2)^x\\!\\left[\\ln(x+2) + \\dfrac{x}{x+2}\\right]$.

Assemble it yourself below.`,
      },
      {
        id: 'logdiff7-build',
        type: 'dropdown-select' as const,
        content: `**Assemble a Full Solution** 🔽

You are differentiating $y = (x+2)^{x}$ (variable base AND exponent).`,
        exercise: {
          dropdowns: [
            { label: 'After $\\ln$ + power law:', options: ['$\\ln y = x\\ln(x+2)$', '$\\ln y = (x+2)\\ln x$', '$\\ln y = x + \\ln(x+2)$', '$\\ln y = \\ln x\\cdot\\ln(x+2)$'] },
            { label: 'Differentiate the right side (product rule):', options: ['$\\ln(x+2) + \\dfrac{x}{x+2}$', '$\\dfrac{x}{x+2}$', '$\\ln(x+2)$', '$\\dfrac{1}{x+2}$'] },
            { label: 'Final derivative:', options: ['$(x+2)^x\\!\\left[\\ln(x+2) + \\dfrac{x}{x+2}\\right]$', '$x(x+2)^{x-1}$', '$(x+2)^x\\ln(x+2)$', '$(x+2)^x\\!\\left[\\ln(x+2) + x\\right]$'] },
          ],
          correctAnswers: ['$\\ln y = x\\ln(x+2)$', '$\\ln(x+2) + \\dfrac{x}{x+2}$', '$(x+2)^x\\!\\left[\\ln(x+2) + \\dfrac{x}{x+2}\\right]$'],
          hint1: 'Power law: the exponent $x$ comes out front times $\\ln$ of the base $(x+2)$.',
          hint2: 'Product rule on $x\\cdot\\ln(x+2)$: $1\\cdot\\ln(x+2) + x\\cdot\\frac{1}{x+2}$.',
          hint3: 'Multiply $\\frac1y y\'$ by $y = (x+2)^x$ to finish.',
          explanation: '$\\ln y = x\\ln(x+2)$; product rule gives $\\frac1y y\' = \\ln(x+2) + \\frac{x}{x+2}$; multiply by $y$ to get $(x+2)^x[\\ln(x+2) + \\frac{x}{x+2}]$.',
        },
      },
      {
        id: 'logdiff7-eval-note',
        type: 'text' as const,
        content: `## Evaluating: $\\ln 1 = 0$ Is Your Friend

When a problem asks for a slope at $x = 1$, every $\\ln x$ term **vanishes** (since $\\ln 1 = 0$) and $y = 1$ for any power of $1$. Only the constant inside the bracket survives. That makes $x = 1$ a favorite spot for exam questions — confirm it on the drill below.`,
      },
      {
        id: 'logdiff7-final-drill',
        type: 'input-boxes' as const,
        content: `**Final Numeric Check** 🧮

For $y = x^x$ with $y' = x^x(\\ln x + 1)$:

**1)** $y'(1) = ?$
**2)** For $y = x^{3x}$, $y' = x^{3x}(3\\ln x + 3)$. Evaluate $y'(1) = ?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '3'],
          hint1: 'At $x=1$, $\\ln 1 = 0$, so $y\'(1) = 1\\cdot(0+1)$.',
          hint2: 'For $x^{3x}$: $1^{3} = 1$ and $3\\ln 1 = 0$, so $y\'(1) = 1\\cdot(0+3)$.',
          hint3: 'Every $\\ln$ term vanishes at $x=1$; only the constant in the bracket survives.',
          explanation: '$y\'(1) = 1\\cdot(\\ln 1 + 1) = 1$. For $x^{3x}$: $1\\cdot(0+3) = 3$.',
        },
      },
      {
        id: 'logdiff7-wrap',
        type: 'text' as const,
        content: `## You've Mastered the Technique

You can recognize when to reach for logs, run the four steps cleanly, flatten any product/quotient/root, and differentiate variable-base powers like $x^x$. One last check to lock it in.`,
      },
      {
        id: 'logdiff7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which function REQUIRES logarithmic differentiation (no simpler rule works)?',
              options: ['$y = x^{\\sin x}$', '$y = x^{10}$', '$y = 7^x$', '$y = e^{x}$'],
              correctAnswer: 0,
              explanation: '$x^{\\sin x}$ has a variable base AND variable exponent — neither the power nor exponential rule applies, so logs are required. The others have a constant base or constant exponent.',
            },
            {
              question: 'For $y = x^x$, the correct derivative is:',
              options: ['$x^x(\\ln x + 1)$', '$x\\cdot x^{x-1}$', '$x^x\\ln x$', '$\\ln x + 1$'],
              correctAnswer: 0,
              explanation: '$\\ln y = x\\ln x \\Rightarrow \\frac1y y\' = \\ln x + 1 \\Rightarrow y\' = x^x(\\ln x + 1)$.',
            },
            {
              question: 'When you differentiate $\\ln y$ with respect to $x$, you get:',
              options: ['$\\dfrac{1}{y}\\dfrac{dy}{dx}$', '$\\dfrac{1}{y}$', '$y\\dfrac{dy}{dx}$', '$\\dfrac{dy}{dx}$'],
              correctAnswer: 0,
              explanation: 'Chain rule: $\\frac{d}{dx}[\\ln y] = \\frac{1}{y}\\cdot\\frac{dy}{dx}$. Forgetting the $\\frac{dy}{dx}$ factor is the most common mistake in the whole method.',
            },
          ],
        },
      },
    ],
  },
]
