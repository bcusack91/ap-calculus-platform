export const calcbcPolarAreaPart5Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'pa5-intro',
      type: 'text' as const,
      content: `# Polar Area & Derivatives \u2014 Advanced Applications

**Part 5 of 7 \u2014 AP FRQ Polar Applications**

The AP BC exam typically includes a polar/parametric FRQ. Here are the most common question types and strategies.

### Common AP FRQ Polar Questions

| Question Type | What to Do |
|---------------|-----------|
| Find the area of a region | Set up $\\frac{1}{2}\\int r^2\\,d\\theta$ with correct limits |
| Find $dy/dx$ at $\\theta = \\theta_0$ | Use $\\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$ |
| Find tangent line equation | Get point and slope, use point-slope form |
| When is the tangent horizontal? | Solve $dy/d\\theta = 0$, check $dx/d\\theta \\ne 0$ |
| Find $dr/d\\theta$ and interpret | Rate at which distance from origin changes |

> **Scoring:** AP Readers look for correct integral setup (1-2 pts), correct antiderivative (1 pt), and correct evaluation (1 pt). Correct setup alone earns credit even with algebra errors.`
    },
    {
      id: 'pa5-frq',
      type: 'text' as const,
      content: `### AP FRQ Practice

**The curve $r = 3 + 2\\sin\\theta$ and the circle $r = 2$ are shown.**

**(a)** Find the area of the region inside $r = 3+2\\sin\\theta$ and outside $r = 2$.

Intersections: $3+2\\sin\\theta = 2 \\implies \\sin\\theta = -1/2 \\implies \\theta = 7\\pi/6, 11\\pi/6$.

On $(7\\pi/6, 11\\pi/6)$: $r_{\\text{lima}} < 2$ (circle is outer). On the rest: lima\\c{c}on is outer.

$$A = \\frac{1}{2}\\int_{-\\pi/6}^{7\\pi/6}[(3+2\\sin\\theta)^2 - 4]\\,d\\theta$$

Note: using $11\\pi/6 = -\\pi/6$ (equivalent angle).

**(b)** Find $dy/dx$ for $r = 3 + 2\\sin\\theta$ at $\\theta = \\pi$.

$r = 3$, $r' = 2\\cos\\pi = -2$.

$dy/dx = \\frac{(-2)(0) + 3(-1)}{(-2)(-1) - 3(0)} = \\frac{-3}{2}$`
    },
    {
      id: 'pa5-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'On the AP BC exam, which earns the MOST credit for a polar area problem?',
            options: ['Correct integrand and limits (even with computation error)', 'Final numerical answer only', 'Drawing the graph', 'Writing the formula $A = \\frac{1}{2}\\int r^2\\,d\\theta$'],
            correctAnswer: 0,
            explanation: 'AP Readers award setup points (integrand + limits) separately from computation. A correct setup with algebra errors still earns 2-3 out of 4 points.'
          },
          {
            question: 'For the region inside $r = 4\\sin\\theta$ and inside $r = 2$, you need to:',
            options: ['Split into sub-regions based on which curve is inner', 'Just integrate $\\frac{1}{2}\\int_0^\\pi 4\\sin^2\\theta\\,d\\theta$', 'Subtract the full areas', 'Use rectangular coordinates instead'],
            correctAnswer: 0,
            explanation: '$4\\sin\\theta = 2 \\implies \\sin\\theta = 1/2 \\implies \\theta = \\pi/6, 5\\pi/6$. On $[\\pi/6, 5\\pi/6]$ the circle $r = 4\\sin\\theta$ is outer. Outside that interval but still inside $r = 2$, use $r = 2$.'
          }
        ]
      }
    },
    {
      id: 'pa5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Exam Strategy**',
      exercise: {
        dropdowns: [
          {
            label: 'When an FRQ says "set up but do not evaluate," you should:',
            options: ['Write the complete integral with limits, integrand, and $d\\theta$', 'Just write the formula', 'Give a numerical approximation', 'Solve it anyway'],
            correctAnswers: ['Write the complete integral with limits, integrand, and $d\\theta$'],
            hints: ['Every component matters for credit.'],
            explanation: '$$\\text{Full credit: } A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}(16\\sin^2\\theta - 4)\\,d\\theta$$ Writing just $\\frac{1}{2}\\int r^2\\,d\\theta$ without specific limits and integrand earns little credit.'
          },
          {
            label: 'The interpretation of $dr/d\\theta > 0$ at $\\theta = \\theta_0$ is:',
            options: ['The curve is getting farther from the origin as $\\theta$ increases', 'The curve is moving right', 'The slope is positive', 'The area is increasing'],
            correctAnswers: ['The curve is getting farther from the origin as $\\theta$ increases'],
            hints: ['$r$ measures distance from origin.'],
            explanation: '$dr/d\\theta > 0$ means the radius is increasing: the curve spirals outward at that angle. This is a common FRQ interpretation question.'
          }
        ]
      }
    },
    {
      id: 'pa5-input',
      type: 'input-box' as const,
      content: '**FRQ Computation**',
      exercise: {
        question: 'For $r = 3 + 2\\sin\\theta$ at $\\theta = \\pi/2$: $r = 5$, $r\' = 0$. Find $dy/dx$. The slope equals $r\\cos\\theta/(\\text{denominator})$. What is $dy/dx$?',
        correctAnswer: '0',
        acceptableAnswers: ['0', '0.0'],
        hints: ['$dy/d\\theta = r\'\\sin\\theta + r\\cos\\theta = 0 \\cdot 1 + 5 \\cdot 0 = 0$.', '$dx/d\\theta = r\'\\cos\\theta - r\\sin\\theta = 0 - 5 = -5 \\ne 0$.'],
        explanation: '$dy/d\\theta = 0$, $dx/d\\theta = -5$. $dy/dx = 0/(-5) = 0$. Horizontal tangent at the top of the curve.'
      }
    },
    {
      id: 'pa5-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- AP FRQ polar problems: setup is worth significant credit
- Always show: limits, integrand (expanded or factored), and $d\\theta$
- Common parts: area, slope, tangent line, interpret $dr/d\\theta$
- Split regions when curves switch inner/outer roles

> **Next:** Part 6 is a **Problem-Solving Workshop** with mixed problems.`
    }
  ]
};
