export const calcbcPolarPart6Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol6-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 6 of 7 \u2014 Problem-Solving Workshop**

Mixed practice covering polar coordinates, graphing, area, slopes, and rates of change.`
    },
    {
      id: 'pol6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: 'The area between $r = 2$ and $r = 2 + 2\\cos\\theta$ (outside the circle, inside the cardioid) is found by:',
            options: ['$\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}[(2+2\\cos\\theta)^2 - 4]\\,d\\theta$', '$\\frac{1}{2}\\int_0^{2\\pi}[(2+2\\cos\\theta)^2 - 4]\\,d\\theta$', '$\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}(2\\cos\\theta)^2\\,d\\theta$', '$\\int_{-\\pi/2}^{\\pi/2}[(2+2\\cos\\theta) - 2]\\,d\\theta$'],
            correctAnswer: 0,
            explanation: 'Find intersections: $2 = 2+2\\cos\\theta \\implies \\cos\\theta = 0 \\implies \\theta = \\pm\\pi/2$. On $(-\\pi/2, \\pi/2)$ the cardioid is outside, so integrate $\\frac{1}{2}(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)$ there. Squaring the difference of radii, integrating the plain difference, or using the full $[0, 2\\pi]$ are the common errors.'
          },
          {
            question: 'For $r = \\sin\\theta + \\cos\\theta$, the Cartesian equation is:',
            options: ['$(x-\\frac{1}{2})^2 + (y-\\frac{1}{2})^2 = \\frac{1}{2}$', '$x + y = 1$', '$x^2 + y^2 = 1$', '$(x-1)^2 + (y-1)^2 = 2$'],
            correctAnswer: 0,
            explanation: '$r^2 = r\\sin\\theta + r\\cos\\theta \\implies x^2+y^2 = y+x \\implies (x-1/2)^2+(y-1/2)^2 = 1/2$. A circle. Replacing $\\sin\\theta$ and $\\cos\\theta$ by $y$ and $x$ without multiplying by $r$ gives a line, $\\sin^2\\theta + \\cos^2\\theta = 1$ is not the same equation, and $(x-1)^2 + (y-1)^2 = 2$ forgets to halve when completing the square.'
          },
          {
            question: 'The circles $r = \\cos\\theta$ and $r = \\sin\\theta$ intersect at:',
            options: ['$\\theta = \\pi/4$ and the origin', '$\\theta = \\pi/4$ only', '$\\theta = 0$ and $\\theta = \\pi/2$', 'They do not intersect'],
            correctAnswer: 0,
            explanation: '$\\cos\\theta = \\sin\\theta \\implies \\theta = \\pi/4$. Both circles also pass through the origin (at different $\\theta$-values).'
          }
        ]
      }
    },
    {
      id: 'pol6-frq',
      type: 'text' as const,
      content: `### AP FRQ-Style Problem

Consider $r = 2\\cos\\theta$ for $0 \\le \\theta \\le \\pi/2$.

**(a)** Find the area of the region.

$$A = \\frac{1}{2}\\int_0^{\\pi/2}4\\cos^2\\theta\\,d\\theta = 2\\int_0^{\\pi/2}\\frac{1+\\cos 2\\theta}{2}\\,d\\theta = [\\theta + \\frac{\\sin 2\\theta}{2}]_0^{\\pi/2} = \\frac{\\pi}{2}$$

**(b)** Find $dy/dx$ at $\\theta = \\pi/6$.

$r = \\sqrt{3}$, $dr/d\\theta = -2\\sin(\\pi/6) = -1$

$$\\frac{dy}{dx} = \\frac{(-1)(1/2) + \\sqrt{3}(\\sqrt{3}/2)}{(-1)(\\sqrt{3}/2) - \\sqrt{3}(1/2)} = \\frac{-1/2 + 3/2}{-\\sqrt{3}/2 - \\sqrt{3}/2} = \\frac{1}{-\\sqrt{3}} = -\\frac{1}{\\sqrt{3}}$$

**(c)** At $\\theta = \\pi/6$, is the point on the curve moving toward or away from the origin?

From part (b), $r = \\sqrt{3} > 0$ and $dr/d\\theta = -1 < 0$. The signs are opposite, so $|r|$ is decreasing: the point is moving **toward** the origin.`
    },
    {
      id: 'pol6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mixed Concepts**',
      exercise: {
        dropdowns: [
          {
            label: 'The area of one petal of $r = \\sin(2\\theta)$ equals:',
            options: ['$\\pi/8$', '$\\pi/4$', '$\\pi/2$', '$\\pi$'],
            correctAnswers: ['$\\pi/8$'],
            hints: ['$A = \\frac{1}{2}\\int_0^{\\pi/2}\\sin^2(2\\theta)\\,d\\theta$.'],
            explanation: '$\\frac{1}{2}\\int_0^{\\pi/2}\\frac{1-\\cos 4\\theta}{2}\\,d\\theta = \\frac{1}{4}[\\theta - \\frac{\\sin 4\\theta}{4}]_0^{\\pi/2} = \\frac{1}{4} \\cdot \\frac{\\pi}{2} = \\pi/8$.'
          },
          {
            label: 'For $r = 1 - \\sin\\theta$, the curve is a:',
            options: ['Cardioid', 'Limaçon with an inner loop', 'Circle of diameter $1$', 'Dimpled limaçon'],
            correctAnswers: ['Cardioid'],
            hints: ['$|a| = |b|$ in $r = a + b\\sin\\theta$ gives a cardioid.'],
            explanation: '$r = 1 - \\sin\\theta$: $a = 1$, $b = -1$. Since $|a| = |b|$, this is a cardioid (an inner loop needs $|b| > |a|$, a dimple needs $|a| > |b|$). $r = 0$ at $\\theta = \\pi/2$, so the cusp sits at the origin at the top, and the farthest point, $r = 2$, is at $\\theta = 3\\pi/2$ (bottom).'
          }
        ]
      }
    },
    {
      id: 'pol6-input',
      type: 'input-box' as const,
      content: '**FRQ Computation**',
      exercise: {
        question: 'Find the total area enclosed by the four-petal rose $r = \\cos(2\\theta)$. Each petal has area $\\pi/8$, and there are $4$ petals. What is the total area? Enter as a fraction times $\\pi$.',
        correctAnswer: '1/2',
        acceptableAnswers: ['1/2', 'pi/2'],
        hints: ['$4 \\times \\pi/8 = \\pi/2$.'],
        explanation: 'Each petal: $\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}\\cos^2(2\\theta)\\,d\\theta = \\pi/8$. Four petals: $4 \\times \\pi/8 = \\pi/2$.'
      }
    },
    {
      id: 'pol6-summary',
      type: 'text' as const,
      content: `### Workshop Recap

**Polar Problem Checklist:**
1. Identify the curve type (circle, cardioid, rose, etc.)
2. Determine symmetry and appropriate limits
3. Set up the correct integral (area: $\\frac{1}{2}r^2$; slope: $\\frac{dy/d\\theta}{dx/d\\theta}$)
4. Use trig identities to evaluate
5. Check your answer against geometric intuition

> **Coming Up:** Part 7 is the **Comprehensive Review** of polar calculus.`
    }
  ]
};
