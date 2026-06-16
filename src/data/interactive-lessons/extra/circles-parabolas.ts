import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Circles and Parabolas (AP Precalculus).
 * Registry key / DB Topic.slug: 'circles-parabolas'.
 * 7 parts, gold-standard structure: distance/locus foundations → circle equations
 * (standard & general form, completing the square) → graphing/analyzing circles →
 * the focus–directrix definition of a parabola → parabola equations (origin & shifted)
 * → analyzing/graphing parabolas → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every coordinate, radius, focus, and directrix was verified numerically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'circles-parabolas',
    sections: [
      {
        id: 'cp1-intro',
        type: 'text' as const,
        content: `# ⭕ Circles and Parabolas

**Part 1 of 7 — Distance, Midpoint & the Idea of a Locus**

---

### Topics in This Part

| Section |
|---------|
| The Distance Formula |
| The Midpoint Formula |
| What Is a Conic Section? |
| A Circle as a *Locus* |

> 🔑 **Key Concept:** Both circles and parabolas are defined by **distance**. A circle is "all points a fixed distance from a center"; a parabola is "all points equidistant from a point and a line." Master distance first, and the equations write themselves.`,
      },
      {
        id: 'cp1-distance',
        type: 'text' as const,
        content: `## The Distance Formula

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ comes straight from the Pythagorean theorem:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

The horizontal leg is $\\lvert x_2 - x_1\\rvert$, the vertical leg is $\\lvert y_2 - y_1\\rvert$, and $d$ is the hypotenuse.

### Worked Example

Distance from $(1, 2)$ to $(4, 6)$:

$$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

| Points | $\\Delta x$ | $\\Delta y$ | Distance |
|--------|-----------|-----------|----------|
| $(0,0)\\to(6,8)$ | $6$ | $8$ | $\\sqrt{36+64}=10$ |
| $(-3,1)\\to(2,13)$ | $5$ | $12$ | $\\sqrt{25+144}=13$ |
| $(-1,-2)\\to(2,2)$ | $3$ | $4$ | $\\sqrt{9+16}=5$ |

> 💡 The order of subtraction doesn't matter — squaring kills the sign. $(x_2-x_1)^2 = (x_1-x_2)^2$.`,
      },
      {
        id: 'cp1-dist-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The distance between $(2, -1)$ and $(7, 11)$ is:',
              options: ['$13$', '$17$', '$\\sqrt{29}$', '$12$'],
              correctAnswer: 0,
              explanation: '$\\Delta x = 5$, $\\Delta y = 12$, so $d = \\sqrt{25 + 144} = \\sqrt{169} = 13$. (It is a 5-12-13 right triangle.)',
            },
            {
              question: 'Why can we write $(y_2 - y_1)^2$ instead of $\\lvert y_2 - y_1\\rvert^2$?',
              options: [
                'Squaring already removes the sign, so the absolute value is unnecessary',
                'Because $y$-values are always positive',
                'Because distance is always negative',
                'They give different answers, so it matters which you use',
              ],
              correctAnswer: 0,
              explanation: 'A squared real number is never negative, so $(y_2 - y_1)^2 = \\lvert y_2 - y_1\\rvert^2$ automatically. The absolute value is built in.',
            },
          ],
        },
      },
      {
        id: 'cp1-dist-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Distance** 🧮

Find each distance. All three are "nice" (Pythagorean) triples.

**1)** $(0,0)$ to $(8,15) = \\,?$
**2)** $(-2,3)$ to $(4,-5) = \\,?$
**3)** $(1,1)$ to $(1,7) = \\,?$  *(vertical segment)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['17', '10', '6'],
          hint1: '$\\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289}$.',
          hint2: '$\\Delta x = 6$, $\\Delta y = -8$: $\\sqrt{36 + 64} = \\sqrt{100}$.',
          hint3: 'Same $x$, so the distance is just $\\lvert 7 - 1\\rvert$.',
          explanation: '1) $\\sqrt{289}=17$.  2) $\\sqrt{100}=10$.  3) Vertical: $\\lvert 7-1\\rvert = 6$.',
        },
      },
      {
        id: 'cp1-midpoint',
        type: 'text' as const,
        content: `## The Midpoint Formula

The midpoint is the **average** of the coordinates:

$$M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$$

**Example:** Midpoint of $(1, 3)$ and $(5, 9)$ is $\\left(\\dfrac{1+5}{2}, \\dfrac{3+9}{2}\\right) = (3, 6)$.

> 🔑 **Why we care:** For a circle, the midpoint of a *diameter* is the **center**. We'll use that constantly in Part 2.`,
      },
      {
        id: 'cp1-conics-locus',
        type: 'text' as const,
        content: `## Conic Sections and the Idea of a *Locus*

Slice a double cone with a plane and you get a **conic section** — a circle, ellipse, parabola, or hyperbola. AP Precalculus focuses on the two simplest: the **circle** and the **parabola**.

A **locus** is "the set of all points satisfying a condition." Each conic has a clean locus definition:

| Conic | Locus definition |
|-------|------------------|
| **Circle** | all points a fixed distance $r$ from a center |
| **Parabola** | all points equidistant from a focus and a directrix |

> 💡 Every equation in this lesson is just a locus condition translated into algebra using the distance formula. Keep that lens and nothing here will feel arbitrary.`,
      },
      {
        id: 'cp1-locus-check',
        type: 'dropdown-select' as const,
        content: `**Match the Definition** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'All points exactly $r$ from a fixed point form a:', options: ['circle', 'parabola', 'line', 'square'] },
            { label: 'The midpoint of a diameter is the circle\'s:', options: ['center', 'radius', 'focus', 'directrix'] },
            { label: 'A parabola\'s points are equidistant from a focus and a:', options: ['directrix', 'center', 'vertex', 'radius'] },
          ],
          correctAnswers: ['circle', 'center', 'directrix'],
          hint1: 'A fixed distance from one point traces a round curve.',
          hint2: 'The endpoints of a diameter average to the middle of the circle.',
          hint3: 'A parabola balances distance to a point (focus) against distance to a line.',
          explanation: 'Circle = fixed distance from a center; the diameter\'s midpoint is the center; a parabola equidistant from a focus and a line (the directrix).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'circles-parabolas',
    sections: [
      {
        id: 'cp2-intro',
        type: 'text' as const,
        content: `# ⭕ Circles and Parabolas

**Part 2 of 7 — The Equation of a Circle**

---

> 🔑 **The Idea:** Apply the distance formula to "every point $(x,y)$ is distance $r$ from the center $(h,k)$" and you get the **standard form** of a circle.`,
      },
      {
        id: 'cp2-standard',
        type: 'text' as const,
        content: `## Standard (Center–Radius) Form

A circle with center $(h, k)$ and radius $r$ satisfies, for every point $(x, y)$ on it:

$$\\sqrt{(x - h)^2 + (y - k)^2} = r$$

Square both sides to clear the root:

$$\\boxed{(x - h)^2 + (y - k)^2 = r^2}$$

### Reading the Form

| Equation | Center $(h,k)$ | Radius $r$ |
|----------|----------------|-----------|
| $(x-3)^2 + (y-4)^2 = 25$ | $(3, 4)$ | $5$ |
| $(x+2)^2 + (y-1)^2 = 9$ | $(-2, 1)$ | $3$ |
| $x^2 + y^2 = 16$ | $(0, 0)$ | $4$ |

> ⚠️ **Sign trap:** $(x + 2)^2 = (x - (-2))^2$, so $h = -2$, **not** $+2$. The center coordinate has the **opposite** sign of what appears inside the parentheses. And the right side is $r^2$ — take the square root to get $r$.`,
      },
      {
        id: 'cp2-read-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The center and radius of $(x + 5)^2 + (y - 2)^2 = 49$ are:',
              options: [
                'center $(-5, 2)$, radius $7$',
                'center $(5, -2)$, radius $7$',
                'center $(-5, 2)$, radius $49$',
                'center $(5, 2)$, radius $7$',
              ],
              correctAnswer: 0,
              explanation: '$(x+5)^2 = (x-(-5))^2 \\Rightarrow h=-5$; $(y-2)^2 \\Rightarrow k=2$; $r = \\sqrt{49} = 7$.',
            },
            {
              question: 'A circle centered at the origin with radius $\\sqrt{10}$ has equation:',
              options: ['$x^2 + y^2 = 10$', '$x^2 + y^2 = \\sqrt{10}$', '$x^2 + y^2 = 100$', '$(x-10)^2 + y^2 = 10$'],
              correctAnswer: 0,
              explanation: 'Center $(0,0)$ gives $x^2 + y^2 = r^2$, and $r^2 = (\\sqrt{10})^2 = 10$.',
            },
          ],
        },
      },
      {
        id: 'cp2-build',
        type: 'text' as const,
        content: `## Building a Circle from Information

To write a circle's equation you need just two things: the **center** and the **radius** (or anything that gives them).

### Example: Center and a point on the circle

Center $(2, -3)$, passing through $(5, 1)$. The radius is the distance from center to that point:

$$r = \\sqrt{(5-2)^2 + (1-(-3))^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$

So the equation is $(x-2)^2 + (y+3)^2 = 25$.

### Example: Endpoints of a diameter

Diameter from $(1, 3)$ to $(5, 9)$. The **center** is the midpoint, $(3, 6)$, and the **radius** is half the diameter:

$$d = \\sqrt{(5-1)^2 + (9-3)^2} = \\sqrt{16+36} = \\sqrt{52}, \\quad r = \\frac{\\sqrt{52}}{2} = \\sqrt{13}$$

Equation: $(x-3)^2 + (y-6)^2 = 13$.

> 💡 You never need to memorize a separate "diameter formula." Midpoint gives the center; half the distance gives the radius.`,
      },
      {
        id: 'cp2-build-drill',
        type: 'input-boxes' as const,
        content: `**Build the Radius** 🧮

A circle has center $(-1, 4)$ and passes through $(2, 8)$.

**1)** Radius $r = \\,?$
**2)** In $(x-h)^2 + (y-k)^2 = r^2$, the value of $r^2 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '25'],
          hint1: '$r = \\sqrt{(2-(-1))^2 + (8-4)^2} = \\sqrt{3^2 + 4^2}$.',
          hint2: 'Once you know $r$, the right-hand side of the equation is $r^2$.',
          hint3: '$\\sqrt{9 + 16} = \\sqrt{25} = 5$, and $5^2 = 25$.',
          explanation: '$r = \\sqrt{9 + 16} = 5$, so $r^2 = 25$. Equation: $(x+1)^2 + (y-4)^2 = 25$.',
        },
      },
      {
        id: 'cp2-write-dropdown',
        type: 'dropdown-select' as const,
        content: `**Write the Equation** 🔽

A circle has center $(-4, 0)$ and radius $6$. Assemble its standard-form equation.`,
        exercise: {
          dropdowns: [
            { label: 'The $x$-part is:', options: ['$(x+4)^2$', '$(x-4)^2$', '$(x+6)^2$', '$x^2$'] },
            { label: 'The $y$-part is:', options: ['$y^2$', '$(y-4)^2$', '$(y+6)^2$', '$(y-6)^2$'] },
            { label: 'The right-hand side is:', options: ['$36$', '$6$', '$12$', '$-36$'] },
          ],
          correctAnswers: ['$(x+4)^2$', '$y^2$', '$36$'],
          hint1: 'Center $x = -4$, and $(x - (-4))^2 = (x+4)^2$.',
          hint2: 'Center $y = 0$, so $(y - 0)^2 = y^2$.',
          hint3: 'The right side is $r^2 = 6^2 = 36$.',
          explanation: 'Center $(-4, 0)$, radius $6$: $(x+4)^2 + y^2 = 36$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'circles-parabolas',
    sections: [
      {
        id: 'cp3-intro',
        type: 'text' as const,
        content: `# ⭕ Circles and Parabolas

**Part 3 of 7 — General Form & Completing the Square**

---

> 🔑 **The Idea:** Multiply out a circle's standard form and you get **general form** $x^2 + y^2 + Dx + Ey + F = 0$. To go *back* — to find the center and radius — you **complete the square** on $x$ and $y$ separately.`,
      },
      {
        id: 'cp3-general',
        type: 'text' as const,
        content: `## General Form

Expanding $(x-3)^2 + (y+4)^2 = 36$:

$$x^2 - 6x + 9 + y^2 + 8y + 16 = 36 \\;\\Rightarrow\\; x^2 + y^2 - 6x + 8y - 11 = 0$$

That's **general form**: $x^2 + y^2 + Dx + Ey + F = 0$. The center and radius are hidden — completing the square reveals them.

### How to Complete the Square (both variables)

1. **Group** $x$-terms and $y$-terms; move the constant to the right.
2. For each group, add $\\left(\\dfrac{\\text{coefficient}}{2}\\right)^2$ to **both sides**.
3. **Factor** each perfect square.

> 🔑 Recall from completing the square: $x^2 + bx$ becomes a perfect square when you add $\\left(\\dfrac{b}{2}\\right)^2$, factoring as $\\left(x + \\dfrac{b}{2}\\right)^2$.`,
      },
      {
        id: 'cp3-worked',
        type: 'text' as const,
        content: `## Worked Example

Convert $x^2 + y^2 - 6x + 8y - 11 = 0$ to standard form.

**Step 1 — Group, move constant:**
$$(x^2 - 6x) + (y^2 + 8y) = 11$$

**Step 2 — Complete each square.** Half of $-6$ is $-3$, $(-3)^2 = 9$. Half of $8$ is $4$, $4^2 = 16$. Add both to **each** side:
$$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16$$

**Step 3 — Factor:**
$$(x - 3)^2 + (y + 4)^2 = 36$$

So the **center is $(3, -4)$** and the **radius is $\\sqrt{36} = 6$**.

> ✅ **Check:** This is exactly the circle we expanded on the previous page — completing the square undid the expansion. ✓`,
      },
      {
        id: 'cp3-cs-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To complete the square on $x^2 + y^2 + 4x - 2y - 4 = 0$, what do you add to both sides?',
              options: ['$4$ and $1$', '$2$ and $1$', '$16$ and $4$', '$4$ and $4$'],
              correctAnswer: 0,
              explanation: 'For $x$: $\\left(\\frac{4}{2}\\right)^2 = 4$. For $y$: $\\left(\\frac{-2}{2}\\right)^2 = 1$. Add $4$ and $1$ to both sides.',
            },
            {
              question: 'After completing the square, $x^2 + y^2 + 4x - 2y - 4 = 0$ becomes:',
              options: [
                '$(x+2)^2 + (y-1)^2 = 9$',
                '$(x+2)^2 + (y-1)^2 = 4$',
                '$(x-2)^2 + (y+1)^2 = 9$',
                '$(x+2)^2 + (y+1)^2 = 5$',
              ],
              correctAnswer: 0,
              explanation: '$(x^2+4x+4)+(y^2-2y+1) = 4+4+1 = 9$, so $(x+2)^2+(y-1)^2=9$ — center $(-2,1)$, radius $3$.',
            },
          ],
        },
      },
      {
        id: 'cp3-cs-drill',
        type: 'input-boxes' as const,
        content: `**Complete the Square** 🧮

Convert $x^2 + y^2 - 10x + 6y + 18 = 0$ to standard form.

**1)** Center $x$-coordinate $= \\,?$
**2)** Center $y$-coordinate $= \\,?$
**3)** Radius $r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '-3', '4'],
          hint1: 'Half of $-10$ is $-5$, so $(x-5)^2$ gives center $x = 5$.',
          hint2: 'Half of $6$ is $3$, so $(y+3)^2$ gives center $y = -3$.',
          hint3: 'Move $18$ over and add $25 + 9$: right side $= -18 + 25 + 9 = 16$, so $r = \\sqrt{16}$.',
          explanation: '$(x-5)^2 + (y+3)^2 = -18 + 25 + 9 = 16$. Center $(5, -3)$, radius $4$.',
        },
      },
      {
        id: 'cp3-degenerate',
        type: 'text' as const,
        content: `## When It's *Not* a Circle

After completing the square, the right side is $r^2$. Watch what it actually equals:

| Right side | Result |
|-----------|--------|
| **positive** | a real circle, $r = \\sqrt{\\text{value}}$ |
| **zero** | a single **point** (a "degenerate" circle, $r = 0$) |
| **negative** | **no graph** — no real $(x,y)$ works |

**Example:** $x^2 + y^2 + 2x + 1 = 0 \\Rightarrow (x+1)^2 + y^2 = 0$. The only solution is the point $(-1, 0)$.

> ⚠️ A negative right side is **not** a circle of imaginary radius you can graph — it's simply empty. Always check the sign before declaring a radius.`,
      },
      {
        id: 'cp3-degenerate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Circle, Point, or Nothing?** 🔽

Each equation is already in completed-square form. Classify it by the sign of the right-hand side.`,
        exercise: {
          dropdowns: [
            { label: '$(x-1)^2 + (y+2)^2 = 9$ is a:', options: ['real circle', 'single point', 'no graph'] },
            { label: '$(x+3)^2 + (y-1)^2 = 0$ is a:', options: ['single point', 'real circle', 'no graph'] },
            { label: '$(x-2)^2 + (y-5)^2 = -4$ is:', options: ['no graph', 'real circle', 'single point'] },
          ],
          correctAnswers: ['real circle', 'single point', 'no graph'],
          hint1: 'A positive right side gives a genuine circle of radius $\\sqrt{\\text{value}}$.',
          hint2: 'A right side of exactly $0$ forces both squares to be $0$ — one point only.',
          hint3: 'A negative right side can never equal a sum of two squares, so nothing graphs.',
          explanation: 'Right side $9 > 0$ → real circle ($r = 3$). Right side $0$ → single point $(-3, 1)$. Right side $-4 < 0$ → no graph (empty set).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'circles-parabolas',
    sections: [
      {
        id: 'cp4-intro',
        type: 'text' as const,
        content: `# ⭕ Circles and Parabolas

**Part 4 of 7 — Graphing & Analyzing Circles**

---

> 🔑 **The Idea:** Once a circle is in standard form, you can read off everything — center, radius, intercepts, and whether a point lies inside, on, or outside it.`,
      },
      {
        id: 'cp4-graph',
        type: 'text' as const,
        content: `## Graphing from Standard Form

For $(x - h)^2 + (y - k)^2 = r^2$:

1. **Plot the center** $(h, k)$.
2. **Step out by $r$** in the four cardinal directions to get four anchor points: $(h \\pm r, k)$ and $(h, k \\pm r)$.
3. **Sketch** the circle through them.

### Example: $(x - 3)^2 + (y - 4)^2 = 25$

Center $(3, 4)$, radius $5$. The four anchor points are:

| Direction | Point |
|-----------|-------|
| right | $(8, 4)$ |
| left | $(-2, 4)$ |
| up | $(3, 9)$ |
| down | $(3, -1)$ |

> 💡 Those four anchor points are almost always exact lattice points, which makes a clean sketch fast.`,
      },
      {
        id: 'cp4-intercepts',
        type: 'text' as const,
        content: `## Finding Intercepts

- **$x$-intercepts:** set $y = 0$ and solve for $x$.
- **$y$-intercepts:** set $x = 0$ and solve for $y$.

### Example: $(x - 3)^2 + (y - 4)^2 = 25$

**$x$-intercepts** ($y = 0$): $(x-3)^2 + 16 = 25 \\Rightarrow (x-3)^2 = 9 \\Rightarrow x - 3 = \\pm 3 \\Rightarrow x = 6$ or $x = 0$.

**$y$-intercepts** ($x = 0$): $9 + (y-4)^2 = 25 \\Rightarrow (y-4)^2 = 16 \\Rightarrow y - 4 = \\pm 4 \\Rightarrow y = 8$ or $y = 0$.

> ⚠️ Don't forget the $\\pm$ when you take the square root — a circle crosses each axis **twice** unless it's tangent.`,
      },
      {
        id: 'cp4-graph-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $(x + 1)^2 + (y - 2)^2 = 16$, the topmost point of the circle is:',
              options: ['$(-1, 6)$', '$(-1, 2)$', '$(3, 2)$', '$(-1, -2)$'],
              correctAnswer: 0,
              explanation: 'Center $(-1, 2)$, radius $4$. The top is $(h, k+r) = (-1, 2+4) = (-1, 6)$.',
            },
            {
              question: 'How many $x$-intercepts does a circle have if its center is $(0, 5)$ and radius is $3$?',
              options: ['$0$', '$1$', '$2$', '$3$'],
              correctAnswer: 0,
              explanation: 'The circle\'s lowest point is $y = 5 - 3 = 2 > 0$, so it never reaches the $x$-axis. Zero $x$-intercepts.',
            },
          ],
        },
      },
      {
        id: 'cp4-position',
        type: 'text' as const,
        content: `## Inside, On, or Outside?

Plug a point into the **left side** $(x-h)^2 + (y-k)^2$ and compare to $r^2$:

| Comparison | Where the point is |
|-----------|--------------------|
| $< r^2$ | **inside** the circle |
| $= r^2$ | **on** the circle |
| $> r^2$ | **outside** the circle |

**Example:** Circle $(x-2)^2 + (y+1)^2 = 25$ ($r^2 = 25$). Test $(5, 3)$:

$$(5-2)^2 + (3+1)^2 = 9 + 16 = 25 = r^2 \\;\\Rightarrow\\; \\text{ON the circle.}$$

Test $(0, 0)$: $(0-2)^2 + (0+1)^2 = 4 + 1 = 5 < 25 \\Rightarrow$ **inside**.

> 💡 This is just the distance test without the square root — comparing squared distances avoids messy radicals.`,
      },
      {
        id: 'cp4-position-dropdown',
        type: 'dropdown-select' as const,
        content: `**Inside, On, or Outside** 🔽

Use the circle $(x-2)^2 + (y+1)^2 = 25$ (center $(2,-1)$, $r = 5$).`,
        exercise: {
          dropdowns: [
            { label: 'The point $(2, 4)$ is:', options: ['on the circle', 'inside the circle', 'outside the circle'] },
            { label: 'The point $(2, -1)$ is:', options: ['inside the circle', 'on the circle', 'outside the circle'] },
            { label: 'The point $(10, 10)$ is:', options: ['outside the circle', 'on the circle', 'inside the circle'] },
          ],
          correctAnswers: ['on the circle', 'inside the circle', 'outside the circle'],
          hint1: '$(2-2)^2 + (4+1)^2 = 0 + 25 = 25$. Compare to $r^2 = 25$.',
          hint2: '$(2,-1)$ is the center itself — distance $0 < 5$.',
          hint3: '$(10-2)^2 + (10+1)^2 = 64 + 121 = 185$, which is far bigger than $25$.',
          explanation: '$(2,4)$: $25 = r^2$ → on. Center $(2,-1)$: distance $0$ → inside. $(10,10)$: $185 > 25$ → outside.',
        },
      },
      {
        id: 'cp4-intercept-drill',
        type: 'input-boxes' as const,
        content: `**Find an Intercept** 🧮

For the circle $(x - 4)^2 + (y - 0)^2 = 25$ (i.e. $(x-4)^2 + y^2 = 25$):

**1)** The smaller $x$-intercept is $x = \\,?$
**2)** The larger $x$-intercept is $x = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-1', '9'],
          hint1: 'Set $y = 0$: $(x-4)^2 = 25$, so $x - 4 = \\pm 5$.',
          hint2: '$x = 4 - 5$ and $x = 4 + 5$.',
          hint3: 'The two intercepts are $4 \\pm 5$: that is $-1$ and $9$.',
          explanation: 'At $y = 0$: $(x-4)^2 = 25 \\Rightarrow x = 4 \\pm 5 \\Rightarrow x = -1$ or $x = 9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'circles-parabolas',
    sections: [
      {
        id: 'cp5-intro',
        type: 'text' as const,
        content: `# ⭕ Circles and Parabolas

**Part 5 of 7 — Parabolas: The Focus–Directrix Definition**

---

> 🔑 **The Idea:** A parabola is **not** just "a U-shaped graph of $y = x^2$." Its true definition is geometric: every point is **equidistant** from a fixed point (the **focus**) and a fixed line (the **directrix**).`,
      },
      {
        id: 'cp5-definition',
        type: 'text' as const,
        content: `## The Geometric Definition

A **parabola** is the set of all points $P$ such that

$$\\text{distance}(P, \\text{focus}) = \\text{distance}(P, \\text{directrix}).$$

Key vocabulary:

| Term | Meaning |
|------|---------|
| **Focus** | a fixed point *inside* the curve |
| **Directrix** | a fixed line *outside* the curve |
| **Vertex** | the point on the parabola **closest** to both — halfway between focus and directrix |
| **Axis of symmetry** | the line through the focus and vertex, perpendicular to the directrix |

> 💡 The vertex sits exactly **midway** between the focus and the directrix. If the focus is a distance $p$ from the vertex, the directrix is the *same* distance $p$ on the **other** side.`,
      },
      {
        id: 'cp5-def-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A point on a parabola is $7$ units from the focus. How far is it from the directrix?',
              options: ['$7$', '$14$', '$3.5$', 'It depends on the point'],
              correctAnswer: 0,
              explanation: 'By definition every point on a parabola is *equidistant* from focus and directrix. So the distance to the directrix is also $7$.',
            },
            {
              question: 'Where is the vertex of a parabola located?',
              options: [
                'Midway between the focus and the directrix',
                'At the focus',
                'On the directrix',
                'At the midpoint of the directrix',
              ],
              correctAnswer: 0,
              explanation: 'The vertex is the closest point of the parabola to both — exactly halfway between the focus and the directrix, on the axis of symmetry.',
            },
          ],
        },
      },
      {
        id: 'cp5-derive',
        type: 'text' as const,
        content: `## Deriving the Equation (vertex at the origin)

Put the vertex at the origin and the focus at $(0, p)$ on the $y$-axis. Then the directrix is the line $y = -p$. For a point $(x, y)$ on the parabola, set the two distances equal:

$$\\underbrace{\\sqrt{x^2 + (y - p)^2}}_{\\text{to focus}} = \\underbrace{\\lvert y + p\\rvert}_{\\text{to directrix } y=-p}$$

Square both sides:

$$x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2$$

The $y^2$ and $p^2$ cancel; solving gives the clean result:

$$\\boxed{x^2 = 4py}$$

> 🔑 **The "$4p$" is everything.** In $x^2 = 4py$, the number $p$ is the **distance from the vertex to the focus** (and to the directrix). Knowing $4p$ instantly gives the focus and directrix.`,
      },
      {
        id: 'cp5-forms',
        type: 'text' as const,
        content: `## The Two Origin Forms

| Form | Opens | Focus | Directrix |
|------|-------|-------|-----------|
| $x^2 = 4py$ | up ($p>0$) / down ($p<0$) | $(0, p)$ | $y = -p$ |
| $y^2 = 4px$ | right ($p>0$) / left ($p<0$) | $(p, 0)$ | $x = -p$ |

**Pattern to memorize:** whichever variable is **squared**, the parabola opens along the **other** axis.
- $x^2 = 4py$ → squared $x$ → opens **vertically** (up/down).
- $y^2 = 4px$ → squared $y$ → opens **horizontally** (left/right).

### Example: $y^2 = 12x$

Match $y^2 = 4px$: $4p = 12 \\Rightarrow p = 3$. Opens **right**, focus $(3, 0)$, directrix $x = -3$.

> ⚠️ A squared $y$ means the parabola is a **sideways** U — it is *not* a function. Don't try to read it as $y = (\\dots)$.`,
      },
      {
        id: 'cp5-forms-dropdown',
        type: 'dropdown-select' as const,
        content: `**Decode the Parabola** 🔽

Analyze $x^2 = 8y$.`,
        exercise: {
          dropdowns: [
            { label: 'This parabola opens:', options: ['up', 'down', 'right', 'left'] },
            { label: 'The value of $p$ is:', options: ['$2$', '$4$', '$8$', '$\\tfrac{1}{2}$'] },
            { label: 'The directrix is:', options: ['$y = -2$', '$y = 2$', '$x = -2$', '$y = -8$'] },
          ],
          correctAnswers: ['up', '$2$', '$y = -2$'],
          hint1: 'The squared variable is $x$, so it opens vertically; the right side is positive, so up.',
          hint2: '$4p = 8 \\Rightarrow p = 2$.',
          hint3: 'For $x^2 = 4py$ the directrix is $y = -p$, and $p = 2$.',
          explanation: '$x^2 = 8y$: $4p = 8$, $p = 2$. Opens up, focus $(0, 2)$, directrix $y = -2$.',
        },
      },
      {
        id: 'cp5-forms-drill',
        type: 'input-boxes' as const,
        content: `**Find $p$ and the Focus** 🧮

For the parabola $y^2 = 20x$:

**1)** $p = \\,?$
**2)** The focus is $(p, 0)$. Its $x$-coordinate $= \\,?$
**3)** The directrix is $x = \\,?$  *(a single number, the value of the constant)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '5', '-5'],
          hint1: 'Match $y^2 = 4px$: $4p = 20$.',
          hint2: 'The focus of $y^2 = 4px$ is at $(p, 0)$.',
          hint3: 'The directrix of $y^2 = 4px$ is $x = -p$.',
          explanation: '$4p = 20 \\Rightarrow p = 5$. Focus $(5, 0)$; directrix $x = -5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'circles-parabolas',
    sections: [
      {
        id: 'cp6-intro',
        type: 'text' as const,
        content: `# ⭕ Circles and Parabolas

**Part 6 of 7 — Shifted Parabolas & Completing the Square**

---

> 🔑 **The Idea:** Move the vertex from the origin to $(h, k)$ by replacing $x \\to (x-h)$ and $y \\to (y-k)$. To recover a vertex hidden in $y = ax^2 + bx + c$, complete the square.`,
      },
      {
        id: 'cp6-shifted',
        type: 'text' as const,
        content: `## Vertex at $(h, k)$

Shift each origin form so the vertex lands at $(h, k)$:

| Form | Opens | Vertex | Focus | Directrix |
|------|-------|--------|-------|-----------|
| $(x-h)^2 = 4p(y-k)$ | up/down | $(h, k)$ | $(h,\\, k+p)$ | $y = k - p$ |
| $(y-k)^2 = 4p(x-h)$ | right/left | $(h, k)$ | $(h+p,\\, k)$ | $x = h - p$ |

### Example: $(y - 2)^2 = 8(x - 1)$

Squared variable is $y$ → opens **horizontally**. Vertex $(1, 2)$. Then $4p = 8 \\Rightarrow p = 2$, and $p > 0$, so it opens **right**:

- **Focus:** $(h + p,\\, k) = (1 + 2,\\, 2) = (3, 2)$
- **Directrix:** $x = h - p = 1 - 2 = -1$

> 💡 Same "$4p$" rule as before — the shift only moves the vertex; it never changes how you read $p$.`,
      },
      {
        id: 'cp6-shift-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The vertex of $(x + 3)^2 = 12(y - 1)$ is:',
              options: ['$(-3, 1)$', '$(3, -1)$', '$(-3, -1)$', '$(3, 1)$'],
              correctAnswer: 0,
              explanation: '$(x+3)^2 = (x-(-3))^2$ gives $h = -3$; $(y - 1)$ gives $k = 1$. Vertex $(-3, 1)$.',
            },
            {
              question: 'For $(x + 3)^2 = 12(y - 1)$, which way does it open and what is $p$?',
              options: [
                'Opens up, $p = 3$',
                'Opens down, $p = 3$',
                'Opens right, $p = 3$',
                'Opens up, $p = 12$',
              ],
              correctAnswer: 0,
              explanation: 'Squared $x$ → vertical; right side $+12(y-1)$ is positive → up. $4p = 12 \\Rightarrow p = 3$.',
            },
          ],
        },
      },
      {
        id: 'cp6-completing',
        type: 'text' as const,
        content: `## From $y = ax^2 + bx + c$ to Conic Form

A standard quadratic *is* a parabola — completing the square reveals its vertex and the "$4p$" value.

### Example: $y = x^2 - 6x + 5$

Complete the square on the $x$-terms (half of $-6$ is $-3$, $(-3)^2 = 9$):

$$y = (x^2 - 6x + 9) - 9 + 5 = (x - 3)^2 - 4$$

So $y + 4 = (x-3)^2$, i.e. $(x - 3)^2 = 1\\cdot(y + 4)$. **Vertex $(3, -4)$.**

Now read $p$: $4p = 1 \\Rightarrow p = \\dfrac{1}{4}$. Opens up, so:

- **Focus:** $\\left(3,\\, -4 + \\tfrac{1}{4}\\right) = \\left(3, -\\tfrac{15}{4}\\right)$
- **Directrix:** $y = -4 - \\tfrac{1}{4} = -\\tfrac{17}{4}$

> ⚠️ Vertex form $(x-h)^2 = 4p(y-k)$ and graphing vertex form $y = a(x-h)^2 + k$ describe the *same* curve. They connect via $4p = \\dfrac{1}{a}$.`,
      },
      {
        id: 'cp6-cs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Complete the Square for a Parabola** 🔽

Rewrite $y = x^2 + 4x + 1$ in the form $(x - h)^2 = 4p(y - k)$.`,
        exercise: {
          dropdowns: [
            { label: 'After completing the square, vertex form is:', options: ['$(x+2)^2 - 3$', '$(x+2)^2 + 1$', '$(x-2)^2 - 3$', '$(x+4)^2 - 3$'] },
            { label: 'The vertex is:', options: ['$(-2, -3)$', '$(2, -3)$', '$(-2, 3)$', '$(2, 3)$'] },
            { label: 'Since $a = 1$, the value $4p$ equals:', options: ['$1$', '$4$', '$\\tfrac{1}{4}$', '$2$'] },
          ],
          correctAnswers: ['$(x+2)^2 - 3$', '$(-2, -3)$', '$1$'],
          hint1: 'Half of $4$ is $2$, $2^2 = 4$: $y = (x^2+4x+4) - 4 + 1$.',
          hint2: 'Vertex form $a(x-h)^2+k$ gives vertex $(h, k)$; here $(x+2)^2 - 3$.',
          hint3: 'Writing $y + 3 = (x+2)^2$ means $(x+2)^2 = 1\\cdot(y+3)$, so $4p = 1$.',
          explanation: '$y = (x+2)^2 - 3$, vertex $(-2, -3)$. As a conic, $(x+2)^2 = 1\\cdot(y+3)$, so $4p = 1$ ($p = \\tfrac14$).',
        },
      },
      {
        id: 'cp6-shift-drill',
        type: 'input-boxes' as const,
        content: `**Locate Focus & Directrix** 🧮

For the parabola $(y - 2)^2 = 8(x - 1)$ (vertex $(1, 2)$, $p = 2$, opens right):

**1)** Focus $x$-coordinate $= \\,?$
**2)** Focus $y$-coordinate $= \\,?$
**3)** Directrix $x = \\,?$  *(the constant)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '2', '-1'],
          hint1: 'Focus is $(h + p,\\, k)$; here $h = 1$, $p = 2$.',
          hint2: 'The focus shares the vertex\'s $y$-coordinate, $k = 2$.',
          hint3: 'Directrix is $x = h - p = 1 - 2$.',
          explanation: '$h=1, k=2, p=2$, opens right. Focus $(1+2, 2) = (3, 2)$; directrix $x = 1 - 2 = -1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'circles-parabolas',
    sections: [
      {
        id: 'cp7-intro',
        type: 'text' as const,
        content: `# ⭕ Circles and Parabolas

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) use distance and midpoint, (2) write and read circle equations in both forms, (3) complete the square to find a center and radius, (4) apply the focus–directrix definition, and (5) analyze parabolas in every form. Let's bring it all together.`,
      },
      {
        id: 'cp7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Distance | $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |
| Circle, standard | $(x-h)^2 + (y-k)^2 = r^2$, center $(h,k)$ |
| Circle, general → standard | complete the square on $x$ **and** $y$ |
| Parabola (squared $x$) | $(x-h)^2 = 4p(y-k)$, opens up/down |
| Parabola (squared $y$) | $(y-k)^2 = 4p(x-h)$, opens left/right |
| Focus / directrix | distance $p = \\frac{1}{4}\\,(4p)$ from vertex, opposite sides |

> 🔑 **The unifying thread:** every formula here is a **distance** condition. Circle = constant distance from a center; parabola = equal distance to a focus and a directrix.

> ⚠️ Two recurring traps: the **sign flip** of $h$ and $k$ inside the parentheses, and dropping the **$\\pm$** when you square-root.`,
      },
      {
        id: 'cp7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $x^2 + y^2 + 2x - 8y + 8 = 0$ to standard form.',
              options: [
                '$(x+1)^2 + (y-4)^2 = 9$',
                '$(x-1)^2 + (y+4)^2 = 9$',
                '$(x+1)^2 + (y-4)^2 = 16$',
                '$(x+1)^2 + (y-4)^2 = 25$',
              ],
              correctAnswer: 0,
              explanation: '$(x^2+2x+1)+(y^2-8y+16) = -8+1+16 = 9$, so $(x+1)^2+(y-4)^2 = 9$ — center $(-1,4)$, $r = 3$.',
            },
            {
              question: 'A parabola has focus $(0, 4)$ and directrix $y = -4$. Its equation is:',
              options: ['$x^2 = 16y$', '$y^2 = 16x$', '$x^2 = 4y$', '$x^2 = 8y$'],
              correctAnswer: 0,
              explanation: 'Vertex is midway, at the origin; focus on the $y$-axis means $x^2 = 4py$ with $p = 4$, so $x^2 = 16y$.',
            },
          ],
        },
      },
      {
        id: 'cp7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** A circle has a diameter from $(0, 0)$ to $(6, 8)$. Its radius $= \\,?$
**2)** For $y^2 = 16x$, the value of $p$ (focus distance) $= \\,?$
**3)** The center of $(x - 7)^2 + (y + 2)^2 = 49$ has $x$-coordinate $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '4', '7'],
          hint1: 'Diameter length $= \\sqrt{6^2 + 8^2} = 10$; radius is half of that.',
          hint2: 'Match $y^2 = 4px$: $4p = 16$.',
          hint3: '$(x-7)^2$ gives $h = 7$ — the sign flips from inside the parentheses.',
          explanation: '1) diameter $= 10$, so $r = 5$.  2) $4p = 16 \\Rightarrow p = 4$.  3) center $x = 7$.',
        },
      },
      {
        id: 'cp7-apply',
        type: 'text' as const,
        content: `## One Real-World Connection

Parabolas reflect: every ray coming straight in (parallel to the axis) bounces off the curve and passes through the **focus**. That's why satellite dishes, headlights, and solar collectors are parabolic — the focus is where the receiver or bulb goes.

**Mini-example.** A dish has cross-section $x^2 = 8y$ (units in feet). Here $4p = 8 \\Rightarrow p = 2$, so the receiver belongs at the focus $(0, 2)$ — **2 feet above the vertex**, along the axis.

> 💡 The "$4p$" you've been computing all lesson is literally the engineering spec: it tells the manufacturer where to mount the receiver.`,
      },
      {
        id: 'cp7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What are the center and radius of $(x - 2)^2 + (y + 5)^2 = 36$?',
              options: [
                'center $(2, -5)$, radius $6$',
                'center $(-2, 5)$, radius $6$',
                'center $(2, -5)$, radius $36$',
                'center $(2, 5)$, radius $6$',
              ],
              correctAnswer: 0,
              explanation: '$(x-2)^2 \\Rightarrow h = 2$; $(y+5)^2 \\Rightarrow k = -5$; $r = \\sqrt{36} = 6$.',
            },
            {
              question: 'The parabola $x^2 = -16y$ opens which way, and where is its focus?',
              options: [
                'Opens down, focus $(0, -4)$',
                'Opens up, focus $(0, 4)$',
                'Opens left, focus $(-4, 0)$',
                'Opens down, focus $(0, -16)$',
              ],
              correctAnswer: 0,
              explanation: '$4p = -16 \\Rightarrow p = -4$. Squared $x$ → vertical; negative → opens down; focus $(0, p) = (0, -4)$.',
            },
            {
              question: 'After completing the square, $x^2 + y^2 - 4x + 6y + 9 = 0$ is a circle with radius:',
              options: ['$2$', '$4$', '$\\sqrt{13}$', '$3$'],
              correctAnswer: 0,
              explanation: '$(x^2-4x+4)+(y^2+6y+9) = -9+4+9 = 4$, so $(x-2)^2+(y+3)^2 = 4$ and $r = \\sqrt{4} = 2$.',
            },
          ],
        },
      },
    ],
  },
]
