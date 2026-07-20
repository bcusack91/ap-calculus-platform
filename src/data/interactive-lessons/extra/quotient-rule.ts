import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Quotient Rule (AP Calculus AB).
 * Registry key / DB Topic.slug: 'quotient-rule'.
 * 7 parts, gold-standard structure: motivation & the formula → the mnemonic and
 * careful sign-bookkeeping → trig quotients (tan, sec, csc, cot) → quotient +
 * chain combinations → rational-function applications (tangent lines, increasing/
 * decreasing, horizontal tangents) → common traps & when NOT to use it →
 * mixed mastery practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative computation was verified by hand and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'quotient-rule',
    sections: [
      {
        id: 'qr1-intro',
        type: 'text' as const,
        content: `# ➗ The Quotient Rule

**Part 1 of 7 — Why We Need It & the Formula**

---

### Topics in This Part

| Section |
|---------|
| Why the Power Rule Fails on Fractions |
| The Quotient Rule Formula |
| Identifying the "Top" and the "Bottom" |
| A First Worked Example |

> 🔑 **Key Concept:** The **Quotient Rule** differentiates a function written as one expression *divided by* another — like $\\dfrac{x^2+1}{x-3}$ or $\\dfrac{\\sin x}{x}$. You cannot just differentiate the top and bottom separately, so we need a dedicated rule.`,
      },
      {
        id: 'qr1-why',
        type: 'text' as const,
        content: `## Why You Can't Just Differentiate Top and Bottom

A tempting (but **wrong**) instinct is to say that the derivative of $\\dfrac{f}{g}$ is $\\dfrac{f'}{g'}$. Let's see why that fails.

Take $\\dfrac{x^3}{x}$. We can simplify first: $\\dfrac{x^3}{x} = x^2$, whose derivative is $2x$.

But the "divide the derivatives" shortcut would give:

$$\\frac{(x^3)'}{(x)'} = \\frac{3x^2}{1} = 3x^2 \\quad \\color{red}{\\text{WRONG}}$$

> ⚠️ **The shortcut $\\dfrac{f'}{g'}$ is never valid.** A quotient is really a product, $f \\cdot \\dfrac{1}{g}$, and products interact in a way that mixes both functions together. That interaction is exactly what the Quotient Rule captures.`,
      },
      {
        id: 'qr1-formula',
        type: 'text' as const,
        content: `## The Quotient Rule

For a function written as a quotient $\\dfrac{f(x)}{g(x)}$ (with $g(x) \\ne 0$):

$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)\\,g(x) - f(x)\\,g'(x)}{\\big[g(x)\\big]^2}$$

Read it carefully:

- The **numerator** is "(derivative of top)(bottom) **minus** (top)(derivative of bottom)."
- The **denominator** is the bottom, **squared**.

| Piece | Meaning |
|-------|---------|
| $f$ | the **top** (numerator) |
| $g$ | the **bottom** (denominator) |
| $f'$ | derivative of the top |
| $g'$ | derivative of the bottom |
| $g^2$ | the bottom, squared |

> ⚠️ **Order matters!** Because of the subtraction, $f'g - fg'$ is **not** the same as $fg' - f'g$. Getting the order backward flips the sign of the whole answer.`,
      },
      {
        id: 'qr1-identify',
        type: 'dropdown-select' as const,
        content: `**Identify the Pieces** 🔽

For $\\dfrac{x^2 + 1}{x - 3}$, fill in each piece of the Quotient Rule.`,
        exercise: {
          dropdowns: [
            { label: 'The top $f(x)$ is:', options: ['$x^2 + 1$', '$x - 3$', '$2x$', '$1$'] },
            { label: 'The bottom $g(x)$ is:', options: ['$x - 3$', '$x^2 + 1$', '$1$', '$2x$'] },
            { label: '$f\'(x)$ is:', options: ['$2x$', '$x^2$', '$2x + 1$', '$1$'] },
            { label: '$g\'(x)$ is:', options: ['$1$', '$x$', '$0$', '$-3$'] },
          ],
          correctAnswers: ['$x^2 + 1$', '$x - 3$', '$2x$', '$1$'],
          hint1: 'The top is everything above the fraction bar; the bottom is everything below it.',
          hint2: 'Differentiate the top: $\\frac{d}{dx}(x^2+1) = 2x$.',
          hint3: 'Differentiate the bottom: $\\frac{d}{dx}(x-3) = 1$.',
          explanation: 'Top $f = x^2+1$ so $f\' = 2x$. Bottom $g = x-3$ so $g\' = 1$. These four pieces feed directly into $\\frac{f\'g - fg\'}{g^2}$.',
        },
      },
      {
        id: 'qr1-worked',
        type: 'text' as const,
        content: `## First Worked Example: $\\dfrac{x^2 + 1}{x - 3}$

Using the four pieces we just identified — $f = x^2+1$, $f' = 2x$, $g = x-3$, $g' = 1$:

$$\\frac{d}{dx}\\left[\\frac{x^2+1}{x-3}\\right] = \\frac{f'g - fg'}{g^2} = \\frac{(2x)(x-3) - (x^2+1)(1)}{(x-3)^2}$$

Expand the numerator carefully:

$$= \\frac{2x^2 - 6x - x^2 - 1}{(x-3)^2} = \\frac{x^2 - 6x - 1}{(x-3)^2}$$

> 💡 **Don't expand the denominator.** Leaving it as $(x-3)^2$ keeps the answer compact and makes it far easier to find where the derivative is zero or undefined later.`,
      },
      {
        id: 'qr1-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Quotient Rule says $\\dfrac{d}{dx}\\left[\\dfrac{f}{g}\\right] = $',
              options: [
                '$\\dfrac{f\'g - fg\'}{g^2}$',
                '$\\dfrac{fg\' - f\'g}{g^2}$',
                '$\\dfrac{f\'}{g\'}$',
                '$\\dfrac{f\'g + fg\'}{g^2}$',
              ],
              correctAnswer: 0,
              explanation: 'The correct form is (derivative of top)(bottom) minus (top)(derivative of bottom), all over the bottom squared: $\\frac{f\'g - fg\'}{g^2}$.',
            },
            {
              question: 'In the denominator of the Quotient Rule, what gets squared?',
              options: ['the bottom, $g$', 'the top, $f$', 'both $f$ and $g$', 'the whole numerator'],
              correctAnswer: 0,
              explanation: 'Only the original denominator (the bottom) is squared: the denominator of the result is $[g(x)]^2$.',
            },
          ],
        },
      },
      {
        id: 'qr1-build',
        type: 'input-boxes' as const,
        content: `**Assemble the Numerator** 🧮

For $\\dfrac{2x}{x + 4}$ you have $f = 2x$ and $g = x + 4$.

**1)** $f' = \\,?$ *(integer)*
**2)** $g' = \\,?$ *(integer)*
**3)** The numerator $f'g - fg'$ simplifies to a single constant. What constant? *(integer)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1', '8'],
          hint1: '$f = 2x$, so $f\' = 2$. $\\;g = x+4$, so $g\' = 1$.',
          hint2: '$f\'g = 2(x+4) = 2x + 8$, and $fg\' = (2x)(1) = 2x$.',
          hint3: 'Numerator $= (2x + 8) - 2x = 8$. The $2x$ terms cancel.',
          explanation: '$f\'=2,\\ g\'=1$. Numerator $= 2(x+4) - (2x)(1) = (2x+8) - 2x = 8$. So the derivative is $\\dfrac{8}{(x+4)^2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'quotient-rule',
    sections: [
      {
        id: 'qr2-intro',
        type: 'text' as const,
        content: `# ➗ The Quotient Rule

**Part 2 of 7 — A Mnemonic & Sign Bookkeeping**

---

> 🔑 **The Idea:** The hardest part of the Quotient Rule isn't the formula — it's keeping the **order** and the **minus sign** straight. A good mnemonic locks it in for the AP exam.`,
      },
      {
        id: 'qr2-mnemonic',
        type: 'text' as const,
        content: `## "Lo-D-Hi minus Hi-D-Lo"

A classic memory device names the bottom **Lo** and the top **Hi**:

$$\\frac{d}{dx}\\left[\\frac{\\text{Hi}}{\\text{Lo}}\\right] = \\frac{\\text{Lo}\\cdot d(\\text{Hi}) - \\text{Hi}\\cdot d(\\text{Lo})}{\\text{Lo}^2}$$

Said aloud: **"Lo D-Hi minus Hi D-Lo, over Lo-Lo."**

- **Lo** = bottom $= g$
- **Hi** = top $= f$
- $d(\\text{Hi}) = f'$, $\\;d(\\text{Lo}) = g'$
- **Lo-Lo** = $g^2$

| Spoken | Symbol |
|--------|--------|
| Lo D-Hi | $g \\cdot f'$ |
| minus | $-$ |
| Hi D-Lo | $f \\cdot g'$ |
| over Lo-Lo | $\\div\\, g^2$ |

> 💡 The phrase **starts with "Lo"** ($g\\,f'$), which is a handy reminder that the term carrying the **plus** sign is the one where you differentiate the **top**.`,
      },
      {
        id: 'qr2-order-check',
        type: 'multiple-choice' as const,
        content: `**Which Numerator Is Correct?** 🎯

You are differentiating $\\dfrac{f}{g}$.`,
        exercise: {
          questions: [
            {
              question: 'Using "Lo D-Hi minus Hi D-Lo," the numerator is:',
              options: ['$g f\' - f g\'$', '$f g\' - g f\'$', '$f\' g\' - f g$', '$g f\' + f g\'$'],
              correctAnswer: 0,
              explanation: '"Lo D-Hi" is $g \\cdot f\'$ and "Hi D-Lo" is $f \\cdot g\'$, so the numerator is $g f\' - f g\'$ (the same as $f\'g - fg\'$).',
            },
            {
              question: 'A student writes $\\dfrac{fg\' - f\'g}{g^2}$ for the derivative of $\\dfrac{f}{g}$. This answer is:',
              options: [
                'the exact negative of the correct answer',
                'completely correct',
                'correct only when $g = 1$',
                'correct only when $f = g$',
              ],
              correctAnswer: 0,
              explanation: 'They reversed the subtraction. $fg\' - f\'g = -(f\'g - fg\')$, so their answer is the negative of the right one — a very common sign error.',
            },
          ],
        },
      },
      {
        id: 'qr2-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{3x}{x^2 + 4}$

Identify the pieces:

- Hi $= f = 3x \\;\\Rightarrow\\; f' = 3$
- Lo $= g = x^2 + 4 \\;\\Rightarrow\\; g' = 2x$

Apply **Lo D-Hi minus Hi D-Lo, over Lo-Lo:**

$$\\frac{(x^2+4)(3) - (3x)(2x)}{(x^2+4)^2}$$

Expand the numerator:

$$= \\frac{3x^2 + 12 - 6x^2}{(x^2+4)^2} = \\frac{-3x^2 + 12}{(x^2+4)^2} = \\frac{12 - 3x^2}{(x^2+4)^2}$$

> ⚠️ Watch the $-6x^2$: it comes from $-(3x)(2x)$. Forgetting that the second product is **subtracted** is the #1 Quotient-Rule mistake.`,
      },
      {
        id: 'qr2-drill',
        type: 'input-boxes' as const,
        content: `**Build the Numerator** 🧮

For $\\dfrac{4x + 1}{2x - 5}$ you have $f = 4x+1$, $g = 2x-5$.

**1)** $f' = \\,?$
**2)** $g' = \\,?$
**3)** The numerator $f'g - fg'$ simplifies to a single constant. What constant? *(integer)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '-22'],
          hint1: '$f = 4x+1$, so $f\' = 4$. $\\;g = 2x-5$, so $g\' = 2$.',
          hint2: '$f\'g = 4(2x-5) = 8x - 20$, and $fg\' = (4x+1)(2) = 8x + 2$.',
          hint3: 'Numerator $= (8x - 20) - (8x + 2) = -22$. The $8x$ terms cancel.',
          explanation: '$f\'=4,\\ g\'=2$. Numerator $= 4(2x-5) - (4x+1)(2) = (8x-20) - (8x+2) = -22$. So the derivative is $\\dfrac{-22}{(2x-5)^2}$.',
        },
      },
      {
        id: 'qr2-recall',
        type: 'dropdown-select' as const,
        content: `**Match the Mnemonic** 🔽`,
        exercise: {
          dropdowns: [
            { label: '"Lo" refers to the:', options: ['bottom (denominator)', 'top (numerator)', 'derivative of the top', 'derivative of the bottom'] },
            { label: '"D-Hi" means:', options: ['derivative of the top', 'derivative of the bottom', 'the top itself', 'the bottom squared'] },
            { label: '"Lo-Lo" in the denominator means:', options: ['$g^2$', '$f^2$', '$fg$', '$g\'^2$'] },
          ],
          correctAnswers: ['bottom (denominator)', 'derivative of the top', '$g^2$'],
          hint1: 'Hi = high = top; Lo = low = bottom.',
          hint2: 'The "D" stands for "derivative of," so D-Hi = derivative of the top.',
          hint3: 'Lo-Lo is the bottom times itself: $g \\cdot g = g^2$.',
          explanation: 'Lo = bottom ($g$), D-Hi = $f\'$, and Lo-Lo = $g^2$. Together: $\\frac{g f\' - f g\'}{g^2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'quotient-rule',
    sections: [
      {
        id: 'qr3-intro',
        type: 'text' as const,
        content: `# ➗ The Quotient Rule

**Part 3 of 7 — Deriving the Trig Quotient Rules**

---

> 🔑 **Big Payoff:** Every trig function except sine and cosine is secretly a **quotient** of sine and cosine. The Quotient Rule *derives* the derivatives of $\\tan x$, $\\cot x$, $\\sec x$, and $\\csc x$ for you — no memorizing required.`,
      },
      {
        id: 'qr3-tan',
        type: 'text' as const,
        content: `## Deriving $\\dfrac{d}{dx}[\\tan x]$

Since $\\tan x = \\dfrac{\\sin x}{\\cos x}$, take $f = \\sin x$ and $g = \\cos x$:

- $f' = \\cos x$
- $g' = -\\sin x$

$$\\frac{d}{dx}[\\tan x] = \\frac{(\\cos x)(\\cos x) - (\\sin x)(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$$

By the Pythagorean identity $\\cos^2 x + \\sin^2 x = 1$:

$$= \\frac{1}{\\cos^2 x} = \\sec^2 x$$

> 🔑 **Result:** $\\dfrac{d}{dx}[\\tan x] = \\sec^2 x$. Notice the $-(\\sin x)(-\\sin x) = +\\sin^2 x$ — the double negative is what makes the identity appear.`,
      },
      {
        id: 'qr3-sec',
        type: 'text' as const,
        content: `## Deriving $\\dfrac{d}{dx}[\\sec x]$

Write $\\sec x = \\dfrac{1}{\\cos x}$, so $f = 1$ and $g = \\cos x$:

- $f' = 0$
- $g' = -\\sin x$

$$\\frac{d}{dx}[\\sec x] = \\frac{(0)(\\cos x) - (1)(-\\sin x)}{\\cos^2 x} = \\frac{\\sin x}{\\cos^2 x}$$

Split the fraction to recognize it:

$$\\frac{\\sin x}{\\cos^2 x} = \\frac{1}{\\cos x}\\cdot\\frac{\\sin x}{\\cos x} = \\sec x \\tan x$$

> 🔑 **Result:** $\\dfrac{d}{dx}[\\sec x] = \\sec x \\tan x$. The same method gives $\\dfrac{d}{dx}[\\csc x] = -\\csc x \\cot x$ and $\\dfrac{d}{dx}[\\cot x] = -\\csc^2 x$.`,
      },
      {
        id: 'qr3-cot-drill',
        type: 'multiple-choice' as const,
        content: `**Derive $\\dfrac{d}{dx}[\\cot x]$** 🎯

Use $\\cot x = \\dfrac{\\cos x}{\\sin x}$.`,
        exercise: {
          questions: [
            {
              question: 'With $f = \\cos x$ and $g = \\sin x$, the Quotient-Rule numerator $f\'g - fg\'$ is:',
              options: [
                '$-\\sin^2 x - \\cos^2 x$',
                '$-\\sin^2 x + \\cos^2 x$',
                '$\\sin^2 x + \\cos^2 x$',
                '$\\sin^2 x - \\cos^2 x$',
              ],
              correctAnswer: 0,
              explanation: '$f\' = -\\sin x$, $g\' = \\cos x$. So $f\'g - fg\' = (-\\sin x)(\\sin x) - (\\cos x)(\\cos x) = -\\sin^2 x - \\cos^2 x = -(\\sin^2 x + \\cos^2 x) = -1$.',
            },
            {
              question: 'Therefore $\\dfrac{d}{dx}[\\cot x] = $',
              options: ['$-\\csc^2 x$', '$\\csc^2 x$', '$\\sec^2 x$', '$-\\sec^2 x$'],
              correctAnswer: 0,
              explanation: 'The numerator is $-1$ and the denominator is $\\sin^2 x$, so the derivative is $\\dfrac{-1}{\\sin^2 x} = -\\csc^2 x$.',
            },
          ],
        },
      },
      {
        id: 'qr3-table',
        type: 'text' as const,
        content: `## The Four Trig Derivatives (All from the Quotient Rule)

| Function | As a quotient | Derivative |
|----------|---------------|------------|
| $\\tan x$ | $\\dfrac{\\sin x}{\\cos x}$ | $\\sec^2 x$ |
| $\\cot x$ | $\\dfrac{\\cos x}{\\sin x}$ | $-\\csc^2 x$ |
| $\\sec x$ | $\\dfrac{1}{\\cos x}$ | $\\sec x \\tan x$ |
| $\\csc x$ | $\\dfrac{1}{\\sin x}$ | $-\\csc x \\cot x$ |

> 💡 **Pattern:** The two "co-functions" ($\\cot$ and $\\csc$) carry a **negative** sign in their derivatives. That mirrors how $\\dfrac{d}{dx}[\\cos x] = -\\sin x$ is the negative one in the sine/cosine pair.`,
      },
      {
        id: 'qr3-match',
        type: 'dropdown-select' as const,
        content: `**Match Each Derivative** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{d}{dx}[\\tan x] = $', options: ['$\\sec^2 x$', '$-\\csc^2 x$', '$\\sec x \\tan x$', '$-\\sec^2 x$'] },
            { label: '$\\dfrac{d}{dx}[\\sec x] = $', options: ['$\\sec x \\tan x$', '$\\sec^2 x$', '$-\\csc x \\cot x$', '$\\tan x$'] },
            { label: '$\\dfrac{d}{dx}[\\csc x] = $', options: ['$-\\csc x \\cot x$', '$\\csc x \\cot x$', '$-\\csc^2 x$', '$\\sec x \\tan x$'] },
          ],
          correctAnswers: ['$\\sec^2 x$', '$\\sec x \\tan x$', '$-\\csc x \\cot x$'],
          hint1: 'The derivative of $\\tan x$ came from $\\cos^2 x + \\sin^2 x = 1$ over $\\cos^2 x$.',
          hint2: '$\\sec x$ and $\\tan x$ are "partners" — the derivative of $\\sec x$ is $\\sec x \\tan x$.',
          hint3: 'The co-functions $\\csc$ and $\\cot$ get a negative sign: $\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$.',
          explanation: '$\\tan\' = \\sec^2 x$, $\\sec\' = \\sec x \\tan x$, $\\csc\' = -\\csc x \\cot x$. All four follow directly from the Quotient Rule applied to ratios of $\\sin$ and $\\cos$.',
        },
      },
      {
        id: 'qr3-csc-drill',
        type: 'input-boxes' as const,
        content: `**Derive $\\dfrac{d}{dx}[\\csc x]$ Yourself** 🧮

Use $\\csc x = \\dfrac{1}{\\sin x}$, so $f = 1$ and $g = \\sin x$.

**1)** $f' = \\,?$ *(integer)*
**2)** The Quotient-Rule numerator $f'g - fg'$ simplifies to $?\\cos x$. Enter the missing coefficient. *(integer)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', '-1'],
          hint1: 'The derivative of the constant $1$ is $0$, so $f\' = 0$.',
          hint2: '$f\'g - fg\' = (0)(\\sin x) - (1)(\\cos x) = -\\cos x$.',
          hint3: 'Over $\\sin^2 x$: $\\dfrac{-\\cos x}{\\sin^2 x} = -\\dfrac{1}{\\sin x}\\cdot\\dfrac{\\cos x}{\\sin x} = -\\csc x \\cot x$.',
          explanation: '$f\' = 0$ and $g\' = \\cos x$, so the numerator is $(0)(\\sin x) - (1)(\\cos x) = -\\cos x$ (coefficient $-1$). Dividing by $\\sin^2 x$ gives $\\dfrac{d}{dx}[\\csc x] = -\\csc x \\cot x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'quotient-rule',
    sections: [
      {
        id: 'qr4-intro',
        type: 'text' as const,
        content: `# ➗ The Quotient Rule

**Part 4 of 7 — Quotient Rule Meets the Chain Rule**

---

> 🔑 **The Idea:** When the top or bottom is itself a composite (like $\\sin(2x)$ or $(3x+1)^4$), you apply the **Chain Rule** to that piece *while computing $f'$ or $g'$*, then drop the result into the Quotient Rule as usual.`,
      },
      {
        id: 'qr4-method',
        type: 'text' as const,
        content: `## The Two-Step Workflow

1. **Find $f'$ and $g'$ separately.** If a piece is composite, use the Chain Rule *there*.
2. **Assemble** with the Quotient Rule: $\\dfrac{f'g - fg'}{g^2}$.

### Worked Example: $\\dfrac{\\sin(2x)}{x}$

- $f = \\sin(2x)$. Chain Rule: $f' = \\cos(2x)\\cdot 2 = 2\\cos(2x)$.
- $g = x$, so $g' = 1$.

$$\\frac{d}{dx}\\left[\\frac{\\sin(2x)}{x}\\right] = \\frac{2\\cos(2x)\\cdot x - \\sin(2x)\\cdot 1}{x^2} = \\frac{2x\\cos(2x) - \\sin(2x)}{x^2}$$

> 💡 The Chain Rule lives **inside** the computation of $f'$. Once you have $f'$, the Quotient Rule doesn't care how you got it.`,
      },
      {
        id: 'qr4-chain-piece',
        type: 'input-boxes' as const,
        content: `**Differentiate the Composite Pieces** 🧮

Before assembling, find each derivative using the Chain Rule.

**1)** If $f = (3x + 1)^4$, then $f' = 12(3x+1)^3$. Enter the constant out front. *(integer)*
**2)** If $g = e^{5x}$, then $g' = ?\\,e^{5x}$. Enter the missing constant. *(integer)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '5'],
          hint1: 'Power + chain: $\\frac{d}{dx}(3x+1)^4 = 4(3x+1)^3 \\cdot 3$.',
          hint2: '$4 \\cdot 3 = 12$, so $f\' = 12(3x+1)^3$.',
          hint3: '$\\frac{d}{dx}e^{5x} = e^{5x}\\cdot 5 = 5e^{5x}$.',
          explanation: '1) $4(3x+1)^3\\cdot 3 = 12(3x+1)^3$, constant $= 12$. 2) $\\frac{d}{dx}e^{5x} = 5e^{5x}$, constant $= 5$.',
        },
      },
      {
        id: 'qr4-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{x^2}{(x+1)^3}$

- $f = x^2 \\;\\Rightarrow\\; f' = 2x$
- $g = (x+1)^3 \\;\\Rightarrow\\; g' = 3(x+1)^2$ (Chain Rule)

$$\\frac{(2x)(x+1)^3 - (x^2)\\cdot 3(x+1)^2}{\\big[(x+1)^3\\big]^2} = \\frac{2x(x+1)^3 - 3x^2(x+1)^2}{(x+1)^6}$$

**Factor and cancel** $(x+1)^2$ from every term:

$$= \\frac{(x+1)^2\\big[\\,2x(x+1) - 3x^2\\,\\big]}{(x+1)^6} = \\frac{2x^2 + 2x - 3x^2}{(x+1)^4} = \\frac{2x - x^2}{(x+1)^4}$$

> 💡 **Factor before you simplify.** Pulling out the lowest power of $(x+1)$ cancels cleanly and is exactly the move AP graders expect.`,
      },
      {
        id: 'qr4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\dfrac{\\cos(3x)}{x}$, what is $f\'$ (the derivative of the top)?',
              options: ['$-3\\sin(3x)$', '$-\\sin(3x)$', '$3\\sin(3x)$', '$\\sin(3x)$'],
              correctAnswer: 0,
              explanation: 'Chain Rule on $\\cos(3x)$: $f\' = -\\sin(3x)\\cdot 3 = -3\\sin(3x)$.',
            },
            {
              question: 'When the bottom is $(x+1)^3$, the denominator of the Quotient-Rule answer is:',
              options: ['$(x+1)^6$', '$(x+1)^3$', '$(x+1)^9$', '$3(x+1)^2$'],
              correctAnswer: 0,
              explanation: 'The denominator is the bottom squared: $\\big[(x+1)^3\\big]^2 = (x+1)^6$.',
            },
          ],
        },
      },
      {
        id: 'qr4-pieces-match',
        type: 'dropdown-select' as const,
        content: `**Set Up $\\dfrac{e^{2x}}{x^2 + 1}$** 🔽

Identify each piece before assembling the Quotient Rule. The top is a composite, so use the Chain Rule on it.`,
        exercise: {
          dropdowns: [
            { label: 'The top $f$ is:', options: ['$e^{2x}$', '$x^2 + 1$', '$2e^{2x}$', '$2x$'] },
            { label: '$f\'$ (Chain Rule) is:', options: ['$2e^{2x}$', '$e^{2x}$', '$e^{2x}\\cdot x$', '$2x e^{2x}$'] },
            { label: '$g\'$ is:', options: ['$2x$', '$x^2$', '$2x + 1$', '$1$'] },
          ],
          correctAnswers: ['$e^{2x}$', '$2e^{2x}$', '$2x$'],
          hint1: 'The top is the whole numerator $e^{2x}$; the bottom is $x^2 + 1$.',
          hint2: 'Chain Rule: $\\frac{d}{dx}e^{2x} = e^{2x}\\cdot 2 = 2e^{2x}$.',
          hint3: '$\\frac{d}{dx}(x^2 + 1) = 2x$.',
          explanation: 'Top $f = e^{2x}$ with $f\' = 2e^{2x}$ (Chain Rule), and bottom $g = x^2+1$ with $g\' = 2x$. These feed into $\\dfrac{2e^{2x}(x^2+1) - e^{2x}(2x)}{(x^2+1)^2}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'quotient-rule',
    sections: [
      {
        id: 'qr5-intro',
        type: 'text' as const,
        content: `# ➗ The Quotient Rule

**Part 5 of 7 — Applications: Tangent Lines & Behavior**

---

> 🔑 **Big Payoff:** Rational functions appear all over AP free-response problems. The Quotient Rule lets you find **tangent lines**, locate **horizontal tangents**, and decide where a function is **increasing or decreasing**.`,
      },
      {
        id: 'qr5-tangent',
        type: 'text' as const,
        content: `## Tangent Line Example: $f(x) = \\dfrac{x}{x+1}$ at $x = 1$

**Step 1 — the point.** $f(1) = \\dfrac{1}{1+1} = \\dfrac{1}{2}$, so the point is $\\left(1, \\tfrac{1}{2}\\right)$.

**Step 2 — the derivative.** With top $= x$ ($f'=1$) and bottom $= x+1$ ($g'=1$):

$$f'(x) = \\frac{(1)(x+1) - (x)(1)}{(x+1)^2} = \\frac{x + 1 - x}{(x+1)^2} = \\frac{1}{(x+1)^2}$$

**Step 3 — the slope.** $f'(1) = \\dfrac{1}{(1+1)^2} = \\dfrac{1}{4}$.

**Step 4 — the line.** Point-slope: $y - \\dfrac{1}{2} = \\dfrac{1}{4}(x - 1)$.

> 💡 Notice the numerator simplified to the constant $1$. A derivative that's a perfect square in the denominator (here always positive) tells you the function is **always increasing** on its domain.`,
      },
      {
        id: 'qr5-tangent-drill',
        type: 'input-boxes' as const,
        content: `**Your Turn — Tangent Slope** 🧮

Let $h(x) = \\dfrac{2x}{x - 5}$.

**1)** Find $h(1)$. *(integer)*
**2)** $h'(x) = \\dfrac{-10}{(x-5)^2}$. Find the slope $h'(1)$, as a fraction or decimal. *(e.g. $-5/8$)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-1/2', '-5/8'],
          hint1: '$h(1) = \\dfrac{2(1)}{1-5} = \\dfrac{2}{-4} = -\\dfrac{1}{2}$.',
          hint2: 'Numerator of $h\'$: $(2)(x-5) - (2x)(1) = 2x - 10 - 2x = -10$, so $h\'(x) = \\dfrac{-10}{(x-5)^2}$.',
          hint3: '$h\'(1) = \\dfrac{-10}{(1-5)^2} = \\dfrac{-10}{16} = -\\dfrac{5}{8}$.',
          explanation: '$h(1) = \\dfrac{2}{-4} = -\\dfrac{1}{2}$. For the slope: $h\'(1) = \\dfrac{-10}{(1-5)^2} = \\dfrac{-10}{16} = -\\dfrac{5}{8}$.',
        },
      },
      {
        id: 'qr5-horizontal',
        type: 'text' as const,
        content: `## Horizontal Tangents: Set the Numerator to Zero

A Quotient-Rule derivative is a fraction. It equals **zero** only when its **numerator** is zero (and the denominator is not).

### Example: $f(x) = \\dfrac{x^2}{x - 1}$

- $f' = \\dfrac{(2x)(x-1) - (x^2)(1)}{(x-1)^2} = \\dfrac{2x^2 - 2x - x^2}{(x-1)^2} = \\dfrac{x^2 - 2x}{(x-1)^2}$

Set the numerator $= 0$: $\\;x^2 - 2x = x(x-2) = 0 \\Rightarrow x = 0$ or $x = 2$.

So the graph has **horizontal tangents at $x = 0$ and $x = 2$**.

> ⚠️ The value $x = 1$ makes the **denominator** zero — that's a vertical asymptote, *not* a horizontal tangent. Always exclude points where the original function is undefined.`,
      },
      {
        id: 'qr5-horizontal-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Quotient-Rule derivative $\\dfrac{N(x)}{D(x)}$ equals zero exactly when:',
              options: [
                '$N(x) = 0$ and $D(x) \\ne 0$',
                '$D(x) = 0$',
                '$N(x) = D(x)$',
                'both $N(x)=0$ and $D(x)=0$',
              ],
              correctAnswer: 0,
              explanation: 'A fraction is zero only when its numerator is zero while the denominator is nonzero. Where $D(x)=0$ the derivative is undefined, not zero.',
            },
            {
              question: 'For $f(x) = \\dfrac{x^2}{x-1}$ with $f\' = \\dfrac{x^2 - 2x}{(x-1)^2}$, the horizontal tangents are at:',
              options: ['$x = 0$ and $x = 2$', '$x = 1$', '$x = 0$ and $x = 1$', '$x = -2$ and $x = 0$'],
              correctAnswer: 0,
              explanation: 'Set numerator $x^2 - 2x = x(x-2) = 0$, giving $x=0,2$. Exclude $x=1$ (denominator zero).',
            },
          ],
        },
      },
      {
        id: 'qr5-increasing',
        type: 'dropdown-select' as const,
        content: `**Increasing or Decreasing?** 🔽

For $f(x) = \\dfrac{x}{x+1}$ we found $f'(x) = \\dfrac{1}{(x+1)^2}$.`,
        exercise: {
          dropdowns: [
            { label: 'The denominator $(x+1)^2$ is always:', options: ['positive (except at $x=-1$)', 'negative', 'zero', 'sometimes negative'] },
            { label: 'So the sign of $f\'(x)$ is:', options: ['always positive', 'always negative', 'sometimes zero', 'undefined everywhere'] },
            { label: 'Therefore $f$ is:', options: ['increasing on its whole domain', 'decreasing everywhere', 'constant', 'increasing then decreasing'] },
          ],
          correctAnswers: ['positive (except at $x=-1$)', 'always positive', 'increasing on its whole domain'],
          hint1: 'A square of a real number is never negative; $(x+1)^2 > 0$ except where $x = -1$.',
          hint2: 'Numerator is $1 > 0$ and denominator is positive, so the fraction is positive.',
          hint3: 'A positive derivative everywhere on the domain means the function is increasing there.',
          explanation: 'Since $f\'(x) = \\dfrac{1}{(x+1)^2} > 0$ for all $x \\ne -1$, the function increases on each piece of its domain.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'quotient-rule',
    sections: [
      {
        id: 'qr6-intro',
        type: 'text' as const,
        content: `# ➗ The Quotient Rule

**Part 6 of 7 — Traps & When NOT to Use It**

---

> 🔑 **The Idea:** The Quotient Rule is correct but often **overkill**. Many fractions are easier (and less error-prone) to differentiate by rewriting them first. Knowing when to skip the rule is a real exam skill.`,
      },
      {
        id: 'qr6-rewrite',
        type: 'text' as const,
        content: `## Trap 1: Use Algebra First When You Can

If the **denominator is a single term** (a monomial), split the fraction and use the Power Rule instead.

### Example: $\\dfrac{x^3 + 2x}{x}$

Rewrite: $\\dfrac{x^3}{x} + \\dfrac{2x}{x} = x^2 + 2$. Then $\\dfrac{d}{dx}(x^2 + 2) = 2x$.

The Quotient Rule gives the same answer but with far more work:

$$\\frac{(3x^2+2)(x) - (x^3+2x)(1)}{x^2} = \\frac{3x^3 + 2x - x^3 - 2x}{x^2} = \\frac{2x^3}{x^2} = 2x \\;\\checkmark$$

> 💡 **Rule of thumb:** If the bottom is a single power of $x$ (or a constant), rewrite with **negative exponents** and use the Power Rule. Save the Quotient Rule for genuine polynomial-over-polynomial fractions.`,
      },
      {
        id: 'qr6-rewrite-check',
        type: 'multiple-choice' as const,
        content: `**Spot the Smarter Method** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression is easiest to differentiate by rewriting (no Quotient Rule needed)?',
              options: [
                '$\\dfrac{x^4 - 5x}{x^2}$',
                '$\\dfrac{x+1}{x-1}$',
                '$\\dfrac{2x}{x^2+1}$',
                '$\\dfrac{\\sin x}{x+2}$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{x^4-5x}{x^2} = x^2 - 5x^{-1}$ (monomial denominator), so the Power Rule handles it. The others have genuine binomial/composite denominators.',
            },
            {
              question: 'Rewriting $\\dfrac{6}{x^2}$ for the Power Rule gives:',
              options: ['$6x^{-2}$', '$6x^2$', '$\\dfrac{1}{6}x^{-2}$', '$6x^{1/2}$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{6}{x^2} = 6x^{-2}$, whose derivative is $6(-2)x^{-3} = -12x^{-3} = -\\dfrac{12}{x^3}$.',
            },
          ],
        },
      },
      {
        id: 'qr6-sign-trap',
        type: 'text' as const,
        content: `## Trap 2: The Distributed Minus Sign

When you expand the numerator, the minus sign must hit **every term** of $f g'$.

### Example: $\\dfrac{x^2 + 1}{x^2 - 1}$

- $f = x^2+1,\\ f' = 2x$;  $\\;g = x^2 - 1,\\ g' = 2x$

$$\\frac{(2x)(x^2-1) - (x^2+1)(2x)}{(x^2-1)^2}$$

Distribute carefully — the **whole** second product is subtracted:

$$= \\frac{2x^3 - 2x - (2x^3 + 2x)}{(x^2-1)^2} = \\frac{2x^3 - 2x - 2x^3 - 2x}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2}$$

> ⚠️ A student who writes $2x^3 - 2x - 2x^3 + 2x$ (forgetting to distribute the minus to $+2x$) gets $0$ — completely wrong. Wrap $f g'$ in parentheses **before** subtracting.`,
      },
      {
        id: 'qr6-sign-drill',
        type: 'input-boxes' as const,
        content: `**Distribute the Minus** 🧮

For $\\dfrac{x^2 + 1}{x^2 - 1}$, the numerator is $(2x)(x^2-1) - (x^2+1)(2x)$.

**1)** Expand $(2x)(x^2-1)$: the coefficient of $x^3$ is $?$ and of $x$ is $?$. Enter the $x$-coefficient. *(integer)*
**2)** After subtracting $(x^2+1)(2x) = 2x^3 + 2x$, the fully simplified numerator is $-4x$. Enter the coefficient of $x$. *(integer)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-2', '-4'],
          hint1: '$(2x)(x^2 - 1) = 2x^3 - 2x$, so the $x$-coefficient is $-2$.',
          hint2: 'Subtract the entire second product: $(2x^3 - 2x) - (2x^3 + 2x)$.',
          hint3: '$2x^3 - 2x - 2x^3 - 2x = -4x$, so the coefficient is $-4$.',
          explanation: '1) $(2x)(x^2-1) = 2x^3 - 2x$; the $x$-coefficient is $-2$. 2) Distributing the minus: $-2x - 2x = -4x$, coefficient $-4$. Final derivative: $\\dfrac{-4x}{(x^2-1)^2}$.',
        },
      },
      {
        id: 'qr6-trap-quiz',
        type: 'multiple-choice' as const,
        content: `**Trap Round** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A constant denominator, like in $\\dfrac{x^2 + x}{5}$, means you should:',
              options: [
                'just differentiate the top and divide by 5',
                'use the Quotient Rule with $g = 5$',
                'square the 5 in the denominator',
                'rewrite as $5(x^2+x)$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{x^2+x}{5} = \\dfrac{1}{5}(x^2+x)$ is just a constant multiple, so the derivative is $\\dfrac{1}{5}(2x+1)$. No Quotient Rule needed.',
            },
            {
              question: 'The biggest single source of sign errors in the Quotient Rule is:',
              options: [
                'forgetting to distribute the minus sign to all of $fg\'$',
                'squaring the numerator',
                'using the Pythagorean identity',
                'differentiating the denominator',
              ],
              correctAnswer: 0,
              explanation: 'The subtraction applies to the entire product $fg\'$. Wrapping it in parentheses before subtracting prevents the classic error.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'quotient-rule',
    sections: [
      {
        id: 'qr7-intro',
        type: 'text' as const,
        content: `# ➗ The Quotient Rule

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) apply the formula and mnemonic, (2) derive every trig quotient, (3) combine it with the Chain Rule, (4) find tangent lines and behavior, and (5) recognize when *not* to use it. Let's put it all together.`,
      },
      {
        id: 'qr7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Differentiate $\\dfrac{f}{g}$ | $\\dfrac{f'g - fg'}{g^2}$ (Lo D-Hi $-$ Hi D-Lo, over Lo-Lo) |
| Composite top/bottom | Chain Rule on that piece while finding $f'$ or $g'$ |
| Horizontal tangent | set the **numerator** of $f'$ to $0$ |
| Increasing/decreasing | check the **sign** of $f'$ |
| Monomial / constant denominator | rewrite and use the Power Rule instead |

> ⚠️ **Never** use $\\dfrac{f'}{g'}$. **Always** subtract (order: $f'g$ first), square the bottom, and distribute the minus sign across all of $fg'$.`,
      },
      {
        id: 'qr7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Differentiate $\\dfrac{x - 1}{x + 1}$.',
              options: [
                '$\\dfrac{2}{(x+1)^2}$',
                '$\\dfrac{-2}{(x+1)^2}$',
                '$\\dfrac{1}{(x+1)^2}$',
                '$\\dfrac{2x}{(x+1)^2}$',
              ],
              correctAnswer: 0,
              explanation: '$f=x-1\\ (f\'=1)$, $g=x+1\\ (g\'=1)$: numerator $= (1)(x+1) - (x-1)(1) = x+1-x+1 = 2$. So the derivative is $\\dfrac{2}{(x+1)^2}$.',
            },
            {
              question: 'What is $\\dfrac{d}{dx}\\left[\\dfrac{e^x}{x}\\right]$?',
              options: [
                '$\\dfrac{e^x(x - 1)}{x^2}$',
                '$\\dfrac{e^x}{1}$',
                '$\\dfrac{e^x(x + 1)}{x^2}$',
                '$\\dfrac{e^x - x}{x^2}$',
              ],
              correctAnswer: 0,
              explanation: '$f=e^x\\ (f\'=e^x)$, $g=x\\ (g\'=1)$: $\\dfrac{e^x\\cdot x - e^x\\cdot 1}{x^2} = \\dfrac{e^x(x-1)}{x^2}$.',
            },
          ],
        },
      },
      {
        id: 'qr7-drill',
        type: 'input-boxes' as const,
        content: `**One More Computation** 🧮

Let $f(x) = \\dfrac{x}{x^2 + 1}$.

The derivative simplifies to $f'(x) = \\dfrac{1 - x^2}{(x^2+1)^2}$.

**1)** Evaluate the slope at $x = 0$, i.e. $f'(0)$. *(integer)*
**2)** Setting the numerator $1 - x^2 = 0$ gives horizontal tangents at $x = \\pm\\,?$ — enter the **positive** value. *(integer)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '1'],
          hint1: 'At $x=0$: numerator $1 - 0 = 1$; denominator $(0+1)^2 = 1$. So $f\'(0) = 1$.',
          hint2: 'Numerator: $(1)(x^2+1) - (x)(2x) = x^2 + 1 - 2x^2 = 1 - x^2$.',
          hint3: '$1 - x^2 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$; the positive value is $1$.',
          explanation: '$f\'(0) = \\dfrac{1-0}{1} = 1$. Horizontal tangents where $1 - x^2 = 0$, i.e. $x = \\pm 1$; the positive value is $1$.',
        },
      },
      {
        id: 'qr7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The Quotient Rule numerator for $\\dfrac{f}{g}$ is:',
              options: ['$f\'g - fg\'$', '$fg\' - f\'g$', '$f\'g + fg\'$', '$f\'g\'$'],
              correctAnswer: 0,
              explanation: '"Lo D-Hi minus Hi D-Lo": $g f\' - f g\' = f\'g - fg\'$. Derivative of top times bottom, minus top times derivative of bottom.',
            },
            {
              question: 'Using the Quotient Rule, $\\dfrac{d}{dx}\\left[\\dfrac{\\sin x}{\\cos x}\\right] = $',
              options: ['$\\sec^2 x$', '$-\\csc^2 x$', '$\\tan x$', '$\\sec x \\tan x$'],
              correctAnswer: 0,
              explanation: 'This is $\\tan x$, and the Quotient Rule gives $\\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\dfrac{1}{\\cos^2 x} = \\sec^2 x$.',
            },
            {
              question: 'For $f(x) = \\dfrac{1}{x}$, the Quotient Rule gives $f\'(x) = $',
              options: ['$-\\dfrac{1}{x^2}$', '$\\dfrac{1}{x^2}$', '$-\\dfrac{1}{x}$', '$\\dfrac{1}{2x}$'],
              correctAnswer: 0,
              explanation: 'Top $=1\\ (f\'=0)$, bottom $=x\\ (g\'=1)$: $\\dfrac{(0)(x) - (1)(1)}{x^2} = \\dfrac{-1}{x^2}$. (Matches the Power Rule on $x^{-1}$.)',
            },
          ],
        },
      },
    ],
  },
]
