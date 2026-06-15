import type { LessonData } from './registry'

/**
 * Hand-authored interactive lesson — Completing the Square (Algebra 1).
 * Registry key: 'completing-the-square' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'completing-the-square',
    sections: [
      {
        id: 'cts1-intro',
        type: 'text' as const,
        content: `# 🔲 Completing the Square

**Part 1 of 5 — Perfect Square Trinomials**

---

### Topics in This Part

| Section |
|---------|
| What Is a Perfect Square Trinomial? |
| Finding the Missing Constant |
| Factoring a Perfect Square |

> 🔑 **Key Concept:** "Completing the square" turns any quadratic into a perfect square plus a constant. Before we can complete a square, we need to recognize one — that's Part 1.`,
      },
      {
        id: 'cts1-pst',
        type: 'text' as const,
        content: `## What Is a Perfect Square Trinomial?

A **perfect square trinomial** factors into a binomial squared:

$$x^2 + 2ax + a^2 = (x + a)^2$$

Notice the pattern:
- The **first term** is a perfect square: $x^2$
- The **last term** is a perfect square: $a^2$
- The **middle term** is *twice the product*: $2ax$

### Examples

| Trinomial | Factored | Check (middle term) |
|-----------|----------|---------------------|
| $x^2 + 6x + 9$ | $(x+3)^2$ | $2\\cdot 3 = 6$ ✓ |
| $x^2 - 10x + 25$ | $(x-5)^2$ | $2\\cdot 5 = 10$ ✓ |
| $x^2 + 14x + 49$ | $(x+7)^2$ | $2\\cdot 7 = 14$ ✓ |

> 🔑 **Key Idea:** To make $x^2 + bx$ into a perfect square, add $\\left(\\dfrac{b}{2}\\right)^2$. It then factors as $\\left(x + \\dfrac{b}{2}\\right)^2$.`,
      },
      {
        id: 'cts1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which trinomial is a perfect square?',
              options: ['$x^2 + 5x + 25$', '$x^2 + 8x + 16$', '$x^2 + 8x + 64$', '$x^2 + 4x + 16$'],
              correctAnswer: 1,
              explanation: 'For $x^2 + 8x + c$ to be a perfect square, $c = (8/2)^2 = 16$. So $x^2+8x+16 = (x+4)^2$. The others fail the $(b/2)^2$ test.',
            },
            {
              question: '$x^2 - 12x + 36$ factors as:',
              options: ['$(x-6)^2$', '$(x+6)^2$', '$(x-12)^2$', '$(x-36)^2$'],
              correctAnswer: 0,
              explanation: '$36 = 6^2$ and the middle term is negative, so $(x-6)^2 = x^2 - 12x + 36$. ✓',
            },
          ],
        },
      },
      {
        id: 'cts1-complete-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Constant** 🧮

What number must be added to make each a perfect square trinomial? (Use $\\left(\\dfrac{b}{2}\\right)^2$.)

**1)** $x^2 + 8x + \\,?$
**2)** $x^2 - 6x + \\,?$
**3)** $x^2 + 5x + \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '9', '6.25'],
          hint1: '$(8/2)^2 = 4^2 = 16$.',
          hint2: '$(-6/2)^2 = (-3)^2 = 9$. The constant is always positive.',
          hint3: '$(5/2)^2 = 2.5^2 = 6.25$. Odd middle coefficients give fractions/decimals.',
          explanation: '1) $16$ → $(x+4)^2$.  2) $9$ → $(x-3)^2$.  3) $6.25$ → $(x+2.5)^2$.',
        },
      },
      {
        id: 'cts1-factor',
        type: 'text' as const,
        content: `## Factoring Back to a Square

Once the constant is $\\left(\\dfrac{b}{2}\\right)^2$, the trinomial factors with the **same sign** as the middle term:

$$x^2 + bx + \\left(\\tfrac{b}{2}\\right)^2 = \\left(x + \\tfrac{b}{2}\\right)^2$$

**Example:** $x^2 + 8x + 16 = (x+4)^2$ — half of $8$ is $4$.

**Example:** $x^2 - 6x + 9 = (x-3)^2$ — half of $-6$ is $-3$.

You now have the one tool the whole method depends on. In Part 2 we use it to *complete* squares that aren't finished yet.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'completing-the-square',
    sections: [
      {
        id: 'cts2-intro',
        type: 'text' as const,
        content: `# 🔲 Completing the Square

**Part 2 of 5 — The Method (leading coefficient = 1)**

---

> 🔑 **The Idea:** Take $x^2 + bx + c$, *force* a perfect square by adding $\\left(\\dfrac{b}{2}\\right)^2$, and balance it by subtracting the same amount.`,
      },
      {
        id: 'cts2-steps',
        type: 'text' as const,
        content: `## The Steps

To complete the square on $x^2 + bx + c$:

1. **Group** the $x$-terms: $(x^2 + bx) + c$
2. **Add and subtract** $\\left(\\dfrac{b}{2}\\right)^2$ inside:
$$\\left(x^2 + bx + \\left(\\tfrac{b}{2}\\right)^2\\right) - \\left(\\tfrac{b}{2}\\right)^2 + c$$
3. **Factor** the perfect square: $\\left(x + \\dfrac{b}{2}\\right)^2 - \\left(\\dfrac{b}{2}\\right)^2 + c$

### Worked Example: $x^2 + 6x + 1$

Half of $6$ is $3$, and $3^2 = 9$:

$$x^2 + 6x + 1 = (x^2 + 6x + 9) - 9 + 1 = (x+3)^2 - 8$$

> ✅ **Check:** $(x+3)^2 - 8 = x^2 + 6x + 9 - 8 = x^2 + 6x + 1$ ✓`,
      },
      {
        id: 'cts2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $x^2 - 10x + 30$

Half of $-10$ is $-5$, and $(-5)^2 = 25$:

$$x^2 - 10x + 30 = (x^2 - 10x + 25) - 25 + 30 = (x-5)^2 + 5$$

### Worked Example: $x^2 + 3x$

Half of $3$ is $\\dfrac{3}{2}$, and $\\left(\\dfrac{3}{2}\\right)^2 = \\dfrac{9}{4}$:

$$x^2 + 3x = \\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{9}{4}$$

> 💡 Completing the square always produces the form $(x + h)^2 + k$ — that form is the key to both *solving* (Part 3) and *graphing* (Part 4).`,
      },
      {
        id: 'cts2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Completing the square, $x^2 + 4x + 1 = $',
              options: ['$(x+2)^2 - 3$', '$(x+2)^2 + 1$', '$(x+4)^2 - 15$', '$(x+2)^2 - 1$'],
              correctAnswer: 0,
              explanation: 'Half of $4$ is $2$; $2^2=4$. $x^2+4x+1 = (x^2+4x+4) - 4 + 1 = (x+2)^2 - 3$.',
            },
            {
              question: 'When you complete the square on $x^2 + bx$, what do you add inside the group?',
              options: ['$b^2$', '$\\frac{b}{2}$', '$\\left(\\frac{b}{2}\\right)^2$', '$2b$'],
              correctAnswer: 2,
              explanation: 'You add (and subtract) $\\left(\\frac{b}{2}\\right)^2$ — half the middle coefficient, squared.',
            },
          ],
        },
      },
      {
        id: 'cts2-drill',
        type: 'input-boxes' as const,
        content: `**Complete the Square** 🧮

Rewrite each as $(x+h)^2 + k$. Enter the value of $k$ (the constant outside the square).

**1)** $x^2 + 8x + 3 = (x+4)^2 + k,\\quad k = \\,?$
**2)** $x^2 - 2x + 6 = (x-1)^2 + k,\\quad k = \\,?$
**3)** $x^2 + 10x = (x+5)^2 + k,\\quad k = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-13', '5', '-25'],
          hint1: '$(x+4)^2 = x^2+8x+16$, so $k = 3 - 16 = -13$.',
          hint2: '$(x-1)^2 = x^2-2x+1$, so $k = 6 - 1 = 5$.',
          hint3: '$(x+5)^2 = x^2+10x+25$, so $k = 0 - 25 = -25$.',
          explanation: '1) $k=-13$.  2) $k=5$.  3) $k=-25$. Each time, $k = c - (b/2)^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'completing-the-square',
    sections: [
      {
        id: 'cts3-intro',
        type: 'text' as const,
        content: `# 🔲 Completing the Square

**Part 3 of 5 — Solving Quadratic Equations**

---

> 🔑 **Why it works:** Once a quadratic is written as $(x+h)^2 = \\text{number}$, you can take the square root of both sides and solve — including the all-important $\\pm$.`,
      },
      {
        id: 'cts3-solve',
        type: 'text' as const,
        content: `## Solving by Completing the Square

### Example: $x^2 + 6x + 5 = 0$

1. Move the constant: $x^2 + 6x = -5$
2. Add $\\left(\\frac{6}{2}\\right)^2 = 9$ to **both sides**: $x^2 + 6x + 9 = 4$
3. Factor: $(x+3)^2 = 4$
4. Square root (don't forget $\\pm$): $x + 3 = \\pm 2$
5. Solve: $x = -3 \\pm 2 \\Rightarrow x = -1 \\text{ or } x = -5$

> ⚠️ **The most common mistake** is dropping the $\\pm$. A square has **two** square roots.`,
      },
      {
        id: 'cts3-leading',
        type: 'text' as const,
        content: `## When the Leading Coefficient Isn't 1

If $a \\ne 1$, **divide every term by $a$ first**, then complete the square.

### Example: $2x^2 + 8x - 10 = 0$

Divide by $2$: $\\;x^2 + 4x - 5 = 0$

$$x^2 + 4x = 5 \\;\\Rightarrow\\; x^2 + 4x + 4 = 9 \\;\\Rightarrow\\; (x+2)^2 = 9$$

$$x + 2 = \\pm 3 \\;\\Rightarrow\\; x = 1 \\text{ or } x = -5$$

> ✅ **Check** $x=1$: $2(1)+8(1)-10 = 0$ ✓`,
      },
      {
        id: 'cts3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $x^2 + 6x + 5 = 0$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, isolate the $x$-terms:', options: ['$x^2 + 6x = -5$', '$x^2 = -6x - 5$', '$x^2 + 6x + 5 = 0$', '$6x = -5$'] },
            { label: 'Add to both sides:', options: ['$36$', '$9$', '$3$', '$6$'] },
            { label: 'Factor the left side:', options: ['$(x+3)^2$', '$(x+6)^2$', '$(x+9)^2$', '$(x+5)^2$'] },
            { label: 'After the square root:', options: ['$x+3 = \\pm 2$', '$x+3 = 2$', '$x = \\pm 2$', '$x+3 = \\pm 4$'] },
          ],
          correctAnswers: ['$x^2 + 6x = -5$', '$9$', '$(x+3)^2$', '$x+3 = \\pm 2$'],
          hint1: 'Move the constant $+5$ to the right side.',
          hint2: 'Add $\\left(\\frac{6}{2}\\right)^2 = 9$ to both sides.',
          hint3: 'Half of $6$ is $3$, so the square is $(x+3)^2$, and $(x+3)^2 = 4 \\Rightarrow x+3 = \\pm 2$.',
          explanation: '$x^2+6x=-5 \\Rightarrow (x+3)^2 = 4 \\Rightarrow x+3=\\pm 2 \\Rightarrow x = -1, -5$.',
        },
      },
      {
        id: 'cts3-drill',
        type: 'input-boxes' as const,
        content: `**Solve It** 🧮

Solve by completing the square. Enter the **larger** solution.

**1)** $x^2 + 4x - 5 = 0 \\;\\Rightarrow\\; x = \\,?$  *(larger root)*
**2)** $x^2 - 8x + 7 = 0 \\;\\Rightarrow\\; x = \\,?$  *(larger root)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '7'],
          hint1: '$(x+2)^2 = 9 \\Rightarrow x = 1 \\text{ or } -5$. Larger is $1$.',
          hint2: '$(x-4)^2 = 9 \\Rightarrow x = 7 \\text{ or } 1$. Larger is $7$.',
          explanation: '1) roots $1$ and $-5$; larger $= 1$.  2) roots $7$ and $1$; larger $= 7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'completing-the-square',
    sections: [
      {
        id: 'cts4-intro',
        type: 'text' as const,
        content: `# 🔲 Completing the Square

**Part 4 of 5 — Vertex Form & Graphing**

---

> 🔑 **Big Payoff:** Completing the square rewrites $y = ax^2+bx+c$ as **vertex form** $y = a(x-h)^2 + k$, which hands you the vertex $(h, k)$ for free.`,
      },
      {
        id: 'cts4-vertex',
        type: 'text' as const,
        content: `## Vertex Form

$$y = a(x - h)^2 + k \\quad\\Longrightarrow\\quad \\text{vertex } (h,\\, k)$$

Watch the **sign**: $(x - h)$ means the vertex's $x$-coordinate is $+h$.

### Example: $y = x^2 + 6x + 5$

Complete the square: $y = (x^2+6x+9) - 9 + 5 = (x+3)^2 - 4$.

Rewrite as $(x - (-3))^2 + (-4)$, so the **vertex is $(-3, -4)$**.

| Form | $y = x^2+6x+5$ | $y = (x+3)^2 - 4$ |
|------|----------------|-------------------|
| Vertex | hidden | $(-3, -4)$ ✓ |
| Axis of symmetry | hidden | $x = -3$ |
| Minimum value | hidden | $y = -4$ |`,
      },
      {
        id: 'cts4-worked',
        type: 'text' as const,
        content: `### Example: $y = x^2 - 4x + 1$

Half of $-4$ is $-2$; $(-2)^2 = 4$:

$$y = (x^2 - 4x + 4) - 4 + 1 = (x-2)^2 - 3$$

**Vertex $(2, -3)$**, axis of symmetry $x = 2$, minimum value $-3$.

> 💡 Because the leading coefficient is positive, the parabola opens **up**, so the vertex is the **lowest** point.`,
      },
      {
        id: 'cts4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Vertex** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Vertex of $y = (x-5)^2 + 2$:', options: ['$(5, 2)$', '$(-5, 2)$', '$(5, -2)$', '$(2, 5)$'] },
            { label: 'Vertex of $y = (x+1)^2 - 7$:', options: ['$(-1, -7)$', '$(1, -7)$', '$(-1, 7)$', '$(1, 7)$'] },
            { label: '$y = x^2 - 4x + 1$ in vertex form:', options: ['$(x-2)^2 - 3$', '$(x-2)^2 + 1$', '$(x-4)^2 - 3$', '$(x+2)^2 - 3$'] },
          ],
          correctAnswers: ['$(5, 2)$', '$(-1, -7)$', '$(x-2)^2 - 3$'],
          hint1: '$(x-h)^2 + k$ has vertex $(h, k)$; here $h=5, k=2$.',
          hint2: '$(x+1)^2 = (x-(-1))^2$, so $h = -1$, and $k = -7$.',
          hint3: 'Half of $-4$ is $-2$, squared is $4$: $(x^2-4x+4) - 4 + 1 = (x-2)^2 - 3$.',
          explanation: 'Vertex form $a(x-h)^2+k$ reveals the vertex $(h,k)$ directly.',
        },
      },
      {
        id: 'cts4-drill',
        type: 'input-boxes' as const,
        content: `**Find the Vertex** 🧮

Complete the square and enter the vertex coordinates.

**1)** $y = x^2 + 2x - 3$.  Vertex $x$-coordinate $= \\,?$
**2)** Same parabola: vertex $y$-coordinate $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-1', '-4'],
          hint1: 'Half of $2$ is $1$, so $h = -1$.',
          hint2: '$y = (x+1)^2 - 4$, so $k = -4$.',
          explanation: '$y = x^2+2x-3 = (x+1)^2 - 4$. Vertex $(-1, -4)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'completing-the-square',
    sections: [
      {
        id: 'cts5-intro',
        type: 'text' as const,
        content: `# 🔲 Completing the Square

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize perfect squares, (2) complete the square, (3) solve equations, and (4) find a parabola's vertex. Let's put it together.`,
      },
      {
        id: 'cts5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Make $x^2+bx$ a square | add $\\left(\\dfrac{b}{2}\\right)^2$ |
| Rewrite $x^2+bx+c$ | $\\left(x+\\dfrac{b}{2}\\right)^2 + \\left(c - \\dfrac{b^2}{4}\\right)$ |
| Solve $(x+h)^2 = n$ | $x = -h \\pm \\sqrt{n}$ |
| Find a vertex | vertex form $a(x-h)^2+k \\Rightarrow (h,k)$ |

> ⚠️ Remember: divide by $a$ first if the leading coefficient isn't $1$, and never drop the $\\pm$ when taking a square root.`,
      },
      {
        id: 'cts5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x^2 - 2x - 8 = 0$ by completing the square.',
              options: ['$x = 4 \\text{ or } -2$', '$x = -4 \\text{ or } 2$', '$x = 4 \\text{ or } 2$', '$x = 1 \\pm 8$'],
              correctAnswer: 0,
              explanation: '$x^2-2x = 8 \\Rightarrow (x-1)^2 = 9 \\Rightarrow x-1 = \\pm 3 \\Rightarrow x = 4 \\text{ or } -2$.',
            },
            {
              question: 'Write $y = x^2 - 6x + 11$ in vertex form.',
              options: ['$(x-3)^2 + 2$', '$(x-3)^2 - 2$', '$(x-6)^2 + 11$', '$(x+3)^2 + 2$'],
              correctAnswer: 0,
              explanation: 'Half of $-6$ is $-3$; $(-3)^2=9$. $y = (x^2-6x+9) - 9 + 11 = (x-3)^2 + 2$.',
            },
          ],
        },
      },
      {
        id: 'cts5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What constant completes the square for $x^2 - 14x$?',
              options: ['$49$', '$196$', '$7$', '$14$'],
              correctAnswer: 0,
              explanation: '$\\left(\\frac{-14}{2}\\right)^2 = (-7)^2 = 49$.',
            },
            {
              question: 'The solutions of $(x-4)^2 = 25$ are:',
              options: ['$x = 9 \\text{ or } -1$', '$x = 9 \\text{ or } 1$', '$x = 29 \\text{ or } -21$', '$x = \\pm 5$'],
              correctAnswer: 0,
              explanation: '$x - 4 = \\pm 5 \\Rightarrow x = 4 \\pm 5 \\Rightarrow x = 9 \\text{ or } -1$.',
            },
            {
              question: 'The vertex of $y = (x+2)^2 - 9$ is:',
              options: ['$(-2, -9)$', '$(2, -9)$', '$(-2, 9)$', '$(2, 9)$'],
              correctAnswer: 0,
              explanation: '$a(x-h)^2+k$ has vertex $(h,k)$; here $(x+2)^2 = (x-(-2))^2$, so vertex $(-2, -9)$.',
            },
          ],
        },
      },
    ],
  },
]
