import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Quadratic Formula (Algebra 1).
 * Registry key: 'quadratic-formula-detailed-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'quadratic-formula-detailed-algebra1',
    sections: [
      {
        id: 'qf1-intro',
        type: 'text' as const,
        content: `# 🧮 The Quadratic Formula

**Part 1 of 5 — Standard Form & Identifying $a$, $b$, $c$**

---

### Topics in This Part

| Section |
|---------|
| What the Quadratic Formula Does |
| Standard Form: $ax^2 + bx + c = 0$ |
| Reading Off $a$, $b$, and $c$ |

> 🔑 **Key Concept:** The **quadratic formula** solves *every* quadratic equation. No matter how messy the numbers are — whole, fraction, or irrational — the formula always finds the solutions. But it only works once the equation is in **standard form** and you've correctly identified $a$, $b$, and $c$. That setup is Part 1.`,
      },
      {
        id: 'qf1-what',
        type: 'text' as const,
        content: `## What the Quadratic Formula Does

A **quadratic equation** is any equation you can write as:

$$ax^2 + bx + c = 0 \\qquad (a \\ne 0)$$

The solutions — the values of $x$ that make it true — are called the **roots** or **zeros**. The quadratic formula gives them directly:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

Other methods (factoring, completing the square) only work nicely on *some* quadratics. The quadratic formula works on **all** of them — that's why it's worth memorizing cold.

> 💡 **Where it comes from:** The formula is just *completing the square* done once, in general, on $ax^2+bx+c=0$. You don't have to re-derive it — but knowing it's not magic helps you trust it.`,
      },
      {
        id: 'qf1-standard',
        type: 'text' as const,
        content: `## Standard Form First

To use the formula you must have **zero on one side**:

$$ax^2 + bx + c = 0$$

If an equation isn't in this form, rearrange it first.

| Given equation | Standard form | $a$ | $b$ | $c$ |
|----------------|---------------|-----|-----|-----|
| $2x^2 + 5x - 3 = 0$ | already standard | $2$ | $5$ | $-3$ |
| $x^2 = 4x + 12$ | $x^2 - 4x - 12 = 0$ | $1$ | $-4$ | $-12$ |
| $3x^2 - 7 = 0$ | $3x^2 + 0x - 7 = 0$ | $3$ | $0$ | $-7$ |
| $-x^2 + 6x = 9$ | $-x^2 + 6x - 9 = 0$ | $-1$ | $6$ | $-9$ |

> ⚠️ **Watch the signs.** $a$, $b$, and $c$ carry their signs. In $x^2 - 4x - 12 = 0$, $b = -4$ (not $4$) and $c = -12$ (not $12$). Getting a sign wrong here breaks everything downstream.`,
      },
      {
        id: 'qf1-mc-standard',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $3x^2 - 7x + 2 = 0$, what are $a$, $b$, and $c$?',
              options: [
                '$a=3,\\; b=-7,\\; c=2$',
                '$a=3,\\; b=7,\\; c=2$',
                '$a=3,\\; b=-7,\\; c=-2$',
                '$a=-3,\\; b=-7,\\; c=2$',
              ],
              correctAnswer: 0,
              explanation: 'Read coefficients with their signs: $a=3$, $b=-7$ (the term is $-7x$), $c=2$. The equation is already in standard form.',
            },
            {
              question: 'Which equation is NOT yet in standard form?',
              options: [
                '$x^2 = 5x - 6$',
                '$2x^2 + x - 1 = 0$',
                '$x^2 - 9 = 0$',
                '$4x^2 + 3x + 7 = 0$',
              ],
              correctAnswer: 0,
              explanation: 'Standard form needs $0$ on the right. $x^2 = 5x - 6$ must be rearranged to $x^2 - 5x + 6 = 0$ first.',
            },
          ],
        },
      },
      {
        id: 'qf1-input-abc',
        type: 'input-boxes' as const,
        content: `**Identify the Coefficients** 🧮

First rewrite each equation in standard form $ax^2+bx+c=0$, then enter $a$, $b$, and $c$ **with their signs**.

For $x^2 = 6x - 8$:

**1)** $a = \\,?$
**2)** $b = \\,?$
**3)** $c = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-6', '8'],
          hint1: 'Move every term to the left: $x^2 - 6x + 8 = 0$.',
          hint2: 'The $x^2$ term has coefficient $1$, so $a = 1$.',
          hint3: 'The middle term is $-6x$ so $b = -6$; the constant is $+8$ so $c = 8$.',
          explanation: '$x^2 = 6x - 8 \\Rightarrow x^2 - 6x + 8 = 0$. So $a=1$, $b=-6$, $c=8$.',
        },
      },
      {
        id: 'qf1-recap',
        type: 'text' as const,
        content: `## Recap

To get ready for the formula:

1. **Rearrange** so one side is $0$: $ax^2 + bx + c = 0$.
2. **Read off** $a$, $b$, $c$ — keeping every sign.
3. A missing term means that coefficient is $0$ (e.g. $3x^2 - 7 = 0$ has $b = 0$).

> 🔑 You now have $a$, $b$, $c$ ready to drop into the formula. In Part 2 we'll learn the formula itself and plug them in carefully.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'quadratic-formula-detailed-algebra1',
    sections: [
      {
        id: 'qf2-intro',
        type: 'text' as const,
        content: `# 🧮 The Quadratic Formula

**Part 2 of 5 — Plugging Into the Formula**

---

> 🔑 **The Formula:** $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
> Say it out loud: "*negative $b$, plus or minus the square root of $b$ squared minus $4ac$, all over $2a$.*" Memorizing the rhythm makes it stick.`,
      },
      {
        id: 'qf2-steps',
        type: 'text' as const,
        content: `## The Substitution Routine

A clean process prevents sign errors:

1. **Identify** $a$, $b$, $c$ from standard form.
2. **Substitute** into $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, wrapping each value in parentheses.
3. **Simplify** under the radical *first* (that's the discriminant, $b^2 - 4ac$).
4. **Finish** the arithmetic, splitting into the $+$ case and the $-$ case.

### Worked Example: $x^2 + 5x + 6 = 0$

Here $a = 1$, $b = 5$, $c = 6$.

$$x = \\frac{-(5) \\pm \\sqrt{(5)^2 - 4(1)(6)}}{2(1)} = \\frac{-5 \\pm \\sqrt{25 - 24}}{2} = \\frac{-5 \\pm \\sqrt{1}}{2}$$

$$x = \\frac{-5 \\pm 1}{2} \\;\\Rightarrow\\; x = \\frac{-4}{2} = -2 \\;\\text{ or }\\; x = \\frac{-6}{2} = -3$$

> ✅ **Check:** $(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0$ ✓`,
      },
      {
        id: 'qf2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $2x^2 + 5x - 3 = 0$

Here $a = 2$, $b = 5$, $c = -3$. Notice $c$ is negative, so $-4ac$ becomes **positive**:

$$x = \\frac{-(5) \\pm \\sqrt{(5)^2 - 4(2)(-3)}}{2(2)} = \\frac{-5 \\pm \\sqrt{25 + 24}}{4} = \\frac{-5 \\pm \\sqrt{49}}{4}$$

$$x = \\frac{-5 \\pm 7}{4} \\;\\Rightarrow\\; x = \\frac{2}{4} = \\frac{1}{2} \\;\\text{ or }\\; x = \\frac{-12}{4} = -3$$

> ⚠️ **The $-4ac$ trap:** When $c$ is negative, $-4ac$ flips to a $+$. Here $-4(2)(-3) = +24$, so the discriminant *grows* to $49$. Mishandling this double-negative is the #1 quadratic-formula mistake.`,
      },
      {
        id: 'qf2-dropdown-sub',
        type: 'dropdown-select' as const,
        content: `**Build the Substitution** 🔽

You're solving $x^2 - 3x - 10 = 0$, so $a=1$, $b=-3$, $c=-10$. Choose each piece as you substitute into $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.`,
        exercise: {
          dropdowns: [
            { label: 'The $-b$ on top becomes:', options: ['$3$', '$-3$', '$6$', '$9$'] },
            { label: 'The discriminant $b^2 - 4ac$ is:', options: ['$49$', '$-31$', '$9 - 40$', '$29$'] },
            { label: 'The denominator $2a$ is:', options: ['$2$', '$1$', '$-2$', '$4$'] },
          ],
          correctAnswers: ['$3$', '$49$', '$2$'],
          hint1: '$-b = -(-3) = 3$. A negative $b$ becomes positive on top.',
          hint2: '$b^2 - 4ac = (-3)^2 - 4(1)(-10) = 9 + 40 = 49$.',
          hint3: '$2a = 2(1) = 2$.',
          explanation: '$x = \\dfrac{3 \\pm \\sqrt{49}}{2} = \\dfrac{3 \\pm 7}{2}$, giving $x = 5$ or $x = -2$.',
        },
      },
      {
        id: 'qf2-input-plug',
        type: 'input-boxes' as const,
        content: `**Plug and Simplify** 🧮

Solve $x^2 - 6x + 8 = 0$ with the quadratic formula ($a=1$, $b=-6$, $c=8$).

**1)** Value under the radical, $b^2 - 4ac = \\,?$
**2)** The smaller solution, $x = \\,?$
**3)** The larger solution, $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '4'],
          hint1: '$b^2 - 4ac = (-6)^2 - 4(1)(8) = 36 - 32 = 4$.',
          hint2: '$x = \\dfrac{6 \\pm \\sqrt{4}}{2} = \\dfrac{6 \\pm 2}{2}$.',
          hint3: '$\\dfrac{6-2}{2} = 2$ and $\\dfrac{6+2}{2} = 4$.',
          explanation: 'Discriminant $= 4$. $x = \\dfrac{6 \\pm 2}{2}$ gives $x = 2$ and $x = 4$. (Notice $-b = -(-6) = 6$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'quadratic-formula-detailed-algebra1',
    sections: [
      {
        id: 'qf3-intro',
        type: 'text' as const,
        content: `# 🧮 The Quadratic Formula

**Part 3 of 5 — The Discriminant: How Many Solutions?**

---

> 🔑 **The discriminant** is the part under the radical: $$\\Delta = b^2 - 4ac$$ Its *sign* tells you how many real solutions a quadratic has — before you finish solving.`,
      },
      {
        id: 'qf3-cases',
        type: 'text' as const,
        content: `## Reading the Discriminant

The discriminant $\\Delta = b^2 - 4ac$ lives inside $\\sqrt{\\;\\;}$. What you can take the square root of decides everything:

| Discriminant | Square root gives | Number of real solutions | Graph (parabola) |
|--------------|-------------------|--------------------------|------------------|
| $\\Delta > 0$ | a real, nonzero number | **two** distinct real solutions | crosses $x$-axis twice |
| $\\Delta = 0$ | $\\sqrt{0} = 0$ | **one** repeated real solution | touches $x$-axis once |
| $\\Delta < 0$ | $\\sqrt{\\text{negative}}$ — not real | **no** real solutions | never touches $x$-axis |

> 💡 When $\\Delta = 0$, the $\\pm$ adds and subtracts $0$, so both branches collapse to the same value $x = \\dfrac{-b}{2a}$. That single answer is called a **double root**.`,
      },
      {
        id: 'qf3-examples',
        type: 'text' as const,
        content: `### Three Quick Examples

**$x^2 - 6x + 8 = 0$:**  $\\Delta = (-6)^2 - 4(1)(8) = 36 - 32 = 4 > 0$ → **two** solutions.

**$x^2 + 6x + 9 = 0$:**  $\\Delta = 6^2 - 4(1)(9) = 36 - 36 = 0$ → **one** solution ($x = -3$).

**$x^2 - 4x + 5 = 0$:**  $\\Delta = (-4)^2 - 4(1)(5) = 16 - 20 = -4 < 0$ → **no real** solutions.

> ⚠️ A negative discriminant does **not** mean "no answer" — it means *no real* answer. In Algebra 1 we report "no real solutions"; later courses use imaginary numbers for these.`,
      },
      {
        id: 'qf3-mc-disc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many real solutions does $x^2 + 2x + 7 = 0$ have?',
              options: ['None (no real solutions)', 'One', 'Two', 'Infinitely many'],
              correctAnswer: 0,
              explanation: '$\\Delta = 2^2 - 4(1)(7) = 4 - 28 = -24 < 0$. A negative discriminant means no real solutions.',
            },
            {
              question: 'A quadratic has a discriminant of $0$. What does that tell you?',
              options: [
                'It has exactly one real solution (a double root)',
                'It has two different real solutions',
                'It has no real solutions',
                'You cannot use the quadratic formula',
              ],
              correctAnswer: 0,
              explanation: 'When $\\Delta = 0$, $\\sqrt{0}=0$, so $x = \\frac{-b}{2a}$ is the only solution — one repeated root.',
            },
          ],
        },
      },
      {
        id: 'qf3-input-disc',
        type: 'input-boxes' as const,
        content: `**Compute the Discriminant** 🧮

Find $\\Delta = b^2 - 4ac$ for each (enter the number, with sign).

**1)** $x^2 - 5x + 6 = 0$, $\\;\\Delta = \\,?$
**2)** $4x^2 - 12x + 9 = 0$, $\\;\\Delta = \\,?$
**3)** $x^2 + x + 4 = 0$, $\\;\\Delta = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '0', '-15'],
          hint1: '$\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1$.',
          hint2: '$\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$ — a perfect square trinomial, one double root.',
          hint3: '$\\Delta = (1)^2 - 4(1)(4) = 1 - 16 = -15$ — negative, so no real solutions.',
          explanation: '1) $\\Delta=1$ (two solutions). 2) $\\Delta=0$ (one solution). 3) $\\Delta=-15$ (no real solutions).',
        },
      },
      {
        id: 'qf3-dropdown-count',
        type: 'dropdown-select' as const,
        content: `**Match the Count** 🔽

Use the sign of the discriminant to state how many real solutions each equation has.`,
        exercise: {
          dropdowns: [
            { label: '$x^2 - 6x + 9 = 0$ ($\\Delta = 0$):', options: ['one solution', 'two solutions', 'no real solutions'] },
            { label: '$x^2 - 7x + 3 = 0$ ($\\Delta = 37$):', options: ['two solutions', 'one solution', 'no real solutions'] },
            { label: '$2x^2 + x + 5 = 0$ ($\\Delta = -39$):', options: ['no real solutions', 'one solution', 'two solutions'] },
          ],
          correctAnswers: ['one solution', 'two solutions', 'no real solutions'],
          hint1: '$\\Delta = 0 \\Rightarrow$ exactly one (repeated) real solution.',
          hint2: '$\\Delta > 0 \\Rightarrow$ two distinct real solutions.',
          hint3: '$\\Delta < 0 \\Rightarrow$ no real solutions.',
          explanation: 'Sign of $\\Delta$: positive → two, zero → one, negative → none.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'quadratic-formula-detailed-algebra1',
    sections: [
      {
        id: 'qf4-intro',
        type: 'text' as const,
        content: `# 🧮 The Quadratic Formula

**Part 4 of 5 — Irrational Roots & Word Problems**

---

> 🔑 **Big Picture:** Not every quadratic factors with whole numbers. When the discriminant isn't a perfect square, the quadratic formula gives **exact** irrational answers using $\\sqrt{\\;}$ — and it's the tool that turns real-world setups into solutions.`,
      },
      {
        id: 'qf4-irrational',
        type: 'text' as const,
        content: `## When the Roots Are Irrational

If $\\Delta$ is positive but **not** a perfect square, simplify the radical and leave the answer exact.

### Worked Example: $x^2 + 4x + 1 = 0$

Here $a=1$, $b=4$, $c=1$:

$$x = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(1)}}{2(1)} = \\frac{-4 \\pm \\sqrt{16 - 4}}{2} = \\frac{-4 \\pm \\sqrt{12}}{2}$$

Simplify $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$:

$$x = \\frac{-4 \\pm 2\\sqrt{3}}{2} = \\frac{2(-2 \\pm \\sqrt{3})}{2} = -2 \\pm \\sqrt{3}$$

> 💡 **Factor out, then cancel.** Both terms on top share a factor of $2$, which cancels the $2$ in the denominator. Always check whether the numerator and denominator share a common factor.`,
      },
      {
        id: 'qf4-mc-irrational',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{-6 \\pm \\sqrt{20}}{2}$.',
              options: [
                '$-3 \\pm \\sqrt{5}$',
                '$-6 \\pm \\sqrt{5}$',
                '$-3 \\pm 2\\sqrt{5}$',
                '$-3 \\pm \\sqrt{20}$',
              ],
              correctAnswer: 0,
              explanation: '$\\sqrt{20} = 2\\sqrt{5}$, so $\\dfrac{-6 \\pm 2\\sqrt{5}}{2} = \\dfrac{2(-3 \\pm \\sqrt{5})}{2} = -3 \\pm \\sqrt{5}$.',
            },
            {
              question: 'Which equation has irrational (non-fraction) solutions?',
              options: [
                '$x^2 - 2x - 1 = 0$',
                '$x^2 - 5x + 6 = 0$',
                '$x^2 + 7x + 12 = 0$',
                '$2x^2 - 5x - 3 = 0$',
              ],
              correctAnswer: 0,
              explanation: 'For $x^2 - 2x - 1 = 0$, $\\Delta = 4 + 4 = 8$, not a perfect square, so roots $1 \\pm \\sqrt{2}$ are irrational. The others have perfect-square discriminants ($1$, $1$, $49$).',
            },
          ],
        },
      },
      {
        id: 'qf4-wordproblem',
        type: 'text' as const,
        content: `## A Word Problem

> A ball is thrown upward. Its height in feet after $t$ seconds is $h = -16t^2 + 32t + 5$. When does it hit the ground ($h = 0$)?

Set $h = 0$:  $-16t^2 + 32t + 5 = 0$, so $a = -16$, $b = 32$, $c = 5$.

$$t = \\frac{-32 \\pm \\sqrt{32^2 - 4(-16)(5)}}{2(-16)} = \\frac{-32 \\pm \\sqrt{1024 + 320}}{-32} = \\frac{-32 \\pm \\sqrt{1344}}{-32}$$

$\\sqrt{1344} \\approx 36.66$, so:

$$t \\approx \\frac{-32 + 36.66}{-32} \\approx -0.15 \\quad\\text{or}\\quad t \\approx \\frac{-32 - 36.66}{-32} \\approx 2.15$$

> ⚠️ **Reject the negative time.** A negative $t$ is meaningless here, so the ball lands at $t \\approx 2.15$ seconds. Always sanity-check word-problem answers against what's physically possible.`,
      },
      {
        id: 'qf4-input-word',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

A rectangle's area is modeled by $x^2 + 3x - 28 = 0$, where $x$ is a length (so $x > 0$).

**1)** Discriminant $b^2 - 4ac = \\,?$
**2)** $\\sqrt{\\Delta} = \\,?$
**3)** The valid (positive) value of $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['121', '11', '4'],
          hint1: '$\\Delta = 3^2 - 4(1)(-28) = 9 + 112 = 121$.',
          hint2: '$\\sqrt{121} = 11$ (it is a perfect square).',
          hint3: '$x = \\dfrac{-3 \\pm 11}{2}$ gives $4$ or $-7$; a length must be positive, so $x = 4$.',
          explanation: '$\\Delta = 121$, $\\sqrt{121} = 11$, $x = \\dfrac{-3 \\pm 11}{2} = 4$ or $-7$. Reject $-7$; the length is $4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'quadratic-formula-detailed-algebra1',
    sections: [
      {
        id: 'qf5-intro',
        type: 'text' as const,
        content: `# 🧮 The Quadratic Formula

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) set up standard form and read $a$, $b$, $c$, (2) substitute into the formula, (3) use the discriminant to count solutions, and (4) handle irrational roots and word problems. Let's pull it all together.`,
      },
      {
        id: 'qf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Set up | Write $ax^2+bx+c=0$; read $a,b,c$ **with signs** |
| Solve | $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ |
| Count solutions | $\\Delta>0$: two; $\\Delta=0$: one; $\\Delta<0$: none |
| Simplify roots | Reduce $\\sqrt{\\Delta}$; cancel common factors over $2a$ |

> ⚠️ **Top three mistakes to avoid:** (1) forgetting the $\\pm$, (2) mishandling $-4ac$ when $c$ is negative, (3) dropping a sign on $b$ when computing $-b$.`,
      },
      {
        id: 'qf5-dropdown-mixed',
        type: 'dropdown-select' as const,
        content: `**Solve Step by Step** 🔽

Solve $3x^2 - 2x - 1 = 0$ ($a=3$, $b=-2$, $c=-1$). Choose each piece.`,
        exercise: {
          dropdowns: [
            { label: 'Discriminant $b^2 - 4ac$:', options: ['$16$', '$4$', '$-8$', '$10$'] },
            { label: 'The $-b$ term:', options: ['$2$', '$-2$', '$3$', '$-3$'] },
            { label: 'The denominator $2a$:', options: ['$6$', '$3$', '$2$', '$-6$'] },
            { label: 'The two solutions:', options: ['$x = 1$ or $x = -\\tfrac{1}{3}$', '$x = -1$ or $x = \\tfrac{1}{3}$', '$x = 1$ or $x = 3$', '$x = 2$ or $x = -1$'] },
          ],
          correctAnswers: ['$16$', '$2$', '$6$', '$x = 1$ or $x = -\\tfrac{1}{3}$'],
          hint1: '$\\Delta = (-2)^2 - 4(3)(-1) = 4 + 12 = 16$.',
          hint2: '$-b = -(-2) = 2$, and $2a = 2(3) = 6$.',
          hint3: '$x = \\dfrac{2 \\pm \\sqrt{16}}{6} = \\dfrac{2 \\pm 4}{6}$, so $x = 1$ or $x = -\\tfrac{1}{3}$.',
          explanation: '$x = \\dfrac{2 \\pm 4}{6}$ gives $\\dfrac{6}{6}=1$ and $\\dfrac{-2}{6}=-\\tfrac{1}{3}$.',
        },
      },
      {
        id: 'qf5-input-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Solve $x^2 - 2x - 15 = 0$; enter the **larger** root: $x = \\,?$
**2)** For $5x^2 + 2x + 1 = 0$, compute $\\Delta = b^2 - 4ac = \\,?$ *(its sign tells you the solution count)*
**3)** Solve $x^2 - 9 = 0$; enter the **positive** root: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '-16', '3'],
          hint1: '$x^2 - 2x - 15 = 0$: $\\Delta = 4 + 60 = 64$, $x = \\dfrac{2 \\pm 8}{2}$, so $5$ or $-3$.',
          hint2: '$\\Delta = 2^2 - 4(5)(1) = 4 - 20 = -16$ (negative → no real solutions).',
          hint3: '$x^2 - 9 = 0$ has $a=1, b=0, c=-9$: $x = \\dfrac{0 \\pm \\sqrt{36}}{2} = \\pm 3$.',
          explanation: '1) roots $5$ and $-3$; larger is $5$. 2) $\\Delta = -16$. 3) $x = \\pm 3$; positive root is $3$.',
        },
      },
      {
        id: 'qf5-mc-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x^2 - 4x + 1 = 0$ with the quadratic formula.',
              options: [
                '$x = 2 \\pm \\sqrt{3}$',
                '$x = -2 \\pm \\sqrt{3}$',
                '$x = 2 \\pm \\sqrt{5}$',
                '$x = 4 \\pm \\sqrt{3}$',
              ],
              correctAnswer: 0,
              explanation: '$\\Delta = 16 - 4 = 12$, $\\sqrt{12} = 2\\sqrt{3}$. $x = \\dfrac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$.',
            },
            {
              question: 'Which method is GUARANTEED to solve any quadratic equation?',
              options: [
                'The quadratic formula',
                'Factoring with whole numbers',
                'Guess and check',
                'Graphing by hand only',
              ],
              correctAnswer: 0,
              explanation: 'Factoring only works when nice factors exist; the quadratic formula works for every quadratic in standard form.',
            },
          ],
        },
      },
      {
        id: 'qf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For $2x^2 - 7x + 3 = 0$, the value of $b^2 - 4ac$ is:',
              options: ['$25$', '$73$', '$37$', '$-23$'],
              correctAnswer: 0,
              explanation: '$\\Delta = (-7)^2 - 4(2)(3) = 49 - 24 = 25$.',
            },
            {
              question: 'A quadratic has discriminant $-9$. How many real solutions does it have?',
              options: ['None', 'One', 'Two', 'Three'],
              correctAnswer: 0,
              explanation: 'A negative discriminant means $\\sqrt{\\Delta}$ is not real, so there are no real solutions.',
            },
            {
              question: 'The solutions of $x^2 - 6x + 8 = 0$ are:',
              options: ['$x = 2$ or $x = 4$', '$x = -2$ or $x = -4$', '$x = 1$ or $x = 8$', '$x = 3 \\pm \\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$\\Delta = 36 - 32 = 4$, $x = \\dfrac{6 \\pm 2}{2}$, so $x = 4$ or $x = 2$.',
            },
          ],
        },
      },
    ],
  },
]
