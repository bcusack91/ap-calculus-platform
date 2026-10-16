export const physCVarAccelPart6Data = {
  topicSlug: 'variable-acceleration-physics-c',
  sections: [
    {
      id: 'varaccel6-intro',
      type: 'text' as const,
      content: `# Variable Acceleration — Problem-Solving Workshop

**Part 6 of 7**

This workshop brings together all the variable-acceleration techniques. The key is recognizing **which variable the acceleration depends on** to choose the right method.

### Method Selection Guide

| $a$ depends on... | Method | Key Equation |
|:---|:---|:---:|
| $t$ only | Direct integration | $v = v_0 + \\int a(t)\\,dt$ |
| $v$ only | Separation of variables | $\\frac{dv}{a(v)} = dt$ |
| $x$ only | Energy method | $v\\,dv = a(x)\\,dx$ |`
    },
    {
      id: 'varaccel6-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $a = -0.50v$ (SI units) with $v(0) = 8.0$ m/s. What is $v$ at $t = 2.0$ s?',
      options: ['$2.9$ m/s', '$4.0$ m/s', '$0$ m/s', '$0.37$ m/s'],
      correctAnswer: 0,
      explanation: 'Separating variables gives $v = v_0 e^{-bt}$ with $b = 0.50$ s$^{-1}$, so $v = 8.0e^{-(0.50)(2.0)} = 8.0e^{-1} \\approx 2.9$ m/s. Treating the initial acceleration $-4.0$ m/s² as constant gives $0$, $0.37$ m/s leaves out $v_0$, and $4.0$ m/s assumes the speed halves in one time constant.'
    },
    {
      id: 'varaccel6-prob1',
      type: 'text' as const,
      content: `## Worked Problem 1: Constant Force with Linear Drag

A boat's engine pushes with a constant force $F_0$, and the water exerts a resistive force $-bv$. The boat's mass $m$ is constant and it starts from rest. Find $v(t)$.

$$ma = F_0 - bv \\implies \\frac{dv}{dt} = \\frac{F_0}{m} - \\frac{b}{m}v$$

Let $\\alpha = F_0/m$ and $\\beta = b/m$:

$$\\frac{dv}{dt} = \\alpha - \\beta v$$

Separate: $\\frac{dv}{\\alpha - \\beta v} = dt$

$$-\\frac{1}{\\beta}\\ln|\\alpha - \\beta v| = t + C$$

With $v(0) = 0$: $C = -\\frac{1}{\\beta}\\ln\\alpha$.

$$-\\frac{1}{\\beta}\\ln\\frac{\\alpha - \\beta v}{\\alpha} = t$$

$$v(t) = \\frac{\\alpha}{\\beta}(1 - e^{-\\beta t}) = \\frac{F_0}{b}(1 - e^{-bt/m})$$

**Terminal velocity:** $v_T = F_0/b$ (when the engine force balances the drag).

**Time constant:** $\\tau = m/b$ (time to reach $\\approx 63\\%$ of $v_T$).`
    },
    {
      id: 'varaccel6-mcq2',
      type: 'mcq' as const,
      question: 'In the boat problem, what fraction of terminal velocity is reached after $2$ time constants?',
      options: [
        '$1 - e^{-2} \\approx 86\\%$',
        '$1 - e^{-1} \\approx 63\\%$',
        '$50\\%$',
        '$1 - e^{-3} \\approx 95\\%$'
      ],
      correctAnswer: 0,
      explanation: '$v(2\\tau) = v_T(1 - e^{-2}) \\approx 0.865\\,v_T$, or about $86\\%$ of terminal velocity.'
    },
    {
      id: 'varaccel6-prob2',
      type: 'text' as const,
      content: `## Worked Problem 2: Position-Dependent Force

A bead slides along a wire with acceleration $a(x) = 6 - 2x$. The bead starts from rest at $x = 0$. Find where it reaches maximum speed.

### Solution Using the Energy Method

Max speed occurs where $a = 0$ (acceleration changes from positive to negative):

$$6 - 2x = 0 \\implies x = 3$$

Verify: for $x < 3$, $a > 0$ (speeding up); for $x > 3$, $a < 0$ (slowing down).

### Finding Maximum Speed

$$v^2 = 2\\int_0^3 (6 - 2x)\\,dx = 2[6x - x^2]_0^3 = 2(18 - 9) = 18$$

$$v_{\\max} = \\sqrt{18} = 3\\sqrt{2} \\approx 4.24 \\text{ m/s}$$

### Finding Turning Point

The bead stops when $v = 0$ again:

$$0 = 2\\int_0^x (6-2x')\\,dx' = 2(6x - x^2) \\implies x(6-x) = 0$$

So $x = 6$ (the other root is the starting point $x = 0$).`
    },
    {
      id: 'varaccel6-mcq3',
      type: 'mcq' as const,
      question: 'A block on a surface has friction force $f = -\\mu_k m g \\text{sign}(v)$ and spring force $F = -kx$. What makes solving for $x(t)$ particularly challenging?',
      options: [
        'Friction reverses direction at each turning point',
        'The friction force grows with the block\'s speed',
        'The normal force changes as the spring stretches',
        'The spring constant shrinks as the block slows'
      ],
      correctAnswer: 0,
      explanation: 'Kinetic friction always opposes the velocity direction. When the block oscillates, $\\text{sign}(v)$ reverses at each turning point, changing the effective equation of motion. You must re-solve the ODE for each half-cycle with new initial conditions.'
    },
    {
      id: 'varaccel6-dimensional',
      type: 'text' as const,
      content: `## Dimensional Analysis Check

Variable acceleration problems are prone to algebra errors. Use **dimensional analysis** as a sanity check.

### Rules

- $[a] = $ $m/s^{2}$
- $[v] = $ m/s
- $[x] = $ m
- $[t] = $ s

### Example Checks

For $a = -bv$ (linear drag):
- $[b] = [a/v] = (\\text{m/s}^2)/(\\text{m/s}) = 1/\\text{s}$ ✓
- $v = v_0 e^{-bt}$: $[bt] = (1/\\text{s})(\\text{s}) = $ dimensionless ✓

For a constant force $F_0$ with drag $-bv$:
- $[b] = [F/v] = (\\text{kg}\\cdot\\text{m/s}^2)/(\\text{m/s}) = \\text{kg/s}$
- $v_T = F_0/b$: $(\\text{kg}\\cdot\\text{m/s}^2)/(\\text{kg/s}) = \\text{m/s}$ ✓
- $e^{-bt/m}$: $[bt/m] = (\\text{kg/s})(\\text{s})/\\text{kg} = $ dimensionless ✓

### Common Dimensional Errors

- Exponent not dimensionless → wrong formula
- Answer units don't match what's asked → algebra error
- Time constant has wrong dimensions → check coefficients`
    },
    {
      id: 'varaccel6-mcq4',
      type: 'mcq' as const,
      question: 'A $1.5$ kg object is released from rest and falls with a drag force $-kv$, where $k = 0.30$ kg/s. What is its speed $10$ s after release? (Use $g = 10$ m/s$^2$.)',
      options: [
        '$43$ m/s',
        '$50$ m/s',
        '$32$ m/s',
        '$6.8$ m/s'
      ],
      correctAnswer: 0,
      explanation: 'Terminal speed is $v_T = mg/k = 15/0.30 = 50$ m/s and the time constant is $m/k = 5.0$ s, so $10$ s is two time constants: $v = 50(1 - e^{-2}) \\approx 43$ m/s. $32$ m/s is the speed after one time constant, $6.8$ m/s is $50e^{-2}$ (the speed still missing, not the speed reached), and $50$ m/s is only approached as $t \\to \\infty$.'
    }
  ]
};
