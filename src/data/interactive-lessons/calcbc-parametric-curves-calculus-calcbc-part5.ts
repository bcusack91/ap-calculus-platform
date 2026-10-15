export const calcbcParametricPart5Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'par5-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 5 of 7 — Planar Motion with Parametric Equations**

On the BC exam, parametric equations usually describe a particle moving in the plane. With position $(x(t), y(t))$:

| Quantity | Formula |
|:---|:---|
| Velocity vector | $\\langle x'(t),\\ y'(t) \\rangle$ |
| Acceleration vector | $\\langle x''(t),\\ y''(t) \\rangle$ |
| Speed | $\\sqrt{(x'(t))^2 + (y'(t))^2}$ |
| Slope of the path | $\\dfrac{dy}{dx} = \\dfrac{y'(t)}{x'(t)}$, when $x'(t) \\ne 0$ |
| Position at $t = b$ | $\\left(x(a) + \\int_a^b x'(t)\\,dt,\\ y(a) + \\int_a^b y'(t)\\,dt\\right)$ |

> **Key Fact:** Each coordinate is handled separately. The sign of $x'(t)$ tells you whether the particle moves right or left, and the sign of $y'(t)$ tells you whether it moves up or down.`
    },
    {
      id: 'par5-tangents',
      type: 'text' as const,
      content: `### Horizontal and Vertical Tangents

| Condition | Tangent line |
|:---|:---|
| $y'(t) = 0$ and $x'(t) \\ne 0$ | Horizontal |
| $x'(t) = 0$ and $y'(t) \\ne 0$ | Vertical |
| $x'(t) = 0$ and $y'(t) = 0$ | Not decided yet: examine $\\lim \\frac{y'(t)}{x'(t)}$ |

### Worked Example

A particle moves with $x(t) = t^2 - 4t$ and $y(t) = t^3 - 3t$ for $t \\ge 0$.

- $x'(t) = 2t - 4$, $y'(t) = 3t^2 - 3$.
- **Vertical tangent:** $x'(t) = 0$ at $t = 2$, where $y'(2) = 9 \\ne 0$.
- **Horizontal tangent:** $y'(t) = 0$ at $t = 1$, where $x'(1) = -2 \\ne 0$.
- **Moving left:** $x'(t) < 0$ for $0 \\le t < 2$.
- **Speed at $t = 1$:** $\\sqrt{(-2)^2 + 0^2} = 2$.
- **Acceleration at $t = 1$:** $\\langle x''(1), y''(1) \\rangle = \\langle 2, 6 \\rangle$.`
    },
    {
      id: 'par5-mc1',
      type: 'multiple-choice' as const,
      content: '**Reading the Motion**',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x(t) = t^3 - 12t$ and $y(t) = t^2 + 1$. At which time $t > 0$ does its path have a vertical tangent line?',
            options: ['$t = 1$', '$t = 2$', '$t = 4$', '$t = 2\\sqrt{3}$'],
            correctAnswer: 1,
            explanation: 'A vertical tangent needs $x\'(t) = 3t^2 - 12 = 0$ with $y\'(t) \\ne 0$; at $t = 2$, $y\'(2) = 4 \\ne 0$. The value $2\\sqrt{3}$ solves $x(t) = 0$ instead of $x\'(t) = 0$, $t = 4$ solves $3t = 12$, and $t = 1$ makes neither derivative zero.'
          },
          {
            question: 'At time $t = 3$ a particle has velocity vector $\\langle -2, 5 \\rangle$. Which describes its motion at that instant?',
            options: ['It moves left while rising', 'It moves right while rising', 'It moves left while falling', 'Its speed is $3$'],
            correctAnswer: 0,
            explanation: 'The horizontal component $-2$ is negative, so the particle moves left; the vertical component $5$ is positive, so it moves up. Reading either sign the other way gives the wrong direction, and the speed is $\\sqrt{(-2)^2 + 5^2} = \\sqrt{29}$, not the sum $-2 + 5 = 3$.'
          }
        ]
      }
    },
    {
      id: 'par5-position',
      type: 'text' as const,
      content: `### Finding Position from Velocity

A particle has $x'(t) = 4t + 1$ and $y'(t) = \\sin(\\pi t)$, and is at $(3, -2)$ at $t = 0$. Find its position at $t = 2$.

$$x(2) = 3 + \\int_0^2 (4t + 1)\\,dt = 3 + \\left[2t^2 + t\\right]_0^2 = 3 + 10 = 13$$

$$y(2) = -2 + \\int_0^2 \\sin(\\pi t)\\,dt = -2 + \\left[-\\tfrac{1}{\\pi}\\cos(\\pi t)\\right]_0^2 = -2 + 0 = -2$$

The particle is at $(13, -2)$. Notice that $y$ returns to its starting value: the particle moved up and then down by equal amounts, so the net change in $y$ is $0$ even though it travelled vertically.

> **AP Tip:** On calculator-active parts, write each position as "starting value $+ \\int$ velocity component" and report three decimal places. Writing only the integral without the starting value is the most common lost point.`
    },
    {
      id: 'par5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Setup**',
      exercise: {
        dropdowns: [
          {
            label: 'A particle has $x\'(t) = e^{t} - 2$ and $y\'(t) = t^2 - 1$. At $t = 1$ its path has',
            options: ['a vertical tangent', 'no tangent line', 'a horizontal tangent', 'a slope of $-2$'],
            correctAnswers: ['a horizontal tangent'],
            hints: ['Evaluate both components at $t = 1$.'],
            explanation: 'At $t = 1$, $y\'(1) = 0$ and $x\'(1) = e - 2 \\approx 0.718 \\ne 0$, so $dy/dx = 0$ and the tangent is horizontal. A vertical tangent would need $x\' = 0$, the tangent line exists because $x\' \\ne 0$, and $-2$ is the constant term of $x\'$, not the slope.'
          },
          {
            label: 'The particle in the position example is at $(3, -2)$ when $t = 0$. Its $x$-coordinate at $t = 1$ is',
            options: ['$3$', '$6$', '$8$', '$13$'],
            correctAnswers: ['$6$'],
            hints: ['$x(1) = 3 + \\int_0^1 (4t + 1)\\,dt$.'],
            explanation: '$x(1) = 3 + [2t^2 + t]_0^1 = 3 + 3 = 6$. The value $3$ ignores the motion, $8$ treats the velocity $x\'(1) = 5$ as constant on $[0, 1]$, and $13$ is the position at $t = 2$.'
          }
        ]
      }
    },
    {
      id: 'par5-input',
      type: 'input-box' as const,
      content: '**Quick Computation**',
      exercise: {
        question: 'For the worked example $x(t) = t^2 - 4t$, $y(t) = t^3 - 3t$, find the speed of the particle at $t = 2$.',
        correctAnswer: '9',
        acceptableAnswers: ['9', '9.0'],
        hints: ['$x\'(2) = 0$ and $y\'(2) = 3(4) - 3$.'],
        explanation: 'At $t = 2$, $x\'(2) = 0$ and $y\'(2) = 9$, so the speed is $\\sqrt{0^2 + 9^2} = 9$. The particle is moving straight up at that instant, which matches the vertical tangent there.'
      }
    },
    {
      id: 'par5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Question | What to compute |
|:---:|:---:|
| Horizontal / vertical tangent | Where $y' = 0$ / $x' = 0$ (other component nonzero) |
| Direction of motion | Signs of $x'(t)$ and $y'(t)$ |
| Speed | $\\sqrt{(x')^2 + (y')^2}$ |
| Position | Start $+ \\int$ each velocity component |

> **Coming Up:** Part 6 is a **Problem-Solving Workshop** with mixed parametric problems.`
    }
  ]
};
