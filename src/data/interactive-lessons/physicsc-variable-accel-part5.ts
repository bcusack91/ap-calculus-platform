export const physCVarAccelPart5Data = {
  topicSlug: 'variable-acceleration-physics-c',
  sections: [
    {
      id: 'varaccel5-intro',
      type: 'text' as const,
      content: `# Variable Acceleration — a(x) and the Energy Method

**Part 5 of 7**

When acceleration depends on **position** — $a = a(x)$ — we use the chain rule identity:

$$a = \\frac{dv}{dt} = \\frac{dv}{dx} \\cdot \\frac{dx}{dt} = v\\frac{dv}{dx}$$

### The Energy Method Identity

$$a(x) = v\\frac{dv}{dx}$$

Separating variables:

$$a(x)\\,dx = v\\,dv$$

Integrating:

$$\\int_{x_0}^{x} a(x')\\,dx' = \\int_{v_0}^{v} v'\\,dv' = \\frac{v^2 - v_0^2}{2}$$

$$\\boxed{v^2 = v_0^2 + 2\\int_{x_0}^{x} a(x')\\,dx'}$$

This is the **generalization** of $v^2 = v_0^2 + 2a\\Delta x$ for variable acceleration!`
    },
    {
      id: 'varaccel5-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $a(x) = -4x$ with $v = 6$ m/s at $x = 0$. What is the speed at $x = 3$?',
      options: ['$0$ m/s', '$\\sqrt{18}$ m/s', '$6$ m/s', '$3$ m/s'],
      correctAnswer: 0,
      explanation: '$v^2 = 36 + 2\\int_0^3 (-4x)\\,dx = 36 + 2[-2x^2]_0^3 = 36 - 36 = 0$. The particle stops at $x = 3$.'
    },
    {
      id: 'varaccel5-spring',
      type: 'text' as const,
      content: `## Application: Spring-Mass System

A mass on a spring has restoring force $F = -kx$, giving:

$$a(x) = -\\frac{k}{m}x = -\\omega^2 x$$

where $\\omega = \\sqrt{k/m}$.

### Using the Energy Method

Starting from rest at $x = A$ (amplitude):

$$v^2 = 0 + 2\\int_A^x (-\\omega^2 x')\\,dx' = -\\omega^2(x^2 - A^2) = \\omega^2(A^2 - x^2)$$

$$v = \\omega\\sqrt{A^2 - x^2}$$

### Key Results

| Position | Speed |
|:---:|:---:|
| $x = 0$ (equilibrium) | $v_{\\max} = \\omega A$ |
| $x = \\pm A$ (endpoints) | $v = 0$ |
| $x = A/2$ | $v = \\omega A\\sqrt{3}/2$ |

### Connection to Energy

$$\\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2$$

The energy method is literally the **work-energy theorem**!`
    },
    {
      id: 'varaccel5-mcq2',
      type: 'mcq' as const,
      question: 'A block on a spring ($k = 200$ N/m, $m = 2$ kg) oscillates with amplitude $A = 0.5$ m. The maximum speed is:',
      options: ['$5$ m/s', '$10$ m/s', '$50$ m/s', '$\\sqrt{50}$ m/s'],
      correctAnswer: 0,
      explanation: '$\\omega = \\sqrt{k/m} = \\sqrt{100} = 10$ rad/s. $v_{\\max} = \\omega A = 10(0.5) = 5$ m/s.'
    },
    {
      id: 'varaccel5-gravity',
      type: 'text' as const,
      content: `## Application: Gravity with Varying Distance

Newton's law of gravitation: $a(r) = -\\frac{GM}{r^2}$ (toward center, so negative for outward $r$).

### Escape Velocity

Starting at the surface ($r = R$) with speed $v_0$, how fast must we go to escape ($r \\to \\infty$, $v \\to 0$)?

$$v^2 = v_0^2 + 2\\int_R^{\\infty} \\left(-\\frac{GM}{r^2}\\right)dr = v_0^2 + 2\\left[\\frac{GM}{r}\\right]_R^{\\infty} = v_0^2 - \\frac{2GM}{R}$$

For escape: set $v \\to 0$ as $r \\to \\infty$:

$$0 = v_0^2 - \\frac{2GM}{R} \\implies v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$$

For Earth: $v_{\\text{esc}} = \\sqrt{2gR} \\approx 11.2$ km/s.

### The Power of the Energy Method

This problem would be extremely difficult to solve by integrating $a(t)$ directly, since $a$ depends on $x$, which depends on $t$ in a complicated way. The $v\\,dv = a\\,dx$ approach bypasses time entirely!`
    },
    {
      id: 'varaccel5-mcq3',
      type: 'mcq' as const,
      question: 'A particle has $a(x) = 3x^2$ with $v(0) = 0$. What is the speed at $x = 2$?',
      options: ['$4$ m/s', '$2\\sqrt{2}$ m/s', '$8$ m/s', '$\\sqrt{8}$ m/s'],
      correctAnswer: 0,
      explanation: '$v^2 = 0 + 2\\int_0^2 3x^2\\,dx = 2[x^3]_0^2 = 2(8) = 16$. So $v = 4$ m/s.'
    },
    {
      id: 'varaccel5-turning',
      type: 'text' as const,
      content: `## Turning Points and Bounded Motion

From $v^2 = v_0^2 + 2\\int_{x_0}^x a(x')\\,dx'$, a **turning point** occurs where $v = 0$:

$$v_0^2 + 2\\int_{x_0}^{x_{\\text{turn}}} a(x')\\,dx' = 0$$

### Example: Potential Well

$a(x) = -8x + 2x^3$, with $v = 0$ at $x = 0$.

$$v^2 = 2\\int_0^x (-8x' + 2x'^3)\\,dx' = 2\\left[-4x^2 + \\frac{x^4}{2}\\right] = -8x^2 + x^4$$

Turning points: $v = 0$ when $x^4 - 8x^2 = 0 \\implies x^2(x^2-8) = 0$

So $x = 0$ (start) or $x = \\pm 2\\sqrt{2}$.

But we need $v^2 \\ge 0$: $x^4 - 8x^2 \\ge 0 \\implies x^2 \\ge 8$.

This means the particle stays at $x = 0$ (it's a **turning point** where motion reverses... but actually $v^2 < 0$ for small displacements from $x = 0$). This indicates $x = 0$ is an **unstable equilibrium**.`
    },
    {
      id: 'varaccel5-mcq4',
      type: 'mcq' as const,
      question: 'The identity $a = v\\,dv/dx$ is equivalent to which physics principle?',
      options: [
        'The work-energy theorem',
        'Conservation of momentum',
        'Newton\'s third law',
        'The impulse-momentum theorem'
      ],
      correctAnswer: 0,
      explanation: 'Multiplying both sides of $a\\,dx = v\\,dv$ by $m$: $ma\\,dx = mv\\,dv$, i.e., $F\\,dx = d(\\frac{1}{2}mv^2)$. This is the work-energy theorem: work done = change in kinetic energy.'
    }
  ]
};
