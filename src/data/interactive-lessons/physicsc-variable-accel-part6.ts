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
| $x$ only | Energy method | $v\\,dv = a(x)\\,dx$ |
| $t$ and $v$ | Separation + integrating factor | Case-by-case |
| $v$ and $x$ | $v\\,dv/dx = a(v,x)$ | Often separable |`
    },
    {
      id: 'varaccel6-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $a = 5\\sqrt{v}$ with $v(0) = 4$ m/s. What is $v$ at $t = 2$ s?',
      options: ['$49$ m/s', '$36$ m/s', '$25$ m/s', '$16$ m/s'],
      correctAnswer: 0,
      explanation: '$dv/dt = 5\\sqrt{v} \\implies v^{-1/2}dv = 5\\,dt \\implies 2\\sqrt{v} = 5t + C$. At $t = 0$: $2(2) = C \\implies C = 4$. So $2\\sqrt{v} = 5t + 4$. At $t = 2$: $2\\sqrt{v} = 14 \\implies \\sqrt{v} = 7 \\implies v = 49$ m/s.'
    },
    {
      id: 'varaccel6-prob1',
      type: 'text' as const,
      content: `## Worked Problem 1: Rocket with Drag

A rocket in space has thrust $F = F_0$ and experiences drag $F_d = -bv$. Its mass $m$ is constant. Find $v(t)$.

$$ma = F_0 - bv \\implies \\frac{dv}{dt} = \\frac{F_0}{m} - \\frac{b}{m}v$$

Let $\\alpha = F_0/m$ and $\\beta = b/m$:

$$\\frac{dv}{dt} = \\alpha - \\beta v$$

Separate: $\\frac{dv}{\\alpha - \\beta v} = dt$

$$-\\frac{1}{\\beta}\\ln|\\alpha - \\beta v| = t + C$$

With $v(0) = 0$: $C = -\\frac{1}{\\beta}\\ln\\alpha$.

$$-\\frac{1}{\\beta}\\ln\\frac{\\alpha - \\beta v}{\\alpha} = t$$

$$v(t) = \\frac{\\alpha}{\\beta}(1 - e^{-\\beta t}) = \\frac{F_0}{b}(1 - e^{-bt/m})$$

**Terminal velocity:** $v_T = F_0/b$ (when thrust balances drag).

**Time constant:** $\\tau = m/b$ (time to reach $\\approx 63\\%$ of $v_T$).`
    },
    {
      id: 'varaccel6-mcq2',
      type: 'mcq' as const,
      question: 'In the rocket-drag problem, what fraction of terminal velocity is reached after $2$ time constants?',
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
        'The friction force direction changes at each turning point',
        'The spring force is nonlinear',
        'The mass changes with time',
        'Gravity is variable'
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

For $a = -cv^2$ (quadratic drag):
- $[c] = [a/v^2] = 1/\\text{m}$ 
- $v = v_0/(1 + cv_0 t)$: $[cv_0 t] = (1/\\text{m})(\\text{m/s})(\\text{s}) = $ dimensionless ✓

### Common Dimensional Errors

- Exponent not dimensionless → wrong formula
- Answer units don't match what's asked → algebra error
- Time constant has wrong dimensions → check coefficients`
    },
    {
      id: 'varaccel6-mcq4',
      type: 'mcq' as const,
      question: 'An object with $a = -v^3$ and $v(0) = v_0$ has velocity $v(t) = ?$. (Use separation of variables.)',
      options: [
        '$v_0/\\sqrt{1 + 2v_0^2 t}$',
        '$v_0 e^{-t}$',
        '$v_0/(1+v_0 t)$',
        '$v_0(1 - v_0^2 t)$'
      ],
      correctAnswer: 0,
      explanation: '$dv/v^3 = -dt \\implies -1/(2v^2) = -t + C$. At $t = 0$: $C = -1/(2v_0^2)$. So $1/(2v^2) = t + 1/(2v_0^2)$, giving $v^2 = v_0^2/(1 + 2v_0^2 t)$, hence $v = v_0/\\sqrt{1 + 2v_0^2 t}$.'
    }
  ]
};
