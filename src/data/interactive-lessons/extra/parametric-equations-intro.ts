import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Parametric Equations (AP Calculus BC).
 * Registry key / DB Topic.slug: 'parametric-equations-intro'.
 * 7 parts forming a pedagogical arc: what a parameter is → plotting from a table →
 * eliminating the parameter → direction/orientation & restricted domains →
 * common curves (lines, circles, ellipses) → the dy/dx slope rule for parametric
 * curves → applications (motion, speed) + mixed practice & exit quiz.
 * LaTeX uses DOUBLED backslashes (these are JS template-literal strings).
 * Every coordinate, derivative, and elimination step was recomputed by hand
 * before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'parametric-equations-intro',
    sections: [
      {
        id: 'param1-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Parametric Equations

**Part 1 of 7 — What Is a Parameter?**

---

### Topics in This Part

| Section |
|---------|
| Why \\(y = f(x)\\) Isn't Enough |
| The Parameter \\(t\\) |
| Building a Table of Values |
| Plotting a Parametric Curve |

> 🔑 **Key Concept:** A **parametric equation** describes both coordinates separately, $x = f(t)$ and $y = g(t)$, in terms of a third variable $t$ called the **parameter**. As $t$ runs through its values, the point $(x, y)$ traces out a curve.`,
      },
      {
        id: 'param1-why',
        type: 'text' as const,
        content: `## Why \\(y = f(x)\\) Isn't Enough

A function $y = f(x)$ assigns **exactly one** $y$ to each $x$. That rules out a lot of useful curves:

- A **circle** fails the vertical-line test — each $x$ has two $y$'s.
- A path that **loops back** on itself can't be a function of $x$.
- Plain $y = f(x)$ has **no sense of time or direction** — it's just a static shape.

Parametric equations fix all three. Instead of tying $y$ directly to $x$, we let a **parameter** $t$ drive both:

$$x = f(t), \\qquad y = g(t)$$

> 💡 Think of $t$ as **time**. At each instant $t$, the particle is at the point $\\big(f(t),\\, g(t)\\big)$. The curve is the *trail* the particle leaves behind.`,
      },
      {
        id: 'param1-table-example',
        type: 'text' as const,
        content: `## Building a Table of Values

Consider the parametric equations

$$x = t + 1, \\qquad y = t^2$$

Pick values of $t$, then compute $x$ and $y$ for each:

| $t$ | $x = t+1$ | $y = t^2$ | Point $(x, y)$ |
|-----|-----------|-----------|----------------|
| $-2$ | $-1$ | $4$ | $(-1, 4)$ |
| $-1$ | $0$ | $1$ | $(0, 1)$ |
| $0$ | $1$ | $0$ | $(1, 0)$ |
| $1$ | $2$ | $1$ | $(2, 1)$ |
| $2$ | $3$ | $4$ | $(3, 4)$ |

Plotting those five points in order gives a parabola opening upward, with its lowest point at $(1, 0)$.

> 🔑 **The recipe:** choose $t$ → plug into **both** equations → get one point. Repeat, then connect the dots in **increasing $t$ order**.`,
      },
      {
        id: 'param1-compute-point',
        type: 'input-boxes' as const,
        content: `**Evaluate a Parametric Point** 🧮

For $x = 2t - 3$ and $y = t^2 + 1$, find the coordinates at the given $t$.

**1)** At $t = 4$:  $x = \\,?$
**2)** At $t = 4$:  $y = \\,?$
**3)** At $t = -1$:  $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '17', '-5'],
          hint1: '$x = 2t-3$. At $t=4$: $2(4)-3 = 8-3 = 5$.',
          hint2: '$y = t^2+1$. At $t=4$: $4^2+1 = 16+1 = 17$.',
          hint3: '$x = 2t-3$. At $t=-1$: $2(-1)-3 = -2-3 = -5$.',
          explanation: 'Plug $t$ into BOTH equations. At $t=4$ the point is $(5, 17)$; at $t=-1$ the point is $(-5, 2)$.',
        },
      },
      {
        id: 'param1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the parametric equations $x = f(t)$, $y = g(t)$, the variable $t$ is called the:',
              options: ['parameter', 'coefficient', 'asymptote', 'discriminant'],
              correctAnswer: 0,
              explanation: '$t$ is the **parameter** — the independent variable that drives both $x$ and $y$. It is usually thought of as time.',
            },
            {
              question: 'For $x = t^2$ and $y = 3t$, what point corresponds to $t = 2$?',
              options: ['$(4, 6)$', '$(2, 3)$', '$(6, 4)$', '$(4, 5)$'],
              correctAnswer: 0,
              explanation: '$x = 2^2 = 4$ and $y = 3(2) = 6$, giving the point $(4, 6)$.',
            },
          ],
        },
      },
      {
        id: 'param1-table-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill the Table** 🔽

For $x = t + 1$, $y = t^2$ (the curve from above), choose the correct entries.`,
        exercise: {
          dropdowns: [
            { label: 'At $t = -2$, the point $(x, y)$ is:', options: ['$(-1, 4)$', '$(-2, 4)$', '$(-1, -4)$', '$(1, 4)$'] },
            { label: 'At $t = 0$, the point $(x, y)$ is:', options: ['$(1, 0)$', '$(0, 0)$', '$(0, 1)$', '$(1, 1)$'] },
            { label: 'The lowest point of this parabola is at:', options: ['$(1, 0)$', '$(0, 0)$', '$(-1, 4)$', '$(3, 4)$'] },
          ],
          correctAnswers: ['$(-1, 4)$', '$(1, 0)$', '$(1, 0)$'],
          hint1: 'At $t=-2$: $x = -2+1 = -1$, $y = (-2)^2 = 4$.',
          hint2: 'At $t=0$: $x = 0+1 = 1$, $y = 0^2 = 0$.',
          hint3: '$y = t^2$ is smallest at $t=0$, where the point is $(1, 0)$ — the vertex.',
          explanation: 'Plug each $t$ into both equations. The minimum of $y = t^2$ is at $t=0$, giving the vertex $(1, 0)$.',
        },
      },
      {
        id: 'param1-wrapup',
        type: 'text' as const,
        content: `## Looking Ahead

You can now turn a value of $t$ into a point and a list of points into a curve. But a table only samples a few points. Often we'd like the **whole curve at once** as a relationship between $x$ and $y$.

In **Part 2** we learn to *eliminate the parameter* — to collapse $x = f(t)$ and $y = g(t)$ back into a single equation in $x$ and $y$.

> 💡 Parametric form and Cartesian form ($y = f(x)$) are two languages for the same curve. Soon you'll translate freely between them.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'parametric-equations-intro',
    sections: [
      {
        id: 'param2-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Parametric Equations

**Part 2 of 7 — Eliminating the Parameter**

---

> 🔑 **The Idea:** *Eliminating the parameter* means solving one equation for $t$ and substituting into the other, leaving a single Cartesian equation that relates $x$ and $y$ directly.`,
      },
      {
        id: 'param2-solve-sub',
        type: 'text' as const,
        content: `## Method 1 — Solve and Substitute

This works whenever you can easily solve one equation for $t$.

### Worked Example: $x = t + 1$, $y = t^2$

1. **Solve** the easy equation for $t$: from $x = t+1$ we get $t = x - 1$.
2. **Substitute** into the other: $y = t^2 = (x-1)^2$.

$$\\boxed{\\,y = (x-1)^2\\,}$$

That's the upward parabola with vertex $(1, 0)$ — exactly the shape we plotted in Part 1.

> ✅ **Check** at $t = 2$: parametric gives $(3, 4)$. Cartesian: $y = (3-1)^2 = 4$ ✓`,
      },
      {
        id: 'param2-worked-linear',
        type: 'text' as const,
        content: `### Worked Example: $x = 2t - 3$, $y = t + 4$

Solve the simpler equation for $t$. From $y = t + 4$ we get $t = y - 4$. Substitute:

$$x = 2(y - 4) - 3 = 2y - 8 - 3 = 2y - 11$$

So $x = 2y - 11$, a **line**. Solving for $y$: $y = \\dfrac{x + 11}{2}$.

> 💡 When both $x$ and $y$ are **linear** in $t$, eliminating the parameter always gives a **straight line**.`,
      },
      {
        id: 'param2-eliminate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Eliminate the parameter: $x = t - 2$, $\\;y = t^2$. The Cartesian equation is:',
              options: ['$y = (x+2)^2$', '$y = (x-2)^2$', '$y = x^2 - 2$', '$y = x^2 + 2$'],
              correctAnswer: 0,
              explanation: 'Solve $x = t-2$ for $t$: $t = x+2$. Then $y = t^2 = (x+2)^2$.',
            },
            {
              question: 'For $x = 3t$ and $y = t - 5$, which substitution eliminates $t$ most directly?',
              options: ['$t = \\frac{x}{3}$, then $y = \\frac{x}{3} - 5$', '$t = 3x$, then $y = 3x - 5$', '$t = y + 5$ only works if you ignore $x$', '$t = x - 5$'],
              correctAnswer: 0,
              explanation: 'From $x = 3t$, $t = \\frac{x}{3}$. Substitute into $y = t - 5$ to get $y = \\frac{x}{3} - 5$, a line.',
            },
          ],
        },
      },
      {
        id: 'param2-trig-note',
        type: 'text' as const,
        content: `## Method 2 — Trig Identities (Preview)

When $x$ and $y$ involve sine and cosine, you usually **can't** solve for $t$ cleanly. Instead use the **Pythagorean identity**

$$\\cos^2 t + \\sin^2 t = 1$$

### Quick Example: $x = \\cos t$, $y = \\sin t$

Here $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$, the **unit circle**.

We'll explore circles and ellipses fully in Part 5. For now, just notice the identity does the eliminating *for* you.

> ⚠️ Don't try to write $t = \\cos^{-1} x$ and substitute — it's messy and loses information. Reach for an identity instead.`,
      },
      {
        id: 'param2-method-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Tool** 🔽

Choose the best first step to eliminate the parameter.`,
        exercise: {
          dropdowns: [
            { label: 'For $x = t + 5$, $y = t^3$, first:', options: ['solve $x = t+5$ for $t$, then substitute', 'use $\\cos^2 t + \\sin^2 t = 1$', 'square both equations', 'set $x = y$'] },
            { label: 'For $x = \\cos t$, $y = \\sin t$, first:', options: ['use $\\cos^2 t + \\sin^2 t = 1$', 'solve for $t = \\cos^{-1}x$', 'add the equations', 'divide $y$ by $x$'] },
            { label: 'Both $x$ and $y$ linear in $t$ always eliminate to a:', options: ['line', 'circle', 'parabola', 'ellipse'] },
          ],
          correctAnswers: ['solve $x = t+5$ for $t$, then substitute', 'use $\\cos^2 t + \\sin^2 t = 1$', 'line'],
          hint1: 'When one equation is easy to solve for $t$ (like $x = t+5$), solve-and-substitute is fastest.',
          hint2: 'With sine and cosine, reach for the Pythagorean identity instead of inverse trig.',
          hint3: 'Linear-in-$t$ for both coordinates means a constant slope — a straight line.',
          explanation: 'Solve-and-substitute for polynomial forms; the Pythagorean identity for trig; two linear equations give a line.',
        },
      },
      {
        id: 'param2-eliminate-drill',
        type: 'input-boxes' as const,
        content: `**Eliminate and Evaluate** 🧮

For $x = t - 1$ and $y = 2t + 3$:

**1)** Solve for $t$ in terms of $x$:  $t = x + \\,?$
**2)** The Cartesian equation is $y = 2x + \\,?$  *(enter the constant)*
**3)** Using that line, find $y$ when $x = 4$:  $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '5', '13'],
          hint1: 'From $x = t - 1$, add $1$ to both sides: $t = x + 1$.',
          hint2: '$y = 2t + 3 = 2(x+1) + 3 = 2x + 2 + 3 = 2x + 5$, so the constant is $5$.',
          hint3: '$y = 2(4) + 5 = 8 + 5 = 13$.',
          explanation: '$t = x+1$, so $y = 2(x+1)+3 = 2x+5$. At $x = 4$: $y = 13$. (Check with parametric: $x=4$ means $t=5$, $y = 2(5)+3 = 13$ ✓.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'parametric-equations-intro',
    sections: [
      {
        id: 'param3-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Parametric Equations

**Part 3 of 7 — Orientation, Direction & Restricted Domains**

---

> 🔑 **Why parametric is richer:** Eliminating the parameter gives the *shape*, but it **throws away** two things a parametric curve carries: the **direction** of travel and the **portion** of the curve actually traced.`,
      },
      {
        id: 'param3-orientation',
        type: 'text' as const,
        content: `## Orientation (Direction of Travel)

As $t$ **increases**, the point moves along the curve in a definite direction. We mark this with **arrows** and call it the curve's **orientation**.

### Example: $x = t$, $y = t^2$

| $t$ | Point | Moving... |
|-----|-------|-----------|
| $-2$ | $(-2, 4)$ | start (upper left) |
| $0$ | $(0, 0)$ | through the vertex |
| $2$ | $(2, 4)$ | end (upper right) |

As $t$ increases the particle sweeps **left to right** along the parabola.

> 💡 Two different parametrizations can trace the **same shape** in **opposite directions**. For instance $x = -t$, $y = t^2$ gives the same parabola but traced **right to left**.`,
      },
      {
        id: 'param3-orientation-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $x = t$, $y = t^2$, in which direction is the parabola traced as $t$ increases from $-3$ to $3$?',
              options: ['Left to right', 'Right to left', 'Top to bottom only', 'It stays at one point'],
              correctAnswer: 0,
              explanation: 'As $t$ increases, $x = t$ increases, so the particle moves from left ($x=-3$) to right ($x=3$).',
            },
            {
              question: 'Eliminating the parameter from $x = \\cos t$, $y = \\sin t$ gives $x^2 + y^2 = 1$. What information is LOST?',
              options: ['The starting point and direction of travel around the circle', 'The radius of the circle', 'The center of the circle', 'Whether the curve is a circle'],
              correctAnswer: 0,
              explanation: 'The Cartesian equation $x^2+y^2=1$ describes the whole circle but says nothing about where you start or whether you go clockwise or counterclockwise — that orientation info lives only in the parametrization.',
            },
          ],
        },
      },
      {
        id: 'param3-restricted',
        type: 'text' as const,
        content: `## Restricted Domains Trace Only Part of a Curve

If $t$ is limited to an interval, you trace only a **piece** of the full Cartesian curve.

### Example: $x = t^2$, $y = t$, for $0 \\le t \\le 2$

Eliminating: $t = y$, so $x = y^2$ — a parabola opening **rightward**. But because $t$ runs only from $0$ to $2$:

- At $t = 0$: $(0, 0)$ (the vertex)
- At $t = 2$: $(4, 2)$ (the endpoint)

Since $y = t \\ge 0$, we get **only the upper half** of the sideways parabola, from $(0,0)$ to $(4, 2)$.

> ⚠️ **Always state the domain.** "Eliminate the parameter" is only half the answer — the **range of $x$ and $y$** (or the endpoints) tells which arc you actually have.`,
      },
      {
        id: 'param3-restricted-drill',
        type: 'input-boxes' as const,
        content: `**Endpoints of a Restricted Curve** 🧮

For $x = t + 1$, $y = t^2$, with $-1 \\le t \\le 3$:

**1)** $x$-coordinate at the start ($t = -1$):  $x = \\,?$
**2)** $y$-coordinate at the end ($t = 3$):  $y = \\,?$
**3)** Smallest value of $y$ on this interval:  $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '9', '0'],
          hint1: 'At $t = -1$: $x = -1 + 1 = 0$.',
          hint2: 'At $t = 3$: $y = 3^2 = 9$.',
          hint3: '$y = t^2$ is smallest where $t$ is closest to $0$. Since $t=0$ is inside $[-1,3]$, the minimum is $y = 0^2 = 0$.',
          explanation: 'Start $(0, 1)$ at $t=-1$, end $(4, 9)$ at $t=3$. The minimum $y$ occurs at $t=0$ (inside the interval), giving $y = 0$.',
        },
      },
      {
        id: 'param3-direction-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Orientation** 🔽

Each parametrization traces a curve. Identify the direction of travel as $t$ increases.`,
        exercise: {
          dropdowns: [
            { label: '$x = t,\\; y = 2t$ traces a line moving:', options: ['up and to the right', 'down and to the right', 'up and to the left', 'straight down'] },
            { label: '$x = -t,\\; y = -t$ traces a line moving:', options: ['down and to the left', 'up and to the right', 'down and to the right', 'up and to the left'] },
            { label: 'A larger interval of $t$ generally traces:', options: ['a longer piece of the curve', 'a shorter piece of the curve', 'always the whole plane', 'the same single point'] },
          ],
          correctAnswers: ['up and to the right', 'down and to the left', 'a longer piece of the curve'],
          hint1: 'As $t$ increases, both $x=t$ and $y=2t$ increase → up and to the right.',
          hint2: 'As $t$ increases, $x=-t$ and $y=-t$ both decrease → down and to the left.',
          hint3: 'A wider range of $t$ samples more points, so it traces a longer arc.',
          explanation: 'Track whether $x$ and $y$ increase or decrease as $t$ grows. Increasing $t$ over a wider interval sweeps out more of the curve.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'parametric-equations-intro',
    sections: [
      {
        id: 'param4-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Parametric Equations

**Part 4 of 7 — Parametrizing Lines and Segments**

---

> 🔑 **Big idea:** The most common parametric form on the BC exam is the **line**. A point plus a direction, scaled by $t$, sweeps out a straight path — and choosing the $t$-interval lets you carve out an exact **segment**.`,
      },
      {
        id: 'param4-line-form',
        type: 'text' as const,
        content: `## The Standard Line Parametrization

A line through the point $(x_0, y_0)$ with direction $(a, b)$ is

$$x = x_0 + a\\,t, \\qquad y = y_0 + b\\,t$$

- At $t = 0$ you're at the starting point $(x_0, y_0)$.
- The **slope** of the line is $\\dfrac{b}{a}$ (rise over run of the direction).

### Example: line through $(2, 1)$ with direction $(3, 4)$

$$x = 2 + 3t, \\qquad y = 1 + 4t$$

Eliminate: $t = \\dfrac{x-2}{3}$, so $y = 1 + 4\\cdot\\dfrac{x-2}{3} = 1 + \\dfrac{4}{3}(x - 2)$ — slope $\\dfrac{4}{3}$, through $(2,1)$ ✓.`,
      },
      {
        id: 'param4-segment',
        type: 'text' as const,
        content: `## Parametrizing a Segment Between Two Points

To go from $A = (x_1, y_1)$ to $B = (x_2, y_2)$ as $t$ runs from $0$ to $1$:

$$x = x_1 + (x_2 - x_1)\\,t, \\qquad y = y_1 + (y_2 - y_1)\\,t, \\qquad 0 \\le t \\le 1$$

- At $t = 0$: you're at $A$.
- At $t = 1$: you're at $B$.
- At $t = \\tfrac{1}{2}$: you're at the **midpoint**.

### Example: from $A = (1, 2)$ to $B = (5, 10)$

$$x = 1 + 4t, \\qquad y = 2 + 8t, \\qquad 0 \\le t \\le 1$$

> 💡 This is just **linear interpolation**. The differences $x_2 - x_1$ and $y_2 - y_1$ are the direction; the restriction $0 \\le t \\le 1$ stops you exactly at $B$.`,
      },
      {
        id: 'param4-line-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the slope of the line $x = 4 + 2t$, $y = -1 + 6t$?',
              options: ['$3$', '$\\frac{1}{3}$', '$2$', '$6$'],
              correctAnswer: 0,
              explanation: 'Slope $= \\frac{b}{a} = \\frac{6}{2} = 3$ (the coefficient of $t$ in $y$ over the coefficient of $t$ in $x$).',
            },
            {
              question: 'The segment from $(0, 0)$ to $(6, 2)$ is parametrized for $0 \\le t \\le 1$ by:',
              options: ['$x = 6t,\\; y = 2t$', '$x = 6t,\\; y = 6t$', '$x = t,\\; y = t$', '$x = 2t,\\; y = 6t$'],
              correctAnswer: 0,
              explanation: 'Differences are $6 - 0 = 6$ and $2 - 0 = 2$, so $x = 0 + 6t = 6t$ and $y = 0 + 2t = 2t$. At $t=1$ you reach $(6,2)$ ✓.',
            },
          ],
        },
      },
      {
        id: 'param4-segment-drill',
        type: 'input-boxes' as const,
        content: `**Build a Segment** 🧮

Parametrize the segment from $A = (3, 1)$ to $B = (9, 7)$ as $x = 3 + at$, $y = 1 + bt$ for $0 \\le t \\le 1$.

**1)** The $x$-direction coefficient $a = \\,?$
**2)** The $y$-direction coefficient $b = \\,?$
**3)** The midpoint's $x$-coordinate (at $t = \\tfrac12$):  $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '6', '6'],
          hint1: '$a = x_2 - x_1 = 9 - 3 = 6$.',
          hint2: '$b = y_2 - y_1 = 7 - 1 = 6$.',
          hint3: 'At $t = \\frac12$: $x = 3 + 6\\cdot\\frac12 = 3 + 3 = 6$.',
          explanation: '$a = 6$, $b = 6$, so $x = 3 + 6t$, $y = 1 + 6t$. The midpoint at $t=\\frac12$ is $(6, 4)$, so $x = 6$.',
        },
      },
      {
        id: 'param4-line-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Line** 🔽

The line is $x = 5 + 2t$, $y = 3 - 4t$.`,
        exercise: {
          dropdowns: [
            { label: 'Point at $t = 0$:', options: ['$(5, 3)$', '$(2, -4)$', '$(3, 5)$', '$(0, 0)$'] },
            { label: 'Direction vector $(a, b)$:', options: ['$(2, -4)$', '$(5, 3)$', '$(-2, 4)$', '$(4, 2)$'] },
            { label: 'Slope of the line:', options: ['$-2$', '$2$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'] },
          ],
          correctAnswers: ['$(5, 3)$', '$(2, -4)$', '$-2$'],
          hint1: 'Set $t = 0$: $x = 5$, $y = 3$.',
          hint2: 'The coefficients of $t$ are the direction: $(a, b) = (2, -4)$.',
          hint3: 'Slope $= \\frac{b}{a} = \\frac{-4}{2} = -2$.',
          explanation: 'Starting point $(5,3)$, direction $(2,-4)$, slope $\\frac{-4}{2} = -2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'parametric-equations-intro',
    sections: [
      {
        id: 'param5-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Parametric Equations

**Part 5 of 7 — Circles and Ellipses**

---

> 🔑 **The trig parametrization:** Sine and cosine are *built* for circular motion. Knowing the standard forms for circles and ellipses cold is worth easy points on the BC exam.`,
      },
      {
        id: 'param5-circle',
        type: 'text' as const,
        content: `## The Circle

A circle of **radius $r$** centered at the **origin** is parametrized by

$$x = r\\cos t, \\qquad y = r\\sin t, \\qquad 0 \\le t \\le 2\\pi$$

**Why it works:** $x^2 + y^2 = r^2\\cos^2 t + r^2\\sin^2 t = r^2(\\cos^2 t + \\sin^2 t) = r^2$.

A circle centered at $(h, k)$ shifts both equations:

$$x = h + r\\cos t, \\qquad y = k + r\\sin t$$

| $t$ | $(\\cos t, \\sin t)$ | Point on unit circle |
|-----|---------------------|----------------------|
| $0$ | $(1, 0)$ | right |
| $\\frac{\\pi}{2}$ | $(0, 1)$ | top |
| $\\pi$ | $(-1, 0)$ | left |
| $\\frac{3\\pi}{2}$ | $(0, -1)$ | bottom |

> 💡 With $x = r\\cos t,\\, y = r\\sin t$, the curve starts at the **right** ($t=0$) and goes **counterclockwise**.`,
      },
      {
        id: 'param5-circle-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which parametrization traces a circle of radius $3$ centered at the origin?',
              options: ['$x = 3\\cos t,\\; y = 3\\sin t$', '$x = \\cos 3t,\\; y = \\sin 3t$', '$x = 3 + \\cos t,\\; y = 3 + \\sin t$', '$x = 3\\cos t,\\; y = \\sin t$'],
              correctAnswer: 0,
              explanation: 'Radius $r = 3$ multiplies BOTH $\\cos t$ and $\\sin t$: $x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9 = 3^2$.',
            },
            {
              question: 'For $x = \\cos t$, $y = \\sin t$, where is the particle at $t = \\frac{\\pi}{2}$?',
              options: ['$(0, 1)$ — the top', '$(1, 0)$ — the right', '$(-1, 0)$ — the left', '$(0, -1)$ — the bottom'],
              correctAnswer: 0,
              explanation: '$x = \\cos\\frac{\\pi}{2} = 0$ and $y = \\sin\\frac{\\pi}{2} = 1$, so the point is $(0, 1)$, the top of the unit circle.',
            },
          ],
        },
      },
      {
        id: 'param5-ellipse',
        type: 'text' as const,
        content: `## The Ellipse

Stretch the circle by using **different** radii on $x$ and $y$:

$$x = a\\cos t, \\qquad y = b\\sin t, \\qquad 0 \\le t \\le 2\\pi$$

Eliminate with the identity. Since $\\cos t = \\dfrac{x}{a}$ and $\\sin t = \\dfrac{y}{b}$:

$$\\left(\\frac{x}{a}\\right)^2 + \\left(\\frac{y}{b}\\right)^2 = \\cos^2 t + \\sin^2 t = 1 \\;\\Longrightarrow\\; \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$

That's the standard **ellipse** with semi-axes $a$ (horizontal) and $b$ (vertical).

### Example: $x = 4\\cos t$, $y = 2\\sin t$

$$\\frac{x^2}{16} + \\frac{y^2}{4} = 1 \\quad\\text{— ellipse, } a = 4,\\; b = 2.$$

> ⚠️ A common trap: $x = 4\\cos t$ means $a = 4$, **not** $a = 16$. The denominator $a^2 = 16$ comes *after* squaring.`,
      },
      {
        id: 'param5-ellipse-drill',
        type: 'input-boxes' as const,
        content: `**Circles and Ellipses** 🧮

**1)** For $x = 5\\cos t$, $y = 5\\sin t$, the radius is  $r = \\,?$
**2)** For $x = 6\\cos t$, $y = 3\\sin t$, the horizontal semi-axis is  $a = \\,?$
**3)** For that same ellipse, the constant on the right of $\\frac{x^2}{36} + \\frac{y^2}{9} = \\,?$  is`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '6', '1'],
          hint1: '$x = 5\\cos t$, $y = 5\\sin t$ gives $x^2+y^2 = 25 = 5^2$, so $r = 5$.',
          hint2: '$x = 6\\cos t$ means the horizontal semi-axis is $a = 6$ (not $36$).',
          hint3: 'Every standard ellipse identity equals $1$: $\\cos^2 t + \\sin^2 t = 1$.',
          explanation: 'Radius $r = 5$; horizontal semi-axis $a = 6$; the ellipse identity always equals $1$.',
        },
      },
      {
        id: 'param5-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Curve to Equation** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$x = 2\\cos t,\\; y = 2\\sin t$ is a:', options: ['circle of radius 2', 'circle of radius 4', 'ellipse', 'line'] },
            { label: '$x = 3\\cos t,\\; y = 7\\sin t$ is a(n):', options: ['ellipse', 'circle of radius 3', 'circle of radius 7', 'parabola'] },
            { label: '$x = 1 + \\cos t,\\; y = -2 + \\sin t$ is a circle centered at:', options: ['$(1, -2)$', '$(-1, 2)$', '$(1, 2)$', '$(0, 0)$'] },
          ],
          correctAnswers: ['circle of radius 2', 'ellipse', '$(1, -2)$'],
          hint1: 'Equal coefficients on $\\cos t$ and $\\sin t$ → circle; the coefficient is the radius.',
          hint2: 'Different coefficients ($3 \\ne 7$) → ellipse.',
          hint3: '$x = h + \\cos t$, $y = k + \\sin t$ centers the circle at $(h, k)$.',
          explanation: 'Equal radii = circle; unequal = ellipse; the added constants $(h, k)$ give the center.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'parametric-equations-intro',
    sections: [
      {
        id: 'param6-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Parametric Equations

**Part 6 of 7 — The Slope $\\frac{dy}{dx}$ of a Parametric Curve**

---

> 🔑 **The calculus payoff:** Even without eliminating the parameter, you can find the slope of the tangent line directly from $\\dfrac{dx}{dt}$ and $\\dfrac{dy}{dt}$.`,
      },
      {
        id: 'param6-rule',
        type: 'text' as const,
        content: `## The Parametric Slope Rule

By the chain rule, since $y$ depends on $t$ and $t$ relates to $x$:

$$\\frac{dy}{dx} = \\frac{\\;dy/dt\\;}{dx/dt}, \\qquad \\text{provided } \\frac{dx}{dt} \\ne 0$$

**In words:** the slope is the $t$-derivative of $y$ divided by the $t$-derivative of $x$.

### Worked Example: $x = t^2$, $y = t^3$

Differentiate each with respect to $t$:

$$\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^2$$

$$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2} \\quad (t \\ne 0)$$

At $t = 2$: $\\dfrac{dy}{dx} = \\dfrac{3(2)}{2} = 3$.

> ⚠️ Do **not** divide $\\frac{dx}{dt}$ by $\\frac{dy}{dt}$. It's $\\frac{dy/dt}{dx/dt}$ — $y$ on top, just like ordinary slope is "rise over run."`,
      },
      {
        id: 'param6-slope-drill',
        type: 'input-boxes' as const,
        content: `**Compute Parametric Slopes** 🧮

For $x = t^2 + 1$ and $y = 4t$:

**1)** $\\dfrac{dx}{dt} = 2t$. Find $\\dfrac{dy}{dt} = \\,?$
**2)** Write $\\dfrac{dy}{dx} = \\dfrac{4}{?\\,t}$  *(enter the missing number)*
**3)** Evaluate $\\dfrac{dy}{dx}$ at $t = 1$:  $\\dfrac{dy}{dx} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '2'],
          hint1: '$y = 4t$, so $\\frac{dy}{dt} = 4$.',
          hint2: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{4}{2t}$, so the missing number is $2$.',
          hint3: 'At $t = 1$: $\\frac{4}{2(1)} = \\frac{4}{2} = 2$.',
          explanation: '$\\frac{dy}{dt} = 4$, $\\frac{dx}{dt} = 2t$, so $\\frac{dy}{dx} = \\frac{4}{2t} = \\frac{2}{t}$. At $t=1$ that is $2$.',
        },
      },
      {
        id: 'param6-tangent',
        type: 'text' as const,
        content: `## Horizontal and Vertical Tangents

The sign and value of $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$ tell you about tangent lines:

| Condition | Tangent line |
|-----------|--------------|
| $\\dfrac{dy}{dt} = 0$ and $\\dfrac{dx}{dt} \\ne 0$ | **Horizontal** ($\\frac{dy}{dx} = 0$) |
| $\\dfrac{dx}{dt} = 0$ and $\\dfrac{dy}{dt} \\ne 0$ | **Vertical** ($\\frac{dy}{dx}$ undefined) |

### Example: $x = t^2 - 4$, $y = t^2 - 2t$

$\\dfrac{dx}{dt} = 2t$ and $\\dfrac{dy}{dt} = 2t - 2 = 2(t-1)$.

- **Horizontal** tangent where $\\frac{dy}{dt} = 0$: $t = 1$ (and $\\frac{dx}{dt} = 2 \\ne 0$ ✓).
- **Vertical** tangent where $\\frac{dx}{dt} = 0$: $t = 0$ (and $\\frac{dy}{dt} = -2 \\ne 0$ ✓).

> 💡 Always confirm the *other* derivative is nonzero. If both are $0$ at the same $t$, the slope needs more careful analysis.`,
      },
      {
        id: 'param6-tangent-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A parametric curve has a HORIZONTAL tangent when:',
              options: ['$\\frac{dy}{dt} = 0$ and $\\frac{dx}{dt} \\ne 0$', '$\\frac{dx}{dt} = 0$ and $\\frac{dy}{dt} \\ne 0$', 'both derivatives equal zero', '$\\frac{dy}{dx} = 1$'],
              correctAnswer: 0,
              explanation: 'A horizontal tangent has slope $0$, so $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = 0$ requires the numerator $\\frac{dy}{dt} = 0$ (with $\\frac{dx}{dt} \\ne 0$).',
            },
            {
              question: 'For $x = t^3$, $y = t^2$, what is $\\frac{dy}{dx}$ in terms of $t$?',
              options: ['$\\frac{2}{3t}$', '$\\frac{3t}{2}$', '$\\frac{2}{3t^2}$', '$\\frac{3t^2}{2t}$'],
              correctAnswer: 0,
              explanation: '$\\frac{dy}{dt} = 2t$, $\\frac{dx}{dt} = 3t^2$, so $\\frac{dy}{dx} = \\frac{2t}{3t^2} = \\frac{2}{3t}$.',
            },
          ],
        },
      },
      {
        id: 'param6-tangent-dropdown',
        type: 'dropdown-select' as const,
        content: `**Horizontal or Vertical?** 🔽

The curve is $x = t^2 - 9$, $y = t^3 - 3t$, so $\\dfrac{dx}{dt} = 2t$ and $\\dfrac{dy}{dt} = 3t^2 - 3 = 3(t^2-1)$.`,
        exercise: {
          dropdowns: [
            { label: 'A vertical tangent occurs where $\\frac{dx}{dt} = 0$, i.e. at $t = $', options: ['$0$', '$1$', '$-1$', '$3$'] },
            { label: 'Horizontal tangents occur where $3(t^2 - 1) = 0$, i.e. at $t = $', options: ['$\\pm 1$', '$0$', '$\\pm 3$', '$\\pm \\sqrt{3}$'] },
            { label: 'At $t = 2$, the slope $\\frac{dy}{dx} = \\frac{3(4-1)}{2(2)} = \\frac{9}{4}$, which is:', options: ['positive', 'negative', 'zero', 'undefined'] },
          ],
          correctAnswers: ['$0$', '$\\pm 1$', 'positive'],
          hint1: '$\\frac{dx}{dt} = 2t = 0$ only when $t = 0$.',
          hint2: '$3(t^2 - 1) = 0 \\Rightarrow t^2 = 1 \\Rightarrow t = \\pm 1$.',
          hint3: '$\\frac{9}{4} > 0$, so the slope is positive.',
          explanation: 'Vertical tangent at $t = 0$; horizontal tangents at $t = \\pm 1$; at $t=2$ the slope is $\\frac{9}{4} > 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'parametric-equations-intro',
    sections: [
      {
        id: 'param7-intro',
        type: 'text' as const,
        content: `# 🎯 Introduction to Parametric Equations

**Part 7 of 7 — Motion, Speed & Mastery Check**

---

You can now build, plot, eliminate, orient, and differentiate parametric curves. This final part connects them to **motion** — the original reason parametric equations exist — and then tests everything.`,
      },
      {
        id: 'param7-velocity',
        type: 'text' as const,
        content: `## Position, Velocity, and Speed

If a particle's position at time $t$ is $\\big(x(t),\\, y(t)\\big)$, then:

| Quantity | Formula |
|----------|---------|
| Velocity vector | $\\left\\langle \\dfrac{dx}{dt},\\, \\dfrac{dy}{dt} \\right\\rangle$ |
| **Speed** | $\\sqrt{\\left(\\dfrac{dx}{dt}\\right)^2 + \\left(\\dfrac{dy}{dt}\\right)^2}$ |
| Direction of motion | slope $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$ |

### Example: $x = 3t$, $y = 4t$

$\\dfrac{dx}{dt} = 3$, $\\dfrac{dy}{dt} = 4$, so the speed is

$$\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5.$$

> 💡 Speed is the **magnitude** of the velocity vector — a single nonnegative number — while velocity is a vector with both components.`,
      },
      {
        id: 'param7-speed-drill',
        type: 'input-boxes' as const,
        content: `**Speed of a Particle** 🧮

A particle moves with $x = 6t$ and $y = 8t$.

**1)** $\\dfrac{dx}{dt} = \\,?$
**2)** $\\dfrac{dy}{dt} = \\,?$
**3)** Speed $= \\sqrt{(dx/dt)^2 + (dy/dt)^2} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '8', '10'],
          hint1: '$x = 6t \\Rightarrow \\frac{dx}{dt} = 6$.',
          hint2: '$y = 8t \\Rightarrow \\frac{dy}{dt} = 8$.',
          hint3: 'Speed $= \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          explanation: '$\\frac{dx}{dt} = 6$, $\\frac{dy}{dt} = 8$, speed $= \\sqrt{36+64} = \\sqrt{100} = 10$.',
        },
      },
      {
        id: 'param7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Eliminate the parameter: $x = t + 2$, $y = t^2 - 1$.',
              options: ['$y = (x-2)^2 - 1$', '$y = (x+2)^2 - 1$', '$y = x^2 - 1$', '$y = (x-2)^2 + 1$'],
              correctAnswer: 0,
              explanation: 'From $x = t+2$, $t = x - 2$. Then $y = t^2 - 1 = (x-2)^2 - 1$.',
            },
            {
              question: 'For $x = t^2$, $y = t^3 - 3t$, find $\\frac{dy}{dx}$ in terms of $t$.',
              options: ['$\\frac{3t^2 - 3}{2t}$', '$\\frac{2t}{3t^2 - 3}$', '$\\frac{3t^2 - 3}{2}$', '$3t^2 - 3$'],
              correctAnswer: 0,
              explanation: '$\\frac{dy}{dt} = 3t^2 - 3$, $\\frac{dx}{dt} = 2t$, so $\\frac{dy}{dx} = \\frac{3t^2-3}{2t}$.',
            },
          ],
        },
      },
      {
        id: 'param7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Task | Key move |
|------|----------|
| Find a point | plug $t$ into **both** $x(t)$ and $y(t)$ |
| Eliminate the parameter | solve one equation for $t$, substitute; or use $\\cos^2 t + \\sin^2 t = 1$ |
| Parametrize a segment $A\\to B$ | $x = x_1 + (x_2-x_1)t,\\; y = y_1 + (y_2-y_1)t,\\; 0\\le t\\le 1$ |
| Circle radius $r$, center $(h,k)$ | $x = h + r\\cos t,\\; y = k + r\\sin t$ |
| Slope | $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$ |
| Speed | $\\sqrt{(dx/dt)^2 + (dy/dt)^2}$ |

> ⚠️ Two reminders: keep the **orientation/domain** (eliminating loses it), and put $\\frac{dy}{dt}$ **on top** in the slope rule.`,
      },
      {
        id: 'param7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What curve does $x = 4\\cos t$, $y = 4\\sin t$ trace?',
              options: ['A circle of radius $4$ centered at the origin', 'An ellipse with $a = 4$, $b = 16$', 'A line of slope $4$', 'A parabola'],
              correctAnswer: 0,
              explanation: 'Equal coefficients $4$ on both $\\cos t$ and $\\sin t$ give $x^2 + y^2 = 16 = 4^2$ — a circle of radius $4$.',
            },
            {
              question: 'For $x = t^2 + 1$, $y = 2t$, what is $\\frac{dy}{dx}$ at $t = 3$?',
              options: ['$\\frac{1}{3}$', '$3$', '$6$', '$\\frac{2}{3}$'],
              correctAnswer: 0,
              explanation: '$\\frac{dy}{dt} = 2$, $\\frac{dx}{dt} = 2t$, so $\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}$. At $t = 3$: $\\frac{1}{3}$.',
            },
            {
              question: 'A particle has $x = 5t$, $y = 12t$. Its speed is:',
              options: ['$13$', '$17$', '$\\sqrt{17}$', '$60$'],
              correctAnswer: 0,
              explanation: 'Speed $= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
            },
          ],
        },
      },
    ],
  },
]
