export const physC1dKinPart4Data = {
  topicSlug: '1d-kinematics-physics-c',
  sections: [
    {
      id: '1dkin4-intro',
      type: 'text' as const,
      content: `# 1D Kinematics — Integration for Position from Velocity

**Part 4 of 7**

One of the most important skills in AP Physics C is recovering position from a known velocity function using integration.

### The Fundamental Relationship

$$x(t) = x(t_0) + \\int_{t_0}^{t} v(t')\\,dt'$$

This is the **antiderivative** approach: position is the integral of velocity.

### Displacement vs. Distance

| Quantity | Formula | Meaning |
|:---|:---:|:---|
| Displacement | $\\int_{t_1}^{t_2} v\\,dt$ | Net change in position (can be negative) |
| Distance | $\\int_{t_1}^{t_2} |v|\\,dt$ | Total path length (always $\\ge 0$) |

When velocity changes sign, displacement and distance differ!`
    },
    {
      id: '1dkin4-mcq1',
      type: 'mcq' as const,
      question: 'Given $v(t) = 6t^2 - 4t$ and $x(0) = 3$, find $x(2)$.',
      options: ['$11$', '$8$', '$19$', '$7$'],
      correctAnswer: 0,
      explanation: '$x(2) = x(0) + \\int_0^2 (6t^2 - 4t)\\,dt = 3 + [2t^3 - 2t^2]_0^2 = 3 + (16 - 8) = 11$.'
    },
    {
      id: '1dkin4-techniques',
      type: 'text' as const,
      content: `## Integration Techniques in Kinematics

### Polynomial Velocity

If $v(t) = at^n$, then:

$$x(t) = \\frac{a}{n+1}t^{n+1} + C$$

### Trigonometric Velocity

If $v(t) = A\\cos(\\omega t)$:

$$x(t) = \\frac{A}{\\omega}\\sin(\\omega t) + C$$

### Exponential Velocity

If $v(t) = v_0 e^{-kt}$:

$$x(t) = -\\frac{v_0}{k}e^{-kt} + C$$

### Worked Example

A particle has $v(t) = 12\\sin(3t)$ m/s and $x(0) = 0$.

$$x(t) = \\int 12\\sin(3t)\\,dt = -4\\cos(3t) + C$$

From $x(0) = 0$: $0 = -4\\cos(0) + C = -4 + C \\implies C = 4$.

$$x(t) = 4 - 4\\cos(3t) = 4[1 - \\cos(3t)]$$`
    },
    {
      id: '1dkin4-mcq2',
      type: 'mcq' as const,
      question: 'A particle has velocity $v(t) = 5e^{-2t}$ m/s with $x(0) = 0$. What is $x(t)$ as $t \\to \\infty$?',
      options: ['$2.5$ m', '$5$ m', '$\\infty$', '$0$ m'],
      correctAnswer: 0,
      explanation: '$x(t) = \\int_0^t 5e^{-2t\'}dt\' = [-\\frac{5}{2}e^{-2t\'}]_0^t = \\frac{5}{2}(1-e^{-2t})$. As $t \\to \\infty$, $e^{-2t} \\to 0$, so $x \\to 5/2 = 2.5$ m.'
    },
    {
      id: '1dkin4-distance',
      type: 'text' as const,
      content: `## Computing Total Distance Traveled

When $v(t)$ changes sign, you must split the integral at the zeros.

### Example

$v(t) = t^2 - 4$ for $0 \\le t \\le 3$.

**Step 1:** Find where $v = 0$: $t^2 = 4 \\implies t = 2$.

**Step 2:** Check signs:
- $0 \\le t < 2$: $v < 0$ (moving left)
- $2 < t \\le 3$: $v > 0$ (moving right)

**Step 3:** Compute:

$$\\text{Displacement} = \\int_0^3 (t^2-4)\\,dt = \\left[\\frac{t^3}{3} - 4t\\right]_0^3 = (9-12) = -3$$

$$\\text{Distance} = \\int_0^2 |t^2-4|\\,dt + \\int_2^3 (t^2-4)\\,dt$$

$$= \\int_0^2 (4-t^2)\\,dt + \\int_2^3 (t^2-4)\\,dt$$

$$= \\left[4t - \\frac{t^3}{3}\\right]_0^2 + \\left[\\frac{t^3}{3} - 4t\\right]_2^3$$

$$= \\left(8 - \\frac{8}{3}\\right) + \\left(-3 - (-\\frac{16}{3})\\right) = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$$`
    },
    {
      id: '1dkin4-mcq3',
      type: 'mcq' as const,
      question: 'A particle moves with $v(t) = 3t - 6$ for $0 \\le t \\le 4$. The total distance traveled is:',
      options: ['$10$', '$4$', '$8$', '$12$'],
      correctAnswer: 0,
      explanation: '$v = 0$ at $t = 2$. Distance $= \\int_0^2 |3t-6|\\,dt + \\int_2^4 (3t-6)\\,dt = \\int_0^2 (6-3t)\\,dt + \\int_2^4 (3t-6)\\,dt = [6t - \\frac{3t^2}{2}]_0^2 + [\\frac{3t^2}{2} - 6t]_2^4 = 6 + 4 = 10$.'
    },
    {
      id: '1dkin4-definite',
      type: 'text' as const,
      content: `## Using Definite Integrals from Data

On the AP exam, you may need to compute $\\int v\\,dt$ from a table or graph.

### From a Table

| $t$ (s) | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $v$ (m/s) | $2$ | $5$ | $6$ | $4$ | $1$ |

Using the **trapezoidal rule**:

$$\\int_0^4 v\\,dt \\approx \\frac{1}{2}\\sum_{i} (v_i + v_{i+1})\\Delta t$$

$$= \\frac{1}{2}[(2+5) + (5+6) + (6+4) + (4+1)](1) = \\frac{1}{2}(33) = 16.5 \\text{ m}$$

This gives an approximation of the displacement over the interval.`
    },
    {
      id: '1dkin4-mcq4',
      type: 'mcq' as const,
      question: 'Given the velocity function $v(t) = \\cos(\\pi t)$ for $0 \\le t \\le 1$, the displacement is:',
      options: ['$0$', '$1/\\pi$', '$2/\\pi$', '$1$'],
      correctAnswer: 0,
      explanation: '$\\int_0^1 \\cos(\\pi t)\\,dt = \\frac{1}{\\pi}[\\sin(\\pi t)]_0^1 = \\frac{1}{\\pi}(\\sin\\pi - \\sin 0) = 0$. The particle moves forward then backward symmetrically.'
    }
  ]
};
