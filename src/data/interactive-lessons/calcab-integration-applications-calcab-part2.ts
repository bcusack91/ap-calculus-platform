export const calcabIntAppsPart2Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia2-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 2 of 7 — Position, Velocity, and Displacement**

### The Motion Chain, Run Backwards

For a particle moving along a line: $v(t) = x'(t)$ and $a(t) = v'(t)$. Derivatives go down the chain; **integrals come back up**:

$$\\boxed{x(b) = x(a) + \\int_a^b v(t)\\,dt} \\qquad \\boxed{v(b) = v(a) + \\int_a^b a(t)\\,dt}$$

| Quantity on $[a, b]$ | Formula | Meaning |
|:---:|:---:|:---:|
| Displacement | $\\int_a^b v(t)\\,dt = x(b) - x(a)$ | Net change in position (can be negative) |
| Position at $t = b$ | $x(a) + \\int_a^b v(t)\\,dt$ | Starting position plus displacement |
| Change in velocity | $\\int_a^b a(t)\\,dt = v(b) - v(a)$ | Net change in velocity |
| Average velocity | $\\frac{1}{b-a}\\int_a^b v(t)\\,dt$ | Displacement divided by elapsed time |

> **Key Fact:** You never need a formula for $x(t)$. Position at a later time is the known position plus the definite integral of velocity.`
    },
    {
      id: 'ia2-worked',
      type: 'text' as const,
      content: `### Worked Example 1 — Position from Velocity

A particle moves along the $x$-axis with velocity $v(t) = t^2 - 4t + 3$ (units per second), and $x(0) = 2$.

**(a) Displacement on $[0, 3]$:**

$$\\int_0^3 (t^2 - 4t + 3)\\,dt = \\left[\\frac{t^3}{3} - 2t^2 + 3t\\right]_0^3 = 9 - 18 + 9 = 0$$

So $x(3) = 2 + 0 = 2$: the particle ends where it started.

**(b) Position at $t = 1$:**

$$x(1) = 2 + \\int_0^1 (t^2 - 4t + 3)\\,dt = 2 + \\left(\\frac{1}{3} - 2 + 3\\right) = \\frac{10}{3}$$

**(c) Average velocity on $[0, 3]$:** $\\frac{0}{3} = 0$ units per second, even though the particle did move. (Part 3 measures how far it actually traveled.)

### Worked Example 2 — Starting from Acceleration

$a(t) = 6t - 4$, $v(0) = -3$ and $x(0) = 1$. Find $x(2)$.

Velocity: $v(t) = -3 + \\int_0^t (6s - 4)\\,ds = 3t^2 - 4t - 3$.

Position: $x(2) = 1 + \\int_0^2 (3t^2 - 4t - 3)\\,dt = 1 + (8 - 8 - 6) = -5$.

> **AP Tip:** On the calculator section the velocity is usually something you cannot integrate by hand, such as $v(t) = \\sin(t^2) + 1$. Write the setup, $x(b) = x(a) + \\int_a^b v(t)\\,dt$, then let the calculator evaluate the integral and report three decimal places.`
    },
    {
      id: 'ia2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Position and Displacement** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has velocity $v(t) = 2t - 6$ and position $x(0) = 5$. What is $x(4)$?',
            options: ['$-3$', '$-8$', '$13$', '$2$'],
            correctAnswer: 0,
            explanation: '$x(4) = 5 + \\int_0^4 (2t - 6)\\,dt = 5 + (16 - 24) = -3$. $-8$ is the displacement alone, $13$ adds the size of the displacement instead of its signed value, and $2$ is the velocity $v(4)$.'
          },
          {
            question: 'Position is in meters and time in seconds, with the positive direction to the right. If $\\int_1^5 v(t)\\,dt = -6$, which statement must be true?',
            options: ['At $t = 5$ it is 6 m left of its $t = 1$ position', 'Between $t = 1$ and $t = 5$ it traveled exactly 6 m', 'It moved to the left during the whole time', 'Its velocity at $t = 5$ was $-6$ meters per second'],
            correctAnswer: 0,
            explanation: 'The integral of velocity is displacement: $x(5) - x(1) = -6$. The distance traveled could be more than 6 m if the particle changed direction, it may have moved right for part of the time, and the integral says nothing about $v(5)$ itself.'
          },
          {
            question: 'A particle has acceleration $a(t) = 4 - 2t$ and $v(0) = 1$. What is $v(3)$?',
            options: ['$4$', '$3$', '$-2$', '$-5$'],
            correctAnswer: 0,
            explanation: '$v(3) = 1 + \\int_0^3 (4 - 2t)\\,dt = 1 + (12 - 9) = 4$. $3$ is the change in velocity alone, $-2$ is the acceleration $a(3)$, and $-5$ integrates $2t$ as $2t^2$.'
          }
        ]
      }
    },
    {
      id: 'ia2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Read the integral.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'Velocity $v(t)$ is in feet per second. On $[0, 10]$, $\\int_0^{10} v(t)\\,dt$ is the particle’s:',
            options: ['Displacement, in feet', 'Total distance, in feet', 'Average velocity, in ft/s', 'Acceleration, in ft/s²'],
            correctAnswers: ['Displacement, in feet'],
            hints: ['The integral of a rate of change is the net change.'],
            explanation: '$\\int_0^{10} v(t)\\,dt = x(10) - x(0)$, the displacement, in (ft/s)(s) = ft. Total distance needs $\\lvert v\\rvert$, and average velocity divides by 10.'
          },
          {
            label: 'If $x(2) = 7$ and $\\int_2^6 v(t)\\,dt = -3$, then $x(6)$ is:',
            options: ['$4$', '$-3$', '$10$', '$-21$'],
            correctAnswers: ['$4$'],
            hints: ['Position later = position earlier + displacement.'],
            explanation: '$x(6) = x(2) + \\int_2^6 v(t)\\,dt = 7 - 3 = 4$.'
          },
          {
            label: 'The average velocity on $[a, b]$ is:',
            options: ['$\\frac{1}{b-a}\\int_a^b v(t)\\,dt$', '$\\frac{v(a)+v(b)}{2}$', '$\\frac{v(b)-v(a)}{b-a}$', '$\\int_a^b \\lvert v(t)\\rvert\\,dt$'],
            correctAnswers: ['$\\frac{1}{b-a}\\int_a^b v(t)\\,dt$'],
            hints: ['Average velocity is the average value of $v$.'],
            explanation: 'Average velocity $= \\frac{1}{b-a}\\int_a^b v(t)\\,dt = \\frac{x(b)-x(a)}{b-a}$. $\\frac{v(b)-v(a)}{b-a}$ is the average acceleration, and $\\int \\lvert v\\rvert$ is total distance.'
          }
        ]
      }
    },
    {
      id: 'ia2-input',
      type: 'input-box' as const,
      content: '**Find a position.** ✍️',
      exercise: {
        question: 'A particle moves along a line with velocity $v(t) = 3t^2 - 6t$, and $x(1) = 4$. Find $x(3)$.',
        correctAnswer: '6',
        acceptableAnswers: ['6'],
        hints: [
          '$x(3) = x(1) + \\int_1^3 v(t)\\,dt$.',
          'An antiderivative of $3t^2 - 6t$ is $t^3 - 3t^2$.',
          '$\\left[t^3 - 3t^2\\right]_1^3 = 0 - (-2) = 2$.'
        ],
        explanation: '$x(3) = 4 + \\left[t^3 - 3t^2\\right]_1^3 = 4 + (0 - (-2)) = 6$.'
      }
    },
    {
      id: 'ia2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Want | Use |
|:---:|:---:|
| Position at $t = b$ | $x(a) + \\int_a^b v(t)\\,dt$ |
| Displacement | $\\int_a^b v(t)\\,dt$ |
| Velocity at $t = b$ | $v(a) + \\int_a^b a(t)\\,dt$ |
| Average velocity | $\\frac{1}{b-a}\\int_a^b v(t)\\,dt$ |

> **Up Next:** Part 3 — Total Distance and Speed.`
    }
  ]
};
