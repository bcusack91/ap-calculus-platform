import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Double Angle and Half Angle Identities (AP Precalculus).
 * Registry key: 'double-half-angle-identities' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'double-half-angle-identities',
    sections: [
      {
        id: 'dha1-intro',
        type: 'text' as const,
        content: `# 🔁 Double Angle & Half Angle Identities

**Part 1 of 7 — Where the Double-Angle Formulas Come From**

---

### Topics in This Part

| Section |
|---------|
| The Sum Formulas We Build On |
| Deriving $\\sin(2\\theta)$ and $\\cos(2\\theta)$ |
| The Three Faces of $\\cos(2\\theta)$ |

> 🔑 **Key Concept:** A "double angle" formula rewrites $\\sin(2\\theta)$, $\\cos(2\\theta)$, or $\\tan(2\\theta)$ in terms of $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$ alone. Every one of them is just an **angle-sum formula with both angles equal**.`,
      },
      {
        id: 'dha1-sum',
        type: 'text' as const,
        content: `## We Start From the Sum Formulas

You already know the angle-**sum** identities:

$$\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$$
$$\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B$$

A double angle is just the special case $A = B = \\theta$, because $\\theta + \\theta = 2\\theta$.

### Derivation of $\\sin(2\\theta)$

$$\\sin(2\\theta) = \\sin(\\theta + \\theta) = \\sin\\theta\\cos\\theta + \\cos\\theta\\sin\\theta = 2\\sin\\theta\\cos\\theta$$

### Derivation of $\\cos(2\\theta)$

$$\\cos(2\\theta) = \\cos(\\theta + \\theta) = \\cos\\theta\\cos\\theta - \\sin\\theta\\sin\\theta = \\cos^2\\theta - \\sin^2\\theta$$

> 🔑 **Take-away:** You never have to *memorize* these in isolation. If you know the sum formulas, you can rebuild every double-angle identity in two lines.`,
      },
      {
        id: 'dha1-derive-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which substitution turns the sum formula $\\sin(A+B)$ into a double-angle formula?',
              options: ['$A = B = \\theta$', '$A = 2\\theta,\\ B = 0$', '$A = \\theta,\\ B = 2\\theta$', '$B = -A$'],
              correctAnswer: 0,
              explanation: 'Setting $A = B = \\theta$ gives $\\sin(\\theta+\\theta) = \\sin(2\\theta)$, which collapses to $2\\sin\\theta\\cos\\theta$.',
            },
            {
              question: 'Using $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$, what is $\\sin(2\\theta)$ when $\\sin\\theta = \\tfrac{1}{2}$ and $\\cos\\theta = \\tfrac{\\sqrt{3}}{2}$?',
              options: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{4}$'],
              correctAnswer: 0,
              explanation: '$2\\cdot\\tfrac{1}{2}\\cdot\\tfrac{\\sqrt{3}}{2} = \\tfrac{\\sqrt{3}}{2}$. (These are $\\sin 30^\\circ,\\cos 30^\\circ$, so $2\\theta = 60^\\circ$ and indeed $\\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2}$.)',
            },
          ],
        },
      },
      {
        id: 'dha1-three-faces',
        type: 'text' as const,
        content: `## The Three Faces of $\\cos(2\\theta)$

The cosine double angle is special: using the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$, you can write it **three equivalent ways**.

| Form | How to get it |
|------|---------------|
| $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$ | the direct derivation |
| $\\cos(2\\theta) = 2\\cos^2\\theta - 1$ | replace $\\sin^2\\theta$ with $1-\\cos^2\\theta$ |
| $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$ | replace $\\cos^2\\theta$ with $1-\\sin^2\\theta$ |

> 💡 **Why three forms?** You pick whichever one matches what you're given. Know only $\\cos\\theta$? Use $2\\cos^2\\theta - 1$. Know only $\\sin\\theta$? Use $1 - 2\\sin^2\\theta$. This choice saves enormous time on the exam.`,
      },
      {
        id: 'dha1-faces-drill',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Face** 🔽

Choose the most efficient form of $\\cos(2\\theta)$ for each situation.`,
        exercise: {
          dropdowns: [
            { label: 'You are told only $\\cos\\theta = \\tfrac{2}{3}$:', options: ['$2\\cos^2\\theta - 1$', '$1 - 2\\sin^2\\theta$', '$\\cos^2\\theta - \\sin^2\\theta$', '$2\\sin\\theta\\cos\\theta$'] },
            { label: 'You are told only $\\sin\\theta = \\tfrac{1}{4}$:', options: ['$1 - 2\\sin^2\\theta$', '$2\\cos^2\\theta - 1$', '$\\cos^2\\theta - \\sin^2\\theta$', '$2\\sin\\theta\\cos\\theta$'] },
            { label: 'A formula for $\\sin(2\\theta)$:', options: ['$2\\sin\\theta\\cos\\theta$', '$2\\cos^2\\theta - 1$', '$1 - 2\\sin^2\\theta$', '$\\sin^2\\theta - \\cos^2\\theta$'] },
          ],
          correctAnswers: ['$2\\cos^2\\theta - 1$', '$1 - 2\\sin^2\\theta$', '$2\\sin\\theta\\cos\\theta$'],
          hint1: 'If you only know cosine, choose the form written purely in $\\cos\\theta$.',
          hint2: 'If you only know sine, choose the form written purely in $\\sin\\theta$.',
          hint3: '$\\sin(2\\theta)$ always equals $2\\sin\\theta\\cos\\theta$ — it has just one form.',
          explanation: 'Match the form to the information given: $2\\cos^2\\theta-1$ needs only cosine, $1-2\\sin^2\\theta$ needs only sine, and $\\sin(2\\theta)=2\\sin\\theta\\cos\\theta$ always.',
        },
      },
      {
        id: 'dha1-compute-drill',
        type: 'input-boxes' as const,
        content: `**Compute a Double Angle** 🧮

Suppose $\\sin\\theta = \\tfrac{3}{5}$ and $\\cos\\theta = \\tfrac{4}{5}$.

**1)** $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = \\,?$  *(enter as a fraction)*
**2)** Using $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$, what is $\\cos(2\\theta)$?  *(enter as a fraction)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['24/25', '7/25'],
          hint1: '$\\sin(2\\theta) = 2\\cdot\\tfrac{3}{5}\\cdot\\tfrac{4}{5} = \\tfrac{24}{25}$.',
          hint2: '$\\cos(2\\theta) = 1 - 2\\cdot\\tfrac{9}{25} = 1 - \\tfrac{18}{25} = \\tfrac{7}{25}$.',
          hint3: 'Both answers have denominator $25$; check that $\\left(\\tfrac{24}{25}\\right)^2 + \\left(\\tfrac{7}{25}\\right)^2 = 1$.',
          explanation: '$\\sin(2\\theta) = \\tfrac{24}{25}$ and $\\cos(2\\theta) = 1 - \\tfrac{18}{25} = \\tfrac{7}{25}$.',
        },
      },
      {
        id: 'dha1-recap',
        type: 'text' as const,
        content: `## What You've Got So Far

$$\\boxed{\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta}$$
$$\\boxed{\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta}$$

In **Part 2** we add the tangent double angle and start *using* these to compute exact values. The whole rest of the lesson rests on the boxed formulas above — make sure they feel automatic.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'double-half-angle-identities',
    sections: [
      {
        id: 'dha2-intro',
        type: 'text' as const,
        content: `# 🔁 Double Angle & Half Angle Identities

**Part 2 of 7 — Tangent & Evaluating From a Given Ratio**

---

> 🔑 **The Idea:** If you know $\\sin\\theta$ and $\\cos\\theta$ (or can find them from one), you can compute $\\sin(2\\theta)$, $\\cos(2\\theta)$, and $\\tan(2\\theta)$ exactly — no calculator, no decimals.`,
      },
      {
        id: 'dha2-tan',
        type: 'text' as const,
        content: `## The Tangent Double Angle

Divide $\\sin(2\\theta)$ by $\\cos(2\\theta)$ (or set $A=B=\\theta$ in the tangent-sum formula) to get:

$$\\boxed{\\tan(2\\theta) = \\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}}$$

### Quick Example: $\\tan\\theta = \\tfrac{1}{2}$

$$\\tan(2\\theta) = \\frac{2\\cdot\\frac{1}{2}}{1 - \\left(\\frac{1}{2}\\right)^2} = \\frac{1}{1 - \\frac{1}{4}} = \\frac{1}{\\frac{3}{4}} = \\frac{4}{3}$$

> ⚠️ **Watch the denominator.** The $1 - \\tan^2\\theta$ is undefined when $\\tan\\theta = \\pm 1$ (i.e. $\\theta = 45^\\circ$), which makes sense: $\\tan(90^\\circ)$ is undefined.`,
      },
      {
        id: 'dha2-tan-drill',
        type: 'input-boxes' as const,
        content: `**Tangent Double Angle** 🧮

Use $\\tan(2\\theta) = \\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}$. Enter each answer as a fraction like \`8/15\`.

**1)** $\\tan\\theta = \\tfrac{1}{3} \\;\\Rightarrow\\; \\tan(2\\theta) = \\,?$
**2)** $\\tan\\theta = 2 \\;\\Rightarrow\\; \\tan(2\\theta) = \\,?$
**3)** $\\tan\\theta = \\tfrac{3}{4} \\;\\Rightarrow\\; \\tan(2\\theta) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/4', '-4/3', '24/7'],
          hint1: '$\\dfrac{2\\cdot\\frac{1}{3}}{1 - \\frac{1}{9}} = \\dfrac{2/3}{8/9} = \\dfrac{2}{3}\\cdot\\dfrac{9}{8} = \\dfrac{3}{4}$.',
          hint2: '$\\dfrac{2\\cdot 2}{1 - 4} = \\dfrac{4}{-3} = -\\dfrac{4}{3}$. A negative result is fine.',
          hint3: '$\\dfrac{2\\cdot\\frac{3}{4}}{1 - \\frac{9}{16}} = \\dfrac{3/2}{7/16} = \\dfrac{3}{2}\\cdot\\dfrac{16}{7} = \\dfrac{24}{7}$.',
          explanation: '1) $\\tan(2\\theta) = \\frac{3}{4}$.  2) $\\tan(2\\theta) = -\\frac{4}{3}$.  3) $\\tan(2\\theta) = \\frac{24}{7}$.',
        },
      },
      {
        id: 'dha2-worked',
        type: 'text' as const,
        content: `## Worked Example: Build Everything From One Ratio

> **Given:** $\\sin\\theta = \\dfrac{3}{5}$ with $\\theta$ in **Quadrant I**. Find $\\sin(2\\theta)$, $\\cos(2\\theta)$, and $\\tan(2\\theta)$.

**Step 1 — Find $\\cos\\theta$.** Since $\\theta$ is in QI, cosine is positive:
$$\\cos\\theta = \\sqrt{1 - \\left(\\tfrac{3}{5}\\right)^2} = \\sqrt{1 - \\tfrac{9}{25}} = \\sqrt{\\tfrac{16}{25}} = \\frac{4}{5}$$

**Step 2 — Double angles.**
$$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2\\cdot\\tfrac{3}{5}\\cdot\\tfrac{4}{5} = \\frac{24}{25}$$
$$\\cos(2\\theta) = 1 - 2\\sin^2\\theta = 1 - 2\\cdot\\tfrac{9}{25} = 1 - \\tfrac{18}{25} = \\frac{7}{25}$$
$$\\tan(2\\theta) = \\frac{\\sin(2\\theta)}{\\cos(2\\theta)} = \\frac{24/25}{7/25} = \\frac{24}{7}$$

> ✅ **Sanity check:** $\\left(\\tfrac{24}{25}\\right)^2 + \\left(\\tfrac{7}{25}\\right)^2 = \\tfrac{576 + 49}{625} = \\tfrac{625}{625} = 1$ ✓`,
      },
      {
        id: 'dha2-worked-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the worked example, which form of $\\cos(2\\theta)$ was the smartest to use?',
              options: ['$1 - 2\\sin^2\\theta$, because only $\\sin\\theta$ was given directly', '$2\\cos^2\\theta - 1$, because cosine is easier', '$\\cos^2\\theta - \\sin^2\\theta$, because it has two terms', 'It does not matter; all give different answers'],
              correctAnswer: 0,
              explanation: 'We were handed $\\sin\\theta = \\tfrac{3}{5}$, so $1 - 2\\sin^2\\theta$ lets us plug in immediately. All three forms give the *same* value $\\tfrac{7}{25}$, but this one needs the least work.',
            },
            {
              question: 'If $\\theta$ had been in **Quadrant II** with $\\sin\\theta = \\tfrac{3}{5}$, then $\\cos\\theta = -\\tfrac{4}{5}$. What would $\\sin(2\\theta)$ be?',
              options: ['$-\\frac{24}{25}$', '$\\frac{24}{25}$', '$\\frac{7}{25}$', '$-\\frac{7}{25}$'],
              correctAnswer: 0,
              explanation: '$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2\\cdot\\tfrac{3}{5}\\cdot\\left(-\\tfrac{4}{5}\\right) = -\\tfrac{24}{25}$. The sign of $\\cos\\theta$ flips the sign of $\\sin(2\\theta)$.',
            },
          ],
        },
      },
      {
        id: 'dha2-build-drill',
        type: 'input-boxes' as const,
        content: `**Build From a Ratio** 🧮

Given $\\cos\\theta = -\\dfrac{3}{5}$ with $\\theta$ in **Quadrant II** (so $\\sin\\theta = \\tfrac{4}{5}$):

**1)** $\\sin(2\\theta) = \\,?$  *(enter as a fraction)*
**2)** $\\cos(2\\theta) = \\,?$  *(enter as a fraction)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-24/25', '-7/25'],
          hint1: '$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2\\cdot\\tfrac{4}{5}\\cdot\\left(-\\tfrac{3}{5}\\right)$.',
          hint2: '$\\cos(2\\theta) = 2\\cos^2\\theta - 1 = 2\\cdot\\tfrac{9}{25} - 1 = \\tfrac{18}{25} - \\tfrac{25}{25}$.',
          hint3: 'In QII, sine is positive and cosine is negative, so their product is negative.',
          explanation: '$\\sin(2\\theta) = 2\\cdot\\tfrac{4}{5}\\cdot(-\\tfrac{3}{5}) = -\\tfrac{24}{25}$.  $\\cos(2\\theta) = \\tfrac{18}{25} - 1 = -\\tfrac{7}{25}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'double-half-angle-identities',
    sections: [
      {
        id: 'dha3-intro',
        type: 'text' as const,
        content: `# 🔁 Double Angle & Half Angle Identities

**Part 3 of 7 — Reading Double Angles Backwards (Recognition)**

---

> 🔑 **The Skill:** The exam rarely says "use the double-angle formula." Instead it shows you an expression like $2\\sin(3x)\\cos(3x)$ and expects you to *recognize* it as $\\sin(6x)$. This is the reverse direction, and it is worth easy points.`,
      },
      {
        id: 'dha3-recognize',
        type: 'text' as const,
        content: `## Pattern Recognition

Read each formula **right-to-left**. The angle inside doubles.

| If you see… | It equals… | Why |
|-------------|-----------|-----|
| $2\\sin\\alpha\\cos\\alpha$ | $\\sin(2\\alpha)$ | the $\\sin(2\\theta)$ pattern with $\\theta = \\alpha$ |
| $\\cos^2\\alpha - \\sin^2\\alpha$ | $\\cos(2\\alpha)$ | first form of $\\cos(2\\theta)$ |
| $1 - 2\\sin^2\\alpha$ | $\\cos(2\\alpha)$ | third form of $\\cos(2\\theta)$ |
| $2\\cos^2\\alpha - 1$ | $\\cos(2\\alpha)$ | second form of $\\cos(2\\theta)$ |
| $\\dfrac{2\\tan\\alpha}{1-\\tan^2\\alpha}$ | $\\tan(2\\alpha)$ | the tangent pattern |

### Example

$$2\\sin(3x)\\cos(3x) = \\sin(2\\cdot 3x) = \\sin(6x)$$

Here $\\alpha = 3x$, so $2\\alpha = 6x$.

> 💡 **Whatever is inside becomes the "$\\theta$".** Don't be thrown by $3x$, $5\\beta$, or $\\tfrac{x}{2}$ — the structure is all that matters.`,
      },
      {
        id: 'dha3-recognize-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\cos^2(5x) - \\sin^2(5x)$.',
              options: ['$\\cos(10x)$', '$\\sin(10x)$', '$\\cos(5x)$', '$1$'],
              correctAnswer: 0,
              explanation: 'This is $\\cos^2\\alpha - \\sin^2\\alpha = \\cos(2\\alpha)$ with $\\alpha = 5x$, so it equals $\\cos(10x)$.',
            },
            {
              question: 'Simplify $1 - 2\\sin^2(4\\theta)$.',
              options: ['$\\cos(8\\theta)$', '$\\sin(8\\theta)$', '$\\cos(4\\theta)$', '$-\\cos(4\\theta)$'],
              correctAnswer: 0,
              explanation: '$1 - 2\\sin^2\\alpha = \\cos(2\\alpha)$ with $\\alpha = 4\\theta$, giving $\\cos(8\\theta)$.',
            },
            {
              question: 'Simplify $\\dfrac{2\\tan(x)}{1 - \\tan^2(x)}$.',
              options: ['$\\tan(2x)$', '$\\tan^2(x)$', '$2\\tan(x)$', '$\\cot(2x)$'],
              correctAnswer: 0,
              explanation: 'This is exactly the tangent double-angle formula, so it equals $\\tan(2x)$.',
            },
          ],
        },
      },
      {
        id: 'dha3-factor',
        type: 'text' as const,
        content: `## Sometimes You Must Factor First

The pattern is often *hidden* until you pull out a common factor.

### Example: $6\\sin\\theta\\cos\\theta$

Factor out the $2$ that the formula needs:
$$6\\sin\\theta\\cos\\theta = 3\\cdot(2\\sin\\theta\\cos\\theta) = 3\\sin(2\\theta)$$

### Example: $4\\cos^2\\theta - 2$

Factor out a $2$ to expose $2\\cos^2\\theta - 1$:
$$4\\cos^2\\theta - 2 = 2(2\\cos^2\\theta - 1) = 2\\cos(2\\theta)$$

> ⚠️ **Don't force it.** $2\\cos^2\\theta - 1$ is a double angle, but $2\\cos^2\\theta + 1$ is **not** — the $-1$ is essential. Check the exact constant before you simplify.`,
      },
      {
        id: 'dha3-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Expose the Pattern** 🔽

Factor, then rewrite each expression as a single double angle.`,
        exercise: {
          dropdowns: [
            { label: '$10\\sin\\theta\\cos\\theta = $', options: ['$5\\sin(2\\theta)$', '$10\\sin(2\\theta)$', '$5\\cos(2\\theta)$', '$\\sin(10\\theta)$'] },
            { label: '$2 - 4\\sin^2\\theta = $', options: ['$2\\cos(2\\theta)$', '$2\\sin(2\\theta)$', '$-2\\cos(2\\theta)$', '$\\cos(2\\theta)$'] },
            { label: '$8\\sin(2x)\\cos(2x) = $', options: ['$4\\sin(4x)$', '$8\\sin(4x)$', '$4\\sin(2x)$', '$2\\sin(4x)$'] },
          ],
          correctAnswers: ['$5\\sin(2\\theta)$', '$2\\cos(2\\theta)$', '$4\\sin(4x)$'],
          hint1: '$10\\sin\\theta\\cos\\theta = 5\\,(2\\sin\\theta\\cos\\theta)$.',
          hint2: '$2 - 4\\sin^2\\theta = 2\\,(1 - 2\\sin^2\\theta) = 2\\cos(2\\theta)$.',
          hint3: '$8\\sin(2x)\\cos(2x) = 4\\,(2\\sin(2x)\\cos(2x)) = 4\\sin(4x)$ since the inside angle doubles to $4x$.',
          explanation: 'Pull out the constant so a clean $2\\sin\\theta\\cos\\theta$ or $1 - 2\\sin^2\\theta$ appears, then apply the formula.',
        },
      },
      {
        id: 'dha3-recognize-drill',
        type: 'input-boxes' as const,
        content: `**Double the Inside Angle** 🧮

Each expression is a double-angle pattern in disguise. Rewrite it as a single trig function of the form $\\sin(k x)$ or $\\cos(k x)$, then enter just the integer $k$.

**1)** $2\\sin(6x)\\cos(6x) = \\sin(k x)$. Find $k$.
**2)** $1 - 2\\sin^2(9x) = \\cos(k x)$. Find $k$.
**3)** $\\cos^2(x) - \\sin^2(x) = \\cos(k x)$. Find $k$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '18', '2'],
          hint1: '$2\\sin\\alpha\\cos\\alpha = \\sin(2\\alpha)$, so the inside angle $6x$ doubles to $12x$.',
          hint2: '$1 - 2\\sin^2\\alpha = \\cos(2\\alpha)$, so $9x$ doubles to $18x$.',
          hint3: '$\\cos^2\\alpha - \\sin^2\\alpha = \\cos(2\\alpha)$ with $\\alpha = x$, so the angle is $2x$.',
          explanation: '1) $\\sin(12x)$, so $k=12$.  2) $\\cos(18x)$, so $k=18$.  3) $\\cos(2x)$, so $k=2$. In every case the inside angle doubles.',
        },
      },
      {
        id: 'dha3-recap',
        type: 'text' as const,
        content: `## Recap

Recognition is a two-step habit:

1. **Factor** out whatever constant the formula requires (a $2$ for $\\cos$/$\\sin$ patterns).
2. **Match** the structure and **double** the inside angle.

> 🔑 Reading identities *backwards* is exactly the move you'll need when **integrating** $\\sin^2 x$ or $\\cos^2 x$ in calculus — which is where Part 5's power-reduction formulas come in.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'double-half-angle-identities',
    sections: [
      {
        id: 'dha4-intro',
        type: 'text' as const,
        content: `# 🔁 Double Angle & Half Angle Identities

**Part 4 of 7 — The Half-Angle Formulas**

---

### Topics in This Part

| Section |
|---------|
| Solving $\\cos(2\\theta)$ for $\\sin^2$ and $\\cos^2$ |
| The Half-Angle Formulas |
| Choosing the $\\pm$ Sign |

> 🔑 **Key Concept:** Half-angle formulas come from running the cosine double angle **in reverse**. They let you find $\\sin\\left(\\tfrac{\\theta}{2}\\right)$ from $\\cos\\theta$ — perfect for exact values like $\\sin 15^\\circ$.`,
      },
      {
        id: 'dha4-derive',
        type: 'text' as const,
        content: `## Deriving the Half-Angle Formulas

Start with two faces of the cosine double angle and **solve for the squared term**:

$$\\cos(2\\theta) = 1 - 2\\sin^2\\theta \\;\\Rightarrow\\; \\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}$$
$$\\cos(2\\theta) = 2\\cos^2\\theta - 1 \\;\\Rightarrow\\; \\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}$$

Now replace $\\theta$ with $\\tfrac{\\theta}{2}$ (so $2\\theta$ becomes $\\theta$) and take a square root:

$$\\boxed{\\sin\\!\\left(\\tfrac{\\theta}{2}\\right) = \\pm\\sqrt{\\dfrac{1 - \\cos\\theta}{2}}}$$
$$\\boxed{\\cos\\!\\left(\\tfrac{\\theta}{2}\\right) = \\pm\\sqrt{\\dfrac{1 + \\cos\\theta}{2}}}$$
$$\\boxed{\\tan\\!\\left(\\tfrac{\\theta}{2}\\right) = \\dfrac{1 - \\cos\\theta}{\\sin\\theta} = \\dfrac{\\sin\\theta}{1 + \\cos\\theta}}$$

> 💡 **Memory hook:** **s**ine goes with **s**ubtraction ($1 - \\cos\\theta$); **c**osine goes with… the **+** ($1 + \\cos\\theta$). The two $\\tan$ forms are always positive-or-negative *without* a $\\pm$ to choose — the sign comes out automatically.`,
      },
      {
        id: 'dha4-sign-text',
        type: 'text' as const,
        content: `## Choosing the $\\pm$ Sign

The square root forces a decision: **is the half-angle's sine (or cosine) positive or negative?**

The answer depends on the quadrant of $\\tfrac{\\theta}{2}$ — **not** the quadrant of $\\theta$.

### Example: $\\theta = 300^\\circ$

Then $\\tfrac{\\theta}{2} = 150^\\circ$, which lands in **Quadrant II**. In QII:
- $\\sin\\left(\\tfrac{\\theta}{2}\\right) > 0$  → choose **+**
- $\\cos\\left(\\tfrac{\\theta}{2}\\right) < 0$  → choose **−**

> ⚠️ **The #1 mistake** is copying the sign from $\\theta$. Always **halve the angle first**, locate *that* quadrant, then pick the sign.`,
      },
      {
        id: 'dha4-sign-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Sign** 🔽

For each $\\theta$, decide the quadrant of $\\tfrac{\\theta}{2}$ and the sign of $\\sin\\left(\\tfrac{\\theta}{2}\\right)$.`,
        exercise: {
          dropdowns: [
            { label: '$\\theta = 80^\\circ \\Rightarrow \\tfrac{\\theta}{2} = 40^\\circ$ is in:', options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'] },
            { label: 'So $\\sin\\left(\\tfrac{\\theta}{2}\\right)$ is:', options: ['positive', 'negative'] },
            { label: '$\\theta = 200^\\circ \\Rightarrow \\tfrac{\\theta}{2} = 100^\\circ$, so $\\sin\\left(\\tfrac{\\theta}{2}\\right)$ is:', options: ['positive', 'negative'] },
          ],
          correctAnswers: ['Quadrant I', 'positive', 'positive'],
          hint1: '$40^\\circ$ is between $0^\\circ$ and $90^\\circ$ → Quadrant I.',
          hint2: 'In Quadrant I every trig function is positive.',
          hint3: '$100^\\circ$ is in Quadrant II, where sine is still positive.',
          explanation: '$40^\\circ$ is in QI (all positive), so $\\sin(40^\\circ) > 0$. $100^\\circ$ is in QII, where sine is also positive. Always test the *halved* angle.',
        },
      },
      {
        id: 'dha4-worked',
        type: 'text' as const,
        content: `## Worked Example: Exact Value of $\\sin 15^\\circ$

Notice $15^\\circ = \\tfrac{30^\\circ}{2}$, and we know $\\cos 30^\\circ = \\tfrac{\\sqrt{3}}{2}$.

**Step 1 — Pick the sign.** $15^\\circ$ is in Quadrant I, so $\\sin 15^\\circ > 0$ → use **+**.

**Step 2 — Apply the formula.**
$$\\sin 15^\\circ = \\sqrt{\\frac{1 - \\cos 30^\\circ}{2}} = \\sqrt{\\frac{1 - \\frac{\\sqrt{3}}{2}}{2}} = \\sqrt{\\frac{\\frac{2 - \\sqrt{3}}{2}}{2}} = \\sqrt{\\frac{2 - \\sqrt{3}}{4}} = \\frac{\\sqrt{2 - \\sqrt{3}}}{2}$$

> ✅ **Check:** $\\dfrac{\\sqrt{2 - \\sqrt{3}}}{2} \\approx 0.2588$, and a calculator gives $\\sin 15^\\circ \\approx 0.2588$ ✓. (This also equals the "nested-radical-free" form $\\tfrac{\\sqrt{6} - \\sqrt{2}}{4}$.)`,
      },
      {
        id: 'dha4-worked-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which half-angle formula correctly gives $\\cos\\left(\\tfrac{\\theta}{2}\\right)$?',
              options: ['$\\pm\\sqrt{\\dfrac{1 + \\cos\\theta}{2}}$', '$\\pm\\sqrt{\\dfrac{1 - \\cos\\theta}{2}}$', '$\\pm\\sqrt{\\dfrac{1 + \\sin\\theta}{2}}$', '$\\dfrac{1 + \\cos\\theta}{2}$'],
              correctAnswer: 0,
              explanation: 'Cosine pairs with the **+** sign: $\\cos\\left(\\tfrac{\\theta}{2}\\right) = \\pm\\sqrt{\\tfrac{1 + \\cos\\theta}{2}}$. (Sine uses $1 - \\cos\\theta$.)',
            },
            {
              question: 'To find $\\sin 15^\\circ$ exactly, which double angle $\\theta$ do you feed into the half-angle formula?',
              options: ['$\\theta = 30^\\circ$', '$\\theta = 15^\\circ$', '$\\theta = 45^\\circ$', '$\\theta = 60^\\circ$'],
              correctAnswer: 0,
              explanation: 'Since $15^\\circ = \\tfrac{30^\\circ}{2}$, you use $\\theta = 30^\\circ$ so that $\\tfrac{\\theta}{2} = 15^\\circ$ and you can plug in the known $\\cos 30^\\circ = \\tfrac{\\sqrt{3}}{2}$.',
            },
          ],
        },
      },
      {
        id: 'dha4-half-drill',
        type: 'input-boxes' as const,
        content: `**Half-Angle Setup** 🧮

Given $\\cos\\theta = \\dfrac{7}{25}$ with $\\theta$ in **Quadrant I** (so $\\tfrac{\\theta}{2}$ is also in QI — all positive):

**1)** Inside the sine formula, $\\dfrac{1 - \\cos\\theta}{2} = \\,?$  *(enter as a fraction)*
**2)** Therefore $\\sin\\left(\\tfrac{\\theta}{2}\\right) = \\,?$  *(enter as a fraction)*
**3)** And $\\cos\\left(\\tfrac{\\theta}{2}\\right) = \\,?$  *(enter as a fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9/25', '3/5', '4/5'],
          hint1: '$\\dfrac{1 - \\frac{7}{25}}{2} = \\dfrac{18/25}{2} = \\dfrac{18}{50} = \\dfrac{9}{25}$.',
          hint2: '$\\sin\\left(\\tfrac{\\theta}{2}\\right) = \\sqrt{\\tfrac{9}{25}} = \\tfrac{3}{5}$ (positive, since $\\tfrac{\\theta}{2}$ is in QI).',
          hint3: '$\\cos\\left(\\tfrac{\\theta}{2}\\right) = \\sqrt{\\dfrac{1 + \\frac{7}{25}}{2}} = \\sqrt{\\dfrac{32/25}{2}} = \\sqrt{\\tfrac{16}{25}} = \\tfrac{4}{5}$.',
          explanation: '$\\dfrac{1-\\frac{7}{25}}{2} = \\tfrac{9}{25}$, so $\\sin\\left(\\tfrac{\\theta}{2}\\right) = \\tfrac{3}{5}$ and $\\cos\\left(\\tfrac{\\theta}{2}\\right) = \\tfrac{4}{5}$. A rare case where the half-angle is itself a clean ratio.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'double-half-angle-identities',
    sections: [
      {
        id: 'dha5-intro',
        type: 'text' as const,
        content: `# 🔁 Double Angle & Half Angle Identities

**Part 5 of 7 — Power-Reduction Formulas**

---

> 🔑 **The Idea:** The same algebra that built the half-angle formulas gives the **power-reduction** formulas, which trade a *squared* trig function for a *first-power* one. This is the single most important identity for integrating in Calculus BC.`,
      },
      {
        id: 'dha5-power',
        type: 'text' as const,
        content: `## The Power-Reduction Formulas

Stopping one step *before* the square root in Part 4's derivation leaves:

$$\\boxed{\\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}}$$
$$\\boxed{\\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}}$$

The exponent $2$ on the left becomes a $2$ **inside** the cosine on the right — the power "moves into the angle."

### Why this is useful

A squared function oscillates in a way that's hard to work with, but $\\cos(2\\theta)$ is a single, clean wave. For example, the *average value* of $\\sin^2\\theta$ over a full period is $\\tfrac{1}{2}$, which you can read straight off the formula (the $\\cos(2\\theta)$ term averages to $0$).

> 💡 In calculus you can't integrate $\\sin^2 x$ directly, but you **can** integrate $\\tfrac{1}{2} - \\tfrac{1}{2}\\cos(2x)$. That swap is this formula.`,
      },
      {
        id: 'dha5-power-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rewrite $\\cos^2(3x)$ with no exponent using power reduction.',
              options: ['$\\dfrac{1 + \\cos(6x)}{2}$', '$\\dfrac{1 - \\cos(6x)}{2}$', '$\\dfrac{1 + \\cos(3x)}{2}$', '$1 - \\sin^2(3x)$'],
              correctAnswer: 0,
              explanation: '$\\cos^2\\theta = \\tfrac{1 + \\cos(2\\theta)}{2}$ with $\\theta = 3x$ gives $\\tfrac{1 + \\cos(6x)}{2}$. Cosine pairs with the **+** sign.',
            },
            {
              question: 'Which expression is equal to $\\sin^2\\theta$?',
              options: ['$\\dfrac{1 - \\cos(2\\theta)}{2}$', '$\\dfrac{1 + \\cos(2\\theta)}{2}$', '$\\dfrac{1 - \\sin(2\\theta)}{2}$', '$\\dfrac{\\cos(2\\theta) - 1}{2}$'],
              correctAnswer: 0,
              explanation: 'Sine pairs with subtraction: $\\sin^2\\theta = \\tfrac{1 - \\cos(2\\theta)}{2}$.',
            },
          ],
        },
      },
      {
        id: 'dha5-fourth',
        type: 'text' as const,
        content: `## Reducing Higher Powers

For a fourth power, apply power reduction **twice**. Reduce $\\sin^4\\theta = (\\sin^2\\theta)^2$:

$$\\sin^4\\theta = \\left(\\frac{1 - \\cos(2\\theta)}{2}\\right)^2 = \\frac{1 - 2\\cos(2\\theta) + \\cos^2(2\\theta)}{4}$$

Now reduce the leftover $\\cos^2(2\\theta) = \\tfrac{1 + \\cos(4\\theta)}{2}$ and combine:

$$\\sin^4\\theta = \\frac{3 - 4\\cos(2\\theta) + \\cos(4\\theta)}{8}$$

> ⚠️ Each pass **doubles the angle** ($2\\theta$, then $4\\theta$). Track those carefully — a missed doubling is the usual error here.`,
      },
      {
        id: 'dha5-power-drill',
        type: 'input-boxes' as const,
        content: `**Power Reduction** 🧮

Use $\\sin^2\\theta = \\dfrac{1-\\cos(2\\theta)}{2}$ and $\\cos^2\\theta = \\dfrac{1+\\cos(2\\theta)}{2}$.

**1)** The average value of $\\cos^2\\theta$ over one full period equals $\\,?$  *(enter as a fraction or decimal)*
**2)** In $\\sin^2(5\\theta) = \\dfrac{1 - \\cos(k\\theta)}{2}$, the value of $k$ is $\\,?$
**3)** In the reduced form of $\\cos^2(2\\theta)$, the angle inside the cosine term is $k\\theta$. Find $k$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/2', '10', '4'],
          hint1: 'The $\\cos(2\\theta)$ term averages to $0$ over a period, leaving the constant $\\tfrac{1}{2}$.',
          hint2: 'The angle doubles: $\\sin^2(5\\theta)$ produces $\\cos(2\\cdot 5\\theta) = \\cos(10\\theta)$.',
          hint3: '$\\cos^2(2\\theta) = \\tfrac{1 + \\cos(2\\cdot 2\\theta)}{2} = \\tfrac{1 + \\cos(4\\theta)}{2}$.',
          explanation: '1) Average $= \\tfrac{1}{2}$.  2) $k = 10$.  3) $k = 4$. In every case the inside angle is **double** the original.',
        },
      },
      {
        id: 'dha5-power-dropdown',
        type: 'dropdown-select' as const,
        content: `**Reduce the Power** 🔽

Choose the correct power-reduction rewrite for each expression.`,
        exercise: {
          dropdowns: [
            { label: '$\\sin^2(2x) = $', options: ['$\\dfrac{1 - \\cos(4x)}{2}$', '$\\dfrac{1 + \\cos(4x)}{2}$', '$\\dfrac{1 - \\cos(2x)}{2}$', '$\\dfrac{1 - \\sin(4x)}{2}$'] },
            { label: '$\\cos^2(7x) = $', options: ['$\\dfrac{1 + \\cos(14x)}{2}$', '$\\dfrac{1 - \\cos(14x)}{2}$', '$\\dfrac{1 + \\cos(7x)}{2}$', '$\\dfrac{1 + \\sin(14x)}{2}$'] },
            { label: 'The average value of $\\sin^2\\theta$ over a full period:', options: ['$\\tfrac{1}{2}$', '$1$', '$0$', '$\\tfrac{1}{4}$'] },
          ],
          correctAnswers: ['$\\dfrac{1 - \\cos(4x)}{2}$', '$\\dfrac{1 + \\cos(14x)}{2}$', '$\\tfrac{1}{2}$'],
          hint1: 'Sine pairs with subtraction and the inside angle doubles: $\\sin^2(2x) = \\tfrac{1 - \\cos(4x)}{2}$.',
          hint2: 'Cosine pairs with addition: $\\cos^2(7x) = \\tfrac{1 + \\cos(14x)}{2}$.',
          hint3: 'The $\\cos(2\\theta)$ term averages to $0$, leaving the constant $\\tfrac{1}{2}$.',
          explanation: 'Sine uses $1 - \\cos$, cosine uses $1 + \\cos$, the inside angle always doubles, and the oscillating cosine term averages to $0$ so $\\sin^2\\theta$ averages to $\\tfrac{1}{2}$.',
        },
      },
      {
        id: 'dha5-recap',
        type: 'text' as const,
        content: `## Recap

| Power | Reduced form |
|-------|--------------|
| $\\sin^2\\theta$ | $\\dfrac{1 - \\cos(2\\theta)}{2}$ |
| $\\cos^2\\theta$ | $\\dfrac{1 + \\cos(2\\theta)}{2}$ |
| $\\sin^2\\theta\\cos^2\\theta$ | $\\dfrac{1 - \\cos(4\\theta)}{8}$ |

> 🔑 The third row is a bonus: $\\sin^2\\theta\\cos^2\\theta = \\left(\\tfrac{1}{2}\\sin 2\\theta\\right)^2 = \\tfrac{1}{4}\\sin^2(2\\theta) = \\tfrac{1}{4}\\cdot\\tfrac{1 - \\cos(4\\theta)}{2}$. Notice it's *all* built from the double-angle identity you started with in Part 1.`,
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'double-half-angle-identities',
    sections: [
      {
        id: 'dha6-intro',
        type: 'text' as const,
        content: `# 🔁 Double Angle & Half Angle Identities

**Part 6 of 7 — Solving Equations & Real Applications**

---

> 🔑 **The Idea:** When an equation mixes $\\sin(2x)$ with $\\sin x$ (or $\\cos(2x)$ with $\\cos x$), you can't combine them — until you use a double-angle identity to make **every term the same angle**. Then it factors.`,
      },
      {
        id: 'dha6-solve',
        type: 'text' as const,
        content: `## Solving $\\sin(2x) = \\sin x$ on $[0, 2\\pi)$

**Step 1 — Expand the double angle** so all terms use angle $x$:
$$2\\sin x\\cos x = \\sin x$$

**Step 2 — Move everything to one side and factor.** *(Never divide by $\\sin x$ — you'd lose roots.)*
$$2\\sin x\\cos x - \\sin x = 0 \\;\\Rightarrow\\; \\sin x\\,(2\\cos x - 1) = 0$$

**Step 3 — Solve each factor.**
$$\\sin x = 0 \\;\\Rightarrow\\; x = 0,\\ \\pi$$
$$2\\cos x - 1 = 0 \\;\\Rightarrow\\; \\cos x = \\tfrac{1}{2} \\;\\Rightarrow\\; x = \\tfrac{\\pi}{3},\\ \\tfrac{5\\pi}{3}$$

**Solutions:** $x = 0,\\ \\tfrac{\\pi}{3},\\ \\pi,\\ \\tfrac{5\\pi}{3}$.

> ⚠️ **Do not divide both sides by $\\sin x$!** That throws away $x = 0$ and $x = \\pi$. Always factor instead.`,
      },
      {
        id: 'dha6-solve-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $\\cos(2x) + \\cos x = 0$, which form of $\\cos(2x)$ creates a quadratic in $\\cos x$?',
              options: ['$2\\cos^2 x - 1$', '$1 - 2\\sin^2 x$', '$\\cos^2 x - \\sin^2 x$', '$2\\sin x\\cos x$'],
              correctAnswer: 0,
              explanation: 'Using $2\\cos^2 x - 1$ makes the equation $2\\cos^2 x - 1 + \\cos x = 0$, a quadratic in $\\cos x$ that factors as $(2\\cos x - 1)(\\cos x + 1) = 0$.',
            },
            {
              question: 'Why is dividing $2\\sin x\\cos x = \\sin x$ by $\\sin x$ a mistake?',
              options: ['It discards the solutions where $\\sin x = 0$', 'It changes $\\cos x$ into $\\sin x$', 'It only works in radians', 'Dividing is never allowed in trig'],
              correctAnswer: 0,
              explanation: 'Dividing by $\\sin x$ assumes $\\sin x \\ne 0$, silently dropping the valid roots $x = 0$ and $x = \\pi$. Factoring keeps them.',
            },
          ],
        },
      },
      {
        id: 'dha6-app',
        type: 'text' as const,
        content: `## A Real Application: Projectile Range

The horizontal range of a projectile launched at speed $v$ and angle $\\theta$ is

$$R(\\theta) = \\frac{v^2 \\sin(2\\theta)}{g}$$

The double angle $\\sin(2\\theta)$ is the whole story:
- $\\sin(2\\theta)$ is **largest when $2\\theta = 90^\\circ$**, i.e. $\\theta = 45^\\circ$. That's why $45^\\circ$ gives maximum range.
- Two angles that add to $90^\\circ$ (like $30^\\circ$ and $60^\\circ$) give the **same range**, because $\\sin(2\\cdot 30^\\circ) = \\sin 60^\\circ = \\sin 120^\\circ = \\sin(2\\cdot 60^\\circ)$.

> 💡 The double-angle identity isn't just algebra — it *explains a physical fact* you may have seen in physics class.`,
      },
      {
        id: 'dha6-app-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply It** 🔽

Reason about the range model $R(\\theta) = \\dfrac{v^2\\sin(2\\theta)}{g}$ and the equation work above.`,
        exercise: {
          dropdowns: [
            { label: 'The launch angle giving maximum range:', options: ['$45^\\circ$', '$30^\\circ$', '$60^\\circ$', '$90^\\circ$'] },
            { label: 'An angle giving the SAME range as $25^\\circ$:', options: ['$65^\\circ$', '$50^\\circ$', '$45^\\circ$', '$75^\\circ$'] },
            { label: 'First algebra step in solving $\\sin(2x) = \\cos x$:', options: ['Replace $\\sin(2x)$ with $2\\sin x\\cos x$', 'Divide both sides by $\\cos x$', 'Replace $\\cos x$ with $1 - \\sin x$', 'Square both sides'] },
          ],
          correctAnswers: ['$45^\\circ$', '$65^\\circ$', 'Replace $\\sin(2x)$ with $2\\sin x\\cos x$'],
          hint1: '$\\sin(2\\theta)$ peaks at $2\\theta = 90^\\circ$.',
          hint2: 'Equal ranges come from angles that sum to $90^\\circ$: $25^\\circ + 65^\\circ = 90^\\circ$.',
          hint3: 'Expand the double angle first so every term shares the angle $x$, then factor — don\'t divide.',
          explanation: 'Max range at $45^\\circ$; complementary angles ($25^\\circ$ and $65^\\circ$) share a range; and you always expand $\\sin(2x) = 2\\sin x\\cos x$ before factoring.',
        },
      },
      {
        id: 'dha6-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve on $[0, 2\\pi)$. Give answers as multiples of $\\pi$ where asked.

**1)** $\\sin(2x) = 0$ has how many solutions on $[0, 2\\pi)$?  *(count them)*
**2)** Solving $\\cos(2x) + \\cos x = 0$ gives $\\cos x = \\tfrac{1}{2}$ or $\\cos x = -1$. The solution from $\\cos x = -1$ is $x = k\\pi$; find $k$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '1'],
          hint1: '$\\sin(2x) = 0 \\Rightarrow 2x = 0, \\pi, 2\\pi, 3\\pi \\Rightarrow x = 0, \\tfrac{\\pi}{2}, \\pi, \\tfrac{3\\pi}{2}$ — four values.',
          hint2: '$\\cos x = -1$ on $[0, 2\\pi)$ happens only at $x = \\pi$, so $k = 1$.',
          hint3: 'Remember $2x$ ranges over $[0, 4\\pi)$, so $\\sin(2x)=0$ catches twice as many points as $\\sin x = 0$.',
          explanation: '1) Four solutions: $0, \\tfrac{\\pi}{2}, \\pi, \\tfrac{3\\pi}{2}$.  2) $\\cos x = -1$ gives $x = \\pi$, so $k = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'double-half-angle-identities',
    sections: [
      {
        id: 'dha7-intro',
        type: 'text' as const,
        content: `# 🔁 Double Angle & Half Angle Identities

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) derive and apply the double-angle formulas, (2) recognize them backwards, (3) use the half-angle formulas with the right sign, (4) reduce powers, and (5) solve equations. Let's pull it all together.`,
      },
      {
        id: 'dha7-reference',
        type: 'text' as const,
        content: `## Master Reference Card

| Identity | Formula |
|----------|---------|
| $\\sin(2\\theta)$ | $2\\sin\\theta\\cos\\theta$ |
| $\\cos(2\\theta)$ | $\\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$ |
| $\\tan(2\\theta)$ | $\\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}$ |
| $\\sin\\left(\\tfrac{\\theta}{2}\\right)$ | $\\pm\\sqrt{\\dfrac{1 - \\cos\\theta}{2}}$ |
| $\\cos\\left(\\tfrac{\\theta}{2}\\right)$ | $\\pm\\sqrt{\\dfrac{1 + \\cos\\theta}{2}}$ |
| $\\sin^2\\theta$ | $\\dfrac{1 - \\cos(2\\theta)}{2}$ |
| $\\cos^2\\theta$ | $\\dfrac{1 + \\cos(2\\theta)}{2}$ |

> ⚠️ **Three habits that save points:** match the $\\cos(2\\theta)$ form to what you're given; halve the angle *before* picking a $\\pm$ sign; and factor (never divide) when solving equations.`,
      },
      {
        id: 'dha7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Warm-Up** 🔽

One quick item from each skill before the quiz.`,
        exercise: {
          dropdowns: [
            { label: '$2\\sin(7x)\\cos(7x) = $', options: ['$\\sin(14x)$', '$\\cos(14x)$', '$\\sin(7x)$', '$2\\sin(7x)$'] },
            { label: '$\\dfrac{1 + \\cos(8x)}{2} = $', options: ['$\\cos^2(4x)$', '$\\sin^2(4x)$', '$\\cos^2(8x)$', '$\\cos(4x)$'] },
            { label: 'For $\\theta = 250^\\circ$, $\\tfrac{\\theta}{2} = 125^\\circ$, so $\\cos\\left(\\tfrac{\\theta}{2}\\right)$ is:', options: ['negative', 'positive', 'zero', 'undefined'] },
          ],
          correctAnswers: ['$\\sin(14x)$', '$\\cos^2(4x)$', 'negative'],
          hint1: '$2\\sin\\alpha\\cos\\alpha = \\sin(2\\alpha)$ with $\\alpha = 7x$.',
          hint2: '$\\tfrac{1 + \\cos(2\\alpha)}{2} = \\cos^2\\alpha$; here $2\\alpha = 8x$ so $\\alpha = 4x$.',
          hint3: '$125^\\circ$ is in Quadrant II, where cosine is negative.',
          explanation: 'These are the double-angle, power-reduction, and half-angle-sign skills in one line: $\\sin(14x)$, $\\cos^2(4x)$, and a negative cosine for an angle in QII.',
        },
      },
      {
        id: 'dha7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $\\cos\\theta = \\tfrac{1}{3}$, what is $\\cos(2\\theta)$?',
              options: ['$-\\frac{7}{9}$', '$\\frac{7}{9}$', '$\\frac{2}{3}$', '$-\\frac{1}{9}$'],
              correctAnswer: 0,
              explanation: '$\\cos(2\\theta) = 2\\cos^2\\theta - 1 = 2\\cdot\\tfrac{1}{9} - 1 = \\tfrac{2}{9} - \\tfrac{9}{9} = -\\tfrac{7}{9}$.',
            },
            {
              question: 'On $[0, 2\\pi)$, how many solutions does $\\sin(2x) = \\sin x$ have?',
              options: ['$4$', '$2$', '$3$', '$6$'],
              correctAnswer: 0,
              explanation: 'Factoring $\\sin x(2\\cos x - 1) = 0$ gives $x = 0, \\pi$ (from $\\sin x = 0$) and $x = \\tfrac{\\pi}{3}, \\tfrac{5\\pi}{3}$ (from $\\cos x = \\tfrac{1}{2}$): four solutions.',
            },
          ],
        },
      },
      {
        id: 'dha7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Given $\\sin\\theta = \\tfrac{4}{5}$ with $\\theta$ in Quadrant I, find $\\sin(2\\theta)$.',
              options: ['$\\frac{24}{25}$', '$-\\frac{24}{25}$', '$\\frac{7}{25}$', '$\\frac{8}{5}$'],
              correctAnswer: 0,
              explanation: 'In QI, $\\cos\\theta = \\tfrac{3}{5}$. Then $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta = 2\\cdot\\tfrac{4}{5}\\cdot\\tfrac{3}{5} = \\tfrac{24}{25}$.',
            },
            {
              question: 'Which expression equals $\\cos(2\\theta)$?',
              options: ['$1 - 2\\sin^2\\theta$', '$1 + 2\\sin^2\\theta$', '$2\\sin\\theta\\cos\\theta$', '$2\\sin^2\\theta - 1$'],
              correctAnswer: 0,
              explanation: 'One of the three faces of the cosine double angle is $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$. (The option $2\\sin^2\\theta - 1$ is its negative, $-\\cos(2\\theta)$.)',
            },
            {
              question: 'Power reduction rewrites $\\sin^2\\theta$ as:',
              options: ['$\\dfrac{1 - \\cos(2\\theta)}{2}$', '$\\dfrac{1 + \\cos(2\\theta)}{2}$', '$\\dfrac{1 - \\sin(2\\theta)}{2}$', '$2\\sin\\theta\\cos\\theta$'],
              correctAnswer: 0,
              explanation: 'Sine pairs with subtraction: $\\sin^2\\theta = \\tfrac{1 - \\cos(2\\theta)}{2}$. This is the identity that makes $\\sin^2\\theta$ integrable in calculus.',
            },
          ],
        },
      },
    ],
  },
]
