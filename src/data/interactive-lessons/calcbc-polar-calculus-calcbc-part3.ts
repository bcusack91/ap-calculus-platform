export const calcbcPolarPart3Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol3-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 3 of 7 \u2014 Area in Polar Coordinates**

### The Polar Area Formula

The area enclosed by $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$:

$$\\boxed{A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta = \\frac{1}{2}\\int_{\\alpha}^{\\beta} [f(\\theta)]^2\\,d\\theta}$$

**Why $\\frac{1}{2}r^2$?** Each thin sector has area $\\frac{1}{2}r^2\\,d\\theta$ (like a triangle with base $r\\,d\\theta$ and height $r$).

> **Critical:** Choose $\\alpha$ and $\\beta$ carefully. The curve must trace the region exactly once. Symmetry can reduce the integral.`
    },
    {
      id: 'pol3-examples',
      type: 'text' as const,
      content: `### Example 1: Area of a Cardioid

**Find the area enclosed by** $r = 1 + \\cos\\theta$.

Full curve: $0 \\le \\theta \\le 2\\pi$. By symmetry about the $x$-axis: $A = 2 \\cdot \\frac{1}{2}\\int_0^{\\pi}(1+\\cos\\theta)^2\\,d\\theta$.

$$= \\int_0^{\\pi}(1 + 2\\cos\\theta + \\cos^2\\theta)\\,d\\theta = \\int_0^{\\pi}\\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}\\right)d\\theta$$

$$= \\left[\\frac{3\\theta}{2} + 2\\sin\\theta + \\frac{\\sin 2\\theta}{4}\\right]_0^{\\pi} = \\frac{3\\pi}{2}$$

### Example 2: Area of One Petal

**One petal of** $r = \\sin(2\\theta)$: the first petal spans $0 \\le \\theta \\le \\pi/2$.

$$A = \\frac{1}{2}\\int_0^{\\pi/2}\\sin^2(2\\theta)\\,d\\theta = \\frac{1}{2}\\int_0^{\\pi/2}\\frac{1-\\cos 4\\theta}{2}\\,d\\theta = \\frac{\\pi}{8}$$`
    },
    {
      id: 'pol3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The area enclosed by $r = 3$ (circle of radius $3$) is:',
            options: ['$9\\pi$', '$3\\pi$', '$6\\pi$', '$9\\pi/2$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}\\int_0^{2\\pi}9\\,d\\theta = \\frac{9}{2}(2\\pi) = 9\\pi$. Matches $\\pi r^2 = 9\\pi$.'
          },
          {
            question: 'The total area of all petals of $r = \\cos(3\\theta)$ is:',
            options: ['$\\pi/4$', '$3\\pi/4$', '$\\pi/2$', '$\\pi$'],
            correctAnswer: 0,
            explanation: '3 petals, each with area $\\frac{1}{2}\\int_0^{\\pi/3}\\cos^2(3\\theta)\\,d\\theta = \\pi/12$. Total: $3 \\cdot \\pi/12 = \\pi/4$.'
          },
          {
            question: 'When finding polar area, the $\\frac{1}{2}$ factor comes from:',
            options: ['The area of a thin sector $\\frac{1}{2}r^2\\,d\\theta$', 'The chain rule', 'Converting from Cartesian', 'Symmetry'],
            correctAnswer: 0,
            explanation: 'A sector with central angle $d\\theta$ and radius $r$ has area $\\frac{1}{2}r^2\\,d\\theta$, analogous to triangle area $\\frac{1}{2}bh$.'
          }
        ]
      }
    },
    {
      id: 'pol3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setting Up Integrals**',
      exercise: {
        dropdowns: [
          {
            label: 'For the area of one petal of $r = \\sin(3\\theta)$, the correct limits are:',
            options: ['$0$ to $\\pi/3$', '$0$ to $\\pi$', '$0$ to $2\\pi/3$', '$0$ to $2\\pi$'],
            correctAnswers: ['$0$ to $\\pi/3$'],
            hints: ['$r = 0$ when $3\\theta = 0$ or $3\\theta = \\pi$.'],
            explanation: 'First petal: $\\sin(3\\theta) \\ge 0$ for $0 \\le 3\\theta \\le \\pi$, i.e., $0 \\le \\theta \\le \\pi/3$.'
          },
          {
            label: 'To find the area inside $r = 1 + \\cos\\theta$ but outside $r = 1$:',
            options: ['$\\frac{1}{2}\\int((1+\\cos\\theta)^2 - 1^2)\\,d\\theta$ with appropriate limits', '$\\frac{1}{2}\\int(1+\\cos\\theta)^2\\,d\\theta - \\pi$', 'Cannot subtract polar areas', '$\\int(\\cos\\theta)\\,d\\theta$'],
            correctAnswers: ['$\\frac{1}{2}\\int((1+\\cos\\theta)^2 - 1^2)\\,d\\theta$ with appropriate limits'],
            hints: ['Between two polar curves: $\\frac{1}{2}\\int(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$.'],
            explanation: 'Area between two polar curves: $\\frac{1}{2}\\int_{\\alpha}^{\\beta}(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$. Find where they intersect to get limits.'
          }
        ]
      }
    },
    {
      id: 'pol3-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'Find the area of one petal of $r = 4\\cos(2\\theta)$. The first petal spans $-\\pi/4 \\le \\theta \\le \\pi/4$. The area is $\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}16\\cos^2(2\\theta)\\,d\\theta$. Evaluate and enter as a multiple of $\\pi$ (e.g., enter "2" for $2\\pi$).',
        correctAnswer: '2',
        acceptableAnswers: ['2'],
        hints: ['$\\cos^2(2\\theta) = \\frac{1+\\cos 4\\theta}{2}$.', '$\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}16 \\cdot \\frac{1+\\cos 4\\theta}{2}\\,d\\theta = 4\\int_{-\\pi/4}^{\\pi/4}(1+\\cos 4\\theta)\\,d\\theta$.'],
        explanation: '$= 4[\\theta + \\frac{\\sin 4\\theta}{4}]_{-\\pi/4}^{\\pi/4} = 4[(\\pi/4 + 0) - (-\\pi/4 + 0)] = 4 \\cdot \\pi/2 = 2\\pi$.'
      }
    },
    {
      id: 'pol3-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Polar area: $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}r^2\\,d\\theta$
- Between curves: $\\frac{1}{2}\\int(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$
- Use half-angle identities: $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$, $\\sin^2\\theta = \\frac{1-\\cos 2\\theta}{2}$
- Exploit symmetry to simplify calculations

> **Next:** Part 4 covers **slopes of polar curves** ($dy/dx$ in polar).`
    }
  ]
};
