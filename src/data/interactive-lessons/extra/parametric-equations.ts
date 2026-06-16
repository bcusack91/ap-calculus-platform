import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Parametric Equations (AP Precalculus).
 * Registry key: 'parametric-equations' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: what is a parameter → plotting & direction →
 * eliminating the parameter → modeling motion (position/velocity over time) →
 * parametrizing lines & circles → conics, ellipses & transformations →
 * mixed practice + exit quiz.
 * Interactive practice mixes multiple-choice + input-boxes + dropdown each part.
 * Scope is Precalculus: graphing, conversion, and modeling — NOT calculus
 * (derivatives/arc length live in the BC 'parametric-calculus' lesson).
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'parametric-equations',
    sections: [
      {
        id: 'param1-intro',
        type: 'text' as const,
        content: `# 🧭 Parametric Equations

**Part 1 of 7 — What Is a Parameter?**

---

### Topics in This Part

| Section |
|---------|
| Two Equations, One Curve |
| Building a Table of Values |
| Reading a Point Off the Curve |

> 🔑 **Key Concept:** A **parametric** curve describes $x$ and $y$ *separately*, each as a function of a third variable called the **parameter** (usually $t$). Instead of $y = f(x)$, you get $x = f(t)$ **and** $y = g(t)$.`,
      },
      {
        id: 'param1-what',
        type: 'text' as const,
        content: `## Two Equations, One Curve

A **parametric equation** gives the coordinates of a point as functions of a parameter $t$:

$$x = f(t), \\qquad y = g(t)$$

As $t$ runs through its values, the point $(x, y) = \\big(f(t),\\, g(t)\\big)$ traces out a curve.

Think of $t$ as **time**. At each instant $t$, the two formulas tell you *where* the moving point is.

### A First Example

$$x = t, \\qquad y = t^2$$

| $t$ | $x = t$ | $y = t^2$ | Point $(x, y)$ |
|-----|---------|-----------|----------------|
| $-2$ | $-2$ | $4$ | $(-2, 4)$ |
| $-1$ | $-1$ | $1$ | $(-1, 1)$ |
| $0$ | $0$ | $0$ | $(0, 0)$ |
| $1$ | $1$ | $1$ | $(1, 1)$ |
| $2$ | $2$ | $4$ | $(2, 4)$ |

The points fall on the familiar parabola — but now we also know the **order** they're visited and the speed of travel.

> 🔑 **Key Idea:** A single $t$-value produces a single point. Plug $t$ into **both** equations to get the $x$- and $y$-coordinates.`,
      },
      {
        id: 'param1-plug',
        type: 'input-boxes' as const,
        content: `**Plug In the Parameter** 🧮

For the curve $x = 2t + 1,\\quad y = t^2 - 3$, find the coordinates at each $t$.

**1)** At $t = 0$: $x = \\,?$
**2)** At $t = 0$: $y = \\,?$
**3)** At $t = 3$: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-3', '7'],
          hint1: 'Substitute $t=0$ into $x = 2t+1$: $x = 2(0)+1$.',
          hint2: 'Substitute $t=0$ into $y = t^2 - 3$: $y = 0^2 - 3$.',
          hint3: 'Substitute $t=3$ into $x = 2t+1$: $x = 2(3)+1 = 7$.',
          explanation: 'At $t=0$: $x = 2(0)+1 = 1$ and $y = 0^2 - 3 = -3$, giving $(1,-3)$. At $t=3$: $x = 2(3)+1 = 7$.',
        },
      },
      {
        id: 'param1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $x = t - 1$ and $y = 3t$, which point lies on the curve at $t = 2$?',
              options: ['$(1, 6)$', '$(2, 3)$', '$(1, 3)$', '$(3, 6)$'],
              correctAnswer: 0,
              explanation: 'At $t=2$: $x = 2 - 1 = 1$ and $y = 3(2) = 6$, so the point is $(1, 6)$.',
            },
            {
              question: 'What does the parameter $t$ usually represent in a parametric model of motion?',
              options: ['The slope of the curve', 'Time, telling you when the point is at each location', 'The distance from the origin', 'The area under the curve'],
              correctAnswer: 1,
              explanation: 'In modeling, $t$ is interpreted as time: each $t$-value pins the moving point to one location, capturing both position and the order of travel.',
            },
          ],
        },
      },
      {
        id: 'param1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Point** 🔽

For $x = t^2,\\quad y = 2t$, choose the point produced by each $t$-value.`,
        exercise: {
          dropdowns: [
            { label: 'At $t = 0$:', options: ['$(0, 0)$', '$(0, 2)$', '$(2, 0)$', '$(1, 0)$'] },
            { label: 'At $t = 1$:', options: ['$(1, 2)$', '$(2, 1)$', '$(1, 1)$', '$(2, 2)$'] },
            { label: 'At $t = 3$:', options: ['$(9, 6)$', '$(6, 9)$', '$(3, 6)$', '$(9, 3)$'] },
          ],
          correctAnswers: ['$(0, 0)$', '$(1, 2)$', '$(9, 6)$'],
          hint1: 'At $t=0$: $x = 0^2 = 0$ and $y = 2(0) = 0$.',
          hint2: 'At $t=1$: $x = 1^2 = 1$ and $y = 2(1) = 2$.',
          hint3: 'At $t=3$: $x = 3^2 = 9$ and $y = 2(3) = 6$.',
          explanation: 'Plug each $t$ into both formulas: $t=0\\to(0,0)$, $t=1\\to(1,2)$, $t=3\\to(9,6)$.',
        },
      },
      {
        id: 'param1-why',
        type: 'text' as const,
        content: `## Why Parametrize?

A plain equation $y = f(x)$ can't do everything:

- It can't describe a curve where one $x$ has **two** $y$-values (like a full circle) — that fails the vertical line test.
- It throws away **time information** — you can't tell how fast or in what direction a point moves.

Parametric equations fix both problems. They let a curve **loop, cross itself, or backtrack**, and they record exactly **when** the point reaches each spot.

> 💡 In Part 2 we'll plot a parametric curve and track the **direction of motion** with arrows.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'parametric-equations',
    sections: [
      {
        id: 'param2-intro',
        type: 'text' as const,
        content: `# 🧭 Parametric Equations

**Part 2 of 7 — Plotting & Direction of Motion**

---

> 🔑 **The Idea:** To graph a parametric curve, build a table of $t$-values, plot the points **in order**, and draw arrows showing the direction the point travels as $t$ **increases**. That direction is called the **orientation**.`,
      },
      {
        id: 'param2-plot',
        type: 'text' as const,
        content: `## Plotting Step by Step

Graph $x = t + 1,\\quad y = 2t$ for $-2 \\le t \\le 2$.

| $t$ | $x = t+1$ | $y = 2t$ | Point |
|-----|-----------|----------|-------|
| $-2$ | $-1$ | $-4$ | $(-1, -4)$ |
| $-1$ | $0$ | $-2$ | $(0, -2)$ |
| $0$ | $1$ | $0$ | $(1, 0)$ |
| $1$ | $2$ | $2$ | $(2, 2)$ |
| $2$ | $3$ | $4$ | $(3, 4)$ |

Plot these in order. The curve is a **line**, and as $t$ increases the point moves up and to the **right** — that's the orientation.

> ⚠️ **Don't forget the arrows.** Two different parametrizations can trace the *same* line but in *opposite* directions. The orientation is part of the answer.`,
      },
      {
        id: 'param2-orient-mc',
        type: 'multiple-choice' as const,
        content: `**Direction Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $x = t,\\; y = -t$, as $t$ increases from $-3$ to $3$, the point moves...',
              options: ['Up and to the right', 'Down and to the right', 'Down and to the left', 'Straight up'],
              correctAnswer: 1,
              explanation: 'As $t$ increases, $x = t$ increases (rightward) while $y = -t$ decreases (downward). So the point moves down and to the right.',
            },
            {
              question: 'Two parametrizations trace the exact same line but with opposite orientation. What differs between them?',
              options: ['The set of points on the curve', 'The direction the point travels as $t$ increases', 'The slope of the line', 'Nothing — they are identical'],
              correctAnswer: 1,
              explanation: 'They cover the same points (same line), but the orientation — the direction of travel as $t$ increases — is reversed.',
            },
          ],
        },
      },
      {
        id: 'param2-table',
        type: 'input-boxes' as const,
        content: `**Build the Table** 🧮

For $x = t^2,\\quad y = t + 1$, complete the missing coordinates.

**1)** At $t = -2$: $x = \\,?$
**2)** At $t = -2$: $y = \\,?$
**3)** At $t = 2$: $x = \\,?$
**4)** At $t = 2$: $y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['4', '-1', '4', '3'],
          hint1: '$x = t^2$, so at $t=-2$, $x = (-2)^2 = 4$.',
          hint2: '$y = t+1$, so at $t=-2$, $y = -2+1 = -1$.',
          hint3: 'At $t=2$: $x = 2^2 = 4$ and $y = 2+1 = 3$. Notice $t=-2$ and $t=2$ give the same $x$ but different $y$ — the curve passes through $x=4$ twice.',
          explanation: 'At $t=-2$: $(4, -1)$. At $t=2$: $(4, 3)$. Same $x$-value, two different points — exactly what $y=f(x)$ could never show.',
        },
      },
      {
        id: 'param2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Trace the Curve** 🔽

Consider $x = t,\\quad y = t^2$ for $-2 \\le t \\le 2$. Fill in the trip.`,
        exercise: {
          dropdowns: [
            { label: 'Starting point (at $t = -2$):', options: ['$(-2, 4)$', '$(4, -2)$', '$(-2, -4)$', '$(2, 4)$'] },
            { label: 'Lowest point (at $t = 0$):', options: ['$(0, 0)$', '$(0, 1)$', '$(1, 0)$', '$(0, -1)$'] },
            { label: 'Ending point (at $t = 2$):', options: ['$(2, 4)$', '$(4, 2)$', '$(2, -4)$', '$(-2, 4)$'] },
            { label: 'Overall direction as $t$ increases:', options: ['Left to right', 'Right to left', 'Top to bottom', 'It stays still'] },
          ],
          correctAnswers: ['$(-2, 4)$', '$(0, 0)$', '$(2, 4)$', 'Left to right'],
          hint1: 'At $t=-2$: $x = -2$, $y = (-2)^2 = 4$.',
          hint2: 'At $t=0$: $x = 0$, $y = 0^2 = 0$ — the vertex of the parabola.',
          hint3: 'At $t=2$: $x = 2$, $y = 4$. Since $x = t$ increases with $t$, the point sweeps left to right.',
          explanation: 'The point starts at $(-2,4)$, dips to the vertex $(0,0)$, and rises to $(2,4)$ — moving left to right as $t$ increases.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'parametric-equations',
    sections: [
      {
        id: 'param3-intro',
        type: 'text' as const,
        content: `# 🧭 Parametric Equations

**Part 3 of 7 — Eliminating the Parameter**

---

> 🔑 **The Goal:** Convert $x = f(t),\\; y = g(t)$ into a single relationship between $x$ and $y$ by **removing $t$**. This reveals the *shape* of the curve (line, parabola, circle, …) in familiar Cartesian form.`,
      },
      {
        id: 'param3-substitution',
        type: 'text' as const,
        content: `## Method 1: Solve and Substitute

When one equation is easy to solve for $t$, do that, then substitute into the other.

### Example: $x = t + 2,\\quad y = t^2$

1. **Solve** the simpler equation for $t$: from $x = t + 2$ we get $t = x - 2$.
2. **Substitute** into the other: $y = (x - 2)^2$.

So the curve is the parabola

$$y = (x - 2)^2$$

with vertex $(2, 0)$.

> ✅ **Check:** at $t = 0$, the parametric point is $(2, 0)$; plugging $x = 2$ into $y = (x-2)^2$ gives $y = 0$. ✓`,
      },
      {
        id: 'param3-elim-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Eliminate the parameter: $x = t - 3,\\; y = 2t$. The Cartesian equation is:',
              options: ['$y = 2x + 6$', '$y = 2x - 6$', '$y = 2x - 3$', '$y = x - 3$'],
              correctAnswer: 0,
              explanation: 'From $x = t-3$, $t = x+3$. Then $y = 2t = 2(x+3) = 2x + 6$.',
            },
            {
              question: 'For $x = \\sqrt{t}$ and $y = t$ (with $t \\ge 0$), eliminating $t$ gives:',
              options: ['$y = x^2$', '$y = \\sqrt{x}$', '$y = x$', '$y = x^2,\\; x \\ge 0$'],
              correctAnswer: 3,
              explanation: 'Since $x = \\sqrt{t}$, we have $t = x^2$, so $y = x^2$. But $x = \\sqrt{t} \\ge 0$, so only the right half ($x \\ge 0$) is traced.',
            },
          ],
        },
      },
      {
        id: 'param3-trig',
        type: 'text' as const,
        content: `## Method 2: The Pythagorean Identity

When $x$ and $y$ involve $\\cos t$ and $\\sin t$, use the identity

$$\\cos^2 t + \\sin^2 t = 1$$

### Example: $x = \\cos t,\\quad y = \\sin t$

Then $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$, which is the **unit circle**:

$$x^2 + y^2 = 1$$

### Example: $x = 3\\cos t,\\quad y = 3\\sin t$

Here $\\cos t = \\dfrac{x}{3}$ and $\\sin t = \\dfrac{y}{3}$, so

$$\\left(\\tfrac{x}{3}\\right)^2 + \\left(\\tfrac{y}{3}\\right)^2 = 1 \\;\\Longrightarrow\\; x^2 + y^2 = 9$$

a circle of radius $3$.

> 💡 **Pattern:** $x = r\\cos t,\\; y = r\\sin t$ always gives the circle $x^2 + y^2 = r^2$.`,
      },
      {
        id: 'param3-method-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Method** 🔽

Choose the best first step for eliminating the parameter, then the resulting curve.`,
        exercise: {
          dropdowns: [
            { label: 'For $x = t + 5,\\; y = t^2$, the best first step is:', options: ['Solve $x = t+5$ for $t$, then substitute', 'Use $\\cos^2 t + \\sin^2 t = 1$', 'Square both equations', 'Add the two equations'] },
            { label: 'For $x = 2\\cos t,\\; y = 2\\sin t$, the best first step is:', options: ['Use $\\cos^2 t + \\sin^2 t = 1$', 'Solve $x = 2\\cos t$ for $t$', 'Multiply the equations', 'Set $x = y$'] },
            { label: 'The curve $x = t+5,\\; y = t^2$ becomes:', options: ['$y = (x-5)^2$', '$y = (x+5)^2$', '$y = x^2 - 5$', '$y = x^2 + 5$'] },
          ],
          correctAnswers: ['Solve $x = t+5$ for $t$, then substitute', 'Use $\\cos^2 t + \\sin^2 t = 1$', '$y = (x-5)^2$'],
          hint1: 'When one equation is linear in $t$, solving and substituting is easiest.',
          hint2: 'When you see $\\cos t$ and $\\sin t$, reach for the Pythagorean identity.',
          hint3: 'From $x = t+5$, $t = x-5$, so $y = t^2 = (x-5)^2$.',
          explanation: 'Linear-in-$t$ → solve & substitute. Trig → Pythagorean identity. Here $t = x-5$ gives $y = (x-5)^2$.',
        },
      },
      {
        id: 'param3-drill',
        type: 'input-boxes' as const,
        content: `**Eliminate the Parameter** 🧮

**1)** $x = 5\\cos t,\\; y = 5\\sin t$ gives $x^2 + y^2 = \\,?$
**2)** $x = t + 4,\\; y = t$. Eliminating $t$ gives $y = x - \\,?$  *(enter the number subtracted)*
**3)** $x = 2t,\\; y = t$. Eliminating $t$ gives $y = \\dfrac{x}{?}$  *(enter the denominator)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '4', '2'],
          hint1: '$x = 5\\cos t,\\, y = 5\\sin t$ gives radius $5$, so $x^2+y^2 = 5^2$.',
          hint2: 'From $y = t$ and $x = t+4$, substitute $t = y$: $x = y + 4$, so $y = x - 4$.',
          hint3: 'From $x = 2t$, $t = x/2$, and $y = t = x/2$, so the denominator is $2$.',
          explanation: '1) $x^2+y^2 = 25$ (circle, radius $5$).  2) $y = x - 4$.  3) $y = x/2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'parametric-equations',
    sections: [
      {
        id: 'param4-intro',
        type: 'text' as const,
        content: `# 🧭 Parametric Equations

**Part 4 of 7 — Modeling Motion**

---

> 🔑 **Big Payoff:** Parametric equations are how we describe **objects moving in a plane**. With $t$ as time, $x(t)$ gives horizontal position and $y(t)$ gives vertical position — together they capture the full path *and* the timing.`,
      },
      {
        id: 'param4-position',
        type: 'text' as const,
        content: `## Position as a Function of Time

A particle moves so that at time $t$ (seconds) its position is

$$x(t) = 1 + 2t, \\qquad y(t) = 5 - t$$

To find where it is at a given time, plug in $t$:

| $t$ (s) | $x = 1+2t$ | $y = 5-t$ | Position |
|---------|------------|-----------|----------|
| $0$ | $1$ | $5$ | $(1, 5)$ |
| $1$ | $3$ | $4$ | $(3, 4)$ |
| $2$ | $5$ | $3$ | $(5, 3)$ |
| $4$ | $9$ | $1$ | $(9, 1)$ |

Each second, $x$ increases by $2$ and $y$ decreases by $1$ — steady motion to the right and down.

> 🔑 **Reading the model:** the coefficient of $t$ in each equation is the **constant rate** of change of that coordinate. Here the horizontal rate is $+2$ and the vertical rate is $-1$ unit per second.`,
      },
      {
        id: 'param4-projectile',
        type: 'text' as const,
        content: `## Projectile Motion

A classic application: a ball launched horizontally. With horizontal speed $v$ and gravity, a common model is

$$x(t) = v\\,t, \\qquad y(t) = h - 16t^2$$

(using feet, with initial height $h$). The $x$-equation is **linear** (constant horizontal speed); the $y$-equation is **quadratic** (gravity pulls it down faster and faster).

### Example: $x = 20t,\\quad y = 100 - 16t^2$

- **Starting height:** at $t = 0$, $y = 100$ ft.
- **When does it hit the ground?** Set $y = 0$: $100 - 16t^2 = 0 \\Rightarrow t^2 = \\tfrac{100}{16} = 6.25 \\Rightarrow t = 2.5$ s.
- **How far horizontally?** at $t = 2.5$, $x = 20(2.5) = 50$ ft.

> 💡 The curve traced is a parabola, but the parametric form tells us the **time** of every event — something $y = f(x)$ alone can't.`,
      },
      {
        id: 'param4-motion-mc',
        type: 'multiple-choice' as const,
        content: `**Modeling Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A particle has $x(t) = 3t,\\; y(t) = 12 - 4t$. Where is it at $t = 2$?',
              options: ['$(6, 4)$', '$(6, 8)$', '$(3, 4)$', '$(2, 6)$'],
              correctAnswer: 0,
              explanation: 'At $t=2$: $x = 3(2) = 6$ and $y = 12 - 4(2) = 12 - 8 = 4$, so the position is $(6, 4)$.',
            },
            {
              question: 'For the projectile $x = 20t,\\; y = 100 - 16t^2$, what is true about the horizontal motion?',
              options: ['It speeds up over time', 'It moves at a constant rate of $20$ units per second', 'It slows down due to gravity', 'It reverses direction'],
              correctAnswer: 1,
              explanation: 'Because $x = 20t$ is linear in $t$, the horizontal position changes by a constant $20$ units each second — constant horizontal speed. Only the vertical motion accelerates.',
            },
          ],
        },
      },
      {
        id: 'param4-rates-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Rates** 🔽

A particle moves with $x(t) = 4 - 3t,\\quad y(t) = 2 + 5t$. Interpret the motion.`,
        exercise: {
          dropdowns: [
            { label: 'Starting position (at $t = 0$):', options: ['$(4, 2)$', '$(2, 4)$', '$(-3, 5)$', '$(0, 0)$'] },
            { label: 'Horizontal motion each second:', options: ['Left $3$ units', 'Right $3$ units', 'Right $4$ units', 'No horizontal motion'] },
            { label: 'Vertical motion each second:', options: ['Up $5$ units', 'Down $5$ units', 'Up $2$ units', 'No vertical motion'] },
          ],
          correctAnswers: ['$(4, 2)$', 'Left $3$ units', 'Up $5$ units'],
          hint1: 'At $t=0$: $x = 4 - 3(0) = 4$, $y = 2 + 5(0) = 2$.',
          hint2: 'The coefficient of $t$ in $x = 4 - 3t$ is $-3$: $x$ decreases by $3$ each second (moves left).',
          hint3: 'The coefficient of $t$ in $y = 2 + 5t$ is $+5$: $y$ increases by $5$ each second (moves up).',
          explanation: 'Start $(4,2)$. Coefficient of $t$ gives the rate: $x$ changes by $-3$/s (left $3$), $y$ by $+5$/s (up $5$).',
        },
      },
      {
        id: 'param4-drill',
        type: 'input-boxes' as const,
        content: `**Analyze the Motion** 🧮

A ball is launched: $x(t) = 30t,\\quad y(t) = 144 - 16t^2$ (feet, seconds).

**1)** Starting height (at $t = 0$): $y = \\,?$  ft
**2)** Time to hit the ground ($y = 0$): $t = \\,?$  s
**3)** Horizontal distance when it lands: $x = \\,?$  ft`,
        exercise: {
          boxes: 3,
          correctAnswers: ['144', '3', '90'],
          hint1: 'At $t=0$, $y = 144 - 16(0)^2 = 144$.',
          hint2: 'Set $y = 0$: $144 - 16t^2 = 0 \\Rightarrow t^2 = 144/16 = 9 \\Rightarrow t = 3$.',
          hint3: 'At landing $t = 3$, so $x = 30(3) = 90$.',
          explanation: 'Start height $144$ ft. Lands when $16t^2 = 144$, i.e. $t^2 = 9$, $t = 3$ s. Then $x = 30(3) = 90$ ft.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'parametric-equations',
    sections: [
      {
        id: 'param5-intro',
        type: 'text' as const,
        content: `# 🧭 Parametric Equations

**Part 5 of 7 — Parametrizing Lines & Circles**

---

> 🔑 **The Reverse Skill:** Instead of being handed parametric equations, you'll now *build* them — writing parametric equations for a line through two points, or for a circle of a given radius.`,
      },
      {
        id: 'param5-line',
        type: 'text' as const,
        content: `## Parametrizing a Line

To parametrize the line **starting at** $(x_0, y_0)$ and moving in a fixed direction:

$$x = x_0 + at, \\qquad y = y_0 + bt$$

Here $(a, b)$ is the **direction**: each unit of $t$ adds $a$ to $x$ and $b$ to $y$. At $t = 0$ you're at the start point.

### Example: line through $(2, 1)$ and $(5, 7)$

- **Start** at $(2, 1)$: so $x_0 = 2,\\; y_0 = 1$.
- **Direction** = (change in $x$, change in $y$) = $(5 - 2,\\; 7 - 1) = (3, 6)$.

$$x = 2 + 3t, \\qquad y = 1 + 6t$$

> ✅ **Check:** $t = 0$ gives $(2, 1)$ ✓ and $t = 1$ gives $(2+3,\\, 1+6) = (5, 7)$ ✓.`,
      },
      {
        id: 'param5-line-drill',
        type: 'input-boxes' as const,
        content: `**Parametrize the Line** 🧮

Write parametric equations for the line through $(1, 4)$ and $(7, 8)$, starting at $(1, 4)$ with $t = 0$ there and $t = 1$ at $(7, 8)$.

Form: $x = 1 + a\\,t,\\quad y = 4 + b\\,t$.

**1)** $a = \\,?$  *(the $x$-direction)*
**2)** $b = \\,?$  *(the $y$-direction)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '4'],
          hint1: 'The $x$-direction is the change in $x$: $7 - 1 = 6$.',
          hint2: 'The $y$-direction is the change in $y$: $8 - 4 = 4$.',
          hint3: 'So $x = 1 + 6t,\\; y = 4 + 4t$. Check $t=1$: $x = 7,\\, y = 8$ ✓.',
          explanation: 'Direction $= (7-1,\\, 8-4) = (6, 4)$, giving $x = 1 + 6t,\\; y = 4 + 4t$.',
        },
      },
      {
        id: 'param5-circle',
        type: 'text' as const,
        content: `## Parametrizing a Circle

A circle of radius $r$ centered at the origin is parametrized by

$$x = r\\cos t, \\qquad y = r\\sin t, \\qquad 0 \\le t \\le 2\\pi$$

As $t$ goes from $0$ to $2\\pi$, the point sweeps **counterclockwise** once around, starting at $(r, 0)$.

To **shift the center** to $(h, k)$, just add the center coordinates:

$$x = h + r\\cos t, \\qquad y = k + r\\sin t$$

### Example: circle of radius $4$ centered at $(2, -3)$

$$x = 2 + 4\\cos t, \\qquad y = -3 + 4\\sin t$$

> 💡 At $t = 0$: $x = 2 + 4 = 6$, $y = -3 + 0 = -3$, so it starts at $(6, -3)$ — the rightmost point of the circle.`,
      },
      {
        id: 'param5-circle-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Where does $x = 2 + 4\\cos t,\\; y = -3 + 4\\sin t$ start (at $t = 0$)?',
              options: ['$(6, -3)$', '$(2, 1)$', '$(2, -3)$', '$(6, 1)$'],
              correctAnswer: 0,
              explanation: 'At $t=0$: $\\cos 0 = 1,\\, \\sin 0 = 0$, so $x = 2 + 4(1) = 6$ and $y = -3 + 4(0) = -3$, giving $(6, -3)$.',
            },
            {
              question: 'A line is given by $x = -1 + 2t,\\; y = 4 - t$. Which point is on it at $t = 3$?',
              options: ['$(5, 1)$', '$(5, 7)$', '$(1, 1)$', '$(6, 1)$'],
              correctAnswer: 0,
              explanation: 'At $t=3$: $x = -1 + 2(3) = 5$ and $y = 4 - 3 = 1$, so the point is $(5, 1)$.',
            },
          ],
        },
      },
      {
        id: 'param5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Parametrization** 🔽

Match each curve to its parametric equations.`,
        exercise: {
          dropdowns: [
            { label: 'Circle, radius $6$, center origin:', options: ['$x = 6\\cos t,\\; y = 6\\sin t$', '$x = \\cos 6t,\\; y = \\sin 6t$', '$x = 6 + \\cos t,\\; y = 6 + \\sin t$', '$x = 6\\cos t,\\; y = \\sin t$'] },
            { label: 'Circle, radius $2$, center $(5, 1)$:', options: ['$x = 5 + 2\\cos t,\\; y = 1 + 2\\sin t$', '$x = 2 + 5\\cos t,\\; y = 2 + 1\\sin t$', '$x = 5\\cos t,\\; y = 1\\sin t$', '$x = 2\\cos t + 5,\\; y = 2\\sin t - 1$'] },
            { label: 'Line through $(0,0)$ with direction $(1, 3)$:', options: ['$x = t,\\; y = 3t$', '$x = 3t,\\; y = t$', '$x = 1 + t,\\; y = 3 + t$', '$x = t,\\; y = t + 3$'] },
          ],
          correctAnswers: ['$x = 6\\cos t,\\; y = 6\\sin t$', '$x = 5 + 2\\cos t,\\; y = 1 + 2\\sin t$', '$x = t,\\; y = 3t$'],
          hint1: 'For a circle of radius $r$ at the origin, use $x = r\\cos t,\\; y = r\\sin t$.',
          hint2: 'To center a radius-$r$ circle at $(h,k)$: $x = h + r\\cos t,\\; y = k + r\\sin t$.',
          hint3: 'A line from $(0,0)$ with direction $(a,b)$ is $x = at,\\; y = bt$; here $(a,b)=(1,3)$.',
          explanation: 'Radius-$6$ circle: $x=6\\cos t,\\,y=6\\sin t$. Centered at $(5,1)$ radius $2$: $x=5+2\\cos t,\\,y=1+2\\sin t$. Line: $x=t,\\,y=3t$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'parametric-equations',
    sections: [
      {
        id: 'param6-intro',
        type: 'text' as const,
        content: `# 🧭 Parametric Equations

**Part 6 of 7 — Ellipses, Speed & Transformations**

---

> 🔑 **Beyond Circles:** Changing the coefficients on $\\cos t$ and $\\sin t$ stretches a circle into an **ellipse**, and changing the coefficient *inside* (like $\\cos 2t$) changes how **fast** the curve is traced.`,
      },
      {
        id: 'param6-ellipse',
        type: 'text' as const,
        content: `## From Circle to Ellipse

Use **different** radii in the $x$- and $y$-directions:

$$x = a\\cos t, \\qquad y = b\\sin t$$

Eliminate the parameter with the Pythagorean identity. Since $\\cos t = \\dfrac{x}{a}$ and $\\sin t = \\dfrac{y}{b}$:

$$\\left(\\frac{x}{a}\\right)^2 + \\left(\\frac{y}{b}\\right)^2 = 1$$

That's the standard **ellipse**: it stretches $a$ units horizontally and $b$ units vertically.

### Example: $x = 4\\cos t,\\quad y = 2\\sin t$

$$\\frac{x^2}{16} + \\frac{y^2}{4} = 1$$

an ellipse $4$ wide (semi-axis) horizontally and $2$ tall vertically.

> 🔑 When $a = b$ the ellipse is just a circle of radius $a$ — the circle is the special "equal-axes" ellipse.`,
      },
      {
        id: 'param6-ellipse-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Eliminate the parameter: $x = 3\\cos t,\\; y = 7\\sin t$.',
              options: ['$\\frac{x^2}{9} + \\frac{y^2}{49} = 1$', '$\\frac{x^2}{3} + \\frac{y^2}{7} = 1$', '$x^2 + y^2 = 21$', '$\\frac{x^2}{49} + \\frac{y^2}{9} = 1$'],
              correctAnswer: 0,
              explanation: '$\\cos t = x/3,\\; \\sin t = y/7$. Then $\\cos^2 t + \\sin^2 t = (x/3)^2 + (y/7)^2 = \\frac{x^2}{9} + \\frac{y^2}{49} = 1$.',
            },
            {
              question: 'Which parametric equations trace a circle (not a stretched ellipse)?',
              options: ['$x = 5\\cos t,\\; y = 2\\sin t$', '$x = 5\\cos t,\\; y = 5\\sin t$', '$x = 2\\cos t,\\; y = 5\\sin t$', '$x = \\cos t,\\; y = 3\\sin t$'],
              correctAnswer: 1,
              explanation: 'A circle needs equal coefficients on $\\cos t$ and $\\sin t$. Only $x = 5\\cos t,\\; y = 5\\sin t$ has matching radii ($5 = 5$).',
            },
          ],
        },
      },
      {
        id: 'param6-transform',
        type: 'text' as const,
        content: `## Shifting and Speeding

**Translation.** Adding constants moves the whole curve. The ellipse centered at $(h, k)$ is

$$x = h + a\\cos t, \\qquad y = k + b\\sin t$$

**Speed of tracing.** Replacing $t$ with $2t$ inside makes the point go around **twice** as $t$ runs over the same interval. Compare over $0 \\le t \\le 2\\pi$:

| Equations | Times around the circle |
|-----------|--------------------------|
| $x = \\cos t,\\; y = \\sin t$ | once |
| $x = \\cos 2t,\\; y = \\sin 2t$ | twice |
| $x = \\cos\\tfrac{t}{2},\\; y = \\sin\\tfrac{t}{2}$ | half (a semicircle) |

> 💡 The **shape** is identical (the unit circle in all three), but the **timing/speed** of the trace differs — another thing only parametric form can express.`,
      },
      {
        id: 'param6-speed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Shape vs. Speed** 🔽

All three trace the unit circle. Over $0 \\le t \\le 2\\pi$, identify how each behaves.`,
        exercise: {
          dropdowns: [
            { label: '$x = \\cos t,\\; y = \\sin t$ goes around:', options: ['Once', 'Twice', 'Half way', 'Three times'] },
            { label: '$x = \\cos 2t,\\; y = \\sin 2t$ goes around:', options: ['Twice', 'Once', 'Half way', 'Not at all'] },
            { label: 'Center of $x = 3 + \\cos t,\\; y = -2 + \\sin t$:', options: ['$(3, -2)$', '$(-3, 2)$', '$(1, 1)$', '$(3, 2)$'] },
          ],
          correctAnswers: ['Once', 'Twice', '$(3, -2)$'],
          hint1: 'Plain $\\cos t,\\sin t$ over $0$ to $2\\pi$ completes exactly one full loop.',
          hint2: 'The inside factor $2$ doubles the angular speed, so the point laps twice.',
          hint3: 'The added constants $+3$ and $-2$ shift the center to $(3, -2)$.',
          explanation: 'Inside coefficient controls speed: $t$ → once, $2t$ → twice. Added constants shift the center to $(3,-2)$.',
        },
      },
      {
        id: 'param6-drill',
        type: 'input-boxes' as const,
        content: `**Read the Ellipse** 🧮

For $x = 6\\cos t,\\quad y = 4\\sin t$:

**1)** The eliminated equation is $\\dfrac{x^2}{?} + \\dfrac{y^2}{16} = 1$. Find the missing denominator.
**2)** Horizontal semi-axis length $= \\,?$
**3)** Vertical semi-axis length $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '6', '4'],
          hint1: 'The $x$-denominator is $a^2 = 6^2$.',
          hint2: 'The horizontal semi-axis is the coefficient on $\\cos t$, namely $a = 6$.',
          hint3: 'The vertical semi-axis is the coefficient on $\\sin t$, namely $b = 4$.',
          explanation: '$\\frac{x^2}{36} + \\frac{y^2}{16} = 1$. Horizontal semi-axis $a = 6$, vertical semi-axis $b = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'parametric-equations',
    sections: [
      {
        id: 'param7-intro',
        type: 'text' as const,
        content: `# 🧭 Parametric Equations

**Part 7 of 7 — Mixed Practice & Exit Quiz**

---

You can now (1) evaluate parametric equations, (2) plot with orientation, (3) eliminate the parameter, (4) model motion in time, (5) parametrize lines and circles, and (6) handle ellipses and tracing speed. Let's put it all together.`,
      },
      {
        id: 'param7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find a point | Plug $t$ into **both** $x(t)$ and $y(t)$ |
| Graph with direction | Table of $t$, plot in order, arrow as $t$ increases |
| Eliminate the parameter | Solve for $t$ & substitute, or use $\\cos^2 t + \\sin^2 t = 1$ |
| Parametrize a line | $x = x_0 + at,\\; y = y_0 + bt$ with direction $(a,b)$ |
| Parametrize a circle | $x = h + r\\cos t,\\; y = k + r\\sin t$ |
| Ellipse | $x = a\\cos t,\\; y = b\\sin t \\Rightarrow \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ |

> ⚠️ Remember: parametric form keeps **orientation** and **timing** information that $y = f(x)$ throws away.`,
      },
      {
        id: 'param7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** For $x = 3t,\\; y = t - 2$, the position at $t = 4$ is $(\\,?,\\, 2)$. Find the $x$-coordinate.
**2)** Parametrize the circle of radius $7$ centered at the origin as $x = 7\\cos t,\\; y = ?\\sin t$. Enter the missing coefficient.
**3)** For the ellipse $x = 5\\cos t,\\; y = 3\\sin t$, the eliminated form is $\\dfrac{x^2}{25} + \\dfrac{y^2}{?} = 1$. Find the denominator.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '7', '9'],
          hint1: 'At $t=4$: $x = 3(4) = 12$ (and $y = 4 - 2 = 2$ ✓).',
          hint2: 'A circle uses equal coefficients on $\\cos t$ and $\\sin t$: both are the radius $7$.',
          hint3: 'The $y$-denominator is $b^2 = 3^2 = 9$.',
          explanation: '1) $x = 3(4) = 12$.  2) coefficient $= 7$ (the radius).  3) $b^2 = 3^2 = 9$, so $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.',
        },
      },
      {
        id: 'param7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Eliminate the parameter: $x = t + 1,\\; y = t^2 - 2$.',
              options: ['$y = (x-1)^2 - 2$', '$y = (x+1)^2 - 2$', '$y = x^2 - 2$', '$y = (x-1)^2 + 2$'],
              correctAnswer: 0,
              explanation: 'From $x = t+1$, $t = x - 1$. Substitute: $y = (x-1)^2 - 2$.',
            },
            {
              question: 'Which parametric equations describe a circle of radius $3$ centered at $(0, -1)$?',
              options: ['$x = 3\\cos t,\\; y = -1 + 3\\sin t$', '$x = -1 + 3\\cos t,\\; y = 3\\sin t$', '$x = 3\\cos t,\\; y = 1 + 3\\sin t$', '$x = \\cos 3t,\\; y = -1 + \\sin 3t$'],
              correctAnswer: 0,
              explanation: 'Center $(0,-1)$, radius $3$: $x = 0 + 3\\cos t = 3\\cos t$ and $y = -1 + 3\\sin t$.',
            },
          ],
        },
      },
      {
        id: 'param7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For $x = 4t - 1,\\; y = 2t + 3$, what is the position at $t = 2$?',
              options: ['$(7, 7)$', '$(8, 7)$', '$(7, 5)$', '$(9, 7)$'],
              correctAnswer: 0,
              explanation: 'At $t=2$: $x = 4(2)-1 = 7$ and $y = 2(2)+3 = 7$, so the point is $(7, 7)$.',
            },
            {
              question: 'Eliminating the parameter from $x = 2\\cos t,\\; y = 2\\sin t$ gives:',
              options: ['$x^2 + y^2 = 4$', '$x^2 + y^2 = 2$', '$\\frac{x^2}{4} + \\frac{y^2}{2} = 1$', '$x + y = 2$'],
              correctAnswer: 0,
              explanation: 'Radius $2$, so $x^2 + y^2 = 2^2 = 4$ (using $\\cos^2 t + \\sin^2 t = 1$).',
            },
            {
              question: 'A projectile follows $x = 10t,\\; y = 64 - 16t^2$. When does it hit the ground ($y = 0$)?',
              options: ['$t = 2$ s', '$t = 4$ s', '$t = 8$ s', '$t = 64$ s'],
              correctAnswer: 0,
              explanation: 'Set $64 - 16t^2 = 0 \\Rightarrow t^2 = 64/16 = 4 \\Rightarrow t = 2$ s.',
            },
          ],
        },
      },
    ],
  },
]
