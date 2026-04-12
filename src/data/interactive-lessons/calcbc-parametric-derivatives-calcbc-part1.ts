export const calcbcParamDerivPart1Data = {
  topicSlug: 'parametric-derivatives-calcbc',
  sections: [
    {
      id: 'parametricderivatives-p1-intro',
      type: 'text' as const,
      content: `# 📈 Parametric Derivatives

**Part 1 of 7 — First Derivative $dy/dx$**

---

### Parametric Equations

A curve is defined by:
$$x = f(t), \\\\quad y = g(t)$$

### First Derivative

$$\\\\frac{dy}{dx} = \\\\frac{dy/dt}{dx/dt} = \\\\frac{g'(t)}{f'(t)}$$

> ⚠️ $dx/dt \\\\neq 0$ at the point of interest.

---

### Worked Example

$x = t^2$, $y = t^3$

$\\\\frac{dx}{dt} = 2t$, $\\\\frac{dy}{dt} = 3t^2$

$$\\\\frac{dy}{dx} = \\\\frac{3t^2}{2t} = \\\\frac{3t}{2}$$

At $t = 2$: slope = $3(2)/2 = 3$.

### Second Derivative

$$\\\\frac{d^2y}{dx^2} = \\\\frac{\\\\frac{d}{dt}\\\\left(\\\\frac{dy}{dx}\\\\right)}{\\\\frac{dx}{dt}}$$

From our example: $\\\\frac{d}{dt}(3t/2) = 3/2$, so $\\\\frac{d^2y}{dx^2} = \\\\frac{3/2}{2t} = \\\\frac{3}{4t}$.`
    },
    {
      id: 'parametricderivatives-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes first derivative dy/dx?',
            options: ['A core AP Calculus BC concept', 'Not on the AP exam', 'Only relevant for multivariable calculus', 'A statistics topic'],
            correctAnswer: 0,
            explanation: 'First Derivative dy/dx is a key topic tested on the AP Calculus BC exam.'
          }
        ]
      }
    }
  ]
};
