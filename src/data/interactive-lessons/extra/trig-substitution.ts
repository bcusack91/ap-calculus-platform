import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Trigonometric Substitution (AP Calculus AB).
 * Registry key / DB Topic.slug: 'trig-substitution'.
 * 7 parts, gold-standard structure: why we need it → the three Pythagorean
 * setups → case 1 (a^2 - x^2) → case 2 (a^2 + x^2) → case 3 (x^2 - a^2) →
 * back-substitution with reference triangles + definite integrals →
 * mixed mastery practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every integral, derivative, and back-substitution was verified by hand
 * and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'trig-substitution',
    sections: [
      {
        id: 'trigsub1-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Substitution

**Part 1 of 7 — Why We Need a New Tool**

---

### Topics in This Part

| Section |
|---------|
| The radicals that stop $u$-substitution cold |
| The Pythagorean identities that rescue us |
| Recognizing the three classic forms |

> 🔑 **Key Concept:** When an integrand contains $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, or $\\sqrt{x^2 - a^2}$, no ordinary $u$-substitution clears the root. Trig substitution swaps $x$ for a trig function so that a Pythagorean identity collapses the radical into a single trig term.`,
      },
      {
        id: 'trigsub1-wall',
        type: 'text' as const,
        content: `## Where $u$-Substitution Fails

Try to integrate
$$\\int \\frac{dx}{\\sqrt{9 - x^2}}.$$

A $u$-substitution wants the derivative of the inside to appear outside. Here the inside is $9 - x^2$, whose derivative is $-2x$ — but there is **no $x$** in the numerator to match. So $u$-substitution stalls.

The radical $\\sqrt{9 - x^2}$ is the **Pythagorean** shape $\\sqrt{a^2 - x^2}$ with $a = 3$. That shape is exactly what $\\sin^2\\theta + \\cos^2\\theta = 1$ is built to simplify.

> 💡 The whole strategy: pick a substitution that turns the radical into $\\sqrt{(\\text{number})\\cdot(\\text{trig})^2}$, because a square root of a perfect square is clean.`,
      },
      {
        id: 'trigsub1-identities',
        type: 'text' as const,
        content: `## The Three Identities That Power the Method

Each radical pairs with one rearranged Pythagorean identity:

| Radical | Substitution | Identity used | Radical becomes |
|---------|--------------|---------------|-----------------|
| $\\sqrt{a^2 - x^2}$ | $x = a\\sin\\theta$ | $1 - \\sin^2\\theta = \\cos^2\\theta$ | $a\\cos\\theta$ |
| $\\sqrt{a^2 + x^2}$ | $x = a\\tan\\theta$ | $1 + \\tan^2\\theta = \\sec^2\\theta$ | $a\\sec\\theta$ |
| $\\sqrt{x^2 - a^2}$ | $x = a\\sec\\theta$ | $\\sec^2\\theta - 1 = \\tan^2\\theta$ | $a\\tan\\theta$ |

The pattern to memorize: **minus a square → sine, plus a square → tangent, square minus → secant.**

> 🔑 In every case the radical turns into $a$ times one clean trig function, with no square root left.`,
      },
      {
        id: 'trigsub1-match',
        type: 'dropdown-select' as const,
        content: `**Match the Form** 🔽

Identify $a$ and the correct substitution for each radical.`,
        exercise: {
          dropdowns: [
            { label: 'For $\\sqrt{25 - x^2}$, use:', options: ['$x = 5\\sin\\theta$', '$x = 5\\tan\\theta$', '$x = 5\\sec\\theta$', '$x = 25\\sin\\theta$'] },
            { label: 'For $\\sqrt{16 + x^2}$, use:', options: ['$x = 4\\tan\\theta$', '$x = 4\\sin\\theta$', '$x = 4\\sec\\theta$', '$x = 16\\tan\\theta$'] },
            { label: 'For $\\sqrt{x^2 - 49}$, use:', options: ['$x = 7\\sec\\theta$', '$x = 7\\sin\\theta$', '$x = 7\\tan\\theta$', '$x = 49\\sec\\theta$'] },
          ],
          correctAnswers: ['$x = 5\\sin\\theta$', '$x = 4\\tan\\theta$', '$x = 7\\sec\\theta$'],
          hint1: 'The constant $a$ is the **square root** of the number, not the number itself: $25 = 5^2$, $16 = 4^2$, $49 = 7^2$.',
          hint2: 'Minus a square uses sine; plus a square uses tangent; square-minus uses secant.',
          hint3: '$\\sqrt{25-x^2}$ is $a^2-x^2$ with $a=5 \\to \\sin$; $\\sqrt{16+x^2}$ is $a^2+x^2$ with $a=4 \\to \\tan$; $\\sqrt{x^2-49}$ is $x^2-a^2$ with $a=7 \\to \\sec$.',
          explanation: 'Read off $a$ as the square root of the constant, then choose sine / tangent / secant by the sign pattern $-$, $+$, $-$ (square first).',
        },
      },
      {
        id: 'trigsub1-why-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why does plain $u$-substitution fail on $\\displaystyle\\int \\frac{dx}{\\sqrt{9 - x^2}}$?',
              options: [
                'The derivative of $9 - x^2$ (an $x$ term) does not appear in the numerator to substitute',
                'The integrand has no antiderivative',
                'Square roots can never be integrated',
                'The constant $9$ is not a perfect square',
              ],
              correctAnswer: 0,
              explanation: 'A $u$-sub needs $du = -2x\\,dx$ available. With only $dx$ on top and no $x$ factor, there is nothing to absorb into $du$, so the radical never simplifies. Trig substitution sidesteps this.',
            },
            {
              question: 'After substituting $x = a\\sin\\theta$, the radical $\\sqrt{a^2 - x^2}$ simplifies to:',
              options: ['$a\\cos\\theta$', '$a\\sin\\theta$', '$a\\sec\\theta$', '$a^2\\cos^2\\theta$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{a^2 - a^2\\sin^2\\theta} = \\sqrt{a^2(1-\\sin^2\\theta)} = \\sqrt{a^2\\cos^2\\theta} = a\\cos\\theta$ (taking $\\cos\\theta \\ge 0$ on the principal range).',
            },
          ],
        },
      },
      {
        id: 'trigsub1-find-a-drill',
        type: 'input-boxes' as const,
        content: `**Read Off the Constant $a$** 🧮

In each radical, $a$ is the **square root** of the constant. Enter $a$.

**1)** $\\sqrt{64 - x^2}:\\quad a = \\,?$
**2)** $\\sqrt{x^2 + 81}:\\quad a = \\,?$
**3)** $\\sqrt{x^2 - 121}:\\quad a = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '9', '11'],
          hint1: 'The form is $a^2 \\pm x^2$ or $x^2 - a^2$, so $a^2$ is the bare number.',
          hint2: 'Take the square root of the constant: $\\sqrt{64}$, $\\sqrt{81}$, $\\sqrt{121}$.',
          hint3: '$\\sqrt{64} = 8$, $\\sqrt{81} = 9$, $\\sqrt{121} = 11$.',
          explanation: '1) $a = 8$.  2) $a = 9$.  3) $a = 11$. Always use $a = \\sqrt{\\text{constant}}$, never the constant itself.',
        },
      },
      {
        id: 'trigsub1-close',
        type: 'text' as const,
        content: `## What's Ahead

You now know the trigger (a Pythagorean radical) and the three substitutions. The rest of the lesson builds the full procedure:

- **Part 2** — the universal 5-step procedure and how to handle $dx$.
- **Parts 3–5** — one part for each case: sine, tangent, secant.
- **Part 6** — reference triangles for back-substitution and definite integrals.
- **Part 7** — mixed mastery practice and an Exit Quiz.

> 💡 The single most important habit: after you integrate in $\\theta$, you **must** convert back to $x$. Part 6 makes that automatic with a right-triangle picture.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'trig-substitution',
    sections: [
      {
        id: 'trigsub2-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Substitution

**Part 2 of 7 — The Universal Procedure**

---

> 🔑 **The Plan:** Every trig-substitution problem follows the same five steps. Master the steps once and the three cases are just variations on a theme.`,
      },
      {
        id: 'trigsub2-steps',
        type: 'text' as const,
        content: `## The Five Steps

1. **Match** the radical to one of the three forms and read off $a$.
2. **Substitute** $x$ with the trig function — and replace $dx$ too.
3. **Simplify** the radical using the matching Pythagorean identity.
4. **Integrate** the resulting trig integral in $\\theta$.
5. **Back-substitute** to return the answer to $x$ (Part 6).

The step students forget is replacing $dx$. The substitution for $x$ **forces** a matching $dx$:

| If $x =$ | then $dx =$ |
|----------|-------------|
| $a\\sin\\theta$ | $a\\cos\\theta\\,d\\theta$ |
| $a\\tan\\theta$ | $a\\sec^2\\theta\\,d\\theta$ |
| $a\\sec\\theta$ | $a\\sec\\theta\\tan\\theta\\,d\\theta$ |

> ⚠️ Each $dx$ is just the derivative of the $x$-substitution. Differentiate $x = a\\sin\\theta$ to get $\\dfrac{dx}{d\\theta} = a\\cos\\theta$, hence $dx = a\\cos\\theta\\,d\\theta$.`,
      },
      {
        id: 'trigsub2-dx-drill',
        type: 'dropdown-select' as const,
        content: `**Find the Matching $dx$** 🔽

For each substitution, choose the correct differential $dx$.`,
        exercise: {
          dropdowns: [
            { label: 'If $x = 3\\sin\\theta$, then $dx =$', options: ['$3\\cos\\theta\\,d\\theta$', '$3\\sin\\theta\\,d\\theta$', '$-3\\cos\\theta\\,d\\theta$', '$3\\sec^2\\theta\\,d\\theta$'] },
            { label: 'If $x = 2\\tan\\theta$, then $dx =$', options: ['$2\\sec^2\\theta\\,d\\theta$', '$2\\sec\\theta\\tan\\theta\\,d\\theta$', '$2\\sec\\theta\\,d\\theta$', '$2\\tan^2\\theta\\,d\\theta$'] },
            { label: 'If $x = 5\\sec\\theta$, then $dx =$', options: ['$5\\sec\\theta\\tan\\theta\\,d\\theta$', '$5\\sec^2\\theta\\,d\\theta$', '$5\\tan\\theta\\,d\\theta$', '$5\\sec\\theta\\,d\\theta$'] },
          ],
          correctAnswers: ['$3\\cos\\theta\\,d\\theta$', '$2\\sec^2\\theta\\,d\\theta$', '$5\\sec\\theta\\tan\\theta\\,d\\theta$'],
          hint1: 'Differentiate the right side with respect to $\\theta$, then multiply by $d\\theta$.',
          hint2: '$\\frac{d}{d\\theta}\\sin\\theta = \\cos\\theta$, $\\frac{d}{d\\theta}\\tan\\theta = \\sec^2\\theta$, $\\frac{d}{d\\theta}\\sec\\theta = \\sec\\theta\\tan\\theta$.',
          hint3: 'The leading constant $a$ carries through unchanged: $x=3\\sin\\theta \\Rightarrow dx = 3\\cos\\theta\\,d\\theta$, etc.',
          explanation: '$dx$ is just $\\frac{dx}{d\\theta}\\,d\\theta$. Differentiating $a\\sin\\theta$, $a\\tan\\theta$, $a\\sec\\theta$ gives $a\\cos\\theta$, $a\\sec^2\\theta$, $a\\sec\\theta\\tan\\theta$.',
        },
      },
      {
        id: 'trigsub2-walkthrough',
        type: 'text' as const,
        content: `## A First Full Walkthrough

Compute $\\displaystyle\\int \\frac{dx}{\\sqrt{9 - x^2}}$.

**Step 1 — Match.** $\\sqrt{9 - x^2}$ is $\\sqrt{a^2 - x^2}$ with $a = 3$. Use $x = 3\\sin\\theta$.

**Step 2 — Differential.** $dx = 3\\cos\\theta\\,d\\theta$.

**Step 3 — Simplify the radical.**
$$\\sqrt{9 - 9\\sin^2\\theta} = \\sqrt{9(1-\\sin^2\\theta)} = \\sqrt{9\\cos^2\\theta} = 3\\cos\\theta.$$

**Step 4 — Integrate.**
$$\\int \\frac{3\\cos\\theta\\,d\\theta}{3\\cos\\theta} = \\int 1\\,d\\theta = \\theta + C.$$

**Step 5 — Back-substitute.** From $x = 3\\sin\\theta$, $\\sin\\theta = \\dfrac{x}{3}$, so $\\theta = \\arcsin\\!\\left(\\dfrac{x}{3}\\right)$.

$$\\int \\frac{dx}{\\sqrt{9 - x^2}} = \\arcsin\\!\\left(\\frac{x}{3}\\right) + C.$$

> ✅ **Sanity check:** $\\dfrac{d}{dx}\\arcsin\\!\\left(\\dfrac{x}{3}\\right) = \\dfrac{1}{\\sqrt{1-(x/3)^2}}\\cdot\\dfrac{1}{3} = \\dfrac{1}{\\sqrt{9-x^2}}$. ✓`,
      },
      {
        id: 'trigsub2-order-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the walkthrough, after substituting, the integral became $\\int \\frac{3\\cos\\theta}{3\\cos\\theta}\\,d\\theta$. Why did everything cancel so neatly?',
              options: [
                'The $dx = 3\\cos\\theta\\,d\\theta$ on top matched the $3\\cos\\theta$ the radical produced on the bottom',
                'The constant $9$ was a perfect square',
                '$\\cos\\theta$ always cancels in trig integrals',
                'We multiplied numerator and denominator by $\\sec\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'The differential supplied a $3\\cos\\theta$ in the numerator and the simplified radical gave a $3\\cos\\theta$ in the denominator. Their ratio is $1$, leaving $\\int 1\\,d\\theta = \\theta$. The matching is exactly why the substitution is chosen.',
            },
            {
              question: 'Which step do students most often forget, breaking the whole problem?',
              options: [
                'Replacing $dx$ with the matching differential',
                'Writing the $+C$',
                'Reading the constant $a$',
                'Choosing sine versus cosine',
              ],
              correctAnswer: 0,
              explanation: 'If you swap $x$ but leave a bare $dx$, the integral is no longer equivalent. You must replace $dx$ by $a\\cos\\theta\\,d\\theta$ (or the tangent/secant version) every time.',
            },
          ],
        },
      },
      {
        id: 'trigsub2-radical-drill',
        type: 'input-boxes' as const,
        content: `**Simplify the Radical** 🧮

After the listed substitution, the radical $\\sqrt{a^2 \\pm x^2}$ becomes $k\\cdot(\\text{trig})$. Enter just the constant $k$ that comes out front.

**1)** $\\sqrt{16 - x^2}$ with $x = 4\\sin\\theta \\Rightarrow k\\cos\\theta,\\quad k = \\,?$
**2)** $\\sqrt{4 + x^2}$ with $x = 2\\tan\\theta \\Rightarrow k\\sec\\theta,\\quad k = \\,?$
**3)** $\\sqrt{x^2 - 36}$ with $x = 6\\sec\\theta \\Rightarrow k\\tan\\theta,\\quad k = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '6'],
          hint1: 'Factor the constant out of the radical first: $\\sqrt{16-16\\sin^2\\theta} = \\sqrt{16}\\,\\sqrt{1-\\sin^2\\theta}$.',
          hint2: '$\\sqrt{16}=4$, $\\sqrt{4}=2$, $\\sqrt{36}=6$. The constant $k$ is always $a$, the square root of the number.',
          hint3: '$\\sqrt{16-x^2}=4\\cos\\theta$; $\\sqrt{4+x^2}=2\\sec\\theta$; $\\sqrt{x^2-36}=6\\tan\\theta$.',
          explanation: 'In every case the radical collapses to $a$ times a single trig function, where $a=\\sqrt{\\text{constant}}$: $k = 4$, $2$, and $6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'trig-substitution',
    sections: [
      {
        id: 'trigsub3-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Substitution

**Part 3 of 7 — Case 1: $\\sqrt{a^2 - x^2}$ (Sine)**

---

> 🔑 **This Case:** Whenever you see $\\sqrt{a^2 - x^2}$, substitute $x = a\\sin\\theta$. The identity $1 - \\sin^2\\theta = \\cos^2\\theta$ turns the radical into $a\\cos\\theta$.`,
      },
      {
        id: 'trigsub3-setup',
        type: 'text' as const,
        content: `## The Sine Case at a Glance

| Quantity | Replacement |
|----------|-------------|
| $x$ | $a\\sin\\theta$ |
| $dx$ | $a\\cos\\theta\\,d\\theta$ |
| $\\sqrt{a^2 - x^2}$ | $a\\cos\\theta$ |

### Worked Example: $\\displaystyle\\int \\sqrt{4 - x^2}\\,dx$

Here $a = 2$, so $x = 2\\sin\\theta$, $dx = 2\\cos\\theta\\,d\\theta$, and $\\sqrt{4 - x^2} = 2\\cos\\theta$:

$$\\int 2\\cos\\theta\\cdot 2\\cos\\theta\\,d\\theta = \\int 4\\cos^2\\theta\\,d\\theta.$$

Use the power-reduction identity $\\cos^2\\theta = \\dfrac{1 + \\cos 2\\theta}{2}$:

$$\\int 4\\cdot\\frac{1+\\cos 2\\theta}{2}\\,d\\theta = \\int (2 + 2\\cos 2\\theta)\\,d\\theta = 2\\theta + \\sin 2\\theta + C.$$

> 💡 The $\\cos^2\\theta$ that appears in the sine case almost always needs the power-reduction identity. Keep it handy.`,
      },
      {
        id: 'trigsub3-finish',
        type: 'text' as const,
        content: `## Finishing the Back-Substitution

We had $2\\theta + \\sin 2\\theta + C$. Convert each piece to $x$ using $\\sin\\theta = \\dfrac{x}{2}$ (so $\\theta = \\arcsin\\frac{x}{2}$) and $\\cos\\theta = \\dfrac{\\sqrt{4 - x^2}}{2}$.

Use the double-angle identity $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$:

$$\\sin 2\\theta = 2\\cdot\\frac{x}{2}\\cdot\\frac{\\sqrt{4 - x^2}}{2} = \\frac{x\\sqrt{4 - x^2}}{2}.$$

Therefore
$$\\int \\sqrt{4 - x^2}\\,dx = 2\\arcsin\\!\\left(\\frac{x}{2}\\right) + \\frac{x\\sqrt{4 - x^2}}{2} + C.$$

> ✅ This matches the standard formula $\\displaystyle\\int \\sqrt{a^2 - x^2}\\,dx = \\frac{a^2}{2}\\arcsin\\frac{x}{a} + \\frac{x}{2}\\sqrt{a^2 - x^2} + C$ with $a = 2$.`,
      },
      {
        id: 'trigsub3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\displaystyle\\int \\frac{x^2}{\\sqrt{25 - x^2}}\\,dx$, the correct substitution is:',
              options: ['$x = 5\\sin\\theta$', '$x = 25\\sin\\theta$', '$x = 5\\tan\\theta$', '$x = 5\\sec\\theta$'],
              correctAnswer: 0,
              explanation: 'The radical $\\sqrt{25 - x^2}$ is $\\sqrt{a^2 - x^2}$ with $a = \\sqrt{25} = 5$, so $x = 5\\sin\\theta$. (Note $a = 5$, not $25$.)',
            },
            {
              question: 'Which identity is used right after substituting $\\cos^2\\theta$ shows up in the sine case?',
              options: [
                '$\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$',
                '$\\sin^2\\theta + \\cos^2\\theta = 1$',
                '$1 + \\tan^2\\theta = \\sec^2\\theta$',
                '$\\cos 2\\theta = 1 - 2\\sin^2\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'To integrate $\\cos^2\\theta$ you cannot integrate a squared trig directly; the power-reduction identity $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$ turns it into terms you can integrate.',
            },
          ],
        },
      },
      {
        id: 'trigsub3-known-integral',
        type: 'text' as const,
        content: `## A Worked Integral You'll See Often

$$\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\!\\left(\\frac{x}{a}\\right) + C.$$

Derivation (the engine behind it): with $x = a\\sin\\theta$, $dx = a\\cos\\theta\\,d\\theta$, and $\\sqrt{a^2 - x^2} = a\\cos\\theta$,

$$\\int \\frac{a\\cos\\theta\\,d\\theta}{a\\cos\\theta} = \\int d\\theta = \\theta + C = \\arcsin\\!\\left(\\frac{x}{a}\\right) + C.$$

> 🔑 Memorize the result, but understand the derivation — many integrals reduce to this after a little algebra.`,
      },
      {
        id: 'trigsub3-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Sine Case** 🔽

Fill in the pieces for $\\displaystyle\\int \\frac{dx}{\\sqrt{36 - x^2}}$.`,
        exercise: {
          dropdowns: [
            { label: 'Substitution:', options: ['$x = 6\\sin\\theta$', '$x = 6\\tan\\theta$', '$x = 6\\sec\\theta$', '$x = 36\\sin\\theta$'] },
            { label: 'Differential $dx =$', options: ['$6\\cos\\theta\\,d\\theta$', '$6\\sec^2\\theta\\,d\\theta$', '$6\\sec\\theta\\tan\\theta\\,d\\theta$', '$36\\cos\\theta\\,d\\theta$'] },
            { label: '$\\sqrt{36 - x^2}$ becomes:', options: ['$6\\cos\\theta$', '$6\\sec\\theta$', '$6\\tan\\theta$', '$36\\cos\\theta$'] },
          ],
          correctAnswers: ['$x = 6\\sin\\theta$', '$6\\cos\\theta\\,d\\theta$', '$6\\cos\\theta$'],
          hint1: '$36 - x^2$ is $a^2 - x^2$ with $a = \\sqrt{36} = 6$ — a sine case.',
          hint2: 'Differentiate $x = 6\\sin\\theta$: $dx = 6\\cos\\theta\\,d\\theta$.',
          hint3: '$\\sqrt{36 - 36\\sin^2\\theta} = \\sqrt{36\\cos^2\\theta} = 6\\cos\\theta$.',
          explanation: 'Sine case with $a=6$: $x = 6\\sin\\theta$, $dx = 6\\cos\\theta\\,d\\theta$, and the radical becomes $6\\cos\\theta$. The integral then reduces to $\\int d\\theta$.',
        },
      },
      {
        id: 'trigsub3-drill',
        type: 'input-boxes' as const,
        content: `**Sine-Case Drill** 🧮

Use $\\displaystyle\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a} + C$ to fill in each blank.

**1)** $\\displaystyle\\int \\frac{dx}{\\sqrt{49 - x^2}} = \\arcsin\\frac{x}{a} + C.$  What is $a$?
**2)** $\\displaystyle\\int_{0}^{2} \\frac{dx}{\\sqrt{4 - x^2}} = \\frac{\\pi}{n}.$  What is $n$?  *(an integer)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['7', '2'],
          hint1: 'For (1), $a = \\sqrt{49}$.',
          hint2: 'For (2), the antiderivative is $\\arcsin\\frac{x}{2}$. Evaluate from $0$ to $2$.',
          hint3: '$\\arcsin\\frac{2}{2} - \\arcsin\\frac{0}{2} = \\arcsin 1 - \\arcsin 0 = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$, so $n = 2$.',
          explanation: '1) $a = 7$.  2) The antiderivative $\\arcsin\\frac{x}{2}$ gives $\\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$, so $n = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'trig-substitution',
    sections: [
      {
        id: 'trigsub4-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Substitution

**Part 4 of 7 — Case 2: $\\sqrt{a^2 + x^2}$ (Tangent)**

---

> 🔑 **This Case:** Whenever you see $\\sqrt{a^2 + x^2}$ — or even $a^2 + x^2$ with no root — substitute $x = a\\tan\\theta$. The identity $1 + \\tan^2\\theta = \\sec^2\\theta$ turns the radical into $a\\sec\\theta$.`,
      },
      {
        id: 'trigsub4-setup',
        type: 'text' as const,
        content: `## The Tangent Case at a Glance

| Quantity | Replacement |
|----------|-------------|
| $x$ | $a\\tan\\theta$ |
| $dx$ | $a\\sec^2\\theta\\,d\\theta$ |
| $\\sqrt{a^2 + x^2}$ | $a\\sec\\theta$ |

### The Cornerstone Integral: $\\displaystyle\\int \\frac{dx}{a^2 + x^2}$

With $x = a\\tan\\theta$ and $dx = a\\sec^2\\theta\\,d\\theta$, the denominator becomes $a^2 + a^2\\tan^2\\theta = a^2(1 + \\tan^2\\theta) = a^2\\sec^2\\theta$:

$$\\int \\frac{a\\sec^2\\theta\\,d\\theta}{a^2\\sec^2\\theta} = \\int \\frac{1}{a}\\,d\\theta = \\frac{1}{a}\\theta + C = \\frac{1}{a}\\arctan\\!\\left(\\frac{x}{a}\\right) + C.$$

> 🔑 **Memorize:** $\\displaystyle\\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C$. Note the $\\frac{1}{a}$ out front — a very common slip is to forget it.`,
      },
      {
        id: 'trigsub4-arctan-drill',
        type: 'input-boxes' as const,
        content: `**Arctangent Drill** 🧮

Apply $\\displaystyle\\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C$.

**1)** $\\displaystyle\\int \\frac{dx}{9 + x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C.$  What is $a$?
**2)** $\\displaystyle\\int_{0}^{3} \\frac{dx}{9 + x^2} = \\frac{\\pi}{n}.$  What is $n$?  *(an integer)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '12'],
          hint1: 'For (1), $9 = a^2$, so $a = 3$.',
          hint2: 'The antiderivative is $\\frac{1}{3}\\arctan\\frac{x}{3}$. Evaluate from $0$ to $3$.',
          hint3: '$\\frac{1}{3}\\left(\\arctan\\frac{3}{3} - \\arctan 0\\right) = \\frac{1}{3}\\left(\\frac{\\pi}{4} - 0\\right) = \\frac{\\pi}{12}$, so $n = 12$.',
          explanation: '1) $a = 3$.  2) $\\frac{1}{3}\\arctan\\frac{x}{3}\\Big|_0^3 = \\frac{1}{3}\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{12}$, so $n = 12$.',
        },
      },
      {
        id: 'trigsub4-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2 + 1}}$

Here $a = 1$, so $x = \\tan\\theta$, $dx = \\sec^2\\theta\\,d\\theta$, and $\\sqrt{x^2 + 1} = \\sec\\theta$:

$$\\int \\frac{\\sec^2\\theta\\,d\\theta}{\\sec\\theta} = \\int \\sec\\theta\\,d\\theta = \\ln\\left|\\sec\\theta + \\tan\\theta\\right| + C.$$

**Back-substitute.** From $x = \\tan\\theta$ we read $\\tan\\theta = x$ and $\\sec\\theta = \\sqrt{x^2 + 1}$ (the simplified radical). So

$$\\int \\frac{dx}{\\sqrt{x^2 + 1}} = \\ln\\left|\\sqrt{x^2 + 1} + x\\right| + C.$$

> 💡 The tangent case very often produces $\\displaystyle\\int \\sec\\theta\\,d\\theta = \\ln|\\sec\\theta + \\tan\\theta| + C$. It is worth memorizing that secant integral cold.`,
      },
      {
        id: 'trigsub4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\int \\frac{dx}{4 + x^2}$.',
              options: [
                '$\\frac{1}{2}\\arctan\\frac{x}{2} + C$',
                '$\\arctan\\frac{x}{2} + C$',
                '$\\frac{1}{2}\\arctan(2x) + C$',
                '$2\\arctan\\frac{x}{2} + C$',
              ],
              correctAnswer: 0,
              explanation: 'Here $a^2 = 4$ so $a = 2$. The formula $\\frac{1}{a}\\arctan\\frac{x}{a}$ gives $\\frac{1}{2}\\arctan\\frac{x}{2} + C$. Dropping the $\\frac{1}{2}$ is the classic error.',
            },
            {
              question: 'In the tangent case, $\\sqrt{a^2 + x^2}$ simplifies to $a\\sec\\theta$ because:',
              options: [
                '$a^2 + a^2\\tan^2\\theta = a^2(1 + \\tan^2\\theta) = a^2\\sec^2\\theta$',
                '$1 - \\tan^2\\theta = \\sec^2\\theta$',
                '$\\tan^2\\theta = \\sec^2\\theta + 1$',
                '$a^2 + x^2$ is already a perfect square',
              ],
              correctAnswer: 0,
              explanation: 'Substituting $x = a\\tan\\theta$ gives $a^2 + a^2\\tan^2\\theta = a^2(1+\\tan^2\\theta)$, and the Pythagorean identity $1 + \\tan^2\\theta = \\sec^2\\theta$ makes this $a^2\\sec^2\\theta$, whose square root is $a\\sec\\theta$.',
            },
          ],
        },
      },
      {
        id: 'trigsub4-pick-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Tangent Case** 🔽

Fill in the pieces for $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2 + 16}}$.`,
        exercise: {
          dropdowns: [
            { label: 'Substitution:', options: ['$x = 4\\tan\\theta$', '$x = 4\\sin\\theta$', '$x = 4\\sec\\theta$', '$x = 16\\tan\\theta$'] },
            { label: 'Differential $dx =$', options: ['$4\\sec^2\\theta\\,d\\theta$', '$4\\cos\\theta\\,d\\theta$', '$4\\sec\\theta\\tan\\theta\\,d\\theta$', '$16\\sec^2\\theta\\,d\\theta$'] },
            { label: '$\\sqrt{x^2 + 16}$ becomes:', options: ['$4\\sec\\theta$', '$4\\cos\\theta$', '$4\\tan\\theta$', '$16\\sec\\theta$'] },
          ],
          correctAnswers: ['$x = 4\\tan\\theta$', '$4\\sec^2\\theta\\,d\\theta$', '$4\\sec\\theta$'],
          hint1: '$x^2 + 16$ is $a^2 + x^2$ with $a = \\sqrt{16} = 4$, so it is a tangent case.',
          hint2: 'Differentiate $x = 4\\tan\\theta$: $dx = 4\\sec^2\\theta\\,d\\theta$.',
          hint3: '$\\sqrt{16 + 16\\tan^2\\theta} = \\sqrt{16\\sec^2\\theta} = 4\\sec\\theta$.',
          explanation: 'Tangent case with $a=4$: $x = 4\\tan\\theta$, $dx = 4\\sec^2\\theta\\,d\\theta$, and the radical becomes $4\\sec\\theta$. The integral reduces to $\\int \\sec\\theta\\,d\\theta$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'trig-substitution',
    sections: [
      {
        id: 'trigsub5-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Substitution

**Part 5 of 7 — Case 3: $\\sqrt{x^2 - a^2}$ (Secant)**

---

> 🔑 **This Case:** Whenever you see $\\sqrt{x^2 - a^2}$, substitute $x = a\\sec\\theta$. The identity $\\sec^2\\theta - 1 = \\tan^2\\theta$ turns the radical into $a\\tan\\theta$.`,
      },
      {
        id: 'trigsub5-setup',
        type: 'text' as const,
        content: `## The Secant Case at a Glance

| Quantity | Replacement |
|----------|-------------|
| $x$ | $a\\sec\\theta$ |
| $dx$ | $a\\sec\\theta\\tan\\theta\\,d\\theta$ |
| $\\sqrt{x^2 - a^2}$ | $a\\tan\\theta$ |

Why the radical collapses: with $x = a\\sec\\theta$,
$$x^2 - a^2 = a^2\\sec^2\\theta - a^2 = a^2(\\sec^2\\theta - 1) = a^2\\tan^2\\theta,$$
so $\\sqrt{x^2 - a^2} = a\\tan\\theta$.

> ⚠️ The order matters here: it is **$x^2$ minus $a^2$** (variable first). If the constant comes first, $\\sqrt{a^2 - x^2}$, you are back in the **sine** case from Part 3.`,
      },
      {
        id: 'trigsub5-which-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which radical calls for the secant substitution $x = a\\sec\\theta$?',
              options: ['$\\sqrt{x^2 - 9}$', '$\\sqrt{9 - x^2}$', '$\\sqrt{4 + x^2}$', '$\\sqrt{x^2 + 9}$'],
              correctAnswer: 0,
              explanation: 'Secant is for $\\sqrt{x^2 - a^2}$ (variable squared minus constant squared). $\\sqrt{9 - x^2}$ is sine, and the two $+$ forms are tangent.',
            },
            {
              question: 'For $\\sqrt{x^2 - 9}$ with $x = 3\\sec\\theta$, the radical becomes:',
              options: ['$3\\tan\\theta$', '$3\\sec\\theta$', '$3\\cos\\theta$', '$9\\tan\\theta$'],
              correctAnswer: 0,
              explanation: '$x^2 - 9 = 9\\sec^2\\theta - 9 = 9(\\sec^2\\theta - 1) = 9\\tan^2\\theta$, so $\\sqrt{x^2 - 9} = 3\\tan\\theta$.',
            },
          ],
        },
      },
      {
        id: 'trigsub5-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2 - 9}}$

With $a = 3$: $x = 3\\sec\\theta$, $dx = 3\\sec\\theta\\tan\\theta\\,d\\theta$, and $\\sqrt{x^2 - 9} = 3\\tan\\theta$:

$$\\int \\frac{3\\sec\\theta\\tan\\theta\\,d\\theta}{3\\tan\\theta} = \\int \\sec\\theta\\,d\\theta = \\ln\\left|\\sec\\theta + \\tan\\theta\\right| + C.$$

**Back-substitute.** From $x = 3\\sec\\theta$, $\\sec\\theta = \\dfrac{x}{3}$, and the radical gave $\\tan\\theta = \\dfrac{\\sqrt{x^2 - 9}}{3}$:

$$\\ln\\left|\\frac{x}{3} + \\frac{\\sqrt{x^2 - 9}}{3}\\right| + C = \\ln\\left|x + \\sqrt{x^2 - 9}\\right| + C_1.$$

> 💡 The $\\frac{1}{3}$ inside the log is a constant factor; $\\ln\\frac{1}{3}$ gets absorbed into the constant of integration, which is why it can be dropped (renaming $C$ to $C_1$).`,
      },
      {
        id: 'trigsub5-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Secant Case** 🔽

Fill in the pieces for $\\displaystyle\\int \\frac{\\sqrt{x^2 - 4}}{x}\\,dx$.`,
        exercise: {
          dropdowns: [
            { label: 'Substitution:', options: ['$x = 2\\sec\\theta$', '$x = 2\\sin\\theta$', '$x = 2\\tan\\theta$', '$x = 4\\sec\\theta$'] },
            { label: 'Differential $dx =$', options: ['$2\\sec\\theta\\tan\\theta\\,d\\theta$', '$2\\sec^2\\theta\\,d\\theta$', '$2\\cos\\theta\\,d\\theta$', '$4\\sec\\theta\\tan\\theta\\,d\\theta$'] },
            { label: '$\\sqrt{x^2 - 4}$ becomes:', options: ['$2\\tan\\theta$', '$2\\sec\\theta$', '$2\\cos\\theta$', '$4\\tan\\theta$'] },
          ],
          correctAnswers: ['$x = 2\\sec\\theta$', '$2\\sec\\theta\\tan\\theta\\,d\\theta$', '$2\\tan\\theta$'],
          hint1: '$x^2 - 4$ is $x^2 - a^2$ with $a = \\sqrt{4} = 2$ — a secant case.',
          hint2: 'Differentiate $x = 2\\sec\\theta$: $dx = 2\\sec\\theta\\tan\\theta\\,d\\theta$.',
          hint3: '$\\sqrt{4\\sec^2\\theta - 4} = \\sqrt{4\\tan^2\\theta} = 2\\tan\\theta$.',
          explanation: 'Secant case with $a=2$: $x = 2\\sec\\theta$, $dx = 2\\sec\\theta\\tan\\theta\\,d\\theta$, and $\\sqrt{x^2 - 4} = 2\\tan\\theta$.',
        },
      },
      {
        id: 'trigsub5-drill',
        type: 'input-boxes' as const,
        content: `**Secant-Case Drill** 🧮

In $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2 - a^2}}$, identify the pieces.

**1)** For $\\sqrt{x^2 - 25}$, the substitution is $x = a\\sec\\theta$. What is $a$?
**2)** After substituting, $\\displaystyle\\int \\frac{dx}{\\sqrt{x^2 - 25}}$ reduces to $\\displaystyle\\int \\sec\\theta\\,d\\theta$ times what constant? *(enter the constant, e.g. 1)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '1'],
          hint1: 'For (1), $25 = a^2$ so $a = \\sqrt{25}$.',
          hint2: 'For (2): $dx = 5\\sec\\theta\\tan\\theta\\,d\\theta$ and $\\sqrt{x^2-25} = 5\\tan\\theta$. The $5\\tan\\theta$ cancels, and $\\frac{5}{5}=1$.',
          hint3: '$\\int\\frac{5\\sec\\theta\\tan\\theta\\,d\\theta}{5\\tan\\theta} = \\int \\sec\\theta\\,d\\theta$, so the constant out front is $1$.',
          explanation: '1) $a = 5$.  2) The numerator $5\\sec\\theta\\tan\\theta$ over the radical $5\\tan\\theta$ leaves exactly $\\sec\\theta$, so the constant is $1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'trig-substitution',
    sections: [
      {
        id: 'trigsub6-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Substitution

**Part 6 of 7 — Reference Triangles & Definite Integrals**

---

> 🔑 **The Final Skill:** After integrating in $\\theta$, you must express the answer back in $x$. A **reference right triangle** built from the substitution makes every trig value fall out instantly — and for definite integrals you can change the limits to $\\theta$ and skip back-substitution entirely.`,
      },
      {
        id: 'trigsub6-triangle',
        type: 'text' as const,
        content: `## Building the Reference Triangle

Each substitution is a statement about a right triangle (label sides so the substitution holds, then use the Pythagorean theorem for the third side):

| Substitution | Read it as | Opposite | Adjacent | Hypotenuse |
|--------------|-----------|----------|----------|------------|
| $x = a\\sin\\theta$ | $\\sin\\theta = \\dfrac{x}{a}$ | $x$ | $\\sqrt{a^2 - x^2}$ | $a$ |
| $x = a\\tan\\theta$ | $\\tan\\theta = \\dfrac{x}{a}$ | $x$ | $a$ | $\\sqrt{a^2 + x^2}$ |
| $x = a\\sec\\theta$ | $\\sec\\theta = \\dfrac{x}{a}$ | $\\sqrt{x^2 - a^2}$ | $a$ | $x$ |

Once the triangle is labeled, **any** trig function of $\\theta$ is just a ratio of sides — no memorizing back-substitution formulas.

> 💡 Example (sine case, $a = 3$): $\\sin\\theta = \\frac{x}{3}$ puts $x$ opposite and $3$ as the hypotenuse, so the adjacent side is $\\sqrt{9 - x^2}$ and $\\cos\\theta = \\frac{\\sqrt{9 - x^2}}{3}$, $\\tan\\theta = \\frac{x}{\\sqrt{9 - x^2}}$.`,
      },
      {
        id: 'trigsub6-triangle-drill',
        type: 'dropdown-select' as const,
        content: `**Read the Triangle** 🔽

You used $x = 2\\tan\\theta$ (so $\\tan\\theta = \\frac{x}{2}$, hypotenuse $\\sqrt{x^2 + 4}$). Read each value off the triangle.`,
        exercise: {
          dropdowns: [
            { label: '$\\sec\\theta =$', options: ['$\\frac{\\sqrt{x^2 + 4}}{2}$', '$\\frac{2}{\\sqrt{x^2 + 4}}$', '$\\frac{x}{2}$', '$\\frac{\\sqrt{x^2 + 4}}{x}$'] },
            { label: '$\\sin\\theta =$', options: ['$\\frac{x}{\\sqrt{x^2 + 4}}$', '$\\frac{2}{\\sqrt{x^2 + 4}}$', '$\\frac{x}{2}$', '$\\frac{\\sqrt{x^2 + 4}}{2}$'] },
            { label: '$\\cos\\theta =$', options: ['$\\frac{2}{\\sqrt{x^2 + 4}}$', '$\\frac{x}{\\sqrt{x^2 + 4}}$', '$\\frac{\\sqrt{x^2 + 4}}{2}$', '$\\frac{2}{x}$'] },
          ],
          correctAnswers: ['$\\frac{\\sqrt{x^2 + 4}}{2}$', '$\\frac{x}{\\sqrt{x^2 + 4}}$', '$\\frac{2}{\\sqrt{x^2 + 4}}$'],
          hint1: 'Label the triangle: opposite $= x$, adjacent $= 2$, hypotenuse $= \\sqrt{x^2 + 4}$.',
          hint2: '$\\sec\\theta = \\frac{\\text{hyp}}{\\text{adj}}$, $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$.',
          hint3: '$\\sec\\theta = \\frac{\\sqrt{x^2+4}}{2}$, $\\sin\\theta = \\frac{x}{\\sqrt{x^2+4}}$, $\\cos\\theta = \\frac{2}{\\sqrt{x^2+4}}$.',
          explanation: 'With opposite $x$, adjacent $2$, hypotenuse $\\sqrt{x^2+4}$: $\\sec = \\text{hyp}/\\text{adj}$, $\\sin = \\text{opp}/\\text{hyp}$, $\\cos = \\text{adj}/\\text{hyp}$.',
        },
      },
      {
        id: 'trigsub6-definite',
        type: 'text' as const,
        content: `## Definite Integrals: Change the Limits

For a definite integral you can convert the $x$-limits into $\\theta$-limits and never back-substitute.

### Example: $\\displaystyle\\int_{0}^{3} \\frac{dx}{\\sqrt{9 - x^2}}$

Use $x = 3\\sin\\theta$, $dx = 3\\cos\\theta\\,d\\theta$, $\\sqrt{9 - x^2} = 3\\cos\\theta$.

**Change limits** (solve $\\sin\\theta = \\frac{x}{3}$):
- $x = 0 \\Rightarrow \\sin\\theta = 0 \\Rightarrow \\theta = 0$
- $x = 3 \\Rightarrow \\sin\\theta = 1 \\Rightarrow \\theta = \\dfrac{\\pi}{2}$

$$\\int_{0}^{\\pi/2} \\frac{3\\cos\\theta\\,d\\theta}{3\\cos\\theta} = \\int_{0}^{\\pi/2} d\\theta = \\frac{\\pi}{2}.$$

> ⚠️ If you change the limits, do **not** convert back to $x$ at the end — evaluate directly at the $\\theta$-limits. Doing both is double work and a common error.`,
      },
      {
        id: 'trigsub6-definite-drill',
        type: 'input-boxes' as const,
        content: `**Definite Integral Drill** 🧮

Evaluate $\\displaystyle\\int_{0}^{2} \\frac{dx}{\\sqrt{16 - x^2}}$ using $x = 4\\sin\\theta$.

**1)** New upper limit: $x = 2 \\Rightarrow \\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{m}.$  What is $m$?
**2)** The integral equals $\\frac{\\pi}{p}$. What is $p$?  *(an integer)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '6'],
          hint1: '$\\sin\\theta = \\frac{2}{4} = \\frac{1}{2}$, and $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, so $\\theta = \\frac{\\pi}{6}$.',
          hint2: 'The integrand reduces to $\\int_0^{\\pi/6} d\\theta$ (the $4\\cos\\theta$ terms cancel).',
          hint3: '$\\int_0^{\\pi/6} d\\theta = \\frac{\\pi}{6} - 0 = \\frac{\\pi}{6}$, so both $m$ and $p$ equal $6$.',
          explanation: '1) $\\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}$, so $m = 6$.  2) $\\int_0^{\\pi/6} d\\theta = \\frac{\\pi}{6}$, so $p = 6$. (Equivalently $\\arcsin\\frac{2}{4} = \\frac{\\pi}{6}$.)',
        },
      },
      {
        id: 'trigsub6-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You used $x = 5\\sin\\theta$ and need $\\cos\\theta$ in terms of $x$. From the reference triangle, $\\cos\\theta =$',
              options: [
                '$\\frac{\\sqrt{25 - x^2}}{5}$',
                '$\\frac{x}{5}$',
                '$\\frac{5}{\\sqrt{25 - x^2}}$',
                '$\\frac{\\sqrt{25 + x^2}}{5}$',
              ],
              correctAnswer: 0,
              explanation: '$\\sin\\theta = \\frac{x}{5}$ means opposite $= x$, hypotenuse $= 5$, so adjacent $= \\sqrt{25 - x^2}$ and $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{\\sqrt{25 - x^2}}{5}$.',
            },
            {
              question: 'When evaluating a definite integral by changing the limits to $\\theta$, the final step is to:',
              options: [
                'Evaluate the $\\theta$-antiderivative at the new $\\theta$-limits — no back-substitution needed',
                'Convert the answer back to $x$ and then plug in the original $x$-limits',
                'Add the $x$-limits and the $\\theta$-limits together',
                'Always multiply the result by $a$',
              ],
              correctAnswer: 0,
              explanation: 'Once the limits are in $\\theta$, just evaluate the $\\theta$-antiderivative at those limits. Converting back to $x$ as well is redundant and error-prone.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'trig-substitution',
    sections: [
      {
        id: 'trigsub7-intro',
        type: 'text' as const,
        content: `# 📐 Trigonometric Substitution

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) recognize the three Pythagorean radicals, (2) substitute correctly including $dx$, (3) simplify with the right identity, (4) integrate, and (5) back-substitute with a reference triangle. Time to put it all together.`,
      },
      {
        id: 'trigsub7-reference',
        type: 'text' as const,
        content: `## Master Reference Table

| Radical | Substitution | $dx$ | Radical becomes | Triangle |
|---------|-------------|------|-----------------|----------|
| $\\sqrt{a^2 - x^2}$ | $x = a\\sin\\theta$ | $a\\cos\\theta\\,d\\theta$ | $a\\cos\\theta$ | opp $x$, hyp $a$ |
| $\\sqrt{a^2 + x^2}$ | $x = a\\tan\\theta$ | $a\\sec^2\\theta\\,d\\theta$ | $a\\sec\\theta$ | opp $x$, adj $a$ |
| $\\sqrt{x^2 - a^2}$ | $x = a\\sec\\theta$ | $a\\sec\\theta\\tan\\theta\\,d\\theta$ | $a\\tan\\theta$ | adj $a$, hyp $x$ |

**Three standard results worth memorizing:**
$$\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a} + C, \\qquad \\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C,$$
$$\\int \\frac{dx}{\\sqrt{x^2 - a^2}} = \\ln\\left|x + \\sqrt{x^2 - a^2}\\right| + C.$$

> ⚠️ **Two perennial slips:** forgetting the $\\frac{1}{a}$ in the arctangent, and forgetting to replace $dx$.`,
      },
      {
        id: 'trigsub7-choose-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Substitution** 🔽

Pick the correct trig substitution for each integral.`,
        exercise: {
          dropdowns: [
            { label: '$\\int \\sqrt{36 - x^2}\\,dx$', options: ['$x = 6\\sin\\theta$', '$x = 6\\tan\\theta$', '$x = 6\\sec\\theta$', '$x = 36\\sin\\theta$'] },
            { label: '$\\int \\frac{dx}{(x^2 + 100)^{3/2}}$', options: ['$x = 10\\tan\\theta$', '$x = 10\\sin\\theta$', '$x = 10\\sec\\theta$', '$x = 100\\tan\\theta$'] },
            { label: '$\\int \\frac{\\sqrt{x^2 - 1}}{x}\\,dx$', options: ['$x = \\sec\\theta$', '$x = \\sin\\theta$', '$x = \\tan\\theta$', '$x = \\cos\\theta$'] },
          ],
          correctAnswers: ['$x = 6\\sin\\theta$', '$x = 10\\tan\\theta$', '$x = \\sec\\theta$'],
          hint1: 'Identify the form: $a^2 - x^2$ (sine), $a^2 + x^2$ (tangent), or $x^2 - a^2$ (secant).',
          hint2: 'The constant $a$ is the square root: $\\sqrt{36}=6$, $\\sqrt{100}=10$, $\\sqrt{1}=1$.',
          hint3: '$36 - x^2 \\to 6\\sin\\theta$; $x^2 + 100 \\to 10\\tan\\theta$; $x^2 - 1 \\to \\sec\\theta$ (with $a=1$).',
          explanation: 'Match sign pattern to function and take $a=\\sqrt{\\text{constant}}$: sine for $36-x^2$, tangent for $x^2+100$, secant for $x^2-1$.',
        },
      },
      {
        id: 'trigsub7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\displaystyle\\int \\frac{dx}{\\sqrt{1 - x^2}}$.',
              options: ['$\\arcsin x + C$', '$\\arctan x + C$', '$\\ln|x + \\sqrt{1 - x^2}| + C$', '$\\frac{1}{2}\\arcsin x + C$'],
              correctAnswer: 0,
              explanation: 'This is the sine case with $a = 1$: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a} + C = \\arcsin x + C$.',
            },
            {
              question: 'Evaluate $\\displaystyle\\int \\frac{dx}{1 + x^2}$.',
              options: ['$\\arctan x + C$', '$\\arcsin x + C$', '$\\frac{1}{2}\\arctan x + C$', '$\\ln|1 + x^2| + C$'],
              correctAnswer: 0,
              explanation: 'Tangent case with $a = 1$: $\\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C = \\arctan x + C$.',
            },
            {
              question: 'You set up $\\int \\frac{dx}{\\sqrt{x^2 - 16}}$ with $x = 4\\sec\\theta$. The integral reduces to:',
              options: ['$\\int \\sec\\theta\\,d\\theta$', '$\\int \\cos\\theta\\,d\\theta$', '$\\int \\tan\\theta\\,d\\theta$', '$\\int \\frac{1}{4}\\,d\\theta$'],
              correctAnswer: 0,
              explanation: '$dx = 4\\sec\\theta\\tan\\theta\\,d\\theta$ and $\\sqrt{x^2 - 16} = 4\\tan\\theta$. Their ratio is $\\frac{4\\sec\\theta\\tan\\theta}{4\\tan\\theta} = \\sec\\theta$, so the integral is $\\int \\sec\\theta\\,d\\theta$.',
            },
          ],
        },
      },
      {
        id: 'trigsub7-final-drill',
        type: 'input-boxes' as const,
        content: `**Final Setup Drill** 🧮

For $\\displaystyle\\int \\frac{dx}{x^2\\sqrt{x^2 - 9}}$ you choose $x = a\\sec\\theta$.

**1)** What is $a$?
**2)** After substituting, $\\sqrt{x^2 - 9}$ becomes $k\\tan\\theta$. What is $k$?
**3)** Evaluate $\\displaystyle\\int_{0}^{1} \\frac{dx}{1 + x^2} = \\frac{\\pi}{q}$. What is $q$?  *(an integer)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '3', '4'],
          hint1: 'For (1) and (2): $x^2 - 9$ means $a^2 = 9$, so $a = 3$, and $\\sqrt{x^2 - 9} = 3\\tan\\theta$.',
          hint2: 'For (3): $\\int \\frac{dx}{1 + x^2} = \\arctan x$. Evaluate from $0$ to $1$.',
          hint3: '$\\arctan 1 - \\arctan 0 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$, so $q = 4$.',
          explanation: '1) $a = 3$.  2) $\\sqrt{9\\sec^2\\theta - 9} = 3\\tan\\theta$, so $k = 3$.  3) $\\arctan x\\big|_0^1 = \\frac{\\pi}{4}$, so $q = 4$.',
        },
      },
      {
        id: 'trigsub7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which substitution best fits $\\displaystyle\\int \\frac{dx}{\\sqrt{49 + x^2}}$?',
              options: ['$x = 7\\tan\\theta$', '$x = 7\\sin\\theta$', '$x = 7\\sec\\theta$', '$x = 49\\tan\\theta$'],
              correctAnswer: 0,
              explanation: '$49 + x^2$ is the form $a^2 + x^2$ with $a = \\sqrt{49} = 7$, the tangent case, so $x = 7\\tan\\theta$.',
            },
            {
              question: 'After $x = a\\sin\\theta$, you get $\\int \\cos^2\\theta\\,d\\theta$. The correct next move is to:',
              options: [
                'Apply the power-reduction identity $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$',
                'Substitute $u = \\cos\\theta$',
                'Use $\\cos^2\\theta = 1 - \\sin^2\\theta$ and stop',
                'Differentiate instead of integrate',
              ],
              correctAnswer: 0,
              explanation: 'You cannot integrate $\\cos^2\\theta$ directly. The power-reduction identity rewrites it as $\\frac{1}{2} + \\frac{1}{2}\\cos 2\\theta$, both of which integrate easily.',
            },
            {
              question: 'Evaluate $\\displaystyle\\int_{0}^{1} \\frac{dx}{\\sqrt{4 - x^2}}$.',
              options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$'],
              correctAnswer: 0,
              explanation: 'The antiderivative is $\\arcsin\\frac{x}{2}$. Evaluating: $\\arcsin\\frac{1}{2} - \\arcsin 0 = \\frac{\\pi}{6} - 0 = \\frac{\\pi}{6}$.',
            },
          ],
        },
      },
    ],
  },
]
