export const calcbcArcLengthPart3Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'al3-intro',
      type: 'text' as const,
      content: `# Arc Length — Distance Traveled

**Part 3 of 7 — Speed, Distance Traveled, and Displacement**

For a particle moving in the plane with position $(x(t), y(t))$:

$$\\text{speed} = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}$$

$$\\boxed{\\text{distance traveled from } t = a \\text{ to } t = b = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt}$$

This is exactly the parametric arc length integral from Part 2: the integral of speed is the length of the path the particle covers.

| Quantity | How to find it | Can cancel? |
|----------|---------------|-------------|
| Displacement in $x$ | $\\int_a^b x'(t)\\,dt$ | Yes |
| Position at $t = b$ | $x(a) + \\int_a^b x'(t)\\,dt$ (same for $y$) | Yes |
| Distance traveled | $\\int_a^b \\text{speed}\\,dt$ | No |

> **Key Fact:** Distance traveled equals the arc length of the path only when the path is traced once. If the particle goes around a loop twice, the distance counts both trips.`
    },
    {
      id: 'al3-examples',
      type: 'text' as const,
      content: `### Worked Example (calculator active)

A particle has $x'(t) = \\cos(t^2)$ and $y'(t) = e^{0.5t}$, and is at $(2, 1)$ when $t = 0$.

**(a) Speed at $t = 1$:** $\\sqrt{\\cos^2(1) + e^{1}} = \\sqrt{0.2919 + 2.7183} \\approx 1.735$.

**(b) Distance traveled on $0 \\le t \\le 2$:**

$$\\int_0^2 \\sqrt{\\cos^2(t^2) + e^{t}}\\,dt \\approx 3.828$$

**(c) Position at $t = 2$:**

$$x(2) = 2 + \\int_0^2 \\cos(t^2)\\,dt \\approx 2.461, \\qquad y(2) = 1 + \\int_0^2 e^{0.5t}\\,dt \\approx 4.437$$

Notice the different jobs: part (b) integrates speed, which is never negative, while part (c) integrates each velocity component separately and adds the starting position.

### A Path Traced Twice

$x = \\cos 2t$, $y = \\sin 2t$, $0 \\le t \\le 2\\pi$: the speed is $2$, so the distance traveled is $\\int_0^{2\\pi} 2\\,dt = 4\\pi$. The circle itself has length $2\\pi$; the particle goes around it twice. Its displacement is $0$ because it ends where it started.`
    },
    {
      id: 'al3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'A particle has velocity vector $\\langle 3, 4t \\rangle$. The total distance it travels from $t = 0$ to $t = 1$ is:',
            options: ['$\\int_0^1 (3 + 4t)\\,dt$', '$\\sqrt{\\int_0^1 (9 + 16t^2)\\,dt}$', '$\\int_0^1 \\sqrt{9 + 16t^2}\\,dt$', '$\\int_0^1 (9 + 16t^2)\\,dt$'],
            correctAnswer: 2,
            explanation: 'Distance traveled is the integral of speed, $\\sqrt{3^2 + (4t)^2}$, so it is $\\int_0^1\\sqrt{9 + 16t^2}\\,dt \\approx 3.736$. Adding the components skips the Pythagorean step, the square root must sit inside the integral, and leaving out the root integrates speed squared.'
          },
          {
            question: 'A particle moves with $x = \\cos 2t$, $y = \\sin 2t$ for $0 \\le t \\le 2\\pi$. Its total distance traveled is:',
            options: ['$0$', '$2\\pi$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 2,
            explanation: 'The speed is $\\sqrt{4\\sin^2 2t + 4\\cos^2 2t} = 2$, so the distance is $2 \\cdot 2\\pi = 4\\pi$: two laps of the unit circle. The displacement is $0$, the length of the circle traced once is $2\\pi$, and $8\\pi$ doubles the speed again.'
          }
        ]
      }
    },
    {
      id: 'al3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'For a particle with known $x(0)$, the $x$-coordinate at $t = 3$ is found from',
            options: ['$x(0) + \\int_0^3 x\'(t)\\,dt$', '$\\int_0^3 x\'(t)\\,dt$', '$x(0) + \\int_0^3 |x\'(t)|\\,dt$', '$x(0) + x\'(3) \\cdot 3$'],
            correctAnswers: ['$x(0) + \\int_0^3 x\'(t)\\,dt$'],
            hints: ['Position = starting position + net change.'],
            explanation: 'Net change in $x$ is $\\int_0^3 x\'(t)\\,dt$, added to the starting value. Leaving out $x(0)$ gives only the displacement, the absolute value gives the horizontal distance traveled, and $x\'(3)\\cdot 3$ treats the velocity as constant.'
          },
          {
            label: 'Distance traveled equals the arc length of the path when',
            options: ['the particle never stops moving', 'the path is traced exactly once', 'the path is a closed loop', 'both velocity components are positive'],
            correctAnswers: ['the path is traced exactly once'],
            hints: ['What happens to the distance if part of the path is covered twice?'],
            explanation: 'The integral of speed counts every trip along the path, so it matches the curve\'s length only when no part is retraced. A closed loop can still be traced twice, and a particle can keep moving while it backtracks; positive components are sufficient but not necessary.'
          }
        ]
      }
    },
    {
      id: 'al3-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'A particle has $x\'(t) = 6t$ and $y\'(t) = 8t$. Find the total distance it travels from $t = 0$ to $t = 3$.',
        correctAnswer: '45',
        acceptableAnswers: ['45', '45.0'],
        hints: ['Speed $= \\sqrt{36t^2 + 64t^2}$.', 'For $t \\ge 0$, speed $= 10t$.'],
        explanation: 'Speed $= \\sqrt{100t^2} = 10t$ for $t \\ge 0$, so the distance is $\\int_0^3 10t\\,dt = 5t^2\\big|_0^3 = 45$.'
      }
    },
    {
      id: 'al3-summary',
      type: 'text' as const,
      content: `### Summary

- Distance traveled $= \\int_a^b \\sqrt{(x')^2 + (y')^2}\\,dt$, the integral of speed
- Position $=$ starting position $+ \\int$ velocity component (one coordinate at a time)
- Distance never cancels; displacement can
- Distance equals arc length only when the path is traced once

> **Next:** Part 4 — Arc length with respect to $y$ and arc length functions.`
    }
  ]
};
