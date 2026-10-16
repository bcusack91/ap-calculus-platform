export const precalcInverseTrigPart5Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📐 Inverse Trig with Right Triangles

**Part 5 of 7**

Inverse trig functions let us **find angles** in right triangles when we know the sides. As everywhere in AP Precalculus, the angles come out in **radians** (calculator in radian mode). A right angle is $\\frac{\\pi}{2} \\approx 1.571$, so the two acute angles of a right triangle add to $\\frac{\\pi}{2}$.

### The Setup

Given a right triangle with known side lengths, find an angle $\\theta$:

$$\\boxed{\\theta = \\arctan\\!\\left(\\frac{\\text{opposite}}{\\text{adjacent}}\\right) = \\arcsin\\!\\left(\\frac{\\text{opposite}}{\\text{hypotenuse}}\\right) = \\arccos\\!\\left(\\frac{\\text{adjacent}}{\\text{hypotenuse}}\\right)}$$

### Example: Triangle with sides 5, 12, 13

For the angle opposite the side of length 5:

$$\\theta = \\arcsin\\!\\left(\\frac{5}{13}\\right) = \\arctan\\!\\left(\\frac{5}{12}\\right) \\approx 0.395$$

For the angle opposite the side of length 12:

$$\\alpha = \\arcsin\\!\\left(\\frac{12}{13}\\right) = \\arctan\\!\\left(\\frac{12}{5}\\right) \\approx 1.176$$

Verify: $0.395 + 1.176 = 1.571 \\approx \\frac{\\pi}{2}$ ✓
      `
    },
    {
      id: 'p5-algebraic',
      type: 'text' as const,
      content: `
## 🔢 Algebraic Expressions with Inverse Trig

### Writing Trig Ratios as Algebraic Expressions

**Problem:** Write $\\sin(\\arctan \\frac{x}{3})$ as an algebraic expression in $x$.

**Solution:**
1. Let $\\theta = \\arctan \\frac{x}{3}$, so $\\tan\\theta = \\frac{x}{3}$
2. Right triangle: opposite = $x$, adjacent = $3$
3. Hypotenuse = $\\sqrt{x^2 + 9}$
4. $\\sin\\theta = \\frac{x}{\\sqrt{x^2 + 9}}$

$$\\boxed{\\sin\\!\\left(\\arctan \\frac{x}{3}\\right) = \\frac{x}{\\sqrt{x^2 + 9}}}$$

### Common General Formulas

| Expression | Algebraic Form |
|:-----------|:--------------|
| $\\sin(\\arccos x)$ | $\\sqrt{1 - x^2}$ |
| $\\cos(\\arcsin x)$ | $\\sqrt{1 - x^2}$ |
| $\\tan(\\arcsin x)$ | $\\frac{x}{\\sqrt{1 - x^2}}$ |
| $\\cos(\\arctan x)$ | $\\frac{1}{\\sqrt{1 + x^2}}$ |
| $\\sin(\\arctan x)$ | $\\frac{x}{\\sqrt{1 + x^2}}$ |
      `
    },
    {
      id: 'p5-solving',
      type: 'text' as const,
      content: `
## ✏️ Solving for Missing Angles

### Example 1: Ladder Problem

A 20-foot ladder leans against a wall with its base 8 feet from the wall. Find the angle with the ground.

Adjacent = $8$, hypotenuse = $20$.

$$\\theta = \\arccos\\!\\left(\\frac{8}{20}\\right) = \\arccos(0.4) \\approx 1.159$$

### Example 2: Finding Both Acute Angles

In a right triangle with legs $a = 7$ and $b = 24$:

$$\\alpha = \\arctan\\!\\left(\\frac{7}{24}\\right) \\approx 0.284$$
$$\\beta = \\arctan\\!\\left(\\frac{24}{7}\\right) \\approx 1.287$$

Check: $0.284 + 1.287 = 1.571 \\approx \\frac{\\pi}{2}$ ✓ (The acute angles in a right triangle sum to $\\frac{\\pi}{2}$.)

### Example 3: Using a Known Hypotenuse

Right triangle with opposite $= 6$, hypotenuse $= 10$.

$$\\theta = \\arcsin\\!\\left(\\frac{6}{10}\\right) = \\arcsin(0.6) \\approx 0.644$$

This is a 3-4-5 triangle scaled by 2 (sides 6, 8, 10), so the same angle is also $\\arctan\\!\\left(\\frac{6}{8}\\right) \\approx 0.644$.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Triangle & Algebra Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\cos(\\arctan x)$ simplifies to:',
            options: [
              '$\\frac{x}{\\sqrt{1+x^2}}$',
              '$\\frac{1}{\\sqrt{1+x^2}}$',
              '$\\sqrt{1-x^2}$',
              '$\\frac{x}{1+x}$'
            ],
            correctAnswer: 1,
            explanation: 'Let $\\theta = \\arctan x$. Triangle: opp = $x$, adj = $1$, hyp = $\\sqrt{1+x^2}$. $\\cos\\theta = \\frac{1}{\\sqrt{1+x^2}}$.'
          },
          {
            question: 'In a right triangle with hypotenuse 10 and opposite side 6, the angle is:',
            options: [
              '$\\arctan(\\frac{6}{10})$',
              '$\\arcsin(\\frac{6}{10})$',
              '$\\arccos(\\frac{6}{10})$',
              '$\\arctan(\\frac{10}{6})$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{6}{10}$, so $\\theta = \\arcsin(\\frac{6}{10})$.'
          },
          {
            question: '$\\tan(\\arcsin \\frac{x}{5})$ simplifies to:',
            options: [
              '$\\frac{x}{5}$',
              '$\\frac{x}{\\sqrt{25 - x^2}}$',
              '$\\frac{5}{x}$',
              '$\\frac{\\sqrt{25 - x^2}}{x}$'
            ],
            correctAnswer: 1,
            explanation: 'Triangle: opp = $x$, hyp = $5$, adj = $\\sqrt{25 - x^2}$. $\\tan\\theta = \\frac{x}{\\sqrt{25-x^2}}$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Solving Triangles** 🧮

Give each angle in radians, rounded to two decimal places.

**1)** Right triangle: opposite = 3, adjacent = 4. Find angle $\\theta$. (e.g., if opposite = 5, adjacent = 12, then $\\theta = \\arctan(\\frac{5}{12}) \\approx 0.39$)

**2)** Right triangle: opposite = 7, hypotenuse = 25. Find angle $\\theta$. (e.g., if opp = 5, hyp = 13, then $\\theta = \\arcsin(\\frac{5}{13}) \\approx 0.39$)

**3)** Right triangle: adjacent = 9, hypotenuse = 15. Find angle $\\theta$. (e.g., if adj = 12, hyp = 13, then $\\theta = \\arccos(\\frac{12}{13}) \\approx 0.39$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.64', '0.28', '0.93'],
        hint1: '$\\arctan(\\frac{3}{4}) = \\arctan(0.75) \\approx 0.6435$.',
        hint2: '$\\arcsin(\\frac{7}{25}) = \\arcsin(0.28) \\approx 0.2838$.',
        hint3: '$\\arccos(\\frac{9}{15}) = \\arccos(0.6) \\approx 0.9273$.',
        explanation: '1) $\\arctan(0.75) \\approx 0.64$. 2) $\\arcsin(0.28) \\approx 0.28$. 3) $\\arccos(0.6) \\approx 0.93$. Check 1 and 3: $0.64 + 0.93 \\approx 1.57 = \\frac{\\pi}{2}$, as expected for the two acute angles of a 3-4-5 triangle.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Right Expression** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin(\\arccos x)$ simplifies to',
            options: ['$\\sqrt{1-x^2}$', '$\\frac{x}{\\sqrt{1+x^2}}$', '$\\frac{1}{x}$', '$1-x^2$']
          },
          {
            label: 'To find angle $\\theta$ given opposite and adjacent sides, use',
            options: ['$\\arcsin$', '$\\arccos$', '$\\arctan$']
          },
          {
            label: '$\\cos(\\arcsin x)$ simplifies to',
            options: ['$\\sqrt{1-x^2}$', '$x$', '$\\frac{x}{\\sqrt{1+x^2}}$', '$1-x$']
          },
          {
            label: '$\\sin(\\arctan x)$ simplifies to',
            options: ['$\\sqrt{1-x^2}$', '$\\frac{1}{\\sqrt{1+x^2}}$', '$\\frac{x}{\\sqrt{1+x^2}}$', '$x$']
          }
        ],
        correctAnswers: ['$\\sqrt{1-x^2}$', '$\\arctan$', '$\\sqrt{1-x^2}$', '$\\frac{x}{\\sqrt{1+x^2}}$'],
        hint1: 'Draw triangle with adj = $x$, hyp = 1, find opposite.',
        hint2: '$\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$, so we invert with $\\arctan$.',
        hint3: 'Draw triangle with opp = $x$, hyp = 1, find adjacent.',
        explanation: '$\\sin(\\arccos x)$ and $\\cos(\\arcsin x)$ both equal $\\sqrt{1-x^2}$. Use $\\arctan$ for opp/adj. $\\sin(\\arctan x) = \\frac{x}{\\sqrt{1+x^2}}$.'
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
            question: 'A ramp rises 3 meters over a horizontal distance of 12 meters. The angle of incline is:',
            options: [
              '$\\arcsin(\\frac{3}{12})$',
              '$\\arctan(\\frac{3}{12})$',
              '$\\arccos(\\frac{3}{12})$',
              '$\\arctan(\\frac{12}{3})$'
            ],
            correctAnswer: 1,
            explanation: 'Rise = opposite = 3, run = adjacent = 12. Angle = $\\arctan(\\frac{\\text{opp}}{\\text{adj}}) = \\arctan(\\frac{3}{12}) \\approx 0.245$ radians.'
          },
          {
            question: '$\\sec(\\arctan x)$ simplifies to:',
            options: [
              '$\\sqrt{1 + x^2}$',
              '$\\frac{1}{\\sqrt{1+x^2}}$',
              '$\\frac{x}{\\sqrt{1+x^2}}$',
              '$1 + x$'
            ],
            correctAnswer: 0,
            explanation: 'Triangle: opp = $x$, adj = 1, hyp = $\\sqrt{1+x^2}$. $\\sec\\theta = \\frac{\\text{hyp}}{\\text{adj}} = \\sqrt{1+x^2}$.'
          }
        ]
      }
    }
  ]
};
