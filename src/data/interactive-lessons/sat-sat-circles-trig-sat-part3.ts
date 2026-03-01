export const satCirclesTrigPart3Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct3-intro',
      type: 'text' as const,
      content: `
# 📏 Right Triangle Trigonometry

**Part 3 of 7 — SOH-CAH-TOA, Finding Sides & Angles, Special Triangles**

For a right triangle with an acute angle $\\theta$:

| Ratio | Formula | Mnemonic |
|-------|---------|----------|
| $\\sin \\theta$ | $\\frac{\\text{opposite}}{\\text{hypotenuse}}$ | **S**OH |
| $\\cos \\theta$ | $\\frac{\\text{adjacent}}{\\text{hypotenuse}}$ | **C**AH |
| $\\tan \\theta$ | $\\frac{\\text{opposite}}{\\text{adjacent}}$ | **T**OA |

Also: $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$

**SAT Tip:** The SAT provides the reference formulas for special triangles on the formula sheet, but memorizing them saves precious time.
      `
    },
    {
      id: 'sat-ct3-special',
      type: 'text' as const,
      content: `
## Special Right Triangles

**45-45-90 Triangle:**

$$\\text{sides} = 1 : 1 : \\sqrt{2}$$

If a leg is $a$, the hypotenuse is $a\\sqrt{2}$.

$\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2} \\qquad \\tan 45° = 1$

**30-60-90 Triangle:**

$$\\text{sides} = 1 : \\sqrt{3} : 2$$

- Short leg (opposite $30°$) $= x$
- Long leg (opposite $60°$) $= x\\sqrt{3}$
- Hypotenuse $= 2x$

| Angle | $\\sin$ | $\\cos$ | $\\tan$ |
|-------|---------|---------|---------|
| $30°$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
| $60°$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
      `
    },
    {
      id: 'sat-ct3-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** In a right triangle, $\\sin A = \\frac{5}{13}$. Find $\\cos A$.

1. Opposite $= 5$, hypotenuse $= 13$.
2. Adjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.
3. $\\cos A = \\frac{12}{13}$.

**Example 2:** A ladder leans against a wall, making a $60°$ angle with the ground. If the foot of the ladder is $4$ meters from the wall, how long is the ladder?

1. The side adjacent to $60°$ is $4$ m, and we want the hypotenuse.
2. $\\cos 60° = \\frac{4}{\\text{hyp}} \\Rightarrow \\frac{1}{2} = \\frac{4}{\\text{hyp}} \\Rightarrow \\text{hyp} = 8$ m.

**Example 3:** A square has side length $6$. What is the length of its diagonal?

The diagonal creates a $45\\text{-}45\\text{-}90$ triangle: $d = 6\\sqrt{2}$.
      `
    },
    {
      id: 'sat-ct3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Right Triangle Trig** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle $ABC$ with right angle at $C$, $BC = 8$ and $AC = 15$. What is $\\tan A$?',
            options: ['$\\frac{8}{15}$', '$\\frac{15}{8}$', '$\\frac{8}{17}$', '$\\frac{15}{17}$'],
            correctAnswer: 0,
            explanation: 'Angle $A$ sees opposite side $BC = 8$ and adjacent side $AC = 15$. $\\tan A = \\frac{\\text{opp}}{\\text{adj}} = \\frac{8}{15}$.'
          },
          {
            question: 'An equilateral triangle has side length $10$. What is the height?',
            options: ['$5$', '$5\\sqrt{2}$', '$5\\sqrt{3}$', '$10\\sqrt{3}$'],
            correctAnswer: 2,
            explanation: 'Splitting the equilateral triangle creates a $30\\text{-}60\\text{-}90$ triangle with short leg $5$. The height (long leg) is $5\\sqrt{3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct3-input',
      type: 'input-boxes' as const,
      content: `
**Compute each value.** 🧮

1) In a right triangle, the legs are $9$ and $12$. What is the hypotenuse?

2) $\\sin 30° + \\cos 60° = ?$ (enter a decimal or fraction)

3) A $45\\text{-}45\\text{-}90$ triangle has hypotenuse $10$. What is the length of each leg? Give the exact decimal (rounded to 2 places).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '1', '7.07'],
        hint1: '$\\sqrt{9^2 + 12^2} = \\sqrt{81+144} = \\sqrt{225} = 15$.',
        hint2: '$\\sin 30° = \\frac{1}{2}$ and $\\cos 60° = \\frac{1}{2}$. Sum $= 1$.',
        hint3: 'Leg $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2} \\approx 7.07$.',
        explanation: '1) Classic $3\\text{-}4\\text{-}5$ triple, scaled by $3$: $9\\text{-}12\\text{-}15$. 2) Both equal $\\frac{1}{2}$; sum is $1$. 3) $5\\sqrt{2} \\approx 7.07$.'
      }
    },
    {
      id: 'sat-ct3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each trig expression to its value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin 45°$',
            options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$']
          },
          {
            label: '$\\cos 30°$',
            options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$0$']
          },
          {
            label: '$\\tan 60°$',
            options: ['$1$', '$\\frac{\\sqrt{3}}{3}$', '$\\sqrt{3}$', '$\\frac{1}{2}$']
          }
        ],
        correctAnswers: ['$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\sqrt{3}$'],
        hint1: '$\\sin 45°$ from the $1:1:\\sqrt{2}$ triangle gives $\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.',
        hint2: '$\\cos 30°$ from the $1:\\sqrt{3}:2$ triangle: adjacent is $\\sqrt{3}$, hypotenuse is $2$.',
        hint3: '$\\tan 60° = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$.',
        explanation: 'These values come directly from the special right triangle side ratios.'
      }
    },
    {
      id: 'sat-ct3-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In a right triangle, $\\cos B = \\frac{3}{5}$. What is $\\sin B$?',
            options: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{5}{4}$', '$\\frac{4}{3}$'],
            correctAnswer: 1,
            explanation: 'Adjacent $= 3$, hypotenuse $= 5$, opposite $= \\sqrt{25 - 9} = 4$. $\\sin B = \\frac{4}{5}$. This is a $3\\text{-}4\\text{-}5$ triangle.'
          },
          {
            question: 'A ramp rises $6$ feet over a horizontal distance of $6\\sqrt{3}$ feet. What angle does the ramp make with the ground?',
            options: ['$30°$', '$45°$', '$60°$', '$90°$'],
            correctAnswer: 0,
            explanation: '$\\tan \\theta = \\frac{6}{6\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$. Since $\\tan 30° = \\frac{1}{\\sqrt{3}}$, the angle is $30°$.'
          }
        ]
      }
    }
  ]
}
