export const calcbcPolarAreaPart6Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'pa6-intro',
      type: 'text' as const,
      content: `# Polar Area & Derivatives \u2014 Workshop

**Part 6 of 7 \u2014 Problem-Solving Workshop**

Apply everything from Parts 1\u20135 in mixed-format problems.

### Workshop Overview

| Problem Type | Key Technique |
|-------------|--------------|
| Area of petal | Determine one-petal bounds, use symmetry |
| Area between curves | Subtract inner$^2$ from outer$^2$ |
| Slope at a point | $dy/dx$ formula with $r$ and $r'$ |
| Horizontal/vertical tangents | $dy/d\\theta = 0$ or $dx/d\\theta = 0$ |`
    },
    {
      id: 'pa6-prob1',
      type: 'text' as const,
      content: `### Problem 1 \u2014 Area Between Curves

Find the area inside $r = 3\\cos\\theta$ and outside $r = 1 + \\cos\\theta$.

**Step 1.** Intersections: $3\\cos\\theta = 1 + \\cos\\theta \\implies 2\\cos\\theta = 1 \\implies \\cos\\theta = 1/2 \\implies \\theta = \\pm\\pi/3$.

**Step 2.** On $[-\\pi/3, \\pi/3]$: $3\\cos\\theta \\ge 1+\\cos\\theta$ (circle is outer).

$$A = \\frac{1}{2}\\int_{-\\pi/3}^{\\pi/3}[9\\cos^2\\theta - (1+\\cos\\theta)^2]\\,d\\theta$$

**Step 3.** Expand: $9\\cos^2\\theta - 1 - 2\\cos\\theta - \\cos^2\\theta = 8\\cos^2\\theta - 2\\cos\\theta - 1$.

Using double angle: $8\\cos^2\\theta = 4(1+\\cos 2\\theta) = 4 + 4\\cos 2\\theta$.

Integrand: $3 + 4\\cos 2\\theta - 2\\cos\\theta$.

$$A = \\frac{1}{2}\\left[3\\theta + 2\\sin 2\\theta - 2\\sin\\theta\\right]_{-\\pi/3}^{\\pi/3} = \\frac{1}{2}\\left(2\\pi + 2\\sqrt{3} - 2\\sqrt{3}\\right) = \\pi$$`
    },
    {
      id: 'pa6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Questions**',
      exercise: {
        questions: [
          {
            question: 'The area of one petal of $r = 2\\cos(3\\theta)$ is:',
            options: ['$\\pi/3$', '$\\pi/6$', '$2\\pi/3$', '$\\pi$'],
            correctAnswer: 0,
            explanation: 'One petal spans $\\pi/3$ radians (e.g., $-\\pi/6$ to $\\pi/6$). $A = \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6}4\\cos^2(3\\theta)\\,d\\theta = \\frac{1}{2}\\int_{-\\pi/6}^{\\pi/6}2(1+\\cos 6\\theta)\\,d\\theta = [\\theta + \\frac{1}{6}\\sin 6\\theta]_{-\\pi/6}^{\\pi/6} = \\pi/3$.'
          },
          {
            question: 'For $r = 2 + 2\\sin\\theta$, how many values of $\\theta$ in $[0, 2\\pi)$ give horizontal tangents?',
            options: ['3', '2', '4', '1'],
            correctAnswer: 0,
            explanation: 'Horizontal tangent when $dy/d\\theta = 0$: $r\'\\sin\\theta + r\\cos\\theta = 0 \\implies 2\\cos\\theta\\sin\\theta + (2+2\\sin\\theta)\\cos\\theta = 0 \\implies \\cos\\theta(2\\sin\\theta + 2 + 2\\sin\\theta) = 0 \\implies \\cos\\theta(4\\sin\\theta + 2) = 0$. So $\\cos\\theta = 0$ ($\\theta = \\pi/2, 3\\pi/2$) or $\\sin\\theta = -1/2$ ($\\theta = 7\\pi/6, 11\\pi/6$). But check $dx/d\\theta \\ne 0$. At $\\theta = 3\\pi/2$ the cardioid has a cusp (both zero). Three valid horizontal tangents.'
          }
        ]
      }
    },
    {
      id: 'pa6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'The total area enclosed by $r = \\sin(2\\theta)$ (four-petaled rose) is:',
            options: ['$\\pi/2$', '$\\pi$', '$2\\pi$', '$\\pi/4$'],
            correctAnswers: ['$\\pi/2$'],
            hints: ['Each petal has area $\\pi/8$. Four petals total.'],
            explanation: 'One petal: $\\frac{1}{2}\\int_0^{\\pi/2}\\sin^2(2\\theta)\\,d\\theta = \\frac{1}{2}\\cdot\\frac{\\pi}{4} = \\pi/8$. Four petals: $4 \\cdot \\pi/8 = \\pi/2$.'
          },
          {
            label: 'To find where $r = 2\\sin\\theta$ has a vertical tangent, set:',
            options: ['$dx/d\\theta = 0$ and check $dy/d\\theta \\ne 0$', '$dy/d\\theta = 0$', '$r = 0$', '$dr/d\\theta = 0$'],
            correctAnswers: ['$dx/d\\theta = 0$ and check $dy/d\\theta \\ne 0$'],
            hints: ['Vertical tangent means the slope is undefined.'],
            explanation: 'Vertical tangent: $dx/d\\theta = 0$ with $dy/d\\theta \\ne 0$, so $dy/dx \\to \\pm\\infty$.'
          }
        ]
      }
    },
    {
      id: 'pa6-input',
      type: 'input-box' as const,
      content: '**Workshop Computation**',
      exercise: {
        question: 'Find the area of one petal of $r = 4\\sin(2\\theta)$. The petal from $\\theta = 0$ to $\\theta = \\pi/2$ gives $A = \\frac{1}{2}\\int_0^{\\pi/2}16\\sin^2(2\\theta)\\,d\\theta$. Evaluate this integral. Give your answer as a multiple of $\\pi$ (e.g. enter $2\\pi$ as "2pi").',
        correctAnswer: '2pi',
        acceptableAnswers: ['2pi', '2π', '2 pi', '6.28', '6.283'],
        hints: ['$\\sin^2(2\\theta) = \\frac{1}{2}(1 - \\cos 4\\theta)$.', '$\\frac{1}{2}\\int_0^{\\pi/2} 8(1-\\cos 4\\theta)\\,d\\theta$.'],
        explanation: '$A = \\frac{1}{2}\\int_0^{\\pi/2}16\\cdot\\frac{1}{2}(1-\\cos 4\\theta)\\,d\\theta = 4\\int_0^{\\pi/2}(1-\\cos 4\\theta)\\,d\\theta = 4[\\theta - \\frac{1}{4}\\sin 4\\theta]_0^{\\pi/2} = 4(\\pi/2 - 0) = 2\\pi$.'
      }
    },
    {
      id: 'pa6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- Area of rose petals: determine one-petal bounds, multiply by number of petals
- Area between curves: find intersections, identify inner/outer on each interval
- Tangent analysis: use $dy/d\\theta$ and $dx/d\\theta$ separately before forming $dy/dx$
- Watch for cusps where both numerator and denominator vanish

> **Next:** Part 7 \u2014 Comprehensive Review.`
    }
  ]
};
