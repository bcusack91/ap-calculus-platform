export const precalcTrigFunctionsPart1Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📐 Trigonometric Functions — Angles & Radian Measure

**Part 1 of 7**

Trigonometry begins with measuring angles. The **radian** is the natural unit for angles in trigonometry and periodic functions.

### Degree ↔ Radian Conversion

$$\\boxed{\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180} \\qquad \\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}}$$

### Common Angle Reference Table

| Degrees | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ | $120°$ | $135°$ | $150°$ | $180°$ | $270°$ | $360°$ |
|:--------|:-----|:------|:------|:------|:------|:-------|:-------|:-------|:-------|:-------|:-------|
| Radians | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\frac{2\\pi}{3}$ | $\\frac{3\\pi}{4}$ | $\\frac{5\\pi}{6}$ | $\\pi$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |

> **Memory tip:** $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$ correspond to $30°, 45°, 60°$ — the denominators $6, 4, 3$ decrease as the angles increase.
      `
    },
    {
      id: 'p1-radian-definition',
      type: 'text' as const,
      content: `
## 🔄 What Is a Radian?

A **radian** is the angle whose arc length equals the radius.

$$\\boxed{\\theta = \\frac{s}{r} \\quad \\text{or equivalently} \\quad s = r\\theta}$$

| Quantity | Symbol | Unit |
|:---------|:-------|:-----|
| Arc length | $s$ | same as $r$ (meters, cm, etc.) |
| Radius | $r$ | length units |
| Angle | $\\theta$ | radians (dimensionless) |

### Key Facts

| Statement | Value |
|:----------|:------|
| One full revolution | $2\\pi$ radians $= 360°$ |
| Half revolution | $\\pi$ radians $= 180°$ |
| Quarter revolution | $\\frac{\\pi}{2}$ radians $= 90°$ |
| $1$ radian | $\\approx 57.3°$ |
| $1°$ | $\\approx 0.01745$ radians |
      `
    },
    {
      id: 'p1-worked-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Convert $225°$ to radians

$225° \\times \\frac{\\pi}{180} = \\frac{225\\pi}{180} = \\frac{5\\pi}{4}$

$$\\boxed{225° = \\frac{5\\pi}{4}}$$

### Example 2: Convert $\\frac{7\\pi}{6}$ to degrees

$\\frac{7\\pi}{6} \\times \\frac{180}{\\pi} = \\frac{7 \\times 180}{6} = \\frac{1260}{6} = 210°$

### Example 3: Arc Length

> **A circle has radius $10$ cm. Find the arc length subtended by a central angle of $\\frac{2\\pi}{3}$.**

$s = r\\theta = 10 \\cdot \\frac{2\\pi}{3} = \\frac{20\\pi}{3} \\approx 20.94\\text{ cm}$

### Example 4: Angle From Arc Length

Radian measure **is** the ratio of arc length to radius:

$$\\boxed{\\theta = \\frac{s}{r}}$$

An arc of length $14$ cm on a circle of radius $4$ cm subtends $\\theta = \\frac{14}{4} = 3.5$ radians, a little more than $\\pi \\approx 3.14$, so the terminal ray lies just past the negative $x$-axis, in Quadrant III.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $150°$ in radians?',
            options: [
              '$\\frac{\\pi}{3}$',
              '$\\frac{2\\pi}{3}$',
              '$\\frac{5\\pi}{6}$',
              '$\\frac{3\\pi}{4}$'
            ],
            correctAnswer: 2,
            explanation: '$150 \\times \\frac{\\pi}{180} = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}$.'
          },
          {
            question: 'A circle has radius $8$ m. The arc length for a $\\frac{3\\pi}{4}$ radian angle is:',
            options: [
              '$6\\pi$ m',
              '$8\\pi$ m',
              '$\\frac{3\\pi}{32}$ m',
              '$24\\pi$ m'
            ],
            correctAnswer: 0,
            explanation: '$s = r\\theta = 8 \\cdot \\frac{3\\pi}{4} = 6\\pi \\approx 18.85\\text{ m}$.'
          },
          {
            question: 'How many radians is $1$ complete revolution plus a quarter turn?',
            options: [
              '$2\\pi$',
              '$\\frac{5\\pi}{2}$',
              '$3\\pi$',
              '$\\frac{\\pi}{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Full revolution $= 2\\pi$, quarter $= \\frac{\\pi}{2}$. Total $= 2\\pi + \\frac{\\pi}{2} = \\frac{5\\pi}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Conversion Practice** 🧮

**1)** Convert $315°$ to radians. Express as a fraction of $\\pi$ — write just the fraction (e.g., $5/4$). (e.g., $270° = 270/180 \\cdot \\pi = 3/2 \\cdot \\pi$, so answer: $3/2$)

**2)** A circle has radius $12$ cm. Find the arc length for a central angle of $\\frac{\\pi}{3}$ radians. Write the answer in terms of $\\pi$ as a number (e.g., if $s = 5\\pi$, write $5$). (e.g., $r = 10$, $\\theta = \\pi/2$: $s = 10 \\cdot \\pi/2 = 5\\pi$, so answer: $5$)

**3)** An arc of length $15$ cm lies on a circle of radius $6$ cm. Find the central angle in radians as a decimal. (e.g., $s = 9$, $r = 6$: $\\theta = 9/6 = 1.5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7/4', '4', '2.5'],
        hint1: '$315/180 = 7/4$.',
        hint2: '$s = r\\theta = 12 \\cdot \\frac{\\pi}{3} = 4\\pi$.',
        hint3: '$\\theta = \\frac{s}{r} = \\frac{15}{6}$.',
        explanation: '1) $315/180 = 7/4$, so $315° = \\frac{7\\pi}{4}$. 2) $s = 12 \\cdot \\frac{\\pi}{3} = 4\\pi$, coefficient is $4$. 3) $\\theta = \\frac{15}{6} = 2.5$ radians.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Angle Fundamentals** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To convert degrees to radians, multiply by',
            options: ['$\\frac{180}{\\pi}$', '$\\frac{\\pi}{180}$', '$\\frac{2\\pi}{360}$', '$\\frac{\\pi}{360}$']
          },
          {
            label: '$\\frac{\\pi}{2}$ radians equals',
            options: ['$45°$', '$60°$', '$90°$', '$180°$']
          },
          {
            label: 'The arc length formula $s = r\\theta$ requires $\\theta$ in',
            options: ['degrees', 'radians', 'revolutions', 'any unit']
          },
          {
            label: '$1$ radian is approximately',
            options: ['$31.4°$', '$45°$', '$57.3°$', '$90°$']
          }
        ],
        correctAnswers: ['$\\frac{\\pi}{180}$', '$90°$', 'radians', '$57.3°$'],
        hint1: 'The conversion factor has $\\pi$ in the numerator.',
        hint2: '$\\pi/2$ is a quarter turn.',
        hint3: 'The formula is derived from the radian definition — angle must be in radians.',
        explanation: 'Degrees → radians: multiply by $\\frac{\\pi}{180}$. $\\frac{\\pi}{2} = 90°$. Arc length requires radians. $1\\text{ rad} = \\frac{180}{\\pi} \\approx 57.3°$.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel of radius $0.5$ m rotates through an angle of $4\\pi$ radians. The distance traveled by a point on the rim is:',
            options: [
              '$\\pi$ m',
              '$2\\pi$ m',
              '$4\\pi$ m',
              '$8\\pi$ m'
            ],
            correctAnswer: 1,
            explanation: '$s = r\\theta = 0.5 \\times 4\\pi = 2\\pi \\approx 6.28\\text{ m}$. Note: $4\\pi$ radians $= 2$ full revolutions.'
          },
          {
            question: 'An arc of length $6$ cm lies on a circle of radius $4$ cm. What is the central angle?',
            options: [
              '$1.5$ radians',
              '$24$ radians',
              '$\\frac{2}{3}$ radians',
              '$1.5$ degrees'
            ],
            correctAnswer: 0,
            explanation: 'Radian measure is arc length divided by radius: $\\theta = \\frac{6}{4} = 1.5$ radians (about $85.9°$). Multiplying gives $24$, and the ratio is in radians, not degrees.'
          }
        ]
      }
    }
  ]
};
