import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polar Coordinates and Graphs (AP Precalculus, Unit 3).
 * Registry key / DB Topic.slug: 'polar-coordinates'.
 * 7 parts, gold-standard structure: the polar plane & ordered pairs → non-uniqueness
 * and conversions → graphing r = f(θ) point-by-point → rates of change & where graphs
 * are far from / close to the pole → the curve library (circles, roses, cardioids,
 * limaçons) → symmetry & average rate of change → mixed practice + exit quiz.
 * Aligned to AP Precalculus skills 3.13–3.15. LaTeX uses doubled backslashes
 * (these are JS template-literal strings). Every coordinate, angle, and conversion
 * was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polar-coordinates',
    sections: [
      {
        id: 'pc1-intro',
        type: 'text' as const,
        content: `# 🧭 Polar Coordinates and Graphs

**Part 1 of 7 — Locating a Point with $(r, \\theta)$**

---

### Topics in This Part

| Section |
|---------|
| Rectangular vs. Polar Thinking |
| The Polar Plane: $r$ and $\\theta$ |
| Reading an Ordered Pair $(r, \\theta)$ |

> 🔑 **Key Concept:** In **rectangular** coordinates you reach a point by going *right then up*: $(x, y)$. In **polar** coordinates you reach it by *pointing in a direction, then walking out*: $(r, \\theta)$. The radius $r$ is the distance from the origin (the **pole**); the angle $\\theta$ is measured counterclockwise from the positive $x$-axis (the **polar axis**).`,
      },
      {
        id: 'pc1-plane',
        type: 'text' as const,
        content: `## The Polar Plane

A point's polar coordinates $(r, \\theta)$ answer two questions:

- **$r$ — how far?** the directed distance from the pole (origin).
- **$\\theta$ — which way?** the angle, measured counterclockwise from the positive $x$-axis.

### Plotting $(r, \\theta)$ when $r > 0$

1. Face along the polar axis (positive $x$-direction).
2. Rotate counterclockwise by $\\theta$.
3. Walk forward a distance $r$.

| Point | Direction | Distance | Lands near |
|-------|-----------|----------|------------|
| $\\left(3, \\dfrac{\\pi}{2}\\right)$ | straight up | $3$ | $(0, 3)$ |
| $\\left(2, \\pi\\right)$ | straight left | $2$ | $(-2, 0)$ |
| $\\left(4, 0\\right)$ | straight right | $4$ | $(4, 0)$ |
| $\\left(2, \\dfrac{\\pi}{4}\\right)$ | up-right $45^\\circ$ | $2$ | $(\\sqrt2,\\, \\sqrt2)$ |

> 💡 Angles in AP Precalculus are usually in **radians**: $\\dfrac{\\pi}{2} = 90^\\circ$, $\\pi = 180^\\circ$, $\\dfrac{3\\pi}{2} = 270^\\circ$, $2\\pi = 360^\\circ$.`,
      },
      {
        id: 'pc1-read-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the polar coordinate $(r, \\theta)$, what does $r$ represent?',
              options: [
                'The directed distance from the pole (origin)',
                'The angle measured from the positive $x$-axis',
                'The horizontal distance only',
                'The slope of the line to the point',
              ],
              correctAnswer: 0,
              explanation: '$r$ is the directed distance from the pole; $\\theta$ is the angle. They answer "how far?" and "which way?"',
            },
            {
              question: 'The point $\\left(3, \\dfrac{\\pi}{2}\\right)$ lands at which rectangular location?',
              options: ['$(0, 3)$', '$(3, 0)$', '$(0, -3)$', '$(-3, 0)$'],
              correctAnswer: 0,
              explanation: '$\\theta = \\dfrac{\\pi}{2}$ points straight up, and $r = 3$ walks out $3$ units, landing at $(0, 3)$.',
            },
          ],
        },
      },
      {
        id: 'pc1-angle-dd',
        type: 'dropdown-select' as const,
        content: `**Match the Angle** 🔽

Match each radian angle with the direction it points along the polar axis.`,
        exercise: {
          dropdowns: [
            { label: '$\\theta = 0$ points:', options: ['right (positive $x$)', 'up', 'left', 'down'] },
            { label: '$\\theta = \\dfrac{\\pi}{2}$ points:', options: ['up', 'right', 'left', 'down'] },
            { label: '$\\theta = \\pi$ points:', options: ['left', 'right', 'up', 'down'] },
            { label: '$\\theta = \\dfrac{3\\pi}{2}$ points:', options: ['down', 'up', 'left', 'right'] },
          ],
          correctAnswers: ['right (positive $x$)', 'up', 'left', 'down'],
          hint1: 'Angles are measured counterclockwise from the positive $x$-axis (the polar axis).',
          hint2: 'Each quarter turn is $\\dfrac{\\pi}{2}$: right → up → left → down.',
          hint3: '$0 \\to$ right, $\\dfrac{\\pi}{2} \\to$ up, $\\pi \\to$ left, $\\dfrac{3\\pi}{2} \\to$ down.',
          explanation: 'Counterclockwise from the polar axis: $0$ (right), $\\dfrac{\\pi}{2}$ (up), $\\pi$ (left), $\\dfrac{3\\pi}{2}$ (down).',
        },
      },
      {
        id: 'pc1-locate',
        type: 'text' as const,
        content: `## Reading the Grid

A polar grid is a set of **concentric circles** (constant $r$) crossed by **rays** from the pole (constant $\\theta$).

- A point on the circle $r = 2$ is exactly $2$ units from the pole, *somewhere*.
- A point on the ray $\\theta = \\dfrac{\\pi}{3}$ lies along that $60^\\circ$ direction, *at some distance*.
- Their intersection pins down the single point $\\left(2, \\dfrac{\\pi}{3}\\right)$.

> 🔑 **Key Idea:** "Circle picks the distance, ray picks the direction." Specifying both $r$ **and** $\\theta$ identifies a point — though, as Part 2 shows, that point has *many* polar names.`,
      },
      {
        id: 'pc1-which-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A point lies on the circle $r = 4$ and the ray $\\theta = \\pi$. Its polar coordinates are:',
              options: ['$(4, \\pi)$', '$(\\pi, 4)$', '$(4, 0)$', '$(-4, \\pi)$'],
              correctAnswer: 0,
              explanation: 'The circle gives $r = 4$ (distance) and the ray gives $\\theta = \\pi$ (direction): $(4, \\pi)$. Order is always $(r, \\theta)$.',
            },
            {
              question: 'Which statement about the polar grid is TRUE?',
              options: [
                'Concentric circles are constant-$r$; rays from the pole are constant-$\\theta$.',
                'Concentric circles are constant-$\\theta$; rays are constant-$r$.',
                'The grid is made of horizontal and vertical lines like Cartesian paper.',
                'Every point has exactly one polar name.',
              ],
              correctAnswer: 0,
              explanation: 'Circles fix the distance ($r$); rays fix the direction ($\\theta$). A point has many polar names (Part 2).',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polar-coordinates',
    sections: [
      {
        id: 'pc2-intro',
        type: 'text' as const,
        content: `# 🧭 Polar Coordinates and Graphs

**Part 2 of 7 — Non-Uniqueness & Negative $r$**

---

> 🔑 **The Twist:** Unlike rectangular coordinates, *one point has infinitely many polar names*. Adding $2\\pi$ to $\\theta$ returns to the same direction, and a **negative radius** points the opposite way.`,
      },
      {
        id: 'pc2-coterminal',
        type: 'text' as const,
        content: `## Same Point, Many Names

### 1. Add full turns to $\\theta$

Rotating an extra $2\\pi$ (or any multiple) lands in the same direction:

$$\\left(2, \\dfrac{\\pi}{6}\\right) = \\left(2, \\dfrac{\\pi}{6} + 2\\pi\\right) = \\left(2, \\dfrac{13\\pi}{6}\\right)$$

### 2. Negative radius: walk *backward*

A negative $r$ means: face direction $\\theta$, then walk **backward**. Equivalently, flip the direction by $\\pi$:

$$(-r,\\, \\theta) = (r,\\, \\theta + \\pi)$$

**Example:** $\\left(-2, \\dfrac{\\pi}{6}\\right)$ faces $30^\\circ$ but walks backward, ending up the same as $\\left(2, \\dfrac{\\pi}{6} + \\pi\\right) = \\left(2, \\dfrac{7\\pi}{6}\\right)$.

| Name | Same point as |
|------|---------------|
| $\\left(3, \\dfrac{\\pi}{4}\\right)$ | $\\left(3, \\dfrac{9\\pi}{4}\\right)$, $\\;\\left(-3, \\dfrac{5\\pi}{4}\\right)$ |
| $\\left(2, \\pi\\right)$ | $\\left(-2, 0\\right)$, $\\;\\left(2, 3\\pi\\right)$ |

> ⚠️ **Watch out:** $(-r, \\theta)$ is *not* the reflection of $(r,\\theta)$ across the $x$-axis. It is the point directly **opposite** through the pole — add $\\pi$ to the angle.`,
      },
      {
        id: 'pc2-names-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which polar coordinate names the SAME point as $\\left(2, \\dfrac{\\pi}{3}\\right)$?',
              options: [
                '$\\left(-2, \\dfrac{4\\pi}{3}\\right)$',
                '$\\left(-2, \\dfrac{\\pi}{3}\\right)$',
                '$\\left(2, \\dfrac{2\\pi}{3}\\right)$',
                '$\\left(2, -\\dfrac{\\pi}{3}\\right)$',
              ],
              correctAnswer: 0,
              explanation: 'Use $(-r, \\theta) = (r, \\theta + \\pi)$. So $\\left(-2, \\dfrac{4\\pi}{3}\\right) = \\left(2, \\dfrac{4\\pi}{3} + \\pi\\right) = \\left(2, \\dfrac{7\\pi}{3}\\right) = \\left(2, \\dfrac{\\pi}{3}\\right)$ after subtracting $2\\pi$. ✓',
            },
            {
              question: 'Which name with $r > 0$ and $0 \\le \\theta < 2\\pi$ matches the point $\\left(-4, \\dfrac{\\pi}{2}\\right)$?',
              options: [
                '$\\left(4, \\dfrac{3\\pi}{2}\\right)$',
                '$\\left(4, \\dfrac{\\pi}{2}\\right)$',
                '$\\left(4, \\pi\\right)$',
                '$\\left(4, 0\\right)$',
              ],
              correctAnswer: 0,
              explanation: '$(-4, \\frac{\\pi}{2}) = (4, \\frac{\\pi}{2} + \\pi) = (4, \\frac{3\\pi}{2})$ — straight down, $4$ units from the pole. The other names point up, left, and right respectively.',
            },
          ],
        },
      },
      {
        id: 'pc2-pole',
        type: 'text' as const,
        content: `## The Pole Itself

The pole (origin) is special: $r = 0$ regardless of the angle.

$$(0, \\theta) = (0, 0) = (0, \\pi) = (0, \\text{anything})$$

When you have $r = 0$ at some angle, the graph passes **through the pole** there — a fact we'll use to find where polar curves touch the origin.

> 💡 **Convention for naming a point:** AP problems often ask for the name with $r > 0$ and $0 \\le \\theta < 2\\pi$. To get there: if $r < 0$, replace $(r, \\theta)$ with $(|r|, \\theta + \\pi)$; then add/subtract $2\\pi$ until $\\theta$ is in $[0, 2\\pi)$.`,
      },
      {
        id: 'pc2-standardize',
        type: 'dropdown-select' as const,
        content: `**Standardize the Name** 🔽

Rewrite each point with $r > 0$ and $0 \\le \\theta < 2\\pi$.`,
        exercise: {
          dropdowns: [
            { label: '$\\left(-3, \\dfrac{\\pi}{4}\\right) = $', options: ['$\\left(3, \\dfrac{5\\pi}{4}\\right)$', '$\\left(3, \\dfrac{\\pi}{4}\\right)$', '$\\left(3, \\dfrac{7\\pi}{4}\\right)$', '$\\left(-3, \\dfrac{5\\pi}{4}\\right)$'] },
            { label: '$\\left(2, -\\dfrac{\\pi}{3}\\right) = $', options: ['$\\left(2, \\dfrac{5\\pi}{3}\\right)$', '$\\left(2, \\dfrac{\\pi}{3}\\right)$', '$\\left(2, \\dfrac{2\\pi}{3}\\right)$', '$\\left(2, \\dfrac{4\\pi}{3}\\right)$'] },
            { label: '$\\left(-1, \\dfrac{3\\pi}{2}\\right) = $', options: ['$\\left(1, \\dfrac{\\pi}{2}\\right)$', '$\\left(1, \\dfrac{3\\pi}{2}\\right)$', '$\\left(1, \\dfrac{5\\pi}{2}\\right)$', '$\\left(1, \\pi\\right)$'] },
          ],
          correctAnswers: ['$\\left(3, \\dfrac{5\\pi}{4}\\right)$', '$\\left(2, \\dfrac{5\\pi}{3}\\right)$', '$\\left(1, \\dfrac{\\pi}{2}\\right)$'],
          hint1: 'For $r < 0$: take $|r|$ and add $\\pi$ to the angle.',
          hint2: 'For a negative angle: add $2\\pi$ until $\\theta \\in [0, 2\\pi)$.',
          hint3: '$\\left(-3, \\frac{\\pi}{4}\\right) \\to \\left(3, \\frac{\\pi}{4} + \\pi\\right) = \\left(3, \\frac{5\\pi}{4}\\right)$. $\\;\\left(-1, \\frac{3\\pi}{2}\\right) \\to \\left(1, \\frac{3\\pi}{2} + \\pi\\right) = \\left(1, \\frac{5\\pi}{2}\\right) = \\left(1, \\frac{\\pi}{2}\\right)$.',
          explanation: 'Flip sign of $r$ by adding $\\pi$; fix the angle into $[0, 2\\pi)$ by adding $2\\pi$ as needed.',
        },
      },
      {
        id: 'pc2-howmany-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many distinct polar coordinate pairs name a single point (other than the pole)?',
              options: ['Infinitely many', 'Exactly one', 'Exactly two', 'Exactly four'],
              correctAnswer: 0,
              explanation: 'You can add any multiple of $2\\pi$ to $\\theta$, and you can use $\\pm r$ — infinitely many names.',
            },
            {
              question: 'At the pole, the radius is $r = 0$. What can we say about $\\theta$?',
              options: [
                '$\\theta$ can be anything — the pole has every angle',
                '$\\theta$ must be $0$',
                '$\\theta$ is undefined and the point does not exist',
                '$\\theta$ must be $\\pi$',
              ],
              correctAnswer: 0,
              explanation: 'When $r = 0$ you are at the origin no matter the direction you faced, so any $\\theta$ works.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polar-coordinates',
    sections: [
      {
        id: 'pc3-intro',
        type: 'text' as const,
        content: `# 🧭 Polar Coordinates and Graphs

**Part 3 of 7 — Converting Between Polar and Rectangular**

---

> 🔑 **The Bridge:** A right triangle with hypotenuse $r$ and angle $\\theta$ connects the two systems. Memorize these four relationships and you can move freely between $(r,\\theta)$ and $(x,y)$.`,
      },
      {
        id: 'pc3-formulas',
        type: 'text' as const,
        content: `## The Conversion Formulas

Drop a perpendicular from the point to the $x$-axis. The legs are $x$ and $y$, the hypotenuse is $r$, and the angle at the origin is $\\theta$.

### Polar → Rectangular

$$x = r\\cos\\theta \\qquad y = r\\sin\\theta$$

### Rectangular → Polar

$$r = \\sqrt{x^2 + y^2} \\qquad \\tan\\theta = \\dfrac{y}{x}$$

> ⚠️ **Quadrant check:** $\\tan\\theta = \\dfrac{y}{x}$ alone can't tell quadrant II from IV (both give the same ratio sign issues). Always look at the **signs of $x$ and $y$** and place $\\theta$ in the correct quadrant.

### Worked Example: $\\left(4, \\dfrac{\\pi}{3}\\right) \\to$ rectangular

$$x = 4\\cos\\dfrac{\\pi}{3} = 4\\cdot\\dfrac{1}{2} = 2$$
$$y = 4\\sin\\dfrac{\\pi}{3} = 4\\cdot\\dfrac{\\sqrt3}{2} = 2\\sqrt3$$

So $\\left(4, \\dfrac{\\pi}{3}\\right) = \\left(2,\\, 2\\sqrt3\\right)$.`,
      },
      {
        id: 'pc3-p2r-drill',
        type: 'input-boxes' as const,
        content: `**Polar → Rectangular** 🧮

Convert each point. Use $x = r\\cos\\theta$, $y = r\\sin\\theta$. Enter exact values (e.g. \`-2\`, \`0\`, or a decimal).

**1)** $\\left(6, \\dfrac{\\pi}{2}\\right)$:  $x = \\,?$
**2)** Same point: $y = \\,?$
**3)** $\\left(2, \\pi\\right)$:  $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '6', '-2'],
          hint1: '$\\cos\\frac{\\pi}{2} = 0$ and $\\sin\\frac{\\pi}{2} = 1$.',
          hint2: '$x = 6\\cos\\frac{\\pi}{2} = 6\\cdot 0 = 0$; $\\;y = 6\\sin\\frac{\\pi}{2} = 6\\cdot 1 = 6$.',
          hint3: 'For $(2,\\pi)$: $x = 2\\cos\\pi = 2(-1) = -2$.',
          explanation: '1) $x = 0$.  2) $y = 6$, so $\\left(6, \\frac{\\pi}{2}\\right) = (0, 6)$.  3) $x = 2\\cos\\pi = -2$, so $(2,\\pi) = (-2, 0)$.',
        },
      },
      {
        id: 'pc3-r2p',
        type: 'text' as const,
        content: `## Rectangular → Polar: Worked Example

Convert $(-1, \\sqrt3)$ to polar with $r > 0$, $0 \\le \\theta < 2\\pi$.

**Step 1 — find $r$:**
$$r = \\sqrt{(-1)^2 + (\\sqrt3)^2} = \\sqrt{1 + 3} = \\sqrt4 = 2$$

**Step 2 — find the reference angle:**
$$\\tan\\theta = \\dfrac{y}{x} = \\dfrac{\\sqrt3}{-1} = -\\sqrt3 \\;\\Rightarrow\\; \\text{reference } \\dfrac{\\pi}{3}$$

**Step 3 — pick the quadrant:** $x < 0$, $y > 0$ ⟹ **Quadrant II**, so
$$\\theta = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$$

**Answer:** $(-1, \\sqrt3) = \\left(2, \\dfrac{2\\pi}{3}\\right)$.

> 💡 The calculator's $\\arctan$ only returns angles in $\\left(-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)$. Use the quadrant of $(x,y)$ to add $\\pi$ (Q II / Q III) when needed.`,
      },
      {
        id: 'pc3-convert-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $(0, -5)$ to polar with $r > 0$, $0 \\le \\theta < 2\\pi$.',
              options: [
                '$\\left(5, \\dfrac{3\\pi}{2}\\right)$',
                '$\\left(5, \\dfrac{\\pi}{2}\\right)$',
                '$\\left(-5, \\dfrac{\\pi}{2}\\right)$',
                '$\\left(5, \\pi\\right)$',
              ],
              correctAnswer: 0,
              explanation: '$r = \\sqrt{0 + 25} = 5$. The point is straight down, which is $\\theta = \\frac{3\\pi}{2}$. So $\\left(5, \\frac{3\\pi}{2}\\right)$.',
            },
            {
              question: 'Convert $(-3, -3)$ to polar with $r > 0$, $0 \\le \\theta < 2\\pi$.',
              options: [
                '$\\left(3\\sqrt2, \\dfrac{5\\pi}{4}\\right)$',
                '$\\left(3\\sqrt2, \\dfrac{\\pi}{4}\\right)$',
                '$\\left(3\\sqrt2, \\dfrac{3\\pi}{4}\\right)$',
                '$\\left(6, \\dfrac{5\\pi}{4}\\right)$',
              ],
              correctAnswer: 0,
              explanation: '$r = \\sqrt{9+9} = \\sqrt{18} = 3\\sqrt2$. Both coordinates negative ⟹ Quadrant III; reference angle $\\frac{\\pi}{4}$ gives $\\theta = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}$.',
            },
          ],
        },
      },
      {
        id: 'pc3-r2p-drill',
        type: 'input-boxes' as const,
        content: `**Rectangular → Polar** 🧮

Find $r$ (with $r > 0$) for each point. Enter exact values; use \`sqrt\` style decimals are fine (e.g. \`2.83\`) but exact integers are preferred.

**1)** $(3, 4)$:  $r = \\,?$
**2)** $(0, 7)$:  $r = \\,?$
**3)** $(-5, 12)$:  $r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '7', '13'],
          hint1: '$r = \\sqrt{x^2 + y^2}$.',
          hint2: '$(3,4)$ is the classic $3$-$4$-$5$ triangle: $r = \\sqrt{9+16} = \\sqrt{25} = 5$.',
          hint3: '$(-5,12)$: $r = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
          explanation: '1) $r = \\sqrt{25} = 5$.  2) $r = \\sqrt{49} = 7$.  3) $r = \\sqrt{169} = 13$. (All Pythagorean triples!)',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polar-coordinates',
    sections: [
      {
        id: 'pc4-intro',
        type: 'text' as const,
        content: `# 🧭 Polar Coordinates and Graphs

**Part 4 of 7 — Graphing $r = f(\\theta)$ Point by Point**

---

> 🔑 **The Core Skill:** A **polar function** $r = f(\\theta)$ assigns a radius to each angle. To graph it, sweep $\\theta$ around, compute $r$ at each angle, plot the points, and connect them smoothly.`,
      },
      {
        id: 'pc4-method',
        type: 'text' as const,
        content: `## Building a Table

To graph $r = f(\\theta)$:

1. Choose convenient angles ($0, \\dfrac{\\pi}{6}, \\dfrac{\\pi}{4}, \\dfrac{\\pi}{3}, \\dfrac{\\pi}{2}, \\dots$).
2. Compute $r = f(\\theta)$ for each.
3. Plot each $(r, \\theta)$ — remember a **negative** $r$ reflects across the pole.
4. Connect in order of increasing $\\theta$.

### Worked Example: $r = 4\\cos\\theta$

| $\\theta$ | $\\cos\\theta$ | $r = 4\\cos\\theta$ |
|-----------|---------------|---------------------|
| $0$ | $1$ | $4$ |
| $\\dfrac{\\pi}{3}$ | $\\dfrac{1}{2}$ | $2$ |
| $\\dfrac{\\pi}{2}$ | $0$ | $0$ |
| $\\dfrac{2\\pi}{3}$ | $-\\dfrac{1}{2}$ | $-2$ |
| $\\pi$ | $-1$ | $-4$ |

This traces a **circle of radius $2$** centered at $(2, 0)$. (At $\\theta = \\pi$, $r = -4$ lands back on the right side — the negatives retrace the same circle.)

> 💡 $r = a\\cos\\theta$ is a circle of diameter $a$ sitting on the $x$-axis; $r = a\\sin\\theta$ is a circle of diameter $a$ on the $y$-axis.`,
      },
      {
        id: 'pc4-table-drill',
        type: 'input-boxes' as const,
        content: `**Fill the Table** 🧮

For $r = 2 + 2\\cos\\theta$ (a cardioid), compute $r$ at each angle.

**1)** $\\theta = 0$:  $r = \\,?$
**2)** $\\theta = \\dfrac{\\pi}{2}$:  $r = \\,?$
**3)** $\\theta = \\pi$:  $r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '0'],
          hint1: '$\\cos 0 = 1$, $\\;\\cos\\frac{\\pi}{2} = 0$, $\\;\\cos\\pi = -1$.',
          hint2: 'At $\\theta = 0$: $r = 2 + 2(1) = 4$.',
          hint3: 'At $\\theta = \\pi$: $r = 2 + 2(-1) = 0$ — the curve reaches the pole.',
          explanation: '1) $r = 2 + 2(1) = 4$.  2) $r = 2 + 2(0) = 2$.  3) $r = 2 + 2(-1) = 0$. The $r = 0$ at $\\theta = \\pi$ is the dimple (cusp) of the cardioid.',
        },
      },
      {
        id: 'pc4-negative',
        type: 'text' as const,
        content: `## Plotting Negative $r$

When $f(\\theta) < 0$, plot the point **opposite** the angle (across the pole). This is exactly the rule $(-r, \\theta) = (r, \\theta + \\pi)$.

### Example: $r = 3\\cos(2\\theta)$ at $\\theta = \\dfrac{\\pi}{2}$

$$r = 3\\cos\\!\\left(2\\cdot\\dfrac{\\pi}{2}\\right) = 3\\cos(\\pi) = -3$$

Facing $\\dfrac{\\pi}{2}$ (up) with $r = -3$ plots the point **down**, at $\\left(3, \\dfrac{3\\pi}{2}\\right)$. Negative radii are how rose curves form petals on the "opposite" side.

> ⚠️ Don't skip negative $r$ values — they are real points on the graph, just plotted in the opposite direction.`,
      },
      {
        id: 'pc4-graph-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $r = 4\\sin\\theta$, what is $r$ when $\\theta = \\dfrac{\\pi}{2}$, and what curve is this?',
              options: [
                '$r = 4$; a circle on the $y$-axis (through the pole and $(0,4)$)',
                '$r = 0$; a circle on the $x$-axis',
                '$r = 4$; a cardioid',
                '$r = -4$; a line',
              ],
              correctAnswer: 0,
              explanation: '$\\sin\\frac{\\pi}{2} = 1$ so $r = 4$. $r = a\\sin\\theta$ is a circle of diameter $a = 4$ sitting on the $y$-axis.',
            },
            {
              question: 'While graphing $r = f(\\theta)$, you compute $r = -2$ at $\\theta = \\dfrac{\\pi}{4}$. Where do you plot it?',
              options: [
                'At $\\left(2, \\dfrac{5\\pi}{4}\\right)$ — opposite direction, across the pole',
                'At $\\left(2, \\dfrac{\\pi}{4}\\right)$ — same direction, distance $2$',
                'You skip it because $r$ cannot be negative',
                'At $\\left(-2, \\dfrac{3\\pi}{4}\\right)$',
              ],
              correctAnswer: 0,
              explanation: '$(-2, \\frac{\\pi}{4}) = (2, \\frac{\\pi}{4} + \\pi) = (2, \\frac{5\\pi}{4})$ — flip the direction by adding $\\pi$.',
            },
          ],
        },
      },
      {
        id: 'pc4-circle-dd',
        type: 'dropdown-select' as const,
        content: `**Identify the Circle** 🔽

Match each polar equation to its circle.`,
        exercise: {
          dropdowns: [
            { label: '$r = 6\\cos\\theta$ is a circle of diameter:', options: ['$6$, on the $x$-axis', '$3$, on the $x$-axis', '$6$, on the $y$-axis', '$12$, on the $x$-axis'] },
            { label: '$r = 2\\sin\\theta$ is a circle of diameter:', options: ['$2$, on the $y$-axis', '$2$, on the $x$-axis', '$4$, on the $y$-axis', '$1$, on the $y$-axis'] },
            { label: '$r = 5$ (constant) is:', options: ['a circle of radius $5$ centered at the pole', 'a circle of diameter $5$ on the $x$-axis', 'a line through the pole', 'a single point'] },
          ],
          correctAnswers: ['$6$, on the $x$-axis', '$2$, on the $y$-axis', 'a circle of radius $5$ centered at the pole'],
          hint1: '$r = a\\cos\\theta$ → diameter $a$ on the $x$-axis; $r = a\\sin\\theta$ → diameter $a$ on the $y$-axis.',
          hint2: 'A constant $r = k$ means "always distance $k$ from the pole" — a circle centered at the origin.',
          hint3: '$r = 6\\cos\\theta$ has $a = 6$ (x-axis); $r = 2\\sin\\theta$ has $a = 2$ (y-axis); $r = 5$ is centered at the pole.',
          explanation: 'Cosine circles hug the $x$-axis, sine circles the $y$-axis, and a constant $r$ is a pole-centered circle.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polar-coordinates',
    sections: [
      {
        id: 'pc5-intro',
        type: 'text' as const,
        content: `# 🧭 Polar Coordinates and Graphs

**Part 5 of 7 — The Curve Library: Roses, Cardioids & Limaçons**

---

> 🔑 **Pattern Recognition:** AP Precalculus expects you to recognize a polar graph from its equation. This part is your field guide to the four families that show up again and again.`,
      },
      {
        id: 'pc5-library',
        type: 'text' as const,
        content: `## The Standard Families

| Equation form | Curve | Quick facts |
|---------------|-------|-------------|
| $r = a$ | **Circle** (pole-centered) | radius $a$ |
| $r = a\\cos\\theta$ or $a\\sin\\theta$ | **Circle** (off-center) | diameter $a$ |
| $r = a \\pm a\\cos\\theta$ | **Cardioid** | heart shape; reaches pole once |
| $r = a \\pm b\\cos\\theta$ | **Limaçon** | inner loop if $a < b$; dimple if $a < b < 2a$ |
| $r = a\\cos(n\\theta)$ or $a\\sin(n\\theta)$ | **Rose** | petals! |

### Counting Rose Petals

For $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$:

- If $n$ is **odd** → the rose has **$n$ petals**.
- If $n$ is **even** → the rose has **$2n$ petals**.

| Equation | $n$ | Petals |
|----------|-----|--------|
| $r = 3\\cos(3\\theta)$ | $3$ (odd) | $3$ |
| $r = 2\\sin(2\\theta)$ | $2$ (even) | $4$ |
| $r = 4\\cos(5\\theta)$ | $5$ (odd) | $5$ |
| $r = \\cos(4\\theta)$ | $4$ (even) | $8$ |

> 💡 The petal **length** is $|a|$ — the maximum value of $|r|$.`,
      },
      {
        id: 'pc5-petals-drill',
        type: 'input-boxes' as const,
        content: `**Count the Petals** 🧮

Use the odd/even rule. Enter the number of petals.

**1)** $r = 5\\sin(3\\theta)$:  petals $= \\,?$
**2)** $r = 2\\cos(4\\theta)$:  petals $= \\,?$
**3)** $r = \\sin(6\\theta)$:  petals $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '8', '12'],
          hint1: 'Odd $n$ → $n$ petals. Even $n$ → $2n$ petals.',
          hint2: '$n = 3$ is odd ⟹ $3$ petals. $n = 4$ is even ⟹ $2(4) = 8$.',
          hint3: '$n = 6$ is even ⟹ $2(6) = 12$ petals.',
          explanation: '1) $n=3$ odd → $3$.  2) $n=4$ even → $8$.  3) $n=6$ even → $12$.',
        },
      },
      {
        id: 'pc5-limacon',
        type: 'text' as const,
        content: `## Cardioids vs. Limaçons

Both come from $r = a \\pm b\\cos\\theta$ (or $\\sin$). The relationship between $a$ and $b$ decides the shape:

| Condition | Shape |
|-----------|-------|
| $a = b$ | **Cardioid** (heart; cusp at the pole) |
| $a < b$ | **Limaçon with an inner loop** |
| $b < a < 2b$ | **Limaçon with a dimple** (no loop) |
| $a \\ge 2b$ | **Convex limaçon** (no dimple) |

State the dimple rule cleanly using the ratio $\\dfrac{a}{b}$:

- $\\dfrac{a}{b} = 1$ → cardioid
- $\\dfrac{a}{b} < 1$ → inner loop
- $1 < \\dfrac{a}{b} < 2$ → dimpled
- $\\dfrac{a}{b} \\ge 2$ → convex (no dimple)

### Example: $r = 2 + 3\\cos\\theta$

Here $a = 2$, $b = 3$, so $\\dfrac{a}{b} = \\dfrac{2}{3} < 1$ → **limaçon with an inner loop**. The loop appears where $r$ goes negative.

> ⚠️ A **cardioid** is the special limaçon with $a = b$. Every cardioid is a limaçon, but not every limaçon is a cardioid.`,
      },
      {
        id: 'pc5-classify-dd',
        type: 'dropdown-select' as const,
        content: `**Classify the Curve** 🔽

Use the ratio $\\dfrac{a}{b}$ (for $r = a \\pm b\\cos\\theta$ or $\\sin$).`,
        exercise: {
          dropdowns: [
            { label: '$r = 3 + 3\\sin\\theta$', options: ['cardioid', 'limaçon with inner loop', 'dimpled limaçon', 'rose'] },
            { label: '$r = 1 + 4\\cos\\theta$', options: ['limaçon with inner loop', 'cardioid', 'convex limaçon', 'rose'] },
            { label: '$r = 5 + 3\\cos\\theta$', options: ['dimpled limaçon', 'cardioid', 'inner loop', 'rose'] },
            { label: '$r = 2\\cos(3\\theta)$', options: ['rose (3 petals)', 'rose (6 petals)', 'cardioid', 'circle'] },
          ],
          correctAnswers: ['cardioid', 'limaçon with inner loop', 'dimpled limaçon', 'rose (3 petals)'],
          hint1: 'Cardioid when $a = b$; inner loop when $a < b$; dimple when $1 < a/b < 2$.',
          hint2: '$3+3\\sin$: $a/b = 1$ → cardioid. $1 + 4\\cos$: $a/b = 1/4 < 1$ → inner loop.',
          hint3: '$5 + 3\\cos$: $a/b = 5/3 \\approx 1.67$, between $1$ and $2$ → dimpled. $2\\cos(3\\theta)$: $n = 3$ odd → $3$-petal rose.',
          explanation: 'Ratio test: $1$ → cardioid, $<1$ → inner loop, $1$–$2$ → dimple. $\\cos(3\\theta)$ is an odd-$n$ rose with $3$ petals.',
        },
      },
      {
        id: 'pc5-which-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation produces a rose with exactly 4 petals?',
              options: [
                '$r = 3\\sin(2\\theta)$',
                '$r = 3\\sin(4\\theta)$',
                '$r = 3\\sin(3\\theta)$',
                '$r = 3 + 3\\sin\\theta$',
              ],
              correctAnswer: 0,
              explanation: '$n = 2$ is even, so the rose has $2n = 4$ petals. ($n=4$ gives $8$; $n=3$ gives $3$; the last is a cardioid.)',
            },
            {
              question: 'The graph of $r = 4 + 4\\cos\\theta$ is best described as a:',
              options: [
                'Cardioid that reaches the pole at $\\theta = \\pi$',
                'Limaçon with an inner loop',
                'Four-petal rose',
                'Circle centered at the pole',
              ],
              correctAnswer: 0,
              explanation: '$a = b = 4$ ⟹ cardioid. At $\\theta = \\pi$, $r = 4 + 4(-1) = 0$, so it touches the pole there.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'polar-coordinates',
    sections: [
      {
        id: 'pc6-intro',
        type: 'text' as const,
        content: `# 🧭 Polar Coordinates and Graphs

**Part 6 of 7 — Rates of Change, Symmetry & Distance from the Pole**

---

> 🔑 **AP Focus (Skill 3.15):** Beyond drawing the curve, AP Precalculus asks you to *reason* about $r$ as $\\theta$ changes: where is the graph getting **farther from** or **closer to** the pole, where is it **maximally far**, and what does the **average rate of change of $r$** tell you?`,
      },
      {
        id: 'pc6-rates',
        type: 'text' as const,
        content: `## Increasing / Decreasing Distance from the Pole

For a polar function $r = f(\\theta)$, the value $|r|$ is the **distance from the pole**.

- As $\\theta$ increases, if $r$ is **increasing** (and positive), the curve spirals **outward** — farther from the pole.
- If $r$ is **decreasing** (and positive), the curve moves **inward** — closer to the pole.

### Example: $r = 1 + 2\\cos\\theta$ on $\\left[0, \\pi\\right]$

| $\\theta$ | $r = 1 + 2\\cos\\theta$ |
|-----------|-------------------------|
| $0$ | $3$ |
| $\\dfrac{\\pi}{2}$ | $1$ |
| $\\pi$ | $-1$ |

From $\\theta = 0$ to $\\theta = \\dfrac{\\pi}{2}$, $r$ drops from $3$ to $1$: the point is moving **toward** the pole. Maximum distance $|r| = 3$ occurs at $\\theta = 0$.

> 💡 **Maximum distance** from the pole happens where $|r|$ is largest. For $r = a + b\\cos\\theta$ with $a, b > 0$, that's at $\\theta = 0$ (cosine $= 1$), giving $r = a + b$.`,
      },
      {
        id: 'pc6-aroc-drill',
        type: 'input-boxes' as const,
        content: `**Average Rate of Change of $r$** 🧮

The average rate of change of $r$ over $[\\theta_1, \\theta_2]$ is $\\dfrac{f(\\theta_2) - f(\\theta_1)}{\\theta_2 - \\theta_1}$.

For $r = 1 + 2\\cos\\theta$ (from the table above):

**1)** $r$ at $\\theta = 0$ is $\\,?$
**2)** $r$ at $\\theta = \\dfrac{\\pi}{2}$ is $\\,?$
**3)** Over $\\left[0, \\dfrac{\\pi}{2}\\right]$, is the average rate of change positive or negative? Enter \`positive\` or \`negative\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '1', 'negative'],
          hint1: '$\\cos 0 = 1$ and $\\cos\\frac{\\pi}{2} = 0$.',
          hint2: '$r(0) = 1 + 2(1) = 3$; $\\;r(\\frac{\\pi}{2}) = 1 + 2(0) = 1$.',
          hint3: 'Since $r$ drops from $3$ to $1$, the change $f(\\theta_2) - f(\\theta_1) = 1 - 3 = -2 < 0$, so the average rate is negative.',
          explanation: '1) $r = 3$.  2) $r = 1$.  3) $\\frac{1 - 3}{\\pi/2 - 0} = \\frac{-2}{\\pi/2} < 0$ → negative. $r$ is decreasing, so the curve moves toward the pole.',
        },
      },
      {
        id: 'pc6-symmetry',
        type: 'text' as const,
        content: `## Symmetry Tests

Symmetry cuts your plotting work in half. Test a polar equation by substituting:

| Symmetry about | Test substitution | If equation is unchanged ⟹ symmetric |
|----------------|-------------------|----------------------------------------|
| **Polar axis** ($x$-axis) | $\\theta \\to -\\theta$ | yes |
| **Line $\\theta = \\dfrac{\\pi}{2}$** ($y$-axis) | $\\theta \\to \\pi - \\theta$ | yes |
| **Pole** (origin) | $r \\to -r$ (or $\\theta \\to \\theta + \\pi$) | yes |

### Example: $r = 4\\cos\\theta$

Replace $\\theta \\to -\\theta$: $r = 4\\cos(-\\theta) = 4\\cos\\theta$ (cosine is even) — **unchanged**, so it's symmetric about the **polar axis**. ✓

### Example: $r = 4\\sin\\theta$

Replace $\\theta \\to \\pi - \\theta$: $r = 4\\sin(\\pi - \\theta) = 4\\sin\\theta$ — **unchanged**, so it's symmetric about the **line $\\theta = \\dfrac{\\pi}{2}$**. ✓

> ⚠️ These are *sufficient* tests, not *necessary* ones: a graph can be symmetric even if a test fails (because of polar non-uniqueness). A passing test guarantees symmetry; a failing test is inconclusive.`,
      },
      {
        id: 'pc6-sym-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which substitution tests for symmetry about the polar axis (the $x$-axis)?',
              options: [
                'Replace $\\theta$ with $-\\theta$',
                'Replace $\\theta$ with $\\pi - \\theta$',
                'Replace $r$ with $-r$',
                'Replace $\\theta$ with $\\theta + \\dfrac{\\pi}{2}$',
              ],
              correctAnswer: 0,
              explanation: 'Reflecting across the $x$-axis negates the angle: $\\theta \\to -\\theta$. If the equation survives, the graph is polar-axis symmetric.',
            },
            {
              question: 'For $r = 2 + 2\\cos\\theta$ on $[0, \\pi]$, where is the curve FARTHEST from the pole?',
              options: [
                'At $\\theta = 0$, where $r = 4$',
                'At $\\theta = \\pi$, where $r = 0$',
                'At $\\theta = \\dfrac{\\pi}{2}$, where $r = 2$',
                'It is the same distance everywhere',
              ],
              correctAnswer: 0,
              explanation: 'Distance is $|r|$. The maximum of $2 + 2\\cos\\theta$ is at $\\theta = 0$ ($\\cos = 1$), giving $r = 4$ — the farthest point.',
            },
          ],
        },
      },
      {
        id: 'pc6-pole-dd',
        type: 'dropdown-select' as const,
        content: `**Through the Pole** 🔽

A polar curve passes through the pole at any $\\theta$ where $r = 0$. Find those angles on $[0, 2\\pi)$.`,
        exercise: {
          dropdowns: [
            { label: '$r = 2\\cos\\theta = 0$ when $\\theta = $', options: ['$\\dfrac{\\pi}{2}$ and $\\dfrac{3\\pi}{2}$', '$0$ and $\\pi$', '$\\dfrac{\\pi}{4}$', 'never'] },
            { label: '$r = 1 + \\cos\\theta = 0$ when $\\theta = $', options: ['$\\pi$', '$0$', '$\\dfrac{\\pi}{2}$', 'never'] },
            { label: '$r = \\sin(2\\theta) = 0$ when $\\theta = $', options: ['$0, \\dfrac{\\pi}{2}, \\pi, \\dfrac{3\\pi}{2}$', 'only $0$', '$\\dfrac{\\pi}{4}$', 'never'] },
          ],
          correctAnswers: ['$\\dfrac{\\pi}{2}$ and $\\dfrac{3\\pi}{2}$', '$\\pi$', '$0, \\dfrac{\\pi}{2}, \\pi, \\dfrac{3\\pi}{2}$'],
          hint1: 'Set $r = 0$ and solve the trig equation on $[0, 2\\pi)$.',
          hint2: '$\\cos\\theta = 0$ at $\\frac{\\pi}{2}, \\frac{3\\pi}{2}$; $\\;1 + \\cos\\theta = 0$ means $\\cos\\theta = -1$, i.e. $\\theta = \\pi$.',
          hint3: '$\\sin(2\\theta) = 0$ when $2\\theta = 0, \\pi, 2\\pi, 3\\pi$, so $\\theta = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$.',
          explanation: 'Solving $r = 0$ finds every angle where the curve touches the origin — useful for sketching petals and cusps.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'polar-coordinates',
    sections: [
      {
        id: 'pc7-intro',
        type: 'text' as const,
        content: `# 🧭 Polar Coordinates and Graphs

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) plot and name points in $(r, \\theta)$, (2) handle negative $r$ and non-uniqueness, (3) convert both directions, (4) graph $r = f(\\theta)$, (5) recognize the curve library, and (6) reason about rates, symmetry, and distance from the pole. Let's put it all together.`,
      },
      {
        id: 'pc7-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Task | Key move |
|------|----------|
| Plot $(r, \\theta)$ | rotate $\\theta$, walk $r$ (backward if $r < 0$) |
| Negative radius | $(-r, \\theta) = (r, \\theta + \\pi)$ |
| Polar → rectangular | $x = r\\cos\\theta,\\; y = r\\sin\\theta$ |
| Rectangular → polar | $r = \\sqrt{x^2+y^2},\\; \\tan\\theta = \\dfrac{y}{x}$ (+ quadrant) |
| Rose petals | odd $n$: $n$; even $n$: $2n$ |
| Cardioid vs. limaçon | $a = b$ cardioid; $a < b$ loop; $1 < \\frac{a}{b} < 2$ dimple |
| Circle $r = a\\cos\\theta$ | diameter $a$ on $x$-axis |
| Farthest from pole | where $|r|$ is largest |

> ⚠️ Remember the quadrant check on rectangular → polar, and don't drop negative $r$ values when graphing.`,
      },
      {
        id: 'pc7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $\\left(2, \\dfrac{5\\pi}{6}\\right)$ to rectangular coordinates.',
              options: [
                '$\\left(-\\sqrt3,\\; 1\\right)$',
                '$\\left(\\sqrt3,\\; 1\\right)$',
                '$\\left(-1,\\; \\sqrt3\\right)$',
                '$\\left(1,\\; -\\sqrt3\\right)$',
              ],
              correctAnswer: 0,
              explanation: '$x = 2\\cos\\frac{5\\pi}{6} = 2\\left(-\\frac{\\sqrt3}{2}\\right) = -\\sqrt3$; $\\;y = 2\\sin\\frac{5\\pi}{6} = 2\\left(\\frac{1}{2}\\right) = 1$.',
            },
            {
              question: 'How many petals does $r = 6\\cos(4\\theta)$ have, and how long is each?',
              options: [
                '$8$ petals, each length $6$',
                '$4$ petals, each length $6$',
                '$8$ petals, each length $4$',
                '$16$ petals, each length $6$',
              ],
              correctAnswer: 0,
              explanation: '$n = 4$ is even ⟹ $2n = 8$ petals. Petal length $= |a| = 6$.',
            },
          ],
        },
      },
      {
        id: 'pc7-convert-drill',
        type: 'input-boxes' as const,
        content: `**One More Conversion** 🧮

Convert $\\left(8, \\dfrac{\\pi}{6}\\right)$ to rectangular coordinates. (Recall $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt3}{2}$, $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$.)

**1)** $x = \\,?$  *(enter as a decimal, e.g. \`6.93\`, or \`4*sqrt3\` is the exact form)*
**2)** $y = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6.93', '4'],
          hint1: '$x = 8\\cos\\frac{\\pi}{6} = 8\\cdot\\frac{\\sqrt3}{2} = 4\\sqrt3$.',
          hint2: '$4\\sqrt3 \\approx 4(1.732) = 6.93$. $\\;y = 8\\sin\\frac{\\pi}{6} = 8\\cdot\\frac{1}{2} = 4$.',
          hint3: 'Exact: $x = 4\\sqrt3 \\approx 6.93$, $y = 4$.',
          explanation: '$x = 8\\cos\\frac{\\pi}{6} = 4\\sqrt3 \\approx 6.93$; $\\;y = 8\\sin\\frac{\\pi}{6} = 4$. So $\\left(8, \\frac{\\pi}{6}\\right) \\approx (6.93, 4)$.',
        },
      },
      {
        id: 'pc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which polar coordinate names the SAME point as $\\left(5, \\dfrac{\\pi}{4}\\right)$?',
              options: [
                '$\\left(-5, \\dfrac{5\\pi}{4}\\right)$',
                '$\\left(-5, \\dfrac{\\pi}{4}\\right)$',
                '$\\left(5, \\dfrac{3\\pi}{4}\\right)$',
                '$\\left(5, \\dfrac{5\\pi}{4}\\right)$',
              ],
              correctAnswer: 0,
              explanation: '$(-5, \\frac{5\\pi}{4}) = (5, \\frac{5\\pi}{4} + \\pi) = (5, \\frac{9\\pi}{4}) = (5, \\frac{\\pi}{4})$ after subtracting $2\\pi$. ✓',
            },
            {
              question: 'The graph of $r = 3 + 5\\sin\\theta$ is a:',
              options: [
                'Limaçon with an inner loop (since $a < b$)',
                'Cardioid (since $a = b$)',
                'Dimpled limaçon (since $1 < a/b < 2$)',
                'Five-petal rose',
              ],
              correctAnswer: 0,
              explanation: '$a = 3$, $b = 5$, so $\\frac{a}{b} = \\frac{3}{5} < 1$ ⟹ a limaçon with an inner loop.',
            },
            {
              question: 'For $r = 4\\cos\\theta$ on $\\left[0, \\dfrac{\\pi}{2}\\right]$, as $\\theta$ increases the curve is:',
              options: [
                'Getting closer to the pole ($r$ decreases from $4$ to $0$)',
                'Getting farther from the pole ($r$ increases)',
                'Staying a constant distance from the pole',
                'Tracing a straight line',
              ],
              correctAnswer: 0,
              explanation: '$r = 4\\cos\\theta$ goes from $r(0) = 4$ down to $r(\\frac{\\pi}{2}) = 0$, so $|r|$ decreases — the curve moves toward the pole.',
            },
          ],
        },
      },
    ],
  },
]
