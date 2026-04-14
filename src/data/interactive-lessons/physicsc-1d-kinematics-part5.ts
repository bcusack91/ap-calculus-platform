export const physC1dKinPart5Data = {
  topicSlug: '1d-kinematics-physics-c',
  sections: [
    {
      id: '1dkin5-intro',
      type: 'text' as const,
      content: `# 1D Kinematics — Differentiation for Velocity and Acceleration

**Part 5 of 7**

Given a position function $x(t)$, we obtain velocity and acceleration through differentiation:

$$v(t) = \\frac{dx}{dt}, \\qquad a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$$

### Common Derivative Rules in Kinematics

| $x(t)$ | $v(t) = dx/dt$ | $a(t) = dv/dt$ |
|:---:|:---:|:---:|
| $At^n$ | $nAt^{n-1}$ | $n(n-1)At^{n-2}$ |
| $A\\sin(\\omega t)$ | $A\\omega\\cos(\\omega t)$ | $-A\\omega^2\\sin(\\omega t)$ |
| $Ae^{kt}$ | $Ake^{kt}$ | $Ak^2e^{kt}$ |
| $A\\ln(t)$ | $A/t$ | $-A/t^2$ |`
    },
    {
      id: '1dkin5-mcq1',
      type: 'mcq' as const,
      question: 'A particle moves with $x(t) = 5\\sin(2t) + 3t$. What is the acceleration at $t = 0$?',
      options: ['$0$', '$-20$', '$10$', '$13$'],
      correctAnswer: 0,
      explanation: '$v(t) = 10\\cos(2t) + 3$, $a(t) = -20\\sin(2t)$. At $t = 0$: $a(0) = -20\\sin(0) = 0$.'
    },
    {
      id: '1dkin5-turning',
      type: 'text' as const,
      content: `## Finding Turning Points and Direction Changes

A particle **changes direction** when $v(t) = 0$ and $v$ changes sign.

### Method

1. Find $v(t) = dx/dt$.
2. Solve $v(t) = 0$ for critical times.
3. Check sign of $v$ on either side (or use $a(t)$ at that point).

### Worked Example

$x(t) = t^3 - 12t + 5$

$v(t) = 3t^2 - 12 = 3(t^2 - 4)$

$v = 0$ when $t = \\pm 2$. For $t > 0$, the turning point is at $t = 2$.

Check: $v(1) = 3 - 12 = -9 < 0$, $v(3) = 27 - 12 = 15 > 0$.

So the particle moves **left** for $0 < t < 2$ and **right** for $t > 2$.

Position at turning point: $x(2) = 8 - 24 + 5 = -11$.

### Using the Second Derivative

At $t = 2$: $a(2) = 6(2) = 12 > 0$.

Since $v = 0$ and $a > 0$, velocity is changing from negative to positive — confirming a direction reversal.`
    },
    {
      id: '1dkin5-mcq2',
      type: 'mcq' as const,
      question: 'For $x(t) = 2t^3 - 15t^2 + 36t$, at what times does the particle change direction?',
      options: ['$t = 2$ and $t = 3$', '$t = 2$ only', '$t = 3$ only', '$t = 5$ only'],
      correctAnswer: 0,
      explanation: '$v(t) = 6t^2 - 30t + 36 = 6(t^2 - 5t + 6) = 6(t-2)(t-3)$. So $v = 0$ at $t = 2$ and $t = 3$. Check: $v$ changes sign at both points (positive → negative → positive), confirming two direction changes.'
    },
    {
      id: '1dkin5-speeding',
      type: 'text' as const,
      content: `## Speeding Up vs. Slowing Down

A particle is:
- **Speeding up** when $v$ and $a$ have the **same sign** ($v \\cdot a > 0$)
- **Slowing down** when $v$ and $a$ have **opposite signs** ($v \\cdot a < 0$)

### Analysis Method

For $x(t) = t^3 - 12t$:

$v(t) = 3t^2 - 12$, $\\quad a(t) = 6t$

| Interval | $v$ | $a$ | $v \\cdot a$ | Motion |
|:---:|:---:|:---:|:---:|:---:|
| $0 < t < 2$ | $-$ | $+$ | $-$ | Slowing down |
| $t = 2$ | $0$ | $+$ | $0$ | Turning point |
| $t > 2$ | $+$ | $+$ | $+$ | Speeding up |

### Key Insight

> **Speed** is $|v(t)|$. You can also check by computing $\\frac{d}{dt}|v(t)|$.

When $|v|$ is increasing, the particle speeds up. When $|v|$ is decreasing, it slows down.`
    },
    {
      id: '1dkin5-mcq3',
      type: 'mcq' as const,
      question: 'A particle has $v(t) = -3e^{-t}$ for $t \\ge 0$. The particle is:',
      options: [
        'Always slowing down',
        'Always speeding up',
        'Speeding up then slowing down',
        'Moving at constant speed'
      ],
      correctAnswer: 0,
      explanation: '$v(t) = -3e^{-t} < 0$ always. $a(t) = 3e^{-t} > 0$ always. Since $v < 0$ and $a > 0$ (opposite signs), the particle is slowing down for all $t \\ge 0$. Speed $|v| = 3e^{-t} \\to 0$ as $t \\to \\infty$.'
    },
    {
      id: '1dkin5-higher',
      type: 'text' as const,
      content: `## Higher-Order Analysis: Jerk

The rate of change of acceleration is called **jerk**:

$$j(t) = \\frac{da}{dt} = \\frac{d^3x}{dt^3}$$

While rarely asked on the AP exam, understanding the derivative chain is important:

$$x(t) \\xrightarrow{d/dt} v(t) \\xrightarrow{d/dt} a(t) \\xrightarrow{d/dt} j(t)$$

### Example: Simple Harmonic Motion Preview

If $x(t) = A\\cos(\\omega t)$:

| Quantity | Expression |
|:---:|:---:|
| $v(t)$ | $-A\\omega\\sin(\\omega t)$ |
| $a(t)$ | $-A\\omega^2\\cos(\\omega t) = -\\omega^2 x(t)$ |
| $j(t)$ | $A\\omega^3\\sin(\\omega t)$ |

Notice: $a(t) = -\\omega^2 x(t)$. This means acceleration is proportional to (and opposite in sign to) position — the hallmark of **simple harmonic motion**.`
    },
    {
      id: '1dkin5-mcq4',
      type: 'mcq' as const,
      question: 'For $x(t) = e^{-t}\\sin t$, what is $v(0)$?',
      options: ['$1$', '$0$', '$-1$', '$e^{-1}$'],
      correctAnswer: 0,
      explanation: 'Using the product rule: $v(t) = -e^{-t}\\sin t + e^{-t}\\cos t = e^{-t}(\\cos t - \\sin t)$. At $t = 0$: $v(0) = e^0(\\cos 0 - \\sin 0) = 1(1 - 0) = 1$.'
    }
  ]
};
