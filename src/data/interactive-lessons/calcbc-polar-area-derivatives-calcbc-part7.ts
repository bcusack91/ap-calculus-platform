export const calcbcPolarAreaPart7Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'pa7-intro',
      type: 'text' as const,
      content: `# Polar Area & Derivatives \u2014 Comprehensive Review

**Part 7 of 7 \u2014 Full Topic Review**

### Master Checklist

| Concept | Key Formula |
|---------|------------|
| Area in polar | $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$ |
| Area between curves | $A = \\frac{1}{2}\\int_\\alpha^\\beta(r_{\\text{out}}^2 - r_{\\text{in}}^2)\\,d\\theta$ |
| Slope in polar | $\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$ |
| Horizontal tangent | $dy/d\\theta = 0$, $dx/d\\theta \\ne 0$ |
| Vertical tangent | $dx/d\\theta = 0$, $dy/d\\theta \\ne 0$ |
| Intersections | Solve $r_1(\\theta) = r_2(\\theta)$ and check pole |

> **Key Fact:** Always check whether curves pass through the pole at different $\\theta$ values\u2014these are "hidden" intersections not found algebraically.`
    },
    {
      id: 'pa7-review1',
      type: 'text' as const,
      content: `### Common Curve Summary

| Curve | Equation | Petals/Loops | Area |
|-------|----------|-------------|------|
| Circle | $r = a$ | — | $\\pi a^2$ |
| Circle through origin | $r = a\\cos\\theta$ | — | $\\pi a^2/4$ |
| Cardioid | $r = a(1+\\cos\\theta)$ | — | $3\\pi a^2/2$ |
| Rose ($n$ odd) | $r = a\\cos(n\\theta)$ | $n$ petals | $n\\cdot\\frac{\\pi a^2}{4n} = \\pi a^2/4$ |
| Rose ($n$ even) | $r = a\\cos(n\\theta)$ | $2n$ petals | $\\pi a^2/2$ |
| Lemniscate | $r^2 = a^2\\cos(2\\theta)$ | 2 loops | $a^2$ |

> **AP Tip:** Memorize these areas\u2014they can serve as quick checks on FRQ work.`
    },
    {
      id: 'pa7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Questions**',
      exercise: {
        questions: [
          {
            question: 'The area enclosed by the cardioid $r = 2(1+\\sin\\theta)$ is:',
            options: ['$6\\pi$', '$4\\pi$', '$8\\pi$', '$3\\pi$'],
            correctAnswer: 0,
            explanation: 'For $r = a(1+\\sin\\theta)$, area $= 3\\pi a^2/2 = 3\\pi(4)/2 = 6\\pi$. Or compute: $\\frac{1}{2}\\int_0^{2\\pi}4(1+\\sin\\theta)^2\\,d\\theta = 2\\int_0^{2\\pi}(1+2\\sin\\theta+\\sin^2\\theta)\\,d\\theta = 2(2\\pi + 0 + \\pi) = 6\\pi$.'
          },
          {
            question: 'For $r = \\cos(2\\theta)$, how many points of intersection with $r = 1/2$ lie in $[0, 2\\pi)$?',
            options: ['8', '4', '2', '6'],
            correctAnswer: 0,
            explanation: '$\\cos(2\\theta) = 1/2 \\implies 2\\theta = \\pm\\pi/3 + 2k\\pi$. In $[0, 2\\pi)$: $\\theta = \\pi/6, 5\\pi/6, 7\\pi/6, 11\\pi/6$ from $+\\pi/3$ branch, and $\\theta = \\pi/3, 2\\pi/3, 4\\pi/3, 5\\pi/3$ from $-\\pi/3$ branch. That gives 8 intersections.'
          },
          {
            question: 'If $r(\\theta_0) = 0$ and $r\'(\\theta_0) \\ne 0$, the tangent line at the pole makes angle:',
            options: ['$\\theta_0$ with the polar axis', '$\\pi/2$ with the polar axis', '$0$ with the polar axis', 'It is undefined'],
            correctAnswer: 0,
            explanation: 'When the curve passes through the origin, the tangent line has slope $\\tan\\theta_0$, which means the line makes angle $\\theta_0$ with the positive $x$-axis.'
          }
        ]
      }
    },
    {
      id: 'pa7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The area of one loop of the lemniscate $r^2 = 8\\cos(2\\theta)$ is:',
            options: ['$4$', '$8$', '$4\\pi$', '$8\\pi$'],
            correctAnswers: ['$4$'],
            hints: ['Use $A = \\frac{1}{2}\\int r^2\\,d\\theta$ directly since you know $r^2$.'],
            explanation: 'One loop: $\\theta \\in [-\\pi/4, \\pi/4]$. $A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}8\\cos(2\\theta)\\,d\\theta = 4[\\frac{1}{2}\\sin(2\\theta)]_{-\\pi/4}^{\\pi/4} = 4(\\frac{1}{2} - (-\\frac{1}{2})) = 4$.'
          },
          {
            label: 'At a cusp of a cardioid, the tangent line:',
            options: ['Does not exist (both $dy/d\\theta = 0$ and $dx/d\\theta = 0$)', 'Is vertical', 'Is horizontal', 'Has slope 1'],
            correctAnswers: ['Does not exist (both $dy/d\\theta = 0$ and $dx/d\\theta = 0$)'],
            hints: ['A cusp is where $r = 0$ and $r\' = 0$ simultaneously.'],
            explanation: 'At the cusp (e.g., $\\theta = \\pi$ for $r = 1+\\cos\\theta$), both numerator and denominator of $dy/dx$ are zero. L\'H\u00f4pital\'s rule or limits are needed for further analysis.'
          }
        ]
      }
    },
    {
      id: 'pa7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'Find the total area enclosed by $r = 3\\cos\\theta$ (a circle of diameter 3). Give your answer as a fraction times $\\pi$ (e.g. "9/4 pi").',
        correctAnswer: '9/4 pi',
        acceptableAnswers: ['9/4 pi', '9pi/4', '9/4pi', '9π/4', '2.25pi', '2.25 pi', '9/4 π'],
        hints: ['$A = \\frac{1}{2}\\int_0^\\pi 9\\cos^2\\theta\\,d\\theta$.', '$\\cos^2\\theta = \\frac{1}{2}(1+\\cos 2\\theta)$.'],
        explanation: '$A = \\frac{1}{2}\\int_0^\\pi 9\\cos^2\\theta\\,d\\theta = \\frac{9}{2}\\cdot\\frac{1}{2}\\int_0^\\pi(1+\\cos 2\\theta)\\,d\\theta = \\frac{9}{4}[\\theta + \\frac{1}{2}\\sin 2\\theta]_0^\\pi = \\frac{9}{4}\\pi$. This matches $\\pi r^2 = \\pi(3/2)^2 = 9\\pi/4$ for a circle of radius $3/2$.'
      }
    },
    {
      id: 'pa7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered:
- Setting up polar area integrals with correct bounds
- Finding area between polar curves
- Locating intersections (algebraic and at the pole)
- Advanced area applications and FRQ strategies
- Tangent line analysis in polar coordinates

$$\\boxed{A = \\frac{1}{2}\\int_\\alpha^\\beta \\left(r_{\\text{out}}^2 - r_{\\text{in}}^2\\right)d\\theta}$$

> **Up next:** Vector-Valued Functions \u2014 extending parametric ideas to vector notation and multidimensional motion.`
    }
  ]
};
