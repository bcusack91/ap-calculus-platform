export const satCirclesTrigPart7Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-ct7-cheat-sheet',
      type: 'text' as const,
      content: `
# 🏁 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet, Mixed Problems & Exam Strategies**

## Formula Cheat Sheet

| Topic | Formula |
|-------|---------|
| Circle equation | $(x-h)^2 + (y-k)^2 = r^2$ |
| Arc length | $s = r\\theta$ |
| Sector area | $A = \\frac{1}{2}r^2\\theta$ |
| $\\sin$ | $\\frac{\\text{opposite}}{\\text{hypotenuse}}$ |
| $\\cos$ | $\\frac{\\text{adjacent}}{\\text{hypotenuse}}$ |
| $\\tan$ | $\\frac{\\text{opposite}}{\\text{adjacent}}$ |
| Pythagorean identity | $\\sin^2\\theta + \\cos^2\\theta = 1$ |
| Complementary angles | $\\sin A = \\cos(90° - A)$ |
| Inscribed angle | $= \\frac{1}{2}$ intercepted arc |
| Tangent-radius | Perpendicular ($90°$) |

**Special triangles:**

| $45\\text{-}45\\text{-}90$ | $1 : 1 : \\sqrt{2}$ |
|---|---|
| $30\\text{-}60\\text{-}90$ | $1 : \\sqrt{3} : 2$ |
      `
    },
    {
      id: 'sat-ct7-strategies',
      type: 'text' as const,
      content: `
## SAT Exam Strategies for Circles & Trig

**1. Read the question twice.** Common traps:
- Asking for $r^2$ vs. $r$
- Giving degrees when you need radians (or vice-versa)
- Asking for an angle when you solve for a side

**2. Draw and label.** Sketch the circle or triangle directly on the test — label known sides, angles, and what you're solving for.

**3. Look for right triangles.** Tangent-radius? That's a right angle. Diameter as a chord? Thales gives you $90°$.

**4. Use process of elimination.** Trig ratios are between $-1$ and $1$ (for $\\sin$ and $\\cos$). If an answer is $> 1$, it can't be a sine or cosine value.

**5. Pythagorean triples save time:** $3\\text{-}4\\text{-}5$, $5\\text{-}12\\text{-}13$, $8\\text{-}15\\text{-}17$, $7\\text{-}24\\text{-}25$ and their multiples.
      `
    },
    {
      id: 'sat-ct7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Circle $C$ has equation $x^2 + y^2 - 4x + 10y + 20 = 0$. What is the radius?',
            options: ['$3$', '$9$', '$\\sqrt{20}$', '$5$'],
            correctAnswer: 0,
            explanation: 'Complete the square: $(x^2-4x+4)+(y^2+10y+25)=-20+4+25=9$. $(x-2)^2+(y+5)^2=9$. $r = 3$.'
          },
          {
            question: 'A sector of a circle with radius $9$ has area $\\frac{27\\pi}{2}$. What is the central angle in degrees?',
            options: ['$30°$', '$60°$', '$120°$', '$90°$'],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}(81)\\theta = \\frac{27\\pi}{2} \\Rightarrow \\theta = \\frac{27\\pi}{81} = \\frac{\\pi}{3}$ radians $= 60°$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice Set 2** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle $XYZ$, $XZ = 10$, $YZ = 6$, and angle $Z = 90°$. What is $\\sin X$?',
            options: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{3}$'],
            correctAnswer: 0,
            explanation: '$XZ = 10$ (hyp), $YZ = 6$ (opposite to $X$). $\\sin X = \\frac{6}{10} = \\frac{3}{5}$.'
          },
          {
            question: 'If $\\sin(5x)° = \\cos(x + 18)°$ and both angles are acute, what is $x$?',
            options: ['$10$', '$12$', '$15$', '$18$'],
            correctAnswer: 1,
            explanation: 'Complementary: $5x + (x+18) = 90$. $6x + 18 = 90$. $6x = 72$. $x = 12$.'
          }
        ]
      }
    },
    {
      id: 'sat-ct7-input',
      type: 'input-boxes' as const,
      content: `
**Final mixed problems — enter your answers.** 🧮

1) What is the area of a circle with equation $(x+1)^2 + (y-3)^2 = 49$? Enter in terms of $\\pi$ — give just the coefficient (e.g., if the answer is $25\\pi$, enter 49).

2) A tangent to a circle of radius $7$ is drawn from a point $25$ units from the center. How long is the tangent segment?

3) $\\cos^2 72° + \\sin^2 72°  = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['49', '24', '1'],
        hint1: '$r^2 = 49$, so area $= \\pi r^2 = 49\\pi$. Coefficient is $49$.',
        hint2: 'Right triangle with hypotenuse $25$ and leg $7$: tangent $= \\sqrt{625-49} = \\sqrt{576} = 24$. This is a $7\\text{-}24\\text{-}25$ triple!',
        hint3: 'Pythagorean identity: always $1$.',
        explanation: '1) $49\\pi$. 2) $\\sqrt{25^2 - 7^2} = 24$. 3) $1$ by the Pythagorean identity.'
      }
    },
    {
      id: 'sat-ct7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick-fire review — choose the correct value.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin 90°$',
            options: ['$0$', '$\\frac{1}{2}$', '$1$', 'undefined']
          },
          {
            label: 'Inscribed angle for arc $= 160°$',
            options: ['$40°$', '$80°$', '$160°$', '$320°$']
          },
          {
            label: '$\\tan 45°$',
            options: ['$0$', '$\\frac{\\sqrt{2}}{2}$', '$1$', '$\\sqrt{2}$']
          }
        ],
        correctAnswers: ['$1$', '$80°$', '$1$'],
        hint1: 'Unit circle: the point at $90°$ is $(0, 1)$. $\\sin = y = 1$.',
        hint2: 'Inscribed angle $= \\frac{1}{2}$ arc $= \\frac{160}{2} = 80°$.',
        hint3: '$\\tan 45° = \\frac{\\sin 45°}{\\cos 45°} = 1$ since both are $\\frac{\\sqrt{2}}{2}$.',
        explanation: 'These are core facts that should be instant recall on test day.'
      }
    },
    {
      id: 'sat-ct7-summary',
      type: 'text' as const,
      content: `
## 📋 What You've Mastered

Across all 7 parts you've covered:

- ✅ Circle equations — standard form, completing the square, center & radius
- ✅ Arc length & sector area with degree and radian formulas
- ✅ Right triangle trig — SOH-CAH-TOA and special triangles
- ✅ The unit circle — coordinates, reference angles, sign patterns
- ✅ SAT trig favorites — complementary angles and Pythagorean identity
- ✅ Circle theorems — inscribed angles, central angles, tangent-radius
- ✅ Mixed practice and exam strategies

**Next steps:**
- Time yourself: aim for each circle/trig problem in under 90 seconds.
- On test day, sketch diagrams — even rough drawings reveal right triangles and relationships.
- If stuck, try plugging in the answer choices. For trig questions, use special values ($30°$, $45°$, $60°$) to test.

Good luck on the SAT! 🚀
      `
    }
  ]
}
