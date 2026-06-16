import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Polar Coordinates (AP Calculus BC).
 * Registry key / DB Topic.slug: 'polar-coordinates-intro'.
 * 7 parts, gold-standard structure: the polar plane → plotting & non-uniqueness →
 * polar → rectangular → rectangular → polar → equations of basic curves →
 * the classic polar graphs (circles, cardioids, limaçons, roses) → mixed practice
 * & exit quiz. LaTeX uses doubled backslashes (these are JS template-literal
 * strings). Every coordinate, conversion, and angle was recomputed by hand
 * before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polar-coordinates-intro',
    sections: [
      {
        id: 'pol1-intro',
        type: 'text' as const,
        content: `# 🧭 Introduction to Polar Coordinates

**Part 1 of 7 — A New Way to Locate a Point**

---

### Topics in This Part

| Section |
|---------|
| Why Polar Coordinates? |
| The Polar Plane: $r$ and $\\theta$ |
| Reading an Ordered Pair $(r, \\theta)$ |

> 🔑 **Key Concept:** In **rectangular** (Cartesian) coordinates you locate a point by *how far right* and *how far up* it is: $(x, y)$. In **polar** coordinates you locate it by *how far out* and *in what direction*: $(r, \\theta)$.`,
      },
      {
        id: 'pol1-why',
        type: 'text' as const,
        content: `## Why Bother With a Second System?

Rectangular coordinates are perfect for grids — city blocks, spreadsheets, lines. But many things in nature are built around a **center**: ripples on a pond, the petals of a flower, the orbit of a planet, the beam of a radar dish.

For those, asking *"how far right and how far up?"* is awkward. It's far more natural to ask:

- **How far** am I from the center? → call this $r$ (the **radius**)
- **Which direction** am I facing? → call this $\\theta$ (the **angle**)

$$\\text{Polar coordinates: } (r, \\theta)$$

> 💡 Think of $r$ as the length of a leash and $\\theta$ as the compass heading you walk. Together they pin down exactly one spot.`,
      },
      {
        id: 'pol1-plane',
        type: 'text' as const,
        content: `## The Polar Plane

The polar plane has two ingredients:

- The **pole** — a fixed center point (it plays the role of the origin).
- The **polar axis** — a ray pointing in the positive $x$-direction (straight right from the pole).

To plot $(r, \\theta)$:

1. Start at the pole, facing along the polar axis.
2. **Rotate** by the angle $\\theta$ (counterclockwise for positive $\\theta$).
3. **Walk forward** a distance $r$ along that direction.

| Quantity | Name | Meaning |
|----------|------|---------|
| $r$ | radius / radial coordinate | distance from the pole |
| $\\theta$ | angle / angular coordinate | direction, measured from the polar axis |

> ⚠️ Order matters: polar pairs are written $(r, \\theta)$ — **radius first, angle second**. This trips up students who are used to $(x, y)$.`,
      },
      {
        id: 'pol1-order-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a polar ordered pair $(r, \\theta)$, what does the **first** number represent?',
              options: [
                'The distance from the pole',
                'The angle from the polar axis',
                'The horizontal $x$-coordinate',
                'The vertical $y$-coordinate',
              ],
              correctAnswer: 0,
              explanation: 'Polar pairs are written $(r, \\theta)$ — radius first, angle second. The first entry $r$ is the distance from the pole.',
            },
            {
              question: 'The fixed center point of the polar plane is called the:',
              options: ['Pole', 'Polar axis', 'Vertex', 'Focus'],
              correctAnswer: 0,
              explanation: 'The center is the **pole** (it plays the role of the origin). The **polar axis** is the ray pointing right from the pole.',
            },
          ],
        },
      },
      {
        id: 'pol1-direction',
        type: 'text' as const,
        content: `## Which Way Is Positive?

Angles follow the standard convention from trigonometry:

- **Positive** $\\theta$ → rotate **counterclockwise** from the polar axis.
- **Negative** $\\theta$ → rotate **clockwise**.

Some handy directions (in radians):

| $\\theta$ | Points toward |
|-----------|---------------|
| $0$ | right (along the polar axis) |
| $\\dfrac{\\pi}{2}$ | straight up |
| $\\pi$ | left |
| $\\dfrac{3\\pi}{2}$ | straight down |

> 🔑 The angle $\\theta$ is identical to the angle you'd use to find a point on the **unit circle** — polar coordinates *are* the unit circle, scaled out to radius $r$.`,
      },
      {
        id: 'pol1-where-check',
        type: 'dropdown-select' as const,
        content: `**Which Direction?** 🔽

Match each angle to the direction it points from the pole.`,
        exercise: {
          dropdowns: [
            { label: '$\\theta = 0$ points:', options: ['right', 'up', 'left', 'down'] },
            { label: '$\\theta = \\dfrac{\\pi}{2}$ points:', options: ['up', 'right', 'left', 'down'] },
            { label: '$\\theta = \\pi$ points:', options: ['left', 'right', 'up', 'down'] },
          ],
          correctAnswers: ['right', 'up', 'left'],
          hint1: '$\\theta = 0$ lies along the polar axis, which points right.',
          hint2: 'Rotating $\\frac{\\pi}{2}$ (a quarter turn) counterclockwise from "right" lands you pointing straight up.',
          hint3: '$\\pi$ is a half turn — directly opposite the polar axis, pointing left.',
          explanation: 'A full turn is $2\\pi$. So $0 \\to$ right, $\\frac{\\pi}{2} \\to$ up, $\\pi \\to$ left, $\\frac{3\\pi}{2} \\to$ down.',
        },
      },
      {
        id: 'pol1-degrees-drill',
        type: 'input-boxes' as const,
        content: `**Radians to Degrees** 🧮

Polar angles are usually written in radians, but a quick degree conversion helps you *see* the direction. Use $180^\\circ = \\pi$ radians, so multiply by $\\dfrac{180}{\\pi}$.

**1)** $\\theta = \\dfrac{\\pi}{2}$ is how many degrees?
**2)** $\\theta = \\pi$ is how many degrees?
**3)** $\\theta = \\dfrac{3\\pi}{2}$ is how many degrees?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['90', '180', '270'],
          hint1: '$\\frac{\\pi}{2} \\cdot \\frac{180}{\\pi} = \\frac{180}{2} = 90^\\circ$.',
          hint2: '$\\pi \\cdot \\frac{180}{\\pi} = 180^\\circ$.',
          hint3: '$\\frac{3\\pi}{2} \\cdot \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{2} = 270^\\circ$.',
          explanation: '$\\frac{\\pi}{2} = 90^\\circ$ (up), $\\pi = 180^\\circ$ (left), $\\frac{3\\pi}{2} = 270^\\circ$ (down). A full turn is $360^\\circ = 2\\pi$.',
        },
      },
      {
        id: 'pol1-recap',
        type: 'text' as const,
        content: `## Recap

You now know the two coordinates and how to read them:

$$(r, \\theta) = (\\text{distance from pole},\\ \\text{angle from polar axis})$$

In **Part 2** we'll actually plot points — including the two surprises that make polar coordinates unique: **negative radii** and the fact that **one point has infinitely many names**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polar-coordinates-intro',
    sections: [
      {
        id: 'pol2-intro',
        type: 'text' as const,
        content: `# 🧭 Introduction to Polar Coordinates

**Part 2 of 7 — Plotting Points & Non-Uniqueness**

---

> 🔑 **The Big Surprise:** Unlike rectangular coordinates, a single point in the plane has **infinitely many** polar names. Learning *why* is the heart of this part.`,
      },
      {
        id: 'pol2-plot',
        type: 'text' as const,
        content: `## Plotting a Point, Step by Step

**Plot $\\left(3, \\dfrac{\\pi}{4}\\right)$:**

1. Start at the pole, facing right.
2. Rotate $\\dfrac{\\pi}{4}$ (that's $45^\\circ$) counterclockwise.
3. Walk out $3$ units along that ray.

You land in the first quadrant, halfway between "right" and "up."

**Plot $\\left(2, \\dfrac{3\\pi}{2}\\right)$:**

Rotate $\\dfrac{3\\pi}{2}$ (three-quarters of a turn) counterclockwise — you're now facing straight **down** — then walk out $2$ units. You land directly below the pole.

> 💡 Always do the rotation **first**, then the walk. The angle aims you; the radius moves you.`,
      },
      {
        id: 'pol2-negative-r',
        type: 'text' as const,
        content: `## Negative Radius: Walking Backward

What does $r < 0$ mean? You rotate to the angle $\\theta$ as usual — then walk **backward**, in the *opposite* direction.

$$\\left(-r, \\theta\\right) \\text{ is the same point as } \\left(r, \\theta + \\pi\\right)$$

**Example:** $\\left(-3, \\dfrac{\\pi}{4}\\right)$ means *"face $\\dfrac{\\pi}{4}$, then back up $3$ units."* Backing up from the $\\dfrac{\\pi}{4}$ direction puts you in the **third** quadrant — exactly where $\\left(3, \\dfrac{\\pi}{4} + \\pi\\right) = \\left(3, \\dfrac{5\\pi}{4}\\right)$ would put you.

> ⚠️ A negative radius does **not** mean the point is "below" anything. It means *reverse direction*. This is unique to polar coordinates — there's no such thing as a "negative $x$ that flips you around."`,
      },
      {
        id: 'pol2-negr-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which polar point is the **same** as $\\left(-2, \\dfrac{\\pi}{6}\\right)$?',
              options: [
                '$\\left(2, \\dfrac{7\\pi}{6}\\right)$',
                '$\\left(2, \\dfrac{\\pi}{6}\\right)$',
                '$\\left(-2, \\dfrac{7\\pi}{6}\\right)$',
                '$\\left(2, \\dfrac{\\pi}{3}\\right)$',
              ],
              correctAnswer: 0,
              explanation: 'A negative radius flips the direction by $\\pi$: $(-2, \\frac{\\pi}{6}) = (2, \\frac{\\pi}{6} + \\pi) = (2, \\frac{7\\pi}{6})$.',
            },
            {
              question: 'The point $\\left(-4, 0\\right)$ in polar coordinates lies:',
              options: [
                'On the negative $x$-axis (to the left of the pole)',
                'On the positive $x$-axis (to the right of the pole)',
                'On the positive $y$-axis (above the pole)',
                'At the pole itself',
              ],
              correctAnswer: 0,
              explanation: 'Face along $\\theta = 0$ (right), then walk backward $4$ units. You end up $4$ units to the **left** of the pole, on the negative $x$-axis.',
            },
          ],
        },
      },
      {
        id: 'pol2-non-unique',
        type: 'text' as const,
        content: `## One Point, Infinitely Many Names

Because adding $2\\pi$ to the angle is a full loop back to the same direction, and because negative radii give a second route, **every point has infinitely many polar representations.**

For a point with positive radius $r$ and angle $\\theta$, all of these name the *same* spot:

$$\\left(r,\\ \\theta + 2\\pi k\\right) \\quad\\text{and}\\quad \\left(-r,\\ \\theta + \\pi + 2\\pi k\\right), \\quad k \\in \\mathbb{Z}$$

**Example — the point $\\left(3, \\dfrac{\\pi}{4}\\right)$ is also:**

| Representation | How |
|----------------|-----|
| $\\left(3, \\dfrac{9\\pi}{4}\\right)$ | added $2\\pi$ to the angle |
| $\\left(3, -\\dfrac{7\\pi}{4}\\right)$ | subtracted $2\\pi$ |
| $\\left(-3, \\dfrac{5\\pi}{4}\\right)$ | negative radius, angle $+\\pi$ |

> 🔑 The pole itself is the most extreme case: $\\left(0, \\theta\\right)$ is the pole **for every** angle $\\theta$, since $r = 0$ means you never leave the center.`,
      },
      {
        id: 'pol2-names-check',
        type: 'dropdown-select' as const,
        content: `**Same Point, Different Names** 🔽

Each option below names a point. Pick the equivalent representation.`,
        exercise: {
          dropdowns: [
            { label: 'Add $2\\pi$ to $\\left(5, \\dfrac{\\pi}{3}\\right)$:', options: ['$\\left(5, \\dfrac{7\\pi}{3}\\right)$', '$\\left(5, \\dfrac{2\\pi}{3}\\right)$', '$\\left(7, \\dfrac{\\pi}{3}\\right)$', '$\\left(5, \\dfrac{4\\pi}{3}\\right)$'] },
            { label: 'Negative-radius name for $\\left(5, \\dfrac{\\pi}{3}\\right)$:', options: ['$\\left(-5, \\dfrac{4\\pi}{3}\\right)$', '$\\left(-5, \\dfrac{\\pi}{3}\\right)$', '$\\left(-5, \\dfrac{2\\pi}{3}\\right)$', '$\\left(-5, \\dfrac{7\\pi}{3}\\right)$'] },
          ],
          correctAnswers: ['$\\left(5, \\dfrac{7\\pi}{3}\\right)$', '$\\left(-5, \\dfrac{4\\pi}{3}\\right)$'],
          hint1: 'Adding $2\\pi = \\frac{6\\pi}{3}$ to $\\frac{\\pi}{3}$ gives $\\frac{7\\pi}{3}$.',
          hint2: 'For a negative radius, keep $|r| = 5$ but add $\\pi$ to the angle.',
          hint3: '$\\frac{\\pi}{3} + \\pi = \\frac{\\pi}{3} + \\frac{3\\pi}{3} = \\frac{4\\pi}{3}$, so $(-5, \\frac{4\\pi}{3})$ is the same point.',
          explanation: 'Same point, two ways: $(5, \\frac{\\pi}{3}) = (5, \\frac{7\\pi}{3})$ via $+2\\pi$, and $= (-5, \\frac{4\\pi}{3})$ via the negative-radius rule.',
        },
      },
      {
        id: 'pol2-angle-drill',
        type: 'input-boxes' as const,
        content: `**The Negative-Radius Angle** 🧮

To convert $(-r, \\theta)$ into a positive-radius name, add $\\pi$ to the angle. Each answer below is a multiple of $\\pi$ — **enter just the coefficient of $\\pi$** as a fraction (e.g. for $\\frac{7\\pi}{6}$ enter "7/6").

**1)** $\\theta = \\dfrac{\\pi}{6}$, so $\\theta + \\pi = \\,?\\,\\pi$
**2)** $\\theta = \\dfrac{\\pi}{2}$, so $\\theta + \\pi = \\,?\\,\\pi$
**3)** $\\theta = \\dfrac{\\pi}{4}$, so $\\theta + \\pi = \\,?\\,\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7/6', '3/2', '5/4'],
          hint1: '$\\frac{\\pi}{6} + \\pi = \\frac{\\pi}{6} + \\frac{6\\pi}{6} = \\frac{7\\pi}{6}$, so the coefficient is $\\frac{7}{6}$.',
          hint2: '$\\frac{\\pi}{2} + \\pi = \\frac{\\pi}{2} + \\frac{2\\pi}{2} = \\frac{3\\pi}{2}$, coefficient $\\frac{3}{2}$.',
          hint3: '$\\frac{\\pi}{4} + \\pi = \\frac{\\pi}{4} + \\frac{4\\pi}{4} = \\frac{5\\pi}{4}$, coefficient $\\frac{5}{4}$.',
          explanation: 'Add $\\pi$ by giving it the matching denominator: $\\frac{\\pi}{6} \\to \\frac{7\\pi}{6}$, $\\frac{\\pi}{2} \\to \\frac{3\\pi}{2}$, $\\frac{\\pi}{4} \\to \\frac{5\\pi}{4}$.',
        },
      },
      {
        id: 'pol2-recap',
        type: 'text' as const,
        content: `## Recap

- Rotate **first**, walk **second**.
- $r < 0$ means walk **backward** (flip the direction by $\\pi$).
- Every point has **infinitely many** names; the pole is $(0, \\theta)$ for *any* $\\theta$.

Next, in **Part 3**, we connect polar back to rectangular: given $(r, \\theta)$, find $(x, y)$.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polar-coordinates-intro',
    sections: [
      {
        id: 'pol3-intro',
        type: 'text' as const,
        content: `# 🧭 Introduction to Polar Coordinates

**Part 3 of 7 — Polar → Rectangular**

---

> 🔑 **The Bridge:** A right triangle connects the two systems. The radius $r$ is the hypotenuse, and the angle $\\theta$ is at the pole. Trig does the rest.`,
      },
      {
        id: 'pol3-formulas',
        type: 'text' as const,
        content: `## The Conversion Formulas

Drop a perpendicular from the point $(r, \\theta)$ down to the polar axis. You get a right triangle with hypotenuse $r$ and angle $\\theta$:

$$\\boxed{\\,x = r\\cos\\theta \\qquad y = r\\sin\\theta\\,}$$

This comes straight from $\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hyp}} = \\dfrac{x}{r}$ and $\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hyp}} = \\dfrac{y}{r}$.

> 💡 Memory hook: **co**sine pairs with the horizontal ($x$), sine with the vertical ($y$). The radius $r$ multiplies both — it just scales the unit-circle values out to distance $r$.`,
      },
      {
        id: 'pol3-worked1',
        type: 'text' as const,
        content: `## Worked Example: $\\left(4, \\dfrac{\\pi}{3}\\right)$

Apply the formulas with $r = 4$ and $\\theta = \\dfrac{\\pi}{3}$:

$$x = 4\\cos\\frac{\\pi}{3} = 4 \\cdot \\frac{1}{2} = 2$$

$$y = 4\\sin\\frac{\\pi}{3} = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$$

So $\\left(4, \\dfrac{\\pi}{3}\\right) \\to \\left(2,\\ 2\\sqrt{3}\\right)$ in rectangular form.

> ✅ **Sanity check:** $\\theta = \\frac{\\pi}{3} = 60^\\circ$ is in the first quadrant, so both $x$ and $y$ should be positive — and they are. ✓`,
      },
      {
        id: 'pol3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\left(2, \\dfrac{3\\pi}{4}\\right)$

With $r = 2$ and $\\theta = \\dfrac{3\\pi}{4}$ (second quadrant):

$$x = 2\\cos\\frac{3\\pi}{4} = 2 \\cdot \\left(-\\frac{\\sqrt{2}}{2}\\right) = -\\sqrt{2}$$

$$y = 2\\sin\\frac{3\\pi}{4} = 2 \\cdot \\frac{\\sqrt{2}}{2} = \\sqrt{2}$$

So $\\left(2, \\dfrac{3\\pi}{4}\\right) \\to \\left(-\\sqrt{2},\\ \\sqrt{2}\\right)$.

> ✅ **Sanity check:** $\\frac{3\\pi}{4} = 135^\\circ$ is in the second quadrant, where $x < 0$ and $y > 0$. Signs match. ✓`,
      },
      {
        id: 'pol3-mc-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert $\\left(6, \\dfrac{\\pi}{2}\\right)$ to rectangular coordinates.',
              options: ['$(0, 6)$', '$(6, 0)$', '$(0, -6)$', '$(6, 6)$'],
              correctAnswer: 0,
              explanation: '$x = 6\\cos\\frac{\\pi}{2} = 6\\cdot 0 = 0$ and $y = 6\\sin\\frac{\\pi}{2} = 6\\cdot 1 = 6$. The point is straight up the $y$-axis: $(0, 6)$.',
            },
            {
              question: 'Which formulas convert polar $(r, \\theta)$ to rectangular $(x, y)$?',
              options: [
                '$x = r\\cos\\theta,\\ \\ y = r\\sin\\theta$',
                '$x = r\\sin\\theta,\\ \\ y = r\\cos\\theta$',
                '$x = \\dfrac{\\cos\\theta}{r},\\ \\ y = \\dfrac{\\sin\\theta}{r}$',
                '$x = r + \\cos\\theta,\\ \\ y = r + \\sin\\theta$',
              ],
              correctAnswer: 0,
              explanation: 'From the right triangle: $\\cos\\theta = x/r$ and $\\sin\\theta = y/r$, so $x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
            },
          ],
        },
      },
      {
        id: 'pol3-input-drill',
        type: 'input-boxes' as const,
        content: `**Convert Polar → Rectangular** 🧮

Find $x$ and $y$ for $\\left(8, \\dfrac{\\pi}{6}\\right)$. Use $\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$ and $\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$.

**1)** $x = \\,?$  *(write as a multiple of $\\sqrt{3}$, e.g. "4√3", or use the form below)*
**2)** $y = \\,?$

*For box 1, enter the number that multiplies $\\sqrt{3}$ — i.e. if $x = 4\\sqrt{3}$, enter $4$.*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '4'],
          hint1: '$x = 8\\cos\\frac{\\pi}{6} = 8 \\cdot \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}$. The multiplier on $\\sqrt{3}$ is $4$.',
          hint2: '$y = 8\\sin\\frac{\\pi}{6} = 8 \\cdot \\frac{1}{2} = 4$.',
          hint3: 'Box 1 wants the coefficient $4$ (since $x = 4\\sqrt{3}$); box 2 is simply $4$.',
          explanation: '$x = 8\\cdot\\frac{\\sqrt{3}}{2} = 4\\sqrt{3}$ (coefficient $4$) and $y = 8\\cdot\\frac{1}{2} = 4$. Rectangular point: $(4\\sqrt{3},\\ 4)$.',
        },
      },
      {
        id: 'pol3-values-dropdown',
        type: 'dropdown-select' as const,
        content: `**Plug In the Right Value** 🔽

Pick the exact trig value used in each conversion.`,
        exercise: {
          dropdowns: [
            { label: 'For $x = r\\cos\\theta$ at $\\theta = \\dfrac{\\pi}{3}$, use $\\cos\\dfrac{\\pi}{3} =$', options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$1$'] },
            { label: 'For $y = r\\sin\\theta$ at $\\theta = \\dfrac{2\\pi}{3}$, use $\\sin\\dfrac{2\\pi}{3} =$', options: ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$', '$0$'] },
            { label: 'For $x = r\\cos\\theta$ at $\\theta = \\pi$, use $\\cos\\pi =$', options: ['$-1$', '$1$', '$0$', '$-\\dfrac{1}{2}$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-1$'],
          hint1: '$\\cos\\frac{\\pi}{3} = \\frac{1}{2}$ — a standard unit-circle value.',
          hint2: '$\\frac{2\\pi}{3}$ is in Quadrant II where sine is positive; $\\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2}$.',
          hint3: '$\\theta = \\pi$ points left, so $\\cos\\pi = -1$ and $\\sin\\pi = 0$.',
          explanation: 'Unit-circle values: $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, $\\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2}$ (QII, sine positive), $\\cos\\pi = -1$.',
        },
      },
      {
        id: 'pol3-recap',
        type: 'text' as const,
        content: `## Recap

$$x = r\\cos\\theta \\qquad y = r\\sin\\theta$$

Going polar → rectangular is **direct** — just plug in. The reverse trip (rectangular → polar) is trickier because of quadrants. That's **Part 4**.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polar-coordinates-intro',
    sections: [
      {
        id: 'pol4-intro',
        type: 'text' as const,
        content: `# 🧭 Introduction to Polar Coordinates

**Part 4 of 7 — Rectangular → Polar**

---

> 🔑 **The Catch:** Finding $r$ is easy (Pythagoras). Finding $\\theta$ requires care: $\\tan^{-1}$ only knows about two quadrants, so you must check **where the point actually lives**.`,
      },
      {
        id: 'pol4-formulas',
        type: 'text' as const,
        content: `## The Conversion Formulas

Given $(x, y)$, recover $r$ and $\\theta$:

$$\\boxed{\\,r = \\sqrt{x^2 + y^2} \\qquad \\tan\\theta = \\frac{y}{x}\\,}$$

- $r = \\sqrt{x^2+y^2}$ is just the **distance formula** from the origin (Pythagoras).
- $\\tan\\theta = \\dfrac{y}{x}$ comes from dividing $y = r\\sin\\theta$ by $x = r\\cos\\theta$.

> ⚠️ The equation $\\tan\\theta = \\frac{y}{x}$ has **two** solutions per turn (an angle and its opposite). Your calculator's $\\tan^{-1}$ returns only angles in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ — quadrants I and IV. You must **adjust** for quadrants II and III.`,
      },
      {
        id: 'pol4-quadrant-rule',
        type: 'text' as const,
        content: `## The Quadrant Adjustment

A reliable recipe: compute the **reference angle** $\\alpha = \\tan^{-1}\\left|\\dfrac{y}{x}\\right|$, then place $\\theta$ using the quadrant of $(x, y)$:

| Quadrant of $(x,y)$ | $\\theta$ (with $0 \\le \\theta < 2\\pi$) |
|---------------------|-----------------------------------------|
| I ($x>0,\\,y>0$) | $\\theta = \\alpha$ |
| II ($x<0,\\,y>0$) | $\\theta = \\pi - \\alpha$ |
| III ($x<0,\\,y<0$) | $\\theta = \\pi + \\alpha$ |
| IV ($x>0,\\,y<0$) | $\\theta = 2\\pi - \\alpha$ |

> 💡 **Always sketch the point first.** A 5-second sketch tells you the quadrant, which tells you the adjustment. Trusting $\\tan^{-1}$ blindly is the #1 source of wrong polar angles.`,
      },
      {
        id: 'pol4-worked1',
        type: 'text' as const,
        content: `## Worked Example: $(1, 1)$

This point is in **Quadrant I**.

$$r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$

$$\\alpha = \\tan^{-1}\\left|\\frac{1}{1}\\right| = \\tan^{-1}(1) = \\frac{\\pi}{4}$$

Quadrant I means $\\theta = \\alpha = \\dfrac{\\pi}{4}$.

$$\\left(1, 1\\right) \\to \\left(\\sqrt{2},\\ \\frac{\\pi}{4}\\right)$$

> ✅ **Check:** $x = \\sqrt{2}\\cos\\frac{\\pi}{4} = \\sqrt{2}\\cdot\\frac{\\sqrt{2}}{2} = 1$ ✓ and $y = \\sqrt{2}\\sin\\frac{\\pi}{4} = 1$ ✓`,
      },
      {
        id: 'pol4-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\left(-1, \\sqrt{3}\\right)$

Here $x < 0$ and $y > 0$, so the point is in **Quadrant II**.

$$r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$$

$$\\alpha = \\tan^{-1}\\left|\\frac{\\sqrt{3}}{-1}\\right| = \\tan^{-1}(\\sqrt{3}) = \\frac{\\pi}{3}$$

Quadrant II: $\\theta = \\pi - \\alpha = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$.

$$\\left(-1, \\sqrt{3}\\right) \\to \\left(2,\\ \\frac{2\\pi}{3}\\right)$$

> ✅ **Check:** $x = 2\\cos\\frac{2\\pi}{3} = 2\\cdot(-\\frac{1}{2}) = -1$ ✓ and $y = 2\\sin\\frac{2\\pi}{3} = 2\\cdot\\frac{\\sqrt{3}}{2} = \\sqrt{3}$ ✓. The quadrant adjustment was essential — raw $\\tan^{-1}(-\\sqrt{3}) = -\\frac{\\pi}{3}$ would have been wrong.`,
      },
      {
        id: 'pol4-mc-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the point $(-3, -3)$ (Quadrant III), what is $\\theta$ with $0 \\le \\theta < 2\\pi$?',
              options: ['$\\dfrac{5\\pi}{4}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{3\\pi}{4}$', '$\\dfrac{7\\pi}{4}$'],
              correctAnswer: 0,
              explanation: 'Reference angle $\\alpha = \\tan^{-1}|{-3}/{-3}| = \\frac{\\pi}{4}$. Quadrant III: $\\theta = \\pi + \\alpha = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}$.',
            },
            {
              question: 'Why can\'t you just trust your calculator\'s $\\tan^{-1}(y/x)$ for the polar angle?',
              options: [
                '$\\tan^{-1}$ only returns angles in quadrants I and IV, so II and III need adjusting',
                '$\\tan^{-1}$ is always off by exactly $2\\pi$',
                '$\\tan^{-1}$ returns the radius, not the angle',
                'Calculators cannot compute $\\tan^{-1}$ of a fraction',
              ],
              correctAnswer: 0,
              explanation: '$\\tan^{-1}$ outputs values only in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ — quadrants I and IV. For points in II or III you must add the correct multiple of $\\pi$ based on the sketch.',
            },
          ],
        },
      },
      {
        id: 'pol4-input-drill',
        type: 'input-boxes' as const,
        content: `**Find the Radius** 🧮

Compute $r = \\sqrt{x^2 + y^2}$ for each point. Answers are whole numbers.

**1)** $(3, 4)$:  $r = \\,?$
**2)** $(-6, 8)$:  $r = \\,?$
**3)** $(0, -5)$:  $r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '10', '5'],
          hint1: '$r = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
          hint2: '$r = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Squaring kills the negative.',
          hint3: '$r = \\sqrt{0^2 + (-5)^2} = \\sqrt{25} = 5$.',
          explanation: '1) $\\sqrt{25}=5$.  2) $\\sqrt{100}=10$.  3) $\\sqrt{25}=5$. The radius is always $\\ge 0$ from this formula.',
        },
      },
      {
        id: 'pol4-quadrant-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Quadrant Adjustment** 🔽

Given the reference angle $\\alpha = \\tan^{-1}\\left|\\dfrac{y}{x}\\right|$, pick the correct formula for $\\theta$ in each quadrant.`,
        exercise: {
          dropdowns: [
            { label: 'Point in Quadrant II ($x<0,\\,y>0$):', options: ['$\\theta = \\pi - \\alpha$', '$\\theta = \\alpha$', '$\\theta = \\pi + \\alpha$', '$\\theta = 2\\pi - \\alpha$'] },
            { label: 'Point in Quadrant III ($x<0,\\,y<0$):', options: ['$\\theta = \\pi + \\alpha$', '$\\theta = \\pi - \\alpha$', '$\\theta = \\alpha$', '$\\theta = 2\\pi - \\alpha$'] },
            { label: 'Point in Quadrant IV ($x>0,\\,y<0$):', options: ['$\\theta = 2\\pi - \\alpha$', '$\\theta = \\pi + \\alpha$', '$\\theta = \\pi - \\alpha$', '$\\theta = \\alpha$'] },
          ],
          correctAnswers: ['$\\theta = \\pi - \\alpha$', '$\\theta = \\pi + \\alpha$', '$\\theta = 2\\pi - \\alpha$'],
          hint1: 'In QII the angle is "almost $\\pi$" — back off by the reference angle: $\\pi - \\alpha$.',
          hint2: 'In QIII the angle is "just past $\\pi$" — add the reference angle: $\\pi + \\alpha$.',
          hint3: 'In QIV the angle is "almost a full turn" — back off from $2\\pi$: $2\\pi - \\alpha$.',
          explanation: 'QI: $\\alpha$; QII: $\\pi - \\alpha$; QIII: $\\pi + \\alpha$; QIV: $2\\pi - \\alpha$. The reference angle $\\alpha$ is always measured to the nearest part of the $x$-axis.',
        },
      },
      {
        id: 'pol4-recap',
        type: 'text' as const,
        content: `## Recap

$$r = \\sqrt{x^2 + y^2} \\qquad \\tan\\theta = \\frac{y}{x} \\ \\ (\\text{then fix the quadrant!})$$

Sketch first, find the reference angle, then place $\\theta$ in the right quadrant. With both conversions mastered, **Part 5** turns to **equations** — curves described in polar form.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polar-coordinates-intro',
    sections: [
      {
        id: 'pol5-intro',
        type: 'text' as const,
        content: `# 🧭 Introduction to Polar Coordinates

**Part 5 of 7 — Polar Equations of Simple Curves**

---

> 🔑 **New Idea:** A **polar equation** relates $r$ and $\\theta$ (e.g. $r = 4$ or $\\theta = \\frac{\\pi}{3}$). Some curves that are *messy* in rectangular form become beautifully simple in polar form — and vice versa.`,
      },
      {
        id: 'pol5-simplest',
        type: 'text' as const,
        content: `## The Two Simplest Polar Equations

**Constant radius — $r = a$:** every point is the *same distance* $a$ from the pole. That's a **circle of radius $a$ centered at the pole**.

$$r = 4 \\quad\\Longleftrightarrow\\quad x^2 + y^2 = 16$$

**Constant angle — $\\theta = \\beta$:** every point lies in the *same direction* from the pole (and its opposite, via negative $r$). That's a **line through the pole**.

$$\\theta = \\frac{\\pi}{3} \\quad\\Longleftrightarrow\\quad y = (\\tan\\tfrac{\\pi}{3})\\,x = \\sqrt{3}\\,x$$

| Polar equation | Curve |
|----------------|-------|
| $r = a$ | circle, radius $a$, centered at the pole |
| $\\theta = \\beta$ | line through the pole at angle $\\beta$ |

> 💡 A circle centered at the origin needs *two* variables in rectangular form ($x^2+y^2=a^2$) but only **one** in polar form ($r = a$). That economy is the whole appeal of polar coordinates.`,
      },
      {
        id: 'pol5-simplest-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The graph of the polar equation $r = 3$ is:',
              options: [
                'A circle of radius $3$ centered at the pole',
                'A line through the pole',
                'A single point $3$ units to the right',
                'A spiral',
              ],
              correctAnswer: 0,
              explanation: '$r = 3$ fixes the distance from the pole at $3$ for every angle — a circle of radius $3$ centered at the pole, i.e. $x^2 + y^2 = 9$.',
            },
            {
              question: 'The graph of $\\theta = \\dfrac{\\pi}{4}$ is:',
              options: [
                'A line through the pole (slope $1$)',
                'A circle of radius $\\frac{\\pi}{4}$',
                'A horizontal line $y = \\frac{\\pi}{4}$',
                'The single ray pointing up-right only',
              ],
              correctAnswer: 0,
              explanation: 'Fixing the angle at $\\frac{\\pi}{4}$ gives all points in that direction; allowing negative $r$ extends it backward too, forming the full line $y = (\\tan\\frac{\\pi}{4})x = x$.',
            },
          ],
        },
      },
      {
        id: 'pol5-convert-tools',
        type: 'text' as const,
        content: `## Converting Equations: Your Toolkit

To translate equations between systems, substitute using the four identities you already know, plus one more:

$$x = r\\cos\\theta \\qquad y = r\\sin\\theta \\qquad x^2 + y^2 = r^2$$

The last one comes from $r^2 = (r\\cos\\theta)^2 + (r\\sin\\theta)^2 = r^2(\\cos^2\\theta + \\sin^2\\theta) = r^2$. It's the workhorse for clearing $r^2$.

**Example — convert $r = 5$ to rectangular:** square both sides to get $r^2 = 25$, then replace $r^2$ with $x^2 + y^2$:

$$x^2 + y^2 = 25$$

**Example — convert $y = 2x$ to polar:** substitute $y = r\\sin\\theta$, $x = r\\cos\\theta$:

$$r\\sin\\theta = 2r\\cos\\theta \\;\\Rightarrow\\; \\tan\\theta = 2 \\;\\Rightarrow\\; \\theta = \\tan^{-1}(2)$$`,
      },
      {
        id: 'pol5-convert-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Substitution** 🔽

Choose the identity (or its result) that converts each equation.`,
        exercise: {
          dropdowns: [
            { label: 'To convert $r = 7$ to rectangular, first square to get $r^2 = 49$, then replace $r^2$ with:', options: ['$x^2 + y^2$', '$x + y$', '$x^2 - y^2$', '$xy$'] },
            { label: 'To convert $x = 4$ (a vertical line) to polar, replace $x$ with:', options: ['$r\\cos\\theta$', '$r\\sin\\theta$', '$r^2$', '$\\tan\\theta$'] },
          ],
          correctAnswers: ['$x^2 + y^2$', '$r\\cos\\theta$'],
          hint1: 'The key identity is $x^2 + y^2 = r^2$.',
          hint2: 'Horizontal position $x$ always becomes $r\\cos\\theta$.',
          hint3: '$x = 4 \\Rightarrow r\\cos\\theta = 4 \\Rightarrow r = \\frac{4}{\\cos\\theta} = 4\\sec\\theta$.',
          explanation: '$r^2 = x^2 + y^2$ clears the squared radius, and $x = r\\cos\\theta$ converts a vertical line: $x = 4 \\Rightarrow r = 4\\sec\\theta$.',
        },
      },
      {
        id: 'pol5-circle-off-pole',
        type: 'text' as const,
        content: `## A Circle Not Centered at the Pole

Here's a polar equation worth knowing: $\\,r = 4\\cos\\theta$. Multiply both sides by $r$ to set up the substitution:

$$r^2 = 4r\\cos\\theta \\;\\Rightarrow\\; x^2 + y^2 = 4x$$

Complete the square: $\\,x^2 - 4x + y^2 = 0 \\Rightarrow (x-2)^2 + y^2 = 4$.

That's a **circle of radius $2$ centered at $(2, 0)$** — it passes through the pole and bulges to the right.

> 🔑 General fact: $r = 2a\\cos\\theta$ is a circle of radius $|a|$ through the pole, centered on the $x$-axis; $r = 2a\\sin\\theta$ is the same but centered on the $y$-axis.`,
      },
      {
        id: 'pol5-circle-input',
        type: 'input-boxes' as const,
        content: `**Circle From a Polar Equation** 🧮

The polar equation $r = 6\\cos\\theta$ converts to $x^2 + y^2 = 6x$, i.e. $(x - 3)^2 + y^2 = 9$.

**1)** What is the radius of this circle?  $r = \\,?$
**2)** What is the $x$-coordinate of its center?  $\\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '3'],
          hint1: 'Multiply $r = 6\\cos\\theta$ by $r$: $r^2 = 6r\\cos\\theta \\Rightarrow x^2+y^2 = 6x$.',
          hint2: 'Complete the square: $x^2 - 6x + y^2 = 0 \\Rightarrow (x-3)^2 + y^2 = 9$.',
          hint3: 'In $(x-3)^2 + y^2 = 9 = 3^2$, the center is $(3, 0)$ and the radius is $3$.',
          explanation: '$(x-3)^2 + y^2 = 3^2$: a circle of radius $3$ centered at $(3, 0)$. Matches the rule $r = 2a\\cos\\theta$ with $2a = 6$, so $a = 3$.',
        },
      },
      {
        id: 'pol5-recap',
        type: 'text' as const,
        content: `## Recap

- $r = a$ → circle at the pole; $\\theta = \\beta$ → line through the pole.
- Convert with $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $x^2 + y^2 = r^2$.
- $r = 2a\\cos\\theta$ and $r = 2a\\sin\\theta$ are circles *through* the pole.

**Part 6** unveils the showpieces of polar graphing: cardioids, limaçons, and roses.`,
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'polar-coordinates-intro',
    sections: [
      {
        id: 'pol6-intro',
        type: 'text' as const,
        content: `# 🧭 Introduction to Polar Coordinates

**Part 6 of 7 — The Classic Polar Graphs**

---

> 🔑 **Why Polar Shines:** The famous "flower and heart" curves — roses, cardioids, limaçons — have *simple* polar equations but *horrible* rectangular ones. This is polar coordinates at their most beautiful.`,
      },
      {
        id: 'pol6-cardioid',
        type: 'text' as const,
        content: `## Cardioids: $r = a \\pm a\\cos\\theta$ or $r = a \\pm a\\sin\\theta$

A **cardioid** ("heart-shaped") appears when the constant equals the coefficient. Trace $r = 1 + \\cos\\theta$ by plugging in key angles:

| $\\theta$ | $\\cos\\theta$ | $r = 1 + \\cos\\theta$ |
|-----------|---------------|------------------------|
| $0$ | $1$ | $2$ |
| $\\dfrac{\\pi}{2}$ | $0$ | $1$ |
| $\\pi$ | $-1$ | $0$ |
| $\\dfrac{3\\pi}{2}$ | $0$ | $1$ |
| $2\\pi$ | $1$ | $2$ |

The curve reaches out to $r = 2$ at $\\theta = 0$ and pinches to the pole ($r = 0$) at $\\theta = \\pi$ — that pinch is the "dimple" of the heart.

> 💡 In a cardioid the curve **touches the pole exactly once**. The maximum radius is $2a$ (here $2$), found where the cosine/sine equals $+1$.`,
      },
      {
        id: 'pol6-cardioid-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the cardioid $r = 1 + \\cos\\theta$, at what angle does the curve reach the **pole** ($r = 0$)?',
              options: ['$\\theta = \\pi$', '$\\theta = 0$', '$\\theta = \\dfrac{\\pi}{2}$', '$\\theta = \\dfrac{3\\pi}{2}$'],
              correctAnswer: 0,
              explanation: 'Set $r = 0$: $1 + \\cos\\theta = 0 \\Rightarrow \\cos\\theta = -1 \\Rightarrow \\theta = \\pi$. That\'s the dimple of the heart.',
            },
            {
              question: 'What is the maximum value of $r$ for the cardioid $r = 3 + 3\\sin\\theta$?',
              options: ['$6$', '$3$', '$0$', '$9$'],
              correctAnswer: 0,
              explanation: '$\\sin\\theta$ maxes out at $1$, giving $r = 3 + 3(1) = 6$. In general the max radius of $a + a\\sin\\theta$ is $2a$.',
            },
          ],
        },
      },
      {
        id: 'pol6-limacon',
        type: 'text' as const,
        content: `## Limaçons: $r = a \\pm b\\cos\\theta$ (or $\\sin$)

A **limaçon** is the general family $r = a \\pm b\\cos\\theta$. The ratio $\\dfrac{a}{b}$ decides the shape:

| Condition | Shape |
|-----------|-------|
| $\\dfrac{a}{b} < 1$ | **inner loop** limaçon |
| $\\dfrac{a}{b} = 1$ | **cardioid** (special case!) |
| $1 < \\dfrac{a}{b} < 2$ | **dimpled** limaçon (no loop) |
| $\\dfrac{a}{b} \\ge 2$ | **convex** limaçon (no dimple) |

So a cardioid is just the limaçon where $a = b$. For example, $r = 1 + 2\\cos\\theta$ has $\\frac{a}{b} = \\frac{1}{2} < 1$, so it has an **inner loop**.

> ⚠️ Don't confuse $a$ and $b$. The **constant** is $a$; the **coefficient of the trig function** is $b$. The ratio $a/b$ — constant over coefficient — is what classifies the curve.`,
      },
      {
        id: 'pol6-limacon-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify the Limaçon** 🔽

For each equation, identify the shape using the ratio $\\dfrac{a}{b}$.`,
        exercise: {
          dropdowns: [
            { label: '$r = 2 + 2\\cos\\theta$ (ratio $= 1$):', options: ['cardioid', 'inner loop', 'dimpled', 'convex'] },
            { label: '$r = 1 + 3\\sin\\theta$ (ratio $= \\frac{1}{3}$):', options: ['inner loop', 'cardioid', 'dimpled', 'convex'] },
            { label: '$r = 4 + 2\\cos\\theta$ (ratio $= 2$):', options: ['convex', 'inner loop', 'cardioid', 'dimpled'] },
          ],
          correctAnswers: ['cardioid', 'inner loop', 'convex'],
          hint1: 'When the constant equals the coefficient ($a/b = 1$), the limaçon is a cardioid.',
          hint2: 'When $a/b < 1$ the curve has an inner loop.',
          hint3: 'When $a/b \\ge 2$ the curve is convex (no dimple). $4/2 = 2$ qualifies.',
          explanation: 'Ratios: $2/2 = 1 \\to$ cardioid; $1/3 < 1 \\to$ inner loop; $4/2 = 2 \\to$ convex.',
        },
      },
      {
        id: 'pol6-rose',
        type: 'text' as const,
        content: `## Rose Curves: $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$

A **rose** is a flower of petals. The integer $n$ controls the petal count:

$$\\text{If } n \\text{ is odd} \\Rightarrow n \\text{ petals.} \\qquad \\text{If } n \\text{ is even} \\Rightarrow 2n \\text{ petals.}$$

| Equation | $n$ | Petals |
|----------|-----|--------|
| $r = \\cos(3\\theta)$ | $3$ (odd) | $3$ |
| $r = \\sin(2\\theta)$ | $2$ (even) | $4$ |
| $r = 2\\cos(5\\theta)$ | $5$ (odd) | $5$ |
| $r = \\sin(4\\theta)$ | $4$ (even) | $8$ |

Each petal has length $|a|$ (the maximum radius).

> 🔑 Memorize the parity rule: **odd $n$ → $n$ petals; even $n$ → $2n$ petals.** It's the single most-tested fact about roses.`,
      },
      {
        id: 'pol6-rose-input',
        type: 'input-boxes' as const,
        content: `**Count the Petals** 🧮

Use the rule: odd $n$ → $n$ petals, even $n$ → $2n$ petals.

**1)** $r = \\cos(7\\theta)$:  number of petals $= \\,?$
**2)** $r = 3\\sin(6\\theta)$:  number of petals $= \\,?$
**3)** $r = 2\\cos(2\\theta)$:  number of petals $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '12', '4'],
          hint1: '$n = 7$ is odd, so the rose has $n = 7$ petals.',
          hint2: '$n = 6$ is even, so it has $2n = 12$ petals.',
          hint3: '$n = 2$ is even, so it has $2n = 4$ petals.',
          explanation: '1) $n=7$ odd → $7$ petals.  2) $n=6$ even → $12$ petals.  3) $n=2$ even → $4$ petals.',
        },
      },
      {
        id: 'pol6-recap',
        type: 'text' as const,
        content: `## Recap

| Curve | Equation | Key feature |
|-------|----------|-------------|
| Circle at pole | $r = a$ | radius $a$ |
| Circle through pole | $r = 2a\\cos\\theta$ | center on $x$-axis |
| Cardioid | $r = a \\pm a\\cos\\theta$ | one pole-touch, max $2a$ |
| Limaçon | $r = a \\pm b\\cos\\theta$ | shape from $a/b$ |
| Rose | $r = a\\cos(n\\theta)$ | odd $n \\to n$, even $n \\to 2n$ petals |

You've covered the whole introductory toolkit. **Part 7** is mixed mastery practice and the Exit Quiz.`,
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'polar-coordinates-intro',
    sections: [
      {
        id: 'pol7-intro',
        type: 'text' as const,
        content: `# 🧭 Introduction to Polar Coordinates

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) read and plot $(r, \\theta)$, (2) handle negative radii and non-uniqueness, (3) convert both directions, (4) recognize basic polar equations, and (5) name the classic polar graphs. Let's tie it all together.`,
      },
      {
        id: 'pol7-summary',
        type: 'text' as const,
        content: `## Master Reference

| Goal | Key tool |
|------|----------|
| Polar → rectangular | $x = r\\cos\\theta,\\ \\ y = r\\sin\\theta$ |
| Rectangular → polar | $r = \\sqrt{x^2+y^2},\\ \\ \\tan\\theta = \\frac{y}{x}$ (fix quadrant) |
| Clear $r^2$ | $x^2 + y^2 = r^2$ |
| Same point, new name | $(r, \\theta) = (r, \\theta + 2\\pi) = (-r, \\theta + \\pi)$ |
| Count rose petals | odd $n \\to n$, even $n \\to 2n$ |

> ⚠️ The two most common errors: **dropping the quadrant adjustment** when finding $\\theta$, and **swapping $\\sin$/$\\cos$** in the conversion formulas. Sketch first; remember **co**sine ↔ horizontal.`,
      },
      {
        id: 'pol7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Convert the polar point $\\left(2, \\pi\\right)$ to rectangular coordinates.',
              options: ['$(-2, 0)$', '$(2, 0)$', '$(0, 2)$', '$(0, -2)$'],
              correctAnswer: 0,
              explanation: '$x = 2\\cos\\pi = 2(-1) = -2$ and $y = 2\\sin\\pi = 2(0) = 0$. The point sits on the negative $x$-axis: $(-2, 0)$.',
            },
            {
              question: 'Which polar equation graphs as a **4-petaled** rose?',
              options: ['$r = \\sin(2\\theta)$', '$r = \\sin(4\\theta)$', '$r = \\cos(3\\theta)$', '$r = \\cos(\\theta)$'],
              correctAnswer: 0,
              explanation: '$r = \\sin(2\\theta)$ has $n = 2$ (even), giving $2n = 4$ petals. ($\\sin(4\\theta)$ gives $8$; $\\cos(3\\theta)$ gives $3$.)',
            },
            {
              question: 'The polar equation $r = 2 + 2\\sin\\theta$ is a:',
              options: ['Cardioid', 'Circle centered at the pole', 'Rose with 2 petals', 'Line through the pole'],
              correctAnswer: 0,
              explanation: 'The constant ($2$) equals the coefficient ($2$), so $a/b = 1$ — the defining ratio of a cardioid.',
            },
          ],
        },
      },
      {
        id: 'pol7-convert-drill',
        type: 'input-boxes' as const,
        content: `**Conversion Drill** 🧮

**1)** Convert $\\left(10, \\dfrac{\\pi}{2}\\right)$ to rectangular. Enter the $y$-coordinate. *(the $x$-coordinate is $0$)*
**2)** Find $r$ for the rectangular point $(8, 6)$:  $r = \\,?$
**3)** How many petals does $r = 5\\cos(3\\theta)$ have?  $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '10', '3'],
          hint1: '$y = 10\\sin\\frac{\\pi}{2} = 10 \\cdot 1 = 10$.',
          hint2: '$r = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.',
          hint3: 'For $r = 5\\cos(3\\theta)$, $n = 3$ is odd, so there are $3$ petals.',
          explanation: '1) $y = 10$ (point is $(0,10)$).  2) $r = \\sqrt{100} = 10$.  3) odd $n = 3 \\to 3$ petals.',
        },
      },
      {
        id: 'pol7-final-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Curve** 🔽

Identify each polar equation's graph.`,
        exercise: {
          dropdowns: [
            { label: '$r = 5$:', options: ['circle at the pole', 'line through the pole', 'cardioid', 'rose'] },
            { label: '$\\theta = \\dfrac{2\\pi}{3}$:', options: ['line through the pole', 'circle at the pole', 'cardioid', 'rose'] },
            { label: '$r = \\cos(5\\theta)$:', options: ['5-petaled rose', '10-petaled rose', 'cardioid', 'circle'] },
          ],
          correctAnswers: ['circle at the pole', 'line through the pole', '5-petaled rose'],
          hint1: '$r = a$ (constant radius) is a circle centered at the pole.',
          hint2: '$\\theta = \\beta$ (constant angle) is a line through the pole.',
          hint3: 'For $r = \\cos(5\\theta)$, $n = 5$ is odd, so there are $5$ petals.',
          explanation: '$r = 5 \\to$ circle at pole; $\\theta = \\frac{2\\pi}{3} \\to$ line through pole; $r = \\cos(5\\theta)$ with odd $n = 5 \\to$ 5-petaled rose.',
        },
      },
      {
        id: 'pol7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Convert $\\left(4, \\dfrac{\\pi}{3}\\right)$ to rectangular coordinates.',
              options: ['$\\left(2, 2\\sqrt{3}\\right)$', '$\\left(2\\sqrt{3}, 2\\right)$', '$\\left(2, 2\\right)$', '$\\left(4, 4\\right)$'],
              correctAnswer: 0,
              explanation: '$x = 4\\cos\\frac{\\pi}{3} = 4\\cdot\\frac{1}{2} = 2$ and $y = 4\\sin\\frac{\\pi}{3} = 4\\cdot\\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$.',
            },
            {
              question: 'Which polar point names the **same** location as $\\left(3, \\dfrac{\\pi}{4}\\right)$?',
              options: [
                '$\\left(-3, \\dfrac{5\\pi}{4}\\right)$',
                '$\\left(-3, \\dfrac{\\pi}{4}\\right)$',
                '$\\left(3, \\dfrac{3\\pi}{4}\\right)$',
                '$\\left(3, -\\dfrac{\\pi}{4}\\right)$',
              ],
              correctAnswer: 0,
              explanation: 'Negative-radius rule: $(3, \\frac{\\pi}{4}) = (-3, \\frac{\\pi}{4} + \\pi) = (-3, \\frac{5\\pi}{4})$.',
            },
            {
              question: 'The polar equation $r = 4\\cos\\theta$ graphs as a:',
              options: [
                'Circle of radius $2$ centered at $(2, 0)$',
                'Circle of radius $4$ centered at the pole',
                'Cardioid',
                'Line through the pole',
              ],
              correctAnswer: 0,
              explanation: 'Multiply by $r$: $r^2 = 4r\\cos\\theta \\Rightarrow x^2+y^2 = 4x \\Rightarrow (x-2)^2 + y^2 = 4$. Circle of radius $2$ centered at $(2,0)$.',
            },
          ],
        },
      },
    ],
  },
]
