import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Calculus with Parametric Equations (AP Calculus BC).
 * Registry key / DB Topic.slug: 'parametric-calculus'.
 * 7 parts, gold-standard structure: parametric curves & the parameter →
 * first derivative dy/dx & tangent lines → second derivative & concavity →
 * arc length → vector motion (velocity, speed, acceleration, distance) →
 * area & horizontal/vertical tangents → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every derivative, integral, and numeric value was verified with a CAS
 * (SymPy) and re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'parametric-calculus',
    sections: [
      {
        id: 'param1-intro',
        type: 'text' as const,
        content: `# 〽️ Calculus with Parametric Equations

**Part 1 of 7 — Curves, the Parameter & Plotting**

---

### Topics in This Part

| Section |
|---------|
| What Is a Parametric Curve? |
| Plotting from a Table of $t$-values |
| Eliminating the Parameter |
| Direction & Orientation |

> 🔑 **Key Concept:** Instead of writing $y$ as a function of $x$, a **parametric** curve gives *both* coordinates as functions of a third variable — the **parameter** $t$ (often time):
> $$x = f(t), \\qquad y = g(t).$$
> As $t$ runs over its interval, the point $(x, y)$ traces a path. This lets us draw curves a single function $y = F(x)$ never could — loops, circles, and curves that double back.`,
      },
      {
        id: 'param1-what',
        type: 'text' as const,
        content: `## What Is a Parametric Curve?

A **parametrization** is a pair of equations
$$x = f(t), \\qquad y = g(t), \\qquad t \\in [a, b].$$

Each value of $t$ produces one point $(f(t),\\, g(t))$. Stringing those points together — in order of increasing $t$ — traces the curve.

### Building a Table

Take $x = t^2 - 1$ and $y = 2t$.

| $t$ | $x = t^2-1$ | $y = 2t$ | Point $(x, y)$ |
|-----|-------------|----------|----------------|
| $-2$ | $3$ | $-4$ | $(3, -4)$ |
| $-1$ | $0$ | $-2$ | $(0, -2)$ |
| $0$ | $-1$ | $0$ | $(-1, 0)$ |
| $1$ | $0$ | $2$ | $(0, 2)$ |
| $2$ | $3$ | $4$ | $(3, 4)$ |

Plotted in order, these points sweep out a sideways parabola opening to the right, traced from the bottom up.

> 💡 The **same curve** can have many parametrizations. What makes the parametric description richer is that it also records *when* and *in which direction* each point is reached.`,
      },
      {
        id: 'param1-eval',
        type: 'input-boxes' as const,
        content: `**Evaluate the Parametrization** 🧮

For the curve $x = t^2 - 1,\\; y = 2t$ above, find the coordinates at the given $t$.

**1)** At $t = 3$, the $x$-coordinate is $\\,?$
**2)** At $t = 3$, the $y$-coordinate is $\\,?$
**3)** At $t = 0$, the $x$-coordinate is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '6', '-1'],
          hint1: 'Substitute $t = 3$ into $x = t^2 - 1$: $\\;3^2 - 1$.',
          hint2: 'Substitute $t = 3$ into $y = 2t$: $\\;2 \\cdot 3$.',
          hint3: 'At $t = 0$: $\\;x = 0^2 - 1 = -1$.',
          explanation: '$t=3$: $x = 9 - 1 = 8,\\; y = 6$, so $(8, 6)$. $t=0$: $x = -1$, so $(-1, 0)$.',
        },
      },
      {
        id: 'param1-eliminate-teach',
        type: 'text' as const,
        content: `## Eliminating the Parameter

To see the familiar Cartesian shape, **solve one equation for $t$** and substitute into the other.

### Example: $x = t + 1,\\; y = t^2$

Solve the first for $t$: $\\;t = x - 1$. Substitute into $y$:
$$y = (x - 1)^2.$$
A parabola with vertex $(1, 0)$.

### Example: $x = 2t,\\; y = t^2$

From $x = 2t$ we get $t = \\dfrac{x}{2}$, so
$$y = \\left(\\frac{x}{2}\\right)^2 = \\frac{x^2}{4}.$$

### Trig curves: use an identity

For $x = \\cos t,\\; y = \\sin t$, don't solve for $t$ — square and add:
$$x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1.$$
The unit circle. And $x = 3\\cos t,\\; y = 3\\sin t$ gives $x^2 + y^2 = 9$, a circle of radius $3$.

> ⚠️ Eliminating $t$ can **lose information**: $x^2 + y^2 = 1$ is the whole circle, but a restricted $t$-interval might trace only an arc, and the Cartesian equation forgets the *direction* of travel.`,
      },
      {
        id: 'param1-eliminate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Eliminate the parameter: $x = t - 2,\\; y = t^2$.',
              options: ['$y = (x + 2)^2$', '$y = (x - 2)^2$', '$y = x^2 - 2$', '$y = x^2 + 2$'],
              correctAnswer: 0,
              explanation: 'Solve $x = t - 2$ for $t$: $\\;t = x + 2$. Substitute into $y = t^2$ to get $y = (x + 2)^2$.',
            },
            {
              question: 'The curve $x = 5\\cos t,\\; y = 5\\sin t$ is:',
              options: ['a circle of radius $5$', 'a circle of radius $25$', 'a parabola', 'a line of slope $5$'],
              correctAnswer: 0,
              explanation: '$x^2 + y^2 = 25\\cos^2 t + 25\\sin^2 t = 25$, so it is a circle of radius $\\sqrt{25} = 5$.',
            },
          ],
        },
      },
      {
        id: 'param1-orientation-teach',
        type: 'text' as const,
        content: `## Orientation: the Arrow on the Curve

Eliminating the parameter gives the **shape**, but the parametric form also remembers the **direction** of travel and the **starting point**. We usually mark this with an arrow on the curve.

- $x = \\cos t,\\; y = \\sin t$ starts at $(1, 0)$ when $t = 0$ and, as $t$ grows, moves **counterclockwise**.
- $x = \\cos t,\\; y = -\\sin t$ traces the *same circle* but **clockwise**.

Same Cartesian equation $x^2 + y^2 = 1$, opposite orientations — information only the parametrization keeps.`,
      },
      {
        id: 'param1-orientation',
        type: 'dropdown-select' as const,
        content: `**Direction & Orientation** 🔽

The parameter records *which way* the curve is drawn. Match each parametrization to its description.`,
        exercise: {
          dropdowns: [
            { label: 'Cartesian shape of $x = t,\\; y = t^3$:', options: ['$y = x^3$', '$y = x^{1/3}$', '$y = 3x$', '$x = y^3$'] },
            { label: 'As $t$ increases in $x = \\cos t,\\, y = \\sin t$, the point moves:', options: ['counterclockwise', 'clockwise', 'in a straight line', 'it does not move'] },
            { label: 'Curve traced by $x = t^2,\\; y = t^2$ (with $t \\ge 0$):', options: ['the ray $y = x,\\, x \\ge 0$', 'the full line $y = x$', 'a parabola', 'a circle'] },
          ],
          correctAnswers: ['$y = x^3$', 'counterclockwise', 'the ray $y = x,\\, x \\ge 0$'],
          hint1: 'When $x = t$, just replace $t$ with $x$ everywhere.',
          hint2: 'At $t = 0$ you are at $(1, 0)$; a moment later ($t$ small, positive) $y = \\sin t > 0$, so you head **up** — that is counterclockwise.',
          hint3: 'If $x = t^2$ and $y = t^2$ then $y = x$ always, but $t^2 \\ge 0$ forces $x \\ge 0$, so only the ray is traced.',
          explanation: 'Parametric equations carry orientation: $x=\\cos t,\\,y=\\sin t$ goes counterclockwise starting at $(1,0)$, and squaring restricts the domain to $x \\ge 0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'parametric-calculus',
    sections: [
      {
        id: 'param2-intro',
        type: 'text' as const,
        content: `# 〽️ Calculus with Parametric Equations

**Part 2 of 7 — The First Derivative $\\dfrac{dy}{dx}$ & Tangent Lines**

---

> 🔑 **The Master Formula:** The slope of a parametric curve is the ratio of the two rates of change:
> $$\\frac{dy}{dx} = \\frac{\\;dy/dt\\;}{\\;dx/dt\\;}, \\qquad \\frac{dx}{dt} \\ne 0.$$
> Think of it as the chain rule rearranged: $\\dfrac{dy}{dt} = \\dfrac{dy}{dx}\\cdot\\dfrac{dx}{dt}$, so dividing by $\\dfrac{dx}{dt}$ isolates the slope.`,
      },
      {
        id: 'param2-formula',
        type: 'text' as const,
        content: `## Computing $\\dfrac{dy}{dx}$

Differentiate $x$ and $y$ **separately** with respect to $t$, then divide.

### Example: $x = t^2 + 1,\\; y = t^3 - 3t$

$$\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^2 - 3.$$

$$\\frac{dy}{dx} = \\frac{3t^2 - 3}{2t} = \\frac{3(t^2 - 1)}{2t}.$$

The slope is still written **in terms of $t$** — that's normal and expected.

### Evaluating at a point

At $t = 2$:
$$\\frac{dy}{dx} = \\frac{3(4 - 1)}{2(2)} = \\frac{9}{4}.$$

The point there is $\\big(2^2 + 1,\\; 2^3 - 3\\cdot 2\\big) = (5, 2)$, so the tangent has slope $\\tfrac{9}{4}$ at $(5, 2)$.

> 💡 You almost never eliminate the parameter first — differentiating each piece in $t$ and dividing is faster and avoids messy square roots.`,
      },
      {
        id: 'param2-slope-drill',
        type: 'input-boxes' as const,
        content: `**Find the Slope** 🧮

Compute $\\dfrac{dy}{dx}$ at the given $t$. (Answers are numbers or simple fractions.)

**1)** $x = 2t,\\; y = t^2 - 1$ at $t = 3$:  $\\dfrac{dy}{dx} = \\,?$
**2)** $x = t^2,\\; y = 2t + 1$ at $t = 2$:  $\\dfrac{dy}{dx} = \\,?$
**3)** $x = t^2 + 1,\\; y = t^3 - 3t$ at $t = 1$:  $\\dfrac{dy}{dx} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1/2', '0'],
          hint1: '$\\dfrac{dy}{dx} = \\dfrac{2t}{2} = t$, so at $t = 3$ the slope is $3$.',
          hint2: '$\\dfrac{dy}{dx} = \\dfrac{2}{2t} = \\dfrac{1}{t}$, so at $t = 2$ it is $\\dfrac{1}{2}$.',
          hint3: '$\\dfrac{dy}{dx} = \\dfrac{3t^2 - 3}{2t}$; at $t = 1$ the numerator is $0$, so the slope is $0$.',
          explanation: '1) $\\dfrac{2t}{2} = t \\to 3$.  2) $\\dfrac{2}{2t} = \\dfrac1t \\to \\dfrac12$.  3) $\\dfrac{3(1-1)}{2} = 0$ (a horizontal tangent).',
        },
      },
      {
        id: 'param2-tangent-teach',
        type: 'text' as const,
        content: `## Tangent-Line Equations

Once you have the slope $m = \\dfrac{dy}{dx}\\Big|_{t_0}$ and the point $\\big(x(t_0),\\, y(t_0)\\big)$, use point–slope form:
$$y - y_0 = m\\,(x - x_0).$$

### Example: $x = 2t,\\; y = t^2 - 1$ at $t = 3$

- **Slope:** $\\dfrac{dy}{dx} = \\dfrac{2t}{2} = t$, so $m = 3$.
- **Point:** $x = 2(3) = 6,\\; y = 3^2 - 1 = 8$, i.e. $(6, 8)$.
- **Tangent:** $y - 8 = 3(x - 6)$, or $y = 3x - 10$.

> ✅ **Check:** At $x = 6$, the line gives $y = 3(6) - 10 = 8$ ✓ — it passes through the point of tangency.`,
      },
      {
        id: 'param2-tangent-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $x = e^{t},\\; y = e^{2t}$, the slope $\\dfrac{dy}{dx}$ equals:',
              options: ['$2e^{t}$', '$e^{t}$', '$2e^{2t}$', '$\\dfrac{1}{2}e^{t}$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{dy}{dt} = 2e^{2t}$ and $\\dfrac{dx}{dt} = e^{t}$, so $\\dfrac{dy}{dx} = \\dfrac{2e^{2t}}{e^{t}} = 2e^{t}$.',
            },
            {
              question: 'A parametric curve has a **horizontal** tangent exactly when:',
              options: [
                '$\\dfrac{dy}{dt} = 0$ and $\\dfrac{dx}{dt} \\ne 0$',
                '$\\dfrac{dx}{dt} = 0$ and $\\dfrac{dy}{dt} \\ne 0$',
                'both derivatives are $0$',
                '$\\dfrac{dy}{dx} = 1$',
              ],
              correctAnswer: 0,
              explanation: 'Slope $= \\dfrac{dy/dt}{dx/dt}$ is zero when the numerator $\\dfrac{dy}{dt} = 0$ — provided the denominator $\\dfrac{dx}{dt} \\ne 0$ so the slope is defined.',
            },
          ],
        },
      },
      {
        id: 'param2-recap',
        type: 'text' as const,
        content: `## Putting It Together

A full tangent-line problem is always the same three moves:

1. **Slope:** $m = \\dfrac{dy/dt}{dx/dt}$, evaluated at the given $t_0$.
2. **Point:** plug $t_0$ into $x(t)$ and $y(t)$ to get $(x_0, y_0)$.
3. **Line:** $y - y_0 = m(x - x_0)$, then simplify to $y = mx + b$ if asked.

> 💡 Keep the slope as a function of $t$ until the very last step — substituting $t_0$ too early invites arithmetic slips.`,
      },
      {
        id: 'param2-tangent-drill',
        type: 'input-boxes' as const,
        content: `**Build the Tangent Line** 🧮

For $x = t^2,\\; y = t^3$ at $t = 2$, find each piece of the tangent line $y = mx + b$.

**1)** Slope $m = \\dfrac{dy}{dx}$ at $t = 2$:  $\\,?$  *(decimal or fraction)*
**2)** $x$-coordinate of the point of tangency:  $\\,?$
**3)** $y$-intercept $b$ of the tangent line:  $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '-4'],
          hint1: '$\\dfrac{dy}{dx} = \\dfrac{3t^2}{2t} = \\dfrac{3t}{2}$; at $t = 2$ that is $\\dfrac{3\\cdot 2}{2} = 3$.',
          hint2: 'The point is $\\big(2^2,\\, 2^3\\big) = (4, 8)$, so $x = 4$.',
          hint3: 'Use $y = mx + b$ at $(4, 8)$ with $m = 3$: $\\;8 = 3(4) + b \\Rightarrow b = -4$.',
          explanation: 'Slope $m = \\dfrac{3t}{2} = 3$ at $t = 2$; point $(4, 8)$; line $y - 8 = 3(x - 4) \\Rightarrow y = 3x - 4$, so $b = -4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'parametric-calculus',
    sections: [
      {
        id: 'param3-intro',
        type: 'text' as const,
        content: `# 〽️ Calculus with Parametric Equations

**Part 3 of 7 — The Second Derivative & Concavity**

---

> 🔑 **The Formula That Trips Everyone Up:** The second derivative is **not** $\\dfrac{d^2y/dt^2}{d^2x/dt^2}$. Instead, you differentiate the *first* derivative (which is itself a function of $t$) with respect to $t$, then divide by $\\dfrac{dx}{dt}$ again:
> $$\\frac{d^2y}{dx^2} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}.$$`,
      },
      {
        id: 'param3-why',
        type: 'text' as const,
        content: `## Why That Formula?

$\\dfrac{d^2y}{dx^2}$ means "the rate of change of the slope **with respect to $x$**." But the slope $\\dfrac{dy}{dx}$ is written in terms of $t$, so to get its change *with respect to $x$* we apply the same master rule one more time:
$$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\!\\left(\\frac{dy}{dx}\\right) = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}.$$

In words: **find $\\dfrac{dy}{dx}$ first, differentiate *that* in $t$, then divide by $\\dfrac{dx}{dt}$.**

> ⚠️ The single most common mistake is dividing the second $t$-derivatives. Always divide by $\\dfrac{dx}{dt}$, **never** by $\\dfrac{d^2x}{dt^2}$.`,
      },
      {
        id: 'param3-firststep-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To find $\\dfrac{d^2y}{dx^2}$ for a parametric curve, the last step is to divide $\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)$ by:',
              options: ['$\\dfrac{dx}{dt}$', '$\\dfrac{d^2x}{dt^2}$', '$\\dfrac{dy}{dt}$', '$\\dfrac{dy}{dx}$'],
              correctAnswer: 0,
              explanation: 'Each derivative "with respect to $x$" is obtained by differentiating in $t$ and dividing by $\\dfrac{dx}{dt}$ — the same denominator both times.',
            },
            {
              question: 'If $\\dfrac{d^2y}{dx^2} > 0$ on an interval, the curve there is:',
              options: ['concave up', 'concave down', 'linear', 'decreasing'],
              correctAnswer: 0,
              explanation: 'A positive second derivative means the slope is increasing, so the curve is concave up — exactly as in single-variable calculus.',
            },
          ],
        },
      },
      {
        id: 'param3-worked',
        type: 'text' as const,
        content: `## Worked Example

Let $x = t^2,\\; y = t^3$.

**Step 1 — first derivative:**
$$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}.$$

**Step 2 — differentiate the slope in $t$:**
$$\\frac{d}{dt}\\!\\left(\\frac{3t}{2}\\right) = \\frac{3}{2}.$$

**Step 3 — divide by $\\dfrac{dx}{dt} = 2t$:**
$$\\frac{d^2y}{dx^2} = \\frac{3/2}{2t} = \\frac{3}{4t}.$$

At $t = 1$: $\\;\\dfrac{d^2y}{dx^2} = \\dfrac{3}{4} > 0$, so the curve is **concave up** there.

> 💡 A handy reality check: for $t > 0$ here $\\dfrac{3}{4t} > 0$ (concave up), and for $t < 0$ it is negative (concave down) — the curve $y^2 = x^3$ changes its character across the origin.`,
      },
      {
        id: 'param3-concavity-dropdown',
        type: 'dropdown-select' as const,
        content: `**Concavity from the Sign** 🔽

For $x = t^3,\\; y = t^2$ the slope is $\\dfrac{dy}{dx} = \\dfrac{2t}{3t^2} = \\dfrac{2}{3t}$, and the second derivative works out to $\\dfrac{d^2y}{dx^2} = -\\dfrac{2}{9t^4}$.`,
        exercise: {
          dropdowns: [
            { label: 'Sign of $\\dfrac{d^2y}{dx^2} = -\\dfrac{2}{9t^4}$ for any $t \\ne 0$:', options: ['always negative', 'always positive', 'positive then negative', 'depends on $t$ in a complicated way'] },
            { label: 'Therefore the curve is:', options: ['concave down everywhere ($t \\ne 0$)', 'concave up everywhere', 'a straight line', 'concave up for $t > 0$ only'] },
          ],
          correctAnswers: ['always negative', 'concave down everywhere ($t \\ne 0$)'],
          hint1: '$t^4 > 0$ for every $t \\ne 0$, so $-\\dfrac{2}{9t^4}$ is a negative number divided by a positive number.',
          hint2: 'A second derivative that is always negative means the slope is always decreasing.',
          hint3: 'Always-negative $\\dfrac{d^2y}{dx^2}$ ⟹ concave down for all $t \\ne 0$.',
          explanation: 'Since $t^4 > 0$, $-\\dfrac{2}{9t^4} < 0$ for all $t \\ne 0$, so the curve is concave down throughout.',
        },
      },
      {
        id: 'param3-checklist',
        type: 'text' as const,
        content: `## The Three-Step Checklist

Every second-derivative problem follows the same order:

| Step | Do this |
|------|---------|
| 1 | Find $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$ (a function of $t$). |
| 2 | Differentiate that result **with respect to $t$**. |
| 3 | Divide by $\\dfrac{dx}{dt}$. |

Then read the **sign**: positive ⟹ concave up, negative ⟹ concave down.

> ⚠️ Skipping Step 1 is fatal — you must differentiate the *slope*, not $y$, in Step 2.`,
      },
      {
        id: 'param3-drill',
        type: 'input-boxes' as const,
        content: `**Second-Derivative Drill** 🧮

For $x = t^2,\\; y = t^3 - 3t$:

**1)** First find the slope. $\\dfrac{dy}{dx} = \\dfrac{3t^2 - 3}{2t}$. Its value at $t = 1$ is $\\,?$
**2)** The second derivative simplifies to $\\dfrac{d^2y}{dx^2} = \\dfrac{3(t^2 + 1)}{4t^3}$. Its value at $t = 1$ is $\\,?$  *(fraction ok)*
**3)** At $t = 1$, is the curve concave up? Enter $1$ for yes, $0$ for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '3/2', '1'],
          hint1: 'At $t = 1$: numerator $3(1) - 3 = 0$, so $\\dfrac{dy}{dx} = 0$.',
          hint2: 'At $t = 1$: $\\dfrac{3(1 + 1)}{4(1)} = \\dfrac{6}{4} = \\dfrac{3}{2}$.',
          hint3: '$\\dfrac{d^2y}{dx^2} = \\dfrac32 > 0$, so the curve is concave up — enter $1$.',
          explanation: '1) Slope $= 0$ (horizontal tangent). 2) $\\dfrac{d^2y}{dx^2} = \\dfrac{3(2)}{4} = \\dfrac{3}{2}$. 3) Positive ⟹ concave up ⟹ $1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'parametric-calculus',
    sections: [
      {
        id: 'param4-intro',
        type: 'text' as const,
        content: `# 〽️ Calculus with Parametric Equations

**Part 4 of 7 — Arc Length**

---

> 🔑 **The Arc-Length Formula:** The length of a parametric curve from $t = a$ to $t = b$ is
> $$L = \\int_{a}^{b} \\sqrt{\\left(\\frac{dx}{dt}\\right)^{2} + \\left(\\frac{dy}{dt}\\right)^{2}}\\; dt.$$
> The square-root piece is the **speed**, $\\dfrac{ds}{dt}$; integrating speed over time gives total distance along the path — which is exactly arc length.`,
      },
      {
        id: 'param4-derive',
        type: 'text' as const,
        content: `## Where the Formula Comes From

Over a tiny step $dt$, the point moves $dx = \\dfrac{dx}{dt}\\,dt$ horizontally and $dy = \\dfrac{dy}{dt}\\,dt$ vertically. By the Pythagorean theorem, the little length of curve is
$$ds = \\sqrt{(dx)^2 + (dy)^2} = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\; dt.$$

Adding up all those pieces — i.e. integrating — gives the total length $L$.

### Setting Up an Integral: $x = t^2,\\; y = t^3$ on $[0, 1]$

$$\\frac{dx}{dt} = 2t, \\qquad \\frac{dy}{dt} = 3t^2.$$

$$L = \\int_0^1 \\sqrt{(2t)^2 + (3t^2)^2}\\; dt = \\int_0^1 \\sqrt{4t^2 + 9t^4}\\; dt = \\int_0^1 t\\sqrt{4 + 9t^2}\\; dt.$$

This one happens to integrate cleanly (let $u = 4 + 9t^2$):
$$L = \\frac{1}{27}\\Big(13\\sqrt{13} - 8\\Big) \\approx 1.440.$$

> 💡 On the AP exam, **setting up the correct integral is the main skill** — many arc-length integrals are evaluated with a calculator. Get the integrand and limits right.`,
      },
      {
        id: 'param4-setup-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The arc length of $x = t^3,\\; y = t^2$ on $[1, 4]$ is given by:',
              options: [
                '$\\displaystyle\\int_1^4 \\sqrt{9t^4 + 4t^2}\\; dt$',
                '$\\displaystyle\\int_1^4 \\sqrt{3t^2 + 2t}\\; dt$',
                '$\\displaystyle\\int_1^4 \\big(9t^4 + 4t^2\\big)\\; dt$',
                '$\\displaystyle\\int_1^4 \\sqrt{t^6 + t^4}\\; dt$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{dx}{dt} = 3t^2,\\; \\dfrac{dy}{dt} = 2t$, so the integrand is $\\sqrt{(3t^2)^2 + (2t)^2} = \\sqrt{9t^4 + 4t^2}$.',
            },
            {
              question: 'In the arc-length formula, the quantity $\\sqrt{(dx/dt)^2 + (dy/dt)^2}$ represents the particle’s:',
              options: ['speed', 'acceleration', 'displacement', 'slope'],
              correctAnswer: 0,
              explanation: 'It is the magnitude of the velocity vector $\\langle dx/dt,\\, dy/dt\\rangle$ — that is, the speed $\\dfrac{ds}{dt}$.',
            },
          ],
        },
      },
      {
        id: 'param4-checklist',
        type: 'text' as const,
        content: `## A Reliable Setup Routine

To turn any parametric curve into an arc-length integral:

1. Compute $\\dfrac{dx}{dt}$ and $\\dfrac{dy}{dt}$.
2. Square each, add, take the square root — that is the **integrand** (the speed).
3. Attach the $t$-limits $a$ and $b$.

$$L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\; dt.$$

> 💡 With trig parametrizations, look for the Pythagorean identity $\\sin^2 + \\cos^2 = 1$ inside the radical — it often collapses the integrand to a constant.`,
      },
      {
        id: 'param4-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Integral** 🔽

Build the arc-length integral for $x = \\sin t,\\; y = \\cos t$ on $\\left[0,\\, \\dfrac{\\pi}{2}\\right]$, piece by piece.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{dx}{dt} =$', options: ['$\\cos t$', '$-\\sin t$', '$\\sin t$', '$-\\cos t$'] },
            { label: '$\\dfrac{dy}{dt} =$', options: ['$-\\sin t$', '$\\cos t$', '$\\sin t$', '$-\\cos t$'] },
            { label: 'The integrand $\\sqrt{(x\')^2 + (y\')^2}$ simplifies to:', options: ['$1$', '$\\sqrt{2}$', '$\\sin t + \\cos t$', '$\\sqrt{\\sin t}$'] },
          ],
          correctAnswers: ['$\\cos t$', '$-\\sin t$', '$1$'],
          hint1: 'The derivative of $\\sin t$ is $\\cos t$.',
          hint2: 'The derivative of $\\cos t$ is $-\\sin t$.',
          hint3: '$\\sqrt{\\cos^2 t + \\sin^2 t} = \\sqrt{1} = 1$ — this curve (an arc of the unit circle) has constant speed $1$.',
          explanation: '$x\' = \\cos t,\\; y\' = -\\sin t$, so $\\sqrt{\\cos^2 t + \\sin^2 t} = 1$, and the length is $\\int_0^{\\pi/2} 1\\, dt = \\dfrac{\\pi}{2}$ — a quarter of the unit circle.',
        },
      },
      {
        id: 'param4-line',
        type: 'text' as const,
        content: `## A Length You Can Do by Hand

For a **straight-line** parametrization the speed is constant, so the integral is just speed × time.

### Example: $x = 3t + 1,\\; y = 4t - 2$ on $[0, 2]$

$$\\frac{dx}{dt} = 3, \\qquad \\frac{dy}{dt} = 4 \\;\\Rightarrow\\; \\text{speed} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5.$$

$$L = \\int_0^2 5\\; dt = 5 \\cdot 2 = 10.$$

> ✅ **Check geometrically:** From $t=0$ to $t=2$ the point goes from $(1, -2)$ to $(7, 6)$, a displacement of $\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. ✓`,
      },
      {
        id: 'param4-drill',
        type: 'input-boxes' as const,
        content: `**Arc-Length Drill** 🧮

**1)** For $x = 5t,\\; y = 12t$ on $[0, 3]$, the (constant) speed is $\\,?$
**2)** ...so the arc length on $[0, 3]$ is $\\,?$
**3)** For $x = \\cos t,\\; y = \\sin t$ on $[0, 2\\pi]$ (the full unit circle), the arc length is $\\,?$  *(enter as a multiple of $\\pi$, e.g. "2pi")*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '39', '2pi'],
          hint1: 'Speed $= \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.',
          hint2: 'Constant speed over $[0,3]$: $L = 13 \\times 3 = 39$.',
          hint3: 'For the unit circle the speed is $\\sqrt{\\sin^2 t + \\cos^2 t} = 1$, so $L = \\int_0^{2\\pi} 1\\, dt = 2\\pi$ — the circumference.',
          explanation: '1) $\\sqrt{25 + 144} = 13$. 2) $13 \\cdot 3 = 39$. 3) Unit-circle speed is $1$, giving $L = 2\\pi$ (its circumference).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'parametric-calculus',
    sections: [
      {
        id: 'param5-intro',
        type: 'text' as const,
        content: `# 〽️ Calculus with Parametric Equations

**Part 5 of 7 — Vector Motion: Velocity, Speed, Acceleration & Distance**

---

> 🔑 **The Particle Picture:** Read $\\big(x(t),\\, y(t)\\big)$ as the **position** of a particle in the plane at time $t$. Then:
> | Quantity | Formula |
> |----------|---------|
> | Velocity vector | $\\vec v = \\left\\langle \\dfrac{dx}{dt},\\, \\dfrac{dy}{dt}\\right\\rangle$ |
> | Speed | $\\lvert \\vec v\\rvert = \\sqrt{\\left(\\dfrac{dx}{dt}\\right)^2 + \\left(\\dfrac{dy}{dt}\\right)^2}$ |
> | Acceleration vector | $\\vec a = \\left\\langle \\dfrac{d^2x}{dt^2},\\, \\dfrac{d^2y}{dt^2}\\right\\rangle$ |`,
      },
      {
        id: 'param5-vsa',
        type: 'text' as const,
        content: `## Velocity, Speed & Acceleration

### Example: $x = t^2,\\; y = 2t^3$

**Velocity:** differentiate each component.
$$\\vec v(t) = \\big\\langle 2t,\\; 6t^2 \\big\\rangle.$$

At $t = 1$: $\\;\\vec v(1) = \\langle 2,\\, 6\\rangle$, and the **speed** is
$$\\lvert \\vec v(1)\\rvert = \\sqrt{2^2 + 6^2} = \\sqrt{40} = 2\\sqrt{10} \\approx 6.32.$$

**Acceleration:** differentiate the velocity components.
$$\\vec a(t) = \\big\\langle 2,\\; 12t \\big\\rangle, \\qquad \\vec a(1) = \\langle 2,\\, 12\\rangle.$$

> ⚠️ **Speed is a scalar; velocity and acceleration are vectors.** Speed is the *magnitude* of velocity — never just $\\dfrac{dy}{dt}$. And note $\\dfrac{dy}{dx} = \\dfrac{6t^2}{2t} = 3t$ is the **slope** of the path, a different idea from speed.`,
      },
      {
        id: 'param5-vsa-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A particle has velocity $\\vec v = \\langle 3,\\, 4\\rangle$ at some instant. Its speed at that instant is:',
              options: ['$5$', '$7$', '$\\sqrt{7}$', '$12$'],
              correctAnswer: 0,
              explanation: 'Speed $= \\lvert\\vec v\\rvert = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
            },
            {
              question: 'For $x = t^2,\\; y = 2t^3$, the acceleration vector is:',
              options: ['$\\langle 2,\\, 12t\\rangle$', '$\\langle 2t,\\, 6t^2\\rangle$', '$\\langle 0,\\, 12\\rangle$', '$\\langle 2t,\\, 12t\\rangle$'],
              correctAnswer: 0,
              explanation: 'Velocity is $\\langle 2t,\\, 6t^2\\rangle$; differentiating each component again gives $\\vec a = \\langle 2,\\, 12t\\rangle$.',
            },
          ],
        },
      },
      {
        id: 'param5-distance-teach',
        type: 'text' as const,
        content: `## Distance Traveled vs. Displacement

These are **different**, and the AP exam tests the difference:

- **Distance traveled** = $\\displaystyle\\int_a^b \\lvert\\vec v(t)\\rvert\\, dt = \\int_a^b \\sqrt{(x')^2 + (y')^2}\\; dt$ — the total path length (same integral as arc length).
- **Displacement** = $\\big\\langle x(b) - x(a),\\; y(b) - y(a)\\big\\rangle$ — the straight-line change in position, a vector.

A particle that loops back covers lots of distance but may have small (even zero) displacement.

### Example: $x = \\cos 2t,\\; y = \\sin 2t$ on $[0, \\pi]$

Speed $= \\sqrt{(-2\\sin 2t)^2 + (2\\cos 2t)^2} = \\sqrt{4} = 2$ (constant). Distance traveled:
$$\\int_0^\\pi 2\\, dt = 2\\pi.$$
But over $[0, \\pi]$ the parameter $2t$ runs $0 \\to 2\\pi$ — a **full circle** — so the particle returns to its start and the **displacement is $\\vec 0$**.

> 💡 Constant-speed circular motion: in time $\\pi$ it travels $2\\pi$ (once around the unit circle) yet ends where it began.`,
      },
      {
        id: 'param5-distance-dropdown',
        type: 'dropdown-select' as const,
        content: `**Distance, Displacement & Speed** 🔽

Match each quantity to how you compute it.`,
        exercise: {
          dropdowns: [
            { label: 'Total distance traveled on $[a,b]$:', options: ['$\\int_a^b \\sqrt{(x\')^2 + (y\')^2}\\, dt$', '$\\int_a^b (x\' + y\')\\, dt$', '$\\sqrt{(x(b)-x(a))^2 + (y(b)-y(a))^2}$', '$x(b) - x(a)$'] },
            { label: 'Speed at a single instant $t$:', options: ['$\\sqrt{(x\')^2 + (y\')^2}$', '$x\'(t)$', '$\\frac{y\'}{x\'}$', '$x\'\' + y\'\''] },
            { label: 'Net horizontal displacement on $[a,b]$:', options: ['$x(b) - x(a)$', '$\\int_a^b x\'\\, dt$ only if positive', '$|x(b)| - |x(a)|$', '$\\frac{x(b)}{x(a)}$'] },
          ],
          correctAnswers: ['$\\int_a^b \\sqrt{(x\')^2 + (y\')^2}\\, dt$', '$\\sqrt{(x\')^2 + (y\')^2}$', '$x(b) - x(a)$'],
          hint1: 'Distance traveled integrates **speed** (always nonnegative) over time.',
          hint2: 'Speed at an instant is the magnitude of the velocity vector at that instant.',
          hint3: 'Net horizontal displacement is just the change in the $x$-coordinate, $x(b) - x(a)$.',
          explanation: 'Distance $= \\int \\text{speed}\\,dt$; instantaneous speed $= \\sqrt{(x\')^2+(y\')^2}$; net horizontal displacement $= x(b) - x(a)$.',
        },
      },
      {
        id: 'param5-recap',
        type: 'text' as const,
        content: `## One Position, Four Questions

From a single position function $\\big(x(t),\\, y(t)\\big)$ you can answer all of these — just differentiate or integrate the right piece:

| Question | Use |
|----------|-----|
| Which way / how fast? | velocity $\\langle x',\\, y'\\rangle$ |
| How fast (scalar)? | speed $\\sqrt{(x')^2 + (y')^2}$ |
| How is velocity changing? | acceleration $\\langle x'',\\, y''\\rangle$ |
| How far did it travel? | $\\int \\text{speed}\\; dt$ |

> 💡 Notice speed and distance share the same square-root expression — distance is just speed accumulated over time.`,
      },
      {
        id: 'param5-drill',
        type: 'input-boxes' as const,
        content: `**Motion Drill** 🧮

A particle moves with $x = t^3,\\; y = t^2$.

**1)** Its velocity vector at $t = 2$ has $x$-component $\\,?$
**2)** ...and $y$-component $\\,?$
**3)** Its speed at $t = 2$ is $\\,?$  *(give the decimal, rounded to 2 places)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '4', '12.65'],
          hint1: '$\\dfrac{dx}{dt} = 3t^2$; at $t = 2$ that is $3(4) = 12$.',
          hint2: '$\\dfrac{dy}{dt} = 2t$; at $t = 2$ that is $4$.',
          hint3: 'Speed $= \\sqrt{12^2 + 4^2} = \\sqrt{160} = 4\\sqrt{10} \\approx 12.65$.',
          explanation: '$\\vec v(2) = \\langle 12,\\, 4\\rangle$, so speed $= \\sqrt{144 + 16} = \\sqrt{160} = 4\\sqrt{10} \\approx 12.65$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'parametric-calculus',
    sections: [
      {
        id: 'param6-intro',
        type: 'text' as const,
        content: `# 〽️ Calculus with Parametric Equations

**Part 6 of 7 — Area & Horizontal/Vertical Tangents**

---

> 🔑 **Two More Tools:** (1) The **area** under a parametric curve uses the same "$\\int y\\, dx$" idea, with $dx = \\dfrac{dx}{dt}\\,dt$. (2) **Horizontal and vertical tangents** are found by setting the right derivative to zero.`,
      },
      {
        id: 'param6-area-teach',
        type: 'text' as const,
        content: `## Area Under a Parametric Curve

In Cartesian form, area under a curve is $\\int y\\, dx$. Substitute $x = x(t)$, so $dx = \\dfrac{dx}{dt}\\,dt$:
$$A = \\int_{t=a}^{t=b} y(t)\\,\\frac{dx}{dt}\\; dt.$$

### Example: $x = t,\\; y = 4 - t^2$ from $t = 0$ to $t = 2$

Here $\\dfrac{dx}{dt} = 1$, so
$$A = \\int_0^2 (4 - t^2)(1)\\, dt = \\left[\\,4t - \\frac{t^3}{3}\\,\\right]_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}.$$

### Famous result: one arch of a cycloid

For $x = t - \\sin t,\\; y = 1 - \\cos t$ over $t \\in [0, 2\\pi]$,
$$A = \\int_0^{2\\pi} (1 - \\cos t)(1 - \\cos t)\\, dt = 3\\pi,$$
exactly **three times** the area of the rolling circle. A clean, classic application.

> ⚠️ The bounds are **$t$-values**, not $x$-values. Convert the $x$-limits into the corresponding $t$-limits before integrating.`,
      },
      {
        id: 'param6-area-drill',
        type: 'input-boxes' as const,
        content: `**Area Drill** 🧮

**1)** For $x = t,\\; y = t^2$ from $t = 0$ to $t = 2$, the area $\\int_0^2 y\\,\\dfrac{dx}{dt}\\,dt$ equals $\\,?$  *(fraction ok)*
**2)** For the ellipse $x = 3\\cos t,\\; y = 2\\sin t$, the enclosed area equals $\\pi a b$ with $a = 3,\\, b = 2$. That area is $\\,?$  *(as a multiple of $\\pi$, e.g. "6pi")*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8/3', '6pi'],
          hint1: '$\\dfrac{dx}{dt} = 1$, so $A = \\int_0^2 t^2\\, dt = \\Big[\\tfrac{t^3}{3}\\Big]_0^2 = \\dfrac{8}{3}$.',
          hint2: 'Ellipse area is $\\pi a b = \\pi(3)(2) = 6\\pi$.',
          hint3: 'An ellipse $x = a\\cos t,\\, y = b\\sin t$ always encloses area $\\pi a b$.',
          explanation: '1) $\\int_0^2 t^2\\, dt = \\dfrac{8}{3}$. 2) $\\pi a b = \\pi \\cdot 3 \\cdot 2 = 6\\pi$.',
        },
      },
      {
        id: 'param6-tangents-teach',
        type: 'text' as const,
        content: `## Horizontal & Vertical Tangents

Since $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$:

| Tangent | Condition |
|---------|-----------|
| **Horizontal** | $\\dfrac{dy}{dt} = 0$ **and** $\\dfrac{dx}{dt} \\ne 0$ (slope $= 0$) |
| **Vertical** | $\\dfrac{dx}{dt} = 0$ **and** $\\dfrac{dy}{dt} \\ne 0$ (slope undefined) |

If **both** derivatives are zero at the same $t$, the slope is indeterminate — that point may be a cusp; analyze it separately.

### Example: $x = t^2 - 2t,\\; y = t^3 - 12t$

$$\\frac{dx}{dt} = 2t - 2 = 0 \\;\\Rightarrow\\; t = 1 \\quad(\\text{vertical tangent}),$$
$$\\frac{dy}{dt} = 3t^2 - 12 = 0 \\;\\Rightarrow\\; t = \\pm 2 \\quad(\\text{horizontal tangents}).$$

At $t = 1$: $\\dfrac{dy}{dt} = 3 - 12 = -9 \\ne 0$, confirming a **vertical** tangent at $(t^2 - 2t,\\, t^3 - 12t) = (-1, -11)$. At $t = 2$: $\\dfrac{dx}{dt} = 2 \\ne 0$, confirming a **horizontal** tangent at $(0, -16)$.`,
      },
      {
        id: 'param6-tangents-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify the Tangent** 🔽

For $x = t^2 - 2t,\\; y = t^3 - 12t$ (worked above).`,
        exercise: {
          dropdowns: [
            { label: 'At $t = 1$, since $dx/dt = 0$ but $dy/dt \\ne 0$, the tangent is:', options: ['vertical', 'horizontal', 'slope $1$', 'undefined location'] },
            { label: 'At $t = 2$, since $dy/dt = 0$ but $dx/dt \\ne 0$, the tangent is:', options: ['horizontal', 'vertical', 'slope $2$', 'a cusp'] },
            { label: 'A point where $dx/dt = dy/dt = 0$ has slope that is:', options: ['indeterminate (analyze separately)', 'always $0$', 'always vertical', 'equal to $1$'] },
          ],
          correctAnswers: ['vertical', 'horizontal', 'indeterminate (analyze separately)'],
          hint1: '$\\dfrac{dx}{dt} = 0$ makes the slope $\\dfrac{dy/dt}{0}$ undefined ⟹ vertical.',
          hint2: '$\\dfrac{dy}{dt} = 0$ with nonzero denominator makes the slope $0$ ⟹ horizontal.',
          hint3: 'When both are $0$, the ratio is $\\dfrac{0}{0}$ — indeterminate; you must investigate the point directly.',
          explanation: 'Vertical tangent: $dx/dt = 0,\\, dy/dt \\ne 0$. Horizontal: $dy/dt = 0,\\, dx/dt \\ne 0$. Both zero: indeterminate (possible cusp).',
        },
      },
      {
        id: 'param6-tangents-method',
        type: 'text' as const,
        content: `## Finding Them in Practice

To locate every horizontal and vertical tangent on a curve:

1. Solve $\\dfrac{dy}{dt} = 0$ for the candidate **horizontal** tangents.
2. Solve $\\dfrac{dx}{dt} = 0$ for the candidate **vertical** tangents.
3. **Check the other derivative** at each candidate: if it is nonzero, the tangent is confirmed; if both vanish together, investigate that point separately.

> ⚠️ Always do Step 3. A value that zeroes *both* derivatives is **not** automatically a horizontal or vertical tangent — it can be a cusp or self-intersection.`,
      },
      {
        id: 'param6-tangents-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The curve $x = t^2,\\; y = t^3 - 3t$ has a horizontal tangent at which $t$-value(s)?',
              options: ['$t = \\pm 1$', '$t = 0$ only', '$t = \\pm 3$', 'never'],
              correctAnswer: 0,
              explanation: '$\\dfrac{dy}{dt} = 3t^2 - 3 = 0 \\Rightarrow t = \\pm 1$, and at those points $\\dfrac{dx}{dt} = 2t \\ne 0$, so the tangents are horizontal.',
            },
            {
              question: 'For $x = t^2,\\; y = t^3 - 3t$, a vertical tangent occurs at:',
              options: ['$t = 0$', '$t = 1$', '$t = -1$', 'no value of $t$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{dx}{dt} = 2t = 0 \\Rightarrow t = 0$, where $\\dfrac{dy}{dt} = -3 \\ne 0$, giving a vertical tangent.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'parametric-calculus',
    sections: [
      {
        id: 'param7-intro',
        type: 'text' as const,
        content: `# 〽️ Calculus with Parametric Equations

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) plot and interpret parametric curves, (2) find $\\dfrac{dy}{dx}$ and tangent lines, (3) compute $\\dfrac{d^2y}{dx^2}$ and concavity, (4) set up arc length, (5) analyze vector motion, and (6) find area and horizontal/vertical tangents. Let's pull it together.`,
      },
      {
        id: 'param7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula |
|------|---------|
| Slope | $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$ |
| Concavity | $\\dfrac{d^2y}{dx^2} = \\dfrac{\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right)}{dx/dt}$ |
| Arc length / distance | $\\displaystyle\\int_a^b \\sqrt{(x')^2 + (y')^2}\\; dt$ |
| Speed | $\\sqrt{(x')^2 + (y')^2}$ |
| Velocity / acceleration | $\\langle x',\\, y'\\rangle$ / $\\langle x'',\\, y''\\rangle$ |
| Area under curve | $\\displaystyle\\int_a^b y\\,\\dfrac{dx}{dt}\\; dt$ |
| Horizontal tangent | $y' = 0,\\; x' \\ne 0$ |
| Vertical tangent | $x' = 0,\\; y' \\ne 0$ |

> ⚠️ Two traps to remember: the second derivative divides by $\\dfrac{dx}{dt}$ (**not** $\\dfrac{d^2x}{dt^2}$), and **speed is a scalar** (magnitude of velocity), distinct from the path's slope $\\dfrac{dy}{dx}$.`,
      },
      {
        id: 'param7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $x = t^2 + 1,\\; y = t^3 - 3t$, the slope of the tangent at $t = 2$ is:',
              options: ['$\\dfrac{9}{4}$', '$\\dfrac{4}{9}$', '$9$', '$\\dfrac{3}{2}$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{dy}{dx} = \\dfrac{3t^2 - 3}{2t}$; at $t = 2$ that is $\\dfrac{12 - 3}{4} = \\dfrac{9}{4}$.',
            },
            {
              question: 'Which integral gives the distance traveled by $x = \\cos t,\\; y = \\sin t$ from $t = 0$ to $t = \\pi$?',
              options: [
                '$\\displaystyle\\int_0^\\pi 1\\, dt = \\pi$',
                '$\\displaystyle\\int_0^\\pi \\sqrt{2}\\, dt$',
                '$\\displaystyle\\int_0^\\pi (\\cos t + \\sin t)\\, dt$',
                '$0$',
              ],
              correctAnswer: 0,
              explanation: 'Speed $= \\sqrt{(-\\sin t)^2 + (\\cos t)^2} = 1$, so distance $= \\int_0^\\pi 1\\, dt = \\pi$ (half the unit circle).',
            },
          ],
        },
      },
      {
        id: 'param7-bridge',
        type: 'text' as const,
        content: `## From Concepts to Computation

The questions above tested *which formula* to use. The drill below tests whether you can *run the numbers* cleanly. Keep the Quick Reference table in mind: speed and distance share the same radical, and a constant-speed path makes distance just speed × elapsed $t$.

> 💡 When a parametrization is a circle of radius $r$ (i.e. $x = r\\cos t,\\, y = r\\sin t$), the speed is exactly $r$ — a fact worth recognizing on sight.`,
      },
      {
        id: 'param7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Computation Drill** 🧮

**1)** A particle moves with $x = 3t,\\; y = 4t$. Its speed (constant for all $t$) is $\\,?$
**2)** A particle on the circle $x = 4\\cos t,\\; y = 4\\sin t$ travels for $t \\in [0, 2\\pi]$. The total distance traveled is $\\,?$  *(multiple of $\\pi$, e.g. "8pi")*
**3)** For $x = t,\\; y = t^2$, the speed at $t = 1$ is $\\,?$  *(decimal, 2 places)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '8pi', '2.24'],
          hint1: 'Speed $= \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
          hint2: 'Speed on a radius-$4$ circle is $\\sqrt{(-4\\sin t)^2 + (4\\cos t)^2} = 4$; over $[0, 2\\pi]$ distance $= 4 \\cdot 2\\pi = 8\\pi$ (the circumference).',
          hint3: '$\\vec v = \\langle 1,\\, 2t\\rangle$; at $t = 1$, speed $= \\sqrt{1 + 4} = \\sqrt{5} \\approx 2.24$.',
          explanation: '1) $\\sqrt{9 + 16} = 5$. 2) Constant speed $4$ over length $2\\pi$ of $t$ gives $8\\pi$ (a full circle of radius $4$). 3) $\\sqrt{1^2 + 2^2} = \\sqrt{5} \\approx 2.24$.',
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
              question: 'For $x = t^2 + t,\\; y = t^3$, the slope $\\dfrac{dy}{dx}$ at $t = 1$ is:',
              options: ['$1$', '$3$', '$\\dfrac{3}{2}$', '$0$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{dy}{dx} = \\dfrac{3t^2}{2t + 1}$; at $t = 1$ that is $\\dfrac{3}{3} = 1$.',
            },
            {
              question: 'A particle moves with $x = t^2,\\; y = t^3$. Its speed at $t = 1$ is:',
              options: ['$\\sqrt{13}$', '$5$', '$\\sqrt{5}$', '$13$'],
              correctAnswer: 0,
              explanation: '$\\vec v(1) = \\langle 2t,\\, 3t^2\\rangle\\big|_{t=1} = \\langle 2,\\, 3\\rangle$, so speed $= \\sqrt{2^2 + 3^2} = \\sqrt{13}$.',
            },
            {
              question: 'The arc length of $x = \\cos t,\\; y = t$ on $[0, \\pi]$ is given by:',
              options: [
                '$\\displaystyle\\int_0^\\pi \\sqrt{\\sin^2 t + 1}\\; dt$',
                '$\\displaystyle\\int_0^\\pi \\sqrt{\\cos^2 t + 1}\\; dt$',
                '$\\displaystyle\\int_0^\\pi (\\sin t + 1)\\; dt$',
                '$\\displaystyle\\int_0^\\pi \\sqrt{\\sin^2 t - 1}\\; dt$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{dx}{dt} = -\\sin t,\\; \\dfrac{dy}{dt} = 1$, so the integrand is $\\sqrt{(-\\sin t)^2 + 1^2} = \\sqrt{\\sin^2 t + 1}$.',
            },
          ],
        },
      },
    ],
  },
]
