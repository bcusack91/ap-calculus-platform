export const calcbcParametricPart4Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par4-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 4 of 7 \u2014 Second Derivatives & Concavity**

Part 2 introduced $\\frac{d^2y}{dx^2}$ for a parametric curve. This part works it through in depth, because BC free-response questions regularly ask for it at a given value of $t$ and then ask what its sign says about the curve.`
    },
    {
      id: 'par4-formula',
      type: 'text' as const,
      content: `### The Three-Step Recipe

$$\\boxed{\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}}$$

| Step | Do this |
|------|---------|
| 1 | Find $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ as a function of $t$ |
| 2 | Differentiate that expression with respect to $t$ |
| 3 | Divide the result by $\\frac{dx}{dt}$ |

The sign of $\\frac{d^2y}{dx^2}$ gives the concavity of the curve in the $xy$-plane: positive means concave up, negative means concave down.

### Worked Example: $x = e^t$, $y = t^2$

**Step 1.** $\\frac{dy}{dx} = \\frac{2t}{e^t} = 2te^{-t}$

**Step 2.** $\\frac{d}{dt}\\left(2te^{-t}\\right) = 2e^{-t} - 2te^{-t} = 2e^{-t}(1 - t)$

**Step 3.** $\\frac{d^2y}{dx^2} = \\frac{2e^{-t}(1 - t)}{e^t} = 2(1 - t)e^{-2t}$

Since $e^{-2t} > 0$, the sign depends only on $1 - t$: the curve is concave up for $t < 1$ and concave down for $t > 1$. The concavity changes at $t = 1$, the point $(e, 1)$.`
    },
    {
      id: 'par4-mc1',
      type: 'multiple-choice' as const,
      content: '**Second Derivative Practice**',
      exercise: {
        questions: [
          {
            question: 'For the curve $x = t^2$, $y = t^4 + t$, what is $\\frac{d^2y}{dx^2}$ at $t = 1$?',
            options: ['$\\frac{7}{4}$', '$\\frac{7}{2}$', '$6$', '$7$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{4t^3 + 1}{2t} = 2t^2 + \\frac{1}{2t}$. Its $t$-derivative is $4t - \\frac{1}{2t^2}$, which is $\\frac{7}{2}$ at $t = 1$; dividing by $\\frac{dx}{dt} = 2$ gives $\\frac{7}{4}$. Stopping before the division gives $\\frac{7}{2}$, multiplying by $\\frac{dx}{dt}$ instead gives $7$, and $\\frac{y\'\'(t)}{x\'\'(t)} = \\frac{12}{2} = 6$ is not the second derivative of $y$ with respect to $x$.'
          },
          {
            question: 'A parametric curve has $\\frac{d^2y}{dx^2} = \\frac{t - 2}{t^3}$ for $t > 0$. For which values of $t$ is the curve concave down?',
            options: ['$0 < t < 2$', '$t > 2$', '$t > 0$', 'None, since $t^3 > 0$ for all $t > 0$'],
            correctAnswer: 0,
            explanation: 'For $t > 0$ the denominator $t^3$ is positive, so $\\frac{d^2y}{dx^2}$ has the sign of $t - 2$: negative (concave down) for $0 < t < 2$. For $t > 2$ the curve is concave up. A positive denominator does not make the whole fraction positive.'
          }
        ]
      }
    },
    {
      id: 'par4-sign',
      type: 'text' as const,
      content: `### The Sign Trap: When $x$ Moves Backward

Step 3 divides by $\\frac{dx}{dt}$. When $\\frac{dx}{dt} < 0$, that division **flips the sign**, so the sign of $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)$ alone does not decide concavity.

### Example: Upper Half of a Circle

$x = 2\\cos t$, $y = 2\\sin t$ for $0 < t < \\pi$ traces the top half of the circle of radius 2 from right to left.

**Step 1.** $\\frac{dy}{dx} = \\frac{2\\cos t}{-2\\sin t} = -\\cot t$

**Step 2.** $\\frac{d}{dt}(-\\cot t) = \\csc^2 t > 0$

**Step 3.** $\\frac{d^2y}{dx^2} = \\frac{\\csc^2 t}{-2\\sin t} = -\\frac{1}{2\\sin^3 t}$

On $0 < t < \\pi$, $\\sin t > 0$, so $\\frac{d^2y}{dx^2} < 0$: concave down, as the top of a circle should be. Step 2 was positive, but $\\frac{dx}{dt} = -2\\sin t$ is negative, and the division flipped the sign.

At $t = \\frac{\\pi}{2}$ (the top point $(0, 2)$): $\\frac{d^2y}{dx^2} = -\\frac{1}{2}$.

> **AP Tip:** Never report concavity from Step 2. Finish the division by $\\frac{dx}{dt}$ and then read the sign.`
    },
    {
      id: 'par4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Read the Concavity**',
      exercise: {
        dropdowns: [
          {
            label: 'For the worked example $x = e^t$, $y = t^2$, the curve is concave down when:',
            options: ['$t > 1$', '$t < 1$', '$t > 0$', '$t < 0$'],
            correctAnswers: ['$t > 1$'],
            hints: ['$\\frac{d^2y}{dx^2} = 2(1 - t)e^{-2t}$. When is $1 - t$ negative?'],
            explanation: '$e^{-2t} > 0$ always, so the sign is the sign of $1 - t$, which is negative for $t > 1$.'
          },
          {
            label: 'At $t = 3$, $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = 5$ and $\\frac{dx}{dt} = -2$. Then $\\frac{d^2y}{dx^2}$ at $t = 3$ is:',
            options: ['$-\\frac{5}{2}$', '$-10$', '$\\frac{5}{2}$', '$-\\frac{2}{5}$'],
            correctAnswers: ['$-\\frac{5}{2}$'],
            hints: ['Divide the first value by the second.'],
            explanation: '$\\frac{d^2y}{dx^2} = \\frac{5}{-2} = -\\frac{5}{2}$, so the curve is concave down there. Multiplying gives $-10$, and ignoring the negative $\\frac{dx}{dt}$ gives $\\frac{5}{2}$.'
          },
          {
            label: 'Near a point where $\\frac{d^2y}{dx^2} < 0$, the tangent line to the curve lies:',
            options: ['Above the curve', 'Below the curve', 'On the curve', 'Perpendicular to the curve'],
            correctAnswers: ['Above the curve'],
            hints: ['Negative second derivative means concave down.'],
            explanation: 'A concave-down curve bends below its tangent lines, so a tangent-line estimate there is an overestimate.'
          }
        ]
      }
    },
    {
      id: 'par4-frq',
      type: 'text' as const,
      content: `### FRQ-Style Example: Starting from the Velocity Components

A particle moves along a curve with $\\frac{dx}{dt} = 2t + 1$ and $\\frac{dy}{dt} = t^2 - 4$. Is the curve concave up or concave down at $t = 1$?

**Step 1.** $\\frac{dy}{dx} = \\frac{t^2 - 4}{2t + 1}$. At $t = 1$ the slope is $\\frac{-3}{3} = -1$.

**Step 2.** Quotient rule:

$$\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{2t(2t + 1) - 2(t^2 - 4)}{(2t + 1)^2} = \\frac{2t^2 + 2t + 8}{(2t + 1)^2}$$

At $t = 1$: $\\frac{12}{9} = \\frac{4}{3}$.

**Step 3.** Divide by $\\frac{dx}{dt} = 3$ at $t = 1$: $\\frac{d^2y}{dx^2} = \\frac{4/3}{3} = \\frac{4}{9}$.

**Conclusion:** $\\frac{d^2y}{dx^2} = \\frac{4}{9} > 0$ at $t = 1$, so the curve is concave up there. The curve falls with slope $-1$ but bends upward, so its tangent line lies below it near that point.

> **Scoring note:** State the value and the reason together: "concave up because $\\frac{d^2y}{dx^2} = \\frac{4}{9} > 0$ at $t = 1$."`
    },
    {
      id: 'par4-input',
      type: 'input-box' as const,
      content: '**Compute the Second Derivative**',
      exercise: {
        question: 'For the curve $x = t^2 + 1$, $y = t^3 - 2t$, find $\\frac{d^2y}{dx^2}$ at $t = 1$. Enter the exact value as a fraction.',
        correctAnswer: '5/4',
        acceptableAnswers: ['5/4', '1.25'],
        hints: [
          '$\\frac{dy}{dx} = \\frac{3t^2 - 2}{2t} = \\frac{3}{2}t - \\frac{1}{t}$.',
          'Differentiate with respect to $t$: $\\frac{3}{2} + \\frac{1}{t^2}$, which is $\\frac{5}{2}$ at $t = 1$.',
          'Divide by $\\frac{dx}{dt} = 2t = 2$.'
        ],
        explanation: '$\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{3}{2} + \\frac{1}{t^2} = \\frac{5}{2}$ at $t = 1$, and $\\frac{dx}{dt} = 2$, so $\\frac{d^2y}{dx^2} = \\frac{5/2}{2} = \\frac{5}{4}$. The curve is concave up at $t = 1$.'
      }
    },
    {
      id: 'par4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Idea | Rule |
|---------|-----|
| Second derivative | $\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\div \\frac{dx}{dt}$ |
| Not the formula | $\\frac{y''(t)}{x''(t)}$ is NOT $\\frac{d^2y}{dx^2}$ |
| Concavity | Sign of $\\frac{d^2y}{dx^2}$: positive is concave up, negative is concave down |
| Sign trap | A negative $\\frac{dx}{dt}$ flips the sign in Step 3 |
| Tangent lines | Concave down: tangent line above the curve; concave up: below |

> **Coming Up:** Part 5 covers **planar motion**: tangents, velocity, speed, and position.`
    }
  ]
};
