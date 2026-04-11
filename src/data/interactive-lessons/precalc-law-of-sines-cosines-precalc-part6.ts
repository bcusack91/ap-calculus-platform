export const precalcLawSinesCosinesPart6Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📏 Advanced Problem-Solving Techniques

**Part 6 of 7**

This part covers problems that require creative setups, multi-step approaches, and combining both laws.

### Advanced Techniques

1. **Breaking complex shapes into triangles** — add diagonals
2. **Using supplementary angles** in parallelograms
3. **Computing distances in 3D** by projecting onto 2D triangles
4. **Inscribed circle radius**: $r = \\frac{\\text{Area}}{s}$
5. **Circumscribed circle radius**: $R = \\frac{a}{2\\sin A}$
      `
    },
    {
      id: 'p6-circumradius',
      type: 'text' as const,
      content: `
## ⭕ The Circumscribed Circle

### Circumradius Formula

For any triangle with circumradius $R$:

$$\\boxed{\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R}$$

So $R = \\frac{a}{2\\sin A}$.

### Example 1: Find the Circumradius

$\\triangle ABC$: $a = 10$, $A = 30°$.

$$R = \\frac{10}{2\\sin 30°} = \\frac{10}{2(0.5)} = \\frac{10}{1} = 10$$

### Inradius Formula

$$\\boxed{r = \\frac{\\text{Area}}{s}}$$

where $s$ is the semi-perimeter.

### Example 2: Find the Inradius

$a = 3$, $b = 4$, $c = 5$ (right triangle).

Area = $\\frac{1}{2}(3)(4) = 6$. $s = \\frac{12}{2} = 6$.

$$r = \\frac{6}{6} = 1$$
      `
    },
    {
      id: 'p6-parallelogram',
      type: 'text' as const,
      content: `
## ◆ Parallelogram Diagonals

### Finding Diagonal Lengths

A parallelogram with sides $a$ and $b$ and angle $\\theta$ has diagonals:

$$d_1^2 = a^2 + b^2 - 2ab\\cos\\theta$$
$$d_2^2 = a^2 + b^2 + 2ab\\cos\\theta$$

(One diagonal subtends $\\theta$, the other subtends $180° - \\theta$.)

### Example 3: Parallelogram ABCD

Sides $a = 6$, $b = 10$, angle = $60°$.

$$d_1^2 = 36 + 100 - 120\\cos 60° = 136 - 60 = 76 \\implies d_1 = \\sqrt{76} \\approx 8.72$$
$$d_2^2 = 36 + 100 + 120\\cos 60° = 136 + 60 = 196 \\implies d_2 = 14$$

### Property Check

$$d_1^2 + d_2^2 = 76 + 196 = 272 = 2(36 + 100) = 2(a^2 + b^2)$$

This confirms: **In any parallelogram, the sum of the squares of the diagonals equals twice the sum of the squares of the sides.**
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Advanced Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The circumradius of a triangle with $a = 8$ and $A = 45°$ is:',
            options: [
              '$4\\sqrt{2}$',
              '$\\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$',
              '$8$',
              '$16$'
            ],
            correctAnswer: 0,
            explanation: '$R = \\frac{8}{2\\sin 45°} = \\frac{8}{2 \\cdot \\frac{\\sqrt{2}}{2}} = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$.'
          },
          {
            question: 'A parallelogram has sides 5 and 8 with a 90° angle. Its diagonals are:',
            options: [
              'Both $\\sqrt{89}$',
              '$\\sqrt{39}$ and $\\sqrt{89}$',
              '$5$ and $8$',
              '$13$ and $3$'
            ],
            correctAnswer: 0,
            explanation: 'A 90° parallelogram is a rectangle. $d = \\sqrt{25+64} = \\sqrt{89}$. Both diagonals are equal in a rectangle.'
          },
          {
            question: 'The inradius of an equilateral triangle with side $6$ is:',
            options: [
              '$\\sqrt{3}$',
              '$2\\sqrt{3}$',
              '$3$',
              '$3\\sqrt{3}$'
            ],
            correctAnswer: 0,
            explanation: 'Area $= \\frac{\\sqrt{3}}{4}(36) = 9\\sqrt{3}$. $s = 9$. $r = \\frac{9\\sqrt{3}}{9} = \\sqrt{3}$.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Advanced Calculations** 🧮

**1)** $\\triangle ABC$: $c = 14$, $C = 90°$. Find circumradius $R$. (e.g., $R = \\frac{a}{2\\sin A}$; for $a=10$, $A=30°$: $R = \\frac{10}{2(0.5)} = 10$)

**2)** Triangle with area $= 24$ and semi-perimeter $s = 8$. Find inradius $r$. (e.g., area $= 6$, $s = 6$: $r = \\frac{6}{6} = 1$)

**3)** Parallelogram with sides 5 and 12, angle $60°$. Find the shorter diagonal to nearest integer. Use $d^2 = 25 + 144 - 120\\cos 60°$. (e.g., $\\sqrt{76} \\approx 9$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '3', '11'],
        hint1: '$R = \\frac{14}{2\\sin 90°} = \\frac{14}{2} = 7$.',
        hint2: '$r = \\frac{24}{8} = 3$.',
        hint3: '$d^2 = 169 - 60 = 109$. $d = \\sqrt{109} \\approx 10.4 \\approx 11$.',
        explanation: '1) $R = 7$. 2) $r = 3$. 3) $\\sqrt{109} \\approx 10$ or $11$ depending on rounding.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Advanced Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{a}{2\\sin A}$ gives the',
            options: ['Inradius', 'Circumradius', 'Area', 'Semi-perimeter']
          },
          {
            label: '$\\frac{\\text{Area}}{s}$ gives the',
            options: ['Inradius', 'Circumradius', 'Perimeter', 'Altitude']
          },
          {
            label: 'In a parallelogram, the diagonals satisfy $d_1^2 + d_2^2 =$',
            options: ['$2(a^2 + b^2)$', '$a^2 + b^2$', '$(a+b)^2$', '$4ab$']
          },
          {
            label: 'The circumradius of a right triangle with hypotenuse $c$ is',
            options: ['$c$', '$\\frac{c}{2}$', '$\\frac{c}{\\sqrt{2}}$', '$2c$']
          }
        ],
        correctAnswers: ['Circumradius', 'Inradius', '$2(a^2 + b^2)$', '$\\frac{c}{2}$'],
        hint1: 'Law of Sines extended: $\\frac{a}{\\sin A} = 2R$.',
        hint2: 'Area = inradius × semi-perimeter.',
        hint3: 'Sum of diagonal squares = $2$ × sum of side squares.',
        explanation: '$R = \\frac{a}{2\\sin A}$ (circumradius). $r = \\frac{\\text{Area}}{s}$ (inradius). Diagonal law. Right triangle: $R = \\frac{c}{2}$.'
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
            question: 'The circumradius of an equilateral triangle with side $s$ is:',
            options: [
              '$\\frac{s}{\\sqrt{3}}$',
              '$\\frac{s\\sqrt{3}}{3}$',
              '$\\frac{s}{2}$',
              '$s$'
            ],
            correctAnswer: 1,
            explanation: '$R = \\frac{s}{2\\sin 60°} = \\frac{s}{2 \\cdot \\frac{\\sqrt{3}}{2}} = \\frac{s}{\\sqrt{3}} = \\frac{s\\sqrt{3}}{3}$.'
          },
          {
            question: 'A rhombus has side $10$ and one angle $120°$. Its shorter diagonal is:',
            options: [
              '$10$',
              '$10\\sqrt{3}$',
              '$5$',
              '$5\\sqrt{3}$'
            ],
            correctAnswer: 0,
            explanation: '$d^2 = 100 + 100 - 200\\cos 120° = 200 + 100 = 300$. Shorter diagonal uses the $60°$ angle: $d^2 = 200 - 200\\cos 60° = 200 - 100 = 100$. $d = 10$.'
          }
        ]
      }
    }
  ]
};
