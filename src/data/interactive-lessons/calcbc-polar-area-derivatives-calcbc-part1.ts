export const calcbcPolarAreaPart1Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'pa1-intro',
      type: 'text' as const,
      content: `# Polar Area & Derivatives \u2014 Advanced Applications

**Part 1 of 7 \u2014 Area Between Two Polar Curves**

Finding the area between two polar curves requires careful identification of which curve is outer and which is inner.

### Area Between Two Polar Curves

$$\\boxed{A = \\frac{1}{2}\\int_{\\alpha}^{\\beta}\\left[r_{\\text{outer}}^2 - r_{\\text{inner}}^2\\right]d\\theta}$$

**Critical Steps:**
1. Find all intersection points (solve $r_1 = r_2$ AND check the origin)
2. Determine which curve is outer on each sub-interval
3. Set up separate integrals if roles switch

> **Warning:** Do NOT just integrate $\\frac{1}{2}\\int(r_1 - r_2)^2\\,d\\theta$. You must subtract the squared values: $r_1^2 - r_2^2$.`
    },
    {
      id: 'pa1-example',
      type: 'text' as const,
      content: `### Worked Example

**Find the area inside** $r = 2\\sin\\theta$ **and outside** $r = 1$.

**Step 1:** Intersections: $2\\sin\\theta = 1 \\implies \\sin\\theta = 1/2 \\implies \\theta = \\pi/6, 5\\pi/6$.

**Step 2:** On $[\\pi/6, 5\\pi/6]$: $2\\sin\\theta \\ge 1$ (circle is outer).

**Step 3:** Setup:
$$A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}\\left[4\\sin^2\\theta - 1\\right]d\\theta$$

$$= \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}\\left[2(1-\\cos 2\\theta) - 1\\right]d\\theta = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}[1 - 2\\cos 2\\theta]\\,d\\theta$$

$$= \\frac{1}{2}\\left[\\theta - \\sin 2\\theta\\right]_{\\pi/6}^{5\\pi/6} = \\frac{1}{2}\\left[\\frac{2\\pi}{3} + \\sqrt{3}\\right] = \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$$`
    },
    {
      id: 'pa1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For the area INSIDE both $r = \\cos\\theta$ and $r = \\sin\\theta$, how many integrals are needed?',
            options: ['Two (different outer curves on different intervals)', 'One', 'Three', 'None (use subtraction)'],
            correctAnswer: 0,
            explanation: 'The curves intersect at $\\theta = \\pi/4$. On $[0, \\pi/4]$, $\\sin\\theta$ is inner. On $[\\pi/4, \\pi/2]$, $\\cos\\theta$ is inner. Two separate integrals needed.'
          },
          {
            question: 'A common mistake in polar area problems is:',
            options: ['Integrating $\\frac{1}{2}(r_1-r_2)^2$ instead of $\\frac{1}{2}(r_1^2-r_2^2)$', 'Using radians', 'Squaring the radius', 'Using symmetry'],
            correctAnswer: 0,
            explanation: 'Polar area uses $r^2$, not $r$. The area between curves is $\\frac{1}{2}\\int(r_{out}^2 - r_{in}^2)\\,d\\theta$, NOT $\\frac{1}{2}\\int(r_{out} - r_{in})^2\\,d\\theta$.'
          }
        ]
      }
    },
    {
      id: 'pa1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setup Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'For the area inside $r = 1 + \\cos\\theta$ and inside $r = 1$, find where they intersect:',
            options: ['$\\theta = \\pi/2$ and $\\theta = 3\\pi/2$', '$\\theta = 0$ and $\\theta = \\pi$', '$\\theta = \\pi/3$ and $\\theta = 5\\pi/3$', 'They do not intersect'],
            correctAnswers: ['$\\theta = \\pi/2$ and $\\theta = 3\\pi/2$'],
            hints: ['$1 + \\cos\\theta = 1 \\implies \\cos\\theta = 0$.'],
            explanation: '$\\cos\\theta = 0$ at $\\theta = \\pi/2, 3\\pi/2$. On $(-\\pi/2, \\pi/2)$ the cardioid is outer; on $(\\pi/2, 3\\pi/2)$ the circle is outer.'
          },
          {
            label: 'To find area inside BOTH curves, you compute:',
            options: ['Sum of two integrals: each using the inner curve on its interval', 'One integral with the larger curve', 'The average of the two areas', 'The product of the two areas'],
            correctAnswers: ['Sum of two integrals: each using the inner curve on its interval'],
            hints: ['The overlap region has different boundaries on different intervals.'],
            explanation: 'The intersection region is bounded by whichever curve is closer to the origin on each sub-interval. You integrate $\\frac{1}{2}r^2$ for the inner curve on each piece.'
          }
        ]
      }
    },
    {
      id: 'pa1-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'The curves $r = 2$ and $r = 2 + 2\\cos\\theta$ intersect when $\\cos\\theta = 0$. The area inside the cardioid but outside the circle is $\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}[(2+2\\cos\\theta)^2 - 4]\\,d\\theta$. This evaluates to $8 + \\pi$. What is the numerical value of $8 + \\pi$ rounded to 1 decimal?',
        correctAnswer: '11.1',
        acceptableAnswers: ['11.1', '11.14'],
        hints: ['$\\pi \\approx 3.14159$.', '$8 + \\pi \\approx 11.14$.'],
        explanation: '$\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}(8\\cos\\theta + 4\\cos^2\\theta)\\,d\\theta = 8 + \\pi \\approx 11.14$, which rounds to $11.1$.'
      }
    },
    {
      id: 'pa1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Area between polar curves: $\\frac{1}{2}\\int(r_{out}^2 - r_{in}^2)\\,d\\theta$
- Always find ALL intersection points (including the origin)
- Determine outer vs. inner on each sub-interval
- Never confuse $r_1^2 - r_2^2$ with $(r_1 - r_2)^2$

> **Next:** Part 2 covers **intersection finding** techniques in detail.`
    }
  ]
};
