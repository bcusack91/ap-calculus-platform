export const calcbcVectorsPart5Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv5-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Motion & FRQ Strategies

**Part 5 of 7 — AP Free-Response Motion Problems**

Motion problems with vector-valued functions are one of the most common BC FRQ topics. Here's the typical structure:

### Common FRQ Parts

| Part | They Ask | You Do |
|------|---------|--------|
| (a) | Position at time $t$ | Integrate $\\vec{v}$, apply $\\vec{r}(0)$ |
| (b) | Speed at $t = k$ | Compute $\\|\\vec{v}(k)\\|$ |
| (c) | Total distance | $\\int_a^b \\|\\vec{v}\\|\\,dt$ (calculator) |
| (d) | Acceleration at $t = k$ | $\\vec{a}(k) = \\vec{v}\\,'(k)$ |

> **Scoring:** Show all setup. Even with a calculator problem, write the integral before evaluating.`
    },
    {
      id: 'vv5-frq',
      type: 'text' as const,
      content: `### Full FRQ Practice

A particle moves in the $xy$-plane with velocity $\\vec{v}(t) = \\langle 2t - 1,\\, e^{-t} \\rangle$ for $t \\ge 0$. At $t = 0$, the particle is at $(3, 5)$.

**(a)** Find $\\vec{r}(t)$.

$x(t) = \\int(2t-1)\\,dt = t^2 - t + C_1$, $x(0) = 3 \\implies C_1 = 3$

$y(t) = \\int e^{-t}\\,dt = -e^{-t} + C_2$, $y(0) = 5 \\implies -1 + C_2 = 5 \\implies C_2 = 6$

$$\\vec{r}(t) = \\langle t^2 - t + 3,\\, -e^{-t} + 6 \\rangle$$

**(b)** Speed at $t = 2$: $\\vec{v}(2) = \\langle 3, e^{-2} \\rangle$. Speed $= \\sqrt{9 + e^{-4}} \\approx 3.002$.

**(c)** Total distance from $t = 0$ to $t = 3$: $\\int_0^3 \\sqrt{(2t-1)^2 + e^{-2t}}\\,dt \\approx 4.512$ (calculator).

**(d)** $\\vec{a}(t) = \\langle 2, -e^{-t} \\rangle$. At $t = 1$: $\\vec{a}(1) = \\langle 2, -e^{-1} \\rangle$.`
    },
    {
      id: 'vv5-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice**',
      exercise: {
        questions: [
          {
            question: 'A particle starts at the origin with $\\vec{v}(t) = \\langle \\cos t, \\sin t \\rangle$. Its position at $t = \\pi$ is:',
            options: ['$\\langle 0, 2 \\rangle$', '$\\langle \\pi, 0 \\rangle$', '$\\langle -1, 0 \\rangle$', '$\\langle 0, 0 \\rangle$'],
            correctAnswer: 0,
            explanation: '$x(t)=\\sin t + C_1$, $x(0)=0 \\Rightarrow C_1=0$. $y(t)=-\\cos t + C_2$, $y(0)=0 \\Rightarrow C_2=1$. $\\vec{r}(\\pi) = \\langle \\sin\\pi, -\\cos\\pi + 1 \\rangle = \\langle 0, 2 \\rangle$.'
          },
          {
            question: 'On the AP exam, for a calculator-active distance problem, which earns full credit?',
            options: ['Writing the integral setup AND the numerical answer', 'Just the numerical answer', 'A Riemann sum approximation', 'The antiderivative in closed form'],
            correctAnswer: 0,
            explanation: 'Show the integral $\\int_a^b \\|\\vec{v}\\|\\,dt$ with specific limits and integrand, then give the calculator answer to 3 decimal places.'
          }
        ]
      }
    },
    {
      id: 'vv5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'If $\\vec{r}(t) = \\langle t^2, t^3 \\rangle$, the particle is at rest at $t =$',
            options: ['$0$', '$1$', 'Never', '$-1$'],
            correctAnswers: ['$0$'],
            hints: ['At rest when $\\vec{v} = \\vec{0}$.'],
            explanation: '$\\vec{v}(t) = \\langle 2t, 3t^2 \\rangle = \\vec{0}$ when $2t = 0$ AND $3t^2 = 0$, so $t = 0$.'
          },
          {
            label: 'The direction of motion changes when:',
            options: ['A component of velocity changes sign', 'Speed is zero', 'Acceleration is zero', 'The curve intersects itself'],
            correctAnswers: ['A component of velocity changes sign'],
            hints: ['In 2D, the particle reverses direction along an axis when that velocity component changes sign.'],
            explanation: 'If $x\'(t)$ changes sign, the horizontal direction reverses. If $y\'(t)$ changes sign, the vertical direction reverses.'
          }
        ]
      }
    },
    {
      id: 'vv5-input',
      type: 'input-box' as const,
      content: '**FRQ Practice**',
      exercise: {
        question: '$\\vec{v}(t) = \\langle 6, 8 \\rangle$ (constant). $\\vec{r}(0) = \\langle 1, 2 \\rangle$. What is the $x$-coordinate of the particle at $t = 5$?',
        correctAnswer: '31',
        acceptableAnswers: ['31', '31.0'],
        hints: ['$x(t) = 6t + 1$.'],
        explanation: '$x(t) = 6t + 1$. At $t = 5$: $x = 30 + 1 = 31$.'
      }
    },
    {
      id: 'vv5-summary',
      type: 'text' as const,
      content: `### Summary

- AP FRQs follow a predictable pattern: position → speed → distance → acceleration
- Always show integral setup before calculator evaluation
- "At rest" means $\\vec{v} = \\vec{0}$ (both components zero)
- Direction changes when individual velocity components change sign

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
