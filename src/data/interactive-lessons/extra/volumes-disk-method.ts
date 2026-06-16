import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Volumes of Revolution: Disk Method (AP Calculus AB).
 * Registry key / DB Topic.slug: 'volumes-disk-method'.
 * 7 parts, gold-standard structure: the slicing idea → the disk formula about the
 * x-axis → worked examples (about x-axis) → rotating about the y-axis (integrate dy)
 * → rotating about non-axis lines y = L and x = L → setup pitfalls (squaring, units,
 * matching variable to axis) → mixed practice & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every definite-integral value was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'volumes-disk-method',
    sections: [
      {
        id: 'vdm1-intro',
        type: 'text' as const,
        content: `# 🥞 Volumes of Revolution: The Disk Method

**Part 1 of 7 — Slicing a Solid into Disks**

---

### Topics in This Part

| Section |
|---------|
| What Is a Solid of Revolution? |
| The Volume of One Thin Disk |
| Turning a Sum of Disks into an Integral |

> 🔑 **Key Concept:** Spin a region around a line and it sweeps out a 3-D solid. Slice that solid into ultra-thin coins (**disks**), find the volume of one coin, and **add them all up** with an integral. That's the whole method.`,
      },
      {
        id: 'vdm1-solid',
        type: 'text' as const,
        content: `## What Is a Solid of Revolution?

Take a flat region in the plane and rotate it $360^\\circ$ around an **axis of revolution**. The region sweeps out a 3-D shape called a **solid of revolution**.

- Rotate a rectangle around one edge → a **cylinder**
- Rotate a right triangle around a leg → a **cone**
- Rotate the region under $y = \\sqrt{x}$ around the $x$-axis → a smooth horn-shaped solid

The magic is that **every cross-section perpendicular to the axis is a circle.** That's because rotating a single point around a line traces out a circle.

> 💡 If the region touches the axis along its whole length, each slice is a **solid disk** (no hole). That is exactly the case the **disk method** handles. (When there's a gap between the region and the axis, each slice is a ring — the *washer* method — a later topic.)`,
      },
      {
        id: 'vdm1-which-solid',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You rotate the region under $y = \\sqrt{x}$ (from $x=0$ to $x=4$) about the $x$-axis. A cross-section perpendicular to the $x$-axis is shaped like a:',
              options: ['Circle (disk)', 'Square', 'Triangle', 'Ring with a hole'],
              correctAnswer: 0,
              explanation: 'Rotating any region about a line makes each perpendicular slice a circle. Because the region sits right on the $x$-axis (it runs from $y=0$ up to $y=\\sqrt{x}$), the slice is a solid disk with no hole.',
            },
            {
              question: 'Rotating a right triangle about one of its legs produces which solid?',
              options: ['A cone', 'A sphere', 'A cylinder', 'A cube'],
              correctAnswer: 0,
              explanation: 'The leg becomes the central axis and the hypotenuse sweeps out a slanted surface, giving a cone. (A rectangle rotated about an edge gives a cylinder.)',
            },
          ],
        },
      },
      {
        id: 'vdm1-one-disk',
        type: 'text' as const,
        content: `## The Volume of One Thin Disk

Slice the solid into coins of tiny thickness $dx$, each perpendicular to the axis. One coin is essentially a short cylinder:

$$dV = (\\text{area of the circular face}) \\times (\\text{thickness}) = \\pi r^2 \\, dx$$

The only thing that changes from slice to slice is the **radius** $r$. If the solid was made by rotating $y = f(x)$ about the $x$-axis, then for the slice at position $x$ the radius reaches from the axis up to the curve:

$$r = f(x)$$

So the volume of one disk is:

$$dV = \\pi \\big[f(x)\\big]^2 \\, dx$$

> 🔑 **Memorize the radius rule:** the radius is always the **distance from the axis of revolution to the curve.** Get the radius right and the rest is just integration.`,
      },
      {
        id: 'vdm1-radius-id',
        type: 'dropdown-select' as const,
        content: `**Identify the Radius** 🔽

For each setup, the region is bounded by the given curve and the axis, and we rotate about the $x$-axis. Pick the radius of a typical disk.`,
        exercise: {
          dropdowns: [
            { label: 'Region under $y = x^2$, about the $x$-axis. Radius $=$', options: ['$x^2$', '$x$', '$2x$', '$\\sqrt{x}$'] },
            { label: 'Region under $y = \\sqrt{x}$, about the $x$-axis. Radius $=$', options: ['$\\sqrt{x}$', '$x$', '$x^2$', '$\\frac{1}{2}\\sqrt{x}$'] },
            { label: 'Volume of one disk $dV =$', options: ['$\\pi r^2\\,dx$', '$2\\pi r\\,dx$', '$\\pi r\\,dx$', '$r^2\\,dx$'] },
          ],
          correctAnswers: ['$x^2$', '$\\sqrt{x}$', '$\\pi r^2\\,dx$'],
          hint1: 'The radius runs from the axis ($y=0$) up to the curve, so it equals the curve\'s height $f(x)$.',
          hint2: 'For $y=x^2$ the height is $x^2$; for $y=\\sqrt{x}$ the height is $\\sqrt{x}$.',
          hint3: 'A disk is a thin cylinder: area $\\pi r^2$ times thickness $dx$.',
          explanation: 'The radius is the distance from the axis to the curve — the height $f(x)$. One disk has volume $dV=\\pi r^2\\,dx=\\pi[f(x)]^2\\,dx$.',
        },
      },
      {
        id: 'vdm1-sum',
        type: 'text' as const,
        content: `## Turning a Sum of Disks into an Integral

Stack up infinitely many disks from $x = a$ to $x = b$ and add their volumes. "Add infinitely many infinitesimal pieces" is exactly what a definite integral does:

$$V = \\int_a^b \\pi \\big[f(x)\\big]^2 \\, dx$$

That single formula is the disk method (rotation about the $x$-axis). In Part 2 we'll unpack each piece — the $\\pi$, the squared radius, and the limits — and start computing volumes.

> ⚠️ **Don't forget to square the radius**, and remember the $\\pi$. Forgetting either is the #1 disk-method error on the AP exam.`,
      },
      {
        id: 'vdm1-disk-volume',
        type: 'input-boxes' as const,
        content: `**One Disk's Volume** 🧮

A single disk is a thin cylinder with volume $dV = \\pi r^2\\,dx$. Compute the volume of one disk for each radius and thickness. Enter the coefficient of $\\pi$ (e.g., if the volume is $9\\pi\\,dx$, type \`9\`).

**1)** radius $r = 3$, thickness $dx$ → $dV = \\,?\\;\\pi\\,dx$
**2)** radius $r = x$ (at the slice where $x = 2$), thickness $dx$ → $dV = \\,?\\;\\pi\\,dx$
**3)** radius $r = \\sqrt{x}$ (at the slice where $x = 5$), thickness $dx$ → $dV = \\,?\\;\\pi\\,dx$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '4', '5'],
          hint1: 'Area of the circular face is $\\pi r^2$; the coefficient of $\\pi$ is just $r^2$.',
          hint2: 'For $r=x$ at $x=2$: $r^2 = 2^2 = 4$.',
          hint3: 'For $r=\\sqrt{x}$ at $x=5$: $r^2 = (\\sqrt{5})^2 = 5$.',
          explanation: '$dV=\\pi r^2\\,dx$, so the coefficient is $r^2$. 1) $3^2=9$.  2) $2^2=4$.  3) $(\\sqrt{5})^2=5$ — squaring the root removes the radical.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'volumes-disk-method',
    sections: [
      {
        id: 'vdm2-intro',
        type: 'text' as const,
        content: `# 🥞 Volumes of Revolution: The Disk Method

**Part 2 of 7 — The Disk Formula About the $x$-Axis**

---

> 🔑 **The Formula:** When the region under $y = f(x)$ on $[a, b]$ is rotated about the $x$-axis,
> $$V = \\pi \\int_a^b \\big[f(x)\\big]^2 \\, dx.$$`,
      },
      {
        id: 'vdm2-steps',
        type: 'text' as const,
        content: `## The Four-Step Setup

1. **Draw** the region and the axis. Identify the typical disk (a vertical strip of width $dx$ rotated into a coin).
2. **Radius:** distance from the axis to the curve. About the $x$-axis this is just $r = f(x)$.
3. **Limits:** the $x$-values where the region starts and ends, $a$ and $b$.
4. **Integrate:** $V = \\pi\\displaystyle\\int_a^b [f(x)]^2\\,dx$.

### Worked Example: $y = x$ from $x = 0$ to $x = 3$, about the $x$-axis

This region is a triangle; rotated, it forms a **cone**. Radius $r = x$:

$$V = \\pi\\int_0^3 x^2 \\, dx = \\pi \\left[\\frac{x^3}{3}\\right]_0^3 = \\pi\\cdot\\frac{27}{3} = 9\\pi$$

> ✅ **Reality check:** A cone has volume $\\frac{1}{3}\\pi R^2 h$. Here $R = 3$, $h = 3$, so $\\frac{1}{3}\\pi(9)(3) = 9\\pi$. ✓ The calculus matches the geometry.`,
      },
      {
        id: 'vdm2-square-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region under $y = x^2$ on $[0, 2]$ is rotated about the $x$-axis. Which integral gives the volume?',
              options: ['$\\pi\\int_0^2 x^4\\,dx$', '$\\pi\\int_0^2 x^2\\,dx$', '$\\pi\\int_0^2 (x^2)\\,dx$ with no square', '$2\\pi\\int_0^2 x^2\\,dx$'],
              correctAnswer: 0,
              explanation: 'Radius $r=x^2$, so $r^2=(x^2)^2=x^4$. The integrand is $\\pi r^2=\\pi x^4$. Squaring the radius is essential.',
            },
            {
              question: 'In $V = \\pi\\int_a^b [f(x)]^2\\,dx$, what does the factor $[f(x)]^2$ represent geometrically?',
              options: ['The radius squared (proportional to a disk\'s face area)', 'The thickness of a disk', 'The circumference of a disk', 'The height of the solid'],
              correctAnswer: 0,
              explanation: 'A disk\'s circular face has area $\\pi r^2$. Since $r=f(x)$, the area is $\\pi[f(x)]^2$, and multiplying by thickness $dx$ and summing gives the volume.',
            },
          ],
        },
      },
      {
        id: 'vdm2-setup-drill',
        type: 'dropdown-select' as const,
        content: `**Build the Integral** 🔽

The region under $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is rotated about the $x$-axis. Assemble the volume integral.`,
        exercise: {
          dropdowns: [
            { label: 'Radius $r =$', options: ['$\\sqrt{x}$', '$x$', '$x^2$', '$4$'] },
            { label: 'Integrand $\\pi r^2 =$', options: ['$\\pi x$', '$\\pi\\sqrt{x}$', '$\\pi x^2$', '$\\pi x^4$'] },
            { label: 'Limits of integration:', options: ['$0$ to $4$', '$0$ to $2$', '$0$ to $16$', '$-4$ to $4$'] },
          ],
          correctAnswers: ['$\\sqrt{x}$', '$\\pi x$', '$0$ to $4$'],
          hint1: 'About the $x$-axis the radius is the curve height, $r=\\sqrt{x}$.',
          hint2: 'Square it: $(\\sqrt{x})^2=x$, so $\\pi r^2=\\pi x$.',
          hint3: 'The region runs over the $x$-values $0$ to $4$, so those are the limits.',
          explanation: 'With $r=\\sqrt{x}$, the integrand is $\\pi(\\sqrt{x})^2=\\pi x$, integrated from $0$ to $4$: $V=\\pi\\int_0^4 x\\,dx$.',
        },
      },
      {
        id: 'vdm2-compute',
        type: 'text' as const,
        content: `## Finishing the Computation

Continuing the $y = \\sqrt{x}$ example:

$$V = \\pi\\int_0^4 x \\, dx = \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\pi\\cdot\\frac{16}{2} = 8\\pi$$

So the solid has volume $8\\pi$ cubic units. Notice how cleanly the square of $\\sqrt{x}$ collapsed the radical — **squaring the radius often simplifies the integrand**, which is part of why the disk method is so tractable.

> 💡 Leave answers as exact multiples of $\\pi$ unless the problem asks for a decimal. AP graders want $8\\pi$, not $25.13$.`,
      },
      {
        id: 'vdm2-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Volume** 🧮

Each region is rotated about the $x$-axis. Enter the volume as the coefficient of $\\pi$ (e.g., if the answer is $9\\pi$, type \`9\`).

**1)** $y = x$ on $[0, 2]$ → $V = \\,?\\;\\pi$
**2)** $y = 2$ (constant) on $[0, 5]$ → $V = \\,?\\;\\pi$  *(a cylinder)*
**3)** $y = \\sqrt{x}$ on $[0, 9]$ → $V = \\,?\\;\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8/3', '20', '40.5'],
          hint1: '$\\pi\\int_0^2 x^2\\,dx=\\pi[x^3/3]_0^2=\\pi\\cdot 8/3$.',
          hint2: 'Radius is constant $2$, so $\\pi\\int_0^5 4\\,dx=\\pi\\cdot 4\\cdot 5=20\\pi$ (a cylinder $\\pi R^2 h=\\pi\\cdot4\\cdot5$).',
          hint3: '$\\pi\\int_0^9 x\\,dx=\\pi[x^2/2]_0^9=\\pi\\cdot 81/2=40.5\\pi$.',
          explanation: '1) $\\pi\\int_0^2 x^2\\,dx=\\frac{8}{3}\\pi$.  2) $\\pi\\int_0^5 4\\,dx=20\\pi$.  3) $\\pi\\int_0^9 x\\,dx=40.5\\pi=\\frac{81}{2}\\pi$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'volumes-disk-method',
    sections: [
      {
        id: 'vdm3-intro',
        type: 'text' as const,
        content: `# 🥞 Volumes of Revolution: The Disk Method

**Part 3 of 7 — Worked Examples (About the $x$-Axis)**

---

> 🔑 **Goal:** Get fluent. We'll work three complete examples about the $x$-axis, including one that needs you to **find the limits first**.`,
      },
      {
        id: 'vdm3-ex1',
        type: 'text' as const,
        content: `## Example 1 — $y = x^2$ on $[0, 2]$

Radius $r = x^2$, so $r^2 = x^4$:

$$V = \\pi\\int_0^2 (x^2)^2 \\, dx = \\pi\\int_0^2 x^4 \\, dx = \\pi\\left[\\frac{x^5}{5}\\right]_0^2 = \\pi\\cdot\\frac{32}{5} = \\frac{32\\pi}{5}$$

> ⚠️ **Watch the exponent.** $(x^2)^2 = x^4$, **not** $x^4 \\to x^5$ before integrating. Square first, *then* integrate. Mixing up the order is a classic slip.`,
      },
      {
        id: 'vdm3-ex2',
        type: 'text' as const,
        content: `## Example 2 — $y = \\sqrt{x}$ on $[1, 4]$

Radius $r = \\sqrt{x}$, so $r^2 = x$:

$$V = \\pi\\int_1^4 (\\sqrt{x})^2 \\, dx = \\pi\\int_1^4 x \\, dx = \\pi\\left[\\frac{x^2}{2}\\right]_1^4 = \\pi\\left(\\frac{16}{2} - \\frac{1}{2}\\right) = \\pi\\cdot\\frac{15}{2} = \\frac{15\\pi}{2}$$

Notice the lower limit is $x = 1$, **not** $0$ — always read where the region actually begins. The constant from the lower limit ($\\frac{1}{2}$) genuinely matters.`,
      },
      {
        id: 'vdm3-quiz1',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region under $y = e^{x}$ on $[0, 1]$ is rotated about the $x$-axis. The volume integral is:',
              options: ['$\\pi\\int_0^1 e^{2x}\\,dx$', '$\\pi\\int_0^1 e^{x}\\,dx$', '$\\pi\\int_0^1 e^{x^2}\\,dx$', '$\\pi\\int_0^1 2e^{x}\\,dx$'],
              correctAnswer: 0,
              explanation: 'Radius $r=e^x$, so $r^2=(e^x)^2=e^{2x}$ (multiply exponents, since $(e^x)^2=e^{x}\\cdot e^{x}=e^{2x}$). The integrand is $\\pi e^{2x}$.',
            },
            {
              question: 'For $y = x^3$ on $[0,1]$ about the $x$-axis, the integrand $\\pi[f(x)]^2$ equals:',
              options: ['$\\pi x^6$', '$\\pi x^5$', '$\\pi x^9$', '$\\pi x^3$'],
              correctAnswer: 0,
              explanation: '$r=x^3\\Rightarrow r^2=(x^3)^2=x^6$. Square the radius before integrating.',
            },
          ],
        },
      },
      {
        id: 'vdm3-ex3',
        type: 'text' as const,
        content: `## Example 3 — Find the Limits First: $y = 4 - x^2$ above the $x$-axis

The curve $y = 4 - x^2$ meets the $x$-axis where $4 - x^2 = 0 \\Rightarrow x = \\pm 2$. So the region runs from $x = -2$ to $x = 2$, with radius $r = 4 - x^2$:

$$V = \\pi\\int_{-2}^{2} (4 - x^2)^2 \\, dx = \\pi\\int_{-2}^{2} (16 - 8x^2 + x^4) \\, dx$$

Because the integrand is **even**, integrate $0$ to $2$ and double:

$$= 2\\pi\\int_{0}^{2} (16 - 8x^2 + x^4)\\,dx = 2\\pi\\left[16x - \\frac{8x^3}{3} + \\frac{x^5}{5}\\right]_0^2$$

$$= 2\\pi\\left(32 - \\frac{64}{3} + \\frac{32}{5}\\right) = 2\\pi\\cdot\\frac{480 - 320 + 96}{15} = 2\\pi\\cdot\\frac{256}{15} = \\frac{512\\pi}{15}$$

> 💡 **Expand before integrating.** You can't integrate $(4-x^2)^2$ directly term-by-term until you multiply it out. And exploiting even symmetry is a clean time-saver.`,
      },
      {
        id: 'vdm3-expand-drill',
        type: 'dropdown-select' as const,
        content: `**Square, Then Expand** 🔽

Before integrating a disk-method integrand you must square the radius and expand. Choose the correct expansion of each squared radius.`,
        exercise: {
          dropdowns: [
            { label: '$(4 - x^2)^2 =$', options: ['$16 - 8x^2 + x^4$', '$16 + x^4$', '$16 - x^4$', '$16 - 4x^2 + x^4$'] },
            { label: '$(x + 1)^2 =$', options: ['$x^2 + 2x + 1$', '$x^2 + 1$', '$x^2 + x + 1$', '$x^2 + 2x$'] },
            { label: '$(x^2 + 1)^2 =$', options: ['$x^4 + 2x^2 + 1$', '$x^4 + 1$', '$x^4 + x^2 + 1$', '$x^4 + 2x^2$'] },
          ],
          correctAnswers: ['$16 - 8x^2 + x^4$', '$x^2 + 2x + 1$', '$x^4 + 2x^2 + 1$'],
          hint1: 'Use $(a - b)^2 = a^2 - 2ab + b^2$ and $(a + b)^2 = a^2 + 2ab + b^2$.',
          hint2: 'For $(4-x^2)^2$: $a=4,\\,b=x^2$, so $16 - 2(4)(x^2) + x^4 = 16 - 8x^2 + x^4$.',
          hint3: 'For $(x^2+1)^2$: $a=x^2,\\,b=1$, so $x^4 + 2x^2 + 1$. The cross term $2ab$ is what students drop.',
          explanation: 'Squaring a binomial always produces a middle (cross) term $2ab$: $(4-x^2)^2=16-8x^2+x^4$, $(x+1)^2=x^2+2x+1$, $(x^2+1)^2=x^4+2x^2+1$.',
        },
      },
      {
        id: 'vdm3-drill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

Each region (bounded by the curve and the $x$-axis) is rotated about the $x$-axis. Enter the coefficient of $\\pi$.

**1)** $y = x^2$ on $[0, 1]$ → $V = \\,?\\;\\pi$
**2)** $y = \\sqrt{x}$ on $[0, 2]$ → $V = \\,?\\;\\pi$
**3)** $y = 3$ on $[0, 4]$ → $V = \\,?\\;\\pi$  *(cylinder)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/5', '2', '36'],
          hint1: '$\\pi\\int_0^1 x^4\\,dx=\\pi[x^5/5]_0^1=\\frac{1}{5}\\pi$.',
          hint2: '$\\pi\\int_0^2 (\\sqrt{x})^2\\,dx=\\pi\\int_0^2 x\\,dx=\\pi[x^2/2]_0^2=2\\pi$.',
          hint3: 'Radius constant $3$: $\\pi\\int_0^4 9\\,dx=\\pi\\cdot 9\\cdot 4=36\\pi$.',
          explanation: '1) $\\frac{1}{5}\\pi$.  2) $2\\pi$.  3) $36\\pi$ (cylinder $\\pi R^2h=\\pi\\cdot 9\\cdot 4$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'volumes-disk-method',
    sections: [
      {
        id: 'vdm4-intro',
        type: 'text' as const,
        content: `# 🥞 Volumes of Revolution: The Disk Method

**Part 4 of 7 — Rotating About the $y$-Axis**

---

> 🔑 **The Switch:** Rotating about the $y$-axis means the disks are **stacked vertically**, with thickness $dy$. Everything must be written in terms of $y$:
> $$V = \\pi\\int_c^d \\big[g(y)\\big]^2 \\, dy.$$`,
      },
      {
        id: 'vdm4-match',
        type: 'text' as const,
        content: `## Match the Variable to the Axis

The rule that prevents 90% of mistakes:

| Axis of revolution | Disk thickness | Radius is a function of | Limits are |
|--------------------|----------------|-------------------------|------------|
| $x$-axis (horizontal) | $dx$ | $x$ | $x$-values |
| $y$-axis (vertical) | $dy$ | $y$ | $y$-values |

About the $y$-axis, the radius runs **horizontally** from the axis to the curve, so the radius is the curve's $x$-distance — you must solve the equation for $x$ as a function of $y$.

> 🔑 **Solve for $x$.** If $y = x^2$ (with $x \\ge 0$), then $x = \\sqrt{y}$, and the radius about the $y$-axis is $r = \\sqrt{y}$.`,
      },
      {
        id: 'vdm4-solve-drill',
        type: 'dropdown-select' as const,
        content: `**Rewrite for the $y$-Axis** 🔽

Each curve is rotated about the $y$-axis. Choose the radius $r$ as a function of $y$.`,
        exercise: {
          dropdowns: [
            { label: '$y = x^2$ ($x\\ge 0$) → radius $r =$', options: ['$\\sqrt{y}$', '$y^2$', '$y$', '$\\frac{1}{2}y$'] },
            { label: '$y = 2x$ → radius $r =$', options: ['$\\frac{y}{2}$', '$2y$', '$y$', '$\\sqrt{y}$'] },
            { label: '$y = x^3$ → radius $r =$', options: ['$y^{1/3}$', '$y^3$', '$3y$', '$\\sqrt{y}$'] },
          ],
          correctAnswers: ['$\\sqrt{y}$', '$\\frac{y}{2}$', '$y^{1/3}$'],
          hint1: 'Solve each equation for $x$ in terms of $y$.',
          hint2: 'From $y=x^2$, $x=\\sqrt{y}$; from $y=2x$, $x=y/2$.',
          hint3: 'From $y=x^3$, take a cube root: $x=y^{1/3}=\\sqrt[3]{y}$.',
          explanation: 'About the $y$-axis the radius is the horizontal distance $x=g(y)$, so solve each curve for $x$: $\\sqrt{y}$, $y/2$, and $y^{1/3}$.',
        },
      },
      {
        id: 'vdm4-worked',
        type: 'text' as const,
        content: `## Worked Example — $y = x^2$, $0 \\le y \\le 4$, about the $y$-Axis

The region is bounded on the right by $x = \\sqrt{y}$ and on the left by the $y$-axis, for $y$ from $0$ to $4$. Radius $r = \\sqrt{y}$, thickness $dy$:

$$V = \\pi\\int_0^4 (\\sqrt{y})^2 \\, dy = \\pi\\int_0^4 y \\, dy = \\pi\\left[\\frac{y^2}{2}\\right]_0^4 = \\pi\\cdot\\frac{16}{2} = 8\\pi$$

> ⚠️ **The limits are now $y$-values** ($0$ to $4$), not $x$-values. A frequent error is rotating about the $y$-axis but still integrating from $x=0$ to $x=2$ in terms of $x$. Keep the variable and the limits consistent.`,
      },
      {
        id: 'vdm4-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region bounded by $y = x^2$, $y = 4$, and the $y$-axis (first quadrant) is rotated about the $y$-axis. The correct volume integral is:',
              options: ['$\\pi\\int_0^4 y\\,dy$', '$\\pi\\int_0^2 x^4\\,dx$', '$\\pi\\int_0^4 y^2\\,dy$', '$\\pi\\int_0^2 \\sqrt{y}\\,dy$'],
              correctAnswer: 0,
              explanation: 'About the $y$-axis, solve $y=x^2$ for $x=\\sqrt{y}$. Radius $r=\\sqrt{y}$, so $\\pi r^2=\\pi(\\sqrt{y})^2=\\pi y$, integrated over $y\\in[0,4]$.',
            },
            {
              question: 'When rotating about the $y$-axis, the thickness of a typical disk is:',
              options: ['$dy$', '$dx$', '$dr$', '$\\pi\\,dy$'],
              correctAnswer: 0,
              explanation: 'Disks stack along the axis of revolution. About the vertical $y$-axis they stack vertically with thickness $dy$.',
            },
          ],
        },
      },
      {
        id: 'vdm4-drill',
        type: 'input-boxes' as const,
        content: `**Volumes About the $y$-Axis** 🧮

Each region is in the first quadrant, bounded by the curve, the $y$-axis, and the given top, and is rotated about the $y$-axis. Enter the coefficient of $\\pi$.

**1)** $x = \\sqrt{y}$ (i.e. $y=x^2$), $0\\le y\\le 9$ → $V = \\,?\\;\\pi$
**2)** $x = \\frac{y}{2}$ (i.e. $y=2x$), $0\\le y\\le 4$ → $V = \\,?\\;\\pi$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['40.5', '16/3'],
          hint1: '$\\pi\\int_0^9 (\\sqrt{y})^2\\,dy=\\pi\\int_0^9 y\\,dy=\\pi[y^2/2]_0^9=\\pi\\cdot 81/2$.',
          hint2: '$\\pi\\int_0^4 (y/2)^2\\,dy=\\pi\\int_0^4 \\frac{y^2}{4}\\,dy=\\frac{\\pi}{4}[y^3/3]_0^4=\\frac{\\pi}{4}\\cdot\\frac{64}{3}$.',
          hint3: '$\\frac{\\pi}{4}\\cdot\\frac{64}{3}=\\frac{64\\pi}{12}=\\frac{16\\pi}{3}$.',
          explanation: '1) $\\pi\\int_0^9 y\\,dy=40.5\\pi=\\frac{81}{2}\\pi$.  2) $\\pi\\int_0^4 \\frac{y^2}{4}\\,dy=\\frac{16}{3}\\pi$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'volumes-disk-method',
    sections: [
      {
        id: 'vdm5-intro',
        type: 'text' as const,
        content: `# 🥞 Volumes of Revolution: The Disk Method

**Part 5 of 7 — Rotating About a Non-Axis Line**

---

> 🔑 **The Key Adjustment:** When the axis of revolution is a line like $y = -1$ or $x = 3$ (not an actual coordinate axis), only the **radius** changes. It becomes the **distance from that line to the curve.**`,
      },
      {
        id: 'vdm5-radius-rule',
        type: 'text' as const,
        content: `## Radius = Distance From the Line to the Curve

A radius is always a distance, so subtract to get it:

- **Horizontal line $y = L$**, curve $y = f(x)$ above it: $\\;r = f(x) - L$
- **Vertical line $x = L$**, curve $x = g(y)$ to its right: $\\;r = g(y) - L$

Then plug into $V = \\pi\\int r^2\\,(\\text{thickness})$ exactly as before.

### Example: $y = \\sqrt{x}$ on $[0,4]$ rotated about $y = -1$

The curve sits at height $\\sqrt{x}$; the axis sits at height $-1$. Distance between them:

$$r = \\sqrt{x} - (-1) = \\sqrt{x} + 1$$

> ⚠️ **Subtracting a negative.** Rotating about $y=-1$ makes the radius *bigger*, because the curve is now farther from the axis. Writing $r=\\sqrt{x}-1$ here (forgetting the double negative) is a classic sign error.`,
      },
      {
        id: 'vdm5-radius-quiz',
        type: 'dropdown-select' as const,
        content: `**Find the Radius** 🔽

The curve $y = f(x)$ lies above each horizontal axis listed. Choose the disk radius.`,
        exercise: {
          dropdowns: [
            { label: 'Curve $y=f(x)$, axis $y = 2$ (curve above it). $r =$', options: ['$f(x) - 2$', '$f(x) + 2$', '$2 - f(x)$', '$f(x)$'] },
            { label: 'Curve $y=f(x)$, axis $y = -3$. $r =$', options: ['$f(x) + 3$', '$f(x) - 3$', '$3 - f(x)$', '$-3 - f(x)$'] },
            { label: 'Curve $x=g(y)$, axis $x = 1$ (curve to the right). $r =$', options: ['$g(y) - 1$', '$1 - g(y)$', '$g(y) + 1$', '$g(y)$'] },
          ],
          correctAnswers: ['$f(x) - 2$', '$f(x) + 3$', '$g(y) - 1$'],
          hint1: 'Radius = (position of curve) − (position of axis), taking the positive distance.',
          hint2: 'For axis $y=-3$: $f(x)-(-3)=f(x)+3$.',
          hint3: 'For a vertical axis $x=1$ with the curve to the right: $g(y)-1$.',
          explanation: 'Always subtract the axis location from the curve location: $f(x)-2$, $f(x)-(-3)=f(x)+3$, and $g(y)-1$.',
        },
      },
      {
        id: 'vdm5-worked',
        type: 'text' as const,
        content: `## Worked Example — $y = x$ on $[0, 2]$, Rotated About $y = -1$

Radius $r = x - (-1) = x + 1$. Thickness $dx$, limits $0$ to $2$:

$$V = \\pi\\int_0^2 (x + 1)^2 \\, dx = \\pi\\int_0^2 (x^2 + 2x + 1)\\,dx$$

$$= \\pi\\left[\\frac{x^3}{3} + x^2 + x\\right]_0^2 = \\pi\\left(\\frac{8}{3} + 4 + 2\\right) = \\pi\\left(\\frac{8}{3} + 6\\right) = \\pi\\cdot\\frac{26}{3} = \\frac{26\\pi}{3}$$

> 💡 **Expand the squared binomial** $(x+1)^2$ before integrating — you can't integrate it as-is term by term. This region rotated about the $x$-axis would give only $\\frac{8}{3}\\pi$; moving the axis down to $y=-1$ enlarges every radius and the volume grows accordingly.`,
      },
      {
        id: 'vdm5-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region under $y = x^2$ on $[0,1]$ is rotated about the line $y = -2$. The disk radius is:',
              options: ['$x^2 + 2$', '$x^2 - 2$', '$2 - x^2$', '$x^2$'],
              correctAnswer: 0,
              explanation: 'Radius = curve − axis = $x^2 - (-2) = x^2 + 2$. Subtracting $-2$ adds $2$.',
            },
            {
              question: 'Rotating a region about a line farther from it (rather than about the $x$-axis) generally makes the volume:',
              options: ['Larger', 'Smaller', 'Unchanged', 'Zero'],
              correctAnswer: 0,
              explanation: 'Every disk radius increases, and volume depends on $r^2$, so the solid is larger. (This is for a solid disk with no hole; washers behave differently.)',
            },
          ],
        },
      },
      {
        id: 'vdm5-drill',
        type: 'input-boxes' as const,
        content: `**Volumes About a Shifted Line** 🧮

Enter the coefficient of $\\pi$.

**1)** $y = x$ on $[0, 2]$, rotated about $y = -1$ → $V = \\,?\\;\\pi$
**2)** $y = 1$ (constant) on $[0, 3]$, rotated about $y = -1$ → $V = \\,?\\;\\pi$  *(cylinder, radius $2$)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['26/3', '12'],
          hint1: '$r=x+1$; $\\pi\\int_0^2 (x+1)^2\\,dx=\\pi\\int_0^2 (x^2+2x+1)\\,dx$.',
          hint2: '$=\\pi[x^3/3+x^2+x]_0^2=\\pi(8/3+4+2)=\\frac{26}{3}\\pi$.',
          hint3: 'For #2: $r=1-(-1)=2$ constant, so $\\pi\\int_0^3 2^2\\,dx=\\pi\\cdot 4\\cdot 3=12\\pi$.',
          explanation: '1) $r=x+1\\Rightarrow V=\\frac{26}{3}\\pi$.  2) $r=2$ constant $\\Rightarrow \\pi\\cdot4\\cdot3=12\\pi$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'volumes-disk-method',
    sections: [
      {
        id: 'vdm6-intro',
        type: 'text' as const,
        content: `# 🥞 Volumes of Revolution: The Disk Method

**Part 6 of 7 — Setup Pitfalls & Pro Strategy**

---

> 🔑 **Master the setup, not just the integration.** On the AP exam, the radius, the variable, and the limits earn the points. We'll lock down the traps that cost students the most.`,
      },
      {
        id: 'vdm6-traps',
        type: 'text' as const,
        content: `## The Five Disk-Method Traps

| # | Trap | Fix |
|---|------|-----|
| 1 | Forgetting the $\\pi$ | The face area is $\\pi r^2$ — $\\pi$ is always out front |
| 2 | Forgetting to **square** the radius | The integrand is $r^2$, not $r$ |
| 3 | Integrating before squaring | Square (and expand) **first**, then integrate |
| 4 | Wrong variable for the axis | $x$-axis → $dx$ & $x$-limits; $y$-axis → $dy$ & $y$-limits |
| 5 | Sign error with a shifted axis | $r = $ (curve) $-$ (axis); subtracting a negative *adds* |

> ⚠️ Traps #2 and #3 are the same mistake in disguise: students write $\\pi\\int (4-x^2)\\,dx$ instead of $\\pi\\int (4-x^2)^2\\,dx$. **Square, expand, integrate** — in that order.`,
      },
      {
        id: 'vdm6-spot-error',
        type: 'multiple-choice' as const,
        content: `**Spot the Error** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student writes the volume of $y = 4 - x^2$ (above the $x$-axis, about the $x$-axis) as $\\pi\\int_{-2}^{2}(4 - x^2)\\,dx$. What\'s wrong?',
              options: ['The radius was not squared — it should be $(4 - x^2)^2$', 'The limits should be $0$ to $4$', 'The $\\pi$ should not be there', 'It should be $dy$, not $dx$'],
              correctAnswer: 0,
              explanation: 'The integrand must be $\\pi r^2=\\pi(4-x^2)^2$. The student forgot to square the radius (Trap #2).',
            },
            {
              question: 'For the region under $y = \\sqrt{x}$ on $[0,4]$ rotated about the $y$-axis, a student integrates $\\pi\\int_0^4 x\\,dx$ in terms of $x$. The main error is:',
              options: ['Using $x$ and $x$-limits for a rotation about the $y$-axis', 'Forgetting the $\\pi$', 'Not squaring the radius', 'Using the wrong sign'],
              correctAnswer: 0,
              explanation: 'About the $y$-axis, you must express the radius in terms of $y$ and use $y$-limits with $dy$ (Trap #4). The variable must match the axis.',
            },
          ],
        },
      },
      {
        id: 'vdm6-units',
        type: 'text' as const,
        content: `## Reading the Problem Correctly

Two more habits that save points:

- **"Rotated about" tells you the axis** → that sets the radius and the variable. Underline it.
- **"Bounded by ... and the line ..."** → those boundaries give the limits. Find intersection points algebraically when they aren't handed to you (as in $4 - x^2 = 0 \\Rightarrow x = \\pm 2$).

### Sketch-First Checklist

1. Plot the curve and the axis.
2. Draw one representative disk; label its radius as a distance.
3. Decide $dx$ vs $dy$ from the axis.
4. Read the limits off the picture.

> 💡 A 10-second sketch eliminates almost every sign and variable error. AP readers reward a correctly set-up integral even before it's evaluated.`,
      },
      {
        id: 'vdm6-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Full Setup** 🔽

Region: under $y = x^2$ from $x = 0$ to $x = 2$. Set up the volume for rotation **about the $x$-axis**.`,
        exercise: {
          dropdowns: [
            { label: 'Variable / thickness:', options: ['$dx$', '$dy$', '$dr$', '$d\\theta$'] },
            { label: 'Radius:', options: ['$x^2$', '$\\sqrt{y}$', '$x$', '$y^2$'] },
            { label: 'Integrand $\\pi r^2$:', options: ['$\\pi x^4$', '$\\pi x^2$', '$\\pi y$', '$\\pi x^5$'] },
            { label: 'Limits:', options: ['$0$ to $2$', '$0$ to $4$', '$0$ to $8$', '$-2$ to $2$'] },
          ],
          correctAnswers: ['$dx$', '$x^2$', '$\\pi x^4$', '$0$ to $2$'],
          hint1: 'About the horizontal $x$-axis, use vertical strips: thickness $dx$, radius $=$ height $f(x)$.',
          hint2: 'Radius $=x^2$, so square it: $(x^2)^2=x^4$.',
          hint3: 'The region spans $x=0$ to $x=2$, so those are the limits.',
          explanation: 'About the $x$-axis: $V=\\pi\\int_0^2 (x^2)^2\\,dx=\\pi\\int_0^2 x^4\\,dx=\\frac{32}{5}\\pi$.',
        },
      },
      {
        id: 'vdm6-drill',
        type: 'input-boxes' as const,
        content: `**Set Up & Solve** 🧮

Enter the coefficient of $\\pi$.

**1)** $y = x^2$ on $[0,2]$ about the $x$-axis → $V = \\,?\\;\\pi$
**2)** Same region, but about $y = -1$. Radius $= x^2 + 1$. Set up only — enter the value of $\\int_0^2 (x^2+1)^2\\,dx$ as a fraction → $\\,?$
   *(Hint: expand $(x^2+1)^2 = x^4 + 2x^2 + 1$.)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['32/5', '206/15'],
          hint1: '#1: $\\pi\\int_0^2 x^4\\,dx=\\pi[x^5/5]_0^2=\\frac{32}{5}\\pi$.',
          hint2: '#2: $\\int_0^2 (x^4+2x^2+1)\\,dx=[x^5/5+2x^3/3+x]_0^2$.',
          hint3: '#2: $=\\frac{32}{5}+\\frac{16}{3}+2=\\frac{96+80+30}{15}=\\frac{206}{15}$.',
          explanation: '1) $\\frac{32}{5}\\pi$.  2) $\\int_0^2(x^4+2x^2+1)\\,dx=\\frac{32}{5}+\\frac{16}{3}+2=\\frac{206}{15}$, so $V=\\frac{206}{15}\\pi$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'volumes-disk-method',
    sections: [
      {
        id: 'vdm7-intro',
        type: 'text' as const,
        content: `# 🥞 Volumes of Revolution: The Disk Method

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) see a solid as a stack of disks, (2) build $V = \\pi\\int r^2\\,(\\text{thickness})$ about the $x$- or $y$-axis, (3) handle shifted axes, and (4) dodge the five traps. Let's put it all together.`,
      },
      {
        id: 'vdm7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Volume |
|-----------|--------|
| About $x$-axis, $y=f(x)$ on $[a,b]$ | $\\pi\\displaystyle\\int_a^b [f(x)]^2\\,dx$ |
| About $y$-axis, $x=g(y)$ on $[c,d]$ | $\\pi\\displaystyle\\int_c^d [g(y)]^2\\,dy$ |
| About $y = L$ (horizontal) | $\\pi\\displaystyle\\int [f(x) - L]^2\\,dx$ |
| About $x = L$ (vertical) | $\\pi\\displaystyle\\int [g(y) - L]^2\\,dy$ |

> 🔑 **One idea, four flavors:** radius = distance from the axis to the curve; $V = \\pi\\int (\\text{radius})^2\\,(\\text{thickness})$. The thickness and limits always match the axis.

> ⚠️ Square the radius, keep the $\\pi$, expand before integrating, and match the variable to the axis.`,
      },
      {
        id: 'vdm7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The region under $y = \\sqrt{x}$ on $[0, 4]$ is rotated about the $x$-axis. The volume is:',
              options: ['$8\\pi$', '$4\\pi$', '$16\\pi$', '$\\frac{32}{3}\\pi$'],
              correctAnswer: 0,
              explanation: '$V=\\pi\\int_0^4 (\\sqrt{x})^2\\,dx=\\pi\\int_0^4 x\\,dx=\\pi[x^2/2]_0^4=\\pi\\cdot 8=8\\pi$.',
            },
            {
              question: 'The region bounded by $y = x^2$, $y = 4$, and the $y$-axis (first quadrant) is rotated about the $y$-axis. The volume is:',
              options: ['$8\\pi$', '$16\\pi$', '$\\frac{32}{5}\\pi$', '$4\\pi$'],
              correctAnswer: 0,
              explanation: 'Radius $=\\sqrt{y}$: $V=\\pi\\int_0^4 (\\sqrt{y})^2\\,dy=\\pi\\int_0^4 y\\,dy=\\pi[y^2/2]_0^4=8\\pi$.',
            },
          ],
        },
      },
      {
        id: 'vdm7-mixed2',
        type: 'input-boxes' as const,
        content: `**Mixed Computation** 🧮

Enter the coefficient of $\\pi$.

**1)** $y = x$ on $[0, 4]$ about the $x$-axis → $V = \\,?\\;\\pi$  *(a cone)*
**2)** $y = x^2$ on $[0, 1]$ about the $x$-axis → $V = \\,?\\;\\pi$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['64/3', '1/5'],
          hint1: '#1: $\\pi\\int_0^4 x^2\\,dx=\\pi[x^3/3]_0^4=\\pi\\cdot 64/3$.',
          hint2: '#1 check: cone $\\frac{1}{3}\\pi R^2 h=\\frac{1}{3}\\pi(16)(4)=\\frac{64}{3}\\pi$. ✓',
          hint3: '#2: $\\pi\\int_0^1 x^4\\,dx=\\pi[x^5/5]_0^1=\\frac{1}{5}\\pi$.',
          explanation: '1) $\\frac{64}{3}\\pi$ (matches cone $\\frac13\\pi R^2h$ with $R=h=4$).  2) $\\frac{1}{5}\\pi$.',
        },
      },
      {
        id: 'vdm7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The region under $y = f(x)$ on $[a, b]$ is rotated about the $x$-axis. The volume is:',
              options: ['$\\pi\\int_a^b [f(x)]^2\\,dx$', '$\\pi\\int_a^b f(x)\\,dx$', '$2\\pi\\int_a^b x\\,f(x)\\,dx$', '$\\int_a^b \\pi f(x)\\,dx$'],
              correctAnswer: 0,
              explanation: 'Each disk has volume $\\pi r^2\\,dx$ with $r=f(x)$. Summing gives $V=\\pi\\int_a^b[f(x)]^2\\,dx$. (The $2\\pi\\int x f\\,dx$ option is the shell method, a different topic.)',
            },
            {
              question: 'The region under $y = x^2$ on $[0, 1]$ is rotated about the line $y = -1$. The disk radius is:',
              options: ['$x^2 + 1$', '$x^2 - 1$', '$1 - x^2$', '$x^2$'],
              correctAnswer: 0,
              explanation: 'Radius = curve − axis = $x^2 - (-1) = x^2 + 1$. Subtracting $-1$ adds $1$.',
            },
            {
              question: 'Rotating $y = \\sqrt{x}$ on $[0, 2]$ about the $x$-axis gives a volume of:',
              options: ['$2\\pi$', '$4\\pi$', '$\\pi$', '$\\frac{4}{3}\\pi$'],
              correctAnswer: 0,
              explanation: '$V=\\pi\\int_0^2 (\\sqrt{x})^2\\,dx=\\pi\\int_0^2 x\\,dx=\\pi[x^2/2]_0^2=\\pi\\cdot 2=2\\pi$.',
            },
          ],
        },
      },
    ],
  },
]
