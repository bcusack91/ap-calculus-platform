import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Pythagorean Theorem (Geometry).
 * Registry key: 'pythagorean-theorem' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'pythagorean-theorem',
    sections: [
      {
        id: 'pt1-intro',
        type: 'text' as const,
        content: `# 📐 The Pythagorean Theorem

**Part 1 of 5 — Right Triangles & the Theorem**

---

### Topics in This Part

| Section |
|---------|
| Right Triangles: Legs vs. Hypotenuse |
| The Theorem: $a^2 + b^2 = c^2$ |
| Why It's True (the area picture) |

> 🔑 **Key Concept:** The Pythagorean Theorem connects the three sides of a **right triangle**. It is one of the most-used relationships in all of mathematics — from carpentry to GPS to computer graphics.`,
      },
      {
        id: 'pt1-parts',
        type: 'text' as const,
        content: `## Parts of a Right Triangle

A **right triangle** has exactly one $90^\\circ$ angle (the **right angle**, marked with a small square).

- The two sides that form the right angle are the **legs**. We usually call them $a$ and $b$.
- The side **across from** the right angle is the **hypotenuse**, called $c$.

> 🔑 **The hypotenuse is always the longest side**, and it is *always* the one opposite the right angle. The two legs can be in either order — $a$ and $b$ are interchangeable.

| Side | Symbol | Location |
|------|--------|----------|
| Leg | $a$ | forms the right angle |
| Leg | $b$ | forms the right angle |
| Hypotenuse | $c$ | opposite the right angle (longest) |`,
      },
      {
        id: 'pt1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a right triangle, which side is the hypotenuse?',
              options: [
                'The side opposite the right angle',
                'The shortest side',
                'Either of the two sides touching the right angle',
                'Always the side labeled $a$',
              ],
              correctAnswer: 0,
              explanation: 'The hypotenuse is the side directly across from the $90^\\circ$ angle, and it is always the longest of the three sides.',
            },
            {
              question: 'A right triangle has sides of length $6$, $8$, and $10$. Which side is the hypotenuse?',
              options: ['$10$', '$8$', '$6$', 'You cannot tell'],
              correctAnswer: 0,
              explanation: 'The hypotenuse is always the longest side, so it must be $10$ — and indeed $6^2 + 8^2 = 36 + 64 = 100 = 10^2$.',
            },
          ],
        },
      },
      {
        id: 'pt1-theorem',
        type: 'text' as const,
        content: `## The Theorem

For **any right triangle** with legs $a$ and $b$ and hypotenuse $c$:

$$a^2 + b^2 = c^2$$

In words: *the square of the hypotenuse equals the sum of the squares of the two legs.*

### Why It's True — The Area Picture

Build a square on each side of the triangle. The theorem says the area of the square on the hypotenuse ($c^2$) is **exactly equal** to the combined areas of the squares on the two legs ($a^2 + b^2$).

| Square on side | Area |
|----------------|------|
| Leg $a$ | $a^2$ |
| Leg $b$ | $b^2$ |
| Hypotenuse $c$ | $c^2 = a^2 + b^2$ |

> ⚠️ **Order matters:** $c$ (the hypotenuse) is **always by itself** on one side of the equation. The two legs are the ones that get added. Putting a leg where $c$ belongs is the #1 mistake.`,
      },
      {
        id: 'pt1-verify',
        type: 'input-boxes' as const,
        content: `**Check the Theorem** 🧮

For the classic $3$-$4$-$5$ right triangle (legs $3$ and $4$, hypotenuse $5$), fill in each square's value.

**1)** $3^2 = \\,?$
**2)** $4^2 = \\,?$
**3)** $3^2 + 4^2 = \\,?$  *(this should equal $5^2$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '16', '25'],
          hint1: '$3^2 = 3 \\times 3 = 9$.',
          hint2: '$4^2 = 4 \\times 4 = 16$.',
          hint3: '$9 + 16 = 25$, and $5^2 = 25$ — so the theorem checks out.',
          explanation: '$3^2 + 4^2 = 9 + 16 = 25 = 5^2$. ✓ The two leg-squares add up to the hypotenuse-square.',
        },
      },
      {
        id: 'pt1-setup-bridge',
        type: 'text' as const,
        content: `## Setting Up the Equation Correctly

Before solving anything, get the equation in the right shape. Three habits keep you out of trouble:

1. **Spot the hypotenuse first** — it's opposite the right angle and is the longest side. Its square ($c^2$) stands alone.
2. **The two legs get added**, never subtracted, when you build the basic equation.
3. **Write it the same way every time:** $a^2 + b^2 = c^2$.

Lock that pattern in with the check below.`,
      },
      {
        id: 'pt1-which',
        type: 'dropdown-select' as const,
        content: `**Set Up the Equation** 🔽

A right triangle has legs $a$ and $b$ and hypotenuse $c$. Pick the correct piece for each blank.`,
        exercise: {
          dropdowns: [
            { label: 'The hypotenuse goes alone on one side as:', options: ['$c^2$', '$a^2$', '$b^2$', '$c$'] },
            { label: 'The two legs are combined by:', options: ['adding', 'subtracting', 'multiplying', 'dividing'] },
            { label: 'The full equation is:', options: ['$a^2 + b^2 = c^2$', '$a^2 + c^2 = b^2$', '$a + b = c$', '$a^2 - b^2 = c^2$'] },
          ],
          correctAnswers: ['$c^2$', 'adding', '$a^2 + b^2 = c^2$'],
          hint1: 'The hypotenuse $c$ is the side opposite the right angle; its square sits alone.',
          hint2: 'The theorem *adds* the two leg-squares.',
          hint3: 'Legs squared and added equal the hypotenuse squared: $a^2 + b^2 = c^2$.',
          explanation: 'Always: $a^2 + b^2 = c^2$, with the hypotenuse $c$ isolated and the two legs added.',
        },
      },
      {
        id: 'pt1-recap',
        type: 'text' as const,
        content: `## Recap

- A **right triangle** has one $90^\\circ$ angle.
- The **legs** ($a$, $b$) form the right angle; the **hypotenuse** ($c$) is opposite it and is the longest side.
- The theorem: $a^2 + b^2 = c^2$.

In Part 2 we'll use this equation to **find a missing hypotenuse**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'pythagorean-theorem',
    sections: [
      {
        id: 'pt2-intro',
        type: 'text' as const,
        content: `# 📐 The Pythagorean Theorem

**Part 2 of 5 — Finding the Hypotenuse**

---

> 🔑 **The Goal:** When you know both legs and want the hypotenuse, plug into $a^2 + b^2 = c^2$, add, then take the **square root**.`,
      },
      {
        id: 'pt2-steps',
        type: 'text' as const,
        content: `## The Steps

To find the hypotenuse $c$ when you know legs $a$ and $b$:

1. **Write** $a^2 + b^2 = c^2$.
2. **Square** each leg and **add**.
3. **Take the square root** to get $c$: $\\;c = \\sqrt{a^2 + b^2}$.

### Worked Example: legs $6$ and $8$

$$c^2 = 6^2 + 8^2 = 36 + 64 = 100$$
$$c = \\sqrt{100} = 10$$

So the hypotenuse is $10$.

> ✅ **Check:** $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✓`,
      },
      {
        id: 'pt2-worked2',
        type: 'text' as const,
        content: `### Worked Example: legs $5$ and $12$

$$c^2 = 5^2 + 12^2 = 25 + 144 = 169$$
$$c = \\sqrt{169} = 13$$

### Worked Example: legs $1$ and $1$ (a non-perfect square)

$$c^2 = 1^2 + 1^2 = 1 + 1 = 2 \\;\\Rightarrow\\; c = \\sqrt{2} \\approx 1.41$$

Not every answer is a whole number! When $a^2 + b^2$ isn't a perfect square, leave it in **exact radical form** ($\\sqrt{2}$) or round to a decimal if asked.

> 💡 **Pythagorean triples** are whole-number trios that satisfy $a^2+b^2=c^2$. Memorizing a few — $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ — lets you spot answers instantly.`,
      },
      {
        id: 'pt2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has legs $8$ and $15$. What is the hypotenuse?',
              options: ['$17$', '$23$', '$13$', '$\\sqrt{23}$'],
              correctAnswer: 0,
              explanation: '$c^2 = 8^2 + 15^2 = 64 + 225 = 289$, and $\\sqrt{289} = 17$. (This is the $8$-$15$-$17$ triple.)',
            },
            {
              question: 'To find the hypotenuse from the two legs, what is the LAST step?',
              options: [
                'Take the square root of the sum',
                'Square the sum',
                'Subtract the smaller leg',
                'Divide by $2$',
              ],
              correctAnswer: 0,
              explanation: 'After adding $a^2 + b^2$ you have $c^2$, so the final step is taking the square root to undo the square and get $c$.',
            },
          ],
        },
      },
      {
        id: 'pt2-drill-bridge',
        type: 'text' as const,
        content: `## Your Turn — Build the Reflex

The fastest way to internalize "add, then root" is repetition. Each triangle below is a Pythagorean triple, so every hypotenuse is a clean whole number. Square both legs, add, and take the root.

> 💡 If you recognize the triple (like $9$-$12$-$15$, which is $3$-$4$-$5$ tripled), you can write the answer without a calculator.`,
      },
      {
        id: 'pt2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Hypotenuse** 🧮

Each triangle below is a right triangle. Find the hypotenuse $c$. All three are perfect squares, so answers are whole numbers.

**1)** legs $9$ and $12$ $\\;\\Rightarrow\\; c = \\,?$
**2)** legs $7$ and $24$ $\\;\\Rightarrow\\; c = \\,?$
**3)** legs $20$ and $21$ $\\;\\Rightarrow\\; c = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '25', '29'],
          hint1: '$9^2 + 12^2 = 81 + 144 = 225$, and $\\sqrt{225} = 15$.',
          hint2: '$7^2 + 24^2 = 49 + 576 = 625$, and $\\sqrt{625} = 25$.',
          hint3: '$20^2 + 21^2 = 400 + 441 = 841$, and $\\sqrt{841} = 29$.',
          explanation: '1) $c=15$ ($9$-$12$-$15$).  2) $c=25$ ($7$-$24$-$25$).  3) $c=29$ ($20$-$21$-$29$).',
        },
      },
      {
        id: 'pt2-exact-bridge',
        type: 'text' as const,
        content: `## When the Answer Isn't "Nice"

The drills above were all Pythagorean triples, so the square roots came out whole. Most real triangles aren't so tidy. When $a^2 + b^2$ is **not** a perfect square, you have two honest ways to report the answer:

- **Exact form:** leave the radical, e.g. $c = \\sqrt{13}$.
- **Decimal approximation:** round, e.g. $c \\approx 3.6$ (use the $\\approx$ symbol, not $=$).

The next check walks through one of these step by step.`,
      },
      {
        id: 'pt2-exact',
        type: 'dropdown-select' as const,
        content: `**Exact vs. Rounded** 🔽

Legs are $2$ and $3$. Work through to the hypotenuse.`,
        exercise: {
          dropdowns: [
            { label: '$c^2 = 2^2 + 3^2 = $', options: ['$13$', '$5$', '$25$', '$36$'] },
            { label: 'Exact hypotenuse:', options: ['$\\sqrt{13}$', '$13$', '$\\sqrt{5}$', '$6.5$'] },
            { label: 'Rounded to the nearest tenth:', options: ['$3.6$', '$4.2$', '$2.6$', '$13.0$'] },
          ],
          correctAnswers: ['$13$', '$\\sqrt{13}$', '$3.6$'],
          hint1: '$2^2 + 3^2 = 4 + 9 = 13$.',
          hint2: 'Since $13$ is not a perfect square, $c = \\sqrt{13}$ exactly.',
          hint3: '$\\sqrt{13} \\approx 3.6056$, which rounds to $3.6$.',
          explanation: '$c^2 = 4 + 9 = 13$, so $c = \\sqrt{13} \\approx 3.6$. Leave it exact unless asked to round.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'pythagorean-theorem',
    sections: [
      {
        id: 'pt3-intro',
        type: 'text' as const,
        content: `# 📐 The Pythagorean Theorem

**Part 3 of 5 — Finding a Missing Leg**

---

> 🔑 **The Twist:** When the *hypotenuse* is known but a *leg* is missing, you **subtract** instead of add: rearrange to $a^2 = c^2 - b^2$.`,
      },
      {
        id: 'pt3-rearrange',
        type: 'text' as const,
        content: `## Solving for a Leg

Start from $a^2 + b^2 = c^2$ and isolate the missing leg. If $a$ is unknown:

$$a^2 = c^2 - b^2 \\quad\\Longrightarrow\\quad a = \\sqrt{c^2 - b^2}$$

> ⚠️ **Watch which number is biggest.** The hypotenuse $c$ is always the largest side, so $c^2$ must come **first** in the subtraction. If you accidentally compute $b^2 - c^2$ you'll get a negative number under the root — a sign you mixed up the hypotenuse and a leg.

### Worked Example: hypotenuse $13$, one leg $5$

$$a^2 = 13^2 - 5^2 = 169 - 25 = 144$$
$$a = \\sqrt{144} = 12$$

The missing leg is $12$. (This is the $5$-$12$-$13$ triple.)`,
      },
      {
        id: 'pt3-worked2',
        type: 'text' as const,
        content: `### Worked Example: hypotenuse $17$, one leg $8$

$$a^2 = 17^2 - 8^2 = 289 - 64 = 225$$
$$a = \\sqrt{225} = 15$$

### Worked Example: hypotenuse $10$, one leg $6$

$$a^2 = 10^2 - 6^2 = 100 - 36 = 64$$
$$a = \\sqrt{64} = 8$$

> ✅ **Check:** $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✓ — the recovered leg fits.`,
      },
      {
        id: 'pt3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has hypotenuse $25$ and one leg $7$. The other leg is:',
              options: ['$24$', '$18$', '$26$', '$\\sqrt{674}$'],
              correctAnswer: 0,
              explanation: '$a^2 = 25^2 - 7^2 = 625 - 49 = 576$, and $\\sqrt{576} = 24$. (The $7$-$24$-$25$ triple.)',
            },
            {
              question: 'When solving for a missing LEG, you should:',
              options: [
                'Subtract the known leg-square from the hypotenuse-square',
                'Add the two known squares',
                'Subtract the hypotenuse-square from the leg-square',
                'Square the hypotenuse twice',
              ],
              correctAnswer: 0,
              explanation: 'Rearranging $a^2 + b^2 = c^2$ gives $a^2 = c^2 - b^2$: the hypotenuse-square minus the known leg-square.',
            },
          ],
        },
      },
      {
        id: 'pt3-order-bridge',
        type: 'text' as const,
        content: `## Walk Through the Order of Operations

It's easy to set up a leg problem wrong by subtracting in the wrong direction. The next check makes you commit to each step in order, so you can see exactly where the hypotenuse-square must lead.

> ⚠️ The biggest number (the hypotenuse) is squared **first** and everything else is subtracted from it. If your result under the root is negative, you've swapped a leg with the hypotenuse.`,
      },
      {
        id: 'pt3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Work** 🔽

Hypotenuse is $15$, one leg is $9$. Find the other leg.`,
        exercise: {
          dropdowns: [
            { label: 'Set up:', options: ['$a^2 = 15^2 - 9^2$', '$a^2 = 15^2 + 9^2$', '$a^2 = 9^2 - 15^2$', '$a = 15 - 9$'] },
            { label: 'Compute the squares:', options: ['$225 - 81$', '$225 + 81$', '$81 - 225$', '$30 - 18$'] },
            { label: '$a^2 = $', options: ['$144$', '$306$', '$162$', '$36$'] },
            { label: 'So $a = $', options: ['$12$', '$6$', '$18$', '$\\sqrt{306}$'] },
          ],
          correctAnswers: ['$a^2 = 15^2 - 9^2$', '$225 - 81$', '$144$', '$12$'],
          hint1: 'The hypotenuse $15$ is largest, so its square leads: $a^2 = 15^2 - 9^2$.',
          hint2: '$15^2 = 225$ and $9^2 = 81$, so you compute $225 - 81$.',
          hint3: '$225 - 81 = 144$, and $\\sqrt{144} = 12$. (The $9$-$12$-$15$ triple.)',
          explanation: '$a^2 = 225 - 81 = 144 \\Rightarrow a = 12$. This is the $3$-$4$-$5$ triple scaled by $3$.',
        },
      },
      {
        id: 'pt3-recognize-bridge',
        type: 'text' as const,
        content: `## Recognizing the Subtraction Setup

Every "missing leg" problem follows the same rhythm: **biggest square minus known square, then root.**

$$\\text{leg} = \\sqrt{(\\text{hypotenuse})^2 - (\\text{known leg})^2}$$

Many of these are just familiar triples in disguise — if you see a $13$ hypotenuse with a $12$ leg, you can almost feel the $5$ coming. Try the next set without a calculator where you can.`,
      },
      {
        id: 'pt3-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Leg** 🧮

Each is a right triangle with the hypotenuse given. Find the missing leg (all whole numbers).

**1)** hypotenuse $13$, leg $12$ $\\;\\Rightarrow\\;$ other leg $= \\,?$
**2)** hypotenuse $26$, leg $10$ $\\;\\Rightarrow\\;$ other leg $= \\,?$
**3)** hypotenuse $41$, leg $9$ $\\;\\Rightarrow\\;$ other leg $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '24', '40'],
          hint1: '$13^2 - 12^2 = 169 - 144 = 25$, and $\\sqrt{25} = 5$.',
          hint2: '$26^2 - 10^2 = 676 - 100 = 576$, and $\\sqrt{576} = 24$.',
          hint3: '$41^2 - 9^2 = 1681 - 81 = 1600$, and $\\sqrt{1600} = 40$.',
          explanation: '1) $5$ ($5$-$12$-$13$).  2) $24$ ($10$-$24$-$26$).  3) $40$ ($9$-$40$-$41$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'pythagorean-theorem',
    sections: [
      {
        id: 'pt4-intro',
        type: 'text' as const,
        content: `# 📐 The Pythagorean Theorem

**Part 4 of 5 — Applications, Distance & the Converse**

---

> 🔑 **Big Payoff:** The theorem powers real-world distance problems, the **distance formula** on the coordinate plane, and a test (the **converse**) for whether a triangle is right at all.`,
      },
      {
        id: 'pt4-word',
        type: 'text' as const,
        content: `## Word Problems

The trick is to **find the right triangle hiding in the situation**. The hypotenuse is the slanted/longest distance; the legs are usually horizontal and vertical.

### Example: The Ladder

A $13$-ft ladder leans against a wall with its base $5$ ft from the wall. How high up the wall does it reach?

The ladder is the **hypotenuse** ($13$); the ground distance is one **leg** ($5$); the wall height is the missing leg.

$$h^2 = 13^2 - 5^2 = 169 - 25 = 144 \\;\\Rightarrow\\; h = 12 \\text{ ft}$$

> 💡 The ladder is the longest side, so it must be the hypotenuse. Spotting the hypotenuse first keeps you from subtracting in the wrong direction.`,
      },
      {
        id: 'pt4-word-quiz',
        type: 'multiple-choice' as const,
        content: `**Application Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A soccer field is $40$ m wide and $30$ m long. How long is the diagonal from corner to corner?',
              options: ['$50$ m', '$70$ m', '$35$ m', '$10$ m'],
              correctAnswer: 0,
              explanation: 'The diagonal is the hypotenuse: $d^2 = 40^2 + 30^2 = 1600 + 900 = 2500$, and $\\sqrt{2500} = 50$ m.',
            },
            {
              question: 'A wire runs from the top of a $24$-ft pole to a point $7$ ft from its base. How long is the wire?',
              options: ['$25$ ft', '$31$ ft', '$23$ ft', '$17$ ft'],
              correctAnswer: 0,
              explanation: 'The wire is the hypotenuse: $w^2 = 24^2 + 7^2 = 576 + 49 = 625$, and $\\sqrt{625} = 25$ ft.',
            },
          ],
        },
      },
      {
        id: 'pt4-distance',
        type: 'text' as const,
        content: `## The Distance Formula

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is just the Pythagorean Theorem in disguise:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

The horizontal gap $(x_2 - x_1)$ and the vertical gap $(y_2 - y_1)$ are the two **legs**; the straight-line distance $d$ is the **hypotenuse**.

### Example: distance from $(1, 2)$ to $(4, 6)$

$$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

> 🔑 You don't have to memorize a "new" formula — it's $a^2 + b^2 = c^2$ where the legs are the run and the rise between the points.`,
      },
      {
        id: 'pt4-distance-drill',
        type: 'input-boxes' as const,
        content: `**Distance on the Plane** 🧮

Use $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$. All answers come out whole.

**1)** distance from $(0,0)$ to $(6,8)$ $= \\,?$
**2)** distance from $(-1, 2)$ to $(2, 6)$ $= \\,?$
**3)** distance from $(1, 3)$ to $(9, 18)$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '5', '17'],
          hint1: '$\\sqrt{6^2 + 8^2} = \\sqrt{36+64} = \\sqrt{100} = 10$.',
          hint2: 'Legs are $2-(-1)=3$ and $6-2=4$: $\\sqrt{3^2+4^2} = \\sqrt{25} = 5$.',
          hint3: 'Legs are $9-1=8$ and $18-3=15$: $\\sqrt{8^2+15^2} = \\sqrt{64+225} = \\sqrt{289} = 17$.',
          explanation: '1) $10$ (legs $6,8$).  2) $5$ (legs $3,4$).  3) $17$ (legs $8,15$).',
        },
      },
      {
        id: 'pt4-converse',
        type: 'text' as const,
        content: `## The Converse: Is It a Right Triangle?

The **converse** of the theorem runs the logic backward:

> If $a^2 + b^2 = c^2$ (with $c$ the longest side), then the triangle **IS** a right triangle.

You can also classify triangles that aren't right:

| Compare | Triangle is |
|---------|-------------|
| $a^2 + b^2 = c^2$ | **right** |
| $a^2 + b^2 > c^2$ | **acute** (all angles $< 90^\\circ$) |
| $a^2 + b^2 < c^2$ | **obtuse** (one angle $> 90^\\circ$) |

Always let $c$ be the **longest** side before comparing.

### Example: sides $9$, $12$, $15$

Longest is $15$: $\\;9^2 + 12^2 = 81 + 144 = 225$ and $15^2 = 225$. Equal → **right triangle**. ✓`,
      },
      {
        id: 'pt4-converse-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify the Triangle** 🔽

For each side-trio, the longest side is $c$. Compare $a^2 + b^2$ to $c^2$.`,
        exercise: {
          dropdowns: [
            { label: 'Sides $6, 8, 10$:', options: ['right', 'acute', 'obtuse', 'not a triangle'] },
            { label: 'Sides $4, 5, 6$ ($16 + 25 = 41 > 36$):', options: ['acute', 'right', 'obtuse', 'not a triangle'] },
            { label: 'Sides $5, 6, 10$ ($25 + 36 = 61 < 100$):', options: ['obtuse', 'right', 'acute', 'not a triangle'] },
          ],
          correctAnswers: ['right', 'acute', 'obtuse'],
          hint1: '$6^2 + 8^2 = 36 + 64 = 100 = 10^2$ — equal means right.',
          hint2: '$4^2 + 5^2 = 41$, which is greater than $6^2 = 36$ — bigger sum means acute.',
          hint3: '$5^2 + 6^2 = 61$, which is less than $10^2 = 100$ — smaller sum means obtuse.',
          explanation: 'Equal → right; sum bigger than $c^2$ → acute; sum smaller than $c^2$ → obtuse.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'pythagorean-theorem',
    sections: [
      {
        id: 'pt5-intro',
        type: 'text' as const,
        content: `# 📐 The Pythagorean Theorem

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name the parts of a right triangle, (2) find the hypotenuse, (3) find a missing leg, and (4) apply the theorem to word problems, distance, and the converse. Let's put it all together.`,
      },
      {
        id: 'pt5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find the hypotenuse $c$ | $c = \\sqrt{a^2 + b^2}$ (add, then root) |
| Find a leg $a$ | $a = \\sqrt{c^2 - b^2}$ (subtract, then root) |
| Distance between points | $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |
| Is it a right triangle? | check if $a^2 + b^2 = c^2$ |

### Triples Worth Knowing

| Triple | Check |
|--------|-------|
| $3$-$4$-$5$ | $9 + 16 = 25$ |
| $5$-$12$-$13$ | $25 + 144 = 169$ |
| $8$-$15$-$17$ | $64 + 225 = 289$ |
| $7$-$24$-$25$ | $49 + 576 = 625$ |

> ⚠️ Remember: the hypotenuse is **always** the longest side and stands alone as $c^2$. **Add** to find the hypotenuse; **subtract** to find a leg.`,
      },
      {
        id: 'pt5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has legs $12$ and $16$. The hypotenuse is:',
              options: ['$20$', '$28$', '$18$', '$\\sqrt{28}$'],
              correctAnswer: 0,
              explanation: '$c^2 = 12^2 + 16^2 = 144 + 256 = 400$, and $\\sqrt{400} = 20$. (The $3$-$4$-$5$ triple scaled by $4$.)',
            },
            {
              question: 'A right triangle has hypotenuse $15$ and one leg $12$. The other leg is:',
              options: ['$9$', '$3$', '$\\sqrt{369}$', '$27$'],
              correctAnswer: 0,
              explanation: '$a^2 = 15^2 - 12^2 = 225 - 144 = 81$, and $\\sqrt{81} = 9$. (The $9$-$12$-$15$ triple.)',
            },
          ],
        },
      },
      {
        id: 'pt5-drill-bridge',
        type: 'text' as const,
        content: `## Decide Before You Compute

The hardest part of a mixed set is choosing the right move. A two-second sort saves you every time:

- Given **two legs** and want the long side? → **add**, then root (hypotenuse).
- Given the **hypotenuse** and one leg? → **subtract**, then root (missing leg).
- Given **two points**? → subtract coordinates to get the legs, then it's a hypotenuse problem.

Apply that sort to each item below.`,
      },
      {
        id: 'pt5-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

**1)** Legs $10$ and $24$: hypotenuse $= \\,?$
**2)** Hypotenuse $37$, leg $12$: other leg $= \\,?$
**3)** Distance from $(2, 3)$ to $(14, 8)$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['26', '35', '13'],
          hint1: '$10^2 + 24^2 = 100 + 576 = 676$, and $\\sqrt{676} = 26$.',
          hint2: '$37^2 - 12^2 = 1369 - 144 = 1225$, and $\\sqrt{1225} = 35$. (The $12$-$35$-$37$ triple.)',
          hint3: 'Legs are $14-2 = 12$ and $8-3 = 5$: $\\sqrt{12^2 + 5^2} = \\sqrt{144+25} = \\sqrt{169} = 13$.',
          explanation: '1) $26$ ($10$-$24$-$26$).  2) $35$ ($12$-$35$-$37$).  3) $13$ ($5$-$12$-$13$).',
        },
      },
      {
        id: 'pt5-exit-bridge',
        type: 'text' as const,
        content: `## One Last Look Before the Quiz

You've covered all four skills. The exit quiz pulls one question from each major idea:

- finding a hypotenuse from two legs,
- using the **converse** to classify a triangle,
- and the **distance formula** on the coordinate plane.

Keep the triples handy and remember: **hypotenuse alone, legs added.** Ready when you are.`,
      },
      {
        id: 'pt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has legs $9$ and $40$. What is the hypotenuse?',
              options: ['$41$', '$49$', '$31$', '$\\sqrt{49}$'],
              correctAnswer: 0,
              explanation: '$c^2 = 9^2 + 40^2 = 81 + 1600 = 1681$, and $\\sqrt{1681} = 41$. (The $9$-$40$-$41$ triple.)',
            },
            {
              question: 'A triangle has sides $7$, $9$, and $12$. Since $7^2 + 9^2 = 130 < 12^2 = 144$, the triangle is:',
              options: ['obtuse', 'right', 'acute', 'equilateral'],
              correctAnswer: 0,
              explanation: 'When $a^2 + b^2 < c^2$ (the sum is less than the longest-side-squared), the triangle is obtuse — one angle exceeds $90^\\circ$.',
            },
            {
              question: 'What is the distance between $(0, 0)$ and $(5, 12)$?',
              options: ['$13$', '$17$', '$7$', '$\\sqrt{17}$'],
              correctAnswer: 0,
              explanation: '$d = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. (The $5$-$12$-$13$ triple.)',
            },
          ],
        },
      },
    ],
  },
]
