export const precalcPolarPart6Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📏 Polar Rates of Change and Distance from the Origin

**Part 6 of 7 — Polar Rates of Change and Distance from the Origin**

For a polar function $r = f(\\theta)$, the distance from the point $(f(\\theta), \\theta)$ to the origin is $|f(\\theta)|$. So whether the curve is moving **away from** or **toward** the origin depends on two things at once: the **sign** of $r$ and whether $r$ is **increasing or decreasing**.

### The Four Cases

| $r = f(\\theta)$ is | and is | so $|r|$ is | Distance from the origin is |
|:--------------------|:-------|:------------|:----------------------------|
| positive | increasing | growing | **increasing** |
| positive | decreasing | shrinking | **decreasing** |
| negative | decreasing | growing (e.g. $-1 \\to -3$) | **increasing** |
| negative | increasing | shrinking (e.g. $-3 \\to -1$) | **decreasing** |

$$\\boxed{\\text{Same direction (positive and increasing, or negative and decreasing)} \\implies \\text{moving away from the origin}}$$

$$\\boxed{\\text{Opposite direction (positive and decreasing, or negative and increasing)} \\implies \\text{moving toward the origin}}$$

### Relative Extrema

If $r = f(\\theta)$ changes from increasing to decreasing (or from decreasing to increasing) on an interval, then $f$ has a **relative extremum** there, and that point is **relatively closest to or farthest from** the origin. A relative minimum with a **negative** value, such as $r = -3$, is a farthest point, because its distance is $3$.
      `
    },
    {
      id: 'p6-example',
      type: 'text' as const,
      content: `
## 📝 Worked Example: $r = 3\\sin(2\\theta)$ on $0 \\le \\theta \\le \\pi$

### Step 1: Key values

| $\\theta$ | $0$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{2}$ | $\\frac{3\\pi}{4}$ | $\\pi$ |
|:--|:--|:--|:--|:--|:--|
| $r$ | $0$ | $3$ | $0$ | $-3$ | $0$ |

### Step 2: Classify each interval

| Interval | $r$ is | Distance from the origin |
|:---------|:-------|:-------------------------|
| $0 < \\theta < \\frac{\\pi}{4}$ | positive and increasing ($0 \\to 3$) | increasing |
| $\\frac{\\pi}{4} < \\theta < \\frac{\\pi}{2}$ | positive and decreasing ($3 \\to 0$) | decreasing |
| $\\frac{\\pi}{2} < \\theta < \\frac{3\\pi}{4}$ | negative and decreasing ($0 \\to -3$) | increasing |
| $\\frac{3\\pi}{4} < \\theta < \\pi$ | negative and increasing ($-3 \\to 0$) | decreasing |

### Step 3: Interpret the extrema

- At $\\theta = \\frac{\\pi}{4}$, $r$ has a relative **maximum** of $3$: the tip of the Quadrant I petal, a point farthest from the origin.
- At $\\theta = \\frac{3\\pi}{4}$, $r$ has a relative **minimum** of $-3$: also a point farthest from the origin (distance $3$). It is plotted in Quadrant IV, the tip of another petal.
- At $\\theta = \\frac{\\pi}{2}$, $r = 0$: the curve is at the origin, its closest possible point.

> 💡 Notice that $r$ is **decreasing** on the whole interval $\\frac{\\pi}{4} < \\theta < \\frac{3\\pi}{4}$, yet the distance first shrinks and then grows. The sign change of $r$ at $\\frac{\\pi}{2}$ is what flips the behavior.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Distance from the Origin** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $r = 3\\sin(2\\theta)$, what happens to the points of the graph as $\\theta$ increases from $\\frac{\\pi}{2}$ to $\\frac{3\\pi}{4}$?',
            options: ['Their distance from the origin shrinks', 'Their distance from the origin grows', 'Their distance from the origin stays at 3', 'They stay on the polar axis the whole time'],
            correctAnswer: 1,
            explanation: 'On that interval $r$ is negative and decreasing, from $0$ to $-3$, so $|r|$ grows from $0$ to $3$ and the points move away from the origin.'
          },
          {
            question: 'A polar function $r = f(\\theta)$ has a relative minimum at $\\theta = \\frac{3\\pi}{2}$ with $f\\left(\\frac{3\\pi}{2}\\right) = -4$. What does this point represent?',
            options: ['A point that is relatively closest to the origin', 'A point where the curve passes through the pole', 'A point that is relatively farthest from the origin', 'A point where the curve meets the polar axis'],
            correctAnswer: 2,
            explanation: 'A relative extremum of $f$ is a relatively closest or farthest point. Here $|r| = 4$, and nearby values of $r$ are slightly greater than $-4$, so their distances are less than 4: this is a farthest point.'
          },
          {
            question: 'On an interval, $r = f(\\theta)$ is positive and decreasing. Which statement is true?',
            options: ['The distance from the origin is decreasing', 'The distance from the origin is growing', 'The curve is passing through the pole', 'The angle $\\theta$ is decreasing'],
            correctAnswer: 0,
            explanation: 'When $r > 0$, the distance from the origin is $r$ itself, so a decreasing $r$ means the points are moving toward the origin.'
          }
        ]
      }
    },
    {
      id: 'p6-aroc',
      type: 'text' as const,
      content: `
## 📐 Average Rate of Change of $r$

The **average rate of change** of $r$ with respect to $\\theta$ on $[\\theta_1, \\theta_2]$ is

$$\\frac{f(\\theta_2) - f(\\theta_1)}{\\theta_2 - \\theta_1}$$

It is the change in the **signed** radius divided by the change in angle, so its units are "radius units **per radian**."

### Example 1: From a formula

For $r = 3\\sin(2\\theta)$ on $\\left[0, \\frac{\\pi}{4}\\right]$:

$$\\frac{3 - 0}{\\frac{\\pi}{4} - 0} = \\frac{12}{\\pi} \\approx 3.82$$

On average, the signed radius grows by about $3.82$ units for each radian of rotation.

### Example 2: Estimating from a table

| $\\theta$ | $0$ | $\\frac{\\pi}{2}$ | $\\pi$ |
|:--|:--|:--|:--|
| $r = f(\\theta)$ | $2$ | $5$ | $3$ |

On $\\left[0, \\frac{\\pi}{2}\\right]$, the average rate of change is $\\frac{5 - 2}{\\frac{\\pi}{2}} = \\frac{6}{\\pi}$ per radian. To **estimate** $f\\left(\\frac{\\pi}{3}\\right)$, start at $\\theta = 0$ and apply that rate for $\\frac{\\pi}{3}$ radians:

$$f\\left(\\frac{\\pi}{3}\\right) \\approx 2 + \\frac{6}{\\pi}\\cdot\\frac{\\pi}{3} = 2 + 2 = 4$$

> ⚠️ This is an estimate, not an exact value: it assumes $r$ changes at a constant rate across the interval. A negative average rate of change means the **signed** radius is decreasing; it does not by itself say the curve is moving toward the origin. Check the sign of $r$ too.
      `
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Average Rate of Change Practice** 🧮

A polar function has $f\\left(\\frac{\\pi}{4}\\right) = 5$ and $f\\left(\\frac{\\pi}{2}\\right) = 2$.

**1)** What is the change in $r$ from $\\theta = \\frac{\\pi}{4}$ to $\\theta = \\frac{\\pi}{2}$?

**2)** What is the average rate of change of $r$ on $\\left[\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right]$? (Enter in terms of pi, like "-8/pi")

**3)** Use that rate to estimate $f\\left(\\frac{3\\pi}{8}\\right)$. (Enter a decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-3', '-12/pi', '3.5'],
        hint1: 'Change in $r$ = $f\\left(\\frac{\\pi}{2}\\right) - f\\left(\\frac{\\pi}{4}\\right)$.',
        hint2: 'Divide the change in $r$ by the change in $\\theta$, which is $\\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$.',
        hint3: '$\\frac{3\\pi}{8}$ is $\\frac{\\pi}{8}$ past $\\frac{\\pi}{4}$, so the estimate is $5 + \\left(-\\frac{12}{\\pi}\\right)\\cdot\\frac{\\pi}{8}$.',
        explanation: '1) $2 - 5 = -3$. 2) $\\frac{-3}{\\pi/4} = -\\frac{12}{\\pi}$ per radian. 3) $5 - \\frac{12}{\\pi}\\cdot\\frac{\\pi}{8} = 5 - 1.5 = 3.5$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'On an interval, $r = f(\\theta)$ is negative and increasing. What is happening to the distance between the graph and the origin?',
            options: ['It is getting larger', 'It is decreasing', 'It stays the same', 'It increases, then decreases'],
            correctAnswer: 1,
            explanation: 'A negative $r$ that is increasing moves toward zero, for example from $-3$ to $-1$, so $|r|$ shrinks and the points approach the origin.'
          },
          {
            question: 'For $r = 2 + \\cos\\theta$, what is the average rate of change of $r$ on $[0, \\pi]$?',
            options: ['$-\\frac{1}{\\pi}$', '$-\\frac{2}{\\pi}$', '$\\frac{2}{\\pi}$', '$-2\\pi$'],
            correctAnswer: 1,
            explanation: '$f(0) = 3$ and $f(\\pi) = 1$, so the average rate of change is $\\frac{1 - 3}{\\pi - 0} = -\\frac{2}{\\pi}$ per radian.'
          }
        ]
      }
    }
  ]
};
