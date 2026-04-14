export const calcbcPolarAreaPart3Data = {
  topicSlug: 'polar-area-derivatives-calcbc',
  sections: [
    {
      id: 'pa3-intro',
      type: 'text' as const,
      content: `# Polar Area & Derivatives \u2014 Advanced Applications

**Part 3 of 7 \u2014 Tangent Lines to Polar Curves**

### Writing Tangent Line Equations

For $r = f(\\theta)$ at $\\theta = \\theta_0$:

1. Find the Cartesian point: $x_0 = r\\cos\\theta_0$, $y_0 = r\\sin\\theta_0$
2. Compute $dy/dx$ using the polar slope formula
3. Write: $y - y_0 = m(x - x_0)$

### Special Case: Tangent at the Origin

When $r(\\theta_0) = 0$ and $r'(\\theta_0) \\ne 0$, the tangent line at the origin has slope $\\tan\\theta_0$.

The tangent line is: $y = (\\tan\\theta_0)\\,x$, or equivalently, $\\theta = \\theta_0$.

> **Why?** As $\\theta \\to \\theta_0$, the curve approaches the origin along the direction $\\theta_0$.`
    },
    {
      id: 'pa3-example',
      type: 'text' as const,
      content: `### Worked Example

**Find the tangent line to** $r = 1 + \\sin\\theta$ **at** $\\theta = \\pi/6$.

**Step 1:** $r = 1 + 1/2 = 3/2$. Point: $(\\frac{3}{2}\\cos\\frac{\\pi}{6},\\, \\frac{3}{2}\\sin\\frac{\\pi}{6}) = (\\frac{3\\sqrt{3}}{4},\\, \\frac{3}{4})$

**Step 2:** $dr/d\\theta = \\cos\\theta$. At $\\theta = \\pi/6$: $dr/d\\theta = \\sqrt{3}/2$.

$$\\frac{dy}{dx} = \\frac{(\\sqrt{3}/2)(1/2) + (3/2)(\\sqrt{3}/2)}{(\\sqrt{3}/2)(\\sqrt{3}/2) - (3/2)(1/2)} = \\frac{\\sqrt{3}/4 + 3\\sqrt{3}/4}{3/4 - 3/4} = \\frac{\\sqrt{3}}{0}$$

**Result:** $dx/d\\theta = 0$, so the tangent is **vertical**: $x = \\frac{3\\sqrt{3}}{4}$

### Tangent at the Origin for Rose Curves

$r = \\cos(3\\theta) = 0$ at $\\theta = \\pi/6, \\pi/2, 5\\pi/6, ...$

Each gives a different tangent direction at the origin. The rose has 3 tangent lines at $(0,0)$, one for each petal.`
    },
    {
      id: 'pa3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For $r = \\cos\\theta$, the tangent line at $\\theta = \\pi/3$ has what slope?',
            options: ['$1/\\sqrt{3}$', '$-\\sqrt{3}$', '$0$', '$\\sqrt{3}$'],
            correctAnswer: 0,
            explanation: '$r = 1/2$, $r\' = -\\sin(\\pi/3) = -\\sqrt{3}/2$. Numerator: $(-\\sqrt{3}/2)(\\sqrt{3}/2) + (1/2)(1/2) = -3/4+1/4 = -1/2$. Denominator: $(-\\sqrt{3}/2)(1/2) - (1/2)(\\sqrt{3}/2) = -\\sqrt{3}/2$. Slope $= (-1/2)/(-\\sqrt{3}/2) = 1/\\sqrt{3}$.'
          },
          {
            question: 'The number of tangent lines at the origin for $r = \\sin(4\\theta)$ is:',
            options: ['$4$', '$8$', '$2$', '$1$'],
            correctAnswer: 0,
            explanation: '$\\sin(4\\theta) = 0$ at $\\theta = 0, \\pi/4, \\pi/2, 3\\pi/4$ (in $[0, \\pi)$). Due to symmetry of the 8-petal rose, there are $4$ distinct tangent directions at the origin.'
          },
          {
            question: 'At a point where $dy/d\\theta = 0$ and $dx/d\\theta \\ne 0$, the polar curve has:',
            options: ['A horizontal tangent', 'A vertical tangent', 'No tangent', 'An inflection point'],
            correctAnswer: 0,
            explanation: '$dy/dx = (dy/d\\theta)/(dx/d\\theta) = 0/\\text{nonzero} = 0$. The tangent slope is zero: horizontal.'
          }
        ]
      }
    },
    {
      id: 'pa3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Tangent Analysis**',
      exercise: {
        dropdowns: [
          {
            label: 'For the cardioid $r = 1 - \\cos\\theta$, the tangent at the origin ($\\theta = 0$) is:',
            options: ['Horizontal ($y = 0$) since $\\tan 0 = 0$', 'Vertical', 'Has slope $1$', 'Does not exist'],
            correctAnswers: ['Horizontal ($y = 0$) since $\\tan 0 = 0$'],
            hints: ['$r(0) = 0$ and $r\'(0) = \\sin 0 = 0$ too\u2014need L\'H\\^opital.'],
            explanation: 'At $\\theta = 0$: $r = 0$ and $r\' = \\sin 0 = 0$. Both zero means we need a limit analysis. $\\lim_{\\theta \\to 0} dy/dx = \\lim \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}$. Using $r \\approx \\theta^2/2$, $r\' \\approx \\theta$: numerator $\\approx \\theta^2$, denominator $\\approx \\theta$, so slope $\\to 0$. Horizontal tangent.'
          },
          {
            label: 'Horizontal tangents on $r = 1 + \\sin\\theta$ occur when:',
            options: ['$dy/d\\theta = 0$ and $dx/d\\theta \\ne 0$', '$r = 0$', '$dr/d\\theta = 0$', '$\\theta = 0$'],
            correctAnswers: ['$dy/d\\theta = 0$ and $dx/d\\theta \\ne 0$'],
            hints: ['$dy/d\\theta = r\'\\sin\\theta + r\\cos\\theta$.'],
            explanation: 'Horizontal tangent requires $dy/d\\theta = \\cos\\theta\\sin\\theta + (1+\\sin\\theta)\\cos\\theta = \\cos\\theta(1+2\\sin\\theta) = 0$. Solutions: $\\theta = \\pi/2, 3\\pi/2$, and $\\sin\\theta = -1/2$.'
          }
        ]
      }
    },
    {
      id: 'pa3-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For the circle $r = 4\\cos\\theta$, find the slope $dy/dx$ at $\\theta = \\pi/3$. Use $r = 2$, $r\' = -2\\sqrt{3}$. The slope simplifies to $\\frac{a}{b\\sqrt{3}}$ where $a$ and $b$ are integers. What is $a/b$?',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['Num: $(-2\\sqrt{3})(\\sqrt{3}/2) + 2(1/2) = -3+1 = -2$.', 'Den: $(-2\\sqrt{3})(1/2) - 2(\\sqrt{3}/2) = -\\sqrt{3}-\\sqrt{3} = -2\\sqrt{3}$.'],
        explanation: 'Num $= -2$, Den $= -2\\sqrt{3}$. Slope $= -2/(-2\\sqrt{3}) = 1/\\sqrt{3}$. So $a = 1$, $b = 1$, $a/b = 1$.'
      }
    },
    {
      id: 'pa3-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Use the polar slope formula with $r$ and $r'$, then build the tangent line equation
- At the origin: tangent slope is $\\tan\\theta_0$ where $f(\\theta_0) = 0$
- Roses have multiple tangent lines at the origin (one per petal)
- Always check for both horizontal ($dy/d\\theta = 0$) and vertical ($dx/d\\theta = 0$) tangents

> **Next:** Part 4 covers **area of lima\\c{c}on regions** and **inner loop area**.`
    }
  ]
};
