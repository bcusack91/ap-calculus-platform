export const physics1TwoDimensionalMotionPart6Data = {
  topicSlug: 'two-dimensional-motion',
  sections: [
    {
      id: 'td6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Two-Dimensional Motion**

This workshop walks through **multi-step 2D motion problems** that combine vector decomposition, kinematic equations, and the independence principle. These are the kinds of problems you'll see on the AP exam!
      `
    },
    {
      id: 'td6-strategy',
      type: 'text' as const,
      content: `
## AP Problem-Solving Framework

### DVAT Approach for 2D

Create **two separate DVAT tables** — one for each direction:

| Variable | Horizontal ($x$) | Vertical ($y$) |
|---|---|---|
| **D**isplacement | $\\Delta x = ?$ | $\\Delta y = ?$ |
| **V**elocity (initial) | $v_{0x} = v_0\\cos\\theta$ | $v_{0y} = v_0\\sin\\theta$ |
| **A**cceleration | $a_x = 0$ | $a_y = -g$ |
| **T**ime | $t$ | $t$ (same!) |

### Common Mistakes to Avoid

- ❌ Using the total speed where a component is needed
- ❌ Forgetting that $a_x = 0$ (not $g$!)
- ❌ Using different times for $x$ and $y$
- ❌ Mixing up $\\sin$ and $\\cos$ for components
      `
    },
    {
      id: 'td6-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

A ball is kicked at 20 m/s at 37° above horizontal from ground level. Use $g = 10$ m/s², $\\cos 37° = 0.8$, $\\sin 37° = 0.6$.

### Step 1: Resolve Components

$$v_{0x} = 20\\cos 37° = 20(0.8) = 16 \\text{ m/s}$$

$$v_{0y} = 20\\sin 37° = 20(0.6) = 12 \\text{ m/s}$$

### Step 2: Find Time of Flight

At landing, $\\Delta y = 0$ (returns to ground):

$$0 = v_{0y}t - \\frac{1}{2}gt^2 = 12t - 5t^2 = t(12 - 5t)$$

$t = 0$ (launch) or $t = 2.4$ s (landing)

### Step 3: Find Range

$$\\Delta x = v_{0x} \\cdot t = 16(2.4) = 38.4 \\text{ m}$$

### Step 4: Find Maximum Height

At max height, $v_y = 0$:

$$v_y^2 = v_{0y}^2 - 2g\\Delta y_{max}$$
$$0 = 144 - 20\\Delta y_{max}$$
$$\\Delta y_{max} = 7.2 \\text{ m}$$
      `
    },
    {
      id: 'td6-guided1',
      type: 'input-boxes' as const,
      content: `
**Guided Problem 1 — Cliff Launch** 🏔️

A stone is thrown horizontally at 12 m/s from a 45 m cliff. Use $g = 10$ m/s².

1) Time to reach the ground (in seconds)

2) Horizontal distance from the cliff base (in meters)

3) Vertical velocity at impact, magnitude (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '36', '30'],
        hint1: 'Vertical: $45 = \\frac{1}{2}(10)t^2 = 5t^2$',
        hint2: '$t^2 = 9$, $t = 3$ s. Horizontal: $x = 12(3)$',
        hint3: '$v_y = gt = 10(3) = 30$ m/s',
        explanation: '1) $45 = 5t^2$, $t = 3$ s. 2) $x = 12(3) = 36$ m. 3) $v_y = 10(3) = 30$ m/s.'
      }
    },
    {
      id: 'td6-guided2',
      type: 'input-boxes' as const,
      content: `
**Guided Problem 2 — Angled Launch** ⚽

A soccer ball is kicked at 25 m/s at 53° above horizontal from ground level. Use $g = 10$ m/s², $\\cos 53° = 0.6$, $\\sin 53° = 0.8$.

1) $v_{0x}$ (in m/s)

2) $v_{0y}$ (in m/s)

3) Time of flight (in seconds)

4) Range (in meters)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['15', '20', '4', '60'],
        hint1: '$v_{0x} = 25\\cos 53° = 25(0.6)$',
        hint2: '$v_{0y} = 25\\sin 53° = 25(0.8)$. For time: $0 = v_{0y}t - \\frac{1}{2}gt^2$',
        hint3: '$0 = t(20 - 5t)$, $t = 4$ s. Range: $x = v_{0x} \\cdot t$',
        explanation: '1) $v_{0x} = 25(0.6) = 15$ m/s. 2) $v_{0y} = 25(0.8) = 20$ m/s. 3) $0 = t(20 - 5t)$, $t = 4$ s. 4) $x = 15(4) = 60$ m.'
      }
    },
    {
      id: 'td6-concept-checks',
      type: 'dropdown-select' as const,
      content: `
**Concept Checks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At the maximum height of a projectile, $v_y$ equals:',
            options: ['$v_0$', '$v_{0y}$', '0', '$-g$'],
            correctIndex: 2,
            explanation: 'At maximum height, the projectile momentarily stops moving upward before falling back down, so $v_y = 0$.'
          },
          {
            label: 'At the maximum height of a projectile, $v_x$ equals:',
            options: ['0', '$v_{0x}$', '$v_0$', '$v_{0y}$'],
            correctIndex: 1,
            explanation: 'The horizontal velocity never changes (no horizontal acceleration), so $v_x = v_{0x}$ throughout the entire flight.'
          },
          {
            label: 'The acceleration at the top of a projectile\'s path is:',
            options: ['0', '$g$ downward', '$g$ upward', 'depends on launch angle'],
            correctIndex: 1,
            explanation: 'Gravity is always $g$ downward, even at the top of the path. The velocity is momentarily horizontal, but the acceleration is always $g$ downward.'
          }
        ]
      }
    },
    {
      id: 'td6-challenge',
      type: 'multiple-choice' as const,
      content: `
**Challenge Problems** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A ball is launched at 30 m/s at 30° above horizontal. Use $g = 10$ m/s², $\\sin 30° = 0.5$, $\\cos 30° \\approx 0.866$. What is the maximum height?',
            options: [
              '5.0 m',
              '7.5 m',
              '11.25 m',
              '15.0 m'
            ],
            correctAnswer: 2,
            explanation: '$v_{0y} = 30\\sin 30° = 15$ m/s. At max height: $0 = v_{0y}^2 - 2g h$, so $h = \\frac{v_{0y}^2}{2g} = \\frac{225}{20} = 11.25$ m.'
          },
          {
            question: 'A plane flying at 200 m/s horizontally drops a package from 500 m. Using $g = 10$ m/s², how far ahead of the drop point does the package land?',
            options: [
              '1000 m',
              '2000 m',
              '5000 m',
              '10000 m'
            ],
            correctAnswer: 1,
            explanation: 'Fall time: $500 = 5t^2$, $t = 10$ s. Horizontal distance: $x = 200(10) = 2000$ m.'
          }
        ]
      }
    },
    {
      id: 'td6-exit',
      type: 'input-boxes' as const,
      content: `
**Exit Problem** ✅

A ball is launched from the ground at 40 m/s at 37° above horizontal. Use $g = 10$ m/s², $\\cos 37° = 0.8$, $\\sin 37° = 0.6$.

1) Maximum height (in meters)

2) Total time of flight (in seconds)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['28.8', '4.8', '28.80', '4.80'],
        hint1: '$v_{0y} = 40(0.6) = 24$ m/s. At max height, $v_y = 0$.',
        hint2: '$h = \\frac{v_{0y}^2}{2g} = \\frac{576}{20}$',
        hint3: 'Time up = $\\frac{v_{0y}}{g} = \\frac{24}{10}$. Total time = $2 \\times$ time up.',
        explanation: '1) $h = \\frac{24^2}{2(10)} = \\frac{576}{20} = 28.8$ m. 2) $t_{up} = \\frac{24}{10} = 2.4$ s. Total: $2(2.4) = 4.8$ s.'
      }
    }
  ]
}
