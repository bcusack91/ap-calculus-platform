export const precalcTrigFunctionsPart1Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📐 Trigonometric Functions — Angles & Radian Measure

**Part 1 of 7**

Trigonometry begins with an angle in **standard position**: its vertex is at the origin and its **initial side** lies along the positive $x$-axis. The **terminal side** is where the ray ends up after rotating.

| Rotation | Sign of the angle | Example |
|:---------|:------------------|:--------|
| Counterclockwise | positive | $\\frac{\\pi}{2}$ points straight up |
| Clockwise | negative | $-\\frac{\\pi}{2}$ points straight down |

> **Big idea (CED 3.2):** an angle is a **position on a circle** centered at the origin. Two angles whose terminal rays land in the same place have the same sine and cosine, no matter how many turns were made to get there.

### Radians, the working unit

AP Precalculus measures angles in **radians**. One full turn is $2\\pi$ radians, so half a turn is $\\pi$ radians and a quarter turn is $\\frac{\\pi}{2}$.

> 📏 **Bridge from geometry:** $\\pi$ radians $= 180^\\circ$. The angles you may know as $30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$ are $\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$. From here on, every angle is in radians unless a context says otherwise.
      `
    },
    {
      id: 'p1-radian-definition',
      type: 'text' as const,
      content: `
## 🔄 What Is a Radian?

A **radian** is the angle whose arc length equals the radius. Radian measure **is** the ratio of arc length to radius:

$$\\boxed{\\theta = \\frac{s}{r} \\qquad\\text{equivalently}\\qquad s = r\\theta}$$

| Quantity | Symbol | Unit |
|:---------|:-------|:-----|
| Arc length | $s$ | same as $r$ (meters, cm, etc.) |
| Radius | $r$ | length units |
| Angle | $\\theta$ | radians (a ratio of lengths, so no units) |

Because a radian is length divided by length, a **bare number** like $2.5$ is an angle in radians. To locate it, compare with the axis angles $\\frac{\\pi}{2} \\approx 1.57$, $\\pi \\approx 3.14$, $\\frac{3\\pi}{2} \\approx 4.71$, $2\\pi \\approx 6.28$.

### Key Facts

| Statement | Value |
|:----------|:------|
| One full revolution | $2\\pi$ radians, on **any** circle ($\\frac{2\\pi r}{r} = 2\\pi$) |
| Half revolution | $\\pi$ radians |
| Quarter revolution | $\\frac{\\pi}{2}$ radians |
| $1$ radian | a little less than $\\frac{\\pi}{3}$ (about $57.3^\\circ$) |

### Worked Examples

**Example 1 (arc length).** A circle has radius $10$ cm. The arc subtended by a central angle of $\\frac{2\\pi}{3}$ has length $s = r\\theta = 10 \\cdot \\frac{2\\pi}{3} = \\frac{20\\pi}{3} \\approx 20.94$ cm.

**Example 2 (angle from an arc).** An arc of length $14$ cm on a circle of radius $4$ cm subtends $\\theta = \\frac{14}{4} = 3.5$ radians. Since $\\pi \\approx 3.14 < 3.5 < 4.71$, the terminal ray lies just past the negative $x$-axis, in **Quadrant III**.

**Example 3 (radius from an arc).** An arc of length $6\\pi$ subtends a central angle of $\\frac{2\\pi}{3}$:

$$r = \\frac{s}{\\theta} = \\frac{6\\pi}{2\\pi/3} = 6\\pi \\cdot \\frac{3}{2\\pi} = 9$$

> ⚠️ $s = r\\theta$ only works with $\\theta$ in radians. If a context gives degrees, convert with $\\pi = 180^\\circ$ first.
      `
    },
    {
      id: 'p1-coterminal',
      type: 'text' as const,
      content: `
## 🔁 Coterminal Angles

Many different angle measures point the terminal ray to the **same** position. Adding or subtracting a whole number of full turns changes the measure but not the position:

$$\\boxed{\\theta \\pm 2\\pi k \\text{ is coterminal with } \\theta \\quad (k = 1, 2, 3, \\ldots)}$$

Coterminal angles share the same point on the circle, so they have the **same sine and cosine**.

### Worked Examples

| Angle | Work | Smallest positive coterminal angle |
|:------|:-----|:-----------------------------------|
| $-\\frac{\\pi}{3}$ | $-\\frac{\\pi}{3} + 2\\pi = -\\frac{\\pi}{3} + \\frac{6\\pi}{3}$ | $\\frac{5\\pi}{3}$ |
| $\\frac{13\\pi}{4}$ | $\\frac{13\\pi}{4} - 2\\pi = \\frac{13\\pi}{4} - \\frac{8\\pi}{4}$ | $\\frac{5\\pi}{4}$ |
| $-\\frac{9\\pi}{4}$ | $-\\frac{9\\pi}{4} + 4\\pi = -\\frac{9\\pi}{4} + \\frac{16\\pi}{4}$ (one turn was not enough) | $\\frac{7\\pi}{4}$ |

> 💡 Write $2\\pi$ with the angle's own denominator before adding: $2\\pi = \\frac{6\\pi}{3} = \\frac{8\\pi}{4} = \\frac{12\\pi}{6}$.

> ⚠️ Two angles that differ by $\\pi$ (a half turn) are **not** coterminal: $\\frac{\\pi}{6}$ and $\\frac{7\\pi}{6}$ point in opposite directions.
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
            question: 'An arc of length $9$ lies on a circle of radius $6$. What is the central angle?',
            options: [
              '$1.5$ radians',
              '$54$ radians',
              '$\\frac{2}{3}$ radian',
              '$1.5$ degrees'
            ],
            correctAnswer: 0,
            explanation: 'Radian measure is arc length divided by radius: $\\theta = \\frac{9}{6} = 1.5$ radians. Multiplying gives $54$, the inverted ratio gives $\\frac{2}{3}$, and the ratio is in radians, not degrees.'
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
            explanation: '$s = r\\theta = 8 \\cdot \\frac{3\\pi}{4} = 6\\pi \\approx 18.85$ m. Dividing instead of multiplying gives $\\frac{3\\pi}{32}$.'
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
            explanation: 'Full revolution $= 2\\pi$, quarter turn $= \\frac{\\pi}{2}$. Total $= 2\\pi + \\frac{\\pi}{2} = \\frac{5\\pi}{2}$, which is coterminal with $\\frac{\\pi}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Angle Practice** 🧮

Give exact values. Write $\\pi$ as \`pi\`, e.g. \`5pi/4\` or \`4pi\`.

**1)** Find the smallest positive angle coterminal with $-\\frac{\\pi}{6}$. (e.g., for $-\\frac{\\pi}{4}$: $-\\frac{\\pi}{4} + \\frac{8\\pi}{4} = \\frac{7\\pi}{4}$, so answer: \`7pi/4\`)

**2)** A circle has radius $12$ cm. Find the arc length for a central angle of $\\frac{\\pi}{3}$ radians. (e.g., $r = 10$, $\\theta = \\pi/2$: $s = 10 \\cdot \\pi/2 = 5\\pi$, so answer: \`5pi\`)

**3)** An arc of length $15$ cm lies on a circle of radius $6$ cm. Find the central angle in radians as a decimal. (e.g., $s = 9$, $r = 6$: $\\theta = 9/6 = 1.5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11pi/6', '4pi', '2.5'],
        hint1: '$2\\pi = \\frac{12\\pi}{6}$, so add $\\frac{12\\pi}{6}$ to $-\\frac{\\pi}{6}$.',
        hint2: '$s = r\\theta = 12 \\cdot \\frac{\\pi}{3}$.',
        hint3: '$\\theta = \\frac{s}{r} = \\frac{15}{6}$.',
        explanation: '1) $-\\frac{\\pi}{6} + \\frac{12\\pi}{6} = \\frac{11\\pi}{6}$. 2) $s = 12 \\cdot \\frac{\\pi}{3} = 4\\pi$. 3) $\\theta = \\frac{15}{6} = 2.5$ radians (between $\\frac{\\pi}{2}$ and $\\pi$, so Quadrant II).'
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
            label: 'The radian measure of a central angle equals',
            options: ['arc length divided by radius', 'radius divided by arc length', 'arc length times radius', 'arc length divided by diameter']
          },
          {
            label: 'The terminal ray of $\\theta = 2$ radians lies in',
            options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV']
          },
          {
            label: 'The arc length formula $s = r\\theta$ requires $\\theta$ in',
            options: ['degrees', 'radians', 'revolutions', 'any unit']
          },
          {
            label: 'Which angle is coterminal with $\\frac{\\pi}{4}$?',
            options: ['$\\frac{5\\pi}{4}$', '$\\frac{3\\pi}{4}$', '$\\frac{9\\pi}{4}$', '$-\\frac{\\pi}{4}$']
          }
        ],
        correctAnswers: ['arc length divided by radius', 'Quadrant II', 'radians', '$\\frac{9\\pi}{4}$'],
        hint1: 'One radian is the angle whose arc is one radius long.',
        hint2: 'Compare $2$ with $\\frac{\\pi}{2} \\approx 1.57$ and $\\pi \\approx 3.14$.',
        hint3: 'The formula comes from the definition of a radian.',
        explanation: '$\\theta = \\frac{s}{r}$. Since $1.57 < 2 < 3.14$, the ray is in Quadrant II. Arc length needs radians. $\\frac{\\pi}{4} + 2\\pi = \\frac{9\\pi}{4}$; the other three differ from $\\frac{\\pi}{4}$ by a half turn, a quarter turn and $\\frac{\\pi}{2}$, so they point elsewhere.'
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
            explanation: '$s = r\\theta = 0.5 \\times 4\\pi = 2\\pi \\approx 6.28$ m. Note: $4\\pi$ radians $= 2$ full revolutions.'
          },
          {
            question: 'An angle of $-\\frac{5\\pi}{3}$ is drawn in standard position. In which quadrant does its terminal side lie?',
            options: [
              'Quadrant I',
              'Quadrant II',
              'Quadrant III',
              'Quadrant IV'
            ],
            correctAnswer: 0,
            explanation: 'Adding one full turn gives the coterminal angle $-\\frac{5\\pi}{3} + \\frac{6\\pi}{3} = \\frac{\\pi}{3}$, which is in Quadrant I. Quadrant IV would be the answer for $-\\frac{\\pi}{3}$, a much smaller clockwise turn.'
          }
        ]
      }
    }
  ]
};
