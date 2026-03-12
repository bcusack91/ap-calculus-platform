export const satCirclesTrigPart2Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct2-intro',
      type: 'text' as const,
      content: `
# 📐 Arc Length & Sector Area

**Part 2 of 7 — Formulas, Degree ↔ Radian Conversion**

When a central angle $\\theta$ (in **radians**) intercepts an arc of a circle with radius $r$:

| Quantity | Formula (radians) | Formula (degrees) |
|----------|-------------------|--------------------|
| Arc length | $s = r\\theta$ | $s = \\frac{\\theta}{360} \\cdot 2\\pi r$ |
| Sector area | $A = \\frac{1}{2}r^2\\theta$ | $A = \\frac{\\theta}{360} \\cdot \\pi r^2$ |

**Degree ↔ Radian Conversion:**

$$
\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180}
\\qquad
\\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}
$$

| Degrees | Radians |
|---------|---------|
| $30°$ | $\\frac{\\pi}{6}$ |
| $45°$ | $\\frac{\\pi}{4}$ |
| $60°$ | $\\frac{\\pi}{3}$ |
| $90°$ | $\\frac{\\pi}{2}$ |
| $180°$ | $\\pi$ |
| $360°$ | $2\\pi$ |
      `
    },
    {
      id: 'sat-ct2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Arc Length:** A circle has radius $10$ cm. Find the length of the arc intercepted by a central angle of $\\frac{\\pi}{3}$ radians.

$$s = r\\theta = 10 \\cdot \\frac{\\pi}{3} = \\frac{10\\pi}{3} \\approx 10.47 \\text{ cm}$$

**Example 2 — Sector Area:** A pizza slice has radius $8$ inches and a central angle of $45°$.

1. Convert: $45° = 45 \\times \\frac{\\pi}{180} = \\frac{\\pi}{4}$ radians.
2. Area: $A = \\frac{1}{2}(8)^2 \\cdot \\frac{\\pi}{4} = \\frac{1}{2}(64)\\cdot \\frac{\\pi}{4} = 8\\pi \\approx 25.13$ sq in.

**Example 3 — Degree Method:** A sector has radius $6$ and central angle $120°$.
$$A = \\frac{120}{360} \\cdot \\pi(6)^2 = \\frac{1}{3} \\cdot 36\\pi = 12\\pi$$

---

**SAT Tip:** Always check whether the angle is given in degrees or radians. Using the wrong formula is the #1 mistake on these problems.
      `
    },
    {
      id: 'sat-ct2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Arc Length & Sector Area** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A circle has radius $12$. What is the arc length for a central angle of $\\frac{\\pi}{6}$?',
            options: ['$2\\pi$', '$6\\pi$', '$12\\pi$', '$\\frac{\\pi}{72}$'],
            correctAnswer: 0,
            explanation: '$s = r\\theta = 12 \\cdot \\frac{\\pi}{6} = 2\\pi$.'
          },
          {
            question: 'A sector has radius $5$ and area $\\frac{25\\pi}{4}$. What is the central angle in radians?',
            options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$', '$\\frac{\\pi}{5}$'],
            correctAnswer: 1,
            explanation: '$A = \\frac{1}{2}r^2\\theta \\Rightarrow \\frac{25\\pi}{4} = \\frac{1}{2}(25)\\theta \\Rightarrow \\theta = \\frac{25\\pi/4}{25/2} = \\frac{\\pi}{2}$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct2-conversion',
      type: 'text' as const,
      content: `
## Conversion Practice — Degrees ↔ Radians

**Example:** Convert $150°$ to radians.

$$150 \\times \\frac{\\pi}{180} = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}$$

**Example:** Convert $\\frac{3\\pi}{4}$ radians to degrees.

$$\\frac{3\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{3 \\times 180}{4} = 135°$$

**Shortcut:** To convert degrees → radians, divide by 180 and multiply by $\\pi$. To go back, divide by $\\pi$ and multiply by 180.
      `
    },
    {
      id: 'sat-ct2-input',
      type: 'input-boxes' as const,
      content: `
**Compute each value (give exact answers as integers or simplified fractions).** 🧮

1) Convert $270°$ to radians. Enter the **numerator** when written as $\\frac{?\\pi}{2}$.

2) A circle has radius $4$ and arc length $6\\pi$. What is the central angle in degrees?

3) The area of a full circle with radius $10$ is $100\\pi$. What fraction of the area is a sector with central angle $72°$? Enter as a fraction (e.g. 1/5).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '270', '1/5'],
        hint1: '$270 \\times \\frac{\\pi}{180} = \\frac{270\\pi}{180} = \\frac{3\\pi}{2}$. Numerator is 3.',
        hint2: '$s = r\\theta \\Rightarrow 6\\pi = 4\\theta \\Rightarrow \\theta = \\frac{3\\pi}{2}$ rad $= 270°$.',
        hint3: '$\\frac{72}{360} = \\frac{1}{5}$ of the circle.',
        explanation: '1) $\\frac{3\\pi}{2}$. 2) $\\theta = \\frac{6\\pi}{4} = \\frac{3\\pi}{2}$ rad $= 270°$. 3) $\\frac{72}{360} = \\frac{1}{5}$.'
      }
    },
    {
      id: 'sat-ct2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each degree measure to its radian equivalent.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$120°$',
            options: ['$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{3\\pi}{4}$', '$\\frac{\\pi}{6}$']
          },
          {
            label: '$225°$',
            options: ['$\\frac{3\\pi}{4}$', '$\\frac{5\\pi}{4}$', '$\\frac{7\\pi}{6}$', '$\\frac{5\\pi}{6}$']
          },
          {
            label: '$330°$',
            options: ['$\\frac{11\\pi}{6}$', '$\\frac{7\\pi}{4}$', '$\\frac{5\\pi}{3}$', '$\\frac{11\\pi}{12}$']
          }
        ],
        correctAnswers: ['$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{4}$', '$\\frac{11\\pi}{6}$'],
        hint1: '$120 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{3}$.',
        hint2: '$225 \\times \\frac{\\pi}{180} = \\frac{5\\pi}{4}$.',
        hint3: '$330 \\times \\frac{\\pi}{180} = \\frac{11\\pi}{6}$.',
        explanation: 'Divide the degree by 180 and simplify the fraction, then attach $\\pi$.'
      }
    },
    {
      id: 'sat-ct2-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A circular track has a radius of $50$ meters. A runner completes $\\frac{3}{8}$ of a lap. How far did the runner travel, in meters?',
            options: ['$\\frac{75\\pi}{2}$', '$\\frac{25\\pi}{4}$', '$\\frac{150\\pi}{4}$', '$\\frac{100\\pi}{3}$'],
            correctAnswer: 0,
            explanation: 'Full circumference $= 2\\pi(50)=100\\pi$. $\\frac{3}{8}$ of that $= \\frac{3}{8}\\cdot100\\pi = \\frac{300\\pi}{8} = \\frac{75\\pi}{2}$.'
          },
          {
            question: 'A sector of a circle with radius $r$ has perimeter $5r$. What is the central angle in radians?',
            options: ['$2$', '$3$', '$5$', '$\\pi$'],
            correctAnswer: 1,
            explanation: 'Perimeter of a sector $= 2r + r\\theta = r(2 + \\theta)$. Set equal to $5r$: $2 + \\theta = 5$, so $\\theta = 3$ radians.'
          }
        ]
      }
    }
  ]
}
