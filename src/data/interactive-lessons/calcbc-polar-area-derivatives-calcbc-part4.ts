export const calcbcPolarAreaPart4Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'pa4-intro',
      type: 'text' as const,
      content: `# Polar Area & Derivatives \u2014 Advanced Applications

**Part 4 of 7 \u2014 Lima\\c{c}on Regions & Inner Loop Area**

### Lima\\c{c}on Classification: $r = a + b\\cos\\theta$

| Condition | Shape | Inner Loop? |
|-----------|-------|-------------|
| $|a| = |b|$ | Cardioid | No (cusp at origin) |
| $|a| > |b|$ | Dimpled or convex | No |
| $|a| < |b|$ | With inner loop | Yes |

### Inner Loop Area

For $r = a + b\\cos\\theta$ with $|a| < |b|$, the inner loop occurs where $r < 0$:

$$r = 0 \\text{ when } \\cos\\theta = -a/b$$

Let $\\theta_0 = \\arccos(-a/b)$. Inner loop: $\\theta_0 \\le \\theta \\le 2\\pi - \\theta_0$, but by symmetry:

$$A_{\\text{inner}} = 2 \\cdot \\frac{1}{2}\\int_{\\theta_0}^{\\pi}(a + b\\cos\\theta)^2\\,d\\theta$$`
    },
    {
      id: 'pa4-example',
      type: 'text' as const,
      content: `### Worked Example

**Find the area of the inner loop of** $r = 1 + 2\\cos\\theta$.

$r = 0$ when $\\cos\\theta = -1/2 \\implies \\theta = 2\\pi/3, 4\\pi/3$.

Inner loop: $r < 0$ on $(2\\pi/3, 4\\pi/3)$. By symmetry about $x$-axis:

$$A = 2 \\cdot \\frac{1}{2}\\int_{2\\pi/3}^{\\pi}(1+2\\cos\\theta)^2\\,d\\theta = \\int_{2\\pi/3}^{\\pi}(1+4\\cos\\theta+4\\cos^2\\theta)\\,d\\theta$$

$$= \\int_{2\\pi/3}^{\\pi}(3 + 4\\cos\\theta + 2\\cos 2\\theta)\\,d\\theta$$

$$= [3\\theta + 4\\sin\\theta + \\sin 2\\theta]_{2\\pi/3}^{\\pi} = 3\\pi - (2\\pi + 2\\sqrt{3} - \\sqrt{3}/2)$$

$$= \\pi - \\frac{3\\sqrt{3}}{2}$$

> **Note:** The area is positive even though $r < 0$ on this interval, because we integrate $r^2$.`
    },
    {
      id: 'pa4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The area between the outer and inner loops of $r = 1 + 2\\cos\\theta$ equals:',
            options: ['Total area minus $2 \\times$ inner loop area', 'Total area minus inner loop area', 'Total area plus inner loop area', 'Just the total area'],
            correctAnswer: 0,
            explanation: 'The total $\\frac{1}{2}\\int_0^{2\\pi}r^2\\,d\\theta$ counts the inner loop area TWICE (once when $r < 0$). So the area between loops $= $ total $- 2 \\times$ inner loop.'
          },
          {
            question: 'For $r = 2 - 3\\sin\\theta$, the inner loop area involves:',
            options: ['$\\int r^2\\,d\\theta$ where $\\sin\\theta > 2/3$', '$\\int r^2\\,d\\theta$ for all $\\theta$', '$\\int r\\,d\\theta$ where $r < 0$', 'No computation needed'],
            correctAnswer: 0,
            explanation: '$r = 0$ when $\\sin\\theta = 2/3$. Between the two solutions, $r < 0$ (inner loop). We integrate $r^2$ on that interval.'
          },
          {
            question: 'A dimpled lima\\c{c}on ($|a| > |b|$, $|a| < 2|b|$) has:',
            options: ['An indentation but no inner loop', 'An inner loop', 'A cusp at the origin', 'No special features'],
            correctAnswer: 0,
            explanation: 'When $|b| < |a| < 2|b|$, the curve has a dimple (concavity) but $r > 0$ everywhere, so no inner loop.'
          }
        ]
      }
    },
    {
      id: 'pa4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Region Identification**',
      exercise: {
        dropdowns: [
          {
            label: 'The total area enclosed by $r = 1 + 2\\cos\\theta$ (including inner loop counted once) is:',
            options: ['$\\frac{1}{2}\\int_0^{2\\pi}(1+2\\cos\\theta)^2\\,d\\theta - 2A_{\\text{inner}}$', '$\\frac{1}{2}\\int_0^{2\\pi}(1+2\\cos\\theta)^2\\,d\\theta$', '$\\pi$', 'Undefined'],
            correctAnswers: ['$\\frac{1}{2}\\int_0^{2\\pi}(1+2\\cos\\theta)^2\\,d\\theta - 2A_{\\text{inner}}$'],
            hints: ['The full integral double-counts the inner loop.'],
            explanation: 'When $r < 0$, integrating $r^2$ gives a positive contribution, but that region is interior to the inner loop. The full integral counts the inner loop twice, so subtract $2A_{inner}$ to get the area between the loops.'
          },
          {
            label: 'For $r = 3 + 2\\cos\\theta$ ($|a| > |b|$), the area is simply:',
            options: ['$\\frac{1}{2}\\int_0^{2\\pi}(3+2\\cos\\theta)^2\\,d\\theta$ (no inner loop to worry about)', 'Must check for inner loop first', 'The formula does not apply', 'Zero'],
            correctAnswers: ['$\\frac{1}{2}\\int_0^{2\\pi}(3+2\\cos\\theta)^2\\,d\\theta$ (no inner loop to worry about)'],
            hints: ['$3 > 2$, so $r \\ge 1 > 0$ for all $\\theta$.'],
            explanation: 'Since $a > b$, $r$ is always positive. No inner loop exists, and the full integral gives the correct area.'
          }
        ]
      }
    },
    {
      id: 'pa4-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For the cardioid $r = 1 + \\cos\\theta$, there is no inner loop. The total enclosed area is $\\frac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^2\\,d\\theta$. Evaluate this and express as $a\\pi/b$. What is $a/b$?',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2', '1.5'],
        hints: ['$(1+\\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta = 3/2 + 2\\cos\\theta + \\cos(2\\theta)/2$.', '$\\int_0^{2\\pi}(3/2 + 2\\cos\\theta + \\cos(2\\theta)/2)\\,d\\theta = 3\\pi$.'],
        explanation: '$\\frac{1}{2}\\int_0^{2\\pi}(3/2+2\\cos\\theta+\\cos 2\\theta/2)\\,d\\theta = \\frac{1}{2}(3\\pi) = 3\\pi/2$. So $a/b = 3/2$.'
      }
    },
    {
      id: 'pa4-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Lima\\c{c}ons with $|a| < |b|$ have inner loops where $r < 0$
- Inner loop area: integrate $\\frac{1}{2}r^2$ on the interval where $r < 0$
- Full integral double-counts the inner loop
- Cardioids and convex lima\\c{c}ons have no inner loop complications

> **Next:** Part 5 covers **polar curve applications in AP FRQ contexts**.`
    }
  ]
};
