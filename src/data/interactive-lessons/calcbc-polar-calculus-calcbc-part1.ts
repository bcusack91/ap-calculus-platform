export const calcbcPolarPart1Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol1-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 1 of 7 \u2014 Polar Coordinates & Conversions**

In polar coordinates, each point is described by $(r, \\theta)$: a distance $r$ from the origin and an angle $\\theta$ from the positive $x$-axis.

### Conversion Formulas

$$\\boxed{x = r\\cos\\theta, \\quad y = r\\sin\\theta}$$

$$\\boxed{r = \\sqrt{x^2+y^2}, \\quad \\tan\\theta = \\frac{y}{x}}$$

| Cartesian | Polar |
|-----------|-------|
| $(1, 1)$ | $(\\sqrt{2},\\, \\pi/4)$ |
| $(0, 3)$ | $(3,\\, \\pi/2)$ |
| $(-1, \\sqrt{3})$ | $(2,\\, 2\\pi/3)$ |
| $(3, 0)$ | $(3,\\, 0)$ |

> **Key Fact:** A point $(r, \\theta)$ can also be written as $(-r, \\theta + \\pi)$ or $(r, \\theta + 2\\pi)$. Polar representations are NOT unique!`
    },
    {
      id: 'pol1-curves',
      type: 'text' as const,
      content: `### Common Polar Equations

| Equation | Shape |
|----------|-------|
| $r = a$ | Circle of radius $|a|$ centered at origin |
| $\\theta = c$ | Line through origin at angle $c$ |
| $r = 2a\\cos\\theta$ | Circle of radius $|a|$ centered at $(a, 0)$ |
| $r = 2a\\sin\\theta$ | Circle of radius $|a|$ centered at $(0, a)$ |
| $r = a + b\\cos\\theta$ | Lima\\c{c}on (with loop if $|a| < |b|$) |
| $r = a\\cos(n\\theta)$ | Rose ($n$ petals if odd, $2n$ if even) |

**Converting equations:**
- $r = 2\\cos\\theta$: multiply both sides by $r$: $r^2 = 2r\\cos\\theta \\implies x^2+y^2 = 2x$`
    },
    {
      id: 'pol1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'Convert $(x, y) = (-3, 3)$ to polar. The angle $\\theta$ (in $[0, 2\\pi)$) is:',
            options: ['$3\\pi/4$', '$\\pi/4$', '$5\\pi/4$', '$7\\pi/4$'],
            correctAnswer: 0,
            explanation: '$r = \\sqrt{9+9} = 3\\sqrt{2}$. $\\tan\\theta = 3/(-3) = -1$. Since $x < 0, y > 0$: second quadrant, $\\theta = 3\\pi/4$.'
          },
          {
            question: 'The polar equation $r = 4\\sin\\theta$ represents:',
            options: ['A circle of radius $2$ centered at $(0, 2)$', 'A circle of radius $4$ centered at origin', 'A line', 'A cardioid'],
            correctAnswer: 0,
            explanation: '$r = 4\\sin\\theta \\implies r^2 = 4r\\sin\\theta \\implies x^2+y^2 = 4y \\implies x^2+(y-2)^2 = 4$. Circle of radius $2$ at $(0,2)$.'
          },
          {
            question: 'How many petals does $r = 3\\cos(2\\theta)$ have?',
            options: ['$4$', '$2$', '$3$', '$6$'],
            correctAnswer: 0,
            explanation: '$r = a\\cos(n\\theta)$ with even $n$ has $2n$ petals. With $n=2$: $4$ petals.'
          }
        ]
      }
    },
    {
      id: 'pol1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Conversion Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'The Cartesian equation $x^2 + y^2 = 9$ in polar form is:',
            options: ['$r = 3$', '$r = 9$', '$r^2 = 9\\cos\\theta$', '$\\theta = 3$'],
            correctAnswers: ['$r = 3$'],
            hints: ['$x^2 + y^2 = r^2$.'],
            explanation: '$r^2 = 9 \\implies r = 3$. A circle of radius $3$ centered at the origin.'
          },
          {
            label: 'The polar equation $r = 1 + \\cos\\theta$ is called a:',
            options: ['Cardioid', 'Rose curve', 'Lemniscate', 'Spiral'],
            correctAnswers: ['Cardioid'],
            hints: ['$r = a + b\\cos\\theta$ with $a = b$ is a special lima\\c{c}on.'],
            explanation: 'When $a = b$ in $r = a + b\\cos\\theta$, the curve is a cardioid (heart shape). It passes through the origin when $\\theta = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'pol1-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'Convert the Cartesian point $(0, -5)$ to polar coordinates $(r, \\theta)$. What is $\\theta$ in radians as a multiple of $\\pi$? Enter as a fraction times $\\pi$ (e.g., enter "3/2" for $3\\pi/2$).',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2'],
        hints: ['The point is on the negative $y$-axis.', '$r = 5$, $\\theta = 3\\pi/2$ (or $-\\pi/2$).'],
        explanation: '$r = \\sqrt{0+25} = 5$. The point $(0, -5)$ is on the negative $y$-axis: $\\theta = 3\\pi/2$.'
      }
    },
    {
      id: 'pol1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Polar coordinates $(r, \\theta)$ locate points by distance and angle
- Convert with $x = r\\cos\\theta$, $y = r\\sin\\theta$ and $r^2 = x^2+y^2$
- Representations are not unique: $(r, \\theta) = (-r, \\theta+\\pi) = (r, \\theta+2\\pi)$
- Know the standard curves: circles, cardioids, roses, lima\\c{c}ons

> **Next:** Part 2 covers **graphing polar curves** and symmetry analysis.`
    }
  ]
};
