import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Graphing Quadratic Functions (Algebra 1).
 * Registry key: 'graphing-quadratics-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'graphing-quadratics-algebra1',
    sections: [
      {
        id: 'gq1-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Quadratic Functions

**Part 1 of 5 — The Parabola & Standard Form**

---

### Topics in This Part

| Section |
|---------|
| What Is a Quadratic Function? |
| The Shape: a Parabola |
| Which Way It Opens |
| Width and the $y$-intercept |

> 🔑 **Key Concept:** Every quadratic function $y = ax^2 + bx + c$ graphs as a **parabola** — a smooth, symmetric U-shaped curve. Before we plot anything, we'll learn to read the equation and predict what the graph looks like.`,
      },
      {
        id: 'gq1-what-is',
        type: 'text' as const,
        content: `## What Is a Quadratic Function?

A **quadratic function** is any function that can be written in **standard form**:

$$y = ax^2 + bx + c \\qquad (a \\ne 0)$$

The three numbers $a$, $b$, and $c$ are the **coefficients**:

| Coefficient | Name | What it controls |
|-------------|------|------------------|
| $a$ | leading coefficient | which way the parabola opens, and how wide |
| $b$ | linear coefficient | position of the vertex (left/right) |
| $c$ | constant term | the $y$-intercept |

> ⚠️ The defining feature is the $x^2$ term. If $a = 0$, there is no $x^2$, and the equation is just a **line** — not a quadratic.

**Examples that ARE quadratics:** $y = x^2$, $\\;y = 3x^2 - 2x + 1$, $\\;y = -x^2 + 4$.
**NOT quadratics:** $y = 2x + 5$ (no $x^2$), $\\;y = x^3 - x$ (highest power is $3$).`,
      },
      {
        id: 'gq1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a quadratic function?',
              options: ['$y = 5x - 7$', '$y = 2x^2 - 3x + 1$', '$y = \\frac{4}{x} + 2$', '$y = x^3 + x^2$'],
              correctAnswer: 1,
              explanation: 'A quadratic has the form $ax^2+bx+c$ with $a\\ne 0$ and no higher power. $y=2x^2-3x+1$ fits. $5x-7$ is linear, $4/x+2$ is rational, and $x^3+x^2$ is cubic.',
            },
            {
              question: 'In $y = -4x^2 + 6x - 9$, what is the leading coefficient $a$?',
              options: ['$-4$', '$6$', '$-9$', '$4$'],
              correctAnswer: 0,
              explanation: 'The leading coefficient is the number multiplying $x^2$. Here that is $-4$ (keep the negative sign).',
            },
          ],
        },
      },
      {
        id: 'gq1-opens',
        type: 'text' as const,
        content: `## Which Way Does It Open?

The sign of the **leading coefficient $a$** alone tells you the parabola's direction:

| Sign of $a$ | Opens | Vertex is the... |
|-------------|-------|------------------|
| $a > 0$ (positive) | **up** ⌣ | lowest point (**minimum**) |
| $a < 0$ (negative) | **down** ⌢ | highest point (**maximum**) |

> 💡 **Memory hook:** A *positive* $a$ makes a *happy* (smiling) parabola that opens up. A *negative* $a$ makes a *frowning* parabola that opens down.

**Examples:**
- $y = x^2 - 6x + 5$ has $a = 1 > 0$, so it opens **up** (has a minimum).
- $y = -2x^2 + 8x - 6$ has $a = -2 < 0$, so it opens **down** (has a maximum).`,
      },
      {
        id: 'gq1-width-yint',
        type: 'text' as const,
        content: `## Width and the $y$-intercept

**Width** is also set by $a$ — specifically by how *large* $|a|$ is:

- **$|a| > 1$** → narrower (steeper) than $y = x^2$. Example: $y = 4x^2$.
- **$0 < |a| < 1$** → wider (flatter) than $y = x^2$. Example: $y = \\tfrac{1}{2}x^2$.

**The $y$-intercept** is the easiest point to find: set $x = 0$.

$$y = a(0)^2 + b(0) + c = c$$

So the parabola **always crosses the $y$-axis at $(0, c)$** — the constant term, read straight off the equation.

> 🔑 **Read it instantly:** For $y = ax^2+bx+c$, the $y$-intercept is $(0, c)$. For $y = x^2 - 6x + 5$, it is $(0, 5)$.`,
      },
      {
        id: 'gq1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Equation** 🔽

For each quadratic, decide its features directly from standard form.`,
        exercise: {
          dropdowns: [
            { label: '$y = 3x^2 - 12x + 7$ opens:', options: ['up', 'down', 'sideways', 'it is a line'] },
            { label: '$y = -x^2 + 2x - 5$ has a:', options: ['maximum', 'minimum', 'neither', 'both'] },
            { label: '$y$-intercept of $y = x^2 + 4x - 8$:', options: ['$(0, -8)$', '$(0, 4)$', '$(0, 1)$', '$(0, 8)$'] },
          ],
          correctAnswers: ['up', 'maximum', '$(0, -8)$'],
          hint1: 'The sign of $a$ (the $x^2$ coefficient) sets the opening direction: $+$ opens up, $-$ opens down.',
          hint2: 'A downward parabola ($a<0$) peaks at its vertex, so it has a maximum.',
          hint3: 'The $y$-intercept is $(0, c)$, the constant term. Here $c = -8$.',
          explanation: '$3x^2$ has $a=3>0$ → opens up. $-x^2$ has $a=-1<0$ → opens down → maximum. The constant $-8$ gives $y$-intercept $(0,-8)$.',
        },
      },
      {
        id: 'gq1-drill',
        type: 'input-boxes' as const,
        content: `**Read Off the Coefficients** 🧮

For $y = -2x^2 + 6x - 9$, enter each value.

**1)** The leading coefficient $a = \\,?$
**2)** The constant term $c = \\,?$
**3)** The $y$-coordinate of the $y$-intercept $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '-9', '-9'],
          hint1: '$a$ is the number multiplying $x^2$ — include the sign.',
          hint2: '$c$ is the constant (no $x$ attached).',
          hint3: 'The $y$-intercept is always $(0, c)$, so its $y$-value equals $c$.',
          explanation: '1) $a=-2$.  2) $c=-9$.  3) The $y$-intercept is $(0,c)=(0,-9)$, so the $y$-coordinate is $-9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'graphing-quadratics-algebra1',
    sections: [
      {
        id: 'gq2-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Quadratic Functions

**Part 2 of 5 — Vertex & Axis of Symmetry**

---

> 🔑 **The Idea:** The single most important point on a parabola is its **vertex** — the turning point. From standard form you can find it with one formula, and from there the rest of the graph falls into place.`,
      },
      {
        id: 'gq2-axis',
        type: 'text' as const,
        content: `## The Axis of Symmetry

Every parabola is **symmetric** about a vertical line through its vertex, called the **axis of symmetry**. For $y = ax^2 + bx + c$, that line is:

$$x = -\\frac{b}{2a}$$

This $x$-value is also the **$x$-coordinate of the vertex**.

### Worked Example: $y = x^2 - 6x + 5$

Here $a = 1$ and $b = -6$:

$$x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = \\frac{6}{2} = 3$$

So the axis of symmetry is $x = 3$.

> ⚠️ **Watch the signs.** The formula has a negative out front. With $b = -6$, you get $-(-6) = +6$ on top — a positive result.`,
      },
      {
        id: 'gq2-axis-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the axis of symmetry of $y = x^2 + 4x - 1$?',
              options: ['$x = -2$', '$x = 2$', '$x = 4$', '$x = -4$'],
              correctAnswer: 0,
              explanation: 'With $a=1,\\ b=4$: $x = -\\frac{b}{2a} = -\\frac{4}{2} = -2$.',
            },
            {
              question: 'For $y = 2x^2 - 8x + 3$, the axis of symmetry is:',
              options: ['$x = 2$', '$x = -2$', '$x = 4$', '$x = 8$'],
              correctAnswer: 0,
              explanation: 'With $a=2,\\ b=-8$: $x = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$.',
            },
          ],
        },
      },
      {
        id: 'gq2-vertex',
        type: 'text' as const,
        content: `## Finding the Whole Vertex

The vertex is the point $\\left(x_v,\\ y_v\\right)$ where:
1. $x_v = -\\dfrac{b}{2a}$ (axis of symmetry)
2. $y_v$ = the function evaluated at $x_v$ — **substitute** $x_v$ back in.

### Worked Example: $y = x^2 - 6x + 5$

We found $x_v = 3$. Now plug $x = 3$ into the original:

$$y_v = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4$$

So the **vertex is $(3, -4)$**. Since $a = 1 > 0$, the parabola opens up, and $-4$ is the **minimum value**.

| Feature | Value |
|---------|-------|
| Axis of symmetry | $x = 3$ |
| Vertex | $(3, -4)$ |
| Opens | up ($a>0$) |
| Minimum value | $y = -4$ |`,
      },
      {
        id: 'gq2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $y = -x^2 + 4x + 1$

**Step 1 — axis of symmetry** ($a = -1,\\ b = 4$):

$$x_v = -\\frac{4}{2(-1)} = -\\frac{4}{-2} = 2$$

**Step 2 — substitute** $x = 2$:

$$y_v = -(2)^2 + 4(2) + 1 = -4 + 8 + 1 = 5$$

**Vertex $(2, 5)$.** Because $a = -1 < 0$, the parabola opens **down**, so $5$ is the **maximum value**.

> 💡 Once you have the vertex, symmetry gives you free points: any point $d$ units to the *right* of the axis has a twin $d$ units to the *left* at the same height.`,
      },
      {
        id: 'gq2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Vertex** 🔽

Work through $y = 2x^2 - 8x + 3$ one step at a time.`,
        exercise: {
          dropdowns: [
            { label: 'Axis of symmetry $x = -\\frac{b}{2a}$:', options: ['$x = 2$', '$x = -2$', '$x = 4$', '$x = 8$'] },
            { label: 'Substitute to get $y_v = 2(2)^2 - 8(2) + 3 =$', options: ['$-5$', '$5$', '$3$', '$-11$'] },
            { label: 'So the vertex is:', options: ['$(2, -5)$', '$(-2, 5)$', '$(2, 5)$', '$(-5, 2)$'] },
          ],
          correctAnswers: ['$x = 2$', '$-5$', '$(2, -5)$'],
          hint1: '$x = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$.',
          hint2: '$2(2)^2 - 8(2) + 3 = 2(4) - 16 + 3 = 8 - 16 + 3 = -5$.',
          hint3: 'The vertex is $(x_v, y_v) = (2, -5)$.',
          explanation: 'Axis $x=2$; substituting gives $8-16+3=-5$; vertex $(2,-5)$. Since $a=2>0$, it is a minimum.',
        },
      },
      {
        id: 'gq2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Vertex** 🧮

For $y = x^2 + 2x - 8$, find the vertex.

**1)** Axis of symmetry: $x = \\,?$
**2)** Vertex $y$-coordinate $= \\,?$
**3)** Is the vertex a min or a max? *(type* min *or* max*)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1', '-9', 'min'],
          hint1: '$x = -\\frac{2}{2(1)} = -1$.',
          hint2: 'Substitute $x=-1$: $(-1)^2 + 2(-1) - 8 = 1 - 2 - 8 = -9$.',
          hint3: '$a = 1 > 0$, so the parabola opens up and the vertex is a minimum.',
          explanation: 'Axis $x=-1$; $y_v = 1-2-8 = -9$, so vertex $(-1,-9)$. With $a>0$ it opens up → min.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'graphing-quadratics-algebra1',
    sections: [
      {
        id: 'gq3-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Quadratic Functions

**Part 3 of 5 — Intercepts, Roots & Factored Form**

---

> 🔑 **Why it matters:** The points where a parabola crosses the $x$-axis are its **$x$-intercepts** (also called **roots** or **zeros**). They anchor the graph and tell you where $y = 0$.`,
      },
      {
        id: 'gq3-xint',
        type: 'text' as const,
        content: `## Finding $x$-intercepts

An **$x$-intercept** is where the graph touches the $x$-axis, so $y = 0$. To find them, solve:

$$ax^2 + bx + c = 0$$

When the quadratic **factors**, this is quick.

### Worked Example: $y = x^2 - 2x - 3$

Set $y = 0$ and factor:

$$x^2 - 2x - 3 = 0 \\;\\Rightarrow\\; (x - 3)(x + 1) = 0$$

By the zero-product rule, each factor can be $0$:

$$x - 3 = 0 \\;\\Rightarrow\\; x = 3 \\qquad x + 1 = 0 \\;\\Rightarrow\\; x = -1$$

So the $x$-intercepts are $(3, 0)$ and $(-1, 0)$.

> 💡 **Bonus symmetry trick:** the axis of symmetry sits exactly **halfway between the roots**. Here that is $\\dfrac{3 + (-1)}{2} = 1$, so $x = 1$ — matching $-\\frac{b}{2a} = \\frac{2}{2} = 1$. ✓`,
      },
      {
        id: 'gq3-roots-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The $x$-intercepts of $y = x^2 + 6x + 8$ are:',
              options: ['$x = -2$ and $x = -4$', '$x = 2$ and $x = 4$', '$x = -6$ and $x = 8$', '$x = 1$ and $x = 8$'],
              correctAnswer: 0,
              explanation: '$x^2+6x+8 = (x+2)(x+4) = 0 \\Rightarrow x = -2$ or $x = -4$.',
            },
            {
              question: 'At every $x$-intercept of a parabola, the value of $y$ is:',
              options: ['$0$', '$c$', 'the vertex $y$-value', 'undefined'],
              correctAnswer: 0,
              explanation: 'An $x$-intercept lies on the $x$-axis, where $y = 0$ by definition. That is exactly why we solve $ax^2+bx+c=0$.',
            },
          ],
        },
      },
      {
        id: 'gq3-discriminant',
        type: 'text' as const,
        content: `## How Many $x$-intercepts? The Discriminant

A parabola can cross the $x$-axis **twice, once, or never**. The **discriminant** $\\Delta = b^2 - 4ac$ tells you which, without solving:

| Discriminant $b^2 - 4ac$ | $x$-intercepts | Graph |
|--------------------------|----------------|-------|
| $> 0$ (positive) | **two** | crosses the axis at two points |
| $= 0$ (zero) | **one** | just touches at the vertex |
| $< 0$ (negative) | **none** | floats entirely above or below |

**Examples:**
- $y = x^2 - 5x + 6$: $\\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1 > 0$ → **two** intercepts.
- $y = x^2 - 4x + 4$: $\\Delta = 16 - 16 = 0$ → **one** (a double root at $x = 2$).
- $y = x^2 + 2x + 5$: $\\Delta = 4 - 20 = -16 < 0$ → **none**.`,
      },
      {
        id: 'gq3-disc-drill',
        type: 'input-boxes' as const,
        content: `**Count the Intercepts** 🧮

Use $\\Delta = b^2 - 4ac$. Enter the discriminant value, then the number of $x$-intercepts.

**1)** $y = x^2 - 6x + 9$:  $\\Delta = \\,?$
**2)** Same equation: number of $x$-intercepts $= \\,?$
**3)** $y = x^2 + x + 4$:  number of $x$-intercepts $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '1', '0'],
          hint1: '$\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$.',
          hint2: '$\\Delta = 0$ means the parabola just touches the axis — exactly one intercept.',
          hint3: 'For $y=x^2+x+4$: $\\Delta = 1^2 - 4(1)(4) = 1 - 16 = -15 < 0$, so no intercepts.',
          explanation: '1) $\\Delta = 0$.  2) $\\Delta=0$ → one intercept (double root at $x=3$).  3) $\\Delta=-15<0$ → zero intercepts.',
        },
      },
      {
        id: 'gq3-factored',
        type: 'text' as const,
        content: `## Factored Form Hands You the Roots

A quadratic written in **factored form** displays its roots directly:

$$y = a(x - r_1)(x - r_2) \\quad\\Longrightarrow\\quad \\text{roots } x = r_1,\\ x = r_2$$

> ⚠️ **Sign flip:** $(x - 3)$ gives the root $x = +3$; $(x + 1) = (x - (-1))$ gives the root $x = -1$. The root is the **opposite** of the number inside the parentheses.

### Example: $y = (x + 4)(x - 2)$

Roots: $x = -4$ and $x = 2$. The axis of symmetry is halfway between: $\\dfrac{-4 + 2}{2} = -1$, so $x = -1$.`,
      },
      {
        id: 'gq3-factored-drop',
        type: 'dropdown-select' as const,
        content: `**From Factored Form** 🔽

Read features straight from $y = (x - 5)(x + 1)$.`,
        exercise: {
          dropdowns: [
            { label: 'The $x$-intercepts are at:', options: ['$x = 5$ and $x = -1$', '$x = -5$ and $x = 1$', '$x = 5$ and $x = 1$', '$x = -5$ and $x = -1$'] },
            { label: 'The axis of symmetry is:', options: ['$x = 2$', '$x = -2$', '$x = 3$', '$x = 4$'] },
            { label: 'The parabola opens:', options: ['up', 'down', 'sideways', 'cannot tell'] },
          ],
          correctAnswers: ['$x = 5$ and $x = -1$', '$x = 2$', 'up'],
          hint1: 'Set each factor to $0$: $x-5=0 \\Rightarrow x=5$; $x+1=0 \\Rightarrow x=-1$.',
          hint2: 'The axis is halfway between the roots: $\\frac{5 + (-1)}{2} = 2$.',
          hint3: 'Multiplying out, the $x^2$ term has coefficient $+1$, so $a>0$ and it opens up.',
          explanation: 'Roots $5$ and $-1$; midpoint $\\frac{5-1}{2}=2$ is the axis; leading coefficient $+1$ opens up.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'graphing-quadratics-algebra1',
    sections: [
      {
        id: 'gq4-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Quadratic Functions

**Part 4 of 5 — Vertex Form & Transformations**

---

> 🔑 **Big Payoff:** **Vertex form** $y = a(x - h)^2 + k$ shows the vertex $(h, k)$ at a glance and reveals exactly how the basic parabola $y = x^2$ has been **shifted** and **stretched**.`,
      },
      {
        id: 'gq4-vertexform',
        type: 'text' as const,
        content: `## Vertex Form

$$y = a(x - h)^2 + k \\quad\\Longrightarrow\\quad \\text{vertex } (h,\\, k)$$

> ⚠️ **Sign trap:** $(x - h)$ means the $x$-coordinate is $+h$. So $(x - 3)^2$ has $h = 3$, but $(x + 2)^2 = (x - (-2))^2$ has $h = -2$.

| Vertex form | Vertex $(h, k)$ |
|-------------|-----------------|
| $y = (x - 3)^2 - 4$ | $(3, -4)$ |
| $y = (x + 2)^2 + 1$ | $(-2, 1)$ |
| $y = -2(x - 1)^2 + 5$ | $(1, 5)$ |

The value of $a$ works exactly as in standard form: its **sign** sets the opening direction, and its **size** sets the width.`,
      },
      {
        id: 'gq4-vform-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The vertex of $y = (x + 5)^2 - 3$ is:',
              options: ['$(-5, -3)$', '$(5, -3)$', '$(-5, 3)$', '$(5, 3)$'],
              correctAnswer: 0,
              explanation: '$(x+5)^2 = (x-(-5))^2$, so $h=-5$. With $k=-3$, the vertex is $(-5,-3)$.',
            },
            {
              question: 'Which equation has its vertex at $(4, 1)$ and opens down?',
              options: ['$y = -(x - 4)^2 + 1$', '$y = (x - 4)^2 + 1$', '$y = -(x + 4)^2 + 1$', '$y = (x + 4)^2 - 1$'],
              correctAnswer: 0,
              explanation: 'Vertex $(4,1)$ needs $(x-4)^2 + 1$, and "opens down" needs $a<0$, so $y = -(x-4)^2 + 1$.',
            },
          ],
        },
      },
      {
        id: 'gq4-transformations',
        type: 'text' as const,
        content: `## Transformations of $y = x^2$

Read vertex form as a recipe for moving the **parent parabola** $y = x^2$ (vertex at the origin):

| In $y = a(x - h)^2 + k$ | Effect on $y = x^2$ |
|-------------------------|----------------------|
| $h > 0$ | shift **right** $h$ units |
| $h < 0$ | shift **left** $\\lvert h\\rvert$ units |
| $k > 0$ | shift **up** $k$ units |
| $k < 0$ | shift **down** $\\lvert k\\rvert$ units |
| $\\lvert a\\rvert > 1$ | **narrower** (vertical stretch) |
| $0 < \\lvert a\\rvert < 1$ | **wider** (vertical shrink) |
| $a < 0$ | **flip** to open downward |

### Example: $y = 2(x - 3)^2 + 1$

Start at $y = x^2$, then: shift **right 3**, **up 1**, and **stretch** by $2$ (narrower). The new vertex is $(3, 1)$.

> 💡 The horizontal shift uses the *opposite* sign of $h$ inside the parentheses; the vertical shift $k$ uses its sign as-is.`,
      },
      {
        id: 'gq4-transform-drop',
        type: 'dropdown-select' as const,
        content: `**Describe the Transformation** 🔽

Compare each graph to the parent $y = x^2$.`,
        exercise: {
          dropdowns: [
            { label: 'In $y = (x - 6)^2$, the graph shifts:', options: ['right 6', 'left 6', 'up 6', 'down 6'] },
            { label: 'In $y = x^2 - 4$, the graph shifts:', options: ['down 4', 'up 4', 'right 4', 'left 4'] },
            { label: 'In $y = \\frac{1}{2}x^2$, the graph is:', options: ['wider', 'narrower', 'flipped', 'unchanged'] },
          ],
          correctAnswers: ['right 6', 'down 4', 'wider'],
          hint1: '$(x - 6)^2$ has $h = 6 > 0$, a shift to the right by $6$.',
          hint2: 'A bare $-4$ is the $k$ value: $k=-4$ shifts the graph down $4$.',
          hint3: '$a = \\frac{1}{2}$ has $|a| < 1$, which makes the parabola wider (flatter).',
          explanation: '$h=6$ → right 6; $k=-4$ → down 4; $|a|=\\frac{1}{2}<1$ → wider.',
        },
      },
      {
        id: 'gq4-drill',
        type: 'input-boxes' as const,
        content: `**Vertex Form Practice** 🧮

For $y = -3(x + 2)^2 + 7$, find:

**1)** The vertex $x$-coordinate $= \\,?$
**2)** The vertex $y$-coordinate $= \\,?$
**3)** Does it open up or down? *(type* up *or* down*)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '7', 'down'],
          hint1: '$(x + 2)^2 = (x - (-2))^2$, so $h = -2$.',
          hint2: 'The constant added outside the square is $k = 7$.',
          hint3: '$a = -3 < 0$, so the parabola opens down.',
          explanation: 'Vertex $(h,k) = (-2, 7)$. Since $a=-3<0$, it opens down (and $7$ is the maximum value).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'graphing-quadratics-algebra1',
    sections: [
      {
        id: 'gq5-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Quadratic Functions

**Part 5 of 5 — Putting It All Together & Mastery Check**

---

You can now read a parabola's direction, width, vertex, axis of symmetry, and intercepts straight from an equation. Part 5 ties these into a full graphing routine and finishes with an Exit Quiz.`,
      },
      {
        id: 'gq5-routine',
        type: 'text' as const,
        content: `## The Graphing Routine

To sketch any $y = ax^2 + bx + c$, gather five facts:

| Step | What to find | How |
|------|--------------|-----|
| 1 | **Direction** | sign of $a$: $+$ up, $-$ down |
| 2 | **Axis of symmetry** | $x = -\\dfrac{b}{2a}$ |
| 3 | **Vertex** | plug the axis $x$-value back in for $y$ |
| 4 | **$y$-intercept** | $(0,\\ c)$ |
| 5 | **$x$-intercepts** | solve $ax^2+bx+c=0$ (factor or discriminant) |

Plot the vertex, the intercepts, and use symmetry to mirror points across the axis — then connect with a smooth U.

> 🔑 **One worked sketch:** For $y = x^2 - 4x + 3$ → opens **up**; axis $x = 2$; vertex $(2, -1)$; $y$-intercept $(0, 3)$; $x$-intercepts $(1, 0)$ and $(3, 0)$.`,
      },
      {
        id: 'gq5-full-graph',
        type: 'dropdown-select' as const,
        content: `**Full Analysis** 🔽

Analyze $y = x^2 - 10x + 21$ completely.`,
        exercise: {
          dropdowns: [
            { label: 'Axis of symmetry:', options: ['$x = 5$', '$x = -5$', '$x = 10$', '$x = 21$'] },
            { label: 'Vertex:', options: ['$(5, -4)$', '$(5, 4)$', '$(-5, -4)$', '$(5, 21)$'] },
            { label: '$x$-intercepts:', options: ['$x = 3$ and $x = 7$', '$x = -3$ and $x = -7$', '$x = 3$ and $x = -7$', '$x = 1$ and $x = 21$'] },
            { label: '$y$-intercept:', options: ['$(0, 21)$', '$(0, -21)$', '$(0, 10)$', '$(0, 5)$'] },
          ],
          correctAnswers: ['$x = 5$', '$(5, -4)$', '$x = 3$ and $x = 7$', '$(0, 21)$'],
          hint1: '$x = -\\frac{-10}{2(1)} = \\frac{10}{2} = 5$.',
          hint2: 'Substitute $x=5$: $25 - 50 + 21 = -4$, so vertex $(5,-4)$.',
          hint3: 'Factor: $x^2-10x+21 = (x-3)(x-7) = 0 \\Rightarrow x = 3, 7$. The $y$-intercept is $(0, c) = (0, 21)$.',
          explanation: 'Axis $x=5$; vertex $(5,-4)$; factoring gives roots $3$ and $7$; $y$-intercept $(0,21)$. Note $\\frac{3+7}{2}=5$ matches the axis. ✓',
        },
      },
      {
        id: 'gq5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

For $y = x^2 + 8x + 15$:

**1)** Axis of symmetry: $x = \\,?$
**2)** Vertex $y$-coordinate $= \\,?$
**3)** Smaller $x$-intercept: $x = \\,?$  *(the more negative root)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '-1', '-5'],
          hint1: '$x = -\\frac{8}{2(1)} = -4$.',
          hint2: 'Substitute $x=-4$: $16 - 32 + 15 = -1$.',
          hint3: 'Factor $(x+3)(x+5)=0 \\Rightarrow x = -3$ or $x = -5$. The smaller (more negative) is $-5$.',
          explanation: 'Axis $x=-4$; vertex $(-4,-1)$; roots $-3$ and $-5$, so the smaller is $-5$.',
        },
      },
      {
        id: 'gq5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A parabola opens down and has its highest point at $(1, 9)$. What is its maximum value?',
              options: ['$9$', '$1$', '$-9$', 'There is no maximum'],
              correctAnswer: 0,
              explanation: 'For a downward parabola, the vertex is the highest point. Its $y$-coordinate, $9$, is the maximum value.',
            },
            {
              question: 'How many $x$-intercepts does $y = x^2 + 1$ have?',
              options: ['none', 'one', 'two', 'infinitely many'],
              correctAnswer: 0,
              explanation: '$\\Delta = 0^2 - 4(1)(1) = -4 < 0$, so there are no real $x$-intercepts. The vertex $(0,1)$ sits above the axis and the whole graph stays above it.',
            },
          ],
        },
      },
      {
        id: 'gq5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the vertex of $y = x^2 - 6x + 5$?',
              options: ['$(3, -4)$', '$(-3, -4)$', '$(3, 4)$', '$(6, 5)$'],
              correctAnswer: 0,
              explanation: 'Axis $x = -\\frac{-6}{2} = 3$; substitute: $9 - 18 + 5 = -4$. Vertex $(3, -4)$.',
            },
            {
              question: 'The graph of $y = -(x - 2)^2 + 4$ opens which way and has what vertex?',
              options: ['Opens down, vertex $(2, 4)$', 'Opens up, vertex $(2, 4)$', 'Opens down, vertex $(-2, 4)$', 'Opens up, vertex $(-2, -4)$'],
              correctAnswer: 0,
              explanation: 'Vertex form $a(x-h)^2+k$ gives vertex $(2,4)$; the leading $-1$ ($a<0$) means it opens down.',
            },
            {
              question: 'For $y = ax^2 + bx + c$, where does the parabola cross the $y$-axis?',
              options: ['$(0, c)$', '$(c, 0)$', '$(0, b)$', '$(0, a)$'],
              correctAnswer: 0,
              explanation: 'Setting $x = 0$ gives $y = c$, so the $y$-intercept is always $(0, c)$.',
            },
          ],
        },
      },
    ],
  },
]
