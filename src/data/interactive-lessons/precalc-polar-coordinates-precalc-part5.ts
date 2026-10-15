export const precalcPolarPart5Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📈 Polar Function Graphs — Reading $r = f(\\theta)$

**Part 5 of 7 — Polar Function Graphs and Domain Restrictions**

A **polar function** $r = f(\\theta)$ takes an **angle** as its input and returns a **signed radius** as its output. Its graph in the polar plane is the set of points $(f(\\theta), \\theta)$.

### Two Pictures of the Same Function

The same function can be drawn two ways:

| Picture | Horizontal / input | Vertical / output |
|:--------|:-------------------|:------------------|
| Rectangular graph of $r = f(\\theta)$ | $\\theta$ on the horizontal axis | $r$ on the vertical axis |
| Polar graph of $r = f(\\theta)$ | $\\theta$ is a **rotation** from the polar axis | $r$ is a **signed distance** along that ray |

A change in the input rotates you around the pole. A change in the output moves you along the line through the pole at that angle: outward on the terminal ray when $r > 0$, and outward on the **opposite** ray when $r < 0$.

### Translating Features

| On the rectangular graph of $r = f(\\theta)$ | On the polar graph |
|:---------------------------------------------|:-------------------|
| $f(\\theta) = 0$ (a $\\theta$-intercept) | The curve passes through the pole |
| $f(\\theta) > 0$ | The point lies on the terminal ray of $\\theta$ |
| $f(\\theta) < 0$ | The point lies on the ray opposite $\\theta$ (rotated by $\\pi$) |
| Largest value of $|f(\\theta)|$ | The point farthest from the pole |

> 💡 The rectangular graph is a roadmap. Sketch it first, mark where $r$ is zero, positive and negative, then rotate around the pole to draw the polar curve.
      `
    },
    {
      id: 'p5-example',
      type: 'text' as const,
      content: `
## 📝 Worked Example: $r = 1 + 2\\cos\\theta$

### Step 1: Key values

| $\\theta$ | $0$ | $\\frac{\\pi}{2}$ | $\\frac{2\\pi}{3}$ | $\\pi$ | $\\frac{4\\pi}{3}$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |
|:--|:--|:--|:--|:--|:--|:--|:--|
| $r$ | $3$ | $1$ | $0$ | $-1$ | $0$ | $1$ | $3$ |

$r = 0$ when $\\cos\\theta = -\\frac{1}{2}$, so at $\\theta = \\frac{2\\pi}{3}$ and $\\theta = \\frac{4\\pi}{3}$.

### Step 2: Read the rectangular graph interval by interval

| Interval of $\\theta$ | Sign of $r$ | Angles point into | Points are plotted in |
|:----------------------|:------------|:------------------|:----------------------|
| $0 \\le \\theta \\le \\frac{\\pi}{2}$ | positive, $3 \\to 1$ | Quadrant I | Quadrant I |
| $\\frac{\\pi}{2} \\le \\theta \\le \\frac{2\\pi}{3}$ | positive, $1 \\to 0$ | Quadrant II | Quadrant II |
| $\\frac{2\\pi}{3} \\le \\theta \\le \\pi$ | negative, $0 \\to -1$ | Quadrant II | Quadrant IV |
| $\\pi \\le \\theta \\le \\frac{4\\pi}{3}$ | negative, $-1 \\to 0$ | Quadrant III | Quadrant I |
| $\\frac{4\\pi}{3} \\le \\theta \\le 2\\pi$ | positive, $0 \\to 3$ | Quadrants III, IV | Quadrants III, IV |

### Step 3: Draw

The positive pieces form the large outer loop. The negative pieces, from $\\theta = \\frac{2\\pi}{3}$ to $\\theta = \\frac{4\\pi}{3}$, are flipped through the pole into Quadrants IV and I, forming the **inner loop**. That inner loop is exactly the part of the curve where $r < 0$.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Reading Polar Function Graphs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A polar function has $f\\left(\\frac{5\\pi}{6}\\right) = -2$. Where is the point $\\left(f\\left(\\frac{5\\pi}{6}\\right), \\frac{5\\pi}{6}\\right)$ located?',
            options: ['Quadrant IV, 2 units from the pole', 'Quadrant II, 2 units from the pole', 'Quadrant III, 2 units from the pole', 'Quadrant I, 2 units from the pole'],
            correctAnswer: 0,
            explanation: 'The angle $\\frac{5\\pi}{6}$ points into Quadrant II, but $r < 0$ sends the point 2 units along the opposite ray, into Quadrant IV.'
          },
          {
            question: 'The rectangular graph of $r = f(\\theta)$ crosses the $\\theta$-axis at $\\theta = \\frac{\\pi}{3}$. What happens on the polar graph at that angle?',
            options: ['The curve crosses the horizontal axis', 'The curve passes through the pole', 'The curve is farthest from the pole', 'The curve crosses the line $\\theta = \\frac{\\pi}{2}$'],
            correctAnswer: 1,
            explanation: 'A $\\theta$-intercept means $f\\left(\\frac{\\pi}{3}\\right) = 0$, and a radius of 0 puts the point at the pole.'
          },
          {
            question: 'On which interval is $r = 1 + 2\\cos\\theta$ negative, tracing the inner loop?',
            options: ['$\\frac{\\pi}{2} < \\theta < \\frac{3\\pi}{2}$', '$\\frac{\\pi}{3} < \\theta < \\frac{5\\pi}{3}$', '$\\frac{2\\pi}{3} < \\theta < \\frac{4\\pi}{3}$', '$\\pi < \\theta < 2\\pi$'],
            correctAnswer: 2,
            explanation: '$1 + 2\\cos\\theta < 0$ when $\\cos\\theta < -\\frac{1}{2}$, which happens strictly between $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$.'
          }
        ]
      }
    },
    {
      id: 'p5-domain',
      type: 'text' as const,
      content: `
## ✂️ Restricting the Domain

Often you want only **part** of a polar curve: one petal, the inner loop, or half of a circle. Choose the starting and ending angles so the graph begins and ends at the points you want.

### Example 1: One petal of $r = 4\\sin(2\\theta)$

$r = 0$ at $\\theta = 0$ and again at $\\theta = \\frac{\\pi}{2}$, and $r > 0$ in between. Every angle in between points into Quadrant I, so

$$0 \\le \\theta \\le \\frac{\\pi}{2}$$

draws exactly the Quadrant I petal, reaching $r = 4$ at $\\theta = \\frac{\\pi}{4}$.

### Example 2: The inner loop of $r = 1 + 2\\cos\\theta$

The inner loop starts and ends at the pole, where $r = 0$:

$$\\frac{2\\pi}{3} \\le \\theta \\le \\frac{4\\pi}{3}$$

### Example 3: The upper half of $r = 4\\cos\\theta$

The full circle is traced once on $0 \\le \\theta \\le \\pi$. On $0 \\le \\theta \\le \\frac{\\pi}{2}$, $r \\ge 0$ and the angles point into Quadrant I, so $y = r\\sin\\theta \\ge 0$: that is the **upper** half. On $\\frac{\\pi}{2} \\le \\theta \\le \\pi$, $r \\le 0$ and the points land in Quadrant IV: the **lower** half.

> ⚠️ Pick endpoints by checking **both** the angle and the sign of $r$. An interval of angles in Quadrant II can draw points in Quadrant IV when $r$ is negative.
      `
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Signed Radius Practice** 🧮

For $r = 2 + 4\\cos\\theta$:

**1)** What is $r$ at $\\theta = \\pi$? (e.g., for $r = 1 + 3\\cos\\theta$ at $\\theta = \\pi$: $r = 1 - 3 = -2$)

**2)** How far from the pole is the point at $\\theta = \\pi$? (Distance is never negative.)

**3)** How many times does the graph pass through the pole for $0 \\le \\theta < 2\\pi$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '2', '2'],
        hint1: '$\\cos\\pi = -1$, so $r = 2 + 4(-1)$.',
        hint2: 'Distance from the pole is $|r|$.',
        hint3: 'Solve $2 + 4\\cos\\theta = 0$: $\\cos\\theta = -\\frac{1}{2}$ at $\\theta = \\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$.',
        explanation: '1) $r = -2$. 2) The distance is $|-2| = 2$; the point is plotted at $(2, 0)$ in rectangular coordinates. 3) $r = 0$ at $\\theta = \\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$, so 2 times.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which restriction draws only the upper half of the circle $r = 6\\cos\\theta$?',
            options: ['$0 \\le \\theta \\le \\frac{3\\pi}{2}$', '$0 \\le \\theta \\le \\frac{\\pi}{2}$', '$\\frac{\\pi}{2} \\le \\theta \\le \\pi$', '$-\\frac{\\pi}{2} \\le \\theta \\le 0$'],
            correctAnswer: 1,
            explanation: 'On $0 \\le \\theta \\le \\frac{\\pi}{2}$, $r \\ge 0$ and the angles point into Quadrant I, so every point has $y \\ge 0$. On $\\frac{\\pi}{2} \\le \\theta \\le \\pi$ the radius is negative and the points fall below the axis.'
          },
          {
            question: 'For $\\frac{\\pi}{2} < \\theta < \\pi$, a polar function has $f(\\theta) < 0$. Where are those points of the graph?',
            options: ['In Quadrant II, along each ray', 'In Quadrant IV, opposite each ray', 'In Quadrant III, below each ray', 'On the polar axis, at the pole'],
            correctAnswer: 1,
            explanation: 'Angles between $\\frac{\\pi}{2}$ and $\\pi$ point into Quadrant II; a negative radius sends each point along the opposite ray, into Quadrant IV.'
          }
        ]
      }
    }
  ]
};
