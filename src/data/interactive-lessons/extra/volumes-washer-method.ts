import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Volumes of Revolution: Washer Method (AP Calculus AB).
 * Registry key / DB Topic.slug: 'volumes-washer-method'.
 * 7 parts, gold-standard structure: disk → washer (outer² − inner²) about the x-axis →
 * choosing outer vs inner radius → revolving about a horizontal line y = c →
 * washers with respect to y (about the y-axis and lines x = c) → full set-up workflow →
 * mixed practice & exit quiz.
 * Every definite-integral value was recomputed by hand (sympy-verified) before authoring.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'volumes-washer-method',
    sections: [
      {
        id: 'wash1-intro',
        type: 'text' as const,
        content: `# 🍩 Volumes of Revolution: Washer Method

**Part 1 of 7 — From Disks to Washers**

---

### Topics in This Part

| Section |
|---------|
| Review: the disk method |
| What makes a *washer* |
| The area of one washer slice |
| Why we subtract the *squares* |

> 🔑 **Key Concept:** A **disk** is a solid circular slice of radius $R$, with cross-sectional area $\\pi R^2$. A **washer** is a disk with a circular hole punched out — radius $R$ on the outside, radius $r$ on the inside. Its area is $\\pi R^2 - \\pi r^2 = \\pi\\left(R^2 - r^2\\right)$. The washer method is just the disk method with that hole.`,
      },
      {
        id: 'wash1-disk-review',
        type: 'text' as const,
        content: `## Review: The Disk Method

When a region touching the axis of revolution is spun around that axis, each thin slice perpendicular to the axis becomes a **solid disk**.

If the slice has radius $R(x)$ and thickness $dx$, its volume is

$$dV = \\pi\\,[R(x)]^2\\,dx$$

Adding up all the slices from $x = a$ to $x = b$ gives the disk-method formula:

$$V = \\pi\\int_a^b [R(x)]^2\\,dx$$

> 💡 The radius is just the **distance from the curve to the axis**. When we revolve $y = f(x)$ about the $x$-axis, that distance is simply $f(x)$, so $R(x) = f(x)$.`,
      },
      {
        id: 'wash1-washer-idea',
        type: 'text' as const,
        content: `## What Makes a Washer

The disk method only works when the region's slice reaches all the way to the axis — a **solid** circular cross-section. But often the region is bounded by **two** curves and does *not* touch the axis. Spinning it leaves a **gap** in the middle.

Picture revolving the strip *between* two curves about the $x$-axis:

- The **outer curve** sweeps out a big disk of radius $R$ (the **outer radius**).
- The **inner curve** sweeps out a smaller disk of radius $r$ (the **inner radius**) — this is the hole.

The cross-section is a ring — a **washer** — with area

$$A = \\pi R^2 - \\pi r^2 = \\pi\\left(R^2 - r^2\\right)$$

| Term | Meaning |
|------|---------|
| $R$ (outer radius) | distance from the axis to the **farther** curve |
| $r$ (inner radius) | distance from the axis to the **nearer** curve |
| $\\pi R^2$ | area of the full outer disk |
| $\\pi r^2$ | area of the hole that gets removed |`,
      },
      {
        id: 'wash1-area-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A washer has outer radius $R = 5$ and inner radius $r = 3$. What is the area of its cross-section?',
              options: ['$16\\pi$', '$25\\pi$', '$8\\pi$', '$4\\pi$'],
              correctAnswer: 0,
              explanation: '$A = \\pi(R^2 - r^2) = \\pi(25 - 9) = 16\\pi$. Square *each* radius first, then subtract.',
            },
            {
              question: 'Why does the washer area use $R^2 - r^2$ and **not** $(R - r)^2$?',
              options: [
                'Because area subtracts two full disks: $\\pi R^2 - \\pi r^2$, and squaring is done before subtracting',
                'Because $(R-r)^2$ is always negative',
                'Because $R - r$ is the thickness, not a radius',
                'Both expressions are actually equal',
              ],
              correctAnswer: 0,
              explanation: 'A washer is the big disk minus the hole: $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$. In general $(R-r)^2 = R^2 - 2Rr + r^2 \\ne R^2 - r^2$, so the two are *not* equal. Never subtract the radii first.',
            },
          ],
        },
      },
      {
        id: 'wash1-area-practice-text',
        type: 'text' as const,
        content: `## Getting Comfortable With the Area Formula

Before we attach radii to *curves*, let's get fast with the bare formula

$$A = \\pi\\left(R^2 - r^2\\right).$$

Two habits to lock in now:

- **Square each radius separately.** $R = 4, r = 2$ gives $\\pi(16 - 4) = 12\\pi$, not $\\pi(4-2)^2 = 4\\pi$.
- **A disk is just $r = 0$.** If there's no hole, the second term vanishes and $A = \\pi R^2$.

> 💡 Keep answers in the form (number)$\\,\\pi$ — leaving $\\pi$ symbolic is standard on the AP exam and avoids rounding error.`,
      },
      {
        id: 'wash1-area-drill',
        type: 'input-boxes' as const,
        content: `**Washer Areas** 🧮

Find the cross-sectional area of each washer. Enter your answer as a multiple of $\\pi$ — just type the **number** in front of $\\pi$.

**1)** $R = 4$, $r = 2 \\;\\Rightarrow\\; A = \\,?\\,\\pi$
**2)** $R = 3$, $r = 1 \\;\\Rightarrow\\; A = \\,?\\,\\pi$
**3)** $R = 6$, $r = 0 \\;\\Rightarrow\\; A = \\,?\\,\\pi$  *(no hole — this is a plain disk)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '8', '36'],
          hint1: '$A = \\pi(R^2 - r^2)$. For #1: $\\pi(16 - 4) = 12\\pi$.',
          hint2: 'For #2: $\\pi(9 - 1) = 8\\pi$.',
          hint3: 'For #3 the inner radius is $0$, so the hole has zero area: $\\pi(36 - 0) = 36\\pi$ — a washer with $r = 0$ is exactly a disk.',
          explanation: '1) $\\pi(16-4) = 12\\pi$.  2) $\\pi(9-1) = 8\\pi$.  3) $\\pi(36-0) = 36\\pi$. When $r = 0$, the washer formula reduces to the disk formula.',
        },
      },
      {
        id: 'wash1-bridge',
        type: 'text' as const,
        content: `## The Whole Method in One Sentence

> 🔑 **Washer method:** slice the solid into thin washers, find the area $\\pi\\left(R^2 - r^2\\right)$ of each, multiply by the thickness, and integrate.

$$V = \\pi\\int_a^b \\Big( [R]^2 - [r]^2 \\Big)\\,dx$$

The disk method is the special case $r = 0$. Everything that follows is about answering two questions correctly:

1. **What is the outer radius $R$?** (distance from the axis to the far curve)
2. **What is the inner radius $r$?** (distance from the axis to the near curve)

In Part 2 we'll nail those radii when the axis is the $x$-axis.`,
      },
      {
        id: 'wash1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Pieces** 🔽

Match each part of the washer method to its meaning.`,
        exercise: {
          dropdowns: [
            { label: 'The **outer radius** $R$ is the distance from the axis to the:', options: ['farther curve', 'nearer curve', 'thickness', 'midpoint'] },
            { label: 'The term $\\pi r^2$ in $\\pi(R^2 - r^2)$ represents the:', options: ['hole removed', 'full outer disk', 'slice thickness', 'total volume'] },
            { label: 'A washer with inner radius $r = 0$ is exactly a:', options: ['disk', 'sphere', 'cone', 'cylinder shell'] },
          ],
          correctAnswers: ['farther curve', 'hole removed', 'disk'],
          hint1: 'Outer = farther from the axis; inner = nearer.',
          hint2: 'In $\\pi(R^2 - r^2)$, the $\\pi R^2$ is the full disk and $\\pi r^2$ is the hole that is subtracted.',
          hint3: 'No hole ($r = 0$) means the washer is a solid disk.',
          explanation: '$R$ measures to the farther curve; $\\pi r^2$ is the removed hole; $r = 0$ collapses the washer into a plain disk.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'volumes-washer-method',
    sections: [
      {
        id: 'wash2-intro',
        type: 'text' as const,
        content: `# 🍩 Volumes of Revolution: Washer Method

**Part 2 of 7 — Revolving About the $x$-Axis**

---

> 🔑 **The setup:** When the region between $y = f(x)$ (top) and $y = g(x)$ (bottom) is revolved about the $x$-axis, the distances to the axis are just the $y$-values themselves: $R = f(x)$ and $r = g(x)$.`,
      },
      {
        id: 'wash2-formula',
        type: 'text' as const,
        content: `## The Formula About the $x$-Axis

Suppose on $[a, b]$ the region is bounded **above** by $y = f(x)$ and **below** by $y = g(x)$, with both curves on the same side of (or touching) the $x$-axis. Revolving about the $x$-axis:

$$V = \\pi\\int_a^b \\Big( [f(x)]^2 - [g(x)]^2 \\Big)\\,dx$$

- **Outer radius** $R = f(x)$ — the top curve is farther from the $x$-axis.
- **Inner radius** $r = g(x)$ — the bottom curve is nearer the $x$-axis.

> ⚠️ **Square, then subtract.** You may **not** write $\\pi\\int (f - g)^2\\,dx$. That collapses the two disks incorrectly. The correct integrand is $[f]^2 - [g]^2$, *not* $(f - g)^2$.`,
      },
      {
        id: 'wash2-worked',
        type: 'text' as const,
        content: `## Worked Example

Find the volume when the region bounded by $y = x$ and $y = x^2$ is revolved about the $x$-axis.

**Step 1 — Find the bounds.** Set the curves equal: $x = x^2 \\Rightarrow x^2 - x = 0 \\Rightarrow x(x-1)=0$, so $x = 0$ and $x = 1$.

**Step 2 — Identify top and bottom.** Test $x = \\tfrac12$: $y = x$ gives $0.5$, while $y = x^2$ gives $0.25$. So $y = x$ is **on top** ($R = x$) and $y = x^2$ is **on the bottom** ($r = x^2$).

**Step 3 — Set up the integral.**
$$V = \\pi\\int_0^1 \\Big( x^2 - (x^2)^2 \\Big)\\,dx = \\pi\\int_0^1 \\big( x^2 - x^4 \\big)\\,dx$$

**Step 4 — Integrate and evaluate.**
$$V = \\pi\\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\pi\\cdot\\frac{5 - 3}{15} = \\frac{2\\pi}{15}$$

> ✅ Note $R = x$ becomes $R^2 = x^2$, and $r = x^2$ becomes $r^2 = x^4$. Squaring the radii is what creates the $x^2$ and $x^4$ terms.`,
      },
      {
        id: 'wash2-radius-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region between $y = \\sqrt{x}$ (top) and $y = x$ (bottom) on $[0,1]$ is revolved about the $x$-axis. Which is the correct integrand?',
              options: [
                '$(\\sqrt{x})^2 - (x)^2 = x - x^2$',
                '$(\\sqrt{x} - x)^2$',
                '$(x)^2 - (\\sqrt{x})^2 = x^2 - x$',
                '$\\sqrt{x} - x$',
              ],
              correctAnswer: 0,
              explanation: 'Outer radius $R = \\sqrt{x}$ (top), inner $r = x$ (bottom). The integrand is $R^2 - r^2 = (\\sqrt{x})^2 - x^2 = x - x^2$. Square each radius first.',
            },
            {
              question: 'When revolving about the $x$-axis, the outer radius $R$ comes from which curve?',
              options: [
                'The curve **farther** from the $x$-axis (the top curve, when both are above the axis)',
                'The curve nearer the $x$-axis',
                'Whichever curve has the larger leading coefficient',
                'Always the line, never the parabola',
              ],
              correctAnswer: 0,
              explanation: 'The outer radius is the distance from the axis to the *farther* boundary. With both curves above the $x$-axis, that is the top curve.',
            },
          ],
        },
      },
      {
        id: 'wash2-setup-text',
        type: 'text' as const,
        content: `## Building the Integral From Scratch

Let's assemble a brand-new problem one piece at a time. Take the line $y = 2x$ and the parabola $y = x^2$, revolved about the $x$-axis.

Before integrating, you always pin down three things:
- **the bounds** — where the curves intersect,
- **the outer radius** $R$ — the top curve, and
- **the inner radius** $r$ — the bottom curve.

Nail those in the drill below; we'll integrate right after.`,
      },
      {
        id: 'wash2-setup-drill',
        type: 'input-boxes' as const,
        content: `**Set Up & Evaluate** 🧮

The region between $y = 2x$ (top) and $y = x^2$ (bottom) is revolved about the $x$-axis.

**1)** The curves meet at $x = 0$ and $x = \\,?$  *(the larger intersection)*
**2)** At $x = 1$, the outer radius $R = 2x$ equals $\\,?$
**3)** At $x = 1$, the inner radius $r = x^2$ equals $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '1'],
          hint1: 'Set $2x = x^2 \\Rightarrow x^2 - 2x = 0 \\Rightarrow x(x-2) = 0$. The larger root is $x = 2$.',
          hint2: 'Outer radius $R = 2x$. At $x = 1$: $R = 2(1) = 2$.',
          hint3: 'Inner radius $r = x^2$. At $x = 1$: $r = 1^2 = 1$.',
          explanation: '1) $2x = x^2$ gives $x = 0, 2$, so the larger bound is $2$.  2) $R = 2(1) = 2$.  3) $r = 1^2 = 1$. The full integral is $\\pi\\int_0^2\\!\\big((2x)^2 - (x^2)^2\\big)dx = \\tfrac{64\\pi}{15}$.',
        },
      },
      {
        id: 'wash2-integrate-text',
        type: 'text' as const,
        content: `## Now Integrate

With bounds $0$ to $2$, $R = 2x$, and $r = x^2$, the volume is

$$V = \\pi\\int_0^2 \\Big( (2x)^2 - (x^2)^2 \\Big)\\,dx = \\pi\\int_0^2 \\big( 4x^2 - x^4 \\big)\\,dx.$$

Carry out the integration in the check below.`,
      },
      {
        id: 'wash2-eval-mc',
        type: 'multiple-choice' as const,
        content: `**Finish the Computation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $\\pi\\displaystyle\\int_0^2 \\big( (2x)^2 - (x^2)^2 \\big)\\,dx = \\pi\\int_0^2 (4x^2 - x^4)\\,dx$.',
              options: ['$\\dfrac{64\\pi}{15}$', '$\\dfrac{32\\pi}{15}$', '$\\dfrac{8\\pi}{3}$', '$\\dfrac{64\\pi}{5}$'],
              correctAnswer: 0,
              explanation: '$\\pi\\left[\\frac{4x^3}{3} - \\frac{x^5}{5}\\right]_0^2 = \\pi\\left(\\frac{32}{3} - \\frac{32}{5}\\right) = \\pi\\cdot\\frac{160 - 96}{15} = \\frac{64\\pi}{15}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'volumes-washer-method',
    sections: [
      {
        id: 'wash3-intro',
        type: 'text' as const,
        content: `# 🍩 Volumes of Revolution: Washer Method

**Part 3 of 7 — Choosing Outer vs. Inner Radius**

---

> 🔑 **The one mistake that wrecks a washer problem:** swapping $R$ and $r$. The outer radius is always the **larger** distance from the axis. Get this right and the rest is bookkeeping.`,
      },
      {
        id: 'wash3-which-is-which',
        type: 'text' as const,
        content: `## Which Curve Is Outer?

For revolution about the $x$-axis with both curves above it, "outer" means "higher $y$." A quick test point settles it:

| Step | What to do |
|------|------------|
| 1 | Find where the curves cross (set them equal). |
| 2 | Pick a test $x$ **between** the crossings. |
| 3 | Plug into both curves. The **larger** value is the outer curve → $R$. |
| 4 | The smaller value is the inner curve → $r$. |

> ⚠️ **A washer needs a real gap.** If the inner radius ever exceeds the outer radius, you've labeled them backwards. Since volume can't be negative, the larger squared term must come first: $\\pi\\int (R^2 - r^2)\\,dx$ with $R \\ge r$.`,
      },
      {
        id: 'wash3-test-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Radii** 🔽

The region is bounded by $y = 4 - x^2$ and $y = x + 2$, revolved about the $x$-axis. They intersect at $x = -2$ and $x = 1$. Use the test point $x = 0$.`,
        exercise: {
          dropdowns: [
            { label: 'At $x = 0$, the parabola $y = 4 - x^2$ equals:', options: ['$4$', '$2$', '$0$', '$-4$'] },
            { label: 'At $x = 0$, the line $y = x + 2$ equals:', options: ['$2$', '$4$', '$0$', '$-2$'] },
            { label: 'So the **outer** radius $R$ is:', options: ['$4 - x^2$', '$x + 2$', '$x^2 - 4$', '$2 - x$'] },
            { label: 'And the **inner** radius $r$ is:', options: ['$x + 2$', '$4 - x^2$', '$x - 2$', '$2$'] },
          ],
          correctAnswers: ['$4$', '$2$', '$4 - x^2$', '$x + 2$'],
          hint1: 'Plug $x = 0$ into each curve to see which is higher there.',
          hint2: 'At $x = 0$: parabola $= 4$, line $= 2$. The parabola is higher.',
          hint3: 'The higher curve is the outer radius, so $R = 4 - x^2$ and $r = x + 2$ on $[-2, 1]$.',
          explanation: 'At $x = 0$ the parabola gives $4$ and the line gives $2$, so the parabola is on top throughout $[-2,1]$: $R = 4 - x^2$, $r = x + 2$.',
        },
      },
      {
        id: 'wash3-testpoint-text',
        type: 'text' as const,
        content: `## The Test-Point Habit

The most reliable way to label radii is to **evaluate both curves at a single test $x$** inside the interval and compare the numbers. The larger value is the outer curve.

> 💡 One number settles it. You don't need to reason about the shapes — just plug in and read off which is bigger.`,
      },
      {
        id: 'wash3-radius-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Radii** 🧮

For the region between $y = 2x$ and $y = x^2$ revolved about the $x$-axis (bounds $x = 0$ to $x = 2$):

**1)** At $x = 1.5$, the value of $2x$ is $\\,?$
**2)** At $x = 1.5$, the value of $x^2$ is $\\,?$
**3)** Based on those, the **outer** radius at $x = 1.5$ equals $\\,?$  *(the larger of the two)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '2.25', '3'],
          hint1: '$2x$ at $x = 1.5$ is $2(1.5) = 3$.',
          hint2: '$x^2$ at $x = 1.5$ is $1.5^2 = 2.25$.',
          hint3: 'The outer radius is the larger distance: $3 > 2.25$, so $R = 3$ (from $y = 2x$).',
          explanation: '1) $2(1.5) = 3$.  2) $1.5^2 = 2.25$.  3) Since $3 > 2.25$, the line $y = 2x$ is outer, so $R = 3$ here. The line stays above the parabola on the whole interval $(0,2)$.',
        },
      },
      {
        id: 'wash3-pitfall-text',
        type: 'text' as const,
        content: `## Two Classic Pitfalls

Even with the right radii, two errors sink answers on the exam:

- **Subtracting before squaring:** writing $(R - r)^2$ instead of $R^2 - r^2$. These are not equal.
- **Swapping $R$ and $r$:** which makes the integrand $r^2 - R^2$ and produces a *negative* volume.

> ⚠️ If a washer volume comes out negative, you almost certainly reversed the radii — volume is never negative.

Test yourself on both below.`,
      },
      {
        id: 'wash3-pitfall-mc',
        type: 'multiple-choice' as const,
        content: `**Spot the Error** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student writes the volume of the region between $y = x$ and $y = x^2$ (about the $x$-axis) as $\\pi\\displaystyle\\int_0^1 (x^2 - x)^2\\,dx$. What went wrong?',
              options: [
                'They subtracted the radii first and squared; it should be $(x)^2 - (x^2)^2$, squaring each radius before subtracting',
                'Nothing — that integral is correct',
                'They used the wrong bounds; it should be $0$ to $2$',
                'They forgot the $\\pi$',
              ],
              correctAnswer: 0,
              explanation: 'The washer integrand is $R^2 - r^2$, not $(R - r)^2$. The correct integrand is $(x)^2 - (x^2)^2 = x^2 - x^4$, giving $\\frac{2\\pi}{15}$ — not $(x - x^2)^2$.',
            },
            {
              question: 'If your set-up gives a **negative** volume, the most likely cause is:',
              options: [
                'You swapped the outer and inner radii',
                'You used radians instead of degrees',
                'The region does not exist',
                'You forgot to multiply by $2$',
              ],
              correctAnswer: 0,
              explanation: 'Volume is always positive. A negative result means $r^2 > R^2$ in your integrand — you labeled the inner curve as outer. Swap them.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'volumes-washer-method',
    sections: [
      {
        id: 'wash4-intro',
        type: 'text' as const,
        content: `# 🍩 Volumes of Revolution: Washer Method

**Part 4 of 7 — Revolving About a Horizontal Line $y = c$**

---

> 🔑 **The radius is a distance, not a $y$-value.** When the axis of revolution is a horizontal line $y = c$ instead of the $x$-axis, every radius becomes $\\lvert\\,\\text{curve} - c\\,\\rvert$. The washer method itself doesn't change — only how you measure $R$ and $r$.`,
      },
      {
        id: 'wash4-shift',
        type: 'text' as const,
        content: `## Measuring Radius From a Shifted Axis

The radius is **how far the curve is from the axis of revolution**.

- About the $x$-axis ($y = 0$): radius $= \\lvert f(x) - 0 \\rvert = f(x)$.
- About $y = c$: radius $= \\lvert f(x) - c \\rvert$.

When the whole region lies **above** the line $y = c$, distances are $f(x) - c$ (no absolute value needed). When it lies **below**, they are $c - f(x)$.

$$V = \\pi\\int_a^b \\Big( [\\,R(x)\\,]^2 - [\\,r(x)\\,]^2 \\Big)\\,dx, \\qquad R, r \\text{ measured from } y = c$$

> 💡 **Sanity tip:** Moving the axis *farther* from a curve makes that curve's radius *bigger*. Pushing the axis down to $y = -1$ adds $1$ to every radius compared with the $x$-axis.`,
      },
      {
        id: 'wash4-radius-dropdown',
        type: 'dropdown-select' as const,
        content: `**Radii From a New Axis** 🔽

The region between $y = 2x$ (top) and $y = x^2$ (bottom) on $[0, 2]$ is revolved about the line $y = -1$.`,
        exercise: {
          dropdowns: [
            { label: 'Distance from the **top** curve $y = 2x$ to the line $y = -1$:', options: ['$2x - (-1) = 2x + 1$', '$2x - 1$', '$-1 - 2x$', '$2x$'] },
            { label: 'Distance from the **bottom** curve $y = x^2$ to the line $y = -1$:', options: ['$x^2 - (-1) = x^2 + 1$', '$x^2 - 1$', '$-1 - x^2$', '$x^2$'] },
            { label: 'The outer radius $R$ is:', options: ['$2x + 1$', '$x^2 + 1$', '$2x - 1$', '$x^2 - 1$'] },
            { label: 'The inner radius $r$ is:', options: ['$x^2 + 1$', '$2x + 1$', '$x^2 - 1$', '$2x - 1$'] },
          ],
          correctAnswers: ['$2x - (-1) = 2x + 1$', '$x^2 - (-1) = x^2 + 1$', '$2x + 1$', '$x^2 + 1$'],
          hint1: 'Distance from a curve to $y = -1$ is $(\\text{curve}) - (-1) = \\text{curve} + 1$.',
          hint2: 'The top curve is farther from $y = -1$, so it gives the outer radius.',
          hint3: '$R = 2x + 1$ (from the top curve $y = 2x$), $r = x^2 + 1$ (from the bottom curve $y = x^2$). Both gained $+1$ versus the $x$-axis case.',
          explanation: 'Each radius is (curve) $- (-1) =$ (curve) $+ 1$. The top curve stays outer: $R = 2x + 1$, $r = x^2 + 1$.',
        },
      },
      {
        id: 'wash4-worked',
        type: 'text' as const,
        content: `## Worked Example: About $y = -1$

Revolve the region between $y = 2x$ and $y = x^2$ (on $[0,2]$) about the line $y = -1$.

**Radii:** $R = 2x + 1$, $r = x^2 + 1$.

$$V = \\pi\\int_0^2 \\Big( (2x+1)^2 - (x^2+1)^2 \\Big)\\,dx$$

**Expand the integrand:**
$$(2x+1)^2 = 4x^2 + 4x + 1, \\qquad (x^2+1)^2 = x^4 + 2x^2 + 1$$
$$(2x+1)^2 - (x^2+1)^2 = -x^4 + 2x^2 + 4x$$

**Integrate:**
$$V = \\pi\\left[-\\frac{x^5}{5} + \\frac{2x^3}{3} + 2x^2\\right]_0^2 = \\pi\\left(-\\frac{32}{5} + \\frac{16}{3} + 8\\right)$$

**Combine** over a denominator of $15$: $-\\frac{96}{15} + \\frac{80}{15} + \\frac{120}{15} = \\frac{104}{15}$.

$$V = \\frac{104\\pi}{15}$$

> ✅ Compare to the $\\tfrac{64\\pi}{15}$ we got about the $x$-axis — pushing the axis away enlarges the solid, so the bigger volume makes sense.`,
      },
      {
        id: 'wash4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A region lies entirely **above** the line $y = 3$ and is revolved about $y = 3$. The radius of a curve $y = f(x)$ is:',
              options: ['$f(x) - 3$', '$3 - f(x)$', '$f(x) + 3$', '$f(x)$'],
              correctAnswer: 0,
              explanation: 'Radius is the distance from the curve to the axis $y = 3$. Above the line, $f(x) > 3$, so the distance is $f(x) - 3$.',
            },
            {
              question: 'Revolving a region about $y = 2$ instead of the $x$-axis, where the region sits above $y = 2$. Compared with the $x$-axis, each radius:',
              options: [
                'Decreases by $2$ (the curve is now closer to its axis)',
                'Increases by $2$',
                'Stays the same',
                'Doubles',
              ],
              correctAnswer: 0,
              explanation: 'About the $x$-axis the radius is $f(x)$; about $y = 2$ it is $f(x) - 2$, which is $2$ smaller. The axis moved closer to the region, so radii shrink.',
            },
          ],
        },
      },
      {
        id: 'wash4-below-text',
        type: 'text' as const,
        content: `## When the Region Sits *Below* the Axis

If the axis $y = c$ is **above** the whole region, every curve has $y < c$, so distances are $c - (\\text{curve})$. Here the surprise: the **lower** curve is now *farther* from the axis, so it becomes the **outer** radius.

> ⚠️ "Top curve = outer radius" is only true about the $x$-axis (or any axis below the region). Once the axis is above, the roles flip. Always think **distance to the axis**.`,
      },
      {
        id: 'wash4-drill',
        type: 'input-boxes' as const,
        content: `**Radii From $y = c$** 🧮

The region between $y = x$ (top) and $y = x^2$ (bottom) on $[0,1]$ is revolved about the line $y = 2$. (Both curves lie *below* $y = 2$ here, so each radius is $2 - (\\text{curve})$.)

**1)** Outer radius (from the curve **farther** from $y = 2$). At $x = 0.5$: the bottom curve $y = x^2$ is farther, so $R = 2 - x^2$. Evaluate $R$ at $x = 0.5$: $\\,?$
**2)** Inner radius from the top curve: $r = 2 - x$. Evaluate $r$ at $x = 0.5$: $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1.75', '1.5'],
          hint1: 'The curve *farther* from $y = 2$ is the **lower** one, $y = x^2$, so $R = 2 - x^2$.',
          hint2: 'At $x = 0.5$: $R = 2 - (0.5)^2 = 2 - 0.25 = 1.75$.',
          hint3: 'Inner radius from the nearer (top) curve: $r = 2 - x = 2 - 0.5 = 1.5$.',
          explanation: '1) $R = 2 - x^2 = 2 - 0.25 = 1.75$.  2) $r = 2 - x = 2 - 0.5 = 1.5$. Below the axis, the *lower* curve is farther away, so the roles of "top" and "outer" flip — always think in distances.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'volumes-washer-method',
    sections: [
      {
        id: 'wash5-intro',
        type: 'text' as const,
        content: `# 🍩 Volumes of Revolution: Washer Method

**Part 5 of 7 — Washers With Respect to $y$ (Vertical Axes)**

---

> 🔑 **Match the slice to the axis.** Revolving about a **vertical** line means slices are **horizontal**, so they have thickness $dy$ and radii measured **left-to-right**. Everything flips: solve curves for $x$ in terms of $y$, and integrate in $y$.`,
      },
      {
        id: 'wash5-dy-formula',
        type: 'text' as const,
        content: `## Integrating in $y$

When the axis of revolution is **vertical**, a washer slice is horizontal. Its radii are horizontal distances, so we need $x$ as a function of $y$.

About the **$y$-axis** ($x = 0$):

$$V = \\pi\\int_c^d \\Big( [\\,x_{\\text{right}}(y)\\,]^2 - [\\,x_{\\text{left}}(y)\\,]^2 \\Big)\\,dy$$

- **Outer radius** $R = x_{\\text{right}}$ — the curve **farther** from the axis (to the right).
- **Inner radius** $r = x_{\\text{left}}$ — the curve **nearer** the axis.

| Axis direction | Slices | Thickness | Solve curves for | Integrate in |
|----------------|--------|-----------|------------------|--------------|
| Horizontal (e.g. $x$-axis, $y = c$) | vertical | $dx$ | $y = f(x)$ | $x$ |
| Vertical (e.g. $y$-axis, $x = c$) | horizontal | $dy$ | $x = f(y)$ | $y$ |`,
      },
      {
        id: 'wash5-solve-mc',
        type: 'multiple-choice' as const,
        content: `**Set Up in $y$** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To revolve a region about the $y$-axis using washers, the curve $y = x^2$ (with $x \\ge 0$) should be rewritten as:',
              options: ['$x = \\sqrt{y}$', '$x = y^2$', '$x = \\pm\\sqrt{y}$ with both signs', '$y = \\sqrt{x}$'],
              correctAnswer: 0,
              explanation: 'Solve $y = x^2$ for $x$: $x = \\sqrt{y}$ (take the positive root since $x \\ge 0$). Radii are horizontal, so we need $x$ in terms of $y$.',
            },
            {
              question: 'Revolving about a **vertical** line, each washer slice has thickness:',
              options: ['$dy$', '$dx$', '$dr$', '$d\\theta$'],
              correctAnswer: 0,
              explanation: 'Vertical axis → horizontal slices → thickness $dy$, and you integrate with respect to $y$.',
            },
          ],
        },
      },
      {
        id: 'wash5-worked',
        type: 'text' as const,
        content: `## Worked Example: About the $y$-Axis

Revolve the region between $y = x$ and $y = x^2$ (on $[0,1]$) about the **$y$-axis**.

**Step 1 — Solve for $x$.** From $y = x$: $x = y$. From $y = x^2$: $x = \\sqrt{y}$ (first quadrant).

**Step 2 — Right vs. left.** Test $y = 0.25$: $\\sqrt{y} = 0.5$ while $y = 0.25$. So $x = \\sqrt{y}$ is **farther right** (outer), and $x = y$ is on the **left** (inner). Bounds: $y = 0$ to $y = 1$.

**Step 3 — Set up.**
$$V = \\pi\\int_0^1 \\Big( (\\sqrt{y})^2 - (y)^2 \\Big)\\,dy = \\pi\\int_0^1 (y - y^2)\\,dy$$

**Step 4 — Evaluate.**
$$V = \\pi\\left[\\frac{y^2}{2} - \\frac{y^3}{3}\\right]_0^1 = \\pi\\left(\\frac12 - \\frac13\\right) = \\frac{\\pi}{6}$$

> 💡 Same region, different axis. About the $x$-axis it was $\\tfrac{2\\pi}{15}$; about the $y$-axis it's $\\tfrac{\\pi}{6}$. The axis of revolution genuinely changes the solid.`,
      },
      {
        id: 'wash5-vertical-line',
        type: 'text' as const,
        content: `## About a Vertical Line $x = c$

Same idea as $y = c$ for horizontal axes: the radius is the **horizontal distance** to the line, $\\lvert\\,x(y) - c\\,\\rvert$.

For the same region revolved about $x = 2$ (a line to the **right** of the region), every $x$-value is *less* than $2$, so distances are $2 - x$:

$$R = 2 - x_{\\text{left}} = 2 - y, \\qquad r = 2 - x_{\\text{right}} = 2 - \\sqrt{y}$$

Notice the **swap**: because the axis is on the right, the curve that was on the *left* ($x = y$) is now *farther* from the axis, making it the **outer** radius.

$$V = \\pi\\int_0^1 \\Big( (2 - y)^2 - (2 - \\sqrt{y})^2 \\Big)\\,dy = \\frac{\\pi}{2}$$

> ⚠️ When the axis lies on the far side of the region, "near" and "far" trade places. Always re-decide $R$ and $r$ by comparing **distances to the actual axis**, not by which curve was on top.`,
      },
      {
        id: 'wash5-swap-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mind the Swap** 🔽

The same region ($x = y$ on the left, $x = \\sqrt{y}$ on the right) is revolved about $x = 2$ — a vertical line to the **right** of the region.`,
        exercise: {
          dropdowns: [
            { label: 'Distance from the right curve $x = \\sqrt{y}$ to the line $x = 2$:', options: ['$2 - \\sqrt{y}$', '$\\sqrt{y} - 2$', '$2 + \\sqrt{y}$', '$\\sqrt{y}$'] },
            { label: 'Which curve is now the **outer** radius (farther from $x = 2$)?', options: ['$x = y$ (the left curve)', '$x = \\sqrt{y}$ (the right curve)', 'they are equal', 'the $y$-axis'] },
            { label: 'So the outer radius $R$ equals:', options: ['$2 - y$', '$2 - \\sqrt{y}$', '$y - 2$', '$\\sqrt{y} - 2$'] },
          ],
          correctAnswers: ['$2 - \\sqrt{y}$', '$x = y$ (the left curve)', '$2 - y$'],
          hint1: 'Distance to the line on the right is $2 - (\\text{curve})$, since every $x < 2$.',
          hint2: 'The axis sits to the right, so the *leftmost* curve is farthest from it.',
          hint3: 'Farthest curve is $x = y$ (since $y \\le \\sqrt{y}$ on $[0,1]$), giving $R = 2 - y$; the nearer $x = \\sqrt{y}$ gives $r = 2 - \\sqrt{y}$.',
          explanation: 'About $x = 2$, distances are $2 - x$. The left curve $x = y$ is farthest, so $R = 2 - y$ and $r = 2 - \\sqrt{y}$ — the outer/inner roles swap versus revolving about the $y$-axis.',
        },
      },
      {
        id: 'wash5-back-to-yaxis-text',
        type: 'text' as const,
        content: `## Back to the $y$-Axis

For the next drill we return to revolving about the **$y$-axis** itself, where the radius of a curve is simply its $x$-value (its horizontal distance from $x = 0$).

> 💡 About the $y$-axis, "outer" just means the curve with the **larger $x$** at that height $y$ — the rightmost one.`,
      },
      {
        id: 'wash5-dy-drill',
        type: 'input-boxes' as const,
        content: `**Radii in $y$** 🧮

The region between $y = x$ and $y = x^2$ on $[0,1]$ (so $x = y$ and $x = \\sqrt{y}$) is revolved about the **$y$-axis**.

**1)** At $y = 0.25$, the right curve $x = \\sqrt{y}$ equals $\\,?$
**2)** At $y = 0.25$, the left curve $x = y$ equals $\\,?$
**3)** The outer radius at $y = 0.25$ (the larger horizontal distance from the $y$-axis) equals $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.5', '0.25', '0.5'],
          hint1: '$\\sqrt{0.25} = 0.5$.',
          hint2: 'The left curve is $x = y$, so at $y = 0.25$ it is $0.25$.',
          hint3: 'Distance from the $y$-axis is just the $x$-value; the larger is $0.5$, so $R = 0.5$ (from $x = \\sqrt{y}$).',
          explanation: '1) $\\sqrt{0.25} = 0.5$.  2) $x = y = 0.25$.  3) Outer radius is the bigger distance: $0.5 > 0.25$, so $R = 0.5$ from $x = \\sqrt{y}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'volumes-washer-method',
    sections: [
      {
        id: 'wash6-intro',
        type: 'text' as const,
        content: `# 🍩 Volumes of Revolution: Washer Method

**Part 6 of 7 — The Full Set-Up Workflow**

---

> 🔑 **One reliable routine** handles every washer problem: sketch, match the slice to the axis, write each radius as a distance, square-and-subtract, then integrate. This part walks a complete problem end to end.`,
      },
      {
        id: 'wash6-checklist',
        type: 'text' as const,
        content: `## The 5-Step Workflow

| # | Step | Question to ask |
|---|------|-----------------|
| 1 | **Sketch** the region & axis | Where do the curves cross? Which side is the axis on? |
| 2 | **Match slice to axis** | Horizontal axis → $dx$, integrate in $x$. Vertical axis → $dy$, integrate in $y$. |
| 3 | **Write each radius** | $R, r = $ distance from the axis to the far / near curve. |
| 4 | **Square, then subtract** | Integrand $= R^2 - r^2$ (never $(R - r)^2$). |
| 5 | **Integrate & evaluate** | $V = \\pi\\int (R^2 - r^2)$ over the correct bounds. |

> 💡 Steps 1–2 prevent the two biggest errors: integrating in the wrong variable, and mislabeling outer vs. inner. Spend your time there.`,
      },
      {
        id: 'wash6-workflow-dropdown',
        type: 'dropdown-select' as const,
        content: `**Run the Workflow** 🔽

Revolve the region bounded by $y = \\sqrt{x}$, $y = \\dfrac{x}{2}$ about the **$x$-axis**. They meet where $\\sqrt{x} = \\dfrac{x}{2}$.`,
        exercise: {
          dropdowns: [
            { label: 'The curves intersect at $x = 0$ and $x =$', options: ['$4$', '$2$', '$1$', '$8$'] },
            { label: 'Axis is horizontal, so integrate in:', options: ['$x$ (thickness $dx$)', '$y$ (thickness $dy$)', 'either, same answer', '$\\theta$'] },
            { label: 'Test $x = 1$: outer radius comes from:', options: ['$y = \\sqrt{x}$', '$y = x/2$', 'both equally', 'the $x$-axis'] },
            { label: 'The integrand $R^2 - r^2$ is:', options: ['$x - \\dfrac{x^2}{4}$', '$\\left(\\sqrt{x} - \\dfrac{x}{2}\\right)^2$', '$\\dfrac{x^2}{4} - x$', '$x - \\dfrac{x}{2}$'] },
          ],
          correctAnswers: ['$4$', '$x$ (thickness $dx$)', '$y = \\sqrt{x}$', '$x - \\dfrac{x^2}{4}$'],
          hint1: 'Square both sides of $\\sqrt{x} = x/2$: $x = x^2/4 \\Rightarrow 4x = x^2 \\Rightarrow x(x-4)=0$, so $x = 0, 4$.',
          hint2: 'Horizontal axis ($x$-axis) → vertical slices → thickness $dx$, integrate in $x$.',
          hint3: 'At $x = 1$: $\\sqrt{1} = 1$ vs. $1/2 = 0.5$, so $y = \\sqrt{x}$ is on top (outer). Integrand $= (\\sqrt{x})^2 - (x/2)^2 = x - x^2/4$.',
          explanation: 'Intersections at $x = 0, 4$; integrate in $x$; outer $R = \\sqrt{x}$, inner $r = x/2$; integrand $= x - \\frac{x^2}{4}$.',
        },
      },
      {
        id: 'wash6-worked',
        type: 'text' as const,
        content: `## Finishing the Problem

With $R = \\sqrt{x}$, $r = \\dfrac{x}{2}$, bounds $0$ to $4$:

$$V = \\pi\\int_0^4 \\Big( (\\sqrt{x})^2 - \\Big(\\tfrac{x}{2}\\Big)^2 \\Big)\\,dx = \\pi\\int_0^4 \\Big( x - \\tfrac{x^2}{4} \\Big)\\,dx$$

**Integrate:**
$$V = \\pi\\left[\\frac{x^2}{2} - \\frac{x^3}{12}\\right]_0^4 = \\pi\\left(\\frac{16}{2} - \\frac{64}{12}\\right) = \\pi\\left(8 - \\frac{16}{3}\\right)$$

**Combine:** $8 = \\dfrac{24}{3}$, so $\\dfrac{24}{3} - \\dfrac{16}{3} = \\dfrac{8}{3}$.

$$V = \\frac{8\\pi}{3}$$

> ✅ **Quick reasonableness check:** on $[0,4]$ the outer radius peaks at $\\sqrt{4} = 2$ and the inner at $4/2 = 2$ (they meet at the right end), so the washer has zero hole there and a maximum gap in the middle — a finite, positive volume, exactly as found.`,
      },
      {
        id: 'wash6-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Pieces** 🧮

Finishing $V = \\pi\\displaystyle\\int_0^4 \\left( x - \\frac{x^2}{4} \\right)dx = \\pi\\left[\\frac{x^2}{2} - \\frac{x^3}{12}\\right]_0^4$:

**1)** $\\dfrac{x^2}{2}$ at $x = 4$ equals $\\,?$
**2)** $\\dfrac{x^3}{12}$ at $x = 4$ equals $\\,?$  *(decimal or fraction)*
**3)** The volume is $\\,?\\,\\pi$  *(enter the number in front of $\\pi$, as a fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '16/3', '8/3'],
          hint1: '$\\frac{4^2}{2} = \\frac{16}{2} = 8$.',
          hint2: '$\\frac{4^3}{12} = \\frac{64}{12} = \\frac{16}{3} \\approx 5.333$.',
          hint3: '$V = \\pi(8 - \\frac{16}{3}) = \\pi(\\frac{24}{3} - \\frac{16}{3}) = \\frac{8\\pi}{3}$, so the coefficient is $\\frac{8}{3}$.',
          explanation: '1) $\\frac{16}{2} = 8$.  2) $\\frac{64}{12} = \\frac{16}{3}$.  3) $8 - \\frac{16}{3} = \\frac{8}{3}$, so $V = \\frac{8\\pi}{3}$.',
        },
      },
      {
        id: 'wash6-variable-text',
        type: 'text' as const,
        content: `## The Variable Always Matches the Axis

The single decision that determines whether you integrate in $x$ or $y$ is the **direction of the axis**, not the shapes of the curves:

| Axis | Slices | Integrate in |
|------|--------|--------------|
| horizontal ($x$-axis, $y = c$) | vertical, $dx$ | $x$ |
| vertical ($y$-axis, $x = c$) | horizontal, $dy$ | $y$ |

> 💡 Picture the slices standing **perpendicular** to the axis. Perpendicular to a horizontal axis is a vertical strip ($dx$); perpendicular to a vertical axis is a horizontal strip ($dy$).`,
      },
      {
        id: 'wash6-method-mc',
        type: 'multiple-choice' as const,
        content: `**Choose the Variable** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A region is revolved about the line $x = 5$ (a vertical line). To use the washer method, you should:',
              options: [
                'Slice horizontally ($dy$), write radii as horizontal distances $\\lvert x - 5 \\rvert$, and integrate in $y$',
                'Slice vertically ($dx$) and integrate in $x$',
                'Slice horizontally but still integrate in $x$',
                'Use degrees for the radii',
              ],
              correctAnswer: 0,
              explanation: 'A vertical axis demands horizontal slices (thickness $dy$). Radii are horizontal distances $\\lvert x(y) - 5 \\rvert$, and you integrate in $y$.',
            },
            {
              question: 'In the washer integrand $\\pi(R^2 - r^2)$, the $\\pi$ comes from:',
              options: [
                'The area of each circular cross-section, $\\pi(\\text{radius})^2$',
                'A conversion between radians and degrees',
                'The arc length of the boundary',
                'Doubling the disk for symmetry',
              ],
              correctAnswer: 0,
              explanation: 'Each slice is a circle (or ring of circles): the disk area $\\pi R^2$ minus the hole $\\pi r^2$. The $\\pi$ is the circle-area constant.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'volumes-washer-method',
    sections: [
      {
        id: 'wash7-intro',
        type: 'text' as const,
        content: `# 🍩 Volumes of Revolution: Washer Method

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) recognize a washer cross-section, (2) revolve about the $x$-axis, (3) pick outer vs. inner radius, (4) shift the axis to $y = c$, (5) integrate in $y$ for vertical axes, and (6) run the full workflow. Let's put it all together.`,
      },
      {
        id: 'wash7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Formula |
|-----------|---------|
| About the $x$-axis | $V = \\pi\\displaystyle\\int_a^b \\big([f]^2 - [g]^2\\big)\\,dx$ |
| About $y = c$ | radii $= \\lvert\\text{curve} - c\\rvert$, integrate in $x$ |
| About the $y$-axis | $V = \\pi\\displaystyle\\int_c^d \\big([x_{\\text{right}}]^2 - [x_{\\text{left}}]^2\\big)\\,dy$ |
| About $x = c$ | radii $= \\lvert x(y) - c\\rvert$, integrate in $y$ |

> ⚠️ **Three rules that prevent almost every error:**
> 1. **Square each radius, then subtract** — never $(R - r)^2$.
> 2. **Match the slice to the axis** — vertical axis → $dy$, horizontal axis → $dx$.
> 3. **Outer radius is the larger distance to the axis** — re-decide it whenever the axis moves.`,
      },
      {
        id: 'wash7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region between $y = x$ and $y = x^2$ is revolved about the $x$-axis. The volume is:',
              options: ['$\\dfrac{2\\pi}{15}$', '$\\dfrac{\\pi}{6}$', '$\\dfrac{8\\pi}{3}$', '$\\dfrac{\\pi}{30}$'],
              correctAnswer: 0,
              explanation: 'Outer $R = x$, inner $r = x^2$ on $[0,1]$: $\\pi\\int_0^1 (x^2 - x^4)\\,dx = \\pi(\\frac13 - \\frac15) = \\frac{2\\pi}{15}$.',
            },
            {
              question: 'Which set-up correctly revolves the region between $y = \\sqrt{x}$ (top) and $y = x$ (bottom) on $[0,1]$ about the $x$-axis?',
              options: [
                '$\\pi\\displaystyle\\int_0^1 \\big( (\\sqrt{x})^2 - x^2 \\big)\\,dx$',
                '$\\pi\\displaystyle\\int_0^1 \\big( x^2 - (\\sqrt{x})^2 \\big)\\,dx$',
                '$\\pi\\displaystyle\\int_0^1 (\\sqrt{x} - x)^2\\,dx$',
                '$\\pi\\displaystyle\\int_0^1 (\\sqrt{x} - x)\\,dx$',
              ],
              correctAnswer: 0,
              explanation: 'Outer $R = \\sqrt{x}$, inner $r = x$. Square each, then subtract: $(\\sqrt{x})^2 - x^2 = x - x^2$. (Its value is $\\frac{\\pi}{6}$.)',
            },
          ],
        },
      },
      {
        id: 'wash7-same-region-text',
        type: 'text' as const,
        content: `## Same Region, New Axis

The region between $y = x$ and $y = x^2$ keeps showing up so you can feel how the **axis** changes the answer:

| Axis | Volume |
|------|--------|
| $x$-axis | $\\dfrac{2\\pi}{15}$ |
| $y$-axis | $\\dfrac{\\pi}{6}$ |

Let's confirm the $y$-axis value by finishing the $dy$-integral yourself.`,
      },
      {
        id: 'wash7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Compute a Volume** 🧮

The region between $y = x$ and $y = x^2$ on $[0,1]$ is revolved about the **$y$-axis**, giving $V = \\pi\\displaystyle\\int_0^1 (y - y^2)\\,dy$.

**1)** $\\dfrac{y^2}{2}$ at $y = 1$ equals $\\,?$  *(fraction or decimal)*
**2)** $\\dfrac{y^3}{3}$ at $y = 1$ equals $\\,?$
**3)** The volume is $\\,?\\,\\pi$  *(coefficient as a fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/2', '1/3', '1/6'],
          hint1: '$\\frac{1^2}{2} = \\frac12$.',
          hint2: '$\\frac{1^3}{3} = \\frac13$.',
          hint3: '$V = \\pi(\\frac12 - \\frac13) = \\pi\\cdot\\frac{3-2}{6} = \\frac{\\pi}{6}$, so the coefficient is $\\frac16$.',
          explanation: '1) $\\frac12$.  2) $\\frac13$.  3) $\\frac12 - \\frac13 = \\frac16$, so $V = \\frac{\\pi}{6}$.',
        },
      },
      {
        id: 'wash7-setup-recap-text',
        type: 'text' as const,
        content: `## Reading a Problem at a Glance

Once you can name the axis, the rest of the set-up follows automatically. The last skill to drill is mapping an **axis** to its **slice direction** and **radius expression** without computing anything.

> 💡 Horizontal axis → vertical slices ($dx$). Vertical axis → horizontal slices ($dy$). Radius about $y = c$ is $\\lvert\\text{curve} - c\\rvert$; about $x = c$ it's $\\lvert x(y) - c\\rvert$.`,
      },
      {
        id: 'wash7-axis-dropdown',
        type: 'dropdown-select' as const,
        content: `**Identify the Set-Up** 🔽

Match each axis of revolution to the right slicing choice and radius type.`,
        exercise: {
          dropdowns: [
            { label: 'About the line $y = -2$, slices are:', options: ['vertical, thickness $dx$', 'horizontal, thickness $dy$', 'radial', 'angular'] },
            { label: 'About the line $x = 3$, you integrate in:', options: ['$y$', '$x$', 'either', '$\\theta$'] },
            { label: 'Revolving about $y = 5$, a radius equals:', options: ['$\\lvert\\,\\text{curve} - 5\\,\\rvert$', '$\\lvert\\,\\text{curve} + 5\\,\\rvert$', '$\\text{curve}$', '$5$'] },
          ],
          correctAnswers: ['vertical, thickness $dx$', '$y$', '$\\lvert\\,\\text{curve} - 5\\,\\rvert$'],
          hint1: 'A *horizontal* axis (any $y = c$) uses *vertical* slices of thickness $dx$.',
          hint2: 'A *vertical* axis (any $x = c$) uses *horizontal* slices and integration in $y$.',
          hint3: 'A radius is the distance to the axis: about $y = 5$ that distance is $\\lvert\\,\\text{curve} - 5\\,\\rvert$.',
          explanation: 'Horizontal axis $y = -2$ → vertical slices ($dx$). Vertical axis $x = 3$ → integrate in $y$. Distance to $y = 5$ is $\\lvert\\text{curve} - 5\\rvert$.',
        },
      },
      {
        id: 'wash7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

You can now read a revolution problem and immediately know what kind of cross-section you have, which variable to integrate in, how to measure each radius, and how to combine them with $\\pi\\int (R^2 - r^2)$. Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A washer has outer radius $7$ and inner radius $4$. Its cross-sectional area is:',
              options: ['$33\\pi$', '$9\\pi$', '$11\\pi$', '$3\\pi$'],
              correctAnswer: 0,
              explanation: '$\\pi(R^2 - r^2) = \\pi(49 - 16) = 33\\pi$. Square each radius before subtracting.',
            },
            {
              question: 'The region between $y = 2x$ (top) and $y = x^2$ (bottom) is revolved about the $x$-axis. The correct integral is:',
              options: [
                '$\\pi\\displaystyle\\int_0^2 \\big( (2x)^2 - (x^2)^2 \\big)\\,dx$',
                '$\\pi\\displaystyle\\int_0^2 \\big( (x^2)^2 - (2x)^2 \\big)\\,dx$',
                '$\\pi\\displaystyle\\int_0^2 (2x - x^2)^2\\,dx$',
                '$\\pi\\displaystyle\\int_0^1 \\big( (2x)^2 - (x^2)^2 \\big)\\,dx$',
              ],
              correctAnswer: 0,
              explanation: 'Curves meet at $x = 0, 2$; outer $R = 2x$, inner $r = x^2$. Square each and subtract over $[0,2]$: $\\pi\\int_0^2 ((2x)^2 - (x^2)^2)\\,dx = \\frac{64\\pi}{15}$.',
            },
            {
              question: 'To revolve a region about the vertical line $x = 4$ using washers, you should:',
              options: [
                'Use horizontal slices ($dy$) with radii $\\lvert x(y) - 4 \\rvert$ and integrate in $y$',
                'Use vertical slices ($dx$) and integrate in $x$',
                'Use radii equal to the $y$-values',
                'Subtract the radii first, then square',
              ],
              correctAnswer: 0,
              explanation: 'A vertical axis needs horizontal slices (thickness $dy$); each radius is the horizontal distance $\\lvert x(y) - 4 \\rvert$, and you integrate in $y$. And always square-then-subtract.',
            },
          ],
        },
      },
    ],
  },
]
