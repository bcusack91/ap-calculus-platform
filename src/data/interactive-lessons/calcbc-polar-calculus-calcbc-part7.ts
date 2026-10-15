export const calcbcPolarPart7Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol7-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 7 of 7 \u2014 Comprehensive Review**

### Complete Polar Formula Sheet

| Formula | Expression |
|---------|-----------|
| Conversion | $x = r\\cos\\theta$, $y = r\\sin\\theta$ |
| Area | $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}r^2\\,d\\theta$ |
| Area between curves | $\\frac{1}{2}\\int(r_{\\text{out}}^2 - r_{\\text{in}}^2)\\,d\\theta$ |
| Slope | $\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$ |
| Arc length | $L = \\int\\sqrt{r^2+(r')^2}\\,d\\theta$ |
| Horizontal tangent | $dy/d\\theta = 0$, $dx/d\\theta \\ne 0$ |
| Vertical tangent | $dx/d\\theta = 0$, $dy/d\\theta \\ne 0$ |`
    },
    {
      id: 'pol7-mc1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment**',
      exercise: {
        questions: [
          {
            question: 'The area enclosed by one loop of $r^2 = 4\\cos(2\\theta)$ (lemniscate) is:',
            options: ['$2$', '$4$', '$\\pi$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: 'One loop: $-\\pi/4 \\le \\theta \\le \\pi/4$. $A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}4\\cos(2\\theta)\\,d\\theta = 2[\\frac{\\sin 2\\theta}{2}]_{-\\pi/4}^{\\pi/4} = 2$.'
          },
          {
            question: 'For $r = 1 + 2\\cos\\theta$, the inner loop exists for:',
            options: ['$2\\pi/3 < \\theta < 4\\pi/3$', '$\\pi/3 < \\theta < 5\\pi/3$', '$\\pi/2 < \\theta < 3\\pi/2$', '$-2\\pi/3 < \\theta < 2\\pi/3$'],
            correctAnswer: 0,
            explanation: '$r = 0$ when $\\cos\\theta = -1/2$, i.e., $\\theta = 2\\pi/3$ and $4\\pi/3$. Between these values $r < 0$, forming the inner loop. Using $\\cos\\theta = +1/2$ or $\\cos\\theta < 0$ gives the wrong interval, and $-2\\pi/3 < \\theta < 2\\pi/3$ traces the outer loop, where $r > 0$.'
          },
          {
            question: 'The polar equation $r = 2a\\cos\\theta$ always represents:',
            options: ['A circle passing through the origin', 'A circle centered at the origin', 'A circle centered on the $y$-axis', 'A line through the origin'],
            correctAnswer: 0,
            explanation: '$r = 2a\\cos\\theta \\implies r^2 = 2ar\\cos\\theta \\implies x^2+y^2 = 2ax \\implies (x-a)^2+y^2 = a^2$ (for $a \\ne 0$). Circle centered at $(a,0)$ on the $x$-axis, passing through the origin. A center on the $y$-axis would come from $\\sin\\theta$.'
          },
          {
            question: 'When two polar curves intersect, you must also check:',
            options: ['Whether both curves pass through the origin', 'Only points where $r_1(\\theta) = r_2(\\theta)$', 'Whether the derivatives match at each intersection', 'Whether the curves have equal second derivatives there'],
            correctAnswer: 0,
            explanation: 'Polar intersections at the origin are tricky: $r_1 = 0$ at $\\theta_1$ and $r_2 = 0$ at $\\theta_2 \\ne \\theta_1$, since both may reach the pole at different $\\theta$-values. Setting $r_1 = r_2$ would miss this intersection.'
          }
        ]
      }
    },
    {
      id: 'pol7-curves-table',
      type: 'text' as const,
      content: `### Curve Classification Summary

| Equation | Type | Petals/Loops |
|----------|------|-------------|
| $r = a$ | Circle (origin-centered) | \u2014 |
| $r = 2a\\cos\\theta$ | Circle through origin | \u2014 |
| $r = a + a\\cos\\theta$ | Cardioid | 0 loops |
| $r = a + b\\cos\\theta$, $|a|>|b|$ | Dimpled limaçon if $|a|<2|b|$, convex if $|a| \\ge 2|b|$ | 0 loops |
| $r = a + b\\cos\\theta$, $|a|<|b|$ | Limaçon with loop | 1 inner loop |
| $r = a\\cos(n\\theta)$, $n$ odd | Rose | $n$ petals |
| $r = a\\cos(n\\theta)$, $n$ even | Rose | $2n$ petals |
| $r^2 = a\\cos(2\\theta)$ | Lemniscate | 2 loops |`
    },
    {
      id: 'pol7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final Concept Check**',
      exercise: {
        dropdowns: [
          {
            label: 'The key trig identity for evaluating $\\int\\cos^2\\theta\\,d\\theta$ is:',
            options: ['$\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$', '$\\cos^2\\theta + \\sin^2\\theta = 1$', '$\\cos^2\\theta = \\frac{1-\\cos 2\\theta}{2}$', '$\\cos^2\\theta = 1 - \\sin^2\\theta$'],
            correctAnswers: ['$\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$'],
            hints: ['This is the power-reducing (half-angle) identity.'],
            explanation: '$\\int\\cos^2\\theta\\,d\\theta = \\int\\frac{1+\\cos 2\\theta}{2}\\,d\\theta = \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4} + C$. The version with $1 - \\cos 2\\theta$ is the identity for $\\sin^2\\theta$, and the Pythagorean forms only trade $\\cos^2\\theta$ for $\\sin^2\\theta$ without lowering the power.'
          },
          {
            label: 'For the area between two polar curves, you need to find intersection points to:',
            options: ['Set the limits and see which curve is outer', 'Find where the curves have equal slopes $dy/dx$', 'Find each curve’s maximum distance from the pole', 'Confirm the region is symmetric about the $x$-axis'],
            correctAnswers: ['Set the limits and see which curve is outer'],
            hints: ['Between intersections, one curve may be outer and the other inner.'],
            explanation: 'Intersection points divide regions where different curves are farther from the origin. You must identify which is $r_{\\text{outer}}$ on each sub-interval.'
          }
        ]
      }
    },
    {
      id: 'pol7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'The arc length of the full cardioid $r = 1 + \\cos\\theta$ is $8$ (derived using the half-angle identity). What is the arc length of $r = 3(1 + \\cos\\theta)$?',
        correctAnswer: '24',
        acceptableAnswers: ['24'],
        hints: ['Scaling $r$ by factor $k$ scales arc length by $k$.', '$3 \\times 8 = 24$.'],
        explanation: 'Scaling a polar curve by constant $k$ scales all lengths by $k$. Arc length of $r = 3(1+\\cos\\theta)$ is $3 \\times 8 = 24$.'
      }
    },
    {
      id: 'pol7-summary',
      type: 'text' as const,
      content: `### Polar Calculus Complete!

You have mastered:
- Polar coordinates and conversions
- Graphing polar curves and symmetry analysis
- Polar area formula and area between curves
- Slopes of polar curves via parametric conversion
- Arc length in polar coordinates

> **AP Exam Note:** The polar/parametric FRQ is one of the most predictable on the BC exam. Practice setting up area and arc length integrals with correct limits. Always check for intersections at the origin separately!`
    }
  ]
};
