import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Area Between Curves (AP Calculus AB).
 * Registry key / DB Topic.slug: 'area-between-curves'.
 * 7 parts, gold-standard structure: area under one curve → the top-minus-bottom
 * formula → finding the bounds → curves that cross (|f-g| / splitting) →
 * integrating with respect to y (right-minus-left) → choosing dx vs dy on hard
 * regions → applications + mixed practice & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every definite-integral value was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'area-between-curves',
    sections: [
      {
        id: 'abc1-intro',
        type: 'text' as const,
        content: `# 📐 Area Between Curves

**Part 1 of 7 — From Area Under a Curve to Area Between Two**

---

### Topics in This Part

| Section |
|---------|
| Area under one curve (review) |
| Stacking two regions |
| Why area between = top − bottom |
| The role of the axis |

> 🔑 **Key Concept:** A single definite integral $\\displaystyle\\int_a^b f(x)\\,dx$ measures the **signed** area between a curve and the $x$-axis. The area **between two curves** is just that same idea applied to the gap: integrate the **top function minus the bottom function**.`,
      },
      {
        id: 'abc1-review',
        type: 'text' as const,
        content: `## Review: Area Under a Curve

If $f(x) \\ge 0$ on $[a, b]$, the area between $y = f(x)$ and the $x$-axis is

$$A = \\int_a^b f(x)\\,dx$$

You can picture this as the limit of thin rectangles of width $dx$ and height $f(x)$. The integral adds up all those rectangle areas $f(x)\\,dx$ from $x = a$ to $x = b$.

### Example

The area under $y = x^2$ from $x = 0$ to $x = 3$:

$$\\int_0^3 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{27}{3} - 0 = 9$$

> 💡 The $x$-axis is itself the line $y = 0$. So "area under a curve" is secretly already an **area between two curves**: $f(x)$ on top and $y = 0$ on the bottom.`,
      },
      {
        id: 'abc1-axis-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Area under a curve $\\int_a^b f(x)\\,dx$ is really the area between $y = f(x)$ and which line?',
              options: ['$y = 0$ (the $x$-axis)', '$x = 0$ (the $y$-axis)', '$y = x$', '$y = f(a)$'],
              correctAnswer: 0,
              explanation: 'The $x$-axis is the line $y = 0$. The integrand $f(x)$ is the height above that line, i.e. $f(x) - 0$, so "area under the curve" is the gap between $f$ and $y = 0$.',
            },
            {
              question: 'Compute $\\int_0^2 (x + 1)\\,dx$.',
              options: ['$4$', '$3$', '$2$', '$6$'],
              correctAnswer: 0,
              explanation: '$\\int_0^2 (x+1)\\,dx = \\left[\\frac{x^2}{2} + x\\right]_0^2 = (2 + 2) - 0 = 4$.',
            },
          ],
        },
      },
      {
        id: 'abc1-stack',
        type: 'text' as const,
        content: `## Stacking Two Regions

Suppose $f(x) \\ge g(x) \\ge 0$ on $[a, b]$, so the curve $f$ sits **above** $g$, and both sit above the axis.

The area trapped **between** them equals the big area (under $f$) minus the area you'd be double-counting (under $g$):

$$A = \\underbrace{\\int_a^b f(x)\\,dx}_{\\text{under top}} - \\underbrace{\\int_a^b g(x)\\,dx}_{\\text{under bottom}} = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx$$

The two integrals combine into **one** integral of the difference. Each thin rectangle now has height equal to the **vertical gap** $f(x) - g(x)$.

> 🔑 **Key Idea:** The height of a slice between two curves is **(top curve) − (bottom curve)**, measured at the same $x$. That difference is what you integrate.`,
      },
      {
        id: 'abc1-gap-input',
        type: 'input-boxes' as const,
        content: `**Read the Vertical Gap** 🧮

The top curve is $f(x) = x^2 + 4$ and the bottom curve is $g(x) = x^2 - 1$.

**1)** What is the vertical gap $f(x) - g(x)$? *(enter the simplified number)*
**2)** What is the gap exactly at $x = 7$?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '5'],
          hint1: 'Subtract: $(x^2 + 4) - (x^2 - 1)$. The $x^2$ terms cancel.',
          hint2: '$(x^2 + 4) - (x^2 - 1) = 4 - (-1) = 5$ for every $x$.',
          hint3: 'Because the gap is the constant $5$, it is $5$ at $x = 7$ too — these curves are parallel.',
          explanation: 'The gap is $f - g = (x^2+4)-(x^2-1) = 5$ everywhere. These curves never get closer or farther apart, so the gap at $x = 7$ is also $5$.',
        },
      },
      {
        id: 'abc1-toptest-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Curve Is on Top?** 🔽

To decide the top curve on an interval, plug a sample $x$ into both functions and compare the outputs.`,
        exercise: {
          dropdowns: [
            { label: 'For $f(x) = 8$ and $g(x) = x^2$ at $x = 2$: top is', options: ['$f(x) = 8$', '$g(x) = x^2$', 'they are equal', 'cannot tell'] },
            { label: 'For $f(x) = x$ and $g(x) = x^2$ at $x = \\tfrac{1}{2}$: top is', options: ['$f(x) = x$', '$g(x) = x^2$', 'they are equal', 'cannot tell'] },
            { label: 'The slice height you integrate is:', options: ['top $-$ bottom', 'bottom $-$ top', 'top $+$ bottom', 'top $\\times$ bottom'] },
          ],
          correctAnswers: ['$f(x) = 8$', '$f(x) = x$', 'top $-$ bottom'],
          hint1: 'At $x = 2$: $f = 8$ and $g = 2^2 = 4$. The larger output is the top.',
          hint2: 'At $x = \\tfrac{1}{2}$: $f = 0.5$ and $g = 0.25$. The larger output is the top.',
          hint3: 'The height of each rectangle is always the top output minus the bottom output.',
          explanation: 'At $x=2$, $f = 8 > 4 = g$, so $f$ is on top. At $x = \\tfrac12$, $x = 0.5 > 0.25 = x^2$, so $f(x)=x$ is on top. In every case the slice height you integrate is top $-$ bottom.',
        },
      },
      {
        id: 'abc1-why-subtract',
        type: 'text' as const,
        content: `## Why "Top − Bottom" and Not the Reverse?

Area is never negative. If you accidentally compute **bottom − top**, you get the negative of the true area.

$$\\int_a^b \\big[\\text{top} - \\text{bottom}\\big]\\,dx \\;\\ge\\; 0 \\qquad\\text{(when top really is on top)}$$

A reliable habit: at one sample $x$ between $a$ and $b$, plug into both functions and see which output is **larger**. The larger output is the top curve for that slice.

> ⚠️ **Common Trap:** Don't decide "top" by which formula looks bigger on paper — decide by which gives the larger $y$-value on the interval. We'll make this rigorous in Part 2.

You now have the single big idea: **integrate the vertical gap.** Next we turn it into a clean formula and learn to find the limits $a$ and $b$.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'area-between-curves',
    sections: [
      {
        id: 'abc2-intro',
        type: 'text' as const,
        content: `# 📐 Area Between Curves

**Part 2 of 7 — The Formula & Finding the Bounds**

---

> 🔑 **The Formula:** If $f(x) \\ge g(x)$ for all $x$ in $[a, b]$, then
> $$A = \\int_a^b \\big[f(x) - g(x)\\big]\\,dx$$
> The hard part is rarely the integral — it's finding $a$, $b$, and knowing which curve is on top.`,
      },
      {
        id: 'abc2-find-bounds',
        type: 'text' as const,
        content: `## Finding the Limits of Integration

When the problem says "the region **enclosed** by" two curves (with no interval given), the limits $a$ and $b$ are the $x$-coordinates where the curves **intersect**. Set them equal and solve:

$$f(x) = g(x)$$

### Example: $y = x$ and $y = x^2$

Set equal: $x = x^2 \\;\\Rightarrow\\; x^2 - x = 0 \\;\\Rightarrow\\; x(x - 1) = 0$, so $x = 0$ and $x = 1$.

These are the limits. To find the top curve, test $x = \\tfrac{1}{2}$:
- $y = x \\Rightarrow \\tfrac{1}{2}$
- $y = x^2 \\Rightarrow \\tfrac{1}{4}$

Since $\\tfrac{1}{2} > \\tfrac{1}{4}$, the line $y = x$ is on top.`,
      },
      {
        id: 'abc2-bounds-input',
        type: 'input-boxes' as const,
        content: `**Find the Intersection Points** 🧮

Find the $x$-coordinates where each pair of curves meets.

**1)** $y = x^2$ and $y = 9$. Enter the **larger** $x$-value.
**2)** $y = 6 - x^2$ and $y = x$. Enter the **larger** $x$-value.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '2'],
          hint1: 'Set the two expressions equal, then solve for $x$.',
          hint2: '$x^2 = 9 \\Rightarrow x = \\pm 3$. The larger is $3$.',
          hint3: '$6 - x^2 = x \\Rightarrow x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2) = 0 \\Rightarrow x = -3, 2$. Larger is $2$.',
          explanation: '1) $x^2 = 9$ gives $x = \\pm 3$; larger $= 3$.  2) $6 - x^2 = x$ rearranges to $x^2 + x - 6 = (x+3)(x-2) = 0$, so $x = -3$ or $x = 2$; larger $= 2$.',
        },
      },
      {
        id: 'abc2-worked1',
        type: 'text' as const,
        content: `## Worked Example: $y = x$ and $y = x^2$

We found the limits $x = 0$ to $x = 1$, with $y = x$ on top. So:

$$A = \\int_0^1 \\big[x - x^2\\big]\\,dx$$

Integrate term by term:

$$A = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\left(\\frac{1}{2} - \\frac{1}{3}\\right) - 0 = \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}$$

> ✅ **Sanity check:** The region is a thin sliver between a line and a parabola, all inside the unit square, so an area of $\\tfrac{1}{6} \\approx 0.167$ is reasonable.`,
      },
      {
        id: 'abc2-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Integral** 🔽

You're finding the area enclosed by $y = 6 - x^2$ and $y = x$. Choose each piece of the setup.`,
        exercise: {
          dropdowns: [
            { label: 'Lower limit $a$:', options: ['$-3$', '$0$', '$2$', '$-6$'] },
            { label: 'Upper limit $b$:', options: ['$2$', '$3$', '$6$', '$-2$'] },
            { label: 'Top curve (the integrand starts with):', options: ['$6 - x^2$', '$x$', '$x^2$', '$6 + x^2$'] },
            { label: 'Integrand $f - g$:', options: ['$6 - x^2 - x$', '$x - 6 + x^2$', '$6 - x^2 + x$', '$x - x^2$'] },
          ],
          correctAnswers: ['$-3$', '$2$', '$6 - x^2$', '$6 - x^2 - x$'],
          hint1: 'The curves meet where $6 - x^2 = x$, i.e. at $x = -3$ and $x = 2$.',
          hint2: 'Test $x = 0$: the parabola gives $6$, the line gives $0$. The parabola is on top.',
          hint3: 'Integrand $= \\text{top} - \\text{bottom} = (6 - x^2) - x = 6 - x^2 - x$.',
          explanation: 'Intersections at $x = -3, 2$ give the limits. At $x = 0$ the parabola ($6$) beats the line ($0$), so top $= 6 - x^2$ and the integrand is $(6 - x^2) - x$. The full integral is $\\int_{-3}^{2}(6 - x^2 - x)\\,dx$.',
        },
      },
      {
        id: 'abc2-evaluate-input',
        type: 'input-boxes' as const,
        content: `**Evaluate It** 🧮

Finish the example: compute $\\displaystyle\\int_{-3}^{2}\\big(6 - x^2 - x\\big)\\,dx$.

**1)** Antiderivative is $6x - \\dfrac{x^3}{3} - \\dfrac{x^2}{2}$. Its value at $x = 2$ equals what? *(decimal or fraction)*
**2)** The total area equals what? *(enter as a fraction like 125/6)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['22/3', '125/6'],
          hint1: 'At $x = 2$: $6(2) - \\frac{8}{3} - \\frac{4}{2} = 12 - \\frac{8}{3} - 2 = 10 - \\frac{8}{3}$.',
          hint2: '$10 - \\frac{8}{3} = \\frac{30}{3} - \\frac{8}{3} = \\frac{22}{3}$. Now also evaluate at $x = -3$ and subtract.',
          hint3: 'At $x = -3$: $-18 + 9 - \\frac{9}{2} = -\\frac{27}{2}$. So area $= \\frac{22}{3} - (-\\frac{27}{2}) = \\frac{44}{6} + \\frac{81}{6} = \\frac{125}{6}$.',
          explanation: 'Top value $\\frac{22}{3}$ at $x=2$; bottom value $-\\frac{27}{2}$ at $x=-3$. Area $= \\frac{22}{3} + \\frac{27}{2} = \\frac{44 + 81}{6} = \\frac{125}{6} \\approx 20.83$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'area-between-curves',
    sections: [
      {
        id: 'abc3-intro',
        type: 'text' as const,
        content: `# 📐 Area Between Curves

**Part 3 of 7 — When the Curves Cross**

---

> 🔑 **The Problem:** If the two curves **swap** which one is on top somewhere inside the interval, a single $\\int (f - g)\\,dx$ will let positive and negative pieces **cancel** — giving the wrong area. The fix: split at every crossing.`,
      },
      {
        id: 'abc3-crossing',
        type: 'text' as const,
        content: `## Splitting at Crossings

True area is always

$$A = \\int_a^b \\big|f(x) - g(x)\\big|\\,dx$$

The absolute value guarantees every slice contributes a **positive** height. In practice you can't integrate $|\\,\\cdot\\,|$ directly, so:

1. Find **all** intersection points in $[a, b]$.
2. On each sub-interval, determine which curve is on top (test a point).
3. Integrate **top − bottom** on each piece and **add** the results.

> ⚠️ **The classic mistake:** Computing one integral $\\int_a^b (f - g)\\,dx$ when the curves cross. If $f - g$ is positive on one piece and negative on another, the answer comes out too small — sometimes even $0$.`,
      },
      {
        id: 'abc3-cross-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On $[-1, 1]$, the curves $y = x$ and $y = x^3$ cross at $x = 0$. What goes wrong if you compute $\\int_{-1}^{1}(x - x^3)\\,dx$ as a single integral?',
              options: [
                'The signed pieces cancel, giving $0$ instead of the true (positive) area.',
                'Nothing — it gives the correct area.',
                'It gives twice the correct area.',
                'The integral is undefined.',
              ],
              correctAnswer: 0,
              explanation: 'On $[-1,0]$, $x^3 \\ge x$, so $x - x^3 < 0$; on $[0,1]$, $x \\ge x^3$, so $x - x^3 > 0$. By symmetry these exactly cancel and the single integral gives $0$, even though the real area is positive.',
            },
            {
              question: 'To correctly find the area enclosed by curves that cross at $x = c$ inside $[a,b]$, you should:',
              options: [
                'Split into $\\int_a^c$ and $\\int_c^b$, taking top − bottom on each.',
                'Just integrate from $a$ to $b$ as usual.',
                'Always integrate from $c$ to $b$ only.',
                'Square the integrand to remove the sign.',
              ],
              correctAnswer: 0,
              explanation: 'Split the interval at the crossing. On each sub-interval one curve is consistently on top, so you integrate (top − bottom) there and add the positive contributions.',
            },
          ],
        },
      },
      {
        id: 'abc3-worked',
        type: 'text' as const,
        content: `## Worked Example: $y = x$ and $y = x^3$ on $[-1, 1]$

**Crossings:** $x = x^3 \\Rightarrow x^3 - x = 0 \\Rightarrow x(x-1)(x+1) = 0$, so $x = -1, 0, 1$.

**Which is on top?**
- On $[-1, 0]$ test $x = -\\tfrac{1}{2}$: $x = -0.5$, $x^3 = -0.125$. Here $x^3 > x$, so $x^3$ is on top.
- On $[0, 1]$ test $x = \\tfrac{1}{2}$: $x = 0.5$, $x^3 = 0.125$. Here $x > x^3$, so $x$ is on top.

By the symmetry of the picture, both pieces have equal area, so:

$$A = 2\\int_0^1 \\big(x - x^3\\big)\\,dx = 2\\left[\\frac{x^2}{2} - \\frac{x^4}{4}\\right]_0^1 = 2\\left(\\frac{1}{2} - \\frac{1}{4}\\right) = 2 \\cdot \\frac{1}{4} = \\frac{1}{2}$$

> 💡 Exploiting symmetry (when the region is symmetric about the origin or the $y$-axis) often halves the work — but only set it up after you've confirmed the symmetry.`,
      },
      {
        id: 'abc3-split-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Split** 🔽

You're finding the area between $y = \\sin x$ and $y = \\cos x$ on $\\left[0, \\frac{\\pi}{2}\\right]$. They cross once, at $x = \\frac{\\pi}{4}$.`,
        exercise: {
          dropdowns: [
            { label: 'On $\\left[0, \\frac{\\pi}{4}\\right]$ the top curve is:', options: ['$\\cos x$', '$\\sin x$', '$\\tan x$', 'they tie everywhere'] },
            { label: 'On $\\left[\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right]$ the top curve is:', options: ['$\\sin x$', '$\\cos x$', '$-\\cos x$', 'they tie everywhere'] },
            { label: 'Number of integrals needed:', options: ['$2$', '$1$', '$3$', '$0$'] },
          ],
          correctAnswers: ['$\\cos x$', '$\\sin x$', '$2$'],
          hint1: 'Test $x = 0$: $\\cos 0 = 1$ but $\\sin 0 = 0$, so cosine starts on top.',
          hint2: 'Test $x = \\frac{\\pi}{2}$: $\\sin = 1$ but $\\cos = 0$, so sine ends on top.',
          hint3: 'Because the curves swap at $\\frac{\\pi}{4}$, you need one integral on each side — two integrals total.',
          explanation: 'Near $0$, $\\cos x > \\sin x$; near $\\frac{\\pi}{2}$, $\\sin x > \\cos x$. The swap at $\\frac{\\pi}{4}$ forces a split into two integrals: $\\int_0^{\\pi/4}(\\cos x - \\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2}(\\sin x - \\cos x)\\,dx$.',
        },
      },
      {
        id: 'abc3-sym-input',
        type: 'input-boxes' as const,
        content: `**Compute a Crossing Area** 🧮

Find the area enclosed by $y = x^3$ and $y = 4x$.

**1)** Solve $x^3 = 4x$. Enter the largest intersection $x$-value.
**2)** The region is symmetric about the origin, so $A = 2\\int_0^{2}(4x - x^3)\\,dx$. Enter the total area $A$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '8'],
          hint1: '$x^3 = 4x \\Rightarrow x^3 - 4x = 0 \\Rightarrow x(x-2)(x+2) = 0$, so $x = -2, 0, 2$.',
          hint2: 'On $[0,2]$ test $x = 1$: $4x = 4$, $x^3 = 1$, so $4x$ is on top there.',
          hint3: '$\\int_0^2 (4x - x^3)\\,dx = [2x^2 - \\frac{x^4}{4}]_0^2 = 8 - 4 = 4$. Double it: $A = 8$.',
          explanation: 'Crossings at $x = -2, 0, 2$. By origin symmetry, $A = 2\\int_0^2(4x - x^3)\\,dx = 2(8 - 4) = 2(4) = 8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'area-between-curves',
    sections: [
      {
        id: 'abc4-intro',
        type: 'text' as const,
        content: `# 📐 Area Between Curves

**Part 4 of 7 — Integrating with Respect to $y$**

---

> 🔑 **Big Idea:** Sometimes the cleaner picture uses **horizontal** slices. Then you integrate with respect to $y$, and the height of each slice is **(right curve) − (left curve)**:
> $$A = \\int_c^d \\big[x_{\\text{right}}(y) - x_{\\text{left}}(y)\\big]\\,dy$$`,
      },
      {
        id: 'abc4-horizontal',
        type: 'text' as const,
        content: `## Horizontal Slices

Rotate your thinking 90°. Instead of vertical rectangles of width $dx$ and height (top − bottom), use **horizontal** rectangles of height $dy$ and width (right − left).

| Slicing | Variable | Slice dimension | Integrand |
|---------|----------|-----------------|-----------|
| Vertical | $dx$ | height | top $-$ bottom |
| Horizontal | $dy$ | width | right $-$ left |

To integrate in $y$, you must write each curve as $x$ **as a function of $y$**. The limits $c$ and $d$ are now the **$y$-coordinates** of the intersection points.

> 💡 **When to switch to $dy$:** if solving for $x$ in terms of $y$ is easy (e.g. a sideways parabola $x = y^2$), and especially if vertical slices would require splitting the region into multiple pieces. A $dy$ setup can turn two integrals into one.`,
      },
      {
        id: 'abc4-rightleft-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When integrating with respect to $y$, the width of a horizontal slice is:',
              options: ['(right curve) − (left curve)', '(top curve) − (bottom curve)', '(left curve) − (right curve)', '(upper $y$) − (lower $y$)'],
              correctAnswer: 0,
              explanation: 'Horizontal slices run left-to-right, so their width is the $x$-value on the right minus the $x$-value on the left, both expressed as functions of $y$.',
            },
            {
              question: 'To integrate the region between $x = y^2$ and $x = y + 2$ with respect to $y$, the limits $c$ and $d$ are the:',
              options: ['$y$-coordinates of the intersection points', '$x$-coordinates of the intersection points', '$x$-intercepts of each curve', 'maximum values of each curve'],
              correctAnswer: 0,
              explanation: 'A $dy$-integral runs over $y$, so its limits are the $y$-coordinates where the curves meet.',
            },
          ],
        },
      },
      {
        id: 'abc4-worked',
        type: 'text' as const,
        content: `## Worked Example: $x = y^2$ and $x = y + 2$

**Find the bounds (in $y$):** Set $y^2 = y + 2 \\Rightarrow y^2 - y - 2 = 0 \\Rightarrow (y - 2)(y + 1) = 0$, so $y = -1$ and $y = 2$.

**Which curve is on the right?** Test $y = 0$:
- $x = y^2 = 0$
- $x = y + 2 = 2$

The line $x = y + 2$ gives the larger $x$, so it is the **right** curve.

$$A = \\int_{-1}^{2}\\big[(y + 2) - y^2\\big]\\,dy = \\left[\\frac{y^2}{2} + 2y - \\frac{y^3}{3}\\right]_{-1}^{2}$$

At $y = 2$: $\\;2 + 4 - \\tfrac{8}{3} = 6 - \\tfrac{8}{3} = \\tfrac{10}{3}$.
At $y = -1$: $\\;\\tfrac{1}{2} - 2 + \\tfrac{1}{3} = -\\tfrac{7}{6}$.

$$A = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2}$$

> ✅ Trying this with vertical slices would force **two** integrals (the boundary changes at $x = 1$). The $dy$ setup needs only **one**.`,
      },
      {
        id: 'abc4-dy-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up a $dy$-Integral** 🔽

Find the area enclosed by $x = y^2$ and $x = 4$ (a sideways parabola capped by a vertical line).`,
        exercise: {
          dropdowns: [
            { label: 'Lower limit $c$ (in $y$):', options: ['$-2$', '$0$', '$2$', '$-4$'] },
            { label: 'Upper limit $d$ (in $y$):', options: ['$2$', '$4$', '$16$', '$-2$'] },
            { label: 'Right curve:', options: ['$x = 4$', '$x = y^2$', '$x = 2$', '$x = -4$'] },
            { label: 'Integrand (right − left):', options: ['$4 - y^2$', '$y^2 - 4$', '$4 - y$', '$y^2 - 16$'] },
          ],
          correctAnswers: ['$-2$', '$2$', '$x = 4$', '$4 - y^2$'],
          hint1: 'Intersections: $y^2 = 4 \\Rightarrow y = \\pm 2$, so $c = -2$, $d = 2$.',
          hint2: 'Test $y = 0$: $x = y^2 = 0$ vs. $x = 4$. The line $x = 4$ is farther right.',
          hint3: 'Right − left $= 4 - y^2$, integrated from $y = -2$ to $y = 2$.',
          explanation: 'The curves meet at $y = \\pm 2$. The vertical line $x = 4$ is on the right, the parabola $x = y^2$ on the left, so $A = \\int_{-2}^{2}(4 - y^2)\\,dy = \\frac{32}{3}$.',
        },
      },
      {
        id: 'abc4-dy-input',
        type: 'input-boxes' as const,
        content: `**Evaluate the $dy$-Integral** 🧮

Continue the example: compute $\\displaystyle\\int_{-2}^{2}\\big(4 - y^2\\big)\\,dy$.

**1)** Using symmetry, $\\int_{-2}^{2}(4 - y^2)\\,dy = 2\\int_0^2 (4 - y^2)\\,dy$. Evaluate $\\int_0^2(4 - y^2)\\,dy$. *(fraction ok)*
**2)** What is the total area? *(fraction like 32/3)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['16/3', '32/3'],
          hint1: 'Antiderivative: $4y - \\frac{y^3}{3}$. At $y = 2$: $8 - \\frac{8}{3}$.',
          hint2: '$8 - \\frac{8}{3} = \\frac{24}{3} - \\frac{8}{3} = \\frac{16}{3}$.',
          hint3: 'Double it for the full symmetric region: $2 \\cdot \\frac{16}{3} = \\frac{32}{3}$.',
          explanation: '$\\int_0^2(4 - y^2)\\,dy = [4y - \\frac{y^3}{3}]_0^2 = 8 - \\frac{8}{3} = \\frac{16}{3}$. The region is symmetric about the $x$-axis, so $A = 2 \\cdot \\frac{16}{3} = \\frac{32}{3} \\approx 10.67$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'area-between-curves',
    sections: [
      {
        id: 'abc5-intro',
        type: 'text' as const,
        content: `# 📐 Area Between Curves

**Part 5 of 7 — Choosing $dx$ vs. $dy$ on Hard Regions**

---

> 🔑 **Strategic Question:** Before integrating, ask: *"Which way do I slice so that one boundary stays the top/right and one stays the bottom/left across the whole region?"* The slicing direction that avoids splitting wins.`,
      },
      {
        id: 'abc5-choose',
        type: 'text' as const,
        content: `## A Decision Checklist

For a region enclosed by two curves, ask:

| Question | If YES → prefer |
|----------|-----------------|
| Are both curves easily written as $y = f(x)$, and does one stay on top throughout? | **$dx$** (vertical) |
| Does the left/right boundary change partway across (e.g. a sideways parabola)? | **$dy$** (horizontal) |
| Are the curves naturally $x = g(y)$? | **$dy$** (horizontal) |

The goal is **one integral, no splitting**. Both directions give the same area when set up correctly — but one is usually far less work.

> 💡 If a vertical-slice setup would need two or more integrals, sketch the horizontal slices: they may need only one.`,
      },
      {
        id: 'abc5-choose-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A region is bounded by the line $y = x - 1$ and the sideways parabola $y^2 = 2x + 6$. Which slicing avoids splitting into two integrals?',
              options: [
                'Horizontal slices ($dy$), since the left boundary is the parabola throughout.',
                'Vertical slices ($dx$), since both are functions of $x$.',
                'Either way needs exactly one integral.',
                'Neither — the region is unbounded.',
              ],
              correctAnswer: 0,
              explanation: 'With vertical slices the bottom boundary switches from the lower half of the parabola to the line, forcing two integrals. With horizontal slices the parabola is always the left curve and the line is always the right curve, so one $dy$-integral suffices.',
            },
            {
              question: 'When set up correctly, the $dx$ area and the $dy$ area of the same region:',
              options: ['are always equal', 'differ by a constant', 'differ by a factor of $2$', 'can never both be computed'],
              correctAnswer: 0,
              explanation: 'Area is a geometric quantity; it does not depend on slicing direction. A correct $dx$ setup and a correct $dy$ setup give the identical number.',
            },
          ],
        },
      },
      {
        id: 'abc5-worked',
        type: 'text' as const,
        content: `## Worked Example: $y = x - 1$ and $y^2 = 2x + 6$

Solve each for $x$: the line is $x = y + 1$; the parabola is $x = \\dfrac{y^2 - 6}{2}$.

**Bounds (in $y$):** Set $y + 1 = \\dfrac{y^2 - 6}{2} \\Rightarrow 2y + 2 = y^2 - 6 \\Rightarrow y^2 - 2y - 8 = 0 \\Rightarrow (y - 4)(y + 2) = 0$, so $y = -2$ and $y = 4$.

**Right curve?** Test $y = 0$: line gives $x = 1$; parabola gives $x = -3$. The **line** is on the right.

$$A = \\int_{-2}^{4}\\left[(y + 1) - \\frac{y^2 - 6}{2}\\right]dy = \\int_{-2}^{4}\\left[-\\frac{y^2}{2} + y + 4\\right]dy$$

$$= \\left[-\\frac{y^3}{6} + \\frac{y^2}{2} + 4y\\right]_{-2}^{4}$$

At $y = 4$: $-\\tfrac{64}{6} + 8 + 16 = -\\tfrac{32}{3} + 24 = \\tfrac{40}{3}$.
At $y = -2$: $\\tfrac{8}{6} + 2 - 8 = \\tfrac{4}{3} - 6 = -\\tfrac{14}{3}$.

$$A = \\frac{40}{3} - \\left(-\\frac{14}{3}\\right) = \\frac{54}{3} = 18$$

> ✅ One clean integral, thanks to choosing $dy$.`,
      },
      {
        id: 'abc5-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Strategy** 🔽

For each region, pick the slicing that needs only one integral.`,
        exercise: {
          dropdowns: [
            { label: 'Between $y = x^2$ and $y = x + 2$ (both nice in $x$):', options: ['$dx$', '$dy$', 'neither works', 'must split either way'] },
            { label: 'Between $x = y^2$ and $x = y + 6$ (sideways parabola):', options: ['$dy$', '$dx$', 'neither works', 'must split either way'] },
            { label: 'Between $x = y^2 - 1$ and the line $x = 3$:', options: ['$dy$', '$dx$', 'neither works', 'must split either way'] },
          ],
          correctAnswers: ['$dx$', '$dy$', '$dy$'],
          hint1: 'If both curves are clean as $y = f(x)$ and one stays on top, vertical slices ($dx$) win.',
          hint2: 'A sideways parabola $x = g(y)$ is naturally a function of $y$, so horizontal slices ($dy$) win.',
          hint3: 'A region capped by a vertical line $x = 3$ against a sideways parabola is cleanest with $dy$.',
          explanation: 'Use $dx$ when both curves are simple functions of $x$ with a fixed top/bottom; use $dy$ when curves are functions of $y$ (sideways parabolas) or capped by vertical lines.',
        },
      },
      {
        id: 'abc5-input',
        type: 'input-boxes' as const,
        content: `**Pick and Compute** 🧮

Find the area enclosed by $x = y^2$ and $x = y + 6$.

**1)** Solve $y^2 = y + 6$ for the **larger** $y$-value.
**2)** Set up and evaluate $\\int_{c}^{d}\\big[(y + 6) - y^2\\big]\\,dy$. Enter the area. *(fraction like 125/6)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '125/6'],
          hint1: '$y^2 = y + 6 \\Rightarrow y^2 - y - 6 = 0 \\Rightarrow (y - 3)(y + 2) = 0$, so $y = -2, 3$.',
          hint2: 'Antiderivative: $\\frac{y^2}{2} + 6y - \\frac{y^3}{3}$. Evaluate from $y = -2$ to $y = 3$.',
          hint3: 'At $y = 3$: $\\frac{9}{2} + 18 - 9 = \\frac{27}{2}$. At $y = -2$: $2 - 12 + \\frac{8}{3} = -\\frac{22}{3}$. Subtract.',
          explanation: 'Bounds $y = -2$ to $y = 3$; line is on the right. At $y=3$ the antiderivative is $\\frac{27}{2}$; at $y=-2$ it is $-\\frac{22}{3}$. $A = \\frac{27}{2} + \\frac{22}{3} = \\frac{81 + 44}{6} = \\frac{125}{6} \\approx 20.83$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'area-between-curves',
    sections: [
      {
        id: 'abc6-intro',
        type: 'text' as const,
        content: `# 📐 Area Between Curves

**Part 6 of 7 — Applications & Mixed Regions**

---

> 🔑 **Beyond geometry:** "Area between two rate curves" shows up constantly on the AP exam as **net change** — e.g. the gap between an inflow rate and an outflow rate is the net amount accumulated.`,
      },
      {
        id: 'abc6-rates',
        type: 'text' as const,
        content: `## Area Between Rate Curves = Net Accumulation

If water flows **in** at rate $R(t)$ and **out** at rate $S(t)$ (both in gallons per minute), the **net** gallons added between $t = a$ and $t = b$ is

$$\\int_a^b \\big[R(t) - S(t)\\big]\\,dt$$

This is literally the (signed) area between the two rate curves. When $R > S$ the volume rises; the integral of the gap is the net change.

### Example

A tank has inflow $R(t) = 8$ gal/min and outflow $S(t) = 2t$ gal/min, for $0 \\le t \\le 4$.

$$\\text{net} = \\int_0^4 (8 - 2t)\\,dt = \\big[8t - t^2\\big]_0^4 = 32 - 16 = 16 \\text{ gallons}$$

> 💡 They balance ($R = S$) at $t = 4$, where $2t = 8$. Up to that moment inflow beats outflow, so the net change is positive.`,
      },
      {
        id: 'abc6-rate-input',
        type: 'input-boxes' as const,
        content: `**Net Change from Rates** 🧮

A balloon is inflated at $R(t) = 12$ cm³/s and deflated at $S(t) = 3t$ cm³/s, for $0 \\le t \\le 4$.

**1)** At what time $t$ do the rates balance ($R = S$)?
**2)** Net volume change over $[0, 4]$: evaluate $\\int_0^4 (12 - 3t)\\,dt$. *(enter the number)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '24'],
          hint1: 'Balance when $12 = 3t$, so $t = 4$.',
          hint2: 'Antiderivative of $12 - 3t$ is $12t - \\frac{3t^2}{2}$.',
          hint3: 'At $t = 4$: $12(4) - \\frac{3(16)}{2} = 48 - 24 = 24$.',
          explanation: 'Rates balance at $t = 4$. Net change $= \\int_0^4 (12 - 3t)\\,dt = [12t - \\frac{3t^2}{2}]_0^4 = 48 - 24 = 24$ cm³.',
        },
      },
      {
        id: 'abc6-roots',
        type: 'text' as const,
        content: `## A Region with a Root Boundary

Find the area enclosed by $y = \\sqrt{x}$ and $y = x^2$.

**Bounds:** $\\sqrt{x} = x^2$. Both pass through $(0,0)$ and $(1,1)$, so $x = 0$ and $x = 1$.

**Top?** Test $x = \\tfrac{1}{4}$: $\\sqrt{x} = 0.5$, $x^2 = 0.0625$. So $\\sqrt{x}$ is on top.

$$A = \\int_0^1 \\big(\\sqrt{x} - x^2\\big)\\,dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$$

> ✅ A tidy result: the region between $y = \\sqrt{x}$ and $y = x^2$ has area exactly $\\tfrac{1}{3}$ of the unit square — these two curves are reflections of each other across $y = x$.`,
      },
      {
        id: 'abc6-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A particle\'s velocity is $v(t)$ and a benchmark velocity is $w(t)$. The area between the curves $\\int_a^b |v(t) - w(t)|\\,dt$ represents:',
              options: [
                'The accumulated difference in distance the two would travel',
                'The particle\'s acceleration',
                'The average of the two velocities',
                'The particle\'s position at time $b$',
              ],
              correctAnswer: 0,
              explanation: 'Integrating a velocity gives displacement, so integrating the gap between two velocity curves accumulates the difference in distance traveled. The absolute value keeps it a true (positive) total.',
            },
            {
              question: 'Which integral gives the area enclosed by $y = \\sqrt{x}$ and $y = x^2$?',
              options: [
                '$\\int_0^1 (\\sqrt{x} - x^2)\\,dx$',
                '$\\int_0^1 (x^2 - \\sqrt{x})\\,dx$',
                '$\\int_0^1 (\\sqrt{x} + x^2)\\,dx$',
                '$\\int_1^2 (\\sqrt{x} - x^2)\\,dx$',
              ],
              correctAnswer: 0,
              explanation: 'The curves meet at $x = 0$ and $x = 1$, and $\\sqrt{x} \\ge x^2$ on that interval, so the integrand is (top − bottom) $= \\sqrt{x} - x^2$.',
            },
          ],
        },
      },
      {
        id: 'abc6-region-input',
        type: 'input-boxes' as const,
        content: `**Multi-Step Region** 🧮

Find the area enclosed by $y = x^2$ and $y = 2x + 3$.

**1)** Solve $x^2 = 2x + 3$. Enter the **larger** $x$-value.
**2)** With the line on top, evaluate $\\int_{-1}^{3}(2x + 3 - x^2)\\,dx$. Enter the area. *(fraction like 32/3)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '32/3'],
          hint1: '$x^2 = 2x + 3 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow (x - 3)(x + 1) = 0$, so $x = -1, 3$.',
          hint2: 'Antiderivative: $x^2 + 3x - \\frac{x^3}{3}$. Evaluate from $-1$ to $3$.',
          hint3: 'At $x = 3$: $9 + 9 - 9 = 9$. At $x = -1$: $1 - 3 + \\frac{1}{3} = -\\frac{5}{3}$. Subtract: $9 + \\frac{5}{3}$.',
          explanation: 'Bounds $x = -1$ to $x = 3$; the line $2x+3$ is on top. $A = [x^2 + 3x - \\frac{x^3}{3}]_{-1}^{3} = 9 - (-\\frac{5}{3}) = \\frac{27 + 5}{3} = \\frac{32}{3} \\approx 10.67$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'area-between-curves',
    sections: [
      {
        id: 'abc7-intro',
        type: 'text' as const,
        content: `# 📐 Area Between Curves

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) integrate the vertical gap top − bottom, (2) find the bounds from intersections, (3) split when curves cross, (4) slice horizontally with right − left, and (5) choose the smarter direction. Let's put it all together.`,
      },
      {
        id: 'abc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Setup |
|-----------|-------|
| Top/bottom curves, no crossing | $\\displaystyle\\int_a^b (\\text{top} - \\text{bottom})\\,dx$ |
| Curves cross at $x = c$ | split: $\\displaystyle\\int_a^c + \\int_c^b$, top − bottom on each |
| Find the limits | solve $f(x) = g(x)$ (or $f(y) = g(y)$) |
| Sideways parabola / vertical-line cap | $\\displaystyle\\int_c^d (\\text{right} - \\text{left})\\,dy$ |
| Net change of two rates | $\\displaystyle\\int_a^b (R - S)\\,dt$ |

> ⚠️ **Three habits that prevent most errors:** (1) sketch first, (2) test a sample point to confirm top/right, (3) split at every crossing so no signed area cancels.`,
      },
      {
        id: 'abc7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The area enclosed by $y = 4 - x^2$ and the $x$-axis is given by:',
              options: [
                '$\\int_{-2}^{2}(4 - x^2)\\,dx$',
                '$\\int_{0}^{2}(4 - x^2)\\,dx$',
                '$\\int_{-2}^{2}(x^2 - 4)\\,dx$',
                '$\\int_{-4}^{4}(4 - x^2)\\,dx$',
              ],
              correctAnswer: 0,
              explanation: 'The parabola meets $y = 0$ at $x = \\pm 2$, and $4 - x^2 \\ge 0$ between them, so the area is $\\int_{-2}^{2}(4 - x^2)\\,dx = \\frac{32}{3}$.',
            },
            {
              question: 'To find the area between $x = y^2 - 2$ and $x = y$, you should integrate:',
              options: [
                'with respect to $y$, using (right − left)',
                'with respect to $x$, using (top − bottom)',
                'with respect to $x$ but split into three pieces',
                'with respect to $y$, using (left − right)',
              ],
              correctAnswer: 0,
              explanation: 'Both curves are written as $x$ in terms of $y$, so horizontal slices are natural: integrate (right − left) $\\,dy$. Setting $y^2 - 2 = y$ gives the $y$-bounds.',
            },
          ],
        },
      },
      {
        id: 'abc7-fix-dropdown',
        type: 'dropdown-select' as const,
        content: `**Diagnose the Setup** 🔎

A student finds the area between $y = x^3$ and $y = x$ on $[-1, 1]$ by computing the single integral $\\int_{-1}^{1}(x^3 - x)\\,dx$ and gets $0$. The true area is $\\frac{1}{2}$. Fix the setup.`,
        exercise: {
          dropdowns: [
            { label: 'The error is that the curves:', options: ['cross at $x = 0$, so signed pieces cancel', 'never intersect', 'are not functions', 'are parallel'] },
            { label: 'On $[0, 1]$ the top curve is:', options: ['$y = x$', '$y = x^3$', 'they tie', '$y = -x$'] },
            { label: 'Correct value of the area:', options: ['$\\frac{1}{2}$', '$0$', '$1$', '$\\frac{1}{6}$'] },
          ],
          correctAnswers: ['cross at $x = 0$, so signed pieces cancel', '$y = x$', '$\\frac{1}{2}$'],
          hint1: 'At $x = 0$ both curves give $0$ — they cross there, so the interval must be split.',
          hint2: 'On $[0,1]$ test $x = \\tfrac12$: $x = 0.5$ beats $x^3 = 0.125$, so $y = x$ is on top.',
          hint3: 'Split and use top − bottom: $A = 2\\int_0^1 (x - x^3)\\,dx = 2(\\tfrac12 - \\tfrac14) = \\tfrac12$.',
          explanation: 'The curves cross at $x = 0$, so a single unsplit integral lets the two symmetric pieces cancel to $0$. On $[0,1]$, $y = x$ is on top, and splitting gives $A = 2\\int_0^1(x - x^3)\\,dx = \\frac{1}{2}$.',
        },
      },
      {
        id: 'abc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The area of the region enclosed by $y = x$ and $y = x^2$ is:',
              options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$1$'],
              correctAnswer: 0,
              explanation: 'They meet at $x = 0, 1$ with $y = x$ on top: $\\int_0^1(x - x^2)\\,dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.',
            },
            {
              question: 'For the region between two curves that cross inside the interval, the area equals:',
              options: [
                '$\\int_a^b |f(x) - g(x)|\\,dx$, evaluated by splitting at each crossing',
                '$\\int_a^b (f(x) - g(x))\\,dx$ with no splitting',
                '$\\int_a^b (f(x) + g(x))\\,dx$',
                '$\\left|\\int_a^b (f(x) - g(x))\\,dx\\right|$',
              ],
              correctAnswer: 0,
              explanation: 'Area uses the absolute value of the difference. Since you can\'t integrate $|\\cdot|$ directly, you split at each crossing and take top − bottom on each sub-interval.',
            },
            {
              question: 'The area enclosed by $x = y^2$ and $x = y + 2$ is $\\frac{9}{2}$. Which setup produces it in a single integral?',
              options: [
                '$\\int_{-1}^{2}\\big[(y + 2) - y^2\\big]\\,dy$',
                '$\\int_{-1}^{2}\\big[y^2 - (y + 2)\\big]\\,dy$',
                '$\\int_{0}^{4}\\big[(y + 2) - y^2\\big]\\,dx$',
                '$\\int_{-1}^{2}\\big[(y + 2) - y^2\\big]\\,dx$',
              ],
              correctAnswer: 0,
              explanation: 'The curves meet at $y = -1, 2$, and the line $x = y + 2$ is the right boundary, so integrate (right − left) $= (y+2) - y^2$ with respect to $y$. The value is $\\frac{9}{2}$.',
            },
          ],
        },
      },
    ],
  },
]
