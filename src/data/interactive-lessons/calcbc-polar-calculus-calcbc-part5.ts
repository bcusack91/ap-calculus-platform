export const calcbcPolarPart5Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol5-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 5 of 7 \u2014 Rates of Change on Polar Curves**

A polar curve $r = f(\\theta)$ can change in three ways as $\\theta$ increases, and each has its own derivative:

| Derivative | Tells you | Formula |
|:---|:---|:---|
| $\\dfrac{dr}{d\\theta}$ | how the signed radius changes | $f'(\\theta)$ |
| $\\dfrac{dy}{d\\theta}$ | whether the point moves up or down | $r'\\sin\\theta + r\\cos\\theta$ |
| $\\dfrac{dx}{d\\theta}$ | whether the point moves right or left | $r'\\cos\\theta - r\\sin\\theta$ |

The last two come from the product rule on $y = r\\sin\\theta$ and $x = r\\cos\\theta$.

### Toward or Away from the Origin

The distance from the origin is $|r|$, not $r$. So:

- $r > 0$ and $\\dfrac{dr}{d\\theta} > 0$: distance increasing (moving **away**)
- $r > 0$ and $\\dfrac{dr}{d\\theta} < 0$: distance decreasing (moving **toward**)
- $r < 0$: the conclusions flip

> **Key Fact:** The point moves away from the origin when $r$ and $dr/d\\theta$ have the same sign, and toward it when they have opposite signs. This is a frequent BC free-response question.`
    },
    {
      id: 'pol5-examples',
      type: 'text' as const,
      content: `### Worked Example

Let $r = 2 + \\cos\\theta$. At $\\theta = \\frac{\\pi}{2}$:

- $r = 2 + 0 = 2$ and $\\dfrac{dr}{d\\theta} = -\\sin\\theta = -1$.
- $r > 0$ and $dr/d\\theta < 0$, so the point is moving **toward** the origin.
- $\\dfrac{dy}{d\\theta} = r'\\sin\\theta + r\\cos\\theta = (-1)(1) + 2(0) = -1$, so $y$ is **decreasing**.
- $\\dfrac{dx}{d\\theta} = r'\\cos\\theta - r\\sin\\theta = (-1)(0) - 2(1) = -2$, so $x$ is **decreasing**.
- Slope of the curve: $\\dfrac{dy}{dx} = \\dfrac{dy/d\\theta}{dx/d\\theta} = \\dfrac{-1}{-2} = \\dfrac{1}{2}$.

### Interpreting in Context

If $r(\\theta)$ is the distance (in meters) from a sprinkler to the edge of the watered region, then $r'(\\theta) = -1$ means the edge is getting closer to the sprinkler at $1$ meter per radian as $\\theta$ increases. Units of $dr/d\\theta$ are units of $r$ per radian.`
    },
    {
      id: 'pol5-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'For $r = \\theta - 2$, consider the point at $\\theta = 1$. As $\\theta$ increases, the point is moving:',
            options: ['Away from the origin, because $dr/d\\theta > 0$', 'Toward the origin, because $r$ and $dr/d\\theta$ have opposite signs', 'Away from the origin, because $r$ and $dr/d\\theta$ have opposite signs', 'Toward the origin, because $r < 0$'],
            correctAnswer: 1,
            explanation: 'At $\\theta = 1$, $r = -1$ and $dr/d\\theta = 1$. Opposite signs mean $|r|$ is shrinking, so the point moves toward the origin. A positive $dr/d\\theta$ alone does not decide it when $r < 0$, opposite signs mean toward rather than away, and $r < 0$ alone says nothing about the change.'
          },
          {
            question: 'For a polar curve $r = f(\\theta)$, the derivative $\\dfrac{dy}{d\\theta}$ equals:',
            options: ['$r\'\\cos\\theta - r\\sin\\theta$', '$r\'\\sin\\theta - r\\cos\\theta$', '$r\'\\sin\\theta + r\\cos\\theta$', '$r\'\\cos\\theta$'],
            correctAnswer: 2,
            explanation: 'With $y = r\\sin\\theta$, the product rule gives $\\frac{dy}{d\\theta} = r\'\\sin\\theta + r\\cos\\theta$. The first option is $dx/d\\theta$, the second has the wrong sign on $r\\cos\\theta$, and the last forgets the product rule.'
          }
        ]
      }
    },
    {
      id: 'pol5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Reading the Derivatives**',
      exercise: {
        dropdowns: [
          {
            label: 'For $r = 3\\sin\\theta$ at $\\theta = \\frac{\\pi}{6}$, the distance from the origin is',
            options: ['decreasing', 'constant', 'increasing', 'undefined'],
            correctAnswers: ['increasing'],
            hints: ['Find the signs of $r$ and $dr/d\\theta$ at $\\theta = \\pi/6$.'],
            explanation: 'At $\\theta = \\pi/6$, $r = 1.5 > 0$ and $dr/d\\theta = 3\\cos(\\pi/6) \\approx 2.598 > 0$. Same signs, so the distance from the origin is increasing. It would be decreasing only if the signs differed, and a nonzero $dr/d\\theta$ rules out constant.'
          },
          {
            label: 'For $r = 2 + \\cos\\theta$ at $\\theta = \\pi$, the value of $\\dfrac{dy}{d\\theta}$ is',
            options: ['$-1$', '$1$', '$0$', '$-2$'],
            correctAnswers: ['$-1$'],
            hints: ['At $\\theta = \\pi$: $r = 1$ and $r\' = -\\sin\\pi = 0$.'],
            explanation: '$\\frac{dy}{d\\theta} = r\'\\sin\\theta + r\\cos\\theta = 0 \\cdot 0 + 1 \\cdot (-1) = -1$, so $y$ is decreasing there. Dropping the sign of $\\cos\\pi$ gives $1$, using only the $r\'$ term gives $0$, and $-2$ uses $r = 2$ instead of $r(\\pi) = 1$.'
          }
        ]
      }
    },
    {
      id: 'pol5-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For $r = 1 + 2\\sin\\theta$, find $\\dfrac{dx}{d\\theta}$ at $\\theta = 0$.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: ['At $\\theta = 0$: $r = 1$ and $r\' = 2\\cos 0 = 2$.', '$\\frac{dx}{d\\theta} = r\'\\cos\\theta - r\\sin\\theta$.'],
        explanation: '$\\frac{dx}{d\\theta} = 2\\cos 0 - 1 \\cdot \\sin 0 = 2 - 0 = 2$. The point is moving to the right as $\\theta$ increases through $0$.'
      }
    },
    {
      id: 'pol5-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- $dr/d\\theta$: same sign as $r$ means moving away from the origin; opposite sign means toward
- $dy/d\\theta = r'\\sin\\theta + r\\cos\\theta$ (up or down)
- $dx/d\\theta = r'\\cos\\theta - r\\sin\\theta$ (right or left)
- In context, $dr/d\\theta$ has units of $r$ per radian

> **Next:** Part 6 is a **Problem-Solving Workshop** with mixed polar problems.`
    }
  ]
};
