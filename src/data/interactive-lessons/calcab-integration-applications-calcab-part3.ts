export const calcabIntAppsPart3Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia3-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 3 of 7 — Total Distance and Speed**

### Displacement vs. Total Distance

$$\\boxed{\\text{Displacement} = \\int_a^b v(t)\\,dt \\qquad \\text{Total distance} = \\int_a^b \\lvert v(t)\\rvert\\,dt}$$

Speed is $\\lvert v(t)\\rvert$, so total distance is the integral of speed. Backward motion subtracts from displacement but **adds** to distance.

### Total Distance by Hand

| Step | Action |
|:---:|:---|
| 1 | Find where $v(t) = 0$ and $v$ changes sign inside $(a, b)$ |
| 2 | Integrate $v$ over each piece |
| 3 | Add the absolute values of the pieces |

On the calculator section, enter $\\int_a^b \\lvert v(t)\\rvert\\,dt$ directly; no splitting is needed.

### Worked Example 1 (continuing Part 2)

$v(t) = t^2 - 4t + 3 = (t-1)(t-3)$ on $[0, 3]$: $v > 0$ on $(0, 1)$ and $v < 0$ on $(1, 3)$.

$$\\int_0^1 v\\,dt = \\frac{4}{3}, \\qquad \\int_1^3 v\\,dt = -\\frac{4}{3}$$

Total distance $= \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$, although the displacement is $0$. The particle went right $\\frac{4}{3}$ units, then came back.`
    },
    {
      id: 'ia3-extreme',
      type: 'text' as const,
      content: `### Farthest Left or Right: the Candidates Test

The position $x(t)$ can only reach an extreme value at an endpoint or where $v = x'$ changes sign.

**Worked Example 2.** $v(t) = 2t - 4$ on $[0, 5]$ and $x(0) = 1$. When is the particle farthest left?

$v < 0$ on $(0, 2)$ and $v > 0$ on $(2, 5)$, so the candidates are $t = 0$, $2$ and $5$:

| $t$ | $x(t) = 1 + \\int_0^t (2s - 4)\\,ds = 1 + t^2 - 4t$ |
|:---:|:---:|
| $0$ | $1$ |
| $2$ | $-3$ |
| $5$ | $6$ |

Farthest left at $t = 2$ ($x = -3$). Total distance: $\\lvert -4\\rvert + 9 = 13$, while the displacement is $x(5) - x(0) = 5$.

### Reading a Velocity Graph

Signed area under the $v$-graph is displacement; total area (counting every piece as positive) is distance.

Example: $v$ is piecewise linear through $(0, 0)$, $(2, 4)$, $(4, 0)$, $(6, -2)$, $(8, 0)$.

- Area above the axis on $[0, 4]$: $\\frac{1}{2}(4)(4) = 8$.
- Area below the axis on $[4, 8]$: $\\frac{1}{2}(4)(2) = 4$.

Displacement $= 8 - 4 = 4$; total distance $= 8 + 4 = 12$.

> **AP Tip:** "Total distance" and "position" questions often appear in the same FRQ. Keep two running numbers: the signed sum for position, and the sum of absolute values for distance.`
    },
    {
      id: 'ia3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Distance and Speed** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has velocity $v(t) = 4 - 2t$. What is the total distance it travels on $[0, 3]$?',
            options: ['$5$', '$3$', '$4$', '$1$'],
            correctAnswer: 0,
            explanation: '$v = 0$ at $t = 2$. $\\int_0^2 (4 - 2t)\\,dt = 4$ and $\\int_2^3 (4 - 2t)\\,dt = -1$, so the distance is $4 + 1 = 5$. The displacement is $4 - 1 = 3$; $4$ and $1$ are the two legs alone.'
          },
          {
            question: 'On $[0, 9]$ a velocity graph has area $10$ above the $t$-axis on $[0, 6]$ and area $4$ below it on $[6, 9]$. If $x(0) = -2$, what are $x(9)$ and the total distance?',
            options: ['$x(9) = 4$ and the distance is $14$', '$x(9) = 12$ and the distance is $14$', '$x(9) = 4$ and the distance is $6$', '$x(9) = 8$ and the distance is $14$'],
            correctAnswer: 0,
            explanation: '$x(9) = -2 + 10 - 4 = 4$ uses signed area; the distance $10 + 4 = 14$ uses total area. $12$ adds the area below the axis, $6$ treats the distance as the displacement, and $8$ ignores the backward motion.'
          },
          {
            question: 'A particle has $v(t) = t^2 - 1$ and $x(0) = 0$. At what time on $[0, 2]$ is it farthest to the left?',
            options: ['$t = 1$', '$t = 0$', '$t = 2$', '$t = \\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: '$v < 0$ on $(0, 1)$ and $v > 0$ on $(1, 2)$. Candidates: $x(0) = 0$, $x(1) = \\frac{1}{3} - 1 = -\\frac{2}{3}$, $x(2) = \\frac{8}{3} - 2 = \\frac{2}{3}$. The smallest is at $t = 1$. The start $t = 0$ is not the leftmost point, $t = 2$ is the rightmost, and at $t = \\frac{1}{2}$ the particle is still moving left.'
          }
        ]
      }
    },
    {
      id: 'ia3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Distance setups.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'For $v(t) = \\sin t$ on $[0, 2\\pi]$, the total distance is:',
            options: ['$4$', '$0$', '$2$', '$2\\pi$'],
            correctAnswers: ['$4$'],
            hints: ['$\\sin t \\ge 0$ on $[0, \\pi]$ and $\\le 0$ on $[\\pi, 2\\pi]$.'],
            explanation: '$\\int_0^{\\pi} \\sin t\\,dt = 2$ and $\\int_{\\pi}^{2\\pi} \\sin t\\,dt = -2$, so the distance is $2 + 2 = 4$. The displacement is $0$.'
          },
          {
            label: 'On the calculator section, total distance on $[0, 4]$ is entered as:',
            options: ['$\\int_0^4 \\lvert v(t)\\rvert\\,dt$', '$\\left\\lvert\\int_0^4 v(t)\\,dt\\right\\rvert$', '$\\int_0^4 v(t)\\,dt$', '$\\lvert v(4) - v(0)\\rvert$'],
            correctAnswers: ['$\\int_0^4 \\lvert v(t)\\rvert\\,dt$'],
            hints: ['Take the absolute value before integrating.'],
            explanation: 'Integrate the speed $\\lvert v\\rvert$. The absolute value of $\\int v$ is the size of the displacement, which is smaller whenever the particle changes direction.'
          },
          {
            label: 'Speed is:',
            options: ['$\\lvert v(t)\\rvert$', '$v(t)$', '$\\lvert a(t)\\rvert$', '$\\int v(t)\\,dt$'],
            correctAnswers: ['$\\lvert v(t)\\rvert$'],
            hints: ['Speed has no direction.'],
            explanation: 'Speed is the absolute value of velocity. Velocity carries a sign for direction; speed does not.'
          }
        ]
      }
    },
    {
      id: 'ia3-input',
      type: 'input-box' as const,
      content: '**Find a total distance.** ✍️',
      exercise: {
        question: 'A particle moves with velocity $v(t) = 2t - 4$ for $0 \\le t \\le 5$. Find the total distance it travels.',
        correctAnswer: '13',
        acceptableAnswers: ['13'],
        hints: [
          '$v = 0$ at $t = 2$.',
          '$\\int_0^2 (2t - 4)\\,dt = -4$ and $\\int_2^5 (2t - 4)\\,dt = 9$.',
          'Add the absolute values.'
        ],
        explanation: 'Distance $= \\lvert -4\\rvert + 9 = 13$ (the displacement is $-4 + 9 = 5$).'
      }
    },
    {
      id: 'ia3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Quantity | Formula |
|:---:|:---:|
| Speed | $\\lvert v(t)\\rvert$ |
| Total distance | $\\int_a^b \\lvert v(t)\\rvert\\,dt$ |
| Displacement | $\\int_a^b v(t)\\,dt$ |
| Farthest left/right | Compare $x$ at the endpoints and where $v$ changes sign |

> **Up Next:** Part 4 — Accumulation in Applied Contexts.`
    }
  ]
};
