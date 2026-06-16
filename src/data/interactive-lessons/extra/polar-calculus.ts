import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Calculus with Polar Coordinates (AP Calculus BC).
 * Registry key / DB Topic.slug: 'polar-calculus'.
 * 7 parts, gold-standard structure: polar coordinates & the polar↔rectangular
 * bridge → sketching polar curves & symmetry → slope dy/dx of a polar curve →
 * area enclosed by one polar curve → area between two polar curves (intersections)
 * → arc length of a polar curve → mixed practice & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every integral, slope, and coordinate value was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polar-calculus',
    sections: [
      {
        id: 'polar1-intro',
        type: 'text' as const,
        content: `# 🧭 Calculus with Polar Coordinates

**Part 1 of 7 — Polar Coordinates & the Polar↔Rectangular Bridge**

---

### Topics in This Part

| Section |
|---------|
| What a Polar Point $(r,\\theta)$ Means |
| Converting Between Polar and Rectangular |
| Polar Equations of Familiar Curves |

> 🔑 **Key Concept:** A polar point is *not* "across, then up." It is **distance $r$ from the origin** at **angle $\\theta$ from the positive $x$-axis**. Mastering this picture is the whole foundation for the calculus that follows.`,
      },
      {
        id: 'polar1-meaning',
        type: 'text' as const,
        content: `## What a Polar Point Means

In **rectangular** coordinates a point is $(x, y)$. In **polar** coordinates the same point is $(r, \\theta)$:

- $r$ = the **directed distance** from the origin (the *pole*),
- $\\theta$ = the **angle** measured counter-clockwise from the positive $x$-axis (the *polar axis*).

The bridge between the two systems comes straight from right-triangle trig:

$$x = r\\cos\\theta, \\qquad y = r\\sin\\theta$$

$$r^2 = x^2 + y^2, \\qquad \\tan\\theta = \\frac{y}{x}$$

### Reading a Few Points

| Polar $(r,\\theta)$ | $x = r\\cos\\theta$ | $y = r\\sin\\theta$ | Rectangular |
|---|---|---|---|
| $(2, 0)$ | $2$ | $0$ | $(2, 0)$ |
| $(2, \\frac{\\pi}{2})$ | $0$ | $2$ | $(0, 2)$ |
| $(4, \\frac{\\pi}{3})$ | $4\\cdot\\frac12 = 2$ | $4\\cdot\\frac{\\sqrt3}{2} = 2\\sqrt3$ | $(2,\\, 2\\sqrt3)$ |

> 💡 **Heads up:** A polar point has *infinitely many* names. $(2, \\frac{\\pi}{2})$, $(2, \\frac{\\pi}{2} + 2\\pi)$, and $(-2, \\frac{3\\pi}{2})$ are all the same point. A **negative $r$** means "go backward" — plot the angle, then reflect through the pole.`,
      },
      {
        id: 'polar1-convert-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert the polar point $\\left(6, \\frac{\\pi}{6}\\right)$ to rectangular coordinates.',
              options: ['$(3\\sqrt3,\\, 3)$', '$(3,\\, 3\\sqrt3)$', '$(6,\\, 6)$', '$(3\\sqrt3,\\, -3)$'],
              correctAnswer: 0,
              explanation: '$x = 6\\cos\\frac{\\pi}{6} = 6\\cdot\\frac{\\sqrt3}{2} = 3\\sqrt3$ and $y = 6\\sin\\frac{\\pi}{6} = 6\\cdot\\frac12 = 3$, so the point is $(3\\sqrt3,\\,3)$.',
            },
            {
              question: 'Which polar point describes the SAME location as $\\left(3, \\frac{\\pi}{4}\\right)$?',
              options: ['$\\left(-3, \\frac{5\\pi}{4}\\right)$', '$\\left(-3, \\frac{\\pi}{4}\\right)$', '$\\left(3, \\frac{5\\pi}{4}\\right)$', '$\\left(3, -\\frac{\\pi}{4}\\right)$'],
              correctAnswer: 0,
              explanation: 'A negative $r$ reflects through the pole, which is the same as adding $\\pi$ to the angle. $\\left(-3, \\frac{\\pi}{4}+\\pi\\right) = \\left(-3, \\frac{5\\pi}{4}\\right)$ lands on the same spot as $\\left(3, \\frac{\\pi}{4}\\right)$.',
            },
          ],
        },
      },
      {
        id: 'polar1-toRect-drill',
        type: 'input-boxes' as const,
        content: `**Polar → Rectangular** 🧮

Convert each polar point to rectangular form. Enter $x$ then $y$.

**1)** $\\left(2, \\pi\\right)$ → $x = \\,?,\\;\\; y = \\,?$
**2)** $\\left(8, \\frac{\\pi}{2}\\right)$ → $x = \\,?,\\;\\; y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-2', '0', '0', '8'],
          hint1: 'Use $x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
          hint2: 'At $\\theta = \\pi$: $\\cos\\pi = -1$, $\\sin\\pi = 0$.',
          hint3: 'At $\\theta = \\frac{\\pi}{2}$: $\\cos\\frac{\\pi}{2} = 0$, $\\sin\\frac{\\pi}{2} = 1$.',
          explanation: '1) $x = 2(-1) = -2$, $y = 2(0) = 0$ → $(-2, 0)$.  2) $x = 8(0) = 0$, $y = 8(1) = 8$ → $(0, 8)$.',
        },
      },
      {
        id: 'polar1-equations',
        type: 'text' as const,
        content: `## Polar Equations of Familiar Curves

The real power of polar coordinates is that some curves become *much* simpler. Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $r^2 = x^2 + y^2$.

### A circle centered at the origin

$$x^2 + y^2 = 9 \\;\\Longrightarrow\\; r^2 = 9 \\;\\Longrightarrow\\; r = 3$$

One equation, no $\\theta$ at all — the radius is constant.

### A line through the origin

$$y = x \\;\\Longrightarrow\\; r\\sin\\theta = r\\cos\\theta \\;\\Longrightarrow\\; \\tan\\theta = 1 \\;\\Longrightarrow\\; \\theta = \\frac{\\pi}{4}$$

### A circle through the origin

$$x^2 + y^2 = 2y \\;\\Longrightarrow\\; r^2 = 2r\\sin\\theta \\;\\Longrightarrow\\; r = 2\\sin\\theta$$

> 🔑 **Pattern to memorize:** $r = a\\sin\\theta$ and $r = a\\cos\\theta$ are **circles of diameter $a$** that pass through the origin. $r = a\\sin\\theta$ sits above the $x$-axis; $r = a\\cos\\theta$ sits to the right. You will meet these constantly.`,
      },
      {
        id: 'polar1-eq-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Polar Equation** 🔽

Identify the curve each polar equation describes.`,
        exercise: {
          dropdowns: [
            { label: '$r = 5$', options: ['circle of radius 5 centered at origin', 'line through origin', 'circle through origin', 'spiral'] },
            { label: '$\\theta = \\frac{\\pi}{3}$', options: ['line through origin', 'circle of radius 5 centered at origin', 'cardioid', 'horizontal line'] },
            { label: '$r = 4\\cos\\theta$', options: ['circle through origin (diameter 4)', 'circle centered at origin', 'line through origin', 'parabola'] },
          ],
          correctAnswers: ['circle of radius 5 centered at origin', 'line through origin', 'circle through origin (diameter 4)'],
          hint1: 'A constant $r$ keeps the distance fixed — that traces a circle around the pole.',
          hint2: 'A constant $\\theta$ keeps the direction fixed — every distance along one ray.',
          hint3: '$r = a\\cos\\theta$ converts to $x^2 + y^2 = ax$, a circle of diameter $a$ through the origin.',
          explanation: '$r=5$ is a circle (fixed distance). $\\theta=\\frac{\\pi}{3}$ is a line/ray (fixed angle). $r = 4\\cos\\theta \\Rightarrow r^2 = 4r\\cos\\theta \\Rightarrow x^2+y^2 = 4x$, a circle of diameter 4 through the origin.',
        },
      },
      {
        id: 'polar1-wrap',
        type: 'text' as const,
        content: `## Where We're Headed

You can now translate between $(r,\\theta)$ and $(x,y)$ and recognize the basic polar curves. Over the next six parts we will *do calculus* on these curves:

| Part | Question we'll answer |
|------|----------------------|
| 2 | How do I sketch a polar curve and use symmetry? |
| 3 | What is the slope $\\frac{dy}{dx}$ of a polar curve? |
| 4 | What is the area **enclosed** by a polar curve? |
| 5 | What is the area **between two** polar curves? |
| 6 | What is the **arc length** of a polar curve? |

> 💡 Every one of those formulas is built from the same bridge equations $x = r\\cos\\theta$ and $y = r\\sin\\theta$. Keep them close.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polar-calculus',
    sections: [
      {
        id: 'polar2-intro',
        type: 'text' as const,
        content: `# 🧭 Calculus with Polar Coordinates

**Part 2 of 7 — Sketching Polar Curves & Using Symmetry**

---

> 🔑 **The Idea:** To sketch $r = f(\\theta)$, make a table of $\\theta$ and $r$, plot the points, and connect them as $\\theta$ sweeps. Symmetry tests cut your work in half — and tell you the integration limits you'll need later.`,
      },
      {
        id: 'polar2-table',
        type: 'text' as const,
        content: `## Sketching from a Table

Take the **cardioid** $r = 1 + \\cos\\theta$. Evaluate $r$ at the quadrant angles:

| $\\theta$ | $\\cos\\theta$ | $r = 1 + \\cos\\theta$ |
|---|---|---|
| $0$ | $1$ | $2$ |
| $\\frac{\\pi}{2}$ | $0$ | $1$ |
| $\\pi$ | $-1$ | $0$ |
| $\\frac{3\\pi}{2}$ | $0$ | $1$ |
| $2\\pi$ | $1$ | $2$ |

Starting at $(2,0)$, the curve shrinks to the pole at $\\theta = \\pi$, then grows back — tracing a heart-shaped loop pointing right.

> 💡 **Cardioid quick-ID:** $r = a \\pm a\\cos\\theta$ or $r = a \\pm a\\sin\\theta$ (the constant equals the coefficient). The dimple/cusp points along the axis of the trig function: $\\cos$ → horizontal, $\\sin$ → vertical.`,
      },
      {
        id: 'polar2-roses-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many petals does the rose $r = \\cos(2\\theta)$ have?',
              options: ['$4$', '$2$', '$8$', '$3$'],
              correctAnswer: 0,
              explanation: 'For a rose $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$: if $n$ is EVEN there are $2n$ petals; if $n$ is ODD there are $n$ petals. Here $n = 2$ is even, so $2n = 4$ petals.',
            },
            {
              question: 'How many petals does the rose $r = 3\\sin(3\\theta)$ have?',
              options: ['$3$', '$6$', '$9$', '$1$'],
              correctAnswer: 0,
              explanation: 'Here $n = 3$ is ODD, so the rose has exactly $n = 3$ petals (the curve retraces itself rather than doubling).',
            },
          ],
        },
      },
      {
        id: 'polar2-symmetry',
        type: 'text' as const,
        content: `## Symmetry Tests

These three tests let you graph (and later integrate) over a smaller interval, then mirror.

| Replace... | If the equation is unchanged, the curve is symmetric about... |
|---|---|
| $\\theta \\to -\\theta$ | the **$x$-axis** (polar axis) |
| $\\theta \\to \\pi - \\theta$ | the **$y$-axis** (line $\\theta = \\frac{\\pi}{2}$) |
| $r \\to -r$ (or $\\theta \\to \\theta + \\pi$) | the **origin** (pole) |

### Example: $r = 1 + \\cos\\theta$

Replace $\\theta \\to -\\theta$: since $\\cos(-\\theta) = \\cos\\theta$, we get $r = 1 + \\cos\\theta$ — **unchanged**. So the cardioid is symmetric about the **$x$-axis**.

> 💡 **Why it matters:** Because $r = 1 + \\cos\\theta$ is $x$-axis symmetric, you can compute area for $\\theta \\in [0, \\pi]$ and **double it** — exactly the trick we'll use in Part 4.`,
      },
      {
        id: 'polar2-sym-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply the Symmetry Tests** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$r = 4\\cos\\theta$ is symmetric about the...', options: ['$x$-axis', '$y$-axis', 'origin only', 'no symmetry'] },
            { label: '$r = 2\\sin\\theta$ is symmetric about the...', options: ['$y$-axis', '$x$-axis', 'origin only', 'no symmetry'] },
            { label: 'The rose $r = \\cos(2\\theta)$ is symmetric about the...', options: ['both axes and origin', '$x$-axis only', '$y$-axis only', 'no symmetry'] },
          ],
          correctAnswers: ['$x$-axis', '$y$-axis', 'both axes and origin'],
          hint1: 'Test $\\theta \\to -\\theta$ first; if $\\cos$ survives unchanged you have $x$-axis symmetry.',
          hint2: 'For $\\sin$: $\\sin(\\pi-\\theta) = \\sin\\theta$, so $r = 2\\sin\\theta$ passes the $y$-axis test.',
          hint3: '$\\cos(2(-\\theta)) = \\cos 2\\theta$ ($x$-axis) and $\\cos(2(\\pi-\\theta)) = \\cos(2\\pi - 2\\theta) = \\cos 2\\theta$ ($y$-axis), so it has both — and therefore origin symmetry too.',
          explanation: '$r=4\\cos\\theta$: $\\cos(-\\theta)=\\cos\\theta$ → $x$-axis. $r=2\\sin\\theta$: $\\sin(\\pi-\\theta)=\\sin\\theta$ → $y$-axis. $r=\\cos 2\\theta$ passes both axis tests, hence all three symmetries.',
        },
      },
      {
        id: 'polar2-pole-drill',
        type: 'input-boxes' as const,
        content: `**Where Does the Curve Hit the Pole?** 🧮

The curve passes through the **pole** (origin) wherever $r = 0$. Find the smallest non-negative $\\theta$ (in radians, as a fraction of $\\pi$ if needed) where $r = 0$.

**1)** $r = 2\\sin\\theta$, smallest $\\theta \\ge 0$ with $r = 0$: $\\theta = \\,?$
**2)** $r = 1 + \\cos\\theta$, the $\\theta$ in $[0, 2\\pi]$ where $r = 0$: $\\theta = \\,?$  *(enter as a multiple of $\\pi$, e.g. "pi")*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0', 'pi'],
          hint1: 'Set $r = 0$ and solve. $2\\sin\\theta = 0$ when $\\sin\\theta = 0$.',
          hint2: 'The smallest non-negative solution of $\\sin\\theta = 0$ is $\\theta = 0$.',
          hint3: '$1 + \\cos\\theta = 0 \\Rightarrow \\cos\\theta = -1 \\Rightarrow \\theta = \\pi$.',
          explanation: '1) $2\\sin\\theta = 0 \\Rightarrow \\theta = 0$.  2) $1+\\cos\\theta = 0 \\Rightarrow \\cos\\theta = -1 \\Rightarrow \\theta = \\pi$, the cusp of the cardioid at the origin.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polar-calculus',
    sections: [
      {
        id: 'polar3-intro',
        type: 'text' as const,
        content: `# 🧭 Calculus with Polar Coordinates

**Part 3 of 7 — Slope $\\dfrac{dy}{dx}$ of a Polar Curve**

---

> 🔑 **Why we can't just use $\\frac{dr}{d\\theta}$:** Slope on the $xy$-plane is *rise over run* in $x$ and $y$, not in $r$ and $\\theta$. To get $\\frac{dy}{dx}$ we treat the curve as **parametric** in $\\theta$.`,
      },
      {
        id: 'polar3-formula',
        type: 'text' as const,
        content: `## The Slope Formula

Write the curve parametrically using $r = f(\\theta)$:

$$x = r\\cos\\theta = f(\\theta)\\cos\\theta, \\qquad y = r\\sin\\theta = f(\\theta)\\sin\\theta$$

Then, by the parametric slope rule $\\dfrac{dy}{dx} = \\dfrac{dy/d\\theta}{dx/d\\theta}$, and the product rule:

$$\\boxed{\\;\\frac{dy}{dx} = \\frac{\\dfrac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\dfrac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}\\;}$$

> ⚠️ **The single most common error:** writing $\\frac{dy}{dx} = \\frac{dr}{d\\theta}$. That is wrong. You **must** differentiate $x = r\\cos\\theta$ and $y = r\\sin\\theta$ with the product rule.

### Tangent-line special cases

- **Horizontal tangent:** numerator $\\dfrac{dy}{d\\theta} = 0$ (and denominator $\\ne 0$).
- **Vertical tangent:** denominator $\\dfrac{dx}{d\\theta} = 0$ (and numerator $\\ne 0$).`,
      },
      {
        id: 'polar3-worked',
        type: 'text' as const,
        content: `## Worked Example: slope of $r = 1 + \\cos\\theta$ at $\\theta = \\frac{\\pi}{2}$

Here $r = 1 + \\cos\\theta$, so $\\dfrac{dr}{d\\theta} = -\\sin\\theta$.

**At $\\theta = \\frac{\\pi}{2}$:** $\\;r = 1 + \\cos\\frac{\\pi}{2} = 1 + 0 = 1$, and $\\dfrac{dr}{d\\theta} = -\\sin\\frac{\\pi}{2} = -1$.

**Numerator** $\\;\\dfrac{dy}{d\\theta} = \\dfrac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta = (-1)(1) + (1)(0) = -1$.

**Denominator** $\\;\\dfrac{dx}{d\\theta} = \\dfrac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta = (-1)(0) - (1)(1) = -1$.

$$\\frac{dy}{dx} = \\frac{-1}{-1} = 1$$

> ✅ **Check the picture:** At $\\theta = \\frac{\\pi}{2}$ the point is $(x,y) = (0,1)$. As $\\theta$ increases the cardioid moves down-and-to-the-left here, so its tangent line runs along the up-right/down-left diagonal — a slope of $+1$ is exactly right.`,
      },
      {
        id: 'polar3-slope-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To find $\\frac{dy}{dx}$ for a polar curve $r = f(\\theta)$, you should first...',
              options: [
                'write $x = r\\cos\\theta,\\; y = r\\sin\\theta$ and use the parametric slope rule',
                'compute $\\frac{dr}{d\\theta}$ and stop — that IS the slope',
                'set $r = 0$ and solve',
                'integrate $\\frac{1}{2}r^2$',
              ],
              correctAnswer: 0,
              explanation: 'Slope is $\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$, so you parametrize with $x = r\\cos\\theta$ and $y = r\\sin\\theta$ and differentiate each with the product rule. $\\frac{dr}{d\\theta}$ alone is not the slope.',
            },
            {
              question: 'A polar curve has a HORIZONTAL tangent line exactly when...',
              options: [
                '$\\frac{dy}{d\\theta} = 0$ and $\\frac{dx}{d\\theta} \\ne 0$',
                '$\\frac{dx}{d\\theta} = 0$ and $\\frac{dy}{d\\theta} \\ne 0$',
                '$\\frac{dr}{d\\theta} = 0$',
                '$r = 0$',
              ],
              correctAnswer: 0,
              explanation: 'A horizontal tangent means slope $= 0$, so the numerator $\\frac{dy}{d\\theta} = 0$ while the denominator $\\frac{dx}{d\\theta} \\ne 0$. (If the denominator were also $0$, the slope would be indeterminate.)',
            },
          ],
        },
      },
      {
        id: 'polar3-slope-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Slope** 🧮

For the circle $r = 2\\sin\\theta$ we have $\\dfrac{dr}{d\\theta} = 2\\cos\\theta$.

Evaluate the pieces at $\\theta = \\frac{\\pi}{4}$ (use exact decimals; note $\\sin\\frac{\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt2}{2}$, so $r = 2\\cdot\\frac{\\sqrt2}{2} = \\sqrt2$).

**1)** Numerator $\\dfrac{dy}{d\\theta} = \\dfrac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta = \\,?$
**2)** Denominator $\\dfrac{dx}{d\\theta} = \\dfrac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta = \\,?$
**3)** Therefore $\\dfrac{dy}{dx} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '0', 'undefined'],
          hint1: 'At $\\theta = \\frac{\\pi}{4}$: $\\frac{dr}{d\\theta} = 2\\cos\\frac{\\pi}{4} = \\sqrt2$, and $r = \\sqrt2$, $\\sin\\frac{\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt2}{2}$.',
          hint2: 'Numerator $= \\sqrt2\\cdot\\frac{\\sqrt2}{2} + \\sqrt2\\cdot\\frac{\\sqrt2}{2} = 1 + 1 = 2$. Denominator $= \\sqrt2\\cdot\\frac{\\sqrt2}{2} - \\sqrt2\\cdot\\frac{\\sqrt2}{2} = 1 - 1 = 0$.',
          hint3: 'When the denominator is $0$ and the numerator is not, the slope is undefined — a VERTICAL tangent. Enter "undefined".',
          explanation: 'Numerator $= 2$, denominator $= 0$, so $\\frac{dy}{dx}$ is undefined: the tangent line is vertical at $\\theta = \\frac{\\pi}{4}$ (the top of the circle $r = 2\\sin\\theta$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polar-calculus',
    sections: [
      {
        id: 'polar4-intro',
        type: 'text' as const,
        content: `# 🧭 Calculus with Polar Coordinates

**Part 4 of 7 — Area Enclosed by a Polar Curve**

---

> 🔑 **The big formula:** The area swept out by $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$ is
> $$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2 \\, d\\theta = \\frac{1}{2}\\int_{\\alpha}^{\\beta} \\big[f(\\theta)\\big]^2 \\, d\\theta.$$`,
      },
      {
        id: 'polar4-derivation',
        type: 'text' as const,
        content: `## Why $\\frac{1}{2}r^2$?

Slice the region into thin **circular sectors** of angle $d\\theta$. A sector of radius $r$ and angle $d\\theta$ has area

$$dA = \\frac{1}{2}r^2\\, d\\theta$$

(the area of a full circle $\\pi r^2$ scaled by the fraction $\\frac{d\\theta}{2\\pi}$). Summing all the slices gives the integral.

> ⚠️ **Don't reuse the rectangular formula.** In polar coordinates the area element is $\\frac{1}{2}r^2\\,d\\theta$, **not** $y\\,dx$. Forgetting the $\\frac{1}{2}$ (or squaring incorrectly) is the most common area mistake.

### Choosing the limits

The limits $\\alpha$ and $\\beta$ must be the angles where the curve **starts and finishes tracing the region exactly once**. For a full closed curve traced once as $\\theta$ goes $0 \\to 2\\pi$, use $0$ to $2\\pi$ — but watch for curves (like roses) that retrace.`,
      },
      {
        id: 'polar4-cardioid',
        type: 'text' as const,
        content: `## Worked Example: Area inside the cardioid $r = 1 + \\cos\\theta$

The cardioid is traced once over $[0, 2\\pi]$:

$$A = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2 \\, d\\theta = \\frac{1}{2}\\int_0^{2\\pi} \\big(1 + 2\\cos\\theta + \\cos^2\\theta\\big)\\, d\\theta$$

Use $\\cos^2\\theta = \\dfrac{1 + \\cos 2\\theta}{2}$:

$$= \\frac{1}{2}\\int_0^{2\\pi}\\left(1 + 2\\cos\\theta + \\frac{1}{2} + \\frac{\\cos 2\\theta}{2}\\right) d\\theta = \\frac{1}{2}\\int_0^{2\\pi}\\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}\\right) d\\theta$$

Over a full period, $\\int_0^{2\\pi}\\cos\\theta\\,d\\theta = 0$ and $\\int_0^{2\\pi}\\cos 2\\theta\\,d\\theta = 0$, so only the constant survives:

$$A = \\frac{1}{2}\\cdot \\frac{3}{2}\\cdot 2\\pi = \\frac{3\\pi}{2}$$

> ✅ **Sanity check:** $\\frac{3\\pi}{2} \\approx 4.71$. The cardioid fits comfortably inside the circle $r = 2$ (area $4\\pi \\approx 12.6$) — plausible.`,
      },
      {
        id: 'polar4-area-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The area enclosed by a polar curve $r = f(\\theta)$ from $\\alpha$ to $\\beta$ is:',
              options: [
                '$\\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\, d\\theta$',
                '$\\int_{\\alpha}^{\\beta} r\\, d\\theta$',
                '$\\pi \\int_{\\alpha}^{\\beta} r^2\\, d\\theta$',
                '$\\frac{1}{2}\\int_{\\alpha}^{\\beta} r\\, d\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'The polar area element is the sector area $dA = \\frac{1}{2}r^2\\,d\\theta$, so $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$. Note $r$ is SQUARED and there is a factor of $\\frac{1}{2}$.',
            },
            {
              question: 'Find the area inside the circle $r = 2\\sin\\theta$. (It is a circle of radius 1, traced once over $[0,\\pi]$.)',
              options: ['$\\pi$', '$2\\pi$', '$4\\pi$', '$\\frac{\\pi}{2}$'],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}\\int_0^\\pi (2\\sin\\theta)^2 d\\theta = 2\\int_0^\\pi \\sin^2\\theta\\,d\\theta = \\int_0^\\pi (1 - \\cos 2\\theta)\\,d\\theta = [\\theta - \\tfrac{\\sin 2\\theta}{2}]_0^\\pi = \\pi$. It is a unit circle, so area $= \\pi(1)^2 = \\pi$. ✓',
            },
          ],
        },
      },
      {
        id: 'polar4-petal-text',
        type: 'text' as const,
        content: `## Worked Example: Area of ONE petal of $r = \\cos 2\\theta$

This four-petaled rose has a petal centered on the polar axis. The petal is traced as $r$ goes from $0$ up to $1$ and back to $0$, which happens for $\\theta \\in \\left[-\\frac{\\pi}{4}, \\frac{\\pi}{4}\\right]$ (where $\\cos 2\\theta \\ge 0$).

$$A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} \\cos^2 2\\theta\\, d\\theta = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}\\frac{1 + \\cos 4\\theta}{2}\\, d\\theta$$

$$= \\frac{1}{4}\\left[\\theta + \\frac{\\sin 4\\theta}{4}\\right]_{-\\pi/4}^{\\pi/4} = \\frac{1}{4}\\left[\\left(\\frac{\\pi}{4} + 0\\right) - \\left(-\\frac{\\pi}{4} + 0\\right)\\right] = \\frac{1}{4}\\cdot\\frac{\\pi}{2} = \\frac{\\pi}{8}$$

> 💡 **Finding petal limits:** A petal of $r = \\cos(n\\theta)$ runs between consecutive angles where $r = 0$. Solve $\\cos(n\\theta) = 0$. Integrating over the whole $[0,2\\pi]$ would **double-count** petals (or count negative-$r$ overlaps) — always integrate one petal at a time.`,
      },
      {
        id: 'polar4-area-drill',
        type: 'input-boxes' as const,
        content: `**Set Up & Evaluate** 🧮

**1)** Area inside the circle $r = 6$ (use the polar formula over $[0, 2\\pi]$): $A = \\,?\\,\\pi$ — enter just the number multiplying $\\pi$.
**2)** Area of one petal of the rose $r = \\sin 2\\theta$, which equals $\\frac{1}{2}\\int_0^{\\pi/2}\\sin^2 2\\theta\\,d\\theta$. The result is $\\frac{\\pi}{?}$ — enter the denominator.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['36', '8'],
          hint1: 'For $r = 6$: $A = \\frac{1}{2}\\int_0^{2\\pi} 6^2\\,d\\theta = \\frac{1}{2}\\cdot 36 \\cdot 2\\pi = 36\\pi$. (Matches $\\pi r^2 = 36\\pi$.)',
          hint2: 'For the petal, use $\\sin^2 2\\theta = \\frac{1 - \\cos 4\\theta}{2}$, identical structure to the $\\cos 2\\theta$ petal.',
          hint3: '$\\frac{1}{2}\\int_0^{\\pi/2}\\frac{1-\\cos 4\\theta}{2}d\\theta = \\frac{1}{4}[\\theta - \\frac{\\sin 4\\theta}{4}]_0^{\\pi/2} = \\frac{1}{4}\\cdot\\frac{\\pi}{2} = \\frac{\\pi}{8}$.',
          explanation: '1) $36\\pi$ (the $\\pi r^2$ of a radius-6 circle).  2) One petal has area $\\frac{\\pi}{8}$, so the denominator is $8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polar-calculus',
    sections: [
      {
        id: 'polar5-intro',
        type: 'text' as const,
        content: `# 🧭 Calculus with Polar Coordinates

**Part 5 of 7 — Area Between Two Polar Curves**

---

> 🔑 **The Idea:** For a region between an **outer** curve $r = R(\\theta)$ and an **inner** curve $r = r(\\theta)$ over the same angular interval,
> $$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}\\Big(R(\\theta)^2 - r(\\theta)^2\\Big)\\, d\\theta.$$
> It's the "outer$^2$ minus inner$^2$" version of the sector formula.`,
      },
      {
        id: 'polar5-intersections',
        type: 'text' as const,
        content: `## Step 1: Find the Intersections

The limits $\\alpha, \\beta$ come from where the two curves **cross**. Set the equations equal:

$$R(\\theta) = r(\\theta)$$

and solve for $\\theta$. These crossing angles bound the region.

> ⚠️ **Polar intersection trap:** Two polar curves can cross at a point that the algebra $R(\\theta) = r(\\theta)$ **misses** — most importantly **the pole**, which each curve may reach at a *different* $\\theta$. Always check separately whether both curves pass through the origin. A quick sketch is the safest way to confirm your limits.`,
      },
      {
        id: 'polar5-worked',
        type: 'text' as const,
        content: `## Worked Example: Inside $r = 3\\sin\\theta$ AND outside $r = 1 + \\sin\\theta$ won't be needed — let's do a cleaner classic.

**Find the area inside both $r = 3\\sin\\theta$ and $r = 3\\cos\\theta$** (the overlap of two circles).

**Intersection:** $3\\sin\\theta = 3\\cos\\theta \\Rightarrow \\tan\\theta = 1 \\Rightarrow \\theta = \\frac{\\pi}{4}$ (plus the pole, where both reach $r=0$).

By symmetry the overlap splits at $\\theta = \\frac{\\pi}{4}$. For $0 \\le \\theta \\le \\frac{\\pi}{4}$ the **inner** boundary is $r = 3\\sin\\theta$; by symmetry the total is twice that piece:

$$A = 2\\cdot \\frac{1}{2}\\int_0^{\\pi/4} (3\\sin\\theta)^2\\, d\\theta = \\int_0^{\\pi/4} 9\\sin^2\\theta\\, d\\theta = \\frac{9}{2}\\int_0^{\\pi/4}(1 - \\cos 2\\theta)\\, d\\theta$$

$$= \\frac{9}{2}\\left[\\theta - \\frac{\\sin 2\\theta}{2}\\right]_0^{\\pi/4} = \\frac{9}{2}\\left[\\frac{\\pi}{4} - \\frac{1}{2}\\right] = \\frac{9\\pi}{8} - \\frac{9}{4}$$

> 💡 **Why $3\\sin\\theta$ on $[0,\\frac{\\pi}{4}]$?** Near $\\theta = 0$ the $\\sin$ circle is the *smaller* radius, so it forms the boundary of the overlap on that side. Symmetry across $\\theta = \\frac{\\pi}{4}$ doubles it.`,
      },
      {
        id: 'polar5-setup-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The area between an outer curve $R(\\theta)$ and an inner curve $r(\\theta)$ over $[\\alpha,\\beta]$ is:',
              options: [
                '$\\frac{1}{2}\\int_\\alpha^\\beta \\big(R^2 - r^2\\big)\\, d\\theta$',
                '$\\frac{1}{2}\\int_\\alpha^\\beta \\big(R - r\\big)^2\\, d\\theta$',
                '$\\frac{1}{2}\\int_\\alpha^\\beta \\big(R - r\\big)\\, d\\theta$',
                '$\\int_\\alpha^\\beta \\big(R^2 - r^2\\big)\\, d\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'Subtract the inner sector area from the outer sector area: $\\frac{1}{2}\\int(R^2 - r^2)\\,d\\theta$. Note it is $R^2 - r^2$, NOT $(R-r)^2$ — you square each radius separately.',
            },
            {
              question: 'Why must you check the pole separately when finding where two polar curves intersect?',
              options: [
                'Each curve can reach the origin at a DIFFERENT $\\theta$, so setting the equations equal can miss it',
                'The pole is never an intersection point',
                'The formula $\\frac{1}{2}r^2$ fails at the pole',
                'Because $r$ must be negative there',
              ],
              correctAnswer: 0,
              explanation: 'A point in polar coordinates has many $(r,\\theta)$ names; the origin in particular is $r=0$ for ANY $\\theta$. So two curves can both pass through the pole while $R(\\theta) = r(\\theta)$ has no solution there. Always check it (and ideally sketch).',
            },
          ],
        },
      },
      {
        id: 'polar5-intersect-drill',
        type: 'input-boxes' as const,
        content: `**Find the Crossing Angle** 🧮

The curves $r = 1 + \\sin\\theta$ (cardioid) and $r = 3\\sin\\theta$ (circle) cross where $1 + \\sin\\theta = 3\\sin\\theta$.

**1)** Solve for $\\sin\\theta$: $\\sin\\theta = \\,?$  *(enter a fraction like 1/2)*
**2)** The crossing angle in $[0, \\frac{\\pi}{2}]$ is $\\theta = \\frac{\\pi}{?}$ — enter the denominator.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/2', '6'],
          hint1: '$1 + \\sin\\theta = 3\\sin\\theta \\Rightarrow 1 = 2\\sin\\theta$.',
          hint2: 'So $\\sin\\theta = \\frac{1}{2}$.',
          hint3: 'The angle in $[0,\\frac{\\pi}{2}]$ with $\\sin\\theta = \\frac{1}{2}$ is $\\theta = \\frac{\\pi}{6}$, so the denominator is $6$.',
          explanation: '$1 = 2\\sin\\theta \\Rightarrow \\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}$ (and $\\frac{5\\pi}{6}$). These angles bound the region between the circle and cardioid.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'polar-calculus',
    sections: [
      {
        id: 'polar6-intro',
        type: 'text' as const,
        content: `# 🧭 Calculus with Polar Coordinates

**Part 6 of 7 — Arc Length of a Polar Curve**

---

> 🔑 **The Formula:** The length of the polar curve $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$ is
> $$L = \\int_{\\alpha}^{\\beta} \\sqrt{\\,r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2\\,}\\; d\\theta.$$`,
      },
      {
        id: 'polar6-derivation',
        type: 'text' as const,
        content: `## Where the Formula Comes From

Start from the parametric arc-length formula with parameter $\\theta$:

$$L = \\int_{\\alpha}^{\\beta} \\sqrt{\\left(\\frac{dx}{d\\theta}\\right)^2 + \\left(\\frac{dy}{d\\theta}\\right)^2}\\; d\\theta$$

Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$, differentiate with the product rule, and simplify (the cross terms cancel and $\\sin^2 + \\cos^2 = 1$). The result collapses to the clean form:

$$L = \\int_{\\alpha}^{\\beta} \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\; d\\theta$$

> ⚠️ **Notice $r$ is inside the square root, not squared-and-haved.** Don't confuse this with the **area** integrand $\\frac{1}{2}r^2$. Arc length has $\\sqrt{r^2 + (r')^2}$, no factor of $\\frac{1}{2}$.`,
      },
      {
        id: 'polar6-circle',
        type: 'text' as const,
        content: `## Worked Example: Circumference of $r = a$

For the circle $r = a$ (constant), $\\dfrac{dr}{d\\theta} = 0$, and the curve is traced once over $[0, 2\\pi]$:

$$L = \\int_0^{2\\pi}\\sqrt{a^2 + 0^2}\\; d\\theta = \\int_0^{2\\pi} a\\, d\\theta = a\\,\\theta\\Big|_0^{2\\pi} = 2\\pi a$$

> ✅ **Sanity check:** That's exactly the circumference $2\\pi a$ of a circle of radius $a$. The formula passes its first test.

### Worked Example: the spiral $r = \\theta$

Here $\\dfrac{dr}{d\\theta} = 1$, so over $[0, \\pi]$:

$$L = \\int_0^{\\pi}\\sqrt{\\theta^2 + 1}\\; d\\theta$$

This is a legitimate setup; the integral itself requires a trig/hyperbolic substitution (or a calculator on the AP exam). On BC you are most often asked to **set up** such an integral correctly.`,
      },
      {
        id: 'polar6-arc-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The arc length of $r = f(\\theta)$ from $\\alpha$ to $\\beta$ is given by:',
              options: [
                '$\\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\, d\\theta$',
                '$\\frac{1}{2}\\int_\\alpha^\\beta r^2\\, d\\theta$',
                '$\\int_\\alpha^\\beta \\sqrt{1 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\, d\\theta$',
                '$\\int_\\alpha^\\beta r\\, d\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'Arc length is $\\int \\sqrt{r^2 + (r\')^2}\\,d\\theta$. The middle two are the area formula and the rectangular arc-length formula respectively — neither applies here.',
            },
            {
              question: 'Set up the arc length of $r = 3\\theta$ from $\\theta = 0$ to $\\theta = 1$. Since $\\frac{dr}{d\\theta} = 3$, the integral is:',
              options: [
                '$\\int_0^1 \\sqrt{9\\theta^2 + 9}\\, d\\theta$',
                '$\\int_0^1 \\sqrt{3\\theta^2 + 9}\\, d\\theta$',
                '$\\frac{1}{2}\\int_0^1 9\\theta^2\\, d\\theta$',
                '$\\int_0^1 \\sqrt{9\\theta + 3}\\, d\\theta$',
              ],
              correctAnswer: 0,
              explanation: '$r^2 = (3\\theta)^2 = 9\\theta^2$ and $\\left(\\frac{dr}{d\\theta}\\right)^2 = 3^2 = 9$, so $L = \\int_0^1 \\sqrt{9\\theta^2 + 9}\\,d\\theta$.',
            },
          ],
        },
      },
      {
        id: 'polar6-arc-drill',
        type: 'input-boxes' as const,
        content: `**Set Up the Arc Length** 🧮

For the cardioid $r = 1 + \\cos\\theta$, $\\dfrac{dr}{d\\theta} = -\\sin\\theta$.

The integrand is $\\sqrt{r^2 + (r')^2} = \\sqrt{(1+\\cos\\theta)^2 + (-\\sin\\theta)^2}$. Expand and simplify.

**1)** $(1+\\cos\\theta)^2 + \\sin^2\\theta = 1 + 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta$. Using $\\cos^2 + \\sin^2 = 1$, this equals $\\,?\\, + 2\\cos\\theta$ — enter the constant.
**2)** So the integrand simplifies to $\\sqrt{\\,?\\, + 2\\cos\\theta}$ — enter the same constant.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '2'],
          hint1: 'Group $\\cos^2\\theta + \\sin^2\\theta = 1$.',
          hint2: 'You are left with $1 + 2\\cos\\theta + 1 = 2 + 2\\cos\\theta$.',
          hint3: 'Both blanks are the constant $2$: the integrand is $\\sqrt{2 + 2\\cos\\theta}$.',
          explanation: '$(1+\\cos\\theta)^2 + \\sin^2\\theta = 1 + 2\\cos\\theta + (\\cos^2\\theta + \\sin^2\\theta) = 2 + 2\\cos\\theta$, so the integrand is $\\sqrt{2 + 2\\cos\\theta}$. (It can be simplified further with a half-angle identity to $2\\left|\\cos\\frac{\\theta}{2}\\right|$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'polar-calculus',
    sections: [
      {
        id: 'polar7-intro',
        type: 'text' as const,
        content: `# 🧭 Calculus with Polar Coordinates

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) convert between polar and rectangular, (2) sketch curves and use symmetry, (3) find the slope $\\frac{dy}{dx}$, (4) find enclosed area, (5) find area between curves, and (6) find arc length. Let's pull it together.`,
      },
      {
        id: 'polar7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key formula |
|------|-------------|
| Polar → rectangular | $x = r\\cos\\theta,\\;\\; y = r\\sin\\theta$ |
| Rectangular → polar | $r^2 = x^2 + y^2,\\;\\; \\tan\\theta = \\frac{y}{x}$ |
| Slope | $\\dfrac{dy}{dx} = \\dfrac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$ |
| Enclosed area | $A = \\dfrac{1}{2}\\displaystyle\\int_\\alpha^\\beta r^2\\, d\\theta$ |
| Area between curves | $A = \\dfrac{1}{2}\\displaystyle\\int_\\alpha^\\beta (R^2 - r^2)\\, d\\theta$ |
| Arc length | $L = \\displaystyle\\int_\\alpha^\\beta \\sqrt{r^2 + (r')^2}\\, d\\theta$ |

> ⚠️ **Three traps to avoid:** (1) the slope is NOT $\\frac{dr}{d\\theta}$; (2) area uses $\\frac{1}{2}r^2$, arc length uses $\\sqrt{r^2 + (r')^2}$ — don't swap them; (3) always check the **pole** as a possible intersection.`,
      },
      {
        id: 'polar7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $r = 4\\cos\\theta$ to rectangular form.',
              options: [
                '$x^2 + y^2 = 4x$',
                '$x^2 + y^2 = 4y$',
                '$x^2 + y^2 = 16$',
                '$y = 4x$',
              ],
              correctAnswer: 0,
              explanation: 'Multiply by $r$: $r^2 = 4r\\cos\\theta$. Then $r^2 = x^2 + y^2$ and $r\\cos\\theta = x$, giving $x^2 + y^2 = 4x$ — a circle of diameter 4 through the origin.',
            },
            {
              question: 'The area inside one petal of $r = 2\\cos 3\\theta$ is $\\frac{1}{2}\\int (2\\cos 3\\theta)^2 d\\theta$ over one petal. The integrand $\\frac{1}{2}(2\\cos 3\\theta)^2$ simplifies to:',
              options: [
                '$2\\cos^2 3\\theta$',
                '$4\\cos^2 3\\theta$',
                '$\\cos^2 3\\theta$',
                '$2\\cos 3\\theta$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{1}{2}(2\\cos 3\\theta)^2 = \\frac{1}{2}\\cdot 4\\cos^2 3\\theta = 2\\cos^2 3\\theta$.',
            },
          ],
        },
      },
      {
        id: 'polar7-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Tool** 🔽

For each task, pick the correct formula or first step.`,
        exercise: {
          dropdowns: [
            { label: 'Area enclosed by $r = 2 + 2\\sin\\theta$ over $[0,2\\pi]$:', options: ['$\\frac{1}{2}\\int_0^{2\\pi}(2+2\\sin\\theta)^2 d\\theta$', '$\\int_0^{2\\pi}(2+2\\sin\\theta)\\, d\\theta$', '$\\int_0^{2\\pi}\\sqrt{(2+2\\sin\\theta)^2}\\, d\\theta$', '$\\frac{1}{2}\\int_0^{2\\pi}(2+2\\sin\\theta)\\, d\\theta$'] },
            { label: 'Slope of a polar curve at a point:', options: ['$\\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$', '$\\frac{dr}{d\\theta}$', '$\\frac{r\\cos\\theta}{r\\sin\\theta}$', '$\\frac{1}{2}r^2$'] },
            { label: 'Arc length of $r = e^\\theta$ on $[0,1]$:', options: ['$\\int_0^1\\sqrt{e^{2\\theta} + e^{2\\theta}}\\, d\\theta$', '$\\frac{1}{2}\\int_0^1 e^{2\\theta}\\, d\\theta$', '$\\int_0^1 e^\\theta\\, d\\theta$', '$\\int_0^1\\sqrt{e^\\theta + e^\\theta}\\, d\\theta$'] },
          ],
          correctAnswers: [
            '$\\frac{1}{2}\\int_0^{2\\pi}(2+2\\sin\\theta)^2 d\\theta$',
            '$\\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$',
            '$\\int_0^1\\sqrt{e^{2\\theta} + e^{2\\theta}}\\, d\\theta$',
          ],
          hint1: 'Area always uses $\\frac{1}{2}r^2$ with $r$ squared.',
          hint2: 'Slope is the parametric ratio of $\\theta$-derivatives, never $\\frac{dr}{d\\theta}$ alone.',
          hint3: 'For $r = e^\\theta$, $r\' = e^\\theta$ too, so $r^2 + (r\')^2 = e^{2\\theta} + e^{2\\theta}$ under the root.',
          explanation: 'Area: $\\frac{1}{2}\\int r^2 d\\theta$. Slope: the boxed quotient of $\\theta$-derivatives. Arc length: $\\int\\sqrt{r^2 + (r\')^2}\\,d\\theta$ with $r = r\' = e^\\theta$.',
        },
      },
      {
        id: 'polar7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The polar point $\\left(4, \\frac{2\\pi}{3}\\right)$ has rectangular coordinates:',
              options: [
                '$(-2,\\, 2\\sqrt3)$',
                '$(2,\\, 2\\sqrt3)$',
                '$(-2\\sqrt3,\\, 2)$',
                '$(2\\sqrt3,\\, -2)$',
              ],
              correctAnswer: 0,
              explanation: '$x = 4\\cos\\frac{2\\pi}{3} = 4\\left(-\\frac12\\right) = -2$ and $y = 4\\sin\\frac{2\\pi}{3} = 4\\left(\\frac{\\sqrt3}{2}\\right) = 2\\sqrt3$, so $(-2,\\,2\\sqrt3)$.',
            },
            {
              question: 'The area inside the cardioid $r = 1 + \\cos\\theta$ equals:',
              options: [
                '$\\frac{3\\pi}{2}$',
                '$\\pi$',
                '$2\\pi$',
                '$\\frac{\\pi}{2}$',
              ],
              correctAnswer: 0,
              explanation: '$A = \\frac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^2 d\\theta = \\frac{1}{2}\\int_0^{2\\pi}\\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}\\right)d\\theta = \\frac{1}{2}\\cdot\\frac{3}{2}\\cdot 2\\pi = \\frac{3\\pi}{2}$.',
            },
            {
              question: 'For a polar curve, a VERTICAL tangent line occurs when:',
              options: [
                '$\\frac{dx}{d\\theta} = 0$ and $\\frac{dy}{d\\theta} \\ne 0$',
                '$\\frac{dy}{d\\theta} = 0$ and $\\frac{dx}{d\\theta} \\ne 0$',
                '$\\frac{dr}{d\\theta} = 0$',
                '$r = 0$',
              ],
              correctAnswer: 0,
              explanation: 'A vertical tangent has an undefined slope, so the denominator $\\frac{dx}{d\\theta} = 0$ while the numerator $\\frac{dy}{d\\theta} \\ne 0$.',
            },
          ],
        },
      },
    ],
  },
]
