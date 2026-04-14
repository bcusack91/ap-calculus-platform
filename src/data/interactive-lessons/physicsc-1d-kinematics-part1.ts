export const physC1dKinPart1Data = {
  topicSlug: '1d-kinematics-physics-c',
  sections: [
    {
      id: '1dkin1-intro',
      type: 'text' as const,
      content: `# 1D Kinematics — Position, Velocity & Acceleration

**Part 1 of 7**

In AP Physics C, kinematics is treated with the full power of calculus. We define the fundamental quantities as derivatives and integrals rather than simple ratios.

### Definitions

| Quantity | Symbol | Calculus Definition |
|:---|:---:|:---:|
| Position | $x(t)$ | Given or found by integration |
| Velocity | $v(t)$ | $v = \\frac{dx}{dt}$ |
| Acceleration | $a(t)$ | $a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$ |

### Key Insight

Velocity is the **rate of change** of position, and acceleration is the **rate of change** of velocity:

$$v(t) = \\frac{dx}{dt}, \\qquad a(t) = \\frac{dv}{dt}$$

These are **instantaneous** quantities — they describe motion at a single instant, not over an interval.`
    },
    {
      id: '1dkin1-mcq1',
      type: 'mcq' as const,
      question: 'If $x(t) = 3t^2 - 2t + 5$, what is the velocity $v(t)$?',
      options: ['$6t - 2$', '$3t^2 - 2$', '$6t + 5$', '$6t$'],
      correctAnswer: 0,
      explanation: '$v(t) = \\frac{dx}{dt} = \\frac{d}{dt}(3t^2 - 2t + 5) = 6t - 2$. The constant $5$ vanishes upon differentiation.'
    },
    {
      id: '1dkin1-avg-vs-inst',
      type: 'text' as const,
      content: `## Average vs. Instantaneous Quantities

### Average Velocity

$$\\bar{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{x(t_2) - x(t_1)}{t_2 - t_1}$$

This is the slope of the **secant line** on the $x$-$t$ graph.

### Instantaneous Velocity

$$v(t) = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}$$

This is the slope of the **tangent line** on the $x$-$t$ graph.

### Example

Given $x(t) = t^3 - 6t$:

- Average velocity from $t = 1$ to $t = 3$:

$$\\bar{v} = \\frac{(27-18)-(1-6)}{3-1} = \\frac{9+5}{2} = 7 \\text{ m/s}$$

- Instantaneous velocity at $t = 2$:

$$v(t) = 3t^2 - 6 \\implies v(2) = 12 - 6 = 6 \\text{ m/s}$$`
    },
    {
      id: '1dkin1-mcq2',
      type: 'mcq' as const,
      question: 'A particle moves with position $x(t) = t^3 - 3t$. At what time is the instantaneous velocity zero?',
      options: ['$t = 1$', '$t = 0$', '$t = \\sqrt{3}$', '$t = 3$'],
      correctAnswer: 0,
      explanation: '$v(t) = 3t^2 - 3 = 0 \\implies t^2 = 1 \\implies t = 1$ (taking the positive root). At $t = 1$, the particle momentarily stops.'
    },
    {
      id: '1dkin1-accel',
      type: 'text' as const,
      content: `## Acceleration as the Second Derivative

Since $a = \\frac{dv}{dt}$ and $v = \\frac{dx}{dt}$, acceleration is the second derivative of position:

$$a(t) = \\frac{d^2x}{dt^2}$$

### Sign Conventions

| Condition | Motion Description |
|:---|:---|
| $v > 0$ | Moving in the positive direction |
| $v < 0$ | Moving in the negative direction |
| $a > 0, v > 0$ | Speeding up (positive direction) |
| $a < 0, v > 0$ | Slowing down (positive direction) |
| $a$ and $v$ same sign | Speeding up |
| $a$ and $v$ opposite sign | Slowing down |

### Example

Given $x(t) = 2t^3 - 9t^2 + 12t$:

$$v(t) = 6t^2 - 18t + 12, \\quad a(t) = 12t - 18$$

At $t = 1$: $v(1) = 0$, $a(1) = -6$. The particle is momentarily at rest and about to reverse direction.`
    },
    {
      id: '1dkin1-mcq3',
      type: 'mcq' as const,
      question: 'For $x(t) = 4t^3 - t^2 + 2$, the acceleration at $t = 1$ is:',
      options: ['$22$', '$24$', '$10$', '$11$'],
      correctAnswer: 0,
      explanation: '$v(t) = 12t^2 - 2t$, so $a(t) = 24t - 2$. At $t = 1$: $a(1) = 24 - 2 = 22$.'
    },
    {
      id: '1dkin1-graphical',
      type: 'text' as const,
      content: `## Graphical Connections

The derivative chain $x \\to v \\to a$ connects the three graphs:

| From Graph | To Get | Operation |
|:---:|:---:|:---:|
| $x$-$t$ | $v(t)$ | Slope (derivative) |
| $v$-$t$ | $a(t)$ | Slope (derivative) |
| $v$-$t$ | $\\Delta x$ | Area under curve (integral) |
| $a$-$t$ | $\\Delta v$ | Area under curve (integral) |

### Key Principle

> The area under the $v$-$t$ curve between $t_1$ and $t_2$ gives the **displacement**:
> $$\\Delta x = \\int_{t_1}^{t_2} v(t)\\,dt$$

This is the fundamental theorem of calculus applied to motion!`
    },
    {
      id: '1dkin1-mcq4',
      type: 'mcq' as const,
      question: 'If the velocity-time graph of a particle is a straight line with positive slope passing through the origin, which statement is true?',
      options: [
        'The acceleration is constant and positive',
        'The acceleration is increasing',
        'The position is a linear function of time',
        'The particle is decelerating'
      ],
      correctAnswer: 0,
      explanation: 'A straight line on the $v$-$t$ graph means $v = mt$ for some constant $m > 0$. The slope $a = dv/dt = m$ is constant and positive. The position $x = \\int v\\,dt = \\frac{1}{2}mt^2 + C$ is quadratic, not linear.'
    }
  ]
};
